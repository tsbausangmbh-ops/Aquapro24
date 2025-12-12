import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Datenschutzerklärung | DSGVO 2025 | AquaPro24 München"
        description="Datenschutzerklärung gemäß DSGVO 2025 für AquaPro24 München. Informationen zur Verarbeitung personenbezogener Daten, KI-Chatbot, Ihre Rechte. Tel: 0152 12274043"
        canonical="https://aquapro24.de/datenschutz"
      />
      <Header />
      <main className="pt-8 pb-16 lg:pt-10">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <div className="flex items-center gap-3 mb-6">
            <Badge variant="secondary" className="gap-1">
              <Shield className="w-3 h-3" />
              DSGVO-konform
            </Badge>
            <Badge variant="outline">Stand: 12. Dezember 2025</Badge>
          </div>
          
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Datenschutzerklärung</h1>

          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            
            {/* Präambel */}
            <section id="m716">
              <h2 className="text-xl font-semibold mb-4">Präambel</h2>
              <p className="text-muted-foreground mb-4">
                Mit der folgenden Datenschutzerklärung möchten wir Sie darüber aufklären, welche Arten Ihrer 
                personenbezogenen Daten (nachfolgend auch kurz als "Daten" bezeichnet) wir zu welchen Zwecken 
                und in welchem Umfang verarbeiten. Die Datenschutzerklärung gilt für alle von uns durchgeführten 
                Verarbeitungen personenbezogener Daten, sowohl im Rahmen der Erbringung unserer Leistungen als 
                auch insbesondere auf unseren Webseiten, in mobilen Applikationen sowie innerhalb externer 
                Onlinepräsenzen, wie z. B. unserer Social-Media-Profile (nachfolgend zusammenfassend bezeichnet 
                als "Onlineangebot").
              </p>
              <p className="text-muted-foreground">
                Die verwendeten Begriffe sind nicht geschlechtsspezifisch.
              </p>
            </section>

            {/* Inhaltsübersicht */}
            <section>
              <h2 className="text-xl font-semibold mb-4">Inhaltsübersicht</h2>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><a href="#m716" className="text-secondary hover:underline">Präambel</a></li>
                <li><a href="#m3" className="text-secondary hover:underline">Verantwortlicher</a></li>
                <li><a href="#mOverview" className="text-secondary hover:underline">Übersicht der Verarbeitungen</a></li>
                <li><a href="#m2427" className="text-secondary hover:underline">Maßgebliche Rechtsgrundlagen</a></li>
                <li><a href="#m27" className="text-secondary hover:underline">Sicherheitsmaßnahmen</a></li>
                <li><a href="#m25" className="text-secondary hover:underline">Übermittlung von personenbezogenen Daten</a></li>
                <li><a href="#m24" className="text-secondary hover:underline">Internationale Datentransfers</a></li>
                <li><a href="#m12" className="text-secondary hover:underline">Allgemeine Informationen zur Datenspeicherung und Löschung</a></li>
                <li><a href="#m10" className="text-secondary hover:underline">Rechte der betroffenen Personen</a></li>
                <li><a href="#m317" className="text-secondary hover:underline">Geschäftliche Leistungen</a></li>
                <li><a href="#m225" className="text-secondary hover:underline">Bereitstellung des Onlineangebots und Webhosting</a></li>
                <li><a href="#m134" className="text-secondary hover:underline">Einsatz von Cookies</a></li>
                <li><a href="#m182" className="text-secondary hover:underline">Kontakt- und Anfrageverwaltung</a></li>
                <li><a href="#m263" className="text-secondary hover:underline">Webanalyse, Monitoring und Optimierung</a></li>
                <li><a href="#mKI" className="text-secondary hover:underline">KI-Chatbot und OpenAI</a></li>
                <li><a href="#mGoogle" className="text-secondary hover:underline">Google Calendar Integration</a></li>
              </ul>
            </section>

            {/* Verantwortlicher */}
            <section id="m3">
              <h2 className="text-xl font-semibold mb-4">Verantwortlicher</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>KSHW München</strong><br />
                  Inhaber: Ali Kemal Kurt<br />
                  Zielstattstr. 20<br />
                  81379 München<br />
                  Deutschland
                </p>
                <p className="text-muted-foreground mb-2">
                  Vertretungsberechtigte Person: Ali Kemal Kurt
                </p>
                <p className="text-muted-foreground mb-2">
                  E-Mail-Adresse: <a href="mailto:info@aquapro24.de" className="text-secondary hover:underline">info@aquapro24.de</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  Telefon: <a href="tel:+4915212274043" className="text-secondary hover:underline">0152 12274043</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  USt-IdNr: DE356852204
                </p>
                <p className="text-muted-foreground">
                  Impressum: <a href="https://aquapro24.de/impressum" className="text-secondary hover:underline">https://aquapro24.de/impressum</a>
                </p>
              </div>
            </section>

            {/* Übersicht der Verarbeitungen */}
            <section id="mOverview">
              <h2 className="text-xl font-semibold mb-4">Übersicht der Verarbeitungen</h2>
              <p className="text-muted-foreground mb-4">
                Die nachfolgende Übersicht fasst die Arten der verarbeiteten Daten und die Zwecke ihrer 
                Verarbeitung zusammen und verweist auf die betroffenen Personen.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Arten der verarbeiteten Daten</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Bestandsdaten (z.B. Namen, Adressen)</li>
                <li>Zahlungsdaten (z.B. Bankverbindungen, Rechnungen)</li>
                <li>Standortdaten (z.B. Adresse des Einsatzortes)</li>
                <li>Kontaktdaten (z.B. E-Mail, Telefonnummern)</li>
                <li>Inhaltsdaten (z.B. Eingaben in Formularen, Chat-Nachrichten)</li>
                <li>Vertragsdaten (z.B. Vertragsgegenstand, Laufzeit)</li>
                <li>Nutzungsdaten (z.B. besuchte Seiten, Zugriffszeiten)</li>
                <li>Meta-, Kommunikations- und Verfahrensdaten (z.B. IP-Adressen)</li>
                <li>Protokolldaten (z.B. Server-Logs)</li>
                <li>Terminbuchungsdaten (z.B. gewünschter Termin, Serviceart)</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Kategorien betroffener Personen</h3>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Leistungsempfänger und Auftraggeber</li>
                <li>Interessenten und potenzielle Kunden</li>
                <li>Kommunikationspartner</li>
                <li>Nutzer der Website</li>
                <li>Geschäfts- und Vertragspartner</li>
              </ul>

              <h3 className="text-lg font-medium mb-2">Zwecke der Verarbeitung</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li>Erbringung vertraglicher Leistungen und Erfüllung vertraglicher Pflichten</li>
                <li>Kommunikation und Beantwortung von Anfragen</li>
                <li>Terminvereinbarung und Auftragsabwicklung</li>
                <li>Sicherheitsmaßnahmen</li>
                <li>Reichweitenmessung und Optimierung</li>
                <li>Bereitstellung unseres Onlineangebotes und Nutzerfreundlichkeit</li>
                <li>Informationstechnische Infrastruktur</li>
                <li>KI-gestützte Beratung und Kostenschätzung</li>
              </ul>
            </section>

            {/* Rechtsgrundlagen */}
            <section id="m2427">
              <h2 className="text-xl font-semibold mb-4">Maßgebliche Rechtsgrundlagen</h2>
              <p className="text-muted-foreground mb-4">
                Im Folgenden erhalten Sie eine Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis 
                wir personenbezogene Daten verarbeiten:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> – Die betroffene Person 
                  hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten 
                  für einen oder mehrere bestimmte Zwecke gegeben.
                </li>
                <li>
                  <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> – 
                  Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene 
                  Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich.
                </li>
                <li>
                  <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</strong> – 
                  Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, 
                  der der Verantwortliche unterliegt.
                </li>
                <li>
                  <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> – 
                  Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen 
                  oder eines Dritten erforderlich.
                </li>
              </ul>
            </section>

            {/* Sicherheitsmaßnahmen */}
            <section id="m27">
              <h2 className="text-xl font-semibold mb-4">Sicherheitsmaßnahmen</h2>
              <p className="text-muted-foreground mb-4">
                Wir treffen nach Maßgabe der gesetzlichen Vorgaben unter Berücksichtigung des Stands der Technik, 
                der Implementierungskosten und der Art, des Umfangs, der Umstände und der Zwecke der Verarbeitung 
                sowie der unterschiedlichen Eintrittswahrscheinlichkeiten und des Ausmaßes der Bedrohung der 
                Rechte und Freiheiten natürlicher Personen geeignete technische und organisatorische Maßnahmen, 
                um ein dem Risiko angemessenes Schutzniveau zu gewährleisten.
              </p>
              <p className="text-muted-foreground mb-4">
                Zu den Maßnahmen gehören insbesondere die Sicherung der Vertraulichkeit, Integrität und 
                Verfügbarkeit von Daten durch Kontrolle des physischen und elektronischen Zugangs zu den 
                Daten als auch des sie betreffenden Zugriffs, der Eingabe, der Weitergabe, der Sicherung 
                der Verfügbarkeit und ihrer Trennung.
              </p>
              <p className="text-muted-foreground">
                <strong>TLS-/SSL-Verschlüsselung (HTTPS):</strong> Um die Daten der Nutzer, die über unsere 
                Online-Dienste übertragen werden, vor unerlaubten Zugriffen zu schützen, setzen wir auf die 
                TLS-/SSL-Verschlüsselungstechnologie. Diese verschlüsselt die Informationen, die zwischen 
                der Website und dem Browser des Nutzers übertragen werden. Eine verschlüsselte Verbindung 
                erkennen Sie an "https://" in der Adresszeile und dem Schloss-Symbol im Browser.
              </p>
            </section>

            {/* Übermittlung */}
            <section id="m25">
              <h2 className="text-xl font-semibold mb-4">Übermittlung von personenbezogenen Daten</h2>
              <p className="text-muted-foreground mb-4">
                Im Rahmen unserer Verarbeitung von personenbezogenen Daten kommt es vor, dass diese an andere 
                Stellen, Unternehmen, rechtlich selbstständige Organisationseinheiten oder Personen übermittelt 
                beziehungsweise ihnen gegenüber offengelegt werden. Zu den Empfängern dieser Daten können z. B. 
                mit IT-Aufgaben beauftragte Dienstleister gehören oder Anbieter von Diensten und Inhalten, die 
                in eine Website eingebunden sind.
              </p>
              <p className="text-muted-foreground">
                In solchen Fällen beachten wir die gesetzlichen Vorgaben und schließen insbesondere entsprechende 
                Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten dienen, mit den Empfängern Ihrer Daten ab.
              </p>
            </section>

            {/* Internationale Datentransfers */}
            <section id="m24">
              <h2 className="text-xl font-semibold mb-4">Internationale Datentransfers</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland 
                (d. h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) 
                übermitteln oder dies im Rahmen der Nutzung von Diensten Dritter geschieht, erfolgt dies 
                stets im Einklang mit den gesetzlichen Vorgaben.
              </p>
              <p className="text-muted-foreground mb-4">
                Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF), 
                welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer 
                Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern 
                Standardvertragsklauseln abgeschlossen, die den Vorgaben der EU-Kommission entsprechen.
              </p>
              <p className="text-muted-foreground">
                Weitere Informationen zum DPF finden Sie unter:{" "}
                <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  https://www.dataprivacyframework.gov/
                </a>
              </p>
            </section>

            {/* Datenspeicherung und Löschung */}
            <section id="m12">
              <h2 className="text-xl font-semibold mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
              <p className="text-muted-foreground mb-4">
                Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, 
                sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen 
                Grundlagen für die Verarbeitung bestehen.
              </p>
              <p className="text-muted-foreground mb-4">
                Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden 
                müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung, entsprechend archiviert werden.
              </p>
              <h3 className="text-lg font-medium mb-2">Aufbewahrungsfristen</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Kontaktanfragen:</strong> 3 Jahre nach Abschluss</li>
                <li><strong>Vertragsdaten:</strong> 10 Jahre (gemäß HGB/AO)</li>
                <li><strong>Server-Logs:</strong> 7 Tage</li>
                <li><strong>Buchungsdaten:</strong> 6 Monate nach Terminabschluss</li>
                <li><strong>KI-Chat-Verläufe:</strong> Werden nicht dauerhaft gespeichert; OpenAI speichert max. 30 Tage</li>
              </ul>
            </section>

            {/* Rechte der betroffenen Personen */}
            <section id="m10">
              <h2 className="text-xl font-semibold mb-4">Rechte der betroffenen Personen</h2>
              <p className="text-muted-foreground mb-4">
                Ihnen stehen als Betroffene nach der DSGVO verschiedene Rechte zu, die sich insbesondere 
                aus Art. 15 bis 21 DSGVO ergeben:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-2">
                <li>
                  <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer 
                  besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden 
                  personenbezogenen Daten Widerspruch einzulegen.
                </li>
                <li>
                  <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte 
                  Einwilligungen jederzeit zu widerrufen.
                </li>
                <li>
                  <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, 
                  ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten.
                </li>
                <li>
                  <strong>Recht auf Berichtigung:</strong> Sie haben das Recht, die Vervollständigung oder 
                  Berichtigung Sie betreffender unrichtiger Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung und Einschränkung:</strong> Sie haben das Recht, zu verlangen, 
                  dass Sie betreffende Daten unverzüglich gelöscht werden, bzw. eine Einschränkung der 
                  Verarbeitung zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten 
                  in einem strukturierten, gängigen und maschinenlesbaren Format zu erhalten.
                </li>
                <li>
                  <strong>Beschwerderecht:</strong> Sie haben das Recht, sich bei einer Datenschutz-Aufsichtsbehörde 
                  zu beschweren. Zuständig ist das Bayerische Landesamt für Datenschutzaufsicht (BayLDA).
                </li>
              </ul>
            </section>

            {/* Geschäftliche Leistungen */}
            <section id="m317">
              <h2 className="text-xl font-semibold mb-4">Geschäftliche Leistungen</h2>
              <p className="text-muted-foreground mb-4">
                Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden und Interessenten 
                (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und 
                vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf 
                die Kommunikation mit den Vertragspartnern.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören 
                insbesondere die Pflichten zur Erbringung der vereinbarten Leistungen (Sanitär, Heizung, 
                Badsanierung, Wärmepumpen, Haustechnik), etwaige Aktualisierungspflichten und Abhilfe bei 
                Gewährleistungs- und sonstigen Leistungsstörungen.
              </p>
              <p className="text-muted-foreground">
                Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, 
                d. h. grundsätzlich nach vier Jahren, es sei denn, dass die Daten aus gesetzlichen Gründen 
                der Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn Jahre).
              </p>
            </section>

            {/* Webhosting */}
            <section id="m225">
              <h2 className="text-xl font-semibold mb-4">Bereitstellung des Onlineangebots und Webhosting</h2>
              <p className="text-muted-foreground mb-4">
                Wir verarbeiten die Daten der Nutzer, um ihnen unsere Online-Dienste zur Verfügung stellen 
                zu können. Zu diesem Zweck verarbeiten wir die IP-Adresse des Nutzers, die notwendig ist, 
                um die Inhalte und Funktionen unserer Online-Dienste an den Browser oder das Endgerät der 
                Nutzer zu übermitteln.
              </p>
              <h3 className="text-lg font-medium mb-2">Erhebung von Zugriffsdaten und Logfiles</h3>
              <p className="text-muted-foreground mb-4">
                Wir erheben Daten über jeden Zugriff auf den Server (sogenannte Serverlogfiles). Zu den 
                Serverlogfiles können die Adresse und Name der abgerufenen Webseiten und Dateien, Datum 
                und Uhrzeit des Abrufs, übertragene Datenmengen, Meldung über erfolgreichen Abruf, Browsertyp 
                nebst Version, das Betriebssystem des Nutzers, Referrer URL und der anfragende Provider gehören.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten, Meta-/Kommunikationsdaten, Protokolldaten</li>
                <li><strong>Betroffene Personen:</strong> Nutzer</li>
                <li><strong>Zwecke:</strong> Bereitstellung des Onlineangebotes, Sicherheitsmaßnahmen</li>
                <li><strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</li>
                <li><strong>Speicherdauer:</strong> 7 Tage</li>
              </ul>
            </section>

            {/* Cookies */}
            <section id="m134">
              <h2 className="text-xl font-semibold mb-4">Einsatz von Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Cookies sind kleine Textdateien, die auf Ihrem Endgerät gespeichert werden. Wir setzen 
                Cookies und ähnliche Technologien ein, um die Funktionsfähigkeit unserer Website zu 
                gewährleisten und die Nutzung zu analysieren.
              </p>
              <h3 className="text-lg font-medium mb-2">Technisch notwendige Cookies</h3>
              <p className="text-muted-foreground mb-4">
                Diese Cookies sind für den Betrieb der Website erforderlich und können nicht deaktiviert werden. 
                Sie werden in der Regel nur als Reaktion auf von Ihnen getätigte Aktionen gesetzt 
                (z. B. Festlegen Ihrer Datenschutzeinstellungen, Anmelden).
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</li>
                <li><strong>Speicherdauer:</strong> Session-Cookies werden nach Schließen des Browsers gelöscht</li>
              </ul>
            </section>

            {/* Kontakt */}
            <section id="m182">
              <h2 className="text-xl font-semibold mb-4">Kontakt- und Anfrageverwaltung</h2>
              <p className="text-muted-foreground mb-4">
                Bei der Kontaktaufnahme mit uns (z. B. per Kontaktformular, E-Mail, Telefon oder via 
                soziale Medien) sowie im Rahmen bestehender Nutzer- und Geschäftsbeziehungen werden 
                die Angaben der anfragenden Personen verarbeitet, soweit dies zur Beantwortung der 
                Kontaktanfragen und etwaiger angefragter Maßnahmen erforderlich ist.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Verarbeitete Datenarten:</strong> Kontaktdaten, Inhaltsdaten, Nutzungsdaten</li>
                <li><strong>Betroffene Personen:</strong> Kommunikationspartner</li>
                <li><strong>Zwecke:</strong> Kommunikation, Organisations- und Verwaltungsverfahren</li>
                <li><strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</li>
                <li><strong>Speicherdauer:</strong> 3 Jahre nach Abschluss der Anfrage</li>
              </ul>
            </section>

            {/* Webanalyse */}
            <section id="m263">
              <h2 className="text-xl font-semibold mb-4">Webanalyse, Monitoring und Optimierung</h2>
              <p className="text-muted-foreground mb-4">
                Die Webanalyse dient der Auswertung der Besucherströme unseres Onlineangebotes und kann 
                Verhalten, Interessen oder demographische Informationen zu den Besuchern umfassen. 
                Mit Hilfe der Reichweitenanalyse können wir z. B. erkennen, zu welcher Zeit unser 
                Onlineangebot oder dessen Funktionen am häufigsten genutzt werden.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten, Meta-/Kommunikationsdaten</li>
                <li><strong>Betroffene Personen:</strong> Nutzer</li>
                <li><strong>Zwecke:</strong> Reichweitenmessung, Optimierung</li>
                <li><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</li>
              </ul>
            </section>

            {/* KI-Chatbot */}
            <section id="mKI">
              <h2 className="text-xl font-semibold mb-4">KI-Chatbot und OpenAI</h2>
              <p className="text-muted-foreground mb-4">
                Auf unserer Website setzen wir einen KI-gestützten Chatbot ein, der auf der Technologie 
                von OpenAI basiert. Dieser Assistent dient der ersten Beratung zu Sanitär-, Heizungs- und 
                Haustechnikfragen sowie zur unverbindlichen Kostenschätzung.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Verarbeitete Daten:</strong> Ihre Chat-Nachrichten und Eingaben werden zur 
                Verarbeitung an die Server von OpenAI übermittelt. OpenAI verarbeitet diese Daten, 
                um eine KI-generierte Antwort zu erstellen.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Anbieter:</strong> OpenAI L.L.C., 3180 18th Street, San Francisco, CA 94110, USA<br />
                  <strong>Rechtsgrundlage:</strong> Einwilligung durch Nutzung des Chats (Art. 6 Abs. 1 S. 1 lit. a DSGVO)<br />
                  <strong>Drittlandtransfer:</strong> USA (Data Privacy Framework + Standardvertragsklauseln)<br />
                  <strong>Speicherdauer:</strong> OpenAI speichert API-Anfragen max. 30 Tage zur Missbrauchserkennung<br />
                  <strong>Weitere Informationen:</strong>{" "}
                  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    OpenAI Datenschutzerklärung
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground">
                <strong>Hinweis:</strong> Bitte geben Sie im Chat keine sensiblen personenbezogenen Daten 
                (z.B. Gesundheitsdaten, Bankdaten) ein. Die vom KI-Assistenten genannten Preise sind 
                unverbindliche Schätzungen (Netto-Preise zzgl. 19% MwSt.).
              </p>
            </section>

            {/* Google Calendar */}
            <section id="mGoogle">
              <h2 className="text-xl font-semibold mb-4">Google Calendar Integration</h2>
              <p className="text-muted-foreground mb-4">
                Für die Terminbuchung nutzen wir Google Calendar. Bei der Terminbuchung werden Ihre 
                Kontaktdaten und Terminwünsche an Google Ireland Limited übermittelt.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />
                  <strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)<br />
                  <strong>Drittlandtransfer:</strong> USA (Data Privacy Framework + Standardvertragsklauseln)<br />
                  <strong>Weitere Informationen:</strong>{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    Google Datenschutzerklärung
                  </a>
                </p>
              </div>
            </section>

            {/* Kontaktbox */}
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
                  data-testid="link-privacy-email"
                >
                  info@aquapro24.de
                </a>
                <a 
                  href="tel:+4915212274043" 
                  className="inline-flex items-center gap-2 text-secondary hover:underline"
                  data-testid="link-privacy-phone"
                >
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
