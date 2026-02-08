import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Badge } from "@/components/ui/badge";
import { FileText } from "lucide-react";
import heroImage from "@assets/hero_agb.png";

export default function AGBPage() {
  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="AGB Sanitär München – Festpreis & Garantie"
        description="AGB Sanitär München: Festpreis Garantie und transparente Geschäftsbedingungen. 2 Jahre Garantie, faire Regeln für alle Kunden."
        canonical="https://aquapro24.de/agb"
        keywords="AGB Sanitär Heizung München, Allgemeine Geschäftsbedingungen Handwerker, Festpreis Garantie Klempner, Gewährleistung Sanitärarbeiten München, Geschäftsbedingungen Notdienst, Vertragsbedingungen Installateur München, AGB Badsanierung Heizungsinstallation"
        ogImageAlt="AGB Allgemeine Geschäftsbedingungen AquaPro 24 Sanitär Heizung München - Festpreis Garantie transparente Konditionen"
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
              <Badge variant="secondary" className="mb-4 gap-1">
                <FileText className="w-3 h-3" />
                Rechtliches
              </Badge>
              <h1 className="text-3xl lg:text-4xl font-bold text-white">AquaPro 24 AGB München – Festpreis & Garantie</h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">AGB Sanitär</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Festpreisgarantie</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">2 Jahre Gewährleistung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">transparente Preise</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">faire Bedingungen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Zahlungsmodalitäten</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vertragsschluss</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Haftung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Widerrufsrecht</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rechtsgrundlage</span>
              </div>
            </div>
          </div>
        </section>

        <div className="py-8 lg:py-6">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="prose prose-gray dark:prose-invert max-w-none space-y-4">
            <section>
              <h2 className="text-xl font-semibold mb-4">§ 1 Geltungsbereich</h2>
              <p className="text-muted-foreground mb-4">
                (1) Diese Allgemeinen Geschäftsbedingungen (AGB) gelten für alle Verträge zwischen 
                AquaPro 24, Inhaber: Mustafa Sakar, Hardenbergstr. 4, 80992 München 
                (nachfolgend "Auftragnehmer") und dem Kunden (nachfolgend "Auftraggeber") über 
                Sanitär-, Heizungs- und Installationsarbeiten sowie damit verbundene Dienstleistungen. 
                Diese AGB gelten sowohl für Privatkunden (Verbraucher) als auch für Geschäftskunden (B2B).
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
                (3) Die Rechnung ist innerhalb von 5 Tagen nach Rechnungsdatum ohne Abzug zur Zahlung 
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
              <h2 className="text-xl font-semibold mb-4">§ 10 KI-Agent für die Kostenschätzung und OpenAI</h2>
              <p className="text-muted-foreground mb-4">
                (1) Auf unserer Website setzen wir einen KI-Agent für die Kostenschätzung ein, 
                der auf der Technologie von OpenAI basiert.<br /><br />
                Dieser Assistent dient der ersten Beratung zu Sanitär-, Heizungs- und Haustechnikfragen 
                sowie zur unverbindlichen Kostenschätzung.
              </p>
              <p className="text-muted-foreground mb-4">
                (2) Die vom KI-Assistenten genannten Preise sind unverbindliche Schätzungen 
                (Netto-Preise zzgl. 19% MwSt.) und stellen kein verbindliches Angebot dar. 
                Für ein verbindliches Angebot ist stets ein Vor-Ort-Termin erforderlich.
              </p>
              <p className="text-muted-foreground mb-4">
                (3) Die Nutzung des KI-Assistenten erfolgt auf eigenes Risiko. Wir übernehmen 
                keine Haftung für die Richtigkeit, Vollständigkeit oder Aktualität der vom 
                KI-Assistenten bereitgestellten Informationen.
              </p>
              <p className="text-muted-foreground mb-4">
                (4) Bei der Nutzung des KI-Assistenten werden Ihre Eingaben an OpenAI L.L.C. 
                (USA) übermittelt. Weitere Informationen finden Sie in unserer Datenschutzerklärung.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 11 Datenschutz</h2>
              <p className="text-muted-foreground mb-4">
                Die Erhebung und Verarbeitung personenbezogener Daten erfolgt gemäß unserer 
                Datenschutzerklärung und den Bestimmungen der DSGVO.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-semibold mb-4">§ 12 Schlussbestimmungen</h2>
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
                Stand: Dezember 2025
              </p>
            </section>
            </div>
          </div>
        </div>
      </main>
      <section className="max-w-4xl mx-auto px-4 py-6">
        <div className="border-t pt-4 space-y-1">
          <p className="text-[10px] text-muted-foreground/60 font-semibold">Hinweis zum Vertragsabschluss</p>
          <p className="text-[10px] text-muted-foreground/60">
            Die auf dieser Website dargestellten Inhalte, Leistungen und Informationen stellen kein verbindliches Angebot im rechtlichen Sinne dar. Ein Vertragsabschluss über diese Website findet nicht statt.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Anfragen über kontaktformulare, E-Mail oder Telefon dienen ausschließlich der unverbindlichen Kontaktaufnahme und der Vorbereitung einer individuellen Angebotserstellung. Ein Vertrag kommt erst nach persönlicher Abstimmung, Besichtigung vor Ort und ausdrücklicher Annahme eines schriftlichen Angebots zustande.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            Es erfolgt keine kostenpflichtige Bestellung, keine Buchung und keine Online-Zahlung über diese Website.
          </p>
          <p className="text-[10px] text-muted-foreground/60">
            <a href="/impressum" className="underline hover:text-primary">Impressum</a> · <a href="/agb" className="underline hover:text-primary">AGB</a>
          </p>
        </div>
      </section>
      <Footer />
    </div>
  );
}
