import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import FAQ from "@/components/FAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { sanitaerStories } from "@/components/CustomerStories";
import TrustSignals from "@/components/TrustSignals";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Droplets, 
  Phone, 
  CheckCircle2, 
  Wrench,
  ShowerHead,
  PipetteIcon,
  Gauge,
  Clock,
  Shield,
  Award,
  Star
} from "lucide-react";
import plumberImage1 from "@assets/stock_images/professional_plumber_be6e9e4a.jpg";
import plumberImage2 from "@assets/stock_images/professional_plumber_59cd80be.jpg";
import ServiceBooking from "@/components/ServiceBooking";

export default function SanitaerPage() {
  const services = [
    {
      icon: Droplets,
      title: "Wasserinstallation",
      description: "Professionelle Installation von Wasserleitungen, Anschlüssen und Armaturen nach aktuellen Standards."
    },
    {
      icon: ShowerHead,
      title: "Sanitäranlagen",
      description: "Montage und Anschluss von WCs, Waschbecken, Duschen, Badewannen und Bidets."
    },
    {
      icon: PipetteIcon,
      title: "Abwassertechnik",
      description: "Verlegung und Reparatur von Abwasserleitungen, Rohrreinigung und Kanalarbeiten."
    },
    {
      icon: Wrench,
      title: "Reparaturservice",
      description: "Schnelle Reparatur von tropfenden Wasserhähnen, undichten Rohren und defekten Armaturen."
    },
    {
      icon: Gauge,
      title: "Druckprüfung",
      description: "Professionelle Dichtheitsprüfung und Drucktests für Wasserleitungen."
    },
    {
      icon: Shield,
      title: "Wartung",
      description: "Regelmäßige Wartung Ihrer Sanitäranlagen für langfristige Funktionssicherheit."
    }
  ];

  const benefits = [
    "Meisterbetrieb mit über 20 Jahren Erfahrung",
    "Festpreisgarantie ohne versteckte Kosten",
    "Schnelle Terminvergabe - oft am selben Tag",
    "Nur hochwertige Markenprodukte",
    "Saubere Arbeit mit Schutzmaterialien",
    "2 Jahre Gewährleistung auf alle Arbeiten"
  ];

  const faqItems = [
    {
      question: "Wie schnell können Sie bei einem Wasserrohrbruch in München vor Ort sein?",
      answer: "Bei einem Notfall wie Wasserrohrbruch sind wir in der Regel innerhalb von 30-45 Minuten bei Ihnen in München. Unser 24/7 Notdienst steht rund um die Uhr bereit - auch an Wochenenden und Feiertagen."
    },
    {
      question: "Was kostet eine Sanitärinstallation in München?",
      answer: "Die Kosten hängen vom Umfang der Arbeiten ab. Kleine Reparaturen beginnen ab 89€, größere Installationen werden nach Aufwand berechnet. Wir bieten Ihnen vorab einen transparenten Festpreis - ohne versteckte Kosten."
    },
    {
      question: "Arbeiten Sie auch mit Markenarmaturen wie Grohe oder Hansgrohe?",
      answer: "Ja, wir installieren und reparieren Armaturen aller führenden Hersteller wie Grohe, Hansgrohe, Geberit, Villeroy & Boch und viele weitere. Wir beraten Sie gerne zur passenden Auswahl."
    },
    {
      question: "Bieten Sie auch Wartungsverträge für Sanitäranlagen an?",
      answer: "Ja, wir bieten maßgeschneiderte Wartungsverträge für private Haushalte und Gewerbe. Regelmäßige Wartung beugt teuren Schäden vor und erhält den Wert Ihrer Sanitäranlagen."
    },
    {
      question: "Können Sie auch verstopfte Abflüsse reinigen?",
      answer: "Selbstverständlich! Wir beseitigen Verstopfungen in Waschbecken, Duschen, WCs und Abwasserleitungen. Mit professioneller Ausrüstung lösen wir auch hartnäckige Verstopfungen schnell und sauber."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Sanitärinstallation München | 24h Notdienst | AquaPro24"
        description="Professionelle Sanitärinstallation in München. Wasserinstallation, Rohrreinigung, Armaturen-Reparatur. 24/7 Notdienst, Festpreise, Meisterbetrieb seit 1985."
        canonical="https://aquapro24.de/sanitaer"
        keywords="Sanitär München, Wasserinstallation, Klempner München, Rohrreinigung, Sanitärnotdienst, Wasserleitungen, Armaturen"
        serviceSchema={{
          name: "Sanitärinstallation München",
          description: "Professionelle Sanitärinstallation und Wasserinstallation in München und Umgebung",
          serviceType: "Plumbing",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing"]
        }}
      />
      <Header />
      
      <main className="flex-1">
        <section className="relative py-6 md:pt-8 pb-4 bg-gradient-to-br from-secondary/10 via-background to-accent/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div>
                <Badge variant="secondary" className="mb-4">
                  <Droplets className="w-3 h-3 mr-1" />
                  Sanitär-Fachbetrieb München
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                  Sanitärinstallation & Wasserinstallation München
                </h1>
                <p className="text-lg text-muted-foreground mb-4">
                  <strong>Tropft der Wasserhahn? Verstopfter Abfluss? Rohrbruch?</strong> Wir kennen diese 
                  Situationen und wissen, wie stressig sie sein können.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  Als Münchner Meisterbetrieb mit über 20 Jahren Erfahrung lösen wir Ihre Sanitärprobleme 
                  schnell, sauber und zum Festpreis. Stellen Sie sich vor: In wenigen Stunden ist alles 
                  repariert und Sie können sich wieder auf die wichtigen Dinge konzentrieren.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4989123456789" data-testid="button-call-sanitaer">
                      <Phone className="w-4 h-4 mr-2" />
                      Jetzt anrufen
                    </a>
                  </Button>
                  <ServiceBooking 
                    serviceType="sanitaer" 
                    buttonText="Online Termin buchen"
                    buttonSize="lg"
                  />
                </div>
              </div>
              <div className="relative space-y-4">
                <div className="relative rounded-2xl overflow-hidden shadow-2xl">
                  <img 
                    src={plumberImage1} 
                    alt="Professioneller Sanitär-Fachmann bei der Arbeit" 
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Meisterbetrieb
                    </Badge>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-6">
                  <div className="rounded-xl overflow-hidden shadow-lg">
                    <img 
                      src={plumberImage2} 
                      alt="Sanitärinstallation in München" 
                      className="w-full h-32 object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="bg-secondary/10 rounded-xl p-4 flex flex-col justify-center">
                    <div className="text-2xl font-bold text-secondary">20+ Jahre</div>
                    <div className="text-sm text-muted-foreground">Erfahrung in München</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustSignals variant="compact" />

        <NLPSection
          problemTitle="Kennen Sie diese Probleme?"
          problems={[
            "Der Wasserhahn tropft seit Wochen und die Wasserrechnung steigt",
            "Der Abfluss ist verstopft und nichts hilft mehr",
            "Sie warten ewig auf Handwerkertermine",
            "Unklare Preise und böse Überraschungen auf der Rechnung",
            "Handwerker, die keine Rücksicht auf Ihre Wohnung nehmen"
          ]}
          solutionTitle="So lösen wir das für Sie"
          solutions={[
            "Schnelle Terminvergabe - oft noch am selben Tag",
            "Transparente Festpreise vor Arbeitsbeginn",
            "Saubere Arbeit mit Schutzmaterialien für Ihre Böden",
            "Meisterqualität mit 2 Jahren Gewährleistung",
            "Pünktlichkeit und Zuverlässigkeit garantiert"
          ]}
          futureState="...Ihr Sanitärproblem ist gelöst, die Arbeit wurde sauber und professionell erledigt, und Sie haben einen fairen Preis bezahlt. So arbeiten wir - Tag für Tag für unsere Münchner Kunden."
          authorityText="Meisterbetrieb mit über 2.800 zufriedenen Kunden in München"
          urgencyText="Heute noch freie Termine verfügbar"
          transformationSteps={[
            "Sie rufen an oder schreiben uns - wir sind sofort für Sie da und hören Ihnen zu.",
            "Wir kommen zum vereinbarten Termin, analysieren das Problem und nennen Ihnen den Festpreis.",
            "Die Arbeit wird sauber erledigt, Sie zahlen nur den vereinbarten Preis und sind zufrieden."
          ]}
        />

        <CustomerStories 
          stories={sanitaerStories}
          title="Echte Geschichten von Münchner Kunden"
          subtitle="Diese Situationen kennen viele - lesen Sie, wie wir helfen konnten"
        />

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Unsere Sanitär-Leistungen in München
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vom kleinen Reparaturauftrag bis zur kompletten Neuinstallation - 
                wir sind Ihr zuverlässiger Partner für alle Sanitärarbeiten in München.
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
                    <h3 className="font-bold text-lg">Meisterbetrieb</h3>
                    <p className="text-muted-foreground text-sm">Qualität vom Fachmann</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Schnelle Terminvergabe</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span>2 Jahre Gewährleistung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Droplets className="w-4 h-4 text-muted-foreground" />
                    <span>Markenprodukte</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Professionelle Sanitärinstallation in München - Ihr Meisterbetrieb
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Als Münchner Meisterbetrieb für Sanitärinstallation sind wir seit über 20 Jahren Ihr zuverlässiger Partner 
                für alle Arbeiten rund um Wasser, Abwasser und Sanitäranlagen. Ob Sie einen tropfenden Wasserhahn reparieren 
                lassen möchten, eine komplett neue Wasserinstallation benötigen oder mitten in der Nacht einen Rohrbruch haben - 
                wir sind für Sie da.
              </p>
              <p>
                Unsere ausgebildeten Sanitärfachkräfte arbeiten nach den höchsten handwerklichen Standards und verwenden 
                ausschließlich hochwertige Markenprodukte von Herstellern wie Grohe, Hansgrohe, Geberit und Villeroy & Boch. 
                Das bedeutet für Sie: langlebige Qualität, die jahrzehntelang funktioniert.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Was uns von anderen Sanitärbetrieben unterscheidet</h3>
              <p>
                Bei uns bekommen Sie keine bösen Überraschungen. Bevor wir mit der Arbeit beginnen, analysieren wir das Problem 
                gründlich und nennen Ihnen einen verbindlichen Festpreis. Dieser Preis gilt - auch wenn die Arbeit länger dauert 
                als geplant. Zusätzlich achten wir penibel auf Sauberkeit: Wir legen Schutzfolien aus, tragen Überschuhe und 
                hinterlassen Ihre Wohnung so sauber, wie wir sie vorgefunden haben.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Unser Leistungsspektrum im Bereich Sanitär</h3>
              <p>
                Wir decken das gesamte Spektrum der Sanitärtechnik ab: Von der Installation neuer Wasserleitungen über die 
                Montage von Sanitärobjekten wie WCs, Waschbecken, Duschen und Badewannen bis hin zur professionellen 
                Rohrreinigung und Abflussentstopfung. Auch die regelmäßige Wartung Ihrer Sanitäranlagen gehört zu unserem 
                Service - denn Vorsorge ist günstiger als Reparatur.
              </p>
              <p>
                Für Notfälle wie Rohrbrüche oder schwere Wasserschäden bieten wir einen 24/7-Notdienst an. In der Regel sind 
                wir innerhalb von 30-45 Minuten bei Ihnen in München und stoppen den Schaden, bevor er größer wird. Unsere 
                Notdienst-Pauschale ist transparent und fair - ohne versteckte Kosten.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Unsere Garantie für Sie</h3>
              <p>
                Auf alle unsere Arbeiten geben wir 2 Jahre Gewährleistung. Sollte in dieser Zeit etwas mit unserer Arbeit 
                nicht stimmen, kommen wir kostenlos zurück und beheben das Problem. Denn wir stehen zu unserer Arbeit - 
                mit unserem guten Namen und mit unserer Garantie.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Sanitärinstallation" 
          highlightAreas={["Schwabing", "Maxvorstadt", "Haidhausen"]}
        />

        <FAQ 
          items={faqItems}
          title="Häufige Fragen zur Sanitärinstallation"
          subtitle="Hier finden Sie Antworten auf die wichtigsten Fragen unserer Kunden in München"
        />

        <section className="py-10 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sanitär-Problem in München? Wir helfen sofort!
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Ob tropfender Wasserhahn, verstopfter Abfluss oder neue Sanitärinstallation - 
              rufen Sie uns an und wir kümmern uns darum. Über 847 zufriedene Kunden in München.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="outline" className="bg-background text-foreground" asChild>
                <a href="tel:+4989123456789" data-testid="button-call-sanitaer-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  089 123 456 789
                </a>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <Footer />
      <ChatWidget serviceCategory="sanitaer" />
    </div>
  );
}
