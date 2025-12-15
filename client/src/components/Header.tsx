import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, MapPin, ChevronDown, Mail, Calendar as CalendarIcon } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/Logo_Transparent_1765467177950.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  const servicePages = [
    { label: "Sanitär", href: "/sanitaer" },
    { label: "Badsanierung", href: "/bad" },
    { label: "Heizung", href: "/heizung" },
    { label: "Wärmepumpe", href: "/waermepumpe" },
    { label: "Haustechnik", href: "/haustechnik" },
  ];

  const scrollToSection = (href: string) => {
    if (location !== "/") {
      window.location.href = "/" + href;
      return;
    }
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <>
      <a 
        href="#main-content" 
        className="sr-only focus:not-sr-only focus:absolute focus:top-2 focus:left-2 focus:z-[100] focus:bg-primary focus:text-primary-foreground focus:px-4 focus:py-2 focus:rounded-md focus:outline-none focus:ring-2 focus:ring-ring"
        data-testid="link-skip-to-content"
      >
        Zum Hauptinhalt springen
      </a>
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 text-sm">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>München & Umgebung</span>
              </div>
              <span className="hidden lg:inline text-xs text-primary-foreground/70">In Zusammenarbeit mit geprüften Sanitär-, Heizungs- und Elektromeistern</span>
            </div>
            <a 
              href="tel:+4915212274043" 
              className="flex items-center gap-2 font-bold text-base md:text-lg hover:underline"
              data-testid="link-emergency-phone"
            >
              <Phone className="w-5 h-5" />
              <span>0152 12274043</span>
            </a>
          </div>
        </div>
      </div>
      
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <Link href="/" className="flex items-center gap-2">
              <img 
                src={logoImage} 
                alt="Münchner Sanitär Logo" 
                className="w-10 h-10 object-contain"
                loading="eager"
                decoding="async"
                data-testid="img-header-logo"
              />
              <div>
                <span className="font-bold text-lg tracking-tight">Münchner</span>
                <span className="block text-xs text-muted-foreground -mt-0.5">Heizung & Sanitär</span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-6" aria-label="Hauptnavigation">
              <Link 
                href="/"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-home"
              >
                Start
              </Link>
              <div className="relative">
                <button
                  onClick={() => setServicesOpen(!servicesOpen)}
                  aria-expanded={servicesOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-services"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px] z-50"
                    role="menu"
                    aria-label="Leistungen Untermenü"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    {servicePages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        data-testid={`nav-${page.label.toLowerCase()}`}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <Link 
                href="/faq"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-faq"
              >
                FAQ
              </Link>
              <Link 
                href="/ratgeber"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-ratgeber"
              >
                Ratgeber
              </Link>
              <Link 
                href="/ueber-uns"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-ueber-uns"
              >
                Über uns
              </Link>
              <Link 
                href="/kontakt"
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-kontakt"
              >
                Kontakt
              </Link>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Button variant="outline" asChild data-testid="nav-termin">
                <Link href="/termin">
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Termin buchen
                </Link>
              </Button>
              <Button 
                asChild 
                className="bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366]"
                data-testid="button-whatsapp-header"
              >
                <a 
                  href="https://wa.me/4915212274043?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Leistungen."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  WhatsApp
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              aria-expanded={mobileMenuOpen}
              aria-controls="mobile-menu"
              aria-label={mobileMenuOpen ? "Menü schließen" : "Menü öffnen"}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" aria-hidden="true" /> : <Menu className="w-5 h-5" aria-hidden="true" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div id="mobile-menu" className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg z-50">
            <nav className="flex flex-col gap-1" aria-label="Mobile Navigation">
              <Link
                href="/"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-home"
              >
                Start
              </Link>
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground uppercase tracking-wider">
                Leistungen
              </div>
              {servicePages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  data-testid={`nav-mobile-${page.label.toLowerCase()}`}
                >
                  {page.label}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <Link
                href="/faq"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-faq"
              >
                FAQ
              </Link>
              <Link
                href="/ratgeber"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-ratgeber"
              >
                Ratgeber
              </Link>
              <Link
                href="/ueber-uns"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-ueber-uns"
              >
                Über uns
              </Link>
              <Link
                href="/kontakt"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-kontakt"
              >
                Kontakt
              </Link>
              <hr className="my-2 border-border" />
              <Button variant="outline" className="mt-2" asChild data-testid="nav-termin-mobile">
                <Link href="/termin" onClick={() => setMobileMenuOpen(false)}>
                  <CalendarIcon className="w-4 h-4 mr-2" />
                  Termin buchen
                </Link>
              </Button>
              <Button 
                className="mt-2 bg-[#25D366] hover:bg-[#20BD5A] text-white border-[#25D366]" 
                asChild 
                data-testid="button-whatsapp-mobile"
              >
                <a 
                  href="https://wa.me/4915212274043?text=Hallo%2C%20ich%20habe%20eine%20Frage%20zu%20Ihren%20Leistungen."
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <SiWhatsapp className="w-4 h-4 mr-2" />
                  WhatsApp schreiben
                </a>
              </Button>
              <Button className="mt-2" asChild data-testid="button-call-mobile">
                <a href="tel:+4915212274043">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
