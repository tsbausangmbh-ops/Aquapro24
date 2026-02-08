import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Badge } from "@/components/ui/badge";
import { HelpCircle } from "lucide-react";

export interface FAQItem {
  question: string;
  answer: string;
}

interface FAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function FAQ({ items, title = "Häufige Fragen", subtitle }: FAQProps) {
  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": items.map(item => ({
      "@type": "Question",
      "name": item.question,
      "acceptedAnswer": {
        "@type": "Answer",
        "text": item.answer
      }
    }))
  };

  return (
    <section className="py-8 lg:py-6" data-testid="section-faq">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 gap-1">
            <HelpCircle className="w-3 h-3" />
            FAQ
          </Badge>
          <h2 className="text-2xl md:text-xl sm:text-2xl lg:text-4xl font-bold mb-3">{title}</h2>
          {subtitle && (
            <p className="text-muted-foreground text-lg">{subtitle}</p>
          )}
        </div>
        
        <div className="bg-card border border-border rounded-xl overflow-hidden shadow-sm">
          <Accordion type="single" collapsible className="divide-y divide-border">
            {items.map((item, index) => (
              <AccordionItem 
                key={index} 
                value={`item-${index}`}
                className="border-0"
                data-testid={`faq-item-${index}`}
              >
                <AccordionTrigger className="text-left font-semibold py-5 px-6 hover:bg-muted/50 transition-colors [&[data-state=open]]:bg-muted/30">
                  <div className="flex items-center gap-3">
                    <span className="flex items-center justify-center w-7 h-7 rounded-full bg-primary/10 text-primary text-sm font-bold shrink-0">
                      {index + 1}
                    </span>
                    <span className="text-base">{item.question}</span>
                  </div>
                </AccordionTrigger>
                <AccordionContent className="px-6 pb-5 pt-0">
                  <div className="pl-10 text-muted-foreground leading-relaxed">
                    {item.answer}
                  </div>
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
