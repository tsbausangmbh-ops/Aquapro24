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
  Flame, 
  Phone, 
  CheckCircle2, 
  Wrench,
  Thermometer,
  Settings,
  Mail,
  Camera,
  Clock,
  FileText,
  AlertTriangle,
  Star
} from "lucide-react";
import { Link } from "wouter";
import RelatedServices from "@/components/RelatedServices";
import KeywordLinks from "@/components/KeywordLinks";
import FAQ from "@/components/FAQ";

const ServiceAreas = lazy(() => import("@/components/ServiceAreas"));
const ServiceBooking = lazy(() => import("@/components/ServiceBooking"));

export default function HeizungMuenchenPage() {
  const leistungen = [
    {
      icon: Wrench,
      title: "Heizung reparieren München ab 154€",
      description: "Viessmann, Vaillant, Buderus, Wolf, Junkers vor Ort repariert. Brenner, Pumpe, Steuerung. Festpreis."
    },
    {
      icon: Settings,
      title: "Heizung modernisieren München: 70% Förderung",
      description: "Alte Gasheizung gegen Wärmepumpe tauschen. BAFA-Förderantrag inklusive, Energieberatung gratis."
    },
    {
      icon: Thermometer,
      title: "Heizung optimieren München: 15% sparen",
      description: "Hydraulischer Abgleich, Pumpentausch, Thermostat-Upgrade. Weniger Verbrauch, mehr Komfort."
    },
    {
      icon: Flame,
      title: "Heizung tauschen München komplett",
      description: "Alte Heizung raus, neue Heizung rein. Gasheizung, Wärmepumpe, Pellet. Entsorgung Altanlage inklusive."
    }
  ];

  const anfrageTipps = [
    { icon: Camera, text: "Fotos vom Gerät/Typenschild" },
    { icon: FileText, text: "Fehlercode (falls vorhanden)" },
    { icon: Wrench, text: "Beschreibung: Geräusche, Ausfallzeiten" },
    { icon: Clock, text: "Wunschtermin für Besichtigung" }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={seoMeta['/heizung-muenchen'].title}
        description={seoMeta['/heizung-muenchen'].description}
        canonical="https://aquapro24.de/heizung-muenchen"
        keywords={seoMeta['/heizung-muenchen'].keywords.join(', ')}
        aiSummary="AquaPro 24 Heizung München: Reparatur, Modernisierung, Austausch aller Heizungssysteme. Planbare Lösungen, transparentes Vorgehen. Kontakt: 089 444438872"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Heizung", url: "https://aquapro24.de/heizung" },
          { name: "Heizung München", url: "https://aquapro24.de/heizung-muenchen" }
        ]}
        serviceSchema={{
          name: "Heizung München - Reparatur & Modernisierung",
          description: "Heizungsservice in München: Reparatur, Modernisierung, Austausch. Klares Vorgehen, planbare Lösung.",
          serviceType: "Heizung/HVAC",
          urlSlug: "heizung-muenchen",
          catalogName: "Heizungs-Leistungen München",
          serviceOffers: [
            { name: "Heizungsreparatur alle Marken" },
            { name: "Heizungsmodernisierung" },
            { name: "Heizungsoptimierung" },
            { name: "Heizungstausch komplett" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 156
          }
        }}
        faqSchema={[
          {
            question: "Wie schnell kann meine Heizung repariert werden?",
            answer: "Nach Eingang Ihrer Anfrage mit Fotos und Fehlerbeschreibung melden wir uns zeitnah. Bei Heizungsausfällen priorisieren wir und bieten schnellstmögliche Termine."
          },
          {
            question: "Welche Heizungsmarken reparieren Sie?",
            answer: "Wir reparieren alle gängigen Heizungsmarken: Viessmann, Vaillant, Buderus, Wolf, Junkers/Bosch, Brötje und weitere."
          },
          {
            question: "Was sollte ich bei einer Heizungsanfrage angeben?",
            answer: "Idealerweise Fotos vom Gerät und Typenschild, Fehlercode falls vorhanden, und eine Beschreibung der Symptome (Geräusche, Ausfallzeiten). So können wir schneller helfen."
          }
        ]}
        ogImageAlt="Heizung München Reparatur Wartung Installation Gasheizung - Heizungsinstallateur Meisterbetrieb"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_heizung_muenchen" alt="" />
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
                Heizung München – Reparatur, Wartung & Modernisierung Profi
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsreparatur München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Wartung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsmodernisierung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungstausch</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Gasheizung reparieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Ölheizung warten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Brenner einstellen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">hydraulischer Abgleich</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizkörper entlüften</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Viessmann München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vaillant München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Buderus München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung entkalken</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Thermostat tauschen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizkosten senken</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Heizung</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Heizung streikt mitten im Winter? Heizkörper bleiben kalt?</strong>
              </p>
              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                AquaPro 24 unterstützt Sie in München bei Heizungsreparaturen, Austausch, Optimierung 
                und Modernisierung. Ab 60 Min. Reaktionszeit, transparente Festpreise.
              </p>
              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Es ist Dezember, die Heizung fällt abends aus – und innerhalb einer Stunde steht ein Fachmann vor Ihrer Tür, diagnostiziert das Problem und repariert es sofort. So arbeiten wir.
                </p>
              </div>
              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.800+ zufriedene Kunden</strong> · Heizungsreparatur ab 89€ Festpreis
              </p>
              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-heizung-muenchen">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} asChild data-testid="button-termin-heizung">
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
                  <span>Alle Heizungsmarken</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4 sm:mb-6 lg:mb-8 text-center">
              Heizungsinstallateur München: Reparatur, Wartung & Austausch
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-red-600" />
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
                Heizungsmonteur München: Anfrage mit Foto für schnelle Einschätzung
              </h2>
              <p className="text-center text-muted-foreground mb-8">
                Senden Sie uns idealerweise:
              </p>
              <div className="grid sm:grid-cols-2 gap-4 mb-8">
                {anfrageTipps.map((tipp, index) => (
                  <div key={index} className="flex items-center gap-3 p-4 bg-muted/50 rounded-lg">
                    <tipp.icon className="w-5 h-5 text-red-600 flex-shrink-0" />
                    <span>{tipp.text}</span>
                  </div>
                ))}
              </div>
              <div className="text-center">
                <Card className="bg-red-500/5 border-red-500/20">
                  <CardContent className="pt-6">
                    <p className="text-sm sm:text-base lg:text-lg font-medium mb-4">
                      Anfrage per E-Mail/Formular – inklusive Fotos – und Sie bekommen eine schnelle Rückmeldung.
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
                        <a href="mailto:info@aquapro24.de" data-testid="link-email-heizung">
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
          title="Häufige Fragen zu Heizung in München"
          items={[
            {
              question: "Welche Heizungsleistungen bieten Sie an?",
              answer: "Reparatur, Austausch, Modernisierung, Optimierung bestehender Anlagen sowie Vorbereitung für neue Systeme wie Wärmepumpen."
            },
            {
              question: "Reparieren Sie auch bestehende Heizungen?",
              answer: "Ja, wir reparieren und prüfen bestehende Heizsysteme – unabhängig vom Hersteller, sofern technisch möglich."
            },
            {
              question: "Wie kann ich die Heizungsanfrage beschleunigen?",
              answer: "Bitte senden Sie uns Fotos vom Gerät, Typenschild und ggf. Fehlercodes. So können wir schneller reagieren."
            },
            {
              question: "Bieten Sie auch komplette Heizungsmodernisierungen an?",
              answer: "Ja, inklusive Planung, Koordination und Umsetzung mit geprüften Fachbetrieben in München."
            },
            {
              question: "Sind kurzfristige Heizungsreparaturen möglich?",
              answer: "Bei Ausfällen oder dringenden Störungen versuchen wir, schnell eine Lösung oder Übergangslösung zu organisieren."
            }
          ]}
        />
        <TrustBar />
        <Suspense fallback={null}>
            <ServiceAreas serviceName="Heizung"  />
        </Suspense>
        <KeywordLinks currentPage="heizung" />
        <RelatedServices currentService="heizung" />
      </main>

      <InternalLinks
        title="Heizungs-Services in München"
        variant="footer-cta"
        links={[
          { href: "/heizung", text: "Heizungs-Leistungen", description: "Alle Heizungs-Services im Detail" },
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Installation mit bis zu 70% Förderung" },
          { href: "/waermepumpe-muenchen", text: "Wärmepumpe in München", description: "Alle Stadtteile & Bezirke" },
          { href: "/fussbodenheizung-muenchen", text: "Fußbodenheizung München", description: "Installation & Nachrüstung" },
          { href: "/foerderung", text: "Heizungsförderung 2026", description: "BAFA & KfW: Bis 70% Zuschuss" },
          { href: "/foerderantrag-heizung", text: "Förderantrag Heizung", description: "BAFA-Antrag Schritt für Schritt" },
          { href: "/heizung-notdienst-24", text: "Heizung-Notdienst 24/7", description: "Heizungsausfall? Sofort-Hilfe!" },
          { href: "/sanitaer-muenchen", text: "Sanitär München", description: "Rohrreinigung & Installationen" },
          { href: "/ratgeber", text: "Heizungs-Ratgeber", description: "Tipps & Wissen rund um Heizung" },
          { href: "/termin", text: "Beratungstermin buchen", description: "Persönliche Vor-Ort-Beratung" },
        ]}
      />
      <Footer />
    </div>
  );
}
