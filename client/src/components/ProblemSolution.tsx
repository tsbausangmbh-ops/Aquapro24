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
    title: "Rohrbruch München – Wasser läuft!",
    description: "Wasserrohr geplatzt, Keller überflutet, Wasserschaden droht. Sie brauchen sofort Hilfe.",
    emotion: "Wir sind in 45-60 Min. bei Ihnen. Leck abdichten ab 92€, Rohrbruch reparieren ab 154€.",
  },
  {
    icon: Snowflake,
    title: "Heizung ausgefallen – kein Warmwasser",
    description: "Heizkörper kalt, Therme macht Geräusche, kein warmes Wasser. Im Winter ein Notfall.",
    emotion: "Viessmann, Vaillant, Buderus, Wolf – alle Marken. Heizungsreparatur ab 154€/Std.",
  },
  {
    icon: AlertTriangle,
    title: "WC verstopft – Abfluss läuft nicht ab",
    description: "Toilette verstopft, Waschbecken steht, Dusche läuft nicht ab. Unangenehm und dringend.",
    emotion: "Rohrreinigung München ab 81€. Spirale, Hochdruckspülung, Kamerainspektion.",
  },
];

const solutions = [
  {
    icon: Droplets,
    title: "Badsanierung München ab 16.000€",
    description: "Komplettumbau in 2-4 Wochen. Villeroy & Boch, Duravit, Grohe. 3D-Planung gratis, 5 Jahre Garantie.",
  },
  {
    icon: Wrench,
    title: "Wärmepumpe bis 70% BAFA-Förderung",
    description: "Viessmann Vitocal, Vaillant aroTHERM, Buderus Logatherm. Wir beantragen die Förderung für Sie.",
  },
  {
    icon: Shield,
    title: "Festpreis München – keine Überraschungen",
    description: "Sanitär ab 92€, Rohrreinigung ab 81€, Heizung ab 154€. Preis vor Arbeitsbeginn, 2 Jahre Garantie.",
  },
];

export default function ProblemSolution() {
  return (
    <section id="about" className="py-3 lg:py-4">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Klempner München: Notdienst Sanitär & Heizung 24/7
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Rohrbruch, WC verstopft, Heizung defekt? 45-60 Minuten vor Ort.
          </h3>
          <p className="text-lg text-muted-foreground">
            <span className="text-foreground font-medium">2.800+ Münchner Kunden</span> vertrauen AquaPro24. 
            Festpreis vor Arbeitsbeginn, alle Marken: Grohe, Hansgrohe, Viessmann, Vaillant, Buderus.
          </p>
        </div>
        
        <div className="space-y-6">
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
