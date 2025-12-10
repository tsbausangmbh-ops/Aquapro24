import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Clock, 
  Shield, 
  Star,
  CheckCircle2,
  Thermometer,
  Droplets,
  AlertTriangle
} from "lucide-react";

export default function Hero() {
  return (
    <section className="relative py-12 lg:py-20 overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary/5 via-background to-primary/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-secondary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          <div className="space-y-6">
            <div className="flex flex-wrap gap-2">
              <Badge className="bg-destructive/10 text-destructive border-destructive/20 gap-1">
                <AlertTriangle className="w-3 h-3" />
                24/7 Notdienst
              </Badge>
              <Badge variant="secondary" className="gap-1">
                <Star className="w-3 h-3 fill-current" />
                4.9 Google-Bewertung
              </Badge>
            </div>
            
            <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight">
              Sanitär & Wasserinstallation München:{" "}
              <span className="text-secondary">Ihr Meisterbetrieb</span>{" "}
              <span className="block mt-1">für Bad, Rohre & Wassertechnik.</span>
            </h1>
            
            <h2 className="text-lg lg:text-xl text-muted-foreground leading-relaxed max-w-xl">
              <span className="text-foreground font-medium">Stellen Sie sich vor:</span> Ihr neues Bad ist fertig, 
              die Rohre sind dicht, alles funktioniert einwandfrei.
            </h2>
            
            <p className="text-base text-muted-foreground leading-relaxed max-w-xl">
              <strong className="text-foreground">Über 2.500 Münchner Familien</strong> vertrauen bereits unserem Meisterbetrieb – 
              mit Festpreis-Garantie, ohne versteckte Kosten. Wenn Sie uns anrufen, kümmern wir uns sofort um Ihr Anliegen.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-3">
              <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-hero">
                <a href="tel:+4989123456789">
                  <Phone className="w-5 h-5" />
                  Jetzt Notdienst rufen
                </a>
              </Button>
              <Button 
                size="lg" 
                className="bg-foreground hover:bg-foreground/90 text-background border-foreground gap-2" 
                onClick={() => {
                  const chatButton = document.querySelector('[data-testid="button-chat-toggle"]') as HTMLButtonElement;
                  if (chatButton) chatButton.click();
                }}
                data-testid="button-callback-hero"
              >
                <Clock className="w-4 h-4" />
                Rückruf in 5 Minuten
              </Button>
            </div>
            
            <div className="flex flex-wrap items-center gap-x-6 gap-y-3 pt-2 text-sm">
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>In 60 min da</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Festpreis vorab</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <CheckCircle2 className="w-4 h-4 text-accent" />
                <span>Meisterbetrieb</span>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="relative bg-gradient-to-br from-secondary to-secondary/80 rounded-2xl p-8 text-secondary-foreground">
              <div className="absolute -top-3 -right-3">
                <Badge className="bg-primary text-primary-foreground shadow-lg">
                  <Clock className="w-3 h-3 mr-1" />
                  24/7 erreichbar
                </Badge>
              </div>
              
              <h3 className="text-xl font-bold mb-6">Unsere Sanitär-Leistungen:</h3>
              
              <div className="space-y-4">
                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Thermometer className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold" data-testid="text-service-heating">Badsanierung & Renovierung</p>
                    <p className="text-sm text-white/80">Komplettumbau oder Teilsanierung - nach Ihren Wünschen</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Droplets className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold" data-testid="text-service-water">Rohrbruch & Wasserschaden</p>
                    <p className="text-sm text-white/80">Sofortige Hilfe, bevor größerer Schaden entsteht</p>
                  </div>
                </div>
                
                <div className="flex items-start gap-4 bg-white/10 rounded-lg p-4">
                  <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0">
                    <Shield className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="font-semibold" data-testid="text-service-guarantee">Festpreis-Garantie</p>
                    <p className="text-sm text-white/80">Sie wissen die Kosten, bevor wir anfangen</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="absolute -bottom-4 -left-4 bg-card rounded-lg border border-card-border shadow-xl p-4 flex items-center gap-3">
              <div className="flex -space-x-2">
                <div className="w-8 h-8 rounded-full bg-secondary/20 border-2 border-background flex items-center justify-center text-xs font-bold">M</div>
                <div className="w-8 h-8 rounded-full bg-primary/20 border-2 border-background flex items-center justify-center text-xs font-bold">S</div>
                <div className="w-8 h-8 rounded-full bg-accent/20 border-2 border-background flex items-center justify-center text-xs font-bold">K</div>
              </div>
              <div>
                <p className="font-semibold text-sm" data-testid="text-customers-count">2.500+</p>
                <p className="text-xs text-muted-foreground">Münchner Familien</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
