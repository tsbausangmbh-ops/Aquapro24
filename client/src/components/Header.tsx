import { useState } from "react";
import { Link, useLocation } from "wouter";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Menu, X, Phone, MapPin, ChevronDown, Mail, Calendar as CalendarIcon, ArrowLeft } from "lucide-react";
import { SiWhatsapp } from "react-icons/si";
import logoImage from "@assets/Logo_Transparent_1765467177950.png";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [notdienstOpen, setNotdienstOpen] = useState(false);
  const [foerderungOpen, setFoerderungOpen] = useState(false);
  const [location] = useLocation();

  const servicePages = [
    { label: "Sanitär", href: "/sanitaer" },
    { label: "Badsanierung", href: "/bad" },
    { label: "Heizung", href: "/heizung" },
    { label: "Wärmepumpe", href: "/waermepumpe" },
    { label: "Rohrreinigung", href: "/rohrreinigung" },
    { label: "Armaturen", href: "/armaturen" },
    { label: "Warmwasser", href: "/warmwasser" },
    { label: "Haustechnik", href: "/haustechnik" },
    { label: "Fußbodenheizung", href: "/fussbodenheizung-muenchen" },
  ];

  const landingPages = [
    { label: "Sanitär München", href: "/sanitaer-muenchen" },
    { label: "Heizung München", href: "/heizung-muenchen" },
    { label: "Badsanierung München", href: "/badsanierung-muenchen" },
    { label: "Wärmepumpe München", href: "/waermepumpe-muenchen" },
    { label: "Badsanierung Komplett", href: "/badsanierung" },
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
      <div className="bg-primary text-primary-foreground py-2" aria-label="Kontaktinformationen">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex flex-wrap items-center justify-center md:justify-between gap-2 md:gap-4 text-sm">
            <div className="flex items-center gap-4 flex-wrap justify-center">
              <div className="hidden sm:flex items-center gap-1.5">
                <MapPin className="w-4 h-4" aria-hidden="true" />
                <span>München & Umgebung</span>
              </div>
              <span className="hidden lg:inline text-xs text-primary-foreground/70">In Zusammenarbeit mit geprüften Sanitär-, Heizungs- und Elektromeistern</span>
            </div>
            <a 
              href="tel:+4915212274043" 
              className="flex flex-col items-center text-center hover:underline"
              data-testid="link-emergency-phone"
              aria-label="Jetzt anrufen: 0152 12274043"
            >
              <span className="text-xs text-primary-foreground/80" aria-hidden="true">Anrufen:</span>
              <span className="font-bold text-base md:text-lg flex items-center gap-1">
                <Phone className="w-4 h-4" aria-hidden="true" />
                0152 12274043
              </span>
            </a>
          </div>
        </div>
      </div>
      
      <header className="sticky top-0 z-50 bg-background/95 backdrop-blur-md border-b border-border">
        <div className="max-w-7xl mx-auto px-4 lg:px-8">
          <div className="flex items-center justify-between gap-4 h-16">
            <Link href="/" className="flex items-center gap-2" aria-label="AquaPro24 - Zur Startseite">
              <img 
                src={logoImage} 
                alt="Klempner München - AquaPro24 Sanitär und Heizung Notdienst 24/7" 
                className="w-10 h-10 object-contain"
                width="40"
                height="40"
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
                    className="absolute top-full left-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                    role="menu"
                    aria-label="Leistungen Untermenü"
                    onMouseLeave={() => setServicesOpen(false)}
                  >
                    <div className="px-4 py-1 text-xs font-semibold text-muted-foreground/60 uppercase">Services</div>
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
                    <hr className="my-2 border-border" />
                    <div className="px-4 py-1 text-xs font-semibold text-muted-foreground/60 uppercase">München</div>
                    {landingPages.map((page) => (
                      <Link
                        key={page.href}
                        href={page.href}
                        onClick={() => setServicesOpen(false)}
                        className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                        data-testid={`nav-landing-${page.label.toLowerCase().replace(/\s+/g, '-')}`}
                      >
                        {page.label}
                      </Link>
                    ))}
                  </div>
                )}
              </div>
              <div className="relative">
                <button
                  onClick={() => setNotdienstOpen(!notdienstOpen)}
                  aria-expanded={notdienstOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 text-sm font-medium text-red-600 hover:text-red-700 transition-colors"
                  data-testid="nav-notdienst-24"
                >
                  Notdienst 24
                  <ChevronDown className={`w-4 h-4 transition-transform ${notdienstOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {notdienstOpen && (
                  <div 
                    className="absolute top-full left-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[200px] z-50"
                    role="menu"
                    aria-label="Notdienst 24 Untermenü"
                    onMouseLeave={() => setNotdienstOpen(false)}
                  >
                    <Link
                      href="/sanitaer-notdienst-24"
                      onClick={() => setNotdienstOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      data-testid="nav-sanitaer-notdienst-24"
                    >
                      Sanitär Notdienst 24h
                    </Link>
                    <Link
                      href="/heizung-notdienst-24"
                      onClick={() => setNotdienstOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      data-testid="nav-heizung-notdienst-24"
                    >
                      Heizung Notdienst 24h
                    </Link>
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
                <Link href="/termin" aria-label="24 Stunden Terminbuchung">
                  <CalendarIcon className="w-4 h-4 mr-2" aria-hidden="true" />
                  24h Terminbuchung
                </Link>
              </Button>
              <div className="relative">
                <button
                  onClick={() => setFoerderungOpen(!foerderungOpen)}
                  aria-expanded={foerderungOpen}
                  aria-haspopup="true"
                  className="flex items-center gap-1 px-4 py-2 text-sm font-medium bg-green-600/80 text-white border border-green-700/50 rounded-md hover:bg-green-600 transition-colors"
                  data-testid="nav-foerderung-dropdown"
                >
                  Förderung
                  <ChevronDown className={`w-4 h-4 transition-transform ${foerderungOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
                </button>
                {foerderungOpen && (
                  <div 
                    className="absolute top-full right-0 mt-2 bg-background border border-border rounded-md shadow-lg py-2 min-w-[180px] z-50"
                    role="menu"
                    aria-label="Förderung Untermenü"
                    onMouseLeave={() => setFoerderungOpen(false)}
                  >
                    <Link
                      href="/foerderung"
                      onClick={() => setFoerderungOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      data-testid="nav-foerderung-info"
                    >
                      Förderung Info
                    </Link>
                    <Link
                      href="/foerderantrag"
                      onClick={() => setFoerderungOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      data-testid="nav-foerderantrag"
                    >
                      Förderantrag
                    </Link>
                    <Link
                      href="/foerderantrag-heizung"
                      onClick={() => setFoerderungOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      data-testid="nav-foerderantrag-heizung"
                    >
                      Förderantrag Heizung
                    </Link>
                    <Link
                      href="/foerderrechner"
                      onClick={() => setFoerderungOpen(false)}
                      className="block px-4 py-2 text-sm text-muted-foreground hover:text-foreground hover:bg-muted transition-colors"
                      data-testid="nav-foerderrechner"
                    >
                      Förderrechner
                    </Link>
                  </div>
                )}
              </div>
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
              <div className="px-4 py-2 text-xs font-semibold text-muted-foreground/60 uppercase tracking-wider">
                München Seiten
              </div>
              {landingPages.map((page) => (
                <Link
                  key={page.href}
                  href={page.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="text-left px-6 py-2 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-muted rounded-md transition-colors"
                  data-testid={`nav-mobile-landing-${page.label.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  {page.label}
                </Link>
              ))}
              <hr className="my-2 border-border" />
              <div className="px-4 py-2 text-xs font-semibold text-red-600 uppercase tracking-wider">
                Notdienst 24
              </div>
              <Link
                href="/sanitaer-notdienst-24"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-6 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-md transition-colors"
                data-testid="nav-mobile-sanitaer-notdienst-24"
              >
                Sanitär Notdienst 24h
              </Link>
              <Link
                href="/heizung-notdienst-24"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-6 py-2 text-sm font-medium text-red-600 hover:text-red-700 hover:bg-red-50 dark:hover:bg-red-950/20 rounded-md transition-colors"
                data-testid="nav-mobile-heizung-notdienst-24"
              >
                Heizung Notdienst 24h
              </Link>
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
                  24h Terminbuchung
                </Link>
              </Button>
              <div className="px-4 py-2 text-xs font-semibold text-green-600 uppercase tracking-wider">
                Förderung
              </div>
              <Link
                href="/foerderung"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-6 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/20 rounded-md transition-colors"
                data-testid="nav-mobile-foerderung-info"
              >
                Förderung Info
              </Link>
              <Link
                href="/foerderantrag"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-6 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/20 rounded-md transition-colors"
                data-testid="nav-mobile-foerderantrag"
              >
                Förderantrag
              </Link>
              <Link
                href="/foerderantrag-heizung"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-6 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/20 rounded-md transition-colors"
                data-testid="nav-mobile-foerderantrag-heizung"
              >
                Förderantrag Heizung
              </Link>
              <Link
                href="/foerderrechner"
                onClick={() => setMobileMenuOpen(false)}
                className="text-left px-6 py-2 text-sm font-medium text-green-600 hover:text-green-700 hover:bg-green-50 dark:hover:bg-green-950/20 rounded-md transition-colors"
                data-testid="nav-mobile-foerderrechner"
              >
                Förderrechner
              </Link>
            </nav>
          </div>
        )}
      </header>
    </>
  );
}
