import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Clock, 
  Star,
  CheckCircle2,
  AlertTriangle
} from "lucide-react";
import { Link } from "wouter";
import heroImage from "@assets/stock_images/professional_plumber_be6e9e4a.jpg";

export default function Hero() {
  return (
    <section className="relative py-6 lg:py-8 overflow-hidden">
      <div 
        className="absolute inset-0 bg-cover bg-center"
        style={{ backgroundImage: `url(${heroImage})` }}
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-4">
            <Badge className="bg-destructive text-destructive-foreground gap-1">
              <AlertTriangle className="w-3 h-3" />
              24/7 Notdienst
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Star className="w-3 h-3 fill-current" />
              4.9 Google-Bewertung
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-white mb-4">
            Klempner München – Sanitär & Heizung Notdienst 24/7
          </h1>
          <div className="flex flex-wrap gap-2 mb-4 text-xs text-white/70">
            <span>Sanitär Notdienst München</span><span>·</span>
            <span>Klempner Festpreis</span><span>·</span>
            <span>Heizung reparieren</span><span>·</span>
            <span>Rohrbruch beheben</span><span>·</span>
            <span>Abfluss verstopft</span><span>·</span>
            <span>Badsanierung komplett</span><span>·</span>
            <span>Wärmepumpe Förderung</span><span>·</span>
            <span>Wasserinstallation</span><span>·</span>
            <span>24h Notdienst</span><span>·</span>
            <span>Geprüfte Fachbetriebe</span><span>·</span>
            <span>Alle Münchner Stadtteile</span><span>·</span>
            <span>Viessmann Vaillant Grohe</span><span>·</span>
            <span>Festpreisgarantie</span><span>·</span>
            <span>2.500+ Kunden</span><span>·</span>
            <span>Seit 2005 in München</span>
          </div>
          
          <p className="text-lg text-white/90 mb-4">
            <strong>Stellen Sie sich vor:</strong> Ihr neues Bad ist fertig, 
            die Rohre sind dicht, alles funktioniert einwandfrei.
          </p>
          
          <p className="text-white/80 mb-6">
            <strong>Über 2.500 Münchner Familien</strong> vertrauen bereits unserem Partnernetzwerk – 
            mit Festpreis-Garantie, ohne versteckte Kosten. Wenn Sie uns anrufen, kümmern wir uns sofort um Ihr Anliegen.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
            <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-hero">
              <a href="tel:+4915212274043">
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 backdrop-blur-sm bg-white/10 border-white/30 text-white" 
              asChild
              data-testid="button-termin-hero"
            >
              <Link href="/termin">
                <Clock className="w-4 h-4" />
                24h Terminbuchung
              </Link>
            </Button>
          </div>
          
          <div className="flex flex-wrap items-center gap-x-6 gap-y-3 text-sm">
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>Geprüfte Fachbetriebe</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span>München & Umgebung</span>
            </div>
            <div className="flex items-center gap-2 text-white/80">
              <CheckCircle2 className="w-4 h-4 text-accent" />
              <span data-testid="text-customers-count">2.500+ zufriedene Kunden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
