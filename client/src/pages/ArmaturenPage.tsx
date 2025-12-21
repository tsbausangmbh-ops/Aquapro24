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
  ThermometerSun,
  Clock,
  Shield,
  Award,
  Star,
  MessageCircle,
  Sparkles,
  Settings,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import faucetImage1 from "@assets/generated_images/modern_chrome_faucet.png";
import faucetImage2 from "@assets/generated_images/faucet_installation_work.png";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

export default function ArmaturenPage() {
  const services = [
    {
      icon: Droplets,
      title: "Wasserhahn wechseln München",
      description: "Waschtischarmatur, Küchenarmatur, Badarmatur montieren. Grohe, Hansgrohe, Geberit, Blanco. Ab 80€ Montagekosten."
    },
    {
      icon: ShowerHead,
      title: "Duscharmatur einbauen München",
      description: "Regendusche montieren, Duschsystem installieren, Unterputzarmatur einbauen. Hansgrohe Raindance, Grohe Euphoria."
    },
    {
      icon: ThermometerSun,
      title: "Thermostat einbauen München",
      description: "Thermostatmischer für Dusche und Wanne. Verbrühschutz, konstante Wassertemperatur. Grohe Grohtherm, Hansgrohe Ecostat."
    },
    {
      icon: Wrench,
      title: "Wasserhahn reparieren München",
      description: "Wasserhahn tropft? Kartusche wechseln, Dichtung austauschen, Perlator reinigen. Schnelle Reparatur ab 60€."
    },
    {
      icon: Sparkles,
      title: "Grohe Hansgrohe Montage",
      description: "Autorisierte Montage von Markenarmaturen: Grohe, Hansgrohe, Geberit, Blanco, Villeroy & Boch, Ideal Standard."
    },
    {
      icon: Settings,
      title: "Sensor-Armatur einbauen",
      description: "Berührungslose Armaturen für Hygiene und Wassersparen. Ideal für Küche, Bad, Gäste-WC. Grohe Eurosmart, Hansgrohe Metris."
    }
  ];

  const benefits = [
    "Beratung zu Grohe, Hansgrohe, Geberit, Blanco",
    "Fachgerechte Armaturen-Montage durch Installateure",
    "Festpreis ab 80€ ohne versteckte Kosten",
    "Schnelle Termine für Armaturenwechsel München",
    "2 Jahre Gewährleistung auf Armaturen-Montage",
    "Saubere Arbeit mit Oberflächenschutz"
  ];

  const faqItems = [
    {
      question: "Welche Armaturenmarken empfehlen Sie für München?",
      answer: "Wir empfehlen bewährte Marken wie Grohe, Hansgrohe, Geberit und Villeroy & Boch. Diese bieten exzellente Qualität und lange Haltbarkeit. Wir beraten Sie gerne individuell nach Ihrem Budget und Stil."
    },
    {
      question: "Was kostet der Einbau einer neuen Armatur?",
      answer: "Der Einbau einer Standard-Waschtischarmatur kostet ab 80€. Komplexere Installationen wie Unterputzarmaturen oder Thermostate liegen höher. Wir nennen Ihnen vorab einen verbindlichen Festpreis."
    },
    {
      question: "Kann ich meine eigene Armatur mitbringen?",
      answer: "Ja, selbstverständlich! Wir bauen auch von Ihnen selbst gekaufte Armaturen fachgerecht ein. Achten Sie beim Kauf auf Qualitätsmarken und die richtigen Anschlussmaße."
    },
    {
      question: "Wie lange dauert der Austausch einer Armatur?",
      answer: "Ein einfacher Armaturenwechsel dauert etwa 30-60 Minuten. Bei komplexeren Arbeiten wie Unterputzinstallationen oder wenn alte Leitungen angepasst werden müssen, kann es länger dauern."
    },
    {
      question: "Mein Wasserhahn tropft - lohnt sich eine Reparatur?",
      answer: "Oft ja! Ein tropfender Wasserhahn kann häufig mit einer neuen Kartusche oder Dichtung repariert werden. Das ist günstiger als ein Kompletttausch. Wir prüfen das vor Ort und beraten ehrlich."
    },
    {
      question: "Gibt es wassersparende Armaturen, die Sie empfehlen?",
      answer: "Ja, moderne Armaturen mit Durchflussbegrenzung und Perlator sparen bis zu 50% Wasser ohne Komfortverlust. Berührungslose Armaturen stoppen automatisch und sind besonders hygienisch."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Wasserhahn tropft München | Mischbatterie tauschen | Armatur reparieren"
        description="Wasserhahn tropft? Mischbatterie tauschen oder Armatur reparieren in München. Festpreis ab 80€, schneller Service, saubere Arbeit."
        canonical="https://aquapro24.de/armaturen"
        keywords="Armaturen München, Armaturen austauschen München, Armaturen wechseln München, Armatur montieren München, Armaturentausch München, Wasserhahn einbauen München, Wasserhahn austauschen München, Wasserhahn wechseln München, Wasserhahn montieren München, Wasserhahn reparieren München, Wasserhahn tropft München, Mischbatterie austauschen München, Mischbatterie wechseln München, Mischbatterie montieren München, Küchenarmatur München, Küchenarmatur austauschen München, Küchenarmatur montieren München, Badarmatur München, Badarmatur wechseln München, Badarmatur montieren München, Waschtischarmatur München, Waschtischarmatur austauschen, Duscharmatur München, Duscharmatur wechseln München, Thermostatarmatur München, Thermostatarmatur einbauen München, Einhebelmischer München, Einhebelmischer austauschen, Grohe Montage München, Grohe Installation München, Hansgrohe Installation München, Hansgrohe Montage München, Geberit Armatur München, Blanco Armatur München, Hansa Armatur München, Armatureninstallateur München, Sanitärinstallateur Armaturen München, Armatur undicht München, Armatur defekt München, Armatur Notdienst München"
        aiSummary="AquaPro24 Armaturen-Service München: Montage und Reparatur aller Marken (Grohe, Hansgrohe, Geberit). Wasserhahn tropft? Neue Armatur? Festpreis ab 80€. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Armaturen", url: "https://aquapro24.de/armaturen" }
        ]}
        serviceSchema={{
          name: "Armaturen Montage & Reparatur München",
          description: "Armaturen-Montage und Reparatur in München. Alle Marken, schnelle Termine, Festpreis.",
          serviceType: "Armaturen/Sanitär",
          urlSlug: "armaturen",
          catalogName: "Armaturen-Leistungen",
          serviceOffers: [
            { name: "Armaturenmontage Küche & Bad" },
            { name: "Wasserhahn tropft - Reparatur" },
            { name: "Duschsystem-Installation" },
            { name: "Thermostatarmatur Einbau" }
          ],
          aggregateRating: {
            ratingValue: 4.8,
            reviewCount: 64
          }
        }}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${faucetImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <Droplets className="w-3 h-3" />
                Armaturen-Service München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Wasserhahn wechseln München – Armaturen Montage & Reparatur
              </h1>
              <div className="flex flex-wrap gap-1.5 mt-3" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserhahn austauschen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Mischbatterie wechseln</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Armatur montieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserhahn tropft</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Küchenarmatur einbauen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badarmatur installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Thermostatarmatur</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Duscharmatur wechseln</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kartusche tauschen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Unterputzarmatur</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Regendusche installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Grohe Armatur München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Hansgrohe Montage</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Armatur Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Armatur Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Armatur Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Smart Armatur</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wasserspararmatur</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Armaturenmontage</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                <strong>Wasserhahn tropft? Neue Armatur gekauft und brauchen Hilfe beim Einbau?</strong> 
                Wir sind Ihre Spezialisten für alle Armaturenarbeiten in München.
              </p>
              <p className="text-white/80 mb-6">
                Von der einfachen Reparatur bis zur Installation hochwertiger Markenarmaturen - 
                unsere erfahrenen Installateure arbeiten schnell, sauber und zum Festpreis.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-armaturen">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <ServiceBooking 
                  serviceType="sanitaer"
                  buttonText="Termin buchen"
                  buttonSize="lg"
                  buttonVariant="outline"
                  buttonClassName="backdrop-blur-sm bg-white/10 border-white/30 text-white"
                />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <NLPSection
          problemTitle="Kennen Sie diese Probleme?"
          problems={[
            "Der Wasserhahn tropft und kostet unnötig Geld",
            "Die neue Armatur liegt da, aber wer baut sie ein?",
            "Der Wasserstrahl ist schwach oder ungleichmäßig",
            "Die alte Armatur passt nicht mehr zum renovierten Bad",
            "Unklare Preise bei anderen Handwerkern"
          ]}
          solutionTitle="So lösen wir das für Sie"
          solutions={[
            "Schnelle Reparatur tropfender Armaturen",
            "Fachgerechter Einbau Ihrer neuen Armatur",
            "Beratung zu passenden Marken und Modellen",
            "Transparenter Festpreis vor Arbeitsbeginn",
            "Saubere Arbeit mit Schutz Ihrer Oberflächen"
          ]}
          futureState="...Ihre neue Armatur sitzt perfekt, alles ist dicht und Sie genießen wieder vollen Wasserkomfort. Und falls mal etwas nicht stimmt - wir geben 2 Jahre Gewährleistung."
          authorityText="Über 500 Armaturen montiert und repariert in München"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Sie kontaktieren uns mit Ihrem Anliegen - Reparatur oder Neuinstallation.",
            "Wir kommen zum vereinbarten Termin und nennen Ihnen den Festpreis.",
            "Die Arbeit wird sauber erledigt und Sie haben wieder eine perfekt funktionierende Armatur."
          ]}
        />

        <ServiceAdvisor serviceType="sanitaer" />

        <CustomerStories 
          stories={sanitaerStories}
          title="Echte Geschichten von Münchner Kunden"
          subtitle="Von der kleinen Reparatur bis zur kompletten Neuausstattung"
        />

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Wasserhahn wechseln München: Leistungen & Festpreise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der einfachen Reparatur bis zum kompletten Duschsystem - 
                wir kümmern uns um alle Ihre Armaturen.
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
                  Mischbatterie austauschen München: Warum uns Kunden empfehlen
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
                    <h3 className="font-bold text-lg">Armaturen Marken München: Grohe, Hansgrohe & Geberit</h3>
                    <p className="text-muted-foreground text-sm">Wir verbauen nur hochwertige Produkte</p>
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
                    <Sparkles className="w-4 h-4 text-muted-foreground" />
                    <span>Alle Marken verfügbar</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Küchenarmatur montieren München: Kosten & Ablauf
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Armaturen sind mehr als nur Wasserhähne - sie bestimmen den Komfort und die Optik Ihres 
                Bades oder Ihrer Küche. Ob tropfender Wasserhahn, neue Designarmatur oder Thermostatmischer 
                für die Dusche: Wir sind Ihre Experten für alle Armaturenarbeiten in München.
              </p>
              <p>
                Unsere Installateure haben jahrelange Erfahrung mit allen gängigen Marken: Grohe, Hansgrohe, 
                Geberit, Villeroy & Boch, Dornbracht und viele mehr. Wir wissen, worauf es bei der Montage 
                ankommt - von den richtigen Dichtungen bis zur korrekten Befestigung.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Tropfenden Wasserhahn reparieren München: Reparatur oder Austausch?</h3>
              <p>
                Nicht jeder tropfende Wasserhahn muss sofort ersetzt werden. Oft reicht der Austausch einer 
                Kartusche oder Dichtung aus. Wir prüfen vor Ort, was sinnvoll ist, und beraten Sie ehrlich. 
                Sollte eine Reparatur nicht mehr wirtschaftlich sein, helfen wir Ihnen bei der Auswahl einer 
                passenden neuen Armatur.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Neue Armatur einbauen lassen München: Ihr Einbau-Service</h3>
              <p>
                Sie haben bereits eine neue Armatur gekauft? Kein Problem! Wir bauen auch von Ihnen 
                mitgebrachte Armaturen fachgerecht ein. Achten Sie beim Kauf auf Qualitätsprodukte und die 
                passenden Anschlussmaße. Bei Fragen beraten wir Sie gerne vorab telefonisch.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Armaturen-Service" 
          
          highlightAreas={["Maxvorstadt", "Haidhausen", "Pasing"]}
        />

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zu Armaturen"
        />

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Wasserhahn montieren München – Jetzt Termin buchen
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Ob tropfender Wasserhahn oder neue Designarmatur - wir kümmern uns darum.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-armaturen-cta">
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

        <RelatedServices currentService="armaturen" />
      </main>

      <Footer />
      <AIChatWidget serviceCategory="sanitaer" />
    </div>
  );
}
