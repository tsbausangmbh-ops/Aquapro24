import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useLocation } from "wouter";

export function BackButton() {
  const [location] = useLocation();
  
  // Don't show on homepage
  if (location === "/") {
    return null;
  }

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
      variant="outline"
      size="icon"
      className="fixed bottom-6 left-6 z-50 rounded-full shadow-lg bg-background/95 backdrop-blur-sm border-border"
      data-testid="button-back"
      aria-label="Zurück"
    >
      <ArrowLeft className="h-5 w-5" />
    </Button>
  );
}
