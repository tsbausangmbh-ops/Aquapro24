import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Accessibility, 
  Eye, 
  Keyboard, 
  Volume2, 
  Monitor, 
  Phone, 
  Mail,
  CheckCircle,
  AlertCircle,
  Shield,
  Clock,
  CheckCircle2,
  AlertTriangle,
  Star
} from "lucide-react";
import { HeroPicture } from "@/components/ResponsiveHero";

const accessibilityFeatures = [
  {
    icon: Keyboard,
    title: "Tastaturnavigation",
    description: "Alle Funktionen sind vollständig per Tastatur bedienbar. Nutzen Sie Tab zum Navigieren und Enter zum Aktivieren."
  },
  {
    icon: Eye,
    title: "Screenreader-Unterstützung",
    description: "Unsere Website ist für Screenreader optimiert mit ARIA-Labels und semantischem HTML."
  },
  {
    icon: Monitor,
    title: "Kontrast & Lesbarkeit",
    description: "Hohe Farbkontraste und skalierbare Schriftgrößen für bessere Lesbarkeit."
  },
  {
    icon: Volume2,
    title: "Alternative Texte",
    description: "Alle Bilder haben beschreibende Alternativtexte für Screenreader."
  }
];

const conformanceItems = [
  { text: "Skip-Links zum Überspringen der Navigation", status: "complete" },
  { text: "Tastaturnavigation für alle interaktiven Elemente", status: "complete" },
  { text: "ARIA-Labels für Buttons und Links", status: "complete" },
  { text: "Semantische HTML-Struktur", status: "complete" },
  { text: "Fokus-Indikatoren für Tastaturnutzer (WCAG 2.4.7)", status: "complete" },
  { text: "Reduzierte Bewegung bei Systemeinstellung", status: "complete" },
  { text: "Alternative Texte für Bilder", status: "complete" },
  { text: "Formulare mit Labels und Fehlermeldungen", status: "complete" },
  { text: "Farbkontrast WCAG 2.1 AA konform", status: "complete" },
  { text: "Responsive Design für alle Geräte", status: "complete" },
  { text: "Fokus-Management bei Seitenwechsel", status: "complete" },
  { text: "Live-Regions für Screen-Reader-Ankündigungen", status: "complete" },
  { text: "ARIA-Attribute für Pflichtfelder (aria-required)", status: "complete" },
  { text: "Dropdown-Menüs mit aria-expanded und ESC-Schließung", status: "complete" },
  { text: "Windows High Contrast Mode Unterstützung", status: "complete" },
  { text: "Autocomplete-Attribute für Formularfelder", status: "complete" }
];

export default function BarrierefreiheitPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoMeta['/barrierefreiheit'].title}
        description={seoMeta['/barrierefreiheit'].description}
        canonical="https://aquapro24.de/barrierefreiheit"
        keywords={seoMeta['/barrierefreiheit'].keywords.join(', ')}
        ogImageAlt="Barrierefreiheitserklärung AquaPro 24 München - WCAG 2.1 AA BITV 2.0 barrierefreie Website"
      />
      <Header />

      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_barrierefreiheit" alt="Barrierefreiheit AquaPro 24 München – WCAG 2.1 AA konform" />
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
                Barrierefreiheitserklärung München
              </h1>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Digitale Barrierefreiheit für alle Besucher</strong>
              </p>

              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                AquaPro 24 München verpflichtet sich, die digitale Barrierefreiheit für Menschen 
                mit Behinderungen zu gewährleisten. WCAG 2.1 AA konform.
              </p>

              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Eine Website, die für jeden zugänglich ist – ob mit Screenreader, Tastatur oder mobil. Barrierefreiheit ist für uns selbstverständlich.
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.847 Münchner Familien</strong> vertrauen uns – Festpreise: Sanitär ab 92€ | Rohrreinigung ab 81€ | Heizung ab 154€
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-accessibility">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} 
                  asChild
                  data-testid="button-termin-accessibility"
                >
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
                  <span>WCAG 2.1 AA konform</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <section className="mb-10" aria-labelledby="standards-heading">
            <h2 id="standards-heading" className="text-lg sm:text-xl font-semibold mb-4">
              Angewandte Standards
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Diese Website wurde entwickelt, um den folgenden Barrierefreiheitsstandards 
                  zu entsprechen:
                </p>
                <ul className="list-disc list-inside space-y-2 text-muted-foreground">
                  <li><strong>WCAG 2.1 Level AA</strong> – Web Content Accessibility Guidelines</li>
                  <li><strong>BITV 2.0</strong> – Barrierefreie-Informationstechnik-Verordnung</li>
                  <li><strong>EN 301 549</strong> – Europäischer Standard für digitale Barrierefreiheit</li>
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-10" aria-labelledby="features-heading">
            <h2 id="features-heading" className="text-lg sm:text-xl font-semibold mb-4">
              Barrierefreiheits-Funktionen
            </h2>
            <div className="grid md:grid-cols-2 gap-4">
              {accessibilityFeatures.map((feature) => (
                <Card key={feature.title}>
                  <CardHeader className="pb-2">
                    <CardTitle className="flex items-center gap-2 text-lg">
                      <feature.icon className="w-5 h-5 text-primary" aria-hidden="true" />
                      {feature.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground">{feature.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </section>

          <section className="mb-10" aria-labelledby="conformance-heading">
            <h2 id="conformance-heading" className="text-lg sm:text-xl font-semibold mb-4">
              Konformitätsstatus
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Stand der Barrierefreiheit: <strong>Vollständig konform</strong> mit WCAG 2.1 Level AA.
                </p>
                <ul className="space-y-2">
                  {conformanceItems.map((item, index) => (
                    <li key={index} className="flex items-start gap-2">
                      {item.status === "complete" ? (
                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      ) : (
                        <AlertCircle className="w-5 h-5 text-yellow-600 flex-shrink-0 mt-0.5" aria-hidden="true" />
                      )}
                      <span className={item.status === "complete" ? "" : "text-muted-foreground"}>
                        {item.text}
                        {item.status === "partial" && " (in Bearbeitung)"}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          </section>

          <section className="mb-10" aria-labelledby="tips-heading">
            <h2 id="tips-heading" className="text-lg sm:text-xl font-semibold mb-4">
              Tipps zur Nutzung
            </h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium mb-2">Tastaturkürzel</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Tab</kbd> – Zum nächsten Element navigieren</li>
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Shift + Tab</kbd> – Zum vorherigen Element navigieren</li>
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Enter</kbd> – Link oder Button aktivieren</li>
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Escape</kbd> – Popup oder Dialog schließen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="text-sm sm:text-base lg:text-lg font-medium mb-2">Schriftgröße anpassen</h3>
                  <p className="text-sm text-muted-foreground">
                    Nutzen Sie die Zoom-Funktion Ihres Browsers (Strg/Cmd + Plus/Minus) 
                    um die Schriftgröße anzupassen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-10" aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-lg sm:text-xl font-semibold mb-4">
              Feedback & Kontakt
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="mb-4">
                  Sollten Sie auf Barrieren stoßen oder Verbesserungsvorschläge haben, 
                  kontaktieren Sie uns bitte:
                </p>
                <div className="space-y-3">
                  <a 
                    href="tel:+4989444438872" 
                    className="flex items-center gap-2 text-primary hover:underline"
                    data-testid="link-accessibility-phone"
                  >
                    <Phone className="w-4 h-4" aria-hidden="true" />
                    089 444438872
                  </a>
                  <a 
                    href="mailto:info@aquapro24.de?subject=Barrierefreiheit" 
                    className="flex items-center gap-2 text-primary hover:underline"
                    data-testid="link-accessibility-email"
                  >
                    <Mail className="w-4 h-4" aria-hidden="true" />
                    info@aquapro24.de
                  </a>
                </div>
                <div className="mt-6 pt-4 border-t">
                  <p className="text-sm text-muted-foreground">
                    <strong>Durchsetzungsverfahren:</strong> Sollten Sie keine zufriedenstellende 
                    Antwort erhalten, können Sie sich an die zuständige Durchsetzungsstelle wenden.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section aria-labelledby="date-heading">
            <h2 id="date-heading" className="text-lg sm:text-xl font-semibold mb-4">
              Erstellungsdatum
            </h2>
            <Card>
              <CardContent className="pt-6">
                <p className="text-muted-foreground">
                  Diese Erklärung wurde am <strong>22. Dezember 2025</strong> erstellt 
                  und zuletzt am <strong>23. Dezember 2025</strong> überprüft.
                </p>
              </CardContent>
            </Card>
          </section>

          <div className="mt-10 flex flex-wrap gap-4">
            <Button asChild>
              <Link href="/" data-testid="link-back-home">
                Zurück zur Startseite
              </Link>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/kontakt" data-testid="link-contact">
                Kontakt aufnehmen
              </Link>
            </Button>
          </div>
        </div>
      </main>

      <InternalLinks
        title="Unsere Leistungen"
        variant="footer-cta"
        links={[
          { href: "/sanitaer", text: "Sanitär München", description: "Alle Sanitär-Services ab 81€" },
          { href: "/heizung", text: "Heizung München", description: "Wartung & Reparatur ab 154€" },
          { href: "/bad", text: "Badsanierung München", description: "Komplettsanierung aus einer Hand" },
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Installation mit Förderung" },
          { href: "/notdienst-muenchen", text: "24/7 Notdienst", description: "Soforthilfe in 45-60 Minuten" },
          { href: "/foerderung", text: "Förderung & Zuschüsse", description: "BAFA & KfW Beratung" },
          { href: "/termin", text: "Termin vereinbaren", description: "Online-Buchung in 2 Minuten" },
          { href: "/kontakt", text: "Kontakt aufnehmen", description: "Jetzt unverbindlich anfragen" },
          { href: "/faq", text: "Häufige Fragen", description: "Preise, Ablauf & mehr" },
        ]}
      />
      <Footer />
    </div>
  );
}
