import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import BackButton from "@/components/BackButton";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { haustechnikStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Settings, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Home,
  Gauge,
  MessageCircle,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
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
    question: "Was kostet Haustechnik in München?",
    answer: "Haustechnik München Kosten: Wasserinstallation ab 92€/Std., Gasinstallation ab 108€/Std., Lüftungsanlage (KWL) ab 4.500€, Smart-Home-Basis ab 500€. Bei Komplett-Projekten erstellen wir ein individuelles Festpreisangebot nach kostenloser Vor-Ort-Beratung."
  },
  {
    question: "Was umfasst Haustechnik alles?",
    answer: "Haustechnik München umfasst: Wasserinstallation (Trink- und Abwasser), Gasinstallation (Leitungen, Geräte, Sicherheitsprüfung), Lüftungsanlagen (KWL mit Wärmerückgewinnung), Smart-Home-Systeme (Heizungssteuerung, Automatisierung). AquaPro24 bietet alles aus einer Hand."
  },
  {
    question: "Bieten Sie Haustechnik-Komplettlösungen für Neubauten in München an?",
    answer: "Ja, wir planen und realisieren die komplette Haustechnik für Neubauten in München: Wasserinstallation, Heizung, Lüftung, Gas, Smart Home. Ein Ansprechpartner koordiniert alle Gewerke - das spart Zeit, Geld und vermeidet Koordinationsprobleme zwischen verschiedenen Handwerkern."
  },
  {
    question: "Was kostet eine Lüftungsanlage (KWL) in München?",
    answer: "Kontrollierte Wohnraumlüftung München: Zentrale KWL ab 4.500€, dezentrale Lüftung ab 1.500€ pro Raum. Vorteile: Frische Luft ohne offene Fenster, Wärmerückgewinnung spart bis 30% Heizkosten, Pollenfilter für Allergiker. Förderung durch KfW möglich."
  },
  {
    question: "Sind Sie für Gasinstallationen in München zertifiziert?",
    answer: "Ja, AquaPro24 ist zertifizierter Gasinstallateur in München. Leistungen: Gasleitungen verlegen, Gasgeräte anschließen, vorgeschriebene Sicherheitsprüfungen durchführen, Gasherde und Gasöfen installieren. Alle Arbeiten nach aktuellen DVGW-Sicherheitsstandards."
  },
  {
    question: "Wie läuft ein Haustechnik-Projekt bei AquaPro24 ab?",
    answer: "1. Kostenlose Beratung vor Ort in München. 2. Detaillierte Planung und Festpreisangebot. 3. Koordination aller Gewerke aus einer Hand. 4. Termingerechte Umsetzung. 5. Abnahme und Einweisung. 6. 2-5 Jahre Gewährleistung je nach Leistung."
  },
  {
    question: "Warum AquaPro24 für Haustechnik wählen?",
    answer: "AquaPro24 bietet: Alles aus einer Hand (kein Handwerker-Stress), ein Ansprechpartner für alle Gewerke, Festpreisgarantie, 1.500+ Projekte in München, zertifizierte Fachbetriebe, 25+ Jahre Erfahrung. Alle Münchner Stadtteile: Schwabing, Bogenhausen, Sendling, Pasing."
  },
  {
    question: "In welchen Münchner Stadtteilen bieten Sie Haustechnik an?",
    answer: "Wir arbeiten in ganz München: Schwabing, Bogenhausen, Sendling, Neuhausen, Giesing, Pasing, Laim, Trudering, Maxvorstadt, Haidhausen, Moosach, Milbertshofen, Nymphenburg und alle weiteren Stadtteile. Kostenlose Beratung: 0152 12274043."
  }
];

export default function HaustechnikPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Wasserinstallation München | Gasanschluss | Lüftungsanlage"
        description="Wasserinstallation, Gasanschluss und Lüftungsanlage München: Haustechnik komplett aus einer Hand. Ein Ansprechpartner für alle Gewerke."
        canonical="https://aquapro24.de/haustechnik"
        keywords="Haustechnik München, Gasinstallation München, Lüftungstechnik München, Smart Home München, Gebäudetechnik München, Wasserinstallation München, Haustechnik Schwabing, Haustechnik Bogenhausen, Haustechnik Sendling, Haustechnik Pasing, Haustechnik Maxvorstadt, Haustechnik Haidhausen, Haustechnik Neuhausen, Haustechnik Trudering, Haustechnik Laim, Haustechnik Giesing, Haustechnik Moosach, Haustechnik Milbertshofen, Haustechnik Nymphenburg, Haustechnik Perlach, Haustechnik Solln, Haustechnik Hadern, Haustechnik Allach, Haustechnik Aubing, Haustechnik Feldmoching, Haustechnik Isarvorstadt, Haustechnik Lehel, Gasinstallateur München, KWL München, kontrollierte Wohnraumlüftung München, Smart Home Heizung München, Lüftungsanlage München"
        aiSummary="AquaPro24 Haustechnik München: Wasserinstallation, Gasanlagen, Lüftung, Smart Home - alles aus einer Hand. 500+ Projekte, zertifizierte Fachbetriebe. Alle Münchner Stadtteile. Kostenlose Beratung: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Haustechnik", url: "https://aquapro24.de/haustechnik" }
        ]}
        serviceSchema={{
          name: "Haustechnik München Komplettservice",
          description: "Komplette Haustechnik München: Wasser, Gas, Lüftung, Smart Home aus einer Hand. 500+ Projekte seit 2005, zertifizierte Fachbetriebe.",
          serviceType: "Haustechnik/Gebäudetechnik",
          urlSlug: "haustechnik",
          catalogName: "Haustechnik-Leistungen",
          serviceOffers: [
            { name: "Gasinstallation zertifiziert" },
            { name: "Kontrollierte Wohnraumlüftung (KWL)" },
            { name: "Smart Home Heizungssteuerung" },
            { name: "Komplettplanung Neubau/Sanierung" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 43
          }
        }}
      />
      <Header />
      <BackButton />
      <main id="main-content">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${smartHomeImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="gap-1 bg-emerald-600 text-white mb-4">
                <Settings className="w-3 h-3" />
                Haustechnik München
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Haustechnik München – Gas, Wasser, Lüftung komplett
              </h1>
              <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/70">
                <span>Gasleitung verlegen</span><span>·</span>
                <span>Gasanschluss installieren</span><span>·</span>
                <span>Gasherd anschließen</span><span>·</span>
                <span>Gasgerät montieren</span><span>·</span>
                <span>Gasinstallation prüfen</span><span>·</span>
                <span>Lüftungsanlage einbauen</span><span>·</span>
                <span>KWL installieren</span><span>·</span>
                <span>Wohnraumlüftung montieren</span><span>·</span>
                <span>Abluftanlage installieren</span><span>·</span>
                <span>Dunstabzug anschließen</span><span>·</span>
                <span>Smart Home Heizung</span><span>·</span>
                <span>Thermostat programmieren</span><span>·</span>
                <span>Wasserleitung verlegen</span><span>·</span>
                <span>Wasserzähler einbauen</span><span>·</span>
                <span>Druckminderer installieren</span><span>·</span>
                <span>Enthärtungsanlage einbauen</span><span>·</span>
                <span>Haustechnik Schwabing</span><span>·</span>
                <span>Haustechnik Bogenhausen</span><span>·</span>
                <span>Haustechnik Sendling</span><span>·</span>
                <span>Haustechnik Pasing</span><span>·</span>
                <span>Haustechnik Maxvorstadt</span><span>·</span>
                <span>Haustechnik Haidhausen</span><span>·</span>
                <span>Haustechnik Neuhausen</span><span>·</span>
                <span>Haustechnik Trudering</span><span>·</span>
                <span>Gebäudetechnik München</span><span>·</span>
                <span>TGA Planung</span><span>·</span>
                <span>Haustechnik Neubau</span><span>·</span>
                <span>Haustechnik Sanierung</span><span>·</span>
                <span>zertifizierter Gasinstallateur</span><span>·</span>
                <span>Festpreis Haustechnik</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                <strong>Mehrere Handwerker koordinieren? Unterschiedliche Ansprechpartner?</strong> Das 
                kostet Zeit, Nerven und oft auch mehr Geld als nötig.
              </p>
              <p className="text-white/80 mb-6">
                Von der Wasserinstallation über Gastechnik bis zur intelligenten Haussteuerung - wir 
                sind Ihr Komplettanbieter für moderne Haustechnik in München.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-haustechnik">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anfragen
                  </a>
                </Button>
                <ServiceBooking 
                  serviceType="haustechnik"
                  buttonText="24h Buchungstermin"
                  buttonSize="lg"
                  buttonVariant="outline"
                  buttonClassName="backdrop-blur-sm bg-white/10 border-white/30 text-white"
                />
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

        <ServiceAdvisor serviceType="haustechnik" />

        <CustomerStories 
          stories={haustechnikStories}
          title="Haustechnik aus einer Hand: Erfolgsgeschichten"
          subtitle="So haben wir komplexe Projekte für Münchner Kunden gelöst"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Haustechnik München: Leistungen & Preise</h2>
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
              Haustechnik München: Kosten, Smart Home & Gasinstallation
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Wasserleitung verlegen München: Neueste Standards</h3>
              <p>
                Sauberes Trinkwasser und zuverlässige Abwasserentsorgung sind die Grundlage jedes Haushalts. Wir planen und 
                installieren Wasserleitungen nach den neuesten hygienischen Standards, vom Hausanschluss bis zur letzten 
                Armatur. Auch Regenwassernutzung und Zirkulationssysteme für Warmwasser gehören zu unserem Leistungsspektrum.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Gasleitung installieren München: Sicherheit zuerst</h3>
              <p>
                Gasinstallationen erfordern höchste Sorgfalt und Fachkenntnis. Unsere zertifizierten Gasinstallateure planen 
                und realisieren Gasleitungen, installieren Gasgeräte und führen die vorgeschriebenen Sicherheitsprüfungen durch. 
                Ihre Sicherheit steht bei uns an erster Stelle.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Lüftungsanlage einbauen München: Kontrollierte Wohnraumlüftung</h3>
              <p>
                Eine kontrollierte Wohnraumlüftung (KWL) sorgt für frische Luft bei geschlossenen Fenstern - ideal für 
                Allergiker und lärmbelastete Standorte. Die integrierte Wärmerückgewinnung nutzt die Wärme der Abluft und 
                spart so Heizkosten. Pollenfilter halten Allergene draußen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Smart Home installieren München: Intelligente Haussteuerung</h3>
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

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Haustechnik München anfragen – Kostenlose Beratung
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Ob Neubau, Sanierung oder Modernisierung - wir planen und realisieren Ihre 
              Haustechnik professionell und termingerecht.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-haustechnik-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
                </a>
              </Button>
              <Button size="lg" className="bg-white text-secondary border-white" asChild>
                <Link href="/termin">
                  <Clock className="w-4 h-4 mr-2" />
                  24h Terminbuchung
                </Link>
              </Button>
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
