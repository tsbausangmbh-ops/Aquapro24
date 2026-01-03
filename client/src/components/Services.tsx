import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Link } from "wouter";
import { 
  Thermometer, 
  Droplets, 
  Wrench, 
  ShowerHead,
  Flame,
  PipetteIcon,
  Phone,
  Clock,
  CheckCircle2,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: ShowerHead,
    title: "Badsanierung München ab 16.000€",
    description: "Komplettumbau in 2-4 Wochen: Abriss, Fliesen, Sanitär, Elektrik. Villeroy & Boch, Duravit, Grohe. 5 Jahre Garantie.",
    features: ["3D-Badplanung gratis", "Festpreis garantiert", "Alle Gewerke koordiniert"],
    emergency: false,
    link: "/bad",
  },
  {
    icon: Droplets,
    title: "Sanitär München ab 92€/Std",
    description: "Wasserleitung verlegen, WC austauschen, Waschbecken montieren. Grohe, Hansgrohe, Geberit. 24h Notdienst.",
    features: ["Rohrbruch reparieren", "Leckortung", "Wasserinstallation"],
    emergency: false,
    link: "/sanitaer",
  },
  {
    icon: PipetteIcon,
    title: "Rohrreinigung München ab 81€",
    description: "WC verstopft, Abfluss läuft nicht ab? Spirale, Hochdruckspülung, Kamerainspektion. Notdienst 24/7.",
    features: ["Verstopfung lösen", "Kanalreinigung", "TV-Inspektion"],
    emergency: true,
    link: "/rohrreinigung",
  },
  {
    icon: Wrench,
    title: "Wasserhahn wechseln ab 80€",
    description: "Armatur austauschen, Mischbatterie montieren, tropfenden Wasserhahn reparieren. Grohe, Hansgrohe, Blanco.",
    features: ["Alle Marken", "Schnelle Termine", "Festpreis"],
    emergency: false,
    link: "/armaturen",
  },
  {
    icon: Thermometer,
    title: "Durchlauferhitzer ab 600€",
    description: "Boiler einbauen, Durchlauferhitzer wechseln, Warmwasserspeicher reparieren. Vaillant, Stiebel Eltron, AEG.",
    features: ["Montage komplett", "Entkalkung", "Notdienst"],
    emergency: false,
    link: "/warmwasser",
  },
  {
    icon: Flame,
    title: "Heizung München ab 154€",
    description: "Heizung reparieren, warten, modernisieren. Viessmann, Vaillant, Buderus, Wolf. Bis 70% BAFA-Förderung.",
    features: ["24h Notdienst", "Wartungsvertrag", "Wärmepumpe"],
    emergency: false,
    link: "/heizung",
  },
];

export default function Services() {
  return (
    <section id="services" className="py-4 lg:py-6 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-6">
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Sanitär & Wasserinstallation München – Vom Wasserhahn bis zur Komplettsanierung
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Wenn Sie uns beauftragen, bekommen Sie Qualitätsarbeit von geprüften Partnerbetrieben
          </h3>
          <p className="text-lg text-muted-foreground">
            Badsanierung, Wasserinstallation, Rohrreinigung, Armaturen & mehr in ganz München, Schwabing, Bogenhausen, Sendling, Pasing & Umland.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-6">
          {services.map((service, index) => (
            <Link key={index} href={service.link} data-testid={`link-service-${index}`}>
              <Card className="group hover-elevate relative transition-all duration-300 hover:shadow-xl hover:-translate-y-2 cursor-pointer h-full">
                {service.emergency && (
                  <Badge 
                    className="absolute -top-2 -right-2 bg-primary text-primary-foreground shadow-lg"
                  >
                    <Clock className="w-3 h-3 mr-1" />
                    Notdienst
                  </Badge>
                )}
                <CardHeader>
                  <div className="w-14 h-14 rounded-xl bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 group-hover:scale-110 transition-all duration-300">
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
                  <div className="mt-4 pt-3 border-t border-border flex items-center justify-between">
                    <p className="text-xs text-secondary font-medium flex items-center gap-1.5">
                      <Clock className="w-3 h-3" />
                      24h Wartungstermin
                    </p>
                    <span className="text-xs text-primary font-medium flex items-center gap-1 group-hover:gap-2 transition-all">
                      Mehr erfahren
                      <ArrowRight className="w-3 h-3" />
                    </span>
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        
        <div className="text-center">
          <p className="text-muted-foreground mb-4">
            <span className="text-foreground font-medium">Stellen Sie sich vor:</span> Heute Abend funktioniert alles wieder. Rufen Sie jetzt an!
          </p>
          <Button size="lg" className="gap-2" asChild data-testid="button-call-services">
            <a href="tel:+498912274043">
              <Phone className="w-5 h-5" />
              089 444438872
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
