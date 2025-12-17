import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import CookieBanner from "@/components/CookieBanner";
import FloatingContactBar from "@/components/FloatingContactBar";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import CallbackForm from "@/components/CallbackForm";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Phone,
  Clock,
  AlertTriangle,
  Shield,
  Star,
  Wrench,
  Droplets,
  Flame,
  CheckCircle2,
  Zap,
  MapPin,
  Timer
} from "lucide-react";

const emergencyServices = [
  {
    icon: Droplets,
    title: "Rohrbruch & Wasserschaden",
    description: "Sofortige Leckortung und Reparatur. Wir stoppen den Schaden, bevor er größer wird.",
    price: "Ab 149€",
    time: "30-60 Min."
  },
  {
    icon: Wrench,
    title: "Verstopfter Abfluss",
    description: "Professionelle Rohrreinigung mit Hochdruck. Toilette, Waschbecken, Dusche - alles wird frei.",
    price: "Ab 89€",
    time: "30-60 Min."
  },
  {
    icon: Flame,
    title: "Heizungsausfall",
    description: "Heizung kaputt? Wir reparieren alle Marken - Viessmann, Vaillant, Buderus, Wolf und mehr.",
    price: "Ab 129€",
    time: "45-90 Min."
  },
  {
    icon: AlertTriangle,
    title: "Gasgeruch / Gasleck",
    description: "Bei Gasgeruch: Fenster öffnen, raus aus der Wohnung, uns anrufen. Wir kommen sofort!",
    price: "Auf Anfrage",
    time: "SOFORT"
  }
];

const trustPoints = [
  { icon: Timer, text: "Ø 45 Min. vor Ort" },
  { icon: Shield, text: "Festpreis-Garantie" },
  { icon: Star, text: "4.9/5 Bewertung" },
  { icon: CheckCircle2, text: "Meisterbetriebe" }
];

export default function NotdienstPage() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="24h Notdienst Sanitär & Heizung München | Sofort-Hilfe | AquaPro24"
        description="24/7 Notdienst für Sanitär und Heizung in München. Rohrbruch, Wasserschaden, Heizungsausfall? Wir sind in 30-60 Minuten bei Ihnen. Festpreisgarantie. Jetzt anrufen: 0173 5994699"
        canonical="https://aquapro24.de/notdienst"
      />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-red-600 via-red-700 to-red-800 text-white py-12 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-white/20 text-white border-white/30 backdrop-blur-sm">
                <Zap className="w-3 h-3 mr-1" />
                24/7 Notdienst - Auch jetzt erreichbar!
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Sanitär & Heizung Notdienst München
              </h1>
              <p className="text-lg text-white/90 mb-6">
                Rohrbruch? Wasserschaden? Heizung ausgefallen? <br className="hidden md:block" />
                <strong>Wir sind in 30-60 Minuten bei Ihnen!</strong>
              </p>
              
              <div className="flex flex-wrap justify-center gap-3 mb-8">
                {trustPoints.map((point, i) => (
                  <div key={i} className="flex items-center gap-2 bg-white/10 backdrop-blur-sm px-3 py-2 rounded-md">
                    <point.icon className="w-4 h-4" />
                    <span className="text-sm">{point.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex flex-col sm:flex-row justify-center gap-4">
                <Button size="lg" className="bg-white text-red-700 border-white/80 text-lg px-8 py-6" asChild>
                  <a href="tel:+4917359994699" data-testid="button-call-notdienst-hero">
                    <Phone className="w-5 h-5 mr-2 animate-pulse" />
                    0173 5994699
                  </a>
                </Button>
                <Button size="lg" className="bg-white text-red-700 border-white/80 text-lg px-8 py-6" asChild>
                  <Link href="/termin" data-testid="button-callback-notdienst">
                    <Phone className="w-5 h-5 mr-2" />
                    Rückruf anfordern
                  </Link>
                </Button>
              </div>

              <p className="text-white/70 text-sm mt-4">
                <MapPin className="w-4 h-4 inline mr-1" />
                Einsatzgebiet: München und 20km Umkreis
              </p>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-3">
                Unsere Notdienst-Leistungen
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Schnelle Hilfe bei allen Sanitär- und Heizungsproblemen - 24 Stunden am Tag, 7 Tage die Woche.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {emergencyServices.map((service, i) => (
                <Card key={i} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="p-3 bg-red-100 dark:bg-red-900/30 rounded-lg">
                        <service.icon className="w-6 h-6 text-red-600 dark:text-red-400" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-start justify-between gap-2 mb-2">
                          <h3 className="font-semibold text-lg">{service.title}</h3>
                          <Badge variant="secondary" className="shrink-0">
                            {service.time}
                          </Badge>
                        </div>
                        <p className="text-muted-foreground text-sm mb-3">
                          {service.description}
                        </p>
                        <div className="flex items-center justify-between">
                          <span className="font-semibold text-primary">{service.price}</span>
                          <Button size="sm" asChild>
                            <a href="tel:+4917359994699" data-testid={`button-call-${service.title.toLowerCase().replace(/\s+/g, '-')}`}>
                              <Phone className="w-3 h-3 mr-1" />
                              Jetzt anrufen
                            </a>
                          </Button>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              So funktioniert unser Notdienst
            </h2>
            
            <div className="grid md:grid-cols-3 gap-6 mb-10">
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">1</span>
                </div>
                <h3 className="font-semibold mb-2">Sie rufen an</h3>
                <p className="text-sm text-muted-foreground">
                  Schildern Sie uns kurz Ihr Problem. Wir sind 24/7 erreichbar.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">2</span>
                </div>
                <h3 className="font-semibold mb-2">Wir kommen</h3>
                <p className="text-sm text-muted-foreground">
                  In 30-60 Minuten ist unser Techniker bei Ihnen - mit allem Werkzeug.
                </p>
              </div>
              <div className="text-center">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-xl font-bold text-primary">3</span>
                </div>
                <h3 className="font-semibold mb-2">Problem gelöst</h3>
                <p className="text-sm text-muted-foreground">
                  Wir beheben den Schaden schnell und zuverlässig. Festpreis garantiert.
                </p>
              </div>
            </div>

            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <h3 className="text-xl font-semibold text-foreground">Warum AquaPro24 Notdienst?</h3>
              <ul>
                <li><strong>Schnelle Reaktionszeit:</strong> Durchschnittlich 45 Minuten bis wir vor Ort sind</li>
                <li><strong>Transparente Preise:</strong> Sie erhalten einen Festpreis vor Arbeitsbeginn - keine bösen Überraschungen</li>
                <li><strong>Erfahrene Meisterbetriebe:</strong> Unsere Partner sind geprüfte Fachbetriebe mit langjähriger Erfahrung</li>
                <li><strong>Alle Marken:</strong> Wir reparieren Heizungen aller Hersteller - Viessmann, Vaillant, Buderus, Wolf und mehr</li>
                <li><strong>Ersatzteile dabei:</strong> Die häufigsten Ersatzteile haben unsere Techniker im Fahrzeug</li>
              </ul>

              <h3 className="text-xl font-semibold text-foreground mt-8">Notdienst-Kosten</h3>
              <p>
                Unsere Notdienst-Pauschale beträgt <strong>89€ für die Anfahrt</strong> (München und 20km Umkreis). 
                Die Reparaturkosten nennen wir Ihnen transparent vor Arbeitsbeginn. Es gibt keine versteckten 
                Zuschläge für Nacht- oder Wochenendeinsätze.
              </p>
              
              <h3 className="text-xl font-semibold text-foreground mt-8">Einsatzgebiet</h3>
              <p>
                Unser Notdienst ist in ganz München und im Umkreis von 20 Kilometern aktiv. Das umfasst auch 
                Gemeinden wie <Link href="/stadtteil/gruenwald" className="text-secondary hover:underline" data-testid="link-gruenwald">Grünwald</Link>, 
                <Link href="/umland/unterhaching" className="text-secondary hover:underline" data-testid="link-unterhaching">Unterhaching</Link>, 
                <Link href="/umland/germering" className="text-secondary hover:underline" data-testid="link-germering">Germering</Link>, 
                <Link href="/umland/dachau" className="text-secondary hover:underline" data-testid="link-dachau">Dachau</Link> und weitere Umlandgemeinden.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 bg-red-600 text-white">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Notfall? Rufen Sie jetzt an!
            </h2>
            <p className="text-white/90 mb-6 max-w-2xl mx-auto">
              Unser Notdienst-Team ist rund um die Uhr für Sie da. 
              Bei Wasserschäden zählt jede Minute - zögern Sie nicht!
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-white text-red-700 border-white text-lg" asChild>
                <a href="tel:+4917359994699" data-testid="button-call-notdienst-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  0173 5994699
                </a>
              </Button>
              <Button size="lg" className="bg-white text-red-700 border-white" asChild>
                <Link href="/termin" data-testid="button-callback-notdienst-cta">
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

        <FreeConsultationBanner variant="compact" className="mx-4 lg:mx-8 mb-8 max-w-7xl lg:mx-auto" />
      </main>
      <Footer />
      <AIChatWidget />
      <CookieBanner />
      <FloatingContactBar />
    </div>
  );
}
