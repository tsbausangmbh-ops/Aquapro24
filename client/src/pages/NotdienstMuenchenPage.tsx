import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import EmergencyProcess from "@/components/EmergencyProcess";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/emergency_plumber_fi_2fcdef5d.jpg";
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
  FileText
} from "lucide-react";
import { Link } from "wouter";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";

export default function NotdienstMuenchenPage() {
  const notfaelle = [
    {
      icon: Droplets,
      title: "Rohrbruch",
      description: "Sofortige Absperrung und Reparatur bei Wasseraustritt."
    },
    {
      icon: Droplets,
      title: "Wasseraustritt",
      description: "Schnelle Lokalisierung und Behebung der Leckage."
    },
    {
      icon: Flame,
      title: "Heizungsausfall",
      description: "Notfall-Reparatur bei Heizungsdefekt."
    },
    {
      icon: AlertTriangle,
      title: "Verstopfung",
      description: "Sofortige Beseitigung schwerer Verstopfungen."
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
        title="Rohrbruch Notfall München | Wasserrohrbruch | Heizungsausfall 24h"
        description="Rohrbruch Notfall oder Wasserrohrbruch? Heizungsausfall 24h Notdienst München. Fotos senden, schnelle Rückmeldung, sofortige Hilfe."
        canonical="https://aquapro24.de/notdienst-muenchen"
        keywords="Notdienst München, Sanitär Notdienst München, Heizung Notdienst München, Rohrbruch Notdienst München, Klempner Notdienst München, 24h Notdienst München, Wasserschaden Notdienst München"
        aiSummary="AquaPro24 Notdienst München: Schnelle Hilfe bei Rohrbruch, Wasseraustritt, Heizungsausfall. Fotos senden für schnelle Priorisierung. Kontakt: 0152 12274043"
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
                Notdienst München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Sanitär & Heizung Notdienst München – schnelle Hilfe bei Rohrbruch & Ausfall
              </h1>
              <p className="text-lg text-white/90 mb-4">
                Bei Rohrbruch, Wasseraustritt oder Heizungsausfall zählt Tempo – aber auch eine saubere 
                Einschätzung. AquaPro24 bietet Notdienst-Optionen in München und Umgebung. Damit wir 
                schnell priorisieren können, senden Sie uns bitte Fotos/Videos, Adresse, Erreichbarkeit 
                vor Ort und eine Kurzbeschreibung (Was ist passiert? Seit wann? Wie stark?).
              </p>
              <p className="text-lg text-white/80 mb-6">
                Sie erhalten schnell eine Rückmeldung mit Verfügbarkeit, Vorgehen und – wenn möglich – 
                einer transparenten Einschätzung zu Aufwand/Preisrahmen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-notdienst-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-notdienst">
                    <Mail className="w-4 h-4 mr-2" />
                    Notfall melden
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Typische Notfälle
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {notfaelle.map((item, index) => (
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
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
                Für schnelle Priorisierung
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
                    <p className="text-lg font-medium mb-4">
                      Notfall? Bitte direkt per E-Mail/Formular mit Fotos anfragen – wir reagieren schnell.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Button size="lg" className="bg-red-600 hover:bg-red-700" asChild>
                        <a href="tel:+4915212274043" data-testid="button-call-notdienst-2">
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
        <ServiceAreas serviceName="Notdienst" />
        <RelatedServices currentService="sanitaer" />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
