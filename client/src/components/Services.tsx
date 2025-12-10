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
    icon: ShowerHead,
    title: "Badsanierung & Renovierung",
    description: "Komplette Badsanierung oder Teilrenovierung – modern, barrierefrei oder luxuriös nach Ihren Wünschen.",
    features: ["Komplettsanierung", "Barrierefreies Bad", "Designbäder"],
    emergency: false,
  },
  {
    icon: Droplets,
    title: "Wasserinstallation",
    description: "Professionelle Installation von Wasserleitungen, Anschlüssen und Armaturen in Neubau und Bestand.",
    features: ["Neuinstallation", "Leitungserneuerung", "Anschlussarbeiten"],
    emergency: false,
  },
  {
    icon: PipetteIcon,
    title: "Rohrreinigung & Abfluss",
    description: "Verstopfte Abflüsse? Professionelle Reinigung mit moderner Technik und Kamerainspektion.",
    features: ["Hochdruckreinigung", "Kamerainspektion", "Wurzelentfernung"],
    emergency: true,
  },
  {
    icon: Wrench,
    title: "Armaturen & Sanitärobjekte",
    description: "Montage und Austausch von Wasserhähnen, Duscharmaturen, WCs und Waschbecken.",
    features: ["Armaturentausch", "WC-Montage", "Waschbecken"],
    emergency: false,
  },
  {
    icon: Thermometer,
    title: "Warmwasserbereitung",
    description: "Installation und Wartung von Durchlauferhitzern, Boilern und Warmwasserspeichern.",
    features: ["Durchlauferhitzer", "Boiler", "Speicheranlagen"],
    emergency: false,
  },
  {
    icon: Flame,
    title: "Heizungsservice",
    description: "Wartung und Reparatur Ihrer Heizungsanlage – alle Hersteller und Systeme.",
    features: ["Wartung", "Reparatur", "Effizienzcheck"],
    emergency: false,
  },
];

export default function Services() {
  return (
    <section id="services" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Sanitär & Wasserinstallation München – Vom Wasserhahn bis zur Komplettsanierung
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Wenn Sie uns beauftragen, bekommen Sie Qualitätsarbeit vom Meisterbetrieb
          </h3>
          <p className="text-lg text-muted-foreground">
            Badsanierung, Wasserinstallation, Rohrreinigung, Armaturen & mehr in ganz München, Schwabing, Bogenhausen, Sendling, Pasing & Umland.
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
