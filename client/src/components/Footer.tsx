import footerLogo from "@assets/komplett_neu_1769779126155.jpg";

const footerLinks = {
  services: {
    title: "Leistungen",
    links: [
      { label: "Sanitär & Installation", href: "/sanitaer" },
      { label: "Badsanierung", href: "/bad" },
      { label: "Heizung & Wartung", href: "/heizung" },
      { label: "Wärmepumpe", href: "/waermepumpe" },
      { label: "Rohrreinigung", href: "/rohrreinigung" },
      { label: "Armaturen", href: "/armaturen" },
      { label: "Warmwasser", href: "/warmwasser" },
      { label: "Haustechnik", href: "/haustechnik" },
    ],
  },
  landingPages: {
    title: "München Seiten",
    links: [
      { label: "Sanitär München", href: "/sanitaer-muenchen" },
      { label: "Heizung München", href: "/heizung-muenchen" },
      { label: "Badsanierung München", href: "/badsanierung-muenchen" },
      { label: "Wärmepumpe München", href: "/waermepumpe-muenchen" },
      { label: "Fußbodenheizung München", href: "/fussbodenheizung-muenchen" },
      { label: "Badsanierung Komplett", href: "/badsanierung" },
    ],
  },
  notdienst: {
    title: "Notdienst 24h",
    links: [
      { label: "Notdienst München", href: "/notdienst-muenchen" },
      { label: "Sanitär Notdienst 24h", href: "/sanitaer-notdienst-24" },
      { label: "Heizung Notdienst 24h", href: "/heizung-notdienst-24" },
    ],
  },
  foerderung: {
    title: "Förderung",
    links: [
      { label: "Förderung Übersicht", href: "/foerderung" },
      { label: "Förderantrag Service", href: "/foerderantrag" },
      { label: "Förderantrag Heizung", href: "/foerderantrag-heizung" },
      { label: "Förderrechner", href: "/foerderrechner" },
    ],
  },
  info: {
    title: "Informationen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "FAQ & Preise", href: "/faq" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Kontakt", href: "/kontakt" },
      { label: "Termin buchen", href: "/termin" },
    ],
  },
  legal: {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
      { label: "AGB", href: "/agb" },
      { label: "Barrierefreiheit", href: "/barrierefreiheit" },
    ],
  },
};

const stadtteile = [
  { label: "Schwabing", href: "/schwabing" },
  { label: "Bogenhausen", href: "/bogenhausen" },
  { label: "Sendling", href: "/sendling" },
  { label: "Pasing", href: "/pasing" },
  { label: "Maxvorstadt", href: "/maxvorstadt" },
  { label: "Haidhausen", href: "/haidhausen" },
  { label: "Neuhausen", href: "/neuhausen" },
  { label: "Trudering", href: "/trudering" },
  { label: "Laim", href: "/laim" },
  { label: "Giesing", href: "/giesing" },
  { label: "Moosach", href: "/moosach" },
  { label: "Milbertshofen", href: "/milbertshofen" },
  { label: "Nymphenburg", href: "/nymphenburg" },
  { label: "Perlach", href: "/perlach" },
  { label: "Solln", href: "/solln" },
  { label: "Hadern", href: "/hadern" },
  { label: "Allach", href: "/allach" },
  { label: "Aubing", href: "/aubing" },
  { label: "Feldmoching", href: "/feldmoching" },
  { label: "Thalkirchen", href: "/thalkirchen" },
  { label: "Ramersdorf", href: "/ramersdorf" },
  { label: "Berg am Laim", href: "/berg-am-laim" },
  { label: "Schwanthalerhöhe", href: "/schwanthalerhoehe" },
  { label: "Au", href: "/au" },
  { label: "Lehel", href: "/lehel" },
  { label: "Freimann", href: "/freimann" },
  { label: "Obergiesing", href: "/obergiesing" },
  { label: "Untergiesing", href: "/untergiesing" },
];

export default function Footer() {
  return (
    <>
      <div className="bg-muted/50 py-3 border-t">
        <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto px-4">
          Wir arbeiten mit einem Netzwerk an geprüften Fachbetrieben im Bereich Sanitär, Heizung, Klima und Elektro zusammen.
        </p>
      </div>
      <footer className="bg-foreground text-background" role="contentinfo" aria-label="Fußbereich">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-7 gap-6 lg:gap-4">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <a href="/" aria-label="AquaPro24 Startseite">
                <img 
                  src={footerLogo} 
                  alt="AquaPro24 München - Sanitärinstallateur und Heizungsinstallateur Partnernetzwerk seit 2005" 
                  className="w-14 h-14 object-contain"
                  width="56"
                  height="56"
                  loading="lazy"
                  decoding="async"
                  data-testid="img-footer-logo"
                />
              </a>
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Ihr AquaProfi24-Fachteam für Sanitär, Heizung, Elektro und Badsanierung – seit 2005.
            </p>
            <div className="mt-3 text-xs text-background/60">
              <p>Hardenbergstr. 4</p>
              <p>80992 München</p>
              <p className="mt-1">
                <a href="tel:+4989444438872" className="hover:text-primary transition-colors">
                  Tel: 089 444438872
                </a>
              </p>
            </div>
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <nav key={key} aria-label={section.title}>
              <h4 className="font-semibold mb-3 text-sm">{section.title}</h4>
              <ul className="space-y-1.5" role="list">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-xs text-background/70 hover:text-primary transition-colors"
                      data-testid={`link-footer-${key}-${index}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          ))}
        </div>
        
        <div className="border-t border-background/10 mt-4 pt-4">
          <h4 className="font-semibold mb-3 text-sm">Beliebte Seiten</h4>
          <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4">
            <a href="/notdienst-muenchen" className="text-xs text-red-400 hover:text-red-300 transition-colors font-medium">Notdienst 24h</a>
            <a href="/termin" className="text-xs text-background/70 hover:text-primary transition-colors">Termin buchen</a>
            <a href="/foerderung" className="text-xs text-green-400 hover:text-green-300 transition-colors">Förderung 2025</a>
            <a href="/sanitaer-muenchen" className="text-xs text-background/70 hover:text-primary transition-colors">Sanitär München</a>
            <a href="/heizung-muenchen" className="text-xs text-background/70 hover:text-primary transition-colors">Heizung München</a>
            <a href="/waermepumpe-muenchen" className="text-xs text-background/70 hover:text-primary transition-colors">Wärmepumpe München</a>
            <a href="/badsanierung-muenchen" className="text-xs text-background/70 hover:text-primary transition-colors">Badsanierung München</a>
            <a href="/faq" className="text-xs text-background/70 hover:text-primary transition-colors">FAQ & Preise</a>
            <a href="/ratgeber" className="text-xs text-background/70 hover:text-primary transition-colors">Ratgeber</a>
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-4 pt-4">
          <h4 className="font-semibold mb-3 text-sm">Alle Stadtteile in München</h4>
          <div className="flex flex-wrap gap-x-3 gap-y-1">
            {stadtteile.map((stadtteil, index) => (
              <a 
                key={index}
                href={stadtteil.href}
                className="text-xs text-background/60 hover:text-primary transition-colors"
                data-testid={`link-footer-stadtteil-${index}`}
              >
                {stadtteil.label}
              </a>
            ))}
          </div>
        </div>
        
        <div className="border-t border-background/10 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-sm text-background/50 text-center md:text-left">
              <p>© 2025 AquaPro 24 – Verwaltung & Betrieb durch Mustafa Sakar.</p>
            </div>
            <div className="text-sm text-background/50 text-center md:text-right">
              <p>Webdesign powered by <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ExtruCon GmbH</a></p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-background/10 space-y-2">
            <p className="text-xs text-background/40 text-center">
              KI-Hinweis gemäß EU AI Act (Art. 50): AquaPro24 setzt KI-basierte Systeme zur Unterstützung der Geschäftsprozesse ein. 
              Alle endgültigen Entscheidungen werden von qualifizierten Mitarbeitern getroffen. 
              <a href="/impressum" className="hover:text-primary underline ml-1">Details im Impressum</a>
            </p>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
