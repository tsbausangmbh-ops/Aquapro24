import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Checkbox } from "@/components/ui/checkbox";
import { Badge } from "@/components/ui/badge";
import { 
  Download, 
  FileText, 
  CheckCircle2, 
  BookOpen,
  Shield,
  Lightbulb,
  Wrench,
  Flame
} from "lucide-react";
import { Link } from "wouter";
import { useToast } from "@/hooks/use-toast";

const ratgeberTopics = [
  { icon: Wrench, text: "Wasserschaden Erste Hilfe" },
  { icon: Flame, text: "Heizung richtig warten" },
  { icon: Lightbulb, text: "Energiekosten senken" },
  { icon: Shield, text: "Fördermittel sichern" }
];

export default function RatgeberDownload() {
  const [privacyAccepted, setPrivacyAccepted] = useState(false);
  const [isDownloading, setIsDownloading] = useState(false);
  const { toast } = useToast();

  const handleDownload = async () => {
    if (!privacyAccepted) {
      toast({
        title: "Datenschutz erforderlich",
        description: "Bitte bestätigen Sie die Datenschutzerklärung, um den Ratgeber herunterzuladen.",
        variant: "destructive"
      });
      return;
    }

    setIsDownloading(true);
    
    try {
      const response = await fetch("/api/ratgeber-download", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ privacyAccepted: true })
      });

      if (!response.ok) {
        throw new Error("Download fehlgeschlagen");
      }

      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement("a");
      a.href = url;
      a.download = "AquaPro24_Ratgeber_Sanitaer_Heizung.pdf";
      document.body.appendChild(a);
      a.click();
      window.URL.revokeObjectURL(url);
      document.body.removeChild(a);

      toast({
        title: "Download gestartet",
        description: "Ihr Ratgeber wird heruntergeladen. Viel Erfolg beim Lesen!"
      });
    } catch (error) {
      toast({
        title: "Fehler beim Download",
        description: "Bitte versuchen Sie es später erneut oder kontaktieren Sie uns.",
        variant: "destructive"
      });
    } finally {
      setIsDownloading(false);
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
            <p className="text-muted-foreground mb-4">
              Unser kostenloser Ratgeber mit Expertenwissen zu Sanitär, Heizung und Haustechnik. 
              Lernen Sie, wie Sie kleine Probleme selbst lösen und wann Sie einen Fachmann rufen sollten.
            </p>
            
            <div className="grid grid-cols-2 gap-3 mb-4">
              {ratgeberTopics.map((topic, index) => (
                <div key={index} className="flex items-center gap-2 text-sm">
                  <topic.icon className="w-4 h-4 text-primary flex-shrink-0" />
                  <span>{topic.text}</span>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-2 text-sm text-muted-foreground mb-4">
              <FileText className="w-4 h-4" />
              <span>24 Seiten PDF</span>
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
                    PDF, 2.4 MB
                  </Badge>
                </div>
              </div>

              <div className="space-y-3">
                <div className="flex items-start gap-3">
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
                    gelesen und akzeptiere diese. Meine Daten werden nur für den Download verwendet.
                  </label>
                </div>

                <Button 
                  className="w-full gap-2"
                  onClick={handleDownload}
                  disabled={!privacyAccepted || isDownloading}
                  data-testid="button-download-ratgeber"
                >
                  {isDownloading ? (
                    <>
                      <div className="w-4 h-4 border-2 border-white/30 border-t-white rounded-full animate-spin" />
                      Download läuft...
                    </>
                  ) : (
                    <>
                      <Download className="w-4 h-4" />
                      Ratgeber kostenlos herunterladen
                    </>
                  )}
                </Button>

                {privacyAccepted && (
                  <div className="flex items-center gap-2 text-xs text-green-600 dark:text-green-400">
                    <CheckCircle2 className="w-3 h-3" />
                    Datenschutz bestätigt - Download bereit
                  </div>
                )}
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}
