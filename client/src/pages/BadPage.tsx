import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { badStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import CallbackForm from "@/components/CallbackForm";
import FreeConsultationBanner from "@/components/FreeConsultationBanner";
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
  MessageCircle
} from "lucide-react";
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
  },
  {
    question: "Welche Garantie geben Sie auf die Badsanierung?",
    answer: "Wir geben 5 Jahre Gewährleistung auf alle unsere Arbeiten. Bei Problemen kommen wir kostenlos zurück. Auf eingebaute Produkte gelten zusätzlich die Herstellergarantien."
  },
  {
    question: "Was ist bei einer Badsanierung im Altbau zu beachten?",
    answer: "Im Altbau müssen wir oft mit besonderen Gegebenheiten umgehen: alte Wasserleitungen (Blei, Stahl), niedrige Deckenhöhen, unebene Böden oder fehlende Abdichtungen. Wir prüfen alles vorab und beraten Sie ehrlich, welche Arbeiten notwendig sind. Oft lohnt es sich, bei der Sanierung auch die Leitungen zu erneuern."
  },
  {
    question: "Welche Fliesenformate sind aktuell modern?",
    answer: "Aktuell liegen Großformate (60x120cm oder größer) im Trend - sie wirken großzügig und haben weniger Fugen. Beliebte Looks sind Betonoptik, Naturstein-Look und warme Erdtöne. Wir zeigen Ihnen in unserer 3D-Planung verschiedene Optionen, damit Sie die perfekte Wahl treffen können."
  },
  {
    question: "Wie funktioniert die 3D-Badplanung?",
    answer: "Bei der kostenlosen Beratung vor Ort vermessen wir Ihr Bad und besprechen Ihre Wünsche. Daraus erstellen wir ein fotorealistisches 3D-Modell, in dem Sie Ihr neues Bad virtuell begehen können. So sehen Sie vorab genau, wie Fliesen, Sanitärobjekte und Beleuchtung zusammenwirken - und können Änderungen vornehmen, bevor die Arbeit beginnt."
  },
  {
    question: "Was kostet eine bodengleiche Dusche?",
    answer: "Eine bodengleiche Dusche inklusive Rinnenablauf, Fliesen und Glasabtrennung liegt zwischen 3.500€ und 6.000€, je nach Größe und Ausstattung. Im Altbau kann ein Aufbau nötig sein, wenn der Boden nicht genug Tiefe für den Ablauf bietet. Wir finden immer eine Lösung."
  },
  {
    question: "Welche Förderung gibt es für barrierefreie Bäder?",
    answer: "Die KfW fördert altersgerechte Umbauten mit dem Programm 455-B: Zuschuss bis 6.250€ oder zinsgünstiger Kredit. Voraussetzungen sind u.a. bodengleiche Dusche, breitere Türen, Haltegriffe. Auch Pflegekassen bezuschussen Umbauten mit bis zu 4.000€ pro Maßnahme. Wir beraten Sie zu allen Fördermöglichkeiten."
  },
  {
    question: "Welche Armaturen-Marken verbauen Sie?",
    answer: "Wir arbeiten mit allen namhaften Herstellern: Grohe, Hansgrohe, Geberit, Villeroy & Boch, Duravit, Kaldewei und mehr. Von der preiswerten Basisausstattung bis zur Luxuslinie ist alles möglich. In der Beratung zeigen wir Ihnen verschiedene Optionen in unterschiedlichen Preisklassen."
  }
];

export default function BadPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Badsanierung München | Festpreis ab 16.000€ | 3D-Planung gratis | AquaPro24"
        description="Badsanierung München in 2-3 Wochen: Komplettumbau ab 16.000€, barrierefreies Bad ab 20.000€, Luxusbad ab 28.000€. 847+ Traumbäder realisiert, 5 Jahre Garantie, KfW-Förderung. Tel: 0152 12274043"
        canonical="https://aquapro24.de/bad"
        aiSummary="AquaPro24 Badsanierung München: Komplettumbau in 2-3 Wochen, Festpreis ab 16.000€. Barrierefreie Bäder ab 20.000€ mit KfW-Förderung, Luxusbad ab 28.000€. 847+ Traumbäder realisiert, 5 Jahre Garantie. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Badsanierung", url: "https://aquapro24.de/bad" }
        ]}
        serviceSchema={{
          name: "AquaPro24 Badsanierung München",
          description: "Badsanierung München: Komplettumbau in 2-3 Wochen, 3D-Planung inklusive, barrierefreie Bäder mit KfW-Förderung. 847+ Traumbäder seit 2005.",
          serviceType: "Bathroom Renovation",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Maxvorstadt", "Haidhausen", "Neuhausen", "Trudering", "Laim", "Giesing", "Moosach", "Milbertshofen"],
          offers: [
            { name: "Komplettsanierung", description: "Komplettumbau mit Fliesen, Sanitär, Elektrik", priceRange: "ab 16.000€" },
            { name: "Teilsanierung", description: "Gezielte Modernisierung einzelner Bereiche", priceRange: "ab 4.500€" },
            { name: "Barrierefreies Bad", description: "Seniorengerecht mit KfW-Förderung", priceRange: "ab 20.000€" },
            { name: "Luxusbad Premium", description: "Exklusive Materialien und smarte Technik", priceRange: "ab 28.000€" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 89
          },
          reviews: [
            { author: "Familie Weber", rating: 5, reviewBody: "Also wir haben lang überlegt, ob wir das Bad selbst machen oder machen lassen. Zum Glück haben wir uns für die Profis entschieden! Das 3D-Modell war super, da konnten wir alles vorher sehen. 2,5 Wochen und fertig war das neue Bad. Bisschen staubig war's, aber die haben jeden Tag aufgeräumt. Preis war am Ende sogar etwas unter dem Angebot.", datePublished: "2024-10-28", location: "München-Schwabing" },
            { author: "Renate M.", rating: 5, reviewBody: "Meine Mutter (82) brauchte dringend ein Bad ohne Schwellen und mit Haltegriffen. Der Berater hat sich viel Zeit genommen und alles genau erklärt. Hat sogar bei den KfW-Anträgen geholfen. Jetzt kann Mama wieder alleine duschen - das war uns das Wichtigste. Danke!", datePublished: "2024-09-15", location: "München-Sendling" },
            { author: "Klaus D.", rating: 4, reviewBody: "Badezimmer komplett neu gemacht. Qualität ist top, da gibt's nichts zu meckern. Einziger Punkt: Die Handwerker waren manchmal erst um 9 da statt um 8. Ansonsten aber sehr zufrieden, die Fliesen sehen toll aus.", datePublished: "2024-08-20", location: "München-Neuhausen" }
          ]
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
                  Badsanierung vom Partnernetzwerk
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

        <CustomerStories 
          stories={badStories}
          title="Badsanierung in München: Echte Erfolgsgeschichten"
          subtitle="So haben wir anderen Münchnern zu ihrem Traumbad verholfen"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
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

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Badsanierung in München - Vom Altbad zum Traumbad
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Der Ablauf Ihrer Badsanierung</h3>
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Warum eine professionelle Badsanierung sich lohnt</h3>
              <p>
                Ein modernes Bad steigert nicht nur Ihre Lebensqualität, sondern auch den Wert Ihrer Immobilie um durchschnittlich 
                5-10%. Besonders barrierefreie Bäder sind zukunftssicher und werden mit KfW-Förderungen unterstützt. Wir beraten 
                Sie gerne zu allen Fördermöglichkeiten.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Alles aus einer Hand</h3>
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

        <section className="pt-8 pb-4 bg-muted/30">
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
                  <a href="tel:+4915212274043" data-testid="button-call-bad-cta">
                    <Phone className="w-5 h-5 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" className="bg-emerald-600 text-white border-emerald-700" asChild>
                  <a href="https://wa.me/4915212274043?text=Hallo%2C%20ich%20bitte%20um%20R%C3%BCckruf%20zum%20Thema%20Badsanierung." target="_blank" rel="noopener noreferrer">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    Rückruf bitte
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <RelatedServices currentService="bad" />

        <section className="py-12 bg-background">
          <div className="max-w-2xl mx-auto px-4 lg:px-8">
            <CallbackForm />
          </div>
        </section>

        <FreeConsultationBanner variant="compact" className="mx-4 lg:mx-8 mb-8 max-w-7xl lg:mx-auto" />
      </main>
      <Footer />
      <AIChatWidget serviceCategory="bad" />
    </div>
  );
}
