import { useState } from "react";
import { useQuery, useMutation } from "@tanstack/react-query";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { format, addDays, isBefore, startOfToday } from "date-fns";
import { de } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import SEO from "@/components/SEO";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
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
import { useToast } from "@/hooks/use-toast";
import { apiRequest, queryClient } from "@/lib/queryClient";
import {
  Calendar as CalendarIcon,
  Clock,
  User,
  Phone,
  Mail,
  MapPin,
  Wrench,
  CheckCircle2,
  ArrowRight,
  ArrowLeft,
  Shield,
  Star,
} from "lucide-react";

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

export default function TerminPage() {
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
          source: "termin-page",
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
    <div className="min-h-screen flex flex-col bg-background">
      <SEO
        title="Termin buchen | Sanitär & Heizung München | AquaPro24"
        description="Buchen Sie online Ihren Termin für Sanitär, Heizung oder Badsanierung in München. Schnelle Terminvergabe, transparente Preise, 2 Jahre Garantie."
        canonical="https://aquapro24.de/termin"
      />
      <Header />

      <main id="main-content" className="flex-1">
        <section className="py-8 bg-gradient-to-b from-secondary/10 to-background">
          <div className="max-w-4xl mx-auto px-4">
            <div className="text-center mb-8">
              <Badge variant="secondary" className="mb-4">
                <CalendarIcon className="w-3 h-3 mr-1" />
                Online Terminbuchung
              </Badge>
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                Termin vereinbaren
              </h1>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Buchen Sie in wenigen Schritten Ihren Wunschtermin. Wir bestätigen 
                schnellstmöglich und melden uns bei Ihnen.
              </p>
            </div>

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
                                      Lade verfügbare Zeiten...
                                    </p>
                                  ) : availableSlots.length === 0 ? (
                                    <p className="text-sm text-muted-foreground py-4">
                                      Keine freien Termine an diesem Tag
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
                                    <Input {...field} className="pl-10" placeholder="Vor- und Nachname" data-testid="input-name" />
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
                                    <Input {...field} className="pl-10" placeholder="0123 456789" data-testid="input-phone" />
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
                                  <Input {...field} className="pl-10" type="email" placeholder="ihre@email.de" data-testid="input-email" />
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
                              <FormLabel>Adresse (Einsatzort)</FormLabel>
                              <FormControl>
                                <div className="relative">
                                  <MapPin className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-muted-foreground" />
                                  <Input {...field} className="pl-10" placeholder="Straße, PLZ Ort" data-testid="input-address" />
                                </div>
                              </FormControl>
                              <FormMessage />
                            </FormItem>
                          )}
                        />

                        <div className="bg-muted/50 rounded-lg p-4">
                          <h4 className="font-medium mb-2">Zusammenfassung:</h4>
                          <div className="text-sm text-muted-foreground space-y-1">
                            <p>Service: {serviceTypes.find(s => s.value === form.getValues("serviceType"))?.label}</p>
                            <p>Datum: {selectedDate ? format(selectedDate, "dd. MMMM yyyy", { locale: de }) : "-"}</p>
                            <p>Uhrzeit: {form.getValues("preferredTime") || "-"} Uhr</p>
                          </div>
                        </div>

                        <div className="flex justify-between">
                          <Button type="button" variant="outline" onClick={prevStep} data-testid="button-prev-step3">
                            <ArrowLeft className="w-4 h-4 mr-2" />
                            Zurück
                          </Button>
                          <Button type="submit" disabled={bookingMutation.isPending} data-testid="button-submit">
                            {bookingMutation.isPending ? "Wird gesendet..." : "Termin anfragen"}
                          </Button>
                        </div>
                      </CardContent>
                    </Card>
                  )}
                </form>
              </Form>
            )}

            <div className="mt-8 grid md:grid-cols-3 gap-4">
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Shield className="w-8 h-8 text-accent flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Festpreisgarantie</p>
                  <p className="text-xs text-muted-foreground">Keine versteckten Kosten</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Clock className="w-8 h-8 text-secondary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">Schnelle Bestätigung</p>
                  <p className="text-xs text-muted-foreground">Meist innerhalb 2 Stunden</p>
                </div>
              </div>
              <div className="flex items-center gap-3 p-4 bg-card rounded-lg border">
                <Star className="w-8 h-8 text-primary flex-shrink-0" />
                <div>
                  <p className="font-medium text-sm">2.847+ Kunden</p>
                  <p className="text-xs text-muted-foreground">4.9/5 Sterne Bewertung</p>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
