import footerLogo from "@assets/Logo_1765472336857.png";

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
  areas: {
    title: "Einsatzgebiete",
    links: [
      { label: "München Zentrum", href: "/kontakt" },
      { label: "Schwabing-West", href: "/kontakt" },
      { label: "Bogenhausen", href: "/kontakt" },
      { label: "Sendling", href: "/kontakt" },
      { label: "Pasing-Obermenzing", href: "/kontakt" },
    ],
  },
  info: {
    title: "Informationen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "FAQ & Preise", href: "/faq" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Kontakt", href: "/kontakt" },
    ],
  },
  legal: {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "/datenschutz" },
      { label: "Cookie-Richtlinie", href: "/cookie-richtlinie" },
      { label: "AGB", href: "/agb" },
    ],
  },
};

export default function Footer() {
  return (
    <>
      <div className="bg-muted/50 py-3 border-t">
        <p className="text-xs text-muted-foreground text-center max-w-4xl mx-auto px-4">
          Wir arbeiten mit einem Netzwerk an geprüften Fachbetrieben im Bereich Sanitär, Heizung, Klima und Elektro zusammen.
        </p>
      </div>
      <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-4 lg:py-6">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={footerLogo} 
                alt="AquaPro 24 München Logo" 
                className="h-12 object-contain"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-sm text-background/70 max-w-xs">
              Ihr AquaProfi24-Fachteam für Sanitär, Heizung, Elektro und Badsanierung – seit 2005. Planung, Koordination und Ausführung mit Partnerfirmen.
            </p>
          </div>
          
          {Object.entries(footerLinks).map(([key, section]) => (
            <div key={key}>
              <h4 className="font-semibold mb-4">{section.title}</h4>
              <ul className="space-y-2">
                {section.links.map((link, index) => (
                  <li key={index}>
                    <a 
                      href={link.href}
                      className="text-sm text-background/70 hover:text-primary transition-colors"
                      data-testid={`link-footer-${key}-${index}`}
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
        
        <div className="border-t border-background/10 mt-4 pt-4">
          <div className="flex flex-col md:flex-row justify-between items-center gap-2">
            <div className="text-sm text-background/50 text-center md:text-left">
              <p>© 2025 AquaPro24 – Verwaltung & Betrieb durch Mustafa Sakar.</p>
            </div>
            <div className="text-sm text-background/50 text-center md:text-right">
              <p>Webdesign powered by <a href="https://extrucon.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">ExtruCon GmbH</a></p>
            </div>
          </div>
          <div className="mt-3 pt-3 border-t border-background/10 space-y-2">
            <p className="text-xs text-background/40 text-center">
              KI-Hinweis gemäß EU AI Act (Art. 50): KSHW München setzt KI-basierte Systeme zur Unterstützung der Geschäftsprozesse ein. 
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
