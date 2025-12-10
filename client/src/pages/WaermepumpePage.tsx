import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Leaf, 
  Wrench, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Zap,
  TrendingDown
} from "lucide-react";

const services = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    description: "Die beliebteste Lösung - nutzt die Außenluft als Wärmequelle, einfache Installation.",
    features: ["Geringe Kosten", "Schnelle Montage", "Förderbar", "Effizient"]
  },
  {
    title: "Erdwärmepumpe",
    description: "Höchste Effizienz durch konstante Erdwärme - ideal für Neubauten und große Objekte.",
    features: ["Höchste Effizienz", "Konstante Leistung", "Langlebig", "Leise"]
  },
  {
    title: "Wärmepumpen-Wartung",
    description: "Regelmäßige Wartung für optimale Leistung und lange Lebensdauer Ihrer Wärmepumpe.",
    features: ["Jahrescheck", "Kältemittelprüfung", "Filterreinigung", "Effizienzoptimierung"]
  },
  {
    title: "Förderberatung",
    description: "Wir unterstützen Sie bei der Beantragung staatlicher Förderungen - bis zu 70% Zuschuss möglich.",
    features: ["BAFA-Förderung", "KfW-Kredit", "Antragsstellung", "Dokumentation"]
  }
];

const benefits = [
  "Bis zu 70% Förderung möglich",
  "Bis zu 50% Heizkosten sparen",
  "CO2-neutral heizen",
  "Unabhängig von Gas & Öl",
  "Wertsteigerung Immobilie",
  "Zertifizierter Fachbetrieb"
];

export default function WaermepumpePage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-accent/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Leaf className="w-3 h-3" />
                  Wärmepumpe München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Wärmepumpe - Heizen mit Zukunft
                </h1>
                <p className="text-lg text-muted-foreground">
                  Nachhaltig, effizient und förderfähig. Mit einer Wärmepumpe sparen Sie Heizkosten und schonen die Umwelt. Wir beraten, planen und installieren.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      Kostenlose Beratung
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Fördercheck starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Bis 70% Förderung", "Festpreis", "Zertifiziert"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative">
                <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-8 text-accent-foreground">
                  <div className="absolute -top-3 -right-3">
                    <Badge className="bg-secondary text-secondary-foreground shadow-lg">
                      <Zap className="w-3 h-3 mr-1" />
                      Energiewende
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Ihre Vorteile</h3>
                  <ul className="space-y-3">
                    {benefits.map((benefit) => (
                      <li key={benefit} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 flex-shrink-0" />
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
              <h2 className="text-3xl font-bold mb-4">Wärmepumpen-Leistungen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Beratung über die Installation bis zur Wartung - wir begleiten Sie auf dem Weg zur klimafreundlichen Heizung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-6 h-6 text-accent" />
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
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <TrendingDown className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">-50%</h3>
                <p className="text-muted-foreground">Heizkosten sparen</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">0 kg</h3>
                <p className="text-muted-foreground">CO2-Emissionen</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">70%</h3>
                <p className="text-muted-foreground">Förderung möglich</p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-3xl font-bold">Jetzt auf Wärmepumpe umsteigen!</h2>
              <p className="text-muted-foreground">
                Nutzen Sie die attraktiven Förderprogramme. Wir beraten Sie kostenlos und unverbindlich zu Ihren Möglichkeiten.
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
      <ChatWidget />
    </div>
  );
}
