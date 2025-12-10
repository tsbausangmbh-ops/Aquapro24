import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Phone, 
  Clock, 
  Shield,
  AlertCircle,
  Euro
} from "lucide-react";

const pricingInfo = [
  {
    title: "Anfahrt",
    price: "0 €",
    note: "Im Stadtgebiet München",
    icon: Clock,
  },
  {
    title: "Arbeitsstunde",
    price: "ab 65 €",
    note: "Mo-Fr 8-18 Uhr",
    icon: Euro,
  },
  {
    title: "Notdienst-Zuschlag",
    price: "ab 30 €",
    note: "Abends/Wochenende",
    icon: AlertCircle,
  },
];

const guarantees = [
  "Festpreis vor Arbeitsbeginn",
  "Keine versteckten Kosten",
  "Rechnung erst nach Fertigstellung",
  "Alle Preise inkl. MwSt.",
  "Kostenvoranschlag bei größeren Arbeiten",
  "Garantie auf alle Arbeiten",
];

export default function Pricing() {
  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Shield className="w-3 h-3 mr-1" />
            Festpreis-Garantie München
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Stellen Sie sich vor: Sie kennen den Festpreis, bevor wir starten
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Wenn Sie unser Angebot anfordern, erhalten Sie Klarheit in Sekunden
          </h3>
          <p className="text-lg text-muted-foreground">
            Transparente Preise für München, Garching, Starnberg, Freising & das gesamte Umland – ohne versteckte Kosten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingInfo.map((item, index) => (
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-base font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-1" data-testid={`text-price-${index}`}>
                  {item.price}
                </p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-2 border-secondary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Ihre Festpreis-Garantie – Ihr Schutz vor bösen Überraschungen
                </h3>
                <p className="text-muted-foreground mb-6">
                  <span className="text-foreground font-medium">Wenn Sie bei uns anrufen,</span> nennen wir Ihnen den exakten Preis, 
                  <strong> bevor</strong> wir mit der Arbeit beginnen. So entscheiden Sie in Ruhe – garantiert.
                </p>
                <ul className="space-y-3">
                  {guarantees.map((guarantee, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-sm" data-testid={`text-guarantee-${index}`}>{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-muted/50 rounded-xl p-6 text-center">
                <p className="text-sm text-muted-foreground mb-2">Jetzt unverbindlich anfragen</p>
                <p className="text-2xl font-bold mb-4">
                  Kostenloses Angebot
                </p>
                <Button size="lg" className="w-full gap-2 mb-3" asChild data-testid="button-call-pricing">
                  <a href="tel:+4989123456789">
                    <Phone className="w-5 h-5" />
                    089 123 456 789
                  </a>
                </Button>
                <p className="text-xs text-muted-foreground">
                  Oder schreiben Sie uns eine E-Mail an info@muenchner-heizung.de
                </p>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
