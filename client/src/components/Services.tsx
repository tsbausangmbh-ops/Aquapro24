import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Thermometer, 
  Droplets, 
  Wrench, 
  ShowerHead,
  Flame,
  PipetteIcon,
  Phone,
  Clock,
  CheckCircle2
} from "lucide-react";

const services = [
  {
    icon: Thermometer,
    title: "Heizungsreparatur",
    description: "Alle Hersteller: Viessmann, Buderus, Vaillant, Wolf und mehr. Schnelle Diagnose und Reparatur.",
    features: ["Alle Heizungstypen", "Ersatzteile vorrätig", "Wartungsverträge"],
    emergency: true,
  },
  {
    icon: Droplets,
    title: "Rohrbruch & Wasserschaden",
    description: "Sofortige Hilfe bei Rohrbrüchen. Wir stoppen das Wasser und reparieren die Leitung.",
    features: ["Leckortung", "Rohrbruch-Reparatur", "Schadensminimierung"],
    emergency: true,
  },
  {
    icon: ShowerHead,
    title: "Sanitärinstallation",
    description: "Von der tropfenden Armatur bis zur kompletten Badsanierung – wir sind Ihr Partner.",
    features: ["Badsanierung", "Armaturen", "WC & Waschbecken"],
    emergency: false,
  },
  {
    icon: Flame,
    title: "Heizungswartung",
    description: "Regelmäßige Wartung verlängert die Lebensdauer und spart Energiekosten.",
    features: ["Jahreswartung", "Effizienzcheck", "Brennerreinigung"],
    emergency: false,
  },
  {
    icon: PipetteIcon,
    title: "Rohrreinigung",
    description: "Verstopfte Abflüsse? Professionelle Reinigung mit moderner Technik.",
    features: ["Hochdruckreinigung", "Kamerainspektion", "Wurzelentfernung"],
    emergency: true,
  },
  {
    icon: Wrench,
    title: "Gasinstallation",
    description: "Zertifizierte Arbeiten an Gasleitungen und Gasgeräten. Sicherheit an erster Stelle.",
    features: ["Gasanschluss", "Gasprüfung", "Geräteanschluss"],
    emergency: true,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Heizung & Sanitär Notdienst München – Alle Leistungen aus einer Hand
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Wenn Sie uns rufen, wählen wir das passende Expertenteam binnen 5 Minuten
          </h3>
          <p className="text-lg text-muted-foreground">
            24/7 Rohrbruch-Soforthilfe, Heizungsreparatur, Sanitär-Notdienst in ganz München, Schwabing, Bogenhausen, Sendling, Pasing & Umland.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
          {services.map((service, index) => (
            <Card key={index} className="group hover-elevate relative">
              {service.emergency && (
                <Badge 
                  className="absolute -top-2 -right-2 bg-primary text-primary-foreground"
                >
                  <Clock className="w-3 h-3 mr-1" />
                  Notdienst
                </Badge>
              )}
              <CardHeader>
                <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <service.icon className="w-7 h-7 text-secondary" />
                </div>
                <CardTitle data-testid={`text-service-title-${index}`}>{service.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm mb-4">{service.description}</p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2 text-sm">
                      <CheckCircle2 className="w-4 h-4 text-accent" />
                      <span>{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            <span className="text-foreground font-medium">Stellen Sie sich vor:</span> Heute Abend funktioniert alles wieder. Rufen Sie jetzt an!
          </p>
          <Button size="lg" className="gap-2" asChild data-testid="button-call-services">
            <a href="tel:+4989123456789">
              <Phone className="w-5 h-5" />
              089 123 456 789
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
