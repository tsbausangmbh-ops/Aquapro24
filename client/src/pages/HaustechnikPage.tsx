import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { haustechnikStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Phone, 
  CheckCircle2, 
  Settings, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Home,
  Gauge
} from "lucide-react";
import smartHomeImage1 from "@assets/stock_images/smart_home_technolog_409ecefa.jpg";
import smartHomeImage2 from "@assets/stock_images/smart_home_technolog_6887dbb7.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    title: "Wasserinstallation",
    description: "Professionelle Installation von Wasserleitungen, Anschlüssen und Verteilersystemen.",
    features: ["Trinkwasser", "Abwasser", "Regenwasser", "Zirkulation"]
  },
  {
    title: "Gasinstallation",
    description: "Sichere Gasinstallationen und Gasleitungen durch zertifizierte Fachkräfte.",
    features: ["Gasleitungen", "Gasgeräte", "Sicherheitsprüfung", "Zertifiziert"]
  },
  {
    title: "Lüftungstechnik",
    description: "Kontrollierte Wohnraumlüftung für gesundes Raumklima und Energieeffizienz.",
    features: ["Wärmerückgewinnung", "Pollenfilter", "Feuchteregulierung", "Energiesparen"]
  },
  {
    title: "Smart Home",
    description: "Intelligente Steuerung Ihrer Haustechnik - Heizung, Lüftung und mehr per App.",
    features: ["Heizungssteuerung", "Fernzugriff", "Energiemonitoring", "Automation"]
  }
];

const benefits = [
  "Komplettservice Haustechnik",
  "Geprüfte Partnerbetriebe",
  "Modernste Technik",
  "Energieberatung inklusive",
  "Smart Home Integration",
  "Wartungsverträge"
];

const faqItems = [
  {
    question: "Was umfasst Haustechnik alles?",
    answer: "Haustechnik umfasst alle technischen Systeme in Ihrem Gebäude: Wasserinstallation, Gasanlagen, Heizung, Lüftung, und zunehmend auch Smart-Home-Systeme. Als Komplettanbieter decken wir alle Bereiche ab."
  },
  {
    question: "Bieten Sie auch Komplettlösungen für Neubauten an?",
    answer: "Ja, wir planen und realisieren die komplette Haustechnik für Neubauten - von den ersten Entwürfen bis zur Abnahme. Ein Ansprechpartner für alles spart Zeit, Geld und Nerven."
  },
  {
    question: "Wie funktioniert eine kontrollierte Wohnraumlüftung?",
    answer: "Eine KWL tauscht verbrauchte Luft automatisch gegen frische Außenluft aus. Die Wärmerückgewinnung nutzt die Wärme der Abluft, um die Frischluft zu erwärmen. So sparen Sie Heizkosten und haben immer frische Luft."
  },
  {
    question: "Was kostet eine Smart-Home-Nachrüstung?",
    answer: "Eine Basis-Ausstattung mit intelligenter Heizungssteuerung beginnt ab ca. 500€. Komplette Systeme mit Licht, Beschattung und Sicherheit liegen je nach Umfang bei 2.000-10.000€. Wir beraten Sie zu sinnvollen Einstiegsmöglichkeiten."
  },
  {
    question: "Arbeiten Sie auch an Gasinstallationen?",
    answer: "Ja, wir sind zertifiziert für alle Gasarbeiten. Von der Gasleitung über Gasgeräte bis zur vorgeschriebenen Sicherheitsprüfung - alles aus einer Hand und nach aktuellen Sicherheitsstandards."
  },
  {
    question: "Wie lange dauert die Planung und Umsetzung?",
    answer: "Je nach Projektumfang planen wir 2-4 Wochen für die Konzeption. Die Umsetzung dauert bei einer Sanierung 1-3 Wochen, bei Neubauten arbeiten wir nach Ihrem Bauzeitenplan. Wir halten vereinbarte Termine ein."
  },
  {
    question: "Was ist die Voraussetzung für eine Lüftungsanlage?",
    answer: "Moderne dezentrale Lüftungen lassen sich in fast jedem Gebäude nachrüsten - mit zwei kleinen Kernbohrungen (16cm) pro Raum. Zentrale Anlagen benötigen Platz für das Lüftungsgerät und Kanäle, ideal bei Sanierung oder Neubau. Wir beraten, welches System für Ihr Gebäude geeignet ist."
  },
  {
    question: "Welche Smart-Home-Systeme empfehlen Sie?",
    answer: "Für die Heizungssteuerung bewähren sich tado°, Netatmo oder Homematic IP - alle lassen sich gut nachrüsten. Für umfassendere Automation setzen wir oft auf KNX (kabelgebunden, sehr zuverlässig) oder Homey/HomeAssistant (flexibel, viele Geräte). Wichtig: Das System sollte zu Ihren Anforderungen passen, nicht umgekehrt."
  },
  {
    question: "Muss ich bei einem Gasanschluss etwas beachten?",
    answer: "In München ist Stadtwerke München der Gasversorger. Für einen neuen Hausanschluss melden wir die Arbeiten dort an. Alle Gasarbeiten müssen von zertifizierten Betrieben durchgeführt werden (wir sind zugelassen). Nach Abschluss erfolgt eine Abnahme durch einen Sachkundigen. Wir kümmern uns um alle Formalitäten."
  },
  {
    question: "Wie viel Energie spart eine Lüftung mit Wärmerückgewinnung?",
    answer: "Moderne KWL-Anlagen gewinnen bis zu 90% der Wärme aus der Abluft zurück. Bei einem typischen Einfamilienhaus können Sie so 500-1.000€ Heizkosten pro Jahr sparen. Gleichzeitig verbessert sich die Luftqualität erheblich - wichtig für Allergiker und in stark gedämmten Häusern."
  },
  {
    question: "Können Sie auch bestehende Haustechnik modernisieren?",
    answer: "Ja, Modernisierung ist unser Schwerpunkt! Wir optimieren alte Heizungsanlagen, rüsten Lüftungen nach und integrieren Smart-Home-Steuerungen in bestehende Systeme. Oft lässt sich mit überschaubarem Aufwand viel Energie sparen. Wir analysieren Ihre Anlage und zeigen Potenziale auf."
  },
  {
    question: "Was kostet ein hydraulischer Abgleich der Heizung?",
    answer: "Ein hydraulischer Abgleich für ein Einfamilienhaus kostet zwischen 400€ und 900€ je nach Anzahl der Heizkörper. Er sorgt dafür, dass alle Räume gleichmäßig warm werden und spart bis zu 15% Energie. Für viele Förderprogramme ist der Abgleich Voraussetzung. Wir führen ihn als Teil der Heizungsoptimierung durch."
  }
];

export default function HaustechnikPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Haustechnik München | Wasser, Gas, Lüftung, Smart Home | AquaPro24"
        description="Haustechnik München: Wasserinstallation, Gasanlagen, Lüftung, Smart Home - alles aus einer Hand. 500+ Projekte, zertifizierte Fachbetriebe. Kostenlose Beratung: 0173 5994699"
        canonical="https://aquapro24.de/haustechnik"
        aiSummary="AquaPro24 Haustechnik München: Wasserinstallation, Gasanlagen, Lüftung, Smart Home - alles aus einer Hand. 500+ Projekte, zertifizierte Fachbetriebe. Alle Münchner Stadtteile. Kostenlose Beratung: 0173 5994699"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Haustechnik", url: "https://aquapro24.de/haustechnik" }
        ]}
        serviceSchema={{
          name: "AquaPro24 Haustechnik München",
          description: "Komplette Haustechnik München: Wasser, Gas, Lüftung, Smart Home aus einer Hand. 500+ Projekte seit 2005, zertifizierte Fachbetriebe.",
          serviceType: "Building Services Engineering",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Maxvorstadt", "Haidhausen", "Neuhausen", "Trudering", "Laim", "Giesing", "Moosach", "Milbertshofen"],
          offers: [
            { name: "Kontrollierte Wohnraumlüftung", description: "KWL mit Wärmerückgewinnung", priceRange: "ab 3.500€" },
            { name: "Smart Home Heizungssteuerung", description: "Intelligente Steuerung per App", priceRange: "ab 500€" },
            { name: "Gasinstallation", description: "Zertifizierte Gasarbeiten", priceRange: "ab 250€" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 43
          },
          reviews: [
            { author: "Architekturbüro Meier", rating: 5, reviewBody: "Wir arbeiten öfter mit denen zusammen für unsere Projekte. Bei der Villa in Bogenhausen war alles dabei: Fußbodenheizung, Lüftung mit Wärmerückgewinnung, Smart Home. Die Koordination mit Elektrikern und Trockenbauleuten hat super geklappt. Termine wurden eingehalten, was in der Branche nicht selbstverständlich ist. Können wir als Architekturbüro empfehlen.", datePublished: "2024-09-28", location: "München-Bogenhausen" },
            { author: "Stefan R.", rating: 5, reviewBody: "Hab mir Smart Home nachrüsten lassen - Heizung, Jalousien und Licht. Muss sagen, war erst skeptisch ob das im Altbau geht ohne alles aufzureißen. Ging aber mit Funk-Lösungen. Jetzt kann ich von unterwegs die Heizung regeln. Der Techniker hat sich auch Zeit genommen, mir die App zu erklären. Bin begeistert!", datePublished: "2024-11-08", location: "München-Maxvorstadt" },
            { author: "Hausverw. Berger", rating: 4, reviewBody: "Lüftungsanlage für Mehrfamilienhaus. Technisch einwandfrei, die Mieter sind zufrieden. Ein paar Abstimmungstermine hätten besser kommuniziert werden können, aber das Ergebnis stimmt. Arbeiten wieder mit denen.", datePublished: "2024-07-15", location: "München-Giesing" }
          ]
        }}
      />
      <Header />
      <main id="main-content">
        <section className="relative py-12 lg:pt-8 pb-4 bg-gradient-to-br from-emerald-500/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <Badge className="gap-1 bg-emerald-600 text-white">
                  <Settings className="w-3 h-3" />
                  Haustechnik München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Haustechnik - Alles aus einer Hand
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Mehrere Handwerker koordinieren? Unterschiedliche Ansprechpartner?</strong> Das 
                  kostet Zeit, Nerven und oft auch mehr Geld als nötig.
                </p>
                <p className="text-muted-foreground">
                  Von der Wasserinstallation über Gastechnik bis zur intelligenten Haussteuerung - wir 
                  sind Ihr Komplettanbieter für moderne Haustechnik in München. Ein Anruf, ein Partner, alles erledigt.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4917359994699" data-testid="button-call-haustechnik">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anfragen
                    </a>
                  </Button>
                  <ServiceBooking 
                    serviceType="haustechnik" 
                    buttonText="24h Buchungstermin"
                    buttonSize="lg"
                  />
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Geprüfte Partner", "Festpreis", "Komplettservice"].map((item) => (
                    <div key={item} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="relative space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={smartHomeImage1} 
                    alt="Smart Home Haustechnik Steuerung" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Komplettanbieter
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-emerald-600 to-emerald-700 rounded-2xl p-6 text-white">
                  <h3 className="text-lg font-bold mb-3">Unsere Stärken</h3>
                  <ul className="space-y-2">
                    {benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 text-accent flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <NLPSection
          problemTitle="Typische Haustechnik-Herausforderungen"
          problems={[
            "Verschiedene Handwerker für verschiedene Gewerke koordinieren",
            "Keiner fühlt sich für Schnittstellenprobleme verantwortlich",
            "Unklare Zuständigkeiten bei Problemen",
            "Unterschiedliche Termine und Wartezeiten",
            "Keine ganzheitliche Beratung zur Energieeffizienz"
          ]}
          solutionTitle="Der KSHW München Komplettservice"
          solutions={[
            "Ein Ansprechpartner für alle Haustechnik-Gewerke",
            "Koordinierte Planung und Ausführung aus einer Hand",
            "Garantierte Schnittstellenverantwortung",
            "Ganzheitliche Energieberatung inklusive",
            "Smart-Home-Integration für maximalen Komfort"
          ]}
          futureState="...Ihre gesamte Haustechnik funktioniert perfekt zusammen, Sie haben einen Ansprechpartner für alles und Ihr Zuhause arbeitet intelligent für Sie. Wasserversorgung, Heizung und Lüftung spielen optimal zusammen - und Sie genießen einfach den Komfort."
          authorityText="Über 1.500 Haustechnik-Projekte in München realisiert"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Bedarfsanalyse: Wir erfassen alle Ihre Haustechnik-Anforderungen in einem Termin.",
            "Ganzheitliche Planung: Ein Konzept für Wasser, Gas, Lüftung und Smart Home - alles abgestimmt.",
            "Koordinierte Umsetzung: Wir führen alle Arbeiten durch - Sie haben nur einen Ansprechpartner."
          ]}
        />

        <CustomerStories 
          stories={haustechnikStories}
          title="Haustechnik aus einer Hand: Erfolgsgeschichten"
          subtitle="So haben wir komplexe Projekte für Münchner Kunden gelöst"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Haustechnik-Leistungen in München</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Moderne Haustechnik für Komfort, Sicherheit und Energieeffizienz in Ihrem Zuhause.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Gauge className="w-6 h-6 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="pt-8 pb-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-6 text-center">
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Home className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">1.500+</h3>
                <p className="text-muted-foreground">Projekte realisiert</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Star className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">4.9/5</h3>
                <p className="text-muted-foreground">Kundenbewertung</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                  <Clock className="w-8 h-8 text-secondary" />
                </div>
                <h3 className="text-2xl font-bold">25+</h3>
                <p className="text-muted-foreground">Jahre Erfahrung</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Haustechnik in München - Alles aus einer Hand für Ihr Zuhause
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Moderne Haustechnik umfasst weit mehr als nur Heizung und Sanitär. Von der Wasserinstallation über die 
                Gastechnik bis zur intelligenten Haussteuerung - die technischen Systeme in Ihrem Zuhause werden immer 
                komplexer und vernetzter. Als Komplettanbieter für Haustechnik in München bieten wir Ihnen alle Leistungen 
                aus einer Hand.
              </p>
              <p>
                Der Vorteil für Sie: Ein einziger Ansprechpartner, der Ihr Projekt von Anfang bis Ende koordiniert. Keine 
                Terminabstimmung zwischen verschiedenen Gewerken, keine Schuldzuweisungen wenn etwas nicht passt, keine 
                doppelten Anfahrten. Das spart Zeit, Nerven und häufig auch Geld.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Wasserinstallation nach neuesten Standards</h3>
              <p>
                Sauberes Trinkwasser und zuverlässige Abwasserentsorgung sind die Grundlage jedes Haushalts. Wir planen und 
                installieren Wasserleitungen nach den neuesten hygienischen Standards, vom Hausanschluss bis zur letzten 
                Armatur. Auch Regenwassernutzung und Zirkulationssysteme für Warmwasser gehören zu unserem Leistungsspektrum.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Gasinstallation mit Sicherheit</h3>
              <p>
                Gasinstallationen erfordern höchste Sorgfalt und Fachkenntnis. Unsere zertifizierten Gasinstallateure planen 
                und realisieren Gasleitungen, installieren Gasgeräte und führen die vorgeschriebenen Sicherheitsprüfungen durch. 
                Ihre Sicherheit steht bei uns an erster Stelle.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Kontrollierte Wohnraumlüftung</h3>
              <p>
                Eine kontrollierte Wohnraumlüftung (KWL) sorgt für frische Luft bei geschlossenen Fenstern - ideal für 
                Allergiker und lärmbelastete Standorte. Die integrierte Wärmerückgewinnung nutzt die Wärme der Abluft und 
                spart so Heizkosten. Pollenfilter halten Allergene draußen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Smart Home Integration</h3>
              <p>
                Steuern Sie Heizung, Lüftung und Warmwasser intelligent per App - von überall. Unsere Smart-Home-Lösungen 
                passen sich Ihrem Alltag an und sparen automatisch Energie. Ob Einzelgeräte oder komplette Vernetzung: 
                Wir beraten Sie zu sinnvollen Einstiegsmöglichkeiten.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Haustechnik-Service" 
          highlightAreas={["Maxvorstadt", "Schwabing", "Neuhausen"]}
        />

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zur Haustechnik"
        />

        <section className="pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
              <h2 className="text-3xl font-bold">Ihr Projekt - unsere Expertise</h2>
              <p className="text-muted-foreground">
                Ob Neubau, Sanierung oder Modernisierung - wir planen und realisieren Ihre 
                Haustechnik professionell und termingerecht. Über 1.500 Projekte in München erfolgreich umgesetzt.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4917359994699" data-testid="button-call-haustechnik-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    0173 5994699
                  </a>
                </Button>
                <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
                  <Link href="/termin">
                    <Phone className="w-4 h-4 mr-2" />
                    Rückruf anfordern
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentService="haustechnik" />
      </main>
      <Footer />
      <AIChatWidget serviceCategory="haustechnik" />
    </div>
  );
}
