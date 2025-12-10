import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  BookOpen, 
  Droplets, 
  Flame, 
  Leaf, 
  ShowerHead,
  AlertTriangle,
  CheckCircle2,
  Lightbulb,
  Phone,
  ArrowRight,
  Clock,
  Euro,
  ThermometerSun,
  Wrench
} from "lucide-react";
import bathroomImage from "@assets/stock_images/modern_bathroom_reno_d985ed76.jpg";
import heatingImage from "@assets/stock_images/heating_system_boile_6d071f6f.jpg";
import heatPumpImage from "@assets/stock_images/heat_pump_installati_6831dd34.jpg";
import plumberImage from "@assets/stock_images/professional_plumber_be6e9e4a.jpg";

const guides = [
  {
    id: "wasserschaden",
    icon: Droplets,
    title: "Wasserschaden - Was tun?",
    subtitle: "Erste Hilfe bei Rohrbruch und Wasserschäden",
    image: plumberImage,
    intro: "Ein Wasserschaden kann jeden treffen. Ob geplatztes Rohr, defekte Waschmaschine oder Überschwemmung durch Starkregen - schnelles Handeln ist entscheidend, um den Schaden zu begrenzen.",
    sections: [
      {
        title: "Sofortmaßnahmen bei Wasserschaden",
        content: "Bei einem Wasserschaden zählt jede Minute. Je schneller Sie handeln, desto geringer ist der Schaden. Hier sind die wichtigsten Schritte:",
        tips: [
          "Hauptwasserhahn sofort zudrehen (meist im Keller oder Hausanschlussraum)",
          "Strom in betroffenen Bereichen abschalten (Sicherungskasten)",
          "Stehendes Wasser mit Eimern, Lappen oder Nasssauger entfernen",
          "Möbel und Wertgegenstände in trockene Bereiche bringen",
          "Fenster öffnen für Luftzirkulation",
          "Fotos vom Schaden für die Versicherung machen"
        ]
      },
      {
        title: "Wann brauchen Sie einen Notdienst?",
        content: "Nicht jeder Wasserschaden erfordert einen teuren Notdienst. Hier ist eine Orientierung:",
        tips: [
          "NOTDIENST NÖTIG: Aktiver Wasseraustritt, der nicht gestoppt werden kann",
          "NOTDIENST NÖTIG: Wasser in der Nähe von Elektroinstallationen",
          "NOTDIENST NÖTIG: Große Wassermengen, die in andere Wohnungen laufen",
          "KANN WARTEN: Kleiner Fleck an der Decke ohne aktiven Wasseraustritt",
          "KANN WARTEN: Tropfender Wasserhahn oder langsamer Abfluss"
        ]
      },
      {
        title: "Kosten und Versicherung",
        content: "Die Kosten für die Beseitigung eines Wasserschadens variieren stark. Ein Notdienst-Einsatz kostet zwischen 150-400€. Größere Sanierungen können mehrere tausend Euro kosten.",
        tips: [
          "Hausratversicherung deckt Schäden an beweglichen Gegenständen",
          "Wohngebäudeversicherung deckt Schäden am Gebäude selbst",
          "Dokumentieren Sie alles mit Fotos vor der Reparatur",
          "Melden Sie den Schaden innerhalb von 3 Tagen der Versicherung",
          "Heben Sie alle Rechnungen und Belege auf"
        ]
      }
    ]
  },
  {
    id: "badsanierung",
    icon: ShowerHead,
    title: "Badsanierung planen",
    subtitle: "Von der Idee zum Traumbad - Schritt für Schritt",
    image: bathroomImage,
    intro: "Eine Badsanierung ist eine der wertvollsten Investitionen in Ihr Zuhause. Mit der richtigen Planung wird aus dem stressigen Bauprojekt ein strukturierter Prozess mit vorhersehbarem Ergebnis.",
    sections: [
      {
        title: "Phase 1: Bestandsaufnahme und Wunschliste",
        content: "Bevor Sie Angebote einholen, sollten Sie sich über Ihre Wünsche und Möglichkeiten klar werden:",
        tips: [
          "Messen Sie Ihr Bad genau aus (Länge, Breite, Höhe, Fenster, Türen)",
          "Notieren Sie alle vorhandenen Anschlüsse (Wasser, Abwasser, Strom)",
          "Erstellen Sie eine Wunschliste: Was muss sein, was wäre schön?",
          "Sammeln Sie Inspiration: Pinterest, Kataloge, Ausstellungen",
          "Definieren Sie Ihr Budget (realistisch: 8.000-25.000€ für Komplettsanierung)",
          "Überlegen Sie: Muss es barrierefrei sein (jetzt oder später)?"
        ]
      },
      {
        title: "Phase 2: Planung und Angebote",
        content: "Holen Sie mindestens 2-3 Angebote ein und vergleichen Sie genau. Achten Sie auf vollständige Angebote:",
        tips: [
          "Demontage und Entsorgung der alten Sanitärobjekte",
          "Rohinstallation (neue Wasser- und Abwasserleitungen falls nötig)",
          "Elektroinstallation (Steckdosen, Beleuchtung, Lüftung)",
          "Estrich und Abdichtung (besonders wichtig!)",
          "Fliesen inkl. Material und Verlegung",
          "Montage aller Sanitärobjekte",
          "Malerarbeiten und Abschlussarbeiten"
        ]
      },
      {
        title: "Phase 3: Zeitplan und Ablauf",
        content: "Eine typische Badsanierung dauert 2-4 Wochen. Hier der ungefähre Ablauf:",
        tips: [
          "Woche 1: Demontage, Rohinstallation, Elektrik",
          "Woche 2: Estrich, Trocknung, Abdichtung",
          "Woche 3: Fliesen an Wand und Boden",
          "Woche 4: Montage Sanitär, Armaturen, Spiegel, Accessoires",
          "Planen Sie Ausweichmöglichkeiten für die Bauzeit",
          "Bestellen Sie Sanitärobjekte 4-6 Wochen vor Baubeginn"
        ]
      },
      {
        title: "Häufige Fehler vermeiden",
        content: "Diese Fehler sehen wir leider immer wieder bei Badsanierungen:",
        tips: [
          "Zu wenig Steckdosen geplant (mind. 4-6 sind sinnvoll)",
          "Beleuchtung vergessen (Spiegelbeleuchtung ist wichtig!)",
          "Zu kleine Dusche gewählt (min. 90x90cm, besser 100x100cm)",
          "Kein Lüftungskonzept (Schimmelgefahr!)",
          "Billigste Armaturen gewählt (rächt sich nach 2-3 Jahren)",
          "Keine Revisionsöffnungen für Installationen"
        ]
      }
    ]
  },
  {
    id: "heizung-warten",
    icon: Flame,
    title: "Heizung richtig warten",
    subtitle: "So sparen Sie Energie und vermeiden Ausfälle",
    image: heatingImage,
    intro: "Eine regelmäßig gewartete Heizung spart bis zu 15% Energie, läuft zuverlässiger und hält länger. Die jährliche Wartung kostet zwischen 120-200€ - die Einsparungen sind oft deutlich höher.",
    sections: [
      {
        title: "Was Sie selbst tun können",
        content: "Viele Wartungsarbeiten können Sie ohne Fachmann selbst erledigen:",
        tips: [
          "Heizkörper regelmäßig entlüften (1-2x pro Heizperiode)",
          "Thermostatventile prüfen - reagieren sie noch?",
          "Heizkörper nicht zustellen (min. 50cm Abstand)",
          "Heizungsrohre auf Dichtigkeit prüfen (Wasserflecken?)",
          "Raumtemperatur optimieren (1°C weniger = 6% Ersparnis)",
          "Nachtabsenkung nutzen (16-17°C nachts reichen)"
        ]
      },
      {
        title: "Was der Fachmann macht",
        content: "Bei der jährlichen Wartung prüft der Heizungstechniker:",
        tips: [
          "Brenner reinigen und einstellen",
          "Abgaswerte messen und optimieren",
          "Wasserdruck und Ausdehnungsgefäß prüfen",
          "Sicherheitsventile und Sensoren testen",
          "Verschleißteile austauschen (Dichtungen, Filter)",
          "Anlage auf Effizienz optimieren"
        ]
      },
      {
        title: "Warnsignale erkennen",
        content: "Diese Anzeichen deuten auf Probleme hin - handeln Sie schnell:",
        tips: [
          "Ungewöhnliche Geräusche (Klopfen, Pfeifen, Gluckern)",
          "Heizung wird nicht mehr richtig warm",
          "Wasserflecken an der Heizung oder Rohren",
          "Brenner springt häufig an und aus (Takten)",
          "Ungewöhnlicher Geruch (besonders bei Gas!)",
          "Energieverbrauch steigt ohne Grund"
        ]
      }
    ]
  },
  {
    id: "waermepumpe",
    icon: Leaf,
    title: "Wärmepumpe: Lohnt sich das?",
    subtitle: "Alle Fakten für Ihre Entscheidung",
    image: heatPumpImage,
    intro: "Die Wärmepumpe ist die Heizung der Zukunft. Mit bis zu 70% Förderung und stark gesunkenen Energiekosten lohnt sich der Umstieg für viele Haushalte. Aber ist Ihr Haus geeignet?",
    sections: [
      {
        title: "Vorteile der Wärmepumpe",
        content: "Warum immer mehr Hausbesitzer auf Wärmepumpen umsteigen:",
        tips: [
          "Bis zu 50% niedrigere Heizkosten im Vergleich zu Gas",
          "Unabhängigkeit von Gas- und Ölpreisen",
          "Klimaneutral heizen mit Ökostrom",
          "Bis zu 70% Förderung vom Staat (BAFA)",
          "Kann im Sommer auch kühlen",
          "Wartungsarm und langlebig (20+ Jahre)"
        ]
      },
      {
        title: "Ist Ihr Haus geeignet?",
        content: "Nicht jedes Haus ist optimal für eine Wärmepumpe. Ideale Voraussetzungen:",
        tips: [
          "IDEAL: Gut gedämmtes Haus (Neubau oder sanierter Altbau)",
          "IDEAL: Fußbodenheizung oder Niedertemperatur-Heizkörper",
          "MÖGLICH: Altbau mit Standardheizkörpern (oft nach Optimierung)",
          "WICHTIG: Ausreichend Platz für Außeneinheit (Luftwärme)",
          "PRÜFEN: Sind die Heizkörper groß genug für niedrige Vorlauftemperaturen?",
          "TIPP: Kostenloser Eignungscheck durch unsere Experten"
        ]
      },
      {
        title: "Kosten und Förderung 2024",
        content: "Was kostet eine Wärmepumpe und welche Förderung gibt es?",
        tips: [
          "Luft-Wasser-Wärmepumpe: 12.000-20.000€ (vor Förderung)",
          "Erdwärmepumpe: 20.000-30.000€ (vor Förderung)",
          "Grundförderung BAFA: 30% der Kosten",
          "Klimageschwindigkeitsbonus: +20% (bei Austausch fossiler Heizung)",
          "Einkommensbonus: +30% (bei unter 40.000€ Haushaltseinkommen)",
          "MAXIMAL: 70% Förderung möglich!"
        ]
      },
      {
        title: "Rechenbeispiel",
        content: "So rechnet sich eine Wärmepumpe in der Praxis:",
        tips: [
          "Annahme: Einfamilienhaus, 150m², 20.000 kWh Wärmebedarf",
          "Gasheizung: ca. 2.400€/Jahr (bei 12ct/kWh Gas)",
          "Wärmepumpe: ca. 1.400€/Jahr (bei 28ct/kWh Strom, COP 4)",
          "Ersparnis pro Jahr: ca. 1.000€",
          "Investition: 15.000€ (nach 50% Förderung von 30.000€)",
          "Amortisation: 15 Jahre (ohne Steigerung der Gaspreise)"
        ]
      }
    ]
  }
];

export default function RatgeberPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Ratgeber | Tipps zu Sanitär, Heizung & Badsanierung | München"
        description="Praktische Tipps und Ratgeber zu Wasserschaden, Badsanierung, Heizungswartung und Wärmepumpe. Expertenwissen vom Münchner Meisterbetrieb."
        canonical="https://aquapro24.de/ratgeber"
        keywords="Ratgeber Sanitär, Tipps Badsanierung, Heizung warten, Wärmepumpe Förderung, Wasserschaden was tun"
      />
      <Header />
      <main>
        <section className="relative py-16 lg:py-20 bg-gradient-to-br from-accent/10 via-background to-primary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <BookOpen className="w-3 h-3" />
                Ratgeber & Tipps
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Ratgeber - Expertenwissen für Ihr Zuhause
              </h1>
              <p className="text-lg text-muted-foreground mb-4">
                <strong>Praktische Tipps vom Meisterbetrieb.</strong> Hier teilen wir unser 
                Wissen aus über 35 Jahren Erfahrung in München.
              </p>
              <p className="text-muted-foreground">
                Von der Ersten Hilfe bei Wasserschäden bis zur Frage, ob sich eine Wärmepumpe 
                für Sie lohnt - hier finden Sie fundierte Antworten.
              </p>
            </div>
          </div>
        </section>

        <section className="py-10 lg:py-14">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              {guides.map((guide) => (
                <a 
                  key={guide.id} 
                  href={`#${guide.id}`}
                  className="block"
                >
                  <Card className="h-full hover-elevate cursor-pointer">
                    <CardContent className="p-6">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                        <guide.icon className="w-6 h-6 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-2">{guide.title}</h3>
                      <p className="text-sm text-muted-foreground">{guide.subtitle}</p>
                    </CardContent>
                  </Card>
                </a>
              ))}
            </div>
          </div>
        </section>

        {guides.map((guide, guideIndex) => (
          <section 
            key={guide.id} 
            id={guide.id} 
            className={`py-10 lg:py-14 ${guideIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-8 mb-8">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <guide.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-2xl md:text-3xl font-bold">{guide.title}</h2>
                      <p className="text-muted-foreground">{guide.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{guide.intro}</p>
                </div>
                <div className="hidden lg:block">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={guide.image} 
                      alt={guide.title}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-8">
                {guide.sections.map((section, sectionIndex) => (
                  <Card key={sectionIndex}>
                    <CardHeader className="pb-4">
                      <CardTitle className="flex items-center gap-2 text-lg">
                        <span className="w-6 h-6 rounded-full bg-primary text-primary-foreground text-sm flex items-center justify-center">
                          {sectionIndex + 1}
                        </span>
                        {section.title}
                      </CardTitle>
                    </CardHeader>
                    <CardContent>
                      <p className="text-muted-foreground mb-4">{section.content}</p>
                      <ul className="space-y-2">
                        {section.tips.map((tip, tipIndex) => (
                          <li key={tipIndex} className="flex items-start gap-2">
                            {tip.startsWith("NOTDIENST NÖTIG") || tip.startsWith("WICHTIG") ? (
                              <AlertTriangle className="w-4 h-4 text-destructive mt-0.5 flex-shrink-0" />
                            ) : tip.startsWith("IDEAL") || tip.startsWith("MÖGLICH") || tip.startsWith("TIPP") ? (
                              <Lightbulb className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            ) : tip.startsWith("KANN WARTEN") || tip.startsWith("PRÜFEN") ? (
                              <Clock className="w-4 h-4 text-secondary mt-0.5 flex-shrink-0" />
                            ) : tip.includes("€") ? (
                              <Euro className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                            ) : (
                              <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                            )}
                            <span className="text-sm">{tip}</span>
                          </li>
                        ))}
                      </ul>
                    </CardContent>
                  </Card>
                ))}
              </div>

              <div className="mt-8 p-6 bg-primary/5 border border-primary/20 rounded-lg">
                <div className="flex flex-col md:flex-row items-center justify-between gap-4">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Brauchen Sie Hilfe?</h3>
                      <p className="text-sm text-muted-foreground">Wir beraten Sie kostenlos und unverbindlich</p>
                    </div>
                  </div>
                  <Button asChild>
                    <a href="tel:+4989123456789">
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-10 lg:py-14 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Noch Fragen? Wir helfen gerne!
            </h2>
            <p className="text-secondary-foreground/80 mb-8 max-w-2xl mx-auto">
              Unser Team steht Ihnen für alle Fragen rund um Sanitär, Heizung und Haustechnik 
              zur Verfügung. Kostenlose Beratung - auch vor Ort.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="default" className="bg-primary hover:bg-primary/90" asChild>
                <a href="tel:+4989123456789">
                  <Phone className="w-5 h-5 mr-2" />
                  089 123 456 789
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-secondary-foreground/30 text-secondary-foreground hover:bg-secondary-foreground/10" asChild>
                <a href="/faq">
                  Zu den FAQ
                  <ArrowRight className="w-4 h-4 ml-2" />
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
