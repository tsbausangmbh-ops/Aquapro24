import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Calendar as CalendarIcon,
  Shield,
  Star,
} from "lucide-react";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    primary: "0152 12274043",
    secondary: "24/7 Notdienst erreichbar",
    action: "tel:+4915212274043"
  },
  {
    icon: Mail,
    title: "E-Mail",
    primary: "info@aquapro24.de",
    secondary: "Antwort innerhalb 24h",
    action: "mailto:info@aquapro24.de"
  },
  {
    icon: MapPin,
    title: "Adresse",
    primary: "Hardenbergstr. 4",
    secondary: "80992 München",
    action: "https://maps.google.com/?q=Hardenbergstr.+4,+80992+München"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    primary: "Mo-Fr: 7:00 - 18:00",
    secondary: "Notdienst: 24/7",
    action: null
  }
];

export default function KontaktPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kontakt | AquaPro24 München - Sanitär & Heizung"
        description="Kontaktieren Sie AquaPro24 für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst unter 0152 12274043."
        canonical="https://aquapro24.de/kontakt"
        keywords="Kontakt Sanitär München, Heizung München Telefon, Klempner München Notdienst"
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-gradient-to-br from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <Phone className="w-3 h-3 mr-1" />
                Kontakt
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                So erreichen Sie uns
              </h1>
              <p className="text-lg text-muted-foreground">
                Wir sind für Sie da - telefonisch, per E-Mail oder persönlich vor Ort.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-12">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        className="text-primary font-medium hover:underline block"
                        data-testid={`link-contact-${info.title.toLowerCase()}`}
                      >
                        {info.primary}
                      </a>
                    ) : (
                      <p className="font-medium">{info.primary}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{info.secondary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA for Booking */}
        <section className="py-12 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-2xl lg:text-3xl font-bold mb-4">
              Termin online buchen
            </h2>
            <p className="text-lg mb-6 opacity-90">
              Buchen Sie bequem online Ihren Wunschtermin mit Echtzeit-Verfügbarkeit.
            </p>
            <Button variant="secondary" size="lg" asChild>
              <a href="/termin" data-testid="button-book-appointment">
                Jetzt Termin buchen
              </a>
            </Button>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-12 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Das erwartet Sie</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {[
                { text: "Kostenlose Erstberatung am Telefon" },
                { text: "Verbindliche Terminzusage" },
                { text: "Transparente Festpreise vor Arbeitsbeginn" },
                { text: "Pünktliche und saubere Arbeit" },
                { text: "Rückruf innerhalb von 2 Stunden (tagsüber)" },
                { text: "Meisterbetrieb-Qualität" },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              {/* Garantie */}
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">2 Jahre Garantie</h3>
                    <p className="text-sm text-muted-foreground">Auf alle unsere Arbeiten gewähren wir eine zweijährige Garantie.</p>
                  </div>
                </CardContent>
              </Card>

              {/* Bewertung */}
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                    <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">4.9/5 Sterne Bewertung</h3>
                    <p className="text-sm text-muted-foreground">Über 2.847 zufriedene Kunden in München vertrauen uns.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Google Maps - Full Width */}
        <section className="w-full">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.6!2d11.5!3d48.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzEyLjAiTiAxMcKwMzAnMDAuMCJF!5e0!3m2!1sde!2sde!4v1"
            width="100%"
            height="400"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="AquaPro24 Standort in München"
            data-testid="map-embed"
          />
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
