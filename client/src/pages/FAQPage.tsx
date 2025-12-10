import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Phone, 
  HelpCircle,
  Euro,
  Clock,
  Wrench,
  ShowerHead,
  Flame,
  Leaf,
  Shield,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";

const pricingCategories = [
  {
    icon: Wrench,
    title: "Sanitär-Reparaturen",
    items: [
      { service: "Wasserhahn Reparatur", price: "ab 185€" },
      { service: "Tropfender Wasserhahn", price: "ab 185€" },
      { service: "WC-Spülung Reparatur", price: "ab 285€" },
      { service: "Siphon austauschen", price: "ab 59€" },
      { service: "Abfluss reinigen", price: "ab 89€" },
      { service: "Rohrbruch Notdienst", price: "ab 149€" },
    ]
  },
  {
    icon: ShowerHead,
    title: "Badsanierung",
    items: [
      { service: "Komplettes Bad (klein)", price: "ab 8.900€" },
      { service: "Komplettes Bad (mittel)", price: "ab 14.500€" },
      { service: "Komplettes Bad (groß)", price: "ab 22.000€" },
      { service: "Dusche erneuern", price: "ab 2.900€" },
      { service: "Badewanne einbauen", price: "ab 1.800€" },
      { service: "Barrierefreies Bad", price: "ab 20.000€" },
    ]
  },
  {
    icon: Flame,
    title: "Heizung",
    items: [
      { service: "Heizungswartung", price: "ab 149€" },
      { service: "Heizkörper tauschen", price: "ab 350€" },
      { service: "Thermostat austauschen", price: "ab 89€" },
      { service: "Heizung entlüften", price: "ab 79€" },
      { service: "Gasheizung neu", price: "ab 6.500€" },
      { service: "Heizungsnotdienst", price: "ab 129€" },
    ]
  },
  {
    icon: Leaf,
    title: "Wärmepumpe",
    items: [
      { service: "Luft-Wasser-WP (klein)", price: "ab 12.000€" },
      { service: "Luft-Wasser-WP (groß)", price: "ab 18.000€" },
      { service: "Erdwärmepumpe", price: "ab 45.000€" },
      { service: "WP-Wartung jährlich", price: "ab 249€" },
      { service: "Förderberatung", price: "ab 150€" },
      { service: "Vor-Ort-Check", price: "kostenlos" },
    ]
  },
];

const generalFAQs = [
  {
    question: "Wie schnell können Sie bei einem Notfall kommen?",
    answer: "Bei Notfällen wie Rohrbruch oder Heizungsausfall sind wir in der Regel innerhalb von 30-45 Minuten bei Ihnen. Unser 24/7 Notdienst ist rund um die Uhr besetzt - auch an Wochenenden und Feiertagen. Rufen Sie einfach an: 089 123 456 789."
  },
  {
    question: "Bieten Sie eine Festpreisgarantie?",
    answer: "Ja, absolut! Bei uns gibt es keine bösen Überraschungen. Wir nennen Ihnen vor Arbeitsbeginn einen verbindlichen Festpreis. Dieser Preis gilt - auch wenn die Arbeit länger dauert als geplant. Sie zahlen nur, was vereinbart wurde."
  },
  {
    question: "Welche Zahlungsarten akzeptieren Sie?",
    answer: "Wir akzeptieren Barzahlung, EC-Karte, Überweisung und auf Wunsch auch Ratenzahlung bei größeren Projekten wie Badsanierungen. Für Stammkunden bieten wir auch Zahlung auf Rechnung an."
  },
  {
    question: "Wie lange dauert eine Badsanierung?",
    answer: "Eine komplette Badsanierung dauert je nach Größe und Umfang zwischen 2-4 Wochen. Bei einer einfachen Renovierung (ohne Fliesenarbeiten) sind es oft nur 3-5 Tage. Wir erstellen für Sie einen detaillierten Zeitplan."
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer: "Unser Notdienst ist 24/7 verfügbar - also auch am Wochenende und an Feiertagen. Reguläre Termine vergeben wir Montag bis Freitag von 7-18 Uhr. Auf Wunsch sind auch Samstagstermine möglich."
  },
  {
    question: "Geben Sie Garantie auf Ihre Arbeit?",
    answer: "Ja, auf alle unsere Arbeiten geben wir 2 Jahre Gewährleistung. Bei Problemen kommen wir kostenlos zurück und beheben den Mangel. Auf eingebaute Materialien gelten zusätzlich die Herstellergarantien."
  },
];

const pricingFAQs = [
  {
    question: "Was kostet ein Sanitär-Notdienst am Wochenende?",
    answer: "Die Anfahrtspauschale für den Notdienst am Wochenende beträgt 89€. Dazu kommen die Arbeitskosten je nach Aufwand. In den meisten Fällen liegen die Gesamtkosten für einen Notfall-Einsatz zwischen 150-300€. Bei größeren Schäden erstellen wir einen Kostenvoranschlag."
  },
  {
    question: "Sind Ihre Preise inklusive Mehrwertsteuer?",
    answer: "Alle genannten Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer von 19%. Es kommen keine versteckten Kosten hinzu. Material ist ebenfalls im Festpreis enthalten, sofern nicht anders angegeben."
  },
  {
    question: "Gibt es Förderungen für Wärmepumpen?",
    answer: "Ja! Aktuell können Sie bis zu 70% Förderung (BAFA) für den Einbau einer Wärmepumpe erhalten. Die Grundförderung beträgt 30%, plus 20% Klimageschwindigkeitsbonus und bis zu 30% einkommensabhängiger Bonus. Wir beraten Sie kostenlos und helfen bei der Antragstellung."
  },
  {
    question: "Was kostet die Anfahrt?",
    answer: "Innerhalb Münchens ist die Anfahrt zu normalen Geschäftszeiten kostenlos. Außerhalb der Stadtgrenzen berechnen wir 0,50€ pro Kilometer. Beim Notdienst (nachts/Wochenende) fällt eine Pauschale von 49-89€ an."
  },
  {
    question: "Bieten Sie Finanzierung für größere Projekte?",
    answer: "Ja, für Projekte ab 5.000€ bieten wir in Zusammenarbeit mit unserer Partnerbank eine Finanzierung an. Laufzeiten von 12-72 Monaten sind möglich. Die Konditionen besprechen wir gerne persönlich mit Ihnen."
  },
  {
    question: "Wie verbindlich ist ein Kostenvoranschlag?",
    answer: "Unsere Kostenvoranschläge sind verbindliche Festpreisangebote. Der genannte Preis gilt, solange sich der Umfang der Arbeiten nicht ändert. Sollten während der Arbeit unvorhergesehene Probleme auftreten, informieren wir Sie sofort und besprechen die Mehrkosten."
  },
];

export default function FAQPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="FAQ & Preise | Häufige Fragen | Sanitär & Heizung München"
        description="Alle Antworten zu Preisen, Leistungen und Service. Transparente Preisliste für Sanitär, Badsanierung, Heizung und Wärmepumpe. Festpreisgarantie."
        canonical="https://aquapro24.de/faq"
        keywords="FAQ Sanitär München, Preise Heizung, Kosten Badsanierung, Wärmepumpe Förderung, Sanitär Preisliste"
      />
      <Header />
      <main>
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-primary/10 via-background to-secondary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <HelpCircle className="w-3 h-3" />
                FAQ & Preise
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Häufige Fragen & Preisübersicht
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Transparenz ist uns wichtig.</strong> Hier finden Sie Antworten auf die 
                häufigsten Fragen und eine Übersicht unserer Preise.
              </p>
              <p className="text-muted-foreground mb-8">
                Alle Preise sind Richtwerte inklusive Mehrwertsteuer. Den genauen Festpreis 
                für Ihr Projekt erhalten Sie nach einer kostenlosen Besichtigung.
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
            <div className="text-center mb-10">
              <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
                <Euro className="w-3 h-3 mr-1" />
                Transparente Preise
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Preisübersicht</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Richtwerte für unsere häufigsten Leistungen. Alle Preise inkl. MwSt. und Material.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 gap-6">
              {pricingCategories.map((category, index) => (
                <Card key={index}>
                  <CardHeader className="pb-4">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                        <category.icon className="w-5 h-5 text-primary" />
                      </div>
                      <CardTitle className="text-lg">{category.title}</CardTitle>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      {category.items.map((item, i) => (
                        <div key={i} className="flex items-center justify-between py-2 border-b border-border last:border-0">
                          <span className="text-sm">{item.service}</span>
                          <Badge variant="secondary" className="font-semibold">{item.price}</Badge>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="mt-8 p-6 bg-muted/50 rounded-lg">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center flex-shrink-0">
                  <Shield className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-2">Unsere Festpreis-Garantie</h3>
                  <p className="text-sm text-muted-foreground">
                    Die genannten Preise sind Richtwerte. Nach einer kostenlosen Besichtigung erhalten 
                    Sie von uns einen verbindlichen Festpreis. Dieser Preis gilt - auch wenn die Arbeit 
                    länger dauert. Keine versteckten Kosten, keine bösen Überraschungen.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Allgemeine Fragen</h2>
                <FAQ 
                  items={generalFAQs} 
                  title=""
                />
              </div>
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">Fragen zu Preisen & Kosten</h2>
                <FAQ 
                  items={pricingFAQs} 
                  title=""
                />
              </div>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">Noch Fragen?</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Wir beraten Sie gerne persönlich - kostenlos und unverbindlich
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <Phone className="w-7 h-7 text-primary" />
                  </div>
                  <h3 className="font-semibold mb-2">Anrufen</h3>
                  <p className="text-sm text-muted-foreground mb-4">Sofortige Beratung am Telefon</p>
                  <Button asChild className="w-full">
                    <a href="tel:+4989123456789">089 123 456 789</a>
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                    <Clock className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold mb-2">Rückruf</h3>
                  <p className="text-sm text-muted-foreground mb-4">Wir rufen Sie zurück</p>
                  <Button variant="secondary" className="w-full" onClick={() => {
                    const chatButton = document.querySelector('[data-testid="button-toggle-chat"]') as HTMLButtonElement;
                    if (chatButton) chatButton.click();
                  }}>
                    Rückruf anfordern
                  </Button>
                </CardContent>
              </Card>
              
              <Card className="text-center hover-elevate">
                <CardContent className="p-6">
                  <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
                    <AlertTriangle className="w-7 h-7 text-accent" />
                  </div>
                  <h3 className="font-semibold mb-2">Notfall?</h3>
                  <p className="text-sm text-muted-foreground mb-4">24/7 Notdienst erreichbar</p>
                  <Button variant="outline" asChild className="w-full border-destructive text-destructive hover:bg-destructive/10">
                    <a href="tel:+4989123456789">Notdienst anrufen</a>
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
