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
  Wrench,
  Droplets,
  ShowerHead,
  Gauge,
  Calendar,
  Users,
  Hammer,
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
    icon: Droplets,
    title: "Wasserinstallation",
    price: "ab 92€",
    description: "Trinkwasserleitungen verlegen, Wasseranschlüsse erneuern, Absperrhähne einbauen.",
    features: ["Kupfer & PE-X", "DIN 1988", "Festpreis"]
  },
  {
    icon: ShowerHead,
    title: "WC & Waschbecken",
    price: "ab 280€",
    description: "Toilette montieren, Waschbecken einbauen, Dusche anschließen.",
    features: ["Geberit", "Villeroy & Boch", "Duravit"]
  },
  {
    icon: Wrench,
    title: "Rohrreinigung",
    price: "ab 81€",
    description: "Abfluss verstopft? Spirale, Hochdruckspülung, Kamerainspektion.",
    features: ["24/7 Notdienst", "Sofort-Hilfe", "Festpreis"]
  },
  {
    icon: AlertTriangle,
    title: "Rohrbruch",
    price: "ab 154€",
    description: "Wasserrohr geplatzt, Leitung undicht? 45-60 Min. vor Ort.",
    features: ["24h Notdienst", "Leck abdichten", "Rohr erneuern"]
  },
  {
    icon: Gauge,
    title: "Leckortung",
    price: "ab 178€",
    description: "Wasserverlust orten ohne Aufbruch. Thermografie, Akustik.",
    features: ["Zerstörungsfrei", "Präzise Ortung", "Dokumentation"]
  },
  {
    icon: Droplets,
    title: "Wasserhahn wechseln",
    price: "ab 80€",
    description: "Armatur austauschen, tropfenden Wasserhahn reparieren.",
    features: ["Grohe", "Hansgrohe", "Blanco"]
  }
];

const processSteps = [
  {
    step: 1,
    title: "Anruf",
    description: "Sie schildern Ihr Problem. Bei Notfällen sofortige Hilfe.",
    icon: Phone
  },
  {
    step: 2,
    title: "Termin",
    description: "Wir kommen pünktlich – oft noch am selben Tag.",
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
    description: "Saubere Arbeit, Sie zahlen nur den vereinbarten Preis.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Preis gilt – ohne Nachforderungen" },
  { title: "2 Jahre Garantie", description: "Auf alle Arbeiten und Materialien" },
  { title: "60 Min. Notdienst", description: "Schnelle Hilfe bei Rohrbruch" },
  { title: "Saubere Arbeit", description: "Schutzmaterialien, besenrein" }
];

const faqItems = [
  {
    question: "Was kostet ein Sanitär-Notdienst in München?",
    answer: "Anfahrtspauschale 49€, Reparaturen ab 92€. Sie erhalten vor Arbeitsbeginn einen verbindlichen Festpreis ohne versteckte Kosten."
  },
  {
    question: "Wie schnell sind Sie bei einem Notfall vor Ort?",
    answer: "Bei Rohrbruch oder Wasseraustritt in der Regel innerhalb von 60 Minuten. Wir sind 24/7 erreichbar, auch nachts und am Wochenende."
  },
  {
    question: "Arbeiten Sie auch am Wochenende?",
    answer: "Ja, unser Notdienst ist rund um die Uhr erreichbar – 365 Tage im Jahr, auch an Feiertagen."
  },
  {
    question: "Welche Marken verbauen Sie?",
    answer: "Wir arbeiten mit Premium-Herstellern: Grohe, Hansgrohe, Geberit, Villeroy & Boch, Duravit, Blanco."
  },
  {
    question: "Gibt es Garantie auf die Arbeit?",
    answer: "Ja, 2 Jahre Gewährleistung auf alle Arbeiten. Zusätzlich gelten die Herstellergarantien auf eingebaute Materialien."
  },
  {
    question: "In welchen Stadtteilen sind Sie tätig?",
    answer: "In ganz München und Umgebung: Schwabing, Bogenhausen, Sendling, Neuhausen, Pasing, Haidhausen und alle weiteren Stadtteile."
  }
];

export default function SanitaerPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title={seoMeta['/sanitaer'].title}
        description={seoMeta['/sanitaer'].description}
        canonical="https://aquapro24.de/sanitaer"
        keywords={seoMeta['/sanitaer'].keywords.join(', ')}
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Sanitär", url: "https://aquapro24.de/sanitaer" }
        ]}
        serviceSchema={{
          name: "Sanitär München",
          description: "Sanitär-Notdienst München: Rohrbruch, Verstopfung, Wasserinstallation. 60 Min. Reaktionszeit, Festpreis ab 92€.",
          serviceType: "Sanitär/Installation",
          urlSlug: "sanitaer",
          catalogName: "Sanitär-Leistungen",
          serviceOffers: [
            { name: "Rohrbruch Soforthilfe" },
            { name: "Abfluss entstopfen" },
            { name: "Wasserinstallation" },
            { name: "Armaturen austauschen" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 156
          }
        }}
        ogImageAlt="Sanitärinstallation München Wasserhahn Toilette Abfluss - Klempner Installateur alle Arbeiten Festpreis"
      />
      <Header />
      <Breadcrumbs items={[
        { label: "Leistungen", href: "/" },
        { label: "Sanitär & Klempner" }
      ]} />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_sanitaer" alt="" />
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
                Sanitär München – Klempner für Rohrbruch, Armaturen & WC
              </h1>
              
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Rohrbruch, Abfluss verstopft oder Wasserhahn tropft?</strong>
              </p>
              
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                Wir helfen schnell und zum Festpreis. 60 Minuten Reaktionszeit bei Notfällen – 24/7 erreichbar in ganz München.
              </p>
              
              <div className="bg-white/10 backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border border-white/20">
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Sonntagmorgen, Wasser tropft aus der Decke. Sie rufen uns an – in 45 Minuten ist unser Installateur bei Ihnen und dichtet den Rohrbruch ab. Festpreis, keine Überraschungen.
                </p>
              </div>
              
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>Über 2.800 zufriedene Kunden</strong> – Sanitär-Reparaturen ab 92€ zum Festpreis
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
                  <span>2 Jahre Garantie</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Leistungen Section */}
        <section className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Klempner München: Leistungen Klempner Leistungen München: Preise & Services Preise</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Vom tropfenden Wasserhahn bis zum Rohrbruch-Notfall – wir helfen schnell und zuverlässig.
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

        {/* Ablauf Section */}
        <section className="py-4 sm:py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">Sanitär Ablauf München: So einfach geht's</h2>
              <p className="text-sm sm:text-base text-muted-foreground max-w-2xl mx-auto">
                Von Ihrem Anruf bis zur fertigen Reparatur – transparent und stressfrei.
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

        {/* Garantien Section */}
        <section className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">AquaPro 24 Sanitär Garantie: Unser Versprechen</h2>
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

        {/* Marken Section */}
        <section className="py-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-4 sm:mb-6">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">Sanitär Markenqualität München: Grohe & Hansgrohe</h2>
              <p className="text-muted-foreground text-sm">
                Wir verbauen nur Produkte von führenden Herstellern.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Grohe</div>
                <div className="text-xs">Armaturen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Hansgrohe</div>
                <div className="text-xs">Brausen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Geberit</div>
                <div className="text-xs">Installation</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Villeroy & Boch</div>
                <div className="text-xs">Keramik</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Duravit</div>
                <div className="text-xs">Sanitär</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Blanco</div>
                <div className="text-xs">Küche</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6">
              Klempner München: Ihr zuverlässiger Partner
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Als Münchner Sanitär-Fachbetrieb sind wir seit über 20 Jahren Ihr zuverlässiger Partner 
                für alle Arbeiten rund um Wasser und Abwasser. Ob tropfender Wasserhahn, verstopfter 
                Abfluss oder Rohrbruch-Notfall – wir helfen schnell, sauber und zum Festpreis.
              </p>
              <p>
                Unsere Sanitärfachkräfte arbeiten nach höchsten Standards und verwenden ausschließlich 
                Markenprodukte von Grohe, Hansgrohe, Geberit und Villeroy & Boch. Das bedeutet für Sie: 
                langlebige Qualität mit 2 Jahren Garantie.
              </p>
            </div>
          </div>
        </section>

        <Suspense fallback={null}>
            <ServiceAreas 
              serviceName="Sanitär" 
              highlightAreas={["Schwabing", "Maxvorstadt", "Haidhausen"]}
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
                serviceType="sanitaer"
                buttonText="Jetzt Angebot anfordern"
                buttonSize="lg"
              />
            </Suspense>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Sanitär-Problem? Wir helfen sofort!
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

        <KeywordLinks currentPage="sanitaer" />
        
        <RelatedServices currentService="sanitaer" />
      </main>
      
      <InternalLinks
        title="Verwandte Leistungen"
        variant="footer-cta"
        links={[
          { href: "/rohrreinigung", text: "Rohrreinigung München", description: "Professionelle Abflussreinigung ab 81€" },
          { href: "/armaturen", text: "Armaturen & Wasserhähne", description: "Grohe, Hansgrohe & mehr" },
          { href: "/bad", text: "Badsanierung komplett", description: "Komplettumbau aus einer Hand" },
          { href: "/warmwasser", text: "Warmwasser-Lösungen", description: "Boiler, Durchlauferhitzer, Speicher" },
          { href: "/sanitaer-notdienst-24", text: "Sanitär-Notdienst 24/7", description: "Rohrbruch & Wasserschaden Soforthilfe" },
        ]}
      />
      <Footer />
    </div>
  );
}
