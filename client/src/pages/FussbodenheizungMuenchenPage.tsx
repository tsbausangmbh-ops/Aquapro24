import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/underfloor_heating_i_77879d46.jpg";
import { 
  Thermometer, 
  Phone, 
  CheckCircle2, 
  Layers,
  Ruler,
  Settings,
  Mail,
  Home,
  Calendar
} from "lucide-react";
import { Link } from "wouter";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";

export default function FussbodenheizungMuenchenPage() {
  const vorteile = [
    {
      icon: Thermometer,
      title: "Gleichmäßige Wärme",
      description: "Behagliche Strahlungswärme im ganzen Raum."
    },
    {
      icon: Layers,
      title: "Flexible Aufbauhöhe",
      description: "Moderne Systeme auch bei geringer Aufbauhöhe."
    },
    {
      icon: Settings,
      title: "Moderne Regelung",
      description: "Raumweise Temperatursteuerung möglich."
    },
    {
      icon: CheckCircle2,
      title: "Wärmepumpen-kompatibel",
      description: "Ideal für effiziente Niedertemperatur-Systeme."
    }
  ];

  const anfrageDaten = [
    { icon: Layers, text: "Aufbau: Estrich/Bodenbelag" },
    { icon: Ruler, text: "Fläche in m²" },
    { icon: Home, text: "Nachrüstung oder Komplettsanierung?" },
    { icon: Calendar, text: "Geplanter Renovierungszeitraum" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Flächenheizung München | Fußbodenheizung nachrüsten | Komfort Wärme"
        description="Flächenheizung in München: Fußbodenheizung nachrüsten für Komfort Wärme. Prüfung Aufbauhöhe, Regelung, Integration in moderne Systeme."
        canonical="https://aquapro24.de/fussbodenheizung-muenchen"
        keywords="Fußbodenheizung München, Fußbodenheizung nachrüsten München, Fußbodenheizung verlegen München, Fußbodenheizung Altbau München, Fußbodenheizung Kosten München, Flächenheizung München"
        aiSummary="AquaPro24 Fußbodenheizung München: Nachrüstung, Umbau, Integration in moderne Systeme. Prüfung Aufbauhöhe, Regelung, Untergrund. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Heizung", url: "https://aquapro24.de/heizung" },
          { name: "Fußbodenheizung München", url: "https://aquapro24.de/fussbodenheizung-muenchen" }
        ]}
        serviceSchema={{
          name: "Fußbodenheizung München - Nachrüstung & Modernisierung",
          description: "Fußbodenheizung München: Nachrüstung, Umbau, Integration. Prüfung Aufbauhöhe, Regelung, Untergrund.",
          serviceType: "Fußbodenheizung/Heizung",
          urlSlug: "fussbodenheizung-muenchen",
          catalogName: "Fußbodenheizung-Leistungen München",
          serviceOffers: [
            { name: "Fußbodenheizung nachrüsten" },
            { name: "Umbau bestehender Systeme" },
            { name: "Integration in Wärmepumpe" },
            { name: "Regelung & Steuerung" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 45
          }
        }}
        faqSchema={[
          {
            question: "Kann man Fußbodenheizung im Altbau nachrüsten?",
            answer: "Ja, mit modernen Dünnschicht-Systemen ist Nachrüstung auch bei geringer Aufbauhöhe möglich. Wir prüfen, was technisch sinnvoll ist."
          },
          {
            question: "Passt Fußbodenheizung zu einer Wärmepumpe?",
            answer: "Ja, Fußbodenheizung ist ideal für Wärmepumpen, da sie mit niedrigen Vorlauftemperaturen effizient arbeitet."
          },
          {
            question: "Welche Infos brauchen Sie für die Beratung?",
            answer: "Aufbau (Estrich/Belag), Fläche und Ziel (Nachrüstung/Komplettsanierung). So können wir passende Optionen nennen."
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
              <Badge className="mb-4 bg-amber-600 text-white">
                <Thermometer className="w-3 h-3 mr-1" />
                Fußbodenheizung München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Fußbodenheizung München – Nachrüstung & Modernisierung
              </h1>
              <p className="text-lg text-white/90 mb-6">
                Fußbodenheizung bedeutet Komfort – aber nur, wenn Aufbauhöhe, Regelung und Untergrund 
                richtig geplant sind. AquaPro24 hilft in München bei Nachrüstung, Umbau und Integration 
                in moderne Heizsysteme. Wir prüfen gemeinsam, was technisch sinnvoll ist und wie sich 
                die Arbeiten sauber in Ihren Renovierungsplan einfügen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-fussbodenheizung-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-fussbodenheizung">
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
              Vorteile der Fußbodenheizung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vorteile.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-amber-600" />
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
                Für Ihre Anfrage
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Teilen Sie uns kurz mit:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageDaten.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <item.icon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <p className="text-lg font-medium mb-4">
                      Schreiben Sie uns kurz Aufbau (Estrich/Belag), Fläche und Ziel (Nachrüstung/Komplettsanierung) – wir antworten mit Optionen.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <ServiceBooking 
                        serviceType="heizung" 
                        buttonText="Termin anfragen"
                        buttonSize="lg"
                      />
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-fussbodenheizung">
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
          title="Häufige Fragen zur Fußbodenheizung in München"
          items={[
            {
              question: "Kann eine Fußbodenheizung nachgerüstet werden?",
              answer: "Ja, abhängig von Aufbauhöhe, Untergrund und Nutzung. Wir prüfen die technische Machbarkeit."
            },
            {
              question: "Eignet sich Fußbodenheizung für Altbauwohnungen?",
              answer: "In vielen Fällen ja – besonders bei Sanierungen mit angepasstem Aufbau."
            },
            {
              question: "Wie lange dauert der Einbau?",
              answer: "Das hängt vom System und der Fläche ab. Nach Prüfung nennen wir Ihnen einen realistischen Zeitrahmen."
            },
            {
              question: "Kann die Fußbodenheizung mit meiner bestehenden Heizung kombiniert werden?",
              answer: "Ja, häufig ist eine Kombination möglich – wir prüfen das im Einzelfall."
            },
            {
              question: "Ist eine Fußbodenheizung energieeffizient?",
              answer: "Ja, besonders in Kombination mit modernen Heizsystemen wie Wärmepumpen."
            }
          ]}
        />
        <TrustBar />
        <ServiceAreas serviceName="Fußbodenheizung" />
        <RelatedServices currentService="heizung" />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
