import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Shield, Mail, Phone } from "lucide-react";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Datenschutzerklärung | DSGVO 2025 | AquaPro24 München"
        description="Datenschutzerklärung gemäß DSGVO 2025 für AquaPro24 München. Informationen zur Verarbeitung personenbezogener Daten, KI-Chatbot, Ihre Rechte. Tel: 0152 12274043"
        canonical="https://aquapro24.de/datenschutz"
      />
      <Header />
      <main className="pt-8 pb-4 lg:pt-10 lg:pb-6">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="gap-1">
              <Shield className="w-3 h-3" />
              DSGVO-konform
            </Badge>
            <Badge variant="outline">Stand: Dezember 2025</Badge>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-4">Datenschutzerklärung</h1>
          
          <Card className="mb-4 bg-muted/30">
            <CardContent className="p-6">
              <h2 className="font-semibold mb-2">Kurzfassung für Sie</h2>
              <p className="text-sm text-muted-foreground">
                Wir nehmen den Schutz Ihrer Daten ernst. Diese Seite erklärt, welche Daten wir erheben, 
                warum wir das tun und welche Rechte Sie haben. Bei Fragen erreichen Sie uns unter 
                info@aquapro24.de oder 0152 12274043.
              </p>
            </CardContent>
          </Card>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
            
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Verantwortlicher und Datenschutzbeauftragter</h2>
              
              <h3 className="text-lg font-medium mb-2">Verantwortlicher gemäß Art. 4 Abs. 7 DSGVO</h3>
              <p className="text-muted-foreground mb-4">
                KSHW München<br />
                Inhaber: Ali Kemal Kurt<br />
                Zielstattstr. 20<br />
                81379 München<br />
                Deutschland<br />
                USt-IdNr: DE356852204<br />
                <br />
                <span className="flex items-center gap-2">
                  <Phone className="w-4 h-4" /> 0152 12274043
                </span>
                <span className="flex items-center gap-2">
                  <Mail className="w-4 h-4" /> info@aquapro24.de
                </span>
              </p>

              <h3 className="text-lg font-medium mb-2">Datenschutzbeauftragter</h3>
              <p className="text-muted-foreground mb-4">
                Bei Fragen zum Datenschutz erreichen Sie unseren Datenschutzbeauftragten unter:<br />
                E-Mail: info@aquapro24.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Übersicht der Verarbeitungen</h2>
              <p className="text-muted-foreground mb-4">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer 
                Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Arten der verarbeiteten Daten</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Kontaktdaten (z.B. Name, E-Mail, Telefonnummer)</li>
                <li>Inhaltsdaten (z.B. Eingaben in Formularen, Chatverläufe)</li>
                <li>Nutzungsdaten (z.B. besuchte Seiten, Zugriffszeiten)</li>
                <li>Meta-/Kommunikationsdaten (z.B. IP-Adressen, Geräteinformationen)</li>
                <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit)</li>
                <li>Terminbuchungsdaten (z.B. gewünschter Termin, Serviceart)</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Kategorien betroffener Personen</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Interessenten und potenzielle Kunden</li>
                <li>Kunden und Auftraggeber</li>
                <li>Kommunikationspartner</li>
                <li>Nutzer der Website</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Zwecke der Verarbeitung</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Bereitstellung der Website und ihrer Funktionen</li>
                <li>Bearbeitung von Kontaktanfragen und Kommunikation</li>
                <li>Terminvereinbarung und Auftragsabwicklung</li>
                <li>Erbringung vertraglicher Leistungen</li>
                <li>Sicherheitsmaßnahmen</li>
                <li>Reichweitenmessung und Optimierung</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Rechtsgrundlagen der Verarbeitung</h2>
              <p className="text-muted-foreground mb-4">
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis 
                wir personenbezogene Daten verarbeiten:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li>
                  <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> - Die betroffene Person 
                  hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten 
                  für einen oder mehrere bestimmte Zwecke gegeben.
                </li>
                <li>
                  <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> - 
                  Die Verarbeitung ist für die Erfüllung eines Vertrags oder zur Durchführung vorvertraglicher 
                  Maßnahmen erforderlich.
                </li>
                <li>
                  <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</strong> - 
                  Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich.
                </li>
                <li>
                  <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> - 
                  Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen 
                  oder eines Dritten erforderlich.
                </li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Ihre Rechte als betroffene Person</h2>
              <p className="text-muted-foreground mb-4">
                Gemäß der DSGVO stehen Ihnen folgende Rechte zu:
              </p>

              <div className="space-y-4">
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Auskunftsrecht (Art. 15 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, eine Bestätigung darüber zu verlangen, ob betreffende Daten 
                    verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere Informationen.
                  </p>
                </div>
                
                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Recht auf Berichtigung (Art. 16 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, die Vervollständigung oder Berichtigung Sie betreffender 
                    unrichtiger Daten zu verlangen.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Recht auf Löschung (Art. 17 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, zu verlangen, dass Sie betreffende Daten unverzüglich gelöscht 
                    werden ("Recht auf Vergessenwerden").
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, die Einschränkung der Verarbeitung Ihrer Daten zu verlangen.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, die Sie betreffenden Daten in einem strukturierten, gängigen 
                    und maschinenlesbaren Format zu erhalten.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Widerspruchsrecht (Art. 21 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, aus Gründen, die sich aus Ihrer besonderen Situation ergeben, 
                    jederzeit gegen die Verarbeitung Sie betreffender Daten Widerspruch einzulegen.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Recht auf Widerruf erteilter Einwilligungen (Art. 7 Abs. 3 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, erteilte Einwilligungen jederzeit mit Wirkung für die Zukunft 
                    zu widerrufen.
                  </p>
                </div>

                <div className="border-l-2 border-secondary pl-4">
                  <h3 className="font-medium">Beschwerderecht bei Aufsichtsbehörde (Art. 77 DSGVO)</h3>
                  <p className="text-sm text-muted-foreground">
                    Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde zu beschweren. 
                    Zuständige Aufsichtsbehörde ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
                  </p>
                </div>
              </div>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Datenverarbeitung auf dieser Website</h2>
              
              <h3 className="text-lg font-medium mb-2">Server-Log-Dateien</h3>
              <p className="text-muted-foreground mb-4">
                Der Provider dieser Website erhebt und speichert automatisch Informationen in Server-Log-Dateien, 
                die Ihr Browser automatisch übermittelt:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Browsertyp und -version</li>
                <li>Verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse (anonymisiert)</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse an der 
                sicheren Bereitstellung der Website)<br />
                <strong>Speicherdauer:</strong> 7 Tage, danach automatische Löschung
              </p>

              <h3 className="text-lg font-medium mb-2">Kontaktformular und Chat-Widget</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular oder Chat-Widget kontaktieren, werden Ihre Angaben 
                zur Bearbeitung der Anfrage und für eventuelle Anschlussfragen gespeichert.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (vorvertragliche Maßnahmen)<br />
                <strong>Speicherdauer:</strong> 3 Jahre nach Abschluss der Anfrage bzw. gemäß gesetzlicher 
                Aufbewahrungsfristen
              </p>

              <h3 className="text-lg font-medium mb-2">Terminbuchung mit Google Calendar</h3>
              <p className="text-muted-foreground mb-4">
                Für die Terminbuchung nutzen wir Google Calendar. Bei der Terminbuchung werden Ihre 
                Kontaktdaten und Terminwünsche an Google Ireland Limited übermittelt.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. b DSGVO (Vertragserfüllung)<br />
                <strong>Drittlandtransfer:</strong> USA (Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO)<br />
                <strong>Weitere Informationen:</strong> <a href="https://policies.google.com/privacy" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">Google Datenschutzerklärung</a>
              </p>

              <h3 className="text-lg font-medium mb-2">KI-Beratungsassistent (OpenAI)</h3>
              <p className="text-muted-foreground mb-4">
                Auf unserer Website setzen wir einen KI-gestützten Beratungsassistenten ein, der auf 
                der Technologie von OpenAI basiert. Dieser Assistent dient der ersten Beratung zu 
                Sanitär-, Heizungs- und Haustechnikfragen sowie zur unverbindlichen Preisschätzung.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Verarbeitete Daten:</strong> Ihre Chat-Nachrichten und Eingaben werden zur 
                Verarbeitung an die Server von OpenAI übermittelt. OpenAI verarbeitet diese Daten, 
                um eine KI-generierte Antwort zu erstellen.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Anbieter:</strong> OpenAI L.L.C., 3180 18th Street, San Francisco, CA 94110, USA<br />
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung durch Nutzung des Chats)<br />
                <strong>Drittlandtransfer:</strong> USA (Standardvertragsklauseln gemäß Art. 46 Abs. 2 lit. c DSGVO)<br />
                <strong>Speicherdauer:</strong> OpenAI speichert API-Anfragen für maximal 30 Tage zur Missbrauchserkennung, 
                danach werden die Daten gelöscht. Wir speichern Chat-Verläufe nicht dauerhaft.<br />
                <strong>Weitere Informationen:</strong> <a href="https://openai.com/policies/privacy-policy" className="text-secondary hover:underline" target="_blank" rel="noopener noreferrer">OpenAI Datenschutzerklärung</a>
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Hinweis:</strong> Bitte geben Sie im Chat keine sensiblen personenbezogenen Daten 
                (z.B. Gesundheitsdaten, Bankdaten) ein. Die vom KI-Assistenten genannten Preise sind 
                unverbindliche Schätzungen (Netto-Preise zzgl. 19% MwSt.).
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. Auftragsverarbeitung und Datenübermittlung</h2>
              
              <h3 className="text-lg font-medium mb-2">Auftragsverarbeiter</h3>
              <p className="text-muted-foreground mb-4">
                Wir setzen folgende Auftragsverarbeiter ein, mit denen Verträge gemäß Art. 28 DSGVO 
                geschlossen wurden:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Webhosting-Anbieter (Bereitstellung der Website)</li>
                <li>Google Ireland Limited (Kalenderdienste)</li>
                <li>OpenAI L.L.C. (KI-Beratungsassistent)</li>
                <li>CRM-System-Anbieter (Kundenmanagement)</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Drittlandtransfer</h3>
              <p className="text-muted-foreground mb-4">
                Sofern wir Daten in einem Drittland (außerhalb der EU/EWR) verarbeiten oder dies im 
                Rahmen der Inanspruchnahme von Diensten Dritter geschieht, erfolgt dies nur auf Grundlage 
                eines Angemessenheitsbeschlusses der EU-Kommission, Standardvertragsklauseln oder Ihrer 
                ausdrücklichen Einwilligung gemäß Art. 49 Abs. 1 DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Cookies und Einwilligungsverwaltung</h2>
              <p className="text-muted-foreground mb-4">
                Diese Website verwendet Cookies. Cookies sind kleine Textdateien, die auf Ihrem Endgerät 
                gespeichert werden.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Technisch notwendige Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. f DSGVO (berechtigtes Interesse)<br />
                <strong>Speicherdauer:</strong> Session-Cookies werden nach Schließen des Browsers gelöscht
              </p>

              <h3 className="text-lg font-medium mb-2">Einwilligungspflichtige Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Cookies zu Analyse- oder Marketingzwecken werden nur nach Ihrer ausdrücklichen Einwilligung 
                gesetzt. Sie können Ihre Einwilligung jederzeit widerrufen.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Rechtsgrundlage:</strong> Art. 6 Abs. 1 lit. a DSGVO (Einwilligung)
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Automatisierte Entscheidungsfindung und KI</h2>
              <p className="text-muted-foreground mb-4">
                Wir setzen keine automatisierte Entscheidungsfindung einschließlich Profiling gemäß 
                Art. 22 Abs. 1 und 4 DSGVO ein, die Ihnen gegenüber rechtliche Wirkung entfaltet oder 
                Sie in ähnlicher Weise erheblich beeinträchtigt.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Hinweis zum KI-Beratungsassistenten:</strong> Unser KI-gestützter Chatbot (basierend 
                auf OpenAI) dient ausschließlich der unverbindlichen Beratung und Ersteinschätzung. Die 
                KI trifft keine verbindlichen Entscheidungen über Verträge, Preise oder Leistungen. Alle 
                vom Chatbot genannten Preise sind unverbindliche Schätzungen (Netto zzgl. 19% MwSt.). 
                Verbindliche Angebote werden ausschließlich nach persönlicher Vor-Ort-Besichtigung durch 
                unsere Fachkräfte erstellt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">9. Speicherdauer und Löschung</h2>
              <p className="text-muted-foreground mb-4">
                Wir speichern personenbezogene Daten nur so lange, wie es für die Erfüllung der 
                Verarbeitungszwecke erforderlich ist oder gesetzliche Aufbewahrungsfristen bestehen:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li><strong>Kontaktanfragen:</strong> 3 Jahre nach Abschluss</li>
                <li><strong>Vertragsdaten:</strong> 10 Jahre (gemäß HGB/AO)</li>
                <li><strong>Server-Logs:</strong> 7 Tage</li>
                <li><strong>Buchungsdaten:</strong> 6 Monate nach Terminabschluss</li>
                <li><strong>KI-Chat-Verläufe:</strong> Werden nicht dauerhaft gespeichert; OpenAI speichert max. 30 Tage</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Nach Ablauf der jeweiligen Frist werden die Daten routinemäßig gelöscht.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">10. SSL/TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground mb-4">
                Diese Website nutzt eine SSL/TLS-Verschlüsselung zum Schutz der Übertragung vertraulicher 
                Inhalte. Eine verschlüsselte Verbindung erkennen Sie an "https://" in der Adresszeile 
                und dem Schloss-Symbol im Browser.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">11. Aktualität und Änderungen</h2>
              <p className="text-muted-foreground mb-4">
                Diese Datenschutzerklärung ist aktuell gültig und hat den Stand Dezember 2025. 
                Durch Weiterentwicklung unserer Website oder aufgrund geänderter gesetzlicher 
                Vorgaben kann eine Anpassung dieser Erklärung erforderlich werden.
              </p>
              <p className="text-muted-foreground">
                Die jeweils aktuelle Fassung finden Sie stets auf dieser Seite.
              </p>
            </section>

            <section className="bg-muted/30 rounded-lg p-6 mt-8">
              <h2 className="text-xl font-semibold mb-4">Fragen zum Datenschutz?</h2>
              <p className="text-muted-foreground mb-4">
                Wir nehmen den Schutz Ihrer Daten ernst. Bei Fragen zur Verarbeitung Ihrer 
                personenbezogenen Daten oder zur Ausübung Ihrer Rechte kontaktieren Sie uns gerne:
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <a 
                  href="mailto:info@aquapro24.de" 
                  className="inline-flex items-center gap-2 text-secondary hover:underline"
                >
                  <Mail className="w-4 h-4" />
                  info@aquapro24.de
                </a>
                <a 
                  href="tel:+4915212274043" 
                  className="inline-flex items-center gap-2 text-secondary hover:underline"
                >
                  <Phone className="w-4 h-4" />
                  0152 12274043
                </a>
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
