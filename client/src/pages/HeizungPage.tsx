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
import EmergencyProcess from "@/components/EmergencyProcess";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  CheckCircle2, 
  Flame, 
  Clock,
  ShieldCheck,
  Star,
  ArrowRight,
  Thermometer,
  FileText,
  MessageCircle,
  Calendar,
  MessageSquare
} from "lucide-react";
import { Link } from "wouter";
import heatingImage1 from "@assets/stock_images/heating_system_boile_6d071f6f.jpg";
import heatingImage2 from "@assets/stock_images/heating_system_boile_d08e816e.jpg";
import ServiceBooking from "@/components/ServiceBooking";
import RelatedServices from "@/components/RelatedServices";

const services = [
  {
    title: "Heizungsinstallation",
    description: "Fachgerechte Installation moderner Heizsysteme - von der Planung bis zur Inbetriebnahme.",
    features: ["Gasheizung", "Ölheizung", "Pelletheizung", "Hybridheizung"]
  },
  {
    title: "Heizungswartung",
    description: "Regelmäßige Wartung für optimale Effizienz und lange Lebensdauer Ihrer Heizanlage.",
    features: ["Jahreswartung", "Brennereinstellung", "Abgasmessung", "Kesselreinigung"]
  },
  {
    title: "Heizungsreparatur",
    description: "Schnelle und zuverlässige Reparatur bei Heizungsausfall - auch im Notdienst.",
    features: ["24/7 Notdienst", "Alle Hersteller", "Ersatzteilservice", "Schnelle Hilfe"]
  },
  {
    title: "Heizungsmodernisierung",
    description: "Austausch alter Heizungen gegen effiziente, moderne Systeme mit Förderberatung.",
    features: ["Förderberatung", "Energieberatung", "CO2-Einsparung", "Kostensenkung"]
  }
];

const benefits = [
  "24/7 Notdienst verfügbar",
  "Alle Hersteller & Marken",
  "Festpreisgarantie",
  "Förderberatung inklusive",
  "Energieeffizienz-Check",
  "Wartungsverträge"
];

const faqItems = [
  {
    question: "Was kostet ein Heizungs-Notdienst in München?",
    answer: "Heizungs-Notdienst München Kosten: Anfahrt 49€, Diagnose ab 89€, Reparaturen ab 154€. Vor Arbeitsbeginn erhalten Sie einen verbindlichen Festpreis. Keine versteckten Kosten, keine Nachforderungen. Der Preis gilt auch nachts und am Wochenende."
  },
  {
    question: "Wie schnell ist der Heizungs-Notdienst in München vor Ort?",
    answer: "Bei Heizungsausfall sind wir in der Regel innerhalb von 45-60 Minuten bei Ihnen in München. Unser 24/7 Notdienst ist rund um die Uhr erreichbar - auch nachts, an Wochenenden und Feiertagen. Einsatzgebiet: alle Münchner Stadtteile inkl. Schwabing, Bogenhausen, Sendling, Pasing."
  },
  {
    question: "Arbeitet der Heizungs-Notdienst auch nachts und am Wochenende?",
    answer: "Ja, unser 24/7 Heizungs-Notdienst ist 365 Tage im Jahr erreichbar. Auch Heiligabend, Silvester und nachts zwischen 22 und 6 Uhr. Ein Heizungsausfall im Winter ist ein Notfall - wir lassen Sie nicht im Kalten sitzen. Telefon: 0152 12274043."
  },
  {
    question: "Welche Heizungsmarken reparieren Sie in München?",
    answer: "Wir reparieren alle Heizungsmarken: Viessmann, Vaillant, Buderus, Wolf, Junkers/Bosch, Brötje, Weishaupt, Kermi, und viele weitere. Unsere Techniker führen die häufigsten Ersatzteile direkt mit - für schnelle Reparatur noch am selben Tag."
  },
  {
    question: "Was kostet eine Heizungswartung in München?",
    answer: "Heizungswartung München ab 154€ inkl. Anfahrt. Leistungen: Brenner reinigen, Filter tauschen, Druck prüfen, Sicherheitscheck, Protokoll. Eine jährliche Wartung spart bis 15% Heizkosten und beugt teuren Reparaturen vor. Wartungsverträge mit Notfall-Priorität verfügbar."
  },
  {
    question: "Wie läuft ein Heizungs-Einsatz bei AquaPro24 ab?",
    answer: "1. Anruf unter 0152 12274043 - wir sind 24/7 erreichbar. 2. Terminvereinbarung - bei Notfällen sofort. 3. Techniker kommt pünktlich und analysiert das Problem. 4. Festpreis vor Arbeitsbeginn. 5. Reparatur direkt vor Ort. 6. Sie haben wieder Wärme - garantiert."
  },
  {
    question: "Warum sollte ich AquaPro24 für Heizungsarbeiten wählen?",
    answer: "AquaPro24 bietet: 24/7 Notdienst, 45-60 Min. Reaktionszeit, Festpreisgarantie, alle Heizungsmarken, 2 Jahre Gewährleistung, geprüfte Fachhandwerker. Über 1.200 Heizungsanlagen in München installiert und repariert. Ihr lokaler Partner seit 2005."
  },
  {
    question: "Gibt es Förderung für eine neue Heizung in München?",
    answer: "Ja, für den Heizungstausch gibt es bis zu 40% staatliche Förderung (BAFA/KfW). Gasheizung: geringe Förderung, Wärmepumpe: bis 70% Förderung möglich. Wir beraten neutral zu allen Optionen und unterstützen bei der Antragstellung - kostenlos."
  }
];

export default function HeizungPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Heizung defekt München | Kessel Wartung | Therme reparieren"
        description="Heizung ausgefallen und Sie frieren? Unser Techniker repariert alle Marken vor Ort. Festpreis, keine versteckten Kosten. Rufen Sie jetzt an."
        canonical="https://aquapro24.de/heizung"
        keywords="Heizung München, Heizung Notdienst München, Heizungsreparatur München, Heizungswartung München, Heizung kaputt München, Gasheizung München, Heizung Schwabing, Heizung Bogenhausen, Heizung Sendling, Heizung Pasing, Heizung Maxvorstadt, Heizung Haidhausen, Heizung Neuhausen, Heizung Trudering, Heizung Laim, Heizung Giesing, Heizung Moosach, Heizung Milbertshofen, Heizung Nymphenburg, Heizung Perlach, Heizung Solln, Heizung Hadern, Heizung Allach, Heizung Aubing, Heizung Feldmoching, Heizung Isarvorstadt, Heizung Lehel, Heizungsmonteur München, Heizungsinstallation München, Fußbodenheizung München, Heizung defekt München, Heizung reparieren München, Viessmann München, Vaillant München, Buderus München, Heizung Notdienst Schwabing, Heizungsreparatur Bogenhausen"
        aiSummary="AquaPro24 Heizung München: 24/7 Notdienst bei Heizungsausfall, Wartung ab 154€, Neuinstallation mit bis 70% Förderung. Alle Marken: Viessmann, Vaillant, Buderus. 1.200+ Anlagen installiert. Alle Münchner Stadtteile. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Heizung", url: "https://aquapro24.de/heizung" }
        ]}
        serviceSchema={{
          name: "Heizung Notdienst & Wartung München",
          description: "Heizungsnotdienst München: 24/7 Reparatur, Wartung ab 154€, Neuinstallation mit bis 70% Förderung. Alle Marken: Viessmann, Vaillant, Buderus, Wolf.",
          serviceType: "Heizung/HVAC",
          urlSlug: "heizung",
          catalogName: "Heizungs-Leistungen",
          serviceOffers: [
            { name: "Heizungsstörung / Ausfall Notdienst" },
            { name: "Heizungswartung & Inspektion" },
            { name: "Heizungsreparatur alle Marken" },
            { name: "Heizungsmodernisierung mit Förderung" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 156
          }
        }}
      />
      <Header />
      <BackButton />
      <main id="main-content">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heatingImage1})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge className="gap-1 bg-red-600 text-white mb-4">
                <Flame className="w-3 h-3" />
                Heizung München
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
                Heizung München – 24/7 Notdienst & Wartung
              </h1>
              <p className="text-lg text-white/90 mb-4">
                <strong>Heizung ausgefallen? Keine Wärme im Winter?</strong> Das ist mehr als nur 
                unangenehm - das ist ein echtes Problem, das schnell gelöst werden muss.
              </p>
              <p className="text-white/80 mb-6">
                Installation, Wartung und Reparatur aller Heizungssysteme. Wir sorgen für wohlige 
                Wärme in Ihrem Zuhause - zuverlässig, effizient und mit 24/7 Notdienst.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-heizung">
                    <Phone className="w-5 h-5 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <ServiceBooking 
                  serviceType="heizung"
                  buttonText="24h Buchungstermin"
                  buttonSize="lg"
                  buttonVariant="outline"
                  buttonClassName="backdrop-blur-sm bg-white/10 border-white/30 text-white"
                />
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <EmergencyProcess serviceType="heizung" />

        <NLPSection
          problemTitle="Diese Sorgen kennen wir"
          problems={[
            "Die Heizung macht komische Geräusche und wird nicht mehr richtig warm",
            "Die Energiekosten steigen jedes Jahr weiter an",
            "Die alte Heizung könnte jeden Moment ausfallen",
            "Niemand erklärt verständlich, was repariert werden muss",
            "Angst vor hohen Reparaturkosten ohne Vorwarnung"
          ]}
          solutionTitle="So helfen wir Ihnen"
          solutions={[
            "24/7 Notdienst - auch nachts und am Wochenende erreichbar",
            "Ehrliche Diagnose und transparente Preise vor Arbeitsbeginn",
            "Alle Heizungsmarken - Viessmann, Vaillant, Buderus, Wolf und mehr",
            "Förderberatung für bis zu 40% Zuschuss bei Heizungstausch",
            "Wartungsverträge für sorgenfreie Heizperioden"
          ]}
          futureState="...Ihre Heizung läuft zuverlässig, Ihre Energiekosten sind gesunken und Sie haben einen vertrauenswürdigen Partner, der sich um alles kümmert. Bei uns ist das kein Wunschtraum - das ist Standard."
          authorityText="24/7 Notdienst - Schnelle Hilfe bei Heizungsausfall"
          urgencyText="Noch 3 Beratungstermine diese Woche frei"
          transformationSteps={[
            "Anruf oder Chat: Schildern Sie kurz das Problem - wir sind rund um die Uhr erreichbar.",
            "Schnelle Diagnose: Unser Techniker kommt, prüft die Heizung und nennt Ihnen den Festpreis.",
            "Sofortige Lösung: Die Reparatur erfolgt direkt - Sie haben wieder Wärme und Sicherheit."
          ]}
        />

        <ServiceAdvisor serviceType="heizung" />

        <CustomerStories 
          stories={heizungStories}
          title="Heizungsnotfälle gelöst: Echte Kundengeschichten"
          subtitle="So haben wir anderen Münchnern in der Kälte geholfen"
        />

        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-3xl font-bold mb-4">Heizung München: Leistungen, Kosten & Notdienst</h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Von der Neuinstallation bis zur Reparatur - wir sind Ihr zuverlässiger Partner für alle Heizungsfragen.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {services.map((service) => (
                <Card key={service.title} className="hover-elevate">
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Thermometer className="w-6 h-6 text-primary" />
                      </div>
                      <div className="flex-1">
                        <h3 className="font-semibold text-lg mb-2">{service.title}</h3>
                        <p className="text-sm text-muted-foreground mb-3">{service.description}</p>
                        <div className="flex flex-wrap gap-2">
                          {service.features.map((feature) => (
                            <Badge key={feature} variant="outline" className="text-xs">
                              {feature}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Ausführlicher Text-Bereich für SEO */}
        <section className="pt-8 pb-4 md:pt-8 md:pb-4">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Heizungsreparatur München: Kosten, Ablauf & Wartung
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Eine funktionierende Heizung ist in den kalten Münchner Wintern unverzichtbar. Als Partnernetzwerk mit über 
                20 Jahren Erfahrung sind wir Ihr verlässlicher Partner für alle Heizungsfragen - von der Wartung über die 
                Reparatur bis zur kompletten Neuinstallation.
              </p>
              <p>
                Unser 24/7-Notdienst steht Ihnen rund um die Uhr zur Verfügung. Bei einem Heizungsausfall sind wir in der 
                Regel innerhalb von 45-60 Minuten bei Ihnen - auch nachts, am Wochenende und an Feiertagen. Denn wir wissen: 
                Ohne Heizung wird es schnell ungemütlich und im schlimmsten Fall können Wasserleitungen einfrieren.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Heizung reparieren lassen München: Alle Marken, ein Ansprechpartner</h3>
              <p>
                Egal ob Viessmann, Vaillant, Buderus, Wolf, Junkers oder andere Hersteller - wir kennen alle Systeme und haben 
                die häufigsten Ersatzteile direkt dabei. Das bedeutet für Sie: schnelle Reparatur, oft noch am selben Tag, 
                ohne lange Wartezeiten auf Ersatzteile.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Heizung warten lassen München: Kosten sparen</h3>
              <p>
                Eine jährliche Heizungswartung kostet zwischen 150-200€ - und spart Ihnen langfristig ein Vielfaches. Denn 
                eine gut gewartete Heizung verbraucht bis zu 15% weniger Energie, läuft zuverlässiger und hält länger. 
                Unsere Wartungsverträge beinhalten bevorzugte Termine bei Notfällen und vergünstigte Reparaturen.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Alte Heizung austauschen München: Förderung bis 40%</h3>
              <p>
                Ist Ihre Heizung älter als 15-20 Jahre? Dann lohnt sich oft ein Austausch gegen ein modernes, effizientes 
                System. Wir beraten Sie neutral zu allen Optionen - Gasbrennwert, Wärmepumpe, Pellets oder Hybrid - und 
                helfen bei der Beantragung von Fördergeldern. Bis zu 40% der Investitionskosten können durch staatliche 
                Förderung gedeckt werden.
              </p>
              <p>
                Kontaktieren Sie uns für eine kostenlose Erstberatung. Wir prüfen Ihre aktuelle Situation, zeigen Einsparpotenziale 
                auf und erstellen ein unverbindliches Angebot - transparent, fair und ohne versteckte Kosten.
              </p>
            </div>
          </div>
        </section>

        <ServiceAreas 
          serviceName="Heizungsservice" 
          
          highlightAreas={["Pasing", "Laim", "Neuhausen"]}
        />

        <ColorfulFAQ 
          items={faqItems}
          title="Häufige Fragen zum Heizungsservice"
        />

        <section className="py-6 md:pt-8 pb-4 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Heizung Notdienst München – 24/7 erreichbar
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Unser 24/7 Notdienst ist für Sie da. In München und Umgebung meist innerhalb einer Stunde vor Ort.
            </p>
                        <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-heizung-cta">
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

        <RelatedServices currentService="heizung" />
      </main>
      <Footer />
      <AIChatWidget serviceCategory="heizung" />
    </div>
  );
}
