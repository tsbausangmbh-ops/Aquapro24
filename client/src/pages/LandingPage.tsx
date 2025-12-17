import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import CallbackForm from "@/components/CallbackForm";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import {
  Phone,
  CheckCircle2,
  Star,
  Clock,
  Shield,
  Award,
  Users,
  Wrench,
  Droplets,
  Flame,
  Home
} from "lucide-react";
import { Link } from "wouter";

const services = [
  {
    icon: Droplets,
    title: "Sanitär & Klempner",
    description: "Rohrbruch, Verstopfung, Wasserhahn - schnelle Hilfe",
    price: "Ab 89€"
  },
  {
    icon: Wrench,
    title: "Badsanierung",
    description: "Komplettumbau in 2-3 Wochen zum Festpreis",
    price: "Ab 16.000€"
  },
  {
    icon: Flame,
    title: "Heizung & Wartung",
    description: "Reparatur, Austausch, Wartung aller Marken",
    price: "Ab 129€"
  },
  {
    icon: Home,
    title: "Wärmepumpe",
    description: "Installation mit bis zu 70% BAFA-Förderung",
    price: "Ab 18.000€"
  }
];

const trustPoints = [
  { icon: Clock, value: "45 Min.", label: "Ø Reaktionszeit" },
  { icon: Users, value: "2.847+", label: "Zufriedene Kunden" },
  { icon: Star, value: "4.9/5", label: "Bewertung" },
  { icon: Award, value: "20+ Jahre", label: "Erfahrung" }
];

const benefits = [
  "Festpreis-Garantie ohne versteckte Kosten",
  "Kostenlose Erstberatung vor Ort",
  "Meisterbetriebe mit 2 Jahren Gewährleistung",
  "Schnelle Terminvergabe - oft am selben Tag",
  "24/7 Notdienst in ganz München",
  "Alle Münchner Stadtteile & Umland"
];

export default function LandingPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO
        title="Sanitär & Heizung München | Festpreis | 24h Notdienst | AquaPro24"
        description="Sanitär, Heizung & Badsanierung in München. Festpreisgarantie, 45 Min. vor Ort, 2.847+ zufriedene Kunden. Jetzt anrufen: 0173 5994699"
        canonical="https://aquapro24.de/angebot"
      />
      
      {/* Minimal Conversion Header - No Navigation */}
      <header className="bg-background border-b py-3 sticky top-0 z-50">
        <div className="max-w-6xl mx-auto px-4 lg:px-8 flex items-center justify-between gap-4">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-10 h-10 bg-primary rounded-full flex items-center justify-center">
              <Droplets className="w-5 h-5 text-white" />
            </div>
            <span className="font-bold text-lg hidden sm:block">AquaPro24</span>
          </Link>
          <Button className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
            <a href="tel:+4917359994699" data-testid="button-call-header">
              <Phone className="w-4 h-4 mr-2" />
              <span className="hidden sm:inline">0173 5994699</span>
              <span className="sm:hidden">Anrufen</span>
            </a>
          </Button>
        </div>
      </header>
      
      <main id="main-content">
        <section className="bg-gradient-to-br from-primary via-primary to-orange-600 text-white py-12 lg:py-16">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div className="space-y-6">
                <Badge className="bg-white/20 text-white border-white/30">
                  <Star className="w-3 h-3 mr-1" />
                  Über 2.847 zufriedene Kunden in München
                </Badge>
                
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
                  Sanitär & Heizung München
                </h1>
                
                <p className="text-lg text-white/90">
                  <strong>Ihr lokales Partnernetzwerk seit 2005.</strong> Schnelle Hilfe bei 
                  Rohrbruch, Badsanierung, Heizungsausfall - mit Festpreisgarantie.
                </p>

                <div className="flex flex-wrap gap-3">
                  {benefits.slice(0, 3).map((benefit, i) => (
                    <div key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>

                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700 text-lg px-8" asChild>
                    <a href="tel:+4917359994699" data-testid="button-call-landing-hero">
                      <Phone className="w-5 h-5 mr-2" />
                      0173 5994699
                    </a>
                  </Button>
                  <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-green-700 text-lg px-8" asChild>
                    <Link href="/termin" data-testid="button-callback-landing">
                      <Phone className="w-5 h-5 mr-2" />
                      Rückruf anfordern
                    </Link>
                  </Button>
                </div>

                <p className="text-white/70 text-sm">
                  Kostenlose Erstberatung - unverbindlich und ohne versteckte Kosten
                </p>
              </div>

              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-6 border border-white/20">
                <h2 className="text-xl font-bold mb-4 text-center">Jetzt Rückruf anfordern</h2>
                <div className="space-y-4">
                  <div className="grid grid-cols-2 gap-4">
                    {trustPoints.map((point, i) => (
                      <div key={i} className="text-center p-3 bg-white/10 rounded-lg">
                        <point.icon className="w-6 h-6 mx-auto mb-2 text-accent" />
                        <div className="text-xl font-bold">{point.value}</div>
                        <div className="text-xs text-white/70">{point.label}</div>
                      </div>
                    ))}
                  </div>
                  <Button size="lg" className="w-full bg-red-600 hover:bg-red-700 text-white border-red-700 text-lg" asChild>
                    <a href="tel:+4917359994699" data-testid="button-call-landing-form">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-12 bg-muted/30">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Unsere Leistungen in München
              </h2>
              <p className="text-muted-foreground">
                Von der kleinen Reparatur bis zur Komplettsanierung - alles aus einer Hand
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, i) => (
                <Card key={i} className="hover-elevate text-center">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <service.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                    <Badge variant="secondary">{service.price}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-6xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Warum Münchner uns vertrauen
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, i) => (
                    <div key={i} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8">
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
                    <a href="tel:+4917359994699" data-testid="button-call-landing-benefits">
                      <Phone className="w-5 h-5 mr-2" />
                      Kostenlos beraten lassen
                    </a>
                  </Button>
                </div>
              </div>

              <Card className="bg-gradient-to-br from-secondary/5 to-secondary/10">
                <CardContent className="p-6">
                  <div className="text-center mb-6">
                    <Shield className="w-12 h-12 text-secondary mx-auto mb-3" />
                    <h3 className="text-xl font-bold">Unsere Garantien</h3>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Festpreis-Garantie</div>
                        <div className="text-sm text-muted-foreground">Der genannte Preis gilt - keine Nachforderungen</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">2 Jahre Gewährleistung</div>
                        <div className="text-sm text-muted-foreground">Auf alle unsere Arbeiten</div>
                      </div>
                    </div>
                    <div className="flex items-center gap-3 p-3 bg-background rounded-lg">
                      <CheckCircle2 className="w-5 h-5 text-accent" />
                      <div>
                        <div className="font-medium">Saubere Arbeit</div>
                        <div className="text-sm text-muted-foreground">Wir hinterlassen alles sauber</div>
                      </div>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-10 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Jetzt kostenlos beraten lassen!
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Rufen Sie uns an oder fordern Sie einen Rückruf an. Wir melden uns schnellstmöglich 
              und besprechen Ihre Situation - kostenlos und unverbindlich.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700 text-lg px-8" asChild>
                <a href="tel:+4917359994699" data-testid="button-call-landing-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  0173 5994699
                </a>
              </Button>
              <Button size="lg" className="bg-green-600 hover:bg-green-700 text-white border-green-700 text-lg px-8" asChild>
                <Link href="/termin" data-testid="button-callback-landing-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  Rückruf anfordern
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-2xl mx-auto px-4 lg:px-8">
            <CallbackForm />
          </div>
        </section>
      </main>

      {/* Minimal Compliance Footer */}
      <footer className="bg-muted/50 border-t py-6">
        <div className="max-w-6xl mx-auto px-4 lg:px-8">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center">
                <Droplets className="w-3 h-3 text-white" />
              </div>
              <span>AquaPro24 - Inhaber: Mustafa Sakar</span>
            </div>
            <div className="flex flex-wrap items-center justify-center gap-4">
              <Link href="/impressum" className="hover:text-foreground">Impressum</Link>
              <Link href="/datenschutz" className="hover:text-foreground">Datenschutz</Link>
              <a href="tel:+4917359994699" className="hover:text-foreground">0173 5994699</a>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
