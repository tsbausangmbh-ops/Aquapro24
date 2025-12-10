import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Flame, 
  Wrench, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Thermometer
} from "lucide-react";

const services = [
  {
    title: "Heizungsinstallation",
    description: "Fachgerechte Installation moderner Heizsysteme - von der Planung bis zur Inbetriebnahme.",
    features: ["Gasheizung", "Ölheizung", "Pelletheizung", "Hybridheizung"]
  },
  {
    title: "Heizungswartung",
    description: "Regelmäßige Wartung für optimale Effizienz und lange Lebensdauer Ihrer Heizanlage.",
    features: ["Jahreswartung", "Brennereinstellung", "Abgasmessung", "Kesselreinigung"]
  },
  {
    title: "Heizungsreparatur",
    description: "Schnelle und zuverlässige Reparatur bei Heizungsausfall - auch im Notdienst.",
    features: ["24/7 Notdienst", "Alle Hersteller", "Ersatzteilservice", "Schnelle Hilfe"]
  },
  {
    title: "Heizungsmodernisierung",
    description: "Austausch alter Heizungen gegen effiziente, moderne Systeme mit Förderberatung.",
    features: ["Förderberatung", "Energieberatung", "CO2-Einsparung", "Kostensenkung"]
  }
];

const benefits = [
  "24/7 Notdienst verfügbar",
  "Alle Hersteller & Marken",
  "Festpreisgarantie",
  "Förderberatung inklusive",
  "Energieeffizienz-Check",
  "Wartungsverträge"
];

export default function HeizungPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Flame className="w-3 h-3" />
                  Heizung München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Heizung - Wärme für Ihr Zuhause
                </h1>
                <p className="text-lg text-muted-foreground">
                  Installation, Wartung und Reparatur aller Heizungssysteme. Wir sorgen für wohlige Wärme in Ihrem Zuhause - zuverlässig, effizient und energiesparend.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Beratung anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["24/7 Notdienst", "Alle Marken", "Festpreis"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-8 text-primary-foreground">
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-secondary text-secondary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Meisterbetrieb
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Unsere Vorteile</h3>
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
              <h2 className="text-3xl font-bold mb-4">Unsere Heizungs-Leistungen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Neuinstallation bis zur Reparatur - wir sind Ihr zuverlässiger Partner für alle Heizungsfragen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Thermometer className="w-6 h-6 text-primary" />
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
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Heizung defekt? Wir helfen sofort!</h2>
              <p className="text-muted-foreground">
                Unser 24/7 Notdienst ist für Sie da. Rufen Sie uns an und wir kümmern uns schnellstmöglich um Ihre Heizung.
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
                  Wartungstermin
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget serviceCategory="heizung" />
    </div>
  );
}
