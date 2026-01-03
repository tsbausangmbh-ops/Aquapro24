import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { 
  Send, 
  FileText, 
  CheckCircle2, 
  BookOpen,
  Shield,
  Lightbulb,
  Wrench,
  Flame,
  User,
  Mail,
  Phone
} from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

const ratgeberTopics = [
  { icon: Shield, text: "Schnellhilfe im Notfall – Rohrbruch & Heizungsausfall" },
  { icon: Flame, text: "Heizung: Heizkörper, Druck, Störungscodes, Wartung" },
  { icon: Wrench, text: "Warmwasser: Boiler, Durchlauferhitzer, Mischer" },
  { icon: Lightbulb, text: "Armaturen & Abfluss: Tropfen, Verstopfung, Leckage" },
  { icon: Shield, text: "Badsanierung & Leitungsmodernisierung planen" },
  { icon: Lightbulb, text: "Kostenfaktoren & Anfrage-Checkliste" }
];

export default function RatgeberDownload() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const isFormValid = name.trim() !== "" && email.trim() !== "" && email.includes("@") && privacyAccepted;

  const handleSendEmail = async () => {
    if (!isFormValid) {
      toast({
        title: "Bitte alle Felder ausfüllen",
        description: "Name, E-Mail und Datenschutz-Bestätigung sind erforderlich.",
        variant: "destructive"
      });
      return;
    }

    setIsSending(true);
    
    try {
      const response = await fetch("/api/ratgeber-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          name: name.trim(),
          email: email.trim(),
          phone: phone.trim(),
          privacyAccepted: true 
        })
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "E-Mail-Versand fehlgeschlagen");
      }

      setEmailSent(true);
      toast({
        title: "E-Mail versendet!",
        description: `Der Ratgeber wurde an ${email.trim()} gesendet. Prüfen Sie Ihren Posteingang.`
      });
    } catch (error) {
      toast({
        title: "Fehler beim Versand",
        description: error instanceof Error ? error.message : "Bitte versuchen Sie es später erneut.",
        variant: "destructive"
      });
    } finally {
      setIsSending(false);
    }
  };

  return (
    <section className="py-6 lg:py-8 bg-gradient-to-br from-primary/5 via-background to-accent/5">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-6 items-center">
          <div>
            <Badge className="mb-3 bg-primary/10 text-primary border-primary/20">
              <BookOpen className="w-3 h-3 mr-1" />
              Kostenloser Ratgeber
            </Badge>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ratgeber München: Profi-Tipps für Ihr Zuhause
            </h2>
            <p className="text-muted-foreground mb-2">
              Praxiswissen, Soforthilfe und Entscheidungsgrundlagen rund um Heizung und Sanitär. 
              Verständlich, praxisnah – für Eigentümer, Vermieter und Bewohner in München.
            </p>
            <p className="text-muted-foreground mb-4 text-sm">
              <strong>12 Kapitel</strong> mit konkreten Tipps, die Ihnen Zeit, Geld und Nerven sparen. 
              Erfahren Sie, wann Sie selbst handeln können – und wann Sie besser einen Fachmann rufen.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {ratgeberTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2 text-sm bg-muted/50 rounded-md p-2">
                  <topic.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{topic.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <FileText className="w-4 h-4" />
              <span>12 Kapitel</span>
              <span className="text-muted-foreground/50">|</span>
              <span>Sofort-Download</span>
              <span className="text-muted-foreground/50">|</span>
              <span>100% kostenlos</span>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-20 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AquaPro 24 Haushalts-Ratgeber</h3>
                  <p className="text-sm text-muted-foreground">
                    Sanitär & Heizung Tipps vom Münchner Fachbetrieb
                  </p>
                  <Badge variant="secondary" className="mt-2 text-xs">
                    PDF, 12 Kapitel
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="space-y-1">
                  <Label htmlFor="ratgeber-name" className="text-sm flex items-center gap-2">
                    <User className="w-3 h-3" />
                    Name *
                  </Label>
                  <Input
                    id="ratgeber-name"
                    type="text"
                    placeholder="Ihr Name"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    data-testid="input-ratgeber-name"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="ratgeber-email" className="text-sm flex items-center gap-2">
                    <Mail className="w-3 h-3" />
                    E-Mail *
                  </Label>
                  <Input
                    id="ratgeber-email"
                    type="email"
                    placeholder="ihre@email.de"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    data-testid="input-ratgeber-email"
                  />
                </div>

                <div className="space-y-1">
                  <Label htmlFor="ratgeber-phone" className="text-sm flex items-center gap-2">
                    <Phone className="w-3 h-3" />
                    Telefon (optional)
                  </Label>
                  <Input
                    id="ratgeber-phone"
                    type="tel"
                    placeholder="Ihre Telefonnummer"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    data-testid="input-ratgeber-phone"
                  />
                </div>

                <div className="flex items-start gap-3 pt-2">
                  <Checkbox 
                    id="privacy-consent"
                    checked={privacyAccepted}
                    onCheckedChange={(checked) => setPrivacyAccepted(checked === true)}
                    data-testid="checkbox-privacy-consent"
                  />
                  <label 
                    htmlFor="privacy-consent" 
                    className="text-sm text-muted-foreground cursor-pointer leading-tight"
                  >
                    Ich habe die{" "}
                    <Link href="/datenschutz" className="text-primary hover:underline">
                      Datenschutzerklärung
                    </Link>{" "}
                    gelesen und akzeptiere diese. *
                  </label>
                </div>

                {emailSent ? (
                  <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-4 text-center">
                    <CheckCircle2 className="w-8 h-8 text-green-600 mx-auto mb-2" />
                    <p className="font-semibold text-green-800 dark:text-green-300">
                      Ratgeber versendet!
                    </p>
                    <p className="text-sm text-green-700 dark:text-green-400 mt-1">
                      Prüfen Sie Ihren Posteingang ({email})
                    </p>
                  </div>
                ) : (
                  <>
                    <Button 
                      className="w-full gap-2"
                      onClick={handleSendEmail}
                      disabled={!isFormValid || isSending}
                      data-testid="button-download-ratgeber"
                    >
                      {isSending ? (
                        <>
                          <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                          Wird gesendet...
                        </>
                      ) : (
                        <>
                          <Send className="w-4 h-4" />
                          Ratgeber per E-Mail erhalten
                        </>
                      )}
                    </Button>

                    {isFormValid && (
                      <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                        <CheckCircle2 className="w-3 h-3" />
                        Alle Felder ausgefüllt - E-Mail bereit
                      </div>
                    )}
                  </>
                )}

                <p className="text-xs text-muted-foreground text-center">
                  * Pflichtfelder
                </p>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
