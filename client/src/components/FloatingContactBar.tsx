import { Phone, Calendar } from "lucide-react";
import { Link } from "wouter";

export default function FloatingContactBar() {
  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden bg-background/95 backdrop-blur-md border-t border-border shadow-lg">
      <div className="grid grid-cols-2 divide-x divide-border">
        <a
          href="tel:+4917359994699"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover-elevate active-elevate-2"
          data-testid="floating-call"
        >
          <Phone className="w-5 h-5 text-red-600" />
          <span className="text-xs font-medium">Anrufen</span>
        </a>
        <Link
          href="/termin"
          className="flex flex-col items-center justify-center py-3 gap-1 text-foreground hover-elevate active-elevate-2"
          data-testid="floating-callback"
        >
          <Calendar className="w-5 h-5 text-green-600" />
          <span className="text-xs font-medium">Rückruf</span>
        </Link>
      </div>
    </div>
  );
}
