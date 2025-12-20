import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { badStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
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
  ArrowRight,
  MessageCircle,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import bathroomImage1 from "@assets/stock_images/modern_white_grey_ba_130a1b23.jpg";
import bathroomImage2 from "@assets/stock_images/modern_bathroom_reno_dcd4c0c4.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    title: "Komplettsanierung",
    description: "Alles aus einer Hand: Abriss, Rohre, Fliesen, Sanitär, Elektrik - in nur 2-4 Wochen zum Traumbad.",
    features: ["Ab 16.000€", "2-4 Wochen", "Festpreis", "5 Jahre Garantie"]
  },
  {
    title: "Teilsanierung",
    description: "Gezielt modernisieren: Dusche erneuern, WC tauschen oder neue Armaturen - schnell und sauber.",
    features: ["Ab 4.500€", "1-5 Tage", "Minimal-Umbau", "Sofort nutzbar"]
  },
  {
    title: "Barrierefreies Bad",
    description: "Sicher und komfortabel: Bodengleiche Dusche, Haltegriffe, rutschfeste Fliesen - für alle Generationen.",
    features: ["Ab 20.000€", "KfW-Förderung", "Zukunftssicher", "Stolperfrei"]
  },
  {
    title: "Luxusbad Premium",
    description: "Exklusive Materialien, Markenarmaturen und smarte Technik für höchste Ansprüche.",
    features: ["Ab 28.000€", "Designermarken", "Freistehende Wanne", "Regendusche XXL"]
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
    question: "Was kostet eine Badsanierung in München?",
    answer: "Badsanierung München Kosten: Standard-Bad (6-8m²) ab 16.000€, Komfort-Bad ab 22.000€, Luxus-Bad ab 28.000€. Barrierefreie Bäder ab 20.000€ mit möglicher KfW-Förderung. Bei AquaPro24 erhalten Sie einen verbindlichen Festpreis nach kostenloser Vor-Ort-Beratung - ohne versteckte Kosten."
  },
  {
    question: "Wie lange dauert eine Badsanierung in München?",
    answer: "Eine komplette Badsanierung dauert bei uns 2-3 Wochen. Wir erstellen vorab einen detaillierten Zeitplan und halten uns daran. Bei größeren Projekten (z.B. Wellness-Bad) kann es 4 Wochen dauern. Während der Sanierung richten wir ein Provisorium ein, sodass Sie in Ihrer Wohnung bleiben können."
  },
  {
    question: "Gibt es einen Festpreis für die Badsanierung?",
    answer: "Ja, bei AquaPro24 erhalten Sie immer einen verbindlichen Festpreis vor Arbeitsbeginn. Nach der kostenlosen 3D-Planung wissen Sie exakt, was Ihr neues Bad kostet. Keine Nachforderungen, keine Überraschungen - der Preis gilt, auch wenn wir länger brauchen."
  },
  {
    question: "Bieten Sie barrierefreie Badsanierung in München an?",
    answer: "Ja, wir sind spezialisiert auf barrierefreie und seniorengerechte Bäder in München. Leistungen: bodengleiche Duschen, rutschfeste Fliesen, Haltegriffe, erhöhte WCs, unterfahrbare Waschtische. Fördermöglichkeiten: KfW-Zuschüsse bis 6.250€. Wir unterstützen Sie bei der Antragstellung."
  },
  {
    question: "Wie läuft eine Badsanierung bei AquaPro24 ab?",
    answer: "1. Kostenlose Beratung vor Ort in München. 2. 3D-Visualisierung Ihres neuen Bades. 3. Verbindliches Festpreisangebot. 4. Koordination aller Gewerke aus einer Hand. 5. Termingerechte Fertigstellung in 2-3 Wochen. 6. Übergabe mit 5 Jahren Garantie."
  },
  {
    question: "Warum sollte ich AquaPro24 für die Badsanierung wählen?",
    answer: "AquaPro24 bietet: Alles aus einer Hand (kein Handwerker-Stress), 3D-Planung inklusive, Festpreisgarantie, 847+ sanierte Bäder in München, 5 Jahre Gewährleistung, termingerechte Fertigstellung. Wir koordinieren Sanitär, Fliesen, Elektrik und Maler - Sie haben nur einen Ansprechpartner."
  },
  {
    question: "Welche Garantie gibt es auf die Badsanierung?",
    answer: "Wir geben 5 Jahre Gewährleistung auf alle Badsanierungsarbeiten. Sollte innerhalb dieser Zeit etwas nicht stimmen, kommen wir kostenlos und beheben das Problem. Zusätzlich gelten die Herstellergarantien auf Armaturen, Sanitärobjekte und Fliesen."
  },
  {
    question: "In welchen Münchner Stadtteilen bieten Sie Badsanierung an?",
    answer: "Wir sanieren Bäder in ganz München: Schwabing, Bogenhausen, Sendling, Neuhausen, Giesing, Pasing, Laim, Trudering, Maxvorstadt, Haidhausen, Moosach, Milbertshofen, Nymphenburg und alle weiteren Stadtteile. Kostenlose Beratung: 0152 12274043."
  }
];

export default function BadPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Altes Bad nervt? Badsanierung München in 2-3 Wochen"
        description="Ihr Bad ist veraltet und unpraktisch? Wir sanieren komplett in 2-3 Wochen. Festpreis, 3D-Planung inklusive. Jetzt kostenlos beraten lassen."
        canonical="https://aquapro24.de/bad"
        keywords="Badsanierung München, Bad renovieren München, Badezimmer sanieren München, Komplettbad München, barrierefreies Bad München, Bad Schwabing, Badsanierung Bogenhausen, Bad Sendling, Badsanierung Pasing, Bad Maxvorstadt, Badsanierung Haidhausen, Bad Neuhausen, Badsanierung Trudering, Bad Laim, Badsanierung Giesing, Bad Moosach, Badsanierung Milbertshofen, Bad Nymphenburg, Badsanierung Perlach, Bad Solln, Badsanierung Hadern, Bad Allach, Badsanierung Aubing, Bad Feldmoching, Bad Isarvorstadt, Bad Lehel, Badumbau München, seniorengerechtes Bad München, Traumbad München, altersgerechtes Bad München, Badmodernisierung München, Bad erneuern München"
        aiSummary="AquaPro24 Badsanierung München: Komplettumbau in 2-3 Wochen, Festpreis ab 16.000€. Barrierefreie Bäder ab 20.000€ mit KfW-Förderung, Luxusbad ab 28.000€. 847+ Traumbäder realisiert, 5 Jahre Garantie. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Badsanierung", url: "https://aquapro24.de/bad" }
        ]}
        serviceSchema={{
          name: "Badsanierung München",
          description: "Badsanierung München: Komplettumbau in 2-3 Wochen, 3D-Planung inklusive, barrierefreie Bäder mit KfW-Förderung. 847+ Traumbäder seit 2005.",
          serviceType: "Badsanierung",
          urlSlug: "bad",
          catalogName: "Badsanierung-Leistungen",
          serviceOffers: [
            { name: "Komplettsanierung in 2-4 Wochen" },
            { name: "Teilsanierung & Modernisierung" },
            { name: "Barrierefreies Bad mit KfW-Förderung" },
            { name: "3D-Planung & Visualisierung" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 89
          }
        }}
      />
      <Header />
      <main id="main-content">
        <section className="relative py-12 lg:pt-8 pb-4 bg-gradient-to-br from-cyan-500/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <Badge className="gap-1 bg-cyan-600 text-white">
                  <Droplets className="w-3 h-3" />
                  Badsanierung München
                </Badge>
                <h1 className="text-4xl lg:text-5xl font-bold tracking-tight">
                  Badsanierung München – Komplettumbau in 2-4 Wochen
                </h1>
                <p className="text-lg text-muted-foreground">
                  <strong>Ihr neues Bad in nur 2-4 Wochen.</strong> Komplettumbau zum Festpreis - 
                  ohne versteckte Kosten, ohne böse Überraschungen.
                </p>
                <p className="text-muted-foreground">
                  Von der ersten Beratung bis zur finalen Abnahme: Wir übernehmen alles aus einer Hand. 
                  Fliesen, Sanitär, Elektrik, Beleuchtung - koordiniert von unserem Partnernetzwerk. 
                  Sie lehnen sich zurück und freuen sich auf Ihr Traumbad.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4915212274043" data-testid="button-call-bad">
                      <Phone className="w-5 h-5 mr-2" />
                      Jetzt beraten lassen
                    </a>
                  </Button>
                  <ServiceBooking 
                    serviceType="bad" 
                    buttonText="24h Buchungstermin"
                    buttonSize="lg"
                  />
                </div>
                <div className="flex flex-wrap gap-4 pt-4">
                  {["Schneller Termin", "Festpreis", "5 Jahre Garantie"].map((item) => (
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
                <div className="bg-gradient-to-br from-cyan-600 to-cyan-700 rounded-2xl p-6 text-white">
                  <p className="text-lg font-bold mb-3">Warum wir?</p>
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
          problemTitle="Diese Probleme kennen viele Münchner"
          problems={[
            "Das alte Bad ist in die Jahre gekommen und wirkt trist",
            "Zu wenig Platz und unpraktische Aufteilung",
            "Schimmel in Ecken und Fugen trotz regelmäßiger Reinigung",
            "Hohe Heizkosten durch schlechte Dämmung",
            "Einstieg in die Badewanne wird beschwerlich"
          ]}
          solutionTitle="Ihre Vorteile mit KSHW München"
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

        <ServiceAdvisor serviceType="bad" />

        <CustomerStories 
          stories={badStories}
          title="Badsanierung in München: Echte Erfolgsgeschichten"
          subtitle="So haben wir anderen Münchnern zu ihrem Traumbad verholfen"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Badsanierung München: Unsere Leistungen & Preise</h2>
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

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Kosten Badsanierung München: Was kostet ein neues Bad?
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Eine Badsanierung ist mehr als nur eine Renovierung - es ist die Verwandlung eines der wichtigsten Räume in Ihrem 
                Zuhause. Als Münchner Partnernetzwerk haben wir bereits über 500 Bäder komplett saniert und wissen genau, worauf 
                es ankommt: präzise Planung, hochwertige Materialien und handwerkliche Perfektion.
              </p>
              <p>
                Unser Versprechen an Sie: Ihr neues Bad wird in 2-4 Wochen fertig sein - termingerecht, im Budget und genau so, 
                wie Sie es sich vorgestellt haben. Dafür sorgen wir mit einem durchdachten Ablaufplan und der Koordination aller 
                Gewerke aus einer Hand.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Badsanierung München: So läuft es ab</h3>
              <p>
                Alles beginnt mit einer kostenlosen Beratung vor Ort. Wir nehmen Maß, besprechen Ihre Wünsche und zeigen Ihnen 
                Möglichkeiten auf, die Sie vielleicht noch gar nicht kannten. Anschließend erstellen wir eine 3D-Visualisierung 
                Ihres neuen Bades - so können Sie vorab sehen, wie alles aussehen wird, und eventuelle Änderungen direkt am 
                Bildschirm vornehmen.
              </p>
              <p>
                Nach Freigabe des Entwurfs erstellen wir ein verbindliches Festpreisangebot. Dieser Preis gilt - ohne versteckte 
                Kosten, ohne Nachforderungen. Erst wenn Sie vollständig überzeugt sind, beginnen wir mit der Umsetzung.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Bad renovieren München: Warum es sich lohnt</h3>
              <p>
                Ein modernes Bad steigert nicht nur Ihre Lebensqualität, sondern auch den Wert Ihrer Immobilie um durchschnittlich 
                5-10%. Besonders barrierefreie Bäder sind zukunftssicher und werden mit KfW-Förderungen unterstützt. Wir beraten 
                Sie gerne zu allen Fördermöglichkeiten.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Badumbau München: Alles aus einer Hand</h3>
              <p>
                Bei uns müssen Sie nicht fünf verschiedene Handwerker koordinieren. Wir übernehmen alles: Demontage, Rohinstallation, 
                Elektrik, Fliesen, Sanitärmontage und Malerarbeiten. Ein Ansprechpartner, ein Termin, ein Festpreis. Das spart Ihnen 
                Zeit, Nerven und häufig auch Geld.
              </p>
              <p>
                Auf alle unsere Arbeiten geben wir 5 Jahre Gewährleistung - damit Sie lange Freude an Ihrem neuen Bad haben. Und 
                sollte doch einmal etwas sein: Wir sind schnell zur Stelle und beheben das Problem.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Badsanierung" 
          highlightAreas={["Bogenhausen", "Schwabing", "Sendling"]}
        />

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zur Badsanierung"
        />

        <section className="py-10 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Badsanierung München anfragen – Kostenlose Beratung
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Lassen Sie sich unverbindlich beraten. Wir kommen zu Ihnen und erstellen ein 
              individuelles Angebot - kostenlos und ohne Verpflichtung.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-bad-cta">
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

        <RelatedServices currentService="bad" />
      </main>
      <Footer />
      <AIChatWidget serviceCategory="bad" />
    </div>
  );
}
