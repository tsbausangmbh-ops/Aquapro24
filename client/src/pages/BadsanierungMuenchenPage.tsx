import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroPicture } from "@/components/ResponsiveHero";
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
  Home,
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
        title={seoMeta['/badsanierung-muenchen'].title}
        description={seoMeta['/badsanierung-muenchen'].description}
        canonical="https://aquapro24.de/badsanierung-muenchen"
        keywords={seoMeta['/badsanierung-muenchen'].keywords.join(', ')}
        ogImageAlt="Badumbau München stressfrei Badsanierung Komplettbad renovieren - Partnernetzwerk Festpreis Garantie"
        aiSummary="AquaPro 24 Badsanierung München: Komplette Begleitung von Planung bis Übergabe. Bestandsaufnahme, Ablaufplan, Umsetzung mit geprüften Gewerken. Kontakt: 089 444438872"
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
          ]
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
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_badsanierung" alt="" />
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
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Altes Bad satt? Fliesen kaputt? Traumbad gewünscht?</strong>
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                AquaPro 24 begleitet Ihre Badsanierung in München von der Planung bis zur Übergabe. Alles aus einer Hand, transparente Festpreise.
              </p>
              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> In nur 2-3 Wochen verwandeln wir Ihr altes Badezimmer in eine moderne Wohlfühloase – mit bodengleicher Dusche, Regenbrause und zeitlosen Fliesen. Ohne Stress, ohne versteckte Kosten.
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.800+ zufriedene Kunden</strong> · Badsanierung ab 8.900€ Festpreis
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-badsanierung-muenchen">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} asChild data-testid="button-termin-badsanierung">
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
                  <span>Alles aus einer Hand</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
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
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                      Schreiben Sie uns Ihre Bad-Wünsche – wir antworten mit einem klaren Ablauf & Terminoptionen.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Suspense fallback={null}>
                        <ServiceBooking 
                          serviceType="bad"
                          buttonText="Termin anfragen"
                          buttonSize="lg"
                        />
                      </Suspense>
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
              answer: "Ja. Planung, Ablauf, Gewerke-Koordination und Umsetzung laufen zentral über AquaPro 24."
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
        <Suspense fallback={null}>
            <ServiceAreas serviceName="Badsanierung"  />
        </Suspense>
        <KeywordLinks currentPage="bad" />
        <RelatedServices currentService="bad" />
      </main>

      <InternalLinks
        title="Badsanierung & verwandte Services"
        variant="footer-cta"
        links={[
          { href: "/bad", text: "Badsanierung Leistungen", description: "Komplettsanierung im Detail" },
          { href: "/sanitaer", text: "Sanitär-Installationen", description: "Armaturen, WC, Waschbecken" },
          { href: "/armaturen", text: "Premium-Armaturen", description: "Grohe, Hansgrohe, Duravit" },
          { href: "/warmwasser", text: "Warmwasser-Systeme", description: "Boiler & Durchlauferhitzer" },
          { href: "/foerderung", text: "Förderung Badsanierung", description: "KfW-Zuschüsse barrierefreies Bad" },
          { href: "/foerderrechner", text: "Förderrechner", description: "Ihren Zuschuss sofort berechnen" },
          { href: "/sanitaer-muenchen", text: "Sanitär München", description: "Alle Stadtteile & Bezirke" },
          { href: "/haustechnik", text: "Haustechnik komplett", description: "Sanitär, Heizung, Klima" },
          { href: "/faq", text: "FAQ & Preisübersicht", description: "Badsanierung Kosten & Ablauf" },
          { href: "/termin", text: "Kostenlose Beratung", description: "Jetzt unverbindlich anfragen" },
        ]}
      />
      <Footer />
    </div>
  );
}
