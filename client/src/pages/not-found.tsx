import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { AlertCircle, Home, Phone } from "lucide-react";
import { Link } from "wouter";
import SEO from "@/components/SEO";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

export default function NotFound() {
  return (
    <div className="min-h-screen bg-background flex flex-col">
      <SEO
        title="Seite nicht gefunden | 404 | AquaPro 24 München"
        description="Diese Seite existiert leider nicht. Besuchen Sie unsere Startseite für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst: 0152 12274043"
        canonical="https://aquapro24.de/404"
      />
      <Header />
      <main className="flex-1 flex items-center justify-center p-4">
        <Card className="w-full max-w-md">
          <CardContent className="pt-6 text-center">
            <div className="flex flex-col items-center gap-4 mb-6">
              <AlertCircle className="h-16 w-16 text-destructive" />
              <h1 className="text-3xl font-bold">Seite nicht gefunden</h1>
              <p className="text-muted-foreground">
                Die angeforderte Seite existiert leider nicht oder wurde verschoben.
              </p>
            </div>

            <div className="flex flex-col gap-3">
              <Button asChild>
                <Link href="/">
                  <Home className="w-4 h-4 mr-2" />
                  Zur Startseite
                </Link>
              </Button>
              <Button variant="outline" asChild>
                <a href="tel:+4915212274043">
                  <Phone className="w-4 h-4 mr-2" />
                  Notdienst anrufen
                </a>
              </Button>
            </div>
          </CardContent>
        </Card>
      </main>
      <Footer />
    </div>
  );
}
