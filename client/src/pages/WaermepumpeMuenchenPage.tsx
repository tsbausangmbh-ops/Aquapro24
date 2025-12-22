import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heat_pump_installati_53374252.jpg";
import { 
  Leaf, 
  Phone, 
  CheckCircle2, 
  Home,
  Ruler,
  Thermometer,
  Mail,
  FileText,
  Calendar,
  Settings
} from "lucide-react";
import { Link } from "wouter";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";

export default function WaermepumpeMuenchenPage() {
  const schritte = [
    {
      icon: FileText,
      title: "Wärmepumpe Eignungscheck München gratis",
      description: "Gebäudeprüfung: Dämmung, Heizlast, Heizkörper. Altbau oder Neubau geeignet? Kostenlose Ersteinschätzung."
    },
    {
      icon: Settings,
      title: "BAFA Förderantrag bis 70% übernommen",
      description: "Förderberechnung: Basis 30% + Einkommensbonus 30% + Geschwindigkeit 20%. Antragstellung komplett inklusive."
    },
    {
      icon: Calendar,
      title: "Wärmepumpe München: Installation 2-3 Tage",
      description: "Vaillant aroTHERM, Viessmann Vitocal, Bosch Compress, Wolf CHA. Fachgerechte Montage mit Garantie."
    },
    {
      icon: CheckCircle2,
      title: "Wärmepumpe München: 5 Jahre Garantie",
      description: "Inbetriebnahme, Einweisung, Wartungsvertrag optional. 5 Jahre Gewährleistung auf Installation."
    }
  ];

  const anfrageDaten = [
    { icon: Calendar, text: "Baujahr des Gebäudes" },
    { icon: Ruler, text: "Wohnfläche in m²" },
    { icon: Thermometer, text: "Heizkörper oder Fußbodenheizung?" },
    { icon: Home, text: "Aktuelles Heizsystem" },
    { icon: FileText, text: "Energieausweis (falls vorhanden)" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Wärmepumpe installieren München | Profi-Service"
        description="Wärmepumpe Beratung in München: Professionelle Planung und Installation vom Profi. Gebäudeprüfung, Heizlastberechnung, transparente Schritte."
        canonical="https://aquapro24.de/waermepumpe-muenchen"
        keywords="Wärmepumpe München, Wärmepumpe Installation München, Luft-Wasser-Wärmepumpe München, Wärmepumpe Förderung München, Heizungstausch Wärmepumpe München, Wärmepumpe Altbau München"
        aiSummary="AquaPro24 Wärmepumpe München: Beratung, Planung, Installation. Prüfung Gebäudedaten, Heizlast, Hydraulik. Transparente Schritte. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Wärmepumpe", url: "https://aquapro24.de/waermepumpe" },
          { name: "Wärmepumpe München", url: "https://aquapro24.de/waermepumpe-muenchen" }
        ]}
        serviceSchema={{
          name: "Wärmepumpe München - Beratung & Installation",
          description: "Wärmepumpen-Service München: Ersteinschätzung, Planung, Vorbereitung, Installation. Transparente Schritte.",
          serviceType: "Wärmepumpe/Heizung",
          urlSlug: "waermepumpe-muenchen",
          catalogName: "Wärmepumpen-Leistungen München",
          serviceOffers: [
            { name: "Ersteinschätzung & Gebäudeprüfung" },
            { name: "Heizlastberechnung & Planung" },
            { name: "Vorbereitung Verteilung/Regelung" },
            { name: "Installation & Inbetriebnahme" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 67
          }
        }}
        faqSchema={[
          {
            question: "Ist mein Haus für eine Wärmepumpe geeignet?",
            answer: "Das hängt von Gebäudedaten, Heizlast und vorhandener Verteilung ab. Senden Sie uns Baujahr, Wohnfläche und aktuelle Heizungsart für eine realistische Ersteinschätzung."
          },
          {
            question: "Welche Daten brauchen Sie für die Wärmepumpen-Beratung?",
            answer: "Idealerweise Baujahr, Wohnfläche, Art der Heizkörper (Radiatoren/Fußbodenheizung), aktuelles System und – falls vorhanden – den Energieausweis."
          },
          {
            question: "Gibt es Förderung für Wärmepumpen in München?",
            answer: "Ja, über BAFA und KfW sind bis zu 70% Förderung möglich. Die genaue Höhe hängt von verschiedenen Faktoren ab. Wir beraten Sie transparent zu den Möglichkeiten."
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
              <Badge className="mb-4 bg-orange-500 text-white">
                <Leaf className="w-3 h-3 mr-1" />
                Wärmepumpe München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Wärmepumpe München – Beratung & Installation mit Förderung
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Beratung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Luft-Wasser-Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Erdwärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Förderung 2025</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Förderung beantragen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Altbau</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungstausch Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizlastberechnung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vaillant Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Viessmann Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">klimaneutral heizen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizkosten senken</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Energieausweis prüfen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Wärmepumpe</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                Sie möchten in München auf Wärmepumpe umstellen? Entscheidend sind Gebäudedaten, 
                Heizlast, Hydraulik und die richtige Einbindung ins System. AquaPro24 unterstützt 
                Sie bei der Planung und Umsetzung – inklusive sinnvoller Vorbereitung (z. B. 
                Anpassungen an Verteilung/Regelung) und transparenter Schritte.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Senden Sie uns für die Ersteinschätzung: Baujahr, Wohnfläche, Heizkörper/Fußbodenheizung, 
                aktuelles System und – falls vorhanden – Energieausweis. So können wir realistisch 
                beurteilen, welche Lösung passt.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-waermepumpe-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-waermepumpe">
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
              Wärmepumpe installieren München: Planung, BAFA-Förderung & Umsetzung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schritte.map((item, index) => (
                <Card key={index} className="text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-orange-500 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 bg-orange-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-orange-600" />
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
                Wärmepumpe Beratung München: Kostenlose Ersteinschätzung anfordern
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Senden Sie uns bitte folgende Eckdaten:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageDaten.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <item.icon className="w-5 h-5 text-orange-600 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-orange-500/5 border-orange-500/20">
                  <CardContent className="pt-6">
                    <p className="text-lg font-medium mb-4">
                      Anfrage per E-Mail/Formular mit Eckdaten – wir melden uns mit einem nächsten Schritt.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <ServiceBooking 
                        serviceType="waermepumpe"
                        buttonText="Termin anfragen"
                        buttonSize="lg"
                      />
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-waermepumpe">
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
          title="Häufige Fragen zu Wärmepumpen in München"
          items={[
            {
              question: "Ist mein Haus für eine Wärmepumpe geeignet?",
              answer: "Das hängt u. a. von Baujahr, Dämmung, Heizflächen und System ab. Wir prüfen das vorab anhand Ihrer Angaben."
            },
            {
              question: "Übernehmen Sie auch die Planung?",
              answer: "Ja. Wir unterstützen bei Planung, Auslegung und Umsetzung der Wärmepumpe."
            },
            {
              question: "Kann eine Wärmepumpe mit Fußbodenheizung kombiniert werden?",
              answer: "Ja, das ist sogar eine sehr effiziente Kombination – besonders bei Sanierungen."
            },
            {
              question: "Welche Infos brauche ich für eine Anfrage?",
              answer: "Wohnfläche, Baujahr, aktuelles Heizsystem, Heizkörper oder Fußbodenheizung sowie Fotos (falls möglich)."
            },
            {
              question: "Beraten Sie auch zu Fördermöglichkeiten?",
              answer: "Wir geben Ihnen eine Orientierung, welche Förderungen grundsätzlich infrage kommen."
            }
          ]}
        />
        <TrustBar />
        <ServiceAreas serviceName="Wärmepumpe"  />
        <RelatedServices currentService="waermepumpe" />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
