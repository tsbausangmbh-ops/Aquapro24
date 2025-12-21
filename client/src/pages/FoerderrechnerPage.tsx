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
  Thermometer
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";

export default function FoerderrechnerPage() {
  const [heizungstyp, setHeizungstyp] = useState("waermepumpe");
  const [gebaeudeAlter, setGebaeudeAlter] = useState("vor2024");
  const [einkommen, setEinkommen] = useState("ueber40000");
  const [investition, setInvestition] = useState([25000]);
  
  const [kfwMassnahme, setKfwMassnahme] = useState("heizung");
  const [kfwInvestition, setKfwInvestition] = useState([50000]);
  const [kfwEffizienz, setKfwEffizienz] = useState("einzeln");
  
  const [energieberaterTyp, setEnergieberaterTyp] = useState("isfp");
  const [wohnflaeche, setWohnflaeche] = useState([150]);
  const [gebaeudeTyp, setGebaeudeTyp] = useState("einfamilienhaus");

  const berechneBAFA = () => {
    let grundfoerderung = 0;
    let klimabonus = 0;
    let einkommensbonus = 0;
    let effizienzbonus = 0;

    if (heizungstyp === "waermepumpe") {
      grundfoerderung = 30;
      effizienzbonus = 5;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (heizungstyp === "pellet") {
      grundfoerderung = 30;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (heizungstyp === "solarthermie") {
      grundfoerderung = 25;
    } else if (heizungstyp === "brennstoffzelle") {
      grundfoerderung = 30;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (heizungstyp === "fernwaerme") {
      grundfoerderung = 30;
      if (gebaeudeAlter === "vor2024") {
        klimabonus = 20;
      }
    } else if (heizungstyp === "fussbodenheizung") {
      grundfoerderung = 20;
    } else if (heizungstyp === "lueftung") {
      grundfoerderung = 20;
    }

    if (einkommen === "unter40000") {
      einkommensbonus = 30;
    }

    const gesamtProzent = Math.min(grundfoerderung + klimabonus + einkommensbonus + effizienzbonus, 70);
    const maxFoerderbar = Math.min(investition[0], 30000);
    const foerderBetrag = Math.round(maxFoerderbar * (gesamtProzent / 100));

    return {
      grundfoerderung,
      klimabonus,
      einkommensbonus,
      effizienzbonus,
      gesamtProzent,
      foerderBetrag,
      eigenanteil: investition[0] - foerderBetrag
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

  const bafaErgebnis = berechneBAFA();
  const kfwErgebnis = berechneKfW();
  const energieberaterErgebnis = berechneEnergieberater();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderrechner München: BAFA, KfW & Energieberater berechnen | AquaPro24"
        description="Förderrechner München: BAFA bis 70%, KfW Kredit bis 150.000 EUR, Energieberater 80% gefördert. Alle Förderprogramme berechnen. Tel: 0152 12274043"
        canonical="https://aquapro24.de/foerderrechner"
        keywords="Förderrechner München, BAFA Förderung berechnen, KfW Förderrechner, Energieberater Förderung, Heizungsförderung Rechner, Wärmepumpe Förderung, iSFP Förderung, Tilgungszuschuss berechnen, BEG Förderung Rechner, Sanierungsförderung München"
        aiSummary="AquaPro24 Förderrechner München: BAFA Heizungsförderung bis 70%, KfW Kredit mit Tilgungszuschuss, Energieberater 80% gefördert. Alle Programme im Vergleich. Kontakt: 0152 12274043"
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
      <BackButton />
      
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
              <div className="flex flex-wrap gap-1.5 mt-3" data-testid="keyword-cloud">
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

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Tabs defaultValue="bafa" className="w-full">
              <TabsList className="grid w-full grid-cols-3 mb-8">
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
                          Welche Heizung planen Sie?
                        </Label>
                        <RadioGroup value={heizungstyp} onValueChange={setHeizungstyp} className="space-y-2">
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="waermepumpe" id="waermepumpe" data-testid="radio-waermepumpe" />
                            <Label htmlFor="waermepumpe" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Leaf className="w-4 h-4 text-green-500" />
                              Wärmepumpe (Luft, Erde, Wasser)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="pellet" id="pellet" data-testid="radio-pellet" />
                            <Label htmlFor="pellet" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Flame className="w-4 h-4 text-orange-500" />
                              Pelletheizung / Biomasse
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="solarthermie" id="solarthermie" data-testid="radio-solarthermie" />
                            <Label htmlFor="solarthermie" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Leaf className="w-4 h-4 text-yellow-500" />
                              Solarthermie
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="brennstoffzelle" id="brennstoffzelle" data-testid="radio-brennstoffzelle" />
                            <Label htmlFor="brennstoffzelle" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Flame className="w-4 h-4 text-purple-500" />
                              Brennstoffzelle
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="fernwaerme" id="fernwaerme" data-testid="radio-fernwaerme" />
                            <Label htmlFor="fernwaerme" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Home className="w-4 h-4 text-blue-500" />
                              Fernwärme-Anschluss
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="fussbodenheizung" id="fussbodenheizung" data-testid="radio-fussbodenheizung" />
                            <Label htmlFor="fussbodenheizung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Thermometer className="w-4 h-4 text-red-500" />
                              Fußbodenheizung (Optimierung)
                            </Label>
                          </div>
                          <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                            <RadioGroupItem value="lueftung" id="lueftung" data-testid="radio-lueftung" />
                            <Label htmlFor="lueftung" className="flex items-center gap-2 cursor-pointer flex-1">
                              <Wind className="w-4 h-4 text-cyan-500" />
                              Lüftungsanlage mit Wärmerückgewinnung
                            </Label>
                          </div>
                        </RadioGroup>
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
