import { Star, Quote, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";

const reviews = [
  {
    id: 1,
    author: "Thomas M.",
    rating: 5,
    date: "vor 2 Wochen",
    text: "Schnelle Hilfe bei verstopftem Abfluss. Der Techniker war innerhalb von 45 Minuten da und hat das Problem professionell gelöst. Faire Preise!",
    service: "Sanitär",
  },
  {
    id: 2,
    author: "Sandra K.",
    rating: 5,
    date: "vor 1 Monat",
    text: "Komplette Badsanierung in nur 3 Wochen. Das Team war super freundlich und hat sauber gearbeitet. Bin begeistert vom Ergebnis!",
    service: "Badsanierung",
  },
  {
    id: 3,
    author: "Michael H.",
    rating: 5,
    date: "vor 3 Wochen",
    text: "Heizungswartung zum fairen Preis. Pünktlich, kompetent und transparent bei den Kosten. Kann ich nur empfehlen.",
    service: "Heizung",
  },
  {
    id: 4,
    author: "Anna B.",
    rating: 5,
    date: "vor 2 Monaten",
    text: "Notfall am Wochenende - Wasserrohrbruch! Trotzdem schnell jemand erreicht und Problem am selben Tag behoben. Top Service!",
    service: "Notdienst",
  },
  {
    id: 5,
    author: "Peter W.",
    rating: 4,
    date: "vor 1 Monat",
    text: "Gute Beratung für unsere neue Wärmepumpe. Förderungsanträge wurden auch unterstützt. Alles reibungslos verlaufen.",
    service: "Wärmepumpe",
  },
  {
    id: 6,
    author: "Julia S.",
    rating: 5,
    date: "vor 3 Wochen",
    text: "Endlich ein Handwerksbetrieb, der Termine einhält! Waschtisch-Montage perfekt erledigt. Gerne wieder!",
    service: "Sanitär",
  },
];

function StarRating({ rating }: { rating: number }) {
  return (
    <div className="flex items-center gap-0.5">
      {[1, 2, 3, 4, 5].map((star) => (
        <Star
          key={star}
          className={`w-4 h-4 ${
            star <= rating
              ? "fill-yellow-400 text-yellow-400"
              : "fill-muted text-muted"
          }`}
        />
      ))}
    </div>
  );
}

interface GoogleReviewsProps {
  showAll?: boolean;
  className?: string;
}

export default function GoogleReviews({ showAll = false, className = "" }: GoogleReviewsProps) {
  const displayReviews = showAll ? reviews : reviews.slice(0, 3);
  const averageRating = 4.9;
  const totalReviews = 127;

  return (
    <section className={`py-16 bg-muted/30 ${className}`}>
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <div className="flex items-center justify-center gap-3 mb-4">
            <div className="flex items-center gap-1">
              {[1, 2, 3, 4, 5].map((star) => (
                <Star key={star} className="w-6 h-6 fill-yellow-400 text-yellow-400" />
              ))}
            </div>
            <span className="text-3xl font-bold">{averageRating}</span>
          </div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2" data-testid="heading-google-reviews">
            Das sagen unsere Kunden
          </h2>
          <p className="text-muted-foreground">
            Basierend auf {totalReviews} Google-Bewertungen
          </p>
          <a
            href="https://g.page/review/aquapro24"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-sm text-primary hover:underline mt-2"
            data-testid="link-google-reviews"
          >
            Alle Bewertungen auf Google ansehen
            <ExternalLink className="w-3 h-3" />
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {displayReviews.map((review) => (
            <Card key={review.id} className="hover-elevate" data-testid={`card-review-${review.id}`}>
              <CardContent className="pt-6">
                <div className="flex items-start justify-between mb-3">
                  <div>
                    <p className="font-semibold" data-testid={`text-reviewer-${review.id}`}>{review.author}</p>
                    <p className="text-xs text-muted-foreground">{review.date}</p>
                  </div>
                  <Badge variant="secondary" className="text-xs">
                    {review.service}
                  </Badge>
                </div>
                <StarRating rating={review.rating} />
                <div className="mt-4 relative">
                  <Quote className="w-6 h-6 text-primary/20 absolute -top-1 -left-1" />
                  <p className="text-sm text-muted-foreground pl-4 italic" data-testid={`text-review-${review.id}`}>
                    {review.text}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-10">
          <div className="inline-flex items-center gap-4 p-4 bg-background rounded-lg border border-border">
            <img
              src="https://www.google.com/images/branding/googlelogo/2x/googlelogo_color_92x30dp.png"
              alt="Google"
              className="h-6"
            />
            <div className="text-left">
              <p className="font-semibold text-sm">Bewerten Sie uns!</p>
              <p className="text-xs text-muted-foreground">Ihre Meinung ist uns wichtig</p>
            </div>
            <Button variant="outline" size="sm" asChild data-testid="button-leave-review">
              <a
                href="https://g.page/review/aquapro24"
                target="_blank"
                rel="noopener noreferrer"
              >
                Bewertung abgeben
              </a>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
