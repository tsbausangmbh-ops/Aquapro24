import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { waermepumpeStories } from "@/components/CustomerStories";
import TrustSignals from "@/components/TrustSignals";
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
  Star
} from "lucide-react";
import heatPumpImage1 from "@assets/stock_images/black_outdoor_heat_p_c697bf31.jpg";
import heatPumpImage2 from "@assets/stock_images/heat_pump_installati_c7c6b6db.jpg";
import heatPumpImage3 from "@assets/stock_images/modern_white_heat_pu_786e8fed.jpg";

const services = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    description: "Ihr Einstieg in klimaneutrales Heizen. Nutzt kostenlose Umgebungsluft und ist in nur 2-3 Tagen installiert.",
    features: ["Ab 12.000€", "2-3 Tage Montage", "Bis 70% Förderung", "Ideal für Bestand"]
  },
  {
    title: "Erdwärmepumpe",
    description: "Maximum an Effizienz. Konstante Erdtemperatur garantiert höchste Leistung - auch bei -20°C außen.",
    features: ["COP bis 5.0", "Extrem leise", "30+ Jahre Lebensdauer", "Auch zum Kühlen"]
  },
  {
    title: "Wärmepumpen-Wartung",
    description: "Volle Leistung, minimaler Verbrauch. Jährliche Wartung sichert Effizienz und Herstellergarantie.",
    features: ["Ab 249€/Jahr", "Inkl. Kältemittel", "Störungsfreier Betrieb", "Garantieerhalt"]
  },
  {
    title: "Förderberatung & Antrag",
    description: "Wir holen das Maximum für Sie raus. Komplette Antragstellung bei BAFA und KfW inklusive.",
    features: ["Kostenlos", "Bis 70% Zuschuss", "Alle Formulare", "Schnelle Bearbeitung"]
  }
];

const benefits = [
  "Bis zu 70% Förderung möglich",
  "Bis zu 50% Heizkosten sparen",
  "CO2-neutral heizen",
  "Unabhängig von Gas & Öl",
  "Wertsteigerung Immobilie",
  "Zertifizierter Fachbetrieb"
];

const faqItems = [
  {
    question: "Lohnt sich eine Wärmepumpe in München?",
    answer: "Ja, Wärmepumpen sind in München sehr effizient. Mit bis zu 70% staatlicher Förderung und 50% Heizkosten-Ersparnis amortisiert sich die Investition oft in 7-10 Jahren. Das milde bayerische Klima begünstigt zudem die Effizienz."
  },
  {
    question: "Welche Förderung gibt es für Wärmepumpen 2024/2025?",
    answer: "Aktuell erhalten Sie bis zu 70% Förderung durch BAFA und KfW. Die Grundförderung beträgt 30%, plus Boni für Einkommensgruppen (30%), Geschwindigkeitsbonus (20%) und Effizienzbonus (5%). Wir helfen bei der Antragstellung."
  },
  {
    question: "Funktioniert eine Wärmepumpe auch bei Minusgraden?",
    answer: "Moderne Luft-Wasser-Wärmepumpen arbeiten effizient bis -20°C. In München mit durchschnittlich milden Wintern sind sie daher bestens geeignet. Bei Bedarf empfehlen wir Hybrid-Systeme für extreme Kältephasen."
  },
  {
    question: "Wie lange dauert die Installation einer Wärmepumpe?",
    answer: "Eine Luft-Wasser-Wärmepumpe wird in der Regel in 2-3 Tagen installiert. Erdwärmepumpen benötigen wegen der Bohrungen 1-2 Wochen. Wir planen alles so, dass Ihr Heizungsbetrieb minimal unterbrochen wird."
  },
  {
    question: "Ist mein Haus für eine Wärmepumpe geeignet?",
    answer: "Die meisten Gebäude sind geeignet. Ideal sind gut gedämmte Häuser mit Fußbodenheizung. Aber auch Altbauten mit Heizkörpern können oft umgerüstet werden. Wir prüfen Ihr Gebäude kostenlos und beraten ehrlich."
  }
];

export default function WaermepumpePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Wärmepumpe München | Bis 70% Förderung | Installation & Beratung | AquaPro24"
        description="Wärmepumpe in München installieren lassen. Bis zu 70% Förderung, 50% Heizkosten sparen. Luft-Wasser & Erdwärme. Kostenlose Beratung, Festpreis, Meisterbetrieb."
        canonical="https://aquapro24.de/waermepumpe"
        keywords="Wärmepumpe München, Luft-Wasser-Wärmepumpe, Erdwärmepumpe, Wärmepumpe Förderung, Heizungstausch München"
        serviceSchema={{
          name: "Wärmepumpen-Installation München",
          description: "Installation und Wartung von Wärmepumpen in München mit Förderberatung",
          serviceType: "Heat Pump Installation",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing"]
        }}
      />
      <Header />
      <main>
        <section className="relative py-12 lg:pt-8 pb-4 bg-gradient-to-br from-accent/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Leaf className="w-3 h-3" />
                  Wärmepumpe München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Wärmepumpe vom Meisterbetrieb
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Schluss mit steigenden Gaspreisen.</strong> Heizen Sie unabhängig, 
                  klimaneutral und sparen Sie dabei bis zu 50% Ihrer Heizkosten.
                </p>
                <p className="text-muted-foreground">
                  Jetzt ist der beste Zeitpunkt: Bis zu 70% staatliche Förderung, fachgerechte 
                  Installation durch unseren Meisterbetrieb und ein verbindlicher Festpreis ohne 
                  Überraschungen. Wir kümmern uns um alles - von der Beratung bis zur Förderantragstellung.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789" data-testid="button-call-waermepumpe">
                      <Phone className="w-5 h-5 mr-2" />
                      Kostenlose Beratung
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Fördercheck starten
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Bis 70% Förderung", "Festpreis", "Zertifiziert"].map((item) => (
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
                    src={heatPumpImage1} 
                    alt="Wärmepumpe Installation" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-secondary text-secondary-foreground shadow-lg">
                      <Zap className="w-3 h-3 mr-1" />
                      Energiewende
                    </Badge>
                  </div>
                </div>
                <div className="relative rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={heatPumpImage3} 
                    alt="Moderne Wärmepumpe am Haus" 
                    className="w-full h-48 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent p-4">
                    <p className="text-white text-sm font-medium">Professionelle Installation vor Ort</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals variant="compact" />

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
          futureState="...Ihre neue Wärmepumpe läuft leise im Garten, Sie heizen klimaneutral und Ihre Heizkosten sind um die Hälfte gesunken. Jeden Monat sparen Sie Geld und tun etwas für die Umwelt. Mit AquaPro24 wird diese Vision Realität."
          authorityText="Über 200 Wärmepumpen in München installiert - zertifizierter Fachbetrieb"
          urgencyText="Förderung sichern: BAFA-Antrag vor Heizungstausch nötig!"
          transformationSteps={[
            "Kostenloser Eignungscheck: Wir prüfen Ihr Haus und berechnen die optimale Wärmepumpe.",
            "Förderantrag & Planung: Wir übernehmen die BAFA-Beantragung und planen die Installation.",
            "Saubere Montage: In 2-4 Tagen läuft Ihre Wärmepumpe - Sie heizen ab sofort günstiger und grüner."
          ]}
        />

        <CustomerStories 
          stories={waermepumpeStories}
          title="Erfolgsgeschichten: So sparen Münchner mit Wärmepumpe"
          subtitle="Echte Kunden berichten von ihrer Energiewende"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Wärmepumpen-Leistungen in München</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Beratung über die Installation bis zur Wartung - wir begleiten Sie auf dem Weg zur klimafreundlichen Heizung.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Leaf className="w-6 h-6 text-accent" />
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
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <TrendingDown className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">-50%</h3>
                <p className="text-muted-foreground">Heizkosten sparen</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Leaf className="w-8 h-8 text-accent" />
                </div>
                <h3 className="text-2xl font-bold">0 kg</h3>
                <p className="text-muted-foreground">CO2-Emissionen</p>
              </div>
              <div className="space-y-2">
                <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                  <Zap className="w-8 h-8 text-accent" />
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
              Wärmepumpe in München - Klimaneutral heizen und bis zu 50% sparen
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Bis zu 70% staatliche Förderung</h3>
              <p>
                Die Bundesregierung fördert den Umstieg auf klimafreundliche Heizsysteme großzügig. Die Grundförderung beträgt 
                30%, dazu kommen Boni für bestimmte Einkommensgruppen (bis 30%), ein Geschwindigkeitsbonus (20%) und ein 
                Effizienzbonus (5%). Wir übernehmen die komplette Antragstellung bei BAFA und KfW für Sie - kostenlos.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Luft-Wasser oder Erdwärme?</h3>
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Ist mein Haus geeignet?</h3>
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

        <FAQ 
          items={faqItems}
          title="Häufige Fragen zu Wärmepumpen"
          subtitle="Alles, was Sie über Wärmepumpen in München wissen sollten"
        />

        <section className="pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-accent mx-auto" />
              <h2 className="text-3xl font-bold">Jetzt auf Wärmepumpe umsteigen!</h2>
              <p className="text-muted-foreground">
                Nutzen Sie die attraktiven Förderprogramme. Wir beraten Sie kostenlos und 
                unverbindlich zu Ihren Möglichkeiten. Über 150 Wärmepumpen in München installiert.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989123456789" data-testid="button-call-waermepumpe-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    089 123 456 789
                  </a>
                </Button>
                <Button size="lg" variant="secondary">
                  <Clock className="w-4 h-4 mr-2" />
                  Beratungstermin
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget serviceCategory="waermepumpe" />
    </div>
  );
}
