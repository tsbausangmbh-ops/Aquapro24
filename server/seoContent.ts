// Static SEO content for search engine crawlers
// This provides full HTML content when prerender.io fails

export interface PageFAQ {
  question: string;
  answer: string;
}

export interface PageServiceSchema {
  name: string;
  description: string;
  serviceType: string;
  priceRange?: string;
  areaServed?: string;
}

export interface PageSEO {
  title: string;
  description: string;
  h1: string;
  content: string;
  keywords: string[];
  serviceSchema?: PageServiceSchema;
  faqs?: PageFAQ[];
}

const baseContent = `
  <header style="padding:20px;background:#f97316;color:white">
    <a href="/" style="font-size:24px;font-weight:bold;color:white;text-decoration:none">AquaPro 24</a>
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
      <h3>AquaPro 24 - Sanitär & Heizung München</h3>
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
      <p style="margin-top:20px;color:#888">© 2025 AquaPro 24. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
`;

export const seoPages: Record<string, PageSEO> = {
  '/': {
    title: 'Klempner München – Sanitär & Heizung Notdienst 24/7 | AquaPro 24',
    description: 'AquaPro 24 - Ihr Partner für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst. Festpreise. 2.847+ zufriedene Kunden. Jetzt anrufen: 089 444438872',
    h1: 'Klempner München – Sanitär & Heizung Notdienst 24/7',
    keywords: ['Klempner München', 'Sanitär Notdienst', 'Heizung München', 'Installateur', '24h Notdienst'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px;line-height:1.6">Willkommen bei AquaPro 24 – Ihrem zuverlässigen Partnernetzwerk für <strong>Sanitär, Heizung und Badsanierung</strong> in München und Umgebung. Seit 2005 sind wir für über 2.847 zufriedene Kunden im Einsatz.</p>
        
        <h2>Unsere Leistungen in München</h2>
        <ul style="line-height:2">
          <li><a href="/sanitaer"><strong>Sanitär München</strong></a> – Rohrreinigung, Armaturen, Wasserschaden ab 81€</li>
          <li><a href="/heizung"><strong>Heizung München</strong></a> – Wartung, Reparatur, Austausch ab 154€</li>
          <li><a href="/bad"><strong>Badsanierung München</strong></a> – Komplettumbau aus einer Hand</li>
          <li><a href="/waermepumpe"><strong>Wärmepumpe München</strong></a> – bis 70% BAFA Förderung 2025</li>
          <li><a href="/notdienst-muenchen"><strong>24/7 Notdienst</strong></a> – Soforthilfe bei Rohrbruch & Heizungsausfall</li>
        </ul>
        
        <h2>Warum AquaPro 24?</h2>
        <ul style="line-height:2">
          <li>✓ Über 2.847 zufriedene Kunden</li>
          <li>✓ 4.9/5 Sterne Bewertung</li>
          <li>✓ Partnernetzwerk seit 2005</li>
          <li>✓ Festpreisgarantie – keine versteckten Kosten</li>
          <li>✓ 2 Jahre Garantie auf alle Arbeiten</li>
          <li>✓ Anfahrt in 45-60 Minuten im Großraum München</li>
        </ul>
        
        <h2>Einsatzgebiet: Ganz München + 40km Umkreis</h2>
        <p>Wir sind in allen Münchner Stadtteilen für Sie da: <a href="/schwabing">Schwabing</a>, <a href="/bogenhausen">Bogenhausen</a>, <a href="/sendling">Sendling</a>, <a href="/pasing">Pasing</a>, <a href="/maxvorstadt">Maxvorstadt</a>, <a href="/haidhausen">Haidhausen</a>, <a href="/neuhausen">Neuhausen</a>, <a href="/trudering">Trudering</a>, <a href="/laim">Laim</a>, <a href="/giesing">Giesing</a>, <a href="/moosach">Moosach</a>, <a href="/milbertshofen">Milbertshofen</a> und weitere.</p>
        <p>Außerdem: Dachau, Freising, Starnberg, Fürstenfeldbruck, Erding, Garching, Unterschleißheim.</p>
        
        <h2>Jetzt Termin buchen</h2>
        <p>Buchen Sie Ihren <a href="/termin"><strong>Wunschtermin online</strong></a> oder rufen Sie uns an: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/sanitaer': {
    title: 'Sanitär München | Rohrbruch, Armaturen, Wasserschaden | AquaPro 24',
    description: 'Sanitärservice in München: Rohrbruch, verstopfter Abfluss, Armaturen, Wasserschaden. Festpreis, schnelle Hilfe, Termin in 24h. Jetzt anfragen.',
    h1: 'Sanitär München – Klempner für Rohrbruch, Armaturen & WC',
    keywords: ['Sanitär München', 'Klempner', 'Rohrreinigung', 'Armaturen', 'WC Reparatur', 'Rohrbruch'],
    serviceSchema: {
      name: 'Sanitär-Service München',
      description: 'Professionelle Sanitärinstallationen in München – Rohrreinigung, Armaturen, Rohrbruch-Reparatur, WC-Installation. Festpreise ab 81€ netto.',
      serviceType: 'PlumbingService',
      priceRange: '€€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was kostet eine Rohrreinigung in München?', answer: 'Eine professionelle Rohrreinigung kostet bei AquaPro 24 ab 81€ netto. Anfahrt München: 39€. Festpreisgarantie ohne versteckte Kosten.' },
      { question: 'Wie schnell kommt ein Klempner bei Rohrbruch?', answer: 'Bei einem Rohrbruch-Notfall in München sind wir innerhalb von 45-60 Minuten bei Ihnen. Unser 24/7 Notdienst ist rund um die Uhr erreichbar.' },
      { question: 'Welche Sanitärleistungen bietet AquaPro 24?', answer: 'Wir bieten Rohrreinigung, Armaturen-Montage, Rohrbruch-Reparatur, WC-Installation, Leckortung und Wasserschaden-Beseitigung in München.' },
      { question: 'Gibt es eine Garantie auf Sanitärarbeiten?', answer: 'Ja, wir geben 2 Jahre Garantie auf alle Sanitärarbeiten und eingebauten Materialien. Festpreisgarantie ohne Überraschungen.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Professionelle <strong>Sanitärinstallationen</strong> in München – von der Rohrreinigung bis zur kompletten Wasserinstallation. Schnelle Hilfe bei Notfällen, faire Festpreise.</p>
        
        <h2>Sanitär-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrreinigung München</strong></span>: Abfluss verstopft Soforthilfe ab 81€</h3>
        <p>Professionelle Rohrreinigung mit Spirale oder Hochdruck. Küche, Bad, WC – schnelle Hilfe bei verstopften Abflüssen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Wasserhahn wechseln München</strong></span>: Armaturen Montage & Reparatur</h3>
        <p>Wasserhahn tropft? Mischbatterie defekt? Wir montieren alle Armaturen-Marken: Grohe, Hansgrohe, HANSA.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrbruch München</strong></span>: Notdienst & Leckortung</h3>
        <p>Wasserschaden durch Rohrbruch? Leckortung ohne Aufbruch, schnelle Reparatur, Trocknungsservice.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>WC Installation München</strong></span>: Toilette montieren & reparieren</h3>
        <p>Toilette läuft? Spülkasten defekt? Neue WC-Installation? Wir helfen schnell und zuverlässig.</p>
        
        <h2>Sanitär Preise München: Festpreisgarantie</h2>
        <ul>
          <li>Rohrreinigung: ab 81€ netto</li>
          <li>Sanitär-Reparaturen: ab 92€ netto</li>
          <li>Anfahrt München: 39€</li>
        </ul>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Sanitär Garantie München</strong></span>: 2 Jahre auf alle Arbeiten</h3>
        <p>Wir geben 2 Jahre Garantie auf alle Sanitär-Arbeiten. Faire Festpreise ohne versteckte Kosten.</p>
        
        <h2>24/7 Sanitär Notdienst München: Soforthilfe</h2>
        <p>Rohrbruch? Wasserschaden? Wir sind rund um die Uhr für Sie da: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
        <p><a href="/termin">Online Termin buchen</a> | <a href="/notdienst-muenchen">Notdienst Info</a></p>
      </section>
    `
  },
  '/heizung': {
    title: 'Heizung München | Wartung, Reparatur, Austausch | AquaPro 24',
    description: 'Heizung defekt? AquaPro 24 München: Wartung, Reparatur & Austausch – schnell, transparent, mit Festpreis. Notdienst möglich.',
    h1: 'Heizung München – Wartung, Reparatur & Modernisierung',
    keywords: ['Heizung München', 'Heizungsreparatur', 'Heizungswartung', 'Gasheizung', 'Heizungsaustausch'],
    serviceSchema: {
      name: 'Heizungs-Service München',
      description: 'Professioneller Heizungsservice in München – Wartung, Reparatur und Modernisierung aller Hersteller. Festpreise ab 154€ netto.',
      serviceType: 'HVACBusiness',
      priceRange: '€€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was kostet eine Heizungsreparatur in München?', answer: 'Eine Heizungsreparatur kostet bei AquaPro 24 ab 154€ netto. Alle Hersteller: Viessmann, Buderus, Vaillant, Wolf, Junkers. Festpreisgarantie.' },
      { question: 'Wie oft sollte die Heizung gewartet werden?', answer: 'Eine jährliche Heizungswartung wird empfohlen. Sie spart Energie, verlängert die Lebensdauer und beugt Ausfällen vor. Ab 119€ netto bei AquaPro 24.' },
      { question: 'Welche Förderung gibt es beim Heizungstausch?', answer: 'Bis zu 70% BAFA-Förderung: 30% Grundförderung + 20% Klimabonus + 30% Einkommensbonus. Wir helfen beim Antrag – kostenlos.' },
      { question: 'Bietet AquaPro 24 einen Heizung-Notdienst?', answer: 'Ja, unser 24/7 Heizungs-Notdienst ist rund um die Uhr erreichbar. Anfahrt in 45-60 Minuten im Großraum München. Tel: 089 444438872.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Professioneller <strong>Heizungsservice</strong> in München – Wartung, Reparatur und Modernisierung vom Fachmann. Schnelle Hilfe bei Heizungsausfall.</p>
        
        <h2>Heizungs-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungsreparatur München</strong></span>: Alle Hersteller ab 154€</h3>
        <p>Schnelle Reparatur aller Heizungsmarken: Viessmann, Buderus, Vaillant, Wolf, Junkers. Festpreis ohne Überraschungen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungswartung München</strong></span>: Jahresservice vom Fachmann</h3>
        <p>Regelmäßige Wartung spart Energie und verlängert die Lebensdauer. Brennerwartung, Abgasmessung, Sicherheitscheck.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Gasheizung München</strong></span>: Installation, Wartung & Reparatur</h3>
        <p>Gasheizung-Service: Neuinstallation, Brennertausch, Therme-Reparatur. Gas-Notdienst 24/7.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungsaustausch München</strong></span>: Mit bis zu 70% BAFA-Förderung</h3>
        <p>Alte Heizung austauschen? Wir beraten zu Wärmepumpe, Gasbrennwert und Förderung. <a href="/foerderung">Mehr zur Förderung</a></p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Fußbodenheizung München</strong></span>: Installation & Reparatur</h3>
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
    title: 'Badsanierung München – Komplettumbau vom Profi | AquaPro 24',
    description: 'Badsanierung in München: Komplettumbau, barrierefreies Bad mit KfW-Förderung, Badmodernisierung. Festpreis. Jetzt beraten: 089 444438872',
    h1: 'Badsanierung München – Komplettumbau vom Profi',
    keywords: ['Badsanierung München', 'Badumbau', 'barrierefreies Bad', 'Badmodernisierung', 'KfW Förderung'],
    serviceSchema: {
      name: 'Badsanierung München',
      description: 'Komplette Badsanierung in München – Planung, Umbau und Fertigstellung aus einer Hand. Barrierefreie Bäder mit KfW-Förderung bis 6.250€.',
      serviceType: 'PlumbingService',
      priceRange: '€€€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was kostet eine Badsanierung in München?', answer: 'Eine Badsanierung bei AquaPro 24 beginnt ab ca. 16.000€ für eine Komplettsanierung. Der genaue Preis hängt von Größe, Ausstattung und Umfang ab. Kostenlose Beratung vor Ort.' },
      { question: 'Gibt es Förderung für barrierefreie Bäder?', answer: 'Ja, bis zu 6.250€ KfW-Zuschuss für barrierefreie Badumbauten (Programm 455-B). Bodengleiche Dusche, Haltegriffe, rutschfeste Fliesen werden gefördert.' },
      { question: 'Wie lange dauert eine Badsanierung?', answer: 'Eine komplette Badsanierung dauert in der Regel 2-4 Wochen, je nach Umfang. Teilsanierungen sind oft in 3-5 Tagen erledigt.' },
      { question: 'Was gehört zu einer Komplettsanierung?', answer: 'Demontage, Rohinstallation, Fliesen, Sanitärobjekte, Armaturen, Beleuchtung, Lüftung – alles aus einer Hand bei AquaPro 24.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Komplette <strong>Badsanierung in München</strong> – von der Planung bis zur Fertigstellung aus einer Hand. Barrierefreie Bäder mit KfW-Förderung.</p>
        
        <h2>Badsanierung Leistungen München: Komplettumbau & Teilsanierung</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Walk-in Dusche München</strong></span>: Bodengleich & rahmenlos</h3>
        <p>Moderne Walk-in Duschen – bodengleich, rahmenlos und pflegeleicht. Ideal für barrierefreies Wohnen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Luxusbad München</strong></span>: Freistehende Wannen & Design</h3>
        <p>Wellness-Bad mit freistehenden Wannen, Regenduschen und hochwertigen Materialien.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Barrierefreies Bad München</strong></span>: KfW-gefördert</h3>
        <p>Altersgerechter Umbau mit bodengleicher Dusche, Haltegriffen und rutschfesten Fliesen. Bis zu 6.250€ KfW-Zuschuss.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Bad Förderrechner München</strong></span>: Zuschuss berechnen</h3>
        <p>Berechnen Sie Ihre Fördermöglichkeiten: <a href="/foerderrechner">Zum Förderrechner</a></p>
        
        <h2>KfW-Förderung München: Bis zu 6.250€ Zuschuss</h2>
        <p>Nutzen Sie staatliche Zuschüsse für Ihren Badumbau. <a href="/foerderung">Mehr zur Förderung</a></p>
        
        <h2>Kostenlose Beratung</h2>
        <p>Vereinbaren Sie Ihren Beratungstermin: <a href="tel:+4989444438872"><strong>089 444438872</strong></a> oder <a href="/termin">online buchen</a></p>
      </section>
    `
  },
  '/waermepumpe': {
    title: 'Wärmepumpe München | Förderung & Einbau | AquaPro 24',
    description: 'Wärmepumpe in München: Beratung, Planung, Einbau – inkl. Förder-Check. Jetzt kostenloses Erstgespräch sichern.',
    h1: 'Wärmepumpe München – Förderung & Einbau vom Profi',
    keywords: ['Wärmepumpe München', 'BAFA Förderung', 'Luft-Wasser-Wärmepumpe', 'Erdwärmepumpe', 'Heizungstausch'],
    serviceSchema: {
      name: 'Wärmepumpen-Installation München',
      description: 'Wärmepumpen-Installation in München mit bis zu 70% BAFA-Förderung. Luft-Wasser, Erdwärme, Hybrid. Beratung und Förderantrag inklusive.',
      serviceType: 'HVACBusiness',
      priceRange: '€€€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was kostet eine Wärmepumpe in München?', answer: 'Eine Luft-Wasser-Wärmepumpe kostet ca. 15.000-25.000€, eine Erdwärmepumpe 20.000-35.000€. Mit BAFA-Förderung bis zu 70% sparen.' },
      { question: 'Welche BAFA-Förderung gibt es für Wärmepumpen?', answer: 'Bis zu 70% BAFA-Zuschuss: 30% Grundförderung + 20% Klimageschwindigkeitsbonus + 30% Einkommensbonus. AquaPro 24 hilft kostenlos beim Antrag.' },
      { question: 'Welche Wärmepumpe ist die beste für Altbauten?', answer: 'Für Altbauten empfehlen wir Luft-Wasser-Wärmepumpen oder Hybrid-Systeme (Wärmepumpe + Gas). Keine Erdarbeiten nötig, einfache Installation.' },
      { question: 'Lohnt sich eine Wärmepumpe in München?', answer: 'Ja, besonders mit BAFA-Förderung. Wärmepumpen senken Heizkosten um bis zu 50% und machen unabhängig von steigenden Gaspreisen.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Wärmepumpen-Installation</strong> in München – mit staatlicher Förderung bis zu 70%. Wir beraten Sie und helfen beim Förderantrag.</p>
        
        <h2>Wärmepumpen-Typen München: Welche passt zu Ihnen?</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Luft-Wasser-Wärmepumpe München</strong></span>: Einfache Installation</h3>
        <p>Die beliebteste Wahl: Nutzt Außenluft als Wärmequelle. Geringe Installationskosten, keine Bohrungen nötig. Ideal für Bestandsgebäude.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Erdwärmepumpe München</strong></span>: Höchste Effizienz</h3>
        <p>Erdsondenbohrung oder Flächenkollektor. Höchste Jahresarbeitszahl (JAZ), unabhängig von Außentemperatur. Premium-Lösung für Neubauten.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Hybrid-Wärmepumpe München</strong></span>: Wärmepumpe + Gas kombiniert</h3>
        <p>Beste Lösung für Altbauten: Wärmepumpe deckt Grundlast, Gas springt bei Spitzenlast ein. Schrittweise Dekarbonisierung.</p>
        
        <h2>BAFA Förderung 2025 München: Bis zu 70% Zuschuss</h2>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Klimageschwindigkeitsbonus Heizung München</strong></span>: 20% Extra-Förderung</h3>
        <p>Bei Austausch einer funktionsfähigen fossilen Heizung vor 2028 erhalten Sie zusätzlich 20% Klimabonus.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Einkommensbonus Heizung München</strong></span>: 30% für Haushalte</h3>
        <p>Haushalte mit bis zu 40.000€ zu versteuerndem Einkommen erhalten 30% Einkommensbonus zusätzlich.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>KfW Heizungskredit München</strong></span>: Zinsgünstig finanzieren</h3>
        <p>Ergänzend zur BAFA-Förderung: KfW-Kredit 358/359 mit günstigen Konditionen für Heizungstausch.</p>
        
        <p><a href="/foerderung">Alle Details zur Förderung</a> | <a href="/foerderantrag-heizung">Kostenloser Förderantrag-Service</a></p>
        
        <h2>Wärmepumpe München: Jetzt beraten lassen</h2>
        <p>Kostenlose Erstberatung: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/notdienst-muenchen': {
    title: 'Notdienst Sanitär & Heizung München – 24h Soforthilfe | AquaPro 24',
    description: '24/7 Notdienst für Sanitär & Heizung in München. Rohrbruch, Wasserschaden, Heizungsausfall. Anfahrt in 45-60 Min. Jetzt: 089 444438872',
    h1: 'Notdienst Sanitär & Heizung München – 24h Soforthilfe',
    keywords: ['Notdienst München', 'Sanitär Notdienst', 'Heizung Notdienst', 'Rohrbruch', '24h'],
    serviceSchema: {
      name: '24/7 Sanitär & Heizung Notdienst München',
      description: '24-Stunden-Notdienst für Sanitär und Heizung in München. Rohrbruch, Wasserschaden, Heizungsausfall. Anfahrt in 45-60 Minuten.',
      serviceType: 'EmergencyService',
      priceRange: '€€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was kostet der Sanitär-Notdienst in München?', answer: 'Anfahrt Notdienst: 69€. Rohrreinigung Notfall: ab 109€. Heizungsreparatur Notfall: ab 189€. Festpreisgarantie auch im Notdienst.' },
      { question: 'Wie schnell kommt der Notdienst?', answer: 'Im Großraum München sind wir in der Regel innerhalb von 45-60 Minuten bei Ihnen – rund um die Uhr, auch an Wochenenden und Feiertagen.' },
      { question: 'Was soll ich bei einem Rohrbruch tun?', answer: '1. Hauptwasserhahn zudrehen (meist im Keller), 2. Strom abschalten bei Wasserschaden, 3. Fotos für Versicherung, 4. AquaPro 24 anrufen: 089 444438872.' },
      { question: 'Ist der Notdienst auch am Wochenende erreichbar?', answer: 'Ja, unser Notdienst ist 365 Tage im Jahr, 24 Stunden am Tag erreichbar – auch an Feiertagen. Tel: 089 444438872.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:24px;color:#f97316"><strong>24/7 Notdienst: <a href="tel:+4989444438872">089 444438872</a></strong></p>
        
        <p style="font-size:20px">Schnelle Hilfe bei <strong>Sanitär- und Heizungs-Notfällen</strong> in München. Anfahrt in 45-60 Minuten.</p>
        
        <h2>Sanitär Notdienst München: Wann ist ein echter Notfall?</h2>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Rohrbruch München</strong></span>: Wasser sofort absperren</h3>
        <p>Wasser tritt aus? Haupthahn zudrehen (meist im Keller), dann sofort anrufen.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Wasserschaden München</strong></span>: Erste Hilfe Maßnahmen</h3>
        <p>Strom abschalten, Möbel hochstellen, Fotos für Versicherung machen.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Heizungsausfall München</strong></span>: Keine Panik</h3>
        <p>Heizung prüfen: Thermostat, Sicherungen, Brenner-Reset. Wir helfen schnell.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Gasgeruch München</strong></span>: Sofort handeln</h3>
        <p>Fenster öffnen, keine Schalter betätigen, Haus verlassen, 112 rufen!</p>
        
        <h2>Notdienst Preise München: Transparent & fair</h2>
        <ul>
          <li>Anfahrt Notdienst: 69€</li>
          <li>Rohrreinigung Notfall: ab 109€</li>
          <li>Heizungsreparatur Notfall: ab 189€</li>
        </ul>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Notdienst Garantie München</strong></span>: Keine versteckten Kosten</h3>
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
    title: 'Termin online buchen München – Handwerker Wunschtermin | AquaPro 24',
    description: 'Buchen Sie Ihren Handwerker-Termin online. Sanitär, Heizung, Badsanierung in München. Wunschtermin Mo-Fr 8-17 Uhr. Jetzt buchen!',
    h1: 'Termin online buchen München – Handwerker Wunschtermin',
    keywords: ['Termin buchen', 'Handwerker München', 'Online Terminbuchung', 'Klempner Termin'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Buchen Sie Ihren <strong>Wunschtermin</strong> für Sanitär, Heizung oder Badsanierung in München – einfach und bequem online.</p>
        
        <h2>Online Terminbuchung München: Schnell & einfach</h2>
        <p>Unsere Öffnungszeiten für Termine: <strong>Montag bis Freitag, 8:00 - 17:00 Uhr</strong></p>
        <p>Termine dauern 90 Minuten für eine gründliche Beratung vor Ort.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Sanitär Garantie München</strong></span>: 2 Jahre auf alle Arbeiten</h3>
        <p>Jeder Termin mit Festpreisgarantie. Keine versteckten Kosten.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Klempner Bewertungen München</strong></span>: 4.9/5 Sterne</h3>
        <p>Über 2.847 zufriedene Kunden vertrauen AquaPro 24.</p>
        
        <h2>So funktioniert die Terminbuchung</h2>
        <ol style="line-height:2">
          <li>Wählen Sie Ihren Wunschtermin im Kalender</li>
          <li>Geben Sie Ihre Kontaktdaten ein</li>
          <li>Beschreiben Sie kurz Ihr Anliegen</li>
          <li>Fertig – Sie erhalten eine Bestätigung per E-Mail</li>
        </ol>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Handwerker Termin München</strong></span>: Was Sie erwartet</h3>
        <p>Unser Techniker kommt pünktlich, analysiert das Problem und erstellt einen Festpreis-Kostenvoranschlag.</p>
        
        <h2>Telefonische Terminvereinbarung</h2>
        <p>Lieber telefonisch? Kein Problem: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/kontakt': {
    title: 'Kontakt AquaPro 24 München – Kostenlose Beratung | AquaPro 24',
    description: 'Kontaktieren Sie AquaPro 24 in München. Tel: 089 444438872. Hardenbergstr. 4, 80992 München. Kostenlose Beratung für Sanitär & Heizung.',
    h1: 'Kontakt AquaPro 24 München – Kostenlose Beratung',
    keywords: ['Kontakt', 'AquaPro 24 München', 'Telefon', 'Adresse', 'Beratung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Kontaktdaten AquaPro 24 München: So erreichen Sie uns</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Sanitär Beratung München</strong></span>: Kostenlos & unverbindlich</h3>
        <p><strong>AquaPro 24</strong> – Inhaber: Mustafa Sakar<br>
        Hardenbergstr. 4, 80992 München</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Klempner Notdienst München</strong></span>: 24/7 erreichbar</h3>
        <p><strong>Telefon:</strong> <a href="tel:+4989444438872">089 444438872</a> (24/7 Notdienst)<br>
        <strong>E-Mail:</strong> info@aquapro24.de</p>
        
        <h2>Öffnungszeiten Sanitär München: Terminvereinbarung</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Handwerker Termin München</strong></span>: Mo-Fr 8:00-17:00</h3>
        <p>Terminvereinbarung: Mo-Fr 8:00 - 17:00 Uhr<br>
        Notdienst: 24/7 erreichbar – auch an Feiertagen!</p>
        
        <h2>Online Termin buchen München: Schnell & einfach</h2>
        <p><a href="/termin">Jetzt Wunschtermin online buchen</a></p>
      </section>
    `
  },
  '/faq': {
    title: 'FAQ Sanitär & Heizung München – Preise & Tipps | AquaPro 24',
    description: 'Häufige Fragen zu Sanitär & Heizung: Preise, Notdienst-Kosten, Förderung. Rohrreinigung ab 81€, Heizungsreparatur ab 154€.',
    h1: 'FAQ Sanitär & Heizung München – Preise & Tipps',
    keywords: ['FAQ', 'Preise Klempner', 'Kosten Sanitär', 'Heizung Kosten'],
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "Was kostet ein Klempner in München?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unsere Preise (netto): Rohrreinigung ab 81€, Sanitär-Reparaturen ab 92€, Heizungsreparatur ab 154€. Anfahrt München: 39€."
            }
          },
          {
            "@type": "Question",
            "name": "Wie schnell kommt der Notdienst?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Im Großraum München sind wir in der Regel innerhalb von 45-60 Minuten bei Ihnen."
            }
          },
          {
            "@type": "Question",
            "name": "Arbeiten Sie auch am Wochenende?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Unser Notdienst ist 24/7 erreichbar, auch an Wochenenden und Feiertagen. Reguläre Termine vergeben wir Mo-Fr 8-17 Uhr."
            }
          },
          {
            "@type": "Question",
            "name": "Welche Förderung gibt es für Heizungen?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Für den Heizungstausch gibt es bis zu 70% BAFA-Förderung (30% Basis + 20% Klimabonus + 30% Einkommensbonus)."
            }
          },
          {
            "@type": "Question",
            "name": "Bieten Sie Festpreise?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Ja, wir arbeiten mit transparenten Festpreisen. Vor Arbeitsbeginn erhalten Sie einen verbindlichen Kostenvoranschlag."
            }
          }
        ]
      }
      </script>
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Häufige Fragen Sanitär München: Preise & Antworten</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Klempner Preise München</strong></span>: Was kostet ein Klempner?</h3>
        <p>Unsere Preise (netto): Rohrreinigung ab 81€, Sanitär-Reparaturen ab 92€, Heizungsreparatur ab 154€. Anfahrt München: 39€.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Notdienst Anfahrt München</strong></span>: Wie schnell kommt der Notdienst?</h3>
        <p>Im Großraum München sind wir in der Regel innerhalb von 45-60 Minuten bei Ihnen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Sanitär Wochenende München</strong></span>: Arbeiten Sie auch am Wochenende?</h3>
        <p>Unser Notdienst ist 24/7 erreichbar, auch an Wochenenden und Feiertagen. Reguläre Termine vergeben wir Mo-Fr 8-17 Uhr.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Heizung Förderung München</strong></span>: Welche Förderung gibt es für Heizungen?</h3>
        <p>Für den Heizungstausch gibt es bis zu 70% BAFA-Förderung (30% Basis + 20% Klimabonus + 30% Einkommensbonus). <a href="/foerderung">Mehr Infos</a></p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Klempner Festpreis München</strong></span>: Bieten Sie Festpreise?</h3>
        <p>Ja, wir arbeiten mit transparenten Festpreisen. Vor Arbeitsbeginn erhalten Sie einen verbindlichen Kostenvoranschlag.</p>
      </section>
    `
  },
  '/ueber-uns': {
    title: 'AquaPro 24 München – Ihr Partnernetzwerk seit 2005',
    description: 'AquaPro 24 - Partnernetzwerk für Sanitär & Heizung in München seit 2005. Über 2.847 zufriedene Kunden. 4.9/5 Sterne.',
    h1: 'AquaPro 24 München – Ihr Partnernetzwerk seit 2005',
    keywords: ['Über uns', 'AquaPro 24', 'Partnernetzwerk', 'München', 'Geschichte'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">AquaPro 24 ist ein <strong>Partnernetzwerk für Sanitär und Heizung</strong> in München. Seit 2005 koordinieren wir erfahrene Handwerksbetriebe für schnelle und zuverlässige Hilfe.</p>
        
        <h2>AquaPro 24 Geschichte München: Seit 2005 für Sie da</h2>
        <p>Gegründet von Mustafa Sakar, hat sich AquaPro 24 zum vertrauenswürdigen Partner für Sanitär- und Heizungsarbeiten in München entwickelt.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Klempner München</strong></span>: 2.847+ zufriedene Kunden</h3>
        <p>Über 2.847 zufriedene Kunden vertrauen AquaPro 24 bei Sanitär- und Heizungsproblemen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Installateure München</strong></span>: 4.9/5 Sterne Bewertung</h3>
        <p>Unsere Handwerker werden durchschnittlich mit 4.9/5 Sternen bewertet.</p>
        
        <h2>AquaPro 24 Werte München: Zuverlässigkeit & Qualität</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Sanitär Festpreise München</strong></span>: Transparenz garantiert</h3>
        <p>Keine versteckten Kosten. Sie wissen vorher, was es kostet.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Handwerker Garantie München</strong></span>: 2 Jahre auf alle Arbeiten</h3>
        <p>Qualität, die überzeugt. 2 Jahre Garantie auf alle Leistungen.</p>
        
        <h2>Einsatzgebiet München: 26 Stadtteile + 40km Umkreis</h2>
        <p><a href="/kontakt">Kontakt aufnehmen</a></p>
      </section>
    `
  },
  '/impressum': {
    title: 'Impressum AquaPro 24 München – Mustafa Sakar',
    description: 'Impressum AquaPro 24. Inhaber: Mustafa Sakar. Hardenbergstr. 4, 80992 München. Tel: 089 444438872.',
    h1: 'Impressum AquaPro 24 München – Mustafa Sakar',
    keywords: ['Impressum', 'AquaPro 24', 'Mustafa Sakar', 'München'],
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
    title: 'Datenschutz DSGVO München – Ihre Rechte | AquaPro 24',
    description: 'Datenschutzerklärung von AquaPro 24. DSGVO-konform. Ihre Rechte auf Auskunft, Löschung, Widerspruch.',
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
    title: 'AGB Sanitär München – Festpreis & Garantie | AquaPro 24',
    description: 'Allgemeine Geschäftsbedingungen von AquaPro 24. Festpreisgarantie, 2 Jahre Gewährleistung, transparente Konditionen.',
    h1: 'AGB Sanitär München – Festpreis & Garantie',
    keywords: ['AGB', 'Geschäftsbedingungen', 'Festpreis', 'Garantie'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <h2>Allgemeine Geschäftsbedingungen</h2>
        
        <h3>§ 1 Geltungsbereich</h3>
        <p>Diese AGB gelten für alle Aufträge an AquaPro 24, Mustafa Sakar, Hardenbergstr. 4, 80992 München.</p>
        
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
    title: 'Förderung Heizung München: BAFA, KfW & Steuerbonus 2025 | AquaPro 24',
    description: 'Heizungsförderung 2025: Bis zu 70% BAFA-Zuschuss, KfW-Kredit, Steuerbonus. Wärmepumpe, Heizungstausch. Kostenlose Beratung: 089 444438872',
    h1: 'Förderung Heizung München: BAFA, KfW & Steuerbonus 2025',
    keywords: ['BAFA Förderung', 'KfW Kredit', 'Heizungsförderung', 'Wärmepumpe Zuschuss', 'Steuerbonus'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Nutzen Sie die <strong>staatliche Förderung</strong> für Ihren Heizungstausch – bis zu 70% Zuschuss möglich!</p>
        
        <h2>BAFA Förderung 2025 München: Bis zu 70% Zuschuss</h2>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>BAFA Grundförderung München</strong></span>: 30% für alle Heizungen</h3>
        <p>30% Grundförderung für alle förderfähigen Heizungen: Wärmepumpe, Pelletheizung, Solarthermie.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Klimageschwindigkeitsbonus München</strong></span>: +20% Extra</h3>
        <p>20% Bonus beim Austausch alter Öl- oder Gasheizungen. Schnell handeln lohnt sich!</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Einkommensbonus Heizung München</strong></span>: +30% für Haushalte</h3>
        <p>30% Einkommensbonus bei Haushaltseinkommen unter 40.000€ jährlich.</p>
        
        <h2>KfW-Ergänzungskredit München: Zinsgünstig finanzieren</h2>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>KfW Heizungskredit München</strong></span>: Bis 120.000€</h3>
        <p>Zusätzlich zur BAFA-Förderung: Zinsgünstiger KfW-Kredit bis 120.000€ für die Restsumme.</p>
        
        <h2>Steuerbonus Heizung München: Alternative zur BAFA</h2>
        <p>Alternativ zur BAFA: 20% der Kosten über 3 Jahre von der Steuer absetzen.</p>
        
        <h2>Förderantrag Service München: Komplett kostenlos</h2>
        <p>Wir helfen Ihnen beim Antrag – <a href="/foerderantrag-heizung">komplett kostenlos</a>!</p>
        <p>Beratung: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/haustechnik': {
    title: 'Haustechnik München – Gas, Wasser, Lüftung komplett | AquaPro 24',
    description: 'Haustechnik-Service in München: Gasinstallation, Wasserinstallation, Lüftungsanlagen, Smart Home. Komplettlösungen. Tel: 089 444438872',
    h1: 'Haustechnik München – Gas, Wasser, Lüftung komplett',
    keywords: ['Haustechnik München', 'Gasinstallation', 'Wasserinstallation', 'Lüftung', 'Smart Home'],
    serviceSchema: {
      name: 'Haustechnik München',
      description: 'Komplette Haustechnik-Lösungen für München – Gasinstallation, Wasserinstallation, Lüftungsanlagen und Smart Home aus einer Hand.',
      serviceType: 'PlumbingService',
      priceRange: '€€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was umfasst Haustechnik?', answer: 'Haustechnik umfasst Gasinstallation, Wasserinstallation, Heizungstechnik, Lüftungsanlagen und Smart-Home-Steuerung für Ihr Zuhause.' },
      { question: 'Bietet AquaPro 24 Gasinstallationen an?', answer: 'Ja, wir führen professionelle Gasinstallationen nach TRGI durch: Gasleitungen verlegen, Gasgeräte anschließen, Sicherheitsprüfungen.' },
      { question: 'Was kostet eine Lüftungsanlage?', answer: 'Die Kosten hängen von der Größe und dem System ab. Kontrollierte Wohnraumlüftung mit Wärmerückgewinnung – kostenlose Beratung vor Ort.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Komplette <strong>Haustechnik-Lösungen</strong> für München – Gas, Wasser, Heizung, Lüftung und Smart Home aus einer Hand.</p>
        
        <h2>Haustechnik-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Gasinstallation München</strong></span>: Gasleitungen & Gasgeräte</h3>
        <p>Professionelle Gasinstallation: Gasleitungen verlegen, Gasgeräte anschließen, Sicherheitsprüfung nach TRGI.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Wasserinstallation München</strong></span>: Trinkwasser & Abwasser</h3>
        <p>Komplette Wasserinstallation: Trinkwasserleitungen, Abwasseranschlüsse, Regenwassernutzung für Ihr Zuhause.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Lüftungsanlagen München</strong></span>: Kontrollierte Wohnraumlüftung</h3>
        <p>Moderne Lüftungstechnik mit Wärmerückgewinnung. Frische Luft, Schimmelschutz und Energieeffizienz.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Smart Home München</strong></span>: Intelligente Heizungssteuerung</h3>
        <p>Intelligente Haustechnik: App-Steuerung für Heizung, Leckage-Sensoren, automatische Temperaturregelung.</p>
        
        <h2>Komplettlösungen Neubau & Sanierung München: Alles aus einer Hand</h2>
        <p>Wir koordinieren alle Gewerke für Ihre Haustechnik – von der Planung bis zur Abnahme.</p>
        
        <h2>Haustechnik Beratung München: Jetzt Termin vereinbaren</h2>
        <p>Tel: <a href="tel:+4989444438872"><strong>089 444438872</strong></a> | <a href="/termin">Termin buchen</a></p>
      </section>
    `
  },
  // === ADDITIONAL SERVICE PAGES ===
  '/armaturen': {
    title: 'Wasserhahn wechseln München – Armaturen Montage & Reparatur | AquaPro 24',
    description: 'Armaturen-Service München: Wasserhahn wechseln, Mischbatterie montieren, tropfende Armatur reparieren. Festpreise. Tel: 089 444438872',
    h1: 'Wasserhahn wechseln München – Armaturen Montage & Reparatur',
    keywords: ['Wasserhahn wechseln', 'Armaturen München', 'Mischbatterie', 'tropfender Wasserhahn'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Professionelle <strong>Armaturen-Montage</strong> in München – Wasserhahn wechseln, Mischbatterie einbauen, tropfende Armaturen reparieren.</p>
        
        <h2>Armaturen-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Wasserhahn wechseln München</strong></span>: Küche & Bad alle Marken</h3>
        <p>Professioneller Austausch alter Wasserhähne. Wir montieren alle Marken: Grohe, Hansgrohe, HANSA, Blanco.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Mischbatterie München</strong></span>: Thermostat & Einhebelmischer</h3>
        <p>Installation moderner Mischbatterien mit Temperaturregelung. Einhebelmischer, Thermostatarmaturen, berührungslose Armaturen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Tropfender Wasserhahn München</strong></span>: Reparatur & Dichtung</h3>
        <p>Wasserhahn tropft? Wir reparieren oder tauschen Dichtungen schnell und günstig. Kein tropfender Wasserhahn mehr.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Armaturen Garantie München</strong></span>: 2 Jahre auf alle Arbeiten</h3>
        <p>Festpreise ohne versteckte Kosten. 2 Jahre Garantie auf Material und Montage.</p>
        
        <h2>Armaturen Preise München: Festpreisgarantie</h2>
        <p><a href="/termin">Termin buchen</a> | Tel: <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/rohrreinigung': {
    title: 'Rohrreinigung München – Abfluss verstopft Notdienst 24/7 | AquaPro 24',
    description: 'Rohrreinigung München ab 81€: Abfluss verstopft, WC verstopft, Kanalreinigung. 24/7 Notdienst. Sofort-Termin: 089 444438872',
    h1: 'Rohrreinigung München – Abfluss verstopft Notdienst 24/7',
    keywords: ['Rohrreinigung München', 'Abfluss verstopft', 'WC verstopft', 'Kanalreinigung', 'Notdienst'],
    serviceSchema: {
      name: 'Rohrreinigung München',
      description: 'Professionelle Rohrreinigung in München ab 81€. Abfluss verstopft, WC verstopft, Kanalreinigung. 24/7 Notdienst verfügbar.',
      serviceType: 'PlumbingService',
      priceRange: '€',
      areaServed: 'München'
    },
    faqs: [
      { question: 'Was kostet eine Rohrreinigung in München?', answer: 'Rohrreinigung ab 81€ netto bei AquaPro 24. Kanalreinigung mit Hochdruckspülung und TV-Inspektion auf Anfrage. Festpreise.' },
      { question: 'Wie wird ein verstopfter Abfluss gereinigt?', answer: 'Wir nutzen professionelle Spiralen oder Hochdruckspülung. Je nach Verstopfungsgrad und Leitungsdurchmesser wählen wir die optimale Methode.' },
      { question: 'Gibt es einen Notdienst für verstopfte Abflüsse?', answer: 'Ja, unser 24/7 Notdienst ist auch für verstopfte Abflüsse erreichbar – nachts, am Wochenende und an Feiertagen. Tel: 089 444438872.' }
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Rohrreinigung in München</strong> – Schnelle Hilfe bei verstopften Abflüssen, WCs und Kanälen. Ab 81€ netto.</p>
        
        <h2>Rohrreinigung Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Abfluss verstopft München</strong></span>: Küche, Bad, Dusche ab 81€</h3>
        <p>Verstopfter Abfluss? Wir reinigen mit Spirale oder Hochdruck. Küche, Bad, Dusche – schnelle Hilfe garantiert.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>WC verstopft München</strong></span>: Toilette freimachen Notdienst</h3>
        <p>Toilette verstopft? Professionelle WC-Reinigung ohne Beschädigung. Auch am Wochenende und Feiertagen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Kanalreinigung München</strong></span>: Hochdruckspülung & TV-Inspektion</h3>
        <p>Kanalreinigung mit modernster Technik. Hochdruckspülung, TV-Kamerainspektion zur Schadensanalyse.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Rohrbruch München</strong></span>: Leckortung & Reparatur</h3>
        <p>Rohrbruch erkannt? Wir orten das Leck und reparieren schnell. Minimaler Aufwand, maximale Sicherheit.</p>
        
        <h2>Rohrreinigung Preise München: Festpreise ab 81€</h2>
        
        <h2>24/7 Notdienst München: Sofort-Hilfe</h2>
        <p>Sofort-Hilfe: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/warmwasser': {
    title: 'Durchlauferhitzer München – Boiler Reparatur & Installation | AquaPro 24',
    description: 'Warmwasser-Service München: Durchlauferhitzer, Boiler, Warmwasserspeicher. Installation & Reparatur. Tel: 089 444438872',
    h1: 'Durchlauferhitzer München – Boiler Reparatur & Installation',
    keywords: ['Durchlauferhitzer München', 'Boiler', 'Warmwasserspeicher', 'Warmwasser'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Warmwasser-Lösungen</strong> für München – Durchlauferhitzer, Boiler und Warmwasserspeicher. Installation und Reparatur.</p>
        
        <h2>Warmwasser-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Durchlauferhitzer München</strong></span>: Elektrisch & Gas Installation</h3>
        <p>Durchlauferhitzer Installation und Reparatur. Elektrische Durchlauferhitzer, Gas-Durchlauferhitzer – alle Marken.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Boiler München</strong></span>: Montage, Austausch & Reparatur</h3>
        <p>Boiler-Service komplett: Montage neuer Geräte, Austausch alter Boiler, Reparatur bei Defekt.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Warmwasserspeicher München</strong></span>: Alle Größen & Marken</h3>
        <p>Warmwasserspeicher von 50 bis 500 Liter. Für Einfamilienhäuser, Mehrfamilienhäuser und Gewerbe.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Wärmepumpen-Boiler München</strong></span>: Energiesparend & gefördert</h3>
        <p>Moderne Wärmepumpen-Boiler mit BAFA-Förderung. Bis zu 70% geringere Betriebskosten.</p>
        
        <h2>Warmwasser Preise München: Festpreisgarantie</h2>
        <p>Tel: <a href="tel:+4989444438872">089 444438872</a> | <a href="/termin">Termin buchen</a></p>
      </section>
    `
  },
  '/badsanierung': {
    title: 'Badsanierung München – Komplettumbau aus einer Hand | AquaPro 24',
    description: 'Badsanierung in München: Komplettumbau, barrierefreies Bad mit KfW-Förderung. Beratung vor Ort. Tel: 089 444438872',
    h1: 'Badsanierung München – Komplettumbau aus einer Hand',
    keywords: ['Badsanierung', 'Badumbau München', 'barrierefreies Bad', 'KfW Förderung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Komplette <strong>Badsanierung in München</strong> – von der Planung bis zur Übergabe. Alles aus einer Hand.</p>
        
        <h2>Badsanierung Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Badumbau München</strong></span>: Fliesen, Sanitär & Elektrik</h3>
        <p>Kompletter Badumbau aus einer Hand. Fliesen, Sanitärinstallation, Elektrik – alles koordiniert.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Barrierefreies Bad München</strong></span>: Mit KfW-Förderung</h3>
        <p>Barrierefreie Bäder mit bis zu 6.250€ KfW-Zuschuss. Bodengleiche Dusche, Haltegriffe, rutschfeste Fliesen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Walk-in Dusche München</strong></span>: Bodengleich & rahmenlos</h3>
        <p>Moderne Walk-in Duschen ohne Stolperkanten. Rahmenlose Glaswände für ein offenes Raumgefühl.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Teilsanierung Bad München</strong></span>: Armaturen & Waschtisch</h3>
        <p>Teilsanierung für schnelle Ergebnisse: Neue Armaturen, Waschtisch, WC – ohne Komplettumbau.</p>
        
        <h2>Badsanierung Beratung München: Kostenlos vor Ort</h2>
        <p><a href="/termin">Kostenlose Beratung</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  // === LANDING PAGES ===
  '/sanitaer-notdienst-24': {
    title: 'Sanitär Notdienst München 24/7 | Soforthilfe bei Rohrbruch | AquaPro 24',
    description: '24/7 Sanitär-Notdienst in München: Rohrbruch, Wasserschaden, Verstopfung. Schnelle Anfahrt, klare Kosten, Hilfe sofort.',
    h1: 'Sanitär Notdienst München 24/7 – Soforthilfe bei Rohrbruch',
    keywords: ['Sanitär Notdienst 24h', 'Klempner Notdienst', 'Rohrbruch München', 'Wasserschaden'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:24px;color:#f97316"><strong>24/7 Notdienst: <a href="tel:+4989444438872">089 444438872</a></strong></p>
        <p style="font-size:20px"><strong>Sanitär-Notdienst</strong> rund um die Uhr in München. Schnelle Hilfe bei Rohrbruch, Wasserschaden und verstopftem Abfluss.</p>
        
        <h2>Sanitär Notfall-Leistungen München: 24/7 Soforthilfe</h2>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Rohrbruch Soforthilfe München</strong></span>: Schnelle Reparatur</h3>
        <p>Rohrbruch? Wir sind in 30-45 Minuten bei Ihnen. Wasserzufuhr absperren und Schaden begrenzen.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Wasserschaden Beseitigung München</strong></span>: Sofortmaßnahmen</h3>
        <p>Wasserschaden im Haus? Wir stoppen das Leck und koordinieren die Trocknung.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Abfluss verstopft Notdienst München</strong></span>: 24h erreichbar</h3>
        <p>Verstopfter Abfluss auch nachts und am Wochenende. Küche, Bad, WC – schnelle Hilfe.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>WC Notfall München</strong></span>: Toilette überläuft</h3>
        <p>WC verstopft und überläuft? Notfall-Service rund um die Uhr verfügbar.</p>
        
        <h2>Sanitär Notdienst Anfahrt München: 30-45 Minuten</h2>
        <p><a href="/notdienst-muenchen">Alle Notdienst-Infos</a></p>
      </section>
    `
  },
  '/heizung-notdienst-24': {
    title: 'Heizung Notdienst 24h München – Heizungsreparatur Soforthilfe | AquaPro 24',
    description: 'Heizung Notdienst 24 Stunden München: Heizung ausgefallen, kein Warmwasser. Anfahrt 45-60 Min. Tel: 089 444438872',
    h1: 'Heizung Notdienst 24h München – Heizungsreparatur Soforthilfe rund um die Uhr',
    keywords: ['Heizung Notdienst 24h', 'Heizung ausgefallen', 'Heizungsreparatur Notdienst'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:24px;color:#f97316"><strong>24/7 Heizung Notdienst: <a href="tel:+4989444438872">089 444438872</a></strong></p>
        <p style="font-size:20px"><strong>Heizungs-Notdienst</strong> rund um die Uhr in München. Schnelle Hilfe wenn die Heizung ausgefallen ist.</p>
        
        <h2>Heizung Notfall-Leistungen München: 24/7 Soforthilfe</h2>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Heizung ausgefallen München</strong></span>: Schnelle Reparatur</h3>
        <p>Heizung kalt? Wir sind in 30-45 Minuten bei Ihnen. Alle Hersteller, alle Modelle.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Kein Warmwasser München</strong></span>: Sofort-Hilfe</h3>
        <p>Kein Warmwasser? Wir prüfen Therme, Brenner und Warmwasserspeicher.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Therme defekt München</strong></span>: Notdienst alle Marken</h3>
        <p>Gastherme defekt? Viessmann, Buderus, Vaillant, Wolf – wir reparieren alle Marken.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Brenner Störung München</strong></span>: 24h Reparatur</h3>
        <p>Brennerstörung? Wir beheben den Fehler noch am selben Tag – auch nachts und am Wochenende.</p>
        
        <h2>Heizung Notdienst Anfahrt München: 30-45 Minuten</h2>
        <p><a href="tel:+4989444438872">Jetzt anrufen: 089 444438872</a></p>
      </section>
    `
  },
  '/sanitaer-muenchen': {
    title: 'Sanitär München – Klempner & Installateur Notdienst | AquaPro 24',
    description: 'Sanitär-Service München: Rohrreinigung, Armaturen, Wasserschaden. 24/7 Notdienst. Festpreise. Tel: 089 444438872',
    h1: 'Sanitär München – Klempner & Installateur Notdienst',
    keywords: ['Sanitär München', 'Klempner München', 'Installateur', 'Sanitärinstallation'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Sanitär-Service</strong> in München – Ihr zuverlässiger Partner für alle Sanitärarbeiten.</p>
        
        <h2>Sanitär-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrreinigung München</strong></span>: Abfluss verstopft ab 81€</h3>
        <p>Professionelle <a href="/rohrreinigung">Rohrreinigung</a> für Küche, Bad, WC. Schnelle Hilfe bei verstopften Abflüssen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Armaturen Montage München</strong></span>: Wasserhahn wechseln</h3>
        <p><a href="/armaturen">Armaturen Montage</a> und Reparatur. Alle Marken: Grohe, Hansgrohe, Hansa, Ideal Standard.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Warmwasser München</strong></span>: Boiler & Durchlauferhitzer</h3>
        <p><a href="/warmwasser">Warmwasser</a>-Service: Boiler, Durchlauferhitzer, Warmwasserspeicher Installation & Reparatur.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Sanitär Notdienst München</strong></span>: 24/7 erreichbar</h3>
        <p>Rohrbruch, Wasserschaden, verstopftes WC? Wir sind rund um die Uhr für Sie da.</p>
        
        <h2>Sanitär Preise München: Festpreisgarantie</h2>
        <p><a href="/termin">Termin buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/heizung-muenchen': {
    title: 'Heizung München – Reparatur, Wartung & Modernisierung | AquaPro 24',
    description: 'Heizungs-Service München: Reparatur ab 154€, Wartung, Heizungsaustausch mit Förderung. Tel: 089 444438872',
    h1: 'Heizung München – Reparatur, Wartung & Modernisierung Profi',
    keywords: ['Heizung München', 'Heizungsreparatur', 'Heizungswartung', 'Heizungsmodernisierung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Heizungs-Service</strong> in München – Reparatur, Wartung und Modernisierung vom Fachmann.</p>
        
        <h2>Heizungs-Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungsreparatur München</strong></span>: Alle Marken ab 154€</h3>
        <p>Professionelle Heizungsreparatur für alle Hersteller: Viessmann, Buderus, Vaillant, Wolf, Junkers.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungswartung München</strong></span>: Jahresservice vom Fachmann</h3>
        <p>Regelmäßige Wartung für optimale Effizienz und lange Lebensdauer Ihrer Heizungsanlage.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Heizungsmodernisierung München</strong></span>: Mit bis zu 70% Förderung</h3>
        <p>Heizungstausch mit BAFA-Förderung. <a href="/waermepumpe">Wärmepumpen</a> und <a href="/foerderung">Förderung bis 70%</a>.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Heizung Notdienst München</strong></span>: 24/7 Soforthilfe</h3>
        <p>Heizungsausfall? Wir sind rund um die Uhr für Sie da. Schnelle Hilfe garantiert.</p>
        
        <h2>Heizung Preise München: Festpreisgarantie</h2>
        <p><a href="/termin">Termin buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/waermepumpe-muenchen': {
    title: 'Wärmepumpe München – bis 70% Förderung sichern | AquaPro 24',
    description: 'Wärmepumpen-Installation München mit bis zu 70% BAFA-Förderung. Beratung + Antrag inklusive. Tel: 089 444438872',
    h1: 'Wärmepumpe München – bis 70% Förderung sichern',
    keywords: ['Wärmepumpe München', 'BAFA Förderung', 'Heizungstausch München'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Wärmepumpen</strong> in München – Installation mit bis zu 70% Förderung.</p>
        
        <h2>Wärmepumpen-Service München: Komplett-Paket</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Luft-Wasser-Wärmepumpe München</strong></span>: Einfache Installation</h3>
        <p>Luft-Wasser-Wärmepumpen sind die beliebteste Wahl. Keine Erdarbeiten notwendig.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Erdwärmepumpe München</strong></span>: Höchste Effizienz</h3>
        <p>Erdwärmepumpen nutzen konstante Bodentemperatur für maximale Effizienz.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>BAFA Förderung Wärmepumpe München</strong></span>: Bis 70% Zuschuss</h3>
        <p>Mit <a href="/foerderung">BAFA-Förderung</a> bis zu 70% der Kosten sparen. Wir helfen beim Antrag.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Wärmepumpe Beratung München</strong></span>: Kostenlos vor Ort</h3>
        <p>Kostenlose Beratung vor Ort. Wir prüfen Ihr Haus und empfehlen die optimale Lösung.</p>
        
        <h2>Wärmepumpe Preise München: Mit Förderung kalkulieren</h2>
        <p><a href="/waermepumpe">Alle Infos</a> | <a href="/foerderung">Förderung</a> | <a href="/termin">Beratung</a></p>
      </section>
    `
  },
  '/fussbodenheizung-muenchen': {
    title: 'Fußbodenheizung München – Installation & Reparatur Profi | AquaPro 24',
    description: 'Fußbodenheizung München: Installation, Reparatur, Spülung, Entlüftung. Festpreise. Tel: 089 444438872',
    h1: 'Fußbodenheizung München – Installation & Reparatur Profi',
    keywords: ['Fußbodenheizung München', 'Fußbodenheizung Installation', 'Fußbodenheizung Reparatur'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Fußbodenheizung</strong> in München – Installation, Reparatur und Wartung vom Profi.</p>
        
        <h2>Fußbodenheizung Leistungen München: Komplett-Service</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Fußbodenheizung verlegen München</strong></span>: Neubau & Sanierung</h3>
        <p>Professionelle Installation Ihrer Fußbodenheizung. Nassestrich und Trockensystem für Neubau und Sanierung.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Fußbodenheizung Spülung München</strong></span>: Entlüftung & Wartung</h3>
        <p>Regelmäßige Spülung und Entlüftung für optimale Wärmeleistung. Hydraulischer Abgleich inklusive.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Fußbodenheizung Reparatur München</strong></span>: Leckortung & Notdienst</h3>
        <p>Schnelle Reparatur bei Leckagen und Defekten. Professionelle Leckortung ohne große Bauarbeiten.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Fußbodenheizung Nachrüstung München</strong></span>: Altbau & Bestand</h3>
        <p>Fußbodenheizung nachträglich einbauen. Auch im Altbau möglich mit flachen Systemen.</p>
        
        <h2>Fußbodenheizung Preise München: Festpreisgarantie</h2>
        <p><a href="/termin">Termin buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/fussbodenheizung': {
    title: 'Fußbodenheizung München – Installation & Reparatur | AquaPro 24',
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
    title: 'Förderantrag Heizung München – Kostenloser Service | AquaPro 24',
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
    title: 'Förderantrag Heizung München – Kostenloser BAFA Service | AquaPro 24',
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
    title: 'Förderrechner Heizung München – Zuschuss berechnen | AquaPro 24',
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
    title: 'Barrierefreiheit – WCAG 2.1 AA | AquaPro 24',
    description: 'Barrierefreiheitserklärung von AquaPro 24. WCAG 2.1 AA und BITV 2.0 konform. Kontakt für Feedback: 089 444438872',
    h1: 'Barrierefreiheitserklärung – AquaPro 24',
    keywords: ['Barrierefreiheit', 'WCAG', 'BITV', 'Accessibility'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p>AquaPro 24 ist bestrebt, seine Website barrierefrei zu gestalten gemäß WCAG 2.1 AA und BITV 2.0.</p>
        <p>Feedback: <a href="tel:+4989444438872">089 444438872</a> | info@aquapro24.de</p>
      </section>
    `
  },
  '/cookie-richtlinie': {
    title: 'Cookie Richtlinie DSGVO – transparent & sicher | AquaPro 24',
    description: 'Cookie-Richtlinie von AquaPro 24. DSGVO-konform. Informationen zu verwendeten Cookies.',
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
    title: 'Ratgeber München – Expertentipps Sanitär & Heizung | AquaPro 24',
    description: 'Ratgeber für Sanitär & Heizung: Tipps zu Wasserschaden, Badsanierung, Heizungswartung, Wärmepumpe. Expertenwissen von AquaPro 24.',
    h1: 'Ratgeber München – Expertentipps Sanitär & Heizung',
    keywords: ['Ratgeber', 'Sanitär Tipps', 'Heizung Tipps', 'Wasserschaden', 'Badsanierung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Unser <strong>Ratgeber</strong> mit Expertentipps zu Sanitär und Heizung.</p>
        
        <h2>Sanitär Ratgeber München: Beliebte Themen</h2>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Wasserschaden München</strong></span>: Was tun bei Rohrbruch?</h3>
        <p>Soforthilfe-Tipps bei Wasserschaden: Haupthahn absperren, Strom abschalten, Notdienst rufen.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Badsanierung München</strong></span>: Planung, Kosten, Förderung</h3>
        <p>Was kostet eine Badsanierung? Wie lange dauert sie? Welche Förderung gibt es?</p>
        
        <h2>Heizung Ratgeber München: Wichtige Themen</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungswartung München</strong></span>: Wann und warum?</h3>
        <p>Jährliche Wartung spart Heizkosten und verlängert die Lebensdauer Ihrer Heizung.</p>
        
        <h3><span style="background:#e8f5e9;padding:2px 6px;border-radius:4px"><strong>Wärmepumpe München</strong></span>: Lohnt sich der Umstieg?</h3>
        <p>Wärmepumpe vs. Gastherme: Kosten, Förderung, Vorteile im Vergleich.</p>
        
        <h2>Sanitär Beratung München: Wir helfen Ihnen</h2>
        <p>Rufen Sie uns an: <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  }
};

// === STADTTEIL SEITEN (synchronisiert mit sitemap.xml) ===
export const stadtteileData = [
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
stadtteileData.forEach(st => {
  seoPages[`/${st.slug}`] = {
    title: `Klempner ${st.name} München – Sanitär, Heizung & Notdienst 24/7 | AquaPro 24`,
    description: `Klempner in ${st.name} (${st.plz}): Sanitär, Heizung, Notdienst 24/7. Anfahrt 30-45 Min. Festpreise. Tel: 089 444438872`,
    h1: `Klempner ${st.name} München – Sanitär, Heizung & Notdienst 24/7`,
    keywords: [`Klempner ${st.name}`, `Sanitär ${st.name}`, `Heizung ${st.name}`, `Notdienst ${st.name}`],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Klempner in ${st.name}</strong> – Schneller Sanitär- und Heizungsservice für ${st.plz} München.</p>
        
        <h2>Sanitär & Heizung ${st.name}: Unsere Leistungen</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrreinigung ${st.name} München</strong></span>: Abfluss verstopft Soforthilfe</h3>
        <p>Professionelle Rohrreinigung in ${st.name}. Küche, Bad, WC – schnelle Hilfe ab 81€.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungsreparatur ${st.name} München</strong></span>: Alle Marken</h3>
        <p>Heizungsservice in ${st.name}: Viessmann, Buderus, Vaillant, Wolf. Reparatur ab 154€.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Notdienst ${st.name} München</strong></span>: 24/7 Soforthilfe</h3>
        <p>Rohrbruch oder Heizungsausfall in ${st.name}? Wir sind in 30-45 Minuten bei Ihnen.</p>
        
        <h2>Klempner ${st.name}: Unsere Garantie</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Handwerker Garantie ${st.name} München</strong></span>: Ihr Sicherheitsversprechen</h3>
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
  title: 'AquaPro 24 – Sanitär & Heizung München | 24/7 Notdienst',
  description: 'AquaPro 24 - Ihr Partner für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst. Festpreise. Tel: 089 444438872',
  h1: 'AquaPro 24 – Sanitär & Heizung München',
  keywords: ['Sanitär München', 'Heizung München', 'Notdienst', 'Klempner'],
  content: `
    <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
      <p style="font-size:20px">Willkommen bei <strong>AquaPro 24</strong> – Ihrem zuverlässigen Partner für Sanitär und Heizung in München.</p>
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
  // Normalize path: remove trailing slash (except for root)
  let normalizedPath = pagePath;
  if (normalizedPath !== '/' && normalizedPath.endsWith('/')) {
    normalizedPath = normalizedPath.slice(0, -1);
  }
  
  // Use page-specific SEO content or fallback to default
  const page = seoPages[normalizedPath] || defaultPage;
  
  // Log missing SEO definitions for future improvement
  if (!seoPages[normalizedPath]) {
    console.log(`[SEO] Warnung: Keine SEO-Definition für ${normalizedPath}, verwende Fallback`);
  }

  // Determine canonical URL (normalize /stadtteil/X to /X, always without trailing slash)
  let canonicalPath = normalizedPath;
  if (normalizedPath.startsWith('/stadtteil/')) {
    canonicalPath = '/' + normalizedPath.slice('/stadtteil/'.length);
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

  // Add meta keywords
  const keywordsTag = `<meta name="keywords" content="${page.keywords.join(', ')}" />`;
  html = html.replace('</head>', `  ${keywordsTag}\n  </head>`);

  // Add page-specific Open Graph tags (og:type, og:locale, og:site_name already in index.html)
  const ogTags = `
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${BASE_URL}/og-image.jpg" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
  `;
  html = html.replace('</head>', `${ogTags}</head>`);

  // Add Twitter Card tags
  const twitterTags = `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${BASE_URL}/og-image.jpg" />
  `;
  html = html.replace('</head>', `${twitterTags}</head>`);

  // Note: hreflang and preconnect tags are already defined in index.html
  // Note: LocalBusiness and WebSite schemas are already defined in index.html
  // SSR only adds BreadcrumbList for page-specific navigation

  // Add BreadcrumbList schema
  const breadcrumbParts = pagePath.split('/').filter(p => p);
  if (breadcrumbParts.length > 0) {
    const breadcrumbItems = [
      {"@type": "ListItem", "position": 1, "name": "Home", "item": BASE_URL}
    ];
    let currentPath = '';
    breadcrumbParts.forEach((part, index) => {
      currentPath += '/' + part;
      breadcrumbItems.push({
        "@type": "ListItem",
        "position": index + 2,
        "name": part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
        "item": BASE_URL + currentPath
      });
    });
    const breadcrumbSchema = {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": breadcrumbItems
    };
    const breadcrumbScript = `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`;
    html = html.replace('</head>', `${breadcrumbScript}\n</head>`);
  }

  // Add Service schema if page has one
  if (page.serviceSchema) {
    const serviceSchema = {
      "@context": "https://schema.org",
      "@type": "Service",
      "name": page.serviceSchema.name,
      "description": page.serviceSchema.description,
      "serviceType": page.serviceSchema.serviceType,
      "provider": {
        "@type": "LocalBusiness",
        "@id": `${BASE_URL}/#organization`,
        "name": "AquaPro 24",
        "telephone": "+49 89 444438872",
        "address": {
          "@type": "PostalAddress",
          "streetAddress": "Hardenbergstr. 4",
          "addressLocality": "München",
          "postalCode": "80992",
          "addressCountry": "DE"
        }
      },
      "areaServed": {
        "@type": "City",
        "name": page.serviceSchema.areaServed || "München",
        "@id": "https://www.wikidata.org/wiki/Q1726"
      },
      "url": canonicalUrl,
      ...(page.serviceSchema.priceRange ? { "priceRange": page.serviceSchema.priceRange } : {}),
      "availableChannel": {
        "@type": "ServiceChannel",
        "serviceUrl": `${BASE_URL}/termin`,
        "servicePhone": {
          "@type": "ContactPoint",
          "telephone": "+49 89 444438872",
          "contactType": "customer service",
          "availableLanguage": ["de", "en", "tr"]
        }
      }
    };
    const serviceScript = `<script type="application/ld+json">${JSON.stringify(serviceSchema)}</script>`;
    html = html.replace('</head>', `${serviceScript}\n</head>`);
  }

  // Add FAQPage schema if page has FAQs
  if (page.faqs && page.faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": page.faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    };
    const faqScript = `<script type="application/ld+json">${JSON.stringify(faqSchema)}</script>`;
    html = html.replace('</head>', `${faqScript}\n</head>`);
  }

  // Replace robots meta tag with extended version
  html = html.replace(
    /<meta name="robots" content="[^"]*" \/>/,
    `<meta name="robots" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />`
  );

  // Inject content into root div
  const lastUpdated = '7. Februar 2026';
  const fullContent = `
    ${baseContent}
    <main style="font-family:system-ui,-apple-system,sans-serif;color:#333">
      <h1 style="font-size:32px;padding:40px 20px 0;max-width:1200px;margin:0 auto">${page.h1}</h1>
      ${page.content}
      <p style="max-width:1200px;margin:20px auto 0;padding:0 20px;font-size:13px;color:#888">Zuletzt aktualisiert: ${lastUpdated}</p>
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
    // Google bots
    'googlebot',
    'googlebot-image',
    'googlebot-news',
    'googlebot-video',
    'google-inspectiontool',
    'google-extended',
    'adsbot-google',
    'mediapartners-google',
    'storebot-google',
    // Bing bots
    'bingbot',
    'msnbot',
    'bingpreview',
    // Other search engines
    'yandexbot',
    'yandexmobilebot',
    'duckduckbot',
    'slurp',
    'baiduspider',
    'sogou',
    // Social media bots
    'facebookexternalhit',
    'facebookcatalog',
    'twitterbot',
    'linkedinbot',
    'pinterest',
    'whatsapp',
    'telegrambot',
    'discordbot',
    'slackbot',
    // Apple
    'applebot',
    'applebot-extended',
    // AI bots
    'gptbot',
    'chatgpt-user',
    'claude',
    'claudebot',
    'anthropic-ai',
    'perplexitybot',
    'cohere-ai',
    'amazonbot',
    'meta-externalagent',
    // SEO tools
    'semrushbot',
    'ahrefsbot',
    'mj12bot',
    'dotbot',
    'petalbot',
    'bytespider',
    'rogerbot',
    'screaming frog',
    'sistrix',
    'seokicks',
    'xovibot',
    'blexbot',
    // Web archives
    'archive.org_bot',
    'ia_archiver',
    // Other crawlers
    'uptimerobot',
    'pingdom',
    'gtmetrix',
    'lighthouse',
    'pagespeed'
  ];
  
  const ua = userAgent.toLowerCase();
  return botPatterns.some(pattern => ua.includes(pattern));
}
