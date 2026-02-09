import { lazy, Suspense } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroPicture } from "@/components/ResponsiveHero";
import { 
  Thermometer, 
  Phone, 
  CheckCircle2, 
  Layers,
  Ruler,
  Settings,
  Mail,
  Home,
  Calendar,
  AlertTriangle,
  Star,
  Clock
} from "lucide-react";
import { Link } from "wouter";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";
import FAQ from "@/components/FAQ";

const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

export default function FussbodenheizungMuenchenPage() {
  const vorteile = [
    {
      icon: Thermometer,
      title: "Fußbodenheizung nachrüsten München",
      description: "Gleichmäßige Strahlungswärme im ganzen Raum. Keine Heizkörper, mehr Platz, besseres Raumklima."
    },
    {
      icon: Layers,
      title: "Dünnschicht-Fußbodenheizung München",
      description: "Nur 20mm Aufbauhöhe! Ideal für Altbau-Nachrüstung. Trockensystem ohne Estrich. 20% BAFA-Förderung."
    },
    {
      icon: Settings,
      title: "Fußbodenheizung Regelung einzelraumweise",
      description: "Smarte Thermostate, Einzelraumregelung per App. Kompatibel mit tado, Homematic, Viessmann ViCare."
    },
    {
      icon: CheckCircle2,
      title: "Fußbodenheizung + Wärmepumpe ideal",
      description: "Niedertemperatur-System perfekt für Wärmepumpe. COP bis 5.0, bis 50% weniger Heizkosten."
    }
  ];

  const anfrageDaten = [
    { icon: Layers, text: "Aufbau: Estrich/Bodenbelag" },
    { icon: Ruler, text: "Fläche in m²" },
    { icon: Home, text: "Nachrüstung oder Komplettsanierung?" },
    { icon: Calendar, text: "Geplanter Renovierungszeitraum" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={seoMeta['/fussbodenheizung-muenchen'].title}
        description={seoMeta['/fussbodenheizung-muenchen'].description}
        canonical="https://aquapro24.de/fussbodenheizung-muenchen"
        keywords={seoMeta['/fussbodenheizung-muenchen'].keywords.join(', ')}
        aiSummary="AquaPro 24 Fußbodenheizung München: Nachrüstung, Umbau, Integration in moderne Systeme. Prüfung Aufbauhöhe, Regelung, Untergrund. Kontakt: 089 444438872"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Heizung", url: "https://aquapro24.de/heizung" },
          { name: "Fußbodenheizung München", url: "https://aquapro24.de/fussbodenheizung-muenchen" }
        ]}
        serviceSchema={{
          name: "Fußbodenheizung München - Nachrüstung & Modernisierung",
          description: "Fußbodenheizung München: Nachrüstung, Umbau, Integration. Prüfung Aufbauhöhe, Regelung, Untergrund.",
          serviceType: "Fußbodenheizung/Heizung",
          urlSlug: "fussbodenheizung-muenchen",
          catalogName: "Fußbodenheizung-Leistungen München",
          serviceOffers: [
            { name: "Fußbodenheizung nachrüsten" },
            { name: "Umbau bestehender Systeme" },
            { name: "Integration in Wärmepumpe" },
            { name: "Regelung & Steuerung" }
          ]
        }}
        faqSchema={[
          {
            question: "Kann man Fußbodenheizung im Altbau nachrüsten?",
            answer: "Ja, mit modernen Dünnschicht-Systemen ist Nachrüstung auch bei geringer Aufbauhöhe möglich. Wir prüfen, was technisch sinnvoll ist."
          },
          {
            question: "Passt Fußbodenheizung zu einer Wärmepumpe?",
            answer: "Ja, Fußbodenheizung ist ideal für Wärmepumpen, da sie mit niedrigen Vorlauftemperaturen effizient arbeitet."
          },
          {
            question: "Welche Infos brauchen Sie für die Beratung?",
            answer: "Aufbau (Estrich/Belag), Fläche und Ziel (Nachrüstung/Komplettsanierung). So können wir passende Optionen nennen."
          }
        ]}
        ogImageAlt="Fußbodenheizung München nachrüsten einbauen Altbau Neubau - Kosten Festpreis Installation"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_fussbodenheizung" alt="" />
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
                Fußbodenheizung München – nachrüsten & verlegen vom Profi
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung nachrüsten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung verlegen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Altbau</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Flächenheizung installieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Dünnschichtsystem einbauen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Kosten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung reparieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizkreisverteiler montieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Thermostat einstellen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe kompatibel</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Warmwasser Fußbodenheizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Elektro Fußbodenheizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Regelung Fußbodenheizung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Aufbauhöhe prüfen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Energieeffizienz steigern</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Fußbodenheizung</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Kalte Füße im Altbau? Heizkörper statt Fußbodenwärme?</strong>
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                AquaPro 24 hilft in München bei Nachrüstung, Umbau und Integration in moderne Heizsysteme. Transparente Festpreise, förderfähig.
              </p>
              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Morgens barfuß über warme Böden laufen – ohne klobige Heizkörper an der Wand. Mit unserem Dünnschichtsystem rüsten wir Ihre Fußbodenheizung auch im Altbau nach, ohne den gesamten Estrich aufzureißen.
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.800+ zufriedene Kunden</strong> · Fußbodenheizung ab 45€/m² Festpreis
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-fussbodenheizung-muenchen">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} asChild data-testid="button-termin-fussbodenheizung">
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
                  <span>Auch im Altbau</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              Fußbodenheizung nachrüsten München: Vorteile & Energieeffizienz
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {vorteile.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-amber-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-amber-600" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 text-center">
                Fußbodenheizung verlegen München: Anfrage & Beratungstermin
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Teilen Sie uns kurz mit:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageDaten.map((item, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <item.icon className="w-5 h-5 text-amber-600 flex-shrink-0" />
                    <span>{item.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-amber-500/5 border-amber-500/20">
                  <CardContent className="pt-6">
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                      Schreiben Sie uns kurz Aufbau (Estrich/Belag), Fläche und Ziel (Nachrüstung/Komplettsanierung) – wir antworten mit Optionen.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <Suspense fallback={null}>
                        <ServiceBooking 
                          serviceType="heizung"
                          buttonText="Termin anfragen"
                          buttonSize="lg"
                        />
                      </Suspense>
                      <Button size="lg" variant="outline" asChild>
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-fussbodenheizung">
                          <Mail className="w-4 h-4 mr-2" />
                          info@aquapro24.de
                        </a>
                      </Button>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <FAQ 
          title="Häufige Fragen zur Fußbodenheizung in München"
          items={[
            {
              question: "Kann eine Fußbodenheizung nachgerüstet werden?",
              answer: "Ja, abhängig von Aufbauhöhe, Untergrund und Nutzung. Wir prüfen die technische Machbarkeit."
            },
            {
              question: "Eignet sich Fußbodenheizung für Altbauwohnungen?",
              answer: "In vielen Fällen ja – besonders bei Sanierungen mit angepasstem Aufbau."
            },
            {
              question: "Wie lange dauert der Einbau?",
              answer: "Das hängt vom System und der Fläche ab. Nach Prüfung nennen wir Ihnen einen realistischen Zeitrahmen."
            },
            {
              question: "Kann die Fußbodenheizung mit meiner bestehenden Heizung kombiniert werden?",
              answer: "Ja, häufig ist eine Kombination möglich – wir prüfen das im Einzelfall."
            },
            {
              question: "Ist eine Fußbodenheizung energieeffizient?",
              answer: "Ja, besonders in Kombination mit modernen Heizsystemen wie Wärmepumpen."
            }
          ]}
        />
        <TrustBar />
        <Suspense fallback={null}>
            <ServiceAreas serviceName="Fußbodenheizung"  />
        </Suspense>
        <KeywordLinks currentPage="heizung" />
        <RelatedServices currentService="heizung" />
      </main>

      <InternalLinks
        title="Heizung & verwandte Services"
        variant="footer-cta"
        links={[
          { href: "/heizung", text: "Heizungs-Service", description: "Wartung, Reparatur & Modernisierung" },
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Ideal mit Fußbodenheizung" },
          { href: "/heizung-muenchen", text: "Heizung München", description: "Alle Stadtteile & Bezirke" },
          { href: "/waermepumpe-muenchen", text: "Wärmepumpe München", description: "Installation in allen Bezirken" },
          { href: "/foerderung", text: "Heizungsförderung 2026", description: "BAFA & KfW: Bis 70% Zuschuss" },
          { href: "/foerderantrag-heizung", text: "Förderantrag Heizung", description: "BAFA-Antrag Schritt für Schritt" },
          { href: "/foerderrechner", text: "Förderrechner", description: "Ihren Zuschuss berechnen" },
          { href: "/haustechnik", text: "Haustechnik komplett", description: "Sanitär, Heizung, Klima" },
          { href: "/ratgeber", text: "Heizungs-Ratgeber", description: "Tipps zur Heizungsmodernisierung" },
          { href: "/termin", text: "Beratungstermin buchen", description: "Persönliche Vor-Ort-Beratung" },
        ]}
      />
      <Footer />
    </div>
  );
}
