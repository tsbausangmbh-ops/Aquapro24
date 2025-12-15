import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
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
  const inputRef = useRef<HTMLTextAreaElement>(null);
  const dialogRef = useRef<HTMLDivElement>(null);
  const closeButtonRef = useRef<HTMLButtonElement>(null);

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

  // ESC key handler and focus trap for accessibility
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (!isOpen || !dialogRef.current) return;
      
      if (e.key === "Escape") {
        setIsOpen(false);
        return;
      }
      
      // Focus trap - keep focus within dialog
      if (e.key === "Tab") {
        const focusableElements = dialogRef.current.querySelectorAll<HTMLElement>(
          'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
        );
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];
        
        if (e.shiftKey && document.activeElement === firstElement) {
          e.preventDefault();
          lastElement?.focus();
        } else if (!e.shiftKey && document.activeElement === lastElement) {
          e.preventDefault();
          firstElement?.focus();
        }
      }
    };
    
    if (isOpen) {
      document.addEventListener("keydown", handleKeyDown);
    }
    
    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
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
        content: "Entschuldigung, ich bin gerade nicht erreichbar. Bitte versuchen Sie es in wenigen Minuten erneut.",
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
      {/* Seitlicher Balken rechts - immer sichtbar wenn geschlossen */}
      {!isOpen && (
        <div 
          onClick={handleOpen}
          className="fixed right-0 top-1/2 -translate-y-1/2 z-50 cursor-pointer group"
          data-testid="button-open-ai-chat"
          role="button"
          tabIndex={0}
          aria-label="KI-Beratung öffnen - Kostenlose Beratung rund um die Uhr"
          onKeyDown={(e) => { if (e.key === "Enter" || e.key === " ") handleOpen(); }}
        >
          <div className="bg-emerald-600 text-white shadow-lg rounded-l-lg px-2 py-6 flex flex-col items-center gap-3 hover-elevate transition-all">
            {showPulse && (
              <span className="absolute inset-0 rounded-l-lg animate-ping opacity-30 bg-emerald-600" aria-hidden="true" />
            )}
            <MessageCircle className="w-6 h-6" aria-hidden="true" />
            <span 
              className="writing-vertical text-sm font-medium whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              KI-Beratung
            </span>
            <span 
              className="writing-vertical text-xs opacity-80 whitespace-nowrap"
              style={{ writingMode: "vertical-rl", textOrientation: "mixed" }}
            >
              24h Online
            </span>
          </div>
        </div>
      )}

      {/* Chat-Panel - öffnet sich seitlich */}
      {isOpen && (
        <div 
          ref={dialogRef}
          className="fixed right-0 top-0 h-full z-50 w-[380px] max-w-[calc(100vw-1rem)] shadow-2xl"
          role="dialog"
          aria-modal="true"
          aria-labelledby="chat-dialog-title"
          aria-describedby="chat-dialog-description"
        >
          <div className="h-full flex flex-col bg-background border-l">
            {/* Header */}
            <div className="bg-emerald-600 text-white p-4 flex-shrink-0">
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center" aria-hidden="true">
                    <Bot className="w-5 h-5" />
                  </div>
                  <div>
                    <p className="font-semibold text-sm" id="chat-dialog-title">AquaPro24 KI-Assistent</p>
                    <div className="flex items-center gap-1.5 text-xs opacity-90">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" aria-hidden="true" />
                      <span>KI-System | EU AI Act konform</span>
                    </div>
                  </div>
                </div>
                <Button 
                  variant="ghost" 
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-current hover:bg-white/20"
                  data-testid="button-close-ai-chat"
                  aria-label="Chat schließen"
                >
                  <X className="w-5 h-5" aria-hidden="true" />
                </Button>
              </div>
            </div>

            {/* Messages */}
            <div 
              className="flex-1 overflow-y-auto p-4 space-y-4 bg-muted/30"
              role="log"
              aria-live="polite"
              aria-label="Chat-Verlauf"
            >
              {messages.map((message, index) => (
                <div
                  key={index}
                  className={`flex gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "assistant" && (
                    <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
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
                    <div className="w-8 h-8 rounded-full bg-muted flex items-center justify-center flex-shrink-0" aria-hidden="true">
                      <User className="w-4 h-4 text-muted-foreground" />
                    </div>
                  )}
                </div>
              ))}
              
              {isLoading && (
                <div className="flex gap-2 justify-start" aria-label="Antwort wird geladen" role="status">
                  <div className={`w-8 h-8 rounded-full ${colors.bg} flex items-center justify-center flex-shrink-0`} aria-hidden="true">
                    <Bot className={`w-4 h-4 ${colors.text}`} />
                  </div>
                  <div className="bg-card border rounded-lg p-3">
                    <Loader2 className="w-4 h-4 animate-spin text-muted-foreground" aria-hidden="true" />
                    <span className="sr-only">Antwort wird geladen...</span>
                  </div>
                </div>
              )}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Input */}
            <div className="p-4 border-t bg-background flex-shrink-0">
              <form onSubmit={handleSubmit} className="flex gap-2 items-end">
                <Textarea
                  ref={inputRef}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter" && !e.shiftKey) {
                      e.preventDefault();
                      if (inputValue.trim() && !isLoading) {
                        handleSubmit(e);
                      }
                    }
                  }}
                  placeholder="Ihre Nachricht..."
                  disabled={isLoading}
                  className="flex-1 min-h-[60px] max-h-[100px] resize-none"
                  data-testid="input-chat-message"
                  aria-label="Nachricht eingeben"
                />
                <Button 
                  type="submit" 
                  size="icon"
                  disabled={isLoading || !inputValue.trim()}
                  className={colors.bg}
                  data-testid="button-send-message"
                  aria-label="Nachricht senden"
                >
                  <Send className="w-4 h-4" aria-hidden="true" />
                </Button>
              </form>
              
              <p className="text-xs text-muted-foreground text-center mt-3 pt-3 border-t" id="chat-dialog-description">
                KI-gestützter Chatbot. Ihre Eingaben werden zur Beantwortung verarbeitet. Drücken Sie Escape zum Schließen.{" "}
                <a href="/datenschutz#mKI" className="text-secondary hover:underline">
                  Datenschutz
                </a>
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
