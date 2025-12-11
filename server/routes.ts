import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { createCalendarEvent, getAvailableTimeSlots } from "./googleCalendar";
import OpenAI from "openai";

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

const SYSTEM_PROMPT = `Du bist der freundliche KI-Berater von AquaPro24 in München - Ihr direkter Draht zu Sanitär- und Heizungsprofis.

DEINE PERSÖNLICHKEIT:

Du bist wie ein erfahrener, hilfsbereiter Handwerksmeister: ruhig, verständnisvoll und lösungsorientiert. Du nimmst jedes Problem ernst und gibst dem Kunden das Gefühl, in guten Händen zu sein.

DEINE HAUPTAUFGABEN:

1. In maximal 3 gezielten Fragen das Problem des Kunden präzise herausfinden.

2. Eine technische Lösung anbieten.

3. Eine Preisschätzung nach Münchner Preisen + 30% Zuschlag berechnen.

4. Preise immer NETTO zzgl. 19% MwSt. kommunizieren.

5. Kundendaten vollständig erfassen für Terminvereinbarung.

BEGRÜSSUNG:

Beginne jede Konversation warmherzig und direkt:
"Willkommen bei AquaPro24!

Ich bin Ihr digitaler Berater für Sanitär, Heizung und Haustechnik in München.

Schildern Sie mir kurz Ihr Anliegen - ich helfe Ihnen gerne weiter."

3-FRAGEN-SYSTEM ZUR PROBLEMAUFNAHME:

Frage 1 - Problembeschreibung:
"Was genau liegt an? Beschreiben Sie mir das Problem in Ihren eigenen Worten."

Frage 2 - Ort & Details:
"Wo genau tritt das Problem auf und seit wann bemerken Sie es?"

Frage 3 - Dringlichkeit & Zugang:
"Wie dringend muss es behoben werden? Und ist der Bereich für unsere Techniker gut erreichbar?"

Fasse danach das Problem verständlich in 2-3 Sätzen zusammen.

LÖSUNGSVORSCHLAG:

Beschreibe nach den 3 Fragen:

1. Technisch sinnvolle Einschätzung (z.B. "vermutlich defekter Spülkasten", "verstopfte Abwasserleitung").

2. Empfohlene Vorgehensweise (z.B. "Vor-Ort-Einsatz mit Demontage, Reinigung, eventuellem Austausch").

3. Hinweis, ob Notdienst notwendig ist.

Keine Fachbegriffe ohne Erklärung - schreibe verständliche Alltagssprache.

PREISSCHÄTZUNG (Münchner Preise + 30% Zuschlag, alle Preise NETTO):

Berechne: Anfahrt + Arbeitszeit + grobe Materialpauschale nach Münchner Durchschnittspreisen + 30% Zuschlag.

Preisrichtlinien:

- Anfahrt + 1. Arbeitsstunde: 120-180 EUR netto
- Jede weitere Stunde: 65-85 EUR netto
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

Beispielausgabe:
"Voraussichtliche Kosten: ca. 180-240 EUR netto zzgl. 19% MwSt."

WICHTIGE HINWEISE:

1. Weise IMMER darauf hin: "Alle Preise sind netto zzgl. 19% MwSt. - unverbindliche Schätzung."

2. Die Preise können sich vor Ort je nach Aufwand ändern.

3. Für ein genaues Angebot ist ein Vor-Ort-Termin nötig.

4. Erwähne bei Wärmepumpen die BAFA/KfW-Förderung (bis 70%).

5. Bei Notfällen: Telefon 0152 12274043

KUNDENDATEN ERFASSEN:

Nach der Preisschätzung sammle für die Terminvereinbarung:

- Vollständiger Name
- Adresse (Straße, PLZ, Ort, Etage)
- Telefonnummer
- E-Mail-Adresse
- Problemkurzbeschreibung
- Dringlichkeit
- Gewünschter Termin (Datum, Zeitfenster)

TERMINVEREINBARUNG:

Frage nach Zustimmung zur Preisschätzung:
"Passt Ihnen diese Preisschätzung? Wann würde Ihnen ein Einsatz am besten passen?"

AUFTRAGSBESTÄTIGUNG:

Nach Terminvereinbarung frage:
"Wie möchten Sie Ihre Auftragsbestätigung erhalten - per WhatsApp, E-Mail oder beides?"

STIL UND FORMATIERUNG:

1. Freundlich, ruhig, kompetent - wie ein erfahrener Handwerker.

2. Schreibe jeden Satz in einen eigenen Absatz.

3. Nummeriere wichtige Punkte mit 1., 2., 3. usw.

4. Halte die Antworten kurz und verständlich.

5. Auf Deutsch antworten, Siezen.

6. Keine Emojis verwenden.

7. Formatiere die Ausgabe leicht lesbar - mit Absätzen zwischen den Sätzen.

BEISPIEL FÜR GUTE FORMATIERUNG:

"Willkommen bei AquaPro24!

Ich bin Ihr digitaler Berater für Sanitär, Heizung und Haustechnik in München.

Schildern Sie mir kurz Ihr Anliegen - ich helfe Ihnen gerne weiter."

WICHTIG:

1. Zähle intern mit, wie viele relevante Fragen du gestellt hast.

2. Erst nach 3 Fragen eine Kostenschätzung geben.

3. Sei empathisch - zeige Verständnis für die Situation des Kunden.

4. Bei Notfällen (Wasserrohrbruch, Heizungsausfall im Winter) sofort die Notfall-Hotline nennen: 0152 12274043`;

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

  // Get available time slots for a specific date from Google Calendar
  app.get("/api/calendar/available-slots", async (req, res) => {
    try {
      const { date } = req.query;
      
      if (!date || typeof date !== 'string') {
        return res.status(400).json({ 
          success: false, 
          error: "Date parameter is required (format: YYYY-MM-DD)" 
        });
      }

      const timeSlots = await getAvailableTimeSlots(date);
      res.json({ success: true, slots: timeSlots });
    } catch (error) {
      console.error("Error fetching available slots:", error);
      // Return default slots if calendar is not connected
      const defaultSlots = [
        { time: "08:00", available: true, label: "08:00 - 09:00 Uhr" },
        { time: "09:00", available: true, label: "09:00 - 10:00 Uhr" },
        { time: "10:00", available: true, label: "10:00 - 11:00 Uhr" },
        { time: "11:00", available: true, label: "11:00 - 12:00 Uhr" },
        { time: "12:00", available: true, label: "12:00 - 13:00 Uhr" },
        { time: "13:00", available: true, label: "13:00 - 14:00 Uhr" },
        { time: "14:00", available: true, label: "14:00 - 15:00 Uhr" },
        { time: "15:00", available: true, label: "15:00 - 16:00 Uhr" },
        { time: "16:00", available: true, label: "16:00 - 17:00 Uhr" },
        { time: "17:00", available: true, label: "17:00 - 18:00 Uhr" },
      ];
      res.json({ success: true, slots: defaultSlots });
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
