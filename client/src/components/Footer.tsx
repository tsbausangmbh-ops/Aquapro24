import footerLogo from "@assets/Logo_1765382185377.png";

const footerLinks = {
  services: {
    title: "Leistungen",
    links: [
      { label: "Badsanierung", href: "#services" },
      { label: "Wasserinstallation", href: "#services" },
      { label: "Rohrreinigung", href: "#services" },
      { label: "Armaturen & Sanitär", href: "#services" },
      { label: "Heizungsservice", href: "#services" },
    ],
  },
  areas: {
    title: "Einsatzgebiete",
    links: [
      { label: "München Innenstadt", href: "#" },
      { label: "Schwabing", href: "#" },
      { label: "Bogenhausen", href: "#" },
      { label: "Sendling", href: "#" },
      { label: "Pasing", href: "#" },
    ],
  },
  info: {
    title: "Informationen",
    links: [
      { label: "Über uns", href: "/ueber-uns" },
      { label: "FAQ & Preise", href: "/faq" },
      { label: "Ratgeber", href: "/ratgeber" },
      { label: "Kontakt", href: "#contact" },
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
          Wir arbeiten mit einem Netzwerk an geprüften Meisterbetrieben im Bereich Sanitär, Heizung, Klima und Elektro zusammen.
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
              <a href="https://sanierer.de" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">AquaPro 24 München</a> - Ihr Fachteam für Sanitär, Heizung und Badsanierung seit 2005. Planung, Koordination und Ausführung mit Partnerfirmen.
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
              <p>© {new Date().getFullYear()} AquaPro24. Alle Rechte vorbehalten.</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
    </>
  );
}
