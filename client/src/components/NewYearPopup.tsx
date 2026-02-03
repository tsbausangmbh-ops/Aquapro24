import { useState, useEffect, useCallback, useRef } from "react";
import { X } from "lucide-react";
import fireworksBackground from "@assets/generated_images/new_year_fireworks_celebration.webp";

function isNewYearDay(): boolean {
  const now = new Date();
  const month = now.getMonth() + 1;
  const day = now.getDate();

  return month === 1 && day === 1;
}

function hasMarketingConsent(): boolean {
  try {
    const consent = localStorage.getItem("cookie_consent");
    if (!consent) return false;
    const parsed = JSON.parse(consent);
    return parsed.marketing === true;
  } catch {
    return false;
  }
}

export default function NewYearPopup() {
  const [isVisible, setIsVisible] = useState(false);
  const [isClosing, setIsClosing] = useState(false);
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [lastYear, setLastYear] = useState(new Date().getFullYear() - 1);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

  const handleClose = useCallback(() => {
    setIsClosing(true);
    setTimeout(() => {
      setIsVisible(false);
    }, 300);
  }, []);

  useEffect(() => {
    const checkAndShow = () => {
      if (!isNewYearDay()) return;
      if (!hasMarketingConsent()) return;
      
      const year = new Date().getFullYear();
      setCurrentYear(year);
      setLastYear(year - 1);
      setIsVisible(true);
    };

    const timer = setTimeout(checkAndShow, 1500);

    const handleConsentChange = () => {
      if (isNewYearDay() && hasMarketingConsent()) {
        const year = new Date().getFullYear();
        setCurrentYear(year);
        setLastYear(year - 1);
        setIsVisible(true);
      }
    };

    window.addEventListener("cookieConsentChanged", handleConsentChange);
    
    return () => {
      clearTimeout(timer);
      window.removeEventListener("cookieConsentChanged", handleConsentChange);
    };
  }, []);

  useEffect(() => {
    if (isVisible && closeButtonRef.current) {
      closeButtonRef.current.focus();
    }
  }, [isVisible]);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && isVisible) {
        handleClose();
      }
    };

    if (isVisible) {
      document.addEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "hidden";
    }

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
      document.body.style.overflow = "";
    };
  }, [isVisible, handleClose]);

  if (!isVisible) return null;

  return (
    <div 
      className={`fixed inset-0 z-50 flex items-center justify-center bg-black/50 transition-all duration-300 ${
        isClosing ? "opacity-0" : "opacity-100"
      }`}
      onClick={handleClose}
      role="dialog"
      aria-modal="true"
      aria-labelledby="newyear-popup-title"
      data-testid="newyear-popup-overlay"
    >
      <div 
        className={`relative max-w-4xl w-full mx-4 rounded-2xl overflow-hidden shadow-2xl transition-all duration-300 ${
          isClosing ? "scale-95" : "scale-100"
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <button
          ref={closeButtonRef}
          type="button"
          className="absolute z-50 text-white bg-black/30 rounded-full p-2"
          style={{ top: "12px", right: "12px", left: "auto" }}
          onClick={handleClose}
          aria-label="Popup schließen"
          data-testid="button-close-newyear"
        >
          <X className="w-8 h-8" aria-hidden="true" />
        </button>
        <img 
          src={fireworksBackground} 
          alt="Festliches Feuerwerk zur Neujahrsfeier" 
          className="w-full h-auto"
          loading="lazy"
          decoding="async"
        />
        
        <div 
          className="absolute inset-0"
          style={{ 
            background: "linear-gradient(to top, rgba(139, 30, 30, 0.95), rgba(165, 42, 42, 0.6), transparent)" 
          }}
          aria-hidden="true"
        />
        
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none overflow-hidden" aria-hidden="true">
          <p 
            className="text-7xl md:text-[10rem] font-bold text-white/15 whitespace-nowrap select-none"
            style={{ transform: "rotate(-15deg)" }}
          >
            AquaPro 24
          </p>
        </div>
        
        <div className="absolute bottom-0 left-0 right-0 p-6 md:p-10 text-center text-white">
          <h3 
            id="newyear-popup-title"
            className="text-xl md:text-3xl font-bold mb-4"
            style={{ color: "#DC2626" }}
          >
            Frohes neues Jahr {currentYear}!
          </h3>
          <p className="text-base md:text-lg font-medium mb-3">
            Liebe Kunden und Kundinnen,
          </p>
          <p className="text-sm md:text-base mb-2 text-white/90">
            Danke für Ihr Vertrauen in {lastYear}. Ihre Zufriedenheit ist unser Antrieb.
          </p>
          <p className="text-sm md:text-base mb-2 text-white/90">
            Auch {currentYear} stehen wir Ihnen als zuverlässiger Partner für alle Sanierungsprojekte zur Seite.
          </p>
          <p className="text-sm md:text-base text-white/90">
            Wir wünschen Ihnen Gesundheit, Erfolg und ein wundervolles Jahr!
          </p>
          {/* Gold für Team-Signatur */}
          <p 
            className="text-base md:text-lg mt-4 font-semibold"
            style={{ color: "#FFD700" }}
          >
            Ihr Team von AquaPro 24
          </p>
        </div>
      </div>
    </div>
  );
}
