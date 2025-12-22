import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import SimpleFAQ from "@/components/SimpleFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { waermepumpeStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Leaf, 
  Clock,
  ShieldCheck,
  ArrowRight,
  Zap,
  TrendingDown,
  Star,
  FileText,
  MessageCircle,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import heatPumpImage1 from "@assets/stock_images/vaillant_arotherm_he_85021ffa.jpg";
import heatPumpImage2 from "@assets/stock_images/heat_pump_installati_c7c6b6db.jpg";
import heatPumpImage3 from "@assets/stock_images/modern_white_heat_pu_786e8fed.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    title: "Luft-Wasser-Wärmepumpe ab 12.000€",
    description: "Viessmann Vitocal, Vaillant aroTHERM, Buderus Logatherm, Wolf CHA. Installation in 2-3 Tagen, bis 70% BAFA-Förderung. Ideal für Münchner Altbauten.",
    features: ["2-3 Tage Montage", "Bis 70% Förderung", "COP bis 4.5", "Förderantrag gratis"]
  },
  {
    title: "Erdwärmepumpe München ab 18.000€",
    description: "Sole-Wasser mit Tiefenbohrung oder Flächenkollektor. COP bis 5.0, passive Kühlung im Sommer. Viessmann Vitocal 300-G, Vaillant geoTHERM.",
    features: ["COP bis 5.0", "30+ Jahre", "Passive Kühlung", "Wartungsarm"]
  },
  {
    title: "Wärmepumpe Wartung ab 249€",
    description: "Jahreswartung komplett: Kältemittel prüfen, Filter reinigen, Verdampfer kontrollieren, Protokoll. Erhält 5 Jahre Herstellergarantie.",
    features: ["Inkl. Protokoll", "Garantieerhalt", "15% Effizienz", "Störungsfrei"]
  },
  {
    title: "BAFA/KfW Förderung bis 70%",
    description: "30% Grundförderung + 30% Einkommensbonus + 20% Geschwindigkeitsbonus + 5% Effizienzbonus. Komplette Antragstellung übernommen.",
    features: ["Kostenlos", "Bis 70% Zuschuss", "BAFA + KfW", "4-6 Wochen Bearbeitung"]
  }
];

const benefits = [
  "Wärmepumpe München ab 12.000€ – bis 70% BAFA-Förderung 2025",
  "Viessmann, Vaillant, Buderus, Wolf – alle Marken installiert",
  "Bis 50% Heizkosten sparen gegenüber Gas/Öl dauerhaft",
  "CO2-neutral heizen, keine CO2-Steuer, unabhängig von Gaspreisen",
  "320+ Wärmepumpen in München installiert seit 2005",
  "5 Jahre Garantie, kompletter Förderantrag kostenlos"
];

const faqItems = [
  {
    question: "Was kostet eine Wärmepumpe in München?",
    answer: "Wärmepumpe München Kosten: Luft-Wasser ab 12.000€, Erdwärme ab 18.000€ (vor Förderung). Mit BAFA/KfW-Förderung bis 70% zahlen Sie effektiv nur 30-50% der Kosten. Beispiel: 15.000€ Wärmepumpe mit 70% Förderung = nur 4.500€ Eigenanteil."
  },
  {
    question: "Wie hoch ist die Wärmepumpen-Förderung 2025 in München?",
    answer: "Wärmepumpe Förderung 2025: Bis zu 70% durch BAFA und KfW. Zusammensetzung: 30% Grundförderung + 30% Einkommensbonus + 20% Geschwindigkeitsbonus + 5% Effizienzbonus. AquaPro24 übernimmt die komplette Antragstellung bei BAFA und KfW - kostenlos."
  },
  {
    question: "Ist mein Altbau in München für eine Wärmepumpe geeignet?",
    answer: "Die meisten Münchner Altbauten sind für Wärmepumpen geeignet. Ideal: gute Dämmung und Fußbodenheizung. Aber auch mit normalen Heizkörpern funktioniert es oft. Wir prüfen Ihr Gebäude kostenlos und ehrlich - wenn es nicht sinnvoll ist, sagen wir Ihnen das direkt."
  },
  {
    question: "Wie lange dauert die Wärmepumpen-Installation?",
    answer: "Luft-Wasser-Wärmepumpe: 2-3 Tage Installation. Erdwärmepumpe: 1-2 Wochen (inkl. Bohrung). Wir planen den Heizungsumstieg so, dass Sie nur minimal ohne Heizung sind - meist an einem Tag. Termingerechte Fertigstellung garantiert."
  },
  {
    question: "Wie viel spart man mit einer Wärmepumpe in München?",
    answer: "Mit einer Wärmepumpe sparen Sie durchschnittlich 50% Heizkosten. Beispiel: Gasrechnung 2.400€/Jahr → Stromkosten Wärmepumpe ca. 1.200€/Jahr. Zusätzlich: keine CO2-Steuer, kein Gasanschluss mehr nötig, unabhängig von Gaspreisschwankungen."
  },
  {
    question: "Wie läuft die Wärmepumpen-Installation bei AquaPro24 ab?",
    answer: "1. Kostenloser Eignungscheck vor Ort. 2. Förderantrag bei BAFA/KfW (übernehmen wir). 3. Detaillierte Planung und Festpreisangebot. 4. Termingerechte Installation in 2-3 Tagen. 5. Einweisung und 5 Jahre Garantie. 6. Optional: Wartungsvertrag."
  },
  {
    question: "Warum AquaPro24 für die Wärmepumpe wählen?",
    answer: "AquaPro24 bietet: Kostenloser Eignungscheck, komplette Förderantragstellung, Festpreisgarantie, 320+ installierte Wärmepumpen in München, 5 Jahre Gewährleistung, alle Marken (Vaillant, Viessmann, Bosch). Zertifizierter Fachbetrieb seit 2005."
  },
  {
    question: "Funktioniert eine Wärmepumpe auch bei Minusgraden?",
    answer: "Ja, moderne Luft-Wasser-Wärmepumpen arbeiten effizient bis -20°C. Das milde Münchner Klima ist optimal für Wärmepumpen. Bei extremen Kältephasen empfehlen wir Hybrid-Systeme mit elektrischer Unterstützung. Erdwärmepumpen funktionieren unabhängig von der Außentemperatur."
  }
];

export default function WaermepumpePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Wärmepumpe München | Einbau, Förderung & Beratung"
        description="Wärmepumpe in München: Beratung, Planung, Einbau & Förderung. Senken Sie Heizkosten mit moderner Technik. Jetzt informieren!"
        canonical="https://aquapro24.de/waermepumpe"
        keywords="Wärmepumpe München, Wärmepumpe Förderung 2025, BAFA Förderung Wärmepumpe München, Luft-Wasser-Wärmepumpe München, Erdwärmepumpe München, Wärmepumpe Schwabing, Wärmepumpe Bogenhausen, Wärmepumpe Sendling, Wärmepumpe Pasing, Wärmepumpe Maxvorstadt, Wärmepumpe Haidhausen, Wärmepumpe Neuhausen, Wärmepumpe Trudering, Wärmepumpe Laim, Wärmepumpe Giesing, Wärmepumpe Moosach, Wärmepumpe Milbertshofen, Wärmepumpe Nymphenburg, Wärmepumpe Perlach, Wärmepumpe Solln, Wärmepumpe Hadern, Wärmepumpe Allach, Wärmepumpe Aubing, Wärmepumpe Feldmoching, Wärmepumpe Isarvorstadt, Wärmepumpe Lehel, Wärmepumpe Altbau München, Heizungstausch Förderung München, klimaneutral heizen München, Vaillant Wärmepumpe München, Viessmann Wärmepumpe München, KfW Förderung Wärmepumpe München"
        aiSummary="AquaPro24 Wärmepumpe München: Bis 70% BAFA/KfW-Förderung 2025, Luft-Wasser ab 12.000€, Montage in 2-3 Tagen. Komplette Förderantragstellung inklusive. 320+ Installationen. Alle Münchner Stadtteile. Kostenlose Beratung: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Wärmepumpe", url: "https://aquapro24.de/waermepumpe" }
        ]}
        serviceSchema={{
          name: "Wärmepumpe München mit Förderung",
          description: "Wärmepumpen-Installation München: Bis 70% BAFA/KfW-Förderung, Luft-Wasser & Erdwärme, komplette Antragstellung. 320+ erfolgreiche Installationen seit 2005.",
          serviceType: "Wärmepumpe/Heizung",
          urlSlug: "waermepumpe",
          catalogName: "Wärmepumpen-Leistungen",
          serviceOffers: [
            { name: "Luft-Wasser-Wärmepumpe Installation" },
            { name: "Erdwärmepumpe mit Tiefenbohrung" },
            { name: "BAFA/KfW Förderantragstellung" },
            { name: "Hybrid-System (Wärmepumpe + Gas)" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 67
          }
        }}
      />
      <Header />
      <main id="main-content">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heatPumpImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="gap-1 bg-orange-500 text-white mb-4">
                <Leaf className="w-3 h-3" />
                Wärmepumpe München
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Wärmepumpe München – bis 70% BAFA Förderung 2025
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe nachrüsten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Luft-Wasser-Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Erdwärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Altbau</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">klimaneutral heizen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizkosten sparen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vaillant Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Viessmann Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Bosch Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Beratung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Wärmepumpe</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                <strong>Schluss mit steigenden Gaspreisen.</strong> Heizen Sie unabhängig, 
                klimaneutral und sparen Sie dabei bis zu 50% Ihrer Heizkosten.
              </p>
              <p className="text-white/80 mb-6">
                Jetzt ist der beste Zeitpunkt: Bis zu 70% staatliche Förderung, fachgerechte 
                Installation durch unser Partnernetzwerk und ein verbindlicher Festpreis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" className="bg-green-600/90 border-green-700/50 hover:bg-green-600" asChild>
                  <Link href="/foerderung" data-testid="button-foerderung-waermepumpe">
                    Förderung Info
                  </Link>
                </Button>
                <ServiceBooking 
                  serviceType="waermepumpe"
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
          problemTitle="Diese Bedenken hören wir oft"
          problems={[
            "Die Gaspreise steigen und steigen - wo soll das enden?",
            "Die CO2-Steuer macht Heizen immer teurer",
            "Unsicherheit über die richtige Heizungstechnik für die Zukunft",
            "Angst vor hohen Investitionskosten",
            "Zweifel, ob das eigene Haus überhaupt geeignet ist"
          ]}
          solutionTitle="So machen wir Ihnen den Umstieg leicht"
          solutions={[
            "Kostenlose Vor-Ort-Analyse: Ist Ihr Haus geeignet?",
            "Förderberatung: Wir holen bis zu 70% der Kosten zurück",
            "Festpreisangebot ohne versteckte Kosten",
            "Komplette Abwicklung von Planung bis Inbetriebnahme",
            "5 Jahre Gewährleistung und optionale Wartungsverträge"
          ]}
          futureState="...Ihre neue Wärmepumpe läuft leise im Garten, Sie heizen klimaneutral und Ihre Heizkosten sind um die Hälfte gesunken. Jeden Monat sparen Sie Geld und tun etwas für die Umwelt. Mit KSHW München wird diese Vision Realität."
          authorityText="Über 200 Wärmepumpen in München installiert - zertifizierter Fachbetrieb"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Kostenloser Eignungscheck: Wir prüfen Ihr Haus und berechnen die optimale Wärmepumpe.",
            "Förderantrag & Planung: Wir übernehmen die BAFA-Beantragung und planen die Installation.",
            "Saubere Montage: In 2-4 Tagen läuft Ihre Wärmepumpe - Sie heizen ab sofort günstiger und grüner."
          ]}
        />

        <ServiceAdvisor serviceType="waermepumpe" />

        <CustomerStories 
          stories={waermepumpeStories}
          title="Erfolgsgeschichten: So sparen Münchner mit Wärmepumpe"
          subtitle="Echte Kunden berichten von ihrer Energiewende"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Wärmepumpe München: Kosten, Förderung & Installation</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Beratung über die Installation bis zur Wartung - wir begleiten Sie auf dem Weg zur klimafreundlichen Heizung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-6 h-6 text-muted-foreground" />
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
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <TrendingDown className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold">-50%</h3>
                <p className="text-muted-foreground">Heizkosten sparen</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold">0 kg</h3>
                <p className="text-muted-foreground">CO2-Emissionen</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-muted-foreground" />
                </div>
                <h3 className="text-2xl font-bold">70%</h3>
                <p className="text-muted-foreground">Förderung möglich</p>
              </div>
            </div>
          </div>
        </section>

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Wärmepumpe installieren München: Kosten, Ablauf & BAFA-Förderung
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Die Wärmepumpe ist die Heizung der Zukunft - und diese Zukunft beginnt jetzt. Als zertifizierter Fachbetrieb 
                haben wir bereits über 150 Wärmepumpen in München und Umgebung installiert. Unsere Kunden sparen durchschnittlich 
                50% ihrer Heizkosten und heizen dabei vollständig klimaneutral.
              </p>
              <p>
                Das Prinzip ist einfach: Die Wärmepumpe nutzt kostenlose Umweltenergie - aus der Luft oder aus dem Erdreich - 
                und wandelt sie in Heizwärme um. Mit einer Kilowattstunde Strom erzeugen moderne Wärmepumpen bis zu fünf 
                Kilowattstunden Wärme. Das ist nicht nur gut für die Umwelt, sondern auch für Ihren Geldbeutel.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Wärmepumpe Förderung beantragen München: Bis zu 70% vom Staat</h3>
              <p>
                Die Bundesregierung fördert den Umstieg auf klimafreundliche Heizsysteme großzügig. Die Grundförderung beträgt 
                30%, dazu kommen Boni für bestimmte Einkommensgruppen (bis 30%), ein Geschwindigkeitsbonus (20%) und ein 
                Effizienzbonus (5%). Wir übernehmen die komplette Antragstellung bei BAFA und KfW für Sie - kostenlos.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Luft-Wasser-Wärmepumpe einbauen München: Oder doch Erdwärme?</h3>
              <p>
                Die Luft-Wasser-Wärmepumpe ist der Klassiker für Bestandsgebäude: schnell installiert (2-3 Tage), keine 
                aufwändigen Erdarbeiten, günstigere Anschaffungskosten. Sie arbeitet effizient bis etwa -20°C - für Münchner 
                Verhältnisse mehr als ausreichend.
              </p>
              <p>
                Die Erdwärmepumpe bietet noch höhere Effizienz, weil die Erdtemperatur ganzjährig konstant bei etwa 10°C liegt. 
                Sie benötigt Erdkollektoren oder Tiefenbohrungen, ist aber dafür extrem leise und besonders effizient. Ideal 
                für Neubauten oder größere Grundstücke.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Wärmepumpe nachrüsten Altbau München: Ist mein Haus geeignet?</h3>
              <p>
                Die meisten Gebäude sind für Wärmepumpen geeignet - auch Altbauten. Ideal sind gut gedämmte Häuser mit 
                Fußbodenheizung, aber auch mit Heizkörpern funktioniert es oft gut. Wir prüfen Ihr Gebäude kostenlos und 
                ehrlich: Wenn eine Wärmepumpe bei Ihnen nicht sinnvoll ist, sagen wir Ihnen das direkt.
              </p>
              <p>
                Nutzen Sie jetzt die attraktiven Förderungen und steigen Sie auf klimafreundliches Heizen um. Wir beraten 
                Sie kostenlos und unverbindlich zu Ihren Möglichkeiten.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Wärmepumpen-Installation" 
          
          highlightAreas={["Bogenhausen", "Trudering", "Haidhausen"]}
        />

        <SimpleFAQ 
          items={faqItems}
          title="Häufige Fragen zu Wärmepumpen"
        />

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Wärmepumpe München anfragen – Kostenlose Förderberatung
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Nutzen Sie die attraktiven Förderprogramme. Wir beraten Sie kostenlos und 
              unverbindlich zu Ihren Möglichkeiten.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-waermepumpe-cta">
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

        <RelatedServices currentService="waermepumpe" />
      </main>
      <Footer />
      <AIChatWidget serviceCategory="waermepumpe" />
    </div>
  );
}
