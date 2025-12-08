import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  MessageSquare, 
  ArrowRight, 
  Calendar, 
  CheckCircle2,
  Sparkles,
  Users,
  Clock
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative pt-24 pb-16 lg:pt-32 lg:pb-24 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-accent/5" />
      <div className="absolute top-20 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-8">
            <Badge variant="secondary" className="gap-1">
              <Sparkles className="w-3 h-3" />
              KI-gestützte Automatisierung
            </Badge>
            
            <h1 className="text-4xl lg:text-6xl font-bold tracking-tight leading-tight">
              Revolutioniere dein Business mit{" "}
              <span className="text-secondary">intelligenten KI-Chatbots</span>
            </h1>
            
            <p className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              Automatisiere deine Kundenbetreuung, qualifiziere Leads rund um die Uhr 
              und reduziere Kosten um bis zu 70% mit unserer KI-Chatbot-Plattform.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="gap-2" data-testid="button-demo-hero">
                Kostenlose Demo starten
                <ArrowRight className="w-4 h-4" />
              </Button>
              <Button size="lg" variant="outline" className="gap-2" data-testid="button-schedule-hero">
                <Calendar className="w-4 h-4" />
                Beratungsgespräch buchen
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-6 pt-4">
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>14 Tage kostenlos</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Keine Kreditkarte</span>
              </div>
              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>DSGVO-konform</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-card rounded-lg border border-card-border shadow-xl p-6">
              <div className="flex items-center gap-3 pb-4 border-b border-border">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center">
                  <MessageSquare className="w-5 h-5 text-secondary" />
                </div>
                <div>
                  <p className="font-semibold text-sm">KI-Assistent</p>
                  <p className="text-xs text-muted-foreground">Online</p>
                </div>
              </div>
              
              <div className="space-y-4 py-6">
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-xs">
                    <p className="text-sm">
                      Hallo! Wie kann ich Ihnen heute helfen? Ich kann Ihnen bei Produktfragen, 
                      Terminbuchungen oder allgemeinen Anfragen assistieren.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3 justify-end">
                  <div className="bg-secondary text-secondary-foreground rounded-lg rounded-tr-none p-3 max-w-xs">
                    <p className="text-sm">
                      Ich möchte gerne einen Beratungstermin vereinbaren.
                    </p>
                  </div>
                </div>
                
                <div className="flex gap-3">
                  <div className="w-8 h-8 rounded-full bg-secondary/10 flex-shrink-0 flex items-center justify-center">
                    <MessageSquare className="w-4 h-4 text-secondary" />
                  </div>
                  <div className="bg-muted rounded-lg rounded-tl-none p-3 max-w-xs">
                    <p className="text-sm">
                      Sehr gerne! Ich zeige Ihnen gleich unsere verfügbaren Termine. 
                      Welcher Zeitraum passt Ihnen am besten?
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="flex gap-2 flex-wrap">
                <Badge variant="outline" className="cursor-pointer">Heute</Badge>
                <Badge variant="outline" className="cursor-pointer">Morgen</Badge>
                <Badge variant="outline" className="cursor-pointer">Diese Woche</Badge>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg border border-card-border shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center">
                <Users className="w-5 h-5 text-accent" />
              </div>
              <div>
                <p className="font-semibold text-sm" data-testid="text-users-count">500+</p>
                <p className="text-xs text-muted-foreground">Zufriedene Kunden</p>
              </div>
            </div>
            
            <div className="absolute -top-4 -right-4 bg-card rounded-lg border border-card-border shadow-lg p-4 flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                <Clock className="w-5 h-5 text-primary" />
              </div>
              <div>
                <p className="font-semibold text-sm" data-testid="text-availability">24/7</p>
                <p className="text-xs text-muted-foreground">Verfügbarkeit</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
