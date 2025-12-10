import { Card, CardContent } from "@/components/ui/card";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { Star, Quote, CheckCircle2 } from "lucide-react";


const testimonials = [
  {
    name: "Familie Müller",
    location: "Schwabing",
    content: "Heizung ausgefallen an einem Sonntagabend im Januar. Der Monteur war in 35 Minuten da und hat alles repariert. Preis war genau wie am Telefon besprochen. Absolute Empfehlung!",
    rating: 5,
    initials: "FM",
    service: "Heizungsnotdienst",
  },
  {
    name: "Thomas K.",
    location: "Bogenhausen",
    content: "Rohrbruch im Keller entdeckt. Innerhalb von 30 Minuten war der Techniker da und hat den Schaden begrenzt. Professionell, freundlich und transparent bei den Kosten.",
    rating: 5,
    initials: "TK",
    service: "Rohrbruch",
  },
  {
    name: "Hausverwaltung Schneider",
    location: "Maxvorstadt",
    content: "Wir arbeiten seit 5 Jahren mit dem Münchner Heizung & Sanitär Team zusammen. Zuverlässig, pünktlich und faire Preise. Unsere Mieter sind immer zufrieden.",
    rating: 5,
    initials: "HS",
    service: "Wartung",
  },
  {
    name: "Maria S.",
    location: "Sendling",
    content: "Endlich ein Handwerker, der ehrlich abrechnet! Keine versteckten Kosten, Festpreis wurde eingehalten. Das Bad ist jetzt wunderschön renoviert.",
    rating: 5,
    initials: "MS",
    service: "Badsanierung",
  },
  {
    name: "Peter B.",
    location: "Pasing",
    content: "Verstopfter Abfluss am Wochenende. Der Notdienst hat sofort geholfen. Super netter Monteur, hat auch noch ein paar Tipps zur Vorbeugung gegeben.",
    rating: 5,
    initials: "PB",
    service: "Rohrreinigung",
  },
  {
    name: "Familie Özdemir",
    location: "Giesing",
    content: "Die Heizungswartung war schnell erledigt und der Monteur hat alles erklärt. Jetzt läuft die Heizung viel effizienter. Sehr zu empfehlen!",
    rating: 5,
    initials: "FÖ",
    service: "Wartung",
  },
];

export default function Testimonials() {
  return (
    <section id="testimonials" className="py-16 lg:py-24 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <div className="flex justify-center gap-1 mb-4">
            {[1, 2, 3, 4, 5].map((star) => (
              <Star key={star} className="w-6 h-6 fill-primary text-primary" />
            ))}
          </div>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            München spricht über uns: 4.9 Sterne für Sanitär & Wasserinstallation
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Werden auch Sie Teil unserer zufriedenen Kundenfamilie
          </h3>
          <p className="text-lg text-muted-foreground mb-4">
            <span className="text-foreground font-bold text-xl">2.547</span> zufriedene Kunden in München, Schwabing, Bogenhausen & Sendling vertrauen uns bereits.
          </p>
          <div className="flex flex-wrap justify-center gap-4 text-sm">
            <Badge variant="secondary" className="gap-1">
              <Star className="w-3 h-3 fill-current" />
              4.9 Sterne bei Google (312 Bewertungen)
            </Badge>
            <Badge variant="outline" className="gap-1">
              <CheckCircle2 className="w-3 h-3" />
              Echte Stimmen, echte Adressen – prüfen Sie jeden Stadtteil
            </Badge>
          </div>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="hover-elevate">
              <CardContent className="p-6">
                <div className="flex justify-between items-start mb-4">
                  <div className="flex gap-0.5">
                    {Array.from({ length: testimonial.rating }).map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                    ))}
                  </div>
                  <Badge variant="outline" className="text-xs">
                    {testimonial.service}
                  </Badge>
                </div>
                
                <div className="relative mb-4">
                  <Quote className="absolute -top-1 -left-1 w-6 h-6 text-muted/40" />
                  <p className="text-sm leading-relaxed pl-4" data-testid={`text-testimonial-${index}`}>
                    {testimonial.content}
                  </p>
                </div>
                
                <div className="flex items-center gap-3 pt-4 border-t border-border">
                  <Avatar>
                    <AvatarFallback className="bg-secondary/10 text-secondary text-sm font-medium">
                      {testimonial.initials}
                    </AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <p className="font-semibold text-sm flex items-center gap-1">
                      {testimonial.name}
                      <CheckCircle2 className="w-3.5 h-3.5 text-accent" />
                    </p>
                    <p className="text-xs text-muted-foreground">
                      {testimonial.location}
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="mt-12 text-center">
          <p className="text-muted-foreground mb-2">
            Werden auch Sie einer unserer zufriedenen Kunden.{" "}
            <span className="text-foreground font-medium">Wenn Sie uns anrufen, helfen wir Ihnen genauso zuverlässig.</span>
          </p>
          <p className="text-sm text-muted-foreground">
            Alle Bewertungen sind echt und verifiziert.{" "}
            <a 
              href="#" 
              className="text-secondary underline hover:no-underline"
              data-testid="link-google-reviews"
            >
              Mehr auf Google lesen
            </a>
          </p>
        </div>
      </div>
    </section>
  );
}
