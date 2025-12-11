import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Phone,
  Loader2
} from "lucide-react";

interface Message {
  role: "user" | "assistant";
  content: string;
}

interface AIChatWidgetProps {
  serviceCategory?: "sanitaer" | "bad" | "heizung" | "waermepumpe" | "haustechnik";
}

const SERVICE_CATEGORY_COLORS: Record<string, { bg: string; text: string }> = {
  sanitaer: { bg: "bg-secondary", text: "text-secondary-foreground" },
  bad: { bg: "bg-cyan-600", text: "text-white" },
  heizung: { bg: "bg-destructive", text: "text-destructive-foreground" },
  waermepumpe: { bg: "bg-orange-500", text: "text-white" },
  haustechnik: { bg: "bg-emerald-600", text: "text-white" },
};

export default function AIChatWidget({ serviceCategory }: AIChatWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([]);
  const [inputValue, setInputValue] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const colors = serviceCategory 
    ? SERVICE_CATEGORY_COLORS[serviceCategory] 
    : { bg: "bg-secondary", text: "text-secondary-foreground" };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  useEffect(() => {
    if (isOpen && messages.length === 0) {
      const initialContext = serviceCategory 
        ? `Ich interessiere mich für ${getServiceLabel(serviceCategory)}.`
        : "";
      
      sendMessage(initialContext || "Hallo", true);
    }
  }, [isOpen]);

  const getServiceLabel = (category: string): string => {
    const labels: Record<string, string> = {
      sanitaer: "Sanitär & Wasserinstallation",
      bad: "Badsanierung",
      heizung: "Heizung",
      waermepumpe: "Wärmepumpe",
      haustechnik: "Haustechnik",
    };
    return labels[category] || category;
  };

  const sendMessage = async (content: string, isInitial = false) => {
    if (!content.trim() && !isInitial) return;

    const userMessage: Message = { role: "user", content: content.trim() };
    
    if (!isInitial) {
      setMessages(prev => [...prev, userMessage]);
    }
    
    setInputValue("");
    setIsLoading(true);

    try {
      const messagesToSend = isInitial 
        ? [userMessage]
        : [...messages, userMessage];

      const response = await fetch("/api/chat", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ messages: messagesToSend }),
      });

      const data = await response.json();
      
      const assistantMessage: Message = {
        role: "assistant",
        content: data.message || "Entschuldigung, es gab einen Fehler.",
      };

      if (isInitial) {
        setMessages([assistantMessage]);
      } else {
        setMessages(prev => [...prev, assistantMessage]);
      }
    } catch (error) {
      console.error("Chat error:", error);
      const errorMessage: Message = {
        role: "assistant",
        content: "Entschuldigung, ich bin gerade nicht erreichbar. Bitte rufen Sie uns an: 0152 12274043",
      };
      setMessages(prev => [...prev, errorMessage]);
    } finally {
      setIsLoading(false);
    }
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputValue);
  };

  const handleOpen = () => {
    setIsOpen(true);
    setShowPulse(false);
  };

  return (
    <>
      {!isOpen && (
        <div className="fixed bottom-6 right-6 z-50 flex items-end gap-3">
          <div 
            onClick={handleOpen}
            className="bg-destructive text-destructive-foreground shadow-lg rounded-lg px-4 py-3 max-w-[200px] cursor-pointer hover-elevate"
            data-testid="label-ai-chat-hint"
          >
            <p className="text-sm font-medium">KI-Agent für die Kostenschätzung</p>
            <p className="text-xs opacity-90 mt-1">Kostenlose Tipps & Soforthilfe</p>
          </div>
          <Button
            onClick={handleOpen}
            className={`${colors.bg} ${colors.text} rounded-full p-4 shadow-lg relative`}
            size="icon"
            style={{ width: "64px", height: "64px" }}
            data-testid="button-open-ai-chat"
          >
            {showPulse && (
              <span className="absolute inset-0 rounded-full animate-ping opacity-40 bg-current" />
            )}
            <MessageCircle className="w-7 h-7" />
          </Button>
        </div>
      )}

      {isOpen && (
        <div className="fixed bottom-6 right-6 z-50 w-[380px] max-w-[calc(100vw-3rem)]">
          <Card className="shadow-2xl border-0 overflow-hidden">
            <CardHeader className={`${colors.bg} ${colors.text} p-4`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm">AquaPro24 KI-Agent für die Kostenschätzung</p>
                    <div className="flex items-center gap-1.5 text-xs opacity-90">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span>Online</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-current hover:bg-white/20"
                  data-testid="button-close-ai-chat"
                >
                  <X className="w-5 h-5" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="p-0">
              <div className="h-[350px] overflow-y-auto p-4 space-y-4 bg-muted/30">
                {messages.map((message, index) => (
                  <div
                    key={index}
                    className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                  >
                    {message.role === "assistant" && (
                      <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                        <Bot className={`w-4 h-4 ${colors.text}`} />
                      </div>
                    )}
                    <div
                      className={`max-w-[75%] rounded-lg p-3 text-sm whitespace-pre-line ${
                        message.role === "user"
                          ? "bg-primary text-primary-foreground"
                          : "bg-card border"
                      }`}
                      data-testid={`chat-message-${message.role}-${index}`}
                    >
                      {message.content}
                    </div>
                    {message.role === "user" && (
                      <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0">
                        <User className="w-4 h-4 text-muted-foreground" />
                      </div>
                    )}
                  </div>
                ))}
                
                {isLoading && (
                  <div className="flex gap-2 justify-start">
                    <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`}>
                      <Bot className={`w-4 h-4 ${colors.text}`} />
                    </div>
                    <div className="bg-card border rounded-lg p-3">
                      <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" />
                    </div>
                  </div>
                )}
                
                <div ref={messagesEndRef} />
              </div>

              <div className="p-4 border-t bg-background">
                <form onSubmit={handleSubmit} className="flex gap-2">
                  <Input
                    ref={inputRef}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    placeholder="Ihre Nachricht..."
                    disabled={isLoading}
                    className="flex-1"
                    data-testid="input-chat-message"
                  />
                  <Button 
                    type="submit" 
                    size="icon"
                    disabled={isLoading || !inputValue.trim()}
                    className={colors.bg}
                    data-testid="button-send-message"
                  >
                    <Send className="w-4 h-4" />
                  </Button>
                </form>
                
                <a
                  href="tel:+4915212274043"
                  className="flex items-center justify-center gap-2 mt-3 text-sm text-muted-foreground hover:text-foreground"
                  data-testid="link-chat-phone"
                >
                  <Phone className="w-4 h-4" />
                  <span>Lieber anrufen? 0152 12274043</span>
                </a>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
}
