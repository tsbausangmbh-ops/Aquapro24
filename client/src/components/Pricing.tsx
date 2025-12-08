import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle, CardDescription, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Switch } from "@/components/ui/switch";
import { Check, Sparkles } from "lucide-react";

const plans = [
  {
    name: "Starter",
    description: "Perfekt für kleine Unternehmen",
    monthlyPrice: 49,
    yearlyPrice: 39,
    features: [
      "1 Chatbot",
      "1.000 Gespräche/Monat",
      "Website-Integration",
      "E-Mail-Support",
      "Basis-Analytics",
      "DSGVO-konform",
    ],
    cta: "Kostenlos starten",
    popular: false,
  },
  {
    name: "Professional",
    description: "Für wachsende Unternehmen",
    monthlyPrice: 149,
    yearlyPrice: 119,
    features: [
      "3 Chatbots",
      "10.000 Gespräche/Monat",
      "Multi-Channel (WhatsApp, Messenger)",
      "CRM-Integration",
      "Erweiterte Analytics",
      "Prioritäts-Support",
      "A/B-Testing",
      "Custom Workflows",
    ],
    cta: "14 Tage kostenlos testen",
    popular: true,
  },
  {
    name: "Enterprise",
    description: "Für große Organisationen",
    monthlyPrice: null,
    yearlyPrice: null,
    features: [
      "Unbegrenzte Chatbots",
      "Unbegrenzte Gespräche",
      "Alle Integrationen",
      "Dedizierter Account Manager",
      "Custom AI-Training",
      "SLA-Garantie",
      "On-Premise Option",
      "API-Zugang",
      "White-Label",
    ],
    cta: "Kontakt aufnehmen",
    popular: false,
  },
];

export default function Pricing() {
  const [isYearly, setIsYearly] = useState(false);
  
  return (
    <section id="pricing" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-6xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Einfache, transparente Preise
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Keine versteckten Kosten. Jederzeit kündbar.
          </p>
          
          <div className="flex items-center justify-center gap-3">
            <span className={`text-sm font-medium ${!isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Monatlich
            </span>
            <Switch
              checked={isYearly}
              onCheckedChange={setIsYearly}
              data-testid="switch-billing"
            />
            <span className={`text-sm font-medium ${isYearly ? "text-foreground" : "text-muted-foreground"}`}>
              Jährlich
            </span>
            {isYearly && (
              <Badge variant="secondary" className="bg-accent text-accent-foreground">
                2 Monate gratis
              </Badge>
            )}
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative flex flex-col ${
                plan.popular 
                  ? "border-2 border-secondary shadow-lg scale-105 lg:scale-105 z-10" 
                  : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2">
                  <Badge className="bg-secondary text-secondary-foreground gap-1">
                    <Sparkles className="w-3 h-3" />
                    Beliebteste Wahl
                  </Badge>
                </div>
              )}
              
              <CardHeader className={plan.popular ? "pt-8" : ""}>
                <CardTitle data-testid={`text-plan-name-${index}`}>{plan.name}</CardTitle>
                <CardDescription>{plan.description}</CardDescription>
              </CardHeader>
              
              <CardContent className="flex-1">
                <div className="mb-6">
                  {plan.monthlyPrice !== null ? (
                    <>
                      <span className="text-4xl font-bold" data-testid={`text-plan-price-${index}`}>
                        {isYearly ? plan.yearlyPrice : plan.monthlyPrice}€
                      </span>
                      <span className="text-muted-foreground">/Monat</span>
                      {isYearly && (
                        <p className="text-sm text-muted-foreground mt-1">
                          Abgerechnet als {plan.yearlyPrice! * 12}€/Jahr
                        </p>
                      )}
                    </>
                  ) : (
                    <span className="text-2xl font-bold">Auf Anfrage</span>
                  )}
                </div>
                
                <ul className="space-y-3">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-start gap-2">
                      <Check className="w-4 h-4 text-accent mt-0.5 flex-shrink-0" />
                      <span className="text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
              
              <CardFooter>
                <Button 
                  className="w-full"
                  variant={plan.popular ? "default" : "outline"}
                  data-testid={`button-plan-cta-${index}`}
                >
                  {plan.cta}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground">
            Alle Preise zzgl. MwSt. 14-tägige Geld-zurück-Garantie auf alle Pläne.
          </p>
        </div>
      </div>
    </section>
  );
}
