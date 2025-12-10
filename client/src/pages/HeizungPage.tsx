import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { heizungStories } from "@/components/CustomerStories";
import TrustSignals from "@/components/TrustSignals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Flame, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Thermometer
} from "lucide-react";
import heatingImage1 from "@assets/stock_images/heating_system_boile_6d071f6f.jpg";
import heatingImage2 from "@assets/stock_images/heating_system_boile_d08e816e.jpg";

const services = [
  {
    title: "Heizungsinstallation",
    description: "Fachgerechte Installation moderner Heizsysteme - von der Planung bis zur Inbetriebnahme.",
    features: ["Gasheizung", "Ölheizung", "Pelletheizung", "Hybridheizung"]
  },
  {
    title: "Heizungswartung",
    description: "Regelmäßige Wartung für optimale Effizienz und lange Lebensdauer Ihrer Heizanlage.",
    features: ["Jahreswartung", "Brennereinstellung", "Abgasmessung", "Kesselreinigung"]
  },
  {
    title: "Heizungsreparatur",
    description: "Schnelle und zuverlässige Reparatur bei Heizungsausfall - auch im Notdienst.",
    features: ["24/7 Notdienst", "Alle Hersteller", "Ersatzteilservice", "Schnelle Hilfe"]
  },
  {
    title: "Heizungsmodernisierung",
    description: "Austausch alter Heizungen gegen effiziente, moderne Systeme mit Förderberatung.",
    features: ["Förderberatung", "Energieberatung", "CO2-Einsparung", "Kostensenkung"]
  }
];

const benefits = [
  "24/7 Notdienst verfügbar",
  "Alle Hersteller & Marken",
  "Festpreisgarantie",
  "Förderberatung inklusive",
  "Energieeffizienz-Check",
  "Wartungsverträge"
];

const faqItems = [
  {
    question: "Wie schnell kommen Sie bei einem Heizungsausfall in München?",
    answer: "Bei einem Heizungsnotfall sind wir in der Regel innerhalb von 45-60 Minuten bei Ihnen. Unser 24/7 Notdienst ist auch an Wochenenden und Feiertagen erreichbar - besonders wichtig in kalten Winternächten."
  },
  {
    question: "Was kostet eine neue Heizung in München?",
    answer: "Die Kosten variieren je nach System und Größe. Eine neue Gasheizung beginnt ab ca. 6.000€, Wärmepumpen ab ca. 15.000€. Wir beraten Sie zu Fördermöglichkeiten, die bis zu 40% der Kosten abdecken können."
  },
  {
    question: "Lohnt sich der Austausch meiner alten Heizung?",
    answer: "Heizungen über 15-20 Jahre sollten geprüft werden. Moderne Systeme sparen bis zu 30% Energie. Wir erstellen Ihnen eine kostenlose Wirtschaftlichkeitsberechnung - oft amortisiert sich die Investition in 5-8 Jahren."
  },
  {
    question: "Welche Heizung ist die beste für mein Haus?",
    answer: "Das hängt von vielen Faktoren ab: Gebäudegröße, Dämmung, vorhandene Anschlüsse, Budget. Wir beraten Sie neutral zu allen Optionen - Gas, Wärmepumpe, Pellets oder Hybrid - und finden die optimale Lösung."
  },
  {
    question: "Wie oft sollte die Heizung gewartet werden?",
    answer: "Mindestens einmal jährlich vor der Heizperiode. Regelmäßige Wartung erhält die Effizienz, senkt Verbrauch und beugt teuren Reparaturen vor. Wir bieten günstige Wartungsverträge mit Priorität im Notfall."
  }
];

export default function HeizungPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Heizung München | 24h Notdienst | Installation & Reparatur | AquaPro24"
        description="Heizungsinstallation, Wartung und Reparatur in München. 24/7 Notdienst bei Heizungsausfall. Alle Marken, Festpreise, Förderberatung. Meisterbetrieb."
        canonical="https://aquapro24.de/heizung"
        keywords="Heizung München, Heizungsnotdienst, Heizungsinstallation, Heizungswartung, Gasheizung, Heizungsreparatur München"
        serviceSchema={{
          name: "Heizungsservice München",
          description: "Professionelle Heizungsinstallation, Wartung und 24/7 Notdienst in München",
          serviceType: "HVAC",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing"]
        }}
      />
      <Header />
      <main>
        <section className="relative py-12 lg:pt-10 pb-6 bg-gradient-to-br from-primary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Flame className="w-3 h-3" />
                  Heizung München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Heizung - Wärme für Ihr Zuhause
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Heizung ausgefallen? Keine Wärme im Winter?</strong> Das ist mehr als nur 
                  unangenehm - das ist ein echtes Problem, das schnell gelöst werden muss.
                </p>
                <p className="text-muted-foreground">
                  Installation, Wartung und Reparatur aller Heizungssysteme. Wir sorgen für wohlige 
                  Wärme in Ihrem Zuhause - zuverlässig, effizient und mit 24/7 Notdienst.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789" data-testid="button-call-heizung">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Beratung anfragen
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["24/7 Notdienst", "Alle Marken", "Festpreis"].map((item) => (
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
                    src={heatingImage1} 
                    alt="Moderne Heizungsanlage" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-secondary text-secondary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Meisterbetrieb
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-primary to-primary/80 rounded-2xl p-6 text-primary-foreground">
                  <h3 className="text-lg font-bold mb-3">Unsere Vorteile</h3>
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

        <TrustSignals variant="compact" />

        <NLPSection
          problemTitle="Diese Sorgen kennen wir"
          problems={[
            "Die Heizung macht komische Geräusche und wird nicht mehr richtig warm",
            "Die Energiekosten steigen jedes Jahr weiter an",
            "Die alte Heizung könnte jeden Moment ausfallen",
            "Niemand erklärt verständlich, was repariert werden muss",
            "Angst vor hohen Reparaturkosten ohne Vorwarnung"
          ]}
          solutionTitle="So helfen wir Ihnen"
          solutions={[
            "24/7 Notdienst - auch nachts und am Wochenende erreichbar",
            "Ehrliche Diagnose und transparente Preise vor Arbeitsbeginn",
            "Alle Heizungsmarken - Viessmann, Vaillant, Buderus, Wolf und mehr",
            "Förderberatung für bis zu 40% Zuschuss bei Heizungstausch",
            "Wartungsverträge für sorgenfreie Heizperioden"
          ]}
          futureState="...Ihre Heizung läuft zuverlässig, Ihre Energiekosten sind gesunken und Sie haben einen vertrauenswürdigen Partner, der sich um alles kümmert. Bei uns ist das kein Wunschtraum - das ist Standard."
          authorityText="24/7 Notdienst mit durchschnittlich 38 Minuten Reaktionszeit"
          urgencyText="Heizungsnotfall? Wir sind in 45 Min. da"
          transformationSteps={[
            "Anruf oder Chat: Schildern Sie kurz das Problem - wir sind rund um die Uhr erreichbar.",
            "Schnelle Diagnose: Unser Techniker kommt, prüft die Heizung und nennt Ihnen den Festpreis.",
            "Sofortige Lösung: Die Reparatur erfolgt direkt - Sie haben wieder Wärme und Sicherheit."
          ]}
        />

        <CustomerStories 
          stories={heizungStories}
          title="Heizungsnotfälle gelöst: Echte Kundengeschichten"
          subtitle="So haben wir anderen Münchnern in der Kälte geholfen"
        />

        <section className="pt-10 pb-6 lg:pt-12 lg:pb-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unsere Heizungs-Leistungen in München</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Neuinstallation bis zur Reparatur - wir sind Ihr zuverlässiger Partner für alle Heizungsfragen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Thermometer className="w-6 h-6 text-primary" />
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

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-10 pb-6 md:pt-10 md:pb-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Heizungsservice in München - Ihr zuverlässiger Partner für wohlige Wärme
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Eine funktionierende Heizung ist in den kalten Münchner Wintern unverzichtbar. Als Meisterbetrieb mit über 
                20 Jahren Erfahrung sind wir Ihr verlässlicher Partner für alle Heizungsfragen - von der Wartung über die 
                Reparatur bis zur kompletten Neuinstallation.
              </p>
              <p>
                Unser 24/7-Notdienst steht Ihnen rund um die Uhr zur Verfügung. Bei einem Heizungsausfall sind wir in der 
                Regel innerhalb von 45-60 Minuten bei Ihnen - auch nachts, am Wochenende und an Feiertagen. Denn wir wissen: 
                Ohne Heizung wird es schnell ungemütlich und im schlimmsten Fall können Wasserleitungen einfrieren.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Alle Heizungsmarken - ein Ansprechpartner</h3>
              <p>
                Egal ob Viessmann, Vaillant, Buderus, Wolf, Junkers oder andere Hersteller - wir kennen alle Systeme und haben 
                die häufigsten Ersatzteile direkt dabei. Das bedeutet für Sie: schnelle Reparatur, oft noch am selben Tag, 
                ohne lange Wartezeiten auf Ersatzteile.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Regelmäßige Wartung spart Geld</h3>
              <p>
                Eine jährliche Heizungswartung kostet zwischen 150-200€ - und spart Ihnen langfristig ein Vielfaches. Denn 
                eine gut gewartete Heizung verbraucht bis zu 15% weniger Energie, läuft zuverlässiger und hält länger. 
                Unsere Wartungsverträge beinhalten bevorzugte Termine bei Notfällen und vergünstigte Reparaturen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Heizungsmodernisierung mit Förderung</h3>
              <p>
                Ist Ihre Heizung älter als 15-20 Jahre? Dann lohnt sich oft ein Austausch gegen ein modernes, effizientes 
                System. Wir beraten Sie neutral zu allen Optionen - Gasbrennwert, Wärmepumpe, Pellets oder Hybrid - und 
                helfen bei der Beantragung von Fördergeldern. Bis zu 40% der Investitionskosten können durch staatliche 
                Förderung gedeckt werden.
              </p>
              <p>
                Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir prüfen Ihre aktuelle Situation, zeigen Einsparpotenziale 
                auf und erstellen ein unverbindliches Angebot - transparent, fair und ohne versteckte Kosten.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Heizungsservice" 
          highlightAreas={["Pasing", "Laim", "Neuhausen"]}
        />

        <FAQ 
          items={faqItems}
          title="Häufige Fragen zum Heizungsservice"
          subtitle="Antworten auf die wichtigsten Heizungsfragen unserer Münchner Kunden"
        />

        <section className="pt-10 pb-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-primary mx-auto" />
              <h2 className="text-3xl font-bold">Heizung defekt? Wir helfen sofort!</h2>
              <p className="text-muted-foreground">
                Unser 24/7 Notdienst ist für Sie da. Rufen Sie uns an und wir kümmern uns 
                schnellstmöglich um Ihre Heizung. In München und Umgebung meist innerhalb einer Stunde vor Ort.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989123456789" data-testid="button-call-heizung-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    089 123 456 789
                  </a>
                </Button>
                <Button size="lg" variant="secondary">
                  <Clock className="w-4 h-4 mr-2" />
                  Wartungstermin
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget serviceCategory="heizung" />
    </div>
  );
}
