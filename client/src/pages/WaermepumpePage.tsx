import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import SimpleFAQ from "@/components/SimpleFAQ";
import ServiceAreas from "@/components/ServiceAreas";
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
  Settings
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/vaillant_arotherm_he_85021ffa.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";

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
        title="Wärmepumpe München | Förderung & Einbau | AquaPro24"
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
      />
      <Header />
      
      <main id="main-content">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-green-600/80 text-white border-green-500/50">
                <Leaf className="w-3 h-3 mr-1" />
                Bis 70% Förderung
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Wärmepumpe München – bis 70% BAFA Förderung 2025
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                Heizen Sie unabhängig, klimaneutral und sparen Sie bis zu 50% Heizkosten. 
                Jetzt mit maximaler Förderung umsteigen.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Bis 70% Förderung</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>50% Heizkosten sparen</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>5 Jahre Garantie</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-call-hero">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5 mr-2" />
                    Kostenlose Beratung
                  </a>
                </Button>
                <ServiceBooking 
                  serviceType="waermepumpe"
                  buttonText="Termin buchen"
                  buttonSize="lg"
                  buttonVariant="outline"
                  buttonClassName="backdrop-blur-sm bg-white/10 border-white/30 text-white"
                />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Wärmepumpe Leistungen München: Preise & Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
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
              <h2 className="text-3xl font-bold mb-3">Wärmepumpe Ablauf München: So läuft Ihr Projekt</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
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
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Wärmepumpe Vorteile München: Förderung & Ersparnis</h2>
              <p className="text-muted-foreground">
                Warum sich der Umstieg auf eine Wärmepumpe jetzt lohnt.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <Shield className="w-8 h-8 text-green-600 mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
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
              <h2 className="text-2xl font-bold mb-2">Wärmepumpe Marken München: Viessmann & Vaillant</h2>
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
            <h2 className="text-2xl font-bold mb-6">
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

        <ServiceAreas 
          serviceName="Wärmepumpen-Installation" 
          highlightAreas={["Bogenhausen", "Trudering", "Haidhausen"]}
        />

        <SimpleFAQ 
          items={faqItems}
          title="Häufige Fragen"
        />

        {/* Partnernetzwerk Angebot */}
        <section className="py-6 lg:py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <Badge className="mb-4">Münchner Partnernetzwerk</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ihr kostenloses Angebot in 10 Schritten
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Beantworten Sie ein paar Fragen zu Ihrem Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
            <ServiceBooking 
              serviceType="waermepumpe"
              buttonText="Jetzt Angebot anfordern"
              buttonSize="lg"
            />
          </div>
        </section>

        <section className="py-6 bg-green-600 text-white">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Kostenlose Wärmepumpen-Beratung
            </h2>
            <p className="text-white/80 mb-6 max-w-xl mx-auto">
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
      
      <Footer />
    </div>
  );
}
