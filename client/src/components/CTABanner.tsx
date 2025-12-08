import { Button } from "@/components/ui/button";
import { ArrowRight, MessageSquare } from "lucide-react";

export default function CTABanner() {
  return (
    <section className="py-16 lg:py-24 relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-br from-secondary via-secondary/90 to-accent" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(255,255,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-4xl mx-auto px-4 lg:px-8 text-center">
        <div className="w-16 h-16 rounded-full bg-white/10 flex items-center justify-center mx-auto mb-6">
          <MessageSquare className="w-8 h-8 text-white" />
        </div>
        
        <h2 className="text-3xl lg:text-5xl font-bold tracking-tight text-white mb-4">
          Bereit, deinen Kundenservice zu revolutionieren?
        </h2>
        
        <p className="text-lg lg:text-xl text-white/80 mb-8 max-w-2xl mx-auto">
          Starte noch heute mit deinem eigenen KI-Chatbot. Keine Kreditkarte erforderlich, 
          14 Tage kostenlos testen.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button 
            size="lg" 
            className="bg-white text-secondary hover:bg-white/90 gap-2"
            data-testid="button-cta-demo"
          >
            Kostenlose Demo starten
            <ArrowRight className="w-4 h-4" />
          </Button>
          <Button 
            size="lg" 
            variant="outline" 
            className="border-white/30 text-white hover:bg-white/10 backdrop-blur-sm"
            data-testid="button-cta-contact"
          >
            Mit Experten sprechen
          </Button>
        </div>
        
        <p className="text-sm text-white/60 mt-8">
          Bereits über 500+ Unternehmen vertrauen auf uns
        </p>
      </div>
    </section>
  );
}
