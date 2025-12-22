import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heat_pump_installati_53374252.jpg";
import { 
  Euro,
  Phone, 
  CheckCircle2, 
  FileText,
  Calendar,
  Percent,
  Building2,
  Leaf,
  Home,
  ArrowRight,
  Mail,
  Calculator,
  Clock
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderungPage() {
  const foerderungen = [
    {
      icon: Leaf,
      title: "BAFA Förderung 2025",
      subtitle: "Bundesförderung für effiziente Gebäude (BEG)",
      description: "Für den Umstieg auf erneuerbare Energien wie Wärmepumpen.",
      maxFoerderung: "Bis zu 70%",
      details: [
        "Grundförderung: 30% für Wärmepumpen",
        "Klimageschwindigkeitsbonus: +20%",
        "Einkommensbonus: +30% (bei < 40.000 EUR/Jahr)",
        "Effizienzbonus: +5% für natürliche Kältemittel"
      ],
      geeignetFuer: ["Wärmepumpe", "Solarthermie", "Biomasseheizung"],
      color: "bg-green-500"
    },
    {
      icon: Building2,
      title: "KfW Förderung",
      subtitle: "Kreditanstalt für Wiederaufbau",
      description: "Zinsgünstige Kredite und Tilgungszuschüsse für energetische Sanierung.",
      maxFoerderung: "Bis zu 120.000 EUR",
      details: [
        "KfW 261/262: Wohngebäude-Kredit",
        "Tilgungszuschuss bis 45%",
        "Zinssatz ab 0,01% effektiv",
        "Bis 150.000 EUR Kredit pro Wohneinheit"
      ],
      geeignetFuer: ["Komplettsanierung", "Heizungstausch", "Dämmung"],
      color: "bg-blue-500"
    },
    {
      icon: Calculator,
      title: "Steuerliche Förderung",
      subtitle: "§35c EStG - Steuerermäßigung",
      description: "20% der Kosten über 3 Jahre von der Steuer absetzen.",
      maxFoerderung: "Bis zu 40.000 EUR",
      details: [
        "20% der Sanierungskosten absetzbar",
        "Verteilt auf 3 Jahre",
        "Max. 40.000 EUR pro Objekt",
        "Nur für selbstgenutzte Immobilien"
      ],
      geeignetFuer: ["Heizungstausch", "Fenster", "Dämmung"],
      color: "bg-orange-500"
    }
  ];

  const ablauf = [
    {
      step: 1,
      icon: Phone,
      title: "Kostenlose Erstberatung",
      description: "Wir analysieren Ihre Situation und prüfen Fördermöglichkeiten."
    },
    {
      step: 2,
      icon: FileText,
      title: "Förderantrag stellen",
      description: "Antrag VOR Beauftragung bei BAFA/KfW einreichen."
    },
    {
      step: 3,
      icon: Clock,
      title: "Bewilligung abwarten",
      description: "Erst nach Zusage darf mit den Arbeiten begonnen werden."
    },
    {
      step: 4,
      icon: CheckCircle2,
      title: "Umsetzung & Auszahlung",
      description: "Fachgerechte Installation und Förderung erhalten."
    }
  ];

  const beispiele = [
    {
      titel: "Wärmepumpe im Altbau",
      investition: "35.000 EUR",
      foerderung: "BAFA 50%",
      zuschuss: "17.500 EUR",
      eigenanteil: "17.500 EUR"
    },
    {
      titel: "Heizungstausch Gas zu Wärmepumpe",
      investition: "28.000 EUR",
      foerderung: "BAFA 70%",
      zuschuss: "19.600 EUR",
      eigenanteil: "8.400 EUR"
    },
    {
      titel: "Badsanierung mit neuer Heizung",
      investition: "45.000 EUR",
      foerderung: "KfW Kredit",
      zuschuss: "Zinsgünstig finanziert",
      eigenanteil: "Geringe Monatsrate"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Heizung Förderung München | BAFA & KfW 2025"
        description="Förderung für Heizung und Sanitär in München: BAFA bis 70%, KfW Kredite, steuerliche Vorteile. Wärmepumpe, Heizungstausch, Badsanierung. Kostenlose Beratung!"
        canonical="https://aquapro24.de/foerderung"
        keywords="Förderung Heizung München, BAFA Förderung Wärmepumpe, KfW Heizung, Heizungsförderung 2025, Wärmepumpe Zuschuss München, BEG Förderung, Klimabonus Heizung"
        aiSummary="AquaPro24 München: Förderberatung für Heizung & Sanitär. BAFA bis 70%, KfW Kredite, Steuerbonus. Wärmepumpe, Heizungstausch. Tel: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" }
        ]}
        serviceSchema={{
          name: "Förderberatung Heizung & Sanitär München",
          description: "Förderberatung für Heizung und Sanitär in München. BAFA, KfW, steuerliche Vorteile. Wärmepumpe, Heizungstausch, Badsanierung.",
          serviceType: "Förderberatung",
          urlSlug: "foerderung",
          catalogName: "Förderungen München",
          serviceOffers: [
            { name: "BAFA Förderberatung" },
            { name: "KfW Kreditberatung" },
            { name: "Steuerliche Förderung" },
            { name: "Wärmepumpen-Förderung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 89
          }
        }}
        faqSchema={[
          {
            question: "Wie hoch ist die BAFA Förderung für Wärmepumpen 2025?",
            answer: "Die BAFA Förderung für Wärmepumpen kann bis zu 70% betragen: 30% Grundförderung + 20% Klimageschwindigkeitsbonus + 30% Einkommensbonus (bei Haushaltseinkommen unter 40.000 EUR/Jahr)."
          },
          {
            question: "Muss ich den Förderantrag vor der Beauftragung stellen?",
            answer: "Ja! Bei BAFA und KfW muss der Antrag VOR Abschluss eines Liefer- oder Leistungsvertrags gestellt werden. Erst nach Bewilligung dürfen die Arbeiten beginnen."
          },
          {
            question: "Kann ich BAFA und KfW kombinieren?",
            answer: "BAFA und KfW können nicht für dieselbe Maßnahme kombiniert werden. Sie müssen sich für eines der Programme entscheiden. Wir beraten Sie, welche Variante für Sie günstiger ist."
          }
        ]}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        {/* Hero Section */}
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-green-500 text-white">
                <Euro className="w-3 h-3 mr-1" />
                Förderung 2025
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Förderung Heizung München: BAFA, KfW & Steuerbonus 2025
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Förderung 2025</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Heizungsförderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Zuschuss</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungstausch Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klimageschwindigkeitsbonus</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BEG Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">70% Zuschuss Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Einkommensbonus Heizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Steuerbonus Sanierung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderung beantragen München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Antrag Hilfe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Kredit Heizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsmodernisierung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Energieeffizient sanieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderberatung München</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Der Staat fördert den Umstieg auf klimafreundliche Heizungen mit attraktiven Zuschüssen. 
                Bis zu 70% Förderung für Wärmepumpen, zinsgünstige KfW-Kredite und steuerliche Vorteile 
                machen die Investition erschwinglich. AquaPro24 unterstützt Sie bei der Antragstellung.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-foerderung">
                    <Phone className="w-4 h-4 mr-2" />
                    Kostenlose Beratung
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/termin" data-testid="link-termin-foerderung">
                    <Calendar className="w-4 h-4 mr-2" />
                    Beratungstermin
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Förderungen Übersicht */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Förderung Heizungstausch München: Ihre Möglichkeiten 2025
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Drei Wege zu staatlicher Unterstützung für Ihre neue Heizung
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {foerderungen.map((foerderung) => (
                <Card key={foerderung.title} className="hover-elevate overflow-visible">
                  <CardHeader className="pb-3">
                    <div className="flex items-start gap-3">
                      <div className={`w-12 h-12 rounded-lg ${foerderung.color} flex items-center justify-center flex-shrink-0`}>
                        <foerderung.icon className="w-6 h-6 text-white" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{foerderung.title}</CardTitle>
                        <p className="text-sm text-muted-foreground">{foerderung.subtitle}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="text-2xl font-bold text-primary mb-3">
                      {foerderung.maxFoerderung}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">{foerderung.description}</p>
                    <ul className="space-y-2 mb-4">
                      {foerderung.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                    <div className="pt-3 border-t">
                      <p className="text-xs text-muted-foreground mb-2">Geeignet für:</p>
                      <div className="flex flex-wrap gap-1">
                        {foerderung.geeignetFuer.map((item, idx) => (
                          <Badge key={idx} variant="secondary" className="text-xs">
                            {item}
                          </Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ablauf */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Förderung beantragen München: So funktioniert es
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Der richtige Ablauf ist entscheidend - wir begleiten Sie
            </p>
            
            <div className="grid md:grid-cols-4 gap-6">
              {ablauf.map((schritt, index) => (
                <div key={schritt.step} className="relative">
                  <Card className="h-full">
                    <CardContent className="pt-6 text-center">
                      <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-4 text-xl font-bold">
                        {schritt.step}
                      </div>
                      <schritt.icon className="w-8 h-8 text-muted-foreground mx-auto mb-3" />
                      <h3 className="font-semibold mb-2">{schritt.title}</h3>
                      <p className="text-sm text-muted-foreground">{schritt.description}</p>
                    </CardContent>
                  </Card>
                  {index < ablauf.length - 1 && (
                    <ArrowRight className="hidden md:block absolute top-1/2 -right-3 w-6 h-6 text-muted-foreground transform -translate-y-1/2 z-10" />
                  )}
                </div>
              ))}
            </div>
            
            <div className="mt-8 p-4 bg-orange-50 dark:bg-orange-950/20 rounded-lg border border-orange-200 dark:border-orange-900">
              <p className="text-center font-medium text-orange-800 dark:text-orange-200">
                <strong>Wichtig:</strong> Der Förderantrag muss VOR Beauftragung gestellt werden! 
                Erst nach Bewilligung dürfen die Arbeiten beginnen.
              </p>
            </div>
          </div>
        </section>

        {/* Rechenbeispiele */}
        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Förderbeispiele München: Was Sie sparen können
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Beispielrechnungen für typische Projekte
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {beispiele.map((beispiel, index) => (
                <Card key={index} className="hover-elevate overflow-visible">
                  <CardHeader>
                    <CardTitle className="text-lg">{beispiel.titel}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investition:</span>
                        <span className="font-semibold">{beispiel.investition}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Förderung:</span>
                        <span className="font-semibold text-green-600">{beispiel.foerderung}</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Zuschuss:</span>
                        <span className="font-semibold text-green-600">{beispiel.zuschuss}</span>
                      </div>
                      <div className="pt-3 border-t flex justify-between">
                        <span className="text-muted-foreground">Ihr Anteil:</span>
                        <span className="font-bold text-lg text-primary">{beispiel.eigenanteil}</span>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              * Beispielrechnungen, individuelle Förderung kann abweichen. Wir beraten Sie kostenlos.
            </p>
          </div>
        </section>

        {/* SEO Text */}
        <section className="py-8 md:py-12 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              BAFA Förderung Wärmepumpe München: Alle Details 2025
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Die Bundesförderung für effiziente Gebäude (BEG) macht den Umstieg auf erneuerbare 
                Energien so attraktiv wie nie. Besonders für Wärmepumpen können Sie bis zu 70% der 
                förderfähigen Kosten als Zuschuss erhalten. Das bedeutet: Von einer 30.000 EUR 
                Investition zahlen Sie im besten Fall nur 9.000 EUR selbst.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Klimageschwindigkeitsbonus München: 20% Extra</h3>
              <p>
                Wer seine alte Öl- oder Gasheizung (älter als 20 Jahre) durch eine Wärmepumpe 
                ersetzt, erhält zusätzlich 20% Klimageschwindigkeitsbonus. Dieser Bonus gilt 
                noch bis 2028 und wird dann schrittweise reduziert. Schnell handeln lohnt sich!
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Einkommensbonus Heizung München: 30% für Haushalte</h3>
              <p>
                Haushalte mit einem zu versteuernden Jahreseinkommen unter 40.000 EUR erhalten 
                zusätzlich 30% Einkommensbonus. So wird die neue Heizung auch für kleinere 
                Einkommen erschwinglich.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">KfW Heizungskredit München: Zinsgünstig finanzieren</h3>
              <p>
                Alternativ zur BAFA-Förderung bietet die KfW zinsgünstige Kredite für 
                Heizungsmodernisierungen. Mit Tilgungszuschüssen und Zinsen ab 0,01% effektiv 
                wird die Finanzierung besonders attraktiv. Wir beraten Sie, welche Variante 
                für Sie günstiger ist.
              </p>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-8 md:py-12">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Förderberatung München: Kostenlos und unverbindlich
            </h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Lassen Sie sich beraten, welche Förderung für Ihr Projekt optimal ist. 
              Wir prüfen Ihre Möglichkeiten und unterstützen bei der Antragstellung.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-foerderung-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/kontakt" data-testid="link-kontakt-foerderung">
                  <Mail className="w-4 h-4 mr-2" />
                  Anfrage senden
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <FAQ 
          items={[
            {
              question: "Wie hoch ist die maximale BAFA-Förderung für Wärmepumpen?",
              answer: "Die maximale BAFA-Förderung beträgt 70% der förderfähigen Kosten. Sie setzt sich zusammen aus: 30% Grundförderung + 20% Klimageschwindigkeitsbonus + 30% Einkommensbonus (bei Haushaltseinkommen unter 40.000 EUR/Jahr). Die förderfähigen Kosten sind auf 30.000 EUR pro Wohneinheit begrenzt."
            },
            {
              question: "Wann muss der Förderantrag gestellt werden?",
              answer: "Der Förderantrag bei BAFA oder KfW muss VOR Abschluss eines Liefer- oder Leistungsvertrags gestellt werden. Erst nach schriftlicher Bewilligung dürfen die Arbeiten beginnen. Ein nachträglicher Antrag ist nicht möglich!"
            },
            {
              question: "Kann ich BAFA und KfW kombinieren?",
              answer: "Nein, BAFA und KfW können nicht für dieselbe Maßnahme kombiniert werden. Sie müssen sich für eines der Programme entscheiden. Wir beraten Sie, welche Variante in Ihrer Situation günstiger ist."
            },
            {
              question: "Welche Unterlagen brauche ich für den Förderantrag?",
              answer: "Für den Förderantrag benötigen Sie: Kostenvoranschläge der Fachbetriebe, technische Datenblätter der geplanten Anlage, Energieausweis (falls vorhanden), Einkommensnachweis (für Einkommensbonus) und Grundbuchauszug. Wir unterstützen Sie bei der Zusammenstellung."
            },
            {
              question: "Wie lange dauert die Bearbeitung des Förderantrags?",
              answer: "Die Bearbeitungszeit variiert je nach Programm und Antragsaufkommen. Bei BAFA sind es derzeit etwa 4-8 Wochen, bei KfW etwa 2-4 Wochen. Planen Sie diese Zeit bei Ihrem Projekt mit ein."
            }
          ]}
          title="Häufige Fragen zur Förderung"
        />
      </main>

      <Footer />
      <AIChatWidget />
    </div>
  );
}
