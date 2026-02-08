import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import TrustBar from "@/components/TrustBar";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { useHeroImage } from "@/components/ResponsiveHero";
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
  ArrowRight,
  AlertTriangle
} from "lucide-react";
import { Link } from "wouter";

interface StadtteilFAQ {
  frage: string;
  antwort: string;
}

interface StadtteilData {
  name: string;
  slug: string;
  anfahrt: string;
  beschreibung: string;
  detailText: string;
  typischeProbleme: string[];
  besonderheiten: string[];
  nachbarStadtteile: { name: string; slug: string }[];
  faqs: StadtteilFAQ[];
  plz: string[];
}

const STADTTEILE: Record<string, StadtteilData> = {
  schwabing: {
    name: "Schwabing",
    slug: "schwabing",
    anfahrt: "15 Minuten",
    beschreibung: "Schwabing ist bekannt für seine Altbauten mit historischen Sanitär- und Heizungsanlagen. Wir kennen die typischen Herausforderungen in diesem Viertel - von alten Bleirohren bis zu antiken Heizkörpern.",
    detailText: "Die Gründerzeit-Altbauten in Schwabing stellen besondere Anforderungen an Sanitär-Fachkräfte: Viele Gebäude haben noch originale Blei- und Gussrohre aus dem frühen 20. Jahrhundert. Steigleitungssanierungen und der denkmalgerechte Austausch historischer Heizkörper gehören zu unseren häufigsten Aufträgen in diesem Viertel.",
    typischeProbleme: [
      "Kalkablagerungen in alten Bleirohren",
      "Undichte Guss-Fallrohre in Altbauten",
      "Alte Nachtspeicherheizungen ersetzen",
      "Wasserschäden durch marode Steigleitungen"
    ],
    besonderheiten: [
      "Altbausanierung spezialisiert",
      "Historische Anlagen erhalten",
      "Denkmalschutz-Erfahrung"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Bogenhausen", slug: "bogenhausen" }
    ],
    faqs: [
      { frage: "Wie schnell sind Sie bei einem Rohrbruch in Schwabing vor Ort?", antwort: "Bei einem Notfall in Schwabing sind wir in der Regel innerhalb von 15-25 Minuten bei Ihnen. Unsere Notdienst-Fahrzeuge sind rund um die Uhr einsatzbereit." },
      { frage: "Können Sie Bleirohre in Schwabinger Altbauten austauschen?", antwort: "Ja, der Austausch von Bleirohren gehört zu unseren Kernkompetenzen in Schwabing. Wir arbeiten denkmalgerecht und stimmen uns bei Bedarf mit der Hausverwaltung und dem Denkmalschutz ab." },
      { frage: "Was kostet eine Heizungswartung in Schwabing?", antwort: "Eine Heizungswartung in Schwabing beginnt ab 149 Euro inkl. Anfahrt. Bei den typischen Altbau-Heizungen erstellen wir vorab einen transparenten Kostenvoranschlag." }
    ],
    plz: ["80799", "80801", "80802", "80803", "80804"]
  },
  bogenhausen: {
    name: "Bogenhausen",
    slug: "bogenhausen",
    anfahrt: "20 Minuten",
    beschreibung: "In Bogenhausen betreuen wir viele Villen und gehobene Wohnanlagen. Unsere Fachkräfte sind erfahren mit hochwertigen Sanitäranlagen, Design-Armaturen und modernen Wärmepumpen.",
    detailText: "Die großzügigen Villen und repräsentativen Wohnanlagen in Bogenhausen erfordern oft hochwertige Sanitärlösungen mit Designarmaturen von Grohe oder Hansgrohe. Komplexe Heizungssysteme in mehrstöckigen Villen mit Fußbodenheizung und Radiatoren im Mix sind hier keine Seltenheit.",
    typischeProbleme: [
      "Komplexe Fußbodenheizung in Villen optimieren",
      "Designarmaturen in großen Badezimmern montieren",
      "Zirkulationsleitungen für große Wohnflächen",
      "Wärmepumpe für Villen dimensionieren"
    ],
    besonderheiten: [
      "Premium-Installationen",
      "Villen & Einfamilienhäuser",
      "Moderne Wärmepumpen"
    ],
    nachbarStadtteile: [
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Schwabing", slug: "schwabing" },
      { name: "Trudering", slug: "trudering" }
    ],
    faqs: [
      { frage: "Installieren Sie auch Premium-Armaturen in Bogenhausen?", antwort: "Selbstverständlich. Wir arbeiten mit allen namhaften Herstellern wie Hansgrohe, Grohe und Dornbracht zusammen und installieren hochwertige Designarmaturen fachgerecht in Ihrem Bad." },
      { frage: "Können Sie eine Wärmepumpe für meine Villa in Bogenhausen planen?", antwort: "Ja, wir dimensionieren und installieren Wärmepumpen speziell für größere Villen. Dabei berücksichtigen wir die Gebäudegröße, bestehende Heizkörper und erstellen eine individuelle Heizlastberechnung." },
      { frage: "Bieten Sie Wartungsverträge für Villen in Bogenhausen an?", antwort: "Ja, wir bieten maßgeschneiderte Wartungsverträge für Villen an, die Heizung, Sanitär und Entwässerungssysteme umfassen. So bleiben Ihre Anlagen dauerhaft in bestem Zustand." }
    ],
    plz: ["81675", "81677", "81679", "81925", "81927", "81929"]
  },
  sendling: {
    name: "Sendling",
    slug: "sendling",
    anfahrt: "18 Minuten",
    beschreibung: "Sendling mit seinem Mix aus Alt- und Neubauten ist eines unserer Kerngebiete. Ob Wohnung im Altbau oder modernes Reihenhaus - wir haben die passende Lösung.",
    detailText: "Sendling zeichnet sich durch eine bunte Mischung aus Nachkriegsbauten, sanierten Altbauten und modernen Wohnkomplexen aus. Die unterschiedlichen Baujahre erfordern flexible Sanitär- und Heizungslösungen – von der Rohrinnensanierung im Altbau bis zur Fußbodenheizung im Neubau.",
    typischeProbleme: [
      "Verstopfte Abwasserleitungen in Altbauwohnungen",
      "Veraltete Gas-Etagenheizungen modernisieren",
      "Feuchteschäden im Keller durch alte Leitungen",
      "Thermostatventile an alten Heizkörpern tauschen"
    ],
    besonderheiten: [
      "Altbau & Neubau Mix",
      "Energetische Sanierung",
      "Schnelle Notdienst-Anfahrt"
    ],
    nachbarStadtteile: [
      { name: "Laim", slug: "laim" },
      { name: "Giesing", slug: "giesing" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ],
    faqs: [
      { frage: "Wie lange dauert ein Heizungsaustausch in Sendling?", antwort: "Ein Heizungsaustausch in einer typischen Sendlinger Wohnung dauert in der Regel 1-2 Tage. Bei Gas-Etagenheizungen planen wir den Austausch so, dass Sie schnellstmöglich wieder Wärme haben." },
      { frage: "Bieten Sie auch Rohrreinigung in Sendling an?", antwort: "Ja, unsere Rohrreinigungsteams sind für Sendling schnell verfügbar. Mit moderner Kameratechnik lokalisieren wir Verstopfungen präzise und beseitigen sie effizient." },
      { frage: "Können Sie meine alte Gasheizung in Sendling austauschen?", antwort: "Ja, wir sind auf den Austausch veralteter Gasheizungen spezialisiert und beraten Sie zu förderfähigen Alternativen wie Wärmepumpen oder Brennwerttechnik." }
    ],
    plz: ["81369", "81371", "81373"]
  },
  pasing: {
    name: "Pasing",
    slug: "pasing",
    anfahrt: "25 Minuten",
    beschreibung: "Pasing und Obermenzing sind geprägt von Einfamilienhäusern und Reihenhausssiedlungen. Hier realisieren wir viele Komplettsanierungen von Heizung und Bad.",
    detailText: "In Pasing und Obermenzing dominieren Einfamilienhäuser und Reihenhäuser aus den 1950er bis 1980er Jahren, deren Heizungsanlagen häufig am Ende ihrer Lebensdauer stehen. Wir beraten umfassend zu Fördermitteln und realisieren den Umstieg auf moderne Wärmepumpen oder Brennwerttechnik.",
    typischeProbleme: [
      "Ölheizung gegen Wärmepumpe tauschen",
      "Alte Bäder in Reihenhäusern komplettsanieren",
      "Warmwasserspeicher in Einfamilienhäusern erneuern",
      "Undichte Dachentwässerung an älteren Häusern"
    ],
    besonderheiten: [
      "Einfamilienhaus-Experten",
      "Heizungsmodernisierung",
      "Fördermittelberatung"
    ],
    nachbarStadtteile: [
      { name: "Laim", slug: "laim" },
      { name: "Moosach", slug: "moosach" },
      { name: "Neuhausen", slug: "neuhausen" }
    ],
    faqs: [
      { frage: "Welche Förderung bekomme ich für eine neue Heizung in Pasing?", antwort: "Für den Heizungstausch in Pasing können Sie bis zu 70% Förderung über die BEG erhalten. Wir helfen Ihnen bei der Antragstellung und begleiten den gesamten Prozess." },
      { frage: "Wie lange dauert eine Badsanierung in einem Pasinger Reihenhaus?", antwort: "Eine komplette Badsanierung in einem typischen Pasinger Reihenhaus dauert ca. 2-3 Wochen. Wir koordinieren alle Gewerke und übergeben das fertige Bad termingerecht." },
      { frage: "Können Sie auch die Gartenbewässerung in Pasing installieren?", antwort: "Ja, wir installieren professionelle Gartenbewässerungssysteme für die großen Gärten in Pasing – von einfachen Anschlüssen bis zu automatischen Beregnungsanlagen." }
    ],
    plz: ["81241", "81243", "81245"]
  },
  maxvorstadt: {
    name: "Maxvorstadt",
    slug: "maxvorstadt",
    anfahrt: "12 Minuten",
    beschreibung: "Die Maxvorstadt liegt zentral und ist schnell erreichbar. Hier finden sich viele denkmalgeschützte Gebäude, die besondere Expertise bei Sanitär- und Heizungsarbeiten erfordern.",
    detailText: "Die Maxvorstadt als Universitäts- und Museumsviertel besteht überwiegend aus denkmalgeschützten Gründerzeithäusern mit aufwendigen Stuckfassaden. Sanitärarbeiten müssen hier oft unter beengten Platzverhältnissen in historischen Bädern durchgeführt werden, ohne die Bausubstanz zu beschädigen.",
    typischeProbleme: [
      "Enge Bäder in Altbauten effizient modernisieren",
      "Zentralheizung in Gebäuden mit Denkmalschutz nachrüsten",
      "Trinkwasserleitungen in denkmalgeschützten Häusern erneuern",
      "Abflussrohre unter denkmalgeschützten Böden sanieren"
    ],
    besonderheiten: [
      "Kürzeste Anfahrtszeit",
      "Denkmalschutz-Kompetenz",
      "Zentrale Lage"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Neuhausen", slug: "neuhausen" },
      { name: "Sendling", slug: "sendling" }
    ],
    faqs: [
      { frage: "Arbeiten Sie auch unter Denkmalschutz-Auflagen in der Maxvorstadt?", antwort: "Ja, wir haben langjährige Erfahrung mit Arbeiten unter Denkmalschutz-Auflagen. Unsere Fachkräfte stimmen sich mit der Unteren Denkmalschutzbehörde ab und verwenden materialgerechte Techniken." },
      { frage: "Wie schnell können Sie bei einem Wasserrohrbruch in der Maxvorstadt sein?", antwort: "Dank unserer zentralen Lage sind wir bei einem Notfall in der Maxvorstadt in nur 12-15 Minuten vor Ort – die schnellste Anfahrtszeit aller Münchner Stadtteile." },
      { frage: "Kann mein kleines Altbau-Bad in der Maxvorstadt modernisiert werden?", antwort: "Auf jeden Fall. Wir sind auf platzsparende Lösungen für kleine Altbau-Bäder spezialisiert und nutzen clevere Raumkonzepte mit Wandeinbau-Technik und bodenebenen Duschen." }
    ],
    plz: ["80333", "80335", "80539", "80799"]
  },
  haidhausen: {
    name: "Haidhausen",
    slug: "haidhausen",
    anfahrt: "15 Minuten",
    beschreibung: "Das Franzosenviertel und Alt-Haidhausen sind bekannt für ihre schönen Altbauten. Wir sind spezialisiert auf behutsame Modernisierung bei Erhalt des historischen Charakters.",
    detailText: "Im Franzosenviertel und den angrenzenden Straßen von Haidhausen finden sich wunderschöne Jugendstil-Altbauten mit oft noch originalen Sanitäranlagen. Behutsame Modernisierung unter Erhalt historischer Fliesen und Armaturen erfordert handwerkliches Fingerspitzengefühl und Erfahrung.",
    typischeProbleme: [
      "Jugendstil-Bäder behutsam modernisieren",
      "Alte Gasthermen in Etagenwohnungen austauschen",
      "Historische Fliesen bei Rohrarbeiten schützen",
      "Steigleitungen in Mehrfamilien-Altbauten erneuern"
    ],
    besonderheiten: [
      "Altbau-Modernisierung",
      "Franzosenviertel-Erfahrung",
      "Historische Substanz erhalten"
    ],
    nachbarStadtteile: [
      { name: "Bogenhausen", slug: "bogenhausen" },
      { name: "Giesing", slug: "giesing" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ],
    faqs: [
      { frage: "Können Sie historische Fliesen bei Sanitärarbeiten in Haidhausen erhalten?", antwort: "Ja, wir legen größten Wert darauf, historische Fliesen und Originalsubstanz zu schützen. Bei unvermeidlichen Eingriffen arbeiten wir mit Restauratoren zusammen, um ein stimmiges Gesamtbild zu erhalten." },
      { frage: "Was kostet ein Notdienst-Einsatz in Haidhausen?", antwort: "Unsere Notdienst-Einsätze in Haidhausen starten ab 89 Euro Anfahrtspauschale. Den genauen Preis erfahren Sie transparent vor Arbeitsbeginn – ohne versteckte Kosten." },
      { frage: "Tauschen Sie auch alte Gasthermen in Haidhausener Wohnungen aus?", antwort: "Ja, der Austausch alter Gasthermen gegen moderne Brennwertgeräte ist einer unserer häufigsten Aufträge in Haidhausen. Wir kümmern uns auch um die Abgaswegsanierung." }
    ],
    plz: ["81667", "81669", "81671"]
  },
  neuhausen: {
    name: "Neuhausen",
    slug: "neuhausen",
    anfahrt: "20 Minuten",
    beschreibung: "Neuhausen-Nymphenburg verbindet städtisches Wohnen mit grünen Oasen. Vom historischen Schlossumfeld bis zu modernen Wohnanlagen - wir kennen alle Anforderungen.",
    detailText: "Neuhausen bietet eine spannende Mischung aus großbürgerlichen Altbauten entlang der Nymphenburger Straße und modernisierten Wohnanlagen rund um den Rotkreuzplatz. Die Bandbreite reicht von historischen Gusseisen-Radiatoren bis hin zu modernen Fußbodenheizungen in Neubauprojekten.",
    typischeProbleme: [
      "Alte Gusseisen-Radiatoren gegen Flachheizkörper tauschen",
      "Gartenbewässerung für Nymphenburger Villengärten installieren",
      "Trinkwasserhygiene in älteren Mehrfamilienhäusern sicherstellen",
      "Kellerentwässerung bei hohem Grundwasserstand optimieren"
    ],
    besonderheiten: [
      "Nymphenburg-Erfahrung",
      "Altbau bis Neubau",
      "Gartenbewässerung"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Moosach", slug: "moosach" },
      { name: "Pasing", slug: "pasing" }
    ],
    faqs: [
      { frage: "Installieren Sie Gartenbewässerung in Neuhausen?", antwort: "Ja, wir installieren professionelle Bewässerungssysteme für die grünen Gärten rund um Nymphenburg – von Tropfbewässerung bis zu vollautomatischen Rasensprengern." },
      { frage: "Können Sie die Heizung in meinem Neuhausener Altbau modernisieren?", antwort: "Ja, wir modernisieren Heizungsanlagen in Neuhausener Altbauten schonend und effizient. Häufig kombinieren wir neue Brennwerttechnik mit bestehenden Heizkörpern für optimale Ergebnisse." },
      { frage: "Gibt es spezielle Herausforderungen bei Sanitärarbeiten in Neuhausen?", antwort: "In Neuhausen ist der Grundwasserstand teilweise hoch, was bei Kellerinstallationen und Rückstausicherungen besondere Beachtung erfordert. Wir kennen die lokalen Gegebenheiten genau." }
    ],
    plz: ["80634", "80636", "80637", "80638", "80639"]
  },
  laim: {
    name: "Laim",
    slug: "laim",
    anfahrt: "22 Minuten",
    beschreibung: "Laim ist ein beliebtes Wohnviertel mit vielen Mehrfamilienhäusern. Wir betreuen hier zahlreiche Hausverwaltungen und Privatpersonen zuverlässig.",
    detailText: "Laim ist geprägt von Mehrfamilienhäusern aus den 1950er bis 1970er Jahren mit zentralen Heizungsanlagen und gemeinsamen Steigleitungen. Wir koordinieren Sanierungsarbeiten häufig mit Hausverwaltungen und stimmen Termine auf die Bedürfnisse aller Mietparteien ab.",
    typischeProbleme: [
      "Zentrale Warmwasserbereitungsanlagen in Mehrfamilienhäusern warten",
      "Gemeinsame Steigleitungen in Wohnblöcken sanieren",
      "Heizungsumwälzpumpen in Kellerräumen austauschen",
      "Kaltwasserleitungen gegen Legionellenbefall schützen"
    ],
    besonderheiten: [
      "Hausverwaltungen betreut",
      "Mehrfamilienhaus-Erfahrung",
      "Regelmäßige Wartungsverträge"
    ],
    nachbarStadtteile: [
      { name: "Pasing", slug: "pasing" },
      { name: "Sendling", slug: "sendling" },
      { name: "Neuhausen", slug: "neuhausen" }
    ],
    faqs: [
      { frage: "Betreuen Sie auch Hausverwaltungen in Laim?", antwort: "Ja, wir betreuen zahlreiche Hausverwaltungen in Laim mit regelmäßigen Wartungsverträgen. Wir übernehmen die komplette Koordination und termingerechte Durchführung aller Sanitär- und Heizungsarbeiten." },
      { frage: "Wie läuft eine Steigleitungssanierung in einem Laimer Mehrfamilienhaus ab?", antwort: "Wir planen die Steigleitungssanierung in enger Abstimmung mit der Hausverwaltung und den Mietern. Der Austausch erfolgt strangweise, sodass die Wasserversorgung nur kurzzeitig unterbrochen wird." },
      { frage: "Bieten Sie Legionellenprüfung in Laim an?", antwort: "Ja, wir führen die vorgeschriebene Legionellenprüfung für Mehrfamilienhäuser in Laim durch und beraten bei Überschreitung der Grenzwerte zu wirksamen Maßnahmen." }
    ],
    plz: ["80686", "80687"]
  },
  giesing: {
    name: "Giesing",
    slug: "giesing",
    anfahrt: "18 Minuten",
    beschreibung: "Unter- und Obergiesing sind traditionelle Münchner Viertel mit authentischem Charakter. Wir schätzen die bodenständigen Kunden hier und bieten faire Preise.",
    detailText: "Giesing ist ein gewachsenes Arbeiterviertel mit einem Mix aus einfachen Nachkriegsbauten und zunehmend modernisierten Wohnungen. Die Sanitäranlagen in vielen Giesinger Häusern stammen noch aus den 1960er Jahren und erfordern pragmatische, kostenbewusste Sanierungslösungen.",
    typischeProbleme: [
      "Verkalkte Wasserleitungen in Nachkriegsbauten erneuern",
      "Einzelöfen durch Zentralheizung ersetzen",
      "Badezimmer aus den 1960er Jahren sanieren",
      "Abflussrohre in älteren Wohnblöcken reinigen"
    ],
    besonderheiten: [
      "Faire Festpreise",
      "Traditionsviertel",
      "Langjährige Stammkunden"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Trudering", slug: "trudering" }
    ],
    faqs: [
      { frage: "Was kostet eine Badsanierung in einer Giesinger Wohnung?", antwort: "Eine Badsanierung in einer typischen Giesinger Mietwohnung beginnt ab ca. 8.000 Euro. Wir erstellen Ihnen vorab einen detaillierten Festpreis-Kostenvoranschlag ohne versteckte Kosten." },
      { frage: "Können Sie meine alte Einzelofenheizung in Giesing ersetzen?", antwort: "Ja, wir rüsten regelmäßig Giesinger Wohnungen von Einzelöfen auf moderne Zentralheizungen um. Dabei beraten wir auch zu möglichen Fördermitteln für den Heizungstausch." },
      { frage: "Haben Sie Erfahrung mit den typischen Giesinger Wohnbauten?", antwort: "Absolut. Wir kennen die typischen Nachkriegsbauten in Ober- und Untergiesing seit vielen Jahren und wissen genau, welche Lösungen hier am besten funktionieren." }
    ],
    plz: ["81539", "81541", "81543", "81547"]
  },
  trudering: {
    name: "Trudering",
    slug: "trudering",
    anfahrt: "25 Minuten",
    beschreibung: "Trudering-Riem ist geprägt von Einfamilienhäusern und der modernen Messestadt. Hier realisieren wir viele Wärmepumpen-Projekte und Komplettsanierungen.",
    detailText: "Trudering-Riem vereint das traditionelle Einfamilienhaus-Viertel Alt-Trudering mit der modernen Messestadt Riem. In den älteren Siedlungsgebieten stehen viele Heizungsanlagen vor dem Austausch, während in der Messestadt modernste Haustechnik mit Smart-Home-Integration gefragt ist.",
    typischeProbleme: [
      "Alte Ölheizungen in Siedlungshäusern gegen Wärmepumpe tauschen",
      "Regenwassernutzungsanlagen für Gartenbewässerung installieren",
      "Fußbodenheizung in Messestadt-Neubauten regulieren",
      "Solarthermie auf Einfamilienhaus-Dächern nachrüsten"
    ],
    besonderheiten: [
      "Wärmepumpen-Spezialist",
      "Neubau Messestadt",
      "Einfamilienhaus-Sanierung"
    ],
    nachbarStadtteile: [
      { name: "Bogenhausen", slug: "bogenhausen" },
      { name: "Giesing", slug: "giesing" },
      { name: "Haidhausen", slug: "haidhausen" }
    ],
    faqs: [
      { frage: "Lohnt sich eine Wärmepumpe für mein Haus in Trudering?", antwort: "In den meisten Truderinger Einfamilienhäusern ist eine Wärmepumpe wirtschaftlich sinnvoll. Wir erstellen eine kostenlose Ersteinschätzung und berechnen die Heizlast für Ihr Haus." },
      { frage: "Betreuen Sie auch die Neubauten in der Messestadt Riem?", antwort: "Ja, wir sind in der Messestadt Riem aktiv und kennen die modernen Haustechniksysteme der Neubauten bestens – von Smart-Home-Heizungssteuerung bis zu Lüftungsanlagen." },
      { frage: "Können Sie Solarthermie auf meinem Truderinger Dach nachrüsten?", antwort: "Ja, wir planen und installieren Solarthermie-Anlagen zur Warmwasserbereitung und Heizungsunterstützung auf Einfamilienhäusern in Trudering – inklusive Förderberatung." }
    ],
    plz: ["81825", "81827", "81829"]
  },
  milbertshofen: {
    name: "Milbertshofen",
    slug: "milbertshofen",
    anfahrt: "20 Minuten",
    beschreibung: "Milbertshofen-Am Hart liegt im Münchner Norden und ist gut erreichbar. Wir betreuen hier viele Wohnanlagen und Gewerbeobjekte professionell.",
    detailText: "Milbertshofen-Am Hart ist durch die Nähe zum BMW-Werk und zum Olympiapark industriell und urban geprägt. Neben klassischen Wohnanlagen betreuen wir hier auch Gewerbeobjekte mit speziellen Anforderungen an Sanitär- und Heizungstechnik.",
    typischeProbleme: [
      "Gewerbliche Sanitäranlagen warten und reparieren",
      "Heizungsanlagen in großen Wohnblöcken optimieren",
      "Rückstausicherung bei Starkregen in Kellergeschossen",
      "Veraltete Rohrleitungen in 1970er-Wohnbauten sanieren"
    ],
    besonderheiten: [
      "Gewerbe & Wohnungen",
      "BMW-Werksumfeld",
      "Schnelle Anfahrt Norden"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Moosach", slug: "moosach" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ],
    faqs: [
      { frage: "Betreuen Sie auch Gewerbeobjekte in Milbertshofen?", antwort: "Ja, wir sind erfahren mit gewerblichen Sanitär- und Heizungsanlagen in Milbertshofen. Von Bürogebäuden bis zu Werkstätten – wir liefern professionelle Lösungen." },
      { frage: "Wie schnell sind Sie bei einem Notfall in Milbertshofen?", antwort: "Bei einem Notfall in Milbertshofen sind wir durchschnittlich in 20 Minuten vor Ort. Unsere Notdienst-Fahrzeuge sind rund um die Uhr im Münchner Norden einsatzbereit." },
      { frage: "Bieten Sie Rückstausicherung für Keller in Milbertshofen an?", antwort: "Ja, gerade in Milbertshofen ist Rückstausicherung wichtig. Wir installieren normgerechte Rückstauklappen und Hebeanlagen zum Schutz vor Überflutung bei Starkregen." }
    ],
    plz: ["80807", "80809", "80937", "80939"]
  },
  moosach: {
    name: "Moosach",
    slug: "moosach",
    anfahrt: "22 Minuten",
    beschreibung: "Moosach verbindet dörflichen Charakter mit urbanem Wachstum. Vom Altdorf bis zu modernen Neubauten - wir sind Ihr zuverlässiger Partner für alle Installationen.",
    detailText: "Im alten Moosacher Dorfkern stehen noch Gebäude mit historischen Installationen, während rundherum moderne Wohnquartiere entstehen. Diese Bandbreite verlangt sowohl Erfahrung mit Altbestand als auch Kompetenz in aktueller Gebäudetechnik und energieeffizienten Heizsystemen.",
    typischeProbleme: [
      "Historische Leitungen im Altdorf Moosach sanieren",
      "Heizungssysteme in Neubauwohnungen einregulieren",
      "Wasserenthärtungsanlagen für kalkhaltiges Münchner Wasser",
      "Regenwasser-Versickerung bei Neubaugrundstücken planen"
    ],
    besonderheiten: [
      "Alt-Moosach Erfahrung",
      "Neubaugebiete betreut",
      "Familienfreundlicher Service"
    ],
    nachbarStadtteile: [
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Neuhausen", slug: "neuhausen" },
      { name: "Pasing", slug: "pasing" }
    ],
    faqs: [
      { frage: "Kennen Sie sich mit den alten Häusern in Alt-Moosach aus?", antwort: "Ja, wir kennen die historischen Gebäude in Alt-Moosach und deren spezielle Installationen sehr gut. Behutsame Sanierung unter Berücksichtigung der Bausubstanz ist unsere Stärke." },
      { frage: "Installieren Sie Wasserenthärtungsanlagen in Moosach?", antwort: "Ja, aufgrund des sehr kalkhaltigen Münchner Wassers installieren wir regelmäßig Enthärtungsanlagen in Moosach. Das schont Ihre Leitungen und Geräte und spart langfristig Kosten." },
      { frage: "Betreuen Sie die neuen Wohngebiete in Moosach?", antwort: "Ja, wir sind in den neuen Wohnquartieren rund um Moosach aktiv und installieren moderne Haustechnik vom Ersteinzug an – inklusive Fußbodenheizung und kontrollierter Wohnraumlüftung." }
    ],
    plz: ["80992", "80993", "80997"]
  },
  nord: {
    name: "Nord",
    slug: "muenchen-nord",
    anfahrt: "20 Minuten",
    beschreibung: "München Nord umfasst die Stadtteile Milbertshofen, Am Hart, Freimann und Schwabing-Nord. Wir sind Ihr zuverlässiger Partner für Sanitär und Heizung im gesamten Münchner Norden.",
    detailText: "Der Münchner Norden ist ein vielseitiger Großraum mit Wohnsiedlungen, Gewerbegebieten und neuen Stadtquartieren wie dem Domagkpark. Die Anforderungen reichen von der Sanierung in Nachkriegsbauten bis zur Installation moderner Haustechnik in Neubauprojekten.",
    typischeProbleme: [
      "Heizungsanlagen in großen Wohnsiedlungen warten",
      "Sanitärinstallationen in Gewerbeparks betreuen",
      "Fernwärmeanschlüsse in neuen Stadtquartieren einrichten",
      "Entwässerungsprobleme bei flachem Gelände lösen"
    ],
    besonderheiten: [
      "BMW-Werksumfeld betreut",
      "Olympiapark-Nähe",
      "Schnelle Anfahrt Nordseite"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Moosach", slug: "moosach" }
    ],
    faqs: [
      { frage: "Decken Sie den gesamten Münchner Norden ab?", antwort: "Ja, wir betreuen den gesamten Münchner Norden von Schwabing-Nord über Milbertshofen und Am Hart bis Freimann und Feldmoching. Unsere Einsatzfahrzeuge sind optimal im Norden positioniert." },
      { frage: "Betreuen Sie auch die Neubaugebiete im Münchner Norden?", antwort: "Ja, wir sind in allen neuen Wohnquartieren im Münchner Norden aktiv – vom Domagkpark bis zu den Neubauprojekten entlang der Ingolstädter Straße." }
    ],
    plz: ["80807", "80809", "80937", "80939", "80992"]
  },
  sued: {
    name: "Süd",
    slug: "muenchen-sued",
    anfahrt: "18 Minuten",
    beschreibung: "München Süd mit Sendling, Giesing und Thalkirchen bietet eine Mischung aus Altbau und modernen Wohnanlagen. Wir kennen die Besonderheiten dieser traditionellen Münchner Viertel.",
    detailText: "München Süd ist stark von der Isar und dem Tierpark Hellabrunn geprägt. Die traditionellen Wohnviertel Sendling und Giesing haben einen hohen Altbauanteil mit typischen Herausforderungen wie veralteten Steigleitungen und Heizungsanlagen, die dringend modernisiert werden müssen.",
    typischeProbleme: [
      "Hochwasserschutz für Gebäude in Isar-Nähe",
      "Veraltete Heizkessel in Altbauten südlich der Isar austauschen",
      "Feuchte Keller in Isarnähe abdichten",
      "Alte Bleirohre in traditionellen Wohnvierteln ersetzen"
    ],
    besonderheiten: [
      "Isar-Nähe",
      "Altbau-Spezialist",
      "Tierpark-Umfeld betreut"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Giesing", slug: "giesing" },
      { name: "Haidhausen", slug: "haidhausen" }
    ],
    faqs: [
      { frage: "Gibt es besondere Herausforderungen bei Sanitärarbeiten im Münchner Süden?", antwort: "Ja, die Isar-Nähe bringt einen erhöhten Grundwasserspiegel mit sich, was bei Kellersanierungen und Entwässerungsarbeiten berücksichtigt werden muss. Wir kennen diese lokalen Gegebenheiten bestens." },
      { frage: "Betreuen Sie alle Stadtteile im Münchner Süden?", antwort: "Ja, wir decken den gesamten Münchner Süden ab – von Sendling über Thalkirchen bis Giesing und Solln. Unsere Techniker sind täglich in diesen Vierteln unterwegs." }
    ],
    plz: ["81369", "81371", "81539", "81541"]
  },
  west: {
    name: "West",
    slug: "muenchen-west",
    anfahrt: "22 Minuten",
    beschreibung: "München West mit Pasing, Laim und Aubing ist geprägt von Einfamilienhäusern und grünen Wohnlagen. Hier realisieren wir viele Heizungsmodernisierungen und Badsanierungen.",
    detailText: "Der Münchner Westen ist das Zuhause vieler Familien in Einfamilien- und Reihenhäusern mit großen Gärten. Heizungsmodernisierungen mit Wärmepumpe und Solarthermie sind hier besonders gefragt, da die Häuser ideale Voraussetzungen für erneuerbare Energien bieten.",
    typischeProbleme: [
      "Ölheizungen in freistehenden Häusern auf Wärmepumpe umrüsten",
      "Badsanierung in Reihenhäusern mit begrenztem Platz",
      "Außenwasserhähne und Gartenleitungen frostsicher machen",
      "Alte Heizkörper in Siedlungshäusern der 1960er erneuern"
    ],
    besonderheiten: [
      "Einfamilienhaus-Experten",
      "Große Gärten & Villen",
      "Fördermittelberatung"
    ],
    nachbarStadtteile: [
      { name: "Pasing", slug: "pasing" },
      { name: "Laim", slug: "laim" },
      { name: "Neuhausen", slug: "neuhausen" }
    ],
    faqs: [
      { frage: "Welche Heizung empfehlen Sie für ein Einfamilienhaus im Münchner Westen?", antwort: "Für die meisten Einfamilienhäuser im Münchner Westen empfehlen wir eine Luft-Wasser-Wärmepumpe, oft kombiniert mit Photovoltaik. Wir beraten individuell und übernehmen die Förderanträge." },
      { frage: "Wie schnell sind Sie bei einem Notfall im Münchner Westen?", antwort: "Bei einem Notfall im Münchner Westen sind wir in ca. 22-30 Minuten bei Ihnen. Im Großraum Pasing, Laim und Aubing haben wir regelmäßig Einsatzfahrzeuge vor Ort." }
    ],
    plz: ["81241", "81243", "80686", "80687"]
  },
  ost: {
    name: "Ost",
    slug: "muenchen-ost",
    anfahrt: "20 Minuten",
    beschreibung: "München Ost umfasst Bogenhausen, Trudering-Riem und Berg am Laim. Von der Messestadt bis zu den noblen Villenvierteln - wir bieten passgenaue Lösungen für jede Anforderung.",
    detailText: "München Ost vereint die gehobenen Villenlagen von Bogenhausen mit der modernen Messestadt Riem und dem lebendigen Berg am Laim. Die Anforderungen reichen von Luxus-Badsanierungen in Altvillen bis zur Wartung moderner Haustechnik in Neubauwohnungen.",
    typischeProbleme: [
      "Luxus-Bäder in Bogenhausener Villen sanieren",
      "Smart-Home-Heizungssteuerung in Messestadt-Neubauten warten",
      "Warmwasserzirkulation in großflächigen Villen optimieren",
      "Fußbodenheizung in Neubauten einregulieren"
    ],
    besonderheiten: [
      "Messestadt betreut",
      "Villen Bogenhausen",
      "Wärmepumpen-Spezialist"
    ],
    nachbarStadtteile: [
      { name: "Bogenhausen", slug: "bogenhausen" },
      { name: "Trudering", slug: "trudering" },
      { name: "Haidhausen", slug: "haidhausen" }
    ],
    faqs: [
      { frage: "Kennen Sie sich mit den verschiedenen Bautypen im Münchner Osten aus?", antwort: "Ja, wir kennen die gesamte Bandbreite – von historischen Villen in Bogenhausen über Reihenhäuser in Alt-Trudering bis zu modernen Messestadt-Wohnungen. Für jeden Bautyp haben wir die passende Lösung." },
      { frage: "Bieten Sie auch Smart-Home-Heizungssteuerung im Münchner Osten an?", antwort: "Ja, wir installieren und warten Smart-Home-Heizungssteuerungen in den modernen Wohnungen der Messestadt Riem und anderen Neubauprojekten im Münchner Osten." }
    ],
    plz: ["81675", "81677", "81825", "81827"]
  },
  nymphenburg: {
    name: "Nymphenburg",
    slug: "nymphenburg",
    anfahrt: "18 Minuten",
    beschreibung: "Nymphenburg ist eines der exklusivsten Wohnviertel Münchens. Rund um das berühmte Schloss betreuen wir historische Villen und moderne Residenzen mit höchsten Ansprüchen.",
    detailText: "Das Schloss Nymphenburg und sein weitläufiger Park prägen dieses exklusive Wohnviertel mit herrschaftlichen Villen und gepflegten Residenzen. Sanitär- und Heizungsarbeiten erfordern hier ein Höchstmaß an Sorgfalt, da viele Immobilien unter Ensembleschutz stehen und hochwertigste Materialien verbaut sind.",
    typischeProbleme: [
      "Ensembleschutz-konforme Sanitärinstallationen durchführen",
      "Hochwertige Regenwasserentwässerung in Parkanlagen instand halten",
      "Historische Heizungssysteme in denkmalgeschützten Villen modernisieren",
      "Exklusive Wellness-Bäder mit Dampfdusche und Whirlpool installieren"
    ],
    besonderheiten: [
      "Schloss-Umfeld betreut",
      "Villen & Residenzen",
      "Premium-Installationen"
    ],
    nachbarStadtteile: [
      { name: "Neuhausen", slug: "neuhausen" },
      { name: "Pasing", slug: "pasing" },
      { name: "Moosach", slug: "moosach" }
    ],
    faqs: [
      { frage: "Arbeiten Sie mit Denkmal- und Ensembleschutz in Nymphenburg?", antwort: "Ja, wir sind erfahren mit Arbeiten unter Ensembleschutz rund um Schloss Nymphenburg. Alle Installationen werden materialgerecht und optisch unauffällig ausgeführt." },
      { frage: "Installieren Sie auch Wellness-Bäder in Nymphenburg?", antwort: "Ja, wir realisieren exklusive Wellness-Bäder mit Dampfdusche, Whirlpool und Regendusche in den großzügigen Villen von Nymphenburg – von der Planung bis zur Fertigstellung." },
      { frage: "Welche Heizungslösung empfehlen Sie für eine Nymphenburger Villa?", antwort: "Für Nymphenburger Villen empfehlen wir häufig eine Hybridlösung aus Wärmepumpe und Gas-Brennwertkessel, die den hohen Wärmebedarf großer Räume zuverlässig deckt." }
    ],
    plz: ["80638", "80639", "80997"]
  },
  perlach: {
    name: "Perlach",
    slug: "perlach",
    anfahrt: "22 Minuten",
    beschreibung: "Perlach und Neuperlach bieten eine Mischung aus Hochhaussiedlungen und Einfamilienhäusern. Wir sind erfahren mit großen Wohnanlagen und individuellen Häusern gleichermaßen.",
    detailText: "Neuperlach ist Deutschlands größte Satellitensiedlung mit Hochhäusern und Wohnblöcken aus den 1960er-70er Jahren, während Alt-Perlach seinen dörflichen Charakter bewahrt hat. Zentrale Heizungsanlagen in den Hochhäusern erfordern spezialisierte Wartung und regelmäßige Legionellenprüfungen.",
    typischeProbleme: [
      "Zentrale Heizungsanlagen in Hochhäusern warten und optimieren",
      "Legionellenprüfung in großen Wohnanlagen durchführen",
      "Sanitärstränge in Hochhäusern etappenweise sanieren",
      "Alte Einrohr-Heizungssysteme auf Zweirohr umrüsten"
    ],
    besonderheiten: [
      "Wohnanlagen betreut",
      "Einfamilienhäuser",
      "Schnelle Verfügbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Giesing", slug: "giesing" },
      { name: "Trudering", slug: "trudering" },
      { name: "Sendling", slug: "sendling" }
    ],
    faqs: [
      { frage: "Können Sie die Heizung in einem Neuperlacher Hochhaus warten?", antwort: "Ja, wir sind spezialisiert auf die Wartung zentraler Heizungsanlagen in den Neuperlacher Wohnhochhäusern. Wir arbeiten mit den Hausverwaltungen zusammen und führen alle vorgeschriebenen Prüfungen durch." },
      { frage: "Führen Sie Legionellenprüfungen in Perlach durch?", antwort: "Ja, wir bieten die vorgeschriebene Legionellenprüfung nach TrinkwV für alle Mehrfamilienhäuser in Perlach an – von der Probeentnahme bis zur Dokumentation und eventuellen Sanierung." },
      { frage: "Betreuen Sie auch die Einfamilienhäuser in Alt-Perlach?", antwort: "Ja, wir betreuen Alt-Perlachs Einfamilienhäuser mit individuellen Lösungen – von der Heizungsmodernisierung bis zur kompletten Badsanierung." }
    ],
    plz: ["81735", "81737", "81739"]
  },
  solln: {
    name: "Solln",
    slug: "solln",
    anfahrt: "20 Minuten",
    beschreibung: "Solln ist ein gehobenes Villenviertel im Münchner Süden. Die grüne Wohnlage mit vielen Einfamilienhäusern erfordert oft umfassende Heizungsmodernisierungen.",
    detailText: "Solln besticht durch seine ruhige, grüne Lage mit großzügigen Villengrundstücken und gepflegten Einfamilienhäusern. Viele Häuser wurden in den 1920er bis 1960er Jahren erbaut und benötigen eine umfassende Erneuerung der Heizungstechnik, oft mit dem Ziel der CO2-neutralen Wärmeversorgung.",
    typischeProbleme: [
      "Alte Ölkessel in Sollner Villen durch Wärmepumpen ersetzen",
      "Fußbodenheizung in Bestandshäusern nachrüsten",
      "Regenwassernutzung für große Gartengrundstücke einrichten",
      "Kaminöfen an bestehende Heizungssysteme anschließen"
    ],
    besonderheiten: [
      "Villenviertel",
      "Heizungsmodernisierung",
      "Große Grundstücke"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Giesing", slug: "giesing" },
      { name: "Perlach", slug: "perlach" }
    ],
    faqs: [
      { frage: "Können Sie meine Ölheizung in Solln gegen eine Wärmepumpe tauschen?", antwort: "Ja, der Austausch von Ölheizungen gegen Wärmepumpen ist unser häufigstes Projekt in Solln. Wir übernehmen alles – von der Heizlastberechnung über die Förderanträge bis zur Installation." },
      { frage: "Bieten Sie Badsanierung für Sollner Villen an?", antwort: "Ja, wir realisieren hochwertige Badsanierungen in Sollner Villen – von der barrierefreien Umgestaltung bis zum Luxus-Spa-Bad mit Naturstein und Regendusche." },
      { frage: "Installieren Sie auch Regenwassernutzung in Solln?", antwort: "Ja, für die großen Gartengrundstücke in Solln installieren wir Regenwassernutzungsanlagen zur Gartenbewässerung und Toilettenspülung – das spart Wasserkosten und schont die Umwelt." }
    ],
    plz: ["81477", "81479"]
  },
  hadern: {
    name: "Hadern",
    slug: "hadern",
    anfahrt: "20 Minuten",
    beschreibung: "Hadern im Südwesten Münchens ist geprägt vom Universitätsklinikum Großhadern. Wir betreuen viele Wohnungen und Häuser in dieser familienfreundlichen Gegend.",
    detailText: "Hadern ist ein ruhiges Wohnviertel im Südwesten Münchens, geprägt vom Klinikum Großhadern und vielen Familiensiedlungen aus den 1960er-80er Jahren. Die typischen Bungalows und Reihenhäuser benötigen häufig eine energetische Sanierung, insbesondere bei Heizung und Warmwasseraufbereitung.",
    typischeProbleme: [
      "Heizungssanierung in 1960er-80er Familienhäusern",
      "Warmwasserbereitung in Bungalows modernisieren",
      "Barrierefreie Bäder für ältere Bewohner umbauen",
      "Alte Nachtspeicheröfen durch effiziente Heizung ersetzen"
    ],
    besonderheiten: [
      "Klinikum-Umfeld",
      "Familienfreundlich",
      "Gute Erreichbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Laim", slug: "laim" },
      { name: "Pasing", slug: "pasing" },
      { name: "Sendling", slug: "sendling" }
    ],
    faqs: [
      { frage: "Bauen Sie auch barrierefreie Bäder in Hadern um?", antwort: "Ja, barrierefreie Badumbauten sind einer unserer Schwerpunkte in Hadern. Wir realisieren bodenebene Duschen, Haltegriffe und unterfahrbare Waschtische – alles nach DIN 18040." },
      { frage: "Können Sie meine Nachtspeicherheizung in Hadern ersetzen?", antwort: "Ja, wir ersetzen alte Nachtspeicherheizungen durch moderne und effiziente Heizsysteme. In Hadern empfehlen wir je nach Gebäudetyp eine Wärmepumpe oder eine Gas-Brennwertheizung." },
      { frage: "Wie schnell sind Sie bei einem Sanitärnotfall in Hadern vor Ort?", antwort: "Bei einem Notfall in Hadern erreichen wir Sie in der Regel innerhalb von 20-25 Minuten. Die gute Anbindung über den Mittleren Ring ermöglicht schnelle Anfahrt." }
    ],
    plz: ["80689", "81375", "81377"]
  },
  allach: {
    name: "Allach-Untermenzing",
    slug: "allach",
    anfahrt: "25 Minuten",
    beschreibung: "Allach-Untermenzing am nordwestlichen Stadtrand bietet ländlichen Charme mit guter Anbindung. Hier sind Wärmepumpen und moderne Heizsysteme besonders gefragt.",
    detailText: "Allach-Untermenzing liegt am nordwestlichen Stadtrand Münchens und hat sich seinen dörflichen Charakter bewahrt. Die vielen Einfamilienhäuser mit eigenen Gärten bieten ideale Voraussetzungen für Wärmepumpen und Solarthermie-Anlagen, die hier zunehmend nachgefragt werden.",
    typischeProbleme: [
      "Erdwärmepumpen für Einfamilienhäuser mit großem Grundstück planen",
      "Alte Ölheizungen mit Erdtank fachgerecht stilllegen und ersetzen",
      "Brunnenwasser-Anschlüsse für Gartenbewässerung warten",
      "Frostschäden an Außenleitungen im Winter beheben"
    ],
    besonderheiten: [
      "Ländlicher Charme",
      "Wärmepumpen-Spezialist",
      "Neubaugebiete"
    ],
    nachbarStadtteile: [
      { name: "Moosach", slug: "moosach" },
      { name: "Pasing", slug: "pasing" },
      { name: "Feldmoching", slug: "feldmoching" }
    ],
    faqs: [
      { frage: "Ist eine Erdwärmepumpe für mein Grundstück in Allach geeignet?", antwort: "Allach bietet mit seinen großen Grundstücken oft ideale Bedingungen für Erdwärmepumpen. Wir prüfen die geologischen Voraussetzungen und erstellen ein individuelles Konzept für Ihr Haus." },
      { frage: "Können Sie meinen alten Öltank in Allach entsorgen?", antwort: "Ja, wir kümmern uns um die fachgerechte Stilllegung und Entsorgung alter Öltanks in Allach – inklusive aller behördlichen Genehmigungen und der Installation eines neuen Heizsystems." },
      { frage: "Bieten Sie Frostschutz für Außenleitungen in Allach an?", antwort: "Ja, wir sichern Außenwasserleitungen und Gartenleitungen in Allach frostfest. Dazu gehören die Installation von Entleerungsventilen und bei Bedarf Rohrbegleitheizungen." }
    ],
    plz: ["80999", "81249"]
  },
  aubing: {
    name: "Aubing-Lochhausen",
    slug: "aubing",
    anfahrt: "28 Minuten",
    beschreibung: "Aubing-Lochhausen-Langwied ist der westlichste Münchner Bezirk. Viele Einfamilienhäuser und Neubaugebiete prägen das Bild - ideal für moderne Haustechnik.",
    detailText: "Als westlichster Bezirk Münchens bietet Aubing-Lochhausen-Langwied viel Platz für Neubaugebiete und großzügige Einfamilienhäuser. In den Neubaugebieten werden modernste Haustechnik-Systeme wie Luft-Wasser-Wärmepumpen mit Photovoltaik-Kopplung standardmäßig installiert.",
    typischeProbleme: [
      "Neuanschlüsse an das öffentliche Kanalnetz für Neubaugebiete",
      "Luft-Wasser-Wärmepumpe mit Photovoltaik kombinieren",
      "Kontrollierte Wohnraumlüftung in Neubauten einregulieren",
      "Altbestand-Heizungen in gewachsenen Siedlungen modernisieren"
    ],
    besonderheiten: [
      "Westlichster Bezirk",
      "Neubaugebiete",
      "Einfamilienhaus-Experten"
    ],
    nachbarStadtteile: [
      { name: "Pasing", slug: "pasing" },
      { name: "Allach", slug: "allach" },
      { name: "Laim", slug: "laim" }
    ],
    faqs: [
      { frage: "Installieren Sie auch Haustechnik in Neubauten in Aubing?", antwort: "Ja, wir sind in den Aubinger Neubaugebieten aktiv und installieren komplette Haustechnik von der Fußbodenheizung über Sanitäranlagen bis zur Wärmepumpe mit Photovoltaik-Kopplung." },
      { frage: "Können Sie die Heizung in meinem älteren Haus in Lochhausen modernisieren?", antwort: "Ja, wir modernisieren Heizungsanlagen in den älteren Siedlungshäusern von Lochhausen und Langwied – inklusive Förderberatung und Antragstellung für die BEG-Förderung." },
      { frage: "Wie lange dauert die Anfahrt nach Aubing?", antwort: "Die Anfahrt nach Aubing dauert ca. 28 Minuten. Bei Notfällen priorisieren wir den Einsatz und sind so schnell wie möglich bei Ihnen im westlichsten Bezirk Münchens." }
    ],
    plz: ["81243", "81245", "81249"]
  },
  feldmoching: {
    name: "Feldmoching-Hasenbergl",
    slug: "feldmoching",
    anfahrt: "25 Minuten",
    beschreibung: "Feldmoching-Hasenbergl im Münchner Norden verbindet städtisches Wohnen mit dörflichem Charakter. Wir betreuen sowohl Wohnanlagen als auch ländliche Anwesen.",
    detailText: "Feldmoching-Hasenbergl ist der nördlichste Bezirk Münchens und bietet einen starken Kontrast zwischen dem ländlichen Alt-Feldmoching mit Bauernhöfen und dem urbanen Hasenbergl mit seinen Wohnblöcken. Diese Vielfalt erfordert ein breites Spektrum an Sanitär- und Heizungskompetenz.",
    typischeProbleme: [
      "Heizungsanlagen in Wohnblöcken des Hasenbergl modernisieren",
      "Wasserversorgung für landwirtschaftliche Anwesen in Feldmoching sicherstellen",
      "Alte Steigleitungen in Sozialwohnungsbauten sanieren",
      "Regenwasserableitung bei ländlichen Grundstücken optimieren"
    ],
    besonderheiten: [
      "Nördlichster Bezirk",
      "Stadt & Land Mix",
      "Wohnanlagen betreut"
    ],
    nachbarStadtteile: [
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Moosach", slug: "moosach" },
      { name: "Allach", slug: "allach" }
    ],
    faqs: [
      { frage: "Betreuen Sie auch ländliche Anwesen in Feldmoching?", antwort: "Ja, wir betreuen auch die landwirtschaftlichen Anwesen und Reiterhöfe in Alt-Feldmoching. Von der Wasserversorgung bis zur Stallheizung – wir haben Erfahrung mit ländlichen Anforderungen." },
      { frage: "Können Sie die Heizung in einem Hasenbergler Wohnblock sanieren?", antwort: "Ja, wir sind erfahren mit den zentralen Heizungsanlagen in den Hasenbergler Wohnblöcken. Wir arbeiten eng mit Hausverwaltungen zusammen und minimieren Einschränkungen für die Bewohner." },
      { frage: "Gibt es spezielle Herausforderungen in Feldmoching?", antwort: "In Feldmoching ist die Mischung aus Stadt und Land besonders: Vom Hochhaus-Wohnblock bis zum Bauernhof mit eigenem Brunnen – wir kennen alle Anforderungen dieses vielseitigen Bezirks." }
    ],
    plz: ["80933", "80935", "80995"]
  },
  thalkirchen: {
    name: "Thalkirchen-Obersendling",
    slug: "thalkirchen",
    anfahrt: "18 Minuten",
    beschreibung: "Thalkirchen-Obersendling liegt idyllisch an der Isar mit Tierpark und Flaucher. Wir kennen die Besonderheiten der Altbauten und modernen Wohnanlagen in diesem beliebten Viertel.",
    detailText: "Thalkirchen und Obersendling liegen idyllisch an der Isar und sind durch den Tierpark Hellabrunn und den Flaucher geprägt. Die Nähe zum Fluss bringt besondere Anforderungen an Kellerabdichtung und Entwässerung mit sich, während der Siemens-Campus in Obersendling auch gewerbliche Sanitäranforderungen stellt.",
    typischeProbleme: [
      "Kellerabdichtung und Drainage bei hohem Grundwasserstand an der Isar",
      "Heizungsanlagen im Siemens-Campus-Umfeld warten",
      "Rückstausicherung gegen Isar-Hochwasser installieren",
      "Mischinstallationen aus Alt- und Neubau in Wohnanlagen koordinieren"
    ],
    besonderheiten: [
      "Isar-Nähe",
      "Tierpark-Umfeld",
      "Altbau & Neubau"
    ],
    nachbarStadtteile: [
      { name: "Sendling", slug: "sendling" },
      { name: "Giesing", slug: "giesing" },
      { name: "Solln", slug: "solln" }
    ],
    faqs: [
      { frage: "Ist mein Keller in Thalkirchen durch Hochwasser gefährdet?", antwort: "In Thalkirchen besteht aufgrund der Isar-Nähe ein erhöhtes Risiko. Wir installieren professionelle Rückstausicherungen und Kellerdrainage-Systeme, um Ihr Eigentum zu schützen." },
      { frage: "Betreuen Sie auch Gewerbeobjekte in Obersendling?", antwort: "Ja, wir betreuen gewerbliche Sanitär- und Heizungsanlagen im Umfeld des Siemens-Campus und entlang der Boschetsrieder Straße in Obersendling." },
      { frage: "Wie schnell können Sie in Thalkirchen sein?", antwort: "Thalkirchen erreichen wir in ca. 18 Minuten. Bei Wasserschäden oder Heizungsausfällen sind unsere Notdienst-Teams sofort einsatzbereit." }
    ],
    plz: ["81379", "81475", "81476"]
  },
  ramersdorf: {
    name: "Ramersdorf-Perlach",
    slug: "ramersdorf",
    anfahrt: "20 Minuten",
    beschreibung: "Ramersdorf-Perlach ist einer der größten Münchner Bezirke. Von der Wohnsiedlung bis zum Einfamilienhaus - wir bieten passgenaue Lösungen für jeden Bedarf.",
    detailText: "Ramersdorf-Perlach ist einer der bevölkerungsreichsten Bezirke Münchens mit einer großen Vielfalt an Bautypen. Die Wallfahrtskirche Maria Ramersdorf steht für die historische Seite, während moderne Wohnquartiere an der Ständlerstraße die Zukunft des Bezirks repräsentieren.",
    typischeProbleme: [
      "Heizungsanlagen in unterschiedlichen Gebäudetypen anpassen",
      "Sanitärstränge in 1970er-Wohnblöcken komplett erneuern",
      "Wärmepumpen für die Neubaugebiete an der Ständlerstraße planen",
      "Altbau-Bäder in Ramersdorfer Siedlungshäusern sanieren"
    ],
    besonderheiten: [
      "Größter Bezirk",
      "Vielfältige Bebauung",
      "Schnelle Verfügbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Giesing", slug: "giesing" },
      { name: "Trudering", slug: "trudering" },
      { name: "Perlach", slug: "perlach" }
    ],
    faqs: [
      { frage: "Können Sie verschiedene Gebäudetypen in Ramersdorf betreuen?", antwort: "Ja, genau das ist unsere Stärke in Ramersdorf-Perlach. Ob 1970er Wohnblock, Einfamilienhaus oder Neubau – wir haben für jeden Gebäudetyp die passende Lösung." },
      { frage: "Bieten Sie Wartungsverträge für Wohnanlagen in Ramersdorf an?", antwort: "Ja, wir bieten maßgeschneiderte Wartungsverträge für die vielen Wohnanlagen in Ramersdorf-Perlach an – regelmäßige Heizungswartung, Legionellenprüfung und Notdienst inklusive." },
      { frage: "Wie schnell sind Sie bei einem Notfall in Ramersdorf?", antwort: "Bei einem Notfall in Ramersdorf-Perlach sind wir in durchschnittlich 20 Minuten bei Ihnen. Als einer der größten Bezirke haben wir hier regelmäßig Techniker im Einsatz." }
    ],
    plz: ["81669", "81671", "81735", "81737"]
  },
  berg_am_laim: {
    name: "Berg am Laim",
    slug: "berg-am-laim",
    anfahrt: "18 Minuten",
    beschreibung: "Berg am Laim verbindet traditionelle Münchner Wohnkultur mit moderner Entwicklung. Wir betreuen sowohl historische Gebäude als auch neue Wohnprojekte.",
    detailText: "Berg am Laim entwickelt sich durch zahlreiche Neubauprojekte entlang der Baumkirchner Straße rasant weiter. Gleichzeitig gibt es noch das alte Ortszentrum mit der Barockkirche und traditionellen Wohnhäusern, die eine schonende Modernisierung der Sanitär- und Heizungstechnik benötigen.",
    typischeProbleme: [
      "Haustechnik in Neubauprojekten an der Baumkirchner Straße installieren",
      "Bestands-Heizungen in älteren Mietwohnungen optimieren",
      "Trinkwasserleitungen in alten Wohnbauten auf Kupfer umstellen",
      "Entwässerung bei Neubauten mit Tiefgarage planen"
    ],
    besonderheiten: [
      "Zentrale Ostlage",
      "Tradition & Moderne",
      "Gute Erreichbarkeit"
    ],
    nachbarStadtteile: [
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Trudering", slug: "trudering" },
      { name: "Ramersdorf", slug: "ramersdorf" }
    ],
    faqs: [
      { frage: "Betreuen Sie die Neubauprojekte in Berg am Laim?", antwort: "Ja, wir sind bei vielen Neubauprojekten in Berg am Laim aktiv – besonders im Bereich Baumkirchner Straße. Von der Fußbodenheizung bis zur zentralen Warmwasserversorgung installieren wir modernste Haustechnik." },
      { frage: "Können Sie meine alten Wasserleitungen in Berg am Laim erneuern?", antwort: "Ja, wir erneuern alte Wasserleitungen in Berg am Laimer Bestandsbauten und stellen auf moderne Kupfer- oder Edelstahlleitungen um – sauber und termingerecht." },
      { frage: "Wie gut ist Berg am Laim für Sie erreichbar?", antwort: "Berg am Laim liegt zentral im Münchner Osten und ist für uns in ca. 18 Minuten erreichbar. Die gute Anbindung über die Rosenheimer Straße ermöglicht schnelle Einsätze." }
    ],
    plz: ["81671", "81673", "81677"]
  },
  schwanthalerhoehe: {
    name: "Schwanthalerhöhe",
    slug: "schwanthalerhoehe",
    anfahrt: "12 Minuten",
    beschreibung: "Die Schwanthalerhöhe liegt zentral zwischen Theresienwiese und Westend. Wir sind spezialisiert auf die Altbauten und Gewerbeimmobilien dieses lebendigen Viertels.",
    detailText: "Die Schwanthalerhöhe mit dem Westend und der Theresienwiese ist ein dicht bebautes Innenstadtviertel mit vielen Gründerzeit-Altbauten und Gewerbeimmobilien. Während des Oktoberfests steigen die Notdienst-Anfragen sprunghaft an – verstopfte Abflüsse und überlastete Sanitäranlagen sind dann keine Seltenheit.",
    typischeProbleme: [
      "Verstopfte Abflüsse während des Oktoberfests in Gastro-Betrieben",
      "Gewerbe-Sanitäranlagen in Restaurants und Büros warten",
      "Heizungsrohre in Gründerzeit-Altbauten mit hohen Decken sanieren",
      "Wasserdruckprobleme in oberen Etagen der Altbauten lösen"
    ],
    besonderheiten: [
      "Theresienwiese-Nähe",
      "Zentrale Lage",
      "Altbau-Spezialist"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Sendling", slug: "sendling" },
      { name: "Laim", slug: "laim" }
    ],
    faqs: [
      { frage: "Gibt es während des Oktoberfests mehr Sanitärprobleme auf der Schwanthalerhöhe?", antwort: "Ja, während des Oktoberfests steigen die Anfragen deutlich – besonders verstopfte Abflüsse in Gastronomiebetrieben. Wir sind in dieser Zeit mit zusätzlichen Teams im Westend und rund um die Theresienwiese unterwegs." },
      { frage: "Betreuen Sie auch Gewerbeobjekte auf der Schwanthalerhöhe?", antwort: "Ja, wir betreuen zahlreiche Gastronomiebetriebe, Büros und Einzelhandelsgeschäfte auf der Schwanthalerhöhe mit regelmäßiger Sanitär- und Heizungswartung." },
      { frage: "Wie schnell sind Sie auf der Schwanthalerhöhe?", antwort: "Dank der zentralen Lage sind wir auf der Schwanthalerhöhe in nur 12-15 Minuten vor Ort – eine der schnellsten Anfahrtszeiten in ganz München." }
    ],
    plz: ["80339", "80336", "80337"]
  },
  au: {
    name: "Au-Haidhausen",
    slug: "au",
    anfahrt: "15 Minuten",
    beschreibung: "Die Au und Haidhausen gehören zu den beliebtesten Münchner Vierteln. Historische Altbauten und eine lebendige Atmosphäre prägen diesen besonderen Stadtteil.",
    detailText: "Die Au war einst das Handwerkerviertel Münchens und die Herbergshäuser erinnern noch heute an diese Tradition. Die historischen Gebäude entlang der Isar stellen besondere Anforderungen an Sanitärfachkräfte – enge Treppenhäuser, verwinkelte Leitungsführungen und denkmalgeschützte Fassaden sind hier Alltag.",
    typischeProbleme: [
      "Verwinkelte Leitungsführungen in historischen Herbergshäusern",
      "Heizungstechnik in engen Altbau-Kellern der Au modernisieren",
      "Hochwasserschutz für Gebäude direkt an der Isar",
      "Abflussrohre in historischen Gebäuden mit begrenztem Zugang sanieren"
    ],
    besonderheiten: [
      "Beliebtes Szeneviertel",
      "Altbau-Experten",
      "Isar-Nähe"
    ],
    nachbarStadtteile: [
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Giesing", slug: "giesing" },
      { name: "Maxvorstadt", slug: "maxvorstadt" }
    ],
    faqs: [
      { frage: "Kennen Sie sich mit den historischen Herbergshäusern in der Au aus?", antwort: "Ja, wir kennen die besonderen Herbergshäuser der Au bestens. Die engen Treppenhäuser und verwinkelten Leitungsverläufe erfordern Erfahrung und spezielles Werkzeug – beides bringen wir mit." },
      { frage: "Bieten Sie Hochwasserschutz für Gebäude an der Isar in der Au?", antwort: "Ja, wir installieren Rückstausicherungen, Hebeanlagen und Kellerdrainage für Isar-nahe Gebäude in der Au. Gerade nach den Hochwasserereignissen der letzten Jahre ist Vorsorge wichtig." },
      { frage: "Was kostet ein Sanitär-Notdienst in der Au?", antwort: "Unsere Notdienst-Pauschale für die Au beginnt ab 89 Euro. Der genaue Preis hängt vom Umfang der Arbeit ab und wird Ihnen vor Arbeitsbeginn transparent mitgeteilt." }
    ],
    plz: ["81541", "81543", "81667"]
  },
  lehel: {
    name: "Lehel",
    slug: "lehel",
    anfahrt: "12 Minuten",
    beschreibung: "Das Lehel ist eines der ältesten Münchner Viertel mit exklusiven Altbauwohnungen. Wir bieten behutsame Modernisierung bei Erhalt des historischen Charakters.",
    detailText: "Das Lehel zwischen Englischem Garten und Isar gehört zu den exklusivsten und ältesten Wohnlagen Münchens. Die prachtvollen Altbauwohnungen mit Stuckdecken und Parkettböden erfordern höchste handwerkliche Präzision, um bei Sanitär- und Heizungsarbeiten die wertvolle Bausubstanz zu schützen.",
    typischeProbleme: [
      "Sanitärarbeiten unter Stuckdecken und Parkettböden ohne Beschädigung",
      "Heizungsrohre in repräsentativen Altbauwohnungen verdeckt verlegen",
      "Exklusive Armaturen in denkmalgeschützten Bädern einbauen",
      "Wasserleitungen in Gebäuden nahe dem Englischen Garten erneuern"
    ],
    besonderheiten: [
      "Exklusives Altstadtviertel",
      "Historische Substanz",
      "Premium-Service"
    ],
    nachbarStadtteile: [
      { name: "Maxvorstadt", slug: "maxvorstadt" },
      { name: "Haidhausen", slug: "haidhausen" },
      { name: "Schwabing", slug: "schwabing" }
    ],
    faqs: [
      { frage: "Können Sie Sanitärarbeiten durchführen, ohne Stuck im Lehel zu beschädigen?", antwort: "Ja, wir arbeiten mit speziellen Techniken, um Stuckdecken und historische Böden zu schützen. Bei Bedarf stimmen wir uns mit Restauratoren ab, um die wertvolle Bausubstanz im Lehel zu erhalten." },
      { frage: "Installieren Sie auch unsichtbare Heizungslösungen im Lehel?", antwort: "Ja, wir verlegen Heizungsrohre verdeckt in Wänden und Böden und setzen auf Flächenheizungen oder Konvektoren in Bodenkanälen, um den ästhetischen Charakter der Leheler Altbauwohnungen nicht zu beeinträchtigen." },
      { frage: "Wie schnell können Sie im Lehel sein?", antwort: "Das Lehel liegt so zentral, dass wir bei einem Notfall in nur 12-15 Minuten vor Ort sind – die kürzeste Anfahrtszeit im gesamten Münchner Stadtgebiet." }
    ],
    plz: ["80538", "80539"]
  },
  freimann: {
    name: "Freimann",
    slug: "freimann",
    anfahrt: "22 Minuten",
    beschreibung: "Freimann im Münchner Norden bietet eine Mischung aus Wohngebieten und Gewerbe. Die Allianz Arena und neue Wohnprojekte prägen diesen dynamischen Bezirk.",
    detailText: "Freimann entwickelt sich mit dem Bayernkaserne-Neubaugebiet und dem Wohnquartier an der Heidemannstraße rasant. Neben den modernen Neubauten mit Fernwärmeanschluss gibt es in Alt-Freimann noch ältere Siedlungen mit individuellen Heizungsanlagen, die modernisiert werden müssen.",
    typischeProbleme: [
      "Fernwärme-Übergabestationen in Neubauprojekten installieren",
      "Alte Heizungsanlagen in Alt-Freimann auf moderne Technik umstellen",
      "Sanitärinstallationen für neue Großwohnprojekte koordinieren",
      "Trinkwasserhygiene in neu errichteten Mehrfamilienhäusern sicherstellen"
    ],
    besonderheiten: [
      "Allianz Arena Nähe",
      "Neue Wohnprojekte",
      "Gewerbe & Wohnen"
    ],
    nachbarStadtteile: [
      { name: "Schwabing", slug: "schwabing" },
      { name: "Milbertshofen", slug: "milbertshofen" },
      { name: "Bogenhausen", slug: "bogenhausen" }
    ],
    faqs: [
      { frage: "Betreuen Sie die Neubauprojekte in Freimann?", antwort: "Ja, wir sind bei mehreren Großprojekten in Freimann aktiv – vom Bayernkaserne-Quartier bis zu den Neubauten an der Heidemannstraße. Wir installieren modernste Sanitär- und Heiztechnik." },
      { frage: "Können Sie Fernwärme-Übergabestationen in Freimann warten?", antwort: "Ja, wir warten und reparieren Fernwärme-Übergabestationen in den neuen Freimanner Wohnquartieren. Regelmäßige Wartung sichert die optimale Funktion und Energieeffizienz." },
      { frage: "Gibt es besondere Herausforderungen in Freimann?", antwort: "Freimann ist durch den schnellen Wandel geprägt: Altbestand trifft auf Neubau. Wir kennen beide Welten und bieten passende Lösungen – von der Altbausanierung bis zur High-Tech-Installation." }
    ],
    plz: ["80805", "80807", "80939"]
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
  const heroSrc = useHeroImage("hero_stadtteil");
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
        ogImageAlt="Sanitär Heizung Notdienst München Stadtteil lokal - Klempner Installateur in Ihrer Nähe"
        faqSchema={data.faqs.map(faq => ({ question: faq.frage, answer: faq.antwort }))}
      />
      <Header />
      
      <main id="main-content" className="flex-1">
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: heroSrc ? `url(${heroSrc})` : undefined, backgroundColor: '#1a1a1a' }}
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
              AquaPro 24 Sanitär & Heizung München {data.name}: Alle Leistungen im Überblick
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
                  AquaPro 24 Klempner München {data.name}: Warum Kunden uns empfehlen
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

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              Sanitär & Heizung in {data.name}: Was Sie wissen sollten
            </h2>
            <p className="text-muted-foreground leading-relaxed mb-6" data-testid="text-stadtteil-detail">
              {data.detailText}
            </p>
            
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <h3 className="text-lg font-semibold mb-3">Typische Probleme in {data.name}</h3>
                <ul className="space-y-2">
                  {data.typischeProbleme.map((problem, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0 mt-1" />
                      <span className="text-sm">{problem}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="text-lg font-semibold mb-3">Unser Service für {data.name}</h3>
                <ul className="space-y-2 text-sm">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Kostenlose Erstberatung & Anfahrt in {data.anfahrt}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Festpreise für alle Arbeiten in {data.name}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span>Wir betreuen PLZ-Gebiete: {data.plz.join(', ')}</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                    <span><Link href="/foerderung" className="text-primary underline">BAFA/KfW-Förderberatung</Link> für Heizungstausch</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl md:text-3xl font-bold mb-6">
              Häufige Fragen: Sanitär & Heizung in {data.name}
            </h2>
            <div className="space-y-4">
              {data.faqs.map((faq, i) => (
                <Card key={i}>
                  <CardContent className="p-5">
                    <h3 className="font-semibold mb-2" data-testid={`text-faq-frage-${i}`}>{faq.frage}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed" data-testid={`text-faq-antwort-${i}`}>{faq.antwort}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            <div className="mt-6 text-center">
              <p className="text-sm text-muted-foreground mb-3">Weitere Fragen? Alle Antworten finden Sie in unserer FAQ-Seite.</p>
              <Button variant="outline" asChild>
                <Link href="/faq" data-testid="link-faq-stadtteil">Alle häufigen Fragen ansehen</Link>
              </Button>
            </div>
          </div>
        </section>

        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-bold mb-4">Unsere Leistungen in {data.name}</h2>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
              <Link href="/sanitaer" data-testid="link-sanitaer-stadtteil">
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Wrench className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">Sanitär-Service {data.name}</span>
                      <p className="text-xs text-muted-foreground">Rohrreinigung, Armaturen, WC ab 81€</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/heizung" data-testid="link-heizung-stadtteil">
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Flame className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">Heizung {data.name}</span>
                      <p className="text-xs text-muted-foreground">Wartung, Reparatur, Austausch</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/bad" data-testid="link-bad-stadtteil">
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Bath className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">Badsanierung {data.name}</span>
                      <p className="text-xs text-muted-foreground">Komplettsanierung aus einer Hand</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/waermepumpe" data-testid="link-waermepumpe-stadtteil">
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Zap className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">Wärmepumpe {data.name}</span>
                      <p className="text-xs text-muted-foreground">Bis 70% BAFA-Förderung</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/notdienst-muenchen" data-testid="link-notdienst-stadtteil">
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-3 flex items-center gap-2">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">24h Notdienst {data.name}</span>
                      <p className="text-xs text-muted-foreground">Sofort-Hilfe in {data.anfahrt}</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
              <Link href="/kontakt" data-testid="link-kontakt-stadtteil">
                <Card className="hover-elevate cursor-pointer">
                  <CardContent className="p-3 flex items-center gap-2">
                    <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                    <div>
                      <span className="font-medium">Kostenlose Beratung</span>
                      <p className="text-xs text-muted-foreground">Jetzt unverbindlich anfragen</p>
                    </div>
                  </CardContent>
                </Card>
              </Link>
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
    </div>
  );
}

export { STADTTEILE };
