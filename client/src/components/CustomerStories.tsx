import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Quote, Star, Clock, CheckCircle, Heart } from "lucide-react";

interface CustomerStory {
  name: string;
  location: string;
  problem: string;
  emotion: string;
  solution: string;
  result: string;
  quote: string;
  timeframe: string;
  savings?: string;
}

interface CustomerStoriesProps {
  title?: string;
  subtitle?: string;
  stories: CustomerStory[];
}

export default function CustomerStories({
  title = "So haben wir anderen Münchnern geholfen",
  subtitle = "Echte Geschichten von echten Kunden - vielleicht erkennen Sie sich wieder?",
  stories
}: CustomerStoriesProps) {
  return (
    <section className="py-10 md:py-12 bg-muted/30" data-testid="section-customer-stories">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">{subtitle}</p>
        </div>

        <div className="space-y-8">
          {stories.map((story, index) => (
            <Card key={index} className="overflow-visible transition-all duration-300 hover:shadow-xl hover:-translate-y-1" data-testid={`story-card-${index}`}>
              <CardContent className="p-6 md:p-8">
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="md:col-span-2 space-y-4">
                    <div className="flex items-center gap-3 mb-4">
                      <Avatar>
                        <AvatarFallback className="bg-secondary/20 text-secondary font-semibold">
                          {story.name.split(' ').map(n => n[0]).join('')}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-semibold">{story.name}</div>
                        <div className="text-sm text-muted-foreground">{story.location}</div>
                      </div>
                      <div className="ml-auto flex gap-0.5">
                        {[...Array(5)].map((_, i) => (
                          <Star key={i} className="w-4 h-4 fill-yellow-400 text-yellow-400" />
                        ))}
                      </div>
                    </div>

                    <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-4 border border-red-200 dark:border-red-900/30">
                      <h4 className="font-semibold text-red-800 dark:text-red-300 text-sm mb-2">Das Problem:</h4>
                      <p className="text-sm text-red-700 dark:text-red-400">{story.problem}</p>
                      <p className="text-sm text-red-600 dark:text-red-500 italic mt-2">&quot;{story.emotion}&quot;</p>
                    </div>

                    <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-4 border border-green-200 dark:border-green-900/30">
                      <h4 className="font-semibold text-green-800 dark:text-green-300 text-sm mb-2">Unsere Lösung:</h4>
                      <p className="text-sm text-green-700 dark:text-green-400">{story.solution}</p>
                    </div>

                    <div className="bg-accent/10 rounded-lg p-4 border border-accent/20">
                      <h4 className="font-semibold text-accent-foreground text-sm mb-2 flex items-center gap-2">
                        <Heart className="w-4 h-4 text-accent" />
                        Das Ergebnis:
                      </h4>
                      <p className="text-sm">{story.result}</p>
                    </div>
                  </div>

                  <div className="flex flex-col justify-between">
                    <div className="bg-secondary/5 rounded-lg p-4 border border-secondary/20 mb-4">
                      <Quote className="w-6 h-6 text-secondary/40 mb-2" />
                      <p className="text-sm italic">&quot;{story.quote}&quot;</p>
                      <p className="text-xs text-muted-foreground mt-2">- {story.name}</p>
                    </div>

                    <div className="space-y-3">
                      <div className="flex items-center gap-2 text-sm">
                        <Clock className="w-4 h-4 text-secondary" />
                        <span>{story.timeframe}</span>
                      </div>
                      {story.savings && (
                        <div className="flex items-center gap-2 text-sm">
                          <CheckCircle className="w-4 h-4 text-accent" />
                          <span>{story.savings}</span>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}

export const sanitaerStories: CustomerStory[] = [
  {
    name: "Familie Müller",
    location: "München-Schwabing",
    problem: "Sonntagabend, 22:30 Uhr: Das Rohr unter dem Waschbecken platzt. Wasser überall im Bad, die Kinder schlafen, und am nächsten Tag steht eine wichtige Präsentation an.",
    emotion: "Ich war völlig verzweifelt. Wer kommt denn sonntags um diese Zeit noch?",
    solution: "Unser Notdienst-Techniker war innerhalb von 35 Minuten vor Ort. Während Herr Müller die Kinder beruhigte, haben wir das Leck professionell abgedichtet und das Wasser aufgewischt.",
    result: "Um Mitternacht war alles erledigt. Herr Müller konnte seine Präsentation halten, und das Bad war trocken. Eine Woche später haben wir das Rohr komplett erneuert.",
    quote: "Ich hätte nie gedacht, dass es so unkompliziert geht. Der Techniker war freundlich, kompetent und hat sogar Überschuhe getragen!",
    timeframe: "Einsatz: 35 Min. | Reparatur: 2 Std.",
    savings: "Wasserschaden verhindert"
  },
  {
    name: "Dr. Thomas Weber",
    location: "München-Bogenhausen",
    problem: "Seit Monaten tropfte der Wasserhahn in der Küche. Drei andere Handwerker hatten bereits 'repariert' - ohne Erfolg. Die Wasserrechnung stieg und stieg.",
    emotion: "Ich hatte schon aufgegeben. Wahrscheinlich brauche ich einfach einen komplett neuen Wasserhahn.",
    solution: "Unser Meister erkannte sofort: Das Problem lag nicht am Wasserhahn, sondern an einer defekten Dichtung tief im Zulaufrohr. Eine Reparatur, die andere übersehen hatten.",
    result: "Seit 8 Monaten absolute Stille - kein Tropfen mehr. Die Wasserrechnung sank um 40 Euro pro Monat.",
    quote: "Endlich jemand, der wirklich versteht, was er tut. Hätte ich Sie nur früher angerufen!",
    timeframe: "Diagnose: 15 Min. | Reparatur: 45 Min.",
    savings: "480 Euro/Jahr gespart"
  }
];

export const badStories: CustomerStory[] = [
  {
    name: "Ehepaar Schneider",
    location: "München-Sendling",
    problem: "Das 30 Jahre alte Bad war eine Zumutung: Schimmel in den Fugen, eine undichte Dusche, und der Platz reichte kaum für eine Person.",
    emotion: "Wir haben uns vor unserem eigenen Bad geekelt. Duschen war ein notwendiges Übel.",
    solution: "In nur 8 Arbeitstagen haben wir das komplette Bad transformiert: bodengleiche Dusche, modernes Waschbecken, neue Fliesen, LED-Beleuchtung - alles aus einer Hand.",
    result: "Jetzt beginnt jeder Tag mit einem Lächeln. Das Bad ist unser neuer Lieblingsraum - hell, modern und pflegeleicht.",
    quote: "Wir fühlen uns wie im Hotel! Und das Beste: Der Preis war genau wie vereinbart - kein Cent mehr.",
    timeframe: "Planung: 2 Wochen | Umbau: 8 Tage",
    savings: "Wertsteigerung der Wohnung"
  },
  {
    name: "Renate Hoffmann",
    location: "München-Pasing",
    problem: "Nach einem Sturz brauchte ich dringend ein barrierefreies Bad. Andere Firmen sagten: 'Dauert 6 Wochen mindestens.'",
    emotion: "Mit meinem Gehstock konnte ich die hohe Badewannenkante nicht mehr überwinden. Ich hatte Angst vor jedem Gang ins Bad.",
    solution: "Wir haben die Badewanne durch eine ebenerdige Dusche mit Haltegriffen ersetzt. Zusätzlich: rutschfeste Fliesen und ein erhöhtes WC.",
    result: "Frau Hoffmann duscht jetzt wieder selbstständig und sicher. Die Angst ist weg, die Lebensqualität zurück.",
    quote: "Ich kann wieder alleine duschen, ohne Angst zu fallen. Das Team war so einfühlsam - sie haben verstanden, was mir wichtig ist.",
    timeframe: "Umbau: 5 Tage | Förderung: beantragt",
    savings: "KfW-Förderung 6.250 Euro"
  }
];

export const heizungStories: CustomerStory[] = [
  {
    name: "Familie Berger",
    location: "München-Haidhausen",
    problem: "Dezember, die Heizung fällt aus. Minus 8 Grad draußen, zwei kleine Kinder im Haus. Der alte Heizungsinstallateur: 'Vor Januar hab ich keinen Termin.'",
    emotion: "Die Kinder froren, wir hatten Decken über Decken. Ich war kurz davor, ins Hotel zu ziehen.",
    solution: "Unser Notdienst kam noch am selben Abend. Der Brenner war defekt - wir hatten Ersatzteile dabei und konnten direkt reparieren.",
    result: "Um 22 Uhr lief die Heizung wieder. Die Kinder schliefen warm und zufrieden.",
    quote: "Sie haben uns den Winter gerettet. Wörtlich. Ich werde Sie jedem weiterempfehlen!",
    timeframe: "Anfahrt: 45 Min. | Reparatur: 2 Std.",
    savings: "Hotelkosten gespart"
  },
  {
    name: "Markus Lehmann",
    location: "München-Maxvorstadt",
    problem: "Die Gasrechnung war explodiert: 3.800 Euro für ein Jahr. Die alte Heizung fraß buchstäblich Geld.",
    emotion: "Ich konnte es nicht glauben. Fast 4.000 Euro! Und dabei war es im Winter trotzdem nie richtig warm.",
    solution: "Wir haben eine moderne Brennwertheizung installiert und das System hydraulisch abgeglichen. Die Investition: transparent kalkuliert, mit Förderung nur 8.500 Euro Eigenanteil.",
    result: "Die erste Jahresabrechnung nach dem Umbau: 1.890 Euro. Fast 2.000 Euro gespart!",
    quote: "Die Heizung hat sich nach 4 Jahren selbst bezahlt. Und endlich ist es überall gleichmäßig warm.",
    timeframe: "Installation: 2 Tage | Amortisation: 4 Jahre",
    savings: "1.910 Euro/Jahr gespart"
  }
];

export const waermepumpeStories: CustomerStory[] = [
  {
    name: "Familie Richter",
    location: "München-Trudering",
    problem: "Die Ölheizung war 25 Jahre alt. Jedes Jahr die bange Frage: Hält sie noch einen Winter? Dazu die steigenden Ölpreise und das schlechte Gewissen wegen CO2.",
    emotion: "Wir wollten etwas für die Umwelt tun, aber 25.000 Euro für eine Wärmepumpe? Das schien unmöglich.",
    solution: "Wir haben alle Fördermöglichkeiten ausgeschöpft: 70% staatliche Förderung! Die Familie zahlte nur 7.500 Euro Eigenanteil. Installation in 3 Tagen, inklusive Entsorgung des alten Öltanks.",
    result: "Heizkosten von 3.200 Euro/Jahr auf 890 Euro gesunken. Der Garten hat wieder Platz, wo der Öltank stand.",
    quote: "Wir heizen jetzt klimaneutral und sparen dabei noch Geld. Das hätte ich nie für möglich gehalten!",
    timeframe: "Beratung bis Betrieb: 6 Wochen",
    savings: "2.310 Euro/Jahr + 70% Förderung"
  },
  {
    name: "Stefan und Lisa Braun",
    location: "München-Solln",
    problem: "Der Neubau sollte zukunftssicher sein. Aber bei der Planung der Heizung waren wir völlig überfordert: Luft-Wasser? Sole? Welche Größe?",
    emotion: "Jeder Berater sagte etwas anderes. Wir hatten Angst, eine teure Fehlentscheidung zu treffen.",
    solution: "Unsere Energieberatung analysierte das Haus, berechnete den tatsächlichen Wärmebedarf und empfahl die optimale Lösung: Eine Luft-Wasser-Wärmepumpe mit smarter Steuerung.",
    result: "Das Haus ist im Winter warm, im Sommer kühl (die Wärmepumpe kann auch kühlen!) und die Stromkosten fürs Heizen liegen bei nur 65 Euro pro Monat.",
    quote: "Endlich ein Experte, der uns zugehört hat statt nur zu verkaufen. Die Beratung war Gold wert.",
    timeframe: "Planung: 4 Wochen | Installation: 4 Tage",
    savings: "Passive Kühlung inklusive"
  }
];

export const haustechnikStories: CustomerStory[] = [
  {
    name: "Restaurant Alpenblick",
    location: "München-Au",
    problem: "Die Lüftung fiel mitten im Abendservice aus. 80 Gäste, eine heiße Küche, und plötzlich kein Luftaustausch mehr.",
    emotion: "Die Gäste beschwerten sich, die Köche schwitzten. Noch eine Stunde, und ich hätte schließen müssen.",
    solution: "Unser Gewerbe-Notdienst war in 25 Minuten da. Der Antriebsriemen war gerissen - wir hatten Ersatz dabei.",
    result: "Nach 40 Minuten lief die Lüftung wieder. Kein Gast musste gehen, der Abend war gerettet.",
    quote: "Diese 40 Minuten haben mir mehrere tausend Euro Umsatz gerettet. Unbezahlbar!",
    timeframe: "Einsatz: 25 Min. | Reparatur: 40 Min.",
    savings: "Betriebsausfall verhindert"
  },
  {
    name: "Wohnanlage Isar-Residenz",
    location: "München-Lehel",
    problem: "12 Wohnungen, eine zentrale Warmwasseraufbereitung - und plötzlich nur noch kaltes Wasser. Im Winter. Die Mieter waren außer sich.",
    emotion: "Als Hausverwalter standen mein Telefon nicht still. 12 wütende Parteien, und ich konnte nichts tun.",
    solution: "Innerhalb von 3 Stunden hatten wir den defekten Wärmetauscher identifiziert und eine Notlösung installiert. Am nächsten Tag wurde das Ersatzteil eingebaut.",
    result: "Warmwasser war noch am selben Abend wieder verfügbar. Die Mieter waren erleichtert, der Hausverwalter auch.",
    quote: "Professionell, schnell, lösungsorientiert. Genau so muss ein Notdienst funktionieren.",
    timeframe: "Analyse: 1 Std. | Lösung: 3 Std.",
    savings: "12 zufriedene Mieter"
  }
];
