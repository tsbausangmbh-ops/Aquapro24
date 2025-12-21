import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import ServiceAdvisor from "@/components/ServiceAdvisor";
import SEO from "@/components/SEO";
import ColorfulFAQ from "@/components/ColorfulFAQ";
import BackButton from "@/components/BackButton";
import ServiceAreas from "@/components/ServiceAreas";
import NLPSection from "@/components/NLPSection";
import CustomerStories, { heizungStories } from "@/components/CustomerStories";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Flame, 
  Phone, 
  CheckCircle2, 
  Wrench,
  ThermometerSun,
  Zap,
  Clock,
  Shield,
  Award,
  Star,
  MessageCircle,
  Droplets,
  Settings,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import waterHeaterImage1 from "@assets/generated_images/tankless_water_heater.png";
import waterHeaterImage2 from "@assets/generated_images/water_boiler_installation.png";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

export default function WarmwasserPage() {
  const services = [
    {
      icon: Flame,
      title: "Durchlauferhitzer",
      description: "Installation, Wartung und Reparatur von elektrischen und Gas-Durchlauferhitzern aller Marken."
    },
    {
      icon: ThermometerSun,
      title: "Warmwasserspeicher",
      description: "Einbau und Wartung von Warmwasserboilern von 5 bis 300 Liter Fassungsvermögen."
    },
    {
      icon: Droplets,
      title: "Warmwasser-Zirkulation",
      description: "Installation von Zirkulationspumpen für sofort verfügbares Warmwasser an jeder Zapfstelle."
    },
    {
      icon: Zap,
      title: "Elektro-Boiler",
      description: "Montage von Klein- und Untertischspeichern für Küche, Bad und Gäste-WC."
    },
    {
      icon: Wrench,
      title: "Reparatur & Wartung",
      description: "Entstörung, Entkalkung und Wartung Ihrer Warmwasseranlage für optimale Lebensdauer."
    },
    {
      icon: Settings,
      title: "Energieberatung",
      description: "Beratung zu energieeffizienten Warmwasserlösungen und möglichen Fördermitteln."
    }
  ];

  const benefits = [
    "Schnelle Hilfe bei Ausfall - auch am Wochenende",
    "Alle Marken: Vaillant, Stiebel Eltron, Junkers & mehr",
    "Festpreisgarantie ohne versteckte Kosten",
    "Energieeffiziente Lösungen für niedrige Betriebskosten",
    "Fachgerechte Installation nach Vorschriften",
    "2 Jahre Gewährleistung auf unsere Arbeit"
  ];

  const faqItems = [
    {
      question: "Kein warmes Wasser mehr - wie schnell können Sie helfen?",
      answer: "Bei Warmwasserausfall sind wir in der Regel innerhalb von 2-4 Stunden bei Ihnen in München. Am Wochenende und an Feiertagen ist unser Notdienst ebenfalls erreichbar."
    },
    {
      question: "Was kostet ein neuer Durchlauferhitzer inklusive Einbau?",
      answer: "Ein hochwertiger Durchlauferhitzer mit Installation kostet je nach Leistung ab ca. 600€. Wir erstellen Ihnen gerne ein individuelles Angebot mit Festpreis."
    },
    {
      question: "Durchlauferhitzer oder Warmwasserspeicher - was ist besser?",
      answer: "Das hängt von Ihrem Verbrauch ab. Durchlauferhitzer erwärmen Wasser nur bei Bedarf und sind platzsparend. Speicher bieten sofort heißes Wasser in großer Menge. Wir beraten Sie individuell."
    },
    {
      question: "Mein Durchlauferhitzer macht nur noch lauwarmes Wasser - was tun?",
      answer: "Das kann an Verkalkung, einem defekten Heizelement oder falscher Einstellung liegen. Oft lässt sich das Problem mit einer Wartung oder kleinen Reparatur beheben. Rufen Sie uns an!"
    },
    {
      question: "Wie oft sollte ich meinen Warmwasserspeicher warten lassen?",
      answer: "Wir empfehlen eine jährliche Wartung inklusive Entkalkung und Anodenkontrolle. Das verlängert die Lebensdauer erheblich und spart Energiekosten."
    },
    {
      question: "Gibt es Förderungen für neue Warmwasserbereiter?",
      answer: "Für bestimmte energieeffiziente Warmwasserlösungen, besonders in Verbindung mit erneuerbaren Energien, gibt es Fördermöglichkeiten. Wir beraten Sie gerne zu den aktuellen Programmen."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Durchlauferhitzer München | Boiler defekt | Warmwasser Reparatur"
        description="Durchlauferhitzer oder Boiler defekt? Warmwasser Reparatur in München für alle Marken. Schnell, zuverlässig, Festpreis."
        canonical="https://aquapro24.de/warmwasser"
        keywords="Warmwasser München, Durchlauferhitzer München, Boiler München, Warmwasserspeicher München, Durchlauferhitzer reparieren München, Boiler installieren München, kein warmes Wasser München, Warmwasser Notdienst München, Stiebel Eltron München, Vaillant München, Junkers München, Warmwasserbereiter München"
        aiSummary="AquaPro24 Warmwasser-Service München: Durchlauferhitzer, Boiler, Warmwasserspeicher - Reparatur und Installation. Alle Marken, schnelle Hilfe bei Ausfall. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Warmwasser", url: "https://aquapro24.de/warmwasser" }
        ]}
        serviceSchema={{
          name: "Warmwasser & Durchlauferhitzer München",
          description: "Warmwasser-Service: Durchlauferhitzer, Boiler und Warmwasserspeicher - Installation, Reparatur und Wartung in München.",
          serviceType: "Warmwasser/Heizung",
          urlSlug: "warmwasser",
          catalogName: "Warmwasser-Leistungen",
          serviceOffers: [
            { name: "Durchlauferhitzer Installation & Reparatur" },
            { name: "Boiler / Warmwasserspeicher Service" },
            { name: "Warmwasser-Wartung & Entkalkung" },
            { name: "Warmwasserausfall Notdienst" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 72
          }
        }}
      />
      <Header />
      <BackButton />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${waterHeaterImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <Flame className="w-3 h-3" />
                Warmwasser-Service München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Durchlauferhitzer München – Boiler Reparatur & Installation
              </h1>
              <div className="flex flex-wrap gap-1.5 mt-3" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Durchlauferhitzer installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Durchlauferhitzer reparieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Boiler einbauen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Boiler defekt reparieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Warmwasserspeicher montieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">kein warmes Wasser</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Warmwasser Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Elektroboiler installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Gas-Durchlauferhitzer</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Zirkulationspumpe einbauen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Entkalkung Durchlauferhitzer</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wartung Warmwasserspeicher</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Stiebel Eltron München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vaillant Durchlauferhitzer</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Junkers Boiler</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Warmwasser Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Boiler Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Durchlauferhitzer Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Warmwasser Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Warmwasser München</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                <strong>Kein warmes Wasser? Durchlauferhitzer defekt?</strong> Wir wissen, wie unangenehm 
                das ist - besonders im Winter. Kaltes Duschen macht keinen Spaß.
              </p>
              <p className="text-white/80 mb-6">
                Als Ihr Warmwasser-Spezialist in München reparieren und installieren wir Durchlauferhitzer, 
                Boiler und Warmwasserspeicher aller Marken - schnell und zuverlässig.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-warmwasser">
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
            "Kein warmes Wasser mehr - mitten im Winter",
            "Der Durchlauferhitzer macht nur noch lauwarmes Wasser",
            "Der Boiler macht komische Geräusche",
            "Das Wasser wird nicht richtig heiß oder braucht ewig",
            "Die Stromrechnung ist zu hoch wegen des alten Geräts"
          ]}
          solutionTitle="So lösen wir das für Sie"
          solutions={[
            "Schnelle Hilfe bei Ausfall - oft am selben Tag",
            "Fachgerechte Reparatur oder Austausch defekter Geräte",
            "Beratung zu energieeffizienten Neugeräten",
            "Regelmäßige Wartung für lange Lebensdauer",
            "Transparente Festpreise ohne Überraschungen"
          ]}
          futureState="...Sie haben wieder zuverlässig warmes Wasser, Ihr Gerät arbeitet effizient und Sie sparen Energiekosten. So soll es sein."
          authorityText="Über 500 Warmwasseranlagen installiert und repariert in München"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Sie rufen an und schildern das Problem - wir kommen schnellstmöglich.",
            "Wir analysieren die Ursache und nennen Ihnen einen Festpreis für die Reparatur oder den Austausch.",
            "Ihr Warmwasser funktioniert wieder zuverlässig - garantiert."
          ]}
        />

        <ServiceAdvisor serviceType="sanitaer" />

        <CustomerStories 
          stories={heizungStories}
          title="Echte Geschichten von Münchner Kunden"
          subtitle="Von der Notfall-Reparatur bis zur Neuinstallation"
        />

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl md:text-3xl font-bold mb-4">
                Durchlauferhitzer installieren München: Leistungen & Festpreise
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Vom kleinen Untertischboiler bis zum großen Warmwasserspeicher - 
                wir sind Ihr Partner für alle Warmwasserlösungen.
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
                  Boiler austauschen München: Unsere Vorteile
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
                    <h3 className="font-bold text-lg">Durchlauferhitzer Marken München: Stiebel Eltron, Vaillant & mehr</h3>
                    <p className="text-muted-foreground text-sm">Zertifizierter Service für alle Hersteller</p>
                  </div>
                </div>
                <div className="space-y-4 text-sm">
                  <div className="flex items-center gap-3">
                    <Clock className="w-4 h-4 text-muted-foreground" />
                    <span>Schnelle Hilfe bei Ausfall</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Shield className="w-4 h-4 text-muted-foreground" />
                    <span>2 Jahre Gewährleistung</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Zap className="w-4 h-4 text-muted-foreground" />
                    <span>Energieeffiziente Lösungen</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Durchlauferhitzer reparieren München: Kosten, Wartung & Austausch
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Warmes Wasser ist ein Grundbedürfnis - und wenn es plötzlich fehlt, muss schnell Hilfe her. 
                Als Ihr Warmwasser-Spezialist in München sind wir für Sie da: bei Ausfällen, für Wartungen 
                oder wenn Sie ein neues Gerät brauchen.
              </p>
              <p>
                Wir arbeiten mit allen gängigen Marken: Vaillant, Stiebel Eltron, Junkers/Bosch, AEG, Clage 
                und viele mehr. Egal ob Ihr Durchlauferhitzer nicht mehr richtig heizt, Ihr Boiler merkwürdige 
                Geräusche macht oder Sie ein komplett neues Gerät brauchen - wir helfen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Boiler anschließen oder Durchlauferhitzer installieren München: Was ist besser?</h3>
              <p>
                Welches System das richtige für Sie ist, hängt von Ihrem Verbrauchsverhalten ab. Durchlauferhitzer 
                erwärmen das Wasser nur bei Bedarf und sind sehr platzsparend. Warmwasserspeicher (Boiler) 
                halten eine große Menge heißes Wasser bereit und eignen sich besonders für Haushalte mit 
                hohem Verbrauch. Wir beraten Sie gerne individuell.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Durchlauferhitzer warten lassen München: Kosten sparen</h3>
              <p>
                Kalk und Ablagerungen reduzieren die Effizienz Ihres Warmwasserbereiters erheblich. Eine 
                jährliche Wartung inklusive Entkalkung sorgt dafür, dass Ihr Gerät effizient arbeitet und 
                länger hält. Das spart Stromkosten und verhindert teure Reparaturen.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Warmwasser-Service" 
          
          highlightAreas={["Trudering", "Laim", "Giesing"]}
        />

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zum Warmwasser-Service"
        />

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Boiler reparieren München – Notdienst für Warmwasser
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Durchlauferhitzer defekt, Boiler macht Probleme? Wir bringen Ihr Warmwasser wieder zum Laufen.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-warmwasser-cta">
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

        <RelatedServices currentService="warmwasser" />
      </main>

      <Footer />
      <AIChatWidget serviceCategory="heizung" />
    </div>
  );
}
