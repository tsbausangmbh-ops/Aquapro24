import { ArrowLeft } from "lucide-react";
import { Button } from "@/components/ui/button";

export function BackButton() {
  const handleBack = () => {
    if (window.history.length > 1) {
      window.history.back();
    } else {
      window.location.href = "/";
    }
  };

  return (
    <section className="py-6">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="flex justify-center">
          <Button
            onClick={handleBack}
            variant="outline"
            size="lg"
            className="gap-2 w-full sm:w-auto max-w-xs sm:max-w-none"
            data-testid="button-back"
          >
            <ArrowLeft className="h-5 w-5" />
            Zurück zur vorherigen Seite
          </Button>
        </div>
      </div>
    </section>
  );
}
