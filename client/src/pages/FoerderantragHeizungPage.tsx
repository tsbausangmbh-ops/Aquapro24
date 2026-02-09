import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { seoMeta } from "@shared/seoMeta";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { HeroPicture } from "@/components/ResponsiveHero";
import { 
  FileText,
  Phone, 
  CheckCircle2, 
  Calendar,
  Clock,
  ArrowRight,
  Flame,
  Wind,
  Thermometer,
  Leaf,
  Euro,
  Home,
  Percent,
  Shield,
  Zap,
  Gift,
  Sun,
  Users,
  Building2,
  AlertTriangle,
  Star
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderantragHeizungPage() {
  const heizungsarten = [
    {
      icon: Leaf,
      title: "Wärmepumpe",
      foerderung: "70%",
      beschreibung: "Luft-Wasser, Sole-Wasser oder Wasser-Wasser",
      investition: "25.000 - 45.000€",
      details: [
        "30% Grundförderung",
        "+20% Klimageschwindigkeitsbonus",
        "+30% Einkommensbonus",
        "+5% Effizienzbonus"
      ],
      marken: ["Viessmann", "Vaillant", "Wolf", "Buderus"],
      color: "bg-green-500"
    },
    {
      icon: Flame,
      title: "Pelletheizung",
      foerderung: "70%",
      beschreibung: "Biomasse-Heizung mit Holzpellets",
      investition: "18.000 - 30.000€",
      details: [
        "30% Grundförderung",
        "+20% Klimageschwindigkeitsbonus",
        "+30% Einkommensbonus"
      ],
      marken: ["Viessmann", "Fröling", "ÖkoFEN"],
      color: "bg-orange-500"
    },
    {
      icon: Sun,
      title: "Solarthermie",
      foerderung: "25%",
      beschreibung: "Solaranlage für Warmwasser und Heizung",
      investition: "8.000 - 15.000€",
      details: [
        "25% Grundförderung",
        "Kombinierbar mit Wärmepumpe",
        "Förderfähig als Ergänzung"
      ],
      marken: ["Viessmann", "Buderus", "Vaillant"],
      color: "bg-yellow-500"
    },
    {
      icon: Thermometer,
      title: "Fußbodenheizung",
      foerderung: "20%",
      beschreibung: "Flächenheizung als Heizungsoptimierung",
      investition: "5.000 - 12.000€",
      details: [
        "20% als Optimierungsmaßnahme",
        "Nur mit neuem Wärmeerzeuger",
        "Hydraulischer Abgleich inklusive"
      ],
      marken: ["Uponor", "Rehau", "Viega"],
      color: "bg-blue-500"
    },
    {
      icon: Wind,
      title: "Lüftungsanlage",
      foerderung: "20%",
      beschreibung: "Kontrollierte Wohnraumlüftung mit WRG",
      investition: "6.000 - 15.000€",
      details: [
        "20% als Optimierungsmaßnahme",
        "Wärmerückgewinnung bis 95%",
        "Zentral oder dezentral"
      ],
      marken: ["Zehnder", "Vallox", "Helios"],
      color: "bg-cyan-500"
    },
    {
      icon: Zap,
      title: "Brennstoffzelle",
      foerderung: "70%",
      beschreibung: "Strom und Wärme aus Wasserstoff",
      investition: "30.000 - 45.000€",
      details: [
        "30% Grundförderung",
        "+20% Klimageschwindigkeitsbonus",
        "Zusätzliche Einspeisevergütung"
      ],
      marken: ["Viessmann", "SolidPower"],
      color: "bg-purple-500"
    }
  ];

  const foerderBeispiele = [
    {
      titel: "Wärmepumpe Altbau (Max. Förderung)",
      beschreibung: "Austausch 25 Jahre alte Gasheizung, niedriges Einkommen",
      situation: "Einfamilienhaus, 150m², Baujahr 1985, Einkommen < 40.000€",
      investition: 32000,
      foerderProzent: 70,
      zuschuss: 21000,
      eigenanteil: 11000,
      berechnung: "30% Grund + 20% Klima + 30% Einkommen = 80% → max. 70%"
    },
    {
      titel: "Pelletheizung + Solar",
      beschreibung: "Ölheizung ersetzen, ohne Einkommensbonus",
      situation: "Einfamilienhaus, 180m², Baujahr 1978",
      investition: 38000,
      foerderProzent: 50,
      zuschuss: 19000,
      eigenanteil: 19000,
      berechnung: "30% Grund + 20% Klima = 50%"
    },
    {
      titel: "Wärmepumpe + Fußbodenheizung",
      beschreibung: "Komplettsanierung mit Effizienzbonus",
      situation: "Doppelhaushälfte, 120m², Baujahr 1992",
      investition: 42000,
      foerderProzent: 55,
      zuschuss: 23100,
      eigenanteil: 18900,
      berechnung: "30% Grund + 20% Klima + 5% Effizienz = 55%"
    }
  ];

  const antragAblauf = [
    {
      step: 1,
      title: "Beratung vor Ort",
      dauer: "1-2 Std",
      beschreibung: "Wir besichtigen Ihr Gebäude und prüfen alle Fördermöglichkeiten."
    },
    {
      step: 2,
      title: "Angebot erstellen",
      dauer: "2-3 Tage",
      beschreibung: "Sie erhalten ein Festpreisangebot mit detaillierter Förderberechnung."
    },
    {
      step: 3,
      title: "BAFA-Antrag stellen",
      dauer: "1 Tag",
      beschreibung: "Wir stellen den Förderantrag kostenlos für Sie (mit Vollmacht)."
    },
    {
      step: 4,
      title: "Bewilligung abwarten",
      dauer: "4-8 Wochen",
      beschreibung: "Nach Eingang prüft die BAFA Ihren Antrag. Wir informieren Sie."
    },
    {
      step: 5,
      title: "Installation",
      dauer: "1-5 Tage",
      beschreibung: "Nach Bewilligung beginnen wir mit der fachgerechten Montage."
    },
    {
      step: 6,
      title: "Förderung erhalten",
      dauer: "2-4 Wochen",
      beschreibung: "Nach Abschluss wird der Zuschuss auf Ihr Konto überwiesen."
    }
  ];

  const keywords = [
    "AquaPro 24 Förderantrag Heizung München", "BAFA Wärmepumpe Antrag", "Heizungsförderung beantragen",
    "Wärmepumpe Förderung 2026", "Pelletheizung Förderung", "Solarthermie Zuschuss",
    "Fußbodenheizung Förderung", "Heizungstausch Förderantrag", "BAFA Antrag Heizung",
    "Klimageschwindigkeitsbonus", "70% Heizungsförderung", "Einkommensbonus Heizung",
    "Viessmann Wärmepumpe", "Vaillant Förderung", "Wolf Wärmepumpe Zuschuss",
    "BEG Heizung", "Förderantrag kostenlos", "Heizungsmodernisierung Zuschuss"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={seoMeta['/foerderantrag-heizung'].title}
        description={seoMeta['/foerderantrag-heizung'].description}
        canonical="https://aquapro24.de/foerderantrag-heizung"
        keywords={seoMeta['/foerderantrag-heizung'].keywords.join(', ')}
        ogImageAlt="Förderantrag Heizung München BAFA Wärmepumpe bis 70 Prozent Förderung - Viessmann Vaillant Wolf"
        aiSummary="AquaPro 24 München: Förderantrag Heizung. BAFA bis 70% für Wärmepumpe (Viessmann, Vaillant, Wolf), Pellet, Solar. Kostenloser Antragsservice. Klimabonus, Einkommensbonus. Kontakt: 089 444438872"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" },
          { name: "Förderantrag Heizung", url: "https://aquapro24.de/foerderantrag-heizung" }
        ]}
        serviceSchema={{
          name: "Förderantrag Heizung München",
          description: "BAFA Förderantrag für Heizungstausch. Wärmepumpe, Pellet, Solar bis 70% Förderung. Kostenloser Antragsservice.",
          serviceType: "Förderantrag",
          urlSlug: "foerderantrag-heizung",
          catalogName: "Heizungsförderung 2026",
          serviceOffers: [
            { name: "Wärmepumpe Förderantrag", price: "Inklusive" },
            { name: "Pelletheizung Förderantrag", price: "Inklusive" },
            { name: "Solarthermie Förderantrag", price: "Inklusive" },
            { name: "Fußbodenheizung Förderantrag", price: "Inklusive" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 98
          }
        }}
        faqSchema={[
          {
            question: "Welche Heizungen werden mit 70% gefördert?",
            answer: "Mit bis zu 70% werden Wärmepumpen, Pelletheizungen und Brennstoffzellen gefördert. Die 70% setzen sich zusammen aus: 30% Grundförderung + 20% Klimageschwindigkeitsbonus + 30% Einkommensbonus (bei Einkommen unter 40.000€/Jahr)."
          },
          {
            question: "Wird die Fußbodenheizung auch gefördert?",
            answer: "Ja, als Heizungsoptimierung wird die Fußbodenheizung mit 20% gefördert – allerdings nur in Kombination mit dem Einbau eines neuen Wärmeerzeugers (z.B. Wärmepumpe)."
          },
          {
            question: "Welche Marken werden gefördert?",
            answer: "Alle marktüblichen Hersteller werden gefördert, darunter Viessmann, Vaillant, Wolf, Buderus. Entscheidend sind die technischen Anforderungen der BAFA, nicht die Marke."
          }
        ]}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative overflow-hidden" style={{paddingTop: "2rem", paddingBottom: "2rem"}}>
          <HeroPicture heroKey="hero_foerderantrag_heizung" alt="" />
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
                Förderantrag Heizung München – Wärmepumpe & Pellet bis 70%
              </h1>

              <div className="sr-only" data-testid="keyword-cloud">
                {keywords.map((keyword, index) => (
                  <span key={index} className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">{keyword}</span>
                ))}
              </div>

              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-1 sm:mb-3">
                <strong>Heizung tauschen? Maximale Förderung sichern!</strong>
              </p>

              <p className="text-sm sm:text-base text-white/90 mb-2 sm:mb-4">
                Sichern Sie sich die maximale Förderung für Ihre neue Heizung. 
                Wärmepumpe, Pellet oder Solar – wir übernehmen den Antrag kostenlos.
              </p>

              <div className="backdrop-blur-sm rounded-lg p-2 sm:p-3 mb-2 sm:mb-4 border" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.2)" }}>
                <p className="text-white/90 text-sm">
                  <strong className="text-accent">Stellen Sie sich vor:</strong> Ihre alte Heizung wird durch eine moderne Wärmepumpe ersetzt – und der Staat zahlt bis zu 70% der Kosten.
                </p>
              </div>

              <p className="text-sm sm:text-base text-white/80 mb-3 sm:mb-6">
                <strong>2.847 Münchner Familien</strong> vertrauen uns – Wärmepumpe ab 9.000€ nach Förderung | Antrag inklusive
              </p>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 mb-3 sm:mb-6">
                <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-heizung">
                  <a href="tel:+4989444438872">
                    <Phone className="w-5 h-5" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline"
                  className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} 
                  asChild
                  data-testid="button-termin-heizung"
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
                  <span>Bis zu 70% Förderung</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-4 sm:py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">
                Heizungsförderung München: Alle förderfähigen Systeme
              </h2>
              <p className="text-muted-foreground">
                Diese Heizungssysteme werden 2026 staatlich gefördert
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {heizungsarten.map((heizung, index) => (
                <Card key={index} className="overflow-hidden">
                  <div className={`${heizung.color} p-3 text-white`}>
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-2">
                        <heizung.icon className="w-6 h-6" />
                        <span className="font-bold">{heizung.title}</span>
                      </div>
                      <Badge className="bg-white text-gray-900 font-bold">
                        bis {heizung.foerderung}
                      </Badge>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-2">{heizung.beschreibung}</p>
                    <p className="text-sm font-medium mb-3">Investition: {heizung.investition}</p>
                    
                    <ul className="space-y-1 mb-3">
                      {heizung.details.map((detail, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-xs">
                          <CheckCircle2 className="w-3 h-3 text-green-500" />
                          {detail}
                        </li>
                      ))}
                    </ul>

                    <div className="border-t pt-3">
                      <p className="text-xs text-muted-foreground mb-1">Marken:</p>
                      <div className="flex flex-wrap gap-1">
                        {heizung.marken.map((marke, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{marke}</Badge>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">
                Förderbeispiele Heizung München: Konkrete Berechnungen
              </h2>
              <p className="text-muted-foreground">
                So viel Förderung erhalten unsere Kunden in München
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {foerderBeispiele.map((beispiel, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <CardTitle className="text-lg">{beispiel.titel}</CardTitle>
                    <p className="text-sm text-muted-foreground">{beispiel.beschreibung}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-xs bg-muted/50 p-2 rounded mb-4">{beispiel.situation}</p>
                    
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investition:</span>
                        <span className="font-medium">{beispiel.investition.toLocaleString('de-DE')} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Förderquote:</span>
                        <Badge className="bg-green-500">{beispiel.foerderProzent}%</Badge>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Zuschuss:</span>
                        <span className="font-bold">- {beispiel.zuschuss.toLocaleString('de-DE')} €</span>
                      </div>
                      <div className="border-t pt-2">
                        <div className="flex justify-between">
                          <span className="font-medium">Eigenanteil:</span>
                          <span className="font-bold text-lg text-primary">
                            {beispiel.eigenanteil.toLocaleString('de-DE')} €
                          </span>
                        </div>
                      </div>
                    </div>
                    
                    <p className="text-xs text-muted-foreground mt-3 bg-green-50 dark:bg-green-900/20 p-2 rounded">
                      {beispiel.berechnung}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">
                BAFA Antrag Heizung München: So läuft es ab
              </h2>
              <p className="text-muted-foreground">
                Von der Beratung bis zur Förderauszahlung in 6 Schritten
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {antragAblauf.map((schritt) => (
                <div key={schritt.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {schritt.step}
                    </div>
                  </div>
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <h3 className="text-base sm:text-lg font-semibold">{schritt.title}</h3>
                      <Badge variant="secondary" className="text-xs">{schritt.dauer}</Badge>
                    </div>
                    <p className="text-sm text-muted-foreground">{schritt.beschreibung}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Wärmepumpe Förderung München: Viessmann, Vaillant, Wolf
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Die Wärmepumpe ist das am stärksten geförderte Heizsystem 2026. Mit bis zu 70% 
                Förderung sinkt der Eigenanteil auf ein Minimum. Wir verbauen Wärmepumpen 
                aller führenden Hersteller: Viessmann Vitocal, Vaillant aroTHERM, Wolf CHA.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">Förderantrag Service München: Komplett kostenlos</h3>
              <p>
                Bei Beauftragung ist unser Förderantrag-Service komplett kostenlos. Sie 
                unterschreiben nur eine Vollmacht – wir erledigen den Rest. Von der 
                Registrierung im BAFA-Portal bis zur Einreichung aller Unterlagen.
              </p>
              <h3 className="text-lg sm:text-xl font-semibold text-foreground mt-6">Klimageschwindigkeitsbonus: 20% Extra bis 2028</h3>
              <p>
                Wer seine alte Öl- oder Gasheizung (älter als 20 Jahre) jetzt austauscht, 
                erhält 20% Klimageschwindigkeitsbonus. Dieser Bonus wird ab 2029 schrittweise 
                reduziert. Jetzt handeln und maximale Förderung sichern!
              </p>
            </div>
          </div>
        </section>

        <FAQ 
          title="Häufige Fragen zum Heizungs-Förderantrag München"
          items={[
            {
              question: "Wird meine Gasheizung auch gefördert?",
              answer: "Nein, neue Gasheizungen werden seit 2024 nicht mehr gefördert. Gefördert werden nur erneuerbare Energien wie Wärmepumpen, Pelletheizungen und Solarthermie."
            },
            {
              question: "Kann ich Wärmepumpe und Fußbodenheizung kombiniert fördern?",
              answer: "Ja! Die Wärmepumpe wird mit bis zu 70% gefördert, die Fußbodenheizung als Heizungsoptimierung zusätzlich mit 20%. Beide Maßnahmen können im selben Antrag gestellt werden."
            },
            {
              question: "Welche Wärmepumpen-Marken werden gefördert?",
              answer: "Alle Marken werden gefördert, solange die technischen BAFA-Anforderungen erfüllt sind. Wir verbauen Viessmann, Vaillant, Wolf, Buderus – alle sind förderfähig."
            },
            {
              question: "Wie schnell bekomme ich die Förderung?",
              answer: "Die BAFA bewilligt Anträge in 4-8 Wochen. Nach Abschluss der Installation und Einreichung des Verwendungsnachweises wird der Zuschuss in 2-4 Wochen ausgezahlt."
            },
            {
              question: "Lohnt sich eine Wärmepumpe im Altbau?",
              answer: "Ja, moderne Wärmepumpen sind auch für Altbauten geeignet. Mit 70% Förderung sinkt der Eigenanteil stark. Besonders effizient in Kombination mit Fußbodenheizung."
            }
          ]}
        />

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Heizungs-Förderantrag starten: Kostenlose Beratung
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Lassen Sie sich beraten, welche Heizung und Förderung für Ihr Gebäude optimal ist. 
              Wir übernehmen die komplette Antragstellung kostenlos für Sie.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4989444438872" data-testid="button-call-heizung-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link href="/termin" data-testid="link-termin-heizung">
                  <Calendar className="w-4 h-4 mr-2" />
                  Beratungstermin buchen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>

      <InternalLinks
        title="Heizungsförderung & Services"
        variant="footer-cta"
        links={[
          { href: "/foerderung", text: "Alle Förderungen", description: "BAFA, KfW & Steuerbonus" },
          { href: "/foerderantrag", text: "Förderantrag allgemein", description: "Schritt-für-Schritt Anleitung" },
          { href: "/foerderrechner", text: "Förderrechner", description: "Ihren Zuschuss berechnen" },
          { href: "/waermepumpe", text: "Wärmepumpe München", description: "Bis 70% BAFA-Förderung" },
          { href: "/heizung", text: "Heizung München", description: "Wartung & Modernisierung" },
          { href: "/termin", text: "Beratungstermin buchen", description: "Persönliche Förderberatung" },
        ]}
      />
      <Footer />
    </div>
  );
}
