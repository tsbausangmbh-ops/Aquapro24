import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { Shield } from "lucide-react";
import heroImage from "@assets/stock_images/professional_office__fb18ab1c.webp";

export default function DatenschutzPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Datenschutz DSGVO München – Ihre Rechte"
        description="Datenschutz DSGVO konform: Ihre Rechte und unsere Datenverarbeitung transparent erklärt. So schützen wir Ihre persönlichen Daten."
        canonical="https://aquapro24.de/datenschutz"
      />
      <Header />
      <main id="main-content">
        <section className="relative py-8 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <div className="flex items-center gap-3 mb-4">
                <Badge variant="secondary" className="gap-1">
                  <Shield className="w-3 h-3" />
                  DSGVO-konform
                </Badge>
                <Badge variant="outline" className="bg-white/10 border-white/30 text-white">Stand: Dezember 2025</Badge>
              </div>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">Datenschutz DSGVO München – Ihre Rechte</h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Datenschutz DSGVO</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Ihre Rechte</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Datenverarbeitung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Cookies Erklärung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Auskunftsrecht</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Löschung Daten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Widerspruchsrecht</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">OpenAI KI</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">EU AI Act</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Google Calendar</span>
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 lg:py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">

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
              <ul className="list-disc list-inside text-muted-foreground space-y-1 columns-1 md:columns-2">
                <li><a href="#m716" className="text-secondary hover:underline">Präambel</a></li>
                <li><a href="#m3" className="text-secondary hover:underline">Verantwortlicher</a></li>
                <li><a href="#mOverview" className="text-secondary hover:underline">Übersicht der Verarbeitungen</a></li>
                <li><a href="#m2427" className="text-secondary hover:underline">Maßgebliche Rechtsgrundlagen</a></li>
                <li><a href="#m27" className="text-secondary hover:underline">Sicherheitsmaßnahmen</a></li>
                <li><a href="#m25" className="text-secondary hover:underline">Übermittlung personenbezogener Daten</a></li>
                <li><a href="#m24" className="text-secondary hover:underline">Internationale Datentransfers</a></li>
                <li><a href="#m12" className="text-secondary hover:underline">Datenspeicherung und Löschung</a></li>
                <li><a href="#m10" className="text-secondary hover:underline">Rechte der betroffenen Personen</a></li>
                <li><a href="#m317" className="text-secondary hover:underline">Geschäftliche Leistungen</a></li>
                <li><a href="#m326" className="text-secondary hover:underline">Zahlungsverfahren</a></li>
                <li><a href="#m225" className="text-secondary hover:underline">Webhosting</a></li>
                <li><a href="#m134" className="text-secondary hover:underline">Einsatz von Cookies</a></li>
                <li><a href="#m182" className="text-secondary hover:underline">Kontakt- und Anfrageverwaltung</a></li>
                <li><a href="#m263" className="text-secondary hover:underline">Webanalyse und Optimierung</a></li>
                <li><a href="#mKI" className="text-secondary hover:underline">KI-Chatbot, OpenAI & EU AI Act</a></li>
                <li><a href="#mGoogle" className="text-secondary hover:underline">Google Calendar Integration</a></li>
                <li><a href="#mWhatsApp" className="text-secondary hover:underline">WhatsApp Business</a></li>
              </ul>
            </section>

            {/* Verantwortlicher */}
            <section id="m3">
              <h2 className="text-xl font-semibold mb-4">Verantwortlicher</h2>
              <div className="bg-muted/30 rounded-lg p-6">
                <p className="text-muted-foreground mb-2">
                  <strong>AquaPro 24</strong><br />
                  Inhaber: Mustafa Sakar<br />
                  Hardenbergstr. 4<br />
                  80992 München<br />
                  Deutschland
                </p>
                <p className="text-muted-foreground mb-2">
                  Vertretungsberechtigte Person: Mustafa Sakar
                </p>
                <p className="text-muted-foreground mb-2">
                  E-Mail-Adresse: <a href="mailto:info@aquapro24.de" className="text-secondary hover:underline">info@aquapro24.de</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  Telefon: <a href="tel:+4989444438872" className="text-secondary hover:underline">089 444438872</a>
                </p>
                <p className="text-muted-foreground mb-2">
                  USt-IdNr: folgt
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
                <li>Büro- und Organisationsverfahren</li>
                <li>Geschäftsprozesse und betriebswirtschaftliche Verfahren</li>
              </ul>
            </section>

            {/* Rechtsgrundlagen */}
            <section id="m2427">
              <h2 className="text-xl font-semibold mb-4">Maßgebliche Rechtsgrundlagen</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Maßgebliche Rechtsgrundlagen nach der DSGVO:</strong> Im Folgenden erhalten Sie eine 
                Übersicht der Rechtsgrundlagen der DSGVO, auf deren Basis wir personenbezogene Daten verarbeiten. 
                Bitte nehmen Sie zur Kenntnis, dass neben den Regelungen der DSGVO nationale Datenschutzvorgaben 
                in Ihrem bzw. unserem Wohn- oder Sitzland gelten können. Sollten ferner im Einzelfall speziellere 
                Rechtsgrundlagen maßgeblich sein, teilen wir Ihnen diese in der Datenschutzerklärung mit.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3">
                <li>
                  <strong>Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)</strong> – Die betroffene Person 
                  hat ihre Einwilligung in die Verarbeitung der sie betreffenden personenbezogenen Daten 
                  für einen oder mehrere bestimmte Zwecke gegeben.
                </li>
                <li>
                  <strong>Vertragserfüllung und vorvertragliche Anfragen (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</strong> – 
                  Die Verarbeitung ist für die Erfüllung eines Vertrags, dessen Vertragspartei die betroffene 
                  Person ist, oder zur Durchführung vorvertraglicher Maßnahmen erforderlich, die auf Anfrage 
                  der betroffenen Person erfolgen.
                </li>
                <li>
                  <strong>Rechtliche Verpflichtung (Art. 6 Abs. 1 S. 1 lit. c DSGVO)</strong> – 
                  Die Verarbeitung ist zur Erfüllung einer rechtlichen Verpflichtung erforderlich, 
                  der der Verantwortliche unterliegt.
                </li>
                <li>
                  <strong>Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</strong> – 
                  Die Verarbeitung ist zur Wahrung der berechtigten Interessen des Verantwortlichen 
                  oder eines Dritten notwendig, vorausgesetzt, dass die Interessen, Grundrechte und 
                  Grundfreiheiten der betroffenen Person, die den Schutz personenbezogener Daten 
                  verlangen, nicht überwiegen.
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Nationale Datenschutzregelungen in Deutschland:</strong> Zusätzlich zu den 
                Datenschutzregelungen der DSGVO gelten nationale Regelungen zum Datenschutz in Deutschland. 
                Hierzu gehört insbesondere das Gesetz zum Schutz vor Missbrauch personenbezogener Daten 
                bei der Datenverarbeitung (Bundesdatenschutzgesetz – BDSG). Das BDSG enthält insbesondere 
                Spezialregelungen zum Recht auf Auskunft, zum Recht auf Löschung, zum Widerspruchsrecht, 
                zur Verarbeitung besonderer Kategorien personenbezogener Daten, zur Verarbeitung für andere 
                Zwecke und zur Übermittlung sowie automatisierten Entscheidungsfindung im Einzelfall 
                einschließlich Profiling.
              </p>
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
                der Verfügbarkeit und ihrer Trennung. Des Weiteren haben wir Verfahren eingerichtet, die 
                eine Wahrnehmung von Betroffenenrechten, die Löschung von Daten und Reaktionen auf die 
                Gefährdung der Daten gewährleisten. Ferner berücksichtigen wir den Schutz personenbezogener 
                Daten bereits bei der Entwicklung bzw. Auswahl von Hardware, Software sowie Verfahren 
                entsprechend dem Prinzip des Datenschutzes, durch Technikgestaltung und durch 
                datenschutzfreundliche Voreinstellungen.
              </p>
              <p className="text-muted-foreground">
                <strong>Sicherung von Online-Verbindungen durch TLS-/SSL-Verschlüsselungstechnologie (HTTPS):</strong>{" "}
                Um die Daten der Nutzer, die über unsere Online-Dienste übertragen werden, vor unerlaubten 
                Zugriffen zu schützen, setzen wir auf die TLS-/SSL-Verschlüsselungstechnologie. Secure 
                Sockets Layer (SSL) und Transport Layer Security (TLS) sind die Eckpfeiler der sicheren 
                Datenübertragung im Internet. Diese Technologien verschlüsseln die Informationen, die 
                zwischen der Website oder App und dem Browser des Nutzers (oder zwischen zwei Servern) 
                übertragen werden, wodurch die Daten vor unbefugtem Zugriff geschützt sind. TLS, als die 
                weiterentwickelte und sicherere Version von SSL, gewährleistet, dass alle Datenübertragungen 
                den höchsten Sicherheitsstandards entsprechen. Wenn eine Website durch ein SSL-/TLS-Zertifikat 
                gesichert ist, wird dies durch die Anzeige von HTTPS in der URL signalisiert. Dies dient als 
                ein Indikator für die Nutzer, dass ihre Daten sicher und verschlüsselt übertragen werden.
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
                in eine Website eingebunden sind. In solchen Fällen beachten wir die gesetzlichen Vorgaben und 
                schließen insbesondere entsprechende Verträge bzw. Vereinbarungen, die dem Schutz Ihrer Daten 
                dienen, mit den Empfängern Ihrer Daten ab.
              </p>
              <p className="text-muted-foreground">
                <strong>Datenübermittlung innerhalb der Organisation:</strong> Wir können personenbezogene Daten 
                an andere Abteilungen oder Einheiten innerhalb unserer Organisation übermitteln oder ihnen den 
                Zugriff darauf gewähren. Sofern die Datenweitergabe zu administrativen Zwecken erfolgt, beruht 
                sie auf unseren berechtigten unternehmerischen und betriebswirtschaftlichen Interessen oder 
                erfolgt, sofern sie zur Erfüllung unserer vertragsbezogenen Verpflichtungen erforderlich ist 
                beziehungsweise wenn eine Einwilligung der Betroffenen oder eine gesetzliche Erlaubnis vorliegt.
              </p>
            </section>

            {/* Internationale Datentransfers */}
            <section id="m24">
              <h2 className="text-xl font-semibold mb-4">Internationale Datentransfers</h2>
              <p className="text-muted-foreground mb-4">
                <strong>Datenverarbeitung in Drittländern:</strong> Sofern wir Daten in ein Drittland 
                (d. h. außerhalb der Europäischen Union (EU) oder des Europäischen Wirtschaftsraums (EWR)) 
                übermitteln oder dies im Rahmen der Nutzung von Diensten Dritter oder der Offenlegung bzw. 
                Übermittlung von Daten an andere Personen, Stellen oder Unternehmen geschieht (was erkennbar 
                wird anhand der Postadresse des jeweiligen Anbieters oder wenn in der Datenschutzerklärung 
                ausdrücklich auf den Datentransfer in Drittländer hingewiesen wird), erfolgt dies stets im 
                Einklang mit den gesetzlichen Vorgaben.
              </p>
              <p className="text-muted-foreground mb-4">
                Für Datenübermittlungen in die USA stützen wir uns vorrangig auf das Data Privacy Framework (DPF), 
                welches durch einen Angemessenheitsbeschluss der EU-Kommission vom 10.07.2023 als sicherer 
                Rechtsrahmen anerkannt wurde. Zusätzlich haben wir mit den jeweiligen Anbietern 
                Standardvertragsklauseln abgeschlossen, die den Vorgaben der EU-Kommission entsprechen und 
                vertragliche Verpflichtungen zum Schutz Ihrer Daten festlegen.
              </p>
              <p className="text-muted-foreground mb-4">
                Diese zweifache Absicherung gewährleistet einen umfassenden Schutz Ihrer Daten: Das DPF bildet 
                die primäre Schutzebene, während die Standardvertragsklauseln als zusätzliche Sicherheit dienen. 
                Sollten sich Änderungen im Rahmen des DPF ergeben, greifen die Standardvertragsklauseln als 
                zuverlässige Rückfalloption ein. So stellen wir sicher, dass Ihre Daten auch bei etwaigen 
                politischen oder rechtlichen Veränderungen stets angemessen geschützt bleiben.
              </p>
              <p className="text-muted-foreground mb-4">
                Bei den einzelnen Diensteanbietern informieren wir Sie darüber, ob sie nach dem DPF zertifiziert 
                sind und ob Standardvertragsklauseln vorliegen. Weitere Informationen zum DPF und eine Liste 
                der zertifizierten Unternehmen finden Sie auf der Website des US-Handelsministeriums unter:{" "}
                <a href="https://www.dataprivacyframework.gov/" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  https://www.dataprivacyframework.gov/
                </a> (in englischer Sprache).
              </p>
              <p className="text-muted-foreground">
                Für Datenübermittlungen in andere Drittländer gelten entsprechende Sicherheitsmaßnahmen, 
                insbesondere Standardvertragsklauseln, ausdrückliche Einwilligungen oder gesetzlich erforderliche 
                Übermittlungen. Informationen zu Drittlandtransfers und geltenden Angemessenheitsbeschlüssen 
                können Sie dem Informationsangebot der EU-Kommission entnehmen:{" "}
                <a href="https://commission.europa.eu/law/law-topic/data-protection/international-dimension-data-protection_en?prefLang=de" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                  EU-Kommission Datenschutz
                </a>
              </p>
            </section>

            {/* Datenspeicherung und Löschung */}
            <section id="m12">
              <h2 className="text-xl font-semibold mb-4">Allgemeine Informationen zur Datenspeicherung und Löschung</h2>
              <p className="text-muted-foreground mb-4">
                Wir löschen personenbezogene Daten, die wir verarbeiten, gemäß den gesetzlichen Bestimmungen, 
                sobald die zugrundeliegenden Einwilligungen widerrufen werden oder keine weiteren rechtlichen 
                Grundlagen für die Verarbeitung bestehen. Dies betrifft Fälle, in denen der ursprüngliche 
                Verarbeitungszweck entfällt oder die Daten nicht mehr benötigt werden. Ausnahmen von dieser 
                Regelung bestehen, wenn gesetzliche Pflichten oder besondere Interessen eine längere Aufbewahrung 
                oder Archivierung der Daten erfordern.
              </p>
              <p className="text-muted-foreground mb-4">
                Insbesondere müssen Daten, die aus handels- oder steuerrechtlichen Gründen aufbewahrt werden 
                müssen oder deren Speicherung notwendig ist zur Rechtsverfolgung oder zum Schutz der Rechte 
                anderer natürlicher oder juristischer Personen, entsprechend archiviert werden.
              </p>
              <p className="text-muted-foreground mb-4">
                Bei mehreren Angaben zur Aufbewahrungsdauer oder Löschungsfristen eines Datums, ist stets die 
                längste Frist maßgeblich. Daten, die nicht mehr für den ursprünglich vorgesehenen Zweck, sondern 
                aufgrund gesetzlicher Vorgaben oder anderer Gründe aufbewahrt werden, verarbeiten wir ausschließlich 
                zu den Gründen, die ihre Aufbewahrung rechtfertigen.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Fristbeginn mit Ablauf des Jahres:</strong> Beginnt eine Frist nicht ausdrücklich zu einem 
                bestimmten Datum und beträgt sie mindestens ein Jahr, so startet sie automatisch am Ende des 
                Kalenderjahres, in dem das fristauslösende Ereignis eingetreten ist. Im Fall laufender 
                Vertragsverhältnisse, in deren Rahmen Daten gespeichert werden, ist das fristauslösende Ereignis 
                der Zeitpunkt des Wirksamwerdens der Kündigung oder sonstige Beendigung des Rechtsverhältnisses.
              </p>
              <h3 className="text-lg font-medium mb-2">Aufbewahrungsfristen</h3>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Kontaktanfragen:</strong> 3 Jahre nach Abschluss</li>
                <li><strong>Vertragsdaten:</strong> 10 Jahre (gemäß HGB/AO)</li>
                <li><strong>Rechnungen:</strong> 10 Jahre</li>
                <li><strong>Gewährleistungsdaten:</strong> 4 Jahre</li>
                <li><strong>Server-Logs:</strong> 7 Tage</li>
                <li><strong>Buchungsdaten:</strong> 6 Monate nach Terminabschluss</li>
                <li><strong>KI-Chat-Verläufe:</strong> Werden nicht dauerhaft gespeichert; OpenAI speichert max. 30 Tage</li>
              </ul>
            </section>

            {/* Rechte der betroffenen Personen */}
            <section id="m10">
              <h2 className="text-xl font-semibold mb-4">Rechte der betroffenen Personen</h2>
              <p className="text-muted-foreground mb-4">
                Rechte der betroffenen Personen aus der DSGVO: Ihnen stehen als Betroffene nach der DSGVO 
                verschiedene Rechte zu, die sich insbesondere aus Art. 15 bis 21 DSGVO ergeben:
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-3">
                <li>
                  <strong>Widerspruchsrecht:</strong> Sie haben das Recht, aus Gründen, die sich aus Ihrer 
                  besonderen Situation ergeben, jederzeit gegen die Verarbeitung der Sie betreffenden 
                  personenbezogenen Daten, die aufgrund von Art. 6 Abs. 1 lit. e oder f DSGVO erfolgt, 
                  Widerspruch einzulegen; dies gilt auch für ein auf diese Bestimmungen gestütztes Profiling. 
                  Werden die Sie betreffenden personenbezogenen Daten verarbeitet, um Direktwerbung zu betreiben, 
                  haben Sie das Recht, jederzeit Widerspruch gegen die Verarbeitung der Sie betreffenden 
                  personenbezogenen Daten zum Zwecke derartiger Werbung einzulegen; dies gilt auch für das 
                  Profiling, soweit es mit solcher Direktwerbung in Verbindung steht.
                </li>
                <li>
                  <strong>Widerrufsrecht bei Einwilligungen:</strong> Sie haben das Recht, erteilte 
                  Einwilligungen jederzeit zu widerrufen.
                </li>
                <li>
                  <strong>Auskunftsrecht:</strong> Sie haben das Recht, eine Bestätigung darüber zu verlangen, 
                  ob betreffende Daten verarbeitet werden und auf Auskunft über diese Daten sowie auf weitere 
                  Informationen und Kopie der Daten entsprechend den gesetzlichen Vorgaben.
                </li>
                <li>
                  <strong>Recht auf Berichtigung:</strong> Sie haben entsprechend den gesetzlichen Vorgaben 
                  das Recht, die Vervollständigung der Sie betreffenden Daten oder die Berichtigung der Sie 
                  betreffenden unrichtigen Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Löschung und Einschränkung der Verarbeitung:</strong> Sie haben nach 
                  Maßgabe der gesetzlichen Vorgaben das Recht, zu verlangen, dass Sie betreffende Daten 
                  unverzüglich gelöscht werden, bzw. alternativ nach Maßgabe der gesetzlichen Vorgaben eine 
                  Einschränkung der Verarbeitung der Daten zu verlangen.
                </li>
                <li>
                  <strong>Recht auf Datenübertragbarkeit:</strong> Sie haben das Recht, Sie betreffende Daten, 
                  die Sie uns bereitgestellt haben, nach Maßgabe der gesetzlichen Vorgaben in einem strukturierten, 
                  gängigen und maschinenlesbaren Format zu erhalten oder deren Übermittlung an einen anderen 
                  Verantwortlichen zu fordern.
                </li>
                <li>
                  <strong>Beschwerderecht bei der Aufsichtsbehörde:</strong> Sie haben unbeschadet eines 
                  anderweitigen verwaltungsrechtlichen oder gerichtlichen Rechtsbehelfs das Recht auf Beschwerde 
                  bei einer Aufsichtsbehörde, insbesondere in dem Mitgliedstaat ihres gewöhnlichen Aufenthaltsorts, 
                  ihres Arbeitsplatzes oder des Orts des mutmaßlichen Verstoßes, wenn Sie der Ansicht sind, dass 
                  die Verarbeitung der Sie betreffenden personenbezogenen Daten gegen die Vorgaben der DSGVO verstößt.
                </li>
              </ul>
              <p className="text-muted-foreground mt-4">
                <strong>Zuständige Aufsichtsbehörde:</strong> Bayerisches Landesamt für Datenschutzaufsicht (BayLDA), 
                Promenade 18, 91522 Ansbach, Deutschland
              </p>
            </section>

            {/* Geschäftliche Leistungen */}
            <section id="m317">
              <h2 className="text-xl font-semibold mb-4">Geschäftliche Leistungen</h2>
              <p className="text-muted-foreground mb-4">
                Wir verarbeiten Daten unserer Vertrags- und Geschäftspartner, z. B. Kunden und Interessenten 
                (zusammenfassend als „Vertragspartner" bezeichnet), im Rahmen von vertraglichen und 
                vergleichbaren Rechtsverhältnissen sowie damit verbundenen Maßnahmen und im Hinblick auf 
                die Kommunikation mit den Vertragspartnern (oder vorvertraglich), etwa zur Beantwortung von Anfragen.
              </p>
              <p className="text-muted-foreground mb-4">
                Wir verwenden diese Daten, um unsere vertraglichen Verpflichtungen zu erfüllen. Dazu gehören 
                insbesondere die Pflichten zur Erbringung der vereinbarten Leistungen (Sanitärarbeiten, 
                Heizungsinstallation, Badsanierung, Wärmepumpen, Haustechnik), etwaige Aktualisierungspflichten 
                und Abhilfe bei Gewährleistungs- und sonstigen Leistungsstörungen. Darüber hinaus verwenden wir 
                die Daten zur Wahrung unserer Rechte und zum Zwecke der mit diesen Pflichten verbundenen 
                Verwaltungsaufgaben sowie der Unternehmensorganisation.
              </p>
              <p className="text-muted-foreground mb-4">
                Zudem verarbeiten wir die Daten auf Grundlage unserer berechtigten Interessen sowohl an einer 
                ordnungsgemäßen und betriebswirtschaftlichen Geschäftsführung als auch an Sicherheitsmaßnahmen 
                zum Schutz unserer Vertragspartner und unseres Geschäftsbetriebs vor Missbrauch, Gefährdung 
                ihrer Daten, Geheimnisse, Informationen und Rechte (z. B. zur Beteiligung von Telekommunikations-, 
                Transport- und sonstigen Hilfsdiensten sowie Subunternehmern, Banken, Steuer- und Rechtsberatern, 
                Zahlungsdienstleistern oder Finanzbehörden).
              </p>
              <p className="text-muted-foreground mb-4">
                Wir löschen die Daten nach Ablauf gesetzlicher Gewährleistungs- und vergleichbarer Pflichten, 
                d. h. grundsätzlich nach vier Jahren, es sei denn, dass die Daten aus gesetzlichen Gründen 
                der Archivierung aufbewahrt werden müssen (etwa für Steuerzwecke im Regelfall zehn Jahre).
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten, Zahlungsdaten, Kontaktdaten, 
                Vertragsdaten, Nutzungsdaten, Meta-/Kommunikationsdaten</li>
                <li><strong>Betroffene Personen:</strong> Leistungsempfänger, Auftraggeber, Interessenten, 
                Geschäfts- und Vertragspartner</li>
                <li><strong>Zwecke:</strong> Erbringung vertraglicher Leistungen, Sicherheitsmaßnahmen, 
                Kommunikation, Büro- und Organisationsverfahren</li>
                <li><strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO), 
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</li>
              </ul>
            </section>

            {/* Zahlungsverfahren */}
            <section id="m326">
              <h2 className="text-xl font-semibold mb-4">Zahlungsverfahren</h2>
              <p className="text-muted-foreground mb-4">
                Im Rahmen von Vertrags- und sonstigen Rechtsbeziehungen, aufgrund gesetzlicher Pflichten oder 
                sonst auf Grundlage unserer berechtigten Interessen bieten wir den betroffenen Personen 
                effiziente und sichere Zahlungsmöglichkeiten an und setzen hierzu neben Banken und 
                Kreditinstituten weitere Dienstleister ein (zusammenfassend "Zahlungsdienstleister"). 
                Der Zahlungsverkehr erfolgt dabei entsprechend dem Stand der Technik ausschließlich über 
                verschlüsselte Verbindungen, sodass die eingegebenen Daten während der Übermittlung vor 
                unbefugtem Zugriff geschützt sind.
              </p>
              <p className="text-muted-foreground mb-4">
                Zu den durch die Zahlungsdienstleister verarbeiteten Daten gehören Bestandsdaten, wie z. B. 
                der Name und die Adresse, Bankdaten, wie z. B. Kontonummern, Passwörter, TANs und Prüfsummen 
                sowie die Vertrags-, Summen- und empfängerbezogenen Angaben. Die Angaben sind erforderlich, 
                um die Transaktionen durchzuführen. Die eingegebenen Daten werden jedoch nur durch die 
                Zahlungsdienstleister verarbeitet und bei diesen gespeichert. D. h., wir erhalten keine 
                konto- oder kreditkartenbezogenen Informationen, sondern lediglich Informationen mit 
                Bestätigung oder Negativbeauskunftung der Zahlung.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten, Zahlungsdaten, Vertragsdaten, 
                Nutzungsdaten, Kontaktdaten</li>
                <li><strong>Betroffene Personen:</strong> Leistungsempfänger, Geschäftspartner, Interessenten</li>
                <li><strong>Zwecke:</strong> Erbringung vertraglicher Leistungen, Geschäftsprozesse</li>
                <li><strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)</li>
              </ul>
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
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten, Meta-/Kommunikationsdaten, 
                Protokolldaten, Inhaltsdaten</li>
                <li><strong>Betroffene Personen:</strong> Nutzer (Webseitenbesucher)</li>
                <li><strong>Zwecke:</strong> Bereitstellung des Onlineangebotes, Nutzerfreundlichkeit, 
                Sicherheitsmaßnahmen, Reichweitenmessung, Servermonitoring und Fehlererkennung</li>
                <li><strong>Rechtsgrundlage:</strong> Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</li>
                <li><strong>Speicherdauer:</strong> 7 Tage</li>
              </ul>
            </section>

            {/* Cookies */}
            <section id="m134">
              <h2 className="text-xl font-semibold mb-4">Einsatz von Cookies</h2>
              <p className="text-muted-foreground mb-4">
                Unter dem Begriff „Cookies" werden Funktionen, die Informationen auf Endgeräten der Nutzer 
                speichern und aus ihnen auslesen, verstanden. Cookies können ferner in Bezug auf unterschiedliche 
                Anliegen Einsatz finden, etwa zu Zwecken der Funktionsfähigkeit, der Sicherheit und des Komforts 
                von Onlineangeboten sowie der Erstellung von Analysen der Besucherströme. Wir verwenden Cookies 
                gemäß den gesetzlichen Vorschriften. Dazu holen wir, wenn erforderlich, vorab die Zustimmung 
                der Nutzer ein. Ist eine Zustimmung nicht notwendig, setzen wir auf unsere berechtigten Interessen. 
                Dies gilt, wenn das Speichern und Auslesen von Informationen unerlässlich ist, um ausdrücklich 
                angeforderte Inhalte und Funktionen bereitstellen zu können.
              </p>
              <p className="text-muted-foreground mb-4">
                <strong>Speicherdauer:</strong> Im Hinblick auf die Speicherdauer werden die folgenden Arten 
                von Cookies unterschieden:
              </p>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-1">
                <li><strong>Temporäre Cookies (Session-Cookies):</strong> Werden spätestens gelöscht, nachdem 
                ein Nutzer ein Onlineangebot verlassen und sein Endgerät (Browser) geschlossen hat.</li>
                <li><strong>Permanente Cookies:</strong> Bleiben auch nach dem Schließen des Endgeräts gespeichert. 
                Die Speicherdauer kann bis zu zwei Jahre betragen.</li>
              </ul>
              <p className="text-muted-foreground">
                <strong>Allgemeine Hinweise zum Widerruf und Widerspruch (Opt-out):</strong> Nutzer können die 
                von ihnen abgegebenen Einwilligungen jederzeit widerrufen und zudem einen Widerspruch gegen 
                die Verarbeitung entsprechend den gesetzlichen Vorgaben, auch mittels der Privatsphäre-Einstellungen 
                ihres Browsers, erklären.
              </p>
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
                <li><strong>Verarbeitete Datenarten:</strong> Bestandsdaten, Kontaktdaten, Inhaltsdaten, 
                Nutzungsdaten, Meta-/Kommunikationsdaten</li>
                <li><strong>Betroffene Personen:</strong> Kommunikationspartner</li>
                <li><strong>Zwecke:</strong> Kommunikation, Organisations- und Verwaltungsverfahren, Feedback</li>
                <li><strong>Rechtsgrundlage:</strong> Vertragserfüllung und vorvertragliche Anfragen 
                (Art. 6 Abs. 1 S. 1 lit. b DSGVO), Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</li>
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
                Onlineangebot oder dessen Funktionen am häufigsten genutzt werden, oder zur Wiederverwendung 
                einladen. Ebenso können wir nachvollziehen, welche Bereiche der Optimierung bedürfen.
              </p>
              <ul className="list-disc list-inside text-muted-foreground space-y-1">
                <li><strong>Verarbeitete Datenarten:</strong> Nutzungsdaten, Meta-/Kommunikationsdaten</li>
                <li><strong>Betroffene Personen:</strong> Nutzer</li>
                <li><strong>Zwecke:</strong> Reichweitenmessung, Profile mit nutzerbezogenen Informationen, 
                Tracking, Konversionsmessung</li>
                <li><strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO), 
                Berechtigte Interessen (Art. 6 Abs. 1 S. 1 lit. f DSGVO)</li>
              </ul>
            </section>

            {/* KI-Chatbot */}
            <section id="mKI">
              <h2 className="text-xl font-semibold mb-4">KI-Chatbot, OpenAI & EU AI Act</h2>
              <p className="text-muted-foreground mb-4">
                Auf unserer Website setzen wir einen KI-gestützten Chatbot ein, der auf der Technologie 
                von OpenAI basiert. Dieser Assistent dient der ersten Beratung zu Sanitär-, Heizungs- und 
                Haustechnikfragen sowie zur unverbindlichen Kostenschätzung.
              </p>

              <h3 className="text-lg font-medium mb-2 mt-6">EU AI Act Konformität (Verordnung (EU) 2024/1689)</h3>
              <p className="text-muted-foreground mb-4">
                Gemäß den Transparenzanforderungen des EU AI Act (in Kraft seit 1. August 2024, Transparenzpflichten 
                seit 2. Februar 2025) informieren wir Sie:
              </p>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Transparenzhinweis gemäß Art. 50 EU AI Act:</strong><br />
                  Sie interagieren mit einem KI-System (Künstliche Intelligenz). Der Chat wird automatisch 
                  von einem KI-Assistenten bearbeitet, nicht von einem Menschen. Menschliche Mitarbeiter 
                  sind während unserer Geschäftszeiten telefonisch erreichbar unter 089 444438872.
                </p>
              </div>
              <ul className="list-disc list-inside text-muted-foreground mb-4 space-y-2">
                <li><strong>Risikoklassifizierung:</strong> Unser Chatbot ist als KI-System mit begrenztem Risiko ("Limited Risk") gemäß Art. 50 EU AI Act eingestuft.</li>
                <li><strong>Transparenzpflicht erfüllt:</strong> Sie werden vor und während der Nutzung darauf hingewiesen, dass Sie mit einem KI-System interagieren.</li>
                <li><strong>Menschliche Alternative:</strong> Telefon (089 444438872), E-Mail (info@aquapro24.de) und persönlicher Kontakt stehen jederzeit zur Verfügung.</li>
                <li><strong>Keine automatisierten Entscheidungen:</strong> Der Chatbot trifft keine rechtlich bindenden Entscheidungen. Alle Preisangaben sind unverbindliche Schätzungen.</li>
              </ul>

              <h3 className="text-lg font-medium mb-2 mt-6">Datenverarbeitung durch OpenAI</h3>
              <p className="text-muted-foreground mb-4">
                <strong>Verarbeitete Daten:</strong> Ihre Chat-Nachrichten und Eingaben werden zur 
                Verarbeitung an die Server von OpenAI übermittelt. OpenAI verarbeitet diese Daten, 
                um eine KI-generierte Antwort zu erstellen. Wir speichern Chat-Verläufe nicht dauerhaft 
                auf unseren Servern.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Anbieter:</strong> OpenAI L.L.C., 3180 18th Street, San Francisco, CA 94110, USA<br />
                  <strong>Rechtsgrundlage:</strong> Einwilligung durch Nutzung des Chats (Art. 6 Abs. 1 S. 1 lit. a DSGVO)<br />
                  <strong>Drittlandtransfer:</strong> USA (Data Privacy Framework + Standardvertragsklauseln)<br />
                  <strong>DPF-Zertifiziert:</strong> Ja<br />
                  <strong>Speicherdauer:</strong> OpenAI speichert API-Anfragen max. 30 Tage zur Missbrauchserkennung<br />
                  <strong>Weitere Informationen:</strong>{" "}
                  <a href="https://openai.com/policies/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    OpenAI Datenschutzerklärung
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground mb-4">
                <strong>Wichtiger Hinweis:</strong> Bitte geben Sie im Chat keine sensiblen personenbezogenen Daten 
                (z.B. Gesundheitsdaten, Bankdaten) ein. Die vom KI-Assistenten genannten Preise sind 
                unverbindliche Schätzungen. Alle Preise verstehen sich als Netto-Preise zzgl. 19% MwSt.
              </p>
              <div className="bg-amber-50 dark:bg-amber-950/30 border border-amber-200 dark:border-amber-800 rounded-lg p-4 mb-4">
                <p className="text-sm text-amber-800 dark:text-amber-200">
                  <strong>Hinweis zur Preisgestaltung bei KI-Beratung:</strong> Die von unseren KI-Beratern 
                  genannten Preisschätzungen enthalten einen Beratungsaufschlag von 30% gegenüber den auf 
                  unserer Website angegebenen Basispreisen. Dies dient der Vergütung der KI-gestützten 
                  Beratungsleistung. Die endgültigen Preise werden erst nach einer persönlichen Besichtigung 
                  vor Ort verbindlich festgelegt. Stand: Dezember 2025.
                </p>
              </div>
              <div className="bg-blue-50 dark:bg-blue-950/30 border border-blue-200 dark:border-blue-800 rounded-lg p-4">
                <h4 className="text-sm font-semibold text-blue-800 dark:text-blue-200 mb-2">
                  KI-Hinweis gemäß EU AI Act (Art. 50)
                </h4>
                <p className="text-sm text-blue-700 dark:text-blue-300 mb-2">
                  <strong>Transparenzhinweis:</strong> AquaPro24 setzt zur Unterstützung der Geschäftsprozesse 
                  KI-basierte Systeme ein. Diese werden u.a. bei der Angebotserstellung, Kommunikation und 
                  Dokumentenverarbeitung genutzt. Alle endgültigen Entscheidungen werden von qualifizierten 
                  Mitarbeitern getroffen und verantwortet.
                </p>
                <p className="text-xs text-blue-600 dark:text-blue-400">
                  <strong>Rechtsgrundlage:</strong> Verordnung (EU) 2024/1689 (EU AI Act), Art. 22 DSGVO
                </p>
              </div>
            </section>

            {/* Google Calendar */}
            <section id="mGoogle">
              <h2 className="text-xl font-semibold mb-4">Google Calendar Integration</h2>
              <p className="text-muted-foreground mb-4">
                Für die Online-Terminbuchung nutzen wir Google Calendar. Bei der Terminbuchung werden Ihre 
                Kontaktdaten und Terminwünsche an Google Ireland Limited übermittelt und dort gespeichert.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Anbieter:</strong> Google Ireland Limited, Gordon House, Barrow Street, Dublin 4, Irland<br />
                  <strong>Mutterunternehmen:</strong> Google LLC, 1600 Amphitheatre Parkway, Mountain View, CA 94043, USA<br />
                  <strong>Rechtsgrundlage:</strong> Vertragserfüllung (Art. 6 Abs. 1 S. 1 lit. b DSGVO)<br />
                  <strong>Drittlandtransfer:</strong> USA (Data Privacy Framework + Standardvertragsklauseln)<br />
                  <strong>DPF-Zertifiziert:</strong> Ja<br />
                  <strong>Weitere Informationen:</strong>{" "}
                  <a href="https://policies.google.com/privacy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    Google Datenschutzerklärung
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground">
                <strong>Verarbeitete Daten:</strong> Name, E-Mail-Adresse, Telefonnummer, gewünschter Termin, 
                Serviceart, Adresse des Einsatzortes, optionale Beschreibung des Anliegens.
              </p>
            </section>

            {/* WhatsApp */}
            <section id="mWhatsApp">
              <h2 className="text-xl font-semibold mb-4">WhatsApp Business</h2>
              <p className="text-muted-foreground mb-4">
                Wir bieten die Möglichkeit, uns über WhatsApp zu kontaktieren. Bei der Nutzung von WhatsApp 
                werden Daten an WhatsApp Ireland Limited übermittelt.
              </p>
              <div className="bg-muted/30 rounded-lg p-4 mb-4">
                <p className="text-sm text-muted-foreground">
                  <strong>Anbieter:</strong> WhatsApp Ireland Limited, 4 Grand Canal Square, Grand Canal Harbour, Dublin 2, Irland<br />
                  <strong>Mutterunternehmen:</strong> Meta Platforms, Inc., 1 Hacker Way, Menlo Park, CA 94025, USA<br />
                  <strong>Rechtsgrundlage:</strong> Einwilligung (Art. 6 Abs. 1 S. 1 lit. a DSGVO)<br />
                  <strong>Drittlandtransfer:</strong> USA (Standardvertragsklauseln)<br />
                  <strong>Weitere Informationen:</strong>{" "}
                  <a href="https://www.whatsapp.com/legal/privacy-policy" target="_blank" rel="noopener noreferrer" className="text-secondary hover:underline">
                    WhatsApp Datenschutzerklärung
                  </a>
                </p>
              </div>
              <p className="text-muted-foreground">
                <strong>Hinweis:</strong> WhatsApp erhebt und verarbeitet Metadaten (z.B. Zeitpunkt der Nachricht, 
                Telefonnummer). Für vertrauliche Informationen empfehlen wir die Kontaktaufnahme per E-Mail oder Telefon.
              </p>
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
                  href="tel:+4989444438872" 
                  className="inline-flex items-center gap-2 text-secondary hover:underline"
                  data-testid="link-privacy-phone"
                >
                  089 444438872
                </a>
              </div>
            </section>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
