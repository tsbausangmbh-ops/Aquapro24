import { Phone, Clock, Wrench, CheckCircle, CreditCard } from "lucide-react";
import { Button } from "@/components/ui/button";

interface EmergencyProcessProps {
  title?: string;
  subtitle?: string;
  serviceType: "sanitaer" | "heizung" | "rohrreinigung";
}

const serviceContent = {
  sanitaer: {
    title: "So funktioniert unser Sanitär-Notdienst München",
    subtitle: "In 5 einfachen Schritten zu Ihrem gelösten Problem",
    steps: [
      {
        icon: Phone,
        title: "1. Anruf",
        description: "Sie rufen an unter 089 444438872. Wir sind 24/7 erreichbar - auch nachts und am Wochenende.",
        time: "Sofort"
      },
      {
        icon: Clock,
        title: "2. Schnelle Reaktion",
        description: "Wir erfassen Ihr Problem und schicken den nächsten verfügbaren Techniker zu Ihnen.",
        time: "5 Minuten"
      },
      {
        icon: Wrench,
        title: "3. Techniker vor Ort",
        description: "Unser Fachmann kommt zu Ihnen, analysiert das Problem und nennt Ihnen den Festpreis.",
        time: "60 Minuten"
      },
      {
        icon: CheckCircle,
        title: "4. Problem gelöst",
        description: "Die Reparatur wird professionell durchgeführt. Wir arbeiten sauber und zuverlässig.",
        time: "Je nach Auftrag"
      },
      {
        icon: CreditCard,
        title: "5. Faire Bezahlung",
        description: "Sie zahlen nur den vereinbarten Festpreis. Keine versteckten Kosten, keine Überraschungen.",
        time: "Sofort"
      }
    ]
  },
  heizung: {
    title: "So funktioniert unser Heizungs-Notdienst München",
    subtitle: "In 5 einfachen Schritten wieder warm",
    steps: [
      {
        icon: Phone,
        title: "1. Anruf",
        description: "Sie rufen an unter 089 444438872. Wir sind 24/7 erreichbar - auch Heiligabend und Silvester.",
        time: "Sofort"
      },
      {
        icon: Clock,
        title: "2. Schnelle Reaktion",
        description: "Wir erfassen Ihr Problem und schicken den nächsten verfügbaren Heizungstechniker.",
        time: "5 Minuten"
      },
      {
        icon: Wrench,
        title: "3. Techniker vor Ort",
        description: "Unser Fachmann kommt mit Ersatzteilen, analysiert die Heizung und nennt den Festpreis.",
        time: "45-60 Minuten"
      },
      {
        icon: CheckCircle,
        title: "4. Heizung läuft",
        description: "Die Reparatur wird direkt vor Ort durchgeführt. In den meisten Fällen noch am selben Tag.",
        time: "Je nach Defekt"
      },
      {
        icon: CreditCard,
        title: "5. Faire Bezahlung",
        description: "Sie zahlen nur den vereinbarten Festpreis. Keine Nachforderungen, keine Überraschungen.",
        time: "Sofort"
      }
    ]
  },
  rohrreinigung: {
    title: "So funktioniert unser Rohrreinigung-Notdienst München",
    subtitle: "In 5 einfachen Schritten zum freien Abfluss",
    steps: [
      {
        icon: Phone,
        title: "1. Anruf",
        description: "Sie rufen an unter 089 444438872. Wir sind 24/7 erreichbar - auch bei überfluteten Bädern.",
        time: "Sofort"
      },
      {
        icon: Clock,
        title: "2. Schnelle Reaktion",
        description: "Wir erfassen Ihr Problem und schicken den nächsten Rohrreinigung-Spezialisten.",
        time: "5 Minuten"
      },
      {
        icon: Wrench,
        title: "3. Techniker vor Ort",
        description: "Unser Fachmann kommt mit professioneller Ausrüstung und nennt Ihnen den Festpreis.",
        time: "60 Minuten"
      },
      {
        icon: CheckCircle,
        title: "4. Verstopfung gelöst",
        description: "Mit Spirale, Hochdruck oder Kamera - wir lösen jede Verstopfung professionell.",
        time: "30-60 Minuten"
      },
      {
        icon: CreditCard,
        title: "5. Faire Bezahlung",
        description: "Sie zahlen nur den vereinbarten Festpreis ab 81€. Keine versteckten Kosten.",
        time: "Sofort"
      }
    ]
  }
};

export default function EmergencyProcess({ serviceType, title, subtitle }: EmergencyProcessProps) {
  const content = serviceContent[serviceType];
  
  return (
    <section className="py-6 md:py-6 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">
            {title || content.title}
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            {subtitle || content.subtitle}
          </p>
        </div>

        <div className="grid md:grid-cols-5 gap-4 md:gap-2">
          {content.steps.map((step, index) => (
            <div key={index} className="relative">
              <div className="bg-card rounded-lg p-5 h-full border hover-elevate">
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mb-4">
                    <step.icon className="w-7 h-7 text-secondary" />
                  </div>
                  <h3 className="font-semibold text-base mb-2">{step.title}</h3>
                  <p className="text-muted-foreground text-sm mb-3">{step.description}</p>
                  <span className="text-xs font-medium text-secondary bg-secondary/10 px-2 py-1 rounded-full">
                    {step.time}
                  </span>
                </div>
              </div>
              {index < content.steps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-1 transform -translate-y-1/2 text-muted-foreground/30 text-2xl">
                  &rarr;
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-10 text-center">
          <div className="inline-flex flex-col sm:flex-row items-center gap-4 bg-card p-6 rounded-lg border">
            <div className="text-left">
              <p className="font-semibold text-lg">Notfall? Jetzt anrufen!</p>
              <p className="text-muted-foreground text-sm">24/7 erreichbar - auch nachts und am Wochenende</p>
            </div>
            <Button size="lg" className="bg-red-600 text-white border-red-700" asChild>
              <a href="tel:+4989444438872" data-testid="button-emergency-call">
                <Phone className="w-4 h-4 mr-2" />
                089 444438872
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
