import { Phone } from "lucide-react";

export default function MobileCallButton() {
  return (
    <a
      href="tel:+4989444438872"
      className="md:hidden fixed bottom-4 right-4 z-50 flex items-center gap-2 bg-primary text-primary-foreground px-4 py-3 rounded-full shadow-lg active:scale-95 transition-transform"
      aria-label="Jetzt anrufen: 089 444438872"
      data-testid="button-mobile-call-floating"
    >
      <Phone className="w-5 h-5" />
      <span className="font-semibold text-sm">Anrufen</span>
    </a>
  );
}
