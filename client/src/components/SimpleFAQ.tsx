import { HelpCircle, LucideIcon } from "lucide-react";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

interface FAQItem {
  question: string;
  answer: string;
  icon?: LucideIcon;
}

interface SimpleFAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
}

export default function SimpleFAQ({ items, title = "Häufige Fragen", subtitle }: SimpleFAQProps) {
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
    <section className="py-8 lg:py-12" data-testid="section-simple-faq">
      <div className="max-w-4xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-8">
          <Badge variant="outline" className="mb-4 gap-1">
            <HelpCircle className="w-3 h-3" />
            FAQ
          </Badge>
          {title && (
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">{title}</h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-base max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <Accordion type="single" collapsible className="space-y-3">
          {items.map((faq, index) => (
            <AccordionItem 
              key={index} 
              value={`item-${index}`}
              className="border rounded-lg px-4 bg-card"
              data-testid={`faq-item-${index}`}
            >
              <AccordionTrigger className="text-left font-medium py-4 hover:no-underline">
                <span className="flex items-center gap-3">
                  <span className="text-muted-foreground font-normal text-sm">{index + 1}.</span>
                  {faq.question}
                </span>
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground pb-4">
                {faq.answer}
              </AccordionContent>
            </AccordionItem>
          ))}
        </Accordion>
      </div>
      
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
    </section>
  );
}
