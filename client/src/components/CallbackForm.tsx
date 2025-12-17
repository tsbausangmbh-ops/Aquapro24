import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Phone, Clock, CheckCircle, Loader2 } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

interface CallbackFormProps {
  variant?: "compact" | "full";
  className?: string;
}

export default function CallbackForm({ variant = "full", className = "" }: CallbackFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    message: "",
    preferredTime: "",
  });
  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
      
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({
            type: "callback_request",
            ...formData,
            timestamp: new Date().toISOString(),
            source: window.location.pathname,
          }),
        });
      }

      setIsSuccess(true);
      toast({
        title: "Rückruf angefordert",
        description: "Wir melden uns schnellstmöglich bei Ihnen!",
      });
      
      setFormData({ name: "", phone: "", message: "", preferredTime: "" });
      
      setTimeout(() => setIsSuccess(false), 5000);
    } catch (error) {
      toast({
        title: "Fehler",
        description: "Bitte versuchen Sie es erneut oder rufen Sie uns direkt an.",
        variant: "destructive",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  if (isSuccess) {
    return (
      <Card className={`border-green-500/50 bg-green-50 dark:bg-green-950/20 ${className}`}>
        <CardContent className="pt-6">
          <div className="flex flex-col items-center text-center gap-3">
            <CheckCircle className="w-12 h-12 text-green-500" />
            <div>
              <p className="font-semibold text-lg">Vielen Dank!</p>
              <p className="text-muted-foreground">Wir rufen Sie schnellstmöglich zurück.</p>
            </div>
          </div>
        </CardContent>
      </Card>
    );
  }

  if (variant === "compact") {
    return (
      <Card className={`border-primary/20 ${className}`}>
        <CardContent className="pt-6">
          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center gap-2 text-primary mb-2">
              <Phone className="w-5 h-5" />
              <span className="font-semibold">Kostenloser Rückruf</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
              <Input
                placeholder="Ihr Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="input-callback-name-compact"
              />
              <Input
                type="tel"
                placeholder="Ihre Telefonnummer"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                data-testid="input-callback-phone-compact"
              />
            </div>
            <Button type="submit" className="w-full" disabled={isSubmitting} data-testid="button-callback-submit-compact">
              {isSubmitting ? (
                <>
                  <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                  Wird gesendet...
                </>
              ) : (
                <>
                  <Phone className="w-4 h-4 mr-2" />
                  Rückruf anfordern
                </>
              )}
            </Button>
            <p className="text-xs text-muted-foreground text-center flex items-center justify-center gap-1">
              <Clock className="w-3 h-3" />
              Antwort innerhalb von 30 Minuten
            </p>
          </form>
        </CardContent>
      </Card>
    );
  }

  return (
    <Card className={`border-primary/20 ${className}`}>
      <CardHeader>
        <CardTitle className="flex items-center gap-2">
          <Phone className="w-5 h-5 text-primary" />
          Kostenloser Rückruf-Service
        </CardTitle>
        <p className="text-sm text-muted-foreground">
          Füllen Sie das Formular aus - wir rufen Sie zurück!
        </p>
      </CardHeader>
      <CardContent>
        <form onSubmit={handleSubmit} className="space-y-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="space-y-2">
              <Label htmlFor="callback-name">Name *</Label>
              <Input
                id="callback-name"
                placeholder="Ihr vollständiger Name"
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                required
                data-testid="input-callback-name"
              />
            </div>
            <div className="space-y-2">
              <Label htmlFor="callback-phone">Telefonnummer *</Label>
              <Input
                id="callback-phone"
                type="tel"
                placeholder="Ihre Telefonnummer"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                required
                data-testid="input-callback-phone"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="callback-time">Gewünschte Rückrufzeit</Label>
            <Input
              id="callback-time"
              placeholder="z.B. Vormittags, Nach 14 Uhr, Jederzeit"
              value={formData.preferredTime}
              onChange={(e) => setFormData({ ...formData, preferredTime: e.target.value })}
              data-testid="input-callback-time"
            />
          </div>
          
          <div className="space-y-2">
            <Label htmlFor="callback-message">Kurze Beschreibung (optional)</Label>
            <Textarea
              id="callback-message"
              placeholder="Worum geht es? (z.B. Wasserhahn tropft, Heizung defekt)"
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              rows={3}
              data-testid="input-callback-message"
            />
          </div>

          <Button type="submit" size="lg" className="w-full" disabled={isSubmitting} data-testid="button-callback-submit">
            {isSubmitting ? (
              <>
                <Loader2 className="w-4 h-4 mr-2 animate-spin" />
                Wird gesendet...
              </>
            ) : (
              <>
                <Phone className="w-4 h-4 mr-2" />
                Kostenlosen Rückruf anfordern
              </>
            )}
          </Button>
          
          <div className="flex items-center justify-center gap-4 text-sm text-muted-foreground pt-2">
            <span className="flex items-center gap-1">
              <Clock className="w-4 h-4" />
              Antwort in 30 Min
            </span>
            <span className="flex items-center gap-1">
              <CheckCircle className="w-4 h-4" />
              100% kostenlos
            </span>
          </div>
        </form>
      </CardContent>
    </Card>
  );
}
