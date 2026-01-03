// Static SEO content for search engine crawlers
// This provides full HTML content when prerender.io fails

export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  content: string;
  keywords: string[];
}

const baseContent = `
  <header style="padding:20px;background:#f97316;color:white">
    <a href="/" style="font-size:24px;font-weight:bold;color:white;text-decoration:none">AquaPro24</a>
    <nav style="margin-top:10px">
      <a href="/sanitaer" style="color:white;margin-right:15px">Sanitär</a>
      <a href="/heizung" style="color:white;margin-right:15px">Heizung</a>
      <a href="/bad" style="color:white;margin-right:15px">Badsanierung</a>
      <a href="/waermepumpe" style="color:white;margin-right:15px">Wärmepumpe</a>
      <a href="/notdienst-muenchen" style="color:white;margin-right:15px">Notdienst 24/7</a>
      <a href="/termin" style="color:white">Termin buchen</a>
    </nav>
  </header>
`;

const footerContent = `
  <footer style="padding:40px 20px;background:#1a1a1a;color:white;margin-top:40px">
    <div style="max-width:1200px;margin:0 auto">
      <h3>AquaPro24 - Sanitär & Heizung München</h3>
      <p>Inhaber: Mustafa Sakar</p>
      <p>Hardenbergstr. 4, 80992 München</p>
      <p>Tel: <a href="tel:+4989444438872" style="color:#f97316">089 444438872</a> (24/7 Notdienst)</p>
      <p>Email: info@aquapro24.de</p>
      <nav style="margin-top:20px">
        <a href="/impressum" style="color:#ccc;margin-right:15px">Impressum</a>
        <a href="/datenschutz" style="color:#ccc;margin-right:15px">Datenschutz</a>
        <a href="/agb" style="color:#ccc;margin-right:15px">AGB</a>
        <a href="/barrierefreiheit" style="color:#ccc">Barrierefreiheit</a>
      </nav>
      <p style="margin-top:20px;color:#888">© 2025 AquaPro24. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
`;

export const seoPages: Record<string, PageSEO> = {
  '/': {
    title: 'Klempner München – Sanitär & Heizung Notdienst 24/7 | AquaPro24',
    description: 'AquaPro24 - Ihr Partner für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst. Festpreise. 2.847+ zufriedene Kunden. Jetzt anrufen: 089 444438872',
    h1: 'Klempner München – Sanitär & Heizung Notdienst 24/7',
    keywords: ['Klempner München', 'Sanitär Notdienst', 'Heizung München', 'Installateur', '24h Notdienst'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px;line-height:1.6">Willkommen bei AquaPro24 – Ihrem zuverlässigen Partnernetzwerk für <strong>Sanitär, Heizung und Badsanierung</strong> in München und Umgebung. Seit 2005 sind wir für über 2.847 zufriedene Kunden im Einsatz.</p>
        
        <h2>Unsere Leistungen in München</h2>
        <ul style="line-height:2">
          <li><a href="/sanitaer"><strong>Sanitär München</strong></a> – Rohrreinigung, Armaturen, Wasserschaden ab 81€</li>
          <li><a href="/heizung"><strong>Heizung München</strong></a> – Wartung, Reparatur, Austausch ab 154€</li>
          <li><a href="/bad"><strong>Badsanierung München</strong></a> – Komplettumbau aus einer Hand</li>
          <li><a href="/waermepumpe"><strong>Wärmepumpe München</strong></a> – bis 70% BAFA Förderung 2025</li>
          <li><a href="/notdienst-muenchen"><strong>24/7 Notdienst</strong></a> – Soforthilfe bei Rohrbruch & Heizungsausfall</li>
        </ul>
        
        <h2>Warum AquaPro24?</h2>
        <ul style="line-height:2">
          <li>✓ Über 2.847 zufriedene Kunden</li>
          <li>✓ 4.9/5 Sterne Bewertung</li>
          <li>✓ Partnernetzwerk seit 2005</li>
          <li>✓ Festpreisgarantie – keine versteckten Kosten</li>
          <li>✓ 2 Jahre Garantie auf alle Arbeiten</li>
          <li>✓ Anfahrt in 45-60 Minuten im Großraum München</li>
        </ul>
        
        <h2>Einsatzgebiet: Ganz München + 40km Umkreis</h2>
        <p>Wir sind in allen Münchner Stadtteilen für Sie da: <a href="/stadtteil/schwabing">Schwabing</a>, <a href="/stadtteil/bogenhausen">Bogenhausen</a>, <a href="/stadtteil/sendling">Sendling</a>, <a href="/stadtteil/pasing">Pasing</a>, <a href="/stadtteil/maxvorstadt">Maxvorstadt</a>, <a href="/stadtteil/haidhausen">Haidhausen</a>, <a href="/stadtteil/neuhausen">Neuhausen</a>, <a href="/stadtteil/trudering">Trudering</a>, <a href="/stadtteil/laim">Laim</a>, <a href="/stadtteil/giesing">Giesing</a>, <a href="/stadtteil/moosach">Moosach</a>, <a href="/stadtteil/milbertshofen">Milbertshofen</a> und weitere.</p>
        <p>Außerdem: Dachau, Freising, Starnberg, Fürstenfeldbruck, Erding, Garching, Unterschleißheim.</p>
        
        <h2>Jetzt Termin buchen</h2>
        <p>Buchen Sie Ihren <a href="/termin"><strong>Wunschtermin online</strong></a> oder rufen Sie uns an: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/sanitaer': {
    title: 'Sanitär München – Klempner & Installateur Notdienst 24/7 | AquaPro24',
    description: 'Sanitär-Service in München: Rohrreinigung ab 81€, Armaturen-Montage, Wasserschaden-Beseitigung. 24/7 Notdienst. Festpreise. Jetzt: 089 444438872',
    h1: 'Klempner München – Sanitär Notdienst 24/7',
    keywords: ['Sanitär München', 'Klempner', 'Rohrreinigung', 'Installateur', 'Wasserschaden'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Professionelle <strong>Sanitärinstallationen</strong> in München – von der Rohrreinigung bis zur kompletten Wasserinstallation. Schnelle Hilfe bei Notfällen, faire Festpreise.</p>
        
        <h2>Sanitär-Leistungen München: Komplett-Service</h2>
        
        <h3>Rohrreinigung München: Abfluss verstopft Soforthilfe ab 81€</h3>
        <p>Professionelle Rohrreinigung mit Spirale oder Hochdruck. Küche, Bad, WC – schnelle Hilfe bei verstopften Abflüssen.</p>
        
        <h3>Wasserhahn wechseln München: Armaturen Montage & Reparatur</h3>
        <p>Wasserhahn tropft? Mischbatterie defekt? Wir montieren alle Armaturen-Marken: Grohe, Hansgrohe, HANSA.</p>
        
        <h3>Rohrbruch München: Notdienst & Leckortung</h3>
        <p>Wasserschaden durch Rohrbruch? Leckortung ohne Aufbruch, schnelle Reparatur, Trocknungsservice.</p>
        
        <h3>WC Installation München: Toilette montieren & reparieren</h3>
        <p>Toilette läuft? Spülkasten defekt? Neue WC-Installation? Wir helfen schnell und zuverlässig.</p>
        
        <h2>Sanitär Preise München: Festpreisgarantie</h2>
        <ul>
          <li>Rohrreinigung: ab 81€ netto</li>
          <li>Sanitär-Reparaturen: ab 92€ netto</li>
          <li>Anfahrt München: 39€</li>
        </ul>
        
        <h3>Sanitär Garantie München: 2 Jahre auf alle Arbeiten</h3>
        <p>Wir geben 2 Jahre Garantie auf alle Sanitär-Arbeiten. Faire Festpreise ohne versteckte Kosten.</p>
        
        <h2>24/7 Sanitär Notdienst München: Soforthilfe</h2>
        <p>Rohrbruch? Wasserschaden? Wir sind rund um die Uhr für Sie da: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
        <p><a href="/termin">Online Termin buchen</a> | <a href="/notdienst-muenchen">Notdienst Info</a></p>
      </section>
    `
  },
  '/heizung': {
    title: 'Heizung München – Notdienst & Wartung 24/7 | AquaPro24',
    description: 'Heizungs-Service München: Reparatur ab 154€, Wartung, Heizungsaustausch mit BAFA-Förderung. 24/7 Notdienst. Jetzt: 089 444438872',
    h1: 'Heizung München – Notdienst & Wartung 24/7',
    keywords: ['Heizung München', 'Heizungsreparatur', 'Heizungswartung', 'Gasheizung', 'Notdienst'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Professioneller <strong>Heizungsservice</strong> in München – Wartung, Reparatur und Modernisierung vom Fachmann. Schnelle Hilfe bei Heizungsausfall.</p>
        
        <h2>Heizungs-Leistungen München: Komplett-Service</h2>
        
        <h3>Heizungsreparatur München: Alle Hersteller ab 154€</h3>
        <p>Schnelle Reparatur aller Heizungsmarken: Viessmann, Buderus, Vaillant, Wolf, Junkers. Festpreis ohne Überraschungen.</p>
        
        <h3>Heizungswartung München: Jahresservice vom Fachmann</h3>
        <p>Regelmäßige Wartung spart Energie und verlängert die Lebensdauer. Brennerwartung, Abgasmessung, Sicherheitscheck.</p>
        
        <h3>Gasheizung München: Installation, Wartung & Reparatur</h3>
        <p>Gasheizung-Service: Neuinstallation, Brennertausch, Therme-Reparatur. Gas-Notdienst 24/7.</p>
        
        <h3>Heizungsaustausch München: Mit bis zu 70% BAFA-Förderung</h3>
        <p>Alte Heizung austauschen? Wir beraten zu Wärmepumpe, Gasbrennwert und Förderung. <a href="/foerderung">Mehr zur Förderung</a></p>
        
        <h3>Fußbodenheizung München: Installation & Reparatur</h3>
        <p>Fußbodenheizung verlegen, spülen, entlüften, reparieren. <a href="/fussbodenheizung">Alle Infos</a></p>
        
        <h2>Heizung Preise München: Transparente Festpreise</h2>
        <ul>
          <li>Heizungsreparatur: ab 154€ netto</li>
          <li>Heizungswartung: ab 119€ netto</li>
          <li>Anfahrt München: 39€</li>
        </ul>
        
        <h2>24/7 Heizung Notdienst München: Soforthilfe</h2>
        <p>Heizung ausgefallen? Wir helfen sofort: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/bad': {
    title: 'Badsanierung München – Komplettumbau vom Profi | AquaPro24',
    description: 'Badsanierung in München: Komplettumbau, barrierefreies Bad mit KfW-Förderung, Badmodernisierung. Festpreis. Jetzt beraten: 089 444438872',
    h1: 'Badsanierung München – Komplettumbau vom Profi',
    keywords: ['Badsanierung München', 'Badumbau', 'barrierefreies Bad', 'Badmodernisierung', 'KfW Förderung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Komplette <strong>Badsanierung in München</strong> – von der Planung bis zur Fertigstellung aus einer Hand. Barrierefreie Bäder mit KfW-Förderung.</p>
        
        <h2>Badsanierung Leistungen München: Komplettumbau & Teilsanierung</h2>
        
        <h3>Walk-in Dusche München: Bodengleich & rahmenlos</h3>
        <p>Moderne Walk-in Duschen – bodengleich, rahmenlos und pflegeleicht. Ideal für barrierefreies Wohnen.</p>
        
        <h3>Luxusbad München: Freistehende Wannen & Design</h3>
        <p>Wellness-Bad mit freistehenden Wannen, Regenduschen und hochwertigen Materialien.</p>
        
        <h3>Barrierefreies Bad München: KfW-gefördert</h3>
        <p>Altersgerechter Umbau mit bodengleicher Dusche, Haltegriffen und rutschfesten Fliesen. Bis zu 6.250€ KfW-Zuschuss.</p>
        
        <h3>Bad Förderrechner München: Zuschuss berechnen</h3>
        <p>Berechnen Sie Ihre Fördermöglichkeiten: <a href="/foerderrechner">Zum Förderrechner</a></p>
        
        <h2>KfW-Förderung München: Bis zu 6.250€ Zuschuss</h2>
        <p>Nutzen Sie staatliche Zuschüsse für Ihren Badumbau. <a href="/foerderung">Mehr zur Förderung</a></p>
        
        <h2>Kostenlose Beratung</h2>
        <p>Vereinbaren Sie Ihren Beratungstermin: <a href="tel:+4989444438872"><strong>089 444438872</strong></a> oder <a href="/termin">online buchen</a></p>
      </section>
    `
  },
  '/waermepumpe': {
    title: 'Wärmepumpe München – bis 70% BAFA Förderung 2025 | AquaPro24',
    description: 'Wärmepumpen-Installation in München mit bis zu 70% BAFA-Förderung. Luft-Wasser, Erdwärme. Förderantrag inklusive. Jetzt beraten: 089 444438872',
    h1: 'Wärmepumpe München – bis 70% BAFA Förderung 2025',
    keywords: ['Wärmepumpe München', 'BAFA Förderung', 'Luft-Wasser-Wärmepumpe', 'Erdwärmepumpe', 'Heizungstausch'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Wärmepumpen-Installation</strong> in München – mit staatlicher Förderung bis zu 70%. Wir beraten Sie und helfen beim Förderantrag.</p>
        
        <h2>Wärmepumpen-Typen München: Welche passt zu Ihnen?</h2>
        
        <h3>Luft-Wasser-Wärmepumpe München: Einfache Installation</h3>
        <p>Die beliebteste Wahl: Nutzt Außenluft als Wärmequelle. Geringe Installationskosten, keine Bohrungen nötig. Ideal für Bestandsgebäude.</p>
        
        <h3>Erdwärmepumpe München: Höchste Effizienz</h3>
        <p>Erdsondenbohrung oder Flächenkollektor. Höchste Jahresarbeitszahl (JAZ), unabhängig von Außentemperatur. Premium-Lösung für Neubauten.</p>
        
        <h3>Hybrid-Wärmepumpe München: Wärmepumpe + Gas kombiniert</h3>
        <p>Beste Lösung für Altbauten: Wärmepumpe deckt Grundlast, Gas springt bei Spitzenlast ein. Schrittweise Dekarbonisierung.</p>
        
        <h2>BAFA Förderung 2025 München: Bis zu 70% Zuschuss</h2>
        
        <h3>Klimageschwindigkeitsbonus Heizung München: 20% Extra-Förderung</h3>
        <p>Bei Austausch einer funktionsfähigen fossilen Heizung vor 2028 erhalten Sie zusätzlich 20% Klimabonus.</p>
        
        <h3>Einkommensbonus Heizung München: 30% für Haushalte</h3>
        <p>Haushalte mit bis zu 40.000€ zu versteuerndem Einkommen erhalten 30% Einkommensbonus zusätzlich.</p>
        
        <h3>KfW Heizungskredit München: Zinsgünstig finanzieren</h3>
        <p>Ergänzend zur BAFA-Förderung: KfW-Kredit 358/359 mit günstigen Konditionen für Heizungstausch.</p>
        
        <p><a href="/foerderung">Alle Details zur Förderung</a> | <a href="/foerderantrag-heizung">Kostenloser Förderantrag-Service</a></p>
        
        <h2>Wärmepumpe München: Jetzt beraten lassen</h2>
        <p>Kostenlose Erstberatung: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/notdienst-muenchen': {
    title: 'Notdienst Sanitär & Heizung München – 24h Soforthilfe | AquaPro24',
    description: '24/7 Notdienst für Sanitär & Heizung in München. Rohrbruch, Wasserschaden, Heizungsausfall. Anfahrt in 45-60 Min. Jetzt: 089 444438872',
    h1: 'Notdienst Sanitär & Heizung München – 24h Soforthilfe',
    keywords: ['Notdienst München', 'Sanitär Notdienst', 'Heizung Notdienst', 'Rohrbruch', '24h'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:24px;color:#f97316"><strong>24/7 Notdienst: <a href="tel:+4989444438872">089 444438872</a></strong></p>
        
        <p style="font-size:20px">Schnelle Hilfe bei <strong>Sanitär- und Heizungs-Notfällen</strong> in München. Anfahrt in 45-60 Minuten.</p>
        
        <h2>Sanitär Notdienst München: Wann ist ein echter Notfall?</h2>
        
        <h3>Rohrbruch München: Wasser sofort absperren</h3>
        <p>Wasser tritt aus? Haupthahn zudrehen (meist im Keller), dann sofort anrufen.</p>
        
        <h3>Wasserschaden München: Erste Hilfe Maßnahmen</h3>
        <p>Strom abschalten, Möbel hochstellen, Fotos für Versicherung machen.</p>
        
        <h3>Heizungsausfall München: Keine Panik</h3>
        <p>Heizung prüfen: Thermostat, Sicherungen, Brenner-Reset. Wir helfen schnell.</p>
        
        <h3>Gasgeruch München: Sofort handeln</h3>
        <p>Fenster öffnen, keine Schalter betätigen, Haus verlassen, 112 rufen!</p>
        
        <h2>Notdienst Preise München: Transparent & fair</h2>
        <ul>
          <li>Anfahrt Notdienst: 69€</li>
          <li>Rohrreinigung Notfall: ab 109€</li>
          <li>Heizungsreparatur Notfall: ab 189€</li>
        </ul>
        
        <h3>Notdienst Garantie München: Keine versteckten Kosten</h3>
        <p>Festpreisgarantie auch im Notdienst. Keine Überraschungen auf der Rechnung.</p>
        
        <h2>Rohrbruch Soforthilfe München: 5 Schritte</h2>
        <ol>
          <li>Hauptwasserhahn zudrehen (meist im Keller)</li>
          <li>Strom abschalten bei Wasserschaden</li>
          <li>Fotos für Versicherung machen</li>
          <li>Wasser aufwischen, Möbel schützen</li>
          <li>Uns anrufen: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></li>
        </ol>
      </section>
    `
  },
  '/termin': {
    title: 'Termin online buchen München – Handwerker Wunschtermin | AquaPro24',
    description: 'Buchen Sie Ihren Handwerker-Termin online. Sanitär, Heizung, Badsanierung in München. Wunschtermin Mo-Fr 8-17 Uhr. Jetzt buchen!',
    h1: 'Termin online buchen München – Handwerker Wunschtermin',
    keywords: ['Termin buchen', 'Handwerker München', 'Online Terminbuchung', 'Klempner Termin'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Buchen Sie Ihren <strong>Wunschtermin</strong> für Sanitär, Heizung oder Badsanierung in München – einfach und bequem online.</p>
        
        <h2>Online Terminbuchung München: Schnell & einfach</h2>
        <p>Unsere Öffnungszeiten für Termine: <strong>Montag bis Freitag, 8:00 - 17:00 Uhr</strong></p>
        <p>Termine dauern 90 Minuten für eine gründliche Beratung vor Ort.</p>
        
        <h3>Sanitär Garantie München: 2 Jahre auf alle Arbeiten</h3>
        <p>Jeder Termin mit Festpreisgarantie. Keine versteckten Kosten.</p>
        
        <h3>Klempner Bewertungen München: 4.9/5 Sterne</h3>
        <p>Über 2.847 zufriedene Kunden vertrauen AquaPro24.</p>
        
        <h2>So funktioniert die Terminbuchung</h2>
        <ol style="line-height:2">
          <li>Wählen Sie Ihren Wunschtermin im Kalender</li>
          <li>Geben Sie Ihre Kontaktdaten ein</li>
          <li>Beschreiben Sie kurz Ihr Anliegen</li>
          <li>Fertig – Sie erhalten eine Bestätigung per E-Mail</li>
        </ol>
        
        <h3>Handwerker Termin München: Was Sie erwartet</h3>
        <p>Unser Techniker kommt pünktlich, analysiert das Problem und erstellt einen Festpreis-Kostenvoranschlag.</p>
        
        <h2>Telefonische Terminvereinbarung</h2>
        <p>Lieber telefonisch? Kein Problem: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/kontakt': {
    title: 'Kontakt AquaPro24 München – Kostenlose Beratung | AquaPro24',
    description: 'Kontaktieren Sie AquaPro24 in München. Tel: 089 444438872. Hardenbergstr. 4, 80992 München. Kostenlose Beratung für Sanitär & Heizung.',
    h1: 'Kontakt AquaPro24 München – Kostenlose Beratung',
    keywords: ['Kontakt', 'AquaPro24 München', 'Telefon', 'Adresse', 'Beratung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Kontaktdaten</h2>
        <p><strong>AquaPro24</strong><br>
        Inhaber: Mustafa Sakar<br>
        Hardenbergstr. 4<br>
        80992 München</p>
        
        <p><strong>Telefon:</strong> <a href="tel:+4989444438872">089 444438872</a> (24/7 Notdienst)</p>
        <p><strong>E-Mail:</strong> info@aquapro24.de</p>
        
        <h2>Öffnungszeiten</h2>
        <p>Terminvereinbarung: Mo-Fr 8:00 - 17:00 Uhr<br>
        Notdienst: 24/7 erreichbar</p>
        
        <h2>Online Termin buchen</h2>
        <p><a href="/termin">Jetzt Wunschtermin online buchen</a></p>
      </section>
    `
  },
  '/faq': {
    title: 'FAQ Sanitär & Heizung München – Preise & Tipps | AquaPro24',
    description: 'Häufige Fragen zu Sanitär & Heizung: Preise, Notdienst-Kosten, Förderung. Rohrreinigung ab 81€, Heizungsreparatur ab 154€.',
    h1: 'FAQ Sanitär & Heizung München – Preise & Tipps',
    keywords: ['FAQ', 'Preise Klempner', 'Kosten Sanitär', 'Heizung Kosten'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Häufige Fragen</h2>
        
        <h3>Was kostet ein Klempner in München?</h3>
        <p>Unsere Preise (netto): Rohrreinigung ab 81€, Sanitär-Reparaturen ab 92€, Heizungsreparatur ab 154€. Anfahrt München: 39€.</p>
        
        <h3>Wie schnell kommt der Notdienst?</h3>
        <p>Im Großraum München sind wir in der Regel innerhalb von 45-60 Minuten bei Ihnen.</p>
        
        <h3>Arbeiten Sie auch am Wochenende?</h3>
        <p>Unser Notdienst ist 24/7 erreichbar, auch an Wochenenden und Feiertagen. Reguläre Termine vergeben wir Mo-Fr 8-17 Uhr.</p>
        
        <h3>Welche Förderung gibt es für Heizungen?</h3>
        <p>Für den Heizungstausch gibt es bis zu 70% BAFA-Förderung (30% Basis + 20% Klimabonus + 30% Einkommensbonus). <a href="/foerderung">Mehr Infos</a></p>
        
        <h3>Bieten Sie Festpreise?</h3>
        <p>Ja, wir arbeiten mit transparenten Festpreisen. Vor Arbeitsbeginn erhalten Sie einen verbindlichen Kostenvoranschlag.</p>
      </section>
    `
  },
  '/ueber-uns': {
    title: 'AquaPro24 München – Ihr Partnernetzwerk seit 2005',
    description: 'AquaPro24 - Partnernetzwerk für Sanitär & Heizung in München seit 2005. Über 2.847 zufriedene Kunden. 4.9/5 Sterne.',
    h1: 'AquaPro24 München – Ihr Partnernetzwerk seit 2005',
    keywords: ['Über uns', 'AquaPro24', 'Partnernetzwerk', 'München', 'Geschichte'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">AquaPro24 ist ein <strong>Partnernetzwerk für Sanitär und Heizung</strong> in München. Seit 2005 koordinieren wir erfahrene Handwerksbetriebe für schnelle und zuverlässige Hilfe.</p>
        
        <h2>Unsere Geschichte</h2>
        <p>Gegründet von Mustafa Sakar, hat sich AquaPro24 zum vertrauenswürdigen Partner für Sanitär- und Heizungsarbeiten in München entwickelt.</p>
        
        <h2>Unsere Zahlen</h2>
        <ul>
          <li>Über 2.847 zufriedene Kunden</li>
          <li>4.9/5 Sterne Bewertung</li>
          <li>Partnernetzwerk seit 2005</li>
          <li>26 Münchner Stadtteile + 40km Umkreis</li>
        </ul>
        
        <h2>Unsere Werte</h2>
        <ul>
          <li>Zuverlässigkeit – pünktlich und verlässlich</li>
          <li>Transparenz – Festpreise ohne versteckte Kosten</li>
          <li>Qualität – 2 Jahre Garantie auf alle Arbeiten</li>
          <li>Schnelligkeit – Notdienst in 45-60 Minuten</li>
        </ul>
      </section>
    `
  },
  '/impressum': {
    title: 'Impressum AquaPro24 München – Mustafa Sakar',
    description: 'Impressum AquaPro24. Inhaber: Mustafa Sakar. Hardenbergstr. 4, 80992 München. Tel: 089 444438872.',
    h1: 'Impressum AquaPro24 München – Mustafa Sakar',
    keywords: ['Impressum', 'AquaPro24', 'Mustafa Sakar', 'München'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Angaben gemäß § 5 TMG</h2>
        <p><strong>AquaPro 24</strong><br>
        Mustafa Sakar<br>
        Hardenbergstr. 4<br>
        80992 München</p>
        
        <h2>Kontakt</h2>
        <p>Telefon: <a href="tel:+4989444438872">089 444438872</a><br>
        E-Mail: info@aquapro24.de</p>
        
        <h2>Umsatzsteuer-ID</h2>
        <p>Umsatzsteuer-Identifikationsnummer gemäß § 27 a Umsatzsteuergesetz: folgt</p>
        
        <h2>Verantwortlich für den Inhalt</h2>
        <p>Mustafa Sakar<br>
        Hardenbergstr. 4<br>
        80992 München</p>
      </section>
    `
  },
  '/datenschutz': {
    title: 'Datenschutz DSGVO München – Ihre Rechte | AquaPro24',
    description: 'Datenschutzerklärung von AquaPro24. DSGVO-konform. Ihre Rechte auf Auskunft, Löschung, Widerspruch.',
    h1: 'Datenschutz DSGVO München – Ihre Rechte',
    keywords: ['Datenschutz', 'DSGVO', 'Datenschutzerklärung', 'Ihre Rechte'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Datenschutzerklärung</h2>
        <p>Der Schutz Ihrer persönlichen Daten ist uns wichtig. Diese Datenschutzerklärung informiert Sie über die Verarbeitung Ihrer Daten.</p>
        
        <h2>Verantwortlicher</h2>
        <p>AquaPro 24 - Mustafa Sakar<br>
        Hardenbergstr. 4, 80992 München<br>
        Tel: 089 444438872<br>
        E-Mail: info@aquapro24.de</p>
        
        <h2>Ihre Rechte</h2>
        <ul>
          <li>Recht auf Auskunft (Art. 15 DSGVO)</li>
          <li>Recht auf Berichtigung (Art. 16 DSGVO)</li>
          <li>Recht auf Löschung (Art. 17 DSGVO)</li>
          <li>Recht auf Einschränkung der Verarbeitung (Art. 18 DSGVO)</li>
          <li>Recht auf Datenübertragbarkeit (Art. 20 DSGVO)</li>
          <li>Widerspruchsrecht (Art. 21 DSGVO)</li>
        </ul>
      </section>
    `
  },
  '/agb': {
    title: 'AGB Sanitär München – Festpreis & Garantie | AquaPro24',
    description: 'Allgemeine Geschäftsbedingungen von AquaPro24. Festpreisgarantie, 2 Jahre Gewährleistung, transparente Konditionen.',
    h1: 'AGB Sanitär München – Festpreis & Garantie',
    keywords: ['AGB', 'Geschäftsbedingungen', 'Festpreis', 'Garantie'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Allgemeine Geschäftsbedingungen</h2>
        
        <h3>§ 1 Geltungsbereich</h3>
        <p>Diese AGB gelten für alle Aufträge an AquaPro24, Mustafa Sakar, Hardenbergstr. 4, 80992 München.</p>
        
        <h3>§ 2 Festpreisgarantie</h3>
        <p>Nach Besichtigung erhalten Sie einen verbindlichen Festpreis. Dieser Preis gilt, es gibt keine versteckten Zusatzkosten.</p>
        
        <h3>§ 3 Gewährleistung</h3>
        <p>Wir gewähren 2 Jahre Garantie auf alle ausgeführten Arbeiten und eingebauten Materialien.</p>
        
        <h3>§ 4 Zahlungsbedingungen</h3>
        <p>Zahlung nach Rechnungsstellung. Akzeptiert: Überweisung, EC-Karte, Bar.</p>
      </section>
    `
  },
  '/foerderung': {
    title: 'Förderung Heizung München: BAFA, KfW & Steuerbonus 2025 | AquaPro24',
    description: 'Heizungsförderung 2025: Bis zu 70% BAFA-Zuschuss, KfW-Kredit, Steuerbonus. Wärmepumpe, Heizungstausch. Kostenlose Beratung: 089 444438872',
    h1: 'Förderung Heizung München: BAFA, KfW & Steuerbonus 2025',
    keywords: ['BAFA Förderung', 'KfW Kredit', 'Heizungsförderung', 'Wärmepumpe Zuschuss', 'Steuerbonus'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Nutzen Sie die <strong>staatliche Förderung</strong> für Ihren Heizungstausch – bis zu 70% Zuschuss möglich!</p>
        
        <h2>BAFA Förderung 2025</h2>
        <ul style="line-height:2">
          <li><strong>Grundförderung:</strong> 30% für alle förderfähigen Heizungen</li>
          <li><strong>Klimageschwindigkeitsbonus:</strong> +20% bei Austausch alter Öl-/Gasheizung</li>
          <li><strong>Einkommensbonus:</strong> +30% bei Haushaltseinkommen unter 40.000€</li>
          <li><strong>Maximal:</strong> Bis zu 70% Förderung kombinierbar</li>
        </ul>
        
        <h2>KfW-Ergänzungskredit</h2>
        <p>Zusätzlich zur BAFA-Förderung: Zinsgünstiger Kredit bis 120.000€ für die Restsumme.</p>
        
        <h2>Steuerbonus Alternative</h2>
        <p>Alternativ zur BAFA: 20% der Kosten über 3 Jahre von der Steuer absetzen.</p>
        
        <h2>Kostenloser Förderantrag-Service</h2>
        <p>Wir helfen Ihnen beim Antrag – <a href="/foerderantrag-heizung">komplett kostenlos</a>!</p>
        <p>Beratung: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/haustechnik': {
    title: 'Haustechnik München – Gas, Wasser, Lüftung komplett | AquaPro24',
    description: 'Haustechnik-Service in München: Gasinstallation, Wasserinstallation, Lüftungsanlagen, Smart Home. Komplettlösungen. Tel: 089 444438872',
    h1: 'Haustechnik München – Gas, Wasser, Lüftung komplett',
    keywords: ['Haustechnik München', 'Gasinstallation', 'Wasserinstallation', 'Lüftung', 'Smart Home'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Komplette <strong>Haustechnik-Lösungen</strong> für München – Gas, Wasser, Heizung, Lüftung und Smart Home aus einer Hand.</p>
        
        <h2>Haustechnik-Leistungen</h2>
        <ul style="line-height:2">
          <li><strong>Gasinstallation</strong> – Gasleitungen, Gasgeräte, Sicherheitsprüfung</li>
          <li><strong>Wasserinstallation</strong> – Trinkwasser, Abwasser, Regenwassernutzung</li>
          <li><strong>Lüftungsanlagen</strong> – Kontrollierte Wohnraumlüftung, Wärmerückgewinnung</li>
          <li><strong>Smart Home</strong> – Intelligente Heizungssteuerung, Leckage-Sensoren</li>
          <li><strong>Solarthermie</strong> – Warmwasser und Heizungsunterstützung</li>
        </ul>
        
        <h2>Komplettlösungen für Neubau und Sanierung</h2>
        <p>Wir koordinieren alle Gewerke für Ihre Haustechnik – von der Planung bis zur Abnahme.</p>
        
        <h2>Jetzt beraten lassen</h2>
        <p>Tel: <a href="tel:+4989444438872"><strong>089 444438872</strong></a> | <a href="/termin">Termin buchen</a></p>
      </section>
    `
  },
  // === ADDITIONAL SERVICE PAGES ===
  '/armaturen': {
    title: 'Wasserhahn wechseln München – Armaturen Montage & Reparatur | AquaPro24',
    description: 'Armaturen-Service München: Wasserhahn wechseln, Mischbatterie montieren, tropfende Armatur reparieren. Festpreise. Tel: 089 444438872',
    h1: 'Wasserhahn wechseln München – Armaturen Montage & Reparatur',
    keywords: ['Wasserhahn wechseln', 'Armaturen München', 'Mischbatterie', 'tropfender Wasserhahn'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Professionelle <strong>Armaturen-Montage</strong> in München – Wasserhahn wechseln, Mischbatterie einbauen, tropfende Armaturen reparieren.</p>
        <h2>Armaturen-Leistungen</h2>
        <ul style="line-height:2">
          <li><strong>Wasserhahn wechseln</strong> – Küche, Bad, alle Marken</li>
          <li><strong>Mischbatterie montieren</strong> – Thermostat, Einhebelmischer</li>
          <li><strong>Tropfende Armatur reparieren</strong> – Dichtung tauschen</li>
          <li><strong>Design-Armaturen</strong> – Grohe, Hansgrohe, HANSA</li>
        </ul>
        <p><a href="/termin">Termin buchen</a> | Tel: <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/rohrreinigung': {
    title: 'Rohrreinigung München – Abfluss verstopft Notdienst 24/7 | AquaPro24',
    description: 'Rohrreinigung München ab 81€: Abfluss verstopft, WC verstopft, Kanalreinigung. 24/7 Notdienst. Sofort-Termin: 089 444438872',
    h1: 'Rohrreinigung München – Abfluss verstopft Notdienst 24/7',
    keywords: ['Rohrreinigung München', 'Abfluss verstopft', 'WC verstopft', 'Kanalreinigung', 'Notdienst'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Rohrreinigung in München</strong> – Schnelle Hilfe bei verstopften Abflüssen, WCs und Kanälen. Ab 81€ netto.</p>
        <h2>Rohrreinigung Leistungen</h2>
        <ul style="line-height:2">
          <li><strong>Abfluss verstopft</strong> – Küche, Bad, Dusche ab 81€</li>
          <li><strong>WC verstopft</strong> – Toilette freimachen, Notdienst</li>
          <li><strong>Kanalreinigung</strong> – Hochdruckspülung, TV-Inspektion</li>
          <li><strong>Rohrbruch</strong> – Leckortung, Reparatur</li>
        </ul>
        <h2>24/7 Notdienst</h2>
        <p>Sofort-Hilfe: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/warmwasser': {
    title: 'Durchlauferhitzer München – Boiler Reparatur & Installation | AquaPro24',
    description: 'Warmwasser-Service München: Durchlauferhitzer, Boiler, Warmwasserspeicher. Installation & Reparatur. Tel: 089 444438872',
    h1: 'Durchlauferhitzer München – Boiler Reparatur & Installation',
    keywords: ['Durchlauferhitzer München', 'Boiler', 'Warmwasserspeicher', 'Warmwasser'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Warmwasser-Lösungen</strong> für München – Durchlauferhitzer, Boiler und Warmwasserspeicher. Installation und Reparatur.</p>
        <h2>Warmwasser-Leistungen</h2>
        <ul style="line-height:2">
          <li><strong>Durchlauferhitzer</strong> – elektrisch, Gas, Installation</li>
          <li><strong>Boiler</strong> – Montage, Austausch, Reparatur</li>
          <li><strong>Warmwasserspeicher</strong> – alle Größen</li>
          <li><strong>Wärmepumpen-Boiler</strong> – energiesparend</li>
        </ul>
        <p>Tel: <a href="tel:+4989444438872">089 444438872</a> | <a href="/termin">Termin buchen</a></p>
      </section>
    `
  },
  '/badsanierung': {
    title: 'Badsanierung München – Komplettumbau aus einer Hand | AquaPro24',
    description: 'Badsanierung in München: Komplettumbau, barrierefreies Bad mit KfW-Förderung. Beratung vor Ort. Tel: 089 444438872',
    h1: 'Badsanierung München – Komplettumbau aus einer Hand',
    keywords: ['Badsanierung', 'Badumbau München', 'barrierefreies Bad', 'KfW Förderung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Komplette <strong>Badsanierung in München</strong> – von der Planung bis zur Übergabe. Alles aus einer Hand.</p>
        <h2>Badsanierung Leistungen</h2>
        <ul style="line-height:2">
          <li><strong>Komplettumbau</strong> – Fliesen, Sanitär, Elektrik</li>
          <li><strong>Barrierefreies Bad</strong> – mit KfW-Förderung</li>
          <li><strong>Walk-in Dusche</strong> – bodengleich, rahmenlos</li>
          <li><strong>Teilsanierung</strong> – neue Armaturen, Waschtisch</li>
        </ul>
        <p><a href="/termin">Kostenlose Beratung</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  // === LANDING PAGES ===
  '/sanitaer-notdienst-24': {
    title: 'Sanitär Notdienst 24h München – Klempner Soforthilfe | AquaPro24',
    description: 'Sanitär Notdienst 24 Stunden München: Rohrbruch, Wasserschaden, verstopfter Abfluss. Anfahrt 45-60 Min. Tel: 089 444438872',
    h1: 'Sanitär Notdienst 24h München – Klempner Soforthilfe rund um die Uhr',
    keywords: ['Sanitär Notdienst 24h', 'Klempner Notdienst', 'Rohrbruch München', 'Wasserschaden'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:24px;color:#f97316"><strong>24/7 Notdienst: <a href="tel:+4989444438872">089 444438872</a></strong></p>
        <p style="font-size:20px"><strong>Sanitär-Notdienst</strong> rund um die Uhr in München. Schnelle Hilfe bei Rohrbruch, Wasserschaden und verstopftem Abfluss.</p>
        <h2>Notfall-Leistungen</h2>
        <ul><li>Rohrbruch Soforthilfe</li><li>Wasserschaden Beseitigung</li><li>Verstopfter Abfluss</li><li>WC Notfall</li></ul>
        <p><a href="/notdienst-muenchen">Alle Notdienst-Infos</a></p>
      </section>
    `
  },
  '/heizung-notdienst-24': {
    title: 'Heizung Notdienst 24h München – Heizungsreparatur Soforthilfe | AquaPro24',
    description: 'Heizung Notdienst 24 Stunden München: Heizung ausgefallen, kein Warmwasser. Anfahrt 45-60 Min. Tel: 089 444438872',
    h1: 'Heizung Notdienst 24h München – Heizungsreparatur Soforthilfe rund um die Uhr',
    keywords: ['Heizung Notdienst 24h', 'Heizung ausgefallen', 'Heizungsreparatur Notdienst'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:24px;color:#f97316"><strong>24/7 Heizung Notdienst: <a href="tel:+4989444438872">089 444438872</a></strong></p>
        <p style="font-size:20px"><strong>Heizungs-Notdienst</strong> rund um die Uhr in München. Schnelle Hilfe wenn die Heizung ausgefallen ist.</p>
        <h2>Notfall-Leistungen Heizung</h2>
        <ul><li>Heizung ausgefallen</li><li>Kein Warmwasser</li><li>Therme defekt</li><li>Brenner Störung</li></ul>
      </section>
    `
  },
  '/sanitaer-muenchen': {
    title: 'Sanitär München – Klempner & Installateur Notdienst | AquaPro24',
    description: 'Sanitär-Service München: Rohrreinigung, Armaturen, Wasserschaden. 24/7 Notdienst. Festpreise. Tel: 089 444438872',
    h1: 'Sanitär München – Klempner & Installateur Notdienst',
    keywords: ['Sanitär München', 'Klempner München', 'Installateur', 'Sanitärinstallation'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Sanitär-Service</strong> in München – Ihr zuverlässiger Partner für alle Sanitärarbeiten.</p>
        <h2>Unsere Sanitär-Leistungen</h2>
        <ul><li><a href="/rohrreinigung">Rohrreinigung ab 81€</a></li><li><a href="/armaturen">Armaturen Montage</a></li><li><a href="/warmwasser">Warmwasser</a></li><li><a href="/bad">Badsanierung</a></li></ul>
        <p><a href="/termin">Termin buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/heizung-muenchen': {
    title: 'Heizung München – Reparatur, Wartung & Modernisierung | AquaPro24',
    description: 'Heizungs-Service München: Reparatur ab 154€, Wartung, Heizungsaustausch mit Förderung. Tel: 089 444438872',
    h1: 'Heizung München – Reparatur, Wartung & Modernisierung Profi',
    keywords: ['Heizung München', 'Heizungsreparatur', 'Heizungswartung', 'Heizungsmodernisierung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Heizungs-Service</strong> in München – Reparatur, Wartung und Modernisierung vom Fachmann.</p>
        <h2>Heizungs-Leistungen</h2>
        <ul><li>Heizungsreparatur ab 154€</li><li>Jahreswartung</li><li><a href="/waermepumpe">Wärmepumpen</a></li><li><a href="/foerderung">Förderung bis 70%</a></li></ul>
      </section>
    `
  },
  '/badsanierung-muenchen': {
    title: 'Badsanierung München – Komplettumbau aus einer Hand | AquaPro24',
    description: 'Badsanierung München: Komplettumbau, barrierefreies Bad, Walk-in Dusche. Festpreis. Tel: 089 444438872',
    h1: 'Badsanierung München – Komplettumbau aus einer Hand',
    keywords: ['Badsanierung München', 'Badumbau', 'barrierefreies Bad München'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Badsanierung in München</strong> – Komplettumbau, barrierefreie Bäder mit KfW-Förderung.</p>
        <p><a href="/bad">Alle Badsanierung Infos</a> | <a href="/termin">Beratung buchen</a></p>
      </section>
    `
  },
  '/waermepumpe-muenchen': {
    title: 'Wärmepumpe München – bis 70% Förderung sichern | AquaPro24',
    description: 'Wärmepumpen-Installation München mit bis zu 70% BAFA-Förderung. Beratung + Antrag inklusive. Tel: 089 444438872',
    h1: 'Wärmepumpe München – bis 70% Förderung sichern',
    keywords: ['Wärmepumpe München', 'BAFA Förderung', 'Heizungstausch München'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Wärmepumpen</strong> in München – Installation mit bis zu 70% Förderung.</p>
        <p><a href="/waermepumpe">Alle Infos</a> | <a href="/foerderung">Förderung</a> | <a href="/termin">Beratung</a></p>
      </section>
    `
  },
  '/fussbodenheizung-muenchen': {
    title: 'Fußbodenheizung München – Installation & Reparatur Profi | AquaPro24',
    description: 'Fußbodenheizung München: Installation, Reparatur, Spülung, Entlüftung. Festpreise. Tel: 089 444438872',
    h1: 'Fußbodenheizung München – Installation & Reparatur Profi',
    keywords: ['Fußbodenheizung München', 'Fußbodenheizung Installation', 'Fußbodenheizung Reparatur'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Fußbodenheizung</strong> in München – Installation, Reparatur und Wartung vom Profi.</p>
        <ul><li>Fußbodenheizung verlegen</li><li>Spülung und Entlüftung</li><li>Reparatur und Leckortung</li><li>Nachrüstung im Altbau</li></ul>
        <p><a href="/termin">Termin buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/fussbodenheizung': {
    title: 'Fußbodenheizung München – Installation & Reparatur | AquaPro24',
    description: 'Fußbodenheizung München: Installation, Reparatur, Spülung, Entlüftung. Festpreise ab 154€. Tel: 089 444438872',
    h1: 'Fußbodenheizung München – Installation & Reparatur',
    keywords: ['Fußbodenheizung', 'Fußbodenheizung München', 'Installation', 'Reparatur'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Fußbodenheizung</strong> – Installation, Reparatur und Wartung vom Profi.</p>
        <h2>Fußbodenheizung Leistungen</h2>
        <ul style="line-height:2">
          <li><strong>Neuinstallation</strong> – Fußbodenheizung verlegen, Neubau & Sanierung</li>
          <li><strong>Reparatur</strong> – Leckortung, Rohrbruch, Thermostat</li>
          <li><strong>Wartung</strong> – Spülung, Entlüftung, Hydraulischer Abgleich</li>
          <li><strong>Nachrüstung</strong> – Altbau, Dünnschichtsysteme</li>
        </ul>
        <p><a href="/termin">Termin buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  // === FÖRDERUNG PAGES ===
  '/foerderantrag': {
    title: 'Förderantrag Heizung München – Kostenloser Service | AquaPro24',
    description: 'Kostenloser Förderantrag-Service für BAFA & KfW. Wir helfen beim Antrag für Wärmepumpe & Heizungstausch. Tel: 089 444438872',
    h1: 'Förderantrag Service München – Komplett kostenlos',
    keywords: ['Förderantrag', 'BAFA Antrag', 'KfW Antrag', 'Heizung Förderung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Förderantrag-Service</strong> – Wir helfen Ihnen beim BAFA- und KfW-Antrag, komplett kostenlos!</p>
        <p><a href="/foerderung">Alle Förderungen</a> | <a href="/termin">Beratung buchen</a></p>
      </section>
    `
  },
  '/foerderantrag-heizung': {
    title: 'Förderantrag Heizung München – Kostenloser BAFA Service | AquaPro24',
    description: 'Kostenloser BAFA-Förderantrag für Heizungstausch. Wärmepumpe bis 70% gefördert. Tel: 089 444438872',
    h1: 'Förderantrag Heizung München – Kostenloser BAFA Service',
    keywords: ['Förderantrag Heizung', 'BAFA Antrag Heizung', 'Wärmepumpe Förderung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Förderantrag-Service</strong> für Ihren Heizungstausch – wir übernehmen den BAFA-Antrag kostenlos!</p>
        <p><a href="/foerderung">Förderung Details</a> | <a href="/waermepumpe">Wärmepumpen</a></p>
      </section>
    `
  },
  '/foerderrechner': {
    title: 'Förderrechner Heizung München – Zuschuss berechnen | AquaPro24',
    description: 'Berechnen Sie Ihre BAFA-Förderung für Heizungstausch. Bis zu 70% Zuschuss möglich. Tel: 089 444438872',
    h1: 'Förderrechner Heizung München – Zuschuss berechnen',
    keywords: ['Förderrechner', 'BAFA Rechner', 'Heizung Förderung berechnen'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Förderrechner</strong> – Berechnen Sie Ihren BAFA-Zuschuss für den Heizungstausch.</p>
        <p><a href="/foerderung">Alle Förderungen</a> | <a href="/termin">Beratung</a></p>
      </section>
    `
  },
  // === LEGAL/UTILITY PAGES ===
  '/barrierefreiheit': {
    title: 'Barrierefreiheit – WCAG 2.1 AA | AquaPro24',
    description: 'Barrierefreiheitserklärung von AquaPro24. WCAG 2.1 AA und BITV 2.0 konform. Kontakt für Feedback: 089 444438872',
    h1: 'Barrierefreiheitserklärung – AquaPro24',
    keywords: ['Barrierefreiheit', 'WCAG', 'BITV', 'Accessibility'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p>AquaPro24 ist bestrebt, seine Website barrierefrei zu gestalten gemäß WCAG 2.1 AA und BITV 2.0.</p>
        <p>Feedback: <a href="tel:+4989444438872">089 444438872</a> | info@aquapro24.de</p>
      </section>
    `
  },
  '/cookie-richtlinie': {
    title: 'Cookie Richtlinie DSGVO – transparent & sicher | AquaPro24',
    description: 'Cookie-Richtlinie von AquaPro24. DSGVO-konform. Informationen zu verwendeten Cookies.',
    h1: 'Cookie Richtlinie DSGVO – transparent & sicher',
    keywords: ['Cookie Richtlinie', 'DSGVO', 'Cookies', 'Datenschutz'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p>Informationen zu den auf dieser Website verwendeten Cookies.</p>
        <p><a href="/datenschutz">Datenschutzerklärung</a></p>
      </section>
    `
  },
  '/ratgeber': {
    title: 'Ratgeber München – Expertentipps Sanitär & Heizung | AquaPro24',
    description: 'Ratgeber für Sanitär & Heizung: Tipps zu Wasserschaden, Badsanierung, Heizungswartung, Wärmepumpe. Expertenwissen von AquaPro24.',
    h1: 'Ratgeber München – Expertentipps Sanitär & Heizung',
    keywords: ['Ratgeber', 'Sanitär Tipps', 'Heizung Tipps', 'Wasserschaden', 'Badsanierung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Unser <strong>Ratgeber</strong> mit Expertentipps zu Sanitär und Heizung.</p>
        <h2>Beliebte Themen</h2>
        <ul style="line-height:2">
          <li><strong>Wasserschaden</strong> – Was tun bei Rohrbruch? Soforthilfe-Tipps</li>
          <li><strong>Badsanierung</strong> – Planung, Kosten, Förderung</li>
          <li><strong>Heizungswartung</strong> – Wann und warum?</li>
          <li><strong>Wärmepumpe</strong> – Lohnt sich der Umstieg?</li>
        </ul>
        <h2>Fragen?</h2>
        <p>Rufen Sie uns an: <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  }
};

// === STADTTEIL SEITEN (synchronisiert mit sitemap.xml) ===
const stadtteile = [
  // Premium Stadtteile
  { slug: 'schwabing', name: 'Schwabing', plz: '80796' },
  { slug: 'bogenhausen', name: 'Bogenhausen', plz: '81675' },
  { slug: 'maxvorstadt', name: 'Maxvorstadt', plz: '80333' },
  { slug: 'haidhausen', name: 'Haidhausen', plz: '81667' },
  { slug: 'nymphenburg', name: 'Nymphenburg', plz: '80638' },
  { slug: 'lehel', name: 'Lehel', plz: '80538' },
  { slug: 'solln', name: 'Solln', plz: '81479' },
  // Standard Stadtteile
  { slug: 'sendling', name: 'Sendling', plz: '81371' },
  { slug: 'pasing', name: 'Pasing', plz: '81241' },
  { slug: 'neuhausen', name: 'Neuhausen', plz: '80636' },
  { slug: 'trudering', name: 'Trudering', plz: '81825' },
  { slug: 'laim', name: 'Laim', plz: '80686' },
  { slug: 'giesing', name: 'Giesing', plz: '81539' },
  { slug: 'moosach', name: 'Moosach', plz: '80993' },
  { slug: 'milbertshofen', name: 'Milbertshofen', plz: '80807' },
  { slug: 'perlach', name: 'Perlach', plz: '81737' },
  { slug: 'hadern', name: 'Hadern', plz: '81375' },
  { slug: 'allach', name: 'Allach', plz: '80999' },
  { slug: 'aubing', name: 'Aubing', plz: '81245' },
  { slug: 'feldmoching', name: 'Feldmoching', plz: '80995' },
  { slug: 'thalkirchen', name: 'Thalkirchen', plz: '81371' },
  { slug: 'ramersdorf', name: 'Ramersdorf', plz: '81737' },
  { slug: 'berg-am-laim', name: 'Berg am Laim', plz: '81671' },
  { slug: 'schwanthalerhoehe', name: 'Schwanthalerhöhe', plz: '80339' },
  { slug: 'au', name: 'Au', plz: '81541' },
  { slug: 'freimann', name: 'Freimann', plz: '80939' },
  // Regionen
  { slug: 'muenchen-nord', name: 'München-Nord', plz: '80807' },
  { slug: 'muenchen-ost', name: 'München-Ost', plz: '81671' },
  { slug: 'muenchen-sued', name: 'München-Süd', plz: '81371' },
  { slug: 'muenchen-west', name: 'München-West', plz: '81241' }
];

// Add all Stadtteil pages to seoPages
stadtteile.forEach(st => {
  seoPages[`/${st.slug}`] = {
    title: `Klempner ${st.name} München – Sanitär, Heizung & Notdienst 24/7 | AquaPro24`,
    description: `Klempner in ${st.name} (${st.plz}): Sanitär, Heizung, Notdienst 24/7. Anfahrt 30-45 Min. Festpreise. Tel: 089 444438872`,
    h1: `Klempner ${st.name} München – Sanitär, Heizung & Notdienst 24/7`,
    keywords: [`Klempner ${st.name}`, `Sanitär ${st.name}`, `Heizung ${st.name}`, `Notdienst ${st.name}`],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Klempner in ${st.name}</strong> – Schneller Sanitär- und Heizungsservice für ${st.plz} München.</p>
        
        <h2>Sanitär & Heizung ${st.name}: Unsere Leistungen</h2>
        
        <h3>Rohrreinigung ${st.name} München: Abfluss verstopft Soforthilfe</h3>
        <p>Professionelle Rohrreinigung in ${st.name}. Küche, Bad, WC – schnelle Hilfe ab 81€.</p>
        
        <h3>Heizungsreparatur ${st.name} München: Alle Marken</h3>
        <p>Heizungsservice in ${st.name}: Viessmann, Buderus, Vaillant, Wolf. Reparatur ab 154€.</p>
        
        <h3>Notdienst ${st.name} München: 24/7 Soforthilfe</h3>
        <p>Rohrbruch oder Heizungsausfall in ${st.name}? Wir sind in 30-45 Minuten bei Ihnen.</p>
        
        <h2>Klempner ${st.name}: Unsere Garantie</h2>
        
        <h3>Handwerker Garantie ${st.name} München: Ihr Sicherheitsversprechen</h3>
        <p>2 Jahre Garantie auf alle Arbeiten. Festpreise ohne versteckte Kosten. 4.9/5 Sterne Bewertung.</p>
        
        <h2>Anfahrtszeit ${st.name}: 30-45 Minuten</h2>
        <p>Wir sind in ${st.name} (${st.plz}) schnell für Sie da.</p>
        <p>Jetzt anrufen: <a href="tel:+4989444438872"><strong>089 444438872</strong></a> | <a href="/termin">Termin buchen</a></p>
      </section>
    `
  };
  // Also add /stadtteil/slug path
  seoPages[`/stadtteil/${st.slug}`] = seoPages[`/${st.slug}`];
});

// Base URL for canonical tags
const BASE_URL = 'https://aquapro24.de';

// Default fallback SEO content for pages not explicitly defined
const defaultPage: PageSEO = {
  title: 'AquaPro24 – Sanitär & Heizung München | 24/7 Notdienst',
  description: 'AquaPro24 - Ihr Partner für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst. Festpreise. Tel: 089 444438872',
  h1: 'AquaPro24 – Sanitär & Heizung München',
  keywords: ['Sanitär München', 'Heizung München', 'Notdienst', 'Klempner'],
  content: `
    <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
      <p style="font-size:20px">Willkommen bei <strong>AquaPro24</strong> – Ihrem zuverlässigen Partner für Sanitär und Heizung in München.</p>
      <h2>Unsere Leistungen</h2>
      <ul style="line-height:2">
        <li><a href="/sanitaer">Sanitär</a> – Rohrreinigung, Armaturen, Wasserschaden</li>
        <li><a href="/heizung">Heizung</a> – Reparatur, Wartung, Modernisierung</li>
        <li><a href="/bad">Badsanierung</a> – Komplettumbau</li>
        <li><a href="/waermepumpe">Wärmepumpe</a> – bis 70% Förderung</li>
        <li><a href="/notdienst-muenchen">24/7 Notdienst</a></li>
      </ul>
      <p>Jetzt anrufen: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
    </section>
  `
};

// Generate static HTML for a given path
export function generateStaticHTML(pagePath: string, indexHtml: string): string {
  // Use page-specific SEO content or fallback to default
  const page = seoPages[pagePath] || defaultPage;
  
  // Log missing SEO definitions for future improvement
  if (!seoPages[pagePath]) {
    console.log(`[SEO] Warnung: Keine SEO-Definition für ${pagePath}, verwende Fallback`);
  }

  // Determine canonical URL (normalize /stadtteil/X to /X)
  let canonicalPath = pagePath;
  if (pagePath.startsWith('/stadtteil/')) {
    canonicalPath = '/' + pagePath.slice('/stadtteil/'.length);
  }
  const canonicalUrl = `${BASE_URL}${canonicalPath}`;

  // Replace title
  let html = indexHtml.replace(
    /<title>[^<]*<\/title>/,
    `<title>${page.title}</title>`
  );

  // Replace meta description
  html = html.replace(
    /<meta name="description" content="[^"]*"/,
    `<meta name="description" content="${page.description}"`
  );

  // Add/update canonical tag
  if (html.includes('<link rel="canonical"')) {
    html = html.replace(
      /<link rel="canonical" href="[^"]*"/,
      `<link rel="canonical" href="${canonicalUrl}"`
    );
  } else {
    // Insert canonical before </head>
    html = html.replace(
      '</head>',
      `  <link rel="canonical" href="${canonicalUrl}" />\n  </head>`
    );
  }

  // Add Open Graph tags for social sharing
  const ogTags = `
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:type" content="website" />
    <meta property="og:site_name" content="AquaPro24" />
    <meta property="og:locale" content="de_DE" />
  `;
  html = html.replace('</head>', `${ogTags}</head>`);

  // Inject content into root div
  const fullContent = `
    ${baseContent}
    <main style="font-family:system-ui,-apple-system,sans-serif;color:#333">
      <h1 style="font-size:32px;padding:40px 20px 0;max-width:1200px;margin:0 auto">${page.h1}</h1>
      ${page.content}
    </main>
    ${footerContent}
  `;

  // Replace empty root div with content
  html = html.replace(
    '<div id="root"></div>',
    `<div id="root">${fullContent}</div>`
  );

  return html;
}

// Check if request is from a bot
export function isBot(userAgent: string): boolean {
  const botPatterns = [
    'googlebot',
    'bingbot',
    'yandexbot',
    'duckduckbot',
    'slurp',
    'baiduspider',
    'facebookexternalhit',
    'twitterbot',
    'linkedinbot',
    'whatsapp',
    'telegrambot',
    'applebot',
    'gptbot',
    'chatgpt-user',
    'claude',
    'perplexitybot',
    'semrushbot',
    'ahrefsbot',
    'mj12bot',
    'dotbot',
    'petalbot',
    'bytespider',
    'rogerbot',
    'screaming frog'
  ];
  
  const ua = userAgent.toLowerCase();
  return botPatterns.some(pattern => ua.includes(pattern));
}
