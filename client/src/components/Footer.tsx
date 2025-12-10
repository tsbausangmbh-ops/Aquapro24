import { Wrench, Mail, Phone, MapPin, Clock } from "lucide-react";

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
      { label: "Über uns", href: "#about" },
      { label: "Preise", href: "#pricing" },
      { label: "Bewertungen", href: "#testimonials" },
      { label: "FAQ", href: "#" },
      { label: "Kontakt", href: "#contact" },
    ],
  },
  legal: {
    title: "Rechtliches",
    links: [
      { label: "Impressum", href: "/impressum" },
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
    ],
  },
};

export default function Footer() {
  return (
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-8 lg:gap-12">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg">Münchner</span>
                <span className="block text-xs text-background/70 -mt-0.5">Sanitär & Wasserinstallation</span>
              </div>
            </div>
            <p className="text-sm text-background/70 mb-6 max-w-xs">
              Ihr Meisterbetrieb für Badsanierung, Wasserinstallation und professionelle Sanitärarbeiten seit 1985.
            </p>
            <div className="space-y-3 text-sm">
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <a 
                  href="tel:+4989123456789" 
                  className="hover:text-primary transition-colors"
                  data-testid="link-phone-footer"
                >
                  089 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <a 
                  href="mailto:info@muenchner-heizung.de" 
                  className="hover:text-primary transition-colors"
                  data-testid="link-email-footer"
                >
                  info@muenchner-heizung.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span className="text-background/70">Musterstraße 123, 80333 München</span>
              </div>
              <div className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-primary" />
                <span className="text-background/70">24/7 Notdienst erreichbar</span>
              </div>
            </div>
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
        
        <div className="border-t border-background/10 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-sm text-background/50">
              © {new Date().getFullYear()} Münchner Heizung & Sanitär GmbH. Alle Rechte vorbehalten.
            </p>
            <div className="flex items-center gap-6 text-sm text-background/50">
              <span>Mitglied der SHK-Innung München</span>
              <span>Meisterbetrieb</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
