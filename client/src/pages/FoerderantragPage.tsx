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
  AlertTriangle,
  Euro,
  Shield,
  Users,
  Building2,
  Home,
  Leaf,
  Download,
  Eye,
  Zap
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderantragPage() {
  const antragSchritte = [
    {
      nummer: 1,
      title: "Kostenlose Erstberatung",
      description: "Wir analysieren Ihr Gebäude und prüfen, welche Förderung für Sie optimal ist.",
      icon: Phone,
      dauer: "30 Min",
      details: ["Gebäudeanalyse", "Förderoption prüfen", "Kosteneinschätzung"]
    },
    {
      nummer: 2,
      title: "Angebot & Unterlagen",
      description: "Sie erhalten ein Festpreisangebot. Wir sammeln alle benötigten Dokumente.",
      icon: FileText,
      dauer: "2-3 Tage",
      details: ["Festpreisangebot", "Unterlagenliste", "Vollmacht unterschreiben"]
    },
    {
      nummer: 3,
      title: "Antrag bei BAFA/KfW",
      description: "Wir reichen den vollständigen Antrag bei BAFA oder KfW ein.",
      icon: Upload,
      dauer: "1 Tag",
      details: ["Online-Antrag", "Alle Dokumente hochladen", "Bestätigung erhalten"]
    },
    {
      nummer: 4,
      title: "Bewilligung abwarten",
      description: "Nach Eingang prüft die BAFA Ihren Antrag. Wir informieren Sie über den Status.",
      icon: Clock,
      dauer: "4-8 Wochen",
      details: ["Statusüberwachung", "Rückfragen klären", "Förderzusage erhalten"]
    },
    {
      nummer: 5,
      title: "Installation",
      description: "Nach Bewilligung beginnen wir mit der fachgerechten Installation.",
      icon: Home,
      dauer: "1-3 Tage",
      details: ["Terminabsprache", "Fachgerechte Montage", "Einweisung"]
    },
    {
      nummer: 6,
      title: "Verwendungsnachweis",
      description: "Wir reichen den Verwendungsnachweis ein. Die Förderung wird ausgezahlt.",
      icon: Euro,
      dauer: "2-4 Wochen",
      details: ["Nachweis einreichen", "Auszahlung erhalten", "Projekt abgeschlossen"]
    }
  ];

  const benoetigteUnterlagen = [
    {
      kategorie: "Persönliche Dokumente",
      icon: Users,
      dokumente: [
        { name: "Personalausweis/Reisepass", info: "Kopie von Vorder- und Rückseite" },
        { name: "Grundbuchauszug", info: "Nicht älter als 3 Monate" },
        { name: "Einkommensteuerbescheid", info: "Für Einkommensbonus erforderlich" }
      ]
    },
    {
      kategorie: "Gebäudedokumente",
      icon: Building2,
      dokumente: [
        { name: "Energieausweis", info: "Falls vorhanden (nicht zwingend)" },
        { name: "Fotos alte Heizung", info: "Typenschild und Gesamtansicht" },
        { name: "Gebäudegrundriss", info: "Zur Dimensionierung der Anlage" }
      ]
    },
    {
      kategorie: "Von uns erhalten Sie",
      icon: FileText,
      dokumente: [
        { name: "Festpreisangebot", info: "Mit allen förderfähigen Kosten" },
        { name: "Technische Projektbeschreibung", info: "Für den BAFA-Antrag" },
        { name: "Vollmacht zur Antragstellung", info: "Unterschrift erforderlich" }
      ]
    }
  ];

  const haeufigeFehler = [
    {
      fehler: "Antrag nach Vertragsabschluss",
      problem: "Die Förderung wird abgelehnt, wenn der Auftrag vor Antragstellung erteilt wurde.",
      loesung: "Wir stellen den Antrag immer vor Vertragsabschluss für Sie.",
      icon: AlertTriangle,
      schweregrad: "kritisch"
    },
    {
      fehler: "Unvollständige Unterlagen",
      problem: "Fehlende Dokumente verzögern die Bearbeitung um mehrere Wochen.",
      loesung: "Wir erstellen eine Checkliste und prüfen alles vor Einreichung.",
      icon: FileText,
      schweregrad: "mittel"
    },
    {
      fehler: "Falsche Förderoption gewählt",
      problem: "BAFA, KfW oder Steuerbonus – nicht jede Option ist optimal.",
      loesung: "Wir berechnen, welche Förderung für Sie am meisten bringt.",
      icon: Euro,
      schweregrad: "mittel"
    },
    {
      fehler: "Fristen versäumt",
      problem: "Nach Bewilligung haben Sie 36 Monate Zeit zur Umsetzung.",
      loesung: "Wir überwachen alle Fristen und erinnern Sie rechtzeitig.",
      icon: Clock,
      schweregrad: "mittel"
    }
  ];

  const serviceVorteile = [
    {
      icon: Euro,
      title: "Komplett kostenlos",
      description: "Unser Förderantrags-Service ist bei Beauftragung inklusive."
    },
    {
      icon: Shield,
      title: "100% Erfolgsquote",
      description: "Bisher wurde jeder unserer Förderanträge bewilligt."
    },
    {
      icon: Clock,
      title: "Zeitersparnis",
      description: "Sie sparen sich den kompletten Papierkram und Behördenkontakt."
    },
    {
      icon: Eye,
      title: "Statusüberwachung",
      description: "Wir informieren Sie über den aktuellen Bearbeitungsstand."
    }
  ];

  const keywords = [
    "Förderantrag München", "BAFA Antrag stellen", "KfW Antrag Heizung",
    "Förderantrag Wärmepumpe", "BAFA Vollmacht", "Förderung beantragen",
    "Heizungsförderung Antrag", "BAFA Online Antrag", "KfW 458 beantragen",
    "Förderantrag Service", "BAFA Unterlagen", "Förderantrag Hilfe",
    "Antragstellung Heizung", "BAFA Formulare", "Förderantrag kostenlos",
    "BEG Antrag München", "Heizungstausch Antrag", "BAFA Beratung München"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderantrag München: BAFA & KfW Antrag kostenlos | AquaPro24"
        description="BAFA & KfW Förderantrag kostenlos für Sie. Wir übernehmen die komplette Antragstellung für Ihre Heizungsförderung in München. 100% Erfolgsquote. Tel: 0152 12274043"
        canonical="https://aquapro24.de/foerderantrag"
        keywords={keywords.join(", ")}
        aiSummary="AquaPro24 München: Kostenloser Förderantrag Service für BAFA & KfW. 100% Erfolgsquote. Wir stellen den Antrag für Heizungsförderung komplett für Sie. Alle Unterlagen, Vollmacht, Statusüberwachung. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" },
          { name: "Förderantrag", url: "https://aquapro24.de/foerderantrag" }
        ]}
        faqSchema={[
          {
            question: "Wer stellt den BAFA-Antrag?",
            answer: "Wir übernehmen die komplette Antragstellung kostenlos für Sie. Mit einer Vollmacht reichen wir alle Unterlagen bei BAFA oder KfW ein und überwachen den Prozess bis zur Bewilligung."
          },
          {
            question: "Was kostet der Förderantrags-Service?",
            answer: "Unser Förderantrags-Service ist bei Beauftragung der Heizungsinstallation komplett kostenlos. Sie sparen sich den Papierkram und wir garantieren die korrekte Antragstellung."
          },
          {
            question: "Wie lange dauert die BAFA Bewilligung?",
            answer: "Die BAFA prüft Anträge aktuell in 4-8 Wochen. Nach Bewilligung haben Sie 36 Monate Zeit zur Umsetzung. Wir informieren Sie, sobald die Zusage da ist."
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
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-green-500 text-white">
                <Shield className="w-3 h-3 mr-1" />
                Kostenloser Antragsservice inklusive
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Förderantrag München – BAFA & KfW Antrag kostenlos
              </h1>
              
              <p className="text-lg text-white/90 mb-4 max-w-2xl">
                Wir übernehmen die <strong>komplette Antragstellung</strong> für Ihre 
                Heizungsförderung – kostenlos und mit 100% Erfolgsquote.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {keywords.slice(0, 10).map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-antrag">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white" asChild>
                  <Link href="/termin" data-testid="link-termin-antrag">
                    <Calendar className="w-4 h-4 mr-2" />
                    Beratungstermin buchen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Förderantrag Service München: Ihre Vorteile
              </h2>
              <p className="text-muted-foreground">
                Warum Sie den Förderantrag uns überlassen sollten
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {serviceVorteile.map((vorteil, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <vorteil.icon className="w-6 h-6 text-primary" />
                    </div>
                    <h3 className="font-bold mb-2">{vorteil.title}</h3>
                    <p className="text-sm text-muted-foreground">{vorteil.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                BAFA Antrag München: So läuft der Prozess ab
              </h2>
              <p className="text-muted-foreground">
                Von der Beratung bis zur Förderauszahlung – transparent und einfach
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {antragSchritte.map((schritt) => (
                <Card key={schritt.nummer} className="relative overflow-hidden">
                  <div className="absolute top-0 left-0 w-12 h-12 bg-primary text-primary-foreground flex items-center justify-center text-xl font-bold rounded-br-lg">
                    {schritt.nummer}
                  </div>
                  <CardContent className="pt-14 pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <schritt.icon className="w-5 h-5 text-primary" />
                      <h3 className="font-bold">{schritt.title}</h3>
                    </div>
                    <Badge variant="secondary" className="mb-3">{schritt.dauer}</Badge>
                    <p className="text-sm text-muted-foreground mb-3">{schritt.description}</p>
                    <ul className="space-y-1">
                      {schritt.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs text-muted-foreground">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                BAFA Unterlagen München: Was Sie benötigen
              </h2>
              <p className="text-muted-foreground">
                Wir helfen Ihnen bei der Zusammenstellung aller Dokumente
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {benoetigteUnterlagen.map((kategorie, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <kategorie.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{kategorie.kategorie}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {kategorie.dokumente.map((dok, idx) => (
                        <li key={idx} className="flex items-start gap-3">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 flex-shrink-0" />
                          <div>
                            <span className="font-medium text-sm">{dok.name}</span>
                            <p className="text-xs text-muted-foreground">{dok.info}</p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-destructive/5 border-y border-destructive/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Förderantrag Fehler München: Das vermeiden wir für Sie
              </h2>
              <p className="text-muted-foreground">
                Diese häufigen Fehler führen zur Ablehnung – wir passen auf
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-4">
              {haeufigeFehler.map((fehler, index) => (
                <Card key={index} className={`${fehler.schweregrad === 'kritisch' ? 'border-destructive/50' : ''}`}>
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center flex-shrink-0 ${
                        fehler.schweregrad === 'kritisch' ? 'bg-destructive/10' : 'bg-orange-100 dark:bg-orange-900/20'
                      }`}>
                        <fehler.icon className={`w-5 h-5 ${
                          fehler.schweregrad === 'kritisch' ? 'text-destructive' : 'text-orange-600'
                        }`} />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-1">
                          <h3 className="font-bold">{fehler.fehler}</h3>
                          {fehler.schweregrad === 'kritisch' && (
                            <Badge variant="destructive" className="text-xs">Kritisch</Badge>
                          )}
                        </div>
                        <p className="text-sm text-muted-foreground mb-2">{fehler.problem}</p>
                        <div className="flex items-start gap-2 text-sm text-green-600 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                          <CheckCircle2 className="w-4 h-4 mt-0.5 flex-shrink-0" />
                          <span>{fehler.loesung}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              BAFA Online Antrag München: So funktioniert es
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Der BAFA-Antrag wird seit 2024 ausschließlich online über das BAFA-Portal gestellt. 
                Mit unserer Vollmacht übernehmen wir den gesamten Prozess für Sie – von der 
                Registrierung bis zur Einreichung aller Unterlagen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Förderantrag Service München: Komplett kostenlos</h3>
              <p>
                Bei Beauftragung einer Heizungsinstallation ist unser Förderantrag-Service 
                komplett kostenlos. Sie unterschreiben nur eine Vollmacht und wir kümmern uns 
                um den Rest. Wir haben bisher 100% aller Förderanträge erfolgreich bewilligt bekommen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">KfW 458 Kredit München: Ergänzungskredit beantragen</h3>
              <p>
                Zusätzlich zum BAFA-Zuschuss können Sie den KfW-Ergänzungskredit beantragen. 
                Dieser zinsgünstige Kredit finanziert den nach Förderung verbleibenden Eigenanteil. 
                Haushalte mit einem Einkommen unter 90.000 EUR erhalten besonders günstige Konditionen.
              </p>
            </div>
          </div>
        </section>

        <FAQ 
          title="Häufige Fragen zum Förderantrag München"
          items={[
            {
              question: "Muss ich selbst zur BAFA gehen?",
              answer: "Nein. Der BAFA-Antrag wird komplett online gestellt. Mit unserer Vollmacht übernehmen wir den gesamten Prozess für Sie – Sie müssen nirgendwo hingehen."
            },
            {
              question: "Was passiert, wenn Unterlagen fehlen?",
              answer: "Wir prüfen alle Unterlagen vor der Einreichung. Falls etwas fehlt, kontaktieren wir Sie rechtzeitig. So vermeiden wir Verzögerungen bei der Bearbeitung."
            },
            {
              question: "Kann der Antrag abgelehnt werden?",
              answer: "Bei korrekter Antragstellung ist eine Ablehnung sehr selten. Der häufigste Ablehnungsgrund ist ein vorzeitiger Vertragsabschluss – das vermeiden wir durch unseren Service."
            },
            {
              question: "Wie erfahre ich vom Ergebnis?",
              answer: "Wir überwachen den Status Ihres Antrags und informieren Sie sofort, wenn die Förderzusage eintrifft. In der Regel dauert dies 4-8 Wochen."
            },
            {
              question: "Was kostet der Antragsservice?",
              answer: "Bei Beauftragung der Heizungsinstallation ist unser Förderantrags-Service komplett kostenlos. Sie sparen sich Zeit und Nerven – wir garantieren die korrekte Abwicklung."
            }
          ]}
        />

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Förderantrag starten München: Jetzt beraten lassen
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Lassen Sie sich kostenlos beraten, welche Förderung für Ihr Projekt optimal ist. 
              Wir übernehmen die komplette Antragstellung für Sie.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-antrag-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link href="/foerderung" data-testid="link-foerderung-antrag">
                  <ArrowRight className="w-4 h-4 mr-2" />
                  Alle Förderungen ansehen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
