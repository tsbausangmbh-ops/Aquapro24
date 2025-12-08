import { Card, CardContent } from "@/components/ui/card";
import { 
  Clock, 
  Users, 
  TrendingDown, 
  ArrowRight,
  Bot,
  Zap,
  PiggyBank
} from "lucide-react";

const problems = [
  {
    icon: Clock,
    title: "Langsame Reaktionszeiten",
    description: "Kunden warten stundenlang auf Antworten und verlieren das Interesse.",
  },
  {
    icon: Users,
    title: "Hohe Personalkosten",
    description: "Große Support-Teams sind teuer und skalieren nicht effizient.",
  },
  {
    icon: TrendingDown,
    title: "Verpasste Leads",
    description: "Potenzielle Kunden gehen verloren, weil niemand außerhalb der Geschäftszeiten erreichbar ist.",
  },
];

const solutions = [
  {
    icon: Bot,
    title: "Sofortige Antworten",
    description: "KI-Chatbot beantwortet Anfragen in Sekundenschnelle, 24 Stunden am Tag.",
  },
  {
    icon: PiggyBank,
    title: "Bis zu 70% Kosteneinsparung",
    description: "Automatisierung reduziert den Bedarf an zusätzlichem Personal erheblich.",
  },
  {
    icon: Zap,
    title: "Kein Lead geht verloren",
    description: "Rund-um-die-Uhr-Verfügbarkeit sorgt dafür, dass jeder Interessent betreut wird.",
  },
];

export default function ProblemSolution() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Von Herausforderungen zu Lösungen
          </h2>
          <p className="text-lg text-muted-foreground">
            Erkennen Sie diese Probleme? Unsere KI-Chatbots transformieren Ihren Kundenservice.
          </p>
        </div>
        
        <div className="grid lg:grid-cols-[1fr_auto_1fr] gap-8 lg:gap-12 items-center">
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-destructive mb-6 text-center lg:text-left">
              Ohne KI-Chatbot
            </h3>
            {problems.map((problem, index) => (
              <Card key={index} className="border-destructive/20 bg-destructive/5">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-lg bg-destructive/10 flex items-center justify-center flex-shrink-0">
                    <problem.icon className="w-5 h-5 text-destructive" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" data-testid={`text-problem-${index}`}>{problem.title}</h4>
                    <p className="text-sm text-muted-foreground">{problem.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
          
          <div className="hidden lg:flex flex-col items-center gap-2 py-8">
            <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg">
              <ArrowRight className="w-5 h-5 text-secondary-foreground" />
            </div>
            <div className="w-px h-full bg-gradient-to-b from-transparent via-border to-transparent" />
          </div>
          
          <div className="flex justify-center lg:hidden py-4">
            <div className="w-12 h-12 rounded-full bg-secondary flex items-center justify-center shadow-lg rotate-90">
              <ArrowRight className="w-5 h-5 text-secondary-foreground" />
            </div>
          </div>
          
          <div className="space-y-4">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-accent mb-6 text-center lg:text-left">
              Mit KI-Chatbot
            </h3>
            {solutions.map((solution, index) => (
              <Card key={index} className="border-accent/20 bg-accent/5">
                <CardContent className="flex items-start gap-4 p-5">
                  <div className="w-10 h-10 rounded-lg bg-accent/10 flex items-center justify-center flex-shrink-0">
                    <solution.icon className="w-5 h-5 text-accent" />
                  </div>
                  <div>
                    <h4 className="font-semibold mb-1" data-testid={`text-solution-${index}`}>{solution.title}</h4>
                    <p className="text-sm text-muted-foreground">{solution.description}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
