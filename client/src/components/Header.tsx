import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Clock, MapPin, Wrench, ChevronDown } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [location] = useLocation();

  const servicePages = [
    { label: "Sanitär", href: "/sanitaer" },
    { label: "Bad", href: "/bad" },
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
              <div className="flex items-center gap-1.5">
                <Clock className="w-4 h-4" />
                <span className="font-medium">24/7 Notdienst</span>
              </div>
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
            <div className="flex items-center gap-2">
              <div className="w-10 h-10 rounded-lg bg-secondary flex items-center justify-center">
                <Wrench className="w-5 h-5 text-secondary-foreground" />
              </div>
              <div>
                <span className="font-bold text-lg tracking-tight">Münchner</span>
                <span className="block text-xs text-muted-foreground -mt-0.5">Heizung & Sanitär</span>
              </div>
            </div>

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
                  onBlur={() => setTimeout(() => setServicesOpen(false), 150)}
                  className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid="nav-services"
                >
                  Leistungen
                  <ChevronDown className={`w-4 h-4 transition-transform ${servicesOpen ? 'rotate-180' : ''}`} />
                </button>
                {servicesOpen && (
                  <div className="absolute top-full left-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[160px] z-50">
                    {servicePages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        data-testid={`nav-${page.label.toLowerCase()}`}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <button
                onClick={() => scrollToSection("#pricing")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-preise"
              >
                Preise
              </button>
              <button
                onClick={() => scrollToSection("#testimonials")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-bewertungen"
              >
                Bewertungen
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                data-testid="nav-kontakt"
              >
                Kontakt
              </button>
            </nav>

            <div className="hidden md:flex items-center gap-3">
              <Badge variant="outline" className="gap-1 text-accent border-accent/30">
                <Clock className="w-3 h-3" />
                In 90 Min. da
              </Badge>
              <Button data-testid="button-call-header">
                <Phone className="w-4 h-4 mr-2" />
                Jetzt anrufen
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
              <button
                onClick={() => scrollToSection("#pricing")}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-preise"
              >
                Preise
              </button>
              <button
                onClick={() => scrollToSection("#contact")}
                className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                data-testid="nav-mobile-kontakt"
              >
                Kontakt
              </button>
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
