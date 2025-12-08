import { Card, CardContent } from "@/components/ui/card";
import { Shield, Clock, Headphones, Award } from "lucide-react";

const trustItems = [
  {
    icon: Shield,
    title: "DSGVO-konform",
    description: "Volle Einhaltung der europäischen Datenschutzrichtlinien. Daten werden sicher in Deutschland gehostet.",
    stat: "100%",
    statLabel: "Datenschutz",
  },
  {
    icon: Clock,
    title: "99.9% Uptime",
    description: "Garantierte Verfügbarkeit mit redundanten Systemen und automatischen Failover-Mechanismen.",
    stat: "99.9%",
    statLabel: "Verfügbarkeit",
  },
  {
    icon: Headphones,
    title: "Premium Support",
    description: "Deutschsprachiger Support per Chat, E-Mail und Telefon. Antwort innerhalb von 4 Stunden.",
    stat: "<4h",
    statLabel: "Reaktionszeit",
  },
  {
    icon: Award,
    title: "ISO 27001 zertifiziert",
    description: "Höchste Sicherheitsstandards für den Schutz Ihrer Daten und die Ihrer Kunden.",
    stat: "ISO",
    statLabel: "Zertifiziert",
  },
];

export default function TrustSection() {
  return (
    <section className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Sicherheit & Vertrauen
          </h2>
          <p className="text-lg text-muted-foreground">
            Enterprise-Grade Sicherheit für Unternehmen jeder Größe.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
          {trustItems.map((item, index) => (
            <Card key={index} className="text-center hover-elevate">
              <CardContent className="p-6">
                <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                  <item.icon className="w-7 h-7 text-secondary" />
                </div>
                <div className="mb-4">
                  <p className="text-2xl font-bold text-secondary" data-testid={`text-trust-stat-${index}`}>
                    {item.stat}
                  </p>
                  <p className="text-xs text-muted-foreground uppercase tracking-wide">
                    {item.statLabel}
                  </p>
                </div>
                <h3 className="font-semibold mb-2" data-testid={`text-trust-title-${index}`}>{item.title}</h3>
                <p className="text-sm text-muted-foreground">{item.description}</p>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 flex flex-wrap justify-center items-center gap-6 lg:gap-10">
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-accent" />
            <span>SSL-verschlüsselt</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-accent" />
            <span>GDPR Ready</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-accent" />
            <span>SOC 2 Type II</span>
          </div>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <Shield className="w-4 h-4 text-accent" />
            <span>PCI DSS</span>
          </div>
        </div>
      </div>
    </section>
  );
}
