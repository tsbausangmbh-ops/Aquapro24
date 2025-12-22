import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";
import { Checkbox } from "@/components/ui/checkbox";
import { Slider } from "@/components/ui/slider";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import heroImage from "@assets/stock_images/heat_pump_installati_53374252.jpg";
import { 
  Calculator,
  Phone, 
  CheckCircle2, 
  Calendar,
  Euro,
  Home,
  Flame,
  Leaf,
  ArrowRight,
  Info,
  Building2,
  Users,
  FileText,
  Percent,
  CreditCard,
  Wind,
  Thermometer,
  Bath,
  Accessibility,
  ShowerHead
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderrechnerPage() {
  const [selectedMassnahmen, setSelectedMassnahmen] = useState<string[]>(["waermepumpe"]);
  const [gebaeudeAlter, setGebaeudeAlter] = useState("vor2024");
  const [einkommen, setEinkommen] = useState("ueber40000");
  const [investition, setInvestition] = useState([25000]);
  
  const [kfwMassnahme, setKfwMassnahme] = useState("heizung");
  const [kfwInvestition, setKfwInvestition] = useState([50000]);
  const [kfwEffizienz, setKfwEffizienz] = useState("einzeln");
  
  const [energieberaterTyp, setEnergieberaterTyp] = useState("isfp");
  const [wohnflaeche, setWohnflaeche] = useState([150]);
  const [gebaeudeTyp, setGebaeudeTyp] = useState("einfamilienhaus");
  
  const [badMassnahmen, setBadMassnahmen] = useState<string[]>(["bodengleich"]);
  const [badInvestition, setBadInvestition] = useState([15000]);
  const [altersgerecht, setAltersgerecht] = useState("ja");

  const toggleBadMassnahme = (massnahme: string) => {
    setBadMassnahmen(prev => 
      prev.includes(massnahme) 
        ? prev.filter(m => m !== massnahme)
        : [...prev, massnahme]
    );
  };

  const toggleMassnahme = (massnahme: string) => {
    setSelectedMassnahmen(prev => 
      prev.includes(massnahme) 
        ? prev.filter(m => m !== massnahme)
        : [...prev, massnahme]
    );
  };

  const berechneBAFA = () => {
    let hauptfoerderung = 0;
    let klimabonus = 0;
    let einkommensbonus = 0;
    let effizienzbonus = 0;
    let optimierungFoerderung = 0;
    
    const hauptwaermeerzeuger = ["waermepumpe", "pellet", "brennstoffzelle", "fernwaerme", "solarthermie"];
    const optimierungen = ["fussbodenheizung", "lueftung"];
    
    const hatHauptwaermeerzeuger = selectedMassnahmen.some(m => hauptwaermeerzeuger.includes(m));
    const selectedOptimierungen = selectedMassnahmen.filter(m => optimierungen.includes(m));

    if (selectedMassnahmen.includes("waermepumpe")) {
      hauptfoerderung = 30;
      effizienzbonus = 5;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (selectedMassnahmen.includes("pellet")) {
      hauptfoerderung = 30;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (selectedMassnahmen.includes("brennstoffzelle")) {
      hauptfoerderung = 30;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (selectedMassnahmen.includes("fernwaerme")) {
      hauptfoerderung = 30;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (selectedMassnahmen.includes("solarthermie")) {
      hauptfoerderung = 25;
    }

    if (hatHauptwaermeerzeuger && selectedOptimierungen.length > 0) {
      optimierungFoerderung = selectedOptimierungen.length * 20;
    } else if (!hatHauptwaermeerzeuger) {
      if (selectedMassnahmen.includes("fussbodenheizung")) {
        hauptfoerderung = 20;
      }
      if (selectedMassnahmen.includes("lueftung")) {
        hauptfoerderung = Math.max(hauptfoerderung, 20);
      }
    }

    if (einkommen === "unter40000") {
      einkommensbonus = 30;
    }

    const hauptProzent = Math.min(hauptfoerderung + klimabonus + einkommensbonus + effizienzbonus, 70);
    const maxFoerderbar = Math.min(investition[0], 30000);
    const hauptBetrag = Math.round(maxFoerderbar * (hauptProzent / 100));
    
    const optimierungBetrag = hatHauptwaermeerzeuger 
      ? Math.round(Math.min(investition[0] * 0.3, 10000) * (optimierungFoerderung / 100))
      : 0;
    
    const gesamtBetrag = hauptBetrag + optimierungBetrag;

    return {
      grundfoerderung: hauptfoerderung,
      klimabonus,
      einkommensbonus,
      effizienzbonus,
      optimierungFoerderung,
      gesamtProzent: hauptProzent,
      foerderBetrag: gesamtBetrag,
      eigenanteil: investition[0] - gesamtBetrag,
      hatOptimierungen: hatHauptwaermeerzeuger && selectedOptimierungen.length > 0
    };
  };

  const berechneKfW = () => {
    let maxKredit = 0;
    let tilgungszuschuss = 0;
    let zinssatz = 0;

    if (kfwEffizienz === "effizienzhaus") {
      maxKredit = 150000;
      tilgungszuschuss = 25;
      zinssatz = 0.01;
    } else if (kfwEffizienz === "einzeln") {
      maxKredit = 120000;
      tilgungszuschuss = 20;
      zinssatz = 1.5;
    }

    if (kfwMassnahme === "komplett") {
      maxKredit = 150000;
      tilgungszuschuss = 45;
    } else if (kfwMassnahme === "heizung") {
      maxKredit = 120000;
      tilgungszuschuss = 20;
    } else if (kfwMassnahme === "daemmung") {
      maxKredit = 60000;
      tilgungszuschuss = 15;
    }

    const kreditBetrag = Math.min(kfwInvestition[0], maxKredit);
    const zuschussBetrag = Math.round(kreditBetrag * (tilgungszuschuss / 100));
    const rueckzahlung = kreditBetrag - zuschussBetrag;

    return {
      maxKredit,
      tilgungszuschuss,
      zinssatz,
      kreditBetrag,
      zuschussBetrag,
      rueckzahlung
    };
  };

  const berechneEnergieberater = () => {
    let grundkosten = 0;
    let foerderungProzent = 0;
    let maxFoerderung = 0;

    if (energieberaterTyp === "isfp") {
      if (gebaeudeTyp === "einfamilienhaus") {
        grundkosten = 1300 + (wohnflaeche[0] > 200 ? 300 : 0);
        foerderungProzent = 80;
        maxFoerderung = 1300;
      } else {
        grundkosten = 1700 + (wohnflaeche[0] > 300 ? 500 : 0);
        foerderungProzent = 80;
        maxFoerderung = 1700;
      }
    } else if (energieberaterTyp === "baubegleitung") {
      grundkosten = Math.round(wohnflaeche[0] * 8);
      foerderungProzent = 50;
      maxFoerderung = 5000;
    } else if (energieberaterTyp === "beratung") {
      grundkosten = 500;
      foerderungProzent = 80;
      maxFoerderung = 500;
    }

    const foerderBetrag = Math.min(Math.round(grundkosten * (foerderungProzent / 100)), maxFoerderung);
    const eigenanteil = grundkosten - foerderBetrag;

    return {
      grundkosten,
      foerderungProzent,
      maxFoerderung,
      foerderBetrag,
      eigenanteil
    };
  };

  const berechneBarrierefreiesBad = () => {
    const maxFoerderung = 6250;
    const foerderProzent = 12.5;
    
    let massnahmenDetails: { name: string; kosten: number }[] = [];
    
    if (badMassnahmen.includes("bodengleich")) {
      massnahmenDetails.push({ name: "Bodengleiche Dusche", kosten: 4500 });
    }
    if (badMassnahmen.includes("haltegriffe")) {
      massnahmenDetails.push({ name: "Haltegriffe & Stützklappgriffe", kosten: 800 });
    }
    if (badMassnahmen.includes("wc")) {
      massnahmenDetails.push({ name: "Höhenverstellbares WC", kosten: 1500 });
    }
    if (badMassnahmen.includes("waschtisch")) {
      massnahmenDetails.push({ name: "Unterfahrbarer Waschtisch", kosten: 1200 });
    }
    if (badMassnahmen.includes("tuerverbreiterung")) {
      massnahmenDetails.push({ name: "Türverbreiterung", kosten: 1800 });
    }
    if (badMassnahmen.includes("rutschfest")) {
      massnahmenDetails.push({ name: "Rutschfeste Fliesen", kosten: 2000 });
    }

    const investitionswert = badInvestition[0];
    const foerderBetrag = Math.min(Math.round(investitionswert * (foerderProzent / 100)), maxFoerderung);
    const eigenanteil = investitionswert - foerderBetrag;

    return {
      massnahmenDetails,
      investition: investitionswert,
      foerderProzent,
      maxFoerderung,
      foerderBetrag,
      eigenanteil,
      anzahlMassnahmen: badMassnahmen.length
    };
  };

  const bafaErgebnis = berechneBAFA();
  const kfwErgebnis = berechneKfW();
  const energieberaterErgebnis = berechneEnergieberater();
  const badErgebnis = berechneBarrierefreiesBad();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderrechner München | Heizung Förderung berechnen"
        description="Förderrechner München: BAFA & KfW Förderung für Heizung & Sanierung einfach berechnen – kostenlos & unverbindlich."
        canonical="https://aquapro24.de/foerderrechner"
        keywords="Förderrechner München, BAFA Förderung berechnen, KfW Förderrechner, Energieberater Förderung, Heizungsförderung Rechner, Wärmepumpe Förderung, iSFP Förderung, Tilgungszuschuss berechnen, BEG Förderung Rechner, Sanierungsförderung München"
        aiSummary="AquaPro 24 Förderrechner München: BAFA Heizungsförderung bis 70%, KfW Kredit mit Tilgungszuschuss, Energieberater 80% gefördert. Alle Programme im Vergleich. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" },
          { name: "Förderrechner", url: "https://aquapro24.de/foerderrechner" }
        ]}
        faqSchema={[
          {
            question: "Was ist der Unterschied zwischen BAFA und KfW?",
            answer: "BAFA bietet direkte Zuschüsse für Heizungstausch (bis 70%). KfW bietet zinsgünstige Kredite mit Tilgungszuschuss für umfassende Sanierungen."
          },
          {
            question: "Wird der Energieberater gefördert?",
            answer: "Ja, Energieberatung wird mit bis zu 80% gefördert. Ein iSFP (individueller Sanierungsfahrplan) kostet Sie oft nur 250-350 EUR Eigenanteil."
          }
        ]}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-green-500 text-white">
                <Calculator className="w-3 h-3 mr-1" />
                Förderrechner 2025
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Förderrechner München: BAFA, KfW & Energieberater berechnen
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Förderung berechnen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Kredit Rechner</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Energieberater Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">iSFP Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Tilgungszuschuss</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsförderung 70%</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BEG Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanierungsförderung</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Alle Förderprogramme im Überblick: BAFA-Zuschuss, KfW-Kredit und Energieberater. 
                Berechnen Sie Ihre individuelle Förderung für jedes Programm.
              </p>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-4 md:py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Tabs defaultValue="bafa" className="w-full">
              <TabsList className="grid w-full grid-cols-2 md:grid-cols-4 mb-8">
                <TabsTrigger value="bafa" className="flex items-center gap-2" data-testid="tab-bafa">
                  <Leaf className="w-4 h-4" />
                  <span className="hidden sm:inline">BAFA Förderung</span>
                  <span className="sm:hidden">BAFA</span>
                </TabsTrigger>
                <TabsTrigger value="kfw" className="flex items-center gap-2" data-testid="tab-kfw">
                  <Building2 className="w-4 h-4" />
                  <span className="hidden sm:inline">KfW Kredit</span>
                  <span className="sm:hidden">KfW</span>
                </TabsTrigger>
                <TabsTrigger value="barrierefrei" className="flex items-center gap-2" data-testid="tab-barrierefrei">
                  <Accessibility className="w-4 h-4" />
                  <span className="hidden sm:inline">Barrierefreies Bad</span>
                  <span className="sm:hidden">Bad</span>
                </TabsTrigger>
                <TabsTrigger value="energieberater" className="flex items-center gap-2" data-testid="tab-energieberater">
                  <Users className="w-4 h-4" />
                  <span className="hidden sm:inline">Energieberater</span>
                  <span className="sm:hidden">Berater</span>
                </TabsTrigger>
              </TabsList>

              <TabsContent value="bafa">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Leaf className="w-5 h-5 text-green-600" />
                        BAFA Rechner München: Heizungsförderung berechnen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Welche Maßnahmen planen Sie? (Mehrfachauswahl möglich)
                        </Label>
                        <p className="text-xs text-muted-foreground mb-3">
                          Wählen Sie einen Hauptwärmeerzeuger und optional Optimierungsmaßnahmen
                        </p>
                        <div className="space-y-2">
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider pt-2">Hauptwärmeerzeuger</p>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("waermepumpe") ? "bg-green-500/10 border-green-500/50" : ""}`}
                            onClick={() => toggleMassnahme("waermepumpe")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("waermepumpe")} 
                              id="waermepumpe" 
                              data-testid="checkbox-waermepumpe"
                              onCheckedChange={() => toggleMassnahme("waermepumpe")}
                            />
                            <Label htmlFor="waermepumpe" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Leaf className="w-4 h-4 text-green-500" />
                              Wärmepumpe (Luft, Erde, Wasser)
                            </Label>
                            <Badge variant="secondary" className="text-xs">bis 70%</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("pellet") ? "bg-orange-500/10 border-orange-500/50" : ""}`}
                            onClick={() => toggleMassnahme("pellet")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("pellet")} 
                              id="pellet" 
                              data-testid="checkbox-pellet"
                              onCheckedChange={() => toggleMassnahme("pellet")}
                            />
                            <Label htmlFor="pellet" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              Pelletheizung / Biomasse
                            </Label>
                            <Badge variant="secondary" className="text-xs">bis 70%</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("solarthermie") ? "bg-yellow-500/10 border-yellow-500/50" : ""}`}
                            onClick={() => toggleMassnahme("solarthermie")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("solarthermie")} 
                              id="solarthermie" 
                              data-testid="checkbox-solarthermie"
                              onCheckedChange={() => toggleMassnahme("solarthermie")}
                            />
                            <Label htmlFor="solarthermie" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Leaf className="w-4 h-4 text-yellow-500" />
                              Solarthermie
                            </Label>
                            <Badge variant="secondary" className="text-xs">bis 25%</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("brennstoffzelle") ? "bg-purple-500/10 border-purple-500/50" : ""}`}
                            onClick={() => toggleMassnahme("brennstoffzelle")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("brennstoffzelle")} 
                              id="brennstoffzelle" 
                              data-testid="checkbox-brennstoffzelle"
                              onCheckedChange={() => toggleMassnahme("brennstoffzelle")}
                            />
                            <Label htmlFor="brennstoffzelle" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Flame className="w-4 h-4 text-purple-500" />
                              Brennstoffzelle
                            </Label>
                            <Badge variant="secondary" className="text-xs">bis 70%</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("fernwaerme") ? "bg-blue-500/10 border-blue-500/50" : ""}`}
                            onClick={() => toggleMassnahme("fernwaerme")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("fernwaerme")} 
                              id="fernwaerme" 
                              data-testid="checkbox-fernwaerme"
                              onCheckedChange={() => toggleMassnahme("fernwaerme")}
                            />
                            <Label htmlFor="fernwaerme" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Home className="w-4 h-4 text-blue-500" />
                              Fernwärme-Anschluss
                            </Label>
                            <Badge variant="secondary" className="text-xs">bis 70%</Badge>
                          </div>
                          
                          <p className="text-xs font-medium text-muted-foreground uppercase tracking-wider pt-4">Optimierungsmaßnahmen</p>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("fussbodenheizung") ? "bg-red-500/10 border-red-500/50" : ""}`}
                            onClick={() => toggleMassnahme("fussbodenheizung")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("fussbodenheizung")} 
                              id="fussbodenheizung" 
                              data-testid="checkbox-fussbodenheizung"
                              onCheckedChange={() => toggleMassnahme("fussbodenheizung")}
                            />
                            <Label htmlFor="fussbodenheizung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Thermometer className="w-4 h-4 text-red-500" />
                              Fußbodenheizung
                            </Label>
                            <Badge variant="secondary" className="text-xs">20%</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${selectedMassnahmen.includes("lueftung") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleMassnahme("lueftung")}
                          >
                            <Checkbox 
                              checked={selectedMassnahmen.includes("lueftung")} 
                              id="lueftung" 
                              data-testid="checkbox-lueftung"
                              onCheckedChange={() => toggleMassnahme("lueftung")}
                            />
                            <Label htmlFor="lueftung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Wind className="w-4 h-4 text-cyan-500" />
                              Lüftungsanlage mit WRG
                            </Label>
                            <Badge variant="secondary" className="text-xs">20%</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Alte Heizung eingebaut vor 01.01.2024?
                        </Label>
                        <RadioGroup value={gebaeudeAlter} onValueChange={setGebaeudeAlter} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="vor2024" id="vor2024" data-testid="radio-vor2024" />
                            <Label htmlFor="vor2024" className="cursor-pointer flex-1">
                              Ja, Klimabonus +20%
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="nach2024" id="nach2024" data-testid="radio-nach2024" />
                            <Label htmlFor="nach2024" className="cursor-pointer flex-1">
                              Nein, ab 2024 eingebaut
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Haushaltseinkommen unter 40.000 EUR/Jahr?
                        </Label>
                        <RadioGroup value={einkommen} onValueChange={setEinkommen} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="unter40000" id="unter40000" data-testid="radio-unter40000" />
                            <Label htmlFor="unter40000" className="cursor-pointer flex-1">
                              Ja, Einkommensbonus +30%
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="ueber40000" id="ueber40000" data-testid="radio-ueber40000" />
                            <Label htmlFor="ueber40000" className="cursor-pointer flex-1">
                              Nein, über 40.000 EUR
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Investitionskosten: {investition[0].toLocaleString('de-DE')} EUR
                        </Label>
                        <Slider
                          value={investition}
                          onValueChange={setInvestition}
                          min={10000}
                          max={50000}
                          step={1000}
                          className="mt-2"
                          data-testid="slider-investition"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>10.000 EUR</span>
                          <span>50.000 EUR</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-green-500/5 border-green-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Euro className="w-5 h-5 text-green-600" />
                        BAFA Ergebnis München: Ihr Zuschuss
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center py-6 border-b">
                        <p className="text-sm text-muted-foreground mb-2">Ihr BAFA-Zuschuss</p>
                        <p className="text-5xl font-bold text-green-600" data-testid="text-bafa-betrag">
                          {bafaErgebnis.foerderBetrag.toLocaleString('de-DE')} EUR
                        </p>
                        <p className="text-lg text-muted-foreground mt-2">
                          = {bafaErgebnis.gesamtProzent}% der förderfähigen Kosten
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-green-500" />
                            Grundförderung
                          </span>
                          <Badge variant="secondary">{bafaErgebnis.grundfoerderung}%</Badge>
                        </div>
                        {bafaErgebnis.effizienzbonus > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Effizienzbonus (nat. Kältemittel)
                            </span>
                            <Badge variant="secondary">+{bafaErgebnis.effizienzbonus}%</Badge>
                          </div>
                        )}
                        {bafaErgebnis.klimabonus > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Klimageschwindigkeitsbonus
                            </span>
                            <Badge variant="secondary">+{bafaErgebnis.klimabonus}%</Badge>
                          </div>
                        )}
                        {bafaErgebnis.einkommensbonus > 0 && (
                          <div className="flex justify-between items-center">
                            <span className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-green-500" />
                              Einkommensbonus
                            </span>
                            <Badge variant="secondary">+{bafaErgebnis.einkommensbonus}%</Badge>
                          </div>
                        )}
                        {bafaErgebnis.hatOptimierungen && bafaErgebnis.optimierungFoerderung > 0 && (
                          <div className="flex justify-between items-center pt-2 border-t">
                            <span className="flex items-center gap-2">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                              Optimierungsmaßnahmen
                            </span>
                            <Badge variant="secondary" className="bg-cyan-500/20">+{bafaErgebnis.optimierungFoerderung}%</Badge>
                          </div>
                        )}
                      </div>

                      <div className="bg-background rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Investitionskosten:</span>
                          <span className="font-medium">{investition[0].toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between text-green-600">
                          <span>BAFA-Zuschuss:</span>
                          <span className="font-medium">- {bafaErgebnis.foerderBetrag.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Ihr Eigenanteil:</span>
                          <span data-testid="text-bafa-eigenanteil">{bafaErgebnis.eigenanteil.toLocaleString('de-DE')} EUR</span>
                        </div>
                      </div>

                      <Button size="lg" className="w-full" asChild>
                        <a href="tel:+4915212274043" data-testid="button-call-bafa">
                          <Phone className="w-4 h-4 mr-2" />
                          Jetzt BAFA-Antrag stellen
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="kfw">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Building2 className="w-5 h-5 text-blue-600" />
                        KfW Rechner München: Kredit & Tilgungszuschuss
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Welche Maßnahme planen Sie?
                        </Label>
                        <RadioGroup value={kfwMassnahme} onValueChange={setKfwMassnahme} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="komplett" id="komplett" data-testid="radio-komplett" />
                            <Label htmlFor="komplett" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Home className="w-4 h-4 text-blue-500" />
                              Komplettsanierung zum Effizienzhaus
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="heizung" id="kfw-heizung" data-testid="radio-kfw-heizung" />
                            <Label htmlFor="kfw-heizung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              Heizungstausch (Einzelmaßnahme)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="daemmung" id="daemmung" data-testid="radio-daemmung" />
                            <Label htmlFor="daemmung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Home className="w-4 h-4 text-green-500" />
                              Dämmung / Fenster
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Effizienzhaus-Standard angestrebt?
                        </Label>
                        <RadioGroup value={kfwEffizienz} onValueChange={setKfwEffizienz} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="effizienzhaus" id="effizienzhaus" data-testid="radio-effizienzhaus" />
                            <Label htmlFor="effizienzhaus" className="cursor-pointer flex-1">
                              Ja, Effizienzhaus 55/70/85
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="einzeln" id="einzeln" data-testid="radio-einzeln" />
                            <Label htmlFor="einzeln" className="cursor-pointer flex-1">
                              Nein, Einzelmaßnahmen
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Investitionskosten: {kfwInvestition[0].toLocaleString('de-DE')} EUR
                        </Label>
                        <Slider
                          value={kfwInvestition}
                          onValueChange={setKfwInvestition}
                          min={20000}
                          max={200000}
                          step={5000}
                          className="mt-2"
                          data-testid="slider-kfw-investition"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>20.000 EUR</span>
                          <span>200.000 EUR</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-blue-500/5 border-blue-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <CreditCard className="w-5 h-5 text-blue-600" />
                        KfW Ergebnis München: Ihre Konditionen
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center py-6 border-b">
                        <p className="text-sm text-muted-foreground mb-2">Ihr Tilgungszuschuss</p>
                        <p className="text-5xl font-bold text-blue-600" data-testid="text-kfw-zuschuss">
                          {kfwErgebnis.zuschussBetrag.toLocaleString('de-DE')} EUR
                        </p>
                        <p className="text-lg text-muted-foreground mt-2">
                          = {kfwErgebnis.tilgungszuschuss}% vom Kredit
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Max. Kreditbetrag:</span>
                          <Badge variant="secondary">{kfwErgebnis.maxKredit.toLocaleString('de-DE')} EUR</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Tilgungszuschuss:</span>
                          <Badge className="bg-blue-500 text-white">{kfwErgebnis.tilgungszuschuss}%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Zinssatz ab:</span>
                          <Badge variant="secondary">{kfwErgebnis.zinssatz}% eff.</Badge>
                        </div>
                      </div>

                      <div className="bg-background rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Kreditbetrag:</span>
                          <span className="font-medium">{kfwErgebnis.kreditBetrag.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between text-blue-600">
                          <span>Tilgungszuschuss:</span>
                          <span className="font-medium">- {kfwErgebnis.zuschussBetrag.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Tatsächliche Rückzahlung:</span>
                          <span data-testid="text-kfw-rueckzahlung">{kfwErgebnis.rueckzahlung.toLocaleString('de-DE')} EUR</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>
                          BAFA-Zuschuss und KfW-Kredit können nicht kombiniert werden. 
                          Wir beraten Sie, welches Programm für Sie günstiger ist.
                        </p>
                      </div>

                      <Button size="lg" className="w-full bg-blue-600 hover:bg-blue-700" asChild>
                        <a href="tel:+4915212274043" data-testid="button-call-kfw">
                          <Phone className="w-4 h-4 mr-2" />
                          KfW-Beratung anfordern
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="barrierefrei">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Accessibility className="w-5 h-5 text-cyan-600" />
                        Barrierefreies Bad München: KfW 455-B Rechner
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Welche Maßnahmen planen Sie? (Mehrfachauswahl)
                        </Label>
                        <p className="text-xs text-muted-foreground mb-3">
                          KfW fördert barrierefreie Umbaumaßnahmen mit 12,5% Zuschuss (max. 6.250 EUR)
                        </p>
                        <div className="space-y-2">
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${badMassnahmen.includes("bodengleich") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleBadMassnahme("bodengleich")}
                          >
                            <Checkbox 
                              checked={badMassnahmen.includes("bodengleich")} 
                              id="bodengleich" 
                              data-testid="checkbox-bodengleich"
                              onCheckedChange={() => toggleBadMassnahme("bodengleich")}
                            />
                            <Label htmlFor="bodengleich" className="flex items-center gap-2 cursor-pointer flex-1">
                              <ShowerHead className="w-4 h-4 text-cyan-500" />
                              Bodengleiche Dusche
                            </Label>
                            <Badge variant="secondary" className="text-xs">ca. 4.500€</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${badMassnahmen.includes("haltegriffe") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleBadMassnahme("haltegriffe")}
                          >
                            <Checkbox 
                              checked={badMassnahmen.includes("haltegriffe")} 
                              id="haltegriffe" 
                              data-testid="checkbox-haltegriffe"
                              onCheckedChange={() => toggleBadMassnahme("haltegriffe")}
                            />
                            <Label htmlFor="haltegriffe" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Accessibility className="w-4 h-4 text-cyan-500" />
                              Haltegriffe & Stützklappgriffe
                            </Label>
                            <Badge variant="secondary" className="text-xs">ca. 800€</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${badMassnahmen.includes("wc") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleBadMassnahme("wc")}
                          >
                            <Checkbox 
                              checked={badMassnahmen.includes("wc")} 
                              id="wc" 
                              data-testid="checkbox-wc"
                              onCheckedChange={() => toggleBadMassnahme("wc")}
                            />
                            <Label htmlFor="wc" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Bath className="w-4 h-4 text-cyan-500" />
                              Höhenverstellbares WC
                            </Label>
                            <Badge variant="secondary" className="text-xs">ca. 1.500€</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${badMassnahmen.includes("waschtisch") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleBadMassnahme("waschtisch")}
                          >
                            <Checkbox 
                              checked={badMassnahmen.includes("waschtisch")} 
                              id="waschtisch" 
                              data-testid="checkbox-waschtisch"
                              onCheckedChange={() => toggleBadMassnahme("waschtisch")}
                            />
                            <Label htmlFor="waschtisch" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Home className="w-4 h-4 text-cyan-500" />
                              Unterfahrbarer Waschtisch
                            </Label>
                            <Badge variant="secondary" className="text-xs">ca. 1.200€</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${badMassnahmen.includes("tuerverbreiterung") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleBadMassnahme("tuerverbreiterung")}
                          >
                            <Checkbox 
                              checked={badMassnahmen.includes("tuerverbreiterung")} 
                              id="tuerverbreiterung" 
                              data-testid="checkbox-tuerverbreiterung"
                              onCheckedChange={() => toggleBadMassnahme("tuerverbreiterung")}
                            />
                            <Label htmlFor="tuerverbreiterung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <ArrowRight className="w-4 h-4 text-cyan-500" />
                              Türverbreiterung (min. 80cm)
                            </Label>
                            <Badge variant="secondary" className="text-xs">ca. 1.800€</Badge>
                          </div>
                          <div 
                            className={`flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors cursor-pointer ${badMassnahmen.includes("rutschfest") ? "bg-cyan-500/10 border-cyan-500/50" : ""}`}
                            onClick={() => toggleBadMassnahme("rutschfest")}
                          >
                            <Checkbox 
                              checked={badMassnahmen.includes("rutschfest")} 
                              id="rutschfest" 
                              data-testid="checkbox-rutschfest"
                              onCheckedChange={() => toggleBadMassnahme("rutschfest")}
                            />
                            <Label htmlFor="rutschfest" className="flex items-center gap-2 cursor-pointer flex-1">
                              <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                              Rutschfeste Fliesen
                            </Label>
                            <Badge variant="secondary" className="text-xs">ca. 2.000€</Badge>
                          </div>
                        </div>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Geplante Investition: {badInvestition[0].toLocaleString('de-DE')} EUR
                        </Label>
                        <Slider
                          value={badInvestition}
                          onValueChange={setBadInvestition}
                          min={5000}
                          max={50000}
                          step={1000}
                          className="mt-2"
                          data-testid="slider-bad-investition"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>5.000 EUR</span>
                          <span>50.000 EUR</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-cyan-500/5 border-cyan-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Euro className="w-5 h-5 text-cyan-600" />
                        KfW 455-B Ergebnis: Ihr Zuschuss
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center py-6 border-b">
                        <p className="text-sm text-muted-foreground mb-2">Ihr KfW-Zuschuss</p>
                        <p className="text-5xl font-bold text-cyan-600" data-testid="text-bad-betrag">
                          {badErgebnis.foerderBetrag.toLocaleString('de-DE')} EUR
                        </p>
                        <p className="text-lg text-muted-foreground mt-2">
                          = {badErgebnis.foerderProzent}% der Investitionskosten
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                            Förderquote KfW 455-B
                          </span>
                          <Badge variant="secondary">{badErgebnis.foerderProzent}%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                            Max. Zuschuss
                          </span>
                          <Badge variant="secondary">{badErgebnis.maxFoerderung.toLocaleString('de-DE')} EUR</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span className="flex items-center gap-2">
                            <CheckCircle2 className="w-4 h-4 text-cyan-500" />
                            Ausgewählte Maßnahmen
                          </span>
                          <Badge variant="secondary">{badErgebnis.anzahlMassnahmen}</Badge>
                        </div>
                      </div>

                      <div className="bg-background rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Investitionskosten:</span>
                          <span className="font-medium">{badErgebnis.investition.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between text-cyan-600">
                          <span>KfW-Zuschuss:</span>
                          <span className="font-medium">- {badErgebnis.foerderBetrag.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Ihr Eigenanteil:</span>
                          <span data-testid="text-bad-eigenanteil">{badErgebnis.eigenanteil.toLocaleString('de-DE')} EUR</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>
                          Der KfW-Zuschuss für barrierefreies Wohnen muss VOR Beginn 
                          der Maßnahmen beantragt werden. Wir helfen Ihnen beim Antrag!
                        </p>
                      </div>

                      <Button size="lg" className="w-full bg-cyan-600 hover:bg-cyan-700" asChild>
                        <a href="tel:+4915212274043" data-testid="button-call-bad">
                          <Phone className="w-4 h-4 mr-2" />
                          Bad-Beratung anfordern
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>

              <TabsContent value="energieberater">
                <div className="grid lg:grid-cols-2 gap-8">
                  <Card>
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Users className="w-5 h-5 text-purple-600" />
                        Energieberater Rechner München: Beratungskosten
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Welche Beratung benötigen Sie?
                        </Label>
                        <RadioGroup value={energieberaterTyp} onValueChange={setEnergieberaterTyp} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="isfp" id="isfp" data-testid="radio-isfp" />
                            <Label htmlFor="isfp" className="flex items-center gap-2 cursor-pointer flex-1">
                              <FileText className="w-4 h-4 text-purple-500" />
                              iSFP (Sanierungsfahrplan) - empfohlen
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="baubegleitung" id="baubegleitung" data-testid="radio-baubegleitung" />
                            <Label htmlFor="baubegleitung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Home className="w-4 h-4 text-blue-500" />
                              Baubegleitung bei Sanierung
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="beratung" id="beratung" data-testid="radio-beratung" />
                            <Label htmlFor="beratung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Users className="w-4 h-4 text-green-500" />
                              Vor-Ort-Energieberatung
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Gebäudetyp
                        </Label>
                        <RadioGroup value={gebaeudeTyp} onValueChange={setGebaeudeTyp} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="einfamilienhaus" id="einfamilienhaus" data-testid="radio-einfamilienhaus" />
                            <Label htmlFor="einfamilienhaus" className="cursor-pointer flex-1">
                              Ein-/Zweifamilienhaus
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="mehrfamilienhaus" id="mehrfamilienhaus" data-testid="radio-mehrfamilienhaus" />
                            <Label htmlFor="mehrfamilienhaus" className="cursor-pointer flex-1">
                              Mehrfamilienhaus (3+ Wohnungen)
                            </Label>
                          </div>
                        </RadioGroup>
                      </div>

                      <div>
                        <Label className="text-base font-semibold mb-3 block">
                          Wohnfläche: {wohnflaeche[0]} m²
                        </Label>
                        <Slider
                          value={wohnflaeche}
                          onValueChange={setWohnflaeche}
                          min={50}
                          max={500}
                          step={10}
                          className="mt-2"
                          data-testid="slider-wohnflaeche"
                        />
                        <div className="flex justify-between text-xs text-muted-foreground mt-1">
                          <span>50 m²</span>
                          <span>500 m²</span>
                        </div>
                      </div>
                    </CardContent>
                  </Card>

                  <Card className="bg-purple-500/5 border-purple-500/20">
                    <CardHeader>
                      <CardTitle className="flex items-center gap-2">
                        <Percent className="w-5 h-5 text-purple-600" />
                        Energieberater Ergebnis München: Ihre Kosten
                      </CardTitle>
                    </CardHeader>
                    <CardContent className="space-y-6">
                      <div className="text-center py-6 border-b">
                        <p className="text-sm text-muted-foreground mb-2">Ihr Eigenanteil</p>
                        <p className="text-5xl font-bold text-purple-600" data-testid="text-berater-eigenanteil">
                          {energieberaterErgebnis.eigenanteil.toLocaleString('de-DE')} EUR
                        </p>
                        <p className="text-lg text-muted-foreground mt-2">
                          nach {energieberaterErgebnis.foerderungProzent}% Förderung
                        </p>
                      </div>

                      <div className="space-y-3">
                        <div className="flex justify-between items-center">
                          <span>Beratungskosten ca.:</span>
                          <Badge variant="secondary">{energieberaterErgebnis.grundkosten.toLocaleString('de-DE')} EUR</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>BAFA-Förderung:</span>
                          <Badge className="bg-purple-500 text-white">{energieberaterErgebnis.foerderungProzent}%</Badge>
                        </div>
                        <div className="flex justify-between items-center">
                          <span>Max. Förderbetrag:</span>
                          <Badge variant="secondary">{energieberaterErgebnis.maxFoerderung.toLocaleString('de-DE')} EUR</Badge>
                        </div>
                      </div>

                      <div className="bg-background rounded-lg p-4 space-y-2">
                        <div className="flex justify-between">
                          <span>Beratungskosten:</span>
                          <span className="font-medium">{energieberaterErgebnis.grundkosten.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between text-purple-600">
                          <span>BAFA-Förderung:</span>
                          <span className="font-medium">- {energieberaterErgebnis.foerderBetrag.toLocaleString('de-DE')} EUR</span>
                        </div>
                        <div className="flex justify-between font-bold text-lg pt-2 border-t">
                          <span>Sie zahlen nur:</span>
                          <span>{energieberaterErgebnis.eigenanteil.toLocaleString('de-DE')} EUR</span>
                        </div>
                      </div>

                      <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                        <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                        <p>
                          Mit einem iSFP erhalten Sie zusätzlich 5% Bonus auf alle 
                          Einzelmaßnahmen-Förderungen (BAFA).
                        </p>
                      </div>

                      <Button size="lg" className="w-full bg-purple-600 hover:bg-purple-700" asChild>
                        <a href="tel:+4915212274043" data-testid="button-call-energieberater">
                          <Phone className="w-4 h-4 mr-2" />
                          Energieberater vermitteln
                        </a>
                      </Button>
                    </CardContent>
                  </Card>
                </div>
              </TabsContent>
            </Tabs>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
              Fördervergleich München: BAFA vs. KfW vs. Steuerbonus
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              <Card>
                <CardHeader className="bg-green-500/10">
                  <CardTitle className="flex items-center gap-2 text-green-700 dark:text-green-400">
                    <Leaf className="w-5 h-5" />
                    BAFA Förderung
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Direkter Zuschuss (kein Kredit)</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Bis zu 70% Förderung</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Max. 30.000 EUR förderfähig</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5" />
                    <span className="text-sm">Ideal für Heizungstausch</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-blue-500/10">
                  <CardTitle className="flex items-center gap-2 text-blue-700 dark:text-blue-400">
                    <Building2 className="w-5 h-5" />
                    KfW Kredit
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Zinsgünstiger Kredit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Tilgungszuschuss bis 45%</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Bis 150.000 EUR Kredit</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-500 mt-0.5" />
                    <span className="text-sm">Ideal für Komplettsanierung</span>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader className="bg-orange-500/10">
                  <CardTitle className="flex items-center gap-2 text-orange-700 dark:text-orange-400">
                    <Calculator className="w-5 h-5" />
                    Steuerbonus §35c
                  </CardTitle>
                </CardHeader>
                <CardContent className="pt-4 space-y-3">
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">20% von der Steuer absetzbar</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Verteilt über 3 Jahre</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Max. 40.000 EUR absetzbar</span>
                  </div>
                  <div className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-orange-500 mt-0.5" />
                    <span className="text-sm">Nur selbstgenutztes Eigentum</span>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <FAQ 
          items={[
            {
              question: "Was ist der Unterschied zwischen BAFA und KfW?",
              answer: "BAFA bietet direkte Zuschüsse für Heizungstausch (bis 70%). KfW bietet zinsgünstige Kredite mit Tilgungszuschuss, die sich besonders für größere Sanierungen lohnen. Die Programme können nicht kombiniert werden."
            },
            {
              question: "Brauche ich einen Energieberater für die Förderung?",
              answer: "Für BAFA-Förderung ist kein Energieberater zwingend erforderlich. Für KfW-Kredit und Effizienzhaus-Standard ist ein Energieeffizienz-Experte Pflicht. Ein iSFP bringt zusätzlich 5% Bonus."
            },
            {
              question: "Was ist ein iSFP und lohnt sich das?",
              answer: "Ein individueller Sanierungsfahrplan (iSFP) ist eine geförderte Energieberatung (80% Zuschuss). Er bringt 5% zusätzlichen Bonus auf alle Einzelmaßnahmen und hilft bei der optimalen Sanierungsplanung."
            },
            {
              question: "Welche Förderung ist für mich am besten?",
              answer: "Bei Heizungstausch ist meist BAFA am günstigsten (bis 70%). Bei umfassender Sanierung zum Effizienzhaus kann KfW attraktiver sein. Wir beraten Sie kostenlos, welches Programm optimal ist."
            },
            {
              question: "Kann ich die Förderung nachträglich beantragen?",
              answer: "Nein! BAFA und KfW müssen VOR Auftragserteilung beantragt werden. Nur der Steuerbonus kann nachträglich bei der Steuererklärung geltend gemacht werden."
            }
          ]}
        />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
