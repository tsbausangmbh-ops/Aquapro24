import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays, isBefore, startOfToday } from "date-fns";
import { de } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import AIChatWidget from "@/components/AIChatWidget";
import SEO from "@/components/SEO";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Calendar } from "@/components/ui/calendar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  CheckCircle2,
  Building,
  Calendar as CalendarIcon,
  User,
  Wrench,
  ArrowRight,
  ArrowLeft,
  Shield,
  Star,
  AlertTriangle,
  Home,
  Euro,
  FileText,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import heroImage from "@assets/stock_images/professional_plumber_39413514.jpg";

const bookingSchema = z.object({
  serviceType: z.string().min(1, "Bitte wählen Sie einen Service"),
  problemDetails: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen (min. 10 Zeichen)"),
  urgency: z.string().min(1, "Bitte wählen Sie die Dringlichkeit"),
  propertyType: z.string().min(1, "Bitte wählen Sie den Gebäudetyp"),
  ownershipType: z.string().min(1, "Bitte wählen Sie Ihren Status"),
  accessInfo: z.string().optional(),
  budget: z.string().min(1, "Bitte wählen Sie einen Budget-Rahmen"),
  preferredDate: z.string().min(1, "Bitte wählen Sie ein Datum"),
  preferredTime: z.string().min(1, "Bitte wählen Sie eine Uhrzeit"),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").optional().or(z.literal("")),
  stadtteil: z.string().min(1, "Bitte wählen Sie Ihren Stadtteil"),
  address: z.string().min(5, "Bitte geben Sie Ihre Adresse ein"),
});

const muenchnerStadtteile = [
  "Allach-Untermenzing", "Altstadt-Lehel", "Au-Haidhausen", "Aubing-Lochhausen-Langwied",
  "Berg am Laim", "Bogenhausen", "Feldmoching-Hasenbergl", "Hadern", "Laim",
  "Ludwigsvorstadt-Isarvorstadt", "Maxvorstadt", "Milbertshofen-Am Hart", "Moosach",
  "Neuhausen-Nymphenburg", "Obergiesing-Fasangarten", "Pasing-Obermenzing", "Perlach",
  "Ramersdorf-Perlach", "Schwabing-Freimann", "Schwabing-West", "Schwanthalerhöhe",
  "Sendling", "Sendling-Westpark", "Thalkirchen-Obersendling-Forstenried-Fürstenried-Solln",
  "Trudering-Riem", "Untergiesing-Harlaching"
];

type BookingFormData = z.infer<typeof bookingSchema>;

interface TimeSlot {
  time: string;
  available: boolean;
  label: string;
}

const serviceTypes = [
  { value: "sanitaer", label: "Sanitär & Klempner", icon: Wrench },
  { value: "heizung", label: "Heizung & Wartung", icon: Home },
  { value: "bad", label: "Badsanierung", icon: Home },
  { value: "waermepumpe", label: "Wärmepumpe", icon: Home },
  { value: "notdienst", label: "Notdienst (dringend)", icon: AlertTriangle },
  { value: "beratung", label: "Kostenlose Beratung", icon: FileText },
];

const urgencyOptions = [
  { value: "flexibel", label: "Flexibel", description: "Innerhalb der nächsten 2-4 Wochen" },
  { value: "bald", label: "Bald", description: "Innerhalb der nächsten 1-2 Wochen" },
  { value: "dringend", label: "Dringend", description: "Innerhalb weniger Tage" },
  { value: "sofort", label: "Notfall", description: "Heute oder morgen" },
];

const propertyTypes = [
  { value: "wohnung", label: "Wohnung", description: "Mietwohnung oder Eigentum" },
  { value: "haus", label: "Einfamilienhaus", description: "Eigenes Haus" },
  { value: "mehrfamilienhaus", label: "Mehrfamilienhaus", description: "Vermieter / Hausverwaltung" },
  { value: "gewerbe", label: "Gewerbe", description: "Geschäft, Büro, Praxis" },
];

const budgetOptions = [
  { value: "unter-500", label: "Unter 500 Euro", description: "Kleine Reparaturen" },
  { value: "500-1500", label: "500 - 1.500 Euro", description: "Mittlere Arbeiten" },
  { value: "1500-5000", label: "1.500 - 5.000 Euro", description: "Größere Projekte" },
  { value: "5000-15000", label: "5.000 - 15.000 Euro", description: "Sanierungen" },
  { value: "ueber-15000", label: "Über 15.000 Euro", description: "Komplettsanierung" },
  { value: "beratung", label: "Erstmal beraten", description: "Kosten noch unklar" },
];

const ownershipOptions = [
  { value: "eigentuemer", label: "Eigentümer", description: "Ich besitze die Immobilie" },
  { value: "mieter", label: "Mieter", description: "Ich bin Mieter" },
  { value: "verwalter", label: "Hausverwaltung", description: "Ich verwalte die Immobilie" },
  { value: "sonstige", label: "Sonstige", description: "Andere Beziehung" },
];

// Gewerk-spezifische Problemauswahl - angepasst an den gewählten Service
const problemOptionsByService: Record<string, Array<{ value: string; label: string; description: string }>> = {
  sanitaer: [
    { value: "wasserhahn-tropft", label: "Wasserhahn tropft", description: "Undichter oder tropfender Hahn" },
    { value: "rohr-verstopft", label: "Rohr verstopft", description: "Abfluss oder Rohrleitung blockiert" },
    { value: "toilette-defekt", label: "Toilette defekt", description: "Spülung, Dichtung oder sonstige Probleme" },
    { value: "wasserschaden", label: "Wasserschaden", description: "Wasser tritt aus oder Feuchtigkeit" },
    { value: "installation-neu", label: "Neuinstallation", description: "Neue Armaturen oder Leitungen" },
    { value: "sonstiges-sanitaer", label: "Sonstiges", description: "Anderes Sanitär-Problem" },
  ],
  heizung: [
    { value: "heizung-kalt", label: "Heizung wird nicht warm", description: "Heizkörper bleiben kalt" },
    { value: "heizung-geraeusche", label: "Heizung macht Geräusche", description: "Gluckern, Klopfen, Pfeifen" },
    { value: "heizung-wartung", label: "Heizungswartung", description: "Jährliche Wartung fällig" },
    { value: "therme-stoerung", label: "Therme/Kessel Störung", description: "Fehlermeldung oder Ausfall" },
    { value: "heizung-tausch", label: "Heizungsaustausch", description: "Neue Heizungsanlage gewünscht" },
    { value: "sonstiges-heizung", label: "Sonstiges", description: "Anderes Heizungs-Problem" },
  ],
  bad: [
    { value: "bad-komplett", label: "Komplettsanierung", description: "Komplettes Bad neu gestalten" },
    { value: "bad-teilsanierung", label: "Teilsanierung", description: "Einzelne Bereiche erneuern" },
    { value: "dusche-wanne", label: "Dusche/Wanne tauschen", description: "Dusche oder Badewanne erneuern" },
    { value: "fliesen-neu", label: "Fliesen erneuern", description: "Neue Fliesen im Bad" },
    { value: "bad-barrierefrei", label: "Barrierefreies Bad", description: "Altersgerechter Umbau" },
    { value: "sonstiges-bad", label: "Sonstiges", description: "Andere Bad-Arbeiten" },
  ],
  waermepumpe: [
    { value: "wp-beratung", label: "Beratung gewünscht", description: "Erstberatung zur Wärmepumpe" },
    { value: "wp-neuinstallation", label: "Neuinstallation", description: "Wärmepumpe einbauen lassen" },
    { value: "wp-stoerung", label: "Störung/Ausfall", description: "Wärmepumpe funktioniert nicht" },
    { value: "wp-wartung", label: "Wartung", description: "Regelmäßige Wartung fällig" },
    { value: "wp-foerderung", label: "Förderung prüfen", description: "Staatliche Förderung klären" },
    { value: "sonstiges-wp", label: "Sonstiges", description: "Andere Wärmepumpen-Frage" },
  ],
  notdienst: [
    { value: "rohrbruch", label: "Rohrbruch", description: "Wasserrohr geplatzt - NOTFALL" },
    { value: "heizung-ausfall", label: "Heizungsausfall", description: "Komplett kein Heizung - NOTFALL" },
    { value: "gas-geruch", label: "Gasgeruch", description: "Gasleck vermutet - NOTFALL" },
    { value: "kein-warmwasser", label: "Kein Warmwasser", description: "Warmwasser ausgefallen" },
    { value: "ueberschwemmung", label: "Überschwemmung", description: "Wasser steht im Raum" },
    { value: "sonstiges-notfall", label: "Anderer Notfall", description: "Sonstiger dringender Fall" },
  ],
  beratung: [
    { value: "sanierung-planung", label: "Sanierung planen", description: "Bad oder Heizung erneuern" },
    { value: "energieberatung", label: "Energieberatung", description: "Heizkosten senken" },
    { value: "foerderung-check", label: "Förderung prüfen", description: "Staatliche Zuschüsse" },
    { value: "kostenvoranschlag", label: "Kostenvoranschlag", description: "Unverbindliche Schätzung" },
    { value: "zweitmeinung", label: "Zweitmeinung", description: "Andere Meinung einholen" },
    { value: "sonstiges-beratung", label: "Allgemeine Beratung", description: "Andere Fragen" },
  ],
};

// Gewerk-spezifische Zusatzfragen
const additionalQuestionsByService: Record<string, Array<{ value: string; label: string }>> = {
  sanitaer: [
    { value: "haupthahn-bekannt", label: "Ich weiß wo der Hauptwasserhahn ist" },
    { value: "mehrere-betroffen", label: "Mehrere Räume/Etagen betroffen" },
    { value: "schon-versucht", label: "Ich habe schon selbst versucht zu reparieren" },
  ],
  heizung: [
    { value: "alle-heizkoerper", label: "Alle Heizkörper betroffen" },
    { value: "einzelne-heizkoerper", label: "Nur einzelne Heizkörper betroffen" },
    { value: "fehlermeldung", label: "Es gibt eine Fehlermeldung am Gerät" },
  ],
  bad: [
    { value: "bad-bewohnt", label: "Bad wird noch täglich genutzt" },
    { value: "asbest-moeglich", label: "Altbau vor 1990 (Asbest möglich)" },
    { value: "barrierefrei-gewuenscht", label: "Barrierefreiheit wichtig" },
  ],
  waermepumpe: [
    { value: "fussbodenheizung", label: "Fußbodenheizung vorhanden" },
    { value: "gasheizung-vorhanden", label: "Aktuell Gas-/Ölheizung" },
    { value: "photovoltaik", label: "Photovoltaik vorhanden/geplant" },
  ],
  notdienst: [
    { value: "wasser-abgestellt", label: "Wasser bereits abgestellt" },
    { value: "stromversorgung-ok", label: "Stromversorgung funktioniert" },
    { value: "personen-gefahr", label: "Personen in Gefahr" },
  ],
  beratung: [
    { value: "termin-vor-ort", label: "Vor-Ort-Termin gewünscht" },
    { value: "telefonberatung", label: "Erstmal telefonische Beratung" },
    { value: "angebote-vergleichen", label: "Ich vergleiche mehrere Angebote" },
  ],
};

const stepLabels = [
  "Service",
  "Problem",
  "Details",
  "Dringlichkeit",
  "Gebäude",
  "Status",
  "Zugang",
  "Budget",
  "Datum",
  "Uhrzeit",
  "Name",
  "Adresse",
  "Prüfen"
];

export default function TerminPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const [selectedProblem, setSelectedProblem] = useState<string>("");
  const [additionalInfo, setAdditionalInfo] = useState<string[]>([]);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: "",
      problemDetails: "",
      urgency: "",
      propertyType: "",
      ownershipType: "",
      accessInfo: "",
      budget: "",
      preferredDate: "",
      preferredTime: "",
      name: "",
      phone: "",
      email: "",
      stadtteil: "",
      address: "",
    },
  });

  const dateString = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";
  const selectedService = form.watch("serviceType");

  // Query available slots for the selected date AND service type (Gewerk-spezifisch)
  const { data: slotsData, isLoading: slotsLoading } = useQuery<{ success: boolean; slots: TimeSlot[]; service?: string }>({
    queryKey: ['/api/calendar/available-slots', dateString, selectedService],
    queryFn: async () => {
      const params = new URLSearchParams({ date: dateString });
      if (selectedService) {
        params.append('service', selectedService);
      }
      const response = await fetch(`/api/calendar/available-slots?${params.toString()}`);
      return response.json();
    },
    enabled: !!dateString && !!selectedService,
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return apiRequest("POST", "/api/leads", {
        name: data.name,
        phone: data.phone,
        email: data.email || undefined,
        address: data.address,
        serviceTypes: [data.serviceType],
        description: data.problemDetails,
        preferredDate: data.preferredDate,
        preferredTime: data.preferredTime,
        urgency: data.urgency,
        propertyType: data.propertyType,
        ownershipType: data.ownershipType,
        accessInfo: data.accessInfo,
        budget: data.budget,
        source: "termin-page-12step",
        isEmergency: data.urgency === "sofort" ? "akut" : "normal",
      });
    },
    onSuccess: () => {
      toast({
        title: "Termin angefragt",
        description: "Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      setStep(14);
    },
    onError: () => {
      toast({
        title: "Fehler",
        description: "Es gab ein Problem bei der Buchung. Bitte versuchen Sie es erneut.",
        variant: "destructive",
      });
    },
  });

  const handleDateSelect = (date: Date | undefined) => {
    setSelectedDate(date);
    if (date) {
      form.setValue("preferredDate", format(date, "yyyy-MM-dd"));
      form.setValue("preferredTime", "");
    } else {
      form.setValue("preferredDate", "");
      form.setValue("preferredTime", "");
    }
  };

  const handleTimeSelect = (time: string) => {
    form.setValue("preferredTime", time);
  };

  const onSubmit = (data: BookingFormData) => {
    bookingMutation.mutate(data);
  };

  const getFieldsForStep = (currentStep: number): (keyof BookingFormData)[] => {
    switch (currentStep) {
      case 1: return ["serviceType", "stadtteil"];
      case 2: return []; // Problem selection (sets problemDetails automatically)
      case 3: return ["problemDetails"]; // Additional details
      case 4: return ["urgency"];
      case 5: return ["propertyType"];
      case 6: return ["ownershipType"];
      case 7: return []; // Access info (optional)
      case 8: return ["budget"];
      case 9: return ["preferredDate"];
      case 10: return ["preferredTime"];
      case 11: return ["name", "phone"];
      case 12: return ["address"];
      case 13: return []; // Summary
      default: return [];
    }
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    const valid = fields.length === 0 || await form.trigger(fields);
    if (valid && step < 13) {
      setStep(step + 1);
    } else if (valid && step === 13) {
      form.handleSubmit(onSubmit)();
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
  };

  const selectOption = (field: keyof BookingFormData, value: string) => {
    form.setValue(field, value);
  };

  const availableSlots = slotsData?.slots?.filter(slot => slot.available) || [];

  return (
    <div className="min-h-screen bg-background">
      <SEO 
        title="Handwerker Termin München | Online buchen"
        description="Online Termin buchen in München: Sanitär & Heizung einfach online anfragen – Wunschzeit auswählen & bestätigen."
        canonical="https://aquapro24.de/termin"
        keywords="Klempner Termin online buchen München, Sanitär Wunschtermin Echtzeit, Heizung Termin Wochenende möglich, Handwerker Terminbestätigung sofort, Badsanierung Beratungstermin München, Wärmepumpe Vor-Ort-Termin, Notdienst Termin 24h verfügbar"
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="relative py-6 lg:py-8 overflow-hidden">
          <div 
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${heroImage})` }}
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/60 to-black/40" />
          <div className="relative max-w-7xl mx-auto px-4 lg:px-8">
            <div className="max-w-3xl">
              <Badge variant="secondary" className="mb-4">
                <CalendarIcon className="w-3 h-3 mr-1" />
                Online Terminbuchung
              </Badge>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Termin online buchen München – Handwerker Wunschtermin
              </h1>
              <div className="sr-only" data-testid="keyword-cloud">
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Online Terminbuchung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Klempner Termin buchen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Heizung Termin online</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Sanitär Wunschtermin</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Badsanierung Beratung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wärmepumpe Termin</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Notdienst sofort</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">freie Termine Echtzeit</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Terminbestätigung sofort</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Rückruf anfordern</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Termin Schwabing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Termin Bogenhausen</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Termin Sendling</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Termin Pasing</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Vor-Ort-Beratung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Kostenvoranschlag Termin</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">Wochenende Termin</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">flexible Terminwahl</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">schnelle Rückmeldung</span>
                <span className="inline-flex px-2 py-0.5 text-xs rounded-md bg-white/10 text-white/80 border border-white/20">keine Warteschleife</span>
              </div>
              <p className="text-lg text-white/90 mb-4">
                Buchen Sie online Ihren Wunschtermin. Wir prüfen die Verfügbarkeit in Echtzeit und melden uns bei Ihnen.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button size="lg" asChild>
                  <a href="tel:+4989444438872" data-testid="button-call-termin">
                    <Phone className="w-4 h-4 mr-2" />
                    089 444438872
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="py-6 lg:py-8">
          <div className="max-w-3xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold mb-6 text-center">Klempner Termin online München: Wunschtermin in Echtzeit buchen</h2>
            
            {/* Progress Steps */}
            {step <= 12 && (
              <div className="mb-8">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium">Schritt {step} von 12</span>
                  <span className="text-sm text-muted-foreground">{stepLabels[step - 1]}</span>
                </div>
                <div className="w-full bg-muted rounded-full h-2">
                  <div 
                    className="bg-primary h-2 rounded-full transition-all duration-300"
                    style={{ width: `${(step / 12) * 100}%` }}
                  />
                </div>
                <div className="flex justify-between mt-2">
                  {stepLabels.map((label, index) => (
                    <div 
                      key={index}
                      className={`text-xs ${step > index ? 'text-primary font-medium' : 'text-muted-foreground'}`}
                      data-testid={`step-label-${index + 1}`}
                    >
                      {index + 1}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {step === 14 ? (
              <Card className="max-w-lg mx-auto">
                <CardContent className="p-8 text-center">
                  <div className="w-16 h-16 rounded-full bg-accent/20 flex items-center justify-center mx-auto mb-6">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <h2 className="text-2xl font-bold mb-4">Vielen Dank!</h2>
                  <p className="text-muted-foreground mb-6">
                    Ihre Terminanfrage wurde erfolgreich übermittelt. Wir prüfen die 
                    Verfügbarkeit und melden uns innerhalb weniger Stunden bei Ihnen.
                  </p>
                  <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left space-y-2">
                    <p className="font-medium mb-2">Ihre Anfrage:</p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Service:</strong> {serviceTypes.find(s => s.value === form.getValues("serviceType"))?.label}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Termin:</strong> {form.getValues("preferredDate")} um {form.getValues("preferredTime")} Uhr
                    </p>
                    <p className="text-sm text-muted-foreground">
                      <strong>Budget:</strong> {budgetOptions.find(b => b.value === form.getValues("budget"))?.label}
                    </p>
                  </div>
                  <Button asChild>
                    <a href="/" data-testid="button-back-home">Zurück zur Startseite</a>
                  </Button>
                </CardContent>
              </Card>
            ) : (
              <Form {...form}>
                <form onSubmit={form.handleSubmit(onSubmit)}>
                  {/* Step 1: Service Selection + Stadtteil */}
                  {step === 1 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Wrench className="w-5 h-5" />
                          Was benötigen Sie und wo?
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <FormField
                          control={form.control}
                          name="serviceType"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Welchen Service benötigen Sie? *</FormLabel>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3 mt-2">
                                {serviceTypes.map((type) => (
                                  <Button
                                    key={type.value}
                                    type="button"
                                    variant={field.value === type.value ? "default" : "outline"}
                                    className="h-auto py-4 px-4 flex flex-col items-center gap-2"
                                    onClick={() => selectOption("serviceType", type.value)}
                                    data-testid={`service-${type.value}`}
                                  >
                                    <type.icon className="w-6 h-6" />
                                    <span className="text-sm text-center">{type.label}</span>
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <FormField
                          control={form.control}
                          name="stadtteil"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>In welchem Stadtteil? *</FormLabel>
                              <FormControl>
                                <select 
                                  {...field}
                                  className="w-full h-10 px-3 py-2 border border-input bg-background rounded-md text-sm focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                                  data-testid="select-stadtteil-step1"
                                >
                                  <option value="">Bitte Stadtteil wählen...</option>
                                  {muenchnerStadtteile.map((stadtteil) => (
                                    <option key={stadtteil} value={stadtteil}>{stadtteil}</option>
                                  ))}
                                </select>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex justify-end mt-6">
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            disabled={!form.watch("serviceType") || !form.watch("stadtteil")}
                            data-testid="button-next"
                          >
                            Weiter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 2: Gewerk-spezifische Problemauswahl */}
                  {step === 2 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          {selectedService === "sanitaer" && "Was ist das Sanitär-Problem?"}
                          {selectedService === "heizung" && "Was ist das Heizungs-Problem?"}
                          {selectedService === "bad" && "Was möchten Sie im Bad machen?"}
                          {selectedService === "waermepumpe" && "Was ist Ihr Wärmepumpen-Anliegen?"}
                          {selectedService === "notdienst" && "Was ist der Notfall?"}
                          {selectedService === "beratung" && "Wobei können wir Sie beraten?"}
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <div className="grid grid-cols-2 gap-3">
                          {(problemOptionsByService[selectedService] || []).map((option) => (
                            <Button
                              key={option.value}
                              type="button"
                              variant={selectedProblem === option.value ? "default" : "outline"}
                              className="h-auto py-4 px-4 flex flex-col items-start gap-1"
                              onClick={() => {
                                setSelectedProblem(option.value);
                                form.setValue("problemDetails", option.label);
                                setTimeout(() => nextStep(), 150);
                              }}
                              data-testid={`problem-${option.value}`}
                            >
                              <span className="font-semibold">{option.label}</span>
                              <span className="text-xs text-muted-foreground">{option.description}</span>
                            </Button>
                          ))}
                        </div>
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 3: Gewerk-spezifische Zusatzfragen */}
                  {step === 3 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <FileText className="w-5 h-5" />
                          Weitere Details (optional)
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <div className="space-y-3">
                          <p className="text-sm text-muted-foreground mb-4">
                            Diese Informationen helfen uns, besser vorbereitet zu sein:
                          </p>
                          {(additionalQuestionsByService[selectedService] || []).map((question) => (
                            <label
                              key={question.value}
                              className="flex items-center gap-3 p-3 rounded-md border cursor-pointer hover-elevate"
                            >
                              <input
                                type="checkbox"
                                checked={additionalInfo.includes(question.value)}
                                onChange={(e) => {
                                  if (e.target.checked) {
                                    setAdditionalInfo([...additionalInfo, question.value]);
                                  } else {
                                    setAdditionalInfo(additionalInfo.filter(v => v !== question.value));
                                  }
                                }}
                                className="w-5 h-5 rounded"
                                data-testid={`checkbox-${question.value}`}
                              />
                              <span>{question.label}</span>
                            </label>
                          ))}
                        </div>
                        
                        <FormField
                          control={form.control}
                          name="problemDetails"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Zusätzliche Informationen (optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  value={field.value || ""}
                                  onChange={(e) => {
                                    const problemLabel = problemOptionsByService[selectedService]?.find(p => p.value === selectedProblem)?.label || "";
                                    const additionalText = e.target.value;
                                    if (additionalText && !additionalText.startsWith(problemLabel)) {
                                      field.onChange(`${problemLabel}: ${additionalText}`);
                                    } else if (!additionalText) {
                                      field.onChange(problemLabel);
                                    } else {
                                      field.onChange(additionalText);
                                    }
                                  }}
                                  placeholder="Falls Sie weitere Details ergänzen möchten..."
                                  className="min-h-[80px]"
                                  data-testid="input-problem-details"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        
                        <div className="flex justify-between gap-2">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                          <Button type="button" onClick={nextStep} data-testid="button-next">
                            Weiter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 4: Urgency */}
                  {step === 4 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <AlertTriangle className="w-5 h-5" />
                          Wie dringend ist es?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="urgency"
                          render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 gap-3">
                                {urgencyOptions.map((option) => (
                                  <Button
                                    key={option.value}
                                    type="button"
                                    variant={field.value === option.value ? "default" : "outline"}
                                    className="h-auto py-4 px-4 flex flex-col items-start gap-1"
                                    onClick={() => {
                                      selectOption("urgency", option.value);
                                      setTimeout(() => nextStep(), 150);
                                    }}
                                    data-testid={`urgency-${option.value}`}
                                  >
                                    <span className="font-semibold">{option.label}</span>
                                    <span className="text-xs text-muted-foreground">{option.description}</span>
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 5: Property Type */}
                  {step === 5 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Building className="w-5 h-5" />
                          Um welche Art von Gebäude handelt es sich?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="propertyType"
                          render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 gap-3">
                                {propertyTypes.map((option) => (
                                  <Button
                                    key={option.value}
                                    type="button"
                                    variant={field.value === option.value ? "default" : "outline"}
                                    className="h-auto py-4 px-4 flex flex-col items-start gap-1"
                                    onClick={() => {
                                      selectOption("propertyType", option.value);
                                      setTimeout(() => nextStep(), 150);
                                    }}
                                    data-testid={`property-${option.value}`}
                                  >
                                    <span className="font-semibold">{option.label}</span>
                                    <span className="text-xs text-muted-foreground">{option.description}</span>
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 6: Ownership Type */}
                  {step === 6 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Sind Sie Eigentümer oder Mieter?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="ownershipType"
                          render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 gap-3">
                                {ownershipOptions.map((option) => (
                                  <Button
                                    key={option.value}
                                    type="button"
                                    variant={field.value === option.value ? "default" : "outline"}
                                    className="h-auto py-4 px-4 flex flex-col items-start gap-1"
                                    onClick={() => {
                                      selectOption("ownershipType", option.value);
                                      setTimeout(() => nextStep(), 150);
                                    }}
                                    data-testid={`ownership-${option.value}`}
                                  >
                                    <span className="font-semibold">{option.label}</span>
                                    <span className="text-xs text-muted-foreground">{option.description}</span>
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 7: Access Info */}
                  {step === 7 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          Zugang zum Gebäude
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-6">
                        <FormField
                          control={form.control}
                          name="accessInfo"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Gibt es besondere Hinweise zum Zugang? (optional)</FormLabel>
                              <FormControl>
                                <Textarea
                                  {...field}
                                  placeholder="z.B. Hinterhaus, 3. Stock ohne Aufzug, Schlüssel beim Nachbarn..."
                                  className="min-h-[100px]"
                                  data-testid="input-access-info"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                          <Button type="button" onClick={nextStep} data-testid="button-next">
                            Weiter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 8: Budget */}
                  {step === 8 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Euro className="w-5 h-5" />
                          Welches Budget haben Sie vorgesehen?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="budget"
                          render={({ field }) => (
                            <FormItem>
                              <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                {budgetOptions.map((option) => (
                                  <Button
                                    key={option.value}
                                    type="button"
                                    variant={field.value === option.value ? "default" : "outline"}
                                    className="h-auto py-4 px-4 flex flex-col items-start gap-1"
                                    onClick={() => {
                                      selectOption("budget", option.value);
                                      setTimeout(() => nextStep(), 150);
                                    }}
                                    data-testid={`budget-${option.value}`}
                                  >
                                    <span className="font-semibold">{option.label}</span>
                                    <span className="text-xs text-muted-foreground">{option.description}</span>
                                  </Button>
                                ))}
                              </div>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 9: Date Selection */}
                  {step === 9 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CalendarIcon className="w-5 h-5" />
                          Wann passt es Ihnen am besten?
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="preferredDate"
                          render={() => (
                            <FormItem>
                              <FormLabel>Wählen Sie ein Datum</FormLabel>
                              <FormControl>
                                <Calendar
                                  mode="single"
                                  selected={selectedDate}
                                  onSelect={(date) => {
                                    handleDateSelect(date);
                                    if (date) {
                                      setTimeout(() => nextStep(), 150);
                                    }
                                  }}
                                  disabled={(date) =>
                                    isBefore(date, startOfToday()) ||
                                    date > addDays(new Date(), 60)
                                  }
                                  locale={de}
                                  className="rounded-md border mx-auto"
                                  data-testid="calendar-picker"
                                />
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 10: Time Selection */}
                  {step === 10 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <Clock className="w-5 h-5" />
                          Wählen Sie eine Uhrzeit
                        </CardTitle>
                      </CardHeader>
                      <CardContent>
                        <FormField
                          control={form.control}
                          name="preferredTime"
                          render={({ field }) => (
                            <FormItem>
                              <p className="text-sm text-muted-foreground mb-4">
                                Datum: {selectedDate ? format(selectedDate, "dd. MMMM yyyy", { locale: de }) : ""}
                              </p>
                              {slotsLoading ? (
                                <p className="text-sm text-muted-foreground py-4">
                                  Lade verfügbare Zeiten...
                                </p>
                              ) : availableSlots.length === 0 ? (
                                <div className="text-center py-4">
                                  <p className="text-sm text-muted-foreground mb-4">
                                    Keine freien Termine an diesem Tag.
                                  </p>
                                  <Button type="button" variant="outline" onClick={prevStep}>
                                    <ArrowLeft className="w-4 h-4 mr-2" />
                                    Anderes Datum wählen
                                  </Button>
                                </div>
                              ) : (
                                <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                  {availableSlots.map((slot) => (
                                    <Button
                                      key={slot.time}
                                      type="button"
                                      variant={field.value === slot.time ? "default" : "outline"}
                                      className="justify-start"
                                      onClick={() => {
                                        handleTimeSelect(slot.time);
                                        setTimeout(() => nextStep(), 150);
                                      }}
                                      data-testid={`time-slot-${slot.time}`}
                                    >
                                      <Clock className="w-4 h-4 mr-2" />
                                      {slot.label}
                                    </Button>
                                  ))}
                                </div>
                              )}
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-start mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 11: Name & Phone */}
                  {step === 11 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <User className="w-5 h-5" />
                          Wie heißen Sie?
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="name"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Ihr Name *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                  <Input {...field} placeholder="Vor- und Nachname" className="pl-10" data-testid="input-name" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="phone"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Telefonnummer *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                  <Input {...field} type="tel" placeholder="Für Rückfragen und Terminbestätigung" className="pl-10" data-testid="input-phone" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-between mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                          <Button type="button" onClick={nextStep} data-testid="button-next">
                            Weiter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 12: Address & Email */}
                  {step === 12 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <MapPin className="w-5 h-5" />
                          Ihre genaue Adresse
                        </CardTitle>
                        <p className="text-sm text-muted-foreground">Stadtteil: {form.watch("stadtteil")}</p>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <FormField
                          control={form.control}
                          name="address"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>Straße & Hausnummer *</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                  <Input {...field} placeholder="z.B. Leopoldstraße 42" className="pl-10" data-testid="input-address" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <FormField
                          control={form.control}
                          name="email"
                          render={({ field }) => (
                            <FormItem>
                              <FormLabel>E-Mail (optional)</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                  <Input {...field} type="email" placeholder="Für Terminbestätigung per E-Mail" className="pl-10" data-testid="input-email" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />
                        <div className="flex justify-between mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                          <Button type="button" onClick={nextStep} data-testid="button-next">
                            Weiter
                            <ArrowRight className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}

                  {/* Step 13: Summary & Confirmation */}
                  {step === 13 && (
                    <Card>
                      <CardHeader>
                        <CardTitle className="flex items-center gap-2">
                          <CheckCircle2 className="w-5 h-5" />
                          Ihre Anfrage prüfen
                        </CardTitle>
                      </CardHeader>
                      <CardContent className="space-y-4">
                        <div className="bg-muted/50 rounded-lg p-4">
                          <p className="font-medium mb-3">Zusammenfassung Ihrer Anfrage:</p>
                          <div className="text-sm space-y-2">
                            <p><strong>Service:</strong> {serviceTypes.find(s => s.value === form.getValues("serviceType"))?.label}</p>
                            <p><strong>Problem:</strong> {form.getValues("problemDetails")?.substring(0, 100)}{form.getValues("problemDetails")?.length > 100 ? "..." : ""}</p>
                            <p><strong>Dringlichkeit:</strong> {urgencyOptions.find(u => u.value === form.getValues("urgency"))?.label}</p>
                            <p><strong>Gebäude:</strong> {propertyTypes.find(p => p.value === form.getValues("propertyType"))?.label}</p>
                            <p><strong>Status:</strong> {ownershipOptions.find(o => o.value === form.getValues("ownershipType"))?.label}</p>
                            <p><strong>Budget:</strong> {budgetOptions.find(b => b.value === form.getValues("budget"))?.label}</p>
                            <p><strong>Termin:</strong> {selectedDate ? format(selectedDate, "dd. MMMM yyyy", { locale: de }) : ""} um {form.getValues("preferredTime")} Uhr</p>
                          </div>
                        </div>
                        
                        <div className="bg-secondary/10 rounded-lg p-4">
                          <p className="font-medium mb-3">Ihre Kontaktdaten:</p>
                          <div className="text-sm space-y-2">
                            <p><strong>Name:</strong> {form.getValues("name")}</p>
                            <p><strong>Telefon:</strong> {form.getValues("phone")}</p>
                            <p><strong>E-Mail:</strong> {form.getValues("email") || "Nicht angegeben"}</p>
                            <p><strong>Stadtteil:</strong> {form.getValues("stadtteil")}</p>
                            <p><strong>Adresse:</strong> {form.getValues("address")}</p>
                            {form.getValues("accessInfo") && <p><strong>Zugang:</strong> {form.getValues("accessInfo")}</p>}
                          </div>
                        </div>

                        <div className="flex justify-between mt-6">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                          <Button 
                            type="button" 
                            onClick={nextStep}
                            disabled={bookingMutation.isPending}
                            data-testid="button-submit"
                          >
                            {bookingMutation.isPending ? "Wird gesendet..." : "Termin anfragen"}
                            <CheckCircle2 className="w-4 h-4 ml-2" />
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </form>
              </Form>
            )}
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-6 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-2xl font-bold text-center mb-8">Sanitär Handwerker München: Festpreise, Garantie & Qualität</h2>
            
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mb-10">
              {[
                { text: "Kostenlose Erstberatung am Telefon" },
                { text: "Verbindliche Terminzusage" },
                { text: "Transparente Festpreise vor Arbeitsbeginn" },
                { text: "Pünktliche und saubere Arbeit" },
                { text: "Rückruf innerhalb von 2 Stunden (tagsüber)" },
                { text: "Partnernetzwerk-Qualität" },
              ].map((benefit, index) => (
                <div key={index} className="flex flex-col items-center text-center p-4">
                  <div className="w-10 h-10 rounded-full bg-accent/20 flex items-center justify-center mb-3">
                    <CheckCircle2 className="w-5 h-5 text-accent" />
                  </div>
                  <p className="text-sm font-medium">{benefit.text}</p>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto">
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-accent/20 flex items-center justify-center shrink-0">
                    <Shield className="w-7 h-7 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Sanitär Garantie München: 2 Jahre auf alle Arbeiten</h3>
                    <p className="text-sm text-muted-foreground">Auf alle unsere Arbeiten gewähren wir eine zweijährige Garantie.</p>
                  </div>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-6 flex items-center gap-4">
                  <div className="w-14 h-14 rounded-full bg-yellow-100 dark:bg-yellow-900/30 flex items-center justify-center shrink-0">
                    <Star className="w-7 h-7 fill-yellow-400 text-yellow-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">Klempner Bewertungen München: 4.9/5 Sterne</h3>
                    <p className="text-sm text-muted-foreground">Über 2.847 zufriedene Kunden in München vertrauen uns.</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
