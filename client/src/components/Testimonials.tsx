import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Michael Schmidt",
    role: "CEO",
    company: "TechStart GmbH",
    content: "Der Chatbot hat unsere Lead-Qualifizierung komplett transformiert. Wir generieren jetzt 3x mehr qualifizierte Leads bei halbierten Kosten.",
    rating: 5,
    initials: "MS",
  },
  {
    name: "Sarah Weber",
    role: "Head of Customer Service",
    company: "E-Commerce Plus",
    content: "Unsere Kunden sind begeistert von den schnellen Antworten. Die Kundenzufriedenheit ist um 40% gestiegen seit wir den Chatbot nutzen.",
    rating: 5,
    initials: "SW",
  },
  {
    name: "Thomas Müller",
    role: "Marketing Director",
    company: "Digital Solutions AG",
    content: "Die Integration war kinderleicht und der Support ist erstklassig. Nach nur 2 Wochen hatten wir einen vollständig konfigurierten Chatbot live.",
    rating: 5,
    initials: "TM",
  },
  {
    name: "Lisa Hoffmann",
    role: "Geschäftsführerin",
    company: "Immobilien Hoffmann",
    content: "Als Immobilienmaklerin spare ich jetzt Stunden pro Tag, weil der Chatbot Erstanfragen vorqualifiziert und Besichtigungstermine bucht.",
    rating: 5,
    initials: "LH",
  },
  {
    name: "Dr. Martin König",
    role: "Praxisinhaber",
    company: "Zahnarztpraxis König",
    content: "Patienten können jetzt rund um die Uhr Termine buchen. Das entlastet unser Team enorm und wir haben weniger Terminausfälle.",
    rating: 5,
    initials: "MK",
  },
  {
    name: "Anna Fischer",
    role: "COO",
    company: "FinTech Solutions",
    content: "Die DSGVO-Konformität war für uns entscheidend. Der Chatbot erfüllt alle Anforderungen und unsere Kunden vertrauen dem System.",
    rating: 5,
    initials: "AF",
  },
];

const logos = [
  "TechStart", "E-Commerce Plus", "Digital Solutions", "FinTech Pro", 
  "MediCare", "AutoHaus", "Reise Expert", "Sport Direct"
];

export default function Testimonials() {
  return (
    <section className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Das sagen unsere Kunden
          </h2>
          <p className="text-lg text-muted-foreground">
            Über 500 Unternehmen vertrauen bereits auf unsere KI-Chatbot-Lösung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                  ))}
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-muted/30" />
                  <p className="text-sm leading-relaxed pl-4" data-testid={`text-testimonial-${index}`}>
                    "{testimonial.content}"
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarFallback className="bg-secondary/10 text-secondary text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <p className="font-semibold text-sm">{testimonial.name}</p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.role}, {testimonial.company}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="border-t border-border pt-12">
          <p className="text-center text-sm text-muted-foreground mb-8">
            Vertraut von führenden Unternehmen
          </p>
          <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-12">
            {logos.map((logo, index) => (
              <div 
                key={index}
                className="text-lg font-semibold text-muted-foreground/50"
                data-testid={`text-logo-${index}`}
              >
                {logo}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
