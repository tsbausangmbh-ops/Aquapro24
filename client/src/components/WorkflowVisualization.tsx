import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  UserPlus, 
  MessageCircle, 
  ClipboardCheck, 
  Calendar,
  ArrowRight,
  Handshake
} from "lucide-react";

const steps = [
  {
    number: 1,
    icon: UserPlus,
    title: "Besucher begrüßen",
    description: "Der Chatbot erkennt neue Besucher und startet proaktiv ein freundliches Gespräch.",
  },
  {
    number: 2,
    icon: MessageCircle,
    title: "Bedarf ermitteln",
    description: "Durch intelligente Fragen wird der genaue Bedarf des Besuchers identifiziert.",
  },
  {
    number: 3,
    icon: ClipboardCheck,
    title: "Qualifizierung",
    description: "Automatisches Lead-Scoring basierend auf Antworten und Verhalten.",
  },
  {
    number: 4,
    icon: Calendar,
    title: "Terminbuchung",
    description: "Qualifizierte Leads können direkt einen Beratungstermin vereinbaren.",
  },
  {
    number: 5,
    icon: Handshake,
    title: "Übergabe an Vertrieb",
    description: "Vollständige Lead-Daten werden automatisch an dein CRM übertragen.",
  },
];

const useCases = [
  { label: "E-Commerce", active: true },
  { label: "B2B" },
  { label: "Healthcare" },
  { label: "Immobilien" },
  { label: "Finanzen" },
];

export default function WorkflowVisualization() {
  return (
    <section id="workflow" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            So funktioniert dein KI-Chatbot
          </h2>
          <p className="text-lg text-muted-foreground mb-6">
            Von der ersten Interaktion bis zum qualifizierten Lead - vollautomatisch.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {useCases.map((useCase, index) => (
              <Badge 
                key={index}
                variant={useCase.active ? "default" : "outline"}
                className={useCase.active ? "bg-secondary text-secondary-foreground" : ""}
                data-testid={`badge-usecase-${index}`}
              >
                {useCase.label}
              </Badge>
            ))}
          </div>
        </div>
        
        <div className="relative">
          <div className="hidden lg:block absolute top-1/2 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-secondary/30 to-transparent -translate-y-1/2" />
          
          <div className="grid md:grid-cols-3 lg:grid-cols-5 gap-6">
            {steps.map((step, index) => (
              <div key={index} className="relative">
                <Card className="h-full p-6 text-center hover-elevate">
                  <div className="relative mb-4">
                    <div className="w-16 h-16 rounded-full bg-secondary/10 flex items-center justify-center mx-auto">
                      <step.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <div className="absolute -top-2 -right-2 w-7 h-7 rounded-full bg-primary text-primary-foreground text-sm font-bold flex items-center justify-center">
                      {step.number}
                    </div>
                  </div>
                  <h3 className="font-semibold mb-2" data-testid={`text-step-title-${index}`}>{step.title}</h3>
                  <p className="text-sm text-muted-foreground">{step.description}</p>
                </Card>
                
                {index < steps.length - 1 && (
                  <div className="hidden lg:flex absolute top-1/2 -right-3 -translate-y-1/2 z-10">
                    <ArrowRight className="w-6 h-6 text-secondary" />
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <p className="text-muted-foreground mb-4">
            Durchschnittlich werden <span className="font-semibold text-foreground">83%</span> der 
            Besucher erfolgreich durch den gesamten Funnel geführt.
          </p>
        </div>
      </div>
    </section>
  );
}
