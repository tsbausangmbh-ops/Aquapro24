import { useState, useMemo } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { 
  Check, 
  Clock, 
  Shield,
  AlertCircle,
  Euro,
  Bot,
  Send,
  Loader2,
  CheckCircle2,
  Calendar,
  User,
  Phone,
  Mail,
  ArrowRight,
  Sparkles
} from "lucide-react";

const pricingInfo = [
  {
    title: "Anfahrtspauschale",
    price: "ab 49 €",
    note: "netto, Raum München",
    icon: Clock,
    isPackage: true,
    packageContents: [
      "0–10 km: 49 – 69 € netto",
      "10–20 km: 69 – 89 € netto",
      "20–30 km: 89 – 119 € netto",
    ],
  },
  {
    title: "Jede weitere Stunde",
    price: "ab 89 €",
    note: "netto, je nach Einsatzzeit",
    icon: Euro,
    isPackage: true,
    packageContents: [
      "Werktags 08:00 – 16:30 Uhr: 89 € netto",
      "Werktags 16:30 – 22:00 Uhr: 149 € netto",
      "WE / Feiertage: 199 € netto",
    ],
  },
  {
    title: "Notdienst-Paket",
    price: "299 €",
    note: "Anfahrt + 1. Arbeitsstunde",
    icon: AlertCircle,
    isPackage: true,
    isHighlighted: true,
    packageContents: [
      "Anfahrt + 1. Arbeitsstunde: 299 € netto",
      "Störungsanalyse",
      "Sofortige Ersthilfe / Reparaturversuch",
      "Materialeinsatz nach Verbrauch (separat)",
    ],
  },
];

const guarantees = [
  "Festpreis vor Arbeitsbeginn",
  "Keine versteckten Kosten",
  "Rechnung erst nach Fertigstellung",
  "Alle Preise inkl. MwSt.",
  "Kostenvoranschlag bei größeren Arbeiten",
  "Garantie auf alle Arbeiten",
];

const priceEstimates: { keywords: string[]; service: string; minPrice: number; maxPrice: number }[] = [
  { keywords: ["bad", "badsanierung", "dusche", "badewanne", "fliesen", "badezimmer"], service: "Badsanierung", minPrice: 180, maxPrice: 420 },
  { keywords: ["wasserinstallation", "wasserleitung", "wasseranschluss", "installation"], service: "Wasserinstallation", minPrice: 120, maxPrice: 320 },
  { keywords: ["rohrbruch", "wasserrohr", "rohr", "leck", "undicht", "wasser", "rohrreinigung"], service: "Rohr-Service", minPrice: 95, maxPrice: 280 },
  { keywords: ["verstopf", "abfluss", "toilette", "wc", "klo", "verstopfung"], service: "Rohrreinigung", minPrice: 85, maxPrice: 180 },
  { keywords: ["wasserhahn", "armatur", "tropf", "mischbatterie"], service: "Armaturenservice", minPrice: 75, maxPrice: 150 },
  { keywords: ["boiler", "warmwasser", "durchlauferhitzer", "speicher"], service: "Warmwasseranlage", minPrice: 110, maxPrice: 280 },
  { keywords: ["heizung", "heizkörper", "thermostat", "heizungsausfall", "kalt", "warm", "wartung"], service: "Heizungsservice", minPrice: 90, maxPrice: 250 },
  { keywords: ["sanitär", "waschbecken", "spüle", "küche"], service: "Sanitärarbeiten", minPrice: 90, maxPrice: 220 },
];

const MARKUP = 1.20;

function estimatePrice(problemDescription: string): { service: string; minPrice: number; maxPrice: number } | null {
  const lowerProblem = problemDescription.toLowerCase();
  
  for (const estimate of priceEstimates) {
    if (estimate.keywords.some(keyword => lowerProblem.includes(keyword))) {
      return {
        service: estimate.service,
        minPrice: Math.round(estimate.minPrice * MARKUP),
        maxPrice: Math.round(estimate.maxPrice * MARKUP),
      };
    }
  }
  
  return null;
}

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || "";

type FormStep = "welcome" | "problem" | "appointment" | "contact" | "submitting" | "complete";

function generateTimeSlots() {
  const slots: string[] = [];
  for (let hour = 8; hour <= 18; hour++) {
    slots.push(`${hour.toString().padStart(2, '0')}:00`);
    if (hour < 18) {
      slots.push(`${hour.toString().padStart(2, '0')}:30`);
    }
  }
  return slots;
}

function generateAvailableDates() {
  const dates: { value: string; label: string }[] = [];
  const today = new Date();
  const weekdays = ["So", "Mo", "Di", "Mi", "Do", "Fr", "Sa"];
  
  for (let i = 1; i <= 14; i++) {
    const date = new Date(today);
    date.setDate(today.getDate() + i);
    
    if (date.getDay() !== 0) {
      const day = date.getDate().toString().padStart(2, '0');
      const month = (date.getMonth() + 1).toString().padStart(2, '0');
      const weekday = weekdays[date.getDay()];
      
      dates.push({
        value: `${date.getFullYear()}-${month}-${day}`,
        label: `${weekday}, ${day}.${month}.`,
      });
    }
  }
  
  return dates;
}

export default function Pricing() {
  const [step, setStep] = useState<FormStep>("welcome");
  const [problem, setProblem] = useState("");
  const [priceResult, setPriceResult] = useState<{ service: string; minPrice: number; maxPrice: number } | null>(null);
  const [selectedDate, setSelectedDate] = useState("");
  const [selectedTime, setSelectedTime] = useState("");
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");

  const availableDates = useMemo(() => generateAvailableDates(), []);
  const timeSlots = useMemo(() => generateTimeSlots(), []);

  const handleStartChat = () => {
    setStep("problem");
  };

  const handleProblemSubmit = () => {
    if (!problem.trim()) return;
    const estimate = estimatePrice(problem);
    setPriceResult(estimate || { service: "Allgemeine Arbeiten", minPrice: 96, maxPrice: 240 });
    setStep("appointment");
  };

  const handleAppointmentSubmit = () => {
    if (!selectedDate || !selectedTime) return;
    setStep("contact");
  };

  const handleContactSubmit = async () => {
    if (!name.trim() || !phone.trim() || !address.trim()) return;
    setStep("submitting");

    const selectedDateObj = availableDates.find(d => d.value === selectedDate);
    const appointmentDisplay = selectedDateObj ? `${selectedDateObj.label} um ${selectedTime} Uhr` : `${selectedDate} ${selectedTime}`;

    const payload = {
      name,
      phone,
      email,
      address,
      problem,
      estimatedPrice: priceResult ? `${priceResult.service}: ca. ${priceResult.minPrice} - ${priceResult.maxPrice} EUR` : "Wird ermittelt",
      appointmentDate: selectedDate,
      appointmentTime: selectedTime,
      appointmentDisplay,
      source: "website_ai_booking",
      timestamp: new Date().toISOString(),
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
      setStep("complete");
    } catch (error) {
      console.error("Lead submission error:", error);
      setStep("complete");
    }
  };

  const resetForm = () => {
    setStep("welcome");
    setProblem("");
    setPriceResult(null);
    setSelectedDate("");
    setSelectedTime("");
    setName("");
    setPhone("");
    setEmail("");
    setAddress("");
  };

  const getSelectedDateLabel = () => {
    const found = availableDates.find(d => d.value === selectedDate);
    return found ? found.label : "";
  };

  return (
    <section id="pricing" className="py-16 lg:py-24">
      <div className="max-w-5xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <Badge className="mb-4 bg-accent/10 text-accent border-accent/20">
            <Shield className="w-3 h-3 mr-1" />
            Festpreis-Garantie München
          </Badge>
          <h2 className="text-3xl lg:text-4xl font-bold tracking-tight mb-4">
            Stellen Sie sich vor: Sie kennen den Festpreis, bevor wir starten
          </h2>
          <h3 className="text-xl text-foreground font-medium mb-2">
            Wenn Sie unser Angebot anfordern, erhalten Sie Klarheit in Sekunden
          </h3>
          <p className="text-lg text-muted-foreground">
            Transparente Preise für München, Garching, Starnberg, Freising & das gesamte Umland – ohne versteckte Kosten.
          </p>
        </div>
        
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {pricingInfo.map((item, index) => (
            <Card key={index} className={`text-center ${item.isHighlighted ? 'border-2 border-primary/30 bg-primary/5' : ''}`}>
              <CardHeader>
                <div className={`w-12 h-12 rounded-full flex items-center justify-center mx-auto mb-2 ${item.isHighlighted ? 'bg-primary/20' : 'bg-secondary/10'}`}>
                  <item.icon className={`w-6 h-6 ${item.isHighlighted ? 'text-primary' : 'text-secondary'}`} />
                </div>
                <CardTitle className="text-base font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-1" data-testid={`text-price-${index}`}>
                  {item.price}
                </p>
                <p className="text-sm text-muted-foreground mb-3">{item.note}</p>
                {item.packageContents && (
                  <div className="text-left mt-4 pt-4 border-t border-border">
                    <p className="text-xs font-semibold text-muted-foreground mb-3">
                      {item.isHighlighted ? "Paket enthält:" : "Staffelung:"}
                    </p>
                    <ul className="space-y-2">
                      {item.packageContents.map((content, i) => {
                        const parts = content.split(": ");
                        const hasPrice = parts.length === 2;
                        return (
                          <li key={i} className="flex items-start gap-2 text-xs">
                            <Check className="w-3 h-3 text-accent mt-0.5 flex-shrink-0" />
                            {hasPrice ? (
                              <span className="flex justify-between w-full gap-2">
                                <span className="text-muted-foreground">{parts[0]}</span>
                                <span className="font-semibold text-foreground whitespace-nowrap">{parts[1]}</span>
                              </span>
                            ) : (
                              <span>{content}</span>
                            )}
                          </li>
                        );
                      })}
                    </ul>
                  </div>
                )}
              </CardContent>
            </Card>
          ))}
        </div>
        
        <Card className="border-2 border-secondary/20">
          <CardContent className="p-8">
            <div className="grid md:grid-cols-2 gap-8 items-center">
              <div>
                <h3 className="text-xl font-bold mb-4">
                  Ihre Festpreis-Garantie – Ihr Schutz vor bösen Überraschungen
                </h3>
                <p className="text-muted-foreground mb-4">
                  <span className="text-foreground font-medium">Wenn Sie bei uns anrufen,</span> nennen wir Ihnen den exakten Preis, 
                  <strong> bevor</strong> wir mit der Arbeit beginnen. So entscheiden Sie in Ruhe – garantiert.
                </p>
                <p className="text-sm text-muted-foreground mb-6 bg-muted/50 p-3 rounded-md">
                  <strong className="text-foreground">Hinweis:</strong> Bei kleinen Arbeiten wie WC-Montage, Armaturen-Austausch usw. erhalten Sie direkt am Telefon einen verbindlichen Festpreis.
                </p>
                <ul className="space-y-3">
                  {guarantees.map((guarantee, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <div className="w-5 h-5 rounded-full bg-accent flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-accent-foreground" />
                      </div>
                      <span className="text-sm" data-testid={`text-guarantee-${index}`}>{guarantee}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div className="bg-secondary/5 border-2 border-secondary/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-10 h-10 rounded-full bg-secondary flex items-center justify-center">
                      <Bot className="w-5 h-5 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold">KI-Terminassistent</p>
                      <div className="flex items-center gap-1.5 text-xs text-muted-foreground">
                        <span className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                        <span>Online - Antworten in Sekunden</span>
                      </div>
                    </div>
                  </div>

                  {step === "welcome" && (
                    <div className="space-y-4">
                      <div className="bg-card rounded-lg p-4 border border-card-border">
                        <p className="text-sm">
                          Hallo! Ich bin Ihr virtueller Assistent. Ich helfe Ihnen gerne bei:
                        </p>
                        <ul className="text-sm text-muted-foreground mt-2 space-y-1">
                          <li className="flex items-center gap-2">
                            <Sparkles className="w-3 h-3 text-secondary" />
                            Sofortige Preisschätzung
                          </li>
                          <li className="flex items-center gap-2">
                            <Calendar className="w-3 h-3 text-secondary" />
                            Direkte Terminbuchung
                          </li>
                        </ul>
                      </div>
                      <Button 
                        onClick={handleStartChat}
                        className="w-full gap-2"
                        data-testid="button-start-chat"
                      >
                        <Send className="w-4 h-4" />
                        Jetzt Anfrage starten
                      </Button>
                    </div>
                  )}

                  {step === "problem" && (
                    <div className="space-y-3">
                      <div className="bg-card rounded-lg p-3 border border-card-border">
                        <p className="text-sm">Was kann ich für Sie tun? Beschreiben Sie Ihr Anliegen:</p>
                      </div>
                      <Textarea
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="z.B. 'Neue Dusche installieren', 'Bad komplett sanieren', 'Wasserhahn tropft'..."
                        className="min-h-20 text-sm resize-none"
                        data-testid="input-problem-description"
                      />
                      <Button 
                        onClick={handleProblemSubmit}
                        disabled={!problem.trim()}
                        className="w-full gap-2"
                        data-testid="button-get-price"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Weiter zur Preisschätzung
                      </Button>
                    </div>
                  )}

                  {step === "appointment" && priceResult && (
                    <div className="space-y-4">
                      <div className="bg-accent/10 border border-accent/30 rounded-lg p-3 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Geschätzte Kosten für {priceResult.service}</p>
                        <p className="text-xl font-bold text-foreground" data-testid="text-estimated-price">
                          ca. {priceResult.minPrice} - {priceResult.maxPrice} EUR
                        </p>
                        <p className="text-xs text-muted-foreground">inkl. Anfahrt München</p>
                      </div>
                      
                      <div className="bg-card rounded-lg p-3 border border-card-border">
                        <p className="text-sm">Super! Wann passt Ihnen ein Termin?</p>
                      </div>
                      
                      <div className="grid grid-cols-2 gap-2">
                        <Select value={selectedDate} onValueChange={setSelectedDate}>
                          <SelectTrigger className="text-sm" data-testid="select-date">
                            <SelectValue placeholder="Tag wählen" />
                          </SelectTrigger>
                          <SelectContent>
                            {availableDates.map((date) => (
                              <SelectItem key={date.value} value={date.value}>
                                {date.label}
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                        
                        <Select value={selectedTime} onValueChange={setSelectedTime}>
                          <SelectTrigger className="text-sm" data-testid="select-time">
                            <SelectValue placeholder="Uhrzeit" />
                          </SelectTrigger>
                          <SelectContent>
                            {timeSlots.map((time) => (
                              <SelectItem key={time} value={time}>
                                {time} Uhr
                              </SelectItem>
                            ))}
                          </SelectContent>
                        </Select>
                      </div>
                      
                      <Button 
                        onClick={handleAppointmentSubmit}
                        disabled={!selectedDate || !selectedTime}
                        className="w-full gap-2"
                        data-testid="button-confirm-appointment"
                      >
                        <ArrowRight className="w-4 h-4" />
                        Termin bestätigen
                      </Button>
                    </div>
                  )}

                  {step === "contact" && (
                    <div className="space-y-4">
                      <div className="bg-accent/10 border border-accent/30 rounded-lg p-3">
                        <div className="flex items-center gap-2 text-sm">
                          <Calendar className="w-4 h-4 text-accent" />
                          <span className="font-medium">{getSelectedDateLabel()} um {selectedTime} Uhr</span>
                        </div>
                        {priceResult && (
                          <p className="text-xs text-muted-foreground mt-1">
                            {priceResult.service}: ca. {priceResult.minPrice} - {priceResult.maxPrice} EUR
                          </p>
                        )}
                      </div>
                      
                      <div className="bg-card rounded-lg p-3 border border-card-border">
                        <p className="text-sm">Fast geschafft! Noch Ihre Kontaktdaten:</p>
                      </div>
                      
                      <div className="space-y-2">
                        <div className="relative">
                          <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            value={name}
                            onChange={(e) => setName(e.target.value)}
                            placeholder="Ihr Name"
                            className="text-sm pl-9"
                            data-testid="input-name"
                          />
                        </div>
                        <div className="relative">
                          <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            value={phone}
                            onChange={(e) => setPhone(e.target.value)}
                            placeholder="Telefonnummer"
                            className="text-sm pl-9"
                            data-testid="input-phone"
                          />
                        </div>
                        <div className="relative">
                          <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                          <Input
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="E-Mail (optional)"
                            className="text-sm pl-9"
                            data-testid="input-email"
                          />
                        </div>
                        <Textarea
                          value={address}
                          onChange={(e) => setAddress(e.target.value)}
                          placeholder="Ihre Adresse (Straße, Hausnummer, PLZ München)"
                          className="text-sm min-h-16 resize-none"
                          data-testid="input-address"
                        />
                      </div>
                      
                      <Button 
                        onClick={handleContactSubmit}
                        disabled={!name.trim() || !phone.trim() || !address.trim()}
                        className="w-full gap-2"
                        data-testid="button-submit-booking"
                      >
                        <CheckCircle2 className="w-4 h-4" />
                        Termin verbindlich buchen
                      </Button>
                      
                      <button 
                        onClick={resetForm}
                        className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="button-reset-form"
                      >
                        Abbrechen
                      </button>
                    </div>
                  )}

                  {step === "submitting" && (
                    <div className="flex flex-col items-center justify-center gap-3 py-8">
                      <Loader2 className="w-8 h-8 animate-spin text-secondary" />
                      <span className="text-sm">Termin wird gebucht...</span>
                    </div>
                  )}

                  {step === "complete" && (
                    <div className="text-center py-4 space-y-4">
                      <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center mx-auto">
                        <CheckCircle2 className="w-8 h-8 text-accent" />
                      </div>
                      <div>
                        <p className="font-semibold text-lg">Termin gebucht!</p>
                        <p className="text-sm text-muted-foreground mt-1">
                          {getSelectedDateLabel()} um {selectedTime} Uhr
                        </p>
                      </div>
                      <div className="bg-card rounded-lg p-3 border border-card-border text-sm text-left">
                        <p>Wir haben Ihre Buchung erhalten und melden uns in Kürze zur Bestätigung bei Ihnen.</p>
                      </div>
                      <Button 
                        onClick={resetForm}
                        variant="outline"
                        size="sm"
                        data-testid="button-new-request"
                      >
                        Neue Anfrage
                      </Button>
                    </div>
                  )}
                  
                  <div className="mt-4 pt-4 border-t border-border/50">
                    <p className="text-xs text-muted-foreground text-center mb-3">
                      Lieber schriftlich? Kein Problem – viele unserer Kunden schätzen den Überblick einer E-Mail-Anfrage.
                    </p>
                    <Button 
                      variant="outline"
                      size="sm"
                      className="w-full gap-2"
                      onClick={() => window.location.href = 'mailto:info@sanitaer-muenchen.de?subject=Anfrage%20Sanitär%20Service'}
                      data-testid="button-email-inquiry"
                    >
                      <Mail className="w-4 h-4" />
                      Per E-Mail anfragen
                    </Button>
                    <p className="text-xs text-muted-foreground text-center mt-2">
                      Wir antworten in der Regel innerhalb von 2 Stunden
                    </p>
                  </div>
                </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
