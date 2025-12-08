import { Bot, Mail, Phone, MapPin } from "lucide-react";
import { SiLinkedin, SiX, SiFacebook, SiInstagram } from "react-icons/si";

const footerLinks = {
  product: {
    title: "Produkt",
    links: [
      { label: "Features", href: "#features" },
      { label: "Preise", href: "#pricing" },
      { label: "Integrationen", href: "#" },
      { label: "ROI-Rechner", href: "#roi" },
      { label: "API-Dokumentation", href: "#" },
    ],
  },
  resources: {
    title: "Ressourcen",
    links: [
      { label: "Blog", href: "#" },
      { label: "Case Studies", href: "#" },
      { label: "E-Books & Guides", href: "#" },
      { label: "Webinare", href: "#" },
      { label: "Help Center", href: "#" },
    ],
  },
  company: {
    title: "Unternehmen",
    links: [
      { label: "Über uns", href: "#" },
      { label: "Karriere", href: "#" },
      { label: "Partner werden", href: "#" },
      { label: "Presse", href: "#" },
      { label: "Kontakt", href: "#" },
    ],
  },
  legal: {
    title: "Rechtliches",
    links: [
      { label: "Datenschutz", href: "#" },
      { label: "AGB", href: "#" },
      { label: "Impressum", href: "#" },
      { label: "Cookie-Richtlinie", href: "#" },
      { label: "Sicherheit", href: "#" },
    ],
  },
};

const socialLinks = [
  { icon: SiLinkedin, href: "#", label: "LinkedIn" },
  { icon: SiX, href: "#", label: "X" },
  { icon: SiFacebook, href: "#", label: "Facebook" },
  { icon: SiInstagram, href: "#", label: "Instagram" },
];

export default function Footer() {
  return (
    <footer className="bg-card border-t border-card-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 lg:gap-12">
          <div className="col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Bot className="w-8 h-8 text-secondary" />
              <span className="font-bold text-xl tracking-tight">ChatBot AI</span>
            </div>
            <p className="text-sm text-muted-foreground mb-6 max-w-xs">
              Die intelligente Chatbot-Plattform für modernen Kundenservice und 
              effektive Lead-Generierung.
            </p>
            <div className="space-y-3 text-sm text-muted-foreground">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4" />
                <a href="mailto:info@chatbot-ai.de" className="hover:text-foreground" data-testid="link-email-footer">
                  info@chatbot-ai.de
                </a>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4" />
                <a href="tel:+4989123456789" className="hover:text-foreground" data-testid="link-phone-footer">
                  089 123 456 789
                </a>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4" />
                <span>München, Deutschland</span>
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
                      className="text-sm text-muted-foreground hover:text-foreground transition-colors"
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
        
        <div className="border-t border-border mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} ChatBot AI GmbH. Alle Rechte vorbehalten.
          </p>
          
          <div className="flex items-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                className="w-9 h-9 rounded-full bg-muted flex items-center justify-center text-muted-foreground hover:text-foreground hover:bg-muted/80 transition-colors"
                data-testid={`link-social-${social.label.toLowerCase()}`}
              >
                <social.icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
