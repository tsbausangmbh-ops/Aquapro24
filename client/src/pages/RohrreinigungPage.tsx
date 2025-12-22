import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import SimpleFAQ from "@/components/SimpleFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { sanitaerStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import EmergencyProcess from "@/components/EmergencyProcess";
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
      title: "Abfluss verstopft München",
      description: "Verstopfung lösen in Küche, Bad, WC. Mechanische Entstopfung mit Spirale ab 81€. Sofortige Hilfe bei Wasserrückstau."
    },
    {
      icon: ShowerHead,
      title: "Dusche verstopft München",
      description: "Duschabfluss reinigen: Haare, Seifenreste, Kalk entfernen. Ablaufgarnitur säubern, Siphon durchspülen. Ab 97€."
    },
    {
      icon: Droplets,
      title: "Küchenabfluss verstopft",
      description: "Fett und Essensreste im Abfluss? Spülbecken läuft nicht ab? Professionelle Küchenabfluss-Reinigung ab 97€."
    },
    {
      icon: Camera,
      title: "Kamerainspektion Rohr München",
      description: "TV-Rohrinspektion zur Schadensortung. Verstopfung lokalisieren, Rohrbruch finden, Zustand dokumentieren. Ab 178€."
    },
    {
      icon: Zap,
      title: "Hochdruckspülung München",
      description: "Hartnäckige Verstopfung im Fallrohr? Hochdruckspülung mit bis 200 bar löst Ablagerungen, Wurzeln, Kalk. Ab 178€."
    },
    {
      icon: Wrench,
      title: "Kanalreinigung München",
      description: "Hauptkanal verstopft, Fallrohr blockiert? Kanalreinigung für Wohnhaus und Gewerbe. Notdienst 24/7 verfügbar."
    }
  ];

  const benefits = [
    "Schnelle Rohrreinigung München: 60 Minuten vor Ort",
    "Festpreis ab 81€ ohne versteckte Kosten",
    "Modernste Technik: Kamerainspektion, Hochdruckspülung",
    "24/7 Notdienst auch Wochenende und Feiertag",
    "Saubere Arbeit mit Bodenschutz, kein Schmutz",
    "Garantie auf dauerhafte Verstopfungsbeseitigung"
  ];

  const faqItems = [
    {
      question: "Was kostet eine Rohrreinigung in München?",
      answer: "Rohrreinigung München Kosten: Einfache Verstopfung ab 81€, Küchenabfluss ab 97€, WC-Entstopfung ab 113€, Hochdruckspülung ab 178€. Vor Arbeitsbeginn erhalten Sie einen verbindlichen Festpreis. Keine versteckten Kosten, keine Anfahrtsgebühr bei Auftrag."
    },
    {
      question: "Wie schnell ist der Rohrreinigung-Notdienst in München vor Ort?",
      answer: "Bei verstopftem Abfluss sind wir in der Regel innerhalb von 60 Minuten bei Ihnen in München. Unser 24/7 Notdienst ist rund um die Uhr erreichbar. Einsatzgebiet: alle Münchner Stadtteile - Schwabing, Sendling, Bogenhausen, Pasing, Giesing und weitere."
    },
    {
      question: "Arbeitet der Rohrreinigung-Notdienst auch nachts?",
      answer: "Ja, unser 24/7 Rohrreinigung-Notdienst ist 365 Tage im Jahr erreichbar - auch nachts zwischen 22 und 6 Uhr, an Wochenenden und Feiertagen. Ein überflutetes Bad oder eine verstopfte Toilette ist ein Notfall. Telefon: 0152 12274043."
    },
    {
      question: "Welche Verstopfungen können Sie in München lösen?",
      answer: "Wir lösen alle Verstopfungen: Küche (Fett, Essensreste), Bad (Haare, Seife, Kalk), WC (Hygieneartikel, Papier), Fallrohr, Hauptkanal, Außenabfluss. Mit Spirale, Hochdruckspülung und Kamerainspektion - da bleibt keine Verstopfung ungelöst."
    },
    {
      question: "Nutzen Sie Chemikalien zur Rohrreinigung?",
      answer: "Nein, wir arbeiten zu 100% mechanisch und umweltfreundlich. Unsere Methoden: flexible Spiralen für einfache Verstopfungen, Hochdruckspülgeräte für hartnäckige Ablagerungen, Kamerainspektion zur Lokalisierung. Das ist schonender für Ihre Rohre und effektiver als chemische Reiniger."
    },
    {
      question: "Wie läuft eine Rohrreinigung bei AquaPro24 ab?",
      answer: "1. Anruf unter 0152 12274043 - wir sind 24/7 erreichbar. 2. Techniker kommt in 60 Minuten. 3. Analyse der Verstopfung. 4. Festpreis vor Arbeitsbeginn. 5. Professionelle Beseitigung. 6. Tipps zur Vorbeugung. 7. Garantie auf die Beseitigung."
    },
    {
      question: "Warum AquaPro24 für Rohrreinigung wählen?",
      answer: "AquaPro24 bietet: 60 Min. Reaktionszeit, 24/7 Notdienst, Festpreisgarantie, umweltfreundliche Methoden, Kamerainspektion verfügbar, über 2.800 gelöste Verstopfungen in München. Keine Anfahrtskosten bei Auftrag. Ihr lokaler Partner seit 2005."
    },
    {
      question: "Wie kann ich Verstopfungen in München vorbeugen?",
      answer: "Tipps: Kein Fett in den Küchenabfluss, Haarsiebe in Dusche/Badewanne verwenden, regelmäßig heißes Wasser durchlaufen lassen, keine Hygieneartikel ins WC. Bei wiederkehrenden Problemen: professionelle Wartungsreinigung alle 1-2 Jahre empfohlen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Rohrverstopfung München | Kanalreinigung | Abfluss frei"
        description="Rohrverstopfung beseitigen: Kanalreinigung und Abfluss frei machen in München. Professionelle Rohrreinigung ab 81€ Festpreis. Heute noch Termin."
        canonical="https://aquapro24.de/rohrreinigung"
        keywords="Rohrreinigung München, Abfluss verstopft München, Kanalreinigung München, Abflussreinigung München, verstopfte Toilette München, Rohrreinigung Notdienst München, Abfluss frei bekommen München, Küchenabfluss verstopft München, Dusche verstopft München, WC verstopft München, Hochdruckspülung München, Rohrfrei München, Abfluss reinigen München, Siphon reinigen München, Rohr verstopft München, Rohrbruch München, Kanal verstopft München, Abflussrohr verstopft München, Spüle verstopft München, Waschbecken verstopft München, Badewanne verstopft München, Kanalinspektion München, Kamerainspektion Rohr München, Spirale Rohrreinigung München, Rohrreinigungsfirma München, Rohrreinigung 24h München, Abfluss Soforthilfe München, Rohr frei machen München, Verstopfung beseitigen München, Sanitär Rohrreinigung München, Klempner Abfluss München, Abflussreiniger München, Kanalreinigung Notdienst München"
        aiSummary="AquaPro24 Rohrreinigung München: 24/7 Notdienst, 60 Min. Reaktionszeit. Verstopfter Abfluss in Küche, Bad, WC? Hochdruckspülung und Kamerainspektion. Festpreis ab 81€. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Rohrreinigung", url: "https://aquapro24.de/rohrreinigung" }
        ]}
        serviceSchema={{
          name: "Rohrreinigung & Abflussreinigung München",
          description: "Rohrreinigung und Abflussreinigung in München. 60 Min. Reaktionszeit, Festpreis, 24/7 erreichbar.",
          serviceType: "Rohrreinigung/Sanitär",
          urlSlug: "rohrreinigung",
          catalogName: "Rohrreinigung-Leistungen",
          serviceOffers: [
            { name: "Verstopfung / Ablaufproblem Soforthilfe" },
            { name: "Hochdruckspülung für hartnäckige Ablagerungen" },
            { name: "Kamerainspektion zur Problemanalyse" },
            { name: "WC / Toilette entstopfen" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 89
          }
        }}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${drainImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <PipetteIcon className="w-3 h-3" />
                Rohrreinigung München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Rohrreinigung München – Abfluss verstopft Notdienst 24/7
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss verstopft</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC verstopft</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Toilette entstopfen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Dusche verstopft</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Küchenabfluss reinigen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Spüle verstopft</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kanalreinigung Profi</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Hochdruckspülung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kamerainspektion</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Spirale Rohrreinigung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrreinigung Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Verstopfung Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrreinigung Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrreinigung Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss Soforthilfe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">24h Rohrreinigung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Rohrreinigung</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                <strong>Abfluss verstopft? Wasser steht in der Dusche oder Spüle?</strong> Das ist nicht nur 
                nervig, sondern auch unhygienisch. Aber keine Sorge - wir lösen das Problem schnell.
              </p>
              <p className="text-white/80 mb-6">
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
                Verstopfung beseitigen München: Leistungen & Festpreise
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
                    <div className="w-12 h-12 rounded-lg bg-muted flex items-center justify-center mb-4">
                      <service.icon className="w-6 h-6 text-muted-foreground" />
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
                  Kanalreinigung München: Warum uns Kunden empfehlen
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
                  <div className="w-16 h-16 rounded-full bg-muted flex items-center justify-center">
                    <Award className="w-8 h-8 text-muted-foreground" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Rohrreinigung Technik München: Kamera & Hochdruck</h3>
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
              Abfluss reinigen München: Kosten, Preise & Ablauf
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
              <h3 className="text-xl font-semibold text-foreground mt-8">Abfluss frei machen München: Typische Ursachen für Verstopfung</h3>
              <p>
                In der Küche sind es meist Fettrückstände und Essensreste, die sich im Rohr ablagern. In Bad und 
                Dusche sammeln sich Haare, Seifenreste und Kalk. Im WC führen oft falsch entsorgte Hygieneartikel 
                zu Verstopfungen. Wir kennen alle diese Probleme und lösen sie schnell und sauber.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Rohr reinigen lassen München: Umweltfreundlich & gründlich</h3>
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

        <SimpleFAQ 
          items={faqItems}
          title="Häufige Fragen zur Rohrreinigung"
        />

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Rohr verstopft München – Notdienst in 60 Min. vor Ort
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

        <RelatedServices currentService="rohrreinigung" />
      </main>

      <Footer />
      <AIChatWidget serviceCategory="sanitaer" />
    </div>
  );
}
