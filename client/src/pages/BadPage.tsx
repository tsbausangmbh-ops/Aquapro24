import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { badStories } from "@/components/CustomerStories";
import TrustSignals from "@/components/TrustSignals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Droplets, 
  Wrench, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight
} from "lucide-react";
import bathroomImage1 from "@assets/stock_images/modern_luxury_bathro_db121c4d.jpg";
import bathroomImage2 from "@assets/stock_images/modern_bathroom_reno_dcd4c0c4.jpg";

const services = [
  {
    title: "Badsanierung komplett",
    description: "Komplettumbau Ihres Badezimmers nach Ihren Wünschen - von der Planung bis zur Fertigstellung.",
    features: ["Fliesenarbeiten", "Sanitärinstallation", "Elektrik", "Beleuchtung"]
  },
  {
    title: "Badmodernisierung",
    description: "Teilsanierung und Modernisierung bestehender Bäder für mehr Komfort und Ästhetik.",
    features: ["Neue Armaturen", "WC-Austausch", "Dusche erneuern", "Barrierefreiheit"]
  },
  {
    title: "Sanitärobjekte",
    description: "Installation und Austausch aller Sanitärobjekte - WC, Waschbecken, Dusche, Badewanne.",
    features: ["WC & Bidet", "Waschtische", "Duschen", "Badewannen"]
  },
  {
    title: "Armaturen & Zubehör",
    description: "Hochwertige Armaturen und Badaccessoires für Ihr Traumbad.",
    features: ["Thermostatarmaturen", "Unterputzarmaturen", "Handtuchhalter", "Spiegel"]
  }
];

const benefits = [
  "Kostenlose Beratung vor Ort",
  "3D-Badplanung inklusive",
  "Festpreisgarantie",
  "Alles aus einer Hand",
  "5 Jahre Gewährleistung",
  "Termintreue garantiert"
];

const faqItems = [
  {
    question: "Wie lange dauert eine komplette Badsanierung in München?",
    answer: "Eine Standard-Badsanierung dauert in der Regel 2-3 Wochen. Bei aufwändigeren Projekten kann es auch 4 Wochen dauern. Wir erstellen Ihnen einen genauen Zeitplan und halten uns daran."
  },
  {
    question: "Was kostet eine Badsanierung in München?",
    answer: "Die Kosten hängen von Größe und Ausstattung ab. Ein Standard-Bad (6-8m²) beginnt ab ca. 8.000€. Wir erstellen Ihnen ein detailliertes Festpreisangebot nach der kostenlosen Beratung vor Ort."
  },
  {
    question: "Bieten Sie auch barrierefreie Badsanierung an?",
    answer: "Ja, wir sind spezialisiert auf barrierefreie und seniorengerechte Bäder. Bodengleiche Duschen, Haltegriffe, erhöhte WCs - wir beraten Sie zu allen Möglichkeiten und Förderprogrammen."
  },
  {
    question: "Kann ich während der Badsanierung in meiner Wohnung bleiben?",
    answer: "In den meisten Fällen ja. Wir richten ein provisorisches WC ein und arbeiten zügig, damit die Einschränkungen minimal bleiben. Bei Bedarf planen wir Etappen ein."
  },
  {
    question: "Übernehmen Sie auch die Entsorgung der alten Sanitärobjekte?",
    answer: "Selbstverständlich! Die fachgerechte Entsorgung aller Altmaterialien ist in unserem Angebot enthalten. Sie müssen sich um nichts kümmern."
  }
];

export default function BadPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Badsanierung München | Komplettumbau zum Festpreis | AquaPro24"
        description="Professionelle Badsanierung in München. Komplettumbau, Modernisierung, barrierefrei. Kostenlose Beratung, 3D-Planung, 5 Jahre Garantie. Meisterbetrieb."
        canonical="https://aquapro24.de/bad"
        keywords="Badsanierung München, Bad renovieren, Badezimmer sanieren, Komplettbad, barrierefreies Bad, Badumbau München"
        serviceSchema={{
          name: "Badsanierung München",
          description: "Komplette Badsanierung und Badmodernisierung in München - alles aus einer Hand",
          serviceType: "Bathroom Renovation",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing"]
        }}
      />
      <Header />
      <main>
        <section className="relative py-20 lg:py-28 bg-gradient-to-br from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div className="space-y-6">
                <Badge variant="secondary" className="gap-1">
                  <Droplets className="w-3 h-3" />
                  Badsanierung München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Ihr Traumbad wird Wirklichkeit
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Veraltetes Bad? Unpraktische Aufteilung? Zu wenig Stauraum?</strong> Wir 
                  verstehen, wie frustrierend das tägliche Bad-Erlebnis sein kann, wenn nichts mehr passt.
                </p>
                <p className="text-muted-foreground">
                  Von der kompletten Badsanierung bis zur Teilmodernisierung - wir verwandeln Ihr 
                  Badezimmer in eine Wohlfühloase. Stellen Sie sich vor: Jeden Morgen starten Sie 
                  entspannt in einem Bad, das genau Ihren Wünschen entspricht.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789" data-testid="button-call-bad">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt beraten lassen
                    </a>
                  </Button>
                  <Button size="lg" variant="secondary">
                    Kostenlose Beratung
                    <ArrowRight className="w-4 h-4 ml-2" />
                  </Button>
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["In 90 Min. da", "Festpreis", "5 Jahre Garantie"].map((item) => (
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
                    src={bathroomImage1} 
                    alt="Modernes Badezimmer nach Sanierung" 
                    className="w-full h-64 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Top bewertet
                    </Badge>
                  </div>
                </div>
                <div className="bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-6 text-secondary-foreground">
                  <h3 className="text-lg font-bold mb-3">Warum wir?</h3>
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
          problemTitle="Diese Probleme kennen viele Münchner"
          problems={[
            "Das alte Bad ist in die Jahre gekommen und wirkt trist",
            "Zu wenig Platz und unpraktische Aufteilung",
            "Schimmel in Ecken und Fugen trotz regelmäßiger Reinigung",
            "Hohe Heizkosten durch schlechte Dämmung",
            "Einstieg in die Badewanne wird beschwerlich"
          ]}
          solutionTitle="Ihre Vorteile mit AquaPro24"
          solutions={[
            "Komplette Badsanierung aus einer Hand - keine 5 verschiedenen Handwerker",
            "Kostenlose 3D-Visualisierung Ihres neuen Bades",
            "Festpreisgarantie ohne Nachforderungen",
            "Modernste Materialien für jahrelange Freude",
            "Barrierefreie Lösungen für alle Generationen"
          ]}
          futureState="...Sie betreten jeden Morgen Ihr neues Traumbad. Alles ist genau so, wie Sie es sich vorgestellt haben - modern, funktional und einladend. Ihre Investition zahlt sich jeden Tag aus und steigert gleichzeitig den Wert Ihrer Immobilie."
          authorityText="Über 500 Badsanierungen in München erfolgreich abgeschlossen"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Kostenlose Beratung vor Ort: Wir besprechen Ihre Wünsche und zeigen Möglichkeiten.",
            "3D-Visualisierung: Sie sehen Ihr neues Bad vorab am Bildschirm - so treffen Sie die richtige Entscheidung.",
            "Termingerechte Umsetzung: In 2-3 Wochen ist Ihr Traumbad fertig - wir räumen auf und Sie genießen."
          ]}
        />

        <CustomerStories 
          stories={badStories}
          title="Badsanierung in München: Echte Erfolgsgeschichten"
          subtitle="So haben wir anderen Münchnern zu ihrem Traumbad verholfen"
        />

        <section className="py-16 lg:py-24">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold mb-4">Unsere Bad-Leistungen in München</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Kompetente Beratung, professionelle Ausführung und erstklassiger Service - alles aus einer Hand.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Wrench className="w-6 h-6 text-secondary" />
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

        <ServiceAreas 
          serviceName="Badsanierung" 
          highlightAreas={["Bogenhausen", "Schwabing", "Sendling"]}
        />

        <FAQ 
          items={faqItems}
          title="Häufige Fragen zur Badsanierung"
          subtitle="Alles, was Sie über Badsanierung in München wissen müssen"
        />

        <section className="py-16 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <div className="max-w-2xl mx-auto space-y-6">
              <ShieldCheck className="w-12 h-12 text-secondary mx-auto" />
              <h2 className="text-3xl font-bold">Bereit für Ihr neues Bad?</h2>
              <p className="text-muted-foreground">
                Lassen Sie sich unverbindlich beraten. Wir kommen zu Ihnen, nehmen Maß und erstellen 
                ein individuelles Angebot - kostenlos und ohne Verpflichtung. Über 300 Bäder in 
                München bereits erfolgreich saniert.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989123456789" data-testid="button-call-bad-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    089 123 456 789
                  </a>
                </Button>
                <Button size="lg" variant="secondary">
                  <Clock className="w-4 h-4 mr-2" />
                  Termin vereinbaren
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget serviceCategory="bad" />
    </div>
  );
}
