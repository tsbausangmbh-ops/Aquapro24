import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Droplets, 
  Wrench, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight
} from "lucide-react";

const services = [
  {
    title: "Badsanierung komplett",
    description: "Komplettumbau Ihres Badezimmers nach Ihren Wünschen - von der Planung bis zur Fertigstellung.",
    features: ["Fliesenarbeiten", "Sanitärinstallation", "Elektrik", "Beleuchtung"]
  },
  {
    title: "Badmodernisierung",
    description: "Teilsanierung und Modernisierung bestehender Bäder für mehr Komfort und Ästhetik.",
    features: ["Neue Armaturen", "WC-Austausch", "Dusche erneuern", "Barrierefreiheit"]
  },
  {
    title: "Sanitärobjekte",
    description: "Installation und Austausch aller Sanitärobjekte - WC, Waschbecken, Dusche, Badewanne.",
    features: ["WC & Bidet", "Waschtische", "Duschen", "Badewannen"]
  },
  {
    title: "Armaturen & Zubehör",
    description: "Hochwertige Armaturen und Badaccessoires für Ihr Traumbad.",
    features: ["Thermostatarmaturen", "Unterputzarmaturen", "Handtuchhalter", "Spiegel"]
  }
];

const benefits = [
  "Kostenlose Beratung vor Ort",
  "3D-Badplanung inklusive",
  "Festpreisgarantie",
  "Alles aus einer Hand",
  "5 Jahre Gewährleistung",
  "Termintreue garantiert"
];

export default function BadPage() {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Droplets className="w-3 h-3" />
                  Badsanierung München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Ihr Traumbad wird Wirklichkeit
                </h1>
                <p className="text-lg text-muted-foreground">
                  Von der kompletten Badsanierung bis zur Teilmodernisierung - wir verwandeln Ihr Badezimmer in eine Wohlfühloase. Professionell, termingerecht und zum Festpreis.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt beraten lassen
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Kostenlose Beratung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["In 90 Min. da", "Festpreis", "5 Jahre Garantie"].map((item) => (
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
                      Top bewertet
                    </Badge>
                  </div>
                  <h3 className="text-xl font-bold mb-4">Warum wir?</h3>
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
              <h2 className="text-3xl font-bold mb-4">Unsere Bad-Leistungen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompetente Beratung, professionelle Ausführung und erstklassiger Service - alles aus einer Hand.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-6 h-6 text-secondary" />
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
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
              <h2 className="text-3xl font-bold">Bereit für Ihr neues Bad?</h2>
              <p className="text-muted-foreground">
                Lassen Sie sich unverbindlich beraten. Wir kommen zu Ihnen, nehmen Maß und erstellen ein individuelles Angebot - kostenlos und ohne Verpflichtung.
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
                  Termin vereinbaren
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
