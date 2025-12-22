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
  Percent
} from "lucide-react";
import { Link } from "wouter";
import FAQ from "@/components/FAQ";

export default function FoerderantragHeizungPage() {
  const heizungsarten = [
    {
      icon: Leaf,
      title: "Wärmepumpe",
      foerderung: "Bis 70%",
      beschreibung: "Luft-Wasser, Sole-Wasser, Wasser-Wasser Wärmepumpen",
      details: ["Grundförderung 30%", "Klimabonus +20%", "Einkommensbonus +30%", "Effizienzbonus +5%"],
      color: "bg-green-500"
    },
    {
      icon: Thermometer,
      title: "Fußbodenheizung",
      foerderung: "Bis 20%",
      beschreibung: "Flächenheizungen für optimale Wärmeverteilung",
      details: ["Als Teil der Heizungsoptimierung", "Förderfähig mit neuem Wärmeerzeuger", "Hydraulischer Abgleich inklusive"],
      color: "bg-blue-500"
    },
    {
      icon: Wind,
      title: "Lüftungsanlage",
      foerderung: "Bis 20%",
      beschreibung: "Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung",
      details: ["Zentrale Lüftungsanlagen", "Dezentrale Lüftungsgeräte", "Wärmerückgewinnung bis 95%"],
      color: "bg-cyan-500"
    },
    {
      icon: Flame,
      title: "Pelletheizung",
      foerderung: "Bis 70%",
      beschreibung: "Biomasse-Heizungen mit Holzpellets oder Hackschnitzel",
      details: ["Grundförderung 30%", "Klimabonus +20%", "Einkommensbonus +30%"],
      color: "bg-orange-500"
    },
    {
      icon: Thermometer,
      title: "Brennstoffzelle",
      foerderung: "Bis 70%",
      beschreibung: "Hocheffiziente Strom- und Wärmeerzeugung",
      details: ["KfW-Förderung möglich", "Innovationsförderung", "Stromeinspeisung"],
      color: "bg-purple-500"
    },
    {
      icon: Home,
      title: "Solarthermie",
      foerderung: "Bis 25%",
      beschreibung: "Solaranlagen für Warmwasser und Heizungsunterstützung",
      details: ["Flachkollektoren", "Röhrenkollektoren", "Kombisysteme"],
      color: "bg-yellow-500"
    }
  ];

  const antragSchritte = [
    {
      nummer: 1,
      title: "Kostenlose Beratung",
      beschreibung: "Wir prüfen Ihre Fördermöglichkeiten und beraten Sie zu den besten Heizungslösungen."
    },
    {
      nummer: 2,
      title: "Angebot & Planung",
      beschreibung: "Sie erhalten ein detailliertes Angebot mit allen förderfähigen Maßnahmen."
    },
    {
      nummer: 3,
      title: "Antragstellung",
      beschreibung: "Wir übernehmen die komplette BAFA/KfW-Antragstellung für Sie."
    },
    {
      nummer: 4,
      title: "Installation",
      beschreibung: "Nach Bewilligung installieren wir Ihre neue Heizungsanlage fachgerecht."
    }
  ];

  const kombinationen = [
    {
      titel: "Wärmepumpe + Fußbodenheizung",
      beschreibung: "Die ideale Kombination für maximale Effizienz und Komfort. Fußbodenheizung als Optimierungsmaßnahme förderfähig.",
      foerderung: "Bis 70%"
    },
    {
      titel: "Wärmepumpe + Lüftung mit WRG",
      beschreibung: "Kontrollierte Lüftung senkt den Heizbedarf zusätzlich. Kombinierte Förderung möglich.",
      foerderung: "Bis 70%"
    },
    {
      titel: "Pelletheizung + Solarthermie",
      beschreibung: "Erneuerbare Energien optimal kombiniert. Separate Förderung für beide Systeme.",
      foerderung: "Bis 70%"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title="Förderantrag Heizung München | Wärmepumpe & FBH"
        description="Förderantrag für alle Heizungsarten München: Wärmepumpe bis 70%, Fußbodenheizung, Lüftung, Pelletheizung. Komplette BAFA & KfW Antragstellung. Tel: 0152 12274043"
        canonical="https://aquapro24.de/foerderantrag-heizung"
        keywords="Förderantrag Heizung München, Wärmepumpe Förderung Antrag, Fußbodenheizung Förderung, Lüftungsanlage Förderung, Pelletheizung Förderantrag, BAFA Heizung beantragen, Heizungsförderung München, Förderantrag Wärmepumpe, KfW Heizung Antrag, Brennstoffzelle Förderung"
        aiSummary="AquaPro24 Förderantrag Service München für alle Heizungsarten: Wärmepumpe bis 70%, Fußbodenheizung, Lüftung mit Wärmerückgewinnung, Pelletheizung, Solarthermie. Komplette BAFA/KfW Antragstellung. Kontakt: 0152 12274043"
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Förderung", url: "https://aquapro24.de/foerderung" },
          { name: "Förderantrag Heizung", url: "https://aquapro24.de/foerderantrag-heizung" }
        ]}
        faqSchema={[
          {
            question: "Welche Heizungen werden gefördert?",
            answer: "Wärmepumpen, Pelletheizungen, Solarthermie, Brennstoffzellen und begleitende Maßnahmen wie Fußbodenheizung und Lüftungsanlagen werden staatlich gefördert."
          },
          {
            question: "Kann ich Fußbodenheizung separat fördern lassen?",
            answer: "Fußbodenheizung ist als Optimierungsmaßnahme förderfähig, wenn sie zusammen mit einem neuen Wärmeerzeuger installiert wird."
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
              <Badge className="mb-4 bg-green-500 text-white">
                <FileText className="w-3 h-3 mr-1" />
                Heizungsförderung 2025
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Förderantrag Heizung München: Wärmepumpe, Fußbodenheizung & Lüftung
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Fußbodenheizung Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Lüftungsanlage Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Pelletheizung Antrag</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">BAFA Heizung München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsförderung 70%</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Brennstoffzelle Förderung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Solarthermie Zuschuss</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">KfW Heizung Antrag</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungstausch Förderung</span>
              </div>
              <p className="text-lg text-white/90 mb-4 mt-4">
                Alle Heizungsarten auf einen Blick: Wärmepumpe, Fußbodenheizung, Lüftung, Pelletheizung und mehr. 
                Wir übernehmen die komplette Antragstellung für maximale Förderung.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4915212274043" data-testid="button-call-foerderantrag-heizung">
                    <Phone className="w-4 h-4 mr-2" />
                    Kostenlose Beratung
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20" asChild>
                  <Link href="/foerderrechner" data-testid="link-foerderrechner-heizung">
                    <Percent className="w-4 h-4 mr-2" />
                    Förderung berechnen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-8 md:py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Heizungsförderung München: Alle förderfähigen Heizungsarten
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Übersicht der staatlichen Förderungen für moderne Heizsysteme
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {heizungsarten.map((heizung) => (
                <Card key={heizung.title} className="overflow-hidden">
                  <div className={`${heizung.color} p-4 flex items-center justify-between`}>
                    <div className="flex items-center gap-3">
                      <heizung.icon className="w-8 h-8 text-white" />
                      <div>
                        <h3 className="text-lg font-bold text-white">{heizung.title}</h3>
                        <p className="text-white/80 text-sm">{heizung.beschreibung}</p>
                      </div>
                    </div>
                  </div>
                  <CardContent className="pt-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-sm text-muted-foreground">Förderung:</span>
                      <Badge className="bg-green-500 text-white">{heizung.foerderung}</Badge>
                    </div>
                    <ul className="space-y-2">
                      {heizung.details.map((detail, idx) => (
                        <li key={idx} className="flex items-start gap-2 text-sm">
                          <CheckCircle2 className="w-4 h-4 text-green-500 flex-shrink-0 mt-0.5" />
                          <span>{detail}</span>
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Förderantrag Ablauf München: So einfach geht's
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Von der Beratung bis zur Installation - alles aus einer Hand
            </p>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {antragSchritte.map((schritt) => (
                <div key={schritt.nummer} className="relative">
                  <div className="flex items-start gap-4">
                    <div className="w-10 h-10 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-bold flex-shrink-0">
                      {schritt.nummer}
                    </div>
                    <div>
                      <h3 className="font-semibold mb-1">{schritt.title}</h3>
                      <p className="text-sm text-muted-foreground">{schritt.beschreibung}</p>
                    </div>
                  </div>
                  {schritt.nummer < 4 && (
                    <div className="hidden lg:block absolute top-5 left-full w-full">
                      <ArrowRight className="w-6 h-6 text-muted-foreground/30 -ml-3" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-2 text-center">
              Heizungskombinationen München: Maximale Förderung sichern
            </h2>
            <p className="text-muted-foreground text-center mb-8 max-w-2xl mx-auto">
              Diese Kombinationen sind besonders effizient und förderfähig
            </p>
            
            <div className="grid md:grid-cols-3 gap-6">
              {kombinationen.map((kombi, idx) => (
                <Card key={idx} className="bg-green-500/5 border-green-500/20">
                  <CardHeader>
                    <CardTitle className="text-lg flex items-center gap-2">
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                      {kombi.titel}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">{kombi.beschreibung}</p>
                    <Badge variant="secondary" className="text-xs">
                      <Euro className="w-3 h-3 mr-1" />
                      {kombi.foerderung}
                    </Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <Card className="bg-green-500/10 border-green-500/30">
              <CardContent className="pt-6">
                <div className="flex flex-col md:flex-row items-center justify-between gap-6">
                  <div className="flex items-center gap-4">
                    <div className="w-16 h-16 bg-green-500 rounded-full flex items-center justify-center">
                      <Euro className="w-8 h-8 text-white" />
                    </div>
                    <div>
                      <h3 className="text-xl font-bold">Förderantrag Service München: Komplett kostenlos</h3>
                      <p className="text-muted-foreground">
                        Unser Antragsservice ist bei Beauftragung der Heizungsinstallation inklusive.
                      </p>
                    </div>
                  </div>
                  <div className="flex flex-wrap gap-3">
                    <Button size="lg" asChild>
                      <a href="tel:+4915212274043" data-testid="button-call-foerderantrag-heizung-2">
                        <Phone className="w-4 h-4 mr-2" />
                        Jetzt anrufen
                      </a>
                    </Button>
                    <Button size="lg" variant="outline" asChild>
                      <Link href="/termin" data-testid="link-termin-heizung">
                        <Calendar className="w-4 h-4 mr-2" />
                        Beratungstermin
                      </Link>
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>

        <FAQ 
          items={[
            {
              question: "Welche Heizungsarten werden 2025 gefördert?",
              answer: "Gefördert werden Wärmepumpen (bis 70%), Pellet-/Biomasseheizungen (bis 70%), Solarthermie (bis 25%), Brennstoffzellen und begleitende Maßnahmen wie Fußbodenheizung und Lüftungsanlagen mit Wärmerückgewinnung."
            },
            {
              question: "Wird Fußbodenheizung separat gefördert?",
              answer: "Fußbodenheizung ist als Heizungsoptimierungsmaßnahme mit bis zu 20% förderfähig, wenn sie zusammen mit einem neuen, förderfähigen Wärmeerzeuger wie einer Wärmepumpe installiert wird."
            },
            {
              question: "Wie hoch ist die Förderung für Lüftungsanlagen?",
              answer: "Lüftungsanlagen mit Wärmerückgewinnung werden mit bis zu 20% gefördert. Als Begleitmaßnahme zu einer neuen Heizung können sie in die Gesamtförderung einbezogen werden."
            },
            {
              question: "Kann ich mehrere Förderungen kombinieren?",
              answer: "BAFA-Förderung und KfW-Kredit können nicht für dieselbe Maßnahme kombiniert werden. Verschiedene Maßnahmen (z.B. Wärmepumpe und Lüftung) können aber separat gefördert werden."
            },
            {
              question: "Wie lange dauert die Antragsbearbeitung?",
              answer: "BAFA-Anträge werden in der Regel innerhalb von 4-8 Wochen bearbeitet. Wir empfehlen, mit der Installation erst nach Bewilligung zu beginnen."
            }
          ]}
        />
      </main>
      
      <Footer />
      <AIChatWidget />
    </div>
  );
}
