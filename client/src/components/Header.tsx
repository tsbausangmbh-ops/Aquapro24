import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, Clock, MapPin, Wrench } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Leistungen", href: "#services" },
    { label: "Über uns", href: "#about" },
    { label: "Preise", href: "#pricing" },
    { label: "Bewertungen", href: "#testimonials" },
    { label: "Kontakt", href: "#contact" },
  ];

  const scrollToSection = (href: string) => {
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
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
                  data-testid={`nav-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
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
          <div className="lg:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4 shadow-lg">
            <nav className="flex flex-col gap-1">
              {navItems.map((item) => (
                <button
                  key={item.label}
                  onClick={() => scrollToSection(item.href)}
                  className="text-left px-4 py-3 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  data-testid={`nav-mobile-${item.label.toLowerCase()}`}
                >
                  {item.label}
                </button>
              ))}
              <hr className="my-2 border-border" />
              <Button className="mt-2" data-testid="button-call-mobile">
                <Phone className="w-4 h-4 mr-2" />
                089 123 456 789
              </Button>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
