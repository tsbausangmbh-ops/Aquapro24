import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import heroImage from "@assets/stock_images/professional_plumber_39413514.jpg";
import { 
  Phone, 
  CheckCircle2, 
  Wrench,
  Flame,
  Bath,
  Zap,
  Clock,
  MapPin,
  Shield,
  Star,
  ArrowRight
} from "lucide-react";
import { Link } from "wouter";

interface StadtteilData {
  name: string;
  slug: string;
  anfahrt: string;
  beschreibung: string;
  besonderheiten: string[];
  nachbarStadtteile: { name: string; slug: string }[];
}

const STADTTEILE: Record<string, StadtteilData> = {
  schwabing: {
    name: "Schwabing",
    slug: "schwabing",
    anfahrt: "15 Minuten",
    beschreibung: "Schwabing ist bekannt für seine Altbauten mit historischen Sanitär- und Heizungsanlagen. Wir kennen die typischen Herausforderungen in diesem Viertel - von alten Bleirohren bis zu antiken Heizkörpern.",
    besonderheiten: [
      "Altbausanierung spezialisiert",
      "Historische Anlagen erhalten",
      "Denkmalschutz-Erfahrung"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Bogenhausen", slug: "bogenhausen" }
    ]
  },
  bogenhausen: {
    name: "Bogenhausen",
    slug: "bogenhausen",
    anfahrt: "20 Minuten",
    beschreibung: "In Bogenhausen betreuen wir viele Villen und gehobene Wohnanlagen. Unsere Fachkräfte sind erfahren mit hochwertigen Sanitäranlagen, Design-Armaturen und modernen Wärmepumpen.",
    besonderheiten: [
      "Premium-Installationen",
      "Villen & Einfamilienhäuser",
      "Moderne Wärmepumpen"
    ],
    nachbarStadtteile: [
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Schwabing", slug: "schwabing" },
      { name: "Trudering", slug: "trudering" }
    ]
  },
  sendling: {
    name: "Sendling",
    slug: "sendling",
    anfahrt: "18 Minuten",
    beschreibung: "Sendling mit seinem Mix aus Alt- und Neubauten ist eines unserer Kerngebiete. Ob Wohnung im Altbau oder modernes Reihenhaus - wir haben die passende Lösung.",
    besonderheiten: [
      "Altbau & Neubau Mix",
      "Energetische Sanierung",
      "Schnelle Notdienst-Anfahrt"
    ],
    nachbarStadtteile: [
      { name: "Laim", slug: "laim" },
      { name: "Giesing", slug: "giesing" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ]
  },
  pasing: {
    name: "Pasing",
    slug: "pasing",
    anfahrt: "25 Minuten",
    beschreibung: "Pasing und Obermenzing sind geprägt von Einfamilienhäusern und Reihenhausssiedlungen. Hier realisieren wir viele Komplettsanierungen von Heizung und Bad.",
    besonderheiten: [
      "Einfamilienhaus-Experten",
      "Heizungsmodernisierung",
      "Fördermittelberatung"
    ],
    nachbarStadtteile: [
      { name: "Laim", slug: "laim" },
      { name: "Moosach", slug: "moosach" },
      { name: "Neuhausen", slug: "neuhausen" }
    ]
  },
  maxvorstadt: {
    name: "Maxvorstadt",
    slug: "maxvorstadt",
    anfahrt: "12 Minuten",
    beschreibung: "Die Maxvorstadt liegt zentral und ist schnell erreichbar. Hier finden sich viele denkmalgeschützte Gebäude, die besondere Expertise bei Sanitär- und Heizungsarbeiten erfordern.",
    besonderheiten: [
      "Kürzeste Anfahrtszeit",
      "Denkmalschutz-Kompetenz",
      "Zentrale Lage"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Neuhausen", slug: "neuhausen" },
      { name: "Sendling", slug: "sendling" }
    ]
  },
  haidhausen: {
    name: "Haidhausen",
    slug: "haidhausen",
    anfahrt: "15 Minuten",
    beschreibung: "Das Franzosenviertel und Alt-Haidhausen sind bekannt für ihre schönen Altbauten. Wir sind spezialisiert auf behutsame Modernisierung bei Erhalt des historischen Charakters.",
    besonderheiten: [
      "Altbau-Modernisierung",
      "Franzosenviertel-Erfahrung",
      "Historische Substanz erhalten"
    ],
    nachbarStadtteile: [
      { name: "Bogenhausen", slug: "bogenhausen" },
      { name: "Giesing", slug: "giesing" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ]
  },
  neuhausen: {
    name: "Neuhausen",
    slug: "neuhausen",
    anfahrt: "20 Minuten",
    beschreibung: "Neuhausen-Nymphenburg verbindet städtisches Wohnen mit grünen Oasen. Vom historischen Schlossumfeld bis zu modernen Wohnanlagen - wir kennen alle Anforderungen.",
    besonderheiten: [
      "Nymphenburg-Erfahrung",
      "Altbau bis Neubau",
      "Gartenbewässerung"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Moosach", slug: "moosach" },
      { name: "Pasing", slug: "pasing" }
    ]
  },
  laim: {
    name: "Laim",
    slug: "laim",
    anfahrt: "22 Minuten",
    beschreibung: "Laim ist ein beliebtes Wohnviertel mit vielen Mehrfamilienhäusern. Wir betreuen hier zahlreiche Hausverwaltungen und Privatpersonen zuverlässig.",
    besonderheiten: [
      "Hausverwaltungen betreut",
      "Mehrfamilienhaus-Erfahrung",
      "Regelmäßige Wartungsverträge"
    ],
    nachbarStadtteile: [
      { name: "Pasing", slug: "pasing" },
      { name: "Sendling", slug: "sendling" },
      { name: "Neuhausen", slug: "neuhausen" }
    ]
  },
  giesing: {
    name: "Giesing",
    slug: "giesing",
    anfahrt: "18 Minuten",
    beschreibung: "Unter- und Obergiesing sind traditionelle Münchner Viertel mit authentischem Charakter. Wir schätzen die bodenständigen Kunden hier und bieten faire Preise.",
    besonderheiten: [
      "Faire Festpreise",
      "Traditionsviertel",
      "Langjährige Stammkunden"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Trudering", slug: "trudering" }
    ]
  },
  trudering: {
    name: "Trudering",
    slug: "trudering",
    anfahrt: "25 Minuten",
    beschreibung: "Trudering-Riem ist geprägt von Einfamilienhäusern und der modernen Messestadt. Hier realisieren wir viele Wärmepumpen-Projekte und Komplettsanierungen.",
    besonderheiten: [
      "Wärmepumpen-Spezialist",
      "Neubau Messestadt",
      "Einfamilienhaus-Sanierung"
    ],
    nachbarStadtteile: [
      { name: "Bogenhausen", slug: "bogenhausen" },
      { name: "Giesing", slug: "giesing" },
      { name: "Haidhausen", slug: "haidhausen" }
    ]
  },
  milbertshofen: {
    name: "Milbertshofen",
    slug: "milbertshofen",
    anfahrt: "20 Minuten",
    beschreibung: "Milbertshofen-Am Hart liegt im Münchner Norden und ist gut erreichbar. Wir betreuen hier viele Wohnanlagen und Gewerbeobjekte professionell.",
    besonderheiten: [
      "Gewerbe & Wohnungen",
      "BMW-Werksumfeld",
      "Schnelle Anfahrt Norden"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Moosach", slug: "moosach" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ]
  },
  moosach: {
    name: "Moosach",
    slug: "moosach",
    anfahrt: "22 Minuten",
    beschreibung: "Moosach verbindet dörflichen Charakter mit urbanem Wachstum. Vom Altdorf bis zu modernen Neubauten - wir sind Ihr zuverlässiger Partner für alle Installationen.",
    besonderheiten: [
      "Alt-Moosach Erfahrung",
      "Neubaugebiete betreut",
      "Familienfreundlicher Service"
    ],
    nachbarStadtteile: [
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Neuhausen", slug: "neuhausen" },
      { name: "Pasing", slug: "pasing" }
    ]
  },
  nord: {
    name: "Nord",
    slug: "muenchen-nord",
    anfahrt: "20 Minuten",
    beschreibung: "München Nord umfasst die Stadtteile Milbertshofen, Am Hart, Freimann und Schwabing-Nord. Wir sind Ihr zuverlässiger Partner für Sanitär und Heizung im gesamten Münchner Norden.",
    besonderheiten: [
      "BMW-Werksumfeld betreut",
      "Olympiapark-Nähe",
      "Schnelle Anfahrt Nordseite"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Moosach", slug: "moosach" }
    ]
  },
  sued: {
    name: "Süd",
    slug: "muenchen-sued",
    anfahrt: "18 Minuten",
    beschreibung: "München Süd mit Sendling, Giesing und Thalkirchen bietet eine Mischung aus Altbau und modernen Wohnanlagen. Wir kennen die Besonderheiten dieser traditionellen Münchner Viertel.",
    besonderheiten: [
      "Isar-Nähe",
      "Altbau-Spezialist",
      "Tierpark-Umfeld betreut"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Giesing", slug: "giesing" },
      { name: "Haidhausen", slug: "haidhausen" }
    ]
  },
  west: {
    name: "West",
    slug: "muenchen-west",
    anfahrt: "22 Minuten",
    beschreibung: "München West mit Pasing, Laim und Aubing ist geprägt von Einfamilienhäusern und grünen Wohnlagen. Hier realisieren wir viele Heizungsmodernisierungen und Badsanierungen.",
    besonderheiten: [
      "Einfamilienhaus-Experten",
      "Große Gärten & Villen",
      "Fördermittelberatung"
    ],
    nachbarStadtteile: [
      { name: "Pasing", slug: "pasing" },
      { name: "Laim", slug: "laim" },
      { name: "Neuhausen", slug: "neuhausen" }
    ]
  },
  ost: {
    name: "Ost",
    slug: "muenchen-ost",
    anfahrt: "20 Minuten",
    beschreibung: "München Ost umfasst Bogenhausen, Trudering-Riem und Berg am Laim. Von der Messestadt bis zu den noblen Villenvierteln - wir bieten passgenaue Lösungen für jede Anforderung.",
    besonderheiten: [
      "Messestadt betreut",
      "Villen Bogenhausen",
      "Wärmepumpen-Spezialist"
    ],
    nachbarStadtteile: [
      { name: "Bogenhausen", slug: "bogenhausen" },
      { name: "Trudering", slug: "trudering" },
      { name: "Haidhausen", slug: "haidhausen" }
    ]
  },
  nymphenburg: {
    name: "Nymphenburg",
    slug: "nymphenburg",
    anfahrt: "18 Minuten",
    beschreibung: "Nymphenburg ist eines der exklusivsten Wohnviertel Münchens. Rund um das berühmte Schloss betreuen wir historische Villen und moderne Residenzen mit höchsten Ansprüchen.",
    besonderheiten: [
      "Schloss-Umfeld betreut",
      "Villen & Residenzen",
      "Premium-Installationen"
    ],
    nachbarStadtteile: [
      { name: "Neuhausen", slug: "neuhausen" },
      { name: "Pasing", slug: "pasing" },
      { name: "Moosach", slug: "moosach" }
    ]
  },
  perlach: {
    name: "Perlach",
    slug: "perlach",
    anfahrt: "22 Minuten",
    beschreibung: "Perlach und Neuperlach bieten eine Mischung aus Hochhaussiedlungen und Einfamilienhäusern. Wir sind erfahren mit großen Wohnanlagen und individuellen Häusern gleichermaßen.",
    besonderheiten: [
      "Wohnanlagen betreut",
      "Einfamilienhäuser",
      "Schnelle Verfügbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Giesing", slug: "giesing" },
      { name: "Trudering", slug: "trudering" },
      { name: "Sendling", slug: "sendling" }
    ]
  },
  solln: {
    name: "Solln",
    slug: "solln",
    anfahrt: "20 Minuten",
    beschreibung: "Solln ist ein gehobenes Villenviertel im Münchner Süden. Die grüne Wohnlage mit vielen Einfamilienhäusern erfordert oft umfassende Heizungsmodernisierungen.",
    besonderheiten: [
      "Villenviertel",
      "Heizungsmodernisierung",
      "Große Grundstücke"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Giesing", slug: "giesing" },
      { name: "Perlach", slug: "perlach" }
    ]
  },
  hadern: {
    name: "Hadern",
    slug: "hadern",
    anfahrt: "20 Minuten",
    beschreibung: "Hadern im Südwesten Münchens ist geprägt vom Universitätsklinikum Großhadern. Wir betreuen viele Wohnungen und Häuser in dieser familienfreundlichen Gegend.",
    besonderheiten: [
      "Klinikum-Umfeld",
      "Familienfreundlich",
      "Gute Erreichbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Laim", slug: "laim" },
      { name: "Pasing", slug: "pasing" },
      { name: "Sendling", slug: "sendling" }
    ]
  },
  allach: {
    name: "Allach-Untermenzing",
    slug: "allach",
    anfahrt: "25 Minuten",
    beschreibung: "Allach-Untermenzing am nordwestlichen Stadtrand bietet ländlichen Charme mit guter Anbindung. Hier sind Wärmepumpen und moderne Heizsysteme besonders gefragt.",
    besonderheiten: [
      "Ländlicher Charme",
      "Wärmepumpen-Spezialist",
      "Neubaugebiete"
    ],
    nachbarStadtteile: [
      { name: "Moosach", slug: "moosach" },
      { name: "Pasing", slug: "pasing" },
      { name: "Feldmoching", slug: "feldmoching" }
    ]
  },
  aubing: {
    name: "Aubing-Lochhausen",
    slug: "aubing",
    anfahrt: "28 Minuten",
    beschreibung: "Aubing-Lochhausen-Langwied ist der westlichste Münchner Bezirk. Viele Einfamilienhäuser und Neubaugebiete prägen das Bild - ideal für moderne Haustechnik.",
    besonderheiten: [
      "Westlichster Bezirk",
      "Neubaugebiete",
      "Einfamilienhaus-Experten"
    ],
    nachbarStadtteile: [
      { name: "Pasing", slug: "pasing" },
      { name: "Allach", slug: "allach" },
      { name: "Laim", slug: "laim" }
    ]
  },
  feldmoching: {
    name: "Feldmoching-Hasenbergl",
    slug: "feldmoching",
    anfahrt: "25 Minuten",
    beschreibung: "Feldmoching-Hasenbergl im Münchner Norden verbindet städtisches Wohnen mit dörflichem Charakter. Wir betreuen sowohl Wohnanlagen als auch ländliche Anwesen.",
    besonderheiten: [
      "Nördlichster Bezirk",
      "Stadt & Land Mix",
      "Wohnanlagen betreut"
    ],
    nachbarStadtteile: [
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Moosach", slug: "moosach" },
      { name: "Allach", slug: "allach" }
    ]
  },
  thalkirchen: {
    name: "Thalkirchen-Obersendling",
    slug: "thalkirchen",
    anfahrt: "18 Minuten",
    beschreibung: "Thalkirchen-Obersendling liegt idyllisch an der Isar mit Tierpark und Flaucher. Wir kennen die Besonderheiten der Altbauten und modernen Wohnanlagen in diesem beliebten Viertel.",
    besonderheiten: [
      "Isar-Nähe",
      "Tierpark-Umfeld",
      "Altbau & Neubau"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Giesing", slug: "giesing" },
      { name: "Solln", slug: "solln" }
    ]
  },
  ramersdorf: {
    name: "Ramersdorf-Perlach",
    slug: "ramersdorf",
    anfahrt: "20 Minuten",
    beschreibung: "Ramersdorf-Perlach ist einer der größten Münchner Bezirke. Von der Wohnsiedlung bis zum Einfamilienhaus - wir bieten passgenaue Lösungen für jeden Bedarf.",
    besonderheiten: [
      "Größter Bezirk",
      "Vielfältige Bebauung",
      "Schnelle Verfügbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Giesing", slug: "giesing" },
      { name: "Trudering", slug: "trudering" },
      { name: "Perlach", slug: "perlach" }
    ]
  },
  berg_am_laim: {
    name: "Berg am Laim",
    slug: "berg-am-laim",
    anfahrt: "18 Minuten",
    beschreibung: "Berg am Laim verbindet traditionelle Münchner Wohnkultur mit moderner Entwicklung. Wir betreuen sowohl historische Gebäude als auch neue Wohnprojekte.",
    besonderheiten: [
      "Zentrale Ostlage",
      "Tradition & Moderne",
      "Gute Erreichbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Trudering", slug: "trudering" },
      { name: "Ramersdorf", slug: "ramersdorf" }
    ]
  },
  schwanthalerhoehe: {
    name: "Schwanthalerhöhe",
    slug: "schwanthalerhoehe",
    anfahrt: "12 Minuten",
    beschreibung: "Die Schwanthalerhöhe liegt zentral zwischen Theresienwiese und Westend. Wir sind spezialisiert auf die Altbauten und Gewerbeimmobilien dieses lebendigen Viertels.",
    besonderheiten: [
      "Theresienwiese-Nähe",
      "Zentrale Lage",
      "Altbau-Spezialist"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Sendling", slug: "sendling" },
      { name: "Laim", slug: "laim" }
    ]
  },
  au: {
    name: "Au-Haidhausen",
    slug: "au",
    anfahrt: "15 Minuten",
    beschreibung: "Die Au und Haidhausen gehören zu den beliebtesten Münchner Vierteln. Historische Altbauten und eine lebendige Atmosphäre prägen diesen besonderen Stadtteil.",
    besonderheiten: [
      "Beliebtes Szeneviertel",
      "Altbau-Experten",
      "Isar-Nähe"
    ],
    nachbarStadtteile: [
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Giesing", slug: "giesing" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ]
  },
  lehel: {
    name: "Lehel",
    slug: "lehel",
    anfahrt: "12 Minuten",
    beschreibung: "Das Lehel ist eines der ältesten Münchner Viertel mit exklusiven Altbauwohnungen. Wir bieten behutsame Modernisierung bei Erhalt des historischen Charakters.",
    besonderheiten: [
      "Exklusives Altstadtviertel",
      "Historische Substanz",
      "Premium-Service"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Schwabing", slug: "schwabing" }
    ]
  },
  freimann: {
    name: "Freimann",
    slug: "freimann",
    anfahrt: "22 Minuten",
    beschreibung: "Freimann im Münchner Norden bietet eine Mischung aus Wohngebieten und Gewerbe. Die Allianz Arena und neue Wohnprojekte prägen diesen dynamischen Bezirk.",
    besonderheiten: [
      "Allianz Arena Nähe",
      "Neue Wohnprojekte",
      "Gewerbe & Wohnen"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Bogenhausen", slug: "bogenhausen" }
    ]
  }
};

const SERVICES = [
  {
    icon: Wrench,
    title: "Sanitär",
    description: "Armaturen, WC, Waschbecken, Rohrreinigung",
    link: "/sanitaer"
  },
  {
    icon: Flame,
    title: "Heizung",
    description: "Wartung, Reparatur, Austausch, Notdienst",
    link: "/heizung"
  },
  {
    icon: Bath,
    title: "Badsanierung",
    description: "Komplettsanierung aus einer Hand",
    link: "/bad"
  },
  {
    icon: Zap,
    title: "Wärmepumpe",
    description: "Installation, Förderberatung, Service",
    link: "/waermepumpe"
  }
];

interface StadtteilPageProps {
  stadtteil: string;
}

export default function StadtteilPage({ stadtteil }: StadtteilPageProps) {
  const data = STADTTEILE[stadtteil];
  
  if (!data) {
    return <div>Stadtteil nicht gefunden</div>;
  }

  return (
    <div className="min-h-screen flex flex-col">
      <SEO 
        title={`Sanitär Installateur ${data.name} München | 24h Notdienst`}
        description={`Sanitär & Heizung in ${data.name} München: 24h Notdienst, schnelle Hilfe & feste Preise vom Fachbetrieb.`}
        canonical={`https://aquapro24.de/${data.slug}`}
        keywords={`Installateur ${data.name}, Sanitär ${data.name}, Heizung ${data.name}, Klempner ${data.name}, Notdienst ${data.name}, ${data.name} München`}
        stadttteil={data.name}
        speakable={{ cssSelector: ["h1", ".text-white\\/90", "[data-testid='button-call-stadtteil-hero']"] }}
        aiSummary={`AquaPro 24 bietet Sanitär- und Heizungsservice in München ${data.name}. 24/7 Notdienst, schnelle Anfahrt in ${data.anfahrt}, Festpreisgarantie.`}
        breadcrumbs={[
          { name: "Home", url: "https://aquapro24.de/" },
          { name: "Einsatzgebiete", url: "https://aquapro24.de/einsatzgebiete" },
          { name: data.name, url: `https://aquapro24.de/${data.slug}` }
        ]}
        serviceSchema={{
          name: `Installateur ${data.name} - Sanitär & Heizung`,
          description: `Ihr lokaler Installateur in München ${data.name}. Sanitär, Heizung, Badsanierung. Schnelle Anfahrt in ${data.anfahrt}.`,
          serviceType: "Sanitär/Heizung",
          urlSlug: data.slug,
          catalogName: `Services ${data.name}`,
          serviceOffers: [
            { name: `Sanitär-Service ${data.name}` },
            { name: `Heizungs-Service ${data.name}` },
            { name: `Badsanierung ${data.name}` },
            { name: `24h Notdienst ${data.name}` }
          ],
          aggregateRating: {
            ratingValue: 4.9,
            reviewCount: 127
          }
        }}
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
              <Badge variant="secondary" className="mb-4">
                <MapPin className="w-3 h-3 mr-1" />
                München {data.name}
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 text-white">
                Klempner {data.name} München – Sanitär, Heizung & Notdienst
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Installateur {data.name}</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner vor Ort</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Reparatur</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rohrbruch beheben</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Abfluss verstopft</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">WC austauschen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">24h Notdienst</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreis Garantie</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">schnelle Anfahrt</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Partnernetzwerk</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">faire Preise</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">lokaler Service</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                {data.beschreibung}
              </p>
              <div className="flex items-center gap-4 text-white/80 mb-6">
                <div className="flex items-center gap-2">
                  <Clock className="w-5 h-5 text-primary" />
                  <span>Anfahrt: ca. {data.anfahrt}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Star className="w-5 h-5 text-yellow-400" />
                  <span>4.9/5 Bewertung</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-3">
                <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                  <a href="tel:+4989444438872" data-testid="button-call-stadtteil-hero">
                    <Phone className="w-4 h-4 mr-2" />
                    Jetzt anrufen
                  </a>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white bg-white/10 backdrop-blur-sm" asChild>
                  <Link href="/termin" data-testid="button-termin-stadtteil-hero">
                    <Clock className="w-4 h-4 mr-2" />
                    Online Termin buchen
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        </section>

        <TrustBar />

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-6">
              Sanitär & Heizung München {data.name}: Alle Leistungen im Überblick
            </h2>
            <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {SERVICES.map((service) => (
                <Link key={service.title} href={service.link}>
                  <Card className="h-full hover-elevate cursor-pointer">
                    <CardContent className="p-4">
                      <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-3">
                        <service.icon className="w-5 h-5 text-primary" />
                      </div>
                      <h3 className="font-semibold mb-1">{service.title}</h3>
                      <p className="text-sm text-muted-foreground">{service.description}</p>
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-secondary/5">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h2 className="text-2xl md:text-3xl font-bold mb-4">
                  Klempner München {data.name}: Warum Kunden uns empfehlen
                </h2>
                <ul className="space-y-3">
                  {data.besonderheiten.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                      <span>{item}</span>
                    </li>
                  ))}
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>24/7 Notdienst erreichbar</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Transparente Festpreise</span>
                  </li>
                  <li className="flex items-start gap-3">
                    <CheckCircle2 className="w-5 h-5 text-green-500 shrink-0 mt-0.5" />
                    <span>Schnelle Anfahrt in {data.anfahrt}</span>
                  </li>
                </ul>
              </div>
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-center gap-3 mb-4">
                    <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                      <Shield className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-semibold">Handwerker Garantie {data.name} München: Ihr Sicherheitsversprechen</h3>
                      <p className="text-sm text-muted-foreground">Für alle Arbeiten in {data.name}</p>
                    </div>
                  </div>
                  <ul className="space-y-2 text-sm">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>2 Jahre Gewährleistung auf alle Arbeiten</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Festpreis-Garantie ohne versteckte Kosten</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-green-500" />
                      <span>Partnernetzwerk mit qualifizierten Fachkräften</span>
                    </li>
                  </ul>
                  <div className="mt-4 pt-4 border-t">
                    <Button className="w-full" asChild>
                      <a href="tel:+4989444438872" data-testid="button-call-garantie">
                        <Phone className="w-4 h-4 mr-2" />
                        089 444438872
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold text-center mb-2">
              Installateur München nahe {data.name}: Nachbarstadtteile im Einsatzgebiet
            </h2>
            <p className="text-muted-foreground text-center mb-6">
              Wir sind auch in den Nachbarstadtteilen für Sie da
            </p>
            <div className="grid sm:grid-cols-3 gap-4">
              {data.nachbarStadtteile.map((nachbar) => (
                <Link key={nachbar.slug} href={`/${nachbar.slug}`}>
                  <Card className="hover-elevate cursor-pointer">
                    <CardContent className="p-4 flex items-center justify-between">
                      <div className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        <span className="font-medium">{nachbar.name}</span>
                      </div>
                      <ArrowRight className="w-4 h-4 text-muted-foreground" />
                    </CardContent>
                  </Card>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="py-6 bg-secondary text-secondary-foreground">
          <div className="max-w-7xl mx-auto px-4 lg:px-8 text-center">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Klempner München {data.name}: Notdienst & Termin online buchen
            </h2>
            <p className="text-secondary-foreground/80 mb-4 max-w-2xl mx-auto">
              Schnelle Hilfe für Sanitär, Heizung und Bad in München {data.name}. 
              24/7 Notdienst - Anfahrt in ca. {data.anfahrt}.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
                <a href="tel:+4989444438872" data-testid="button-call-stadtteil-cta">
                  <Phone className="w-4 h-4 mr-2" />
                  089 444438872
                </a>
              </Button>
              <Button size="lg" className="bg-white text-secondary border-white" asChild>
                <Link href="/termin" data-testid="button-termin-stadtteil-cta">
                  <Clock className="w-4 h-4 mr-2" />
                  Online Termin buchen
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

export { STADTTEILE };
