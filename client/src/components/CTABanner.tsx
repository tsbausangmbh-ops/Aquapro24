import { Button } from "@/components/ui/button";
import { Phone, Clock, MapPin, Shield } from "lucide-react";
import { Link } from "wouter";

export default function CTABanner() {
  return (
    <section id="contact" className="py-4 lg:py-6 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/95 to-secondary/90" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center text-secondary-foreground">
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
          Bereit für Ihr neues Bad? Lassen Sie uns starten!
        </h2>
        <h3 className="text-xl lg:text-2xl text-white/90 mb-2">
          Kostenlose Beratung und unverbindliches Angebot
        </h3>
        <p className="text-lg text-white/70 mb-4">
          <span className="text-white font-medium">Stellen Sie sich vor:</span> In wenigen Wochen genießen Sie Ihr neues Traumbad – 
          modern, funktional und genau nach Ihren Wünschen gestaltet.
        </p>
        <p className="text-base text-white/60 mb-4">
          Sanitär & Wasserinstallation für München, Sendling, Schwabing, Bogenhausen, Pasing & Umland.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-5">
          <Button 
            size="lg" 
            className="bg-red-600 text-white border-red-700 gap-2 text-lg py-6"
            asChild
            data-testid="button-call-cta"
          >
            <a href="tel:+4915212274043">
              <Phone className="w-6 h-6" />
              0152 12274043
            </a>
          </Button>
          <Button 
            size="lg" 
            className="gap-2 bg-white text-secondary border-white text-lg py-6"
            asChild
            data-testid="button-termin-cta"
          >
            <Link href="/termin">
              <Clock className="w-5 h-5" />
              24h Terminbuchung
            </Link>
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-6 lg:gap-10 text-sm text-white/80">
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
