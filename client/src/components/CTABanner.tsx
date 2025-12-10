import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Shield } from "lucide-react";

export default function CTABanner() {
  return (
    <section id="contact" className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center text-secondary-foreground">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
          Heizung kaputt? Rohrbruch?
        </h2>
        <p className="text-xl lg:text-2xl text-white/90 mb-2">
          Keine Panik. Rufen Sie jetzt an.
        </p>
        <p className="text-lg text-white/70 mb-4">
          <span className="text-white font-medium">Stellen Sie sich vor:</span> Morgen früh wachen Sie in einer warmen Wohnung auf, 
          der Rohrbruch ist repariert, alles ist wieder normal.
        </p>
        <p className="text-base text-white/60 mb-8">
          Wenn Sie uns jetzt anrufen, sind wir in 30 Minuten bei Ihnen – 24/7.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-10">
          <Button 
            size="lg" 
            className="bg-primary hover:bg-primary/90 text-primary-foreground gap-2 text-lg py-6"
            asChild
            data-testid="button-call-cta"
          >
            <a href="tel:+4989123456789">
              <Phone className="w-6 h-6" />
              089 123 456 789
            </a>
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 gap-2"
            data-testid="button-callback-cta"
          >
            <Clock className="w-5 h-5" />
            Rückruf anfordern
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-sm text-white/80">
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>24/7 erreichbar</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin className="w-4 h-4" />
            <span>München & Umgebung</span>
          </div>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>Festpreis-Garantie</span>
          </div>
        </div>
      </div>
    </section>
  );
}
