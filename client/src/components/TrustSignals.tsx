import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Shield, 
  Clock, 
  Award, 
  Users, 
  ThumbsUp, 
  CheckCircle,
  Star,
  Zap,
  Lock
} from "lucide-react";

interface TrustSignalsProps {
  variant?: "compact" | "detailed";
  showGuarantees?: boolean;
}

export default function TrustSignals({ 
  variant = "detailed",
  showGuarantees = true 
}: TrustSignalsProps) {
  const signals = [
    {
      icon: Award,
      title: "Meisterbetrieb",
      detail: "Zertifizierte Handwerksqualität",
      value: "Seit 1985"
    },
    {
      icon: Users,
      title: "Zufriedene Kunden",
      detail: "In München und Umgebung",
      value: "2.847+"
    },
    {
      icon: Star,
      title: "Bewertung",
      detail: "Durchschnitt aus 847 Bewertungen",
      value: "4,9/5"
    },
    {
      icon: Clock,
      title: "Schnelle Hilfe",
      detail: "Bei Notfällen in München",
      value: "30 Min."
    }
  ];

  const guarantees = [
    {
      icon: Lock,
      title: "Festpreisgarantie",
      description: "Der Preis, den wir nennen, ist der Preis, den Sie zahlen. Keine versteckten Kosten, keine bösen Überraschungen."
    },
    {
      icon: Shield,
      title: "2 Jahre Gewährleistung",
      description: "Auf alle Arbeiten geben wir 2 Jahre Gewährleistung. Bei Problemen kommen wir kostenlos zurück."
    },
    {
      icon: ThumbsUp,
      title: "Zufriedenheitsversprechen",
      description: "Nicht zufrieden? Wir machen es richtig - oder Sie zahlen nichts. So einfach ist das."
    },
    {
      icon: Zap,
      title: "Schnellservice-Garantie",
      description: "Bei Notfällen sind wir innerhalb von 45 Minuten bei Ihnen - oder die Anfahrt ist kostenlos."
    }
  ];

  if (variant === "compact") {
    return (
      <div className="py-6 bg-primary" data-testid="section-trust-signals-compact">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-8">
            {signals.map((signal, index) => (
              <div key={index} className="text-center group cursor-default">
                <div className="text-2xl md:text-3xl font-bold text-primary-foreground transition-transform duration-300 group-hover:scale-110">{signal.value}</div>
                <div className="text-sm text-primary-foreground/80">{signal.title}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <section className="py-10 md:py-12" data-testid="section-trust-signals">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-12">
          <Badge variant="secondary" className="mb-4">
            <CheckCircle className="w-3 h-3 mr-1" />
            Warum uns Münchner vertrauen
          </Badge>
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            Ihre Sicherheit ist uns wichtig
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Bei uns gehen Sie kein Risiko ein. Diese Garantien geben wir Ihnen schriftlich.
          </p>
        </div>

        <div className="grid md:grid-cols-4 gap-6 mb-12">
          {signals.map((signal, index) => (
            <Card key={index} className="text-center">
              <CardContent className="p-6">
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <signal.icon className="w-6 h-6 text-secondary" />
                </div>
                <div className="text-2xl font-bold text-secondary mb-1">{signal.value}</div>
                <div className="font-medium">{signal.title}</div>
                <div className="text-xs text-muted-foreground mt-1">{signal.detail}</div>
              </CardContent>
            </Card>
          ))}
        </div>

        {showGuarantees && (
          <div className="grid md:grid-cols-2 gap-6">
            {guarantees.map((guarantee, index) => (
              <div 
                key={index} 
                className="flex gap-4 p-4 rounded-lg bg-accent/5 border border-accent/20"
                data-testid={`guarantee-${index}`}
              >
                <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                  <guarantee.icon className="w-5 h-5 text-accent" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">{guarantee.title}</h3>
                  <p className="text-sm text-muted-foreground">{guarantee.description}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
