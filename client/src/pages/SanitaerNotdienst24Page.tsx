import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/emergency_plumber_fi_2fcdef5d.webp";
import { 
  AlertTriangle, 
  Phone, 
  CheckCircle2, 
  Droplets,
  Mail,
  Clock,
  Shield,
  Wrench,
  ShowerHead,
  CircleAlert
} from "lucide-react";
import { Link } from "wouter";

export default function SanitaerNotdienst24Page() {
  const notfallLeistungen = [
    {
      icon: Droplets,
      title: "Rohrbruch München 24h Notdienst",
      description: "Wasserrohrbruch sofort reparieren. Haupthahn absperren, Leck orten, Rohr flicken. Tag und Nacht."
    },
    {
      icon: CircleAlert,
      title: "Wasserschaden München Soforthilfe",
      description: "Wasser tropft durch Decke? Leckortung mit Wärmebild, Trocknung, Versicherungsnachweis."
    },
    {
      icon: Wrench,
      title: "Verstopfung München 24h entstopfen",
      description: "WC verstopft, Abfluss läuft über? Spirale, Hochdruckspülung. Ab 81€ Festpreis, auch nachts."
    },
    {
      icon: ShowerHead,
      title: "WC-Notfall München: Toilette defekt",
      description: "Spülkasten läuft, WC verstopft, Toilette undicht? 24h Soforthilfe, alle Marken repariert."
    }
  ];

  const vertrauensElemente = [
    {
      icon: Clock,
      title: "24/7 Erreichbar",
      description: "Rund um die Uhr, 365 Tage im Jahr"
    },
    {
      icon: Shield,
      title: "Festpreisgarantie",
      description: "Transparente Preise vor Arbeitsbeginn"
    },
    {
      icon: CheckCircle2,
      title: "Schnelle Reaktion",
      description: "Zeitnahe Rückmeldung nach Anfrage"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sanitär Notdienst München 24/7 | Soforthilfe bei Rohrbruch | AquaPro 24"
        description="24/7 Sanitär-Notdienst in München: Rohrbruch, Wasserschaden, Verstopfung. Schnelle Anfahrt, klare Kosten, Hilfe sofort."
        canonical="https://aquapro24.de/sanitaer-notdienst-24"
        keywords="Sanitär Notdienst 24h München, Rohrbruch Soforthilfe Festpreis, Klempner Notfall Wochenende Feiertag, Wasserschaden Leck abdichten sofort, WC verstopft Entstopfung 24h, Wasserleitung geplatzt Notdienst, Abfluss verstopft Nacht München"
        aiSummary="AquaPro 24 Sanitär Notdienst 24h München: Sofortige Hilfe bei Rohrbruch, Wasserschaden, Verstopfung und WC-Notfällen. 24/7 erreichbar, Festpreisgarantie. Kontakt: 089 444438872"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Sanitär", url: "https://aquapro24.de/sanitaer" },
          { name: "Sanitär Notdienst 24h", url: "https://aquapro24.de/sanitaer-notdienst-24" }
        ]}
        serviceSchema={{
          name: "Sanitär Notdienst 24h München",
          description: "24/7 Sanitär Notdienst München: Soforthilfe bei Rohrbruch, Wasserschaden, Verstopfung, WC-Notfall. Schnelle Reaktion, transparente Preise.",
          serviceType: "Notdienst/Sanitär",
          urlSlug: "sanitaer-notdienst-24",
          catalogName: "Sanitär Notdienst-Leistungen München",
          serviceOffers: [
            { name: "Rohrbruch Sofort-Reparatur" },
            { name: "Wasserschaden Notfall-Hilfe" },
            { name: "Verstopfung 24h Soforthilfe" },
            { name: "WC-Notfall Schnellreparatur" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 312
          }
        }}
        faqSchema={[
          {
            question: "Wie schnell ist der Sanitär Notdienst in München vor Ort?",
            answer: "Nach Eingang Ihrer Anfrage mit Fotos und Beschreibung priorisieren wir schnell und melden uns mit Verfügbarkeit und konkretem Vorgehen."
          },
          {
            question: "Was kostet der 24h Sanitär Notdienst?",
            answer: "Die Kosten hängen vom konkreten Problem ab. Sie erhalten vor Arbeitsbeginn eine transparente Festpreis-Einschätzung."
          },
          {
            question: "Ist der Notdienst auch an Feiertagen erreichbar?",
            answer: "Ja, unser Sanitär Notdienst ist 24 Stunden am Tag, 7 Tage die Woche und auch an Feiertagen für Sie erreichbar."
          }
        ]}
        ogImageAlt="Sanitär Notdienst 24 Stunden München Rohrbruch Wasserschaden - Klempner Soforthilfe nachts Wochenende"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-red-600 text-white">
                <AlertTriangle className="w-3 h-3 mr-1" />
                24h Notdienst
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Sanitär Notdienst 24h München: Klempner Soforthilfe rund um die Uhr
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Notdienst 24h</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner Notdienst München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrbruch Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserschaden Soforthilfe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">24 Stunden Klempner</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Verstopfung Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC Notfall München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Nacht Klempner</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wochenende Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Feiertag Sanitär</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss verstopft Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserrohrbruch München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Leckage Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Sofortservice</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrreinigung Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner Festpreis</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Notfall München</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Sanitär-Notfall mitten in der Nacht? Rohrbruch am Wochenende? WC verstopft am Feiertag? 
                Unser Sanitär Notdienst ist 24 Stunden am Tag, 7 Tage die Woche für Sie in München erreichbar. 
                Schnelle Hilfe bei Rohrbruch, Wasserschaden, Verstopfung und allen sanitären Notfällen.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Senden Sie uns Fotos vom Problem, Ihre Adresse und eine kurze Beschreibung – 
                wir melden uns schnellstmöglich mit Verfügbarkeit und transparenter Preiseinschätzung.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:+4989444438872" data-testid="button-call-sanitaer-notdienst-24">
                    <Phone className="w-4 h-4 mr-2" />
                    089 444438872
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-sanitaer-notdienst">
                    <Mail className="w-4 h-4 mr-2" />
                    Notfall melden
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Klempner Notdienst München: Rohrbruch, Wasserschaden & Verstopfung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {notfallLeistungen.map((item, index) => (
                <Card key={index} className="text-center border-red-200 dark:border-red-900/30">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              24/7 Sanitär Notdienst München: Schnell & Zuverlässig
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {vertrauensElemente.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Card className="bg-red-500/5 border-red-500/20 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <p className="text-lg font-medium mb-4">
                    Sanitär-Notfall? Rufen Sie jetzt an oder senden Sie uns eine Nachricht mit Fotos!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                      <a href="tel:+4989444438872" data-testid="button-call-sanitaer-notdienst-24-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt anrufen
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="mailto:info@aquapro24.de" data-testid="link-email-sanitaer-notdienst">
                        <Mail className="w-4 h-4 mr-2" />
                        info@aquapro24.de
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <FAQ 
          title="Häufige Fragen zum Sanitär Notdienst 24h"
          items={[
            {
              question: "Wann sollte ich den 24h Sanitär Notdienst kontaktieren?",
              answer: "Bei akuten Problemen wie Rohrbruch, Wasseraustritt, schweren Verstopfungen oder defekten Toiletten – besonders wenn diese außerhalb der regulären Geschäftszeiten auftreten."
            },
            {
              question: "Wie schnell reagiert der Notdienst auf meine Anfrage?",
              answer: "Nach Eingang Ihrer Anfrage mit Fotos und Beschreibung melden wir uns schnellstmöglich mit einer Einschätzung zur Verfügbarkeit und zum weiteren Vorgehen."
            },
            {
              question: "Ist der Sanitär Notdienst auch nachts und am Wochenende erreichbar?",
              answer: "Ja, unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche und auch an Feiertagen für Sanitär-Notfälle in München erreichbar."
            },
            {
              question: "Was kostet ein Einsatz des 24h Sanitär Notdienstes?",
              answer: "Die Kosten variieren je nach Art und Umfang des Problems. Sie erhalten vor Arbeitsbeginn eine transparente Festpreis-Einschätzung, damit Sie keine Überraschungen erleben."
            },
            {
              question: "Was sollte ich bei einem Wasserrohrbruch sofort tun?",
              answer: "Drehen Sie sofort den Hauptwasserhahn zu, um weiteren Schaden zu verhindern. Machen Sie Fotos vom Schaden und kontaktieren Sie uns umgehend mit Adresse und Beschreibung."
            }
          ]}
        />
      </main>
      
      <Footer />
    </div>
  );
}
