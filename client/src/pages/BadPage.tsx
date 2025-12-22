import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import SimpleFAQ from "@/components/SimpleFAQ";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Clock,
  Shield,
  Star,
  ArrowRight,
  Calendar,
  Sparkles,
  Ruler,
  Palette,
  Users,
  Award,
  Home,
  Hammer,
  Calculator,
  Euro,
  FileText,
  HelpCircle
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/modern_white_grey_ba_130a1b23.jpg";
import galleryImage1 from "@assets/stock_images/minimalist_white_bat_63ea775a.jpg";
import galleryImage2 from "@assets/stock_images/minimalist_luxury_ba_d497e62b.jpg";
import galleryImage3 from "@assets/stock_images/modern_accessible_ba_f2b18796.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

const packages = [
  {
    name: "Standard",
    price: "ab 16.000€",
    size: "6-8 m²",
    duration: "2-3 Wochen",
    features: [
      "Kompletter Abriss & Entsorgung",
      "Neue Wasser- & Abwasserleitungen",
      "Qualitätsfliesen verlegt",
      "WC, Waschtisch & Dusche",
      "Markenarmaturen (Grohe)",
      "5 Jahre Garantie"
    ],
    popular: false
  },
  {
    name: "Komfort",
    price: "ab 22.000€",
    size: "6-8 m²",
    duration: "2-3 Wochen",
    features: [
      "Alles aus Standard, plus:",
      "Bodengleiche Dusche (XXL)",
      "Villeroy & Boch Keramik",
      "Hansgrohe Regendusche",
      "LED-Spiegelschrank",
      "Handtuchheizkörper"
    ],
    popular: true
  },
  {
    name: "Premium",
    price: "ab 28.000€",
    size: "8-12 m²",
    duration: "3-4 Wochen",
    features: [
      "Alles aus Komfort, plus:",
      "Freistehende Badewanne",
      "Fußbodenheizung",
      "Duravit & Kaldewei",
      "Smartes Lichtsystem",
      "Naturstein-Optionen"
    ],
    popular: false
  }
];

const processSteps = [
  {
    step: 1,
    title: "Kostenlose Beratung",
    description: "Wir kommen zu Ihnen, nehmen Maß und besprechen Ihre Wünsche. Unverbindlich und kostenlos.",
    icon: Users
  },
  {
    step: 2,
    title: "3D-Planung",
    description: "Sie sehen Ihr neues Bad vorab am Bildschirm. Änderungen jederzeit möglich.",
    icon: Palette
  },
  {
    step: 3,
    title: "Festpreisangebot",
    description: "Transparenter Preis ohne versteckte Kosten. Gilt verbindlich bis zur Fertigstellung.",
    icon: Ruler
  },
  {
    step: 4,
    title: "Umsetzung",
    description: "In 2-4 Wochen ist Ihr Traumbad fertig. Alle Gewerke aus einer Hand.",
    icon: Hammer
  }
];

const guarantees = [
  { title: "Festpreisgarantie", description: "Der Preis gilt – ohne Nachforderungen" },
  { title: "5 Jahre Garantie", description: "Auf alle Arbeiten und Materialien" },
  { title: "Termingarantie", description: "Fertigstellung im vereinbarten Zeitraum" },
  { title: "Sauberkeitsgarantie", description: "Wir hinterlassen Ihr Zuhause besenrein" }
];

const faqItems = [
  {
    question: "Was kostet eine Badsanierung in München?",
    answer: "Eine Komplettsanierung eines 6-8 m² Bades beginnt bei 16.000€. Komfort-Bäder mit Markenausstattung kosten ab 22.000€, Premium-Bäder mit Extras ab 28.000€. Barrierefreie Umbauten ab 20.000€ sind oft KfW-förderfähig. Sie erhalten von uns immer einen verbindlichen Festpreis."
  },
  {
    question: "Wie lange dauert eine Badsanierung?",
    answer: "Eine Standard-Sanierung dauert 2-3 Wochen, größere Projekte 3-4 Wochen. Wir erstellen einen detaillierten Zeitplan und halten uns daran. Während der Arbeiten richten wir bei Bedarf ein Behelfsbad ein."
  },
  {
    question: "Bieten Sie barrierefreie Badsanierung an?",
    answer: "Ja, wir sind spezialisiert auf barrierefreie Bäder: bodengleiche Duschen, Haltegriffe, rutschfeste Böden, erhöhte WCs. KfW-Förderung bis 6.250€ möglich. Wir beraten Sie zu allen Fördermöglichkeiten."
  },
  {
    question: "Welche Garantie erhalte ich?",
    answer: "5 Jahre Gewährleistung auf alle Arbeiten. Zusätzlich gelten die Herstellergarantien (z.B. 25 Jahre auf Villeroy & Boch Keramik). Bei Problemen sind wir schnell zur Stelle."
  },
  {
    question: "Muss ich während der Sanierung ausziehen?",
    answer: "Nein, in den meisten Fällen nicht. Wir richten ein Provisorium ein und arbeiten so, dass Sie Ihr Zuhause weiter nutzen können. Staub und Lärm werden auf ein Minimum reduziert."
  },
  {
    question: "Welche Marken verbauen Sie?",
    answer: "Wir arbeiten mit Premium-Herstellern: Villeroy & Boch, Duravit, Geberit für Keramik. Grohe, Hansgrohe für Armaturen. Kaldewei, Bette für Wannen. Alle Produkte sind qualitätsgeprüft und langlebig."
  }
];

export default function BadPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Badsanierung München | Komplett & hochwertig"
        description="Badsanierung in München: Komplett, modern & stressfrei. Planung, Ausführung & Koordination aus einer Hand. Jetzt beraten lassen!"
        canonical="https://aquapro24.de/bad"
        keywords="Badsanierung München, Bad renovieren München, Badezimmer sanieren, Komplettbad München, barrierefreies Bad München, Badumbau München"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Badsanierung", url: "https://aquapro24.de/bad" }
        ]}
        serviceSchema={{
          name: "Badsanierung München",
          description: "Badsanierung München: Komplettumbau in 2-4 Wochen, 3D-Planung inklusive, Festpreis ab 16.000€. 5 Jahre Garantie.",
          serviceType: "Badsanierung",
          urlSlug: "bad",
          catalogName: "Badsanierung-Leistungen",
          serviceOffers: [
            { name: "Komplettsanierung in 2-4 Wochen" },
            { name: "Barrierefreies Bad mit KfW-Förderung" },
            { name: "3D-Planung & Visualisierung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          }
        }}
      />
      <Header />
      
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-2xl">
              <Badge className="mb-4 bg-white/20 text-white border-white/30">
                <Sparkles className="w-3 h-3 mr-1" />
                Traumbad vom Profi
              </Badge>
              
              <h1 className="text-4xl lg:text-5xl font-bold text-white mb-4">
                Badsanierung München – Komplettumbau vom Profi
              </h1>
              
              <p className="text-xl text-white/90 mb-6">
                Ihr neues Traumbad in 2-4 Wochen. Festpreis ab 16.000€, 
                5 Jahre Garantie, alle Gewerke aus einer Hand.
              </p>
              
              <div className="flex flex-wrap gap-3 mb-8">
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>Festpreisgarantie</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>3D-Planung gratis</span>
                </div>
                <div className="flex items-center gap-2 text-white/80 text-sm">
                  <CheckCircle2 className="w-4 h-4 text-green-400" />
                  <span>5 Jahre Garantie</span>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild data-testid="button-call-hero">
                  <a href="tel:+4915212274043">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt beraten lassen
                  </a>
                </Button>
                <ServiceBooking 
                  serviceType="bad"
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

        {/* Bildergalerie Section */}
        <section className="py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Badsanierung München: Von der Vision zum Traumbad</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Moderne Bäder, professionelle Umsetzung, barrierefreie Lösungen – alles aus einer Hand.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={galleryImage1} 
                  alt="Walk-in Dusche mit Glaswand" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Walk-in Duschen</h3>
                  <p className="text-white/80 text-sm">
                    Bodengleich, rahmenlos, großzügig – modernes Duschvergnügen
                  </p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={galleryImage2} 
                  alt="Luxusbad mit freistehender Badewanne" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Luxusbäder</h3>
                  <p className="text-white/80 text-sm">
                    Freistehende Wannen, edle Materialien, exklusives Design
                  </p>
                </div>
              </div>
              
              <div className="group relative overflow-hidden rounded-lg">
                <img 
                  src={galleryImage3} 
                  alt="Barrierefreies Bad mit Haltegriffen" 
                  className="w-full h-64 object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-4">
                  <h3 className="text-lg font-semibold text-white mb-1">Barrierefreie Bäder</h3>
                  <p className="text-white/80 text-sm">
                    Komfortabel, sicher, zukunftssicher – mit KfW-Förderung
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Pakete Section */}
        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Bad Preise München: Transparente Pakete</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Transparente Preise, klare Leistungen. Wählen Sie das Paket, das zu Ihnen passt.
              </p>
            </div>
            
            <div className="grid md:grid-cols-3 gap-6">
              {packages.map((pkg) => (
                <Card 
                  key={pkg.name} 
                  className={`relative ${pkg.popular ? 'border-primary shadow-lg' : ''}`}
                >
                  {pkg.popular && (
                    <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                      <Badge className="bg-primary text-primary-foreground">
                        <Star className="w-3 h-3 mr-1" />
                        Beliebt
                      </Badge>
                    </div>
                  )}
                  <CardContent className="p-6">
                    <div className="text-center mb-6">
                      <h3 className="text-xl font-bold mb-2">{pkg.name}</h3>
                      <div className="text-3xl font-bold text-primary mb-1">{pkg.price}</div>
                      <div className="text-sm text-muted-foreground">
                        {pkg.size} | {pkg.duration}
                      </div>
                    </div>
                    
                    <ul className="space-y-3 mb-6">
                      {pkg.features.map((feature, index) => (
                        <li key={index} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 mt-0.5 shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                    
                    <Button 
                      className="w-full" 
                      variant={pkg.popular ? "default" : "outline"}
                      asChild
                    >
                      <a href="tel:+4915212274043">
                        Angebot anfordern
                      </a>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            <div className="text-center mt-8 space-y-3">
              <p className="text-sm text-muted-foreground">
                Barrierefreies Bad ab 20.000€ | KfW-Förderung bis 6.250€ möglich | Alle Preise inkl. 19% MwSt.
              </p>
              <Button variant="outline" asChild>
                <a href="#foerderrechner" data-testid="button-foerderrechner">
                  <Calculator className="w-4 h-4 mr-2" />
                  Zum KfW-Förderrechner
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Ablauf Section */}
        <section className="py-6 lg:py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Badsanierung Ablauf München: So läuft Ihr Projekt</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der ersten Beratung bis zur Schlüsselübergabe – transparent und stressfrei.
              </p>
            </div>
            
            <div className="grid md:grid-cols-4 gap-6">
              {processSteps.map((step) => (
                <div key={step.step} className="text-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
                    <step.icon className="w-8 h-8 text-primary" />
                  </div>
                  <div className="text-sm font-medium text-primary mb-2">Schritt {step.step}</div>
                  <h3 className="font-semibold mb-2">{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Garantien Section */}
        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold mb-3">Bad Garantie München: Unser Versprechen</h2>
              <p className="text-muted-foreground">
                Sicherheit und Qualität – darauf können Sie sich verlassen.
              </p>
            </div>
            
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {guarantees.map((item, index) => (
                <Card key={index}>
                  <CardContent className="p-5 text-center">
                    <Shield className="w-8 h-8 text-primary mx-auto mb-3" />
                    <h3 className="font-semibold mb-1">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* KfW-Förderung Section */}
        <section id="foerderrechner" className="py-6 lg:py-8 bg-primary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-10">
              <Badge className="mb-4">
                <Euro className="w-3 h-3 mr-1" />
                Staatliche Förderung
              </Badge>
              <h2 className="text-3xl font-bold mb-3">Bad Förderung München: KfW-Zuschuss bis 6.250€</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Bis zu 6.250€ Zuschuss vom Staat für Ihren barrierefreien Badumbau. Wir beraten Sie und helfen beim Antrag.
              </p>
            </div>
            
            <div className="grid lg:grid-cols-2 gap-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                      <Calculator className="w-5 h-5 text-primary" />
                    </div>
                    <h3 className="text-xl font-bold">Förderrechner</h3>
                  </div>
                  
                  <div className="space-y-4">
                    <div className="p-4 bg-muted/50 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Beispiel: Barrierefreies Bad</div>
                      <div className="text-2xl font-bold">20.000€</div>
                      <div className="text-xs text-muted-foreground mt-1">
                        Bodengleiche Dusche, Haltegriffe, erhöhtes WC, rutschfester Boden
                      </div>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-sm">KfW-Programm 455-B</span>
                      <span className="font-medium">Barrierereduzierung</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-sm">Fördersatz</span>
                      <span className="font-medium">10% (max. 6.250€)</span>
                    </div>
                    
                    <div className="flex items-center justify-between py-2 border-b">
                      <span className="text-sm">Ihre Investition</span>
                      <span className="font-medium">20.000€</span>
                    </div>
                    
                    <div className="p-4 bg-green-50 dark:bg-green-900/20 rounded-lg">
                      <div className="text-sm text-muted-foreground mb-1">Ihr KfW-Zuschuss</div>
                      <div className="text-3xl font-bold text-green-600">2.000€</div>
                      <div className="text-sm text-muted-foreground mt-1">
                        Sie zahlen nur: <span className="font-semibold text-foreground">18.000€</span>
                      </div>
                    </div>
                    
                                      </div>
                </CardContent>
              </Card>
              
              <div className="space-y-4">
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <FileText className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Kostenlose Förderberatung</h4>
                        <p className="text-sm text-muted-foreground">
                          Wir prüfen Ihre Förderfähigkeit und helfen beim Antrag. Beratung vor Ort inklusive.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <CheckCircle2 className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Förderfähige Maßnahmen</h4>
                        <ul className="text-sm text-muted-foreground space-y-1">
                          <li>Bodengleiche Dusche einbauen</li>
                          <li>Haltegriffe & Stützklappgriffe</li>
                          <li>Rutschfeste Bodenbeläge</li>
                          <li>Erhöhtes WC / Dusch-WC</li>
                          <li>Unterfahrbarer Waschtisch</li>
                        </ul>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-5">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                        <HelpCircle className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1">Wer wird gefördert?</h4>
                        <p className="text-sm text-muted-foreground">
                          Eigentümer, Mieter (mit Zustimmung), Wohnungseigentümergemeinschaften. 
                          Keine Altersgrenze, kein Pflegegrad erforderlich.
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                              </div>
            </div>
          </div>
        </section>

        {/* Marken Section */}
        <section className="py-4 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-2">Markenqualität für Ihr Bad</h2>
              <p className="text-muted-foreground text-sm">
                Wir verbauen nur Produkte von führenden Herstellern.
              </p>
            </div>
            
            <div className="flex flex-wrap justify-center gap-8 text-muted-foreground">
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Villeroy & Boch</div>
                <div className="text-xs">Keramik</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Duravit</div>
                <div className="text-xs">Sanitär</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Grohe</div>
                <div className="text-xs">Armaturen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Hansgrohe</div>
                <div className="text-xs">Duschen</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Geberit</div>
                <div className="text-xs">Installation</div>
              </div>
              <div className="text-center">
                <div className="font-bold text-lg text-foreground">Kaldewei</div>
                <div className="text-xs">Wannen</div>
              </div>
            </div>
          </div>
        </section>

        {/* SEO Text Section */}
        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6">
              Ihr Traumbad in besten Händen
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Eine Badsanierung ist eine Investition in Ihre Lebensqualität. Als Münchner Partnernetzwerk 
                haben wir hunderte Bäder erfolgreich saniert – von der kompakten Stadtwohnung bis zur 
                großzügigen Villa. Unser Versprechen: Festpreis, Termingarantie, 5 Jahre Gewährleistung.
              </p>
              <p>
                Bei uns erhalten Sie alles aus einer Hand. Kein Jonglieren mit verschiedenen Handwerkern, 
                keine Abstimmungsprobleme. Wir koordinieren Sanitär, Fliesen, Elektrik und Malerarbeiten – 
                Sie haben nur einen Ansprechpartner.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Barrierefreies Bad mit Förderung</h3>
              <p>
                Barrierefreie Bäder sind nicht nur für Senioren sinnvoll. Bodengleiche Duschen, breite 
                Türen und rutschfeste Böden bieten Komfort für alle Generationen. Mit der KfW-Förderung 
                erhalten Sie bis zu 6.250€ Zuschuss. Wir beraten Sie gerne zu den Möglichkeiten.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Badsanierung" 
          highlightAreas={["Bogenhausen", "Schwabing", "Sendling"]}
        />

        <SimpleFAQ 
          items={faqItems}
          title="Häufige Fragen zur Badsanierung"
        />

        {/* Partnernetzwerk Angebot */}
        <section className="py-6 lg:py-8 bg-muted/50">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <Badge className="mb-4">Münchner Partnernetzwerk</Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Ihr kostenloses Angebot in 10 Schritten
            </h2>
            <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
              Beantworten Sie ein paar Fragen zu Ihrem Projekt – wir erstellen Ihnen ein maßgeschneidertes Angebot.
            </p>
            <ServiceBooking 
              serviceType="bad"
              buttonText="Jetzt Angebot anfordern"
              buttonSize="lg"
            />
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Bereit für Ihr neues Traumbad?
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-xl mx-auto">
              Kostenlose Beratung, unverbindliches Angebot, 3D-Visualisierung inklusive. 
              Rufen Sie uns an oder buchen Sie direkt einen Termin.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" variant="secondary" asChild data-testid="button-call-cta">
                <a href="tel:+4915212274043">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
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

        <RelatedServices currentService="bad" />
      </main>
      
      <Footer />
      <AIChatWidget serviceCategory="bad" />
    </div>
  );
}
