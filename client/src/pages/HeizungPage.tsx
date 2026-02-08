import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import TrustBar from "@/components/TrustBar";
import Breadcrumbs from "@/components/Breadcrumbs";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Clock,
  Shield,
  Flame,
  Thermometer,
  Wrench,
  Calendar,
  Users,
  Hammer,
  Settings,
  AlertTriangle,
  Star
} from "lucide-react";
import { Link } from "wouter";
import { HeroPicture } from "@/components/ResponsiveHero";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";

const SimpleFAQ = lazy(() => import("@/components/SimpleFAQ"));
const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

const services = [
  {
    icon: Wrench,
    title: "Heizung reparieren",
    price: "ab 154€",
    description: "Heizung ausgefallen, Therme defekt? 24h Notdienst, 45-60 Min. vor Ort.",
    features: ["24/7 Notdienst", "Alle Marken", "Festpreis"]
  },
  {
    icon: Settings,
    title: "Heizungswartung",
    price: "ab 154€",
    description: "Jahreswartung: Brenner reinigen, Abgasmessung, Druck prüfen.",
    features: ["15% sparen", "Protokoll", "Garantieerhalt"]
  },
  {
    icon: Flame,
    title: "Gasheizung erneuern",
    price: "ab 8.500€",
    description: "Alte Heizung tauschen: Viessmann, Vaillant, Buderus, Wolf.",
    features: ["Demontage inkl.", "Förderprüfung", "5 Jahre Garantie"]
  },
  {
    icon: Thermometer,
    title: "Fußbodenheizung",
    price: "ab 45€/m²",
    description: "Fußbodenheizung verlegen, nachrüsten oder reparieren.",
    features: ["Trocken-/Nasssystem", "Steuerung", "Energieeffizient"]
  },
  {
    icon: Settings,
    title: "Thermostat wechseln",
    price: "ab 89€",
    description: "Heizungsthermostat austauschen, Smart-Thermostat installieren.",
    features: ["Tado", "Netatmo", "Heizkosten sparen"]
  },
  {
    icon: Wrench,
    title: "Heizkörper austauschen",
    price: "ab 280€",
    description: "Heizkörper montieren, entlüften, Ventil wechseln.",
    features: ["Alle Typen", "Demontage inkl.", "Festpreis"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Anruf",
    description: "Schildern Sie Ihr Problem. Bei Notfällen sofortige Hilfe.",
    icon: Phone
  },
  {
    step: 2,
    title: "Termin",
    description: "Wir kommen pünktlich – bei Notfällen in 45-60 Min.",
    icon: Calendar
  },
  {
    step: 3,
    title: "Festpreis",
    description: "Analyse vor Ort, transparenter Preis vor Arbeitsbeginn.",
    icon: Users
  },
  {
    step: 4,
    title: "Erledigt",
    description: "Ihre Heizung läuft wieder – garantiert.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Preis gilt – ohne Nachforderungen" },
  { title: "2 Jahre Garantie", description: "Auf alle Arbeiten und Materialien" },
  { title: "45-60 Min. Notdienst", description: "Schnelle Hilfe bei Heizungsausfall" },
  { title: "Alle Marken", description: "Viessmann, Vaillant, Buderus, Wolf" }
];

const faqItems = [
  {
    question: "Was kostet ein Heizungs-Notdienst in München?",
    answer: "Anfahrt 49€, Reparaturen ab 154€. Sie erhalten vor Arbeitsbeginn einen verbindlichen Festpreis. Keine versteckten Kosten."
  },
  {
    question: "Wie schnell sind Sie bei einem Heizungsausfall vor Ort?",
    answer: "Bei Notfällen in der Regel innerhalb von 45-60 Minuten. Wir sind 24/7 erreichbar, auch nachts und am Wochenende."
  },
  {
    question: "Welche Heizungsmarken reparieren Sie?",
    answer: "Alle Marken: Viessmann, Vaillant, Buderus, Wolf, Junkers/Bosch, Brötje, Weishaupt."
  },
  {
    question: "Was kostet eine Heizungswartung?",
    answer: "Heizungswartung ab 154€ inkl. Anfahrt. Spart bis 15% Heizkosten und beugt teuren Reparaturen vor."
  },
  {
    question: "Gibt es Förderung für eine neue Heizung?",
    answer: "Ja, bis zu 40% staatliche Förderung (BAFA/KfW). Wir beraten Sie kostenlos zu Ihren Möglichkeiten."
  },
  {
    question: "Geben Sie Garantie auf Heizungsarbeiten?",
    answer: "Ja, 2 Jahre Gewährleistung auf alle Arbeiten. Bei Neuanlagen bis 5 Jahre Herstellergarantie."
  }
];

export default function HeizungPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoMeta['/heizung'].title}
        description={seoMeta['/heizung'].description}
        canonical="https://aquapro24.de/heizung"
        keywords={seoMeta['/heizung'].keywords.join(', ')}
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Heizung", url: "https://aquapro24.de/heizung" }
        ]}
        serviceSchema={{
          name: "Heizung München",
          description: "Heizungs-Notdienst München: 24/7 Reparatur, Wartung ab 154€. Alle Marken: Viessmann, Vaillant, Buderus.",
          serviceType: "Heizung/HVAC",
          urlSlug: "heizung",
          catalogName: "Heizungs-Leistungen",
          serviceOffers: [
            { name: "Heizungs-Notdienst" },
            { name: "Heizungswartung" },
            { name: "Heizungsreparatur" },
            { name: "Heizungsmodernisierung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 178
          }
        }}
        ogImageAlt="Heizungsinstallation München Gasheizung Ölheizung Wartung Reparatur - alle Marken Festpreis"
      />
      <Header />
      <Breadcrumbs items={[
        { label: "Leistungen", href: "/" },
        { label: "Heizung & Wartung" }
      ]} />
      
      <main id="main-content">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_heizung" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex flex-wrap gap-2 mb-2 sm:mb-4">
                <Badge className="bg-destructive text-destructive-foreground gap-1">
                  <AlertTriangle className="w-3 h-3" />
                  24/7 Notdienst
                </Badge>
                <Badge variant="secondary" className="gap-1">
                  <Star className="w-3 h-3 fill-current" />
                  4.9 Google-Bewertung
                </Badge>
              </div>
              
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight leading-tight text-white mb-2 sm:mb-4">
                Heizung München – Wartung, Reparatur & Modernisierung
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Heizung ausgefallen oder Therme defekt?</strong>
              </p>
              
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                Wir helfen schnell und zum Festpreis. 45-60 Minuten Reaktionszeit bei Notfällen – alle Marken, 24/7 erreichbar.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Mitten im Winter fällt die Heizung aus. Sie rufen uns an – in 50 Minuten ist unser Techniker da und bringt Ihre Heizung wieder zum Laufen. Festpreis, alle Marken.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>Über 2.400 zufriedene Kunden</strong> – Heizungsreparatur ab 154€ zum Festpreis
              </p>
              
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-hero">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white" 
                  asChild
                  data-testid="button-termin-hero"
                >
                  <Link href="/termin">
                    <Clock className="w-4 h-4" />
                    24h Terminbuchung
                  </Link>
                </Button>
              </div>
              
              <div className="flex flex-wrap items-center gap-x-4 sm:gap-x-6 gap-y-2 sm:gap-y-3 text-sm">
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Geprüfte Fachbetriebe</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>München & Umgebung</span>
                </div>
                <div className="flex items-center gap-2 text-white/80">
                  <CheckCircle2 className="w-4 h-4 text-accent" />
                  <span>Alle Marken</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Heizung München: Leistungen Heizung Leistungen München: Preise & Services Preise</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Von der Reparatur bis zur Neuinstallation – wir sind Ihr Heizungs-Partner in München.
              </p>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {services.map((service, index) => (
                <Card key={index}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center">
                        <service.icon className="w-6 h-6 text-primary" />
                      </div>
                      <Badge variant="secondary">{service.price}</Badge>
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{service.title}</h3>
                    <p className="text-sm text-muted-foreground mb-4">{service.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {service.features.map((feature, i) => (
                        <Badge key={i} variant="outline" className="text-xs">{feature}</Badge>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <p className="text-center text-sm text-muted-foreground mt-6">
              Alle Preise inkl. 19% MwSt.
            </p>
          </div>
        </section>

        <section className="py-4 sm:py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">Heizung Ablauf München: So einfach geht's</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Von Ihrem Anruf bis zur warmen Heizung – transparent und schnell.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Schritt {step.step}</div>
                  <h3 className="text-base sm:text-lg font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Heizung Garantie: Unser Versprechen</h2>
              <p className="text-muted-foreground">
                Sicherheit und Qualität – darauf können Sie sich verlassen.
              </p>
            </div>
            
            <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-2 sm:gap-4">
              {guarantees.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <Shield className="w-6 h-6 sm:w-8 sm:h-8 text-primary mx-auto mb-3" />
                    <h3 className="text-base sm:text-lg font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">Heizung Marken München: Viessmann & Vaillant</h2>
              <p className="text-muted-foreground text-sm">
                Wir reparieren und installieren alle führenden Heizungsmarken.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Viessmann</div>
                <div className="text-xs">Vitocal, Vitodens</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Vaillant</div>
                <div className="text-xs">ecoTEC, aroTHERM</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Buderus</div>
                <div className="text-xs">Logamax, Logatherm</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Wolf</div>
                <div className="text-xs">CGB-2, CHA</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Junkers</div>
                <div className="text-xs">Bosch</div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Heizungsfachbetrieb München: Ihr zuverlässiger Partner
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Als Münchner Heizungsfachbetrieb sind wir seit über 20 Jahren Ihr zuverlässiger Partner 
                für alle Heizungsarbeiten. Ob Wartung, Reparatur oder Neuinstallation – wir helfen 
                schnell, kompetent und zum Festpreis.
              </p>
              <p>
                Unser 24/7-Notdienst steht Ihnen rund um die Uhr zur Verfügung. Bei Heizungsausfall 
                sind wir in 45-60 Minuten bei Ihnen – auch nachts, am Wochenende und an Feiertagen.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
            <ServiceAreas 
              serviceName="Heizungsservice" 
              highlightAreas={["Pasing", "Laim", "Neuhausen"]}
            />
        </Suspense>

        <Suspense fallback={null}>
          <SimpleFAQ 
            items={faqItems}
            title="Häufige Fragen"
          />
        </Suspense>

        {/* Partnernetzwerk Angebot */}
        <section className="py-4 sm:py-6 lg:py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <Badge className="mb-4">Münchner Partnernetzwerk</Badge>
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Ihr kostenloses Angebot in 10 Schritten
            </h2>
            <p className="text-muted-foreground mb-4 sm:mb-6 max-w-xl mx-auto">
              Beantworten Sie ein paar Fragen zu Ihrem Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
            <Suspense fallback={null}>
              <ServiceBooking 
                serviceType="heizung"
                buttonText="Jetzt Angebot anfordern"
                buttonSize="lg"
              />
            </Suspense>
          </div>
        </section>

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Heizung defekt? Wir helfen sofort!
            </h2>
            <p className="text-primary-foreground/80 mb-4 sm:mb-6 max-w-xl mx-auto">
              Rufen Sie uns an oder buchen Sie direkt einen Termin. 
              Festpreis, schnelle Hilfe, 2 Jahre Garantie.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild data-testid="button-call-cta">
                <a href="tel:+4989444438872">
                  <Phone className="w-4 h-4 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link href="/termin">
                  <Calendar className="w-4 h-4 mr-2" />
                  Termin buchen
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <KeywordLinks currentPage="heizung" />
        
        <RelatedServices currentService="heizung" />
      </main>
      
      <InternalLinks
        title="Verwandte Leistungen"
        variant="footer-cta"
        links={[
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Installation mit bis zu 70% Förderung" },
          { href: "/fussbodenheizung-muenchen", text: "Fußbodenheizung", description: "Installation & Nachrüstung" },
          { href: "/foerderung", text: "Heizungsförderung 2026", description: "BAFA & KfW: Bis 70% Zuschuss" },
          { href: "/heizung-notdienst-24", text: "Heizung-Notdienst 24/7", description: "Heizungsausfall? Sofort-Hilfe!" },
          { href: "/haustechnik", text: "Haustechnik komplett", description: "Sanitär, Heizung, Klima aus einer Hand" },
        ]}
      />
      <Footer />
    </div>
  );
}
