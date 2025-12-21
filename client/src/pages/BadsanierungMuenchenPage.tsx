import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/modern_luxury_bathro_fe230232.jpg";
import { 
  Droplets, 
  Phone, 
  CheckCircle2, 
  Ruler,
  Palette,
  Calendar,
  Mail,
  Camera,
  FileText,
  Home
} from "lucide-react";
import { Link } from "wouter";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";

export default function BadsanierungMuenchenPage() {
  const schritte = [
    {
      icon: FileText,
      title: "3D-Badplanung München kostenlos",
      description: "Bestandsaufnahme vor Ort, Vermessung, 3D-Visualisierung Ihres neuen Traumbads. Unverbindlich."
    },
    {
      icon: Palette,
      title: "Badgestaltung München: modern oder klassisch",
      description: "Fliesen, Armaturen, Sanitärobjekte auswählen. Villeroy & Boch, Duravit, Grohe, Hansgrohe."
    },
    {
      icon: Calendar,
      title: "Badsanierung München: 2-4 Wochen",
      description: "Festpreis-Angebot, fester Terminplan. Abriss, Sanitär, Fliesen, Elektrik aus einer Hand koordiniert."
    },
    {
      icon: CheckCircle2,
      title: "Badsanierung München: 5 Jahre Garantie",
      description: "Abnahme mit Übergabeprotokoll. 5 Jahre Gewährleistung auf alle Arbeiten. Nachbesserung gratis."
    }
  ];

  const anfrageTipps = [
    { icon: Ruler, text: "Raummaße oder Grundriss" },
    { icon: Camera, text: "Fotos vom aktuellen Bad" },
    { icon: Palette, text: "Wunschstil: modern oder klassisch" },
    { icon: Home, text: "Teil- oder Komplettsanierung?" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Badumbau München komplett | Sanierung stressfrei | moderne Bäder"
        description="Badumbau München komplett: Sanierung stressfrei mit modernen Bädern. Von Planung bis Übergabe - Koordination und saubere Ausführung."
        canonical="https://aquapro24.de/badsanierung-muenchen"
        keywords="Badsanierung München, Bad renovieren München, Badezimmer sanieren München, Komplettbad München, Bad modernisieren München, Badumbau München, Badsanierung Kosten München"
        aiSummary="AquaPro24 Badsanierung München: Komplette Begleitung von Planung bis Übergabe. Bestandsaufnahme, Ablaufplan, Umsetzung mit geprüften Gewerken. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Badsanierung", url: "https://aquapro24.de/bad" },
          { name: "Badsanierung München", url: "https://aquapro24.de/badsanierung-muenchen" }
        ]}
        serviceSchema={{
          name: "Badsanierung München - Planung & Umsetzung",
          description: "Badsanierung München: Bestandsaufnahme, Ablaufplan, koordinierte Umsetzung. Modern, sauber geplant, stressfrei.",
          serviceType: "Badsanierung",
          urlSlug: "badsanierung-muenchen",
          catalogName: "Badsanierung-Leistungen München",
          serviceOffers: [
            { name: "Bestandsaufnahme & Beratung" },
            { name: "Ablaufplanung & Koordination" },
            { name: "Teil- und Komplettsanierung" },
            { name: "Umsetzung mit geprüften Gewerken" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 89
          }
        }}
        faqSchema={[
          {
            question: "Wie lange dauert eine Badsanierung in München?",
            answer: "Je nach Umfang dauert eine Komplettsanierung 2-4 Wochen. Nach der Bestandsaufnahme erhalten Sie einen konkreten Ablaufplan mit allen Terminen."
          },
          {
            question: "Was kostet eine Badsanierung in München?",
            answer: "Die Kosten hängen von Größe, Ausstattung und Umfang ab. Nach Sichtung Ihrer Angaben und Fotos erhalten Sie eine transparente Einschätzung."
          },
          {
            question: "Welche Informationen brauchen Sie für ein Angebot?",
            answer: "Idealerweise Raummaße oder Grundriss, Fotos, Wunschstil (modern/klassisch) und ob es um Teil- oder Komplettsanierung geht."
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
              <Badge className="mb-4 bg-cyan-600 text-white">
                <Droplets className="w-3 h-3 mr-1" />
                Badsanierung München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Badsanierung München – Komplettumbau stressfrei & modern
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Bad komplett sanieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badezimmer renovieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Bad modernisieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badumbau München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">barrierefreies Bad</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">bodengleiche Dusche</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badewanne zu Dusche</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fliesen verlegen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC austauschen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Waschtisch montieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">3D Badplanung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Bad in 2 Wochen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">alles aus einer Hand</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Förderung Bad</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Badsanierung</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                Eine Badsanierung ist mehr als neue Fliesen – sie ist Koordination, Timing und saubere 
                Ausführung. AquaPro24 begleitet Ihre Badsanierung in München von der Planung bis zur 
                Übergabe: Bestandsaufnahme, Empfehlungen zur Ausstattung, Ablaufplan und Umsetzung 
                mit geprüften Gewerken.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Damit Sie schneller ein Angebot erhalten, senden Sie uns bitte: Raummaße (oder Grundriss), 
                Fotos, Wunschstil (modern/klassisch), und ob es um Teil- oder Komplettsanierung geht. 
                Wir melden uns mit einem konkreten Vorschlag zum weiteren Vorgehen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-badsanierung-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-badsanierung">
                    <Mail className="w-4 h-4 mr-2" />
                    Bad-Wünsche senden
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Badumbau München: Ablauf von Planung bis Fertigstellung
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {schritte.map((item, index) => (
                <Card key={index} className="text-center relative">
                  <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-8 h-8 bg-cyan-600 text-white rounded-full flex items-center justify-center font-bold text-sm">
                    {index + 1}
                  </div>
                  <CardContent className="pt-8">
                    <div className="w-12 h-12 bg-cyan-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-cyan-600" />
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
                Badsanierung Kosten München: Angebot mit Festpreis anfordern
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Senden Sie uns bitte:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageTipps.map((tipp, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <tipp.icon className="w-5 h-5 text-cyan-600 flex-shrink-0" />
                    <span>{tipp.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-cyan-500/5 border-cyan-500/20">
                  <CardContent className="pt-6">
                    <p className="text-lg font-medium mb-4">
                      Schreiben Sie uns Ihre Bad-Wünsche – wir antworten mit einem klaren Ablauf & Terminoptionen.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <ServiceBooking 
                        serviceType="bad"
                        buttonText="Termin anfragen"
                        buttonSize="lg"
                      />
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-badsanierung">
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
          title="Häufige Fragen zur Badsanierung in München"
          items={[
            {
              question: "Machen Sie komplette oder auch teilweise Badsanierungen?",
              answer: "Beides. Von einzelnen Gewerken bis zur vollständigen Komplettsanierung Ihres Badezimmers in München."
            },
            {
              question: "Übernehmen Sie die komplette Koordination?",
              answer: "Ja. Planung, Ablauf, Gewerke-Koordination und Umsetzung laufen zentral über AquaPro24."
            },
            {
              question: "Wie lange dauert eine Badsanierung?",
              answer: "Das hängt vom Umfang ab. Nach Sichtung Ihrer Angaben erhalten Sie einen realistischen Zeitplan."
            },
            {
              question: "Was benötige ich für eine erste Einschätzung?",
              answer: "Fotos, Raumgröße, gewünschter Umfang (Teil oder Komplett), sowie besondere Wünsche (z. B. bodengleiche Dusche)."
            },
            {
              question: "Kann ich mein Bad während der Sanierung nutzen?",
              answer: "Je nach Umfang ist eine eingeschränkte Nutzung möglich – wir besprechen das vorab transparent."
            }
          ]}
        />
        <TrustBar />
        <ServiceAreas serviceName="Badsanierung"  />
        <RelatedServices currentService="bad" />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
