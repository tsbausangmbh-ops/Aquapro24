import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Datenschutzerklärung | Münchner Heizung & Sanitär"
        description="Datenschutzerklärung der Münchner Heizung & Sanitär GmbH. Informationen zur Verarbeitung personenbezogener Daten gemäß DSGVO."
        canonical="https://aquapro24.de/datenschutz"
      />
      <Header />
      <main className="py-16 lg:py-20">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Datenschutzerklärung</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">1. Datenschutz auf einen Blick</h2>
              <h3 className="text-lg font-medium mb-2">Allgemeine Hinweise</h3>
              <p className="text-muted-foreground mb-4">
                Die folgenden Hinweise geben einen einfachen Überblick darüber, was mit Ihren personenbezogenen 
                Daten passiert, wenn Sie diese Website besuchen. Personenbezogene Daten sind alle Daten, mit 
                denen Sie persönlich identifiziert werden können.
              </p>
              
              <h3 className="text-lg font-medium mb-2">Datenerfassung auf dieser Website</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Wer ist verantwortlich für die Datenerfassung auf dieser Website?</strong><br />
                Die Datenverarbeitung auf dieser Website erfolgt durch den Websitebetreiber. Dessen Kontaktdaten 
                können Sie dem Impressum dieser Website entnehmen.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Wie erfassen wir Ihre Daten?</strong><br />
                Ihre Daten werden zum einen dadurch erhoben, dass Sie uns diese mitteilen. Hierbei kann es sich 
                z.B. um Daten handeln, die Sie in ein Kontaktformular eingeben. Andere Daten werden automatisch 
                oder nach Ihrer Einwilligung beim Besuch der Website durch unsere IT-Systeme erfasst. Das sind 
                vor allem technische Daten (z.B. Internetbrowser, Betriebssystem oder Uhrzeit des Seitenaufrufs).
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Wofür nutzen wir Ihre Daten?</strong><br />
                Ein Teil der Daten wird erhoben, um eine fehlerfreie Bereitstellung der Website zu gewährleisten. 
                Andere Daten können zur Analyse Ihres Nutzerverhaltens verwendet werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">2. Verantwortliche Stelle</h2>
              <p className="text-muted-foreground mb-4">
                Verantwortlich für die Datenverarbeitung auf dieser Website ist:
              </p>
              <p className="text-muted-foreground mb-4">
                Münchner Heizung & Sanitär GmbH<br />
                Musterstraße 123<br />
                80331 München<br />
                <br />
                Telefon: 089 123 456 789<br />
                E-Mail: info@sanitaer-muenchen.de
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">3. Ihre Rechte</h2>
              <p className="text-muted-foreground mb-4">
                Sie haben jederzeit das Recht, unentgeltlich Auskunft über Herkunft, Empfänger und Zweck 
                Ihrer gespeicherten personenbezogenen Daten zu erhalten. Sie haben außerdem ein Recht, die 
                Berichtigung oder Löschung dieser Daten zu verlangen. Wenn Sie eine Einwilligung zur 
                Datenverarbeitung erteilt haben, können Sie diese Einwilligung jederzeit für die Zukunft 
                widerrufen. Außerdem haben Sie das Recht, unter bestimmten Umständen die Einschränkung der 
                Verarbeitung Ihrer personenbezogenen Daten zu verlangen.
              </p>
              <p className="text-muted-foreground mb-4">
                Des Weiteren steht Ihnen ein Beschwerderecht bei der zuständigen Aufsichtsbehörde zu.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">4. Datenerfassung auf dieser Website</h2>
              
              <h3 className="text-lg font-medium mb-2">Server-Log-Dateien</h3>
              <p className="text-muted-foreground mb-4">
                Der Provider der Seiten erhebt und speichert automatisch Informationen in so genannten 
                Server-Log-Dateien, die Ihr Browser automatisch an uns übermittelt. Dies sind:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li>Browsertyp und Browserversion</li>
                <li>verwendetes Betriebssystem</li>
                <li>Referrer URL</li>
                <li>Hostname des zugreifenden Rechners</li>
                <li>Uhrzeit der Serveranfrage</li>
                <li>IP-Adresse</li>
              </ul>
              <p className="text-muted-foreground mb-4">
                Eine Zusammenführung dieser Daten mit anderen Datenquellen wird nicht vorgenommen. 
                Die Erfassung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. f DSGVO.
              </p>

              <h3 className="text-lg font-medium mb-2">Kontaktformular und Chat</h3>
              <p className="text-muted-foreground mb-4">
                Wenn Sie uns per Kontaktformular oder Chat-Widget Anfragen zukommen lassen, werden Ihre 
                Angaben aus dem Formular inklusive der von Ihnen dort angegebenen Kontaktdaten zwecks 
                Bearbeitung der Anfrage und für den Fall von Anschlussfragen bei uns gespeichert. Diese 
                Daten geben wir nicht ohne Ihre Einwilligung weiter.
              </p>
              <p className="text-muted-foreground mb-4">
                Die Verarbeitung dieser Daten erfolgt auf Grundlage von Art. 6 Abs. 1 lit. b DSGVO, 
                sofern Ihre Anfrage mit der Erfüllung eines Vertrags zusammenhängt oder zur Durchführung 
                vorvertraglicher Maßnahmen erforderlich ist.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">5. Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Unsere Internetseiten verwenden so genannte "Cookies". Cookies sind kleine Datenpakete und 
                richten auf Ihrem Endgerät keinen Schaden an. Sie werden entweder vorübergehend für die 
                Dauer einer Sitzung (Session-Cookies) oder dauerhaft (permanente Cookies) auf Ihrem 
                Endgerät gespeichert.
              </p>
              <p className="text-muted-foreground mb-4">
                Session-Cookies werden nach Ende Ihres Besuchs automatisch gelöscht. Permanente Cookies 
                bleiben auf Ihrem Endgerät gespeichert, bis Sie diese selbst löschen oder eine 
                automatische Löschung durch Ihren Webbrowser erfolgt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">6. SSL- bzw. TLS-Verschlüsselung</h2>
              <p className="text-muted-foreground mb-4">
                Diese Seite nutzt aus Sicherheitsgründen und zum Schutz der Übertragung vertraulicher 
                Inhalte, wie zum Beispiel Bestellungen oder Anfragen, die Sie an uns als Seitenbetreiber 
                senden, eine SSL- bzw. TLS-Verschlüsselung. Eine verschlüsselte Verbindung erkennen Sie 
                daran, dass die Adresszeile des Browsers von "http://" auf "https://" wechselt und an dem 
                Schloss-Symbol in Ihrer Browserzeile.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">7. Speicherdauer</h2>
              <p className="text-muted-foreground mb-4">
                Soweit innerhalb dieser Datenschutzerklärung keine speziellere Speicherdauer genannt wurde, 
                verbleiben Ihre personenbezogenen Daten bei uns, bis der Zweck für die Datenverarbeitung 
                entfällt. Wenn Sie ein berechtigtes Löschersuchen geltend machen oder eine Einwilligung 
                zur Datenverarbeitung widerrufen, werden Ihre Daten gelöscht, sofern wir keine anderen 
                rechtlich zulässigen Gründe für die Speicherung Ihrer personenbezogenen Daten haben.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">8. Änderung dieser Datenschutzerklärung</h2>
              <p className="text-muted-foreground mb-4">
                Wir behalten uns vor, diese Datenschutzerklärung anzupassen, damit sie stets den aktuellen 
                rechtlichen Anforderungen entspricht oder um Änderungen unserer Leistungen in der 
                Datenschutzerklärung umzusetzen.
              </p>
              <p className="text-muted-foreground">
                Stand: 2025
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
      <ChatWidget />
    </div>
  );
}
