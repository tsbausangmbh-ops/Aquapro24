import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroPicture } from "@/components/ResponsiveHero";
import { 
  Droplets, 
  Phone, 
  CheckCircle2, 
  Wrench,
  ShowerHead,
  PipetteIcon,
  Mail,
  Camera,
  Clock,
  MapPin
} from "lucide-react";
import { Link } from "wouter";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";
import FAQ from "@/components/FAQ";

const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

export default function SanitaerMuenchenPage() {
  const leistungen = [
    {
      icon: Wrench,
      title: "Wasserhahn wechseln München ab 80€",
      description: "Armatur austauschen, Mischbatterie montieren. Grohe, Hansgrohe, Geberit, Blanco. Festpreis inkl. Anfahrt."
    },
    {
      icon: Droplets,
      title: "Rohr undicht München: Leckortung",
      description: "Wasserfleck an Wand oder Decke? Leckage orten, undichtes Rohr finden und reparieren. Moderne Technik."
    },
    {
      icon: ShowerHead,
      title: "WC austauschen München ab 180€",
      description: "Toilette erneuern, Spülkasten tauschen, Waschbecken montieren. Geberit, Villeroy & Boch, Duravit."
    },
    {
      icon: PipetteIcon,
      title: "Abfluss verstopft München ab 81€",
      description: "WC verstopft, Dusche läuft nicht ab? Rohrreinigung mit Spirale oder Hochdruck. Notdienst 24h."
    }
  ];

  const anfrageTipps = [
    { icon: MapPin, text: "Adresse des Einsatzortes" },
    { icon: Wrench, text: "Kurze Problembeschreibung" },
    { icon: Camera, text: "Fotos vom Problem (wenn möglich)" },
    { icon: Clock, text: "Zeitraum für Zugang" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sanitär München – Klempner & Installateur Notdienst | AquaPro 24"
        description="Sanitär-Service München: Rohrreinigung, Armaturen, Wasserschaden. 24/7 Notdienst. Festpreise. Tel: 089 444438872"
        canonical="https://aquapro24.de/sanitaer-muenchen"
        keywords="Sanitär München, Sanitärinstallateur München, Sanitärinstallation München, Klempner München, Installateur München, Sanitärtechniker München, Sanitärfirma München, Armaturen austauschen München, Armaturen montieren München, Wasserhahn wechseln München, Wasserhahn austauschen München, Armatur reparieren München, WC Austausch München, WC montieren München, Toilette einbauen München, Waschtisch München, Waschtisch montieren München, Waschbecken einbauen München, Spülkasten reparieren München, Spülkasten austauschen München, Sanitär Notdienst München, Klempner Notdienst München, Rohrbruch München, Rohrreinigung München, Abfluss verstopft München, Wasserleitung München, Wasseranschluss München, Grohe München, Hansgrohe München, Geberit München, Sanitär Festpreis München, Sanitär günstig München"
        aiSummary="AquaPro 24 Sanitär München: Professionelle Sanitärarbeiten - Armaturen, Leckagen, WC-Austausch, Badsanierung-Vorbereitung. Transparenter Ablauf, schnelle Rückmeldung. Kontakt: 089 444438872"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Sanitär", url: "https://aquapro24.de/sanitaer" },
          { name: "Sanitär München", url: "https://aquapro24.de/sanitaer-muenchen" }
        ]}
        serviceSchema={{
          name: "Sanitär München - Installation & Reparatur",
          description: "Sanitärarbeiten in München: Installation, Reparatur, Armaturen, WC-Austausch. Strukturiert, transparent, schnelle Hilfe.",
          serviceType: "Sanitär/Installation",
          urlSlug: "sanitaer-muenchen",
          catalogName: "Sanitär-Leistungen München",
          serviceOffers: [
            { name: "Armaturen & Anschlüsse Küche/Bad" },
            { name: "Leckage-Check & Reparaturen" },
            { name: "WC/Waschtisch/Spülkasten Austausch" },
            { name: "Vorbereitung Badsanierung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          }
        }}
        faqSchema={[
          {
            question: "Welche Sanitär-Leistungen bietet AquaPro 24 in München?",
            answer: "Wir bieten Installation und Reparatur von Armaturen, Leckage-Checks, Austausch von WC/Waschtisch/Spülkasten sowie Vorbereitungen für Badsanierungen in allen Münchner Stadtteilen."
          },
          {
            question: "Wie schnell bekomme ich einen Termin für Sanitärarbeiten?",
            answer: "Nach Eingang Ihrer Anfrage mit Fotos und Problembeschreibung melden wir uns zeitnah mit konkreten Terminoptionen. Bei dringenden Fällen oft am selben oder nächsten Tag."
          },
          {
            question: "Was kostet ein Sanitär-Einsatz in München?",
            answer: "Die Kosten hängen vom Umfang ab. Für Standard-Leistungen bieten wir klare Preisrahmen. Bei komplexeren Fällen erhalten Sie vorab eine transparente Einschätzung nach Sichtung Ihrer Fotos."
          }
        ]}
        ogImageAlt="Sanitär München Installation Reparatur Wasserleitung - Sanitärinstallateur Meisterbetrieb Festpreis"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="hero-section relative py-6 lg:py-8 overflow-hidden">
          <HeroPicture heroKey="hero_sanitaer_muenchen" alt="" />
          <div className="hero-gradient absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="hero-text-content relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge variant="secondary" className="mb-4">
                <Droplets className="w-3 h-3 mr-1" />
                Sanitär München
              </Badge>
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold mb-4 text-white">
                Sanitär München – Klempner Installation & Reparatur Festpreis
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitärinstallateur München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner Festpreis</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserleitung verlegen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Armatur montieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC austauschen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Waschtisch einbauen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Spülkasten reparieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Leckage beheben</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrbruch reparieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss reinigen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Grohe Montage</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Hansgrohe Installation</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Geberit Einbau</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">schnelle Termine</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">transparente Preise</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">geprüfte Fachbetriebe</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4">
                AquaPro 24 ist Ihr Ansprechpartner für Sanitärarbeiten in München – von der sauberen 
                Installation bis zur schnellen Reparatur. Ob undichte Armatur, defektes Eckventil, 
                WC-Spülung, Wasseranschluss für Küche oder die komplette Erneuerung von Leitungen: 
                Wir kümmern uns strukturiert, transparent und mit einem klaren Ablauf.
              </p>
              <p className="text-sm sm:text-base lg:text-lg text-white/80 mb-6">
                Damit wir Ihnen schnell helfen können, senden Sie uns bitte kurz Adresse, Problem, 
                Fotos und – wenn möglich – den Zeitraum, in dem wir Zugang haben. So erhalten Sie 
                zügig eine konkrete Rückmeldung mit Terminoptionen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989444438872" data-testid="button-call-sanitaer-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    089 444438872
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-sanitaer">
                    <Mail className="w-4 h-4 mr-2" />
                    Anfrage senden
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              Installateur München: Reparatur, Montage & Neuinstallation
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((item, index) => (
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
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-6 text-center">
                Sanitär Termin München: Schnelle Anfrage & Terminbestätigung
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Für eine schnelle Bearbeitung senden Sie uns bitte:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageTipps.map((tipp, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <tipp.icon className="w-5 h-5 text-primary flex-shrink-0" />
                    <span>{tipp.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-primary/5 border-primary/20">
                  <CardContent className="pt-6">
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                      Schreiben Sie uns über das Formular oder per E-Mail – wir antworten zeitnah mit den nächsten Schritten.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Suspense fallback={null}>
                        <ServiceBooking 
                          serviceType="sanitaer"
                          buttonText="Termin anfragen"
                          buttonSize="lg"
                        />
                      </Suspense>
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-sanitaer">
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
          title="Häufige Fragen zu Sanitär in München"
          items={[
            {
              question: "Welche Sanitärarbeiten übernehmen Sie in München?",
              answer: "Wir übernehmen Reparaturen, Neuinstallationen und Sanierungen – z. B. Armaturen, WC, Waschtisch, Leitungen, Anschlüsse für Küche und Bad."
            },
            {
              question: "Helfen Sie auch bei kleinen Reparaturen?",
              answer: "Ja. Auch kleinere Defekte wie tropfende Armaturen oder defekte Spülkästen übernehmen wir zuverlässig."
            },
            {
              question: "Wie schnell bekomme ich einen Termin?",
              answer: "Nach Ihrer Anfrage melden wir uns zeitnah mit realistischen Terminoptionen – abhängig von Aufwand und Dringlichkeit."
            },
            {
              question: "Was sollte ich bei der Anfrage mitschicken?",
              answer: "Adresse, kurze Problembeschreibung und wenn möglich Fotos. Das beschleunigt die Einschätzung erheblich."
            },
            {
              question: "Arbeiten Sie mit Festpreisen?",
              answer: "Für viele Standardarbeiten nennen wir vorab einen klaren Preisrahmen oder Festpreis – transparent und nachvollziehbar."
            }
          ]}
        />
        <TrustBar />
        <Suspense fallback={null}>
            <ServiceAreas serviceName="Sanitär"  />
        </Suspense>
        <KeywordLinks currentPage="sanitaer" />
        <RelatedServices currentService="sanitaer" />
      </main>
      
      <Footer />
    </div>
  );
}
