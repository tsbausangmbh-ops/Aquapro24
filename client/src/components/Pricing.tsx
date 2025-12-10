import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  Check, 
  Phone, 
  Clock, 
  Shield,
  AlertCircle,
  Euro,
  Bot,
  Send,
  Loader2,
  CheckCircle2,
  Mail
} from "lucide-react";

const pricingInfo = [
  {
    title: "Anfahrt",
    price: "0 €",
    note: "Im Stadtgebiet München",
    icon: Clock,
  },
  {
    title: "Arbeitsstunde",
    price: "ab 65 €",
    note: "Mo-Fr 8-18 Uhr",
    icon: Euro,
  },
  {
    title: "Notdienst-Zuschlag",
    price: "ab 30 €",
    note: "Abends/Wochenende",
    icon: AlertCircle,
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

type FormStep = "problem" | "contact" | "submitting" | "complete";

export default function Pricing() {
  const [step, setStep] = useState<FormStep>("problem");
  const [problem, setProblem] = useState("");
  const [priceResult, setPriceResult] = useState<{ service: string; minPrice: number; maxPrice: number } | null>(null);
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");

  const handleProblemSubmit = () => {
    if (!problem.trim()) return;
    const estimate = estimatePrice(problem);
    setPriceResult(estimate || { service: "Allgemeine Arbeiten", minPrice: 96, maxPrice: 240 });
    setStep("contact");
  };

  const handleContactSubmit = async () => {
    if (!name.trim() || !phone.trim()) return;
    setStep("submitting");

    const payload = {
      name,
      phone,
      email,
      problem,
      estimatedPrice: priceResult ? `${priceResult.service}: ca. ${priceResult.minPrice} - ${priceResult.maxPrice} EUR` : "Wird ermittelt",
      source: "website_price_calculator",
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
    setStep("problem");
    setProblem("");
    setPriceResult(null);
    setName("");
    setPhone("");
    setEmail("");
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
            <Card key={index} className="text-center">
              <CardHeader>
                <div className="w-12 h-12 rounded-full bg-secondary/10 flex items-center justify-center mx-auto mb-2">
                  <item.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-base font-medium text-muted-foreground">
                  {item.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-3xl font-bold text-foreground mb-1" data-testid={`text-price-${index}`}>
                  {item.price}
                </p>
                <p className="text-sm text-muted-foreground">{item.note}</p>
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
                <p className="text-muted-foreground mb-6">
                  <span className="text-foreground font-medium">Wenn Sie bei uns anrufen,</span> nennen wir Ihnen den exakten Preis, 
                  <strong> bevor</strong> wir mit der Arbeit beginnen. So entscheiden Sie in Ruhe – garantiert.
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
              
              <div className="space-y-4">
                <div className="bg-muted/50 rounded-xl p-6 text-center">
                  <p className="text-sm text-muted-foreground mb-2">Jetzt unverbindlich anfragen</p>
                  <p className="text-2xl font-bold mb-4">
                    Kostenloses Angebot
                  </p>
                  <Button size="lg" className="w-full gap-2 mb-3" asChild data-testid="button-call-pricing">
                    <a href="tel:+4989123456789">
                      <Phone className="w-5 h-5" />
                      089 123 456 789
                    </a>
                  </Button>
                  <p className="text-xs text-muted-foreground">
                    Oder schreiben Sie uns eine E-Mail an info@muenchner-sanitaer.de
                  </p>
                </div>

                <div className="bg-secondary/5 border-2 border-secondary/30 rounded-xl p-5">
                  <div className="flex items-center gap-2 mb-4">
                    <div className="w-8 h-8 rounded-full bg-secondary flex items-center justify-center">
                      <Bot className="w-4 h-4 text-secondary-foreground" />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">KI-Preisrechner</p>
                      <p className="text-xs text-muted-foreground">Sofort Preis-Schätzung erhalten</p>
                    </div>
                  </div>

                  {step === "problem" && (
                    <div className="space-y-3">
                      <Textarea
                        value={problem}
                        onChange={(e) => setProblem(e.target.value)}
                        placeholder="Beschreiben Sie Ihr Anliegen, z.B. 'Neue Dusche im Bad installieren' oder 'Wasserhahn tropft'..."
                        className="min-h-20 text-sm resize-none"
                        data-testid="input-problem-description"
                      />
                      <Button 
                        onClick={handleProblemSubmit}
                        disabled={!problem.trim()}
                        className="w-full gap-2"
                        data-testid="button-get-price"
                      >
                        <Send className="w-4 h-4" />
                        Preis berechnen
                      </Button>
                    </div>
                  )}

                  {step === "contact" && priceResult && (
                    <div className="space-y-4">
                      <div className="bg-accent/10 border border-accent/30 rounded-lg p-4 text-center">
                        <p className="text-xs text-muted-foreground mb-1">Geschätzte Kosten für</p>
                        <p className="font-semibold text-secondary">{priceResult.service}</p>
                        <p className="text-2xl font-bold text-foreground mt-1" data-testid="text-estimated-price">
                          ca. {priceResult.minPrice} - {priceResult.maxPrice} EUR
                        </p>
                        <p className="text-xs text-muted-foreground mt-1">inkl. Anfahrt im Stadtgebiet München</p>
                      </div>
                      
                      <div className="space-y-2">
                        <Input
                          value={name}
                          onChange={(e) => setName(e.target.value)}
                          placeholder="Ihr Name"
                          className="text-sm"
                          data-testid="input-name"
                        />
                        <Input
                          value={phone}
                          onChange={(e) => setPhone(e.target.value)}
                          placeholder="Telefonnummer"
                          className="text-sm"
                          data-testid="input-phone"
                        />
                        <Input
                          value={email}
                          onChange={(e) => setEmail(e.target.value)}
                          placeholder="E-Mail (optional)"
                          className="text-sm"
                          data-testid="input-email"
                        />
                      </div>
                      
                      <Button 
                        onClick={handleContactSubmit}
                        disabled={!name.trim() || !phone.trim()}
                        className="w-full gap-2"
                        data-testid="button-submit-contact"
                      >
                        <Mail className="w-4 h-4" />
                        Unverbindliches Angebot anfordern
                      </Button>
                      
                      <button 
                        onClick={resetForm}
                        className="w-full text-xs text-muted-foreground hover:text-foreground transition-colors"
                        data-testid="button-reset-form"
                      >
                        Andere Anfrage stellen
                      </button>
                    </div>
                  )}

                  {step === "submitting" && (
                    <div className="flex items-center justify-center gap-2 py-8">
                      <Loader2 className="w-5 h-5 animate-spin text-secondary" />
                      <span className="text-sm">Anfrage wird gesendet...</span>
                    </div>
                  )}

                  {step === "complete" && (
                    <div className="text-center py-4 space-y-3">
                      <div className="flex items-center justify-center gap-2 text-accent">
                        <CheckCircle2 className="w-6 h-6" />
                        <span className="font-semibold">Anfrage gesendet!</span>
                      </div>
                      <p className="text-sm text-muted-foreground">
                        Wir melden uns schnellstmöglich bei Ihnen.
                      </p>
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
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </section>
  );
}
