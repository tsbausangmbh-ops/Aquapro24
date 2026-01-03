import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { 
  MessageCircle, 
  Send, 
  Bot, 
  User,
  Loader2,
  Sparkles,
  HelpCircle
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

export type ServiceType = "sanitaer" | "bad" | "heizung" | "waermepumpe" | "haustechnik" | "rohrreinigung" | "warmwasser" | "armaturen";

interface ServiceAdvisorProps {
  serviceType: ServiceType;
}

const SERVICE_CONFIG: Record<ServiceType, {
  title: string;
  subtitle: string;
  color: string;
  bgColor: string;
  suggestions: string[];
}> = {
  bad: {
    title: "Ihr persönlicher Badsanierung-Berater",
    subtitle: "Stellen Sie Ihre Fragen zu Kosten, Ablauf, Materialien und mehr. Unser KI-Berater gibt Ihnen sofort Auskunft.",
    color: "text-cyan-600",
    bgColor: "bg-cyan-50 dark:bg-cyan-950/30",
    suggestions: [
      "Was kostet eine Badsanierung?",
      "Wie lange dauert der Umbau?",
      "Welche Fliesen empfehlen Sie?",
      "Gibt es Förderungen für barrierefreie Bäder?"
    ]
  },
  sanitaer: {
    title: "Ihr persönlicher Sanitär-Berater",
    subtitle: "Fragen zu Wasserleitungen, Abflüssen und Sanitärinstallationen? Unser KI-Berater hilft Ihnen weiter.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    suggestions: [
      "Wasserhahn tropft - was tun?",
      "Kosten für neue Wasserleitungen?",
      "Abfluss ist verstopft - Soforthilfe?",
      "Wann lohnt sich ein Rohraustausch?"
    ]
  },
  heizung: {
    title: "Ihr persönlicher Heizung-Berater",
    subtitle: "Fragen zu Heizungswartung, Reparatur oder Austausch? Unser KI-Berater berät Sie kompetent.",
    color: "text-destructive",
    bgColor: "bg-destructive/10",
    suggestions: [
      "Heizung wird nicht warm - Ursachen?",
      "Was kostet eine neue Heizung?",
      "Wie oft sollte ich warten lassen?",
      "Welche Heizung passt zu mir?"
    ]
  },
  waermepumpe: {
    title: "Ihr persönlicher Wärmepumpen-Berater",
    subtitle: "Fragen zu Wärmepumpen, Förderungen und Umrüstung? Unser KI-Berater kennt alle Antworten.",
    color: "text-orange-600",
    bgColor: "bg-orange-50 dark:bg-orange-950/30",
    suggestions: [
      "Lohnt sich eine Wärmepumpe für mich?",
      "Welche Förderungen gibt es?",
      "Wie hoch sind die Betriebskosten?",
      "Kann ich meine alte Heizung umrüsten?"
    ]
  },
  haustechnik: {
    title: "Ihr persönlicher Haustechnik-Berater",
    subtitle: "Fragen zu Haustechnik und Gebäudetechnik? Unser KI-Berater hilft Ihnen gerne.",
    color: "text-emerald-600",
    bgColor: "bg-emerald-50 dark:bg-emerald-950/30",
    suggestions: [
      "Was gehört zur Haustechnik?",
      "Wie oft sollte ich warten lassen?",
      "Smart Home nachrüsten möglich?",
      "Kosten für eine Modernisierung?"
    ]
  },
  rohrreinigung: {
    title: "Ihr persönlicher Rohrreinigung-Berater",
    subtitle: "Verstopfter Abfluss? Unser KI-Berater gibt Ihnen Soforthilfe-Tipps und Kostenauskunft.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    suggestions: [
      "Abfluss verstopft - Soforthilfe?",
      "Was kostet eine Rohrreinigung?",
      "Wann brauche ich einen Profi?",
      "Wie kann ich vorbeugen?"
    ]
  },
  warmwasser: {
    title: "Ihr persönlicher Warmwasser-Berater",
    subtitle: "Fragen zu Boilern, Durchlauferhitzern und Warmwasseraufbereitung? Wir beraten Sie.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    suggestions: [
      "Boiler oder Durchlauferhitzer?",
      "Kein warmes Wasser - was tun?",
      "Kosten für einen neuen Boiler?",
      "Wie groß muss der Speicher sein?"
    ]
  },
  armaturen: {
    title: "Ihr persönlicher Armaturen-Berater",
    subtitle: "Fragen zu Wasserhähnen, Mischern und Armaturen? Unser KI-Berater hilft bei der Auswahl.",
    color: "text-secondary",
    bgColor: "bg-secondary/10",
    suggestions: [
      "Welche Armatur passt zu mir?",
      "Wasserhahn austauschen - Kosten?",
      "Tropfender Hahn reparieren?",
      "Unterschied Einhebel vs. Zweigriff?"
    ]
  }
};

export default function ServiceAdvisor({ serviceType }: ServiceAdvisorProps) {
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [isStarted, setIsStarted] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLTextAreaElement>(null);

  const config = SERVICE_CONFIG[serviceType];

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const sendMessage = async (content: string, isInitial = false) => {
    if (!content.trim() && !isInitial) return;
    
    if (!isInitial) {
      setMessages(prev => [...prev, { role: "user", content }]);
    }
    setInputValue("");
    setIsLoading(true);

    try {
      const response = await fetch("/api/service-advisor", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ 
          messages: isInitial 
            ? [{ role: "user", content }]
            : [...messages, { role: "user", content }],
          serviceType
        }),
      });

      const data = await response.json();
      
      if (data.success) {
        setMessages(prev => [...prev, { role: "assistant", content: data.message }]);
      } else {
        setMessages(prev => [...prev, { 
          role: "assistant", 
          content: "Entschuldigung, ich bin gerade nicht erreichbar. Bitte rufen Sie uns an: 089 444438872" 
        }]);
      }
    } catch (error) {
      setMessages(prev => [...prev, { 
        role: "assistant", 
        content: "Verbindungsfehler. Bitte versuchen Sie es erneut oder rufen Sie uns an: 089 444438872" 
      }]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (inputValue.trim() && !isLoading) {
      sendMessage(inputValue);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === "Enter" && !e.shiftKey) {
      e.preventDefault();
      handleSubmit(e);
    }
  };

  const handleSuggestionClick = (suggestion: string) => {
    if (!isStarted) {
      setIsStarted(true);
    }
    sendMessage(suggestion);
  };

  const startChat = () => {
    setIsStarted(true);
    setMessages([{
      role: "assistant",
      content: `Herzlich willkommen!\n\nIch bin Ihr persönlicher Berater für ${config.title.replace("Ihr persönlicher ", "").replace("-Berater", "")}.\n\nSie haben Fragen zu Kosten, Ablauf, Materialien oder technischen Details? Ich helfe Ihnen gerne weiter.\n\nWas möchten Sie wissen?`
    }]);
  };

  return (
    <section className={`py-6 ${config.bgColor}`} data-testid="section-service-advisor">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          <div className="text-center mb-6">
            <div className="flex items-center justify-center gap-2 mb-3">
              <Sparkles className={`w-6 h-6 ${config.color}`} />
              <Badge variant="secondary" className="text-sm">
                KI-Berater
              </Badge>
            </div>
            <h2 className={`text-2xl md:text-3xl font-bold mb-2 ${config.color}`}>
              {config.title}
            </h2>
            <p className="text-muted-foreground">
              {config.subtitle}
            </p>
          </div>

          <Card className="overflow-hidden">
            <CardContent className="p-0">
              {!isStarted ? (
                <div className="p-6">
                  <div className="text-center mb-6">
                    <div className={`w-16 h-16 mx-auto mb-4 rounded-full ${config.bgColor} flex items-center justify-center`}>
                      <Bot className={`w-8 h-8 ${config.color}`} />
                    </div>
                    <p className="text-muted-foreground mb-4">
                      Klicken Sie auf eine Frage oder starten Sie den Chat:
                    </p>
                  </div>
                  
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 mb-6">
                    {config.suggestions.map((suggestion, index) => (
                      <Button
                        key={index}
                        variant="outline"
                        className="justify-start text-left h-auto py-3 px-4"
                        onClick={() => handleSuggestionClick(suggestion)}
                        data-testid={`button-suggestion-${index}`}
                      >
                        <HelpCircle className="w-4 h-4 mr-2 shrink-0 text-muted-foreground" />
                        <span className="line-clamp-2">{suggestion}</span>
                      </Button>
                    ))}
                  </div>

                  <Button 
                    onClick={startChat}
                    className="w-full"
                    size="lg"
                    data-testid="button-start-advisor"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Chat starten
                  </Button>
                </div>
              ) : (
                <>
                  <div className="h-80 overflow-y-auto p-4 space-y-4">
                    {messages.map((message, index) => (
                      <div
                        key={index}
                        className={`flex gap-3 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                      >
                        {message.role === "assistant" && (
                          <div className={`w-8 h-8 rounded-full ${config.bgColor} flex items-center justify-center shrink-0`}>
                            <Bot className={`w-4 h-4 ${config.color}`} />
                          </div>
                        )}
                        <div
                          className={`max-w-[80%] rounded-lg px-4 py-2 ${
                            message.role === "user"
                              ? "bg-primary text-primary-foreground"
                              : "bg-muted"
                          }`}
                        >
                          <p className="text-sm whitespace-pre-wrap">{message.content}</p>
                        </div>
                        {message.role === "user" && (
                          <div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0">
                            <User className="w-4 h-4 text-primary-foreground" />
                          </div>
                        )}
                      </div>
                    ))}
                    {isLoading && (
                      <div className="flex gap-3 justify-start">
                        <div className={`w-8 h-8 rounded-full ${config.bgColor} flex items-center justify-center shrink-0`}>
                          <Bot className={`w-4 h-4 ${config.color}`} />
                        </div>
                        <div className="bg-muted rounded-lg px-4 py-2">
                          <Loader2 className="w-4 h-4 animate-spin" />
                        </div>
                      </div>
                    )}
                    <div ref={messagesEndRef} />
                  </div>

                  <div className="p-4 border-t">
                    <div className="flex flex-wrap gap-2 mb-3">
                      {config.suggestions.slice(0, 2).map((suggestion, index) => (
                        <Button
                          key={index}
                          variant="ghost"
                          size="sm"
                          className="text-xs"
                          onClick={() => handleSuggestionClick(suggestion)}
                          disabled={isLoading}
                          data-testid={`button-quick-${index}`}
                        >
                          {suggestion}
                        </Button>
                      ))}
                    </div>
                    <form onSubmit={handleSubmit} className="flex gap-2">
                      <Textarea
                        ref={inputRef}
                        value={inputValue}
                        onChange={(e) => setInputValue(e.target.value)}
                        onKeyDown={handleKeyDown}
                        placeholder="Ihre Frage eingeben..."
                        className="min-h-[44px] max-h-32 resize-none"
                        disabled={isLoading}
                        data-testid="input-advisor-message"
                      />
                      <Button 
                        type="submit" 
                        size="icon"
                        disabled={!inputValue.trim() || isLoading}
                        data-testid="button-send-advisor"
                      >
                        <Send className="w-4 h-4" />
                      </Button>
                    </form>
                  </div>
                </>
              )}
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
}