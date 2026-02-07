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
  Wrench,
  Calendar,
  Users,
  Hammer,
  Droplets,
  Camera,
  Zap,
  ShowerHead
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/clean_modern_drain_grate.webp";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";

const services = [
  {
    icon: Droplets,
    title: "Abfluss verstopft",
    price: "ab 81€",
    description: "Verstopfung lösen in Küche, Bad, WC. Mechanische Entstopfung.",
    features: ["Sofort-Hilfe", "Festpreis", "24/7 Notdienst"]
  },
  {
    icon: ShowerHead,
    title: "Dusche verstopft",
    price: "ab 97€",
    description: "Haare, Seifenreste, Kalk entfernen. Ablaufgarnitur säubern.",
    features: ["Gründlich", "Schnell", "Sauber"]
  },
  {
    icon: Wrench,
    title: "Küchenabfluss",
    price: "ab 97€",
    description: "Fett und Essensreste im Abfluss? Spülbecken läuft nicht ab?",
    features: ["Fett lösen", "Rohr frei", "Festpreis"]
  },
  {
    icon: Camera,
    title: "Kamerainspektion",
    price: "ab 178€",
    description: "TV-Rohrinspektion: Verstopfung lokalisieren, Schaden finden.",
    features: ["Video", "Dokumentation", "Präzise"]
  },
  {
    icon: Zap,
    title: "Hochdruckspülung",
    price: "ab 178€",
    description: "Hartnäckige Verstopfung? Hochdruck bis 200 bar löst alles.",
    features: ["Bis 200 bar", "Wurzeln", "Kalk"]
  },
  {
    icon: Wrench,
    title: "Kanalreinigung",
    price: "ab 220€",
    description: "Hauptkanal, Fallrohr blockiert? Für Wohnhaus und Gewerbe.",
    features: ["Professionell", "24/7", "Festpreis"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Anruf",
    description: "Schildern Sie das Problem. Wir kommen schnellstmöglich.",
    icon: Phone
  },
  {
    step: 2,
    title: "60 Min.",
    description: "In der Regel sind wir in 60 Minuten bei Ihnen.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Analyse der Verstopfung, transparenter Preis.",
    icon: Users
  },
  {
    step: 4,
    title: "Frei!",
    description: "Ihr Abfluss läuft wieder – garantiert.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Preis gilt – keine Nachforderungen" },
  { title: "Garantie", description: "Auf dauerhafte Beseitigung" },
  { title: "60 Min. Notdienst", description: "Schnell bei Ihnen vor Ort" },
  { title: "Umweltfreundlich", description: "100% mechanisch, ohne Chemie" }
];

const faqItems = [
  {
    question: "Was kostet eine Rohrreinigung in München?",
    answer: "Einfache Verstopfung ab 81€, Küche ab 97€, WC ab 113€, Hochdruckspülung ab 178€. Festpreis vor Arbeitsbeginn."
  },
  {
    question: "Wie schnell sind Sie vor Ort?",
    answer: "In der Regel innerhalb von 60 Minuten. 24/7 Notdienst erreichbar."
  },
  {
    question: "Arbeiten Sie auch nachts?",
    answer: "Ja, unser 24/7 Notdienst ist rund um die Uhr erreichbar – auch an Wochenenden und Feiertagen."
  },
  {
    question: "Nutzen Sie Chemikalien?",
    answer: "Nein, wir arbeiten 100% mechanisch mit Spirale und Hochdruck. Das ist gründlicher und umweltfreundlicher."
  },
  {
    question: "Welche Verstopfungen können Sie lösen?",
    answer: "Alle: Küche, Bad, WC, Dusche, Fallrohr, Hauptkanal, Außenabfluss. Mit Spirale, Hochdruck und Kamera."
  },
  {
    question: "Wie kann ich Verstopfungen vorbeugen?",
    answer: "Kein Fett in den Abfluss, Haarsiebe verwenden, regelmäßig heißes Wasser durchlaufen lassen."
  }
];

export default function RohrreinigungPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Rohrreinigung München | Abfluss verstopft 24/7"
        description="Rohrreinigung München: Abfluss verstopft, WC verstopft? 60 Min. Notdienst, Festpreis ab 81€. Jetzt anrufen!"
        canonical="https://aquapro24.de/rohrreinigung"
        keywords="Rohrreinigung München ab 81€, Abfluss verstopft Notdienst 24h, WC verstopft Soforthilfe München, Kanalreinigung Hochdruckspülung, Kamerainspektion Rohr München, Verstopfung lösen ohne Chemie, Rohrbruch Notfall 60 Minuten"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Rohrreinigung", url: "https://aquapro24.de/rohrreinigung" }
        ]}
        serviceSchema={{
          name: "Rohrreinigung München",
          description: "Rohrreinigung München: 60 Min. Reaktionszeit, Festpreis ab 81€, 24/7 Notdienst.",
          serviceType: "Rohrreinigung/Sanitär",
          urlSlug: "rohrreinigung",
          catalogName: "Rohrreinigung-Leistungen",
          serviceOffers: [
            { name: "Abfluss entstopfen" },
            { name: "Hochdruckspülung" },
            { name: "Kamerainspektion" },
            { name: "Kanalreinigung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 112
          }
        }}
        ogImageAlt="Rohrreinigung München Abfluss verstopft Kanalreinigung Rohrbruch - Notdienst Festpreis sofort"
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
                <Wrench className="w-3 h-3 mr-1" />
                24/7 Notdienst
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Rohrreinigung München – Abfluss verstopft Notdienst 24/7
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                Abfluss verstopft? Wir sind in 60 Minuten bei Ihnen und lösen 
                jede Verstopfung – mechanisch, sauber und zum Festpreis.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Festpreis ab 81€</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>60 Min. vor Ort</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>24/7 erreichbar</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-call-hero">
                  <a href="tel:+4989444438872">
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
              <h2 className="text-3xl font-bold mb-3">AquaPro 24 Rohrreinigung München: Preise & Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Egal ob Küche, Bad oder Keller – wir lösen jede Verstopfung.
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
              <h2 className="text-3xl font-bold mb-3">Abfluss Ablauf München: So einfach geht's</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von Ihrem Anruf bis zum freien Abfluss.
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
              <h2 className="text-3xl font-bold mb-3">AquaPro 24 Rohrreinigung Garantie München: Unser Versprechen</h2>
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

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Rohrreinigung München: Ihr Spezialist vor Ort
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Ein verstopfter Abfluss kommt immer zum ungünstigsten Zeitpunkt. Deshalb 
                bieten wir Ihnen einen schnellen Rohrreinigungsservice in ganz München, 
                der in der Regel innerhalb einer Stunde bei Ihnen ist.
              </p>
              <p>
                Wir arbeiten 100% mechanisch mit Spirale und Hochdruck – ohne aggressive 
                Chemikalien. Das ist gründlicher, schonender für Ihre Rohre und umweltfreundlicher.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Rohrreinigung" 
          highlightAreas={["Schwabing", "Sendling", "Bogenhausen"]}
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
              Abfluss verstopft? Wir helfen sofort!
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Ob Küche, Bad oder WC – bei verstopften Abflüssen sind wir in 60 Minuten da.
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
                  Termin buchen
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <KeywordLinks currentPage="rohrreinigung" />
        
        <RelatedServices currentService="rohrreinigung" />
      </main>
      
      <Footer />
    </div>
  );
}
