import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Phone,
  Loader2,
  CheckCircle2,
  Wrench
} from "lucide-react";

interface Message {
  id: string;
  role: "bot" | "user";
  content: string;
  timestamp: Date;
}

interface LeadData {
  name: string;
  phone: string;
  email: string;
  problem: string;
  address: string;
  urgency: string;
  urgencyLabel: string;
}

type ChatStep = "greeting" | "name" | "phone" | "email" | "problem" | "address" | "urgency" | "confirm" | "complete";

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || "";

const urgencyOptions = [
  { value: "emergency", label: "Notfall - Sofort Hilfe nötig" },
  { value: "today", label: "Heute noch" },
  { value: "week", label: "Diese Woche" },
  { value: "planning", label: "Nur Planung / Angebot" },
];

export default function ChatWidget() {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [currentStep, setCurrentStep] = useState<ChatStep>("greeting");
  const [leadData, setLeadData] = useState<LeadData>({
    name: "",
    phone: "",
    email: "",
    problem: "",
    address: "",
    urgency: "",
    urgencyLabel: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const leadDataRef = useRef<LeadData>({
    name: "",
    phone: "",
    email: "",
    problem: "",
    address: "",
    urgency: "",
    urgencyLabel: "",
  });

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      addBotMessage(
        "Hallo! Ich bin der virtuelle Assistent von Münchner Heizung & Sanitär. Haben Sie ein Problem mit Ihrer Heizung oder Sanitäranlage? Ich helfe Ihnen gerne weiter!\n\nWie darf ich Sie ansprechen?"
      );
      setCurrentStep("name");
    }
  }, [isOpen]);

  const addBotMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      role: "bot",
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, message]);
  };

  const addUserMessage = (content: string) => {
    const message: Message = {
      id: Date.now().toString(),
      role: "user",
      content,
      timestamp: new Date(),
    };
    setMessages(prev => [...prev, message]);
  };

  const handleSendMessage = async () => {
    if (!inputValue.trim() && currentStep !== "urgency") return;

    const userInput = inputValue.trim();
    if (userInput) {
      addUserMessage(userInput);
    }
    setInputValue("");

    setTimeout(() => {
      processStep(userInput);
    }, 500);
  };

  const processStep = (userInput: string) => {
    switch (currentStep) {
      case "name":
        leadDataRef.current = { ...leadDataRef.current, name: userInput };
        setLeadData(leadDataRef.current);
        addBotMessage(
          `Freut mich, ${userInput}! Unter welcher Telefonnummer können wir Sie erreichen?`
        );
        setCurrentStep("phone");
        break;

      case "phone":
        leadDataRef.current = { ...leadDataRef.current, phone: userInput };
        setLeadData(leadDataRef.current);
        addBotMessage(
          "Perfekt! Und Ihre E-Mail-Adresse für die Bestätigung?"
        );
        setCurrentStep("email");
        break;

      case "email":
        leadDataRef.current = { ...leadDataRef.current, email: userInput };
        setLeadData(leadDataRef.current);
        addBotMessage(
          "Danke! Bitte beschreiben Sie kurz Ihr Problem. Was ist passiert?"
        );
        setCurrentStep("problem");
        break;

      case "problem":
        leadDataRef.current = { ...leadDataRef.current, problem: userInput };
        setLeadData(leadDataRef.current);
        addBotMessage(
          "Verstehe. An welcher Adresse sollen wir vorbeikommen?"
        );
        setCurrentStep("address");
        break;

      case "address":
        leadDataRef.current = { ...leadDataRef.current, address: userInput };
        setLeadData(leadDataRef.current);
        addBotMessage(
          "Wie dringend ist Ihr Anliegen?"
        );
        setCurrentStep("urgency");
        break;

      case "urgency":
        const urgencyLabelText = urgencyOptions.find(o => o.value === userInput)?.label || userInput;
        leadDataRef.current = { ...leadDataRef.current, urgency: userInput, urgencyLabel: urgencyLabelText };
        setLeadData(leadDataRef.current);
        
        const currentData = leadDataRef.current;
        
        addBotMessage(
          `Vielen Dank für Ihre Angaben, ${currentData.name}!\n\n` +
          `Zusammenfassung:\n` +
          `- Problem: ${currentData.problem}\n` +
          `- Adresse: ${currentData.address}\n` +
          `- Dringlichkeit: ${currentData.urgencyLabel}\n` +
          `- Telefon: ${currentData.phone}\n\n` +
          `Soll ich diese Anfrage an unser Team weiterleiten? Schreiben Sie "Ja" zum Bestätigen.`
        );
        setCurrentStep("confirm");
        break;

      case "confirm":
        if (userInput.toLowerCase().includes("ja")) {
          submitLeadWithData(leadDataRef.current);
        } else {
          addBotMessage(
            "Kein Problem! Wenn Sie doch Hilfe benötigen, rufen Sie uns einfach an unter 089 123 456 789 oder starten Sie den Chat erneut."
          );
        }
        break;
    }
  };

  const handleUrgencySelect = (value: string) => {
    addUserMessage(urgencyOptions.find(o => o.value === value)?.label || value);
    setInputValue("");
    setTimeout(() => {
      processStep(value);
    }, 500);
  };

  const submitLeadWithData = async (data: typeof leadData) => {
    setIsSubmitting(true);
    
    const payload = {
      ...data,
      timestamp: new Date().toISOString(),
      source: "website_chatbot",
      page_url: window.location.href,
    };

    const webhookPromises: Promise<Response>[] = [];
    
    if (WEBHOOK_URL && WEBHOOK_URL.trim() !== "") {
      webhookPromises.push(
        fetch(WEBHOOK_URL, {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          mode: "no-cors",
          body: JSON.stringify(payload),
        })
      );
    }
    
    webhookPromises.push(
      fetch("/api/leads", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(payload),
      })
    );

    try {
      await Promise.all(webhookPromises);

      addBotMessage(
        `Ihre Anfrage wurde erfolgreich übermittelt!\n\n` +
        (data.urgency === "emergency" 
          ? `Da es sich um einen Notfall handelt, rufen Sie uns bitte direkt an unter 089 123 456 789 für schnellste Hilfe.`
          : `Unser Team wird sich innerhalb von 30 Minuten bei Ihnen melden.\n\nFür dringende Notfälle erreichen Sie uns unter 089 123 456 789.`)
      );
      setCurrentStep("complete");
    } catch (error) {
      console.error("Lead submission error:", error);
      addBotMessage(
        "Es gab ein technisches Problem. Bitte rufen Sie uns direkt an: 089 123 456 789"
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSendMessage();
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPulse(false);
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
                    <CardTitle className="text-base">Münchner Heizung & Sanitär</CardTitle>
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span>Online - Antworten in Sekunden</span>
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
              <div className="h-80 overflow-y-auto p-4 space-y-4 bg-muted/30">
                {messages.map((message) => (
                  <div
                    key={message.id}
                    className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "bot" && (
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-secondary" />
                      </div>
                    )}
                    <div
                      className={`max-w-[80%] rounded-lg p-3 text-sm whitespace-pre-line ${
                        message.role === "user"
                          ? "bg-secondary text-secondary-foreground rounded-tr-none"
                          : "bg-card border border-card-border rounded-tl-none"
                      }`}
                      data-testid={`chat-message-${message.role}`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-primary" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isSubmitting && (
                  <div className="flex gap-2 justify-start">
                    <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                      <Loader2 className="w-4 h-4 text-secondary animate-spin" />
                    </div>
                    <div className="bg-card border border-card-border rounded-lg rounded-tl-none p-3 text-sm">
                      Ihre Anfrage wird übermittelt...
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>
              
              {currentStep === "urgency" ? (
                <div className="p-4 border-t border-border space-y-2">
                  <p className="text-sm text-muted-foreground mb-2">Wählen Sie die Dringlichkeit:</p>
                  <div className="grid grid-cols-2 gap-2">
                    {urgencyOptions.map((option) => (
                      <Button
                        key={option.value}
                        variant={option.value === "emergency" ? "default" : "outline"}
                        size="sm"
                        className="text-xs h-auto py-2 px-3"
                        onClick={() => handleUrgencySelect(option.value)}
                        data-testid={`button-urgency-${option.value}`}
                      >
                        {option.label}
                      </Button>
                    ))}
                  </div>
                </div>
              ) : currentStep === "complete" ? (
                <div className="p-4 border-t border-border">
                  <div className="flex items-center gap-2 text-accent mb-3">
                    <CheckCircle2 className="w-5 h-5" />
                    <span className="text-sm font-medium">Anfrage gesendet!</span>
                  </div>
                  <Button className="w-full gap-2" asChild>
                    <a href="tel:+4989123456789">
                      <Phone className="w-4 h-4" />
                      Jetzt anrufen: 089 123 456 789
                    </a>
                  </Button>
                </div>
              ) : (
                <div className="p-4 border-t border-border">
                  <div className="flex gap-2">
                    <Input
                      value={inputValue}
                      onChange={(e) => setInputValue(e.target.value)}
                      onKeyPress={handleKeyPress}
                      placeholder={
                        currentStep === "name" ? "Ihr Name..." :
                        currentStep === "phone" ? "Telefonnummer..." :
                        currentStep === "email" ? "E-Mail-Adresse..." :
                        currentStep === "address" ? "Adresse..." :
                        "Ihre Nachricht..."
                      }
                      className="flex-1"
                      disabled={isSubmitting}
                      data-testid="input-chat-message"
                    />
                    <Button 
                      onClick={handleSendMessage}
                      disabled={!inputValue.trim() || isSubmitting}
                      size="icon"
                      data-testid="button-send-message"
                    >
                      <Send className="w-4 h-4" />
                    </Button>
                  </div>
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
            <span className="font-semibold">Brauchen Sie Hilfe?</span>
            <br />
            <span className="text-muted-foreground">Klicken Sie hier für schnelle Hilfe!</span>
          </p>
        </div>
      )}
    </>
  );
}
