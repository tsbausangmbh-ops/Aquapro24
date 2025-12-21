import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import BackButton from "@/components/BackButton";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heating_technician_r_d9832fb9.jpg";
import { 
  AlertTriangle, 
  Phone, 
  CheckCircle2, 
  Flame,
  Mail,
  Clock,
  Shield,
  Thermometer,
  ThermometerSnowflake,
  Droplets,
  Settings
} from "lucide-react";
import { Link } from "wouter";

export default function HeizungNotdienst24Page() {
  const notfallLeistungen = [
    {
      icon: Flame,
      title: "Heizungsausfall München: Sofort-Reparatur 24h",
      description: "Schnelle Diagnose und Reparatur bei komplettem Heizungsausfall - Tag und Nacht verfügbar."
    },
    {
      icon: ThermometerSnowflake,
      title: "Heizung kalt München: Notfall-Hilfe",
      description: "Keine Wärme trotz laufender Heizung? Wir finden und beheben die Ursache sofort."
    },
    {
      icon: Droplets,
      title: "Heizung verliert Wasser: 24h Soforthilfe",
      description: "Wasserverlust an der Heizung? Schnelle Leckortung und Reparatur - auch nachts."
    },
    {
      icon: Settings,
      title: "Therme/Brenner Störung: Schnelle Reparatur",
      description: "Brennerstörung oder Thermenausfall? Wir helfen sofort - 24 Stunden am Tag."
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
        title="Heizung Notdienst 24h München | Heizungsausfall Soforthilfe 24/7"
        description="Heizung Notdienst 24 Stunden München - Soforthilfe bei Heizungsausfall, keine Wärme, Therme defekt. 24/7 erreichbar. Jetzt anrufen: 0152 12274043"
        canonical="https://aquapro24.de/heizung-notdienst-24"
        keywords="Heizung Notdienst 24h, Heizungsausfall Notfall, Heizung reparieren, Heizung Notdienst München, 24h Heizung München, Notfall Heizung, Therme Notdienst, Heizung ausgefallen, Brenner Störung, keine Wärme Notfall, Heizung 24 Stunden, Heizung Soforthilfe, Nacht Notdienst Heizung, Wochenende Heizung, Feiertag Heizung Notdienst"
        aiSummary="AquaPro24 Heizung Notdienst 24h München: Sofortige Hilfe bei Heizungsausfall, Thermendefekt, Brennerstörung und Heizungsproblemen. 24/7 erreichbar, Festpreisgarantie. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Heizung", url: "https://aquapro24.de/heizung" },
          { name: "Heizung Notdienst 24h", url: "https://aquapro24.de/heizung-notdienst-24" }
        ]}
        serviceSchema={{
          name: "Heizung Notdienst 24h München",
          description: "24/7 Heizung Notdienst München: Soforthilfe bei Heizungsausfall, keine Wärme, Thermendefekt, Brennerstörung. Schnelle Reaktion, transparente Preise.",
          serviceType: "Notdienst/Heizung",
          urlSlug: "heizung-notdienst-24",
          catalogName: "Heizung Notdienst-Leistungen München",
          serviceOffers: [
            { name: "Heizungsausfall Sofort-Reparatur" },
            { name: "Keine Wärme Notfall-Hilfe" },
            { name: "Heizung Wasserverlust Soforthilfe" },
            { name: "Therme/Brenner Schnellreparatur" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 287
          }
        }}
        faqSchema={[
          {
            question: "Wie schnell ist der Heizung Notdienst in München vor Ort?",
            answer: "Nach Eingang Ihrer Anfrage mit Fotos und Beschreibung priorisieren wir schnell und melden uns mit Verfügbarkeit und konkretem Vorgehen."
          },
          {
            question: "Was kostet der 24h Heizung Notdienst?",
            answer: "Die Kosten hängen vom konkreten Problem ab. Sie erhalten vor Arbeitsbeginn eine transparente Festpreis-Einschätzung."
          },
          {
            question: "Ist der Heizung Notdienst auch an Feiertagen erreichbar?",
            answer: "Ja, unser Heizung Notdienst ist 24 Stunden am Tag, 7 Tage die Woche und auch an Feiertagen für Sie erreichbar."
          }
        ]}
      />
      <Header />
      <BackButton />
      
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
                24h Heizung Notdienst
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Heizung Notdienst 24h München: Heizungsreparatur Soforthilfe rund um die Uhr
              </h1>
              <div className="flex flex-wrap gap-1.5 mt-3" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Notdienst 24h</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsausfall München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung reparieren Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Therme Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">24 Stunden Heizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Brenner Störung Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung kalt Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Nacht Heizung Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wochenende Heizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Feiertag Heizung Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Wasserverlust</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Gasheizung Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Ölheizung Störung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Sofortservice</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsmonteur Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Festpreis</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Notfall München</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Heizungsausfall mitten in der Nacht? Keine Wärme am Wochenende? Therme defekt am Feiertag? 
                Unser Heizung Notdienst ist 24 Stunden am Tag, 7 Tage die Woche für Sie in München erreichbar. 
                Schnelle Hilfe bei Heizungsausfall, Brennerstörung, Wasserverlust und allen Heizungsnotfällen.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Senden Sie uns Fotos vom Problem, Fehlercodes und eine kurze Beschreibung – 
                wir melden uns schnellstmöglich mit Verfügbarkeit und transparenter Preiseinschätzung.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-heizung-notdienst-24">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-heizung-notdienst">
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
              Heizung Notdienst München: Heizungsausfall, Therme & Brenner Störung
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
              24/7 Heizung Notdienst München: Schnell & Zuverlässig
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
                    Heizungs-Notfall? Rufen Sie jetzt an oder senden Sie uns eine Nachricht mit Fotos!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                      <a href="tel:+4915212274043" data-testid="button-call-heizung-notdienst-24-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt anrufen
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <a href="mailto:info@aquapro24.de" data-testid="link-email-heizung-notdienst">
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
          title="Häufige Fragen zum Heizung Notdienst 24h"
          items={[
            {
              question: "Wann sollte ich den 24h Heizung Notdienst kontaktieren?",
              answer: "Bei akuten Problemen wie komplettem Heizungsausfall, Brennerstörung, Wasserverlust an der Heizung oder wenn Sie im Winter keine Wärme haben – besonders wenn diese außerhalb der regulären Geschäftszeiten auftreten."
            },
            {
              question: "Wie schnell reagiert der Heizung Notdienst auf meine Anfrage?",
              answer: "Nach Eingang Ihrer Anfrage mit Fotos, Fehlercode und Beschreibung melden wir uns schnellstmöglich mit einer Einschätzung zur Verfügbarkeit und zum weiteren Vorgehen."
            },
            {
              question: "Ist der Heizung Notdienst auch nachts und am Wochenende erreichbar?",
              answer: "Ja, unser Notdienst ist 24 Stunden am Tag, 7 Tage die Woche und auch an Feiertagen für Heizungs-Notfälle in München erreichbar."
            },
            {
              question: "Was kostet ein Einsatz des 24h Heizung Notdienstes?",
              answer: "Die Kosten variieren je nach Art und Umfang des Problems. Sie erhalten vor Arbeitsbeginn eine transparente Festpreis-Einschätzung, damit Sie keine Überraschungen erleben."
            },
            {
              question: "Was sollte ich bei einem Heizungsausfall sofort tun?",
              answer: "Prüfen Sie zunächst die Sicherungen und ob die Therme Strom hat. Notieren Sie eventuelle Fehlercodes am Display. Machen Sie Fotos vom Gerät und Typenschild und kontaktieren Sie uns mit diesen Informationen."
            }
          ]}
        />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
