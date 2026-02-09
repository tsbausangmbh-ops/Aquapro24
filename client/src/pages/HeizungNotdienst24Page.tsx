import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import TrustBar from "@/components/TrustBar";
import FAQ from "@/components/FAQ";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroPicture } from "@/components/ResponsiveHero";
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
  Settings,
  Star
} from "lucide-react";
import { Link } from "wouter";

export default function HeizungNotdienst24Page() {
  const notfallLeistungen = [
    {
      icon: Flame,
      title: "Heizungsausfall München 24h Notdienst",
      description: "Heizung komplett ausgefallen? Viessmann, Vaillant, Buderus, Wolf, Junkers vor Ort repariert."
    },
    {
      icon: ThermometerSnowflake,
      title: "Heizung kalt München: Keine Wärme?",
      description: "Heizkörper bleiben kalt? Pumpe defekt, Thermostat kaputt, Luft im System? 24h Soforthilfe."
    },
    {
      icon: Droplets,
      title: "Heizung verliert Wasser München 24h",
      description: "Druck fällt ständig? Leck im Heizsystem orten, Ausdehnungsgefäß prüfen, Rohr abdichten."
    },
    {
      icon: Settings,
      title: "Therme defekt München: Brenner-Störung",
      description: "Gastherme zeigt Fehler? Brenner zündet nicht? Alle Marken: Vaillant, Viessmann, Junkers, Wolf."
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
        title={seoMeta['/heizung-notdienst-24'].title}
        description={seoMeta['/heizung-notdienst-24'].description}
        canonical="https://aquapro24.de/heizung-notdienst-24"
        keywords={seoMeta['/heizung-notdienst-24'].keywords.join(', ')}
        aiSummary="AquaPro 24 Heizung Notdienst 24h München: Sofortige Hilfe bei Heizungsausfall, Thermendefekt, Brennerstörung und Heizungsproblemen. 24/7 erreichbar, Festpreisgarantie. Kontakt: 089 444438872"
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
        ogImageAlt="Heizung Notdienst München 24 Stunden Heizungsausfall Reparatur sofort - Notfall Heizungsmonteur"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_heizung_notdienst" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                <Badge className="bg-destructive text-destructive-foreground gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  24/7 Notdienst
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  4.9 Google-Bewertung
                </Badge>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-2 sm:mb-4">
                Heizung Notdienst 24h München: Heizungsreparatur Soforthilfe rund um die Uhr
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
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
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Heizung ausgefallen mitten im Winter? Therme zeigt Fehlercode?</strong>
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                Unser Heizung Notdienst ist 24/7 für Sie in München erreichbar. Ab 30 Min. vor Ort, transparente Festpreise.
              </p>
              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Freitagabend, die Heizung fällt komplett aus, draußen -5°C – Sie rufen an, und innerhalb von 45 Minuten steht ein Heizungsmonteur vor der Tür, findet den Fehler und bringt die Heizung wieder zum Laufen. So arbeiten wir.
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.800+ zufriedene Kunden</strong> · Heizungs-Notdienst ab 149€ Festpreis
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-heizung-notdienst-24">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} asChild data-testid="button-termin-heizung-notdienst">
                  <Link href="/termin">
                    <Clock className="w-4 h-4" />
                    24h Terminbuchung
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-sm">
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
                  <span>Alle Heizungsmarken</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              AquaPro 24 Heizung Notdienst München: Heizungsausfall, Therme & Brenner Störung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {notfallLeistungen.map((item, index) => (
                <Card key={index} className="text-center border-red-200 dark:border-red-900/30">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              AquaPro 24 Heizung Notdienst München: Schnell & Zuverlässig 24/7
            </h2>
            <div className="grid md:grid-cols-3 gap-6 mb-8">
              {vertrauensElemente.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="text-center">
              <Card className="bg-red-500/5 border-red-500/20 max-w-2xl mx-auto">
                <CardContent className="pt-6">
                  <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                    Heizungs-Notfall? Rufen Sie jetzt an oder senden Sie uns eine Nachricht mit Fotos!
                  </p>
                  <div className="flex flex-wrap justify-center gap-4">
                    <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                      <a href="tel:+4989444438872" data-testid="button-call-heizung-notdienst-24-2">
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

      <InternalLinks
        title="Weitere Heizungs-Services"
        variant="footer-cta"
        links={[
          { href: "/notdienst-muenchen", text: "Notdienst München", description: "24/7 Soforthilfe für alle Notfälle" },
          { href: "/heizung", text: "Heizung komplett", description: "Wartung, Reparatur & Modernisierung" },
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Installation mit bis zu 70% Förderung" },
          { href: "/fussbodenheizung-muenchen", text: "Fußbodenheizung", description: "Installation & Nachrüstung" },
          { href: "/foerderung", text: "Heizungsförderung 2026", description: "BAFA & KfW: Bis 70% Zuschuss" },
        ]}
      />
      <Footer />
    </div>
  );
}
