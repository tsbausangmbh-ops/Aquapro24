import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import CookieBanner from "@/components/CookieBanner";
import FloatingContactBar from "@/components/FloatingContactBar";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import {
  Phone,
  MessageCircle,
  Clock,
  MapPin,
  Shield,
  Star,
  ArrowRight,
  Calendar
} from "lucide-react";

const premiumDistricts = [
  { name: "Lehel", slug: "lehel", time: "20 Min.", highlight: "Exklusives Villenviertel", premium: true },
  { name: "Grünwald", slug: "gruenwald", time: "45 Min.", highlight: "Promi-Residenzen", premium: true },
  { name: "Bogenhausen", slug: "bogenhausen", time: "35 Min.", highlight: "Premium-Service", premium: true },
  { name: "Solln", slug: "solln", time: "40 Min.", highlight: "Villenviertel", premium: true },
  { name: "Harlaching", slug: "harlaching", time: "35 Min.", highlight: "Gehobenes Wohnen", premium: true },
];

const districts = [
  { name: "Schwabing", slug: "schwabing", time: "30 Min.", highlight: "Altbau-Expertise" },
  { name: "Maxvorstadt", slug: "maxvorstadt", time: "25 Min.", highlight: "Zentrale Lage" },
  { name: "Haidhausen", slug: "haidhausen", time: "30 Min.", highlight: "Franzosenviertel" },
  { name: "Sendling", slug: "sendling", time: "35 Min.", highlight: "Notdienst 24/7" },
  { name: "Pasing", slug: "pasing", time: "40 Min.", highlight: "Einfamilienhaus" },
  { name: "Neuhausen-Nymphenburg", slug: "neuhausen", time: "30 Min.", highlight: "Denkmalschutz" },
  { name: "Trudering-Riem", slug: "trudering", time: "45 Min.", highlight: "Neubau" },
  { name: "Laim", slug: "laim", time: "35 Min.", highlight: "Schnell vor Ort" },
  { name: "Giesing", slug: "giesing", time: "35 Min.", highlight: "Rohrsanierung" },
  { name: "Moosach", slug: "moosach", time: "40 Min.", highlight: "Familienhaus" },
  { name: "Milbertshofen", slug: "milbertshofen", time: "35 Min.", highlight: "Gewerbe & Wohnen" },
  { name: "Thalkirchen-Obersendling", slug: "thalkirchen", time: "30 Min.", highlight: "Isarnähe" },
];

export default function StadtteileOverviewPage() {
  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title="Sanitär & Heizung München - Alle Stadtteile | AquaPro24"
        description="Sanitär und Heizung in allen Münchner Stadtteilen: Schwabing, Maxvorstadt, Bogenhausen, Sendling, Pasing und mehr. 24h Notdienst, Festpreisgarantie. Jetzt anrufen: 0152 12274043"
        canonical="https://aquapro24.de/stadtteile"
      />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/5 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                <MapPin className="w-3 h-3 mr-1" />
                Alle Münchner Stadtteile
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                Sanitär & Heizung in München
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Unser Partnernetzwerk ist in allen Münchner Stadtteilen aktiv. 
                Finden Sie hier Ihren lokalen Ansprechpartner für Sanitär, Heizung und Badsanierung.
              </p>
              <div className="flex flex-wrap justify-center gap-4 mb-8">
                <div className="flex items-center gap-2 text-sm">
                  <Clock className="w-4 h-4 text-secondary" />
                  <span>Ø 35 Min. Anfahrt</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Star className="w-4 h-4 text-yellow-500" />
                  <span>4.9/5 Bewertung</span>
                </div>
                <div className="flex items-center gap-2 text-sm">
                  <Shield className="w-4 h-4 text-accent" />
                  <span>Festpreisgarantie</span>
                </div>
              </div>
              <div className="flex flex-wrap justify-center gap-3">
                <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-hero">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" className="bg-emerald-600 text-white border-emerald-700" asChild>
                  <a href="https://wa.me/4915212274043" target="_blank" rel="noopener noreferrer" data-testid="button-whatsapp-hero">
                    <MessageCircle className="w-4 h-4 mr-2" />
                    WhatsApp
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-gradient-to-b from-amber-50/50 to-background dark:from-amber-950/20 dark:to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <Badge className="mb-3 bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-300 dark:border-amber-700">
                <Star className="w-3 h-3 mr-1" />
                Premium-Gebiete
              </Badge>
              <h2 className="text-2xl md:text-3xl font-bold">
                Gehobene Wohnlagen in München
              </h2>
              <p className="text-muted-foreground mt-2">
                Spezialisierter Service für Villen und exklusive Immobilien
              </p>
            </div>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-4">
              {premiumDistricts.map((district, index) => (
                <Link 
                  key={index} 
                  href={`/stadtteil/${district.slug}`}
                  data-testid={`link-stadtteil-${district.slug}`}
                >
                  <Card className="group hover-elevate h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1 border-amber-200/50 dark:border-amber-800/30">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <Star className="w-4 h-4 text-amber-500" />
                          <h3 className="font-semibold">{district.name}</h3>
                        </div>
                        <Badge className="text-xs bg-amber-100 text-amber-800 border-amber-300 dark:bg-amber-900/30 dark:text-amber-300">
                          {district.time}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {district.highlight}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-amber-200/30 dark:border-amber-800/20">
                        <span className="text-xs text-muted-foreground">Premium-Service</span>
                        <span className="text-xs text-amber-600 dark:text-amber-400 flex items-center gap-1 group-hover:gap-2 transition-all">
                          Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Alle Münchner Stadtteile
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
              {districts.map((district, index) => (
                <Link 
                  key={index} 
                  href={`/stadtteil/${district.slug}`}
                  data-testid={`link-stadtteil-${district.slug}`}
                >
                  <Card className="group hover-elevate h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="flex items-start justify-between mb-3">
                        <div className="flex items-center gap-2">
                          <MapPin className="w-5 h-5 text-secondary" />
                          <h3 className="font-semibold">{district.name}</h3>
                        </div>
                        <Badge variant="secondary" className="text-xs">
                          {district.time}
                        </Badge>
                      </div>
                      <p className="text-sm text-muted-foreground mb-3">
                        {district.highlight}
                      </p>
                      <div className="flex items-center justify-between pt-3 border-t border-border">
                        <span className="text-xs text-muted-foreground">Sanitär & Heizung</span>
                        <span className="text-xs text-primary flex items-center gap-1 group-hover:gap-2 transition-all">
                          Details <ArrowRight className="w-3 h-3" />
                        </span>
                      </div>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-12 bg-background">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Ihr lokaler Sanitär- und Heizungspartner in München
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                <strong>AquaPro24</strong> ist Ihr zuverlässiges Partnernetzwerk für alle Sanitär- und Heizungsarbeiten 
                in München. Mit über 15 geprüften Meisterbetrieben sind wir in allen Stadtteilen schnell vor Ort.
              </p>
              <p>
                Ob <Link href="/rohrreinigung" className="text-secondary hover:underline" data-testid="link-seo-rohrreinigung">verstopfter Abfluss in Schwabing</Link>, 
                <Link href="/bad" className="text-secondary hover:underline" data-testid="link-seo-bad"> Badsanierung in Bogenhausen</Link> oder 
                <Link href="/heizung" className="text-secondary hover:underline" data-testid="link-seo-heizung"> Heizungsausfall in Sendling</Link> - 
                unsere lokalen Partner kennen die Besonderheiten jedes Viertels und sind durchschnittlich in 35 Minuten bei Ihnen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Unser Versprechen für alle Münchner Stadtteile</h3>
              <ul>
                <li><strong>24/7 Notdienst:</strong> Auch nachts und am Wochenende erreichbar</li>
                <li><strong>Festpreisgarantie:</strong> Transparente Preise ohne versteckte Kosten</li>
                <li><strong>Geprüfte Meisterbetriebe:</strong> Qualifizierte Handwerker mit Gewährleistung</li>
                <li><strong>Lokale Expertise:</strong> Partner, die Ihren Stadtteil kennen</li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen
                </a>
              </Button>
              <Button size="lg" variant="outline" asChild>
                <Link href="/termin" data-testid="button-termin-cta">
                  <Calendar className="w-4 h-4 mr-2" />
                  Online-Termin buchen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
      <CookieBanner />
      <FloatingContactBar />
    </div>
  );
}
