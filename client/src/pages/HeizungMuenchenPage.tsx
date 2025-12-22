import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import ServiceAreas from "@/components/ServiceAreas";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heating_technician_r_d9832fb9.jpg";
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
  FileText
} from "lucide-react";
import { Link } from "wouter";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";
import FAQ from "@/components/FAQ";

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
        title="Heizungsservice München | Reparatur & Modernisierung"
        description="Heizungsservice München: Modernisierung Heizung und Effizienz steigern. Reparatur aller Systeme mit klarem Vorgehen und planbaren Lösungen."
        canonical="https://aquapro24.de/heizung-muenchen"
        keywords="Heizung München, Heizungsreparatur München, Heizungsmodernisierung München, Heizungstausch München, Gasheizung München, Heizung Wartung München, Heizungsinstallateur München"
        aiSummary="AquaPro24 Heizung München: Reparatur, Modernisierung, Austausch aller Heizungssysteme. Planbare Lösungen, transparentes Vorgehen. Kontakt: 0152 12274043"
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
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-red-600 text-white">
                <Flame className="w-3 h-3 mr-1" />
                Heizung München
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
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
              <p className="text-lg text-white/90 mb-4">
                Wenn die Heizung streikt oder modernisiert werden soll, zählt vor allem eins: eine Lösung, 
                die planbar ist und dauerhaft funktioniert. AquaPro24 unterstützt Sie in München bei 
                Heizungsreparaturen, Austausch, Optimierung und Modernisierung. Von der ersten Einschätzung 
                bis zur Umsetzung arbeiten wir mit einem klaren Vorgehen – damit Sie wissen, was passiert, 
                wann es passiert und warum.
              </p>
              <p className="text-lg text-white/80 mb-6">
                Senden Sie uns Ihre Anfrage idealerweise mit Fotos vom Gerät/Typenschild und einer kurzen 
                Beschreibung (Fehlercode, Geräusche, Ausfallzeiten). So sparen wir Zeit und können Ihnen 
                schneller einen passenden Termin nennen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-heizung-muenchen">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/kontakt" data-testid="link-kontakt-heizung">
                    <Mail className="w-4 h-4 mr-2" />
                    Anfrage senden
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Heizungsinstallateur München: Reparatur, Wartung & Austausch
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {leistungen.map((item, index) => (
                <Card key={index} className="text-center">
                  <CardContent className="pt-6">
                    <div className="w-12 h-12 bg-red-500/10 rounded-full flex items-center justify-center mx-auto mb-4">
                      <item.icon className="w-6 h-6 text-red-600" />
                    </div>
                    <h3 className="font-semibold mb-2">{item.title}</h3>
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
              <h2 className="text-2xl md:text-3xl font-bold mb-6 text-center">
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
                    <p className="text-lg font-medium mb-4">
                      Anfrage per E-Mail/Formular – inklusive Fotos – und Sie bekommen eine schnelle Rückmeldung.
                    </p>
                    <div className="flex flex-wrap justify-center gap-4">
                      <ServiceBooking 
                        serviceType="heizung"
                        buttonText="Termin anfragen"
                        buttonSize="lg"
                      />
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
        <ServiceAreas serviceName="Heizung"  />
        <RelatedServices currentService="heizung" />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
