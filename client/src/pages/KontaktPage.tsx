import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import InternalLinks from "@/components/InternalLinks";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { apiRequest } from "@/lib/queryClient";
import { Checkbox } from "@/components/ui/checkbox";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Calendar as CalendarIcon,
  Shield,
  Star,
  Send,
  Loader2,
} from "lucide-react";
import { HeroPicture } from "@/components/ResponsiveHero";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    primary: "089 444438872",
    secondary: "24/7 Notdienst erreichbar",
    action: "tel:+4989444438872"
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
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [submittedEmail, setSubmittedEmail] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!formData.name || !formData.email || !formData.subject || !formData.message) {
      toast({
        title: "Fehler",
        description: "Bitte füllen Sie alle Pflichtfelder aus.",
        variant: "destructive",
      });
      return;
    }

    if (!privacyAccepted) {
      toast({
        title: "Datenschutz",
        description: "Bitte stimmen Sie der Datenschutzerklärung zu.",
        variant: "destructive",
      });
      return;
    }

    setIsSubmitting(true);
    try {
      await apiRequest("POST", "/api/contact", formData);
      
      setSubmittedEmail(formData.email);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setPrivacyAccepted(false);
      setIsSubmitted(true);
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Beim Senden ist ein Fehler aufgetreten. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Sanitär AquaPro 24 Kontakt München | Angebot anfordern"
        description="Kontakt AquaPro 24 München: Anfrage stellen, Angebot erhalten & Termin vereinbaren – schnell & unverbindlich."
        canonical="https://aquapro24.de/kontakt"
        keywords="Sanitär Kontakt München kostenlos, Heizung Anfrage Festpreis, Klempner Notdienst 089 444438872, Kostenvoranschlag unverbindlich München, Beratungstermin Badsanierung buchen, Wärmepumpe Beratung München, Erstberatung kostenlos vor Ort"
        ogImageAlt="Kontakt AquaPro 24 München Terminbuchung Anfrage - Sanitär Heizung Beratung kostenlos"
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative pt-16 pb-6 lg:pt-20 lg:pb-8 overflow-hidden">
          <HeroPicture heroKey="hero_kontakt" alt="" />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4 gap-1">
                <Phone className="w-3 h-3" />
                Kontakt
              </Badge>
              <h1 className="text-xl sm:text-2xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                Kontakt AquaPro 24 München – Kostenlose Beratung
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Kontakt</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Anfrage</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kostenvoranschlag anfordern</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst Telefon</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">24/7 erreichbar</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Beratungstermin buchen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Angebot einholen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Terminanfrage stellen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">schnelle Rückmeldung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Hardenbergstr. 4</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">80992 München</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner rufen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizungsmonteur kontaktieren</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung anfragen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Beratung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vor-Ort-Termin</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Erstberatung kostenlos</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">ehrliche Einschätzung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">faire Festpreise</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">info@aquapro24.de</span>
              </div>
              <p className="text-sm sm:text-base lg:text-lg text-white/90 mb-4">
                <strong>Fragen zu Ihrem Projekt?</strong> Wir sind für Sie da - telefonisch, 
                per E-Mail oder persönlich vor Ort.
              </p>
              <p className="text-white/80">
                Kostenlose Erstberatung, ehrliche Einschätzung. Wir helfen gerne.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="py-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="text-base sm:text-lg font-semibold mb-2">{info.title}</h3>
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

        {/* Contact Form Section */}
        <section className="py-6 bg-muted/30">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-8">
              <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-3">Sanitär Anfrage München: Schreiben Sie uns</h2>
              <p className="text-muted-foreground">
                Haben Sie eine Frage oder möchten Sie ein Angebot? Wir antworten innerhalb von 24 Stunden.
              </p>
            </div>
            
            <Card>
              <CardContent className="p-6">
                {isSubmitted ? (
                  <div className="text-center py-8 space-y-4" data-testid="contact-success-message">
                    <div className="w-16 h-16 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto">
                      <CheckCircle2 className="w-8 h-8 text-green-600 dark:text-green-400" />
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold">Nachricht erfolgreich gesendet!</h3>
                    <p className="text-muted-foreground max-w-md mx-auto">
                      Vielen Dank für Ihre Anfrage. Unser Team hat Ihre Nachricht erhalten und meldet sich innerhalb von 24 Stunden bei Ihnen.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Eine Bestätigung wurde an <span className="font-semibold text-foreground">{submittedEmail}</span> gesendet.
                    </p>
                    <p className="text-sm text-muted-foreground">
                      Bei dringenden Anliegen erreichen Sie uns unter: <a href="tel:089444438872" className="text-primary font-semibold">089 444438872</a>
                    </p>
                    <Button 
                      variant="outline" 
                      onClick={() => setIsSubmitted(false)}
                      data-testid="button-contact-new-message"
                    >
                      Neue Nachricht schreiben
                    </Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-4">
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="name">Name <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span></Label>
                        <Input
                          id="name"
                          placeholder="Ihr vollständiger Name"
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          required
                          aria-required="true"
                          autoComplete="name"
                          data-testid="input-contact-name"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span></Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="ihre@email.de"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          aria-required="true"
                          autoComplete="email"
                          data-testid="input-contact-email"
                        />
                      </div>
                    </div>
                    
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-2">
                        <Label htmlFor="phone">Telefon <span className="text-muted-foreground">(optional)</span></Label>
                        <Input
                          id="phone"
                          type="tel"
                          placeholder="0152 12345678"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          autoComplete="tel"
                          data-testid="input-contact-phone"
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="subject">Betreff <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span></Label>
                        <Input
                          id="subject"
                          placeholder="Worum geht es?"
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          required
                          aria-required="true"
                          data-testid="input-contact-subject"
                        />
                      </div>
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="message">Ihre Nachricht <span aria-hidden="true">*</span><span className="sr-only">(Pflichtfeld)</span></Label>
                      <Textarea
                        id="message"
                        placeholder="Beschreiben Sie Ihr Anliegen..."
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        required
                        aria-required="true"
                        data-testid="input-contact-message"
                      />
                    </div>
                    
                    <div className="flex items-start gap-3">
                      <Checkbox 
                        id="privacy"
                        checked={privacyAccepted}
                        onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                        data-testid="checkbox-contact-privacy"
                      />
                      <Label htmlFor="privacy" className="text-sm text-muted-foreground leading-relaxed cursor-pointer">
                        Ich habe die{" "}
                        <a href="/datenschutz" target="_blank" className="text-primary underline hover:no-underline" data-testid="link-contact-datenschutz">
                          Datenschutzerklärung
                        </a>{" "}
                        gelesen und stimme der Verarbeitung meiner Daten zu. *
                      </Label>
                    </div>

                    <Button 
                      type="submit" 
                      size="lg" 
                      className="w-full"
                      disabled={isSubmitting || !privacyAccepted}
                      data-testid="button-contact-submit"
                    >
                      {isSubmitting ? (
                        <>
                          <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4 mr-2" />
                          Nachricht senden
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </section>

        {/* CTA for Booking */}
        <section className="py-6 bg-primary text-primary-foreground">
          <div className="max-w-4xl mx-auto px-4 lg:px-8 text-center">
            <CalendarIcon className="w-12 h-12 mx-auto mb-4 opacity-90" />
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold mb-4">
              Handwerker Termin München: Online Wunschtermin buchen
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
        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-lg sm:text-xl lg:text-3xl font-bold text-center mb-8">Klempner Service München: Das erwartet Sie bei AquaPro 24</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {[
                { text: "Kostenlose Erstberatung am Telefon" },
                { text: "Verbindliche Terminzusage" },
                { text: "Transparente Festpreise vor Arbeitsbeginn" },
                { text: "Pünktliche und saubere Arbeit" },
                { text: "Rückruf innerhalb von 2 Stunden (tagsüber)" },
                { text: "Partnernetzwerk-Qualität" },
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
                    <h3 className="text-base sm:text-lg font-bold">Sanitär Garantie München: 2 Jahre auf alle Arbeiten</h3>
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
                    <h3 className="text-base sm:text-lg font-bold">Klempner Bewertungen München: 4.9/5 Sterne</h3>
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
            title="AquaPro 24 Standort in München"
            data-testid="map-embed"
          />
        </section>
      </main>
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="border-t pt-4 space-y-1">
          <p className="text-[10px] text-muted-foreground/60 font-semibold">Hinweis zum Vertragsabschluss</p>
          <p className="text-[10px] text-muted-foreground/60">
            Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            <a href="/impressum" className="underline hover:text-primary">Impressum</a> · <a href="/agb" className="underline hover:text-primary">AGB</a>
          </p>
        </div>
      </section>
      <InternalLinks
        title="Unsere Leistungen"
        variant="footer-cta"
        links={[
          { href: "/sanitaer", text: "Sanitär München", description: "Rohrreinigung, Armaturen, WC" },
          { href: "/heizung", text: "Heizung München", description: "Wartung, Reparatur, Austausch" },
          { href: "/bad", text: "Badsanierung", description: "Komplettsanierung aus einer Hand" },
          { href: "/termin", text: "Online-Termin buchen", description: "Schnell & unkompliziert" },
          { href: "/faq", text: "Häufige Fragen", description: "Preise, Ablauf & mehr" },
        ]}
      />
      <Footer />
    </div>
  );
}
