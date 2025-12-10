import { CheckCircle, AlertTriangle, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface NLPSectionProps {
  problemTitle: string;
  problems: string[];
  solutionTitle: string;
  solutions: string[];
  futureState: string;
  ctaText?: string;
  ctaHref?: string;
}

export default function NLPSection({
  problemTitle,
  problems,
  solutionTitle,
  solutions,
  futureState,
  ctaText = "Jetzt kostenlos beraten lassen",
  ctaHref = "tel:+4989123456789"
}: NLPSectionProps) {
  return (
    <section className="py-16" data-testid="section-nlp-problem-solution">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-8">
          <div className="bg-red-50 dark:bg-red-950/20 rounded-lg p-6 border border-red-200 dark:border-red-900/30">
            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="w-5 h-5 text-red-600 dark:text-red-400" />
              <h3 className="font-semibold text-lg text-red-800 dark:text-red-300">{problemTitle}</h3>
            </div>
            <p className="text-sm text-red-700 dark:text-red-400 mb-4">
              Kennen Sie das? Diese Situationen erleben viele unserer Kunden in München:
            </p>
            <ul className="space-y-3">
              {problems.map((problem, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-red-700 dark:text-red-400">
                  <span className="w-1.5 h-1.5 rounded-full bg-red-500 mt-2 shrink-0" />
                  <span>{problem}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="bg-green-50 dark:bg-green-950/20 rounded-lg p-6 border border-green-200 dark:border-green-900/30">
            <div className="flex items-center gap-2 mb-4">
              <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400" />
              <h3 className="font-semibold text-lg text-green-800 dark:text-green-300">{solutionTitle}</h3>
            </div>
            <p className="text-sm text-green-700 dark:text-green-400 mb-4">
              Mit AquaPro24 erleben Sie den Unterschied:
            </p>
            <ul className="space-y-3">
              {solutions.map((solution, index) => (
                <li key={index} className="flex items-start gap-2 text-sm text-green-700 dark:text-green-400">
                  <CheckCircle className="w-4 h-4 mt-0.5 shrink-0" />
                  <span>{solution}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mt-8 bg-gradient-to-r from-secondary/10 to-primary/10 rounded-lg p-6 md:p-8 text-center">
          <h3 className="text-xl md:text-2xl font-bold mb-3">
            Stellen Sie sich vor...
          </h3>
          <p className="text-muted-foreground max-w-2xl mx-auto mb-6">
            {futureState}
          </p>
          <a href={ctaHref}>
            <Button variant="secondary" size="lg" data-testid="button-nlp-cta">
              {ctaText}
              <ArrowRight className="w-4 h-4 ml-2" />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
