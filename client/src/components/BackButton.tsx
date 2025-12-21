import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export default function BackButton() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <Button
      onClick={handleBack}
      variant="secondary"
      size="icon"
      className="fixed left-4 top-24 z-[60] rounded-full shadow-xl bg-white dark:bg-slate-800 border-2 border-primary/30 hover:bg-muted hover:border-primary/50"
      data-testid="button-back"
      aria-label="Zurück"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}
