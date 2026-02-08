import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
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
  Settings,
  Wrench,
  Calendar,
  Users,
  Hammer,
  Gauge,
  Home,
  Wind,
  Droplets,
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
    icon: Droplets,
    title: "Wasserinstallation",
    price: "ab 92€/Std.",
    description: "Trinkwasserleitungen, Abwasser, Zirkulation. DIN 1988 konform.",
    features: ["Kupfer", "PE-X", "Edelstahl"]
  },
  {
    icon: Gauge,
    title: "Gasinstallation",
    price: "ab 108€/Std.",
    description: "Gasleitungen, Gasherd, Gasheizung. DVGW-zertifiziert.",
    features: ["Sicherheit", "Zertifiziert", "Prüfung inkl."]
  },
  {
    icon: Wind,
    title: "Lüftungsanlage",
    price: "ab 4.500€",
    description: "KWL mit Wärmerückgewinnung. Spart bis 30% Heizkosten.",
    features: ["Wärmerückgew.", "Pollenfilter", "20% BAFA"]
  },
  {
    icon: Home,
    title: "Smart Home",
    price: "ab 500€",
    description: "Intelligente Heizungssteuerung, Fernzugriff per App.",
    features: ["Tado", "vSMART", "ViCare"]
  },
  {
    icon: Settings,
    title: "Enthärtungsanlage",
    price: "ab 1.800€",
    description: "Wasserenthärtung für München. Schutz vor Kalkschäden.",
    features: ["Grünbeck", "BWT", "Judo"]
  },
  {
    icon: Wrench,
    title: "Druckminderer",
    price: "ab 180€",
    description: "Druckminderer einbauen, Wasserdruck regulieren.",
    features: ["Schutz", "Langlebigkeit", "Festpreis"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Beratung",
    description: "Wir erfassen alle Ihre Haustechnik-Anforderungen.",
    icon: Phone
  },
  {
    step: 2,
    title: "Planung",
    description: "Ein Konzept für Wasser, Gas, Lüftung – alles abgestimmt.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Verbindliches Angebot ohne versteckte Kosten.",
    icon: Users
  },
  {
    step: 4,
    title: "Umsetzung",
    description: "Alle Arbeiten aus einer Hand – ein Ansprechpartner.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Alles aus einer Hand", description: "Ein Ansprechpartner für alles" },
  { title: "2-5 Jahre Garantie", description: "Je nach Leistung" },
  { title: "Zertifiziert", description: "DVGW-geprüfte Fachbetriebe" },
  { title: "Festpreisgarantie", description: "Keine Nachforderungen" }
];

const faqItems = [
  {
    question: "Was umfasst Haustechnik alles?",
    answer: "Wasserinstallation, Gasinstallation, Lüftungsanlagen, Smart-Home-Systeme. Wir bieten alles aus einer Hand."
  },
  {
    question: "Was kostet Haustechnik in München?",
    answer: "Wasser ab 92€/Std., Gas ab 108€/Std., Lüftung ab 4.500€, Smart Home ab 500€. Festpreisangebot nach Beratung."
  },
  {
    question: "Bieten Sie Komplettlösungen für Neubauten?",
    answer: "Ja, wir planen und realisieren die komplette Haustechnik. Ein Ansprechpartner koordiniert alle Gewerke."
  },
  {
    question: "Was kostet eine Lüftungsanlage?",
    answer: "Zentrale KWL ab 4.500€, dezentral ab 1.500€ pro Raum. Spart bis 30% Heizkosten, BAFA-Förderung möglich."
  },
  {
    question: "Sind Sie für Gasinstallationen zertifiziert?",
    answer: "Ja, wir sind zertifizierter DVGW-Gasinstallateur. Alle Arbeiten nach aktuellen Sicherheitsstandards."
  },
  {
    question: "In welchen Stadtteilen sind Sie tätig?",
    answer: "In ganz München: Schwabing, Bogenhausen, Sendling, Neuhausen, Pasing und alle weiteren Stadtteile."
  }
];

export default function HaustechnikPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Haustechnik München | Gas, Wasser, Lüftung komplett"
        description="Haustechnik München: Wasser-, Gas- & Lüftungsinstallation vom Fachbetrieb. Alles aus einer Hand. Jetzt beraten lassen!"
        canonical="https://aquapro24.de/haustechnik"
        keywords="Haustechnik München komplett, Gasinstallation DVGW zertifiziert, Lüftungsanlage KWL BAFA Förderung, Smart Home Tado Netatmo, Wasserinstallation Neubau München, Gebäudetechnik aus einer Hand, Haustechnik Planung Festpreis"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Haustechnik", url: "https://aquapro24.de/haustechnik" }
        ]}
        serviceSchema={{
          name: "Haustechnik München",
          description: "Haustechnik München: Wasser, Gas, Lüftung, Smart Home aus einer Hand.",
          serviceType: "Haustechnik/Gebäudetechnik",
          urlSlug: "haustechnik",
          catalogName: "Haustechnik-Leistungen",
          serviceOffers: [
            { name: "Wasserinstallation" },
            { name: "Gasinstallation" },
            { name: "Lüftungsanlage" },
            { name: "Smart Home" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 67
          }
        }}
        ogImageAlt="Haustechnik München Gasinstallation Lüftung Smart Home - Gebäudetechnik Meisterbetrieb"
      />
      <Header />
      
      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_haustechnik" alt="" />
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
                Haustechnik München – Gas, Wasser, Lüftung komplett
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-3">
                <strong>Neubau, Sanierung oder Modernisierung Ihrer Haustechnik?</strong>
              </p>
              
              <p className="text-sm sm:text-base text-white/90 mb-4">
                Ein Ansprechpartner für alle Gewerke: Wasserinstallation, Gastechnik, Lüftung und Smart Home – professionell aus einer Hand.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Ihr Neubau braucht Wasser, Gas und Lüftung – drei verschiedene Firmen, drei verschiedene Termine? Nicht bei uns. Ein Anruf, ein Ansprechpartner, alles aus einer Hand. Festpreis, perfekt koordiniert.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-white/80 mb-6">
                <strong>Über 580 Projekte realisiert</strong> – Haustechnik ab 92€/Std. zum Festpreis
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
                  <span>DVGW-zertifiziert</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Haustechnik München: Preise & Services</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Moderne Haustechnik für Komfort, Sicherheit und Energieeffizienz.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
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
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Haustechnik Ablauf München: So läuft Ihr Projekt</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Von der Beratung bis zur fertigen Installation – ein Ansprechpartner.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Schritt {step.step}</div>
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
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">Haustechnik Vorteile München: Alles aus einer Hand</h2>
              <p className="text-muted-foreground">
                Warum alles aus einer Hand die beste Lösung ist.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-6">
              Haustechnik München: Ihr Partner vor Ort
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Moderne Haustechnik umfasst weit mehr als nur Heizung und Sanitär. Von der 
                Wasserinstallation über die Gastechnik bis zur intelligenten Haussteuerung – 
                wir bieten Ihnen alle Leistungen aus einer Hand.
              </p>
              <p>
                Der Vorteil für Sie: Ein einziger Ansprechpartner, der Ihr Projekt von Anfang 
                bis Ende koordiniert. Keine Terminabstimmung zwischen verschiedenen Gewerken, 
                keine doppelten Anfahrten.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
            <ServiceAreas 
              serviceName="Haustechnik-Service" 
              highlightAreas={["Maxvorstadt", "Schwabing", "Neuhausen"]}
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
                serviceType="haustechnik"
                buttonText="Jetzt Angebot anfordern"
                buttonSize="lg"
              />
            </Suspense>
          </div>
        </section>

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Haustechnik-Projekt geplant?
            </h2>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 max-w-xl mx-auto">
              Ob Neubau, Sanierung oder Modernisierung – wir planen und realisieren 
              Ihre Haustechnik professionell.
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

        <KeywordLinks currentPage="haustechnik" />
        
        <RelatedServices currentService="haustechnik" />
      </main>
      
      <Footer />
    </div>
  );
}
