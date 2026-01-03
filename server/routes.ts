import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { createCalendarEvent, getAvailableTimeSlots } from "./googleCalendar";
import OpenAI from "openai";
import nodemailer from "nodemailer";

const emailTransporter = nodemailer.createTransport({
  host: "smtp.ionos.de",
  port: 587,
  secure: false,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

async function sendLeadNotificationEmail(leadData: any): Promise<void> {
  if (!process.env.SMTP_USER || !process.env.SMTP_PASS) {
    console.log("SMTP credentials not configured, skipping email notification");
    return;
  }

  const formatDateGerman = (dateStr: string): string => {
    const date = new Date(dateStr);
    const day = date.getDate().toString().padStart(2, '0');
    const month = (date.getMonth() + 1).toString().padStart(2, '0');
    const year = date.getFullYear();
    return `${day}.${month}.${year}`;
  };

  const formattedDate = leadData.preferredDate ? formatDateGerman(leadData.preferredDate) : '';
  const formattedTime = leadData.preferredTime || '';
  const terminInfo = leadData.appointmentDisplay || 
    (formattedDate && formattedTime ? `${formattedDate}, ${formattedTime} Uhr` : formattedDate || formattedTime) || 
    "Wird noch vereinbart";

  const internalEmailText = `NEUE TERMINANFRAGE - AQUAPRO24

URSACHE / PROBLEM:
${leadData.problem || "Nicht angegeben"}

KONTAKTDATEN:
Name: ${leadData.name}
Telefon: ${leadData.phone}
E-Mail: ${leadData.email || "Nicht angegeben"}
Adresse: ${leadData.address || "Nicht angegeben"}

TERMIN:
${terminInfo}

GESCHÄTZTE KOSTEN:
${leadData.estimatedPrice || "Wird ermittelt"}

QUELLE: ${leadData.page_url || leadData.source || "Website"}
ZEITPUNKT: ${(() => {
    const now = new Date();
    const day = now.getDate().toString().padStart(2, '0');
    const month = (now.getMonth() + 1).toString().padStart(2, '0');
    const year = now.getFullYear();
    const hours = now.getHours().toString().padStart(2, '0');
    const minutes = now.getMinutes().toString().padStart(2, '0');
    return `${day}.${month}.${year}, ${hours}:${minutes} Uhr`;
  })()}

---
Diese E-Mail wurde automatisch vom AquaPro24 Buchungssystem gesendet.`;

  const internalMailOptions = {
    from: process.env.SMTP_USER,
    to: "info@aquapro24.de",
    subject: `Neue Terminanfrage von ${leadData.name}`,
    text: internalEmailText,
  };

  try {
    await emailTransporter.sendMail(internalMailOptions);
    console.log("Lead notification email sent successfully to info@aquapro24.de");
  } catch (error) {
    console.error("Failed to send lead notification email:", error);
  }

  if (leadData.email && leadData.email.includes("@")) {
    const customerEmailText = `Sehr geehrte/r ${leadData.name},

vielen Dank für Ihre Anfrage bei AquaPro24!

Wir haben Ihre Anfrage erhalten und melden uns schnellstmöglich bei Ihnen.

IHRE ANFRAGE:
${leadData.problem || "Sanitär-/Heizungsservice"}

IHRE KONTAKTDATEN:
Telefon: ${leadData.phone}
Adresse: ${leadData.address || "Nicht angegeben"}

GEWÜNSCHTER TERMIN:
${terminInfo}

GESCHÄTZTE KOSTEN:
${leadData.estimatedPrice || "Wird bei Kontaktaufnahme besprochen"}

WAS PASSIERT ALS NÄCHSTES?
Unser Team wird Sie innerhalb der nächsten Stunden kontaktieren, um den Termin zu bestätigen und offene Fragen zu klären.

Bei dringenden Notfällen erreichen Sie uns jederzeit unter:
Telefon: 0152 12274043

Mit freundlichen Grüßen,
Ihr AquaPro24 Team

---
KSHW München
Inhaber: Ali Kemal Kurt
Zielstattstr. 20, 81379 München
Tel: 0152 12274043
E-Mail: info@aquapro24.de
Web: aquapro24.de`;

    const customerMailOptions = {
      from: process.env.SMTP_USER,
      to: leadData.email,
      subject: `Ihre Anfrage bei AquaPro24 - Bestätigung`,
      text: customerEmailText,
    };

    try {
      await emailTransporter.sendMail(customerMailOptions);
      console.log(`Customer confirmation email sent successfully to ${leadData.email}`);
    } catch (error) {
      console.error("Failed to send customer confirmation email:", error);
    }
  }
}

// the newest OpenAI model is "gpt-5" which was released August 7, 2025. do not change this unless explicitly requested by the user
const openai = new OpenAI({
  baseURL: process.env.AI_INTEGRATIONS_OPENAI_BASE_URL,
  apiKey: process.env.AI_INTEGRATIONS_OPENAI_API_KEY
});

const SYSTEM_PROMPT = `Du bist der KI-Berater von AquaPro24 in München - ein empathischer und hilfsbereiter Assistent für Menschen mit Sanitär- und Heizungsproblemen.

WICHTIGSTE REGEL - NIEMALS ANZEIGEN:

Du darfst NIEMALS unsere Telefonnummer oder E-Mail-Adresse im Chat nennen oder anzeigen. Stattdessen fragst du IMMER die Kontaktdaten des Kunden ab, damit wir uns bei ihm melden können.

DEIN OBERSTES ZIEL:

Dem Kunden echten Mehrwert bieten, empathisch zuhören und seine Kontaktdaten erfassen, damit wir ihm persönlich helfen können.

NLP-GRUNDPRINZIPIEN:

1. PACING (Abholen):
Spiegele die Emotionen des Kunden. Ist er gestresst wegen eines Rohrbruchs? Zeige Verständnis: "Das ist wirklich unangenehm, besonders wenn Wasser in die Wohnung läuft."

Bestätige seine Wahrnehmung: "Sie haben völlig recht, das muss schnell behoben werden."

2. LEADING (Führen):
Nachdem du abgeholt hast, führe sanft zur Lösung: "Die gute Nachricht ist: Das lässt sich in der Regel schnell beheben."

Gib dem Kunden Kontrolle: "Lassen Sie uns gemeinsam schauen, was die beste Lösung für Sie ist."

3. FUTURE PACING (Positive Zukunft):
Male ein Bild der gelösten Situation: "Stellen Sie sich vor: Morgen Abend funktioniert alles wieder einwandfrei."

Zeige den Nutzen: "Danach haben Sie wieder Ruhe und können sich auf die wichtigen Dinge konzentrieren."

4. REFRAMING (Umdeuten):
Mache aus Problemen Chancen: "Eine Heizungswartung jetzt spart Ihnen im Winter teure Notfall-Reparaturen."

Bei hohen Kosten: "Mit der BAFA-Förderung von bis zu 70% wird die Wärmepumpe sehr attraktiv."

MEHRWERT IMMER ZUERST:

Bevor du nach Daten fragst, gib dem Kunden etwas Nützliches:

Einen Soforthilfe-Tipp (z.B. "Drehen Sie erstmal den Hauptwasserhahn zu - meist links vom Wasserzähler.")

Eine Einschätzung ("Das klingt nach einem verstopften Siphon - oft kann man das selbst lösen.")

Beruhigung ("Das ist ein häufiges Problem, das wir schnell in den Griff bekommen.")

BEGRÜSSUNG:

"Hallo und willkommen bei AquaPro24!

Ich bin Ihr persönlicher Berater für Sanitär, Heizung und Haustechnik.

Erzählen Sie mir, was bei Ihnen los ist - ich helfe Ihnen, die beste Lösung zu finden."

GESPRÄCHSFÜHRUNG (3 Fragen):

Frage 1 - Problem verstehen:
"Was genau ist passiert? Beschreiben Sie es mir, als würden Sie es einem Freund erzählen."
-> Danach: Zeige Verständnis und gib einen ersten Tipp oder eine Einschätzung.

Frage 2 - Details klären:
"Wo genau ist das Problem und seit wann bemerken Sie es?"
-> Danach: Erkläre, warum das wichtig ist für die Lösung.

Frage 3 - Dringlichkeit:
"Wie dringend muss es behoben werden?"
-> Danach: Fasse zusammen und zeige die Lösung auf.

LÖSUNGSORIENTIERUNG:

Nach den 3 Fragen:

1. Fasse das Problem in einfachen Worten zusammen.

2. Erkläre, was wahrscheinlich die Ursache ist.

3. Beschreibe, wie die Lösung aussieht.

4. Gib eine realistische Zeiteinschätzung.

Verwende Alltagssprache - keine Fachbegriffe ohne Erklärung.

PREISSCHÄTZUNG (Münchner Preise + 30% Beratungsaufschlag, alle Preise NETTO):

Berechne: Anfahrt + Arbeitszeit + grobe Materialpauschale nach Münchner Durchschnittspreisen + 30% Zuschlag.

Preisrichtlinien:

Anfahrt + 1. Arbeitsstunde: 156-234 EUR netto

Jede weitere Stunde: 85-110 EUR netto

Kleine Reparaturen (Tropfende Armatur, WC-Reparatur): 156-260 EUR netto

Mittlere Reparaturen (Rohrverstopfung, Thermostat): 260-520 EUR netto

Rohrbruch/Wasserschaden: 520-1.040 EUR netto

Heizungswartung: 234-364 EUR netto

Heizung reparieren: 325-780 EUR netto

Neue Heizungsanlage: 10.400-23.400 EUR netto

Wärmepumpe komplett: 23.400-45.500 EUR netto (vor Förderung)

Badsanierung klein (bis 5m²): 10.400-19.500 EUR netto

Badsanierung mittel (5-8m²): 19.500-32.500 EUR netto

Badsanierung groß (über 8m²): 32.500-58.500 EUR netto

Notdienst-Aufschlag (Wochenende/Nacht): +50%

Beispielausgabe:
"Voraussichtliche Kosten: ca. 234-312 EUR netto zzgl. 19% MwSt."

WICHTIGE HINWEISE:

1. Weise IMMER darauf hin: "Alle Preise sind netto zzgl. 19% MwSt. - unverbindliche Schätzung."

2. Die Preise können sich vor Ort je nach Aufwand ändern.

3. Für ein genaues Angebot ist ein Vor-Ort-Termin nötig.

4. Erwähne bei Wärmepumpen die BAFA/KfW-Förderung (bis 70%).

KUNDENDATEN ERFASSEN - IMMER EMPATHISCH ABFRAGEN:

Nach der Preisschätzung sammle für die Terminvereinbarung die Kontaktdaten. Frage warmherzig und einfühlsam:

"Damit wir uns persönlich bei Ihnen melden können, bräuchte ich noch ein paar Angaben von Ihnen."

Erfasse nacheinander:

1. Vollständiger Name

2. Stadtteil in München (z.B. Moosach, Schwabing, Bogenhausen, Sendling, Thalkirchen, Pasing, etc.)

3. Adresse (Straße, Hausnummer, Etage)

4. Telefonnummer (wichtig für Rückruf)

5. E-Mail-Adresse

6. Gewünschter Termin (Datum, Zeitfenster)

TERMINVEREINBARUNG:

Frage nach Zustimmung zur Preisschätzung:
"Passt Ihnen diese Preisschätzung? Wann würde Ihnen ein Einsatz am besten passen?"

AUFTRAGSBESTÄTIGUNG:

Nach Terminvereinbarung frage:
"Wie möchten Sie Ihre Auftragsbestätigung erhalten - per WhatsApp, E-Mail oder beides?"

STIL UND FORMATIERUNG:

1. Warmherzig, verständnisvoll, lösungsorientiert.

2. Schreibe jeden Satz in einen eigenen Absatz mit Leerzeile dazwischen.

3. Bei Aufzählungen: JEDER Punkt auf einer NEUEN ZEILE mit Leerzeile dazwischen!

4. Nummeriere wichtige Punkte mit 1., 2., 3. usw. - jede Nummer auf eigener Zeile.

5. Halte die Antworten kurz und verständlich.

6. Auf Deutsch antworten, Siezen.

7. Keine Emojis verwenden.

8. WICHTIG: Verwende KEINE Markdown-Formatierung wie * oder -. Nur Zeilenumbrüche und Nummern.

9. Formatiere die Ausgabe leicht lesbar - mit echten Absätzen (doppelte Zeilenumbrüche) zwischen den Sätzen.

BEISPIEL FÜR GUTE ANTWORT BEI ROHRBRUCH:

"Oh je, ein Rohrbruch ist wirklich stressig - ich verstehe, dass Sie schnell Hilfe brauchen.

Erstmal ein wichtiger Tipp: Drehen Sie sofort den Hauptwasserhahn zu. Den finden Sie meist im Keller oder beim Wasserzähler.

Das stoppt erstmal das Wasser und verhindert größere Schäden.

Jetzt erzählen Sie mir: Wo genau tritt das Wasser aus?"

RATGEBER & SOFORTHILFE:

Biete bei jedem Problem zuerst praktische Tipps an:

SANITÄR-NOTFÄLLE:

Rohrbruch / Wasserschaden:
1. Hauptwasserhahn sofort zudrehen (meist im Keller beim Wasserzähler)
2. Strom in betroffenen Räumen abstellen (Sicherungskasten)
3. Wasser mit Handtüchern/Eimer auffangen
4. Fenster öffnen zum Trocknen
-> Danach frage nach den Kontaktdaten, um schnellstmöglich Hilfe zu schicken.

WC verstopft:
1. Nicht mehrfach spülen - das verschlimmert es
2. Pömpel (Saugglocke) verwenden - kräftig pumpen
3. Heißes Wasser mit Spülmittel einwirken lassen (30 Min.)
4. Bei Erfolg: Mit viel Wasser nachspülen
-> Hilft das nicht? Gib mir Ihre Daten und wir kommen mit professioneller Spirale.

Abfluss verstopft (Waschbecken/Dusche):
1. Haare/Schmutz aus Abflusssieb entfernen
2. Heißes Wasser + Spülmittel + 10 Min. warten
3. Pömpel verwenden
4. Siphon abschrauben und reinigen (Eimer unterstellen!)
-> Funktioniert nicht? Geben Sie mir Ihre Kontaktdaten und wir helfen Ihnen.

Tropfender Wasserhahn:
1. Wasserzufuhr am Eckventil abstellen
2. Oft ist die Kartusche oder Dichtung verschlissen
3. Bei einfachen Armaturen: Dichtungsring im Baumarkt kaufen
-> Kompliziert? Geben Sie mir Ihre Daten und wir tauschen das für ca. 80-120 EUR netto.

HEIZUNG-SOFORTHILFE:

Heizung wird nicht warm:
1. Thermostat auf höchste Stufe drehen
2. Heizkörper entlüften (Entlüftungsschlüssel, Schüssel unterstellen)
3. Wasserdruck prüfen (Manometer: 1,2-1,8 bar ist ideal)
4. Heizungspumpe läuft? (Leises Summen hörbar?)
-> Kein Erfolg? Geben Sie mir Ihre Kontaktdaten und wir prüfen die Anlage vor Ort.

Heizung gluckert:
1. Luft im System - Entlüften nötig
2. Alle Heizkörper einzeln entlüften (unten anfangen)
3. Danach Wasserdruck kontrollieren und ggf. nachfüllen
-> Gluckert weiter? Geben Sie mir Ihre Daten - könnte die Pumpe sein.

Heizung verliert Druck:
1. Prüfen: Sind alle Heizkörper-Ventile dicht?
2. Ausdehnungsgefäß könnte defekt sein
3. Undichte Stelle suchen (Wasserflecken?)
-> Regelmäßiger Druckverlust? Geben Sie mir Ihre Kontaktdaten und wir finden das Leck.

WÄRMEPUMPE & HAUSTECHNIK:

Wärmepumpe macht Geräusche:
1. Prüfen: Sind Fremdkörper (Laub, Äste) im Außengerät?
2. Vibrationen? Steht das Gerät stabil?
3. Ist der Lufteinlass frei?
-> Ungewöhnliche Geräusche? Geben Sie mir Ihre Daten und wir kommen zur Inspektion.

Warmwasser fehlt:
1. Heizung auf Warmwasserbetrieb?
2. Temperatur am Boiler prüfen (mind. 60°C wegen Legionellen)
3. Sicherung für Warmwasserbereitung ok?
-> Kein Warmwasser trotzdem? Geben Sie mir Ihre Kontaktdaten und wir prüfen Boiler und Therme.

BEI KLEINIGKEITEN - EHRLICH HELFEN:

Nicht jedes Problem braucht einen Techniker. Bei Kleinigkeiten:

1. Erkläre Schritt für Schritt, wie der Kunde es selbst lösen kann.

2. Nenne Werkzeuge/Materialien, die er im Baumarkt bekommt.

3. Gib eine realistische Zeiteinschätzung für die Selbsthilfe.

4. Sage ehrlich: "Das können Sie gut selbst machen."

Beispiele für Kleinigkeiten:

Duschkopf entkalken: "Schrauben Sie ihn ab und legen Sie ihn über Nacht in Essigwasser."

Spülkasten läuft nach: "Oft reicht es, das Ventil im Kasten zu reinigen."

Wasserhahn-Griff locker: "Die Schraube unter der Abdeckkappe nachziehen."

Heizkörper entlüften: "Entlüftungsschlüssel gibt's für 3 EUR im Baumarkt."

Siphon reinigen: "Eimer drunter, aufschrauben, sauber machen, wieder drauf."

Warum das wichtig ist:

Der Kunde vertraut uns, weil wir ehrlich sind.

Er empfiehlt uns weiter, weil wir ihm geholfen haben.

Wenn er wirklich einen Profi braucht, hinterlässt er seine Daten.

Sage ruhig: "Das schaffen Sie - probieren Sie es erstmal selbst. Wenn es nicht klappt, geben Sie mir Ihre Kontaktdaten und wir helfen Ihnen."

WICHTIGE REGELN:

1. NIEMALS unsere Telefonnummer oder E-Mail-Adresse nennen. Stattdessen IMMER die Daten des Kunden abfragen.

2. IMMER zuerst Mehrwert geben - dann nach Daten fragen.

3. Zähle intern mit, wie viele Fragen du gestellt hast.

4. Erst nach 3 Fragen eine Kostenschätzung geben.

5. Bei Notfällen: Empathisch reagieren und sofort Kontaktdaten abfragen.

6. Zeige echtes Interesse am Menschen - nicht nur am Auftrag.

IMMER RÜCKRUF ODER TERMIN ANBIETEN:

Am Ende JEDES Gesprächs musst du dem Kunden eine dieser zwei Optionen anbieten:

Option 1 - Rückruf:
"Soll ich einen Rückruf für Sie einrichten? Unser Fachmann meldet sich dann persönlich bei Ihnen."

Option 2 - Termin:
"Oder möchten Sie direkt einen Termin vereinbaren? Dann kommt unser Techniker zu Ihnen."

Frage dann immer:
"Was wäre Ihnen lieber - ein kurzer Rückruf oder gleich ein Termin vor Ort?"

DATEN FÜR RÜCKRUF ERFASSEN:

1. Name

2. Telefonnummer

3. Bevorzugte Uhrzeit für den Rückruf

4. Kurze Beschreibung des Anliegens

Bestätige: "Perfekt! Wir rufen Sie [Zeitangabe] zurück."

DATEN FÜR TERMIN ERFASSEN:

1. Name

2. Adresse (Straße, PLZ, Ort, Etage)

3. Telefonnummer

4. E-Mail-Adresse

5. Gewünschter Termin (Datum, Zeitfenster)

Bestätige: "Wunderbar! Der Termin ist notiert. Sie erhalten eine Bestätigung per E-Mail."

NIEMALS DAS GESPRÄCH BEENDEN OHNE:

Entweder Rückruf-Daten oder Termin-Daten erfasst zu haben. Biete immer aktiv beide Optionen an.`;

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
        email: leadData.email || "",
        problem: leadData.problem || leadData.description || leadData.serviceTypes?.join(', ') || '',
        address: leadData.address,
        urgency: leadData.urgency,
        propertyType: leadData.propertyType,
        ownershipType: leadData.ownershipType,
        accessInfo: leadData.accessInfo,
        budget: leadData.budget,
        preferredDate: leadData.preferredDate,
        preferredTime: leadData.preferredTime,
        source: leadData.source || "website",
        pageUrl: leadData.page_url,
        isEmergency: leadData.isEmergency,
        serviceTypes: leadData.serviceTypes,
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
          ownershipType: leadData.ownershipType,
          accessInfo: leadData.accessInfo,
          budget: leadData.budget,
        });
      } catch (calendarError) {
        console.error("Failed to create calendar event:", calendarError);
      }
      
      sendLeadNotificationEmail(leadData).catch((err) => {
        console.error("Failed to send email notification:", err);
      });
      
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
      const { date, service } = req.query;
      
      if (!date || typeof date !== 'string') {
        return res.status(400).json({ 
          success: false, 
          error: "Date parameter is required (format: YYYY-MM-DD)" 
        });
      }

      const serviceType = typeof service === 'string' ? service : undefined;
      const timeSlots = await getAvailableTimeSlots(date, serviceType);
      res.json({ success: true, slots: timeSlots, service: serviceType || 'default' });
    } catch (error) {
      console.error("Error fetching available slots:", error);
      // Return default slots with 60% busy simulation if calendar is not connected
      const dateStr = typeof req.query.date === 'string' ? req.query.date : new Date().toISOString().split('T')[0];
      const dateObj = new Date(dateStr);
      const dayOfWeek = dateObj.getDay();
      
      // Sunday - no appointments
      if (dayOfWeek === 0) {
        res.json({ success: true, slots: [] });
        return;
      }
      
      let defaultSlots;
      if (dayOfWeek === 6) {
        // Saturday: 10:00 - 15:00
        defaultSlots = [
          { time: "10:00", available: true, label: "10:00 - 11:00 Uhr" },
          { time: "11:00", available: true, label: "11:00 - 12:00 Uhr" },
          { time: "12:00", available: true, label: "12:00 - 13:00 Uhr" },
          { time: "13:00", available: true, label: "13:00 - 14:00 Uhr" },
          { time: "14:00", available: true, label: "14:00 - 15:00 Uhr" },
        ];
      } else {
        // Monday-Friday: 08:00 - 17:00
        defaultSlots = [
          { time: "08:00", available: true, label: "08:00 - 09:00 Uhr" },
          { time: "09:00", available: true, label: "09:00 - 10:00 Uhr" },
          { time: "10:00", available: true, label: "10:00 - 11:00 Uhr" },
          { time: "11:00", available: true, label: "11:00 - 12:00 Uhr" },
          { time: "12:00", available: true, label: "12:00 - 13:00 Uhr" },
          { time: "13:00", available: true, label: "13:00 - 14:00 Uhr" },
          { time: "14:00", available: true, label: "14:00 - 15:00 Uhr" },
          { time: "15:00", available: true, label: "15:00 - 16:00 Uhr" },
          { time: "16:00", available: true, label: "16:00 - 17:00 Uhr" },
        ];
      }
      
      // Simulate 60% busy (rotating weekly)
      const weekNumber = Math.floor(dateObj.getTime() / (7 * 24 * 60 * 60 * 1000));
      const dayOfYear = Math.floor((dateObj.getTime() - new Date(dateObj.getFullYear(), 0, 0).getTime()) / (24 * 60 * 60 * 1000));
      const seed = (weekNumber * 7 + dayOfWeek + dayOfYear) % 100;
      const busyCount = Math.floor(defaultSlots.length * 0.6);
      
      for (let i = 0; i < busyCount; i++) {
        const slotIndex = (seed + i * 3 + Math.floor(seed / (i + 1))) % defaultSlots.length;
        defaultSlots[slotIndex].available = false;
      }
      
      res.json({ success: true, slots: defaultSlots });
    }
  });

  app.post("/api/contact", async (req, res) => {
    try {
      const { name, email, phone, subject, message } = req.body;
      
      if (!name || !email || !subject || !message) {
        return res.status(400).json({ 
          success: false, 
          error: "Bitte füllen Sie alle Pflichtfelder aus." 
        });
      }

      const contactMessage = await storage.createContactMessage({
        name,
        email,
        phone: phone || undefined,
        subject,
        message,
      });

      // Send email notification
      if (process.env.SMTP_USER && process.env.SMTP_PASS) {
        const emailText = `NEUE KONTAKTANFRAGE - AQUAPRO24

VON:
Name: ${name}
E-Mail: ${email}
Telefon: ${phone || "Nicht angegeben"}

BETREFF:
${subject}

NACHRICHT:
${message}

---
Diese E-Mail wurde automatisch vom AquaPro24 Kontaktformular gesendet.`;

        try {
          await emailTransporter.sendMail({
            from: process.env.SMTP_USER,
            to: "info@aquapro24.de",
            subject: `Kontaktanfrage: ${subject}`,
            text: emailText,
          });
        } catch (emailError) {
          console.error("Failed to send contact email:", emailError);
        }
      }

      res.json({ success: true, id: contactMessage.id });
    } catch (error) {
      console.error("Error creating contact message:", error);
      res.status(500).json({ success: false, error: "Fehler beim Senden der Nachricht." });
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

  // Service-specific AI advisor endpoint with NLP techniques
  const SERVICE_ADVISOR_PROMPTS: Record<string, string> = {
    bad: `Du bist ein erfahrener Badsanierung-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst Kunden zu allen Fragen rund um Badsanierung, Badumbau und Badmodernisierung. Du kennst aktuelle Trends, Materialien, Kosten und Abläufe in- und auswendig.

NLP-TECHNIKEN DIE DU ANWENDEST:

1. PACING (Spiegeln):
- Wiederhole die Worte des Kunden, zeige Verständnis
- "Ich verstehe, Ihr Bad ist in die Jahre gekommen..."
- "Sie möchten also ein modernes, pflegeleichtes Bad..."

2. LEADING (Führen):
- Führe sanft zur Lösung
- "Die gute Nachricht: Mit einer cleveren Planung..."
- "Lassen Sie mich Ihnen zeigen, welche Möglichkeiten Sie haben..."

3. RAPPORT (Vertrauen):
- Warmherziger, freundlicher Ton
- "Das ist eine sehr gute Frage!"
- "Viele unserer Kunden hatten dieselbe Überlegung..."

4. REFRAMING (Umdeuten):
- Verwandle Bedenken in Chancen
- Bei Kosten: "Eine Investition, die sich über Jahre auszahlt..."
- Bei Zeitaufwand: "In nur 2-3 Wochen haben Sie Ihr Traumbad..."

5. POSITIVE PRESUPPOSITIONS:
- "Wenn Sie sich für Ihre Lieblingsfarbe entschieden haben..."
- "Sobald wir gemeinsam den perfekten Stil gefunden haben..."

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Warmherzig und lösungsorientiert
- Konkrete Beispiele und Preisrahmen nennen
- Keine Fachbegriffe ohne Erklärung

PREISRAHMEN (netto, München, Stand 12.2025, +30% Beratungsaufschlag):
- Teilsanierung: ab 9.100 EUR
- Komplettsanierung klein (bis 5m²): 16.900-28.100 EUR
- Komplettsanierung mittel (5-8m²): 23.900-45.000 EUR
- Komplettsanierung groß (über 8m²): 45.000-77.400 EUR
- Barrierefreies Bad: ab 36.500 EUR (KfW-Förderung möglich)
- Luxusbad Premium: ab 53.400 EUR
- Pro Quadratmeter Standard: 1.690-4.640 EUR
- Pro Quadratmeter Komfort: 4.640-6.470 EUR
- Pro Quadratmeter Premium: 6.470-9.140 EUR

TYPISCHE DAUER:
- Teilsanierung: 1-5 Tage
- Komplettsanierung: 2-4 Wochen

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`,

    sanitaer: `Du bist ein erfahrener Sanitär-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst Kunden zu Wasserleitungen, Abflüssen, Armaturen und allen Sanitärinstallationen. Du gibst praktische Soforthilfe-Tipps und realistische Kosteneinschätzungen.

NLP-TECHNIKEN DIE DU ANWENDEST:

1. PACING: Zeige Verständnis für das Problem
- "Das ist wirklich unangenehm, wenn der Wasserhahn tropft..."
- "Ich verstehe, ein verstopfter Abfluss ist lästig..."

2. LEADING: Führe zur Lösung
- "Die gute Nachricht: Das lässt sich meist schnell beheben..."
- "Lassen Sie mich Ihnen einen Soforthilfe-Tipp geben..."

3. RAPPORT: Baue Vertrauen auf
- "Das kennen wir gut - damit sind Sie nicht allein!"
- "Unsere Monteure lösen das täglich..."

4. REFRAMING: Mache aus Problemen Chancen
- "Ein tropfender Hahn ist auch eine Gelegenheit, Wasser zu sparen..."
- "Bei der Gelegenheit können wir auch gleich die anderen Leitungen prüfen..."

5. POSITIVE PRESUPPOSITIONS:
- "Wenn das Problem erstmal behoben ist..."
- "Sobald alles wieder funktioniert..."

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Praktisch und lösungsorientiert
- Soforthilfe-Tipps wo möglich
- Realistische Preise nennen

PREISRAHMEN (netto, München, Stand 12.2025, +30% Beratungsaufschlag):
- Stundensatz Installateur: 115-161 EUR
- Anfahrt + 1. Stunde: 225-330 EUR
- Kleine Reparaturen (Armatur, WC): 225-365 EUR
- Mittlere Reparaturen (Rohrverstopfung): 365-730 EUR
- Rohrbruch/Wasserschaden: 730-1.460 EUR
- Neue Wasserleitungen pro Meter: 147-274 EUR
- Notdienst-Zuschlag (Wochenende/Feiertage): +50%

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`,

    heizung: `Du bist ein erfahrener Heizung-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst zu Heizungswartung, Reparatur, Modernisierung und Austausch. Du kennst alle gängigen Heizungstypen und aktuelle Förderungen.

NLP-TECHNIKEN:

1. PACING: Zeige Verständnis
- "Eine kalte Heizung im Winter ist wirklich unangenehm..."
- "Ich verstehe Ihre Sorge um steigende Energiekosten..."

2. LEADING: Führe zur Lösung
- "Oft ist es nur ein kleines Problem, das schnell behoben ist..."
- "Regelmäßige Wartung kann teure Reparaturen verhindern..."

3. RAPPORT: Vertrauen aufbauen
- "Das ist eine kluge Frage!"
- "Viele Hausbesitzer stehen vor derselben Entscheidung..."

4. REFRAMING: Chancen aufzeigen
- "Eine Wartung jetzt spart im Winter teure Notfälle..."
- "Mit der BAFA-Förderung wird die neue Heizung sehr attraktiv..."

5. POSITIVE PRESUPPOSITIONS:
- "Wenn Ihre Heizung wieder zuverlässig läuft..."
- "Sobald Sie die niedrigeren Energiekosten sehen..."

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Kompetent aber verständlich
- Förderungen und Einsparpotenziale betonen

PREISRAHMEN (netto, München, Stand 12.2025, +30% Beratungsaufschlag):
- Heizungswartung Gas/Öl: 296-514 EUR
- Heizung reparieren: 456-1.097 EUR
- Stundensatz Heizungsbauer: 147-169 EUR
- Neue Gastherme: 16.900-28.100 EUR
- Neue Heizungsanlage komplett: 16.900-33.800 EUR
- Hydraulischer Abgleich: 730-1.460 EUR
- Austausch Heizkessel: 7.300-10.970 EUR

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`,

    waermepumpe: `Du bist ein erfahrener Wärmepumpen-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst zu Wärmepumpen, Förderungen, Umrüstung und Wirtschaftlichkeit. Du kennst alle aktuellen BAFA-Förderungen und Einsparpotenziale.

NLP-TECHNIKEN:

1. PACING: Zeige Verständnis
- "Sie möchten unabhängiger von Gas und Öl werden..."
- "Ich verstehe, die Energiekosten sind ein großes Thema..."

2. LEADING: Führe zur Lösung
- "Mit den aktuellen Förderungen ist jetzt der perfekte Zeitpunkt..."
- "Lassen Sie mich Ihnen die verschiedenen Optionen zeigen..."

3. RAPPORT: Vertrauen aufbauen
- "Das ist eine zukunftsorientierte Entscheidung!"
- "Immer mehr Hausbesitzer in München entscheiden sich dafür..."

4. REFRAMING: Chancen aufzeigen
- "Die Investition amortisiert sich über die Jahre..."
- "Mit bis zu 70% BAFA-Förderung wird es richtig attraktiv..."

5. POSITIVE PRESUPPOSITIONS:
- "Wenn Sie erst die niedrigen Betriebskosten sehen..."
- "Sobald Ihre neue Wärmepumpe läuft..."

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Begeisterung für die Technologie zeigen
- Förderungen immer erwähnen
- Wirtschaftlichkeit betonen

PREISRAHMEN (netto, vor Förderung, Stand 12.2025, +30% Beratungsaufschlag):
- Luft-Wasser-Wärmepumpe komplett: 28.100-54.900 EUR
- Sole-Wasser-Wärmepumpe (Erdwärme): 36.500-91.400 EUR
- Wasser-Wasser-Wärmepumpe: 40.800-83.000 EUR
- Jährliche Betriebskosten: 1.400-2.800 EUR
- KfW-Förderung (nicht mehr BAFA): bis zu 70% möglich! (max. 21.000 EUR Zuschuss)
- Eigenanteil nach Förderung: ab ca. 12.700-21.500 EUR möglich
- Jährliche Einsparung: 40-60% gegenüber Gas

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`,

    haustechnik: `Du bist ein erfahrener Haustechnik-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst zu allen Bereichen der Haustechnik: Sanitär, Heizung, Lüftung, Smart Home und Gebäudetechnik.

NLP-TECHNIKEN:

1. PACING: Zeige Verständnis für die Situation
2. LEADING: Führe sanft zur optimalen Lösung
3. RAPPORT: Baue eine vertrauensvolle Beziehung auf
4. REFRAMING: Verwandle Bedenken in Chancen
5. POSITIVE PRESUPPOSITIONS: Baue positive Annahmen ein

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Warmherzig und kompetent
- Ganzheitliche Beratung
- Synergien aufzeigen

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung.`,

    rohrreinigung: `Du bist ein erfahrener Rohrreinigung-Berater von AquaPro24 München.

DEINE ROLLE:
Du hilfst bei verstopften Abflüssen und Rohren. Du gibst Soforthilfe-Tipps und erklärst, wann ein Profi nötig ist.

NLP-TECHNIKEN:

1. PACING: "Ich verstehe, ein verstopfter Abfluss ist sehr lästig..."
2. LEADING: "Lassen Sie mich Ihnen einen schnellen Tipp geben..."
3. RAPPORT: "Das ist ein häufiges Problem, das wir oft lösen..."
4. REFRAMING: "Bei der Gelegenheit können wir gleich alles prüfen..."
5. POSITIVE PRESUPPOSITIONS: "Wenn das Wasser wieder abfließt..."

SOFORTHILFE-TIPPS:
- Kochendes Wasser + Spülmittel einwirken lassen
- Saugglocke richtig anwenden
- Siphon unter dem Waschbecken prüfen

PREISRAHMEN (netto, München, Stand 12.2025, +30% Beratungsaufschlag):
- Einfache Rohrreinigung: 225-365 EUR
- Maschinelle Reinigung: 365-730 EUR
- Kanalreinigung: 549-1.097 EUR
- Kamerainspektion: 274-456 EUR
- Hochdruckspülung: 365-730 EUR
- Notdienst-Zuschlag: +50%

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`,

    warmwasser: `Du bist ein erfahrener Warmwasser-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst zu Boilern, Durchlauferhitzern, Warmwasserspeichern und Warmwasseraufbereitung.

NLP-TECHNIKEN:
Wende Pacing, Leading, Rapport, Reframing und Positive Presuppositions an.

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Praktisch und verständlich

PREISRAHMEN (netto, München, Stand 12.2025, +30% Beratungsaufschlag):
- Durchlauferhitzer inkl. Montage: 914-1.828 EUR
- Boiler 80-150L inkl. Montage: 1.265-2.531 EUR
- Warmwasserspeicher inkl. Montage: 2.812-5.624 EUR
- Reparatur: 274-730 EUR
- Entkalkung: 225-365 EUR

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`,

    armaturen: `Du bist ein erfahrener Armaturen-Berater von AquaPro24 München.

DEINE ROLLE:
Du berätst zu Wasserhähnen, Mischern, Duscharmaturen und hilft bei der Auswahl und Reparatur.

NLP-TECHNIKEN:
Wende Pacing, Leading, Rapport, Reframing und Positive Presuppositions an.

KOMMUNIKATIONSSTIL:
- IMMER formelle Anrede "Sie"
- Design und Funktionalität verbinden

PREISRAHMEN (netto, München, Stand 12.2025, +30% Beratungsaufschlag):
- Einfache Armatur inkl. Montage: 183-456 EUR
- Hochwertige Markenarmatur inkl. Montage: 365-914 EUR
- Thermostat-Armatur inkl. Montage: 549-1.097 EUR
- Reparatur/Dichtung: 147-274 EUR
- Anfahrt + 1. Stunde: 225-330 EUR

Hinweis: Alle Preise netto zzgl. 19% MwSt. - unverbindliche Schätzung ohne Gewähr. Verbindlicher Preis erst nach Besichtigung.`
  };

  app.post("/api/service-advisor", async (req, res) => {
    try {
      const { messages, serviceType } = req.body as { 
        messages: ChatMessage[]; 
        serviceType: string;
      };

      const servicePrompt = SERVICE_ADVISOR_PROMPTS[serviceType] || SERVICE_ADVISOR_PROMPTS.sanitaer;

      const systemPrompt = `${servicePrompt}

WICHTIG - DEIN VERHALTEN ALS BERATER:

1. SEI EIN ECHTER RATGEBER:
- Beantworte JEDE Frage des Kunden hilfreich und kompetent
- Gib praktische Tipps, Empfehlungen und Ratschläge
- Erkläre Zusammenhänge verständlich
- Sei ein geduldiger, freundlicher Experte

2. NIEMALS PAUSCHALE PREISE:
- Gib NIEMALS sofort einen Preis ohne vorherige Fragen
- Frage IMMER ZUERST nach den spezifischen Wünschen des Kunden

3. BEVOR DU PREISE NENNST, FRAGE KONKRET NACH:
- Was genau soll gemacht werden? (z.B. "Soll nur die Dusche erneuert werden oder das komplette Bad?")
- Wie groß ist der Bereich? (z.B. "Wie groß ist Ihr Badezimmer in Quadratmetern?")
- Welche Qualität/Materialien? (z.B. "Sollen es Standardfliesen oder hochwertige Designfliesen sein?")
- Welche besonderen Wünsche? (z.B. "Gibt es besondere Anforderungen wie barrierefrei?")

4. ERST NACH KLÄRUNG - PREISSCHÄTZUNG ERSTELLEN:
- Fasse zusammen, was der Kunde möchte
- Erstelle eine konkrete, individuelle Preisschätzung basierend auf seinen Angaben
- Erkläre, wie sich der Preis zusammensetzt
- WICHTIG: Betone IMMER dass es sich um eine unverbindliche Schätzung handelt
- Sage klar: "Dies ist eine grobe Schätzung ohne Gewähr - der tatsächliche Preis kann abweichen"
- Sage IMMER: "Alle Preise verstehen sich netto zzgl. 19% MwSt."
- Sage IMMER: "Ein verbindlicher Preis ist erst nach einer Besichtigung vor Ort möglich"
- Biete an, einen kostenlosen Besichtigungstermin zu vereinbaren

5. GESPRÄCHSFORMAT:
- Verwende IMMER "Sie" als Anrede
- Halte Antworten informativ aber prägnant (max. 200 Wörter)
- Erwähne am Ende, dass ein persönliches Gespräch für ein genaues Angebot sinnvoll ist`;

      const chatMessages: ChatMessage[] = [
        { role: "system", content: systemPrompt },
        ...messages
      ];

      const response = await openai.chat.completions.create({
        model: "gpt-4o-mini",
        messages: chatMessages,
        max_completion_tokens: 400,
        temperature: 0.7,
      });

      const assistantMessage = response.choices[0]?.message?.content || 
        "Entschuldigung, es gab einen Fehler. Bitte versuchen Sie es erneut.";
      
      res.json({ 
        success: true, 
        message: assistantMessage 
      });
    } catch (error) {
      console.error("Error in service advisor:", error);
      res.status(500).json({ 
        success: false, 
        error: "Berater-Fehler. Bitte versuchen Sie es erneut.",
        message: "Entschuldigung, ich bin gerade nicht erreichbar. Für persönliche Beratung rufen Sie uns an: 0152 12274043"
      });
    }
  });

  app.post("/api/ratgeber-download", async (req, res) => {
    try {
      const { name, email, phone, privacyAccepted } = req.body;
      
      if (!privacyAccepted) {
        return res.status(400).json({ 
          success: false, 
          error: "Datenschutz muss akzeptiert werden" 
        });
      }

      if (!name || !email) {
        return res.status(400).json({ 
          success: false, 
          error: "Name und E-Mail sind erforderlich" 
        });
      }

      console.log(`Ratgeber anfrage: ${name}, ${email}, ${phone || 'keine Telefonnummer'}`);

      try {
        await storage.createLead({
          name: name.trim(),
          email: email.trim(),
          phone: phone?.trim() || "",
          address: "",
          service: "Ratgeber Download",
          message: "Ratgeber PDF per E-Mail angefordert",
          preferredDate: "",
          preferredTime: "",
          urgency: "normal",
          source: "ratgeber"
        });
      } catch (leadError) {
        console.error("Error saving ratgeber lead:", leadError);
      }

      const pdfContent = generateRatgeberPDF();
      
      await emailTransporter.sendMail({
        from: `"AquaPro 24 München" <${process.env.SMTP_USER}>`,
        to: email.trim(),
        subject: "Ihr kostenloser Ratgeber: Heizung & Sanitär",
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
            <div style="background: linear-gradient(135deg, #f97316, #ea580c); padding: 30px; text-align: center;">
              <h1 style="color: white; margin: 0;">AquaPro 24</h1>
              <p style="color: white; margin: 10px 0 0 0;">Ihr Partnernetzwerk in München</p>
            </div>
            
            <div style="padding: 30px; background: #f9fafb;">
              <h2 style="color: #1f2937;">Hallo ${name.trim()},</h2>
              
              <p style="color: #4b5563; line-height: 1.6;">
                vielen Dank für Ihr Interesse an unserem <strong>Ratgeber Heizung & Sanitär</strong>!
              </p>
              
              <p style="color: #4b5563; line-height: 1.6;">
                Im Anhang finden Sie unseren kostenlosen Ratgeber mit 12 Kapiteln zu den wichtigsten 
                Themen rund um Heizung und Sanitär – von Notfall-Soforthilfe bis hin zu Kostenfaktoren.
              </p>
              
              <div style="background: white; border-left: 4px solid #f97316; padding: 20px; margin: 20px 0;">
                <strong style="color: #1f2937;">Inhalt des Ratgebers:</strong>
                <ul style="color: #4b5563; margin: 10px 0; padding-left: 20px;">
                  <li>Schnellhilfe im Notfall</li>
                  <li>Heizungsprobleme erkennen & lösen</li>
                  <li>Warmwasser & Armaturen</li>
                  <li>Abfluss & Leckagen</li>
                  <li>Badsanierung planen</li>
                  <li>Kostenfaktoren verstehen</li>
                </ul>
              </div>
              
              <p style="color: #4b5563; line-height: 1.6;">
                Bei Fragen stehen wir Ihnen jederzeit zur Verfügung – rufen Sie uns einfach an!
              </p>
              
              <div style="text-align: center; margin: 30px 0;">
                <a href="tel:+4915212274043" style="display: inline-block; background: #f97316; color: white; padding: 15px 30px; text-decoration: none; border-radius: 8px; font-weight: bold;">
                  Jetzt anrufen: 0152 12274043
                </a>
              </div>
              
              <p style="color: #4b5563; line-height: 1.6;">
                Mit freundlichen Grüßen,<br>
                <strong>Ihr AquaPro 24 Team</strong>
              </p>
            </div>
            
            <div style="background: #1f2937; padding: 20px; text-align: center;">
              <p style="color: #9ca3af; margin: 0; font-size: 14px;">
                AquaPro 24 | Hardenbergstr. 4 | 80992 München<br>
                Tel: 0152 12274043 | info@aquapro24.de | aquapro24.de
              </p>
            </div>
          </div>
        `,
        attachments: [
          {
            filename: "AquaPro24_Ratgeber_Heizung_Sanitaer.pdf",
            content: pdfContent
          }
        ]
      });

      await emailTransporter.sendMail({
        from: `"AquaPro 24 Website" <${process.env.SMTP_USER}>`,
        to: process.env.SMTP_USER,
        subject: `Neuer Ratgeber-Download: ${name.trim()}`,
        html: `
          <div style="font-family: Arial, sans-serif; max-width: 600px;">
            <h2 style="color: #f97316;">Neuer Ratgeber-Download</h2>
            
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${name.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">E-Mail:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${email.trim()}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Telefon:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${phone?.trim() || 'Nicht angegeben'}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb; font-weight: bold;">Datum:</td>
                <td style="padding: 10px; border-bottom: 1px solid #e5e7eb;">${new Date().toLocaleString('de-DE')}</td>
              </tr>
            </table>
            
            <p style="color: #6b7280; margin-top: 20px;">
              Der Ratgeber wurde automatisch an die angegebene E-Mail-Adresse gesendet.
            </p>
          </div>
        `
      });

      console.log(`Ratgeber sent to ${email.trim()} and notification sent to company`);
      
      res.json({ 
        success: true, 
        message: "Ratgeber wurde per E-Mail versendet" 
      });
    } catch (error) {
      console.error("Error sending ratgeber email:", error);
      res.status(500).json({ 
        success: false, 
        error: "E-Mail-Versand fehlgeschlagen. Bitte versuchen Sie es später erneut." 
      });
    }
  });
}

function generateRatgeberPDF(): Buffer {
  const fs = require("fs");
  const path = require("path");
  
  const pdfPath = path.join(process.cwd(), "attached_assets", "AquaPro24_Ratgeber_Heizung_und_Sanitaer_1767455255112.pdf");
  
  if (fs.existsSync(pdfPath)) {
    return fs.readFileSync(pdfPath);
  }
  
  console.error("Ratgeber PDF not found at:", pdfPath);
  throw new Error("PDF file not found");
}
