import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Phone, 
  CheckCircle2, 
  Wrench,
  ShowerHead,
  PipetteIcon,
  Gauge,
  Clock,
  Shield,
  Award
} from "lucide-react";

export default function SanitaerPage() {
  const services = [
    {
      icon: Droplets,
      title: "Wasserinstallation",
      description: "Professionelle Installation von Wasserleitungen, Anschlüssen und Armaturen nach aktuellen Standards."
    },
    {
      icon: ShowerHead,
      title: "Sanitäranlagen",
      description: "Montage und Anschluss von WCs, Waschbecken, Duschen, Badewannen und Bidets."
    },
    {
      icon: PipetteIcon,
      title: "Abwassertechnik",
      description: "Verlegung und Reparatur von Abwasserleitungen, Rohrreinigung und Kanalarbeiten."
    },
    {
      icon: Wrench,
      title: "Reparaturservice",
      description: "Schnelle Reparatur von tropfenden Wasserhähnen, undichten Rohren und defekten Armaturen."
    },
    {
      icon: Gauge,
      title: "Druckprüfung",
      description: "Professionelle Dichtheitsprüfung und Drucktests für Wasserleitungen."
    },
    {
      icon: Shield,
      title: "Wartung",
      description: "Regelmäßige Wartung Ihrer Sanitäranlagen für langfristige Funktionssicherheit."
    }
  ];

  const benefits = [
    "Meisterbetrieb mit über 20 Jahren Erfahrung",
    "Festpreisgarantie ohne versteckte Kosten",
    "Schnelle Terminvergabe - oft am selben Tag",
    "Nur hochwertige Markenprodukte",
    "Saubere Arbeit mit Schutzmaterialien",
    "2 Jahre Gewährleistung auf alle Arbeiten"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      
      <main className="flex-1">
        <section className="relative py-16 md:py-24 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                <Droplets className="w-3 h-3 mr-1" />
                Sanitär-Fachbetrieb
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Sanitärinstallation & Wasserinstallation München
              </h1>
              <p className="text-lg text-muted-foreground mb-8">
                Ihr Experte für alle Sanitärarbeiten in München und Umgebung. Von der Wasserleitung 
                bis zur kompletten Sanitärinstallation - wir bieten Ihnen professionelle Lösungen 
                für Ihr Zuhause.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989123456789" data-testid="button-call-sanitaer">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="secondary" asChild>
                  <a href="mailto:info@sanitaer-muenchen.de" data-testid="button-email-sanitaer">
                    Anfrage senden
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Unsere Sanitär-Leistungen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vom kleinen Reparaturauftrag bis zur kompletten Neuinstallation - 
                wir sind Ihr zuverlässiger Partner für alle Sanitärarbeiten.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Warum Münchner Sanitär?
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-lg p-8 border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Meisterbetrieb</h3>
                    <p className="text-muted-foreground text-sm">Qualität vom Fachmann</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Schnelle Terminvergabe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span>2 Jahre Gewährleistung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="w-4 h-4 text-muted-foreground" />
                    <span>Markenprodukte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-16 md:py-20 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sanitär-Problem? Wir helfen sofort!
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Ob tropfender Wasserhahn, verstopfter Abfluss oder neue Sanitärinstallation - 
              rufen Sie uns an und wir kümmern uns darum.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-background text-foreground" asChild>
                <a href="tel:+4989123456789" data-testid="button-call-sanitaer-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  089 123 456 789
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget serviceCategory="sanitaer" />
    </div>
  );
}
