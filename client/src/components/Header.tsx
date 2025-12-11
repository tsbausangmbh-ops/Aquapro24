import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, MapPin, ChevronDown, Mail } from "lucide-react";
import logoImage from "@assets/Icon_Logo_1765382090112.png";

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
      <div className="bg-primary text-primary-foreground py-2">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 text-sm">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-4 h-4" />
                <span>München & Umgebung</span>
              </div>
            </div>
            <a 
              href="tel:+4989123456789" 
              className="flex items-center gap-2 font-bold text-base md:text-lg hover:underline"
              data-testid="link-emergency-phone"
            >
              <Phone className="w-5 h-5" />
              <span>089 123 456 789</span>
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

            <nav className="hidden lg:flex items-center gap-6">
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
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-services"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px] z-50"
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
              <Button data-testid="button-email-header" asChild>
                <a href="mailto:info@sanitaer-muenchen.de">
                  <Mail className="w-4 h-4 mr-2" />
                  Email schreiben
                </a>
              </Button>
            </div>

            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              data-testid="button-mobile-menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </Button>
          </div>
        </div>

        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg z-50">
            <nav className="flex flex-col gap-1">
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
              <Button className="mt-2" asChild data-testid="button-call-mobile">
                <a href="tel:+4989123456789">
                  <Phone className="w-4 h-4 mr-2" />
                  089 123 456 789
                </a>
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
