import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { sanitaerStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  PipetteIcon, 
  Phone, 
  CheckCircle2, 
  Wrench,
  ShowerHead,
  Droplets,
  Clock,
  Shield,
  Award,
  Star,
  MessageCircle,
  Zap,
  Camera,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import drainImage1 from "@assets/generated_images/clean_modern_drain_grate.png";
import drainImage2 from "@assets/generated_images/drain_cleaning_equipment.png";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

export default function RohrreinigungPage() {
  const services = [
    {
      icon: PipetteIcon,
      title: "Abflussreinigung",
      description: "Professionelle Reinigung verstopfter Abflüsse in Küche, Bad und WC mit Spezialgeräten."
    },
    {
      icon: ShowerHead,
      title: "Duschabfluss",
      description: "Beseitigung von Haaren, Seifenresten und Kalkablagerungen in Duschabflüssen."
    },
    {
      icon: Droplets,
      title: "Küchenabfluss",
      description: "Entfernung von Fettrückständen und Essensresten aus Küchenabflüssen."
    },
    {
      icon: Camera,
      title: "Kamerainspektion",
      description: "Moderne Kamerafahrt zur Lokalisierung von Verstopfungen und Rohrschäden."
    },
    {
      icon: Zap,
      title: "Hochdruckspülung",
      description: "Intensive Rohrreinigung mit Hochdruckspülgerät für hartnäckige Verstopfungen."
    },
    {
      icon: Wrench,
      title: "Kanalreinigung",
      description: "Professionelle Reinigung von Hauptkanälen und Fallrohren im Gebäude."
    }
  ];

  const benefits = [
    "Schnelle Hilfe - oft innerhalb 60 Minuten vor Ort",
    "Festpreisgarantie ohne versteckte Kosten",
    "Modernste Technik: Kameras und Hochdruckspülung",
    "24/7 Notdienst auch an Wochenenden",
    "Saubere Arbeit ohne Schmutz in Ihrer Wohnung",
    "Garantie auf dauerhafte Beseitigung"
  ];

  const faqItems = [
    {
      question: "Wie schnell können Sie bei einem verstopften Abfluss in München vor Ort sein?",
      answer: "Bei Verstopfungen sind wir in der Regel innerhalb von 60-90 Minuten bei Ihnen in München. Unser Notdienst ist 24/7 erreichbar - auch an Wochenenden und Feiertagen."
    },
    {
      question: "Was kostet eine Rohrreinigung in München?",
      answer: "Eine einfache Abflussreinigung beginnt ab 79€. Der genaue Preis hängt von der Art der Verstopfung ab. Wir nennen Ihnen vor Arbeitsbeginn einen verbindlichen Festpreis - ohne versteckte Kosten."
    },
    {
      question: "Funktioniert die Rohrreinigung auch bei hartnäckigen Verstopfungen?",
      answer: "Ja, mit unserer professionellen Ausrüstung lösen wir auch die hartnäckigsten Verstopfungen. Wir arbeiten mit Spiralen, Hochdruckspülgeräten und Kamerainspektionen - da bleibt keine Verstopfung ungelöst."
    },
    {
      question: "Kann ich selbst versuchen, die Verstopfung zu lösen?",
      answer: "Bei leichten Verstopfungen können Hausmittel wie heißes Wasser mit Spülmittel oder ein Pümpel helfen. Vermeiden Sie aber aggressive Chemikalien - sie können Rohre beschädigen. Wenn nichts hilft, rufen Sie uns an."
    },
    {
      question: "Nutzen Sie Chemikalien zur Rohrreinigung?",
      answer: "Nein, wir arbeiten fast ausschließlich mechanisch mit Spiralen und Hochdruck. Das ist effektiver, schonender für Ihre Rohre und umweltfreundlicher als chemische Reiniger."
    },
    {
      question: "Wie kann ich Verstopfungen vorbeugen?",
      answer: "Gießen Sie kein Fett in den Abfluss, verwenden Sie Haarsiebe in der Dusche und lassen Sie regelmäßig heißes Wasser laufen. Bei wiederkehrenden Problemen empfehlen wir eine professionelle Wartungsreinigung."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Abfluss verstopft? Rohrreinigung München ab 79€"
        description="Wasser staut sich in Küche oder Bad? Wir lösen die Verstopfung professionell und schnell. Festpreis ab 79€. Heute noch frei. Jetzt anrufen."
        canonical="https://aquapro24.de/rohrreinigung"
        keywords="Rohrreinigung München, Abfluss verstopft München, Kanalreinigung München, Abflussreinigung München, verstopfte Toilette München, Rohrreinigung Notdienst München, Abfluss frei bekommen München, Küchenabfluss verstopft München, Dusche verstopft München, WC verstopft München, Hochdruckspülung München, Rohrfrei München"
        aiSummary="AquaPro24 Rohrreinigung München: 24/7 Notdienst, 60 Min. Reaktionszeit. Verstopfter Abfluss in Küche, Bad, WC? Hochdruckspülung und Kamerainspektion. Festpreis ab 79€. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Rohrreinigung", url: "https://aquapro24.de/rohrreinigung" }
        ]}
        serviceSchema={{
          name: "AquaPro24 Rohrreinigung München",
          description: "Rohrreinigung und Abflussreinigung in München. 60 Min. Reaktionszeit, Festpreis, 24/7 erreichbar.",
          serviceType: "DrainCleaning",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Maxvorstadt", "Haidhausen", "Neuhausen", "Trudering", "Laim", "Giesing", "Moosach"],
          offers: [
            { name: "Abflussreinigung", description: "Beseitigung von Verstopfungen", priceRange: "ab 79€" },
            { name: "Hochdruckspülung", description: "Intensive Rohrreinigung", priceRange: "ab 149€" },
            { name: "Kamerainspektion", description: "Rohrinspektion mit Kamera", priceRange: "ab 99€" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 89
          },
          reviews: [
            { author: "Peter M.", rating: 5, reviewBody: "Sonntagnacht war unser WC komplett verstopft. Hab angerufen und eine Stunde später war der Techniker da. Hat alles schnell erledigt und der Preis war fair. Top Service!", datePublished: "2024-11-20", location: "München-Bogenhausen" },
            { author: "Lisa W.", rating: 5, reviewBody: "Die Küchenspüle war seit Tagen verstopft, nichts hat geholfen. Der Monteur kam am selben Tag und hat mit der Spirale alles freigemacht. Sehr sauber gearbeitet!", datePublished: "2024-10-15", location: "München-Schwabing" }
          ]
        }}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 md:pt-8 pb-4 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <PipetteIcon className="w-3 h-3 mr-1" />
                  Rohrreinigung München
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Rohrreinigung & Abflussreinigung München
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Abfluss verstopft? Wasser steht in der Dusche oder Spüle?</strong> Das ist nicht nur 
                  nervig, sondern auch unhygienisch. Aber keine Sorge - wir lösen das Problem schnell.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Mit modernster Technik - von der Spirale bis zur Hochdruckspülung - beseitigen wir jede 
                  Verstopfung. Und das oft innerhalb einer Stunde nach Ihrem Anruf.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4915212274043" data-testid="button-call-rohrreinigung">
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <ServiceBooking 
                    serviceType="sanitaer" 
                    buttonText="24h Buchungstermin"
                    buttonSize="lg"
                  />
                </div>
              </div>
              <div className="relative space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={drainImage1} 
                    alt="Professionelle Rohrreinigung in München" 
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      60 Min. Reaktionszeit
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={drainImage2} 
                      alt="Abflussreinigung mit Spezialgeräten" 
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-2xl font-bold text-secondary">ab 79€</div>
                    <div className="text-sm text-muted-foreground">Festpreis Rohrreinigung</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <NLPSection
          problemTitle="Kennen Sie diese Probleme?"
          problems={[
            "Das Wasser in der Dusche läuft nicht mehr ab",
            "Die Küchenspüle ist verstopft und stinkt",
            "Das WC spült nicht richtig oder ist komplett dicht",
            "Chemische Rohrreiniger haben nicht geholfen",
            "Das Gurgelgeräusch im Abfluss wird immer lauter"
          ]}
          solutionTitle="So lösen wir das für Sie"
          solutions={[
            "Schnelle Hilfe - oft innerhalb 60 Minuten vor Ort",
            "Modernste Technik ohne aggressive Chemikalien",
            "Gründliche Reinigung - nicht nur oberflächlich",
            "Kamerainspektion bei wiederkehrenden Problemen",
            "Tipps zur Vorbeugung für die Zukunft"
          ]}
          futureState="...Ihr Abfluss läuft wieder frei, das Problem ist nachhaltig gelöst und Sie wissen, wie Sie Verstopfungen in Zukunft vermeiden können. So einfach kann es sein."
          authorityText="Über 2.800 gelöste Verstopfungen in München"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Sie rufen an und schildern das Problem - wir kommen schnellstmöglich.",
            "Wir analysieren die Verstopfung und nennen Ihnen den Festpreis.",
            "Mit der passenden Technik lösen wir das Problem - sauber und dauerhaft."
          ]}
        />

        <ServiceAdvisor serviceType="rohrreinigung" />

        <CustomerStories 
          stories={sanitaerStories}
          title="Echte Geschichten von Münchner Kunden"
          subtitle="Diese Situationen kennen viele - lesen Sie, wie wir helfen konnten"
        />

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Unsere Rohrreinigung-Leistungen in München
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Egal ob Küche, Bad oder Keller - wir haben die richtige Lösung 
                für jede Art von Verstopfung.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-secondary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                    <p className="text-muted-foreground text-sm">{service.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-10 md:pt-8 pb-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-6">
                  Warum Münchner uns vertrauen
                </h2>
                <div className="space-y-4">
                  {benefits.map((benefit, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                      <span>{benefit}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-card rounded-lg p-8 border">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center">
                    <Award className="w-8 h-8 text-secondary" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Professionelle Ausrüstung</h3>
                    <p className="text-muted-foreground text-sm">Modernste Technik für beste Ergebnisse</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>60 Minuten Reaktionszeit</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span>Garantie auf Beseitigung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Camera className="w-4 h-4 text-muted-foreground" />
                    <span>Kamerainspektion verfügbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Professionelle Rohrreinigung in München - Ihr Notdienst
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Ein verstopfter Abfluss kommt immer zum ungünstigsten Zeitpunkt - das wissen wir aus Erfahrung. 
                Deshalb bieten wir Ihnen einen schnellen und zuverlässigen Rohrreinigungsservice in ganz München, 
                der in der Regel innerhalb einer Stunde bei Ihnen ist.
              </p>
              <p>
                Unsere Fachkräfte arbeiten mit modernster Technik: Flexible Spiralen für einfache Verstopfungen, 
                Hochdruckspülgeräte für hartnäckige Ablagerungen und Kameras zur genauen Lokalisierung des Problems. 
                So finden wir immer die richtige Lösung - ohne unnötige Kosten.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Typische Ursachen für verstopfte Abflüsse</h3>
              <p>
                In der Küche sind es meist Fettrückstände und Essensreste, die sich im Rohr ablagern. In Bad und 
                Dusche sammeln sich Haare, Seifenreste und Kalk. Im WC führen oft falsch entsorgte Hygieneartikel 
                zu Verstopfungen. Wir kennen alle diese Probleme und lösen sie schnell und sauber.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Nachhaltiger als chemische Reiniger</h3>
              <p>
                Anders als chemische Rohrreiniger, die oft nur oberflächlich wirken und Ihre Rohre angreifen können, 
                arbeiten wir mechanisch. Das ist gründlicher, schonender und umweltfreundlicher. Bei wiederkehrenden 
                Problemen empfehlen wir eine Kamerainspektion, um die Ursache dauerhaft zu beheben.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Rohrreinigung" 
          highlightAreas={["Schwabing", "Sendling", "Bogenhausen"]}
        />

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zur Rohrreinigung"
        />

        <section className="py-10 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Abfluss verstopft? Wir helfen sofort!
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Ob Küche, Bad oder WC - bei verstopften Abflüssen sind wir in 60 Minuten da.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-rohrreinigung-cta">
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

        <RelatedServices currentService="sanitaer" />
      </main>

      <Footer />
      <AIChatWidget serviceCategory="sanitaer" />
    </div>
  );
}
