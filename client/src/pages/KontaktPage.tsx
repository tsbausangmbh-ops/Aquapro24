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
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
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

const bookingSchema = z.object({
  serviceType: z.string().min(1, "Bitte wählen Sie einen Service"),
  problemDetails: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen (min. 10 Zeichen)"),
  urgency: z.string().min(1, "Bitte wählen Sie die Dringlichkeit"),
  propertyType: z.string().min(1, "Bitte wählen Sie den Gebäudetyp"),
  budget: z.string().min(1, "Bitte wählen Sie einen Budget-Rahmen"),
  preferredDate: z.string().min(1, "Bitte wählen Sie ein Datum"),
  preferredTime: z.string().min(1, "Bitte wählen Sie eine Uhrzeit"),
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").optional().or(z.literal("")),
  address: z.string().min(5, "Bitte geben Sie Ihre Adresse ein"),
});

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

const contactInfo = [
  {
    icon: Phone,
    title: "Telefon",
    primary: "0152 12274043",
    secondary: "24/7 Notdienst erreichbar",
    action: "tel:+4915212274043"
  },
  {
    icon: Mail,
    title: "E-Mail",
    primary: "info@aquapro24.de",
    secondary: "Antwort innerhalb 24h",
    action: "mailto:info@aquapro24.de"
  },
  {
    icon: MapPin,
    title: "Adresse",
    primary: "Hardenbergstr. 4",
    secondary: "80992 München",
    action: "https://maps.google.com/?q=München"
  },
  {
    icon: Clock,
    title: "Öffnungszeiten",
    primary: "Mo-Fr: 7:00 - 18:00",
    secondary: "Notdienst: 24/7",
    action: null
  }
];

const stepLabels = [
  "Service",
  "Details",
  "Dringlichkeit",
  "Gebäude",
  "Budget",
  "Datum",
  "Uhrzeit",
  "Kontakt"
];

export default function KontaktPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      serviceType: "",
      problemDetails: "",
      urgency: "",
      propertyType: "",
      budget: "",
      preferredDate: "",
      preferredTime: "",
      name: "",
      phone: "",
      email: "",
      address: "",
    },
  });

  const dateString = selectedDate ? format(selectedDate, "yyyy-MM-dd") : "";

  const { data: slotsData, isLoading: slotsLoading } = useQuery<{ success: boolean; slots: TimeSlot[] }>({
    queryKey: [`/api/calendar/available-slots?date=${dateString}`],
    enabled: !!dateString,
  });

  const bookingMutation = useMutation({
    mutationFn: async (data: BookingFormData) => {
      return apiRequest("/api/leads", {
        method: "POST",
        body: JSON.stringify({
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
          budget: data.budget,
          source: "kontakt-page-8step",
          isEmergency: data.urgency === "sofort" ? "akut" : "normal",
        }),
      });
    },
    onSuccess: () => {
      toast({
        title: "Termin angefragt",
        description: "Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      setStep(9);
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
      case 1: return ["serviceType"];
      case 2: return ["problemDetails"];
      case 3: return ["urgency"];
      case 4: return ["propertyType"];
      case 5: return ["budget"];
      case 6: return ["preferredDate"];
      case 7: return ["preferredTime"];
      case 8: return ["name", "phone", "address"];
      default: return [];
    }
  };

  const nextStep = async () => {
    const fields = getFieldsForStep(step);
    const valid = await form.trigger(fields);
    if (valid && step < 8) {
      setStep(step + 1);
    } else if (valid && step === 8) {
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
        title="Kontakt & Termin buchen | AquaPro24 München - Sanitär & Heizung"
        description="Kontaktieren Sie AquaPro24 für Sanitär, Heizung und Badsanierung in München. 24/7 Notdienst unter 0152 12274043. Online Terminbuchung mit Google Calendar."
        canonical="https://aquapro24.de/kontakt"
        keywords="Kontakt Sanitär München, Heizung München Telefon, Termin buchen München, Klempner München Notdienst"
      />
      <Header />
      <main id="main-content">
        {/* Hero Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-gradient-to-br from-secondary/10 to-background">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center max-w-3xl mx-auto">
              <Badge variant="secondary" className="mb-4">
                <CalendarIcon className="w-3 h-3 mr-1" />
                Kontakt & Terminbuchung
              </Badge>
              <h1 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Termin buchen oder Kontakt aufnehmen
              </h1>
              <p className="text-lg text-muted-foreground">
                Buchen Sie online Ihren Wunschtermin oder rufen Sie uns an. 
                Wir prüfen die Verfügbarkeit in Echtzeit und melden uns bei Ihnen.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Cards */}
        <section className="pt-8 pb-4">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {contactInfo.map((info, index) => (
                <Card key={index} className="text-center hover-elevate">
                  <CardContent className="p-6">
                    <div className="w-14 h-14 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-4">
                      <info.icon className="w-7 h-7 text-secondary" />
                    </div>
                    <h3 className="font-semibold mb-2">{info.title}</h3>
                    {info.action ? (
                      <a 
                        href={info.action} 
                        className="text-primary font-medium hover:underline block"
                        data-testid={`link-contact-${info.title.toLowerCase()}`}
                      >
                        {info.primary}
                      </a>
                    ) : (
                      <p className="font-medium">{info.primary}</p>
                    )}
                    <p className="text-sm text-muted-foreground mt-1">{info.secondary}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Booking Form Section */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="grid lg:grid-cols-3 gap-6">
              {/* Main Booking Form */}
              <div className="lg:col-span-2">
                <h2 className="text-2xl font-bold mb-6">Online Terminbuchung</h2>
                
                {/* Progress Steps - Compact */}
                {step <= 8 && (
                  <div className="mb-8">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-sm font-medium">Schritt {step} von 8</span>
                      <span className="text-sm text-muted-foreground">{stepLabels[step - 1]}</span>
                    </div>
                    <div className="w-full bg-muted rounded-full h-2">
                      <div 
                        className="bg-primary h-2 rounded-full transition-all duration-300"
                        style={{ width: `${(step / 8) * 100}%` }}
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

                {step === 9 ? (
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
                      {/* Step 1: Service Selection */}
                      {step === 1 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Wrench className="w-5 h-5" />
                              Welchen Service benötigen Sie?
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <FormField
                              control={form.control}
                              name="serviceType"
                              render={({ field }) => (
                                <FormItem>
                                  <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                                    {serviceTypes.map((type) => (
                                      <Button
                                        key={type.value}
                                        type="button"
                                        variant={field.value === type.value ? "default" : "outline"}
                                        className="h-auto py-4 px-4 flex flex-col items-center gap-2"
                                        onClick={() => {
                                          selectOption("serviceType", type.value);
                                          setTimeout(() => nextStep(), 150);
                                        }}
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
                          </CardContent>
                        </Card>
                      )}

                      {/* Step 2: Problem Details */}
                      {step === 2 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <FileText className="w-5 h-5" />
                              Beschreiben Sie Ihr Anliegen
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <FormField
                              control={form.control}
                              name="problemDetails"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Was ist das Problem?</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      placeholder="Beschreiben Sie das Problem so detailliert wie möglich. Z.B.: Wasserhahn tropft seit 2 Tagen, Heizung wird nicht warm, etc."
                                      className="min-h-[150px]"
                                      data-testid="input-problem-details"
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

                      {/* Step 3: Urgency */}
                      {step === 3 && (
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

                            <div className="flex justify-between mt-6">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Step 4: Property Type */}
                      {step === 4 && (
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

                            <div className="flex justify-between mt-6">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Step 5: Budget */}
                      {step === 5 && (
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

                            <div className="flex justify-between mt-6">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Step 6: Date Selection */}
                      {step === 6 && (
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

                            <div className="flex justify-between mt-6">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Step 7: Time Selection */}
                      {step === 7 && (
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
                                      Lade verfügbare Zeiten aus Google Kalender...
                                    </p>
                                  ) : availableSlots.length === 0 ? (
                                    <div className="text-center py-4">
                                      <p className="text-sm text-muted-foreground mb-4">
                                        Keine freien Termine an diesem Tag. Bitte wählen Sie einen anderen Tag.
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

                            <div className="flex justify-between mt-6">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {/* Step 8: Contact Details */}
                      {step === 8 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <User className="w-5 h-5" />
                              Ihre Kontaktdaten
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-4">
                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name *</FormLabel>
                                    <FormControl>
                                      <div className="relative">
                                        <User className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                          {...field}
                                          placeholder="Ihr Name"
                                          className="pl-10"
                                          data-testid="input-name"
                                        />
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
                                    <FormLabel>Telefon *</FormLabel>
                                    <FormControl>
                                      <div className="relative">
                                        <Phone className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                        <Input
                                          {...field}
                                          type="tel"
                                          placeholder="Ihre Telefonnummer"
                                          className="pl-10"
                                          data-testid="input-phone"
                                        />
                                      </div>
                                    </FormControl>
                                    <FormMessage />
                                  </FormItem>
                                )}
                              />
                            </div>

                            <FormField
                              control={form.control}
                              name="email"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>E-Mail (optional)</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        {...field}
                                        type="email"
                                        placeholder="ihre@email.de"
                                        className="pl-10"
                                        data-testid="input-email"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="address"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Adresse *</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        {...field}
                                        placeholder="Straße, PLZ Ort"
                                        className="pl-10"
                                        data-testid="input-address"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            {/* Summary */}
                            <div className="bg-muted/50 rounded-lg p-4 mt-6">
                              <p className="font-medium mb-2">Zusammenfassung:</p>
                              <div className="text-sm text-muted-foreground space-y-1">
                                <p><strong>Service:</strong> {serviceTypes.find(s => s.value === form.getValues("serviceType"))?.label}</p>
                                <p><strong>Dringlichkeit:</strong> {urgencyOptions.find(u => u.value === form.getValues("urgency"))?.label}</p>
                                <p><strong>Gebäude:</strong> {propertyTypes.find(p => p.value === form.getValues("propertyType"))?.label}</p>
                                <p><strong>Budget:</strong> {budgetOptions.find(b => b.value === form.getValues("budget"))?.label}</p>
                                <p><strong>Termin:</strong> {selectedDate ? format(selectedDate, "dd. MMMM yyyy", { locale: de }) : ""} um {form.getValues("preferredTime")} Uhr</p>
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

              {/* Sidebar */}
              <div className="space-y-6">
                {/* Trust Signals */}
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-center gap-3 mb-4">
                      <Shield className="w-8 h-8 text-accent" />
                      <div>
                        <h3 className="font-semibold">Ihre Vorteile</h3>
                        <p className="text-sm text-muted-foreground">Bei AquaPro24</p>
                      </div>
                    </div>
                    <ul className="space-y-3 text-sm">
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>Kostenlose Erstberatung</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>Transparente Festpreise</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>24/7 Notdienst verfügbar</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>Zertifizierte Meisterbetriebe</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <CheckCircle2 className="w-4 h-4 text-accent mt-0.5 shrink-0" />
                        <span>Garantie auf alle Arbeiten</span>
                      </li>
                    </ul>
                  </CardContent>
                </Card>

                {/* Rating */}
                <Card>
                  <CardContent className="p-6 text-center">
                    <div className="flex justify-center gap-1 mb-2">
                      {[1, 2, 3, 4, 5].map((star) => (
                        <Star key={star} className="w-5 h-5 fill-yellow-400 text-yellow-400" />
                      ))}
                    </div>
                    <p className="font-semibold">4.9 von 5 Sternen</p>
                    <p className="text-sm text-muted-foreground">Basierend auf 2.847+ Bewertungen</p>
                  </CardContent>
                </Card>

                {/* Direct Contact */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <Phone className="w-8 h-8 mx-auto mb-3" />
                    <p className="text-sm mb-2">Lieber telefonisch?</p>
                    <a 
                      href="tel:+4915212274043" 
                      className="text-xl font-bold block hover:underline"
                      data-testid="link-phone-sidebar"
                    >
                      0152 12274043
                    </a>
                    <p className="text-xs mt-2 opacity-90">24/7 erreichbar</p>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>

        {/* Service Areas */}
        <section className="py-8">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-bold text-center mb-6">Wir sind in ganz München für Sie da</h2>
            <div className="flex flex-wrap justify-center gap-2">
              {["München Zentrum", "Schwabing", "Bogenhausen", "Sendling", "Pasing", "Laim", "Neuhausen", "Maxvorstadt", "Haidhausen", "Trudering", "Giesing", "Moosach"].map((area) => (
                <Badge key={area} variant="secondary">
                  <MapPin className="w-3 h-3 mr-1" />
                  {area}
                </Badge>
              ))}
            </div>
          </div>
        </section>

        {/* Google Maps */}
        <section className="py-8 bg-muted/30">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <h2 className="text-xl font-bold text-center mb-6">So finden Sie uns</h2>
            <Card>
              <CardContent className="p-0 overflow-hidden rounded-lg">
                <iframe
                  src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2661.6!2d11.5!3d48.17!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDEwJzEyLjAiTiAxMcKwMzAnMDAuMCJF!5e0!3m2!1sde!2sde!4v1"
                  width="100%"
                  height="350"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  title="AquaPro24 Standort in München"
                  data-testid="map-embed"
                />
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
      <Footer />
      <AIChatWidget />
    </div>
  );
}
