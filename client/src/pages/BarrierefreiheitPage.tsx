import { Link } from "wouter";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
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
  Shield
} from "lucide-react";

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
  { text: "Fokus-Indikatoren für Tastaturnutzer", status: "complete" },
  { text: "Reduzierte Bewegung bei Systemeinstellung", status: "complete" },
  { text: "Alternative Texte für Bilder", status: "complete" },
  { text: "Formulare mit Labels und Fehlermeldungen", status: "complete" },
  { text: "Farbkontrast WCAG 2.1 AA konform", status: "complete" },
  { text: "Responsive Design für alle Geräte", status: "complete" }
];

export default function BarrierefreiheitPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Barrierefreiheitserklärung – AquaPro 24 München"
        description="Barrierefreiheitserklärung für AquaPro 24 München. Informationen zur digitalen Barrierefreiheit unserer Website gemäß BITV 2.0 und WCAG 2.1."
        canonical="https://aquapro24.de/barrierefreiheit"
        keywords="Barrierefreiheitserklärung WCAG 2.1 AA, BITV 2.0 konform München, Screenreader optimierte Website, Tastaturnavigation barrierefrei, Digitale Barrierefreiheit Handwerker, Accessibility Sanitär Heizung, Inklusive Webseite München"
      />
      <Header />

      <main id="main-content">
        <section className="relative py-12 lg:py-16 overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-primary/90 via-primary/80 to-primary/70" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white/10 via-transparent to-transparent" />
          
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Shield className="w-3 h-3 mr-1" aria-hidden="true" />
                WCAG 2.1 AA konform
              </Badge>
              
              <h1 className="text-3xl lg:text-4xl font-bold text-white mb-4">
                Barrierefreiheitserklärung München
              </h1>
              
              <p className="text-lg text-white/90 mb-6">
                AquaPro 24 München verpflichtet sich, die digitale Barrierefreiheit für Menschen 
                mit Behinderungen zu gewährleisten. Wir verbessern kontinuierlich die Benutzerfreundlichkeit 
                für alle Besucher unserer Website.
              </p>

              <div className="flex flex-wrap gap-3">
                <Button asChild className="bg-white text-primary hover:bg-white/90">
                  <a href="tel:+498912274043" data-testid="button-call-accessibility">
                    <Phone className="w-4 h-4 mr-2" aria-hidden="true" />
                    089 444438872
                  </a>
                </Button>
                <Button variant="outline" asChild className="border-white/50 text-white hover:bg-white/10">
                  <a href="mailto:info@aquapro24.de?subject=Barrierefreiheit" data-testid="button-email-accessibility">
                    <Mail className="w-4 h-4 mr-2" aria-hidden="true" />
                    Feedback senden
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <div className="max-w-4xl mx-auto px-4 lg:px-8 py-12">
          <section className="mb-10" aria-labelledby="standards-heading">
            <h2 id="standards-heading" className="text-2xl font-semibold mb-4">
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
            <h2 id="features-heading" className="text-2xl font-semibold mb-4">
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
            <h2 id="conformance-heading" className="text-2xl font-semibold mb-4">
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
            <h2 id="tips-heading" className="text-2xl font-semibold mb-4">
              Tipps zur Nutzung
            </h2>
            <Card>
              <CardContent className="pt-6 space-y-4">
                <div>
                  <h3 className="font-medium mb-2">Tastaturkürzel</h3>
                  <ul className="text-sm text-muted-foreground space-y-1">
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Tab</kbd> – Zum nächsten Element navigieren</li>
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Shift + Tab</kbd> – Zum vorherigen Element navigieren</li>
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Enter</kbd> – Link oder Button aktivieren</li>
                    <li><kbd className="px-2 py-0.5 bg-muted rounded text-xs">Escape</kbd> – Popup oder Dialog schließen</li>
                  </ul>
                </div>
                <div>
                  <h3 className="font-medium mb-2">Schriftgröße anpassen</h3>
                  <p className="text-sm text-muted-foreground">
                    Nutzen Sie die Zoom-Funktion Ihres Browsers (Strg/Cmd + Plus/Minus) 
                    um die Schriftgröße anzupassen.
                  </p>
                </div>
              </CardContent>
            </Card>
          </section>

          <section className="mb-10" aria-labelledby="feedback-heading">
            <h2 id="feedback-heading" className="text-2xl font-semibold mb-4">
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
                    href="tel:+498912274043" 
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
            <h2 id="date-heading" className="text-2xl font-semibold mb-4">
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

      <Footer />
    </div>
  );
}
