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
  { icon: Flame, text: "Heizkörper gluckert oder wird nicht warm", savings: "Spart 80€ Handwerkerkosten" },
  { icon: Flame, text: "Heizungsdruck zu niedrig – Anlage schaltet ab", savings: "3 Min. Selbsthilfe" },
  { icon: Wrench, text: "Thermostat auf 5, Heizkörper bleibt kalt", savings: "Oft 5 Min. Lösung" },
  { icon: Lightbulb, text: "Warmwasser schwankt oder wird nicht heiß", savings: "Vermeidet Wasserschaden" },
  { icon: Wrench, text: "Wasserhahn tropft oder Abfluss läuft langsam", savings: "Spart 120€/Jahr Wasser" },
  { icon: Shield, text: "Selbst lösen oder Hilfe holen – schnell entscheiden", savings: "Spart Zeit & Stress" }
];

export default function RatgeberDownload() {
  const [vorname, setVorname] = useState("");
  const [nachname, setNachname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [captcha, setCaptcha] = useState("");
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isSending, setIsSending] = useState(false);
  const [emailSent, setEmailSent] = useState(false);
  const { toast } = useToast();

  const isCaptchaValid = captcha.trim() === "4";
  const isFormValid = vorname.trim() !== "" && nachname.trim() !== "" && email.trim() !== "" && email.includes("@") && privacyAccepted && isCaptchaValid;

  const handleSendEmail = async () => {
    if (!isFormValid) {
      toast({
        title: "Bitte alle Felder ausfüllen",
        description: "Vorname, Nachname, E-Mail und Datenschutz-Bestätigung sind erforderlich.",
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
          vorname: vorname.trim(),
          nachname: nachname.trim(),
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
            <div className="flex flex-wrap gap-2 mb-3">
              <Badge className="bg-primary/10 text-primary border-primary/20">
                <BookOpen className="w-3 h-3 mr-1" />
                Kostenloser Ratgeber
              </Badge>
              <Badge variant="outline" className="text-green-600 border-green-300 bg-green-50 dark:bg-green-950/30">
                12.487 Downloads
              </Badge>
            </div>
            <h2 className="text-2xl md:text-3xl font-bold mb-3">
              Ratgeber München: Sparen Sie bis zu 500€ Handwerkerkosten
            </h2>
            
            <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-900 rounded-lg p-3 mb-4">
              <p className="text-sm text-amber-800 dark:text-amber-200">
                <strong>Kennen Sie das?</strong> Sonntagnacht, die Heizung macht komische Geräusche. 
                Montags rufen Sie den Handwerker – und zahlen 180€ für etwas, das Sie in 5 Minuten selbst hätten lösen können.
              </p>
            </div>
            
            <p className="text-muted-foreground mb-4">
              <strong>Mit unserem Ratgeber wissen Sie sofort:</strong> Ist es ein DIY-Problem oder brauche ich wirklich einen Profi? 
              Keine Panik mehr, keine unnötigen Kosten.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-4">
              {ratgeberTopics.map((topic, index) => (
                <div key={index} className="flex items-start gap-2 text-sm bg-muted/50 rounded-md p-2">
                  <topic.icon className="w-4 h-4 text-primary flex-shrink-0 mt-0.5" />
                  <div>
                    <span className="block">{topic.text}</span>
                    <span className="text-xs text-green-600 dark:text-green-400 font-medium">{topic.savings}</span>
                  </div>
                </div>
              ))}
            </div>

            <div className="bg-green-50 dark:bg-green-950/30 border border-green-200 dark:border-green-900 rounded-lg p-3 mb-4">
              <p className="text-sm text-green-800 dark:text-green-200">
                <strong>Nach dem Download:</strong> Sie haben das Wissen, um kleine Probleme selbst zu lösen – 
                und Sie wissen genau, wann Sie uns rufen sollten (ohne Panik).
              </p>
            </div>
          </div>

          <Card className="border-primary/20">
            <CardContent className="p-5">
              <div className="bg-primary/10 rounded-lg p-3 mb-4 text-center">
                <p className="text-sm font-medium text-primary">
                  Jetzt herunterladen – in 30 Sekunden in Ihrem Postfach
                </p>
              </div>
              
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-300 dark:border-amber-800 rounded-lg p-2 mb-4">
                <p className="text-xs text-amber-800 dark:text-amber-200 text-center font-medium">
                  Bonus: Notfall-Checkliste für Frostschutz inklusive
                </p>
              </div>
              
              <div className="flex items-start gap-4 mb-4">
                <div className="w-16 h-20 bg-primary/10 rounded-md flex items-center justify-center flex-shrink-0">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <div>
                  <h3 className="font-semibold mb-1">AquaPro 24 Haushalts-Ratgeber</h3>
                  <p className="text-sm text-muted-foreground">
                    12 Profi-Tipps, die Münchner Familien bis zu 500€ sparen
                  </p>
                  <div className="flex flex-wrap gap-1 mt-2">
                    <Badge variant="secondary" className="text-xs">PDF</Badge>
                    <Badge variant="secondary" className="text-xs">12 Kapitel</Badge>
                    <Badge variant="outline" className="text-xs text-green-600 border-green-300">Gratis</Badge>
                  </div>
                </div>
              </div>

              <div className="space-y-3">
                <div className="grid grid-cols-2 gap-2">
                  <div className="space-y-1">
                    <Label htmlFor="ratgeber-vorname" className="text-sm flex items-center gap-2">
                      <User className="w-3 h-3" />
                      Vorname *
                    </Label>
                    <Input
                      id="ratgeber-vorname"
                      type="text"
                      placeholder="Vorname"
                      value={vorname}
                      onChange={(e) => setVorname(e.target.value)}
                      data-testid="input-ratgeber-vorname"
                    />
                  </div>
                  <div className="space-y-1">
                    <Label htmlFor="ratgeber-nachname" className="text-sm flex items-center gap-2">
                      <User className="w-3 h-3" />
                      Nachname *
                    </Label>
                    <Input
                      id="ratgeber-nachname"
                      type="text"
                      placeholder="Nachname"
                      value={nachname}
                      onChange={(e) => setNachname(e.target.value)}
                      data-testid="input-ratgeber-nachname"
                    />
                  </div>
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

                <div className="space-y-1">
                  <Label htmlFor="ratgeber-captcha" className="text-sm flex items-center gap-2">
                    <Shield className="w-3 h-3" />
                    Sicherheitsfrage: Was ist 2 + 2? *
                  </Label>
                  <Input
                    id="ratgeber-captcha"
                    type="text"
                    placeholder="Ihre Antwort"
                    value={captcha}
                    onChange={(e) => setCaptcha(e.target.value)}
                    data-testid="input-ratgeber-captcha"
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

                <div className="flex flex-wrap items-center justify-center gap-3 text-xs text-muted-foreground pt-2 border-t">
                  <div className="flex items-center gap-1">
                    <Shield className="w-3 h-3" />
                    <span>Kein Spam</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <CheckCircle2 className="w-3 h-3" />
                    <span>Abmeldung jederzeit</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Mail className="w-3 h-3" />
                    <span>DSGVO-konform</span>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
