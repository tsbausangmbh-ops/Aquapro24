import { useParams } from "wouter";
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
  Clock,
  MapPin,
  CheckCircle2,
  Shield,
  Star,
  Wrench,
  Droplets,
  Flame,
  ShowerHead,
  Calendar,
  ArrowRight
} from "lucide-react";

interface DistrictData {
  name: string;
  slug: string;
  responseTime: string;
  description: string;
  neighborhoods: string[];
  specialties: string[];
}

const districts: Record<string, DistrictData> = {
  schwabing: {
    name: "Schwabing",
    slug: "schwabing",
    responseTime: "30 Min.",
    description: "Schwabing ist einer der beliebtesten Stadtteile Münchens mit einer Mischung aus historischen Altbauten und modernen Wohnanlagen. Unsere Partnerbetriebe kennen die typischen Herausforderungen der Schwabinger Altbauinstallationen bestens.",
    neighborhoods: ["Schwabing-West", "Schwabing-Freimann", "Englischer Garten", "Leopoldstraße"],
    specialties: ["Altbausanierung", "Wasserleitung erneuern", "Heizungsmodernisierung"]
  },
  maxvorstadt: {
    name: "Maxvorstadt",
    slug: "maxvorstadt",
    responseTime: "25 Min.",
    description: "Die Maxvorstadt mit ihren zahlreichen Altbauwohnungen, Studentenwohnheimen und kulturellen Einrichtungen erfordert erfahrene Handwerker. Wir sind regelmäßig in der Maxvorstadt im Einsatz.",
    neighborhoods: ["Universität", "Königsplatz", "Stiglmaierplatz", "Josephsplatz"],
    specialties: ["Studentenwohnungen", "Gastro-Installationen", "Bürogebäude"]
  },
  bogenhausen: {
    name: "Bogenhausen",
    slug: "bogenhausen",
    responseTime: "35 Min.",
    description: "Bogenhausen ist einer der gehobenen Wohnviertel Münchens mit vielen Einfamilienhäusern und luxuriösen Wohnanlagen. Wir bieten hier Premium-Service für anspruchsvolle Kunden.",
    neighborhoods: ["Herzogpark", "Oberföhring", "Daglfing", "Englschalking"],
    specialties: ["Luxusbäder", "Smart-Home-Heizung", "Wärmepumpen"]
  },
  haidhausen: {
    name: "Haidhausen",
    slug: "haidhausen",
    responseTime: "30 Min.",
    description: "Das beliebte Franzosenviertel in Haidhausen mit seinen charmanten Altbauten ist unser Kerngebiet. Die historischen Gebäude erfordern oft spezielle Lösungen für Sanitär und Heizung.",
    neighborhoods: ["Franzosenviertel", "Au", "Gasteig", "Rosenheimer Platz"],
    specialties: ["Altbau-Expertise", "Gasheizung Tausch", "Badsanierung"]
  },
  sendling: {
    name: "Sendling",
    slug: "sendling",
    responseTime: "35 Min.",
    description: "Sendling bietet eine bunte Mischung aus Altbau und Neubauten. Vom Harras bis zum Großmarkt sind wir hier bestens vernetzt und schnell vor Ort.",
    neighborhoods: ["Sendling", "Sendling-Westpark", "Harras", "Goetheplatz"],
    specialties: ["Rohrsanierung", "Heizungswartung", "Notdienst"]
  },
  pasing: {
    name: "Pasing",
    slug: "pasing",
    responseTime: "40 Min.",
    description: "Pasing-Obermenzing ist ein grüner Stadtteil mit vielen Einfamilienhäusern. Hier sind wir besonders häufig für Heizungsmodernisierung und Badsanierung im Einsatz.",
    neighborhoods: ["Pasing", "Obermenzing", "Aubing", "Langwied"],
    specialties: ["Einfamilienhaus", "Garten-Wasseranschluss", "Wärmepumpe"]
  },
  neuhausen: {
    name: "Neuhausen-Nymphenburg",
    slug: "neuhausen",
    responseTime: "30 Min.",
    description: "Neuhausen-Nymphenburg ist geprägt von prächtigen Altbauten und dem Schloss Nymphenburg. Unsere erfahrenen Meister kennen die Besonderheiten dieser historischen Bausubstanz.",
    neighborhoods: ["Neuhausen", "Nymphenburg", "Gern", "Rotkreuzplatz"],
    specialties: ["Denkmalschutz", "Altbau-Wasserleitungen", "Heizungstausch"]
  },
  trudering: {
    name: "Trudering-Riem",
    slug: "trudering",
    responseTime: "45 Min.",
    description: "Trudering-Riem mit der Messestadt und vielen Neubaugebieten ist ein wachsender Stadtteil. Wir installieren hier regelmäßig moderne Heizsysteme und Sanitäranlagen.",
    neighborhoods: ["Trudering", "Riem", "Messestadt", "Waldtrudering"],
    specialties: ["Neubau-Installation", "Smart-Home", "Wärmepumpe"]
  },
  laim: {
    name: "Laim",
    slug: "laim",
    responseTime: "35 Min.",
    description: "Laim ist ein zentraler Stadtteil mit guter Anbindung und gemischter Bebauung. Vom schnellen Notdienst bis zur kompletten Badsanierung sind wir hier Ihr Partner.",
    neighborhoods: ["Laim", "Friedenheimer Brücke", "Laimer Platz"],
    specialties: ["Altbau & Neubau", "Abflussreinigung", "Heizungswartung"]
  },
  giesing: {
    name: "Giesing",
    slug: "giesing",
    responseTime: "35 Min.",
    description: "Obergiesing und Untergiesing sind traditionelle Münchner Viertel mit Charakter. Die typischen Arbeiterwohnungen haben oft veraltete Installationen, die wir professionell modernisieren.",
    neighborhoods: ["Obergiesing", "Untergiesing", "Harlaching", "Giesinger Berg"],
    specialties: ["Rohrsanierung", "Heizungstausch", "Wasserschaden"]
  },
  moosach: {
    name: "Moosach",
    slug: "moosach",
    responseTime: "40 Min.",
    description: "Moosach bietet eine Mischung aus gewachsenen Wohngebieten und modernen Neubauten. Unsere Partnerbetriebe sind hier regelmäßig im Einsatz.",
    neighborhoods: ["Moosach", "Olympia-Einkaufszentrum", "Feldmoching"],
    specialties: ["Familienhaus", "Gartenbewässerung", "Heizungsoptimierung"]
  },
  milbertshofen: {
    name: "Milbertshofen-Am Hart",
    slug: "milbertshofen",
    responseTime: "35 Min.",
    description: "Von der BMW-Welt bis zum Olympiapark - Milbertshofen ist ein vielseitiger Stadtteil. Wir betreuen hier sowohl Wohngebäude als auch Gewerbeobjekte.",
    neighborhoods: ["Milbertshofen", "Am Hart", "Olympiapark", "Petuelring"],
    specialties: ["Gewerbe-Sanitär", "Industrieheizung", "24h Notdienst"]
  },
  lehel: {
    name: "Lehel",
    slug: "lehel",
    responseTime: "20 Min.",
    description: "Das Lehel ist Münchens ältestes Villenviertel und eines der exklusivsten Wohngebiete der Stadt. Direkt an der Isar gelegen, betreuen wir hier historische Stadtvillen und luxuriöse Altbauwohnungen mit höchstem Anspruch an Qualität und Diskretion.",
    neighborhoods: ["Lehel", "Widenmayerstraße", "Prinzregentenstraße", "Isarvorstadt"],
    specialties: ["Premium-Badsanierung", "Historische Altbausanierung", "Smart-Home-Integration", "Wärmepumpen für Altbau"]
  },
  solln: {
    name: "Solln",
    slug: "solln",
    responseTime: "40 Min.",
    description: "Solln ist ein grünes Villenviertel im Münchner Süden mit großzügigen Einfamilienhäusern und gepflegten Gärten. Unsere Meisterbetriebe sind hier spezialisiert auf hochwertige Komplettsanierungen und moderne Heiztechnik.",
    neighborhoods: ["Solln", "Prinz-Ludwigs-Höhe", "Warnberg", "Forstenried"],
    specialties: ["Villa-Sanierung", "Pool-Technik", "Wärmepumpe mit Erdwärme", "Luxus-Wellness-Bäder"]
  },
  gruenwald: {
    name: "Grünwald",
    slug: "gruenwald",
    responseTime: "45 Min.",
    description: "Grünwald ist Deutschlands reichste Gemeinde und bekannt für exklusive Villen und Promi-Residenzen. Wir bieten hier Premium-Service auf höchstem Niveau - diskret, zuverlässig und mit erstklassigen Materialien.",
    neighborhoods: ["Grünwald-Zentrum", "Geiselgasteig", "Bavaria Filmstadt", "Isarhochufer"],
    specialties: ["Luxus-Komplettbäder", "Pool & Sauna", "Smarte Haustechnik", "Edle Armaturen & Design"]
  },
  harlaching: {
    name: "Harlaching",
    slug: "harlaching",
    responseTime: "35 Min.",
    description: "Harlaching ist ein ruhiges, grünes Wohnviertel an der Isar mit vielen Villen und dem bekannten Tierpark Hellabrunn. Wir betreuen hier gehobene Wohnimmobilien mit Fokus auf Qualität und Langlebigkeit.",
    neighborhoods: ["Harlaching", "Menterschwaige", "Hellabrunn", "Geiselgasteig"],
    specialties: ["Altbausanierung", "Garten-Bewässerung", "Fußbodenheizung", "Regenwassernutzung"]
  },
  thalkirchen: {
    name: "Thalkirchen-Obersendling",
    slug: "thalkirchen",
    responseTime: "30 Min.",
    description: "Thalkirchen-Obersendling bietet eine Mischung aus urbanem Wohnen und Naturnähe an der Isar. Vom Flaucher bis zum Tierpark sind wir hier regelmäßig für Sanitär- und Heizungsarbeiten im Einsatz.",
    neighborhoods: ["Thalkirchen", "Obersendling", "Flaucher", "Siemenswerke"],
    specialties: ["Altbau-Expertise", "Heizungsmodernisierung", "Rohrsanierung", "Warmwasser-Solar"]
  }
};

const services = [
  { icon: Droplets, title: "Sanitärinstallation", href: "/sanitaer", price: "Ab 89€" },
  { icon: ShowerHead, title: "Badsanierung", href: "/bad", price: "Ab 8.900€" },
  { icon: Flame, title: "Heizungsservice", href: "/heizung", price: "Ab 149€" },
  { icon: Wrench, title: "Rohrreinigung", href: "/rohrreinigung", price: "Ab 79€" },
];

export default function StadtteilPage() {
  const params = useParams<{ stadtteil: string }>();
  const stadtteil = params.stadtteil?.toLowerCase() || "";
  const district = districts[stadtteil];

  if (!district) {
    return (
      <div className="min-h-screen bg-background">
        <Header />
        <main className="py-20">
          <div className="max-w-4xl mx-auto px-4 text-center">
            <h1 className="text-3xl font-bold mb-4">Stadtteil nicht gefunden</h1>
            <p className="text-muted-foreground mb-8">
              Dieser Stadtteil ist noch nicht in unserer Datenbank. Aber keine Sorge - wir sind in ganz München für Sie da!
            </p>
            <Button asChild>
              <Link href="/" data-testid="link-back-home">Zurück zur Startseite</Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-background pb-16 md:pb-0">
      <SEO
        title={`Sanitär & Heizung ${district.name} | 24h Notdienst | AquaPro24 München`}
        description={`Sanitär und Heizung in München ${district.name}. Notdienst 24/7, Festpreisgarantie, Anfahrt in ${district.responseTime}. Badsanierung, Rohrreinigung, Heizungswartung. Jetzt anrufen: 0173 5994699`}
        canonical={`https://aquapro24.de/stadtteil/${district.slug}`}
      />
      <Header />
      <main id="main-content">
        <section className="bg-gradient-to-br from-secondary/10 via-background to-primary/5 py-12 lg:py-16">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <Link href="/" className="hover:text-foreground" data-testid="breadcrumb-home">Start</Link>
              <span>/</span>
              <Link href="/stadtteile" className="hover:text-foreground" data-testid="breadcrumb-stadtteile">Stadtteile</Link>
              <span>/</span>
              <span className="text-foreground">{district.name}</span>
            </div>
            <div className="grid lg:grid-cols-2 gap-8 items-center">
              <div>
                <Badge className="mb-4 bg-primary/10 text-primary border-primary/20">
                  <MapPin className="w-3 h-3 mr-1" />
                  München {district.name}
                </Badge>
                <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
                  Sanitär & Heizung in {district.name}
                </h1>
                <p className="text-lg text-muted-foreground mb-6">
                  {district.description}
                </p>
                <div className="flex flex-wrap gap-4 mb-6">
                  <div className="flex items-center gap-2">
                    <Clock className="w-5 h-5 text-secondary" />
                    <span className="font-medium">Anfahrt: {district.responseTime}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-yellow-500" />
                    <span className="font-medium">4.9/5 Sterne</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Shield className="w-5 h-5 text-accent" />
                    <span className="font-medium">Festpreisgarantie</span>
                  </div>
                </div>
                <div className="flex flex-wrap gap-3">
                  <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                    <a href="tel:+4917359994699" data-testid="button-call-hero">
                      <Phone className="w-4 h-4 mr-2" />
                      0173 5994699
                    </a>
                  </Button>
                  <Button size="lg" className="bg-red-600 hover:bg-red-700 text-white border-red-700" asChild>
                    <Link href="/termin" data-testid="button-rueckruf-hero">
                      <Phone className="w-4 h-4 mr-2" />
                      Rückruf anfordern
                    </Link>
                  </Button>
                  <Button size="lg" variant="outline" asChild>
                    <Link href="/termin" data-testid="button-termin-hero">
                      <Calendar className="w-4 h-4 mr-2" />
                      Termin buchen
                    </Link>
                  </Button>
                </div>
              </div>
              <div className="hidden lg:block">
                <Card className="bg-card/50 backdrop-blur">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <MapPin className="w-5 h-5 text-secondary" />
                      Unsere Einsatzgebiete in {district.name}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <div className="flex flex-wrap gap-2">
                      {district.neighborhoods.map((n, i) => (
                        <Badge key={i} variant="secondary">{n}</Badge>
                      ))}
                    </div>
                    <div className="mt-6">
                      <p className="text-sm font-medium mb-2">Unsere Spezialgebiete:</p>
                      <ul className="space-y-2">
                        {district.specialties.map((s, i) => (
                          <li key={i} className="flex items-center gap-2 text-sm">
                            <CheckCircle2 className="w-4 h-4 text-accent" />
                            {s}
                          </li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">
              Unsere Leistungen in {district.name}
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {services.map((service, index) => (
                <Link key={index} href={service.href} data-testid={`link-service-${index}`}>
                  <Card className="group hover-elevate h-full cursor-pointer transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                    <CardContent className="pt-6">
                      <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                        <service.icon className="w-6 h-6 text-secondary" />
                      </div>
                      <h3 className="font-semibold mb-2">{service.title}</h3>
                      <p className="text-sm text-muted-foreground mb-3">In {district.name} und Umgebung</p>
                      <div className="flex items-center justify-between">
                        <Badge variant="outline" className="text-xs">{service.price}</Badge>
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
              Sanitär & Heizung Notdienst in München {district.name}
            </h2>
            <div className="prose prose-lg max-w-none text-muted-foreground">
              <p>
                Sie suchen einen zuverlässigen <strong>Sanitär- und Heizungsbetrieb in {district.name}</strong>? 
                AquaPro24 ist Ihr Partnernetzwerk für alle Sanitär-, Heizungs- und Installationsarbeiten in 
                München {district.name} und den umliegenden Vierteln {district.neighborhoods.slice(0, 2).join(" und ")}.
              </p>
              <p>
                Unser <strong>24-Stunden-Notdienst</strong> ist auch nachts und am Wochenende erreichbar. 
                Bei Rohrbruch, verstopftem Abfluss oder Heizungsausfall sind unsere geprüften Meisterbetriebe 
                in durchschnittlich <strong>{district.responseTime}</strong> bei Ihnen in {district.name}.
              </p>
              <h3 className="text-xl font-semibold text-foreground mt-8">Warum AquaPro24 in {district.name}?</h3>
              <ul className="space-y-2 not-prose">
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Lokale Expertise:</strong> Unsere Partner kennen {district.name} und die typischen Installationen vor Ort.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Schnelle Anfahrt:</strong> Durchschnittlich {district.responseTime} bis zu Ihnen in {district.name}.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Festpreisgarantie:</strong> Keine versteckten Kosten - Sie kennen den Preis vorab.</span>
                </li>
                <li className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-accent mt-0.5 flex-shrink-0" />
                  <span><strong>Meisterqualität:</strong> Alle Partner sind geprüfte Meisterbetriebe mit Gewährleistung.</span>
                </li>
              </ul>
            </div>
            <div className="flex flex-wrap gap-4 mt-8">
              <Button size="lg" asChild>
                <a href="tel:+4917359994699" data-testid="button-call-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen: 0173 5994699
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

        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Weitere Münchner Stadtteile</h2>
            <div className="flex flex-wrap justify-center gap-3">
              {Object.values(districts)
                .filter(d => d.slug !== stadtteil)
                .slice(0, 8)
                .map((d, i) => (
                  <Link 
                    key={i} 
                    href={`/stadtteil/${d.slug}`}
                    data-testid={`link-stadtteil-${d.slug}`}
                  >
                    <Badge 
                      variant="outline" 
                      className="cursor-pointer hover:bg-secondary/10 transition-colors py-2 px-4"
                    >
                      <MapPin className="w-3 h-3 mr-1" />
                      {d.name}
                    </Badge>
                  </Link>
                ))}
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
