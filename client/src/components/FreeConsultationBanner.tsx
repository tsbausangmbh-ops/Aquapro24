import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Phone, CheckCircle, Clock, Shield, Calendar } from "lucide-react";
import { Link } from "wouter";

interface FreeConsultationBannerProps {
  variant?: "full" | "compact" | "inline";
  className?: string;
}

export default function FreeConsultationBanner({ variant = "full", className = "" }: FreeConsultationBannerProps) {
  if (variant === "inline") {
    return (
      <div className={`flex flex-wrap items-center justify-center gap-3 py-3 px-4 bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-800 rounded-lg ${className}`}>
        <Badge variant="secondary" className="bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100">
          <CheckCircle className="w-3 h-3 mr-1" />
          Kostenlos
        </Badge>
        <span className="font-medium text-green-800 dark:text-green-100">
          Erstberatung & Kostenvoranschlag gratis
        </span>
        <Button size="sm" asChild className="bg-red-600 hover:bg-red-700" data-testid="button-free-consultation-inline">
          <Link href="/termin">
            <Calendar className="w-4 h-4 mr-1" />
            24h Terminbuchung
          </Link>
        </Button>
      </div>
    );
  }

  if (variant === "compact") {
    return (
      <div className={`bg-gradient-to-r from-green-600 to-green-700 text-white py-4 px-6 rounded-lg ${className}`}>
        <div className="flex flex-wrap items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
              <CheckCircle className="w-5 h-5" />
            </div>
            <div>
              <p className="font-bold">Kostenlose Erstberatung</p>
              <p className="text-sm text-white/80">Unverbindlich & ohne Risiko</p>
            </div>
          </div>
          <Button variant="secondary" asChild data-testid="button-free-consultation-compact">
            <Link href="/termin">
              <Calendar className="w-4 h-4 mr-2" />
              24h Terminbuchung
            </Link>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className={`py-12 bg-gradient-to-br from-green-600 via-green-700 to-green-800 text-white ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
          <div className="text-center lg:text-left">
            <Badge className="bg-white/20 text-white mb-4">
              100% Kostenlos & Unverbindlich
            </Badge>
            <h2 className="text-3xl md:text-4xl font-bold mb-4" data-testid="heading-free-consultation">
              Kostenlose Erstberatung
            </h2>
            <p className="text-lg text-white/90 max-w-xl">
              Lassen Sie sich unverbindlich von unseren Experten beraten. 
              Wir analysieren Ihr Anliegen und erstellen Ihnen einen kostenlosen Kostenvoranschlag.
            </p>
            
            <div className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-6">
              <div className="flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-green-300" />
                <span>Keine versteckten Kosten</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-5 h-5 text-green-300" />
                <span>Rückruf in 30 Min</span>
              </div>
              <div className="flex items-center gap-2">
                <Shield className="w-5 h-5 text-green-300" />
                <span>Festpreisgarantie</span>
              </div>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              size="lg" 
              className="bg-white text-green-700 font-semibold border-white"
              asChild
              data-testid="button-free-consultation-call"
            >
              <Link href="/termin">
                <Calendar className="w-5 h-5 mr-2" />
                24h Terminbuchung
              </Link>
            </Button>
            <Button 
              size="lg" 
              className="bg-red-600 hover:bg-red-700 text-white border-green-700"
              asChild
              data-testid="button-free-consultation-termin"
            >
              <Link href="/termin">
                Online-Termin buchen
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
