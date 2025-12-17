import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Cookie, Shield, Settings, Info } from "lucide-react";

export default function CookieRichtliniePage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Cookie-Richtlinie | DSGVO 2025 | AquaPro24 München"
        description="Cookie-Richtlinie gemäß DSGVO und ePrivacy für AquaPro24 München. Informationen zu Cookies, KI-Chatbot, OpenAI und Ihre Einstellungsmöglichkeiten."
        canonical="https://aquapro24.de/cookie-richtlinie"
      />
      <Header />
      <main id="main-content" className="pt-8 pb-4 lg:pt-10 lg:pb-6">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="gap-1">
              <Cookie className="w-3 h-3" />
              Cookie-Richtlinie
            </Badge>
            <Badge variant="outline">Stand: Dezember 2025</Badge>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Cookie-Richtlinie</h1>
          
          <Card className="mb-4 bg-muted/30">
            <CardContent className="p-6">
              <div className="flex items-start gap-4">
                <Info className="w-6 h-6 text-secondary flex-shrink-0 mt-0.5" />
                <div>
                  <h2 className="font-semibold mb-2">Was sind Cookies?</h2>
                  <p className="text-sm text-muted-foreground">
                    Cookies sind kleine Textdateien, die auf Ihrem Gerät gespeichert werden, wenn Sie unsere 
                    Website besuchen. Sie helfen uns, die Website funktionsfähig zu halten und Ihr 
                    Nutzungserlebnis zu verbessern.
                  </p>
                </div>
              </div>
            </CardContent>
          </Card>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
            
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Verantwortlicher</h2>
              <p className="text-muted-foreground mb-4">
                Verantwortlich für die Verwendung von Cookies auf dieser Website ist:
              </p>
              <p className="text-muted-foreground mb-4">
                AquaPro24<br />
                Inhaber: Mustafa Sakar<br />
                Hardenbergstr. 4<br />
                80992 München<br />
                USt-IdNr: folgt<br />
                E-Mail: info@aquapro24.de<br />
                Telefon: 0152 12274043
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Rechtsgrundlage für Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Die Verwendung von Cookies erfolgt auf unterschiedlichen Rechtsgrundlagen:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>
                  <strong>Technisch notwendige Cookies:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse 
                  an der Bereitstellung einer funktionsfähigen Website)
                </li>
                <li>
                  <strong>Funktionale Cookies:</strong> Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung)
                </li>
                <li>
                  <strong>Analyse-Cookies:</strong> Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung)
                </li>
                <li>
                  <strong>Marketing-Cookies:</strong> Art. 6 Abs. 1 lit. a DSGVO (Ihre Einwilligung)
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Arten von Cookies</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                        <Shield className="w-5 h-5 text-accent" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Technisch notwendige Cookies</h3>
                          <Badge variant="secondary" className="text-xs">Erforderlich</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Diese Cookies sind für den Betrieb der Website unbedingt erforderlich und können 
                          nicht deaktiviert werden. Sie werden in der Regel nur als Reaktion auf von Ihnen 
                          getätigte Aktionen gesetzt, die einer Dienstanforderung entsprechen.
                        </p>
                        <div className="bg-muted/50 rounded-md p-3 text-xs">
                          <div className="grid grid-cols-3 gap-2 font-medium mb-2">
                            <span>Cookie</span>
                            <span>Zweck</span>
                            <span>Speicherdauer</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-muted-foreground">
                            <span>session_id</span>
                            <span>Sitzungsverwaltung</span>
                            <span>Sitzungsende</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-muted-foreground mt-1">
                            <span>csrf_token</span>
                            <span>Sicherheit</span>
                            <span>Sitzungsende</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-muted-foreground mt-1">
                            <span>cookie_consent</span>
                            <span>Cookie-Einstellungen</span>
                            <span>1 Jahr</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start gap-4">
                      <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Settings className="w-5 h-5 text-secondary" />
                      </div>
                      <div className="flex-1">
                        <div className="flex items-center gap-2 mb-2">
                          <h3 className="font-semibold">Funktionale Cookies</h3>
                          <Badge variant="outline" className="text-xs">Optional</Badge>
                        </div>
                        <p className="text-sm text-muted-foreground mb-3">
                          Diese Cookies ermöglichen erweiterte Funktionen und Personalisierung, 
                          wie z.B. die Speicherung Ihrer Spracheinstellungen oder des Chat-Verlaufs.
                        </p>
                        <div className="bg-muted/50 rounded-md p-3 text-xs">
                          <div className="grid grid-cols-3 gap-2 font-medium mb-2">
                            <span>Cookie</span>
                            <span>Zweck</span>
                            <span>Speicherdauer</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-muted-foreground">
                            <span>theme</span>
                            <span>Design-Präferenz</span>
                            <span>1 Jahr</span>
                          </div>
                          <div className="grid grid-cols-3 gap-2 text-muted-foreground mt-1">
                            <span>chat_history</span>
                            <span>Chat-Verlauf</span>
                            <span>30 Tage</span>
                          </div>
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Cookies von Drittanbietern</h2>
              <p className="text-muted-foreground mb-4">
                Wir nutzen Dienste von Drittanbietern, die möglicherweise eigene Cookies setzen:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Google Calendar</h3>
                  <p className="text-sm text-muted-foreground">
                    Für die Terminbuchung nutzen wir Google Calendar. Google setzt dabei eigene Cookies.<br />
                    <a href="https://policies.google.com/privacy" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                      Datenschutzerklärung von Google
                    </a>
                  </p>
                </div>
                
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Google Maps</h3>
                  <p className="text-sm text-muted-foreground">
                    Für die Standortanzeige nutzen wir Google Maps. Google setzt dabei eigene Cookies.<br />
                    <a href="https://policies.google.com/privacy" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                      Datenschutzerklärung von Google
                    </a>
                  </p>
                </div>
                
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">OpenAI KI-Agent für die Kostenschätzung</h3>
                  <p className="text-sm text-muted-foreground">
                    Unser KI-Agent für die Kostenschätzung basiert auf der Technologie von OpenAI.<br /><br />
                    Bei der Nutzung des Chat-Assistenten werden Ihre Eingaben an OpenAI-Server übermittelt.<br /><br />
                    OpenAI kann dabei technische Cookies zur Funktionalität setzen.<br /><br />
                    <strong>Anbieter:</strong> OpenAI L.L.C., USA<br /><br />
                    <strong>Zweck:</strong> KI-gestützte Beratung zu Sanitär, Heizung und Haustechnik sowie 
                    unverbindliche Kostenschätzungen (Netto-Preise zzgl. 19% MwSt.)<br />
                    <a href="https://openai.com/policies/privacy-policy" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                      Datenschutzerklärung von OpenAI
                    </a>
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Ihre Cookie-Einstellungen</h2>
              <p className="text-muted-foreground mb-4">
                Sie haben verschiedene Möglichkeiten, Cookies zu verwalten:
              </p>
              
              <div className="space-y-4">
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-medium">Cookie-Banner</h3>
                  <p className="text-sm text-muted-foreground">
                    Beim ersten Besuch unserer Website können Sie über den Cookie-Banner Ihre 
                    Präferenzen festlegen. Sie können diese Einstellungen jederzeit ändern.
                  </p>
                </div>
                
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-medium">Browser-Einstellungen</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie können Ihren Browser so einstellen, dass er Cookies blockiert oder Sie 
                    benachrichtigt, wenn Cookies gesendet werden. Beachten Sie, dass einige 
                    Funktionen der Website dann möglicherweise nicht verfügbar sind.
                  </p>
                </div>
                
                <div className="border-l-2 border-accent pl-4">
                  <h3 className="font-medium">Cookies löschen</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie können bereits gesetzte Cookies jederzeit in Ihren Browser-Einstellungen löschen.
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Browser-spezifische Anleitungen</h2>
              <p className="text-muted-foreground mb-4">
                So verwalten Sie Cookies in gängigen Browsern:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <a href="https://support.google.com/chrome/answer/95647" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    Google Chrome - Cookies verwalten
                  </a>
                </li>
                <li>
                  <a href="https://support.mozilla.org/de/kb/cookies-erlauben-und-ablehnen" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    Mozilla Firefox - Cookies verwalten
                  </a>
                </li>
                <li>
                  <a href="https://support.apple.com/de-de/guide/safari/sfri11471" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    Safari - Cookies verwalten
                  </a>
                </li>
                <li>
                  <a href="https://support.microsoft.com/de-de/microsoft-edge/cookies-in-microsoft-edge-löschen" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">
                    Microsoft Edge - Cookies verwalten
                  </a>
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Änderungen dieser Cookie-Richtlinie</h2>
              <p className="text-muted-foreground mb-4">
                Wir können diese Cookie-Richtlinie von Zeit zu Zeit aktualisieren, um Änderungen 
                in unserer Cookie-Praxis oder aus anderen betrieblichen, rechtlichen oder 
                regulatorischen Gründen widerzuspiegeln.
              </p>
              <p className="text-muted-foreground">
                Die aktuelle Version finden Sie immer auf dieser Seite. Letzte Aktualisierung: Dezember 2025.
              </p>
            </section>

            <section className="bg-muted/30 rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Fragen zu Cookies?</h2>
              <p className="text-muted-foreground mb-4">
                Bei Fragen zur Verwendung von Cookies auf unserer Website kontaktieren Sie uns gerne:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="secondary" asChild>
                  <a href="mailto:info@aquapro24.de">
                    info@aquapro24.de
                  </a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="/datenschutz">
                    Zur Datenschutzerklärung
                  </a>
                </Button>
              </div>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
