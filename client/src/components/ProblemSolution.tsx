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
    icon: Droplets,
    title: "Veraltetes Bad ohne Komfort",
    description: "Alte Fliesen, undichte Armaturen, kein Stauraum – Ihr Bad ist in die Jahre gekommen.",
    emotion: "Wir planen mit Ihnen Ihr Traumbad und setzen es termingerecht um.",
  },
  {
    icon: Snowflake,
    title: "Tropfende Wasserhähne & Lecks",
    description: "Ständiges Tropfen, hohe Wasserrechnung, Feuchtigkeit an den Wänden.",
    emotion: "Wir finden das Problem und lösen es dauerhaft – mit Garantie.",
  },
  {
    icon: AlertTriangle,
    title: "Angst vor Chaos bei der Sanierung",
    description: "Wochenlange Baustelle, Dreck überall, unzuverlässige Handwerker.",
    emotion: "Bei uns gibt es einen festen Zeitplan, saubere Arbeit und klare Kommunikation.",
  },
];

const solutions = [
  {
    icon: Droplets,
    title: "Modernes Bad nach Ihren Wünschen",
    description: "Komplette Planung und Umsetzung – barrierefrei, modern oder luxuriös.",
  },
  {
    icon: Wrench,
    title: "Professionelle Wasserinstallation",
    description: "Fachgerechte Arbeit mit hochwertigen Materialien und langer Garantie.",
  },
  {
    icon: Shield,
    title: "Festpreis vor Arbeitsbeginn",
    description: "Sie wissen genau, was es kostet – ohne versteckte Zusatzkosten.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="about" className="py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Ihr Traumbad wartet – wir machen es Wirklichkeit
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Von der Planung bis zur Fertigstellung – alles aus einer Hand
          </h3>
          <p className="text-lg text-muted-foreground">
            Eine Badsanierung oder Wasserinstallation ist eine große Entscheidung. 
            <span className="text-foreground font-medium"> Mit uns wird es einfach</span> – 
            professionelle Beratung, saubere Arbeit, termingerechte Fertigstellung.
          </p>
        </div>
        
        <div className="space-y-12">
          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wide text-muted-foreground mb-6 text-center">
              Das kennen Sie – Ihr Notfall in München
            </h4>
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
            <h4 className="text-sm font-semibold uppercase tracking-wide text-accent mb-6 text-center">
              So sieht Ihr Leben nach unserem Besuch aus
            </h4>
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
