import { XCircle, CheckCircle2, AlertTriangle, Shield, Clock, BadgeEuro } from "lucide-react";
import { Badge } from "@/components/ui/badge";

const myths = [
  {
    myth: "Handwerker sind teuer und intransparent",
    truth: "Wir nennen Ihnen VORHER den Festpreis - ohne Wenn und Aber. Keine versteckten Kosten, keine Nachforderungen.",
    icon: BadgeEuro
  },
  {
    myth: "Termine dauern ewig und werden nicht eingehalten",
    truth: "Bei uns bekommen Sie oft noch am selben Tag einen Termin. Und wir rufen an, wenn wir uns verspäten.",
    icon: Clock
  },
  {
    myth: "Man weiß nie, ob die Arbeit gut gemacht wurde",
    truth: "Wir erklären Ihnen genau, was wir tun. Dazu 2 Jahre Garantie auf alle Arbeiten - bei Problemen kommen wir zurück.",
    icon: Shield
  }
];

export default function MythBuster() {
  return (
    <section className="py-6 bg-muted/20" data-testid="section-myth-buster">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge className="mb-4 bg-red-600 text-white">
            <AlertTriangle className="w-3 h-3 mr-1" />
            Schluss mit Vorurteilen
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Was Sie vielleicht über Handwerker denken...
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Wir kennen die Bedenken. Und wir beweisen täglich, dass es auch anders geht.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6">
          {myths.map((item, index) => (
            <div 
              key={index} 
              className="bg-card rounded-xl overflow-hidden border border-border"
              data-testid={`myth-${index + 1}`}
            >
              <div className="bg-red-50 dark:bg-red-950/30 p-5 border-b border-red-100 dark:border-red-900/30">
                <div className="flex items-start gap-3">
                  <XCircle className="w-5 h-5 text-red-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-red-600 dark:text-red-400 font-medium mb-1">MYTHOS</div>
                    <p className="text-red-800 dark:text-red-300 font-medium text-sm">
                      "{item.myth}"
                    </p>
                  </div>
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-950/30 p-5">
                <div className="flex items-start gap-3">
                  <CheckCircle2 className="w-5 h-5 text-green-500 mt-0.5 shrink-0" />
                  <div>
                    <div className="text-xs text-green-600 dark:text-green-400 font-medium mb-1">BEI UNS</div>
                    <p className="text-green-800 dark:text-green-300 text-sm">
                      {item.truth}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <p className="text-lg font-medium mb-2">
            Über 2.847 Kunden in München vertrauen uns bereits
          </p>
          <p className="text-muted-foreground">
            Lesen Sie echte Bewertungen oder rufen Sie uns einfach an - wir überzeugen Sie gerne persönlich.
          </p>
        </div>
      </div>
    </section>
  );
}
