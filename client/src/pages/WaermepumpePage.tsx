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
import heatPumpImage1 from "@assets/stock_images/heat_pump_installati_6831dd34.jpg";
import heatPumpImage2 from "@assets/stock_images/heat_pump_installati_c7c6b6db.jpg";

const services = [
  {
    title: "Luft-Wasser-Wärmepumpe",
    description: "Die beliebteste Lösung - nutzt die Außenluft als Wärmequelle, einfache Installation.",
    features: ["Geringe Kosten", "Schnelle Montage", "Förderbar", "Effizient"]
  },
  {
    title: "Erdwärmepumpe",
    description: "Höchste Effizienz durch konstante Erdwärme - ideal für Neubauten und große Objekte.",
    features: ["Höchste Effizienz", "Konstante Leistung", "Langlebig", "Leise"]
  },
  {
    title: "Wärmepumpen-Wartung",
    description: "Regelmäßige Wartung für optimale Leistung und lange Lebensdauer Ihrer Wärmepumpe.",
    features: ["Jahrescheck", "Kältemittelprüfung", "Filterreinigung", "Effizienzoptimierung"]
  },
  {
    title: "Förderberatung",
    description: "Wir unterstützen Sie bei der Beantragung staatlicher Förderungen - bis zu 70% Zuschuss möglich.",
    features: ["BAFA-Förderung", "KfW-Kredit", "Antragsstellung", "Dokumentation"]
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
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-accent/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Leaf className="w-3 h-3" />
                  Wärmepumpe München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Wärmepumpe - Heizen mit Zukunft
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Steigende Gaspreise? Sorge um CO2-Steuer?</strong> Die Abhängigkeit von 
                  fossilen Brennstoffen belastet Geldbeutel und Gewissen gleichermaßen.
                </p>
                <p className="text-muted-foreground">
                  Mit einer Wärmepumpe sparen Sie bis zu 50% Heizkosten und heizen klimaneutral. 
                  Dank staatlicher Förderung von bis zu 70% ist der Umstieg jetzt besonders attraktiv.
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
                <div className="bg-gradient-to-br from-accent to-accent/80 rounded-2xl p-6 text-accent-foreground">
                  <h3 className="text-lg font-bold mb-3">Ihre Vorteile</h3>
                  <ul className="space-y-2">
                    {benefits.slice(0, 4).map((benefit) => (
                      <li key={benefit} className="flex items-center gap-2 text-sm">
                        <CheckCircle2 className="w-4 h-4 flex-shrink-0" />
                        <span>{benefit}</span>
                      </li>
                    ))}
                  </ul>
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

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
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

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8 text-center">
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

        <ServiceAreas 
          serviceName="Wärmepumpen-Installation" 
          highlightAreas={["Bogenhausen", "Trudering", "Haidhausen"]}
        />

        <FAQ 
          items={faqItems}
          title="Häufige Fragen zu Wärmepumpen"
          subtitle="Alles, was Sie über Wärmepumpen in München wissen sollten"
        />

        <section className="py-16">
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
