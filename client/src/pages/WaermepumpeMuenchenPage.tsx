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
  Leaf, 
  Phone, 
  CheckCircle2, 
  Home,
  Ruler,
  Thermometer,
  Mail,
  FileText,
  Calendar,
  Settings,
  AlertTriangle,
  Star,
  Clock
} from "lucide-react";
import { Link } from "wouter";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";
import FAQ from "@/components/FAQ";

const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

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
        description="Wärmepumpe installieren in München: Fachgerechter Einbau, Förderberatung & komplette Abwicklung aus einer Hand."
        canonical="https://aquapro24.de/waermepumpe-muenchen"
        keywords="Wärmepumpe München, Wärmepumpe Installation München, Luft-Wasser-Wärmepumpe München, Wärmepumpe Förderung München, Heizungstausch Wärmepumpe München, Wärmepumpe Altbau München"
        aiSummary="AquaPro 24 Wärmepumpe München: Beratung, Planung, Installation. Prüfung Gebäudedaten, Heizlast, Hydraulik. Transparente Schritte. Kontakt: 089 444438872"
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
        ogImageAlt="Wärmepumpe München Installation BAFA Förderung 70 Prozent - Viessmann Vaillant Wolf Meisterbetrieb"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_waermepumpe_muenchen" alt="" />
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
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Hohe Heizkosten? Alte Gasheizung? Klimaneutral heizen?</strong>
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                AquaPro 24 unterstützt Sie bei der Planung und Installation Ihrer Wärmepumpe in München. Bis zu 70% Förderung, transparente Festpreise.
              </p>
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Sie tauschen Ihre alte Gasheizung gegen eine moderne Wärmepumpe – der Staat übernimmt bis zu 70% der Kosten, und Sie sparen ab Tag eins Heizkosten. Wir kümmern uns um alles: Beratung, Förderantrag und Installation.
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.800+ zufriedene Kunden</strong> · Wärmepumpe ab 12.000€ (vor Förderung)
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-waermepumpe-muenchen">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white" asChild data-testid="button-termin-waermepumpe">
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
                  <span>Bis 70% Förderung</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
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
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">
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
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                      Anfrage per E-Mail/Formular mit Eckdaten – wir melden uns mit einem nächsten Schritt.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Suspense fallback={null}>
                        <ServiceBooking 
                          serviceType="waermepumpe"
                          buttonText="Termin anfragen"
                          buttonSize="lg"
                        />
                      </Suspense>
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
        <Suspense fallback={null}>
            <ServiceAreas serviceName="Wärmepumpe"  />
        </Suspense>
        <KeywordLinks currentPage="waermepumpe" />
        <RelatedServices currentService="waermepumpe" />
      </main>
      
      <Footer />
    </div>
  );
}
