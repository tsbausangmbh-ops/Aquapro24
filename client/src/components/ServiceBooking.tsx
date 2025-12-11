import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { Calendar, Clock, CheckCircle2, Send, Phone, X } from "lucide-react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export type ServiceType = 'sanitaer' | 'bad' | 'heizung' | 'waermepumpe' | 'haustechnik';

interface ServiceConfig {
  name: string;
  colorClass: string;
  bgClass: string;
  borderClass: string;
  hoverClass: string;
  gradientClass: string;
  services: string[];
  additionalQuestions?: {
    heizungstyp?: string[];
    heizungsalter?: string[];
    dringlichkeit?: string[];
  };
}

const serviceConfigs: Record<ServiceType, ServiceConfig> = {
  sanitaer: {
    name: "Sanitär",
    colorClass: "text-secondary",
    bgClass: "bg-secondary",
    borderClass: "border-secondary",
    hoverClass: "hover:bg-secondary/90",
    gradientClass: "from-secondary/20 to-secondary/5",
    services: [
      "Wasserhahn tropft / undicht",
      "Abfluss verstopft",
      "Rohrbruch / Wasserrohrbruch",
      "Toilette defekt / verstopft",
      "Neue Armaturen installieren",
      "Wasserleitung verlegen",
      "Druckprüfung / Dichtheitsprüfung",
      "Sonstiges Sanitärproblem"
    ]
  },
  bad: {
    name: "Badsanierung",
    colorClass: "text-cyan-600 dark:text-cyan-400",
    bgClass: "bg-cyan-600",
    borderClass: "border-cyan-600",
    hoverClass: "hover:bg-cyan-700",
    gradientClass: "from-cyan-500/20 to-cyan-500/5",
    services: [
      "Komplette Badsanierung (alles neu)",
      "Dusche erneuern / Walk-In Dusche",
      "Badewanne gegen Dusche tauschen",
      "Barrierefreies Bad / Seniorengerecht",
      "WC und Waschbecken erneuern",
      "Fliesen erneuern",
      "Kostenlose Beratung vor Ort",
      "3D-Badplanung gewünscht"
    ]
  },
  heizung: {
    name: "Heizung",
    colorClass: "text-red-600 dark:text-red-400",
    bgClass: "bg-red-600",
    borderClass: "border-red-600",
    hoverClass: "hover:bg-red-700",
    gradientClass: "from-red-500/20 to-red-500/5",
    services: [
      "Heizung ausgefallen (Notfall)",
      "Heizung wird nicht warm",
      "Heizung macht Geräusche / gluckert",
      "Heizungswartung / Jahresservice",
      "Neue Heizung installieren",
      "Alte Heizung modernisieren / tauschen",
      "Thermostat / Regelung defekt",
      "Heizkörper entlüften / tauschen",
      "Wasserdruck zu niedrig",
      "Brenner startet nicht"
    ],
    additionalQuestions: {
      heizungstyp: [
        "Gasheizung",
        "Ölheizung",
        "Wärmepumpe",
        "Pelletheizung",
        "Fernwärme",
        "Elektroheizung",
        "Weiß ich nicht"
      ],
      heizungsalter: [
        "Unter 5 Jahre",
        "5-10 Jahre",
        "10-15 Jahre",
        "15-20 Jahre",
        "Über 20 Jahre",
        "Weiß ich nicht"
      ],
      dringlichkeit: [
        "Notfall - Heizung komplett aus",
        "Dringend - Innerhalb 24 Stunden",
        "Diese Woche",
        "Flexibel / Beratungstermin"
      ]
    }
  },
  waermepumpe: {
    name: "Wärmepumpe",
    colorClass: "text-orange-500 dark:text-orange-400",
    bgClass: "bg-orange-500",
    borderClass: "border-orange-500",
    hoverClass: "hover:bg-orange-600",
    gradientClass: "from-orange-500/20 to-orange-500/5",
    services: [
      "Beratung: Ist mein Haus geeignet?",
      "Angebot für Luft-Wasser-Wärmepumpe",
      "Angebot für Erdwärmepumpe",
      "Förderberatung (bis 70% Zuschuss)",
      "Heizungstausch Gas/Öl → Wärmepumpe",
      "Wärmepumpe Wartung / Service",
      "Wärmepumpe macht Probleme",
      "Kostenloser Vor-Ort-Check"
    ]
  },
  haustechnik: {
    name: "Haustechnik",
    colorClass: "text-emerald-600 dark:text-emerald-400",
    bgClass: "bg-emerald-600",
    borderClass: "border-emerald-600",
    hoverClass: "hover:bg-emerald-700",
    gradientClass: "from-emerald-500/20 to-emerald-500/5",
    services: [
      "Komplettplanung Neubau",
      "Wasserinstallation komplett",
      "Gasinstallation / Gasleitung",
      "Lüftungsanlage installieren",
      "Smart Home Heizungssteuerung",
      "Wartungsvertrag Haustechnik",
      "Energieberatung",
      "Sonstiges Haustechnik-Projekt"
    ]
  }
};

interface ServiceBookingProps {
  serviceType: ServiceType;
  buttonText?: string;
  buttonVariant?: 'default' | 'outline' | 'secondary';
  buttonSize?: 'default' | 'sm' | 'lg';
  className?: string;
}

export default function ServiceBooking({
  serviceType,
  buttonText = "24h Buchungstermin",
  buttonVariant = 'default',
  buttonSize = 'default',
  className = ""
}: ServiceBookingProps) {
  const [open, setOpen] = useState(false);
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    service: "",
    heizungstyp: "",
    heizungsalter: "",
    dringlichkeit: "",
    preferredDate: "",
    preferredTime: "",
    name: "",
    phone: "",
    email: "",
    street: "",
    zipCity: "",
    message: ""
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  // Reset state when serviceType changes (e.g., navigating between pages)
  useEffect(() => {
    setStep(1);
    setFormData({
      service: "",
      heizungstyp: "",
      heizungsalter: "",
      dringlichkeit: "",
      preferredDate: "",
      preferredTime: "",
      name: "",
      phone: "",
      email: "",
      street: "",
      zipCity: "",
      message: ""
    });
    setIsSuccess(false);
  }, [serviceType]);

  const config = serviceConfigs[serviceType];

  const handleInputChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    // Simulate API call - in production, send to webhook
    const webhookUrl = import.meta.env.VITE_WEBHOOK_URL;
    
    try {
      if (webhookUrl) {
        await fetch(webhookUrl, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({
            type: 'booking',
            serviceType: config.name,
            ...formData,
            timestamp: new Date().toISOString()
          })
        });
      }
      
      setIsSuccess(true);
      setTimeout(() => {
        setOpen(false);
        setStep(1);
        setFormData({
          service: "",
          heizungstyp: "",
          heizungsalter: "",
          dringlichkeit: "",
          preferredDate: "",
          preferredTime: "",
          name: "",
          phone: "",
          email: "",
          street: "",
          zipCity: "",
          message: ""
        });
        setIsSuccess(false);
      }, 3000);
    } catch (error) {
      console.error('Booking submission error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const hasAdditionalQuestions = serviceType === 'heizung' && config.additionalQuestions;
  const canProceedStep1 = formData.service !== "" && 
    (!hasAdditionalQuestions || (formData.heizungstyp !== "" && formData.dringlichkeit !== ""));
  const canProceedStep2 = formData.preferredDate !== "" && formData.preferredTime !== "";
  const canSubmit = formData.name && formData.phone && formData.email && formData.street && formData.zipCity;

  const buttonStyles: Record<ServiceType, string> = {
    sanitaer: "bg-secondary hover:bg-secondary/90 text-secondary-foreground",
    bad: "bg-cyan-600 hover:bg-cyan-700 text-white",
    heizung: "bg-destructive hover:bg-destructive/90 text-destructive-foreground",
    waermepumpe: "bg-orange-500 hover:bg-orange-600 text-white",
    haustechnik: "bg-emerald-600 hover:bg-emerald-700 text-white"
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <Button 
          size={buttonSize}
          className={`${buttonStyles[serviceType]} ${className}`}
          data-testid={`button-booking-${serviceType}`}
        >
          <Calendar className="w-4 h-4 mr-2" />
          {buttonText}
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[500px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2">
            <span className={`w-3 h-3 rounded-full ${config.bgClass}`} />
            Online-Terminbuchung: {config.name}
          </DialogTitle>
        </DialogHeader>

        {isSuccess ? (
          <div className="py-8 text-center space-y-4">
            <div className={`w-16 h-16 rounded-full ${config.bgClass} mx-auto flex items-center justify-center`}>
              <CheckCircle2 className="w-8 h-8 text-white" />
            </div>
            <h3 className="text-xl font-semibold">Anfrage erfolgreich gesendet!</h3>
            <p className="text-muted-foreground">
              Wir melden uns innerhalb von 2 Stunden bei Ihnen.
            </p>
          </div>
        ) : (
          <div className="space-y-6">
            {/* Progress Steps */}
            <div className="flex items-center justify-between mb-6">
              {[1, 2, 3].map((s) => (
                <div key={s} className="flex items-center">
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center text-sm font-medium transition-colors ${
                    step >= s ? `${config.bgClass} text-white` : 'bg-muted text-muted-foreground'
                  }`}>
                    {step > s ? <CheckCircle2 className="w-4 h-4" /> : s}
                  </div>
                  {s < 3 && (
                    <div className={`w-16 sm:w-24 h-1 mx-2 rounded ${step > s ? config.bgClass : 'bg-muted'}`} />
                  )}
                </div>
              ))}
            </div>

            {/* Step 1: Service Selection */}
            {step === 1 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label className="text-base font-medium">
                    {serviceType === 'heizung' ? 'Was ist das Problem?' : 'Welche Leistung benötigen Sie?'}
                  </Label>
                  <p className="text-sm text-muted-foreground mb-3">Wählen Sie Ihren gewünschten Service</p>
                </div>
                <div className="grid gap-2 max-h-48 overflow-y-auto">
                  {config.services.map((service) => (
                    <button
                      key={service}
                      onClick={() => handleInputChange('service', service)}
                      className={`p-3 text-left rounded-md border transition-all ${
                        formData.service === service
                          ? `${config.borderClass} ${config.bgClass}/10 border-2`
                          : 'border-border hover-elevate'
                      }`}
                      data-testid={`select-service-${service.toLowerCase().replace(/\s+/g, '-')}`}
                    >
                      <span className={formData.service === service ? config.colorClass : ''}>{service}</span>
                    </button>
                  ))}
                </div>

                {/* Additional questions for Heizung */}
                {hasAdditionalQuestions && config.additionalQuestions && (
                  <>
                    <div className="pt-2 border-t">
                      <Label className="text-base font-medium">Welche Heizungsart haben Sie?</Label>
                      <div className="grid grid-cols-2 gap-2 mt-2">
                        {config.additionalQuestions.heizungstyp?.map((typ) => (
                          <button
                            key={typ}
                            onClick={() => handleInputChange('heizungstyp', typ)}
                            className={`p-2 text-sm text-left rounded-md border transition-all ${
                              formData.heizungstyp === typ
                                ? `${config.borderClass} ${config.bgClass}/10 border-2`
                                : 'border-border hover-elevate'
                            }`}
                            data-testid={`select-heizungstyp-${typ.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <span className={formData.heizungstyp === typ ? config.colorClass : ''}>{typ}</span>
                          </button>
                        ))}
                      </div>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Wie alt ist Ihre Heizung?</Label>
                      <Select value={formData.heizungsalter} onValueChange={(v) => handleInputChange('heizungsalter', v)}>
                        <SelectTrigger className="mt-2" data-testid="select-heizungsalter">
                          <SelectValue placeholder="Alter wählen (optional)" />
                        </SelectTrigger>
                        <SelectContent>
                          {config.additionalQuestions.heizungsalter?.map((alter) => (
                            <SelectItem key={alter} value={alter}>{alter}</SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>

                    <div>
                      <Label className="text-base font-medium">Wie dringend ist es?</Label>
                      <div className="grid gap-2 mt-2">
                        {config.additionalQuestions.dringlichkeit?.map((d) => (
                          <button
                            key={d}
                            onClick={() => handleInputChange('dringlichkeit', d)}
                            className={`p-2 text-sm text-left rounded-md border transition-all ${
                              formData.dringlichkeit === d
                                ? `${config.borderClass} ${config.bgClass}/10 border-2`
                                : 'border-border hover-elevate'
                            }`}
                            data-testid={`select-dringlichkeit-${d.toLowerCase().replace(/\s+/g, '-')}`}
                          >
                            <span className={formData.dringlichkeit === d ? config.colorClass : ''}>{d}</span>
                          </button>
                        ))}
                      </div>
                    </div>
                  </>
                )}

                <Button 
                  className={`w-full ${buttonStyles[serviceType]}`}
                  disabled={!canProceedStep1}
                  onClick={() => setStep(2)}
                  data-testid="button-next-step-1"
                >
                  Weiter
                </Button>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label className="text-base font-medium">Wann passt es Ihnen?</Label>
                  <p className="text-sm text-muted-foreground mb-3">Wählen Sie Ihren Wunschtermin</p>
                </div>
                <div className="space-y-3">
                  <div>
                    <Label htmlFor="date">Wunschdatum</Label>
                    <Input
                      id="date"
                      type="date"
                      value={formData.preferredDate}
                      onChange={(e) => handleInputChange('preferredDate', e.target.value)}
                      min={new Date().toISOString().split('T')[0]}
                      data-testid="input-date"
                    />
                  </div>
                  <div>
                    <Label htmlFor="time">Bevorzugte Uhrzeit</Label>
                    <Select value={formData.preferredTime} onValueChange={(v) => handleInputChange('preferredTime', v)}>
                      <SelectTrigger data-testid="select-time">
                        <SelectValue placeholder="Uhrzeit wählen" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="08:00-10:00">08:00 - 10:00 Uhr</SelectItem>
                        <SelectItem value="10:00-12:00">10:00 - 12:00 Uhr</SelectItem>
                        <SelectItem value="12:00-14:00">12:00 - 14:00 Uhr</SelectItem>
                        <SelectItem value="14:00-16:00">14:00 - 16:00 Uhr</SelectItem>
                        <SelectItem value="16:00-18:00">16:00 - 18:00 Uhr</SelectItem>
                        <SelectItem value="flexibel">Flexibel</SelectItem>
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(1)} className="flex-1">
                    Zurück
                  </Button>
                  <Button 
                    className={`flex-1 ${buttonStyles[serviceType]}`}
                    disabled={!canProceedStep2}
                    onClick={() => setStep(3)}
                    data-testid="button-next-step-2"
                  >
                    Weiter
                  </Button>
                </div>
              </div>
            )}

            {/* Step 3: Contact Info */}
            {step === 3 && (
              <div className="space-y-4 animate-fade-in">
                <div>
                  <Label className="text-base font-medium">Ihre Kontaktdaten</Label>
                  <p className="text-sm text-muted-foreground mb-3">Damit wir Sie erreichen können</p>
                </div>
                <div className="grid gap-3">
                  <div>
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      value={formData.name}
                      onChange={(e) => handleInputChange('name', e.target.value)}
                      placeholder="Ali Kemal Kurt"
                      data-testid="input-name"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-2">
                    <div>
                      <Label htmlFor="phone">Telefon *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => handleInputChange('phone', e.target.value)}
                        placeholder="0152 12274043"
                        data-testid="input-phone"
                      />
                    </div>
                    <div>
                      <Label htmlFor="email">E-Mail *</Label>
                      <Input
                        id="email"
                        type="email"
                        value={formData.email}
                        onChange={(e) => handleInputChange('email', e.target.value)}
                        placeholder="max@beispiel.de"
                        data-testid="input-email"
                      />
                    </div>
                  </div>
                  <div>
                    <Label htmlFor="street">Straße & Hausnummer *</Label>
                    <Input
                      id="street"
                      value={formData.street}
                      onChange={(e) => handleInputChange('street', e.target.value)}
                      placeholder="Zielstattstr. 20"
                      data-testid="input-street"
                    />
                  </div>
                  <div>
                    <Label htmlFor="zipCity">PLZ & Ort *</Label>
                    <Input
                      id="zipCity"
                      value={formData.zipCity}
                      onChange={(e) => handleInputChange('zipCity', e.target.value)}
                      placeholder="81379 München"
                      data-testid="input-zip-city"
                    />
                  </div>
                  <div>
                    <Label htmlFor="message">Nachricht (optional)</Label>
                    <Textarea
                      id="message"
                      value={formData.message}
                      onChange={(e) => handleInputChange('message', e.target.value)}
                      placeholder="Beschreiben Sie kurz Ihr Anliegen..."
                      rows={3}
                      data-testid="input-message"
                    />
                  </div>
                </div>

                {/* Summary */}
                <Card className={`bg-gradient-to-r ${config.gradientClass}`}>
                  <CardContent className="p-3 text-sm">
                    <p className="font-medium mb-1">Ihre Buchung:</p>
                    <p>{config.name}: {formData.service}</p>
                    {serviceType === 'heizung' && formData.heizungstyp && (
                      <p>Heizungsart: {formData.heizungstyp}{formData.heizungsalter ? ` (${formData.heizungsalter})` : ''}</p>
                    )}
                    {serviceType === 'heizung' && formData.dringlichkeit && (
                      <p>Dringlichkeit: {formData.dringlichkeit}</p>
                    )}
                    <p>{formData.preferredDate} um {formData.preferredTime}</p>
                  </CardContent>
                </Card>

                <div className="flex gap-2">
                  <Button variant="outline" onClick={() => setStep(2)} className="flex-1">
                    Zurück
                  </Button>
                  <Button 
                    className={`flex-1 ${buttonStyles[serviceType]}`}
                    disabled={!canSubmit || isSubmitting}
                    onClick={handleSubmit}
                    data-testid="button-submit-booking"
                  >
                    {isSubmitting ? (
                      "Wird gesendet..."
                    ) : (
                      <>
                        <Send className="w-4 h-4 mr-2" />
                        Termin anfragen
                      </>
                    )}
                  </Button>
                </div>
              </div>
            )}

            {/* Quick Contact */}
            <div className="pt-4 border-t text-center">
              <p className="text-sm text-muted-foreground mb-2">Lieber telefonisch?</p>
              <Button variant="outline" size="sm" asChild>
                <a href="tel:+4915212274043" data-testid="button-call-booking">
                  <Phone className="w-4 h-4 mr-2" />
                  0152 12274043
                </a>
              </Button>
            </div>
          </div>
        )}
      </DialogContent>
    </Dialog>
  );
}

// Export config for use in pages
export { serviceConfigs };
