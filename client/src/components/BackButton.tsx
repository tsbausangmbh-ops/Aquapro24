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
      className="fixed left-4 top-20 z-40 rounded-full shadow-lg bg-white dark:bg-slate-800 border border-border hover:bg-muted"
      data-testid="button-back"
      aria-label="Zurück"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}
