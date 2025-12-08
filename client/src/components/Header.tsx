import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Menu, X, Phone, Bot } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navItems = [
    { label: "Features", href: "#features" },
    { label: "Workflow", href: "#workflow" },
    { label: "Preise", href: "#pricing" },
    { label: "ROI-Rechner", href: "#roi" },
  ];

  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex items-center justify-between gap-4 h-16">
          <div className="flex items-center gap-2">
            <Bot className="w-8 h-8 text-secondary" />
            <span className="font-bold text-xl tracking-tight">ChatBot AI</span>
          </div>

          <nav className="hidden md:flex items-center gap-6">
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
            <a
              href="tel:+4989123456789"
              className="flex items-center gap-2 text-sm font-medium text-muted-foreground hover:text-foreground"
              data-testid="link-phone"
            >
              <Phone className="w-4 h-4" />
              <span>089 123 456 789</span>
            </a>
            <Button data-testid="button-demo-header">
              Kostenlose Demo
            </Button>
          </div>

          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            data-testid="button-mobile-menu"
          >
            {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </Button>
        </div>
      </div>

      {mobileMenuOpen && (
        <div className="md:hidden absolute top-16 left-0 right-0 bg-background border-b border-border p-4">
          <nav className="flex flex-col gap-2">
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
            <a
              href="tel:+4989123456789"
              className="flex items-center gap-2 px-4 py-3 text-sm font-medium text-muted-foreground"
              data-testid="link-phone-mobile"
            >
              <Phone className="w-4 h-4" />
              <span>089 123 456 789</span>
            </a>
            <Button className="mt-2" data-testid="button-demo-mobile">
              Kostenlose Demo
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
