import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import EmergencyProcess from "@/components/EmergencyProcess";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroPicture } from "@/components/ResponsiveHero";
import { 
  AlertTriangle, 
  Phone, 
  CheckCircle2, 
  Droplets,
  Flame,
  Camera,
  Mail,
  MapPin,
  Clock,
  FileText,
  Star
} from "lucide-react";
import { Link } from "wouter";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";
import FAQ from "@/components/FAQ";

const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

export default function NotdienstMuenchenPage() {
  const notfaelle = [
    {
      icon: Droplets,
      title: "Rohrbruch München: Soforthilfe 45 Min",
      description: "Wasserrohrbruch absperren, Leck lokalisieren, Rohr reparieren. 24h Notdienst bei Wasserschaden."
    },
    {
      icon: Droplets,
      title: "Wasseraustritt München: Leckortung",
      description: "Wasser tropft durch Decke? Leckage orten mit Wärmebild, undichte Stelle finden und abdichten."
    },
    {
      icon: Flame,
      title: "Heizungsausfall München: Notfall 24h",
      description: "Heizung ausgefallen im Winter? Kessel defekt, Brenner kaputt? Notfall-Reparatur aller Marken."
    },
    {
      icon: AlertTriangle,
      title: "WC verstopft München: Soforthilfe",
      description: "Toilette verstopft, Abfluss läuft über? Entstopfung mit Spirale oder Hochdruck, sofortige Hilfe."
    }
  ];

  const anfrageDaten = [
    { icon: Camera, text: "Fotos/Videos vom Problem" },
    { icon: MapPin, text: "Genaue Adresse" },
    { icon: Clock, text: "Erreichbarkeit vor Ort" },
    { icon: FileText, text: "Was ist passiert? Seit wann? Wie stark?" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Notdienst München 24h | Rohrbruch & Heizungsausfall"
        description="Notdienst München 24h: Rohrbruch, Wasserschaden oder Heizungsausfall? Soforthilfe vom Sanitär- & Heizungsprofi."
        canonical="https://aquapro24.de/notdienst-muenchen"
        keywords="Notdienst München 24h Soforthilfe, Rohrbruch Wasserschaden sofort, Heizungsausfall Notfall München, Klempner Notdienst 60 Minuten, WC verstopft Soforthilfe München, Leckortung Wärmebild München, Sanitär Heizung Notdienst Festpreis"
        aiSummary="AquaPro 24 Notdienst München: Schnelle Hilfe bei Rohrbruch, Wasseraustritt, Heizungsausfall. Fotos senden für schnelle Priorisierung. Kontakt: 089 444438872"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Notdienst München", url: "https://aquapro24.de/notdienst-muenchen" }
        ]}
        serviceSchema={{
          name: "Sanitär & Heizung Notdienst München",
          description: "Notdienst München: Rohrbruch, Wasseraustritt, Heizungsausfall. Schnelle Priorisierung, transparente Einschätzung.",
          serviceType: "Notdienst/Sanitär/Heizung",
          urlSlug: "notdienst-muenchen",
          catalogName: "Notdienst-Leistungen München",
          serviceOffers: [
            { name: "Rohrbruch Soforthilfe" },
            { name: "Wasseraustritt Leckortung" },
            { name: "Heizungsausfall Notdienst" },
            { name: "Verstopfung Sofortbeseitigung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 234
          }
        }}
        faqSchema={[
          {
            question: "Wie schnell ist der Notdienst in München vor Ort?",
            answer: "Nach Eingang Ihrer Anfrage mit Fotos und Beschreibung priorisieren wir schnell und melden uns mit Verfügbarkeit und Vorgehen."
          },
          {
            question: "Was kostet der Notdienst in München?",
            answer: "Die Kosten hängen vom Problem ab. Sie erhalten schnell eine transparente Einschätzung zu Aufwand und Preisrahmen."
          },
          {
            question: "Was sollte ich bei einem Notfall tun?",
            answer: "Bei Rohrbruch: Hauptwasserhahn zudrehen. Bei Heizungsausfall: Sicherungen prüfen. Dann Fotos machen und uns kontaktieren."
          }
        ]}
        howToSchema={{
          name: "Rohrbruch Soforthilfe München - Erste Schritte",
          description: "So reagieren Sie richtig bei einem Rohrbruch oder Wasserschaden in München, bevor der Notdienst eintrifft.",
          totalTime: "PT10M",
          steps: [
            {
              name: "Hauptwasserhahn zudrehen",
              text: "Drehen Sie sofort den Hauptwasserhahn zu. Dieser befindet sich meist im Keller, neben dem Wasserzähler oder unter der Küchenspüle. Drehen Sie im Uhrzeigersinn bis zum Anschlag."
            },
            {
              name: "Strom im betroffenen Bereich ausschalten",
              text: "Schalten Sie die Sicherungen für den betroffenen Bereich aus, wenn Wasser in die Nähe von Steckdosen oder elektrischen Geräten gelangt ist. Sicherheit geht vor!"
            },
            {
              name: "Schaden dokumentieren",
              text: "Machen Sie Fotos und Videos vom Wasserschaden, dem Leck und der Umgebung. Diese Dokumentation hilft uns bei der schnellen Einschätzung und ist wichtig für die Versicherung."
            },
            {
              name: "Wasser aufwischen und auffangen",
              text: "Stellen Sie Eimer unter tropfende Stellen und wischen Sie stehendes Wasser auf. Dies verhindert weitere Schäden an Möbeln und Fußböden."
            },
            {
              name: "Notdienst kontaktieren",
              text: "Rufen Sie AquaPro 24 unter 089 444438872 an oder senden Sie Fotos per WhatsApp. Beschreiben Sie kurz: Was ist passiert? Seit wann? Wie stark?"
            }
          ]
        }}
        ogImageAlt="Sanitär Notdienst München 24/7 Rohrbruch Verstopfung sofort - Notfall Klempner 60 Minuten"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_notdienst" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-4">
                <Badge className="bg-destructive text-destructive-foreground gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  24/7 Notdienst
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  4.9 Google-Bewertung
                </Badge>
              </div>
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-4">
                Notdienst München 24h – Rohrbruch & Heizungsausfall Soforthilfe
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrbruch Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserrohrbruch beheben</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsausfall Soforthilfe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserschaden Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Leckage orten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss verstopft Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC verstopft Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung ausgefallen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Gasgeruch Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">24 Stunden Klempner</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wochenende Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Feiertag Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Hauptwasserhahn zudrehen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserstopp Notfall</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sofort Klempner München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Notdienst</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-3">
                <strong>Rohrbruch? Wasserrohr geplatzt? Heizung ausgefallen?</strong>
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-4">
                AquaPro 24 bietet Notdienst rund um die Uhr in München und Umgebung. Ab 60 Min. vor Ort, transparente Festpreise.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-3 mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Sonntagabend, Wasserrohrbruch in der Küche – Sie rufen an, und in 45 Minuten steht ein Fachmann vor der Tür, stoppt das Wasser und repariert das Rohr. Kein Warten, kein Stress.
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-6">
                <strong>2.800+ zufriedene Kunden</strong> · Notdienst-Einsatz ab 149€ Festpreis
              </p>
              <div className="flex flex-col sm:flex-row gap-3 mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-notdienst-muenchen">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white" asChild data-testid="button-termin-notdienst">
                  <Link href="/termin">
                    <Clock className="w-4 h-4" />
                    24h Terminbuchung
                  </Link>
                </Button>
              </div>
              <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
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
                  <span>Ab 60 Min. vor Ort</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              Sanitär Notdienst München: Rohrbruch, Wasserschaden & Heizungsausfall
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {notfaelle.map((item, index) => (
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-6 text-center">
                Klempner Notruf München: So erreichen Sie uns schnell
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Senden Sie uns bitte:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageDaten.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-red-50 dark:bg-red-950/20 rounded-lg border border-red-200 dark:border-red-900/30">
                    <item.icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-red-500/5 border-red-500/20">
                  <CardContent className="pt-6">
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                      Notfall? Bitte direkt per E-Mail/Formular mit Fotos anfragen – wir reagieren schnell.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                        <a href="tel:+4989444438872" data-testid="button-call-notdienst-2">
                          <Phone className="w-4 h-4 mr-2" />
                          Jetzt anrufen
                        </a>
                      </Button>
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-notdienst">
                          <Mail className="w-4 h-4 mr-2" />
                          info@aquapro24.de
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <FAQ 
          title="Häufige Fragen zum Notdienst in München"
          items={[
            {
              question: "Wann sollte ich den Notdienst kontaktieren?",
              answer: "Bei Rohrbruch, Wasseraustritt, Heizungsausfall oder akuten Schäden, die sofortiges Handeln erfordern."
            },
            {
              question: "Wie schnell reagieren Sie im Notfall?",
              answer: "Nach Ihrer Anfrage melden wir uns schnellstmöglich mit einer Einschätzung zur Verfügbarkeit."
            },
            {
              question: "Was sollte ich im Notfall mitschicken?",
              answer: "Adresse, Fotos/Videos, kurze Beschreibung des Schadens und Ihre Erreichbarkeit vor Ort."
            },
            {
              question: "Ist der Notdienst rund um die Uhr verfügbar?",
              answer: "Notdienst-Anfragen sind grundsätzlich auch außerhalb der regulären Zeiten möglich – je nach Situation und Verfügbarkeit."
            },
            {
              question: "Sind Notdienste teurer?",
              answer: "Notdienste können mit Zuschlägen verbunden sein. Wir kommunizieren dies transparent vorab."
            }
          ]}
        />
        <EmergencyProcess serviceType="sanitaer" />
        <TrustBar />
        <Suspense fallback={null}>
            <ServiceAreas serviceName="Notdienst"  />
        </Suspense>
        <KeywordLinks currentPage="notdienst" />
        <RelatedServices currentService="sanitaer" />
      </main>
      
      <Footer />
    </div>
  );
}
