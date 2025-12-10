import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Settings, 
  Wrench, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Home,
  Gauge
} from "lucide-react";

const services = [
  {
    title: "Wasserinstallation",
    description: "Professionelle Installation von Wasserleitungen, Anschlüssen und Verteilersystemen.",
    features: ["Trinkwasser", "Abwasser", "Regenwasser", "Zirkulation"]
  },
  {
    title: "Gasinstallation",
    description: "Sichere Gasinstallationen und Gasleitungen durch zertifizierte Fachkräfte.",
    features: ["Gasleitungen", "Gasgeräte", "Sicherheitsprüfung", "Zertifiziert"]
  },
  {
    title: "Lüftungstechnik",
    description: "Kontrollierte Wohnraumlüftung für gesundes Raumklima und Energieeffizienz.",
    features: ["Wärmerückgewinnung", "Pollenfilter", "Feuchteregulierung", "Energiesparen"]
  },
  {
    title: "Smart Home",
    description: "Intelligente Steuerung Ihrer Haustechnik - Heizung, Lüftung und mehr per App.",
    features: ["Heizungssteuerung", "Fernzugriff", "Energiemonitoring", "Automation"]
  }
];

const benefits = [
  "Komplettservice Haustechnik",
  "Zertifizierte Meisterbetrieb",
  "Modernste Technik",
  "Energieberatung inklusive",
  "Smart Home Integration",
  "Wartungsverträge"
];

export default function HaustechnikPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Settings className="w-3 h-3" />
                  Haustechnik München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Haustechnik - Alles aus einer Hand
                </h1>
                <p className="text-lg text-muted-foreground">
                  Von der Wasserinstallation über Gastechnik bis zur intelligenten Haussteuerung. Wir sind Ihr Komplettanbieter für moderne Haustechnik.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anfragen
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Beratung anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Meisterbetrieb", "Festpreis", "Komplettservice"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 text-secondary-foreground">
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Komplettanbieter
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Unsere Stärken</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Haustechnik-Leistungen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Moderne Haustechnik für Komfort, Sicherheit und Energieeffizienz in Ihrem Zuhause.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Gauge className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Home className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">1.500+</h3>
                <p className="text-muted-foreground">Projekte realisiert</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <p className="text-muted-foreground">Kundenbewertung</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-muted-foreground">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
              <h2 className="text-3xl font-bold">Ihr Projekt - unsere Expertise</h2>
              <p className="text-muted-foreground">
                Ob Neubau, Sanierung oder Modernisierung - wir planen und realisieren Ihre Haustechnik professionell und termingerecht.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989123456789">
                    <Phone className="w-5 h-5 mr-2" />
                    089 123 456 789
                  </a>
                </Button>
                <Button size="lg" variant="secondary">
                  <Clock className="w-4 h-4 mr-2" />
                  Beratungstermin
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget serviceCategory="haustechnik" />
    </div>
  );
}
