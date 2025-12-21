import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/professional_plumber_39413514.jpg";
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
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";

export default function SanitaerMuenchenPage() {
  const leistungen = [
    {
      icon: Wrench,
      title: "Armaturen & Anschlüsse",
      description: "Installation und Reparatur von Armaturen in Küche und Bad - alle Marken."
    },
    {
      icon: Droplets,
      title: "Leckage-Check & Reparaturen",
      description: "Schnelle Ortung und Behebung von Wasserschäden und undichten Stellen."
    },
    {
      icon: ShowerHead,
      title: "WC/Waschtisch/Spülkasten",
      description: "Austausch und Neuinstallation von Sanitärobjekten."
    },
    {
      icon: PipetteIcon,
      title: "Vorbereitung Badsanierung",
      description: "Professionelle Vorarbeiten für Ihre Badmodernisierung."
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
        title="Klempner München Süd | Sanitär Installation | schnelle Hilfe"
        description="Klempner München: Sanitär Installation und schnelle Hilfe bei Reparaturen. WC, Waschtisch, Armaturen - transparente Preise, schnelle Termine."
        canonical="https://aquapro24.de/sanitaer-muenchen"
        keywords="Sanitär München, Sanitärinstallation München, Klempner München, Armatur reparieren München, WC Austausch München, Waschtisch München, Sanitär Notdienst München, Installateur München"
        aiSummary="AquaPro24 Sanitär München: Professionelle Sanitärarbeiten - Armaturen, Leckagen, WC-Austausch, Badsanierung-Vorbereitung. Transparenter Ablauf, schnelle Rückmeldung. Kontakt: 0152 12274043"
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
            question: "Welche Sanitär-Leistungen bietet AquaPro24 in München?",
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
              <Badge variant="secondary" className="mb-4">
                <Droplets className="w-3 h-3 mr-1" />
                Sanitär München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Sanitär München – Installation, Reparatur & schnelle Hilfe
              </h1>
              <p className="text-lg text-white/90 mb-4">
                AquaPro24 ist Ihr Ansprechpartner für Sanitärarbeiten in München – von der sauberen 
                Installation bis zur schnellen Reparatur. Ob undichte Armatur, defektes Eckventil, 
                WC-Spülung, Wasseranschluss für Küche oder die komplette Erneuerung von Leitungen: 
                Wir kümmern uns strukturiert, transparent und mit einem klaren Ablauf.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Damit wir Ihnen schnell helfen können, senden Sie uns bitte kurz Adresse, Problem, 
                Fotos und – wenn möglich – den Zeitraum, in dem wir Zugang haben. So erhalten Sie 
                zügig eine konkrete Rückmeldung mit Terminoptionen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-sanitaer-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
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
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Typische Sanitär-Leistungen in München
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((item, index) => (
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
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                So geht es am schnellsten
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
                    <p className="text-lg font-medium mb-4">
                      Schreiben Sie uns über das Formular oder per E-Mail – wir antworten zeitnah mit den nächsten Schritten.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <ServiceBooking 
                        serviceType="sanitaer"
                        buttonText="Termin anfragen"
                        buttonSize="lg"
                      />
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
        <ServiceAreas serviceName="Sanitär"  />
        <RelatedServices currentService="sanitaer" />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
