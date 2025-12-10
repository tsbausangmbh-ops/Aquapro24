import { Card, CardContent } from "@/components/ui/card";
import { 
  Snowflake, 
  Droplets, 
  Clock, 
  AlertTriangle,
  ThumbsUp,
  Thermometer,
  Wrench,
  Shield
} from "lucide-react";

const problems = [
  {
    icon: Snowflake,
    title: "Kalte Wohnung im Winter",
    description: "Die Heizung fällt ausgerechnet bei Minusgraden aus. Sie und Ihre Familie frieren.",
    emotion: "Das kennen wir. Deshalb sind wir auch nachts für Sie da.",
  },
  {
    icon: Droplets,
    title: "Wasser überschwemmt die Wohnung",
    description: "Ein Rohrbruch. Jede Minute zählt, bevor der Schaden noch größer wird.",
    emotion: "Rufen Sie uns an. Wir stoppen das Wasser, bevor es schlimmer wird.",
  },
  {
    icon: AlertTriangle,
    title: "Angst vor überhöhten Preisen",
    description: "Sie haben von unseriösen Notdiensten gehört, die Wucherpreise verlangen.",
    emotion: "Verständlich. Deshalb nennen wir Ihnen den Festpreis, bevor wir anfangen.",
  },
];

const solutions = [
  {
    icon: Thermometer,
    title: "Warme Wohnung noch heute",
    description: "In 30 Minuten bei Ihnen. Reparatur oft am selben Tag abgeschlossen.",
  },
  {
    icon: Wrench,
    title: "Schnelle Schadensbegrenzung",
    description: "Sofortmaßnahmen verhindern Folgeschäden an Wänden und Böden.",
  },
  {
    icon: Shield,
    title: "Festpreis vor Arbeitsbeginn",
    description: "Sie wissen genau, was es kostet – ohne versteckte Zusatzkosten.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="about" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Wir verstehen Ihre Situation
          </h2>
          <p className="text-lg text-muted-foreground">
            Ein Heizungsausfall oder Rohrbruch ist stressig. 
            <span className="text-foreground font-medium"> Nach unserem Besuch haben Sie wieder Ruhe</span> – 
            deshalb machen wir es Ihnen so einfach wie möglich.
          </p>
        </div>
        
        <div className="space-y-12">
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6 text-center">
              Ihre Situation
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {problems.map((problem, index) => (
                <Card key={index} className="border-destructive/20 bg-destructive/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-destructive/10 flex items-center justify-center mb-4">
                      <problem.icon className="w-6 h-6 text-destructive" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2" data-testid={`text-problem-${index}`}>
                      {problem.title}
                    </h4>
                    <p className="text-muted-foreground text-sm mb-4">{problem.description}</p>
                    <p className="text-sm font-medium text-foreground italic border-l-2 border-secondary pl-3">
                      "{problem.emotion}"
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
          
          <div className="flex justify-center">
            <div className="w-16 h-16 rounded-full bg-accent flex items-center justify-center shadow-lg">
              <ThumbsUp className="w-7 h-7 text-accent-foreground" />
            </div>
          </div>
          
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-6 text-center">
              Unsere Lösung
            </h3>
            <div className="grid md:grid-cols-3 gap-6">
              {solutions.map((solution, index) => (
                <Card key={index} className="border-accent/20 bg-accent/5">
                  <CardContent className="p-6">
                    <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mb-4">
                      <solution.icon className="w-6 h-6 text-accent" />
                    </div>
                    <h4 className="font-semibold text-lg mb-2" data-testid={`text-solution-${index}`}>
                      {solution.title}
                    </h4>
                    <p className="text-muted-foreground text-sm">{solution.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
