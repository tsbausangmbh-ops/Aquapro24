import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Phone,
  Loader2,
  CheckCircle2,
  Wrench,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

interface LeadData {
  serviceTypes: string[];
  locationType: string;
  components: string[];
  isEmergency: string;
  urgency: string;
  hasPhotos: string;
  accessSituation: string;
  floorLevel: string;
  waterShutoff: string;
  description: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  preferredTime: string;
  estimatedPrice: string;
}

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: keyof LeadData | "contact";
  title: string;
  subtitle?: string;
  type: "single" | "multi" | "text" | "textarea" | "contact";
  options?: QuestionOption[];
  required?: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: "serviceTypes",
    title: "Was genau benötigen Sie?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "neuinstallation", label: "Neuinstallation Sanitär" },
      { value: "austausch", label: "Austausch bestehender Installation" },
      { value: "reparatur", label: "Reparatur / Undichtigkeit" },
      { value: "wc_defekt", label: "WC / Spülkasten defekt" },
      { value: "armatur_tropft", label: "Armatur tropft / Undicht" },
      { value: "rohrbruch", label: "Rohrbruch / Wasserschaden" },
      { value: "warmwasser", label: "Warmwasserprobleme" },
      { value: "bad_komplett", label: "Badinstallation komplett" },
      { value: "kueche", label: "Küche (Wasseranschluss / Ablauf)" },
      { value: "sonstiges", label: "Sonstiges" },
    ],
  },
  {
    id: "locationType",
    title: "Wo soll die Arbeit durchgeführt werden?",
    type: "single",
    options: [
      { value: "wohnung", label: "Wohnung" },
      { value: "haus", label: "Haus" },
      { value: "gewerbe", label: "Gewerbe" },
      { value: "keller", label: "Keller" },
      { value: "dachgeschoss", label: "Dachgeschoss" },
      { value: "aussen", label: "Außenbereich" },
    ],
  },
  {
    id: "components",
    title: "Welche Sanitärkomponenten sind betroffen?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "waschbecken", label: "Waschbecken" },
      { value: "wc", label: "WC" },
      { value: "urinal", label: "Urinal" },
      { value: "dusche", label: "Dusche" },
      { value: "badewanne", label: "Badewanne" },
      { value: "armaturen", label: "Armaturen" },
      { value: "wasserleitungen", label: "Wasserleitungen" },
      { value: "abwasserleitungen", label: "Abwasserleitungen" },
      { value: "warmwasserbereiter", label: "Warmwasserbereiter / Boiler" },
      { value: "zirkulation", label: "Zirkulationsleitung" },
      { value: "spuele", label: "Küche / Spüle" },
      { value: "garten", label: "Gartenanschluss" },
      { value: "regenwasser", label: "Regenwasserablauf" },
    ],
  },
  {
    id: "isEmergency",
    title: "Handelt es sich um einen Notfall?",
    type: "single",
    options: [
      { value: "akut", label: "Ja, akuter Notfall (Wasser läuft / tropft stark)" },
      { value: "kein_wasser", label: "Ja, aber kein Wasser mehr vorhanden" },
      { value: "geplant_reparatur", label: "Nein, geplante Reparatur" },
      { value: "geplant_neu", label: "Nein, geplante Neuinstallation" },
    ],
  },
  {
    id: "urgency",
    title: "Wie dringend ist Ihr Anliegen?",
    type: "single",
    options: [
      { value: "sofort", label: "Sofort / innerhalb 1 Stunde" },
      { value: "heute", label: "Heute noch" },
      { value: "woche", label: "Diese Woche" },
      { value: "nicht_dringend", label: "Nicht dringend" },
    ],
  },
  {
    id: "hasPhotos",
    title: "Sind Fotos verfügbar?",
    subtitle: "Fotos helfen uns bei der Einschätzung",
    type: "single",
    options: [
      { value: "ja", label: "Ja (bitte per E-Mail/WhatsApp senden)" },
      { value: "nein", label: "Nein" },
    ],
  },
  {
    id: "accessSituation",
    title: "Zugang / Einbausituation",
    type: "single",
    options: [
      { value: "leicht", label: "Leicht zugänglich" },
      { value: "schwer", label: "Schwer zugänglich" },
      { value: "verkleidung", label: "Verkleidung muss geöffnet werden" },
      { value: "wand_boden", label: "Wand / Boden muss geöffnet werden" },
      { value: "unklar", label: "Unklar" },
    ],
  },
  {
    id: "floorLevel",
    title: "In welcher Etage?",
    type: "single",
    options: [
      { value: "eg", label: "Erdgeschoss" },
      { value: "1-2og", label: "1.–2. OG" },
      { value: "3og+", label: "ab 3. OG" },
      { value: "keller", label: "Keller" },
    ],
  },
  {
    id: "waterShutoff",
    title: "Wasser absperrbar?",
    type: "single",
    options: [
      { value: "ja", label: "Ja, Hauptwasserhahn vorhanden" },
      { value: "nein", label: "Nein" },
      { value: "unklar", label: "Unklar" },
    ],
  },
  {
    id: "description",
    title: "Zusatzinformationen",
    subtitle: "Bitte kurz beschreiben, was passiert ist bzw. was installiert werden soll",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Ihre Kontaktdaten",
    subtitle: "Für Terminvereinbarung und Rückfragen",
    type: "contact",
  },
];

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || "";

function calculatePrice(data: LeadData): string {
  let minPrice = 89;
  let maxPrice = 149;
  
  // Base on urgency
  if (data.urgency === "sofort" || data.isEmergency === "akut") {
    minPrice = 299;
    maxPrice = 399;
  } else if (data.urgency === "heute" || data.isEmergency === "kein_wasser") {
    minPrice = 199;
    maxPrice = 299;
  }
  
  // Add complexity based on service type
  if (data.serviceTypes.includes("rohrbruch")) {
    minPrice += 100;
    maxPrice += 150;
  }
  if (data.serviceTypes.includes("bad_komplett")) {
    minPrice = 2500;
    maxPrice = 8000;
  }
  
  // Access difficulty
  if (data.accessSituation === "wand_boden") {
    minPrice += 100;
    maxPrice += 200;
  }
  
  return `${minPrice} - ${maxPrice} EUR`;
}

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [leadData, setLeadData] = useState<LeadData>({
    serviceTypes: [],
    locationType: "",
    components: [],
    isEmergency: "",
    urgency: "",
    hasPhotos: "",
    accessSituation: "",
    floorLevel: "",
    waterShutoff: "",
    description: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    preferredTime: "",
    estimatedPrice: "",
  });
  
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  const currentQuestion = QUESTIONS[currentStep];
  const progress = ((currentStep + 1) / QUESTIONS.length) * 100;

  const handleSingleSelect = (value: string) => {
    if (currentQuestion.id !== "contact") {
      const fieldId = currentQuestion.id as keyof LeadData;
      setLeadData(prev => ({ ...prev, [fieldId]: value }));
    }
  };

  const handleMultiSelect = (value: string, checked: boolean) => {
    const fieldId = currentQuestion.id as keyof LeadData;
    if (fieldId === "serviceTypes" || fieldId === "components") {
      setLeadData(prev => ({
        ...prev,
        [fieldId]: checked 
          ? [...(prev[fieldId] as string[]), value]
          : (prev[fieldId] as string[]).filter(v => v !== value)
      }));
    }
  };

  const handleTextChange = (value: string) => {
    if (currentQuestion.id !== "contact") {
      const fieldId = currentQuestion.id as keyof LeadData;
      setLeadData(prev => ({ ...prev, [fieldId]: value }));
    }
  };

  const handleContactChange = (field: keyof LeadData, value: string) => {
    setLeadData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = (): boolean => {
    const q = currentQuestion;
    if (q.type === "multi") {
      const arr = leadData[q.id as keyof LeadData] as string[];
      return arr.length > 0;
    }
    if (q.type === "single") {
      return !!(leadData[q.id as keyof LeadData] as string);
    }
    if (q.type === "textarea") {
      return true; // Optional
    }
    if (q.type === "contact") {
      return !!(leadData.name && leadData.phone && leadData.address);
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const estimatedPrice = calculatePrice(leadData);
    const finalData = { ...leadData, estimatedPrice };
    
    const payload = {
      ...finalData,
      timestamp: new Date().toISOString(),
      source: "website_chatbot",
      page_url: window.location.href,
    };

    const webhookPromises: Promise<Response>[] = [];
    
    if (WEBHOOK_URL && WEBHOOK_URL.trim() !== "") {
      webhookPromises.push(
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          mode: "no-cors",
          body: JSON.stringify(payload),
        })
      );
    }
    
    webhookPromises.push(
      fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      })
    );

    try {
      await Promise.all(webhookPromises);
      setLeadData(prev => ({ ...prev, estimatedPrice }));
      setIsComplete(true);
    } catch (error) {
      console.error("Lead submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPulse(false);
  };

  const renderQuestion = () => {
    const q = currentQuestion;

    if (q.type === "single" && q.options) {
      const selectedValue = leadData[q.id as keyof LeadData] as string;
      return (
        <div className="space-y-2">
          {q.options.map((opt) => (
            <Button
              key={opt.value}
              variant={selectedValue === opt.value ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-3 px-4"
              onClick={() => handleSingleSelect(opt.value)}
              data-testid={`option-${q.id}-${opt.value}`}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      );
    }

    if (q.type === "multi" && q.options) {
      const selectedValues = leadData[q.id as keyof LeadData] as string[];
      return (
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {q.options.map((opt) => (
            <label 
              key={opt.value} 
              htmlFor={`${q.id}-${opt.value}`}
              className="flex items-center space-x-3 p-3 rounded-md border border-border hover-elevate cursor-pointer"
            >
              <Checkbox
                id={`${q.id}-${opt.value}`}
                checked={selectedValues.includes(opt.value)}
                onCheckedChange={(checked) => handleMultiSelect(opt.value, !!checked)}
                data-testid={`checkbox-${q.id}-${opt.value}`}
              />
              <span className="cursor-pointer flex-1">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      );
    }

    if (q.type === "textarea") {
      return (
        <Textarea
          value={leadData[q.id as keyof LeadData] as string}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Beschreiben Sie Ihr Anliegen..."
          className="min-h-[100px]"
          data-testid={`textarea-${q.id}`}
        />
      );
    }

    if (q.type === "contact") {
      return (
        <div className="space-y-3">
          <Input
            value={leadData.name}
            onChange={(e) => handleContactChange("name", e.target.value)}
            placeholder="Vorname & Nachname *"
            data-testid="input-name"
          />
          <Input
            value={leadData.address}
            onChange={(e) => handleContactChange("address", e.target.value)}
            placeholder="Straße, Hausnummer, PLZ, Ort *"
            data-testid="input-address"
          />
          <Input
            value={leadData.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
            placeholder="Telefon *"
            type="tel"
            data-testid="input-phone"
          />
          <Input
            value={leadData.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
            placeholder="E-Mail (optional)"
            type="email"
            data-testid="input-email"
          />
          <Input
            value={leadData.preferredTime}
            onChange={(e) => handleContactChange("preferredTime", e.target.value)}
            placeholder="Terminwunsch (z.B. morgen 10 Uhr)"
            data-testid="input-preferred-time"
          />
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[calc(100%-2rem)] max-w-md">
          <Card className="shadow-2xl border-2 border-secondary/20">
            <CardHeader className="bg-secondary text-secondary-foreground rounded-t-lg p-4">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">Münchner Sanitär</CardTitle>
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span>Online - Sofort Preisschätzung</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon" 
                  className="text-white hover:bg-white/20"
                  onClick={toggleChat}
                  data-testid="button-close-chat"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>
            
            <CardContent className="p-0">
              {!isComplete ? (
                <>
                  <div className="px-4 pt-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Schritt {currentStep + 1} von {QUESTIONS.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div ref={contentRef} className="p-4 space-y-4 max-h-80 overflow-y-auto">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="bg-card border border-card-border rounded-lg rounded-tl-none p-3">
                        <p className="font-medium text-sm">{currentQuestion.title}</p>
                        {currentQuestion.subtitle && (
                          <p className="text-xs text-muted-foreground mt-1">{currentQuestion.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    {renderQuestion()}
                  </div>
                  
                  <div className="p-4 border-t border-border flex gap-2">
                    {currentStep > 0 && (
                      <Button 
                        variant="outline" 
                        onClick={handleBack}
                        data-testid="button-back"
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Zurück
                      </Button>
                    )}
                    <Button 
                      className="flex-1"
                      onClick={handleNext}
                      disabled={!canProceed() || isSubmitting}
                      data-testid="button-next"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : currentStep === QUESTIONS.length - 1 ? (
                        <>
                          Anfrage senden
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Weiter
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Anfrage gesendet!</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Vielen Dank, {leadData.name}! Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4 text-left">
                    <p className="text-sm font-medium">Geschätzte Kosten:</p>
                    <p className="text-xl font-bold text-primary">{leadData.estimatedPrice}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      inkl. Anfahrt im Stadtgebiet München
                    </p>
                  </div>
                  
                  {(leadData.isEmergency === "akut" || leadData.urgency === "sofort") && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                      <p className="text-sm text-destructive font-medium">
                        Notfall? Rufen Sie uns direkt an:
                      </p>
                      <Button className="mt-2 w-full" asChild>
                        <a href="tel:+4989123456789">
                          <Phone className="w-4 h-4 mr-2" />
                          089 123 456 789
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
      
      <Button
        onClick={toggleChat}
        className={`fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-xl ${
          isOpen ? "bg-muted text-muted-foreground" : "bg-primary"
        }`}
        size="icon"
        data-testid="button-toggle-chat"
      >
        {isOpen ? (
          <X className="w-6 h-6" />
        ) : (
          <>
            <MessageCircle className="w-6 h-6" />
            {showPulse && (
              <span className="absolute -top-1 -right-1 w-4 h-4 bg-destructive rounded-full animate-ping" />
            )}
          </>
        )}
      </Button>
      
      {!isOpen && showPulse && (
        <div className="fixed bottom-20 right-4 z-40 bg-card border border-card-border rounded-lg p-3 shadow-lg max-w-xs animate-bounce">
          <p className="text-sm">
            <span className="font-semibold">Jetzt online Termin buchen</span>
            <br />
            <span className="text-muted-foreground">Preisschätzung in 2 Minuten!</span>
          </p>
        </div>
      )}
    </>
  );
}
