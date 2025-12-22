import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/heat_pump_installati_53374252.jpg";
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
  const foerderProgramme = [
    {
      icon: Leaf,
      title: "BAFA Heizungsförderung",
      subtitle: "Bundesförderung für effiziente Gebäude (BEG)",
      maxFoerderung: "70%",
      beschreibung: "Die höchste Förderung für den Umstieg auf erneuerbare Energien.",
      boni: [
        { name: "Grundförderung", prozent: "30%", info: "Für alle Wärmepumpen" },
        { name: "Klimageschwindigkeitsbonus", prozent: "+20%", info: "Bei Austausch alter Heizung (>20 Jahre)" },
        { name: "Einkommensbonus", prozent: "+30%", info: "Haushaltseinkommen < 40.000€/Jahr" },
        { name: "Effizienzbonus", prozent: "+5%", info: "Für natürliche Kältemittel" }
      ],
      geeignetFuer: ["Wärmepumpe", "Solarthermie", "Pelletheizung", "Brennstoffzelle"],
      vorteile: ["Direkter Zuschuss", "Keine Rückzahlung", "Mit Kredit kombinierbar"],
      color: "bg-green-500",
      link: "/foerderantrag-heizung"
    },
    {
      icon: Building2,
      title: "KfW Heizungskredit",
      subtitle: "Ergänzungskredit zur BAFA-Förderung",
      maxFoerderung: "120.000€",
      beschreibung: "Zinsgünstiger Kredit für den nach Förderung verbleibenden Eigenanteil.",
      boni: [
        { name: "Maximaler Kredit", prozent: "120.000€", info: "Pro Wohneinheit" },
        { name: "Zinssatz", prozent: "ab 0,01%", info: "Effektiver Jahreszins" },
        { name: "Laufzeit", prozent: "4-35 Jahre", info: "Flexible Tilgung" },
        { name: "Tilgungsfreie Jahre", prozent: "1-5 Jahre", info: "Auf Wunsch" }
      ],
      geeignetFuer: ["Heizungstausch", "Wärmepumpe", "Pellet", "Solarthermie"],
      vorteile: ["Zusätzlich zu BAFA", "Schnelle Bewilligung", "Einkommensabhängig vergünstigt"],
      color: "bg-blue-500",
      link: "/foerderantrag"
    },
    {
      icon: Calculator,
      title: "Steuerbonus §35c",
      subtitle: "Alternative zur BAFA/KfW-Förderung",
      maxFoerderung: "40.000€",
      beschreibung: "20% der Sanierungskosten über 3 Jahre von der Steuer absetzen.",
      boni: [
        { name: "Jahr 1", prozent: "7%", info: "Maximal 14.000€" },
        { name: "Jahr 2", prozent: "7%", info: "Maximal 14.000€" },
        { name: "Jahr 3", prozent: "6%", info: "Maximal 12.000€" },
        { name: "Gesamt", prozent: "20%", info: "Maximal 40.000€" }
      ],
      geeignetFuer: ["Selbstnutzer", "Altbau >10 Jahre", "Alle energetischen Maßnahmen"],
      vorteile: ["Kein Antrag nötig", "Nachträglich möglich", "Einfache Abwicklung"],
      color: "bg-orange-500",
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
      beschreibung: "Wir stellen den BAFA-Antrag kostenlos für Sie (mit Vollmacht)."
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
      text: "Der BAFA-Antrag muss zwingend VOR Vertragsabschluss gestellt werden. Rückwirkende Förderung ist nicht möglich."
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
    "Förderung Heizung München", "BAFA Wärmepumpe 2025", "KfW Heizungskredit",
    "70% Förderung Heizungstausch", "Klimageschwindigkeitsbonus", "Einkommensbonus Heizung",
    "Steuerbonus Heizung §35c", "Förderantrag Wärmepumpe", "BAFA Antrag München",
    "Heizungsförderung beantragen", "Wärmepumpe Zuschuss", "BEG Förderung 2025",
    "Pelletheizung Förderung", "Solarthermie Zuschuss", "Heizungstausch gefördert",
    "Förderberatung München", "BAFA Vollmacht", "KfW 458 Kredit",
    "Energetische Sanierung Förderung", "Fördermittel Heizung München"
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderung Heizung München: BAFA, KfW & Steuerbonus 2025 | AquaPro24"
        description="Bis zu 70% Förderung für Ihre neue Heizung in München. BAFA Wärmepumpe, KfW Kredit, Steuerbonus. Kostenlose Beratung & Antragstellung. Tel: 0152 12274043"
        canonical="https://aquapro24.de/foerderung"
        keywords={keywords.join(", ")}
        aiSummary="AquaPro24 München: Förderberatung Heizung. BAFA bis 70% für Wärmepumpe (30% Grund + 20% Klimabonus + 30% Einkommensbonus). KfW Kredit bis 120.000€. Steuerbonus 20%. Kostenloser Antragsservice. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" }
        ]}
        serviceSchema={{
          name: "Förderberatung Heizung München",
          description: "BAFA, KfW und Steuerbonus Beratung für Heizungstausch in München. Bis zu 70% staatliche Förderung für Wärmepumpen.",
          serviceType: "Förderberatung",
          urlSlug: "foerderung",
          catalogName: "Heizungsförderung München 2025",
          serviceOffers: [
            { name: "BAFA Förderberatung Wärmepumpe", price: "Kostenlos" },
            { name: "KfW Kreditberatung", price: "Kostenlos" },
            { name: "Förderantrag Service", price: "Inklusive" },
            { name: "Steuerbonus Beratung", price: "Kostenlos" }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          }
        }}
        faqSchema={[
          {
            question: "Wie hoch ist die BAFA Förderung für Wärmepumpen 2025?",
            answer: "Die BAFA Förderung für Wärmepumpen kann bis zu 70% betragen: 30% Grundförderung + 20% Klimageschwindigkeitsbonus (bei Austausch alter Heizung >20 Jahre) + 30% Einkommensbonus (bei Haushaltseinkommen unter 40.000€/Jahr) + 5% Effizienzbonus (natürliche Kältemittel)."
          },
          {
            question: "Muss der Förderantrag vor der Beauftragung gestellt werden?",
            answer: "Ja! Der BAFA-Antrag muss zwingend VOR Abschluss eines Liefer- oder Leistungsvertrags gestellt werden. Erst nach Erhalt der Förderzusage dürfen die Arbeiten beginnen. Wir übernehmen die Antragstellung kostenlos für Sie."
          },
          {
            question: "Kann ich BAFA und KfW kombinieren?",
            answer: "Ja! Seit 2024 können Sie den BAFA-Zuschuss mit dem KfW-Ergänzungskredit kombinieren. Die BAFA übernimmt bis zu 70% als Zuschuss, für den Rest können Sie einen zinsgünstigen KfW-Kredit aufnehmen."
          },
          {
            question: "Was ist der Klimageschwindigkeitsbonus?",
            answer: "Der Klimageschwindigkeitsbonus von 20% wird gewährt, wenn Sie eine funktionstüchtige Öl-, Kohle- oder Gasheizung (älter als 20 Jahre) durch eine Wärmepumpe ersetzen. Dieser Bonus gilt noch bis 2028 und wird dann schrittweise reduziert."
          },
          {
            question: "Wer erhält den Einkommensbonus?",
            answer: "Den Einkommensbonus von 30% erhalten Haushalte mit einem zu versteuernden Jahreseinkommen unter 40.000€. Als Nachweis dient der Einkommensteuerbescheid des Vorjahres."
          }
        ]}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-8 lg:py-12 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/85 via-black/70 to-black/50" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-4xl">
              <Badge className="mb-4 bg-green-500 text-white">
                <Gift className="w-3 h-3 mr-1" />
                Bis zu 70% staatliche Förderung 2025
              </Badge>
              
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">
                Förderung Heizung München – BAFA, KfW & Steuerbonus 2025
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
                  <a href="tel:+4915212274043" data-testid="button-call-foerderung">
                    <Phone className="w-4 h-4 mr-2" />
                    0152 12274043
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

        <section className="py-8 md:py-10">
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

        <section className="py-8 bg-muted/30">
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

        <section className="py-8">
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

        <section className="py-8 bg-destructive/5 border-y border-destructive/20">
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

        <section className="py-8">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              BAFA Förderung Wärmepumpe München: Alle Details 2025
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground space-y-4">
              <p>
                Die Bundesförderung für effiziente Gebäude (BEG) macht den Umstieg auf erneuerbare 
                Energien so attraktiv wie nie. Besonders für Wärmepumpen können Sie bis zu 70% der 
                förderfähigen Kosten als Zuschuss erhalten. Das bedeutet: Von einer 30.000 EUR 
                Investition zahlen Sie im besten Fall nur 9.000 EUR selbst.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Klimageschwindigkeitsbonus Heizung München: 20% Extra-Förderung</h3>
              <p>
                Wer seine alte Öl-, Kohle- oder Gasheizung (älter als 20 Jahre) durch eine Wärmepumpe 
                ersetzt, erhält zusätzlich 20% Klimageschwindigkeitsbonus. Dieser Bonus gilt 
                noch bis 2028 und wird dann schrittweise reduziert. Schnell handeln lohnt sich!
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">Einkommensbonus Heizung München: 30% für Haushalte</h3>
              <p>
                Haushalte mit einem zu versteuernden Jahreseinkommen unter 40.000 EUR erhalten 
                zusätzlich 30% Einkommensbonus. Als Nachweis dient der Einkommensteuerbescheid. 
                So wird die neue Heizung auch für kleinere Einkommen erschwinglich.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-6">KfW Heizungskredit München: Zinsgünstig finanzieren</h3>
              <p>
                Neu seit 2024: Der KfW-Ergänzungskredit kann zusätzlich zur BAFA-Förderung 
                beantragt werden. Für den nach Förderung verbleibenden Eigenanteil erhalten Sie 
                einen zinsgünstigen Kredit mit besonders attraktiven Konditionen für Haushalte 
                mit einem Einkommen unter 90.000 EUR.
              </p>
            </div>
          </div>
        </section>

        <FAQ 
          title="Häufige Fragen zur Heizungsförderung München"
          items={[
            {
              question: "Wie hoch ist die maximale BAFA Förderung 2025?",
              answer: "Die maximale BAFA Förderung beträgt 70% der förderfähigen Kosten, gedeckelt auf 30.000 EUR pro Wohneinheit. Bei einer Investition von 35.000 EUR erhalten Sie maximal 21.000 EUR Zuschuss."
            },
            {
              question: "Kann ich den KfW Kredit mit der BAFA Förderung kombinieren?",
              answer: "Ja! Seit 2024 können Sie den BAFA-Zuschuss mit dem KfW-Ergänzungskredit (Programm 358/359) kombinieren. Die BAFA zahlt den Zuschuss, für den Rest können Sie einen zinsgünstigen KfW-Kredit aufnehmen."
            },
            {
              question: "Wer stellt den BAFA Antrag?",
              answer: "Wir übernehmen die komplette Antragstellung bei BAFA kostenlos für Sie. Mit einer Vollmacht reichen wir alle Unterlagen ein und überwachen den Prozess bis zur Bewilligung."
            },
            {
              question: "Wie lange dauert die BAFA Bewilligung?",
              answer: "Die BAFA Bewilligung dauert aktuell 4-8 Wochen. Nach Erhalt der Förderzusage haben Sie 36 Monate Zeit, die Maßnahme umzusetzen. Wir planen die Termine entsprechend."
            },
            {
              question: "Was ist besser: BAFA Zuschuss oder Steuerbonus?",
              answer: "In den meisten Fällen ist der BAFA-Zuschuss günstiger, da er direkt ausgezahlt wird. Der Steuerbonus (§35c) lohnt sich vor allem, wenn Sie die Förderung vergessen haben oder keinen Antrag stellen möchten."
            }
          ]}
        />

        <section className="py-8 bg-primary text-primary-foreground">
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
                <a href="tel:+4915212274043" data-testid="button-call-foerderung-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
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
      <AIChatWidget />
    </div>
  );
}
