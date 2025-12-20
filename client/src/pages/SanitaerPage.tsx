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
  Star,
  MessageCircle,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import plumberImage1 from "@assets/stock_images/professional_plumber_be6e9e4a.jpg";
import plumberImage2 from "@assets/stock_images/professional_plumber_59cd80be.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

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
    "Partnernetzwerk mit über 20 Jahren Erfahrung",
    "Festpreisgarantie ohne versteckte Kosten",
    "Schnelle Terminvergabe - oft am selben Tag",
    "Nur hochwertige Markenprodukte",
    "Saubere Arbeit mit Schutzmaterialien",
    "2 Jahre Gewährleistung auf alle Arbeiten"
  ];

  const faqItems = [
    {
      question: "Wie schnell können Sie bei einem Wasserrohrbruch in München vor Ort sein?",
      answer: "Bei einem Notfall wie Wasserrohrbruch sind wir in der Regel innerhalb von 60-90 Minuten bei Ihnen in München. Unser 24/7 Notdienst steht rund um die Uhr bereit - auch an Wochenenden und Feiertagen."
    },
    {
      question: "Was kostet eine Sanitärinstallation in München?",
      answer: "Die Kosten hängen vom Umfang der Arbeiten ab. Kleine Reparaturen beginnen ab 92€, größere Installationen werden nach Aufwand berechnet. Wir bieten Ihnen vorab einen transparenten Festpreis - ohne versteckte Kosten."
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
    },
    {
      question: "Geben Sie Garantie auf Ihre Sanitärarbeiten?",
      answer: "Ja, auf alle unsere Arbeiten geben wir 2 Jahre Gewährleistung. Bei Problemen kommen wir kostenlos zurück und beheben den Mangel. Auf eingebaute Materialien gelten zusätzlich die Herstellergarantien."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Abfluss verstopft? Rohr undicht? Sanitär München hilft"
        description="Wasser läuft nicht ab oder tropft ständig? Wir beheben Ihr Sanitär-Problem noch heute. Festpreis ab 92€, transparent und fair. Jetzt Termin sichern."
        canonical="https://aquapro24.de/sanitaer"
        keywords="Sanitär München, Klempner München, Klempner Notdienst München, Rohrbruch München, Sanitär Notdienst, Rohrreinigung München, Abfluss verstopft München, Wasserschaden München, Installateur München, Sanitär Schwabing, Klempner Bogenhausen, Sanitär Sendling, Klempner Pasing, Sanitär Maxvorstadt, Klempner Haidhausen, Sanitär Neuhausen, Klempner Trudering, Sanitär Laim, Klempner Giesing, Sanitär Moosach, Klempner Milbertshofen, Sanitär Nymphenburg, Klempner Perlach, Sanitär Solln, Klempner Hadern, Sanitär Allach, Klempner Aubing, Sanitär Feldmoching, Klempner Isarvorstadt, Sanitär Lehel, Klempner Westpark, Wasserhahn tropft München, undichtes Rohr München, WC verstopft München, Dusche verstopft München, Wasserleitung reparieren München, Sanitär Notdienst Schwabing, Klempner Notdienst Bogenhausen"
        aiSummary="AquaPro24 Sanitär-Notdienst München: 24/7 erreichbar, 45 Min. Reaktionszeit. Rohrbruch, verstopfter Abfluss, Wasserinstallation. Festpreise ab 92€, alle Münchner Stadtteile. 2.847+ zufriedene Kunden. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Sanitär", url: "https://aquapro24.de/sanitaer" }
        ]}
        serviceSchema={{
          name: "AquaPro24 Sanitärservice München",
          description: "Sanitär-Notdienst München: Rohrbruch, Verstopfung, Wasserschaden. 45 Min. Reaktionszeit, Festpreis, 24/7 erreichbar.",
          serviceType: "Plumbing",
          areaServed: ["München", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Maxvorstadt", "Haidhausen", "Neuhausen", "Trudering", "Laim", "Giesing", "Moosach", "Milbertshofen"],
          offers: [
            { name: "Wasserinstallation", description: "Professionelle Installation von Wasserleitungen", priceRange: "ab 92€" },
            { name: "Rohrreinigung", description: "Beseitigung von Verstopfungen", priceRange: "ab 81€" },
            { name: "Armaturen-Montage", description: "Einbau von Markenarmaturen", priceRange: "ab 124€" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          },
          reviews: [
            { author: "Michael S.", rating: 5, reviewBody: "Hatte am Sonntagmorgen einen Wasserrohrbruch im Keller. Hab sofort angerufen und der Techniker war tatsächlich nach 45 Minuten da. Hat alles schnell abgedichtet und am nächsten Tag kam er nochmal zum richtigen Reparieren. Rechnung war fair, keine versteckten Kosten. Kann ich nur empfehlen!", datePublished: "2024-11-15", location: "München-Schwabing" },
            { author: "Sandra K.", rating: 5, reviewBody: "Wir haben unsere komplette Küche renoviert und brauchten neue Wasserleitungen. Die Beratung war super - hat uns auch erklärt, was wir selbst machen können, um Kosten zu sparen. Die Jungs haben sauber gearbeitet und hinterher alles aufgeräumt. Preis war wie besprochen, keine Überraschungen.", datePublished: "2024-10-22", location: "München-Haidhausen" },
            { author: "Thomas B.", rating: 4, reviewBody: "Verstopfter Abfluss in der Dusche. Kam am gleichen Tag vorbei. Hat ein bisschen länger gedauert als gedacht, aber am Ende war alles frei. Preis war okay, vielleicht etwas teurer als erwartet, aber dafür war es auch Samstagabend.", datePublished: "2024-09-18", location: "München-Sendling" }
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
                  Als Münchner Partnernetzwerk mit über 20 Jahren Erfahrung lösen wir Ihre Sanitärprobleme 
                  schnell, sauber und zum Festpreis. Stellen Sie sich vor: In wenigen Stunden ist alles 
                  repariert und Sie können sich wieder auf die wichtigen Dinge konzentrieren.
                </p>
                <div className="flex flex-wrap gap-4">
                  <Button size="lg" asChild>
                    <a href="tel:+4915212274043" data-testid="button-call-sanitaer">
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
                    src={plumberImage1} 
                    alt="Professioneller Sanitär-Fachmann bei der Arbeit" 
                    className="w-full h-72 object-cover"
                    loading="lazy"
                  />
                  <div className="absolute top-3 right-3">
                    <Badge className="bg-primary text-primary-foreground shadow-lg">
                      <Star className="w-3 h-3 mr-1" />
                      Geprüfte Partner
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

        <TrustBar />

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
          authorityText="Partnernetzwerk mit über 2.800 zufriedenen Kunden in München"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Sie rufen an oder schreiben uns - wir sind sofort für Sie da und hören Ihnen zu.",
            "Wir kommen zum vereinbarten Termin, analysieren das Problem und nennen Ihnen den Festpreis.",
            "Die Arbeit wird sauber erledigt, Sie zahlen nur den vereinbarten Preis und sind zufrieden."
          ]}
        />

        <ServiceAdvisor serviceType="sanitaer" />

        <CustomerStories 
          stories={sanitaerStories}
          title="Echte Geschichten von Münchner Kunden"
          subtitle="Diese Situationen kennen viele - lesen Sie, wie wir helfen konnten"
        />

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Sanitär München: Leistungen & Festpreise
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
                  Klempner München: Warum uns über 2.800 Kunden vertrauen
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
                    <h3 className="font-bold text-lg">Geprüfte Partner</h3>
                    <p className="text-muted-foreground text-sm">Qualität vom Fachbetrieb</p>
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
              Sanitärinstallation München: Kosten, Ablauf & Garantie
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Als Münchner Partnernetzwerk für Sanitärinstallation sind wir seit über 20 Jahren Ihr zuverlässiger Partner 
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
                wir ab 60 Minuten bei Ihnen in München und stoppen den Schaden, bevor er größer wird. Unsere 
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

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zur Sanitärinstallation"
        />

        <section className="py-10 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sanitär Notdienst München – Jetzt Termin vereinbaren
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Ob tropfender Wasserhahn, verstopfter Abfluss oder neue Sanitärinstallation - 
              wir kümmern uns darum. Über 847 zufriedene Kunden in München.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-sanitaer-cta">
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
