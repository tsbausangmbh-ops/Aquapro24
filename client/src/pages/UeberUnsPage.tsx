import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Award, 
  Users, 
  Clock, 
  Shield, 
  Heart, 
  Wrench,
  Phone,
  CheckCircle2,
  Star,
  MapPin,
  Target,
  Zap,
  ThumbsUp,
  Building,
  BadgeCheck,
  MessageCircle,
  AlertTriangle,
  TrendingUp,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import teamImage from "@assets/stock_images/professional_busines_7b2784dc.jpg";
import technicianImage from "@assets/stock_images/professional_plumber_8d5ea632.jpg";
import workshopImage from "@assets/stock_images/modern_plumbing_work_077b9e6b.jpg";

const stats = [
  { value: "Seit 2005", label: "Partnernetzwerk", sublabel: "in München aktiv" },
  { value: "2.800+", label: "Zufriedene Kunden", sublabel: "in ganz München" },
  { value: "4.9", label: "Sterne Bewertung", sublabel: "auf Google" },
  { value: "Ab 60 Min.", label: "Reaktionszeit", sublabel: "bei Notfällen" }
];

const customerProblems = [
  {
    icon: AlertTriangle,
    problem: "Handwerker kommen nicht pünktlich",
    solution: "Wir halten Termine ein - oder Sie bekommen 50€ Gutschrift",
    nlpText: "Kennen Sie das? Der Handwerker sagt 'zwischen 8 und 12 Uhr' - und Sie warten den ganzen Tag."
  },
  {
    icon: AlertTriangle,
    problem: "Unklare Preise und böse Überraschungen",
    solution: "Festpreis vor Arbeitsbeginn - schriftlich und verbindlich",
    nlpText: "Die Rechnung ist plötzlich doppelt so hoch wie besprochen? Bei uns nicht."
  },
  {
    icon: AlertTriangle,
    problem: "Schlechte Erreichbarkeit bei Notfällen",
    solution: "24/7 erreichbar - echte Menschen, keine Warteschleife",
    nlpText: "Sonntagabend Wasserrohrbruch - und keiner geht ran? Wir sind immer da."
  },
  {
    icon: AlertTriangle,
    problem: "Handwerker hinterlassen Chaos",
    solution: "Wir räumen auf und schützen Ihre Böden mit Folien",
    nlpText: "Dreck überall, Werkzeug liegt rum? Bei uns nicht - wir hinterlassen es sauberer."
  }
];

const values = [
  {
    icon: Heart,
    title: "Kundenprobleme lösen",
    description: "Wir existieren, um Ihre Probleme zu lösen - schnell, nachhaltig und stressfrei für Sie."
  },
  {
    icon: Shield,
    title: "Absolute Verlässlichkeit",
    description: "Termine werden eingehalten, Preise sind verbindlich, Zusagen werden erfüllt - garantiert."
  },
  {
    icon: Zap,
    title: "Schnellste Hilfe",
    description: "Ab 60 Minuten vor Ort in München. Auch nachts, am Wochenende und an Feiertagen."
  },
  {
    icon: Award,
    title: "Geprüfte Fachbetriebe",
    description: "Nur zertifizierte Fachbetriebe mit nachgewiesener Qualität in unserem Partnernetzwerk."
  }
];

const differentiators = [
  { icon: CheckCircle2, text: "Festpreisgarantie vor Arbeitsbeginn - schriftlich" },
  { icon: CheckCircle2, text: "24/7 Notdienst mit echtem Ansprechpartner" },
  { icon: CheckCircle2, text: "Geprüfte Fachbetriebe mit Qualitätsversprechen" },
  { icon: CheckCircle2, text: "Klare Kommunikation ohne Fachchinesisch" },
  { icon: CheckCircle2, text: "Saubere Arbeit - Bodenschutz und Aufräumen inklusive" },
  { icon: CheckCircle2, text: "5 Jahre Gewährleistung auf alle Arbeiten" }
];

const testimonials = [
  {
    name: "M. Schneider",
    location: "München-Schwabing",
    text: "Endlich ein Handwerker, der pünktlich ist und hält, was er verspricht. Die Badsanierung war perfekt geplant und in 3 Wochen abgeschlossen.",
    rating: 5,
    service: "Badsanierung"
  },
  {
    name: "K. Wagner",
    location: "München-Bogenhausen",
    text: "Sonntagabend Wasserrohrbruch - in 40 Minuten war der Techniker da. Professionell, freundlich, faire Rechnung. Absolute Empfehlung!",
    rating: 5,
    service: "Notdienst"
  },
  {
    name: "S. Hoffmann",
    location: "München-Sendling",
    text: "Die Wärmepumpen-Beratung war ehrlich und kompetent. Kein Verkaufsdruck, sondern echte Expertise. Spare jetzt 55% Heizkosten.",
    rating: 5,
    service: "Wärmepumpe"
  }
];

const serviceAreas = [
  "Schwabing", "Bogenhausen", "Sendling", "Pasing", 
  "Maxvorstadt", "Haidhausen", "Neuhausen", "Trudering",
  "Laim", "Giesing", "Moosach", "Milbertshofen"
];

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "@id": "https://aquapro24.de/ueber-uns#webpage",
  "url": "https://aquapro24.de/ueber-uns",
  "name": "Über AquaPro24 München - Ihr Partnernetzwerk für Sanitär & Heizung seit 2005",
  "description": "Erfahren Sie mehr über AquaPro24 München: Partnernetzwerk für Sanitär, Heizung und Badsanierung. 2.800+ zufriedene Kunden, 24/7 Notdienst in München.",
  "isPartOf": {
    "@type": "WebSite",
    "@id": "https://aquapro24.de/#website",
    "url": "https://aquapro24.de",
    "name": "AquaPro24 München",
    "publisher": {
      "@type": "Organization",
      "@id": "https://aquapro24.de/#organization"
    }
  },
  "mainEntity": {
    "@type": ["Plumber", "HVACBusiness", "LocalBusiness"],
    "@id": "https://aquapro24.de/#organization",
    "name": "KSHW München - Sanitär & Heizung",
    "alternateName": ["AquaPro24", "KSHW München", "Sanitär München", "Heizung München"],
    "legalName": "KSHW München - Mustafa Sakar",
    "description": "Ihr Münchner Partnernetzwerk für Sanitär, Heizung und Badsanierung. Seit 2005 verbinden wir geprüfte Fachbetriebe mit Kunden, die kompetente Hilfe brauchen.",
    "slogan": "Ihre Probleme lösen - schnell, fair, zuverlässig",
    "url": "https://aquapro24.de",
    "telephone": "+49-152-12274043",
    "email": "info@aquapro24.de",
    "foundingDate": "2005",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": "Hardenbergstr. 4",
      "addressLocality": "München",
      "addressRegion": "Bayern",
      "postalCode": "80992",
      "addressCountry": "DE"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": 48.1058,
      "longitude": 11.5388
    },
    "areaServed": [
      { "@type": "City", "name": "München", "sameAs": "https://de.wikipedia.org/wiki/München" },
      { "@type": "AdministrativeArea", "name": "Schwabing" },
      { "@type": "AdministrativeArea", "name": "Bogenhausen" },
      { "@type": "AdministrativeArea", "name": "Sendling" },
      { "@type": "AdministrativeArea", "name": "Pasing" },
      { "@type": "AdministrativeArea", "name": "Maxvorstadt" },
      { "@type": "AdministrativeArea", "name": "Haidhausen" },
      { "@type": "AdministrativeArea", "name": "Neuhausen" },
      { "@type": "AdministrativeArea", "name": "Trudering" },
      { "@type": "AdministrativeArea", "name": "Laim" },
      { "@type": "AdministrativeArea", "name": "Giesing" },
      { "@type": "AdministrativeArea", "name": "Moosach" }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Sanitär & Heizung Dienstleistungen München",
      "itemListElement": [
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Sanitär-Notdienst München" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Heizungsreparatur München" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Badsanierung München" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Wärmepumpen-Installation München" }},
        { "@type": "Offer", "itemOffered": { "@type": "Service", "name": "Haustechnik München" }}
      ]
    },
    "aggregateRating": {
      "@type": "AggregateRating",
      "ratingValue": "4.9",
      "reviewCount": "2847",
      "bestRating": "5",
      "worstRating": "1"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "07:00",
        "closes": "18:00"
      },
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Saturday"],
        "opens": "08:00",
        "closes": "14:00"
      }
    ],
    "priceRange": "€€",
    "paymentAccepted": ["Cash", "Credit Card", "EC Card", "Bank Transfer", "Invoice"],
    "currenciesAccepted": "EUR"
  }
};

export default function UeberUnsPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Über uns | Sanitär München seit 2005 | AquaPro24"
        description="Seit 2005 lösen wir Sanitär-Probleme in München. Geprüfte Fachbetriebe, Festpreise, 2.800+ zufriedene Kunden. Das ist unser Versprechen an Sie."
        canonical="https://aquapro24.de/ueber-uns"
        keywords="Über uns AquaPro24 München, Partnernetzwerk Sanitär Schwabing, Heizung Fachbetrieb Bogenhausen, Installateur Sendling, Fachbetrieb Pasing, Sanitär Team Maxvorstadt, Heizungsbauer Haidhausen, Klempner Neuhausen, Sanitär Notdienst Trudering, Handwerker Laim, Installateur Giesing, Sanitär Moosach, Heizungsmonteur Milbertshofen"
        structuredData={aboutPageSchema}
      />
      <Header />
      <main id="main-content">
        {/* Hero Section - H1 optimiert für SEO */}
        <section className="relative py-16 lg:py-24 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${teamImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="gap-2 mb-4">
                <BadgeCheck className="w-4 h-4" />
                Geprüfte Fachbetriebe München
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                AquaPro24 München:<br />
                <span className="text-primary">Wir lösen Ihre Probleme</span>
              </h1>
              <p className="text-lg text-white/90 leading-relaxed mb-4">
                <strong>Sie haben ein Problem mit Sanitär oder Heizung?</strong> Wir wissen, wie frustrierend 
                das sein kann - besonders wenn der letzte Handwerker nicht pünktlich war oder die 
                Rechnung höher ausfiel als besprochen.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Seit 2005 verbinden wir geprüfte Fachbetriebe mit Münchnern, die 
                <strong> zuverlässige, faire und schnelle Hilfe</strong> verdienen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-about">
                    <Phone className="w-5 h-5 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="backdrop-blur-sm bg-white/10 border-white/30 text-white" asChild>
                  <Link href="/termin">
                    <Calendar className="w-5 h-5 mr-2" />
                    24h Terminbuchung
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        {/* Stats Section */}
        <section className="pt-8 pb-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <div key={index} className="text-center">
                  <div className="text-3xl lg:text-4xl font-bold text-primary">{stat.value}</div>
                  <div className="font-medium mt-1">{stat.label}</div>
                  <div className="text-sm text-muted-foreground">{stat.sublabel}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* NLP Problem-Solution Section */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <Badge variant="outline" className="mb-4">Wir verstehen Ihre Frustration</Badge>
              <h2 className="text-3xl font-bold mb-4">
                Diese Probleme kennen Sie sicher
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Schlechte Erfahrungen mit Handwerkern? Sie sind nicht allein. Deshalb haben wir 
                AquaPro24 gegründet - um diese Probleme ein für alle Mal zu lösen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {customerProblems.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <item.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <div className="space-y-2">
                        <h3 className="font-semibold text-lg">{item.problem}</h3>
                        <p className="text-sm text-muted-foreground italic">"{item.nlpText}"</p>
                        <div className="flex items-center gap-2 text-accent pt-2">
                          <TrendingUp className="w-4 h-4" />
                          <span className="font-medium text-sm">{item.solution}</span>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Story Section */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="order-2 lg:order-1">
                <div className="rounded-2xl overflow-hidden shadow-xl">
                  <img 
                    src={technicianImage} 
                    alt="Sanitär- und Heizungsmeister bei der Arbeit in München" 
                    className="w-full h-80 object-cover"
                    loading="lazy"
                  />
                </div>
              </div>
              <div className="order-1 lg:order-2 space-y-6">
                <Badge variant="outline">Unsere Geschichte</Badge>
                <h2 className="text-3xl font-bold">
                  Warum wir AquaPro24 gegründet haben
                </h2>
                <div className="space-y-4 text-muted-foreground">
                  <p>
                    <strong className="text-foreground">Das Problem:</strong> Zu viele Münchner berichten von 
                    unzuverlässigen Handwerkern, unklaren Preisen und mangelnder Kommunikation. Das wollten 
                    wir ändern.
                  </p>
                  <p>
                    <strong className="text-foreground">Unsere Lösung:</strong> Ein Partnernetzwerk aus 
                    geprüften Fachbetrieben, die unsere Werte teilen: Pünktlichkeit, Festpreise, 
                    saubere Arbeit und echte Kundenorientierung.
                  </p>
                  <p>
                    <strong className="text-foreground">Das Ergebnis:</strong> Seit 2005 haben wir über 
                    2.800 Kunden in München geholfen - von Schwabing bis Sendling, von Bogenhausen bis Pasing.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-10 lg:pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-4">Unsere Werte</Badge>
              <h2 className="text-3xl font-bold mb-4">Wofür AquaPro24 München steht</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Diese Prinzipien sind keine Marketing-Phrasen - sie bestimmen jede Entscheidung 
                und jeden Handgriff unserer Partnerbetriebe.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {values.map((value, index) => (
                <Card key={index} className="text-center border-0 shadow-sm bg-background">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                      <value.icon className="w-7 h-7 text-primary" />
                    </div>
                    <h3 className="font-semibold text-lg mb-2">{value.title}</h3>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Differentiators Section */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-6 items-center">
              <div className="space-y-6">
                <Badge variant="outline">Warum AquaPro24?</Badge>
                <h2 className="text-3xl font-bold">
                  Das unterscheidet uns von anderen Handwerkern
                </h2>
                <p className="text-muted-foreground">
                  Sie haben schlechte Erfahrungen gemacht? Wir verstehen das. Deshalb haben wir 
                  klare Standards definiert, die jeder unserer Partnerbetriebe einhält - ohne Ausnahme.
                </p>
                <div className="space-y-4">
                  {differentiators.map((item, index) => (
                    <div key={index} className="flex items-start gap-3">
                      <item.icon className="w-5 h-5 text-accent flex-shrink-0 mt-0.5" />
                      <span>{item.text}</span>
                    </div>
                  ))}
                </div>
              </div>
              <div className="rounded-2xl overflow-hidden shadow-xl">
                <img 
                  src={workshopImage} 
                  alt="Professionelle Sanitär-Werkstatt und Ausrüstung in München" 
                  className="w-full h-80 object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas Section - Geo SEO */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                Einsatzgebiet
              </Badge>
              <h2 className="text-3xl font-bold mb-4">
                AquaPro24 in ganz München für Sie da
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Egal in welchem Stadtteil Sie wohnen - unsere Partnerbetriebe sind ab 60 Minuten vor Ort.
              </p>
            </div>
            <div className="flex flex-wrap justify-center gap-3">
              {serviceAreas.map((area, index) => (
                <Badge key={index} variant="outline" className="text-sm py-2 px-4">
                  <MapPin className="w-3 h-3 mr-1" />
                  München-{area}
                </Badge>
              ))}
            </div>
            <p className="text-center text-sm text-muted-foreground mt-6">
              Sowie alle weiteren Münchner Stadtteile und das Umland bis 30 km
            </p>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <Badge variant="secondary" className="mb-4">Echte Kundenstimmen</Badge>
              <h2 className="text-3xl font-bold mb-4">Was Münchner über uns sagen</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Echte Bewertungen von echten Kunden aus München - ungefiltert und authentisch
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-6">
              {testimonials.map((testimonial, index) => (
                <Card key={index} className="border-0 shadow-sm">
                  <CardContent className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <div className="flex gap-1">
                        {[...Array(testimonial.rating)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-accent text-accent" />
                        ))}
                      </div>
                      <Badge variant="secondary" className="text-xs">{testimonial.service}</Badge>
                    </div>
                    <p className="text-muted-foreground mb-6">"{testimonial.text}"</p>
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <Users className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <div className="font-medium">{testimonial.name}</div>
                        <div className="text-sm text-muted-foreground">{testimonial.location}</div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">
              Bereit für einen Handwerker, dem Sie vertrauen können?
            </h2>
            <p className="text-primary-foreground/80 mb-4 max-w-2xl mx-auto text-lg">
              Vereinbaren Sie jetzt einen Beratungstermin oder kontaktieren Sie uns direkt. 
              Kostenlose Beratung, unverbindliches Angebot - Sie entscheiden dann in Ruhe.
            </p>
            <div className="flex flex-wrap justify-center gap-4 mb-4">
              <Button size="lg" className="bg-white text-primary border-white gap-2" asChild>
                <Link href="/termin">
                  <Calendar className="w-5 h-5" />
                  Beratungstermin buchen
                </Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white gap-2" asChild>
                <a href="mailto:info@aquapro24.de?subject=Beratungsanfrage">
                  <MessageSquare className="w-5 h-5" />
                  Kostenlos beraten lassen
                </a>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-cta">
                  <Phone className="w-5 h-5 mr-2" />
                  0152 12274043
                </a>
              </Button>
              <Button size="lg" className="bg-blue-600 text-white border-blue-700" asChild>
                <Link href="/termin">
                  <Clock className="w-5 h-5 mr-2" />
                  24h Terminbuchung
                </Link>
              </Button>
            </div>
            <div className="flex flex-wrap justify-center gap-4 mt-10 text-sm text-primary-foreground/70">
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                Ganz München & Umland
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4" />
                24/7 Notdienst
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4" />
                Kostenlose Beratung
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
