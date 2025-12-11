import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
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
  AlertTriangle,
  CheckCircle2,
  MapPin,
  FileText
} from "lucide-react";

const faqs = [
  {
    question: "Wie schnell können Sie bei einem Notfall kommen?",
    answer: "Bei Notfällen wie Rohrbruch oder Heizungsausfall sind wir in der Regel innerhalb von 30-45 Minuten bei Ihnen. Unser Notdienst ist auch an Wochenenden und Feiertagen besetzt.",
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
    question: "Welche Zahlungsarten akzeptieren Sie?",
    answer: "Wir akzeptieren Barzahlung, EC-Karte, Überweisung und auf Wunsch auch Ratenzahlung bei größeren Projekten wie Badsanierungen. Für Stammkunden bieten wir auch Zahlung auf Rechnung an.",
    icon: CreditCard,
    color: "bg-violet-500",
    lightBg: "bg-violet-50 dark:bg-violet-950/30",
    borderColor: "border-violet-200 dark:border-violet-800"
  },
  {
    question: "Wie lange dauert eine Badsanierung?",
    answer: "Eine komplette Badsanierung dauert je nach Größe und Umfang zwischen 2-4 Wochen. Bei einer einfachen Renovierung (ohne Fliesenarbeiten) sind es oft nur 3-5 Tage. Wir erstellen für Sie einen detaillierten Zeitplan.",
    icon: ShowerHead,
    color: "bg-cyan-500",
    lightBg: "bg-cyan-50 dark:bg-cyan-950/30",
    borderColor: "border-cyan-200 dark:border-cyan-800"
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer: "Unser Notdienst ist auch am Wochenende und an Feiertagen verfügbar. Reguläre Termine vergeben wir Montag bis Freitag von 7-18 Uhr. Auf Wunsch sind auch Samstagstermine möglich.",
    icon: Clock,
    color: "bg-amber-500",
    lightBg: "bg-amber-50 dark:bg-amber-950/30",
    borderColor: "border-amber-200 dark:border-amber-800"
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
    question: "Gibt es Förderungen für Wärmepumpen?",
    answer: "Ja! Aktuell können Sie bis zu 70% Förderung (BAFA) für den Einbau einer Wärmepumpe erhalten. Die Grundförderung beträgt 30%, plus 20% Klimageschwindigkeitsbonus und bis zu 30% einkommensabhängiger Bonus. Wir beraten Sie kostenlos!",
    icon: Leaf,
    color: "bg-teal-500",
    lightBg: "bg-teal-50 dark:bg-teal-950/30",
    borderColor: "border-teal-200 dark:border-teal-800"
  },
  {
    question: "Was kostet die Anfahrt?",
    answer: "Innerhalb Münchens ist die Anfahrt zu normalen Geschäftszeiten kostenlos. Außerhalb der Stadtgrenzen berechnen wir 0,50€ pro Kilometer. Beim Notdienst (nachts/Wochenende) fällt eine Pauschale von 49-89€ an.",
    icon: MapPin,
    color: "bg-rose-500",
    lightBg: "bg-rose-50 dark:bg-rose-950/30",
    borderColor: "border-rose-200 dark:border-rose-800"
  },
  {
    question: "Bieten Sie Finanzierung für größere Projekte?",
    answer: "Ja, für Projekte ab 5.000€ bieten wir in Zusammenarbeit mit unserer Partnerbank eine Finanzierung an. Laufzeiten von 12-72 Monaten sind möglich. Die Konditionen besprechen wir gerne persönlich mit Ihnen.",
    icon: FileText,
    color: "bg-indigo-500",
    lightBg: "bg-indigo-50 dark:bg-indigo-950/30",
    borderColor: "border-indigo-200 dark:border-indigo-800"
  },
  {
    question: "In welchen Stadtteilen sind Sie tätig?",
    answer: "Wir sind in ganz München und Umgebung tätig: Schwabing, Bogenhausen, Sendling, Pasing, Maxvorstadt, Haidhausen, Neuhausen und weitere. Auch im Münchner Umland sind wir für Sie da.",
    icon: MapPin,
    color: "bg-orange-500",
    lightBg: "bg-orange-50 dark:bg-orange-950/30",
    borderColor: "border-orange-200 dark:border-orange-800"
  },
  {
    question: "Wie verbindlich ist ein Kostenvoranschlag?",
    answer: "Unsere Kostenvoranschläge sind verbindliche Festpreisangebote. Der genannte Preis gilt, solange sich der Umfang der Arbeiten nicht ändert. Sollten während der Arbeit unvorhergesehene Probleme auftreten, informieren wir Sie sofort.",
    icon: Shield,
    color: "bg-sky-500",
    lightBg: "bg-sky-50 dark:bg-sky-950/30",
    borderColor: "border-sky-200 dark:border-sky-800"
  },
  {
    question: "Welche Leistungen bieten Sie an?",
    answer: "Wir bieten Sanitär-Installationen, Badsanierung, Heizungsservice, Wärmepumpen-Installation, Rohrreinigung, Notdienst und komplette Haustechnik-Lösungen. Von der kleinen Reparatur bis zum Großprojekt.",
    icon: Wrench,
    color: "bg-primary",
    lightBg: "bg-primary/10",
    borderColor: "border-primary/20"
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Häufige Fragen (FAQ) | Sanitär & Heizung München | Ihr Meisterbetrieb"
        description="Antworten auf häufige Fragen zu Sanitär, Heizung und Badsanierung in München. Festpreisgarantie, Notdienst, Förderungen und mehr. Jetzt informieren!"
        canonical="https://aquapro24.de/faq"
        keywords="FAQ Sanitär München, Fragen Heizung Schwabing, Badsanierung Bogenhausen, Wärmepumpe Förderung Bayern, Sanitär Sendling, Klempner Pasing, Maxvorstadt, Haidhausen, Neuhausen"
      />
      <Header />
      <main>
        <section className="relative py-10 lg:pt-8 pb-6 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <HelpCircle className="w-3 h-3" />
                Häufige Fragen
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ihre Fragen - Unsere Antworten
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Hier finden Sie Antworten auf die häufigsten Fragen zu unseren Leistungen, 
                Preisen und Abläufen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989123456789" data-testid="button-call-faq">
                    <Phone className="w-5 h-5 mr-2" />
                    Kostenlos beraten lassen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {faqs.map((faq, index) => (
                <div 
                  key={index} 
                  className={`${faq.lightBg} ${faq.borderColor} border rounded-lg p-6 transition-all duration-200`}
                  data-testid={`faq-card-${index}`}
                >
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`${faq.color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0`}>
                      <faq.icon className="w-5 h-5 text-white" />
                    </div>
                    <h3 className="font-semibold text-lg leading-tight">{faq.question}</h3>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-12 bg-gradient-to-r from-primary/5 via-secondary/5 to-accent/5">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">Noch Fragen?</h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Wir beraten Sie gerne persönlich - kostenlos und unverbindlich. 
              Rufen Sie uns an oder fordern Sie einen Rückruf an.
            </p>
            
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" asChild>
                <a href="tel:+4989123456789" data-testid="button-call-bottom">
                  <Phone className="w-5 h-5 mr-2" />
                  089 123 456 789
                </a>
              </Button>
              <Button size="lg" variant="outline" onClick={() => {
                const chatButton = document.querySelector('[data-testid="button-toggle-chat"]') as HTMLButtonElement;
                if (chatButton) chatButton.click();
              }}>
                <Clock className="w-5 h-5 mr-2" />
                Rückruf anfordern
              </Button>
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4989123456789" data-testid="button-emergency-faq">
                  <AlertTriangle className="w-5 h-5 mr-2" />
                  Notdienst
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
