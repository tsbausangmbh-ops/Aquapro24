import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Phone, 
  ArrowRight,
  CheckCircle2,
  Clock,
  Shield
} from "lucide-react";
import { Link } from "wouter";

const nlpQuestions = [
  {
    question: "Tropft Ihr Wasserhahn seit Wochen?",
    subtext: "Jeder Tropfen kostet Geld - bis zu 12.000 Liter pro Jahr."
  },
  {
    question: "Wird Ihre Heizung nicht mehr richtig warm?",
    subtext: "Oft reicht eine einfache Wartung - wir prüfen es kostenlos."
  },
  {
    question: "Haben Sie Angst vor hohen Handwerkerkosten?",
    subtext: "Bei uns gibt es den Festpreis VOR Arbeitsbeginn - garantiert."
  },
  {
    question: "Warten Sie schon ewig auf einen Termin?",
    subtext: "Wir sind meist innerhalb von 24-48 Stunden bei Ihnen."
  }
];

const trustPoints = [
  "Kostenlose Erstberatung",
  "Festpreis-Garantie",
  "45-60 Min Anfahrt im Notfall"
];

export default function NLPQuestions() {
  return (
    <section className="py-8 bg-gradient-to-b from-background to-muted/30" data-testid="section-nlp-questions">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-6">
          <Badge variant="outline" className="mb-3">
            <HelpCircle className="w-3 h-3 mr-1" />
            Kennen Sie das?
          </Badge>
          <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-2">
            Haben Sie eines dieser Probleme?
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Wenn Sie bei einer Frage "Ja" denken, können wir Ihnen helfen.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
          {nlpQuestions.map((item, index) => (
            <div 
              key={index}
              className="bg-background rounded-lg border p-5 hover-elevate transition-all duration-300 group"
            >
              <div className="flex items-start gap-3 mb-3">
                <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-colors">
                  <span className="text-primary font-bold text-sm">{index + 1}</span>
                </div>
                <h3 className="font-semibold text-base leading-tight">
                  {item.question}
                </h3>
              </div>
              <p className="text-sm text-muted-foreground pl-11">
                {item.subtext}
              </p>
            </div>
          ))}
        </div>

        <div className="bg-primary/5 border border-primary/20 rounded-lg p-6 md:p-8">
          <div className="grid md:grid-cols-2 gap-6 items-center">
            <div>
              <h3 className="text-xl md:text-2xl font-bold mb-3">
                Wenn Sie "Ja" gedacht haben...
              </h3>
              <p className="text-muted-foreground mb-4">
                ...dann geht es Ihnen wie <strong>tausenden Münchnern</strong>, denen wir bereits geholfen haben. 
                Ein kurzer Anruf genügt - wir hören zu, beraten Sie ehrlich und sagen Ihnen sofort, was zu tun ist.
              </p>
              <div className="flex flex-wrap gap-3 mb-4">
                {trustPoints.map((point, index) => (
                  <div key={index} className="flex items-center gap-1.5 text-sm">
                    <CheckCircle2 className="w-4 h-4 text-green-600" />
                    <span>{point}</span>
                  </div>
                ))}
              </div>
            </div>
            
            <div className="flex flex-col gap-3">
              <Button size="lg" className="w-full gap-2" asChild data-testid="button-nlp-call">
                <a href="tel:+4989444438872">
                  <Phone className="w-5 h-5" />
                  Jetzt kostenlos anrufen
                </a>
              </Button>
              <Button size="lg" variant="outline" className="w-full gap-2" asChild data-testid="button-nlp-termin">
                <Link href="/termin">
                  <Clock className="w-4 h-4" />
                  Termin online buchen
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </Button>
              <div className="flex items-center justify-center gap-2 text-xs text-muted-foreground">
                <Shield className="w-3 h-3" />
                <span>Unverbindlich & kostenlos - Festpreis vor Arbeitsbeginn</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
