import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
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
  Droplets,
  Wrench,
  Calendar,
  Users,
  Hammer,
  ShowerHead,
  ThermometerSun,
  Settings
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/modern_chrome_faucet.png";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";

const services = [
  {
    icon: Droplets,
    title: "Wasserhahn wechseln",
    price: "ab 80€",
    description: "Küchenarmatur, Waschtischarmatur, Badarmatur montieren.",
    features: ["Grohe", "Hansgrohe", "Blanco"]
  },
  {
    icon: ShowerHead,
    title: "Duscharmatur einbauen",
    price: "ab 120€",
    description: "Regendusche, Duschsystem, Unterputzarmatur installieren.",
    features: ["Aufputz", "Unterputz", "Thermostat"]
  },
  {
    icon: ThermometerSun,
    title: "Thermostat einbauen",
    price: "ab 150€",
    description: "Thermostatmischer für Dusche und Wanne. Verbrühschutz.",
    features: ["Verbrühschutz", "Konstante Temp.", "Wassersparen"]
  },
  {
    icon: Wrench,
    title: "Wasserhahn reparieren",
    price: "ab 60€",
    description: "Tropfender Wasserhahn? Kartusche, Dichtung, Perlator.",
    features: ["Schnelle Hilfe", "Alle Marken", "Festpreis"]
  },
  {
    icon: Settings,
    title: "Sensor-Armatur",
    price: "ab 180€",
    description: "Berührungslose Armaturen für Hygiene und Wassersparen.",
    features: ["Hygienisch", "50% sparen", "Batteriebet."]
  },
  {
    icon: Droplets,
    title: "Mischbatterie tauschen",
    price: "ab 95€",
    description: "Alte Zweigriffarmatur durch moderne Einhebelarmatur ersetzen.",
    features: ["Mehr Komfort", "Designauswahl", "Festpreis"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Kontakt",
    description: "Schildern Sie Ihr Anliegen – Reparatur oder Neuinstallation.",
    icon: Phone
  },
  {
    step: 2,
    title: "Termin",
    description: "Wir kommen zum vereinbarten Zeitpunkt – oft noch am selben Tag.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Transparenter Preis vor Arbeitsbeginn.",
    icon: Users
  },
  {
    step: 4,
    title: "Erledigt",
    description: "Ihre Armatur funktioniert perfekt.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Preis gilt – ohne Nachforderungen" },
  { title: "2 Jahre Garantie", description: "Auf Montage und Arbeit" },
  { title: "Schnelle Termine", description: "Oft noch am selben Tag" },
  { title: "Saubere Arbeit", description: "Oberflächenschutz, besenrein" }
];

const faqItems = [
  {
    question: "Was kostet der Einbau einer neuen Armatur?",
    answer: "Standard-Waschtischarmatur ab 80€. Duscharmatur ab 120€, Unterputz ab 180€. Festpreis vor Arbeitsbeginn."
  },
  {
    question: "Kann ich meine eigene Armatur mitbringen?",
    answer: "Ja, wir bauen auch selbst gekaufte Armaturen fachgerecht ein. Achten Sie auf Qualitätsmarken."
  },
  {
    question: "Wie lange dauert der Austausch einer Armatur?",
    answer: "Einfacher Armaturenwechsel: 30-60 Minuten. Unterputz: 2-3 Stunden."
  },
  {
    question: "Mein Wasserhahn tropft - lohnt sich eine Reparatur?",
    answer: "Oft ja! Neue Kartusche oder Dichtung ist günstiger als Kompletttausch. Wir prüfen vor Ort."
  },
  {
    question: "Welche Marken empfehlen Sie?",
    answer: "Grohe, Hansgrohe, Geberit, Villeroy & Boch – bewährte Qualität mit langer Haltbarkeit."
  },
  {
    question: "Gibt es wassersparende Armaturen?",
    answer: "Ja, Armaturen mit Durchflussbegrenzung sparen bis 50% Wasser ohne Komfortverlust."
  }
];

export default function ArmaturenPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Wasserhahn wechseln München | Armaturen Montage"
        description="Wasserhahn wechseln München: Armaturen montieren & reparieren. Grohe, Hansgrohe, Geberit. Festpreis ab 80€."
        canonical="https://aquapro24.de/armaturen"
        keywords="Wasserhahn wechseln ab 80€ München, Grohe Hansgrohe Armatur montieren, Wasserhahn tropft Reparatur, Unterputz Armatur Installation München, Thermostat Mischbatterie einbauen, Duscharmatur austauschen München, Wasserhahn Kartusche wechseln"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Armaturen", url: "https://aquapro24.de/armaturen" }
        ]}
        serviceSchema={{
          name: "Armaturen München",
          description: "Armaturen-Montage und Reparatur in München. Alle Marken, Festpreis ab 80€.",
          serviceType: "Armaturen/Sanitär",
          urlSlug: "armaturen",
          catalogName: "Armaturen-Leistungen",
          serviceOffers: [
            { name: "Armaturenmontage" },
            { name: "Wasserhahn Reparatur" },
            { name: "Duschsystem Installation" },
            { name: "Thermostat Einbau" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 94
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
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Droplets className="w-3 h-3 mr-1" />
                Armaturen-Service
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Wasserhahn wechseln München – Armaturen Montage & Reparatur
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                Wasserhahn tropft? Neue Armatur einbauen lassen? 
                Wir montieren und reparieren alle Marken – schnell und zum Festpreis.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Festpreis ab 80€</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Alle Marken</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>2 Jahre Garantie</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-call-hero">
                  <a href="tel:+4915212274043">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <ServiceBooking 
                  serviceType="sanitaer"
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
              <h2 className="text-3xl font-bold mb-3">Armaturen Service München: Leistungen & Preise</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der einfachen Reparatur bis zum kompletten Duschsystem.
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
              <h2 className="text-3xl font-bold mb-3">Armaturenmontage München: So einfach geht's</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von Ihrem Anruf bis zur perfekt montierten Armatur.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Schritt {step.step}</div>
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
              <h2 className="text-3xl font-bold mb-3">Wasserhahn Montage München: Unsere Garantien</h2>
              <p className="text-muted-foreground">
                Sicherheit und Qualität – darauf können Sie sich verlassen.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
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
              <h2 className="text-2xl font-bold mb-2">Armaturen Marken München: Qualität vom Profi</h2>
              <p className="text-muted-foreground text-sm">
                Wir montieren Armaturen führender Hersteller.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Grohe</div>
                <div className="text-xs">Armaturen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Hansgrohe</div>
                <div className="text-xs">Brausen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Geberit</div>
                <div className="text-xs">Installation</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Blanco</div>
                <div className="text-xs">Küche</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Dornbracht</div>
                <div className="text-xs">Premium</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Ihr Armaturen-Spezialist in München
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Armaturen bestimmen den Komfort und die Optik Ihres Bades oder Ihrer Küche. 
                Ob tropfender Wasserhahn, neue Designarmatur oder Thermostatmischer – wir 
                sind Ihre Experten für alle Armaturenarbeiten in München.
              </p>
              <p>
                Unsere Installateure haben jahrelange Erfahrung mit allen gängigen Marken: 
                Grohe, Hansgrohe, Geberit, Villeroy & Boch und viele mehr.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Armaturen-Service" 
          highlightAreas={["Maxvorstadt", "Haidhausen", "Pasing"]}
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
              serviceType="sanitaer"
              buttonText="Jetzt Angebot anfordern"
              buttonSize="lg"
            />
          </div>
        </section>

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Armatur montieren lassen?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Ob tropfender Wasserhahn oder neue Designarmatur – wir kümmern uns darum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild data-testid="button-call-cta">
                <a href="tel:+4915212274043">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link href="/termin">
                  <Calendar className="w-4 h-4 mr-2" />
                  Termin buchen
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <KeywordLinks currentPage="armaturen" />
        
        <RelatedServices currentService="armaturen" />
      </main>
      
      <Footer />
      <AIChatWidget serviceCategory="sanitaer" />
    </div>
  );
}
