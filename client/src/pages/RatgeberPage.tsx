import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
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
  Wrench,
  Calendar,
  MessageSquare,
  MessageCircle,
  Star
} from "lucide-react";
import { Link } from "wouter";
import bathroomImage from "@assets/stock_images/modern_bathroom_reno_d985ed76.webp";
import heatingImage from "@assets/stock_images/heating_system_boile_6d071f6f.webp";
import heatPumpImage from "@assets/stock_images/heat_pump_installati_6831dd34.webp";
import plumberImage from "@assets/stock_images/professional_plumber_be6e9e4a.webp";
import { HeroPicture } from "@/components/ResponsiveHero";

const guides = [
  {
    id: "wasserschaden",
    icon: Droplets,
    title: "Wasserschaden - Was tun?",
    subtitle: "Erste Hilfe bei Rohrbruch und Wasserschäden",
    image: plumberImage,
    alt: "Wasserschaden München Erste Hilfe Rohrbruch - Klempner Notdienst 24h Soforthilfe Wasserschaden beheben",
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
    alt: "Badsanierung München planen Ratgeber - Komplettumbau Villeroy Boch Duravit Grohe Tipps Kosten",
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
    alt: "Heizungswartung München Ratgeber - Viessmann Vaillant Buderus Wartung Tipps Energiesparen",
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
    alt: "Wärmepumpe München Ratgeber BAFA Förderung 70% - Viessmann Vaillant Wolf Luft-Wasser Kosten Vergleich",
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
        title={seoMeta['/ratgeber'].title}
        description={seoMeta['/ratgeber'].description}
        canonical="https://aquapro24.de/ratgeber"
        keywords={seoMeta['/ratgeber'].keywords.join(', ')}
        ogImageAlt="Ratgeber Sanitär Heizung München Tipps Anleitungen Kosten - Experten Wissen Hausbesitzer"
      />
      <Header />
      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_ratgeber" alt="" />
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
                Ratgeber München – Expertentipps Sanitär & Heizung
              </h1>

              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserschaden was tun</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrbruch Erste Hilfe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung entlüften</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung planen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Antrag stellen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizkosten sparen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Energieausweis lesen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wartung Heizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Tipps</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Altbau Sanierung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Trinkwasser Hygiene</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss reinigen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Armatur pflegen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Bad modernisieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">barrierefreies Bad</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kalkflecken entfernen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung einstellen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Energieberater München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Expertentipps Haustechnik</span>
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Praktische Tipps vom Partnernetzwerk.</strong>
              </p>

              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                Von der Ersten Hilfe bei Wasserschäden bis zur Frage, ob sich eine Wärmepumpe 
                für Sie lohnt - hier finden Sie fundierte Antworten aus über 35 Jahren Erfahrung.
              </p>

              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Sie wissen genau, was zu tun ist – ob Wasserschaden, Heizungsproblem oder Badsanierung – dank Expertenwissen aus erster Hand.
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.847 Münchner Familien</strong> vertrauen unserem Expertenwissen – Beratung kostenlos | Festpreise garantiert
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-ratgeber">
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
                  data-testid="button-termin-ratgeber"
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
                  <span>Über 35 Jahre Erfahrung</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
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
                      <h3 className="text-base sm:text-lg font-semibold mb-2">{guide.title}</h3>
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
            className={`pt-8 pb-4 lg:pt-10 lg:pb-6 ${guideIndex % 2 === 1 ? 'bg-muted/30' : ''}`}
          >
            <div className="max-w-7xl mx-auto px-4 lg:px-8">
              <div className="grid lg:grid-cols-3 gap-6 mb-4">
                <div className="lg:col-span-2">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center">
                      <guide.icon className="w-5 h-5 text-primary" />
                    </div>
                    <div>
                      <h2 className="text-lg sm:text-xl lg:text-3xl font-bold">{guide.title}</h2>
                      <p className="text-muted-foreground">{guide.subtitle}</p>
                    </div>
                  </div>
                  <p className="text-lg text-muted-foreground mb-6">{guide.intro}</p>
                </div>
                <div className="hidden lg:block">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={guide.image} 
                      alt={guide.alt}
                      className="w-full h-48 object-cover"
                      loading="lazy"
                      decoding="async"
                      width="800"
                      height="192"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-4">
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
                    <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary/20 flex items-center justify-center">
                      <Wrench className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="text-base sm:text-lg font-semibold">AquaPro 24 Beratung München: Wir helfen Ihnen</h3>
                      <p className="text-sm text-muted-foreground">Wir beraten Sie kostenlos und unverbindlich</p>
                    </div>
                  </div>
                  <Button asChild>
                    <a href="tel:+4989444438872">
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          </section>
        ))}

        <section className="py-6 lg:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              AquaPro 24 Sanitär Beratung München: Kostenlose Expertenberatung anfordern
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Unser Team steht Ihnen für alle Fragen rund um Sanitär, Heizung und Haustechnik 
              zur Verfügung. Kostenlose Beratung - auch vor Ort.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Button size="lg" className="bg-white text-secondary border-white gap-2" asChild>
                <Link href="/termin">
                  <Calendar className="w-5 h-5" />
                  Beratungstermin buchen
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white gap-2" asChild>
                <a href="mailto:info@aquapro24.de?subject=Beratungsanfrage">
                  <MessageSquare className="w-5 h-5" />
                  Kostenlos beraten lassen
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4989444438872">
                  <Phone className="w-5 h-5 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" className="bg-white text-secondary border-white" asChild>
                <Link href="/termin">
                  <Clock className="w-5 h-5 mr-2" />
                  24h Terminbuchung
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
