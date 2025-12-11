import { Mail, Phone, MapPin, Clock } from "lucide-react";
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
      { label: "Bewertungen", href: "#testimonials" },
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
    <footer className="bg-foreground text-background">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 lg:gap-8">
          <div className="col-span-2 md:col-span-3 lg:col-span-1">
            <div className="mb-4">
              <img 
                src={footerLogo} 
                alt="AquaPro24 Logo" 
                className="h-12 object-contain"
                data-testid="img-footer-logo"
              />
            </div>
            <p className="text-sm text-background/70 mb-6 max-w-xs">
              Ihr Meisterbetrieb für Badsanierung, Wasserinstallation und professionelle Sanitärarbeiten seit 2005.
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
                <span className="text-background/70">24/7 Online Verfügbar</span>
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
              <span>Mitglied der HWK München</span>
              <span>Meisterbetrieb</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
