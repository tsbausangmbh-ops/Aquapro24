import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heat_pump_installati_53374252.webp";
import { 
  Euro,
  Phone, 
  CheckCircle2, 
  FileText,
  Calendar,
  Percent,
  Building2,
  Leaf,
  ArrowRight,
  Mail,
  Calculator,
  Clock,
  Shield,
  Flame,
  Home,
  Zap,
  Users,
  AlertTriangle,
  Gift
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderungPage() {
  const currentYear = new Date().getFullYear();
  const standDatum = `${new Date().getMonth() + 1}/${currentYear}`;

  const foerderProgramme = [
    {
      icon: Flame,
      title: "KfW 458 Heizungsförderung",
      subtitle: `Bundesförderung für effiziente Gebäude (Stand ${standDatum})`,
      maxFoerderung: "70%",
      beschreibung: "Die höchste Förderung für den Umstieg auf erneuerbare Energien. Seit 2024 über KfW (nicht mehr BAFA).",
      boni: [
        { name: "Basisförderung", prozent: "30%", info: "Für alle klimafreundlichen Heizungen" },
        { name: "Klimageschwindigkeitsbonus", prozent: "+20%", info: "Austausch Öl/Gas/Kohle/Nachtspeicher" },
        { name: "Einkommensbonus", prozent: "+30%", info: "Haushaltseinkommen ≤ 40.000€/Jahr" },
        { name: "Effizienzbonus", prozent: "+5%", info: "Natürliche Kältemittel (Wärmepumpe)" }
      ],
      geeignetFuer: ["Wärmepumpe", "Solarthermie", "Pelletheizung", "Brennstoffzelle", "Fernwärme"],
      vorteile: ["Direkter Zuschuss", "Keine Rückzahlung", "Max. 30.000€ pro Wohneinheit"],
      color: "bg-green-500",
      link: "/foerderantrag-heizung"
    },
    {
      icon: Leaf,
      title: "BAFA Dämmung & Optimierung",
      subtitle: `Einzelmaßnahmen Gebäudehülle (Stand ${standDatum})`,
      maxFoerderung: "20%",
      beschreibung: "BAFA fördert Dämmung, Fenster, Lüftung und Heizungsoptimierung – NICHT Heizungstausch.",
      boni: [
        { name: "Basisförderung", prozent: "15%", info: "Für alle Einzelmaßnahmen" },
        { name: "iSFP-Bonus", prozent: "+5%", info: "Mit Sanierungsfahrplan" },
        { name: "Max. förderfähig", prozent: "30.000€", info: "Pro Wohneinheit" },
        { name: "Emissionsminderung", prozent: "50%", info: "Für Biomasse-Filter" }
      ],
      geeignetFuer: ["Fassadendämmung", "Dachdämmung", "Fenster", "Lüftung", "Hydraul. Abgleich"],
      vorteile: ["Direkter Zuschuss", "Kombinierbar mit KfW 458", "Auch für Bestandsheizung"],
      color: "bg-orange-500",
      link: "/foerderrechner"
    },
    {
      icon: Home,
      title: "KfW 455-B Barrierefreies Bad",
      subtitle: `Altersgerecht Umbauen (Stand ${standDatum})`,
      maxFoerderung: "12,5%",
      beschreibung: "Zuschuss für barrierefreie Badezimmer: Bodengleiche Dusche, Haltegriffe, breitere Türen.",
      boni: [
        { name: "Fördersatz", prozent: "12,5%", info: "Der förderfähigen Kosten" },
        { name: "Max. Zuschuss", prozent: "6.250€", info: "Pro Wohneinheit" },
        { name: "Max. Investition", prozent: "50.000€", info: "Förderfähige Kosten" },
        { name: "Altersunabhängig", prozent: "100%", info: "Keine Altersbeschränkung" }
      ],
      geeignetFuer: ["Bodengleiche Dusche", "Haltegriffe", "Türverbreiterung", "Unterfahrbarer Waschtisch"],
      vorteile: ["Ohne Altersgrenze", "Direkter Zuschuss", "Auch Pflegegrad-Antrag parallel"],
      color: "bg-cyan-500",
      link: "/foerderrechner"
    },
    {
      icon: Building2,
      title: "KfW 358/359 Ergänzungskredit",
      subtitle: `Zinsgünstige Finanzierung (Stand ${standDatum})`,
      maxFoerderung: "120.000€",
      beschreibung: "Zinsgünstiger Kredit für den nach Förderung verbleibenden Eigenanteil. Nur nach KfW 458/459 Zusage.",
      boni: [
        { name: "Maximaler Kredit", prozent: "120.000€", info: "Pro Wohneinheit" },
        { name: "Zinssatz", prozent: "ab 0,01%", info: "Effektiver Jahreszins" },
        { name: "Laufzeit", prozent: "4-35 Jahre", info: "Flexible Tilgung" },
        { name: "Einkommensbonus", prozent: "extra günstig", info: "Bei ≤ 90.000€ Einkommen" }
      ],
      geeignetFuer: ["Heizungstausch", "Wärmepumpe", "Pellet", "Solarthermie"],
      vorteile: ["Zusätzlich zu KfW 458", "Schnelle Bewilligung", "Einkommensabhängig vergünstigt"],
      color: "bg-blue-500",
      link: "/foerderantrag"
    },
    {
      icon: Calculator,
      title: "Steuerbonus §35c EStG",
      subtitle: "Alternative zur KfW/BAFA-Förderung",
      maxFoerderung: "40.000€",
      beschreibung: "20% der Sanierungskosten über 3 Jahre von der Steuer absetzen. Nicht kombinierbar mit KfW/BAFA.",
      boni: [
        { name: "Jahr 1", prozent: "7%", info: "Maximal 14.000€" },
        { name: "Jahr 2", prozent: "7%", info: "Maximal 14.000€" },
        { name: "Jahr 3", prozent: "6%", info: "Maximal 12.000€" },
        { name: "Gesamt", prozent: "20%", info: "Maximal 40.000€" }
      ],
      geeignetFuer: ["Selbstnutzer", "Altbau >10 Jahre", "Alle energetischen Maßnahmen"],
      vorteile: ["Kein Antrag nötig", "Nachträglich möglich", "Einfache Abwicklung"],
      color: "bg-purple-500",
      link: "/foerderrechner"
    }
  ];

  const foerderBeispiele = [
    {
      titel: "Wärmepumpe im Altbau",
      beschreibung: "Austausch einer 25 Jahre alten Gasheizung",
      investition: 35000,
      foerderung: 70,
      zuschuss: 21000,
      eigenanteil: 14000,
      details: "30% Grund + 20% Klimabonus + 20% Einkommensbonus = 70%",
      icon: Home
    },
    {
      titel: "Wärmepumpe + Fußbodenheizung",
      beschreibung: "Komplettsanierung mit Flächenheizung",
      investition: 48000,
      foerderung: 55,
      zuschuss: 26400,
      eigenanteil: 21600,
      details: "30% Grund + 20% Klimabonus + 5% Effizienz = 55%",
      icon: Flame
    },
    {
      titel: "Solarthermie + Heizung",
      beschreibung: "Kombination Solar und Gas-Brennwert",
      investition: 22000,
      foerderung: 25,
      zuschuss: 5500,
      eigenanteil: 16500,
      details: "25% Grundförderung für Solarthermie",
      icon: Zap
    }
  ];

  const ablaufSchritte = [
    {
      step: 1,
      icon: Phone,
      title: "Kostenlose Beratung",
      beschreibung: "Wir prüfen Ihr Gebäude und empfehlen die optimale Förderung."
    },
    {
      step: 2,
      icon: Calculator,
      title: "Angebot & Förderberechnung",
      beschreibung: "Sie erhalten ein Festpreisangebot mit genauer Förderberechnung."
    },
    {
      step: 3,
      icon: FileText,
      title: "Antragstellung",
      beschreibung: "Wir stellen den KfW/BAFA-Antrag kostenlos für Sie (mit Vollmacht)."
    },
    {
      step: 4,
      icon: Clock,
      title: "Bewilligung abwarten",
      beschreibung: "Nach 4-8 Wochen erhalten Sie die Förderzusage."
    },
    {
      step: 5,
      icon: CheckCircle2,
      title: "Installation",
      beschreibung: "Erst nach Bewilligung beginnen wir mit der fachgerechten Installation."
    },
    {
      step: 6,
      icon: Euro,
      title: "Förderung erhalten",
      beschreibung: "Nach Abschluss wird der Zuschuss auf Ihr Konto überwiesen."
    }
  ];

  const wichtigeHinweise = [
    {
      icon: AlertTriangle,
      title: "Antrag VOR Beauftragung",
      text: "Der KfW/BAFA-Antrag muss zwingend VOR Vertragsabschluss gestellt werden. Rückwirkende Förderung ist nicht möglich."
    },
    {
      icon: Clock,
      title: "Klimabonus bis 2028",
      text: "Der 20% Klimageschwindigkeitsbonus wird ab 2029 schrittweise reduziert. Jetzt handeln lohnt sich!"
    },
    {
      icon: Users,
      title: "Einkommensbonus prüfen",
      text: "30% extra bei Haushaltseinkommen unter 40.000€/Jahr. Nachweis über Steuerbescheid."
    }
  ];

  const keywords = [
    "AquaPro 24 Förderung Heizung", "KfW 458 Wärmepumpe", "KfW 358 Heizungskredit",
    "70% Förderung Heizungstausch", "Klimageschwindigkeitsbonus", "Einkommensbonus Heizung",
    "Steuerbonus Heizung §35c", "Förderantrag Wärmepumpe", "KfW Antrag München",
    "Heizungsförderung beantragen", "Wärmepumpe Zuschuss", `BEG Förderung ${currentYear}`,
    "Pelletheizung Förderung", "BAFA Dämmung", "KfW 455-B Bad",
    "Förderberatung München", "Barrierefreies Bad Förderung", "KfW 458 Zuschuss",
    "Energetische Sanierung Förderung", "Fördermittel Heizung München"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`Förderung Heizung München: KfW 458, BAFA & Steuerbonus ${currentYear} | AquaPro 24`}
        description={`Bis zu 70% Förderung für Ihre neue Heizung in München (Stand ${standDatum}). KfW 458 Wärmepumpe, BAFA Dämmung, KfW 455-B Bad. Kostenlose Beratung. Tel: 089 444438872`}
        canonical="https://aquapro24.de/foerderung"
        keywords={keywords.join(", ")}
        aiSummary={`AquaPro 24 München: Förderberatung Heizung & Wasser Stand ${standDatum}. KfW 458 bis 70% für Wärmepumpe, BAFA 15-20% Dämmung, KfW 455-B 12,5% Bad, KfW 358 Kredit bis 120.000€. Kostenloser Antragsservice. Kontakt: 089 444438872`}
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" }
        ]}
        serviceSchema={{
          name: "Förderberatung Heizung & Wasser München",
          description: `KfW 458, BAFA und Steuerbonus Beratung für Heizungstausch und Badumbau in München. Bis zu 70% staatliche Förderung (Stand ${standDatum}).`,
          serviceType: "Förderberatung",
          urlSlug: "foerderung",
          catalogName: `Heizungsförderung München ${currentYear}`,
          serviceOffers: [
            { name: "KfW 458 Förderberatung Heizung", price: "Kostenlos" },
            { name: "BAFA Dämmung Beratung", price: "Kostenlos" },
            { name: "KfW 455-B Barrierefreies Bad", price: "Kostenlos" },
            { name: "Förderantrag Service", price: "Inklusive" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          }
        }}
        faqSchema={[
          {
            question: `Wie hoch ist die KfW 458 Förderung für Wärmepumpen ${currentYear}?`,
            answer: "Die KfW 458 Förderung (seit 2024 bei KfW, nicht mehr BAFA) kann bis zu 70% betragen: 30% Basisförderung + 20% Klimageschwindigkeitsbonus (Austausch Öl/Gas/Kohle) + 30% Einkommensbonus (≤40.000€/Jahr) + 5% Effizienzbonus. Max. 30.000€ pro Wohneinheit."
          },
          {
            question: "Was fördert das BAFA aktuell?",
            answer: "Das BAFA fördert seit 2024 NICHT mehr Heizungen, sondern nur: Dämmung, Fenster, Lüftung und Heizungsoptimierung mit 15-20% (Basis 15% + 5% iSFP-Bonus). Heizungsförderung läuft über die KfW."
          },
          {
            question: "Was ist die KfW 455-B Förderung für barrierefreie Bäder?",
            answer: "Die KfW 455-B fördert barrierefreie Badezimmer mit 12,5% der Kosten (max. 6.250€). Gefördert werden: bodengleiche Dusche, Haltegriffe, Türverbreiterung, unterfahrbarer Waschtisch. Keine Altersbeschränkung!"
          },
          {
            question: "Was ist der Klimageschwindigkeitsbonus?",
            answer: "Der Klimageschwindigkeitsbonus von 20% wird gewährt, wenn Sie eine funktionstüchtige Öl-, Kohle-, Gas- oder Nachtspeicherheizung durch eine klimafreundliche Heizung ersetzen. Gilt noch bis 2028."
          },
          {
            question: "Kann ich KfW 458 und KfW 358 kombinieren?",
            answer: "Ja! Nach Erhalt der KfW 458 Zuschuss-Zusage können Sie den KfW 358/359 Ergänzungskredit beantragen: bis 120.000€ zu günstigen Zinsen für den verbleibenden Eigenanteil."
          }
        ]}
        ogImageAlt="Förderung Heizung München BAFA KfW 2025 Zuschuss Wärmepumpe - staatliche Förderprogramme Überblick"
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-green-500 text-white">
                <Gift className="w-3 h-3 mr-1" />
                Bis zu 70% staatliche Förderung {currentYear}
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Förderung Heizung München – KfW 458, BAFA & Steuerbonus {currentYear}
              </h1>
              
              <p className="text-lg text-white/90 mb-4 max-w-2xl">
                Sichern Sie sich bis zu <strong>70% staatliche Förderung</strong> für Ihre neue Wärmepumpe. 
                Wir übernehmen die komplette Antragstellung kostenlos für Sie.
              </p>

              <div className="flex flex-wrap gap-2 mb-6">
                {keywords.slice(0, 12).map((keyword, index) => (
                  <span 
                    key={index}
                    className="px-2 py-1 text-xs bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white/80"
                  >
                    {keyword}
                  </span>
                ))}
              </div>
              
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989444438872" data-testid="button-call-foerderung">
                    <Phone className="w-4 h-4 mr-2" />
                    089 444438872
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white" asChild>
                  <Link href="/foerderrechner" data-testid="link-foerderrechner">
                    <Calculator className="w-4 h-4 mr-2" />
                    Förderung berechnen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6 lg:py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Heizungsförderung München: Alle Programme im Überblick
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Drei Wege zur Förderung Ihrer neuen Heizung – wir beraten Sie, welcher für Sie optimal ist.
              </p>
            </div>

            <div className="grid lg:grid-cols-3 gap-6">
              {foerderProgramme.map((programm, index) => (
                <Card key={index} className="relative overflow-hidden">
                  <div className={`${programm.color} p-4 text-white`}>
                    <div className="flex items-center gap-3 mb-2">
                      <programm.icon className="w-8 h-8" />
                      <div>
                        <h3 className="font-bold text-lg">{programm.title}</h3>
                        <p className="text-sm text-white/80">{programm.subtitle}</p>
                      </div>
                    </div>
                    <div className="text-3xl font-bold">
                      bis {programm.maxFoerderung}
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <p className="text-sm text-muted-foreground mb-4">{programm.beschreibung}</p>
                    
                    <div className="space-y-2 mb-4">
                      {programm.boni.map((bonus, idx) => (
                        <div key={idx} className="flex items-center justify-between text-sm">
                          <span>{bonus.name}</span>
                          <Badge variant="secondary">{bonus.prozent}</Badge>
                        </div>
                      ))}
                    </div>

                    <div className="border-t pt-4 mb-4">
                      <p className="text-xs text-muted-foreground mb-2">Geeignet für:</p>
                      <div className="flex flex-wrap gap-1">
                        {programm.geeignetFuer.map((item, idx) => (
                          <Badge key={idx} variant="outline" className="text-xs">{item}</Badge>
                        ))}
                      </div>
                    </div>

                    <ul className="space-y-1 mb-4">
                      {programm.vorteile.map((vorteil, idx) => (
                        <li key={idx} className="flex items-center gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0" />
                          <span>{vorteil}</span>
                        </li>
                      ))}
                    </ul>

                    <Button className="w-full" variant="outline" asChild>
                      <Link href={programm.link}>
                        Mehr erfahren
                        <ArrowRight className="w-4 h-4 ml-2" />
                      </Link>
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Förderbeispiele München: So viel sparen Sie
              </h2>
              <p className="text-muted-foreground">
                Konkrete Beispiele aus unserer täglichen Praxis in München
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              {foerderBeispiele.map((beispiel, index) => (
                <Card key={index}>
                  <CardHeader className="pb-2">
                    <div className="flex items-center gap-3">
                      <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                        <beispiel.icon className="w-5 h-5 text-primary" />
                      </div>
                      <div>
                        <CardTitle className="text-lg">{beispiel.titel}</CardTitle>
                        <p className="text-sm text-muted-foreground">{beispiel.beschreibung}</p>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <div className="space-y-3">
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Investition:</span>
                        <span className="font-medium">{beispiel.investition.toLocaleString('de-DE')} €</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-muted-foreground">Förderung:</span>
                        <Badge className="bg-green-500">{beispiel.foerderung}%</Badge>
                      </div>
                      <div className="flex justify-between text-green-600">
                        <span>Zuschuss:</span>
                        <span className="font-bold">- {beispiel.zuschuss.toLocaleString('de-DE')} €</span>
                      </div>
                      <div className="border-t pt-3">
                        <div className="flex justify-between">
                          <span className="font-medium">Ihr Eigenanteil:</span>
                          <span className="font-bold text-lg text-primary">{beispiel.eigenanteil.toLocaleString('de-DE')} €</span>
                        </div>
                      </div>
                      <p className="text-xs text-muted-foreground bg-muted/50 p-2 rounded">
                        {beispiel.details}
                      </p>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>

            <div className="text-center mt-6">
              <Button size="lg" asChild>
                <Link href="/foerderrechner" data-testid="link-foerderrechner-2">
                  <Calculator className="w-4 h-4 mr-2" />
                  Jetzt Ihre Förderung berechnen
                </Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-2xl md:text-3xl font-bold mb-2">
                Förderantrag München: So läuft der Prozess ab
              </h2>
              <p className="text-muted-foreground">
                Von der Beratung bis zur Auszahlung – wir begleiten Sie durch den gesamten Prozess.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
              {ablaufSchritte.map((schritt) => (
                <div key={schritt.step} className="flex gap-4">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold">
                      {schritt.step}
                    </div>
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">{schritt.title}</h3>
                    <p className="text-sm text-muted-foreground">{schritt.beschreibung}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-destructive/5 border-y border-destructive/20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-center">
              Wichtige Hinweise München: Das müssen Sie wissen
            </h2>
            <div className="grid md:grid-cols-3 gap-6">
              {wichtigeHinweise.map((hinweis, index) => (
                <Card key={index} className="border-destructive/30 bg-destructive/5">
                  <CardContent className="pt-4">
                    <div className="flex items-start gap-3">
                      <div className="w-10 h-10 rounded-full bg-destructive/10 flex items-center justify-center flex-shrink-0">
                        <hinweis.icon className="w-5 h-5 text-destructive" />
                      </div>
                      <div>
                        <h3 className="font-semibold mb-1">{hinweis.title}</h3>
                        <p className="text-sm text-muted-foreground">{hinweis.text}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              KfW 458 Förderung Wärmepumpe München: Alle Details {currentYear}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Die Bundesförderung für effiziente Gebäude (BEG) macht den Umstieg auf erneuerbare 
                Energien so attraktiv wie nie. Seit 2024 läuft die Heizungsförderung über die KfW 
                (Programm 458/459), nicht mehr über das BAFA. Für Wärmepumpen können Sie bis zu 70% 
                der förderfähigen Kosten als Zuschuss erhalten (max. 30.000€ pro Wohneinheit).
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Klimageschwindigkeitsbonus Heizung München: 20% Extra-Förderung</h3>
              <p>
                Wer seine alte Öl-, Kohle-, Gas- oder Nachtspeicherheizung durch eine Wärmepumpe 
                ersetzt, erhält zusätzlich 20% Klimageschwindigkeitsbonus. Dieser Bonus gilt 
                noch bis 2028 und wird dann schrittweise reduziert. Schnell handeln lohnt sich!
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Einkommensbonus Heizung München: 30% für Haushalte</h3>
              <p>
                Haushalte mit einem zu versteuernden Jahreseinkommen unter 40.000 EUR erhalten 
                zusätzlich 30% Einkommensbonus. Als Nachweis dient der Einkommensteuerbescheid. 
                So wird die neue Heizung auch für kleinere Einkommen erschwinglich.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">KfW 358/359 Ergänzungskredit München: Zinsgünstig finanzieren</h3>
              <p>
                Der KfW 358/359 Ergänzungskredit kann zusätzlich zum KfW 458 Zuschuss 
                beantragt werden. Für den nach Förderung verbleibenden Eigenanteil erhalten Sie 
                einen zinsgünstigen Kredit (bis 120.000€) mit besonders attraktiven Konditionen 
                für Haushalte mit einem Einkommen unter 90.000 EUR.
              </p>
            </div>
          </div>
        </section>

        <FAQ 
          title={`Häufige Fragen zur Heizungsförderung München ${currentYear}`}
          items={[
            {
              question: `Wie hoch ist die maximale KfW 458 Förderung ${currentYear}?`,
              answer: "Die maximale KfW 458 Förderung beträgt 70% der förderfähigen Kosten, gedeckelt auf 30.000 EUR pro Wohneinheit. Bei einer Investition von 35.000 EUR erhalten Sie maximal 21.000 EUR Zuschuss."
            },
            {
              question: "Kann ich den KfW 358 Kredit mit dem KfW 458 Zuschuss kombinieren?",
              answer: "Ja! Nach Erhalt der KfW 458 Zuschuss-Zusage können Sie den KfW 358/359 Ergänzungskredit beantragen. Bis zu 120.000€ zu günstigen Zinsen für den verbleibenden Eigenanteil."
            },
            {
              question: "Wer stellt den KfW/BAFA Antrag?",
              answer: "Wir übernehmen die komplette Antragstellung bei KfW (Heizung) und BAFA (Dämmung) kostenlos für Sie. Mit einer Vollmacht reichen wir alle Unterlagen ein und überwachen den Prozess."
            },
            {
              question: "Wie lange dauert die KfW Bewilligung?",
              answer: "Die KfW Bewilligung für Heizungsförderung dauert aktuell 4-8 Wochen. Nach Erhalt der Förderzusage haben Sie 36 Monate Zeit, die Maßnahme umzusetzen."
            },
            {
              question: "Was ist besser: KfW 458 Zuschuss oder Steuerbonus?",
              answer: "In den meisten Fällen ist der KfW 458 Zuschuss günstiger (bis 70%), da er direkt ausgezahlt wird. Der Steuerbonus §35c (20% über 3 Jahre) lohnt sich, wenn Sie keinen Antrag stellen möchten."
            }
          ]}
        />

        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Förderberatung München: Kostenlos und unverbindlich
            </h2>
            <p className="text-primary-foreground/80 mb-6 max-w-2xl mx-auto">
              Lassen Sie sich beraten, welche Förderung für Ihr Projekt optimal ist. 
              Wir prüfen Ihre Möglichkeiten und übernehmen die komplette Antragstellung.
            </p>
            <div className="flex flex-wrap gap-4 justify-center">
              <Button size="lg" variant="secondary" asChild>
                <a href="tel:+4989444438872" data-testid="button-call-foerderung-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white" asChild>
                <Link href="/termin" data-testid="link-termin-foerderung">
                  <Calendar className="w-4 h-4 mr-2" />
                  Beratungstermin buchen
                </Link>
              </Button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}
