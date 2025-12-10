import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Cookie, X, Settings, Check } from "lucide-react";
import { Link } from "wouter";

export default function CookieBanner() {
  const [isVisible, setIsVisible] = useState(false);
  const [showSettings, setShowSettings] = useState(false);
  const [preferences, setPreferences] = useState({
    necessary: true,
    functional: false,
    analytics: false,
  });

  useEffect(() => {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) {
      const timer = setTimeout(() => setIsVisible(true), 1000);
      return () => clearTimeout(timer);
    }
  }, []);

  const handleAcceptAll = () => {
    const allConsent = {
      necessary: true,
      functional: true,
      analytics: true,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie_consent", JSON.stringify(allConsent));
    setIsVisible(false);
  };

  const handleAcceptSelected = () => {
    const consent = {
      ...preferences,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie_consent", JSON.stringify(consent));
    setIsVisible(false);
  };

  const handleRejectAll = () => {
    const minimalConsent = {
      necessary: true,
      functional: false,
      analytics: false,
      timestamp: new Date().toISOString(),
    };
    localStorage.setItem("cookie_consent", JSON.stringify(minimalConsent));
    setIsVisible(false);
  };

  if (!isVisible) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 z-50 p-4 md:p-6">
      <Card className="max-w-4xl mx-auto shadow-lg border-2">
        <CardContent className="p-4 md:p-6">
          {!showSettings ? (
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                  <Cookie className="w-5 h-5 text-secondary" />
                </div>
                <div className="flex-1">
                  <h3 className="font-semibold text-lg mb-1">Cookie-Einstellungen</h3>
                  <p className="text-sm text-muted-foreground">
                    Wir verwenden Cookies, um Ihnen die bestmögliche Erfahrung auf unserer Website zu bieten. 
                    Einige Cookies sind technisch notwendig, während andere uns helfen, die Website zu verbessern.
                  </p>
                </div>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setShowSettings(true)}
                  data-testid="button-cookie-settings"
                >
                  <Settings className="w-4 h-4 mr-2" />
                  Einstellungen
                </Button>
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  data-testid="button-cookie-reject"
                >
                  Nur Notwendige
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleAcceptAll}
                  data-testid="button-cookie-accept"
                >
                  <Check className="w-4 h-4 mr-2" />
                  Alle akzeptieren
                </Button>
              </div>

              <p className="text-xs text-muted-foreground text-center">
                Mehr erfahren Sie in unserer{" "}
                <Link href="/datenschutz" className="underline hover:text-foreground">
                  Datenschutzerklärung
                </Link>{" "}
                und{" "}
                <Link href="/cookie-richtlinie" className="underline hover:text-foreground">
                  Cookie-Richtlinie
                </Link>
                .
              </p>
            </div>
          ) : (
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <h3 className="font-semibold text-lg">Cookie-Einstellungen anpassen</h3>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setShowSettings(false)}
                  data-testid="button-cookie-close-settings"
                >
                  <X className="w-4 h-4" />
                </Button>
              </div>

              <div className="space-y-3">
                <div className="flex items-center justify-between p-3 rounded-md bg-muted/50">
                  <div>
                    <p className="font-medium text-sm">Technisch notwendig</p>
                    <p className="text-xs text-muted-foreground">
                      Erforderlich für die Grundfunktionen der Website
                    </p>
                  </div>
                  <div className="text-sm text-muted-foreground">Immer aktiv</div>
                </div>

                <label className="flex items-center justify-between p-3 rounded-md bg-muted/50 cursor-pointer hover-elevate">
                  <div>
                    <p className="font-medium text-sm">Funktionale Cookies</p>
                    <p className="text-xs text-muted-foreground">
                      Speichern Ihre Präferenzen (z.B. Sprache, Theme)
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.functional}
                    onChange={(e) => setPreferences({ ...preferences, functional: e.target.checked })}
                    className="w-5 h-5 accent-secondary"
                    data-testid="checkbox-cookie-functional"
                  />
                </label>

                <label className="flex items-center justify-between p-3 rounded-md bg-muted/50 cursor-pointer hover-elevate">
                  <div>
                    <p className="font-medium text-sm">Analyse-Cookies</p>
                    <p className="text-xs text-muted-foreground">
                      Helfen uns, die Website zu verbessern
                    </p>
                  </div>
                  <input
                    type="checkbox"
                    checked={preferences.analytics}
                    onChange={(e) => setPreferences({ ...preferences, analytics: e.target.checked })}
                    className="w-5 h-5 accent-secondary"
                    data-testid="checkbox-cookie-analytics"
                  />
                </label>
              </div>

              <div className="flex flex-col sm:flex-row gap-2 sm:gap-3 sm:justify-end">
                <Button
                  variant="outline"
                  size="sm"
                  onClick={handleRejectAll}
                  data-testid="button-cookie-reject-settings"
                >
                  Nur Notwendige
                </Button>
                <Button
                  variant="secondary"
                  size="sm"
                  onClick={handleAcceptSelected}
                  data-testid="button-cookie-save"
                >
                  Auswahl speichern
                </Button>
              </div>
            </div>
          )}
        </CardContent>
      </Card>
    </div>
  );
}
