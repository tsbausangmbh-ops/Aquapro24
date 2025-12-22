import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import CookieBanner from "@/components/CookieBanner";
import SEO from "@/components/SEO";
import SimpleFAQ from "@/components/SimpleFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import ServiceBooking, { type ServiceType } from "@/components/ServiceBooking";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Clock,
  Shield,
  Wrench,
  Droplets,
  ShowerHead,
  Flame,
  Thermometer,
  Calendar,
  Users,
  Hammer,
  AlertTriangle,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/professional_plumber_be6e9e4a.jpg";
import sanitaerImage from "@assets/stock_images/professional_plumber_39413514.jpg";
import rohrreinigungImage from "@assets/stock_images/emergency_plumber_fi_2fcdef5d.jpg";
import badImage from "@assets/stock_images/modern_white_grey_ba_130a1b23.jpg";
import heizungImage from "@assets/stock_images/white_radiator_heate_2e8a306c.jpg";
import warmwasserImage from "@assets/stock_images/small_white_electric_a2b4ef39.jpg";
import waermepumpeImage from "@assets/stock_images/white_air_source_hea_49cf19f8.jpg";
import haustechnikImage from "@assets/stock_images/smart_home_technolog_409ecefa.jpg";
import galleryImage1 from "@assets/stock_images/modern_bathroom_reno_d985ed76.jpg";
import galleryImage2 from "@assets/stock_images/luxury_grey_bathroom_90641334.jpg";
import galleryImage3 from "@assets/stock_images/vaillant_arotherm_he_82dc39c0.jpg";
import galleryImage4 from "@assets/stock_images/happy_homeowner_fami_71ca925e.jpg";

const serviceOptions: { type: ServiceType; name: string; icon: typeof Droplets; description: string }[] = [
  { type: "sanitaer", name: "Sanitär", icon: Droplets, description: "Rohre, Armaturen, Leckage" },
  { type: "bad", name: "Badsanierung", icon: ShowerHead, description: "Komplettumbau & Renovierung" },
  { type: "heizung", name: "Heizung", icon: Flame, description: "Reparatur, Wartung & Austausch" },
  { type: "waermepumpe", name: "Wärmepumpe", icon: Thermometer, description: "Bis 70% BAFA-Förderung" },
  { type: "haustechnik", name: "Haustechnik", icon: Wrench, description: "Gas, Wasser, Lüftung" }
];

function ServiceSelection() {
  const [selectedService, setSelectedService] = useState<ServiceType | null>(null);
  
  return (
    <section className="py-6 lg:py-8 bg-muted/50">
      <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <Badge className="mb-4">Münchner Partnernetzwerk</Badge>
        <h2 className="text-2xl md:text-3xl font-bold mb-4">
          Ihr kostenloses Angebot in 10 Schritten
        </h2>
        <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
          Wählen Sie Ihr Gewerk – wir stellen Ihnen die passenden Fragen für ein maßgeschneidertes Angebot.
        </p>
        
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-3 mb-6">
          {serviceOptions.map((service) => (
            <Card 
              key={service.type}
              className={`cursor-pointer transition-all hover-elevate ${
                selectedService === service.type 
                  ? "ring-2 ring-primary bg-primary/5" 
                  : ""
              }`}
              onClick={() => setSelectedService(service.type)}
              data-testid={`card-service-${service.type}`}
            >
              <CardContent className="p-3 text-center">
                <service.icon className={`w-6 h-6 mx-auto mb-2 ${
                  selectedService === service.type ? "text-primary" : "text-muted-foreground"
                }`} />
                <h3 className="font-semibold text-sm mb-1">{service.name}</h3>
                <p className="text-xs text-muted-foreground">{service.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        {selectedService ? (
          <ServiceBooking 
            serviceType={selectedService}
            buttonText={`${serviceOptions.find(s => s.type === selectedService)?.name}-Angebot anfordern`}
            buttonSize="lg"
          />
        ) : (
          <p className="text-sm text-muted-foreground">
            Bitte wählen Sie oben Ihr Gewerk aus, um fortzufahren.
          </p>
        )}
      </div>
    </section>
  );
}

const services = [
  {
    icon: Droplets,
    title: "Sanitär",
    price: "ab 92€",
    description: "Wasserinstallation, Rohrbruch, Leckortung. 24h Notdienst.",
    features: ["Rohrbruch", "Leckortung", "Installation"],
    link: "/sanitaer",
    image: sanitaerImage
  },
  {
    icon: Wrench,
    title: "Rohrreinigung",
    price: "ab 81€",
    description: "Abfluss verstopft, WC blockiert. Spirale, Hochdruck.",
    features: ["24/7 Notdienst", "Kamera", "Festpreis"],
    link: "/rohrreinigung",
    image: rohrreinigungImage
  },
  {
    icon: ShowerHead,
    title: "Badsanierung",
    price: "ab 16.000€",
    description: "Komplett-Umbau in 2-4 Wochen. Villeroy & Boch, Duravit.",
    features: ["3D-Planung", "5 Jahre Garantie", "Festpreis"],
    link: "/bad",
    image: badImage
  },
  {
    icon: Thermometer,
    title: "Warmwasser",
    price: "ab 600€",
    description: "Durchlauferhitzer, Boiler. Vaillant, Stiebel Eltron.",
    features: ["Montage", "Wartung", "Austausch"],
    link: "/warmwasser",
    image: warmwasserImage
  },
  {
    icon: Flame,
    title: "Heizung",
    price: "ab 154€",
    description: "Reparatur, Wartung, Austausch. Viessmann, Vaillant, Buderus.",
    features: ["24h Notdienst", "Wartung", "70% BAFA"],
    link: "/heizung",
    image: heizungImage
  },
  {
    icon: Flame,
    title: "Wärmepumpe",
    price: "bis 70% Förderung",
    description: "Luft-Wasser, Erdwärme. BAFA-Antrag inklusive.",
    features: ["Beratung", "Installation", "Förderung"],
    link: "/waermepumpe",
    image: waermepumpeImage
  }
];

const galleryItems = [
  { image: galleryImage1, title: "Badsanierung Sendling", category: "Bad" },
  { image: galleryImage2, title: "Luxusbad Bogenhausen", category: "Bad" },
  { image: galleryImage3, title: "Wärmepumpe Pasing", category: "Heizung" },
  { image: galleryImage4, title: "Zufriedene Kunden", category: "Referenz" }
];

const processSteps = [
  {
    step: 1,
    title: "Anruf",
    description: "Problem schildern. Bei Notfällen sofortige Hilfe.",
    icon: Phone
  },
  {
    step: 2,
    title: "Termin",
    description: "Pünktlich vor Ort – oft noch am selben Tag.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Analyse vor Ort, transparenter Preis vor Arbeitsbeginn.",
    icon: Users
  },
  {
    step: 4,
    title: "Erledigt",
    description: "Saubere Arbeit, Sie zahlen nur den vereinbarten Preis.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Preis gilt – ohne Nachforderungen" },
  { title: "2 Jahre Garantie", description: "Auf alle Arbeiten und Materialien" },
  { title: "60 Min. Notdienst", description: "Schnelle Hilfe bei Rohrbruch" },
  { title: "Saubere Arbeit", description: "Schutzmaterialien, besenrein" }
];

const faqItems = [
  {
    question: "Was kostet ein Klempner in München?",
    answer: "Klempner München Festpreise: Sanitär ab 92€/Std., Rohrreinigung ab 81€, Heizungsreparatur ab 154€/Std., Wasserhahn wechseln ab 80€, Durchlauferhitzer einbauen ab 600€. Preis vor Arbeitsbeginn, keine versteckten Kosten."
  },
  {
    question: "Wie schnell ist der Notdienst in München vor Ort?",
    answer: "24/7 Notdienst München: 45-60 Minuten vor Ort bei Rohrbruch, WC verstopft, Heizung ausgefallen. Einsatzgebiet: Schwabing, Bogenhausen, Sendling, Pasing, alle Stadtteile."
  },
  {
    question: "Welche Marken montieren Sie?",
    answer: "Wir arbeiten mit allen Marken: Grohe, Hansgrohe, Geberit, Blanco (Armaturen), Viessmann, Vaillant, Buderus, Wolf (Heizung), Villeroy & Boch, Duravit (Sanitärkeramik)."
  },
  {
    question: "Gibt es Garantie auf die Arbeiten?",
    answer: "Ja, 2-5 Jahre Garantie auf alle Arbeiten. Nur Markenersatzteile, fachgerechte Installation nach DIN-Normen."
  },
  {
    question: "Bieten Sie BAFA-Förderung für Wärmepumpen?",
    answer: "Ja, bis 70% BAFA-Förderung für Wärmepumpen 2025. Viessmann Vitocal, Vaillant aroTHERM, Buderus Logatherm. Wir übernehmen den kompletten Förderantrag."
  }
];

export default function Home() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Klempner München – Sanitär & Heizung Notdienst 24/7"
        description="Klempner & Sanitär in München – 24h Notdienst bei Rohrbruch & Heizungsausfall. Faire Festpreise, schnelle Hilfe vom Partnernetzwerk. Jetzt anfragen!"
        canonical="https://aquapro24.de"
        keywords="Klempner München Notdienst, Sanitär ab 92€, Rohrreinigung ab 81€, Heizung reparieren ab 154€, Rohrbruch München, WC verstopft Soforthilfe, Wasserhahn wechseln ab 80€, Durchlauferhitzer ab 600€, Badsanierung München ab 16.000€, Wärmepumpe 70% BAFA, Grohe Hansgrohe Montage, Viessmann Vaillant Buderus Wolf"
        aiSummary="AquaPro 24 München: Klempner Notdienst 24/7, 45-60 Min. vor Ort. Festpreise: Sanitär ab 92€, Rohrreinigung ab 81€, Heizung ab 154€. 2.800+ Kunden seit 2005, 4.9/5 Sterne. Tel: 0152 12274043"
        serviceSchema={{
          name: "Sanitär & Heizung München - AquaPro 24",
          description: "Partnernetzwerk für Sanitär, Heizung, Badsanierung und Wärmepumpen in München seit 2005. Über 2.847 zufriedene Kunden, Festpreisgarantie, 24/7 Notdienst.",
          serviceType: "Sanitär/Heizung/Haustechnik",
          urlSlug: "",
          catalogName: "AquaPro 24 Leistungen München",
          serviceOffers: [
            { name: "Sanitär-Notdienst 24/7" },
            { name: "Heizungsreparatur & Wartung" },
            { name: "Badsanierung Komplettservice" },
            { name: "Wärmepumpen-Installation" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 2847
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
              
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight leading-tight text-white mb-4">
                Klempner München – Sanitär & Heizung Notdienst 24/7
              </h1>
              
              <p className="text-lg text-white/90 mb-4">
                <strong>Rohrbruch, WC verstopft, Heizung ausgefallen?</strong> Wir sind in 
                45-60 Minuten bei Ihnen in München. Festpreis vor Arbeitsbeginn.
              </p>
              
              <p className="text-white/80 mb-6">
                <strong>Über 2.800 Münchner Familien</strong> vertrauen unserem Partnernetzwerk. 
                Sanitär ab 92€, Rohrreinigung ab 81€, Heizungsreparatur ab 154€.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-hero">
                  <a href="tel:+4915212274043">
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
                  <span data-testid="text-customers-count">2.800+ zufriedene Kunden</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Sanitär & Heizung München: Alle Leistungen
              </h2>
              <p className="text-muted-foreground">
                Vom tropfenden Wasserhahn bis zur Komplettsanierung – alles aus einer Hand.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {services.map((service, index) => (
                <Link key={index} href={service.link}>
                  <Card className="h-full hover-elevate cursor-pointer group overflow-hidden">
                    <div className="relative h-32 overflow-hidden">
                      <img 
                        src={service.image} 
                        alt={service.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                      <Badge className="absolute top-2 right-2 bg-primary text-primary-foreground text-xs">
                        {service.price}
                      </Badge>
                    </div>
                    <CardContent className="p-4">
                      <div className="flex items-center gap-2 mb-2">
                        <service.icon className="w-4 h-4 text-primary" />
                        <h3 className="font-semibold text-lg" data-testid={`text-service-title-${index}`}>
                          {service.title}
                        </h3>
                      </div>
                      <p className="text-muted-foreground text-sm mb-3">
                        {service.description}
                      </p>
                      <div className="flex flex-wrap gap-1">
                        {service.features.map((feature, i) => (
                          <Badge key={i} variant="outline" className="text-xs">
                            {feature}
                          </Badge>
                        ))}
                      </div>
                      <div className="mt-3 pt-3 border-t flex items-center justify-end">
                        <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                          Mehr erfahren
                          <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
            <p className="text-center text-xs text-muted-foreground mt-4">
              Alle Preise inkl. 19% MwSt.
            </p>
          </div>
        </section>

        <section className="py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Klempner München: So läuft Ihr Auftrag ab
              </h2>
              <p className="text-muted-foreground">
                Festpreis vor Arbeitsbeginn – transparent und zuverlässig seit 2005.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center mx-auto mb-3 text-lg font-bold">
                    {step.step}
                  </div>
                  <h3 className="font-semibold mb-1">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Sanitär Garantie München: Unser Versprechen
              </h2>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="p-4">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Projekte München: Referenzen unserer Arbeit
              </h2>
              <p className="text-muted-foreground">
                Badsanierung, Wärmepumpe, Heizung – echte Projekte aus München.
              </p>
            </div>
            
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
              {galleryItems.map((item, index) => (
                <div key={index} className="relative group overflow-hidden rounded-lg">
                  <img 
                    src={item.image} 
                    alt={item.title}
                    className="w-full h-40 lg:h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-3">
                    <Badge variant="secondary" className="text-xs mb-1">
                      {item.category}
                    </Badge>
                    <p className="text-white text-sm font-medium">{item.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-4">
              <h2 className="text-xl font-bold mb-2">Markenqualität für Ihr Zuhause</h2>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Grohe</div>
                <div className="text-xs">Armaturen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Viessmann</div>
                <div className="text-xs">Heizung</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Vaillant</div>
                <div className="text-xs">Wärmepumpe</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Buderus</div>
                <div className="text-xs">Heizung</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Villeroy & Boch</div>
                <div className="text-xs">Keramik</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Geberit</div>
                <div className="text-xs">Installation</div>
              </div>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Sanitär & Heizung" 
          highlightAreas={["Schwabing", "Bogenhausen", "Sendling", "Pasing"]}
        />

        <SimpleFAQ 
          items={faqItems}
          title="Häufige Fragen"
        />

        <ServiceSelection />

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sanitär oder Heizung Problem? Wir helfen sofort!
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Rufen Sie uns an oder buchen Sie direkt einen Termin. 
              Festpreis, schnelle Hilfe, 2 Jahre Garantie.
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
      </main>
      
      <Footer />
      <AIChatWidget />
      <CookieBanner />
    </div>
  );
}
