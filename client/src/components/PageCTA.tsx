import { Button } from "@/components/ui/button";
import { Calendar, MessageSquare, Phone, Clock, Shield } from "lucide-react";
import { Link } from "wouter";

interface PageCTAProps {
  variant?: "full" | "compact";
  title?: string;
  subtitle?: string;
}

export default function PageCTA({ 
  variant = "full",
  title = "Lassen Sie uns Ihr Anliegen besprechen",
  subtitle = "Wählen Sie Ihren bevorzugten Kontaktweg"
}: PageCTAProps) {
  if (variant === "compact") {
    return (
      <div className="bg-muted/50 rounded-lg p-6 mt-8">
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button size="lg" className="gap-2 w-full sm:w-auto" asChild data-testid="button-termin-compact">
            <Link href="/termin">
              <Calendar className="w-5 h-5" />
              Beratungstermin buchen
            </Link>
          </Button>
          <Button size="lg" variant="outline" className="gap-2 w-full sm:w-auto" asChild data-testid="button-kontakt-compact">
            <a href="mailto:info@aquapro24.de?subject=Kostenlose%20Beratung%20Anfrage">
              <MessageSquare className="w-5 h-5" />
              Kostenlos beraten lassen
            </a>
          </Button>
        </div>
      </div>
    );
  }

  return (
    <section className="py-6 bg-gradient-to-br from-secondary/10 via-background to-primary/5">
      <div className="max-w-4xl mx-auto px-4 text-center">
        <h2 className="text-2xl md:text-3xl font-bold mb-3">
          {title}
        </h2>
        <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
          {subtitle}
        </p>

        <div className="grid sm:grid-cols-2 gap-6 max-w-2xl mx-auto mb-8">
          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-4">
              <Calendar className="w-7 h-7 text-primary" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Beratungstermin buchen</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Wählen Sie online Ihren Wunschtermin mit Kalender-Funktion
            </p>
            <Button className="w-full gap-2" asChild data-testid="button-termin-full">
              <Link href="/termin">
                <Calendar className="w-4 h-4" />
                Termin wählen
              </Link>
            </Button>
          </div>

          <div className="bg-card border rounded-lg p-6 text-center">
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4">
              <MessageSquare className="w-7 h-7 text-accent" />
            </div>
            <h3 className="font-semibold text-lg mb-2">Kostenlose Beratung</h3>
            <p className="text-sm text-muted-foreground mb-4">
              Schildern Sie Ihr Anliegen - wir melden uns schnellstmöglich
            </p>
            <Button variant="outline" className="w-full gap-2" asChild data-testid="button-kontakt-full">
              <a href="mailto:info@aquapro24.de?subject=Kostenlose%20Beratung%20Anfrage">
                <MessageSquare className="w-4 h-4" />
                E-Mail schreiben
              </a>
            </Button>
          </div>
        </div>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <Phone className="w-4 h-4" />
            <span>24/7 Notdienst: <a href="tel:+498912274043" className="font-medium text-foreground hover:text-primary">089 444438872</a></span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <Clock className="w-4 h-4" />
            <span>Antwort innerhalb 2 Stunden</span>
          </div>
          <span className="hidden sm:inline">|</span>
          <div className="flex items-center gap-2">
            <Shield className="w-4 h-4" />
            <span>100% unverbindlich</span>
          </div>
        </div>
      </div>
    </section>
  );
}
