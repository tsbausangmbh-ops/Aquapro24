export interface SEOMeta {
  title: string;
  description: string;
  keywords: string[];
  h1: string;
}

export const seoMeta: Record<string, SEOMeta> = {
  '/': {
    title: 'Münchner Sanitär und Heizung – Klempner Notdienst 24/7',
    description: 'Klempner & Sanitär in München – 24h Notdienst bei Rohrbruch & Heizungsausfall. Faire Festpreise, schnelle Hilfe vom Partnernetzwerk. Jetzt anfragen!',
    h1: 'Klempner München – Sanitär & Heizung Notdienst 24/7',
    keywords: ['Klempner München', 'Sanitär Notdienst', 'Heizung München', 'Installateur', '24h Notdienst'],
  },
  '/sanitaer': {
    title: 'Sanitär München | Rohrbruch, Armaturen, Wasserschaden | AquaPro 24',
    description: 'Sanitärservice in München: Rohrbruch, verstopfter Abfluss, Armaturen, Wasserschaden. Festpreis, schnelle Hilfe, Termin in 24h. Jetzt anfragen.',
    h1: 'Sanitär München – Klempner für Rohrbruch, Armaturen & WC',
    keywords: ['Sanitär München', 'Klempner', 'Rohrreinigung', 'Armaturen', 'WC Reparatur', 'Rohrbruch'],
  },
  '/heizung': {
    title: 'Heizung München | Wartung, Reparatur, Austausch | AquaPro 24',
    description: 'Heizung defekt? AquaPro 24 München: Wartung, Reparatur & Austausch – schnell, transparent, mit Festpreis. Notdienst möglich.',
    h1: 'Heizung München – Wartung, Reparatur & Modernisierung',
    keywords: ['Heizung München', 'Heizungsreparatur', 'Heizungswartung', 'Gasheizung', 'Heizungsaustausch'],
  },
  '/bad': {
    title: 'Badsanierung München | Komplett & hochwertig',
    description: 'Badsanierung in München: Komplett, modern & stressfrei. Planung, Ausführung & Koordination aus einer Hand. Jetzt beraten lassen!',
    h1: 'Badsanierung München – Komplettumbau vom Profi',
    keywords: ['Badsanierung München', 'Badumbau', 'barrierefreies Bad', 'Badmodernisierung', 'KfW Förderung'],
  },
  '/waermepumpe': {
    title: 'Wärmepumpe München | Förderung & Einbau | AquaPro 24',
    description: 'Wärmepumpe in München: Beratung, Planung, Einbau – inkl. Förder-Check. Jetzt kostenloses Erstgespräch sichern.',
    h1: 'Wärmepumpe München – Förderung & Einbau vom Profi',
    keywords: ['Wärmepumpe München', 'BAFA Förderung', 'Luft-Wasser-Wärmepumpe', 'Erdwärmepumpe', 'Heizungstausch'],
  },
  '/notdienst-muenchen': {
    title: 'Notdienst München 24h | Rohrbruch & Heizungsausfall',
    description: 'Notdienst München 24h: Rohrbruch, Wasserschaden oder Heizungsausfall? Soforthilfe vom Sanitär- & Heizungsprofi.',
    h1: 'Notdienst München 24h – Rohrbruch & Heizungsausfall Soforthilfe',
    keywords: ['Notdienst München', 'Sanitär Notdienst', 'Heizung Notdienst', 'Rohrbruch', '24h'],
  },
  '/termin': {
    title: 'Handwerker Termin München | Online buchen',
    description: 'Online Termin buchen in München: Sanitär & Heizung einfach online anfragen – Wunschzeit auswählen & bestätigen.',
    h1: 'Termin München – Wunschtermin online buchen',
    keywords: ['Termin buchen', 'Handwerker München', 'Online Terminbuchung', 'Klempner Termin'],
  },
  '/kontakt': {
    title: 'Sanitär AquaPro 24 Kontakt München | Angebot anfordern',
    description: 'Kontakt AquaPro 24 München: Anfrage stellen, Angebot erhalten & Termin vereinbaren – schnell & unverbindlich.',
    h1: 'Kontakt AquaPro 24 München',
    keywords: ['Kontakt', 'AquaPro 24 München', 'Telefon', 'Adresse', 'Beratung'],
  },
  '/faq': {
    title: 'AquaPro 24 FAQ Sanitär & Heizung München – Preise & Tipps',
    description: 'Sanitär FAQ München: Antworten zu Preisen, Notdienst & Reparaturen – verständlich erklärt vom Fachbetrieb.',
    h1: 'FAQ – Häufige Fragen zu Sanitär & Heizung München',
    keywords: ['FAQ', 'Preise Klempner', 'Kosten Sanitär', 'Heizung Kosten'],
  },
  '/ueber-uns': {
    title: 'Sanitär & Heizung München | Partnernetzwerk seit 2005',
    description: 'AquaPro 24: Ihr Partnernetzwerk für Sanitär & Heizung in München seit 2005. Geprüfte Fachbetriebe, Festpreise, Zufriedenheitsgarantie.',
    h1: 'AquaPro 24 – Ihr Partnernetzwerk seit 2005',
    keywords: ['AquaPro 24', 'Partnernetzwerk', 'Sanitär München', 'seit 2005'],
  },
  '/impressum': {
    title: 'Impressum AquaPro 24 – Sanitär Heizung München | Mustafa Sakar',
    description: 'Impressum AquaPro 24: Mustafa Sakar, Hardenbergstr. 4, 80992 München. Sanitär & Heizung Partnernetzwerk.',
    h1: 'Impressum AquaPro 24',
    keywords: ['Impressum', 'AquaPro 24', 'Mustafa Sakar', 'München'],
  },
  '/datenschutz': {
    title: 'Datenschutz DSGVO München – Ihre Rechte',
    description: 'Datenschutzerklärung AquaPro 24 München: DSGVO-konform, transparente Datenverarbeitung, Ihre Rechte als Nutzer.',
    h1: 'Datenschutzerklärung AquaPro 24',
    keywords: ['Datenschutz', 'DSGVO', 'AquaPro 24', 'Datenschutzerklärung'],
  },
  '/agb': {
    title: 'AGB Sanitär München – Festpreis & Garantie',
    description: 'AGB AquaPro 24 München: Allgemeine Geschäftsbedingungen für Sanitär & Heizung. Festpreisgarantie, Gewährleistung, faire Konditionen.',
    h1: 'Allgemeine Geschäftsbedingungen AquaPro 24',
    keywords: ['AGB', 'Geschäftsbedingungen', 'AquaPro 24', 'Festpreis'],
  },
  '/foerderung': {
    title: 'Förderung Heizung München: KfW 458, BAFA & Steuerbonus 2026 | AquaPro 24',
    description: 'Förderung Heizung München 2026: Bis 70% BAFA-Zuschuss für Wärmepumpe, KfW 458 Kredit, Steuerbonus. Kostenlose Förderberatung.',
    h1: 'Förderung Heizung München 2026 – Bis 70% BAFA + KfW 458',
    keywords: ['BAFA Förderung 2026', 'KfW 458', 'Wärmepumpe Förderung', 'Steuerbonus', 'Heizungsförderung München'],
  },
  '/haustechnik': {
    title: 'Haustechnik München | Gas, Wasser, Lüftung komplett',
    description: 'Haustechnik München: Gas, Wasser, Lüftung, Smart Home. AquaPro 24 bietet Komplett-Service mit Festpreisen.',
    h1: 'Haustechnik München – Gas, Wasser, Lüftung komplett',
    keywords: ['Haustechnik München', 'Gasinstallation', 'Lüftung', 'Smart Home', 'KWL'],
  },
  '/armaturen': {
    title: 'Wasserhahn wechseln München | Armaturen Montage',
    description: 'Wasserhahn wechseln München: Montage, Reparatur & Austausch von Armaturen. Grohe, Hansgrohe, HANSA. Festpreis ab 89€.',
    h1: 'Wasserhahn wechseln & Armaturen München',
    keywords: ['Armaturen München', 'Wasserhahn wechseln', 'Armatur Montage', 'Grohe', 'Hansgrohe'],
  },
  '/rohrreinigung': {
    title: 'Rohrreinigung München | Abfluss verstopft 24/7',
    description: 'Rohrreinigung München: Abfluss verstopft, WC verstopft? 60 Min. Notdienst, Festpreis ab 81€. Jetzt anrufen!',
    h1: 'Rohrreinigung München – Abfluss verstopft? Soforthilfe 24/7',
    keywords: ['Rohrreinigung München', 'Abfluss verstopft', 'WC verstopft', 'Kanalreinigung', 'Notdienst'],
  },
  '/warmwasser': {
    title: 'Durchlauferhitzer München | Boiler Reparatur & Installation',
    description: 'Durchlauferhitzer München: Kein Warmwasser? Boiler defekt? Schnelle Reparatur & Installation. Festpreis ab 120€.',
    h1: 'Warmwasser München – Durchlauferhitzer, Boiler & Speicher',
    keywords: ['Durchlauferhitzer München', 'Boiler', 'Warmwasserspeicher', 'Warmwasser'],
  },
  '/badsanierung': {
    title: 'Badsanierung München – Komplettumbau aus einer Hand | AquaPro 24',
    description: 'Badsanierung in München: Komplettumbau, barrierefreies Bad mit KfW-Förderung. Beratung vor Ort. Tel: 089 444438872',
    h1: 'Badsanierung München – Komplettumbau aus einer Hand',
    keywords: ['Badsanierung', 'Badumbau München', 'barrierefreies Bad', 'KfW Förderung'],
  },
  '/sanitaer-notdienst-24': {
    title: 'Sanitär Notdienst München 24/7 | Soforthilfe bei Rohrbruch | AquaPro 24',
    description: '24/7 Sanitär-Notdienst in München: Rohrbruch, Wasserschaden, Verstopfung. Schnelle Anfahrt, klare Kosten, Hilfe sofort.',
    h1: 'Sanitär Notdienst München 24/7 – Soforthilfe bei Rohrbruch',
    keywords: ['Sanitär Notdienst 24h', 'Klempner Notdienst', 'Rohrbruch München', 'Wasserschaden'],
  },
  '/heizung-notdienst-24': {
    title: 'Heizung Notdienst München | 24h Reparatur',
    description: 'Heizung Notdienst München: Schnelle Hilfe bei Ausfall, Störung oder Kälte – 24h erreichbar.',
    h1: 'Heizung Notdienst München – 24h Reparatur bei Ausfall',
    keywords: ['Heizung Notdienst 24h', 'Heizung ausgefallen', 'Heizungsreparatur Notdienst'],
  },
  '/sanitaer-muenchen': {
    title: 'Sanitär Installateur München | Schnell & zuverlässig',
    description: 'Ihr Sanitär Installateur in München: Schnelle Hilfe bei Reparaturen, Notfällen & Installationen. Jetzt Termin sichern!',
    h1: 'Sanitär München – Installateur schnell & zuverlässig',
    keywords: ['Sanitär München', 'Klempner München', 'Installateur', 'Sanitärinstallation'],
  },
  '/heizung-muenchen': {
    title: 'Heizungsservice München | Reparatur & Modernisierung',
    description: 'Heizungsservice München: Reparatur, Modernisierung & Effizienzsteigerung. Kompetente Beratung vom Partnernetzwerk.',
    h1: 'Heizung München – Reparatur & Modernisierung',
    keywords: ['Heizung München', 'Heizungsreparatur', 'Heizungswartung', 'Heizungsmodernisierung'],
  },
  '/waermepumpe-muenchen': {
    title: 'Wärmepumpe installieren München | Profi-Service',
    description: 'Wärmepumpe installieren in München: Fachgerechter Einbau, Förderberatung & komplette Abwicklung aus einer Hand.',
    h1: 'Wärmepumpe München – Installation vom Profi',
    keywords: ['Wärmepumpe München', 'BAFA Förderung', 'Heizungstausch München'],
  },
  '/fussbodenheizung-muenchen': {
    title: 'Fußbodenheizung München | Nachrüsten & Einbau',
    description: 'Fußbodenheizung München: Nachrüsten, verlegen & reparieren vom Profi. Festpreise & kompetente Beratung.',
    h1: 'Fußbodenheizung München – Nachrüsten & Einbau',
    keywords: ['Fußbodenheizung München', 'Fußbodenheizung Installation', 'Fußbodenheizung Reparatur'],
  },
  '/badsanierung-muenchen': {
    title: 'Badumbau München | Stressfrei vom Partnernetzwerk',
    description: 'Badumbau in München ohne Stress: Modernes Design, feste Abläufe & klare Kosten. Jetzt kostenlos beraten lassen!',
    h1: 'Badsanierung München – Komplettumbau stressfrei & modern',
    keywords: ['Badsanierung München', 'Bad renovieren München', 'Badezimmer sanieren', 'Komplettbad München', 'Badumbau München'],
  },
  '/fussbodenheizung': {
    title: 'Fußbodenheizung München – Installation & Reparatur | AquaPro 24',
    description: 'Fußbodenheizung München: Installation, Reparatur, Spülung, Entlüftung. Festpreise ab 154€. Tel: 089 444438872',
    h1: 'Fußbodenheizung München – Installation & Reparatur',
    keywords: ['Fußbodenheizung', 'Fußbodenheizung München', 'Installation', 'Reparatur'],
  },
  '/foerderantrag': {
    title: 'Förderantrag München: BAFA & KfW Antrag kostenlos | AquaPro 24',
    description: 'Förderantrag München: BAFA & KfW Antrag kostenlos ausfüllen lassen. Bis 70% Zuschuss für Heizungstausch. Jetzt beraten lassen!',
    h1: 'Förderantrag München – BAFA & KfW kostenlos',
    keywords: ['Förderantrag', 'BAFA Antrag', 'KfW Antrag', 'Förderung Heizung'],
  },
  '/foerderantrag-heizung': {
    title: 'Förderantrag Heizung München: Wärmepumpe bis 70% | AquaPro 24',
    description: 'Förderantrag Heizung München: Wärmepumpe BAFA-Antrag bis 70% Zuschuss. Kostenloser Förderservice von AquaPro 24.',
    h1: 'Förderantrag Heizung München – Bis 70% BAFA-Zuschuss',
    keywords: ['Förderantrag Heizung', 'BAFA Wärmepumpe', 'Heizungsförderung'],
  },
  '/foerderrechner': {
    title: 'Förderrechner München | KfW 458, BAFA & Energieberater 2026',
    description: 'Förderrechner München: Berechnen Sie Ihre BAFA & KfW Förderung für Wärmepumpe, Heizungstausch. Sofort-Ergebnis!',
    h1: 'Förderrechner München – BAFA & KfW Förderung berechnen',
    keywords: ['Förderrechner', 'BAFA Rechner', 'KfW Förderung berechnen', 'Wärmepumpe Kosten'],
  },
  '/barrierefreiheit': {
    title: 'Barrierefreiheitserklärung – AquaPro 24 München',
    description: 'Barrierefreiheitserklärung AquaPro 24: WCAG 2.1 AA / BITV 2.0 konform. Tastaturnavigation, Screenreader, Kontrastmodus.',
    h1: 'Barrierefreiheitserklärung – AquaPro 24 München',
    keywords: ['Barrierefreiheit', 'WCAG 2.1 AA', 'BITV 2.0', 'Barrierefreiheitserklärung'],
  },
  '/cookie-richtlinie': {
    title: 'Cookie Richtlinie DSGVO – transparent & sicher',
    description: 'Cookie-Richtlinie AquaPro 24 München: Transparente Cookie-Nutzung, DSGVO-konform. Ihre Datenschutzrechte.',
    h1: 'Cookie-Richtlinie AquaPro 24',
    keywords: ['Cookie Richtlinie', 'DSGVO', 'Cookie-Einstellungen', 'Datenschutz'],
  },
  '/ratgeber': {
    title: 'Sanitär Ratgeber München | Profi-Tipps',
    description: 'Sanitär Ratgeber München: Profi-Tipps zu Sanitär, Heizung, Bad. Praktische Anleitungen und Kosten-Übersicht.',
    h1: 'Sanitär & Heizung Ratgeber München',
    keywords: ['Sanitär Ratgeber', 'Heizung Tipps', 'Bad Ratgeber', 'Profi-Tipps'],
  },
};

export function getSEOMeta(path: string): SEOMeta | undefined {
  return seoMeta[path];
}
