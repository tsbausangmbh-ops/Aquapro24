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
  Flame,
  Wrench,
  Calendar,
  Users,
  Hammer,
  Zap,
  ThermometerSun,
  Droplets,
  Settings
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/generated_images/tankless_water_heater.png";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";

const services = [
  {
    icon: Flame,
    title: "Durchlauferhitzer",
    price: "ab 600€",
    description: "Installation, Austausch, Reparatur. Vaillant, Stiebel Eltron, AEG.",
    features: ["21-27 kW", "Elektronisch", "Festpreis"]
  },
  {
    icon: ThermometerSun,
    title: "Warmwasserspeicher",
    price: "ab 800€",
    description: "Boiler einbauen: 80-300 Liter. Viessmann, Vaillant, Buderus.",
    features: ["Stehend", "Wandhängend", "Alle Größen"]
  },
  {
    icon: Zap,
    title: "Untertischspeicher",
    price: "ab 280€",
    description: "Kleinspeicher 5-15 Liter für Küche und Gäste-WC.",
    features: ["Kompakt", "Schnelle Montage", "Wassersparen"]
  },
  {
    icon: Droplets,
    title: "Zirkulationspumpe",
    price: "ab 380€",
    description: "Sofort heißes Wasser an jeder Zapfstelle. Grundfos, Wilo.",
    features: ["Sofort warm", "Energieeffizient", "Komfort"]
  },
  {
    icon: Wrench,
    title: "Boiler reparieren",
    price: "ab 120€",
    description: "Kein Warmwasser? Entkalkung, Heizstab, Thermostat.",
    features: ["Diagnose", "Alle Marken", "Notdienst"]
  },
  {
    icon: Settings,
    title: "Wartung",
    price: "ab 89€",
    description: "Jährliche Wartung: Entkalkung, Anodenkontrolle, Effizienzcheck.",
    features: ["Lebensdauer", "Effizienz", "Protokoll"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Anruf",
    description: "Schildern Sie Ihr Problem – wir helfen schnell.",
    icon: Phone
  },
  {
    step: 2,
    title: "Termin",
    description: "Bei Ausfall oft am selben Tag.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Analyse vor Ort, transparenter Preis.",
    icon: Users
  },
  {
    step: 4,
    title: "Warmwasser!",
    description: "Ihr Gerät funktioniert wieder.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Preis gilt – ohne Nachforderungen" },
  { title: "2 Jahre Garantie", description: "Auf alle Arbeiten" },
  { title: "Schnelle Hilfe", description: "Oft am selben Tag" },
  { title: "Alle Marken", description: "Vaillant, Stiebel Eltron, AEG" }
];

const faqItems = [
  {
    question: "Kein warmes Wasser - wie schnell können Sie helfen?",
    answer: "Bei Warmwasserausfall sind wir in der Regel innerhalb von 2-4 Stunden bei Ihnen. Auch am Wochenende."
  },
  {
    question: "Was kostet ein neuer Durchlauferhitzer?",
    answer: "Durchlauferhitzer mit Installation ab ca. 600€. Festpreis vor Arbeitsbeginn."
  },
  {
    question: "Durchlauferhitzer oder Speicher - was ist besser?",
    answer: "Durchlauferhitzer: platzsparend, Wasser nur bei Bedarf. Speicher: sofort große Mengen heißes Wasser."
  },
  {
    question: "Durchlauferhitzer macht nur lauwarmes Wasser?",
    answer: "Oft Verkalkung oder defektes Heizelement. Häufig mit Wartung oder kleiner Reparatur behebbar."
  },
  {
    question: "Wie oft sollte ich meinen Boiler warten lassen?",
    answer: "Jährliche Wartung inkl. Entkalkung empfohlen. Verlängert Lebensdauer, spart Energie."
  },
  {
    question: "Gibt es Förderungen für neue Warmwasserbereiter?",
    answer: "Für bestimmte energieeffiziente Lösungen ja. Wir beraten Sie zu aktuellen Programmen."
  }
];

export default function WarmwasserPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Durchlauferhitzer München | Boiler Reparatur & Installation"
        description="Durchlauferhitzer München: Kein Warmwasser? Boiler defekt? Schnelle Reparatur & Installation. Festpreis ab 120€."
        canonical="https://aquapro24.de/warmwasser"
        keywords="Durchlauferhitzer München Installation, Boiler defekt Reparatur München, Warmwasserspeicher Austausch Festpreis, Kein Warmwasser Notdienst 24h, Durchlauferhitzer Stiebel Eltron Vaillant, Boiler Entkalkung Wartung München, Warmwasser Therme reparieren"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Warmwasser", url: "https://aquapro24.de/warmwasser" }
        ]}
        serviceSchema={{
          name: "Warmwasser München",
          description: "Warmwasser-Service: Durchlauferhitzer, Boiler, Warmwasserspeicher. Installation und Reparatur.",
          serviceType: "Warmwasser/Heizung",
          urlSlug: "warmwasser",
          catalogName: "Warmwasser-Leistungen",
          serviceOffers: [
            { name: "Durchlauferhitzer Installation" },
            { name: "Boiler Reparatur" },
            { name: "Warmwasserspeicher" },
            { name: "Wartung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 86
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
                <Flame className="w-3 h-3 mr-1" />
                Warmwasser-Service
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Durchlauferhitzer München – Boiler Reparatur & Installation
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                Kein warmes Wasser? Durchlauferhitzer defekt? Wir reparieren und 
                installieren alle Marken – schnell und zum Festpreis.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Festpreis ab 120€</span>
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
              <h2 className="text-3xl font-bold mb-3">Warmwasser Leistungen München: Preise & Services</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vom kleinen Untertischboiler bis zum großen Warmwasserspeicher.
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
              <h2 className="text-3xl font-bold mb-3">Boiler Ablauf München: So einfach geht's</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von Ihrem Anruf bis zum heißen Wasser.
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
              <h2 className="text-3xl font-bold mb-3">Durchlauferhitzer Garantie München: Unser Versprechen</h2>
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
              <h2 className="text-2xl font-bold mb-2">Warmwasser Marken München: Vaillant & Stiebel Eltron</h2>
              <p className="text-muted-foreground text-sm">
                Wir installieren und reparieren alle führenden Marken.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Vaillant</div>
                <div className="text-xs">electronicVED</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Stiebel Eltron</div>
                <div className="text-xs">DHE, SNU</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">AEG</div>
                <div className="text-xs">DDLE, Huz</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Clage</div>
                <div className="text-xs">DSX, MCX</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Viessmann</div>
                <div className="text-xs">Vitocell</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Warmwasser München: Ihr Spezialist vor Ort
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Warmes Wasser ist ein Grundbedürfnis – und wenn es plötzlich fehlt, muss schnell 
                Hilfe her. Als Ihr Warmwasser-Spezialist in München sind wir für Sie da: bei 
                Ausfällen, für Wartungen oder wenn Sie ein neues Gerät brauchen.
              </p>
              <p>
                Wir arbeiten mit allen gängigen Marken: Vaillant, Stiebel Eltron, Junkers/Bosch, 
                AEG, Clage und viele mehr.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Warmwasser-Service" 
          highlightAreas={["Trudering", "Laim", "Giesing"]}
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
              serviceType="heizung"
              buttonText="Jetzt Angebot anfordern"
              buttonSize="lg"
            />
          </div>
        </section>

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Kein Warmwasser? Wir helfen sofort!
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Durchlauferhitzer defekt, Boiler macht Probleme? Wir bringen Ihr Warmwasser zurück.
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

        <KeywordLinks currentPage="warmwasser" />
        
        <RelatedServices currentService="warmwasser" />
      </main>
      
      <Footer />
    </div>
  );
}
