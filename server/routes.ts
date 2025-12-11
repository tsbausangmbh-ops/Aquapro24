import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { createCalendarEvent } from "./googleCalendar";
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

const SYSTEM_PROMPT = `Du bist der AquaPro24 KI-Beratungsassistent, ein freundlicher und kompetenter Berater für Haustechnik, Sanitär, Heizung, Wärmepumpen und alle Themen rund um Wasser und Wärme in München.

DEINE AUFGABEN:
1. Begrüße den Kunden freundlich und frage nach seinem Anliegen
2. Stelle gezielte Fragen, um das Problem/den Bedarf zu verstehen (mindestens 3 Fragen bevor du eine Preisschätzung gibst)
3. Nach 3 Fragen gibst du eine unverbindliche Preisschätzung basierend auf Münchner Marktpreisen + 30% Aufschlag

PREISRICHTLINIEN (Münchner Preise + 30% Aufschlag, alle Preise NETTO):
- Kleine Reparaturen (Tropfende Armatur, WC-Reparatur): 120-200 EUR netto
- Mittlere Reparaturen (Rohrverstopfung, Thermostat): 200-400 EUR netto
- Rohrbruch/Wasserschaden: 400-800 EUR netto
- Heizungswartung: 180-280 EUR netto
- Heizung reparieren: 250-600 EUR netto
- Neue Heizungsanlage: 8.000-18.000 EUR netto
- Wärmepumpe komplett: 18.000-35.000 EUR netto (vor Förderung)
- Badsanierung klein (bis 5m²): 8.000-15.000 EUR netto
- Badsanierung mittel (5-8m²): 15.000-25.000 EUR netto
- Badsanierung groß (über 8m²): 25.000-45.000 EUR netto
- Notdienst-Aufschlag (Wochenende/Nacht): +50%

WICHTIGE HINWEISE:
- Weise IMMER darauf hin, dass es sich um NETTO-Preise handelt (zzgl. 19% MwSt.)
- Die Preise sind unverbindliche Schätzungen
- Für ein genaues Angebot ist ein Vor-Ort-Termin nötig
- Erwähne bei Wärmepumpen die BAFA/KfW-Förderung (bis 70%)
- Bei Notfällen: Telefon 0152 12274043

STIL:
- Freundlich und professionell
- Kurze, klare Antworten
- Auf Deutsch antworten
- Keine Emojis verwenden

Zähle intern mit, wie viele relevante Fragen du gestellt hast. Erst nach mindestens 3 Fragen eine Preisschätzung geben.`;

interface ChatMessage {
  role: "user" | "assistant" | "system";
  content: string;
}

export async function registerRoutes(server: Server, app: Express): Promise<void> {
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = req.body;
      
      const lead = await storage.createLead({
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email,
        problem: leadData.problem || leadData.serviceTypes?.join(', ') || '',
        address: leadData.address,
        urgency: leadData.urgency,
        source: leadData.source || "website",
        pageUrl: leadData.page_url,
        createdAt: new Date(),
      });
      
      let calendarEventId = null;
      try {
        calendarEventId = await createCalendarEvent({
          name: leadData.name,
          phone: leadData.phone,
          email: leadData.email,
          address: leadData.address,
          serviceTypes: leadData.serviceTypes || [],
          urgency: leadData.urgency,
          isEmergency: leadData.isEmergency,
          description: leadData.description,
          preferredDate: leadData.preferredDate,
          preferredTime: leadData.preferredTime,
          estimatedPrice: leadData.estimatedPrice,
        });
      } catch (calendarError) {
        console.error("Failed to create calendar event:", calendarError);
      }
      
      res.json({ success: true, id: lead.id, calendarEventId });
    } catch (error) {
      console.error("Error creating lead:", error);
      res.status(500).json({ success: false, error: "Failed to create lead" });
    }
  });

  app.get("/api/leads", async (req, res) => {
    try {
      const leads = await storage.getLeads();
      res.json(leads);
    } catch (error) {
      console.error("Error fetching leads:", error);
      res.status(500).json({ success: false, error: "Failed to fetch leads" });
    }
  });

  app.post("/api/chat", async (req, res) => {
    try {
      const { messages } = req.body as { messages: ChatMessage[] };
      
      const chatMessages: ChatMessage[] = [
        { role: "system", content: SYSTEM_PROMPT },
        ...messages
      ];

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: chatMessages,
        max_completion_tokens: 500,
        temperature: 0.7,
      });

      const assistantMessage = response.choices[0]?.message?.content || "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.";
      
      res.json({ 
        success: true, 
        message: assistantMessage 
      });
    } catch (error) {
      console.error("Error in chat:", error);
      res.status(500).json({ 
        success: false, 
        error: "Chat-Fehler. Bitte versuchen Sie es erneut.",
        message: "Entschuldigung, ich bin gerade nicht erreichbar. Bitte rufen Sie uns an: 0152 12274043"
      });
    }
  });
}
