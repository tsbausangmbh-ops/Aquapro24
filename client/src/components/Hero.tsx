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
export default function Hero() {
  return (
    <section className="relative pt-6 pb-16 lg:pt-8 lg:pb-24 overflow-hidden">
      <img
        src="/images/hero-fast.webp"
        alt="Klempner München - Sanitär und Heizung Notdienst"
        className="absolute inset-0 w-full h-full object-cover"
        width="1200"
        height="630"
        loading="eager"
        decoding="async"
        fetchPriority="high"
        data-testid="img-hero"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
      
      <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
        <div className="max-w-3xl">
          <div className="flex flex-wrap gap-2 mb-6">
            <Badge className="bg-destructive text-destructive-foreground gap-1">
              <AlertTriangle className="w-3 h-3" />
              24/7 Notdienst
            </Badge>
            <Badge variant="secondary" className="gap-1">
              <Star className="w-3 h-3 fill-current" />
              4.9 Google-Bewertung
            </Badge>
          </div>
          
          <h1 className="text-3xl sm:text-4xl lg:text-5xl xl:text-6xl font-bold tracking-tight leading-tight text-white mb-6 lg:mb-8">
            Klempner München – Sanitär & Heizung Notdienst 24/7
          </h1>
          <div className="sr-only">
            <span>Klempner München Notdienst 24h</span><span>·</span>
            <span>Sanitär Notdienst ab 92€</span><span>·</span>
            <span>Rohrreinigung München ab 81€</span><span>·</span>
            <span>WC verstopft Soforthilfe</span><span>·</span>
            <span>Rohrbruch reparieren München</span><span>·</span>
            <span>Heizung reparieren ab 154€</span><span>·</span>
            <span>Wasserhahn wechseln ab 80€</span><span>·</span>
            <span>Durchlauferhitzer einbauen ab 600€</span><span>·</span>
            <span>Badsanierung München ab 16.000€</span><span>·</span>
            <span>Wärmepumpe 70% BAFA-Förderung</span><span>·</span>
            <span>Grohe Hansgrohe Geberit Montage</span><span>·</span>
            <span>Viessmann Vaillant Buderus Wolf</span><span>·</span>
            <span>Installateur Schwabing Bogenhausen</span><span>·</span>
            <span>2.800+ zufriedene Kunden</span><span>·</span>
            <span>Seit 2005 in München</span>
          </div>
          
          <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-6">
            <strong>Rohrbruch, WC verstopft, Heizung ausgefallen?</strong> Wir sind in 
            45-60 Minuten bei Ihnen in München. Festpreis vor Arbeitsbeginn.
          </p>
          
          <p className="text-white/80 mb-8 lg:mb-10">
            <strong>Über 2.800 Münchner Familien</strong> vertrauen unserem Partnernetzwerk. 
            Sanitär ab 92€, Rohrreinigung ab 81€, Heizungsreparatur ab 154€. Alle Marken: Grohe, Viessmann, Vaillant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-8">
            <Button size="lg" className="gap-2 text-base" asChild data-testid="button-call-hero">
              <a href="tel:+4989444438872">
                <Phone className="w-5 h-5" />
                Jetzt anrufen
              </a>
            </Button>
            <Button 
              size="lg" 
              variant="outline"
              className="gap-2 backdrop-blur-sm" style={{ backgroundColor: "rgba(255,255,255,0.1)", borderColor: "rgba(255,255,255,0.3)", color: "white" }} 
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
              <span data-testid="text-customers-count">2.800+ zufriedene Kunden</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
