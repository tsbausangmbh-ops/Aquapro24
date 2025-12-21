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
      variant="default"
      className="fixed bottom-6 left-6 z-50 rounded-full shadow-xl h-12 px-4 gap-2"
      data-testid="button-back"
      aria-label="Zurück"
    >
      <ArrowLeft className="h-5 w-5" />
      <span className="font-medium">Zurück</span>
    </Button>
  );
}
