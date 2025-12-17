import { Phone, MessageCircle, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="grid grid-cols-3 divide-x divide-border">
        <a
          href="tel:+4917359994699"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover-elevate active-elevate-2"
          data-testid="floating-call"
        >
          <Phone className="w-5 h-5 text-primary" />
          <span className="text-xs font-medium">Anrufen</span>
        </a>
        <a
          href="https://wa.me/4917359994699?text=Hallo%2C%20ich%20bitte%20um%20R%C3%BCckruf."
          target="_blank"
          rel="noopener noreferrer"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover-elevate active-elevate-2"
          data-testid="floating-whatsapp"
        >
          <MessageCircle className="w-5 h-5 text-emerald-500" />
          <span className="text-xs font-medium">WhatsApp</span>
        </a>
        <Link
          href="/termin"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover-elevate active-elevate-2"
          data-testid="floating-termin"
        >
          <Calendar className="w-5 h-5 text-secondary" />
          <span className="text-xs font-medium">Termin</span>
        </Link>
      </div>
    </div>
  );
}
