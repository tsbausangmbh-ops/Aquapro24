import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heat_pump_installati_53374252.jpg";
import { 
  FileText,
  Phone, 
  CheckCircle2, 
  Calendar,
  Clock,
  ArrowRight,
  Upload,
  ClipboardCheck,
  Mail,
  AlertCircle,
  Euro
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderantragPage() {
  const antragSchritte = [
    {
      nummer: 1,
      title: "Beratung & Planung",
      description: "Wir prüfen Ihre Förderfähigkeit und erstellen ein maßgeschneidertes Konzept.",
      icon: ClipboardCheck,
      dauer: "1-2 Tage"
    },
    {
      nummer: 2,
      title: "Unterlagen sammeln",
      description: "Wir helfen Ihnen bei der Zusammenstellung aller benötigten Dokumente.",
      icon: FileText,
      dauer: "2-3 Tage"
    },
    {
      nummer: 3,
      title: "Antrag einreichen",
      description: "Wir übernehmen die komplette Antragstellung bei BAFA oder KfW.",
      icon: Upload,
      dauer: "1 Tag"
    },
    {
      nummer: 4,
      title: "Bewilligung abwarten",
      description: "Nach Bewilligung können die Arbeiten beginnen.",
      icon: Clock,
      dauer: "4-8 Wochen"
    }
  ];

  const benoetigteUnterlagen = [
    "Personalausweis oder Reisepass",
    "Grundbuchauszug (nicht älter als 3 Monate)",
    "Einkommensteuerbescheid (für Einkommensbonus)",
    "Fotos der alten Heizungsanlage",
    "Energieausweis des Gebäudes (falls vorhanden)",
    "Angebot des Fachbetriebs (von uns)",
    "Vollmacht für Antragstellung (Muster von uns)"
  ];

  const haeufigeFehler = [
    {
      fehler: "Antrag nach Auftragserteilung",
      loesung: "BAFA-Antrag muss VOR Vertragsabschluss gestellt werden"
    },
    {
      fehler: "Fehlende Dokumente",
      loesung: "Wir erstellen eine vollständige Checkliste für Sie"
    },
    {
      fehler: "Falsche Förderung gewählt",
      loesung: "Wir beraten, ob BAFA, KfW oder Steuerbonus optimal ist"
    },
    {
      fehler: "Fristen verpasst",
      loesung: "Wir überwachen alle Fristen für Sie"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderantrag München: BAFA & KfW Antrag Hilfe | AquaPro24"
        description="Förderantrag für Heizung München: Wir übernehmen die komplette BAFA & KfW Antragstellung. Bis 70% Förderung sichern. Kostenlose Beratung: 0152 12274043"
        canonical="https://aquapro24.de/foerderantrag"
        keywords="Förderantrag München, BAFA Antrag Hilfe, KfW Antrag stellen, Förderantrag Heizung, BAFA Förderung beantragen, Heizungsförderung Antrag, Förderantrag Wärmepumpe, Antragstellung Förderung, BAFA Vollmacht, Förderung beantragen München"
        aiSummary="AquaPro24 Förderantrag Service München: Komplette BAFA & KfW Antragstellung für Heizungsförderung. Bis 70% Förderung, alle Unterlagen, Fristenüberwachung. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" },
          { name: "Förderantrag", url: "https://aquapro24.de/foerderantrag" }
        ]}
        faqSchema={[
          {
            question: "Wer stellt den BAFA-Antrag?",
            answer: "Wir übernehmen die komplette Antragstellung für Sie. Mit einer Vollmacht reichen wir alle Unterlagen bei BAFA oder KfW ein."
          },
          {
            question: "Wie lange dauert die Bewilligung?",
            answer: "BAFA-Anträge werden in der Regel innerhalb von 4-8 Wochen bewilligt. KfW-Kredite können schneller genehmigt werden."
          },
          {
            question: "Was kostet der Antragsservice?",
            answer: "Unser Förderantrags-Service ist bei Beauftragung der Heizungsinstallation kostenlos inklusive."
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
              <Badge className="mb-4 bg-green-500 text-white">
                <FileText className="w-3 h-3 mr-1" />
                Antragsservice
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Förderantrag München: BAFA & KfW Antrag komplett übernommen
              </h1>
              <div className="flex flex-wrap gap-1.5 mt-3" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Antrag Hilfe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Antrag stellen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderantrag Heizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderung beantragen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Vollmacht</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Antragstellung Service</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderantrag Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsförderung Antrag</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Beratung München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Förderantrag kostenlos</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Keine Lust auf Papierkram? Wir übernehmen die komplette Antragstellung bei BAFA und KfW. 
                Sie müssen nur unterschreiben - wir kümmern uns um den Rest.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-foerderantrag">
                    <Phone className="w-4 h-4 mr-2" />
                    Kostenlose Beratung
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/termin" data-testid="link-termin-foerderantrag">
                    <Calendar className="w-4 h-4 mr-2" />
                    Beratungstermin
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Förderantrag Ablauf München: So funktioniert unser Service
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Von der Beratung bis zur Bewilligung - wir begleiten Sie durch den gesamten Prozess
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {antragSchritte.map((schritt) => (
                <Card key={schritt.nummer} className="relative overflow-visible">
                  <div className="absolute -top-3 -left-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold text-sm">
                    {schritt.nummer}
                  </div>
                  <CardHeader className="pb-2 pt-6">
                    <div className="w-12 h-12 bg-green-500/10 rounded-lg flex items-center justify-center mb-3">
                      <schritt.icon className="w-6 h-6 text-green-600" />
                    </div>
                    <CardTitle className="text-lg">{schritt.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{schritt.description}</p>
                    <Badge variant="secondary" className="text-xs">
                      <Clock className="w-3 h-3 mr-1" />
                      {schritt.dauer}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="w-5 h-5 text-primary" />
                    Benötigte Unterlagen München: Diese Dokumente brauchen wir
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-3">
                    {benoetigteUnterlagen.map((unterlag, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <CheckCircle2 className="w-5 h-5 text-green-500 flex-shrink-0 mt-0.5" />
                        <span>{unterlag}</span>
                      </li>
                    ))}
                  </ul>
                  <p className="text-sm text-muted-foreground mt-4">
                    Keine Sorge - wir helfen Ihnen bei der Beschaffung aller Dokumente!
                  </p>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <AlertCircle className="w-5 h-5 text-orange-500" />
                    Häufige Fehler München: Das vermeiden wir für Sie
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {haeufigeFehler.map((item, idx) => (
                      <div key={idx} className="border-l-2 border-orange-500 pl-4">
                        <p className="font-medium text-orange-600 dark:text-orange-400">{item.fehler}</p>
                        <p className="text-sm text-muted-foreground">{item.loesung}</p>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Card className="bg-green-500/5 border-green-500/20">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <Euro className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Förderantrag Service München: Kostenlos bei Beauftragung</h3>
                      <p className="text-muted-foreground">
                        Unser kompletter Antragsservice ist bei Beauftragung der Heizungsinstallation inklusive.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <a href="tel:+4915212274043" data-testid="button-call-foerderantrag-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt anrufen
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/foerderrechner" data-testid="link-foerderrechner">
                        <ArrowRight className="w-4 h-4 mr-2" />
                        Förderung berechnen
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <FAQ 
          items={[
            {
              question: "Wer stellt den BAFA-Antrag für mich?",
              answer: "Wir übernehmen die komplette Antragstellung für Sie. Mit einer Vollmacht reichen wir alle Unterlagen bei BAFA oder KfW ein und überwachen den Bearbeitungsstand."
            },
            {
              question: "Wie lange dauert die Bewilligung des Förderantrags?",
              answer: "BAFA-Anträge werden in der Regel innerhalb von 4-8 Wochen bewilligt. KfW-Kredite können schneller genehmigt werden, oft schon nach 2-3 Wochen."
            },
            {
              question: "Was kostet der Förderantrags-Service?",
              answer: "Unser kompletter Antragsservice ist bei Beauftragung der Heizungsinstallation kostenlos inklusive. Sie zahlen nur die vereinbarten Installationskosten."
            },
            {
              question: "Was passiert, wenn der Antrag abgelehnt wird?",
              answer: "Ablehnungen sind bei korrekter Antragstellung selten. Sollte es dennoch passieren, prüfen wir die Gründe und stellen ggf. einen neuen Antrag oder empfehlen Alternativen."
            },
            {
              question: "Kann ich auch ohne Förderantrag beauftragen?",
              answer: "Ja, aber wir empfehlen dringend, die Förderung zu nutzen. Bei bis zu 70% Zuschuss lohnt sich die kurze Wartezeit auf die Bewilligung fast immer."
            }
          ]}
        />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
