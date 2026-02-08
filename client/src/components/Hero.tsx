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
    <section className="relative py-12 lg:py-16 overflow-hidden">
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
          <div className="sr-only">
            <span>Klempner München</span><span>·</span>
            <span>Sanitärinstallateur München</span><span>·</span>
            <span>Sanitärinstallateure München</span><span>·</span>
            <span>Sanitär München</span><span>·</span>
            <span>Installateur München</span><span>·</span>
            <span>Klempner Notdienst München 24h</span><span>·</span>
            <span>Sanitär Notdienst München</span><span>·</span>
            <span>Sanitär Notdienst München 24h</span><span>·</span>
            <span>Klempner München sofort</span><span>·</span>
            <span>Notfall Klempner München</span><span>·</span>
            <span>Klempner in meiner Nähe München</span><span>·</span>
            <span>Gas Wasserinstallateur München</span><span>·</span>
            <span>Anlagenmechaniker SHK München</span><span>·</span>
            <span>SHK München</span><span>·</span>
            <span>Heizungsbauer München</span><span>·</span>
            <span>Heizungsinstallateur München</span><span>·</span>
            <span>Rohrreinigung München ab 81€</span><span>·</span>
            <span>Sanitär Reparatur München ab 92€</span><span>·</span>
            <span>Heizungsreparatur München ab 154€</span><span>·</span>
            <span>Armaturen austauschen München ab 89€</span><span>·</span>
            <span>Wasserhahn wechseln München</span><span>·</span>
            <span>Wasserhahn tropft München</span><span>·</span>
            <span>Mischbatterie wechseln München</span><span>·</span>
            <span>Küchenarmatur wechseln München</span><span>·</span>
            <span>Kleinteile Dienst München</span><span>·</span>
            <span>Dichtung wechseln München</span><span>·</span>
            <span>Siphon wechseln München</span><span>·</span>
            <span>Eckventil tauschen München</span><span>·</span>
            <span>WC verstopft München Soforthilfe</span><span>·</span>
            <span>Toilette verstopft München</span><span>·</span>
            <span>Abfluss verstopft München</span><span>·</span>
            <span>Rohrbruch München</span><span>·</span>
            <span>Wasserrohr geplatzt München</span><span>·</span>
            <span>Wasserschaden München</span><span>·</span>
            <span>Heizung ausgefallen München</span><span>·</span>
            <span>Heizung defekt München</span><span>·</span>
            <span>Heizung wird nicht warm München</span><span>·</span>
            <span>Gastherme Störung München</span><span>·</span>
            <span>Durchlauferhitzer München ab 120€</span><span>·</span>
            <span>Boiler reparieren München</span><span>·</span>
            <span>kein Warmwasser München</span><span>·</span>
            <span>Badsanierung München ab 16.000€</span><span>·</span>
            <span>barrierefreies Bad München</span><span>·</span>
            <span>Wärmepumpe München BAFA 70% 2026</span><span>·</span>
            <span>Fußbodenheizung München</span><span>·</span>
            <span>Grohe Hansgrohe Geberit HANSA Montage</span><span>·</span>
            <span>Viessmann Vaillant Buderus Wolf Junkers</span><span>·</span>
            <span>Klempner München Kosten</span><span>·</span>
            <span>Klempner München Preise</span><span>·</span>
            <span>Klempner München Festpreis</span><span>·</span>
            <span>Klempner München Bewertungen</span><span>·</span>
            <span>Klempner München Empfehlung</span><span>·</span>
            <span>bester Klempner München</span><span>·</span>
            <span>Klempner München seriös</span><span>·</span>
            <span>Klempner München ohne Abzocke</span><span>·</span>
            <span>Klempner München Wochenende</span><span>·</span>
            <span>Klempner München Feiertag</span><span>·</span>
            <span>Klempner München Nacht</span><span>·</span>
            <span>Sanitär Notdienst München Festpreis</span><span>·</span>
            <span>Sanitär Notdienst München seriös</span><span>·</span>
            <span>Klempner Schwabing</span><span>·</span>
            <span>Klempner Bogenhausen</span><span>·</span>
            <span>Klempner Sendling</span><span>·</span>
            <span>Klempner Pasing</span><span>·</span>
            <span>Klempner Haidhausen</span><span>·</span>
            <span>Klempner Neuhausen</span><span>·</span>
            <span>Klempner Maxvorstadt</span><span>·</span>
            <span>Klempner Laim</span><span>·</span>
            <span>Klempner Giesing</span><span>·</span>
            <span>Klempner Trudering</span><span>·</span>
            <span>2.800+ zufriedene Kunden seit 2005</span><span>·</span>
            <span>4,9 Sterne Google-Bewertung München</span><span>·</span>
            <span>Meisterbetrieb Partnernetzwerk München</span>
          </div>
          
          <p className="text-sm sm:text-base text-white/90 mb-4">
            <strong>Rohrbruch, WC verstopft, Heizung ausgefallen?</strong> Wir sind in 
            45-60 Minuten bei Ihnen in München. Festpreis vor Arbeitsbeginn.
          </p>
          
          <p className="text-white/80 mb-6">
            <strong>Über 2.800 Münchner Familien</strong> vertrauen unserem Partnernetzwerk. 
            Sanitär ab 92€, Rohrreinigung ab 81€, Heizungsreparatur ab 154€. Alle Marken: Grohe, Viessmann, Vaillant.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-3 mb-6">
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
