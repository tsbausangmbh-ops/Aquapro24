import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send,
  MessageSquare,
  CheckCircle2,
  Building,
  Car
} from "lucide-react";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    primary: "089 123 456 789",
    secondary: "24/7 Notdienst erreichbar",
    action: "tel:+4989123456789"
  },
  {
    icon: Mail,
    title: "E-Mail",
    primary: "info@sanitaer-muenchen.de",
    secondary: "Antwort innerhalb 24h",
    action: "mailto:info@sanitaer-muenchen.de"
  },
  {
    icon: MapPin,
    title: "Adresse",
    primary: "Musterstraße 123",
    secondary: "80331 München",
    action: "https://maps.google.com/?q=München"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    primary: "Mo-Fr: 7:00 - 18:00",
    secondary: "Notdienst: 24/7",
    action: null
  }
];

const serviceAreas = [
  "München Zentrum",
  "Schwabing",
  "Bogenhausen",
  "Sendling",
  "Pasing",
  "Laim",
  "Neuhausen",
  "Maxvorstadt",
  "Haidhausen",
  "Trudering",
  "Giesing",
  "Moosach"
];

export default function KontaktPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    toast({
      title: "Nachricht gesendet",
      description: "Wir melden uns innerhalb von 24 Stunden bei Ihnen.",
    });
    
    setFormData({
      name: "",
      email: "",
      phone: "",
      service: "",
      message: ""
    });
    setIsSubmitting(false);
  };

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Kontakt | AquaPro24 - Sanitär & Heizung München"
        description="Kontaktieren Sie uns für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst unter 089 123 456 789. Kostenlose Beratung, schnelle Termine."
        canonical="https://aquapro24.de/kontakt"
        keywords="Kontakt Sanitär München, Heizung München Telefon, Klempner München Notdienst, Badsanierung München Beratung"
      />
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-16 lg:py-20 bg-gradient-to-br from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <MessageSquare className="w-3 h-3 mr-1" />
                Kontakt
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Sprechen Sie mit uns
              </h1>
              <p className="text-lg text-muted-foreground">
                Egal ob Notfall, Beratung oder Terminanfrage - wir sind für Sie da. 
                Rufen Sie uns an, schreiben Sie uns oder nutzen Sie unser Kontaktformular.
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

        {/* Main Content: Form + Info */}
        <section className="py-16 lg:py-20">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Schreiben Sie uns</h2>
                <Card>
                  <CardContent className="p-6">
                    <form onSubmit={handleSubmit} className="space-y-5">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div className="space-y-2">
                          <Label htmlFor="name">Name *</Label>
                          <Input
                            id="name"
                            placeholder="Ihr Name"
                            value={formData.name}
                            onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                            required
                            data-testid="input-contact-name"
                          />
                        </div>
                        <div className="space-y-2">
                          <Label htmlFor="phone">Telefon *</Label>
                          <Input
                            id="phone"
                            type="tel"
                            placeholder="Ihre Telefonnummer"
                            value={formData.phone}
                            onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                            required
                            data-testid="input-contact-phone"
                          />
                        </div>
                      </div>
                      
                      <div className="space-y-2">
                        <Label htmlFor="email">E-Mail *</Label>
                        <Input
                          id="email"
                          type="email"
                          placeholder="Ihre E-Mail-Adresse"
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          required
                          data-testid="input-contact-email"
                        />
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="service">Gewünschte Leistung</Label>
                        <Select
                          value={formData.service}
                          onValueChange={(value) => setFormData({ ...formData, service: value })}
                        >
                          <SelectTrigger data-testid="select-contact-service">
                            <SelectValue placeholder="Bitte wählen" />
                          </SelectTrigger>
                          <SelectContent>
                            <SelectItem value="sanitaer">Sanitär & Wasserinstallation</SelectItem>
                            <SelectItem value="bad">Badsanierung</SelectItem>
                            <SelectItem value="heizung">Heizung</SelectItem>
                            <SelectItem value="waermepumpe">Wärmepumpe</SelectItem>
                            <SelectItem value="haustechnik">Haustechnik</SelectItem>
                            <SelectItem value="notdienst">Notdienst</SelectItem>
                            <SelectItem value="sonstiges">Sonstiges</SelectItem>
                          </SelectContent>
                        </Select>
                      </div>

                      <div className="space-y-2">
                        <Label htmlFor="message">Ihre Nachricht *</Label>
                        <Textarea
                          id="message"
                          placeholder="Beschreiben Sie Ihr Anliegen..."
                          rows={5}
                          value={formData.message}
                          onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                          required
                          data-testid="textarea-contact-message"
                        />
                      </div>

                      <Button 
                        type="submit" 
                        size="lg" 
                        className="w-full"
                        disabled={isSubmitting}
                        data-testid="button-contact-submit"
                      >
                        {isSubmitting ? (
                          "Wird gesendet..."
                        ) : (
                          <>
                            <Send className="w-4 h-4 mr-2" />
                            Nachricht senden
                          </>
                        )}
                      </Button>

                      <p className="text-xs text-muted-foreground text-center">
                        Mit dem Absenden stimmen Sie unserer Datenschutzerklärung zu.
                      </p>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Additional Info */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Schneller Kontakt</h2>
                  <Card className="bg-accent/5 border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Notdienst 24/7</h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Bei Rohrbruch, Wasserschaden oder Heizungsausfall erreichen Sie uns rund um die Uhr.
                          </p>
                          <Button className="bg-accent text-accent-foreground" asChild>
                            <a href="tel:+4989123456789" data-testid="button-emergency-call">
                              <Phone className="w-4 h-4 mr-2" />
                              089 123 456 789
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Unser Einzugsgebiet</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Car className="w-5 h-5 text-secondary mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          Wir sind in ganz München und Umgebung für Sie unterwegs. 
                          Innerhalb Münchens ist die Anfahrt zu normalen Geschäftszeiten kostenlos.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas.map((area, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Das erwartet Sie</h3>
                  <div className="space-y-3">
                    {[
                      "Kostenlose Erstberatung am Telefon",
                      "Verbindliche Terminzusage",
                      "Transparente Festpreise vor Arbeitsbeginn",
                      "Pünktliche und saubere Arbeit",
                      "Rückruf innerhalb von 2 Stunden (tagsüber)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-16 lg:py-20 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-2xl font-bold mb-4">Unternehmensdaten</h2>
              <p className="text-muted-foreground">
                Für Geschäftskunden und offizielle Korrespondenz
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-semibold">AquaPro24 GmbH</p>
                        <p className="text-sm text-muted-foreground">Sanitär & Heizung München</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p>Musterstraße 123</p>
                        <p className="text-sm text-muted-foreground">80331 München</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p>089 123 456 789</p>
                        <p className="text-sm text-muted-foreground">Fax: 089 123 456 780</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p>info@sanitaer-muenchen.de</p>
                        <p className="text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-8 pt-6 text-sm text-muted-foreground">
                  <div className="grid md:grid-cols-3 gap-4">
                    <div>
                      <span className="font-medium text-foreground">Handelsregister:</span> HRB 123456
                    </div>
                    <div>
                      <span className="font-medium text-foreground">USt-IdNr:</span> DE123456789
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Geschäftsführer:</span> Max Mustermann
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
