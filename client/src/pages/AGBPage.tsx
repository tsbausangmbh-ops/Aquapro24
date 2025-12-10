import Header from "@/components/Header";
import Footer from "@/components/Footer";
import ChatWidget from "@/components/ChatWidget";
import SEO from "@/components/SEO";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AGB | Allgemeine Geschäftsbedingungen | Münchner Heizung & Sanitär"
        description="Allgemeine Geschäftsbedingungen der Münchner Heizung & Sanitär GmbH für Sanitär-, Heizungs- und Installationsarbeiten."
        canonical="https://aquapro24.de/agb"
      />
      <Header />
      <main className="pt-6 pb-6 lg:pt-8 lg:pb-8">
        <div className="max-w-4xl mx-auto px-4 lg:px-8">
          <h1 className="text-3xl lg:text-4xl font-bold mb-8">Allgemeine Geschäftsbedingungen (AGB)</h1>
          
          <div className="prose prose-gray dark:prose-invert max-w-none space-y-8">
            <section>
              <h2 className="text-xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-muted-foreground mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen der 
                Münchner Heizung & Sanitär GmbH (nachfolgend "Auftragnehmer") und dem Kunden 
                (nachfolgend "Auftraggeber") über Sanitär-, Heizungs- und Installationsarbeiten sowie 
                damit verbundene Dienstleistungen. Diese AGB gelten sowohl für Privatkunden (Verbraucher) 
                als auch für Geschäftskunden (B2B).
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Abweichende Bedingungen des Auftraggebers werden nicht Vertragsbestandteil, es sei 
                denn, der Auftragnehmer stimmt ihrer Geltung ausdrücklich schriftlich zu.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Diese AGB gelten auch für alle künftigen Geschäftsbeziehungen, auch wenn sie nicht 
                nochmals ausdrücklich vereinbart werden.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 2 Vertragsschluss und Angebote</h2>
              <p className="text-muted-foreground mb-4">
                (1) Unsere Angebote sind freibleibend und unverbindlich, sofern sie nicht ausdrücklich 
                als verbindlich gekennzeichnet sind.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Ein Vertrag kommt erst durch unsere schriftliche Auftragsbestätigung oder durch 
                Beginn der Ausführung der Arbeiten zustande.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Bei Festpreisangeboten gilt der genannte Preis verbindlich für den beschriebenen 
                Leistungsumfang. Änderungen am Leistungsumfang bedürfen einer gesonderten Vereinbarung.
              </p>
              <p className="text-muted-foreground mb-4">
                (4) Gemäß § 650c BGB gilt: Ist dem Vertrag ein Kostenanschlag zugrunde gelegt worden, 
                ohne dass dieser vereinbarungsgemäß unverbindlich ist, so wird die vereinbarte 
                Vergütung für den Teil der Leistung berechnet, der dem Kostenanschlag entspricht. 
                Die darüber hinausgehende Vergütung wird nach den tatsächlich erforderlichen Kosten 
                mit angemessenen Zuschlägen für allgemeine Geschäftskosten, Wagnis und Gewinn ermittelt.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 3 Preise und Zahlungsbedingungen</h2>
              <p className="text-muted-foreground mb-4">
                (1) Alle Preise verstehen sich inklusive der gesetzlichen Mehrwertsteuer von derzeit 19%.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Bei Aufträgen über 5.000 € netto kann eine Anzahlung von bis zu 30% des 
                Auftragswertes verlangt werden.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Die Rechnung ist innerhalb von 14 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung 
                fällig, sofern keine abweichende Vereinbarung getroffen wurde.
              </p>
              <p className="text-muted-foreground mb-4">
                (4) Bei Notdiensteinsätzen außerhalb der regulären Geschäftszeiten (Mo-Fr 7-18 Uhr) 
                gelten die vereinbarten Notdienstzuschläge.
              </p>
              <p className="text-muted-foreground mb-4">
                (5) Bei Zahlungsverzug sind wir berechtigt, Verzugszinsen in Höhe von 5 Prozentpunkten 
                über dem jeweiligen Basiszinssatz zu berechnen.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 4 Leistungsumfang und Ausführung</h2>
              <p className="text-muted-foreground mb-4">
                (1) Der Leistungsumfang ergibt sich aus dem Angebot bzw. der Auftragsbestätigung.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Wir führen die Arbeiten fachgerecht nach den anerkannten Regeln der Technik aus.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Der Auftraggeber gewährt uns freien Zugang zur Arbeitsstelle und stellt die 
                erforderlichen Anschlüsse für Wasser und Strom kostenlos zur Verfügung.
              </p>
              <p className="text-muted-foreground mb-4">
                (4) Ausführungstermine sind nur verbindlich, wenn sie schriftlich als verbindlich 
                vereinbart wurden. Bei höherer Gewalt oder unvorhergesehenen Umständen verlängern sich 
                die Fristen entsprechend.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 5 Mitwirkungspflichten des Auftraggebers</h2>
              <p className="text-muted-foreground mb-4">
                (1) Der Auftraggeber ist verpflichtet, uns über alle Umstände zu informieren, die für 
                die Durchführung der Arbeiten von Bedeutung sein können.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Der Auftraggeber sorgt dafür, dass die Arbeitsstelle frei zugänglich ist und 
                ausreichend beleuchtet werden kann.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Verzögerungen aufgrund fehlender Mitwirkung des Auftraggebers berechtigen uns zur 
                Berechnung von Wartezeiten nach tatsächlichem Aufwand.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 6 Gewährleistung</h2>
              <p className="text-muted-foreground mb-4">
                (1) Für unsere Arbeiten gewähren wir eine Gewährleistung von 2 Jahren ab Abnahme, 
                soweit gesetzlich nicht längere Fristen vorgeschrieben sind.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Mängel sind uns unverzüglich nach Entdeckung schriftlich anzuzeigen.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Bei berechtigten Mängelrügen werden wir nach unserer Wahl nachbessern oder 
                Ersatz liefern. Schlägt die Nachbesserung zweimal fehl, kann der Auftraggeber 
                Minderung oder Rücktritt verlangen.
              </p>
              <p className="text-muted-foreground mb-4">
                (4) Die Gewährleistung erstreckt sich nicht auf Schäden, die durch unsachgemäße 
                Behandlung, übermäßige Beanspruchung oder Eingriffe Dritter entstanden sind.
              </p>
              <p className="text-muted-foreground mb-4">
                (5) Für eingebaute Materialien und Geräte gelten zusätzlich die Garantiebedingungen 
                der jeweiligen Hersteller.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 7 Haftung</h2>
              <p className="text-muted-foreground mb-4">
                (1) Wir haften unbeschränkt für Schäden aus der Verletzung des Lebens, des Körpers 
                oder der Gesundheit sowie für vorsätzlich oder grob fahrlässig verursachte Schäden.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Bei leicht fahrlässiger Verletzung wesentlicher Vertragspflichten ist unsere 
                Haftung auf den vorhersehbaren, vertragstypischen Schaden begrenzt.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Wir empfehlen den Abschluss einer geeigneten Versicherung für den Fall von 
                Wasserschäden während der Arbeiten.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 8 Eigentumsvorbehalt</h2>
              <p className="text-muted-foreground mb-4">
                Alle gelieferten Materialien und Geräte bleiben bis zur vollständigen Bezahlung 
                unser Eigentum.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 9 Stornierung und Rücktritt</h2>
              <p className="text-muted-foreground mb-4">
                (1) Eine kostenlose Stornierung ist bis 48 Stunden vor dem vereinbarten Termin 
                möglich.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Bei kurzfristiger Stornierung (weniger als 48 Stunden) oder bei vergeblicher 
                Anfahrt wegen Nichterreichbarkeit des Auftraggebers berechnen wir eine Pauschale 
                von 49 €.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Bei Notdiensteinsätzen ist eine kostenlose Stornierung nur bis zum Eintreffen 
                unseres Technikers möglich.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 10 Datenschutz</h2>
              <p className="text-muted-foreground mb-4">
                Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer 
                Datenschutzerklärung und den Bestimmungen der DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 11 Schlussbestimmungen</h2>
              <p className="text-muted-foreground mb-4">
                (1) Es gilt das Recht der Bundesrepublik Deutschland.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Gerichtsstand für alle Streitigkeiten aus diesem Vertrag ist München, sofern 
                der Auftraggeber Kaufmann ist oder keinen allgemeinen Gerichtsstand in Deutschland hat.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Sollten einzelne Bestimmungen dieser AGB unwirksam sein oder werden, so wird 
                dadurch die Wirksamkeit der übrigen Bestimmungen nicht berührt.
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
