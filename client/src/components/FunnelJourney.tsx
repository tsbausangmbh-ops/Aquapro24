import { Phone, FileText, Wrench, CheckCircle2, ArrowRight, Clock, Shield, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const journeySteps = [
  {
    step: 1,
    icon: Phone,
    title: "Kontakt aufnehmen",
    subtitle: "Kostenlos & unverbindlich",
    description: "Rufen Sie an oder schreiben Sie uns. Wir hören zu, verstehen Ihr Problem und vereinbaren einen Termin - oft noch am selben Tag.",
    time: "5 Minuten",
    color: "bg-secondary"
  },
  {
    step: 2,
    icon: FileText,
    title: "Diagnose & Festpreis",
    subtitle: "Transparent & fair",
    description: "Unser Techniker prüft vor Ort, erklärt das Problem verständlich und nennt Ihnen den verbindlichen Festpreis - ohne versteckte Kosten.",
    time: "30 Minuten",
    color: "bg-primary"
  },
  {
    step: 3,
    icon: Wrench,
    title: "Lösung & Garantie",
    subtitle: "Schnell & zuverlässig",
    description: "Nach Ihrer Freigabe lösen wir das Problem fachgerecht. Sie erhalten Rechnung und Garantie - fertig. So einfach kann es sein.",
    time: "Je nach Auftrag",
    color: "bg-accent"
  }
];

export default function FunnelJourney() {
  return (
    <section className="py-12 bg-gradient-to-b from-muted/30 to-background" data-testid="section-funnel-journey">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4">
            <Star className="w-3 h-3 mr-1" />
            Ihr Weg zur Lösung
          </Badge>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            In 3 Schritten zum gelösten Problem
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Kein Stress, keine Überraschungen. Wir führen Sie transparent durch jeden Schritt - 
            von Ihrem ersten Anruf bis zur fertigen Lösung.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-6 mb-10">
          {journeySteps.map((item, index) => (
            <div 
              key={item.step} 
              className="relative group"
              data-testid={`journey-step-${item.step}`}
            >
              <div className="bg-card rounded-xl p-6 border border-border h-full transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
                <div className="flex items-center gap-4 mb-4">
                  <div className={`w-14 h-14 rounded-full ${item.color} text-white flex items-center justify-center shadow-lg`}>
                    <item.icon className="w-6 h-6" />
                  </div>
                  <div>
                    <div className="text-sm text-muted-foreground">Schritt {item.step}</div>
                    <h3 className="font-bold text-lg">{item.title}</h3>
                  </div>
                </div>
                <Badge variant="secondary" className="mb-3">
                  {item.subtitle}
                </Badge>
                <p className="text-muted-foreground text-sm mb-4">
                  {item.description}
                </p>
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="w-3 h-3" />
                  <span>{item.time}</span>
                </div>
              </div>
              {index < journeySteps.length - 1 && (
                <div className="hidden md:block absolute top-1/2 -right-3 transform -translate-y-1/2 z-10">
                  <ArrowRight className="w-6 h-6 text-muted-foreground/50" />
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="bg-gradient-to-r from-secondary/10 via-primary/10 to-accent/10 rounded-2xl p-8 text-center">
          <div className="flex flex-wrap justify-center gap-6 mb-6">
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-accent" />
              <span className="text-sm font-medium">Keine versteckten Kosten</span>
            </div>
            <div className="flex items-center gap-2">
              <Shield className="w-5 h-5 text-secondary" />
              <span className="text-sm font-medium">2 Jahre Garantie</span>
            </div>
            <div className="flex items-center gap-2">
              <Star className="w-5 h-5 text-primary" />
              <span className="text-sm font-medium">4.9/5 Kundenbewertung</span>
            </div>
          </div>
          <h3 className="text-xl font-bold mb-2">Bereit für den ersten Schritt?</h3>
          <p className="text-muted-foreground mb-6 max-w-xl mx-auto">
            Rufen Sie uns an oder schreiben Sie eine Nachricht. Wir melden uns schnellstmöglich 
            und besprechen Ihre Situation - kostenlos und unverbindlich.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Button size="lg" asChild>
              <a href="tel:+4917359994699" data-testid="button-funnel-call">
                <Phone className="w-4 h-4 mr-2" />
                0173 5994699
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild>
              <a href="https://wa.me/4917359994699?text=Hallo%2C%20ich%20h%C3%A4tte%20eine%20Frage." target="_blank" rel="noopener noreferrer" data-testid="button-funnel-whatsapp">
                WhatsApp schreiben
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
