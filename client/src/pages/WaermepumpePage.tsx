import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Clock,
  Shield,
  Leaf,
  TrendingDown,
  Zap,
  Calendar,
  Users,
  Hammer,
  Settings,
  AlertTriangle,
  Star
} from "lucide-react";
import { Link } from "wouter";
import { HeroPicture } from "@/components/ResponsiveHero";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";

const SimpleFAQ = lazy(() => import("@/components/SimpleFAQ"));
const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

const services = [
  {
    icon: Leaf,
    title: "Luft-Wasser-Wärmepumpe",
    price: "ab 12.000€",
    description: "Viessmann, Vaillant, Buderus, Wolf. Installation in 2-3 Tagen.",
    features: ["Bis 70% Förderung", "COP bis 4.5", "2-3 Tage Montage"]
  },
  {
    icon: Zap,
    title: "Erdwärmepumpe",
    price: "ab 18.000€",
    description: "Sole-Wasser mit Tiefenbohrung. COP bis 5.0, passive Kühlung.",
    features: ["30+ Jahre", "Passive Kühlung", "Wartungsarm"]
  },
  {
    icon: Settings,
    title: "Wärmepumpe Wartung",
    price: "ab 249€",
    description: "Jahreswartung: Kältemittel, Filter, Verdampfer, Protokoll.",
    features: ["Garantieerhalt", "15% Effizienz", "Protokoll inkl."]
  },
  {
    icon: TrendingDown,
    title: "BAFA/KfW Förderung",
    price: "bis 70%",
    description: "30% Basis + 30% Einkommensbonus + 20% Geschwindigkeitsbonus.",
    features: ["Kostenlose Beratung", "Antrag inkl.", "4-6 Wochen"]
  },
  {
    icon: Leaf,
    title: "Hybrid-System",
    price: "ab 14.000€",
    description: "Wärmepumpe + Gas-Spitzenlast. Ideal für Altbauten.",
    features: ["Flexible Lösung", "Kostensicher", "Zukunftssicher"]
  },
  {
    icon: Settings,
    title: "Wärmepumpe reparieren",
    price: "ab 189€",
    description: "Störung, Fehlermeldung, keine Wärme? Schnelle Diagnose.",
    features: ["Alle Marken", "Ersatzteile", "Festpreis"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Eignungscheck",
    description: "Kostenlose Vor-Ort-Analyse Ihres Gebäudes.",
    icon: Phone
  },
  {
    step: 2,
    title: "Förderantrag",
    description: "Wir übernehmen BAFA/KfW-Antragstellung.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Detaillierte Planung und verbindliches Angebot.",
    icon: Users
  },
  {
    step: 4,
    title: "Installation",
    description: "In 2-3 Tagen läuft Ihre Wärmepumpe.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Bis 70% Förderung", description: "BAFA + KfW kombiniert" },
  { title: "5 Jahre Garantie", description: "Auf Gerät und Installation" },
  { title: "50% sparen", description: "Durchschnittlich Heizkosten" },
  { title: "Festpreisgarantie", description: "Keine Nachforderungen" }
];

const faqItems = [
  {
    question: "Was kostet eine Wärmepumpe in München?",
    answer: "Luft-Wasser ab 12.000€, Erdwärme ab 18.000€ (vor Förderung). Mit bis zu 70% Förderung zahlen Sie nur 30-50% der Kosten."
  },
  {
    question: "Wie hoch ist die Wärmepumpen-Förderung 2025?",
    answer: "Bis zu 70%: 30% Grundförderung + 30% Einkommensbonus + 20% Geschwindigkeitsbonus + 5% Effizienzbonus."
  },
  {
    question: "Ist mein Altbau für eine Wärmepumpe geeignet?",
    answer: "Die meisten Altbauten sind geeignet. Wir prüfen Ihr Gebäude kostenlos und beraten ehrlich."
  },
  {
    question: "Wie lange dauert die Installation?",
    answer: "Luft-Wasser: 2-3 Tage. Erdwärmepumpe: 1-2 Wochen inkl. Bohrung."
  },
  {
    question: "Wie viel spare ich mit einer Wärmepumpe?",
    answer: "Durchschnittlich 50% Heizkosten. Zusätzlich keine CO2-Steuer und Unabhängigkeit von Gaspreisen."
  },
  {
    question: "Funktioniert eine Wärmepumpe bei Minusgraden?",
    answer: "Ja, moderne Wärmepumpen arbeiten effizient bis -20°C. Münchner Klima ist optimal."
  }
];

export default function WaermepumpePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Wärmepumpe München | Förderung & Einbau | AquaPro 24"
        description="Wärmepumpe in München: Beratung, Planung, Einbau – inkl. Förder-Check. Jetzt kostenloses Erstgespräch sichern."
        canonical="https://aquapro24.de/waermepumpe"
        keywords="Wärmepumpe BAFA 70% Förderung 2025, Luft-Wasser-Wärmepumpe München, Viessmann Vaillant Buderus Installation, Wärmepumpe Altbau geeignet, Heizkosten sparen 50% München, Erdwärmepumpe Bohrung München, Wärmepumpe Förderantrag kostenlos"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Wärmepumpe", url: "https://aquapro24.de/waermepumpe" }
        ]}
        serviceSchema={{
          name: "Wärmepumpe München",
          description: "Wärmepumpen-Installation München: Bis 70% BAFA/KfW-Förderung, Luft-Wasser & Erdwärme.",
          serviceType: "Wärmepumpe/Heizung",
          urlSlug: "waermepumpe",
          catalogName: "Wärmepumpen-Leistungen",
          serviceOffers: [
            { name: "Luft-Wasser-Wärmepumpe" },
            { name: "Erdwärmepumpe" },
            { name: "BAFA/KfW Förderantrag" },
            { name: "Wärmepumpe Wartung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 89
          }
        }}
        ogImageAlt="Wärmepumpe Installation München Luft Wasser Erdwärme - Heizung modernisieren Förderung Festpreis"
      />
      <Header />
      
      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_waermepumpe" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-destructive text-destructive-foreground gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  24/7 Notdienst
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  4.9 Google-Bewertung
                </Badge>
              </div>
              
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
                Wärmepumpe München – bis 70% BAFA Förderung 2025
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-3">
                <strong>Hohe Heizkosten und steigende Gaspreise belasten Sie?</strong>
              </p>
              
              <p className="text-sm sm:text-base text-white/90 mb-4">
                Heizen Sie unabhängig, klimaneutral und sparen Sie bis zu 50% Heizkosten. Jetzt mit bis zu 70% BAFA-Förderung umsteigen.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Ihre Gasheizung ist 20 Jahre alt und frisst Geld. Wir installieren Ihre neue Wärmepumpe in 2-3 Tagen – mit bis zu 70% Förderung zahlen Sie nur einen Bruchteil. Ab sofort 50% weniger Heizkosten.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-white/80 mb-6">
                <strong>Über 320 installierte Wärmepumpen</strong> – Luft-Wasser ab 12.000€ (vor Förderung)
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-hero">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white" 
                  asChild
                  data-testid="button-termin-hero"
                >
                  <Link href="/termin">
                    <Clock className="w-4 h-4" />
                    24h Terminbuchung
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Geprüfte Fachbetriebe</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>München & Umgebung</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Bis 70% Förderung</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Wärmepumpe München: Preise & Services</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Von der Beratung über die Förderung bis zur Installation – alles aus einer Hand.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-green-500/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-green-600" />
                      </div>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Alle Preise inkl. 19% MwSt.
            </p>
          </div>
        </section>

        <section className="py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">Wärmepumpe Ablauf München: So läuft Ihr Projekt</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Von der ersten Beratung bis zur laufenden Wärmepumpe – wir begleiten Sie.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-green-600" />
                  </div>
                  <div className="text-sm font-medium text-green-600 mb-2">Schritt {step.step}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">Wärmepumpe Vorteile München: Förderung & Ersparnis</h2>
              <p className="text-muted-foreground">
                Warum sich der Umstieg auf eine Wärmepumpe jetzt lohnt.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">Wärmepumpe Marken München: Viessmann & Vaillant</h2>
              <p className="text-muted-foreground text-sm">
                Wir installieren Wärmepumpen führender Hersteller.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Viessmann</div>
                <div className="text-xs">Vitocal</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Vaillant</div>
                <div className="text-xs">aroTHERM</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Buderus</div>
                <div className="text-xs">Logatherm</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Wolf</div>
                <div className="text-xs">CHA</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Bosch</div>
                <div className="text-xs">Compress</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-6">
              Wärmepumpe München: Ihr Spezialist vor Ort
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Die Wärmepumpe ist die Heizung der Zukunft. Mit einer Kilowattstunde Strom erzeugen 
                moderne Wärmepumpen bis zu fünf Kilowattstunden Wärme. Das spart Kosten und schont 
                die Umwelt.
              </p>
              <p>
                Nutzen Sie jetzt die historisch hohe Förderung von bis zu 70%. Wir übernehmen die 
                komplette Antragstellung bei BAFA und KfW – kostenlos für Sie.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
            <ServiceAreas 
              serviceName="Wärmepumpen-Installation" 
              highlightAreas={["Bogenhausen", "Trudering", "Haidhausen"]}
            />
        </Suspense>

        <Suspense fallback={null}>
          <SimpleFAQ 
            items={faqItems}
            title="Häufige Fragen"
          />
        </Suspense>

        {/* Partnernetzwerk Angebot */}
        <section className="py-6 lg:py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <Badge className="mb-4">Münchner Partnernetzwerk</Badge>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Ihr kostenloses Angebot in 10 Schritten
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
              Beantworten Sie ein paar Fragen zu Ihrem Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
            <Suspense fallback={null}>
              <ServiceBooking 
                serviceType="waermepumpe"
                buttonText="Jetzt Angebot anfordern"
                buttonSize="lg"
              />
            </Suspense>
          </div>
        </section>

        <section className="py-6 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Kostenlose Wärmepumpen-Beratung
            </h2>
            <p className="text-white/80 mb-4 sm:mb-6 max-w-xl mx-auto">
              Ist Ihr Haus geeignet? Wie hoch ist Ihre Förderung? 
              Wir beantworten alle Fragen – kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild data-testid="button-call-cta">
                <a href="tel:+4989444438872">
                  <Phone className="w-4 h-4 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link href="/termin">
                  <Calendar className="w-4 h-4 mr-2" />
                  Beratungstermin
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <KeywordLinks currentPage="waermepumpe" />
        
        <RelatedServices currentService="waermepumpe" />
      </main>
      
      <InternalLinks
        title="Rund um Heizung & Förderung"
        variant="footer-cta"
        links={[
          { href: "/heizung", text: "Heizungs-Service", description: "Wartung, Reparatur & Modernisierung" },
          { href: "/foerderung", text: "Förderung 2026", description: "BAFA bis 70%, KfW-Kredit" },
          { href: "/foerderrechner", text: "Förderrechner", description: "Ihren Zuschuss berechnen" },
          { href: "/foerderantrag-heizung", text: "Förderantrag Heizung", description: "Schritt-für-Schritt zum Zuschuss" },
          { href: "/termin", text: "Beratungstermin buchen", description: "Persönliche Vor-Ort-Beratung" },
        ]}
      />
      <Footer />
    </div>
  );
}
