import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import BackButton from "@/components/BackButton";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { sanitaerStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import EmergencyProcess from "@/components/EmergencyProcess";
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
      question: "Was kostet ein Sanitär-Notdienst in München?",
      answer: "Unser Sanitär-Notdienst in München arbeitet mit transparenten Festpreisen. Die Anfahrtspauschale beträgt 49€, einfache Reparaturen starten ab 92€. Vor Arbeitsbeginn nennen wir Ihnen den verbindlichen Gesamtpreis - ohne versteckte Kosten oder Nachforderungen. Bei AquaPro24 zahlen Sie nur, was vorher vereinbart wurde."
    },
    {
      question: "Wie schnell ist der Sanitär-Notdienst in München vor Ort?",
      answer: "Bei Notfällen wie Rohrbruch oder Wasseraustritt sind wir in der Regel innerhalb von 60 Minuten bei Ihnen in München. Unser Einsatzgebiet umfasst alle Münchner Stadtteile: Schwabing, Bogenhausen, Sendling, Neuhausen, Giesing, Pasing, Laim, Trudering und weitere. Auch nachts und am Wochenende erreichbar unter 0152 12274043."
    },
    {
      question: "Gibt es einen Festpreis für Sanitärarbeiten?",
      answer: "Ja, bei AquaPro24 erhalten Sie immer einen verbindlichen Festpreis vor Arbeitsbeginn. Unser Techniker analysiert das Problem vor Ort und nennt Ihnen den Gesamtpreis. Dieser Preis gilt - auch wenn die Arbeit länger dauert als geplant. Keine Überraschungen, keine versteckten Kosten."
    },
    {
      question: "Arbeitet der Sanitär-Notdienst auch nachts und am Wochenende?",
      answer: "Ja, unser 24/7 Sanitär-Notdienst ist rund um die Uhr erreichbar - 365 Tage im Jahr. Auch an Feiertagen, Samstagen und Sonntagen sowie nachts zwischen 22 und 6 Uhr sind wir für Sie da. Rufen Sie uns an: 0152 12274043. Für Notfälle wie Rohrbruch, Wasseraustritt oder schwere Verstopfungen."
    },
    {
      question: "Welche Sanitär-Leistungen bieten Sie in München an?",
      answer: "Wir bieten das komplette Sanitär-Spektrum: Rohrbruch-Reparatur, Abfluss-Entstopfung, WC-Installation, Waschbecken-Montage, Armaturenaustausch, Wasserleitung verlegen, Warmwasser-Reparatur und Badsanierung. Unsere Installateure arbeiten mit allen Marken: Grohe, Hansgrohe, Geberit, Villeroy & Boch."
    },
    {
      question: "Wie läuft ein Sanitär-Einsatz bei AquaPro24 ab?",
      answer: "1. Sie rufen an (0152 12274043) und schildern das Problem. 2. Wir vereinbaren einen Termin - bei Notfällen sofort. 3. Unser Techniker kommt pünktlich und analysiert die Situation. 4. Sie erhalten einen Festpreis vor Arbeitsbeginn. 5. Die Arbeit wird sauber erledigt, Sie zahlen nur den vereinbarten Preis."
    },
    {
      question: "Warum sollte ich AquaPro24 für Sanitärarbeiten wählen?",
      answer: "AquaPro24 bietet: Festpreisgarantie ohne Nachforderungen, 60-Minuten-Reaktionszeit bei Notfällen, 2 Jahre Gewährleistung auf alle Arbeiten, geprüfte Fachhandwerker aus München, saubere Arbeit mit Oberflächenschutz, und über 2.800 zufriedene Kunden in München. Wir sind Ihr lokaler Partner seit 2005."
    },
    {
      question: "Geben Sie Garantie auf Sanitärarbeiten in München?",
      answer: "Ja, auf alle unsere Sanitärarbeiten geben wir 2 Jahre Gewährleistung. Sollte innerhalb dieser Zeit etwas mit unserer Arbeit nicht stimmen, kommen wir kostenlos zurück und beheben das Problem. Zusätzlich gelten die Herstellergarantien auf eingebaute Materialien und Armaturen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Abfluss verstopft München | Rohr undicht | Leckage beheben"
        description="Abfluss verstopft oder Rohr undicht in München? Leckage beheben durch Profis mit Festpreis ab 92€. Schnelle Termine, faire Abrechnung."
        canonical="https://aquapro24.de/sanitaer"
        keywords="Sanitär München, Sanitärinstallateur München, Klempner München, Installateur München, Sanitärtechniker München, Sanitärfirma München, Sanitär Notdienst München, Klempner Notdienst München, Armaturen austauschen München, Armaturen montieren München, Wasserhahn wechseln München, Wasserhahn austauschen München, Wasserhahn reparieren München, Wasserhahn tropft München, Mischbatterie austauschen München, Küchenarmatur montieren München, Badarmatur einbauen München, Rohrbruch München, Rohrreinigung München, Abfluss verstopft München, Wasserschaden München, undichtes Rohr München, WC verstopft München, Dusche verstopft München, Wasserleitung reparieren München, Wasseranschluss München, Wasserinstallation München, Spülkasten reparieren München, WC austauschen München, Toilette montieren München, Waschbecken montieren München, Waschtisch einbauen München, Siphon austauschen München, Sanitär Schwabing, Klempner Bogenhausen, Sanitär Sendling, Klempner Pasing, Sanitär Maxvorstadt, Klempner Haidhausen, Sanitär Neuhausen, Klempner Trudering, Sanitär Laim, Klempner Giesing, Sanitär Moosach, Klempner Milbertshofen, Sanitär Nymphenburg, Klempner Perlach, Grohe Montage München, Hansgrohe Installation München, Geberit München, Sanitärinstallation München, Sanitär Festpreis München"
        aiSummary="AquaPro24 Sanitär-Notdienst München: 24/7 erreichbar, 45 Min. Reaktionszeit. Rohrbruch, verstopfter Abfluss, Wasserinstallation. Festpreise ab 92€, alle Münchner Stadtteile. 2.847+ zufriedene Kunden. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Sanitär", url: "https://aquapro24.de/sanitaer" }
        ]}
        serviceSchema={{
          name: "Sanitär-Notdienst & Installation München",
          description: "Sanitär-Notdienst München: Rohrbruch, Verstopfung, Wasserschaden. 45 Min. Reaktionszeit, Festpreis, 24/7 erreichbar.",
          serviceType: "Sanitär/Installation",
          urlSlug: "sanitaer",
          catalogName: "Sanitär-Leistungen",
          serviceOffers: [
            { name: "Rohrbruch / Leckage Soforthilfe" },
            { name: "Verstopfung / Ablaufproblem" },
            { name: "Wasserinstallation komplett" },
            { name: "Armaturen-Reparatur & Austausch" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          }
        }}
      />
      <Header />
      <BackButton />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${plumberImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <Droplets className="w-3 h-3" />
                Sanitär-Fachbetrieb München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-white">
                Sanitär & Klempner München – Wasserinstallation & Notdienst
              </h1>
              <p className="text-lg text-white/90 mb-4">
                <strong>Tropft der Wasserhahn? Verstopfter Abfluss? Rohrbruch?</strong> Wir kennen diese 
                Situationen und wissen, wie stressig sie sein können.
              </p>
              <p className="text-white/80 mb-6">
                Als Münchner Partnernetzwerk mit über 20 Jahren Erfahrung lösen wir Ihre Sanitärprobleme 
                schnell, sauber und zum Festpreis.
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
                  buttonVariant="outline"
                  buttonClassName="backdrop-blur-sm bg-white/10 border-white/30 text-white"
                />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <EmergencyProcess serviceType="sanitaer" />

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

        <section className="py-6 md:pt-8 pb-4 bg-muted/30">
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Sanitärbetrieb München: Was uns unterscheidet</h3>
              <p>
                Bei uns bekommen Sie keine bösen Überraschungen. Bevor wir mit der Arbeit beginnen, analysieren wir das Problem 
                gründlich und nennen Ihnen einen verbindlichen Festpreis. Dieser Preis gilt - auch wenn die Arbeit länger dauert 
                als geplant. Zusätzlich achten wir penibel auf Sauberkeit: Wir legen Schutzfolien aus, tragen Überschuhe und 
                hinterlassen Ihre Wohnung so sauber, wie wir sie vorgefunden haben.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Sanitär Leistungen München: Unser Angebot</h3>
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Sanitär München: Unsere Garantie für Sie</h3>
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

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
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
