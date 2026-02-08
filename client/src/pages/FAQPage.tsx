import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";

const SimpleFAQ = lazy(() => import("@/components/SimpleFAQ"));
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  HelpCircle,
  Clock,
  Wrench,
  ShowerHead,
  Flame,
  Leaf,
  Shield,
  CreditCard,
  CheckCircle2,
  MapPin,
  FileText,
  Droplets,
  ThermometerSun,
  Sparkles,
  Calendar,
  Hammer,
  MessageSquare,
  AlertTriangle,
  Star
} from "lucide-react";
import { Link } from "wouter";
import { HeroPicture } from "@/components/ResponsiveHero";

const faqs = [
  {
    question: "Wie schnell können Sie bei einem Notfall kommen?",
    answer: "Bei Notfällen wie Rohrbruch oder Heizungsausfall sind wir in der Regel ab 60 Minuten bei Ihnen. Unser Notdienst ist auch an Wochenenden und Feiertagen besetzt.",
    icon: Clock,
    color: "bg-blue-500",
    lightBg: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    question: "Bieten Sie eine Festpreisgarantie?",
    answer: "Ja, absolut! Bei uns gibt es keine bösen Überraschungen. Wir nennen Ihnen vor Arbeitsbeginn einen verbindlichen Festpreis. Dieser Preis gilt - auch wenn die Arbeit länger dauert als geplant.",
    icon: Shield,
    color: "bg-emerald-500",
    lightBg: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  },
  {
    question: "Tropfender Wasserhahn - was kostet die Reparatur?",
    answer: "Kunde aus Schwabing: 'Mein Wasserhahn tropfte seit Wochen. Der Monteur kam am selben Tag, tauschte die Dichtung in 20 Minuten aus - alles für unter 100€. Hätte ich viel früher anrufen sollen!'",
    icon: Droplets,
    color: "bg-cyan-500",
    lightBg: "bg-cyan-50 dark:bg-cyan-950/30",
    borderColor: "border-cyan-200 dark:border-cyan-800"
  },
  {
    question: "Welche Zahlungsarten akzeptieren Sie?",
    answer: "Wir akzeptieren Barzahlung, EC-Karte, Überweisung und auf Wunsch auch Ratenzahlung bei größeren Projekten wie Badsanierungen. Für Stammkunden bieten wir auch Zahlung auf Rechnung an.",
    icon: CreditCard,
    color: "bg-violet-500",
    lightBg: "bg-violet-50 dark:bg-violet-950/30",
    borderColor: "border-violet-200 dark:border-violet-800"
  },
  {
    question: "Verstopfter Abfluss - wie schnell wird das behoben?",
    answer: "Kundin aus Bogenhausen: 'Sonntag Abend war mein Küchenabfluss komplett verstopft. Der Notdienst kam innerhalb von 40 Minuten. Mit einer speziellen Spirale war alles in 15 Minuten erledigt. Super Service!'",
    icon: Wrench,
    color: "bg-orange-500",
    lightBg: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  {
    question: "Wie lange dauert eine Badsanierung?",
    answer: "Eine komplette Badsanierung dauert je nach Größe und Umfang zwischen 2-4 Wochen. Bei einer einfachen Renovierung (ohne Fliesenarbeiten) sind es oft nur 3-5 Tage. Wir erstellen für Sie einen detaillierten Zeitplan.",
    icon: ShowerHead,
    color: "bg-teal-500",
    lightBg: "bg-teal-50 dark:bg-teal-950/30",
    borderColor: "border-teal-200 dark:border-teal-800"
  },
  {
    question: "WC-Spülung defekt - kann man das schnell reparieren?",
    answer: "Kunde aus Sendling: 'Die Spülung lief ständig nach und verschwendete Wasser. Der Techniker hat den Schwimmer und das Ventil in 30 Minuten getauscht. Jetzt spare ich jeden Monat bei der Wasserrechnung!'",
    icon: Droplets,
    color: "bg-sky-500",
    lightBg: "bg-sky-50 dark:bg-sky-950/30",
    borderColor: "border-sky-200 dark:border-sky-800"
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer: "Unser Notdienst ist auch am Wochenende und an Feiertagen verfügbar. Reguläre Termine vergeben wir Montag bis Freitag von 7-18 Uhr. Auf Wunsch sind auch Samstagstermine möglich.",
    icon: Calendar,
    color: "bg-amber-500",
    lightBg: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800"
  },
  {
    question: "Heizung wird nicht warm - woran liegt das?",
    answer: "Kundin aus Pasing: 'Meine Heizkörper wurden nur lauwarm. Der Monteur hat die Heizung entlüftet und den hydraulischen Abgleich gemacht. Jetzt werden alle Räume gleichmäßig warm - und ich spare sogar Heizkosten!'",
    icon: ThermometerSun,
    color: "bg-red-500",
    lightBg: "bg-red-50 dark:bg-red-950/30",
    borderColor: "border-red-200 dark:border-red-800"
  },
  {
    question: "Geben Sie Garantie auf Ihre Arbeit?",
    answer: "Ja, auf alle unsere Arbeiten geben wir 2 Jahre Gewährleistung. Bei Problemen kommen wir kostenlos zurück und beheben den Mangel. Auf eingebaute Materialien gelten zusätzlich die Herstellergarantien.",
    icon: CheckCircle2,
    color: "bg-green-500",
    lightBg: "bg-green-50 dark:bg-green-950/30",
    borderColor: "border-green-200 dark:border-green-800"
  },
  {
    question: "Siphon unter der Spüle tropft - ist das teuer?",
    answer: "Kunde aus Maxvorstadt: 'Unter meiner Küchenspüle tropfte es seit Tagen. Der Monteur hat den alten Siphon in 15 Minuten gegen einen neuen getauscht. Einfache Reparatur, kleiner Preis - hätte ich selbst nie hinbekommen!'",
    icon: Hammer,
    color: "bg-indigo-500",
    lightBg: "bg-indigo-50 dark:bg-indigo-950/30",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  },
  {
    question: "Gibt es Förderungen für Wärmepumpen?",
    answer: "Ja! Aktuell können Sie bis zu 70% Förderung (BAFA) für den Einbau einer Wärmepumpe erhalten. Die Grundförderung beträgt 30%, plus 20% Klimageschwindigkeitsbonus und bis zu 30% einkommensabhängiger Bonus. Wir beraten Sie kostenlos!",
    icon: Leaf,
    color: "bg-lime-500",
    lightBg: "bg-lime-50 dark:bg-lime-950/30",
    borderColor: "border-lime-200 dark:border-lime-800"
  },
  {
    question: "Thermostat kaputt - lohnt sich ein Austausch?",
    answer: "Kundin aus Haidhausen: 'Mein altes Thermostat regelte nicht mehr richtig. Der neue programmierbare Thermostat wurde in 20 Minuten montiert. Jetzt kann ich die Heizzeiten genau einstellen und spare deutlich Energie!'",
    icon: ThermometerSun,
    color: "bg-rose-500",
    lightBg: "bg-rose-50 dark:bg-rose-950/30",
    borderColor: "border-rose-200 dark:border-rose-800"
  },
  {
    question: "Was kostet die Anfahrt?",
    answer: "Innerhalb Münchens ist die Anfahrt zu normalen Geschäftszeiten kostenlos. Außerhalb der Stadtgrenzen berechnen wir 0,50€ pro Kilometer. Beim Notdienst (nachts/Wochenende) fällt eine Pauschale von 49-89€ an.",
    icon: MapPin,
    color: "bg-fuchsia-500",
    lightBg: "bg-fuchsia-50 dark:bg-fuchsia-950/30",
    borderColor: "border-fuchsia-200 dark:border-fuchsia-800"
  },
  {
    question: "Duschkopf verkalkt - kann man den reinigen?",
    answer: "Kunde aus Neuhausen: 'Mein Duschkopf war so verkalkt, dass kaum noch Wasser kam. Der Monteur hat ihn professionell entkalkt und die Dichtungen erneuert. Jetzt duscht es sich wieder wie neu - für kleines Geld!'",
    icon: Sparkles,
    color: "bg-purple-500",
    lightBg: "bg-purple-50 dark:bg-purple-950/30",
    borderColor: "border-purple-200 dark:border-purple-800"
  },
  {
    question: "Bieten Sie Finanzierung für größere Projekte?",
    answer: "Ja, für Projekte ab 5.000€ bieten wir in Zusammenarbeit mit unserer Partnerbank eine Finanzierung an. Laufzeiten von 12-72 Monaten sind möglich. Die Konditionen besprechen wir gerne persönlich mit Ihnen.",
    icon: FileText,
    color: "bg-slate-500",
    lightBg: "bg-slate-50 dark:bg-slate-950/30",
    borderColor: "border-slate-200 dark:border-slate-800"
  },
  {
    question: "Wasserdruck zu niedrig - was kann man tun?",
    answer: "Kundin aus Schwabing: 'Der Wasserdruck in meiner Dusche war furchtbar schwach. Der Techniker hat das Druckminderventil eingestellt und einen verstopften Filter gereinigt. Jetzt ist der Druck perfekt - einfache Lösung!'",
    icon: Droplets,
    color: "bg-blue-600",
    lightBg: "bg-blue-50 dark:bg-blue-950/30",
    borderColor: "border-blue-200 dark:border-blue-800"
  },
  {
    question: "In welchen Stadtteilen sind Sie tätig?",
    answer: "Wir sind in ganz München und Umgebung tätig: Schwabing, Bogenhausen, Sendling, Pasing, Maxvorstadt, Haidhausen, Neuhausen und weitere. Auch im Münchner Umland sind wir für Sie da.",
    icon: MapPin,
    color: "bg-emerald-600",
    lightBg: "bg-emerald-50 dark:bg-emerald-950/30",
    borderColor: "border-emerald-200 dark:border-emerald-800"
  },
  {
    question: "Heizkörper gluckert ständig - ist das schlimm?",
    answer: "Kunde aus Bogenhausen: 'Mein Heizkörper im Schlafzimmer gluckerte die ganze Nacht. Der Monteur hat ihn fachmännisch entlüftet - in 10 Minuten war Ruhe. So eine kleine Sache mit großer Wirkung!'",
    icon: Flame,
    color: "bg-orange-600",
    lightBg: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  {
    question: "Wie verbindlich ist ein Kostenvoranschlag?",
    answer: "Unsere Kostenvoranschläge sind verbindliche Festpreisangebote. Der genannte Preis gilt, solange sich der Umfang der Arbeiten nicht ändert. Sollten während der Arbeit unvorhergesehene Probleme auftreten, informieren wir Sie sofort.",
    icon: Shield,
    color: "bg-primary",
    lightBg: "bg-primary/10",
    borderColor: "border-primary/20"
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoMeta['/faq'].title}
        description={seoMeta['/faq'].description}
        canonical="https://aquapro24.de/faq"
        keywords={seoMeta['/faq'].keywords.join(', ')}
        ogImageAlt="FAQ Sanitär Heizung München häufige Fragen Preise Kosten Notdienst - AquaPro 24 Antworten"
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_faq" alt="" />
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
                FAQ Sanitär & Heizung München – Preise & Tipps
              </h1>

              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner Preise München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Reparatur Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreisgarantie</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Preise</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Förderung 2025</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserhahn austauschen Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC Austausch Preis</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrreinigung Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung entlüften Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Garantie Handwerker</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Gewährleistung Sanitär</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Anfahrt kostenlos</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Zahlungsarten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Ratenzahlung möglich</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kostenvoranschlag</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Terminverfügbarkeit</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wochenende Einsatz</span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Fragen zu Kosten, Ablauf oder Notdienst?</strong>
              </p>

              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                Hier finden Sie Antworten auf die häufigsten Fragen - mit echten Beispielen 
                von Kunden, denen wir geholfen haben.
              </p>

              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Alle Ihre Fragen beantwortet, bevor der Techniker kommt.
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.847 Münchner Familien</strong> vertrauen uns – Festpreise: Sanitär ab 92€ | Rohrreinigung ab 81€ | Heizung ab 154€
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-faq">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white" 
                  asChild
                  data-testid="button-termin-faq"
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
                  <span>Festpreisgarantie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
          <SimpleFAQ 
            items={faqs} 
            title="Ihre Fragen – unsere Antworten"
            subtitle="Echte Beispiele von Kunden, denen wir geholfen haben"
          />
        </Suspense>

        <section className="py-6 lg:py-6 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">AquaPro 24 München kontaktieren: Kostenlose Beratung anfordern</h2>
            <p className="text-muted-foreground mb-6 max-w-2xl mx-auto">
              Wir beraten Sie gerne persönlich - kostenlos und unverbindlich.
            </p>
            
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4989444438872" data-testid="button-call-bottom">
                  <Phone className="w-5 h-5 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" className="bg-blue-600 text-white border-blue-700" asChild>
                <Link href="/termin">
                  <Clock className="w-5 h-5 mr-2" />
                  24h Terminbuchung
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <InternalLinks
        title="Unsere Leistungen im Detail"
        variant="footer-cta"
        links={[
          { href: "/sanitaer", text: "Sanitär-Leistungen", description: "Alle Sanitär-Services" },
          { href: "/heizung", text: "Heizungs-Service", description: "Wartung bis Neuinstallation" },
          { href: "/bad", text: "Badsanierung", description: "Komplettsanierung" },
          { href: "/foerderung", text: "Förderung & Zuschüsse", description: "BAFA & KfW Beratung" },
          { href: "/termin", text: "Termin vereinbaren", description: "Online-Buchung in 2 Minuten" },
        ]}
      />
      <Footer />
    </div>
  );
}
