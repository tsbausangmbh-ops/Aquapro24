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
  Info
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";
import BackButton from "@/components/BackButton";

export default function FoerderrechnerPage() {
  const [heizungstyp, setHeizungstyp] = useState("waermepumpe");
  const [gebaeudeAlter, setGebaeudeAlter] = useState("vor2024");
  const [einkommen, setEinkommen] = useState("ueber40000");
  const [investition, setInvestition] = useState([25000]);

  const berechneFordeung = () => {
    let grundfoerderung = 0;
    let klimabonus = 0;
    let einkommensbonus = 0;

    if (heizungstyp === "waermepumpe") {
      grundfoerderung = 30;
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
    }

    if (einkommen === "unter40000") {
      einkommensbonus = 30;
    }

    const gesamtProzent = Math.min(grundfoerderung + klimabonus + einkommensbonus, 70);
    const maxFoerderbar = Math.min(investition[0], 30000);
    const foerderBetrag = Math.round(maxFoerderbar * (gesamtProzent / 100));

    return {
      grundfoerderung,
      klimabonus,
      einkommensbonus,
      gesamtProzent,
      foerderBetrag,
      eigenanteil: investition[0] - foerderBetrag
    };
  };

  const ergebnis = berechneFordeung();

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderrechner München: BAFA Förderung berechnen | AquaPro24"
        description="Förderrechner für Heizung München: Berechnen Sie Ihre BAFA & KfW Förderung für Wärmepumpe, Pelletheizung. Bis 70% Zuschuss. Kostenlose Beratung: 0152 12274043"
        canonical="https://aquapro24.de/foerderrechner"
        keywords="Förderrechner München, BAFA Förderung berechnen, Heizungsförderung Rechner, Wärmepumpe Förderung berechnen, Förderung ausrechnen, BAFA Rechner, KfW Förderrechner, Heizungstausch Förderung berechnen, Förderung Wärmepumpe Rechner, Zuschuss berechnen München"
        aiSummary="AquaPro24 Förderrechner München: Berechnen Sie Ihre BAFA & KfW Heizungsförderung. Wärmepumpe bis 70% Zuschuss, Pelletheizung, Solarthermie. Inklusive Klimabonus und Einkommensbonus. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" },
          { name: "Förderrechner", url: "https://aquapro24.de/foerderrechner" }
        ]}
        faqSchema={[
          {
            question: "Wie genau ist der Förderrechner?",
            answer: "Der Rechner gibt Ihnen eine gute Orientierung. Die genaue Fördersumme hängt von weiteren Faktoren ab, die wir in der persönlichen Beratung klären."
          },
          {
            question: "Gilt die Förderung auch für Mietwohnungen?",
            answer: "Ja, auch Vermieter können die BAFA-Förderung für Heizungstausch beantragen. Die Höhe kann je nach Konstellation variieren."
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
                Förderrechner München: Ihre BAFA Förderung berechnen
              </h1>
              <div className="flex flex-wrap gap-1.5 mt-3" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Förderung berechnen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsförderung Rechner</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Zuschuss</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderung ausrechnen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Rechner 2025</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klimabonus berechnen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Einkommensbonus prüfen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">70% Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungstausch Zuschuss</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderrechner kostenlos</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Berechnen Sie in wenigen Schritten, wie viel Förderung Sie für Ihre neue Heizung 
                erhalten können. Bis zu 70% staatlicher Zuschuss sind möglich!
              </p>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Calculator className="w-5 h-5 text-primary" />
                    Förderrechner München: Ihre Angaben
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
                          Wärmepumpe (Luft-Wasser, Erdwärme)
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
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Wann wurde Ihre alte Heizung eingebaut?
                    </Label>
                    <RadioGroup value={gebaeudeAlter} onValueChange={setGebaeudeAlter} className="space-y-2">
                      <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="vor2024" id="vor2024" data-testid="radio-vor2024" />
                        <Label htmlFor="vor2024" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Home className="w-4 h-4" />
                          Vor dem 01.01.2024 (Klimabonus möglich)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="nach2024" id="nach2024" data-testid="radio-nach2024" />
                        <Label htmlFor="nach2024" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Home className="w-4 h-4" />
                          Ab dem 01.01.2024
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Wie hoch ist Ihr Haushaltseinkommen?
                    </Label>
                    <RadioGroup value={einkommen} onValueChange={setEinkommen} className="space-y-2">
                      <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="unter40000" id="unter40000" data-testid="radio-unter40000" />
                        <Label htmlFor="unter40000" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Euro className="w-4 h-4 text-green-500" />
                          Unter 40.000 EUR/Jahr (Einkommensbonus!)
                        </Label>
                      </div>
                      <div className="flex items-center space-x-3 p-3 border rounded-md hover:bg-muted/50 transition-colors">
                        <RadioGroupItem value="ueber40000" id="ueber40000" data-testid="radio-ueber40000" />
                        <Label htmlFor="ueber40000" className="flex items-center gap-2 cursor-pointer flex-1">
                          <Euro className="w-4 h-4" />
                          Über 40.000 EUR/Jahr
                        </Label>
                      </div>
                    </RadioGroup>
                  </div>

                  <div>
                    <Label className="text-base font-semibold mb-3 block">
                      Geschätzte Investitionskosten: {investition[0].toLocaleString('de-DE')} EUR
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
                    Förderergebnis München: Ihre Zuschuss-Berechnung
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="text-center py-6 border-b">
                    <p className="text-sm text-muted-foreground mb-2">Ihre geschätzte Förderung</p>
                    <p className="text-5xl font-bold text-green-600" data-testid="text-foerderbetrag">
                      {ergebnis.foerderBetrag.toLocaleString('de-DE')} EUR
                    </p>
                    <p className="text-lg text-muted-foreground mt-2">
                      = {ergebnis.gesamtProzent}% der förderfähigen Kosten
                    </p>
                  </div>

                  <div className="space-y-3">
                    <div className="flex justify-between items-center">
                      <span className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-green-500" />
                        Grundförderung
                      </span>
                      <Badge variant="secondary">{ergebnis.grundfoerderung}%</Badge>
                    </div>
                    {ergebnis.klimabonus > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Klimageschwindigkeitsbonus
                        </span>
                        <Badge variant="secondary">+{ergebnis.klimabonus}%</Badge>
                      </div>
                    )}
                    {ergebnis.einkommensbonus > 0 && (
                      <div className="flex justify-between items-center">
                        <span className="flex items-center gap-2">
                          <CheckCircle2 className="w-4 h-4 text-green-500" />
                          Einkommensbonus
                        </span>
                        <Badge variant="secondary">+{ergebnis.einkommensbonus}%</Badge>
                      </div>
                    )}
                  </div>

                  <div className="bg-background rounded-lg p-4 space-y-2">
                    <div className="flex justify-between">
                      <span>Investitionskosten:</span>
                      <span className="font-medium">{investition[0].toLocaleString('de-DE')} EUR</span>
                    </div>
                    <div className="flex justify-between text-green-600">
                      <span>Förderung:</span>
                      <span className="font-medium">- {ergebnis.foerderBetrag.toLocaleString('de-DE')} EUR</span>
                    </div>
                    <div className="flex justify-between font-bold text-lg pt-2 border-t">
                      <span>Ihr Eigenanteil:</span>
                      <span data-testid="text-eigenanteil">{ergebnis.eigenanteil.toLocaleString('de-DE')} EUR</span>
                    </div>
                  </div>

                  <div className="flex items-start gap-2 text-sm text-muted-foreground bg-muted/50 p-3 rounded-md">
                    <Info className="w-4 h-4 flex-shrink-0 mt-0.5" />
                    <p>
                      Dies ist eine unverbindliche Schätzung. Die genaue Fördersumme klären wir 
                      in der persönlichen Beratung.
                    </p>
                  </div>

                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" className="flex-1" asChild>
                      <a href="tel:+4915212274043" data-testid="button-call-foerderrechner">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt beraten lassen
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" className="flex-1" asChild>
                      <Link href="/foerderantrag" data-testid="link-foerderantrag">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Antrag stellen
                      </Link>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <FAQ 
          items={[
            {
              question: "Wie genau ist der Förderrechner?",
              answer: "Der Rechner gibt Ihnen eine gute Orientierung basierend auf den aktuellen BAFA-Richtlinien. Die genaue Fördersumme kann je nach weiteren Faktoren (Effizienzklasse, natürliche Kältemittel etc.) abweichen."
            },
            {
              question: "Was ist der Klimageschwindigkeitsbonus?",
              answer: "Der Klimabonus von 20% gibt es für den Austausch einer alten Heizung (Öl, Gas, Kohle, Nachtspeicher), die vor dem 01.01.2024 in Betrieb genommen wurde."
            },
            {
              question: "Wer bekommt den Einkommensbonus?",
              answer: "Haushalte mit einem zu versteuernden Jahreseinkommen unter 40.000 EUR erhalten zusätzlich 30% Einkommensbonus. Der Nachweis erfolgt über den Einkommensteuerbescheid."
            },
            {
              question: "Gibt es eine maximale Fördersumme?",
              answer: "Ja, die förderfähigen Kosten sind auf 30.000 EUR pro Wohneinheit begrenzt. Bei 70% Förderung erhalten Sie also maximal 21.000 EUR Zuschuss."
            },
            {
              question: "Kann ich die Förderung mit einem KfW-Kredit kombinieren?",
              answer: "BAFA-Zuschuss und KfW-Kredit können nicht für dieselbe Maßnahme kombiniert werden. Sie müssen sich für eines der Programme entscheiden."
            }
          ]}
        />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
