// Static SEO content for search engine crawlers
// This provides full HTML content when prerender.io fails
import { seoMeta } from "../shared/seoMeta";

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
      <p style="margin-top:20px;color:#888">© 2026 AquaPro 24. Alle Rechte vorbehalten.</p>
    </div>
  </footer>
`;

export const seoPages: Record<string, PageSEO> = {
  '/': {
    ...seoMeta['/'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px;line-height:1.6">Willkommen bei AquaPro 24 – Ihrem zuverlässigen <strong>Klempner & Sanitärinstallateur in München</strong>. Unser Partnernetzwerk bietet seit 2005 professionellen Service für <strong>Sanitär, Heizung und Badsanierung</strong> in München und Umgebung. Über 2.847 zufriedene Kunden vertrauen uns.</p>
        
        <h2>Klempner München: Unsere Leistungen 2026</h2>
        <ul style="line-height:2">
          <li><a href="/sanitaer"><strong>Sanitärinstallateur München</strong></a> – Rohrreinigung, Armaturen austauschen, Wasserschaden, WC Reparatur ab 81€</li>
          <li><a href="/armaturen"><strong>Armaturen & Wasserhahn wechseln München</strong></a> – Grohe, Hansgrohe, HANSA Montage, Kleinteile-Service ab 89€</li>
          <li><a href="/rohrreinigung"><strong>Rohrreinigung München</strong></a> – Abfluss verstopft, WC verstopft, Kanalreinigung ab 81€</li>
          <li><a href="/heizung"><strong>Heizungsreparatur München</strong></a> – Wartung, Reparatur, Austausch aller Marken ab 154€</li>
          <li><a href="/bad"><strong>Badsanierung München</strong></a> – Komplettumbau, barrierefreies Bad, KfW-Förderung</li>
          <li><a href="/waermepumpe"><strong>Wärmepumpe München</strong></a> – Einbau, BAFA-Förderung bis 70%, KfW 458</li>
          <li><a href="/warmwasser"><strong>Durchlauferhitzer & Boiler München</strong></a> – Reparatur, Installation, kein Warmwasser</li>
          <li><a href="/fussbodenheizung-muenchen"><strong>Fußbodenheizung München</strong></a> – Nachrüsten, Spülung, Reparatur</li>
          <li><a href="/notdienst-muenchen"><strong>Klempner Notdienst München 24/7</strong></a> – Rohrbruch, Wasserschaden, Heizungsausfall</li>
        </ul>
        
        <h2>Sanitärinstallateur München – Armaturen, Kleinteile & Reparaturen</h2>
        <p>Unser <strong>Sanitärinstallateur-Service</strong> in München umfasst alle Arbeiten rund um Ihre Sanitäranlagen: <strong>Wasserhahn wechseln</strong>, Mischbatterie austauschen, Küchenarmatur montieren, Duscharmatur reparieren. Auch für <strong>Kleinteile-Dienst</strong>: Dichtung wechseln, Siphon tauschen, Eckventil erneuern, Perlator wechseln. Wir arbeiten mit allen Marken: Grohe, Hansgrohe, HANSA, Geberit, Ideal Standard.</p>
        
        <h2>Klempner München Kosten & Preise 2026</h2>
        <ul style="line-height:2">
          <li><strong>Rohrreinigung München:</strong> ab 81€ Festpreis</li>
          <li><strong>Armaturen wechseln:</strong> ab 89€ inkl. Montage</li>
          <li><strong>Sanitär Reparatur:</strong> ab 92€ (Kleinteile, Dichtung, Siphon)</li>
          <li><strong>Heizungsreparatur:</strong> ab 154€ alle Marken</li>
          <li><strong>Durchlauferhitzer:</strong> ab 120€ Reparatur</li>
          <li><strong>Notdienst München:</strong> Festpreis ohne Nacht-/Wochenendaufschlag</li>
        </ul>
        
        <h2>Warum AquaPro 24 – Ihr Klempner in München?</h2>
        <ul style="line-height:2">
          <li>✓ Über 2.847 zufriedene Kunden seit 2005</li>
          <li>✓ 4,9/5 Sterne Google-Bewertung</li>
          <li>✓ Geprüfte Sanitärinstallateure & Heizungsbauer</li>
          <li>✓ Festpreisgarantie – keine versteckten Kosten</li>
          <li>✓ 2 Jahre Garantie auf alle Arbeiten</li>
          <li>✓ Anfahrt in 30-45 Minuten im Großraum München</li>
          <li>✓ 24/7 Notdienst – auch Wochenende & Feiertag</li>
          <li>✓ Seriös & ohne Abzocke – transparente Preise</li>
        </ul>
        
        <h2>Klempner München: Alle Stadtteile</h2>
        <p>Unser <strong>Sanitärinstallateur</strong> ist in allen Münchner Stadtteilen für Sie da:</p>
        <p><a href="/schwabing">Klempner Schwabing</a>, <a href="/bogenhausen">Klempner Bogenhausen</a>, <a href="/sendling">Klempner Sendling</a>, <a href="/pasing">Klempner Pasing</a>, <a href="/maxvorstadt">Klempner Maxvorstadt</a>, <a href="/haidhausen">Klempner Haidhausen</a>, <a href="/neuhausen">Klempner Neuhausen</a>, <a href="/nymphenburg">Klempner Nymphenburg</a>, <a href="/lehel">Klempner Lehel</a>, <a href="/trudering">Klempner Trudering</a>, <a href="/laim">Klempner Laim</a>, <a href="/giesing">Klempner Giesing</a>, <a href="/moosach">Klempner Moosach</a>, <a href="/milbertshofen">Klempner Milbertshofen</a>, <a href="/perlach">Klempner Perlach</a>, <a href="/solln">Klempner Solln</a>, <a href="/au">Klempner Au</a>, <a href="/berg-am-laim">Klempner Berg am Laim</a>, <a href="/schwanthalerhoehe">Klempner Schwanthalerhöhe</a>, <a href="/thalkirchen">Klempner Thalkirchen</a>, <a href="/ramersdorf">Klempner Ramersdorf</a>, <a href="/allach">Klempner Allach</a>, <a href="/aubing">Klempner Aubing</a>, <a href="/feldmoching">Klempner Feldmoching</a>, <a href="/freimann">Klempner Freimann</a>, <a href="/hadern">Klempner Hadern</a></p>
        <p>Außerdem: Dachau, Freising, Starnberg, Fürstenfeldbruck, Erding, Garching, Unterschleißheim, Ottobrunn, Germering.</p>
        
        <h2>Klempner München – Jetzt Termin buchen</h2>
        <p>Buchen Sie Ihren <a href="/termin"><strong>Wunschtermin online</strong></a> oder rufen Sie Ihren <strong>Sanitärinstallateur in München</strong> direkt an: <a href="tel:+4989444438872"><strong>089 444438872</strong></a></p>
      </section>
    `
  },
  '/sanitaer': {
    ...seoMeta['/sanitaer'],
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
        <p style="font-size:20px">Ihr <strong>Sanitärinstallateur in München</strong> – professionelle Sanitärinstallationen von der Rohrreinigung über Armaturen austauschen bis zur kompletten Wasserinstallation. Schnelle Hilfe bei Notfällen, faire Festpreise, 24/7 Notdienst.</p>
        
        <h2>Sanitärinstallateur München: Komplett-Service 2026</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrreinigung München</strong></span> – Abfluss verstopft Soforthilfe ab 81€</h3>
        <p>Professionelle <strong>Rohrreinigung</strong> mit Spirale oder Hochdruck. Küche, Bad, WC, Dusche – schnelle Hilfe bei verstopften Abflüssen. Kanalreinigung, TV-Kanalinspektion, Hochdruckspülung. <a href="/rohrreinigung">Mehr zur Rohrreinigung München</a></p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Armaturen austauschen München</strong></span> – Wasserhahn wechseln & Montage ab 89€</h3>
        <p><strong>Wasserhahn tropft</strong>? Mischbatterie defekt? Küchenarmatur wechseln? Unser Sanitärinstallateur montiert alle Armaturen-Marken: Grohe, Hansgrohe, HANSA, Geberit, Ideal Standard, Blanco. Einhebelmischer, Thermostatarmatur, Niederdruck-Armatur. <a href="/armaturen">Mehr zu Armaturen München</a></p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Kleinteile-Dienst München</strong></span> – Dichtung, Siphon, Eckventil ab 45€</h3>
        <p>Schneller <strong>Kleinteile-Service</strong> vom Sanitärinstallateur: Dichtung wechseln, Siphon tauschen, Eckventil erneuern, Perlator wechseln, Brauseschlauch erneuern. Kleinreparaturen schnell & günstig.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrbruch München</strong></span> – Notdienst & Leckortung 24/7</h3>
        <p><strong>Wasserschaden</strong> durch Rohrbruch? Wasserrohr geplatzt? Leckortung ohne Aufbruch, schnelle Reparatur, Trocknungsservice. <a href="/sanitaer-notdienst-24">Sanitär Notdienst 24/7</a></p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>WC & Toilette München</strong></span> – Installation, Reparatur & Verstopfung</h3>
        <p><strong>Toilette verstopft</strong>? WC Spülkasten defekt? Toilette läuft nach? Neue WC-Installation, Wand-WC montieren, Geberit Unterputz-Spülkasten. Schnell und zuverlässig.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Waschbecken & Spüle München</strong></span> – Montage & Anschluss</h3>
        <p>Waschbecken montieren, Spüle einbauen, Küchenspüle anschließen. Sanitärinstallateur für Neuinstallation und Austausch in München.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Wasserleitung München</strong></span> – Reparatur & Installation</h3>
        <p>Wasserleitung reparieren, Wasseranschluss herstellen, Wasserfilter einbauen. Gas Wasserinstallateur für alle Leitungsarbeiten.</p>
        
        <h2>Sanitär München Kosten & Preise 2026</h2>
        <ul>
          <li><strong>Rohrreinigung München:</strong> ab 81€ Festpreis</li>
          <li><strong>Armaturen wechseln:</strong> ab 89€ inkl. Montage</li>
          <li><strong>Kleinteile-Dienst:</strong> ab 45€ (Dichtung, Siphon, Eckventil)</li>
          <li><strong>Sanitär-Reparaturen:</strong> ab 92€ Festpreis</li>
          <li><strong>WC-Reparatur:</strong> ab 92€ Festpreis</li>
          <li><strong>Anfahrt München:</strong> 39€</li>
          <li><strong>Notdienst:</strong> kein Nacht-/Wochenendaufschlag</li>
        </ul>
        
        <h2>Sanitärinstallateur München – Garantie & Qualität</h2>
        <p>2 Jahre Garantie auf alle Arbeiten. Geprüfte Sanitärinstallateure im Partnernetzwerk. Festpreise ohne versteckte Kosten. Seit 2005, 2.800+ zufriedene Kunden, 4,9 Sterne.</p>
        
        <h2>Sanitär Notdienst München 24/7</h2>
        <p>Rohrbruch? WC verstopft? Wasserschaden? Ihr <strong>Sanitärinstallateur</strong> ist rund um die Uhr für Sie da – auch nachts, am Wochenende und Feiertag. Seriös & ohne Abzocke.</p>
        <p>Jetzt anrufen: <a href="tel:+4989444438872"><strong>089 444438872</strong></a> | <a href="/termin">Online Termin buchen</a></p>
      </section>
    `
  },
  '/heizung': {
    ...seoMeta['/heizung'],
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
        <p>Fußbodenheizung verlegen, spülen, entlüften, reparieren. <a href="/fussbodenheizung-muenchen">Alle Infos</a></p>
        
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
    ...seoMeta['/bad'],
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
    ...seoMeta['/waermepumpe'],
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
        
        <h2>BAFA Förderung 2026 München: Bis zu 70% Zuschuss</h2>
        
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
    ...seoMeta['/notdienst-muenchen'],
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
    ...seoMeta['/termin'],
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
    ...seoMeta['/kontakt'],
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
    ...seoMeta['/faq'],
    content: `
      <script type="application/ld+json">
      {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        "@id": "https://aquapro24.de/faq#faq",
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
    ...seoMeta['/ueber-uns'],
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
    ...seoMeta['/impressum'],
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
    ...seoMeta['/datenschutz'],
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
    ...seoMeta['/agb'],
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
    ...seoMeta['/foerderung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px">Nutzen Sie die <strong>staatliche Förderung</strong> für Ihren Heizungstausch – bis zu 70% Zuschuss möglich!</p>
        
        <h2>BAFA Förderung 2026 München: Bis zu 70% Zuschuss</h2>
        
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
    ...seoMeta['/haustechnik'],
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
    ...seoMeta['/armaturen'],
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
    ...seoMeta['/rohrreinigung'],
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
    ...seoMeta['/warmwasser'],
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
    ...seoMeta['/badsanierung'],
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
    ...seoMeta['/sanitaer-notdienst-24'],
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
    ...seoMeta['/heizung-notdienst-24'],
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
    ...seoMeta['/sanitaer-muenchen'],
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
    ...seoMeta['/heizung-muenchen'],
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
    ...seoMeta['/waermepumpe-muenchen'],
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
    ...seoMeta['/fussbodenheizung-muenchen'],
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
  '/badsanierung-muenchen': {
    ...seoMeta['/badsanierung-muenchen'],
    serviceSchema: {
      name: 'Badsanierung München - Planung & Umsetzung',
      description: 'Badsanierung München: Bestandsaufnahme, Ablaufplan, koordinierte Umsetzung. Modern, sauber geplant, stressfrei.',
      serviceType: 'Badsanierung',
      priceRange: '€€€',
      areaServed: 'München'
    },
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Badsanierung München</strong> – Komplettumbau stressfrei und modern. Von der Planung bis zur Übergabe.</p>
        
        <h2>Badsanierung Leistungen München</h2>
        
        <h3><span style="background:#e0f7fa;padding:2px 6px;border-radius:4px"><strong>Bestandsaufnahme & Beratung</strong></span></h3>
        <p>Professionelle Bestandsaufnahme Ihres Badezimmers. Individuelle Beratung zu Design, Material und Kosten.</p>
        
        <h3><span style="background:#e0f7fa;padding:2px 6px;border-radius:4px"><strong>Ablaufplanung & Koordination</strong></span></h3>
        <p>Detaillierter Ablaufplan mit festen Terminen. Koordination aller Gewerke aus einer Hand.</p>
        
        <h3><span style="background:#e0f7fa;padding:2px 6px;border-radius:4px"><strong>Teil- und Komplettsanierung</strong></span></h3>
        <p>Ob Teilsanierung oder Komplettumbau – wir begleiten Sie durch den gesamten Prozess.</p>
        
        <h2>Badsanierung München – Häufige Fragen</h2>
        <p><strong>Wie lange dauert eine Badsanierung?</strong> Je nach Umfang 2-4 Wochen. Nach der Bestandsaufnahme erhalten Sie einen konkreten Ablaufplan.</p>
        <p><strong>Was kostet eine Badsanierung?</strong> Die Kosten hängen von Größe, Ausstattung und Umfang ab. Transparente Einschätzung nach Sichtung.</p>
        
        <p><a href="/termin">Beratung buchen</a> | <a href="tel:+4989444438872">089 444438872</a></p>
      </section>
    `
  },
  '/fussbodenheizung': {
    ...seoMeta['/fussbodenheizung'],
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
    ...seoMeta['/foerderantrag'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Förderantrag-Service</strong> – Wir helfen Ihnen beim BAFA- und KfW-Antrag, komplett kostenlos!</p>
        <p><a href="/foerderung">Alle Förderungen</a> | <a href="/termin">Beratung buchen</a></p>
      </section>
    `
  },
  '/foerderantrag-heizung': {
    ...seoMeta['/foerderantrag-heizung'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Förderantrag-Service</strong> für Ihren Heizungstausch – wir übernehmen den BAFA-Antrag kostenlos!</p>
        <p><a href="/foerderung">Förderung Details</a> | <a href="/waermepumpe">Wärmepumpen</a></p>
      </section>
    `
  },
  '/foerderrechner': {
    ...seoMeta['/foerderrechner'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p><strong>Förderrechner</strong> – Berechnen Sie Ihren BAFA-Zuschuss für den Heizungstausch.</p>
        <p><a href="/foerderung">Alle Förderungen</a> | <a href="/termin">Beratung</a></p>
      </section>
    `
  },
  // === LEGAL/UTILITY PAGES ===
  '/barrierefreiheit': {
    ...seoMeta['/barrierefreiheit'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p>AquaPro 24 ist bestrebt, seine Website barrierefrei zu gestalten gemäß WCAG 2.1 AA und BITV 2.0.</p>
        <p>Feedback: <a href="tel:+4989444438872">089 444438872</a> | info@aquapro24.de</p>
      </section>
    `
  },
  '/cookie-richtlinie': {
    ...seoMeta['/cookie-richtlinie'],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p>Informationen zu den auf dieser Website verwendeten Cookies.</p>
        <p><a href="/datenschutz">Datenschutzerklärung</a></p>
      </section>
    `
  },
  '/ratgeber': {
    ...seoMeta['/ratgeber'],
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
    title: `Klempner ${st.name} München | Sanitärinstallateur Notdienst 24/7 Festpreis 2026 | AquaPro 24`,
    description: `Klempner ${st.name} München ✓ Sanitärinstallateur ✓ Notdienst 24/7 ✓ Rohrreinigung ab 81€ ✓ Heizungsreparatur ab 154€ ✓ Armaturen ✓ 30 Min Anfahrt ${st.plz}. Tel: 089 444438872`,
    h1: `Klempner ${st.name} München – Sanitärinstallateur & Notdienst 24/7`,
    keywords: [
      `Klempner ${st.name}`, `Klempner ${st.name} München`, `Klempner München ${st.name}`,
      `Sanitär ${st.name}`, `Sanitär ${st.name} München`, `Sanitärinstallateur ${st.name}`,
      `Sanitärinstallateur ${st.name} München`, `Sanitärinstallateure ${st.name}`,
      `Installateur ${st.name}`, `Installateur ${st.name} München`,
      `Heizung ${st.name}`, `Heizung ${st.name} München`, `Heizungsreparatur ${st.name}`,
      `Heizungswartung ${st.name}`, `Heizungsbauer ${st.name}`, `Heizungsinstallateur ${st.name}`,
      `Notdienst ${st.name}`, `Notdienst ${st.name} München`, `Klempner Notdienst ${st.name}`,
      `Sanitär Notdienst ${st.name}`, `Heizung Notdienst ${st.name}`,
      `Rohrreinigung ${st.name}`, `Rohrreinigung ${st.name} München`,
      `Abfluss verstopft ${st.name}`, `WC verstopft ${st.name}`, `Toilette verstopft ${st.name}`,
      `Rohrbruch ${st.name}`, `Rohrbruch ${st.name} München`,
      `Wasserschaden ${st.name}`, `Wasserschaden ${st.name} München`,
      `Armaturen ${st.name}`, `Wasserhahn wechseln ${st.name}`, `Armaturen austauschen ${st.name}`,
      `Badsanierung ${st.name}`, `Badsanierung ${st.name} München`, `Badumbau ${st.name}`,
      `Wärmepumpe ${st.name}`, `Wärmepumpe ${st.name} München`,
      `Durchlauferhitzer ${st.name}`, `Boiler ${st.name}`, `kein Warmwasser ${st.name}`,
      `Fußbodenheizung ${st.name}`, `Fußbodenheizung ${st.name} München`,
      `Gas Wasserinstallateur ${st.name}`, `SHK ${st.name}`,
      `Klempner ${st.plz}`, `Sanitär ${st.plz}`, `Installateur ${st.plz}`,
      `Handwerker ${st.name} München`, `Klempner in der Nähe ${st.name}`,
    ],
    content: `
      <section style="padding:40px 20px;max-width:1200px;margin:0 auto">
        <p style="font-size:20px"><strong>Klempner & Sanitärinstallateur in ${st.name}</strong> – Ihr zuverlässiger Sanitär- und Heizungsservice für ${st.plz} München. Festpreise, schnelle Anfahrt, 24/7 Notdienst.</p>
        
        <h2>Sanitärinstallateur ${st.name} München: Alle Leistungen 2026</h2>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Rohrreinigung ${st.name} München</strong></span> – Abfluss verstopft? Soforthilfe ab 81€</h3>
        <p>Professionelle Rohrreinigung in ${st.name} (${st.plz}): Küche, Bad, WC, Dusche – schnelle Hilfe bei verstopftem Abfluss. Kanalreinigung, TV-Inspektion, Hochdruckspülung. Festpreis ab 81€, Anfahrt in 30 Minuten.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Armaturen & Wasserhahn wechseln ${st.name}</strong></span> – Montage ab 89€</h3>
        <p>Armaturen austauschen in ${st.name}: Wasserhahn, Mischbatterie, Küchenarmatur, Duscharmatur. Grohe, Hansgrohe, HANSA Montage. Kleinteile-Service: Dichtung, Siphon, Eckventil, Perlator wechseln.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Sanitärinstallation ${st.name} München</strong></span> – Komplett-Service</h3>
        <p>Sanitärinstallateur in ${st.name}: Waschbecken montieren, WC einbauen, Spüle anschließen, Dusche installieren, Wasseranschluss herstellen. Reparatur & Neuinstallation.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Heizungsreparatur ${st.name} München</strong></span> – Alle Marken ab 154€</h3>
        <p>Heizungsservice in ${st.name}: Viessmann, Buderus, Vaillant, Wolf, Junkers. Wartung, Reparatur, Austausch. Gastherme, Brennwerttherme, Ölheizung. Heizkörper tauschen, Thermostat wechseln, Heizung entlüften.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Wärmepumpe ${st.name} München</strong></span> – BAFA-Förderung bis 70%</h3>
        <p>Wärmepumpe installieren in ${st.name}: Luft-Wasser-Wärmepumpe, Erdwärmepumpe. BAFA-Förderung 2026 bis 70%, KfW 458 Kredit. Kostenlose Beratung.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Badsanierung ${st.name} München</strong></span> – Komplettumbau</h3>
        <p>Badsanierung in ${st.name}: Badumbau, barrierefreies Bad, bodengleiche Dusche, Badewanne zu Dusche. KfW-Förderung. Festpreis ab 16.000€.</p>
        
        <h3><span style="background:#fff3e0;padding:2px 6px;border-radius:4px"><strong>Durchlauferhitzer & Boiler ${st.name}</strong></span> – Warmwasser-Service</h3>
        <p>Kein Warmwasser in ${st.name}? Durchlauferhitzer reparieren, Boiler austauschen, Warmwasserspeicher einbauen. Stiebel Eltron, Vaillant, AEG. Ab 120€.</p>
        
        <h3><span style="background:#ffebee;padding:2px 6px;border-radius:4px"><strong>Notdienst ${st.name} München 24/7</strong></span> – Soforthilfe bei Rohrbruch & Heizungsausfall</h3>
        <p>Klempner Notdienst in ${st.name}: Rohrbruch, Wasserschaden, WC verstopft, Heizung ausgefallen. 24/7 erreichbar, 30 Minuten Anfahrt, Festpreis, seriös & ohne Abzocke. Auch nachts, Wochenende & Feiertag.</p>
        
        <h2>Klempner ${st.name}: Preise & Kosten 2026</h2>
        <ul>
          <li><strong>Rohrreinigung ${st.name}:</strong> ab 81€ (Küche, Bad, WC)</li>
          <li><strong>Armaturen wechseln ${st.name}:</strong> ab 89€ (Wasserhahn, Mischbatterie)</li>
          <li><strong>Sanitär Reparatur ${st.name}:</strong> ab 92€ (Dichtung, Siphon, Kleinteile)</li>
          <li><strong>Heizungsreparatur ${st.name}:</strong> ab 154€ (alle Marken)</li>
          <li><strong>Durchlauferhitzer ${st.name}:</strong> ab 120€ (Reparatur & Austausch)</li>
          <li><strong>Notdienst ${st.name}:</strong> Festpreis, kein Nacht-/Wochenendaufschlag</li>
        </ul>
        
        <h2>Warum AquaPro 24 in ${st.name}?</h2>
        <ul>
          <li>✓ <strong>2.800+ zufriedene Kunden</strong> in München seit 2005</li>
          <li>✓ <strong>4,9 Sterne</strong> Google-Bewertung</li>
          <li>✓ <strong>Festpreis</strong> vor Arbeitsbeginn – ohne versteckte Kosten</li>
          <li>✓ <strong>30 Min Anfahrt</strong> nach ${st.name} (${st.plz})</li>
          <li>✓ <strong>2 Jahre Garantie</strong> auf alle Arbeiten</li>
          <li>✓ <strong>Geprüfte Meisterbetriebe</strong> im Partnernetzwerk</li>
        </ul>
        
        <h2>Anfahrtszeit ${st.name}: 30 Minuten</h2>
        <p>Unser Klempner & Sanitärinstallateur ist in ${st.name} (${st.plz} München) schnell für Sie da – auch im Notdienst 24/7.</p>
        <p><strong>Jetzt anrufen:</strong> <a href="tel:+4989444438872"><strong>089 444438872</strong></a> | <a href="/termin"><strong>Online Termin buchen</strong></a></p>
      </section>
    `
  };
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

  // Canonical-Bündelung: Duplikate auf Hauptseite zeigen
  const CANONICAL_OVERRIDES: Record<string, string> = {
    '/badsanierung': '/bad',
  };
  
  let canonicalPath = normalizedPath;
  if (CANONICAL_OVERRIDES[normalizedPath]) {
    canonicalPath = CANONICAL_OVERRIDES[normalizedPath];
  } else if (normalizedPath.startsWith('/stadtteil/')) {
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

  const ogImageAltText = `${page.title} - AquaPro 24 Sanitär Heizung München`;
  const ogTags = `
    <meta property="og:title" content="${page.title}" />
    <meta property="og:description" content="${page.description}" />
    <meta property="og:url" content="${canonicalUrl}" />
    <meta property="og:image" content="${BASE_URL}/images/hero-fast.webp" />
    <meta property="og:image:width" content="1200" />
    <meta property="og:image:height" content="630" />
    <meta property="og:image:type" content="image/webp" />
    <meta property="og:image:alt" content="${ogImageAltText}" />
  `;
  html = html.replace('</head>', `${ogTags}</head>`);

  const twitterTags = `
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content="${page.title}" />
    <meta name="twitter:description" content="${page.description}" />
    <meta name="twitter:image" content="${BASE_URL}/images/hero-fast.webp" />
    <meta name="twitter:image:alt" content="${ogImageAltText}" />
  `;
  html = html.replace('</head>', `${twitterTags}</head>`);

  // Seitenspezifische hreflang-Tags injizieren
  const hreflangTags = `
    <link rel="alternate" hreflang="de" href="${canonicalUrl}" />
    <link rel="alternate" hreflang="x-default" href="${canonicalUrl}" />
  `;
  html = html.replace('</head>', `${hreflangTags}</head>`);

  // Note: LocalBusiness and WebSite schemas are already defined in index.html
  // SSR only adds BreadcrumbList for page-specific navigation

  const breadcrumbNameMap: Record<string, string> = {
    'sanitaer': 'Sanitär',
    'heizung': 'Heizung',
    'bad': 'Badsanierung',
    'waermepumpe': 'Wärmepumpe',
    'haustechnik': 'Haustechnik',
    'rohrreinigung': 'Rohrreinigung',
    'armaturen': 'Armaturen',
    'warmwasser': 'Warmwasser',
    'sanitaer-muenchen': 'Sanitär München',
    'heizung-muenchen': 'Heizung München',
    'badsanierung-muenchen': 'Badsanierung München',
    'waermepumpe-muenchen': 'Wärmepumpe München',
    'fussbodenheizung-muenchen': 'Fußbodenheizung München',
    'sanitaer-notdienst-24': 'Sanitär Notdienst 24h',
    'heizung-notdienst-24': 'Heizung Notdienst 24h',
    'notdienst-muenchen': 'Notdienst München',
    'foerderung': 'Förderung',
    'foerderantrag': 'Förderantrag',
    'foerderantrag-heizung': 'Förderantrag Heizung',
    'foerderrechner': 'Förderrechner',
    'termin': 'Termin buchen',
    'kontakt': 'Kontakt',
    'ueber-uns': 'Über uns',
    'faq': 'FAQ & Preise',
    'ratgeber': 'Ratgeber',
    'impressum': 'Impressum',
    'agb': 'AGB',
    'datenschutz': 'Datenschutz',
    'cookie-richtlinie': 'Cookie-Richtlinie',
    'barrierefreiheit': 'Barrierefreiheit',
    'schwabing': 'Schwabing',
    'bogenhausen': 'Bogenhausen',
    'maxvorstadt': 'Maxvorstadt',
    'haidhausen': 'Haidhausen',
    'nymphenburg': 'Nymphenburg',
    'lehel': 'Lehel',
    'solln': 'Solln',
    'sendling': 'Sendling',
    'pasing': 'Pasing',
    'neuhausen': 'Neuhausen',
    'trudering': 'Trudering',
    'laim': 'Laim',
    'giesing': 'Giesing',
    'moosach': 'Moosach',
    'milbertshofen': 'Milbertshofen',
    'perlach': 'Perlach',
    'hadern': 'Hadern',
    'allach': 'Allach',
    'aubing': 'Aubing',
    'feldmoching': 'Feldmoching',
    'thalkirchen': 'Thalkirchen',
    'ramersdorf': 'Ramersdorf',
    'berg-am-laim': 'Berg am Laim',
    'schwanthalerhoehe': 'Schwanthalerhöhe',
    'au': 'Au',
    'freimann': 'Freimann',
    'muenchen-nord': 'München Nord',
    'muenchen-sued': 'München Süd',
    'muenchen-west': 'München West',
    'muenchen-ost': 'München Ost'
  };

  const breadcrumbParts = pagePath.split('/').filter(p => p);
  const breadcrumbItems = [
    {"@type": "ListItem", "position": 1, "name": "Startseite", "item": BASE_URL}
  ];
  let currentPath = '';
  breadcrumbParts.forEach((part, index) => {
    currentPath += '/' + part;
    breadcrumbItems.push({
      "@type": "ListItem",
      "position": index + 2,
      "name": breadcrumbNameMap[part] || part.charAt(0).toUpperCase() + part.slice(1).replace(/-/g, ' '),
      "item": BASE_URL + currentPath
    });
  });

  const breadcrumbId = `${canonicalUrl}#breadcrumb`;
  const breadcrumbSchema = breadcrumbParts.length > 0 ? {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "@id": breadcrumbId,
    "itemListElement": breadcrumbItems
  } : null;

  if (breadcrumbSchema) {
    const breadcrumbScript = `<script type="application/ld+json">${JSON.stringify(breadcrumbSchema)}</script>`;
    html = html.replace('</head>', `${breadcrumbScript}\n</head>`);
  }

  const webPageSchema: Record<string, any> = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${canonicalUrl}#webpage`,
    "url": canonicalUrl,
    "name": page.title,
    "description": page.description,
    "isPartOf": { "@id": `${BASE_URL}/#website` },
    "about": { "@id": `${BASE_URL}/#localbusiness` },
    ...(breadcrumbSchema ? { "breadcrumb": { "@id": breadcrumbId } } : {}),
    "author": {
      "@type": "Person",
      "@id": `${BASE_URL}/#founder`,
      "name": "Mustafa Sakar",
      "url": `${BASE_URL}/ueber-uns`
    },
    "publisher": { "@id": `${BASE_URL}/#organization` },
    "inLanguage": "de-DE",
    "datePublished": "2024-01-01",
    "dateModified": "2026-02-09",
    "lastReviewed": "2026-02-09",
    "speakable": {
      "@type": "SpeakableSpecification",
      "cssSelector": ["h1", ".hero-subtitle", ".emergency-phone", ".service-summary"]
    },
    "mainContentOfPage": {
      "@type": "WebPageElement",
      "cssSelector": "main"
    }
  };
  const webPageScript = `<script type="application/ld+json">${JSON.stringify(webPageSchema)}</script>`;
  html = html.replace('</head>', `${webPageScript}\n</head>`);

  // Stadtteil-spezifische Geo-Schemas für hyper-lokale Signale
  const stadtteilGeoData: Record<string, { lat: string; lng: string; plz: string[]; name: string }> = {
    '/schwabing': { lat: '48.1716', lng: '11.5820', plz: ['80799','80801','80802','80803','80804'], name: 'Schwabing' },
    '/bogenhausen': { lat: '48.1520', lng: '11.6120', plz: ['81675','81677','81679','81925','81927','81929'], name: 'Bogenhausen' },
    '/sendling': { lat: '48.1150', lng: '11.5530', plz: ['81369','81371','81373'], name: 'Sendling' },
    '/pasing': { lat: '48.1410', lng: '11.4550', plz: ['81241','81243','81245'], name: 'Pasing' },
    '/maxvorstadt': { lat: '48.1530', lng: '11.5650', plz: ['80333','80335','80539','80799'], name: 'Maxvorstadt' },
    '/haidhausen': { lat: '48.1310', lng: '11.5970', plz: ['81667','81669','81671'], name: 'Haidhausen' },
    '/neuhausen': { lat: '48.1580', lng: '11.5290', plz: ['80634','80636','80637','80638','80639'], name: 'Neuhausen' },
    '/laim': { lat: '48.1380', lng: '11.4990', plz: ['80686','80687'], name: 'Laim' },
    '/giesing': { lat: '48.1080', lng: '11.5820', plz: ['81539','81541','81543','81547'], name: 'Giesing' },
    '/trudering': { lat: '48.1260', lng: '11.6550', plz: ['81825','81827','81829'], name: 'Trudering' },
    '/milbertshofen': { lat: '48.1850', lng: '11.5650', plz: ['80807','80809','80937','80939'], name: 'Milbertshofen' },
    '/moosach': { lat: '48.1820', lng: '11.5100', plz: ['80992','80993','80997'], name: 'Moosach' },
    '/freimann': { lat: '48.1950', lng: '11.5750', plz: ['80807','80809','80937','80939','80992'], name: 'Freimann' },
    '/westpark': { lat: '48.1200', lng: '11.5350', plz: ['81369','81371','81539','81541'], name: 'Westpark' },
    '/obermenzing': { lat: '48.1680', lng: '11.4560', plz: ['81241','81243','80686','80687'], name: 'Obermenzing' },
    '/berg-am-laim': { lat: '48.1350', lng: '11.6200', plz: ['81675','81677','81825','81827'], name: 'Berg am Laim' },
    '/nymphenburg': { lat: '48.1580', lng: '11.4900', plz: ['80638','80639','80997'], name: 'Nymphenburg' },
    '/ramersdorf': { lat: '48.1100', lng: '11.6100', plz: ['81735','81737','81739'], name: 'Ramersdorf' },
    '/solln': { lat: '48.0820', lng: '11.5300', plz: ['81477','81479'], name: 'Solln' },
    '/hadern': { lat: '48.1100', lng: '11.4800', plz: ['80689','81375','81377'], name: 'Hadern' },
    '/allach': { lat: '48.1880', lng: '11.4500', plz: ['80999','81249'], name: 'Allach' },
    '/aubing': { lat: '48.1500', lng: '11.4100', plz: ['81243','81245','81249'], name: 'Aubing' },
    '/feldmoching': { lat: '48.2100', lng: '11.5300', plz: ['80933','80935','80995'], name: 'Feldmoching' },
    '/thalkirchen': { lat: '48.0960', lng: '11.5500', plz: ['81379','81475','81476'], name: 'Thalkirchen' },
    '/perlach': { lat: '48.0900', lng: '11.6200', plz: ['81669','81671','81735','81737'], name: 'Perlach' },
    '/au': { lat: '48.1230', lng: '11.5900', plz: ['81671','81673','81677'], name: 'Au' },
    '/ludwigsvorstadt': { lat: '48.1350', lng: '11.5580', plz: ['80339','80336','80337'], name: 'Ludwigsvorstadt' },
    '/untergiesing': { lat: '48.1150', lng: '11.5780', plz: ['81541','81543','81667'], name: 'Untergiesing' },
    '/lehel': { lat: '48.1420', lng: '11.5880', plz: ['80538','80539'], name: 'Lehel' },
    '/schwabing-west': { lat: '48.1650', lng: '11.5600', plz: ['80805','80807','80939'], name: 'Schwabing-West' }
  };

  const stadtteilGeo = stadtteilGeoData[pagePath];
  if (stadtteilGeo) {
    const stadtteilSchema = {
      "@context": "https://schema.org",
      "@type": ["Plumber", "HVACBusiness"],
      "name": `AquaPro24 – Klempner & Heizung ${stadtteilGeo.name} München`,
      "description": `Sanitär, Heizung und Notdienst in ${stadtteilGeo.name} München. Festpreise, schnelle Anfahrt, 24/7 erreichbar.`,
      "url": `${BASE_URL}${pagePath}`,
      "telephone": "+49 89 444438872",
      "address": {
        "@type": "PostalAddress",
        "streetAddress": "Hardenbergstr. 4",
        "addressLocality": "München",
        "addressRegion": "Bayern",
        "postalCode": stadtteilGeo.plz[0],
        "addressCountry": "DE"
      },
      "geo": {
        "@type": "GeoCoordinates",
        "latitude": stadtteilGeo.lat,
        "longitude": stadtteilGeo.lng
      },
      "areaServed": {
        "@type": "Place",
        "name": `${stadtteilGeo.name}, München`,
        "geo": {
          "@type": "GeoCoordinates",
          "latitude": stadtteilGeo.lat,
          "longitude": stadtteilGeo.lng
        },
        "containedInPlace": {
          "@type": "City",
          "name": "München",
          "@id": "https://www.wikidata.org/wiki/Q1726"
        }
      },
      "parentOrganization": { "@id": `${BASE_URL}/#localbusiness` },
      "priceRange": "€€",
      "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "bestRating": "5",
        "ratingCount": "2847"
      }
    };
    const stadtteilScript = `<script type="application/ld+json">${JSON.stringify(stadtteilSchema)}</script>`;
    html = html.replace('</head>', `${stadtteilScript}\n</head>`);
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
        "@id": `${BASE_URL}/#localbusiness`,
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

  if (page.faqs && page.faqs.length > 0) {
    const faqSchema = {
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "@id": `${canonicalUrl}#faq`,
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

  // Geo-Meta-Tags für SSR (kritisch - JS-generierte Tags sieht Googlebot NICHT)
  const stadtteilGeoForMeta = stadtteilGeoData[normalizedPath];
  const geoLat = stadtteilGeoForMeta ? stadtteilGeoForMeta.lat : '48.1351';
  const geoLng = stadtteilGeoForMeta ? stadtteilGeoForMeta.lng : '11.5820';
  const geoPlacename = stadtteilGeoForMeta ? `${stadtteilGeoForMeta.name}, München` : 'München';
  
  const geoMetaTags = `
    <meta name="geo.region" content="DE-BY" />
    <meta name="geo.placename" content="${geoPlacename}" />
    <meta name="geo.position" content="${geoLat};${geoLng}" />
    <meta name="ICBM" content="${geoLat}, ${geoLng}" />
    <meta name="geo.country" content="DE" />
    <meta name="geo.a1" content="Bayern" />
    <meta name="geo.a2" content="München" />
    <meta property="place:location:latitude" content="${geoLat}" />
    <meta property="place:location:longitude" content="${geoLng}" />
    <meta property="business:contact_data:street_address" content="Hardenbergstr. 4" />
    <meta property="business:contact_data:locality" content="München" />
    <meta property="business:contact_data:region" content="Bayern" />
    <meta property="business:contact_data:postal_code" content="80992" />
    <meta property="business:contact_data:country_name" content="Deutschland" />
    <meta property="business:contact_data:phone_number" content="+49 89 444438872" />
    <meta name="author" content="Mustafa Sakar - AquaPro 24" />
    <meta name="publisher" content="AquaPro 24 - Mustafa Sakar" />
    <meta name="content-language" content="de-DE" />
    <meta name="language" content="de" />
    <meta name="revisit-after" content="3 days" />
    <meta name="rating" content="general" />
    <meta name="distribution" content="global" />
    <meta name="coverage" content="München, Landkreis München, Bayern, Deutschland" />
    <meta name="DC.coverage" content="München, Bayern, Deutschland" />
    <meta name="DC.coverage.spatial" content="München" />
    <meta name="googlebot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
    <meta name="bingbot" content="index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1" />
  `;
  html = html.replace('</head>', `${geoMetaTags}</head>`);

  // Inject content into root div
  const lastUpdated = '9. Februar 2026';
  
  // Interne Verlinkung für SSR - kontextuelle Links die Googlebot sehen muss
  const ssrLink = (href: string, text: string) => `<li><a href="${href}" style="color:#f97316">${text}</a></li>`;
  const ssrNav = (title: string, links: string) => `<nav aria-label="${title}" style="padding:20px;max-width:1200px;margin:20px auto;border-top:1px solid #eee">
    <h2 style="font-size:18px;margin-bottom:12px">${title}</h2>
    <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:8px">${links}</ul>
  </nav>`;
  const stadtteilLinks = `<h3 style="font-size:16px;margin:12px 0 8px">Klempner in Ihrem Stadtteil</h3>
    <ul style="list-style:none;padding:0;display:flex;flex-wrap:wrap;gap:6px;font-size:14px">
      <li><a href="/schwabing">Schwabing</a></li><li><a href="/bogenhausen">Bogenhausen</a></li>
      <li><a href="/sendling">Sendling</a></li><li><a href="/pasing">Pasing</a></li>
      <li><a href="/maxvorstadt">Maxvorstadt</a></li><li><a href="/haidhausen">Haidhausen</a></li>
      <li><a href="/neuhausen">Neuhausen</a></li><li><a href="/laim">Laim</a></li>
      <li><a href="/trudering">Trudering</a></li><li><a href="/giesing">Giesing</a></li>
      <li><a href="/solln">Solln</a></li><li><a href="/lehel">Lehel</a></li>
      <li><a href="/moosach">Moosach</a></li><li><a href="/perlach">Perlach</a></li>
      <li><a href="/hadern">Hadern</a></li><li><a href="/milbertshofen">Milbertshofen</a></li>
      <li><a href="/nymphenburg">Nymphenburg</a></li><li><a href="/allach">Allach</a></li>
      <li><a href="/aubing">Aubing</a></li><li><a href="/feldmoching">Feldmoching</a></li>
      <li><a href="/thalkirchen">Thalkirchen</a></li><li><a href="/ramersdorf">Ramersdorf</a></li>
      <li><a href="/berg-am-laim">Berg am Laim</a></li><li><a href="/schwanthalerhoehe">Schwanthalerhöhe</a></li>
      <li><a href="/au">Au</a></li><li><a href="/freimann">Freimann</a></li>
    </ul>`;

  const internalLinksMap: Record<string, string> = {
    '/': ssrNav('Weitere Services in München',
      ssrLink('/sanitaer', 'Sanitär-Service München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/bad', 'Badsanierung München') + ssrLink('/waermepumpe', 'Wärmepumpe installieren') +
      ssrLink('/notdienst-muenchen', '24/7 Notdienst München') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/ratgeber', 'Ratgeber & Tipps')
    ) + stadtteilLinks,
    '/sanitaer': ssrNav('Verwandte Leistungen',
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/armaturen', 'Armaturen & Wasserhähne') +
      ssrLink('/bad', 'Badsanierung komplett') + ssrLink('/warmwasser', 'Warmwasser-Lösungen') +
      ssrLink('/sanitaer-notdienst-24', 'Sanitär-Notdienst 24/7') + ssrLink('/sanitaer-muenchen', 'Sanitär in München') +
      ssrLink('/haustechnik', 'Haustechnik komplett') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/heizung': ssrNav('Verwandte Leistungen',
      ssrLink('/waermepumpe', 'Wärmepumpe München') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung') +
      ssrLink('/foerderung', 'Heizungsförderung 2026') + ssrLink('/foerderantrag-heizung', 'Förderantrag Heizung') +
      ssrLink('/foerderrechner', 'Förderrechner') + ssrLink('/heizung-notdienst-24', 'Heizung-Notdienst 24/7') +
      ssrLink('/heizung-muenchen', 'Heizung in München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/ratgeber', 'Heizungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/bad': ssrNav('Passende Services zur Badsanierung',
      ssrLink('/sanitaer', 'Sanitär-Installationen') + ssrLink('/armaturen', 'Premium-Armaturen') +
      ssrLink('/warmwasser', 'Warmwasser-Systeme') + ssrLink('/badsanierung-muenchen', 'Badsanierung München') +
      ssrLink('/foerderung', 'Förderung für Badsanierung') + ssrLink('/foerderrechner', 'Förderrechner') +
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Kostenlose Beratung')
    ),
    '/waermepumpe': ssrNav('Rund um Heizung & Förderung',
      ssrLink('/heizung', 'Heizungs-Service') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung') +
      ssrLink('/foerderung', 'Förderung 2026') + ssrLink('/foerderrechner', 'Förderrechner') +
      ssrLink('/foerderantrag-heizung', 'Förderantrag Heizung') + ssrLink('/waermepumpe-muenchen', 'Wärmepumpe München') +
      ssrLink('/haustechnik', 'Haustechnik komplett') + ssrLink('/ratgeber', 'Energie-Ratgeber') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/rohrreinigung': ssrNav('Weitere Sanitär-Leistungen',
      ssrLink('/sanitaer', 'Sanitär komplett') + ssrLink('/sanitaer-notdienst-24', '24h Notdienst Sanitär') +
      ssrLink('/armaturen', 'Armaturen-Service') + ssrLink('/bad', 'Badsanierung') +
      ssrLink('/warmwasser', 'Warmwasser-Lösungen') + ssrLink('/sanitaer-muenchen', 'Sanitär in München') +
      ssrLink('/notdienst-muenchen', 'Notdienst München 24/7') + ssrLink('/faq', 'FAQ & Preisübersicht') +
      ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/armaturen': ssrNav('Verwandte Leistungen',
      ssrLink('/sanitaer', 'Sanitär komplett') + ssrLink('/bad', 'Badsanierung München') +
      ssrLink('/warmwasser', 'Warmwasser-Lösungen') + ssrLink('/rohrreinigung', 'Rohrreinigung München') +
      ssrLink('/sanitaer-muenchen', 'Sanitär in München') + ssrLink('/badsanierung-muenchen', 'Badsanierung München') +
      ssrLink('/haustechnik', 'Haustechnik komplett') + ssrLink('/faq', 'FAQ & Preisübersicht') +
      ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/warmwasser': ssrNav('Verwandte Leistungen',
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/armaturen', 'Armaturen & Wasserhähne') + ssrLink('/bad', 'Badsanierung komplett') +
      ssrLink('/waermepumpe', 'Wärmepumpe München') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/sanitaer-muenchen', 'Sanitär in München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/haustechnik': ssrNav('Weitere Services in München',
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/waermepumpe', 'Wärmepumpe installieren') + ssrLink('/bad', 'Badsanierung komplett') +
      ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung München') + ssrLink('/rohrreinigung', 'Rohrreinigung München') +
      ssrLink('/foerderung', 'Förderung & Zuschüsse') + ssrLink('/notdienst-muenchen', '24/7 Notdienst München') +
      ssrLink('/ratgeber', 'Haustechnik-Ratgeber') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/notdienst-muenchen': ssrNav('Notdienst & weitere Services',
      ssrLink('/sanitaer-notdienst-24', 'Sanitär-Notdienst 24/7') + ssrLink('/heizung-notdienst-24', 'Heizung-Notdienst 24/7') +
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/sanitaer-muenchen', 'Sanitär in München') +
      ssrLink('/heizung-muenchen', 'Heizung in München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/faq', 'FAQ & Notdienst-Preise') + ssrLink('/kontakt', 'Kontakt aufnehmen')
    ),
    '/sanitaer-notdienst-24': ssrNav('Notdienst & Sanitär-Services',
      ssrLink('/notdienst-muenchen', 'Notdienst München 24/7') + ssrLink('/heizung-notdienst-24', 'Heizung-Notdienst 24/7') +
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/rohrreinigung', 'Rohrreinigung München') +
      ssrLink('/sanitaer-muenchen', 'Sanitär in München') + ssrLink('/armaturen', 'Armaturen & Wasserhähne') +
      ssrLink('/bad', 'Badsanierung München') + ssrLink('/faq', 'FAQ & Preisübersicht') +
      ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/heizung-notdienst-24': ssrNav('Notdienst & Heizungs-Services',
      ssrLink('/notdienst-muenchen', 'Notdienst München 24/7') + ssrLink('/sanitaer-notdienst-24', 'Sanitär-Notdienst 24/7') +
      ssrLink('/heizung', 'Heizungs-Service') + ssrLink('/heizung-muenchen', 'Heizung in München') +
      ssrLink('/waermepumpe', 'Wärmepumpe München') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung München') +
      ssrLink('/foerderung', 'Heizungsförderung') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/sanitaer-muenchen': ssrNav('Sanitär-Services in München',
      ssrLink('/sanitaer', 'Sanitär-Leistungen') + ssrLink('/rohrreinigung', 'Rohrreinigung München') +
      ssrLink('/armaturen', 'Armaturen & Wasserhähne') + ssrLink('/bad', 'Badsanierung München') +
      ssrLink('/warmwasser', 'Warmwasser-Lösungen') + ssrLink('/sanitaer-notdienst-24', 'Sanitär-Notdienst 24/7') +
      ssrLink('/notdienst-muenchen', 'Notdienst München') + ssrLink('/heizung-muenchen', 'Heizung München') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/heizung-muenchen': ssrNav('Heizungs-Services in München',
      ssrLink('/heizung', 'Heizungs-Leistungen') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/waermepumpe-muenchen', 'Wärmepumpe in München') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung München') +
      ssrLink('/foerderung', 'Heizungsförderung 2026') + ssrLink('/foerderantrag-heizung', 'Förderantrag Heizung') +
      ssrLink('/heizung-notdienst-24', 'Heizung-Notdienst 24/7') + ssrLink('/sanitaer-muenchen', 'Sanitär München') +
      ssrLink('/ratgeber', 'Heizungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/badsanierung-muenchen': ssrNav('Badsanierung & verwandte Services',
      ssrLink('/bad', 'Badsanierung Leistungen') + ssrLink('/sanitaer', 'Sanitär-Installationen') +
      ssrLink('/armaturen', 'Premium-Armaturen') + ssrLink('/warmwasser', 'Warmwasser-Systeme') +
      ssrLink('/foerderung', 'Förderung Badsanierung') + ssrLink('/foerderrechner', 'Förderrechner') +
      ssrLink('/sanitaer-muenchen', 'Sanitär München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Kostenlose Beratung')
    ),
    '/waermepumpe-muenchen': ssrNav('Wärmepumpe & Heizungs-Services',
      ssrLink('/waermepumpe', 'Wärmepumpe Leistungen') + ssrLink('/heizung', 'Heizungs-Service') +
      ssrLink('/heizung-muenchen', 'Heizung München') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung') +
      ssrLink('/foerderung', 'Förderung 2026') + ssrLink('/foerderantrag-heizung', 'Förderantrag Heizung') +
      ssrLink('/foerderrechner', 'Förderrechner') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/ratgeber', 'Energie-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/fussbodenheizung-muenchen': ssrNav('Heizung & verwandte Services',
      ssrLink('/heizung', 'Heizungs-Service') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/heizung-muenchen', 'Heizung München') + ssrLink('/waermepumpe-muenchen', 'Wärmepumpe München') +
      ssrLink('/foerderung', 'Heizungsförderung 2026') + ssrLink('/foerderantrag-heizung', 'Förderantrag Heizung') +
      ssrLink('/foerderrechner', 'Förderrechner') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/ratgeber', 'Heizungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/foerderung': ssrNav('Förderung & verwandte Leistungen',
      ssrLink('/foerderantrag', 'Förderantrag stellen') + ssrLink('/foerderantrag-heizung', 'Heizungs-Förderantrag') +
      ssrLink('/foerderrechner', 'Förderrechner') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/heizung', 'Heizung München') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung München') +
      ssrLink('/bad', 'Badsanierung München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/ratgeber', 'Förderungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/foerderantrag': ssrNav('Förderung & verwandte Leistungen',
      ssrLink('/foerderung', 'Alle Förderungen') + ssrLink('/foerderantrag-heizung', 'Heizungs-Förderantrag') +
      ssrLink('/foerderrechner', 'Förderrechner') + ssrLink('/waermepumpe', 'Wärmepumpe installieren') +
      ssrLink('/heizung', 'Heizungs-Service') + ssrLink('/bad', 'Badsanierung München') +
      ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/ratgeber', 'Förderungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/foerderantrag-heizung': ssrNav('Heizungsförderung & Services',
      ssrLink('/foerderung', 'Alle Förderungen') + ssrLink('/foerderantrag', 'Förderantrag allgemein') +
      ssrLink('/foerderrechner', 'Förderrechner') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/heizung', 'Heizungs-Service') + ssrLink('/heizung-muenchen', 'Heizung in München') +
      ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung') + ssrLink('/waermepumpe-muenchen', 'Wärmepumpe München') +
      ssrLink('/ratgeber', 'Heizungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/foerderrechner': ssrNav('Förderung & verwandte Services',
      ssrLink('/foerderung', 'Alle Förderungen') + ssrLink('/foerderantrag', 'Förderantrag stellen') +
      ssrLink('/foerderantrag-heizung', 'Heizungs-Förderantrag') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/heizung', 'Heizungs-Service') + ssrLink('/fussbodenheizung-muenchen', 'Fußbodenheizung') +
      ssrLink('/bad', 'Badsanierung München') + ssrLink('/haustechnik', 'Haustechnik komplett') +
      ssrLink('/ratgeber', 'Förderungs-Ratgeber') + ssrLink('/termin', 'Beratungstermin buchen')
    ),
    '/faq': ssrNav('Unsere Leistungen im Detail',
      ssrLink('/sanitaer', 'Sanitär-Leistungen') + ssrLink('/heizung', 'Heizungs-Service') +
      ssrLink('/bad', 'Badsanierung') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/notdienst-muenchen', '24/7 Notdienst') + ssrLink('/ratgeber', 'Ratgeber & Tipps') +
      ssrLink('/ueber-uns', 'Über AquaPro 24') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/ratgeber': ssrNav('Unsere Leistungen im Detail',
      ssrLink('/sanitaer', 'Sanitär-Leistungen') + ssrLink('/heizung', 'Heizungs-Service') +
      ssrLink('/bad', 'Badsanierung') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/foerderung', 'Förderung & Zuschüsse') + ssrLink('/foerderrechner', 'Förderrechner') +
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/notdienst-muenchen', '24/7 Notdienst') +
      ssrLink('/faq', 'Häufige Fragen') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/ueber-uns': ssrNav('Unsere Leistungen',
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/bad', 'Badsanierung') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/notdienst-muenchen', '24/7 Notdienst') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/haustechnik', 'Haustechnik komplett') + ssrLink('/faq', 'FAQ & Preisübersicht') +
      ssrLink('/ratgeber', 'Ratgeber & Tipps') + ssrLink('/termin', 'Termin vereinbaren')
    ),
    '/kontakt': ssrNav('Unsere Leistungen',
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/bad', 'Badsanierung') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/notdienst-muenchen', '24/7 Notdienst') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/termin', 'Online-Termin buchen') + ssrLink('/faq', 'Häufige Fragen') +
      ssrLink('/ratgeber', 'Ratgeber & Tipps') + ssrLink('/ueber-uns', 'Über AquaPro 24')
    ),
    '/termin': ssrNav('Unsere Leistungen',
      ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
      ssrLink('/bad', 'Badsanierung') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
      ssrLink('/notdienst-muenchen', '24/7 Notdienst') + ssrLink('/foerderung', 'Förderung & Zuschüsse') +
      ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/faq', 'Häufige Fragen') +
      ssrLink('/kontakt', 'Kontakt aufnehmen') + ssrLink('/ueber-uns', 'Über AquaPro 24')
    ),
  };

  const defaultInternalLinks = ssrNav('Unsere Leistungen',
    ssrLink('/sanitaer', 'Sanitär München') + ssrLink('/heizung', 'Heizung München') +
    ssrLink('/bad', 'Badsanierung') + ssrLink('/waermepumpe', 'Wärmepumpe München') +
    ssrLink('/rohrreinigung', 'Rohrreinigung München') + ssrLink('/notdienst-muenchen', '24/7 Notdienst') +
    ssrLink('/foerderung', 'Förderung & Zuschüsse') + ssrLink('/haustechnik', 'Haustechnik komplett') +
    ssrLink('/faq', 'FAQ & Preisübersicht') + ssrLink('/termin', 'Termin buchen')
  );
  
  const pageInternalLinks = internalLinksMap[normalizedPath] || defaultInternalLinks;

  const fullContent = `
    ${baseContent}
    <main style="font-family:system-ui,-apple-system,sans-serif;color:#333">
      <h1 style="font-size:32px;padding:40px 20px 0;max-width:1200px;margin:0 auto">${page.h1}</h1>
      ${page.content}
      ${pageInternalLinks}
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
    'apis-google',
    'mediapartners-google',
    'storebot-google',
    'feedfetcher-google',
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
