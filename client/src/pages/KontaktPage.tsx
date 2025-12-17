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
  MessageSquare,
  CheckCircle2,
  Building,
  Car,
  Calendar as CalendarIcon,
  User,
  Wrench,
  ArrowRight,
  ArrowLeft,
  Shield,
  Star,
} from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";

const bookingSchema = z.object({
  name: z.string().min(2, "Bitte geben Sie Ihren Namen ein"),
  phone: z.string().min(6, "Bitte geben Sie eine gültige Telefonnummer ein"),
  email: z.string().email("Bitte geben Sie eine gültige E-Mail-Adresse ein").optional().or(z.literal("")),
  address: z.string().min(5, "Bitte geben Sie Ihre Adresse ein"),
  serviceType: z.string().min(1, "Bitte wählen Sie einen Service"),
  description: z.string().min(10, "Bitte beschreiben Sie Ihr Anliegen (min. 10 Zeichen)"),
  preferredDate: z.string().min(1, "Bitte wählen Sie ein Datum"),
  preferredTime: z.string().min(1, "Bitte wählen Sie eine Uhrzeit"),
});

type BookingFormData = z.infer<typeof bookingSchema>;

interface TimeSlot {
  time: string;
  available: boolean;
  label: string;
}

const serviceTypes = [
  { value: "sanitaer", label: "Sanitär & Klempner" },
  { value: "heizung", label: "Heizung & Wartung" },
  { value: "bad", label: "Badsanierung" },
  { value: "waermepumpe", label: "Wärmepumpe" },
  { value: "notdienst", label: "Notdienst (dringend)" },
  { value: "beratung", label: "Kostenlose Beratung" },
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

const serviceAreas = [
  "München Zentrum",
  "Schwabing",
  "Bogenhausen",
  "Sendling",
  "Pasing",
  "Laim",
  "Neuhausen",
  "Maxvorstadt",
  "Haidhausen",
  "Trudering",
  "Giesing",
  "Moosach"
];

export default function KontaktPage() {
  const [step, setStep] = useState(1);
  const [selectedDate, setSelectedDate] = useState<Date | undefined>(undefined);
  const { toast } = useToast();

  const form = useForm<BookingFormData>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      name: "",
      phone: "",
      email: "",
      address: "",
      serviceType: "",
      description: "",
      preferredDate: "",
      preferredTime: "",
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
          description: data.description,
          preferredDate: data.preferredDate,
          preferredTime: data.preferredTime,
          source: "kontakt-page",
          isEmergency: data.serviceType === "notdienst",
        }),
      });
    },
    onSuccess: () => {
      toast({
        title: "Termin angefragt",
        description: "Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.",
      });
      queryClient.invalidateQueries({ queryKey: ["/api/leads"] });
      setStep(4);
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
    }
  };

  const handleTimeSelect = (time: string) => {
    form.setValue("preferredTime", time);
  };

  const onSubmit = (data: BookingFormData) => {
    bookingMutation.mutate(data);
  };

  const nextStep = async () => {
    if (step === 1) {
      const valid = await form.trigger(["serviceType", "description"]);
      if (valid) setStep(2);
    } else if (step === 2) {
      const valid = await form.trigger(["preferredDate", "preferredTime"]);
      if (valid) setStep(3);
    }
  };

  const prevStep = () => {
    if (step > 1) setStep(step - 1);
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
                
                {/* Progress Steps */}
                <div className="flex justify-center mb-8">
                  <div className="flex items-center gap-2">
                    {[1, 2, 3].map((s) => (
                      <div key={s} className="flex items-center">
                        <div
                          className={`w-10 h-10 rounded-full flex items-center justify-center font-bold ${
                            step >= s
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted text-muted-foreground"
                          }`}
                          data-testid={`step-indicator-${s}`}
                        >
                          {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
                        </div>
                        {s < 3 && (
                          <div
                            className={`w-12 h-1 mx-2 ${
                              step > s ? "bg-primary" : "bg-muted"
                            }`}
                          />
                        )}
                      </div>
                    ))}
                  </div>
                </div>

                {step === 4 ? (
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
                      <div className="bg-muted/50 rounded-lg p-4 mb-6 text-left">
                        <p className="font-medium mb-2">Ihre Anfrage:</p>
                        <p className="text-sm text-muted-foreground">
                          {serviceTypes.find(s => s.value === form.getValues("serviceType"))?.label}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {form.getValues("preferredDate")} um {form.getValues("preferredTime")} Uhr
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
                      {step === 1 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <Wrench className="w-5 h-5" />
                              Schritt 1: Was können wir für Sie tun?
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <FormField
                              control={form.control}
                              name="serviceType"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Service auswählen</FormLabel>
                                  <Select onValueChange={field.onChange} value={field.value}>
                                    <FormControl>
                                      <SelectTrigger data-testid="select-service">
                                        <SelectValue placeholder="Bitte wählen..." />
                                      </SelectTrigger>
                                    </FormControl>
                                    <SelectContent>
                                      {serviceTypes.map((type) => (
                                        <SelectItem key={type.value} value={type.value}>
                                          {type.label}
                                        </SelectItem>
                                      ))}
                                    </SelectContent>
                                  </Select>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <FormField
                              control={form.control}
                              name="description"
                              render={({ field }) => (
                                <FormItem>
                                  <FormLabel>Beschreiben Sie Ihr Anliegen</FormLabel>
                                  <FormControl>
                                    <Textarea
                                      {...field}
                                      placeholder="Was ist das Problem? Wie dringend ist es? Weitere Details..."
                                      className="min-h-[120px]"
                                      data-testid="input-description"
                                    />
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="flex justify-end">
                              <Button type="button" onClick={nextStep} data-testid="button-next-step1">
                                Weiter
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {step === 2 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <CalendarIcon className="w-5 h-5" />
                              Schritt 2: Wunschtermin wählen
                            </CardTitle>
                          </CardHeader>
                          <CardContent>
                            <div className="grid md:grid-cols-2 gap-6">
                              <div>
                                <FormField
                                  control={form.control}
                                  name="preferredDate"
                                  render={() => (
                                    <FormItem>
                                      <FormLabel>Datum auswählen</FormLabel>
                                      <FormControl>
                                        <Calendar
                                          mode="single"
                                          selected={selectedDate}
                                          onSelect={handleDateSelect}
                                          disabled={(date) =>
                                            isBefore(date, startOfToday()) ||
                                            date > addDays(new Date(), 60)
                                          }
                                          locale={de}
                                          className="rounded-md border"
                                          data-testid="calendar-picker"
                                        />
                                      </FormControl>
                                      <FormMessage />
                                    </FormItem>
                                  )}
                                />
                              </div>

                              <div>
                                <FormField
                                  control={form.control}
                                  name="preferredTime"
                                  render={({ field }) => (
                                    <FormItem>
                                      <FormLabel>Uhrzeit auswählen</FormLabel>
                                      {!selectedDate ? (
                                        <p className="text-sm text-muted-foreground py-4">
                                          Bitte wählen Sie zuerst ein Datum
                                        </p>
                                      ) : slotsLoading ? (
                                        <p className="text-sm text-muted-foreground py-4">
                                          Lade verfügbare Zeiten aus Google Kalender...
                                        </p>
                                      ) : availableSlots.length === 0 ? (
                                        <p className="text-sm text-muted-foreground py-4">
                                          Keine freien Termine an diesem Tag. Bitte wählen Sie einen anderen Tag.
                                        </p>
                                      ) : (
                                        <div className="grid grid-cols-2 gap-2">
                                          {availableSlots.map((slot) => (
                                            <Button
                                              key={slot.time}
                                              type="button"
                                              variant={field.value === slot.time ? "default" : "outline"}
                                              className="justify-start"
                                              onClick={() => handleTimeSelect(slot.time)}
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
                              </div>
                            </div>

                            <div className="flex justify-between mt-6">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev-step2">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                              <Button type="button" onClick={nextStep} data-testid="button-next-step2">
                                Weiter
                                <ArrowRight className="w-4 h-4 ml-2" />
                              </Button>
                            </div>
                          </CardContent>
                        </Card>
                      )}

                      {step === 3 && (
                        <Card>
                          <CardHeader>
                            <CardTitle className="flex items-center gap-2">
                              <User className="w-5 h-5" />
                              Schritt 3: Ihre Kontaktdaten
                            </CardTitle>
                          </CardHeader>
                          <CardContent className="space-y-6">
                            <div className="grid md:grid-cols-2 gap-4">
                              <FormField
                                control={form.control}
                                name="name"
                                render={({ field }) => (
                                  <FormItem>
                                    <FormLabel>Name</FormLabel>
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
                                    <FormLabel>Telefon</FormLabel>
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
                                        placeholder="Ihre E-Mail-Adresse"
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
                                  <FormLabel>Adresse des Einsatzortes</FormLabel>
                                  <FormControl>
                                    <div className="relative">
                                      <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                      <Input
                                        {...field}
                                        placeholder="Straße, Hausnummer, PLZ, Ort"
                                        className="pl-10"
                                        data-testid="input-address"
                                      />
                                    </div>
                                  </FormControl>
                                  <FormMessage />
                                </FormItem>
                              )}
                            />

                            <div className="bg-muted/50 rounded-lg p-4">
                              <p className="font-medium mb-2">Ihre Buchung:</p>
                              <p className="text-sm text-muted-foreground">
                                {serviceTypes.find(s => s.value === form.getValues("serviceType"))?.label}
                              </p>
                              <p className="text-sm text-muted-foreground">
                                {form.getValues("preferredDate")} um {form.getValues("preferredTime")} Uhr
                              </p>
                            </div>

                            <div className="flex justify-between">
                              <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev-step3">
                                <ArrowLeft className="w-4 h-4 mr-2" />
                                Zurück
                              </Button>
                              <Button
                                type="submit"
                                disabled={bookingMutation.isPending}
                                data-testid="button-submit-booking"
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

              {/* Sidebar Info */}
              <div className="space-y-4">
                <div>
                  <h3 className="font-semibold text-lg mb-4">Schneller Kontakt</h3>
                  <Card className="bg-accent/5 border-accent/20">
                    <CardContent className="p-6">
                      <div className="flex items-start gap-4">
                        <div className="w-12 h-12 rounded-full bg-accent/10 flex items-center justify-center flex-shrink-0">
                          <Phone className="w-6 h-6 text-accent" />
                        </div>
                        <div>
                          <h3 className="font-semibold text-lg mb-1">Notdienst 24/7</h3>
                          <p className="text-muted-foreground text-sm mb-3">
                            Bei Rohrbruch, Wasserschaden oder Heizungsausfall erreichen Sie uns rund um die Uhr.
                          </p>
                          <Button className="bg-accent text-accent-foreground" asChild>
                            <a href="tel:+4915212274043" data-testid="button-emergency-call">
                              <Phone className="w-4 h-4 mr-2" />
                              0152 12274043
                            </a>
                          </Button>
                        </div>
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Unser Einzugsgebiet</h3>
                  <Card>
                    <CardContent className="p-6">
                      <div className="flex items-start gap-3 mb-4">
                        <Car className="w-5 h-5 text-secondary mt-0.5" />
                        <p className="text-sm text-muted-foreground">
                          Wir sind in ganz München und Umgebung für Sie unterwegs. 
                          Innerhalb Münchens ist die Anfahrt zu normalen Geschäftszeiten kostenlos.
                        </p>
                      </div>
                      <div className="flex flex-wrap gap-2">
                        {serviceAreas.map((area, index) => (
                          <Badge key={index} variant="secondary" className="text-xs">
                            {area}
                          </Badge>
                        ))}
                      </div>
                    </CardContent>
                  </Card>
                </div>

                <div>
                  <h3 className="font-semibold text-lg mb-4">Das erwartet Sie</h3>
                  <div className="space-y-3">
                    {[
                      "Kostenlose Erstberatung am Telefon",
                      "Verbindliche Terminzusage",
                      "Transparente Festpreise vor Arbeitsbeginn",
                      "Pünktliche und saubere Arbeit",
                      "Rückruf innerhalb von 2 Stunden (tagsüber)"
                    ].map((item, index) => (
                      <div key={index} className="flex items-center gap-3">
                        <CheckCircle2 className="w-5 h-5 text-accent flex-shrink-0" />
                        <span className="text-sm">{item}</span>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-secondary/5 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Shield className="w-5 h-5 text-secondary" />
                    <span className="font-medium">2 Jahre Garantie</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Auf alle unsere Arbeiten gewähren wir eine zweijährige Garantie.
                  </p>
                </div>

                <div className="bg-muted/30 rounded-lg p-4">
                  <div className="flex items-center gap-2 mb-2">
                    <Star className="w-5 h-5 text-primary fill-primary" />
                    <span className="font-medium">4.9/5 Sterne Bewertung</span>
                  </div>
                  <p className="text-sm text-muted-foreground">
                    Über 2.847 zufriedene Kunden in München vertrauen uns.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Standort & Karte */}
        <section className="pt-8 pb-4 lg:pt-10 lg:pb-6">
          <div className="max-w-7xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Unser Standort in München</h2>
              <p className="text-muted-foreground">
                Zentral gelegen - schnell bei Ihnen
              </p>
            </div>
            <div className="grid lg:grid-cols-2 gap-6">
              <Card>
                <CardContent className="p-0 overflow-hidden rounded-lg">
                  <iframe
                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2662.531506!2d11.5754!3d48.1371!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zNDjCsDA4JzEzLjYiTiAxMcKwMzQnMzEuNCJF!5e0!3m2!1sde!2sde!4v1"
                    width="100%"
                    height="350"
                    style={{ border: 0 }}
                    allowFullScreen
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                    title="Standort AquaPro24 München"
                    className="w-full"
                  />
                </CardContent>
              </Card>
              <div className="flex flex-col justify-center space-y-6">
                <div>
                  <h3 className="text-xl font-semibold mb-4">AquaPro24</h3>
                  <div className="space-y-3">
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Hardenbergstr. 4</p>
                        <p className="text-muted-foreground">80992 München</p>
                        <p className="text-muted-foreground">Deutschland</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <a href="tel:+4915212274043" className="font-medium hover:text-secondary">
                          0152 12274043
                        </a>
                        <p className="text-sm text-muted-foreground">24/7 Notdienst</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <a href="mailto:info@aquapro24.de" className="font-medium hover:text-secondary">
                          info@aquapro24.de
                        </a>
                        <p className="text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Clock className="w-5 h-5 text-secondary mt-0.5 flex-shrink-0" />
                      <div>
                        <p className="font-medium">Öffnungszeiten Büro</p>
                        <p className="text-sm text-muted-foreground">Mo - Fr: 7:00 - 18:00 Uhr</p>
                        <p className="text-sm text-muted-foreground">Sa: 8:00 - 12:00 Uhr</p>
                        <p className="text-sm text-accent font-medium">Notdienst: 24/7 erreichbar</p>
                      </div>
                    </div>
                  </div>
                </div>
                <Button size="lg" className="w-full sm:w-auto" asChild>
                  <a 
                    href="https://maps.google.com/?q=Hardenbergstr.+4+80992+München" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    data-testid="button-google-maps"
                  >
                    <MapPin className="w-4 h-4 mr-2" />
                    Route planen
                  </a>
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* Company Info Section */}
        <section className="py-10 lg:pt-8 pb-4 bg-muted/30">
          <div className="max-w-4xl mx-auto px-4 lg:px-8">
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold mb-4">Unternehmensdaten</h2>
              <p className="text-muted-foreground">
                Für Geschäftskunden und offizielle Korrespondenz
              </p>
            </div>
            <Card>
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Building className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p className="font-semibold">AquaPro24</p>
                        <p className="text-sm text-muted-foreground">Sanitär & Heizung München</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <MapPin className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p>Hardenbergstr. 4</p>
                        <p className="text-sm text-muted-foreground">80992 München</p>
                      </div>
                    </div>
                  </div>
                  <div className="space-y-4">
                    <div className="flex items-start gap-3">
                      <Phone className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p>0152 12274043</p>
                        <p className="text-sm text-muted-foreground">Fax: 0152 12274043</p>
                      </div>
                    </div>
                    <div className="flex items-start gap-3">
                      <Mail className="w-5 h-5 text-muted-foreground mt-0.5" />
                      <div>
                        <p>info@aquapro24.de</p>
                        <p className="text-sm text-muted-foreground">Antwort innerhalb 24h</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="border-t mt-8 pt-6 text-sm text-muted-foreground">
                  <div className="grid md:grid-cols-3 gap-6">
                    <div>
                      <span className="font-medium text-foreground">Rechtsform:</span> Einzelunternehmer
                    </div>
                    <div>
                      <span className="font-medium text-foreground">USt-IdNr:</span> folgt
                    </div>
                    <div>
                      <span className="font-medium text-foreground">Inhaber:</span> Mustafa Sakar
                    </div>
                  </div>
                </div>
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
