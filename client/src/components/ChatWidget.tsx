import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import { Progress } from "@/components/ui/progress";
import { 
  MessageCircle, 
  X, 
  Send, 
  Bot, 
  User,
  Phone,
  Loader2,
  CheckCircle2,
  Wrench,
  ArrowRight,
  ArrowLeft
} from "lucide-react";

interface LeadData {
  serviceTypes: string[];
  locationType: string;
  components: string[];
  symptoms: string[];
  isEmergency: string;
  urgency: string;
  hasPhotos: string;
  accessSituation: string;
  floorLevel: string;
  waterShutoff: string;
  description: string;
  name: string;
  address: string;
  phone: string;
  email: string;
  preferredDate: string;
  preferredTime: string;
  estimatedPrice: string;
}

interface QuestionOption {
  value: string;
  label: string;
}

interface Question {
  id: keyof LeadData | "contact" | "appointment";
  title: string;
  subtitle?: string;
  type: "single" | "multi" | "text" | "textarea" | "contact" | "appointment";
  options?: QuestionOption[];
  required?: boolean;
}

const QUESTIONS: Question[] = [
  {
    id: "serviceTypes",
    title: "Was genau benötigen Sie?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "neuinstallation", label: "Neuinstallation Sanitär" },
      { value: "austausch", label: "Austausch bestehender Installation" },
      { value: "reparatur", label: "Reparatur / Undichtigkeit" },
      { value: "wc_defekt", label: "WC / Spülkasten defekt" },
      { value: "armatur_tropft", label: "Armatur tropft / Undicht" },
      { value: "rohrbruch", label: "Rohrbruch / Wasserschaden" },
      { value: "warmwasser", label: "Warmwasserprobleme" },
      { value: "bad_komplett", label: "Badinstallation komplett" },
      { value: "kueche", label: "Küche (Wasseranschluss / Ablauf)" },
      { value: "sonstiges", label: "Sonstiges" },
    ],
  },
  {
    id: "locationType",
    title: "Wo soll die Arbeit durchgeführt werden?",
    type: "single",
    options: [
      { value: "wohnung", label: "Wohnung" },
      { value: "haus", label: "Haus" },
      { value: "gewerbe", label: "Gewerbe" },
      { value: "keller", label: "Keller" },
      { value: "dachgeschoss", label: "Dachgeschoss" },
      { value: "aussen", label: "Außenbereich" },
    ],
  },
  {
    id: "components",
    title: "Welche Sanitärkomponenten sind betroffen?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "waschbecken", label: "Waschbecken" },
      { value: "wc", label: "WC" },
      { value: "urinal", label: "Urinal" },
      { value: "dusche", label: "Dusche" },
      { value: "badewanne", label: "Badewanne" },
      { value: "armaturen", label: "Armaturen" },
      { value: "wasserleitungen", label: "Wasserleitungen" },
      { value: "abwasserleitungen", label: "Abwasserleitungen" },
      { value: "warmwasserbereiter", label: "Warmwasserbereiter / Boiler" },
      { value: "zirkulation", label: "Zirkulationsleitung" },
      { value: "spuele", label: "Küche / Spüle" },
      { value: "garten", label: "Gartenanschluss" },
      { value: "regenwasser", label: "Regenwasserablauf" },
    ],
  },
  {
    id: "symptoms",
    title: "Welche Symptome treten auf?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "tropft_leicht", label: "Tropft leicht" },
      { value: "tropft_stark", label: "Tropft stark" },
      { value: "wasser_laeuft", label: "Wasser läuft dauerhaft" },
      { value: "kein_druck", label: "Kein / niedriger Druck" },
      { value: "verstopft", label: "Verstopft / Rückstau" },
      { value: "geruch", label: "Geruchsbelastung" },
      { value: "kein_warmwasser", label: "Kein Warmwasser" },
      { value: "geraeusche", label: "Klopf-/Strömungsgeräusche" },
      { value: "feuchtigkeit", label: "Feuchtigkeit in Wand/Boden" },
      { value: "keine", label: "Keine Symptome (Neuinstallation)" },
    ],
  },
  {
    id: "isEmergency",
    title: "Handelt es sich um einen Notfall?",
    type: "single",
    options: [
      { value: "akut", label: "Ja, akuter Notfall (Wasser läuft / tropft stark)" },
      { value: "kein_wasser", label: "Ja, aber kein Wasser mehr vorhanden" },
      { value: "geplant_reparatur", label: "Nein, geplante Reparatur" },
      { value: "geplant_neu", label: "Nein, geplante Neuinstallation" },
    ],
  },
  {
    id: "urgency",
    title: "Wie dringend ist Ihr Anliegen?",
    type: "single",
    options: [
      { value: "sofort", label: "Sofort / innerhalb 1 Stunde" },
      { value: "heute", label: "Heute noch" },
      { value: "woche", label: "Diese Woche" },
      { value: "nicht_dringend", label: "Nicht dringend" },
    ],
  },
  {
    id: "hasPhotos",
    title: "Sind Fotos verfügbar?",
    subtitle: "Fotos helfen uns bei der Einschätzung",
    type: "single",
    options: [
      { value: "ja", label: "Ja (bitte per E-Mail/WhatsApp senden)" },
      { value: "nein", label: "Nein" },
    ],
  },
  {
    id: "accessSituation",
    title: "Zugang / Einbausituation",
    type: "single",
    options: [
      { value: "leicht", label: "Leicht zugänglich" },
      { value: "schwer", label: "Schwer zugänglich" },
      { value: "verkleidung", label: "Verkleidung muss geöffnet werden" },
      { value: "wand_boden", label: "Wand / Boden muss geöffnet werden" },
      { value: "unklar", label: "Unklar" },
    ],
  },
  {
    id: "floorLevel",
    title: "In welcher Etage?",
    type: "single",
    options: [
      { value: "eg", label: "Erdgeschoss" },
      { value: "1-2og", label: "1.–2. OG" },
      { value: "3og+", label: "ab 3. OG" },
      { value: "keller", label: "Keller" },
    ],
  },
  {
    id: "waterShutoff",
    title: "Wasser absperrbar?",
    type: "single",
    options: [
      { value: "ja", label: "Ja, Hauptwasserhahn vorhanden" },
      { value: "nein", label: "Nein" },
      { value: "unklar", label: "Unklar" },
    ],
  },
  {
    id: "description",
    title: "Zusatzinformationen",
    subtitle: "Bitte kurz beschreiben, was passiert ist bzw. was installiert werden soll",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Ihre Kontaktdaten",
    subtitle: "Für Terminvereinbarung und Rückfragen",
    type: "contact",
  },
  {
    id: "appointment",
    title: "Wunschtermin",
    subtitle: "Wann passt es Ihnen am besten?",
    type: "appointment",
  },
];

const HEIZUNG_QUESTIONS: Question[] = [
  {
    id: "serviceTypes",
    title: "Was ist das Problem mit Ihrer Heizung?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "heizung_ausgefallen", label: "Heizung ausgefallen (Notfall)" },
      { value: "heizung_nicht_warm", label: "Heizung wird nicht warm" },
      { value: "heizung_geraeusche", label: "Heizung macht Geräusche / gluckert" },
      { value: "heizung_wartung", label: "Heizungswartung / Jahresservice" },
      { value: "heizung_neu", label: "Neue Heizung installieren" },
      { value: "heizung_modernisieren", label: "Alte Heizung modernisieren" },
      { value: "thermostat_defekt", label: "Thermostat / Regelung defekt" },
      { value: "heizkoerper", label: "Heizkörper entlüften / tauschen" },
      { value: "wasserdruck_niedrig", label: "Wasserdruck zu niedrig" },
      { value: "brenner_startet_nicht", label: "Brenner startet nicht" },
    ],
  },
  {
    id: "components",
    title: "Welche Heizungsart haben Sie?",
    type: "single",
    options: [
      { value: "gasheizung", label: "Gasheizung" },
      { value: "oelheizung", label: "Ölheizung" },
      { value: "waermepumpe", label: "Wärmepumpe" },
      { value: "pelletheizung", label: "Pelletheizung" },
      { value: "fernwaerme", label: "Fernwärme" },
      { value: "elektroheizung", label: "Elektroheizung" },
      { value: "weiss_nicht", label: "Weiß ich nicht" },
    ],
  },
  {
    id: "symptoms",
    title: "Welche Symptome treten auf?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "kalt", label: "Heizkörper bleiben kalt" },
      { value: "lauwarm", label: "Nur lauwarm, nicht richtig warm" },
      { value: "gluckern", label: "Gluckern / Luftgeräusche" },
      { value: "klopfen", label: "Klopfgeräusche" },
      { value: "pfeifen", label: "Pfeifgeräusche" },
      { value: "kein_warmwasser", label: "Kein Warmwasser" },
      { value: "display_fehler", label: "Fehlermeldung am Display" },
      { value: "brenner_geht_aus", label: "Brenner geht immer wieder aus" },
      { value: "geruch", label: "Ungewöhnlicher Geruch" },
      { value: "wasserleck", label: "Wasseraustritt / Leck" },
    ],
  },
  {
    id: "isEmergency",
    title: "Handelt es sich um einen Heizungsnotfall?",
    type: "single",
    options: [
      { value: "akut", label: "Ja, Heizung komplett ausgefallen" },
      { value: "kein_warmwasser", label: "Ja, kein Warmwasser" },
      { value: "geplant_reparatur", label: "Nein, geplante Reparatur" },
      { value: "geplant_neu", label: "Nein, geplante Neuinstallation / Wartung" },
    ],
  },
  {
    id: "urgency",
    title: "Wie dringend ist Ihr Anliegen?",
    type: "single",
    options: [
      { value: "sofort", label: "Notfall - sofort" },
      { value: "heute", label: "Dringend - innerhalb 24 Stunden" },
      { value: "woche", label: "Diese Woche" },
      { value: "nicht_dringend", label: "Flexibel / Beratungstermin" },
    ],
  },
  {
    id: "locationType",
    title: "Um welches Gebäude handelt es sich?",
    type: "single",
    options: [
      { value: "wohnung", label: "Wohnung" },
      { value: "einfamilienhaus", label: "Einfamilienhaus" },
      { value: "mehrfamilienhaus", label: "Mehrfamilienhaus" },
      { value: "gewerbe", label: "Gewerbe" },
    ],
  },
  {
    id: "accessSituation",
    title: "Wie alt ist Ihre Heizung?",
    type: "single",
    options: [
      { value: "unter_5", label: "Unter 5 Jahre" },
      { value: "5_10", label: "5-10 Jahre" },
      { value: "10_15", label: "10-15 Jahre" },
      { value: "15_20", label: "15-20 Jahre" },
      { value: "ueber_20", label: "Über 20 Jahre" },
      { value: "unklar", label: "Weiß ich nicht" },
    ],
  },
  {
    id: "description",
    title: "Zusatzinformationen",
    subtitle: "Beschreiben Sie kurz das Problem oder was Sie benötigen",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Ihre Kontaktdaten",
    subtitle: "Für Terminvereinbarung und Rückfragen",
    type: "contact",
  },
  {
    id: "appointment",
    title: "Wunschtermin",
    subtitle: "Wann passt es Ihnen am besten?",
    type: "appointment",
  },
];

const BAD_QUESTIONS: Question[] = [
  {
    id: "serviceTypes",
    title: "Was planen Sie für Ihr Badezimmer?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "bad_komplett", label: "Komplette Badsanierung" },
      { value: "dusche_neu", label: "Dusche erneuern / Walk-In Dusche" },
      { value: "wanne_zu_dusche", label: "Badewanne gegen Dusche tauschen" },
      { value: "barrierefrei", label: "Barrierefreies Bad / Seniorengerecht" },
      { value: "wc_waschbecken", label: "WC und Waschbecken erneuern" },
      { value: "fliesen", label: "Fliesen erneuern" },
      { value: "armaturen", label: "Neue Armaturen" },
      { value: "beratung", label: "Kostenlose Beratung vor Ort" },
      { value: "3d_planung", label: "3D-Badplanung gewünscht" },
    ],
  },
  {
    id: "components",
    title: "Welche Elemente sollen erneuert werden?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "dusche", label: "Dusche" },
      { value: "badewanne", label: "Badewanne" },
      { value: "wc", label: "WC" },
      { value: "waschbecken", label: "Waschbecken" },
      { value: "waschtisch", label: "Waschtisch / Unterschrank" },
      { value: "armaturen", label: "Armaturen" },
      { value: "fliesen_boden", label: "Bodenfliesen" },
      { value: "fliesen_wand", label: "Wandfliesen" },
      { value: "heizkoerper", label: "Heizkörper / Handtuchtrockner" },
      { value: "beleuchtung", label: "Beleuchtung / Spiegel" },
    ],
  },
  {
    id: "locationType",
    title: "Wie groß ist Ihr Badezimmer?",
    type: "single",
    options: [
      { value: "klein", label: "Klein (bis 5 m²)" },
      { value: "mittel", label: "Mittel (5-8 m²)" },
      { value: "gross", label: "Groß (8-12 m²)" },
      { value: "sehr_gross", label: "Sehr groß (über 12 m²)" },
      { value: "gaeste_wc", label: "Gäste-WC" },
    ],
  },
  {
    id: "urgency",
    title: "Wann soll die Sanierung stattfinden?",
    type: "single",
    options: [
      { value: "sofort", label: "So schnell wie möglich" },
      { value: "monat", label: "Innerhalb 1-2 Monaten" },
      { value: "quartal", label: "Innerhalb 3-6 Monaten" },
      { value: "planung", label: "Erst Planung / Beratung" },
    ],
  },
  {
    id: "accessSituation",
    title: "Wie alt ist Ihr aktuelles Bad?",
    type: "single",
    options: [
      { value: "unter_10", label: "Unter 10 Jahre" },
      { value: "10_20", label: "10-20 Jahre" },
      { value: "20_30", label: "20-30 Jahre" },
      { value: "ueber_30", label: "Über 30 Jahre" },
      { value: "neubau", label: "Neubau" },
    ],
  },
  {
    id: "description",
    title: "Zusatzinformationen",
    subtitle: "Beschreiben Sie kurz Ihre Wünsche für das neue Bad",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Ihre Kontaktdaten",
    subtitle: "Für Terminvereinbarung und Rückfragen",
    type: "contact",
  },
  {
    id: "appointment",
    title: "Wunschtermin für Beratung",
    subtitle: "Wann passt es Ihnen am besten?",
    type: "appointment",
  },
];

const WAERMEPUMPE_QUESTIONS: Question[] = [
  {
    id: "serviceTypes",
    title: "Was interessiert Sie bei Wärmepumpen?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "beratung_eignung", label: "Beratung: Ist mein Haus geeignet?" },
      { value: "luft_wasser", label: "Angebot für Luft-Wasser-Wärmepumpe" },
      { value: "erdwaerme", label: "Angebot für Erdwärmepumpe" },
      { value: "foerderung", label: "Förderberatung (bis 70% Zuschuss)" },
      { value: "heizungstausch", label: "Heizungstausch Gas/Öl → Wärmepumpe" },
      { value: "wartung", label: "Wärmepumpe Wartung / Service" },
      { value: "reparatur", label: "Wärmepumpe macht Probleme" },
      { value: "vor_ort_check", label: "Kostenloser Vor-Ort-Check" },
    ],
  },
  {
    id: "components",
    title: "Welche Heizung haben Sie aktuell?",
    type: "single",
    options: [
      { value: "gas", label: "Gasheizung" },
      { value: "oel", label: "Ölheizung" },
      { value: "elektro", label: "Elektroheizung / Nachtspeicher" },
      { value: "waermepumpe", label: "Bereits Wärmepumpe" },
      { value: "keine", label: "Keine / Neubau" },
      { value: "sonstige", label: "Sonstige" },
    ],
  },
  {
    id: "locationType",
    title: "Um welches Gebäude handelt es sich?",
    type: "single",
    options: [
      { value: "efh", label: "Einfamilienhaus" },
      { value: "dhh", label: "Doppelhaushälfte" },
      { value: "rh", label: "Reihenhaus" },
      { value: "mfh", label: "Mehrfamilienhaus" },
      { value: "gewerbe", label: "Gewerbe" },
      { value: "neubau", label: "Neubau in Planung" },
    ],
  },
  {
    id: "symptoms",
    title: "Wie ist Ihr Gebäude gedämmt?",
    type: "single",
    options: [
      { value: "gut", label: "Gut gedämmt (nach 2000)" },
      { value: "mittel", label: "Teilweise gedämmt" },
      { value: "schlecht", label: "Kaum / nicht gedämmt" },
      { value: "weiss_nicht", label: "Weiß ich nicht" },
    ],
  },
  {
    id: "urgency",
    title: "Wann planen Sie den Umstieg?",
    type: "single",
    options: [
      { value: "sofort", label: "So schnell wie möglich" },
      { value: "halbjahr", label: "Innerhalb 6 Monaten" },
      { value: "jahr", label: "Innerhalb 1 Jahr" },
      { value: "planung", label: "Erst informieren / planen" },
    ],
  },
  {
    id: "description",
    title: "Zusatzinformationen",
    subtitle: "Haben Sie besondere Fragen oder Wünsche?",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Ihre Kontaktdaten",
    subtitle: "Für Terminvereinbarung und Rückfragen",
    type: "contact",
  },
  {
    id: "appointment",
    title: "Wunschtermin für Beratung",
    subtitle: "Wann passt es Ihnen am besten?",
    type: "appointment",
  },
];

const HAUSTECHNIK_QUESTIONS: Question[] = [
  {
    id: "serviceTypes",
    title: "Welche Haustechnik-Leistung benötigen Sie?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "neubau_planung", label: "Komplettplanung Neubau" },
      { value: "wasser_komplett", label: "Wasserinstallation komplett" },
      { value: "gas", label: "Gasinstallation / Gasleitung" },
      { value: "lueftung", label: "Lüftungsanlage installieren" },
      { value: "smart_home", label: "Smart Home Heizungssteuerung" },
      { value: "wartungsvertrag", label: "Wartungsvertrag Haustechnik" },
      { value: "energieberatung", label: "Energieberatung" },
      { value: "sonstiges", label: "Sonstiges Haustechnik-Projekt" },
    ],
  },
  {
    id: "locationType",
    title: "Um welches Objekt handelt es sich?",
    type: "single",
    options: [
      { value: "neubau", label: "Neubau" },
      { value: "altbau", label: "Altbau / Bestandsgebäude" },
      { value: "sanierung", label: "Kernsanierung" },
      { value: "gewerbe", label: "Gewerbeobjekt" },
      { value: "mfh", label: "Mehrfamilienhaus" },
    ],
  },
  {
    id: "components",
    title: "Welche Bereiche sind betroffen?",
    subtitle: "Mehrfachauswahl möglich",
    type: "multi",
    options: [
      { value: "heizung", label: "Heizungstechnik" },
      { value: "sanitaer", label: "Sanitärtechnik" },
      { value: "lueftung", label: "Lüftungstechnik" },
      { value: "gas", label: "Gastechnik" },
      { value: "solar", label: "Solarthermie" },
      { value: "regenwasser", label: "Regenwassernutzung" },
      { value: "entkalkung", label: "Wasserenthärtung" },
    ],
  },
  {
    id: "urgency",
    title: "Wann soll das Projekt starten?",
    type: "single",
    options: [
      { value: "sofort", label: "Sofort / dringend" },
      { value: "monat", label: "Innerhalb 1-2 Monaten" },
      { value: "quartal", label: "Innerhalb 3-6 Monaten" },
      { value: "planung", label: "Erst Planung / Beratung" },
    ],
  },
  {
    id: "description",
    title: "Projektbeschreibung",
    subtitle: "Beschreiben Sie kurz Ihr Vorhaben",
    type: "textarea",
  },
  {
    id: "contact",
    title: "Ihre Kontaktdaten",
    subtitle: "Für Terminvereinbarung und Rückfragen",
    type: "contact",
  },
  {
    id: "appointment",
    title: "Wunschtermin",
    subtitle: "Wann passt es Ihnen am besten?",
    type: "appointment",
  },
];

const WEBHOOK_URL = import.meta.env.VITE_WEBHOOK_URL || "";

interface ChatWidgetProps {
  serviceCategory?: "sanitaer" | "bad" | "heizung" | "waermepumpe" | "haustechnik";
}

const SERVICE_CATEGORY_LABELS: Record<string, string> = {
  sanitaer: "Sanitär & Wasserinstallation",
  bad: "Badsanierung",
  heizung: "Heizung",
  waermepumpe: "Wärmepumpe",
  haustechnik: "Haustechnik",
};

const SERVICE_CATEGORY_COLORS: Record<string, { bg: string; text: string; border: string }> = {
  sanitaer: { bg: "bg-secondary", text: "text-secondary-foreground", border: "border-secondary/20" },
  bad: { bg: "bg-cyan-600", text: "text-white", border: "border-cyan-600/20" },
  heizung: { bg: "bg-destructive", text: "text-destructive-foreground", border: "border-destructive/20" },
  waermepumpe: { bg: "bg-orange-500", text: "text-white", border: "border-orange-500/20" },
  haustechnik: { bg: "bg-emerald-600", text: "text-white", border: "border-emerald-600/20" },
};

const SERVICE_CATEGORY_DEFAULTS: Record<string, string[]> = {
  sanitaer: [], // Force user to make explicit choice
  bad: [], // Force user to make explicit choice
  heizung: [], // Force user to make explicit choice
  waermepumpe: [], // Force user to make explicit choice
  haustechnik: [], // Force user to make explicit choice
};

function calculatePrice(data: LeadData): string {
  let minPrice = 89;
  let maxPrice = 149;
  
  // Base on urgency
  if (data.urgency === "sofort" || data.isEmergency === "akut") {
    minPrice = 299;
    maxPrice = 399;
  } else if (data.urgency === "heute" || data.isEmergency === "kein_wasser") {
    minPrice = 199;
    maxPrice = 299;
  }
  
  // Add complexity based on service type
  if (data.serviceTypes.includes("rohrbruch")) {
    minPrice += 100;
    maxPrice += 150;
  }
  if (data.serviceTypes.includes("bad_komplett")) {
    minPrice = 2500;
    maxPrice = 8000;
  }
  
  // Access difficulty
  if (data.accessSituation === "wand_boden") {
    minPrice += 100;
    maxPrice += 200;
  }
  
  return `${minPrice} - ${maxPrice} EUR`;
}

export default function ChatWidget({ serviceCategory }: ChatWidgetProps = {}) {
  const [isOpen, setIsOpen] = useState(false);
  const [currentStep, setCurrentStep] = useState(0);
  const [isComplete, setIsComplete] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [showPulse, setShowPulse] = useState(true);
  const [leadData, setLeadData] = useState<LeadData>({
    serviceTypes: serviceCategory ? SERVICE_CATEGORY_DEFAULTS[serviceCategory] || [] : [],
    locationType: "",
    components: [],
    symptoms: [],
    isEmergency: "",
    urgency: "",
    hasPhotos: "",
    accessSituation: "",
    floorLevel: "",
    waterShutoff: "",
    description: "",
    name: "",
    address: "",
    phone: "",
    email: "",
    preferredDate: "",
    preferredTime: "",
    estimatedPrice: "",
  });
  
  const serviceCategoryLabel = serviceCategory ? SERVICE_CATEGORY_LABELS[serviceCategory] : null;
  const serviceCategoryColors = serviceCategory ? SERVICE_CATEGORY_COLORS[serviceCategory] : SERVICE_CATEGORY_COLORS.sanitaer;
  
  // Select appropriate questions based on service category
  const getQuestionsForCategory = () => {
    switch (serviceCategory) {
      case "heizung":
        return HEIZUNG_QUESTIONS;
      case "bad":
        return BAD_QUESTIONS;
      case "waermepumpe":
        return WAERMEPUMPE_QUESTIONS;
      case "haustechnik":
        return HAUSTECHNIK_QUESTIONS;
      default:
        return QUESTIONS; // Sanitär and default
    }
  };
  const questions = getQuestionsForCategory();
  
  const contentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = 0;
    }
  }, [currentStep]);

  const currentQuestion = questions[currentStep];
  const progress = ((currentStep + 1) / questions.length) * 100;

  const handleSingleSelect = (value: string) => {
    if (currentQuestion.id !== "contact") {
      const fieldId = currentQuestion.id as keyof LeadData;
      setLeadData(prev => ({ ...prev, [fieldId]: value }));
    }
  };

  const handleMultiSelect = (value: string, checked: boolean) => {
    const fieldId = currentQuestion.id as keyof LeadData;
    if (fieldId === "serviceTypes" || fieldId === "components" || fieldId === "symptoms") {
      setLeadData(prev => ({
        ...prev,
        [fieldId]: checked 
          ? [...(prev[fieldId] as string[]), value]
          : (prev[fieldId] as string[]).filter(v => v !== value)
      }));
    }
  };

  const handleTextChange = (value: string) => {
    if (currentQuestion.id !== "contact") {
      const fieldId = currentQuestion.id as keyof LeadData;
      setLeadData(prev => ({ ...prev, [fieldId]: value }));
    }
  };

  const handleContactChange = (field: keyof LeadData, value: string) => {
    setLeadData(prev => ({ ...prev, [field]: value }));
  };

  const canProceed = (): boolean => {
    const q = currentQuestion;
    if (q.type === "multi") {
      const arr = leadData[q.id as keyof LeadData] as string[];
      return arr.length > 0;
    }
    if (q.type === "single") {
      return !!(leadData[q.id as keyof LeadData] as string);
    }
    if (q.type === "textarea") {
      return true; // Optional
    }
    if (q.type === "contact") {
      return !!(leadData.name && leadData.phone && leadData.address);
    }
    if (q.type === "appointment") {
      return !!(leadData.preferredDate && leadData.preferredTime);
    }
    return true;
  };

  const handleNext = () => {
    if (currentStep < questions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      handleSubmit();
    }
  };

  const handleBack = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const handleSubmit = async () => {
    setIsSubmitting(true);
    
    const estimatedPrice = calculatePrice(leadData);
    const finalData = { ...leadData, estimatedPrice };
    
    const payload = {
      ...finalData,
      timestamp: new Date().toISOString(),
      source: "website_chatbot",
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
      setLeadData(prev => ({ ...prev, estimatedPrice }));
      setIsComplete(true);
    } catch (error) {
      console.error("Lead submission error:", error);
    } finally {
      setIsSubmitting(false);
    }
  };

  const toggleChat = () => {
    setIsOpen(!isOpen);
    setShowPulse(false);
  };

  const renderQuestion = () => {
    const q = currentQuestion;

    if (q.type === "single" && q.options) {
      const selectedValue = leadData[q.id as keyof LeadData] as string;
      return (
        <div className="space-y-2">
          {q.options.map((opt) => (
            <Button
              key={opt.value}
              variant={selectedValue === opt.value ? "default" : "outline"}
              className="w-full justify-start text-left h-auto py-3 px-4"
              onClick={() => handleSingleSelect(opt.value)}
              data-testid={`option-${q.id}-${opt.value}`}
            >
              {opt.label}
            </Button>
          ))}
        </div>
      );
    }

    if (q.type === "multi" && q.options) {
      const selectedValues = leadData[q.id as keyof LeadData] as string[];
      return (
        <div className="space-y-2 max-h-48 overflow-y-auto">
          {q.options.map((opt) => (
            <label 
              key={opt.value} 
              htmlFor={`${q.id}-${opt.value}`}
              className="flex items-center space-x-3 p-3 rounded-md border border-border hover-elevate cursor-pointer"
            >
              <Checkbox
                id={`${q.id}-${opt.value}`}
                checked={selectedValues.includes(opt.value)}
                onCheckedChange={(checked) => handleMultiSelect(opt.value, !!checked)}
                data-testid={`checkbox-${q.id}-${opt.value}`}
              />
              <span className="cursor-pointer flex-1">
                {opt.label}
              </span>
            </label>
          ))}
        </div>
      );
    }

    if (q.type === "textarea") {
      return (
        <Textarea
          value={leadData[q.id as keyof LeadData] as string}
          onChange={(e) => handleTextChange(e.target.value)}
          placeholder="Beschreiben Sie Ihr Anliegen..."
          className="min-h-[100px]"
          data-testid={`textarea-${q.id}`}
        />
      );
    }

    if (q.type === "contact") {
      return (
        <div className="space-y-3">
          <Input
            value={leadData.name}
            onChange={(e) => handleContactChange("name", e.target.value)}
            placeholder="Vorname & Nachname *"
            data-testid="input-name"
          />
          <Input
            value={leadData.address}
            onChange={(e) => handleContactChange("address", e.target.value)}
            placeholder="Straße, Hausnummer, PLZ, Ort *"
            data-testid="input-address"
          />
          <Input
            value={leadData.phone}
            onChange={(e) => handleContactChange("phone", e.target.value)}
            placeholder="Telefon *"
            type="tel"
            data-testid="input-phone"
          />
          <Input
            value={leadData.email}
            onChange={(e) => handleContactChange("email", e.target.value)}
            placeholder="E-Mail (optional)"
            type="email"
            data-testid="input-email"
          />
        </div>
      );
    }

    if (q.type === "appointment") {
      return (
        <div className="space-y-4">
          <div className="space-y-2">
            <Label htmlFor="preferred-date" className="text-sm font-medium">Datum *</Label>
            <Input
              id="preferred-date"
              value={leadData.preferredDate}
              onChange={(e) => handleContactChange("preferredDate", e.target.value)}
              placeholder="z.B. 15.12.2024"
              type="date"
              data-testid="input-preferred-date"
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="preferred-time" className="text-sm font-medium">Uhrzeit *</Label>
            <Input
              id="preferred-time"
              value={leadData.preferredTime}
              onChange={(e) => handleContactChange("preferredTime", e.target.value)}
              placeholder="z.B. 10:00"
              type="time"
              data-testid="input-preferred-time"
            />
          </div>
          <p className="text-xs text-muted-foreground">
            Wir bestätigen Ihren Termin telefonisch oder per E-Mail.
          </p>
        </div>
      );
    }

    return null;
  };

  return (
    <>
      {isOpen && (
        <div className="fixed bottom-20 right-4 z-50 w-[calc(100%-2rem)] max-w-lg">
          <Card className={`shadow-2xl border-2 ${serviceCategoryColors.border}`}>
            <CardHeader className={`${serviceCategoryColors.bg} ${serviceCategoryColors.text} rounded-t-lg p-4`}>
              <div className="flex items-center justify-between gap-2">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <Wrench className="w-5 h-5" />
                  </div>
                  <div>
                    <CardTitle className="text-base">
                      {serviceCategoryLabel ? `Buchung: ${serviceCategoryLabel}` : "Münchner Sanitär"}
                    </CardTitle>
                    <div className="flex items-center gap-1.5 text-xs text-white/80">
                      <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                      <span>{serviceCategoryLabel ? "Online Buchung" : "Online - Sofort Preisschätzung"}</span>
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
              {!isComplete ? (
                <>
                  <div className="px-4 pt-3">
                    <div className="flex items-center justify-between text-xs text-muted-foreground mb-2">
                      <span>Schritt {currentStep + 1} von {questions.length}</span>
                      <span>{Math.round(progress)}%</span>
                    </div>
                    <Progress value={progress} className="h-2" />
                  </div>
                  
                  <div ref={contentRef} className="p-4 space-y-4 max-h-[28rem] overflow-y-auto">
                    <div className="flex gap-2">
                      <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="w-4 h-4 text-secondary" />
                      </div>
                      <div className="bg-card border border-card-border rounded-lg rounded-tl-none p-3">
                        <p className="font-medium text-sm">{currentQuestion.title}</p>
                        {currentQuestion.subtitle && (
                          <p className="text-xs text-muted-foreground mt-1">{currentQuestion.subtitle}</p>
                        )}
                      </div>
                    </div>
                    
                    {renderQuestion()}
                  </div>
                  
                  <div className="p-4 border-t border-border flex gap-2">
                    {currentStep > 0 && (
                      <Button 
                        variant="outline" 
                        onClick={handleBack}
                        data-testid="button-back"
                      >
                        <ArrowLeft className="w-4 h-4 mr-1" />
                        Zurück
                      </Button>
                    )}
                    <Button 
                      className="flex-1"
                      onClick={handleNext}
                      disabled={!canProceed() || isSubmitting}
                      data-testid="button-next"
                    >
                      {isSubmitting ? (
                        <Loader2 className="w-4 h-4 animate-spin" />
                      ) : currentStep === questions.length - 1 ? (
                        <>
                          Anfrage senden
                          <Send className="w-4 h-4 ml-2" />
                        </>
                      ) : (
                        <>
                          Weiter
                          <ArrowRight className="w-4 h-4 ml-2" />
                        </>
                      )}
                    </Button>
                  </div>
                </>
              ) : (
                <div className="p-6 text-center space-y-4">
                  <div className="w-16 h-16 rounded-full bg-accent/10 flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8 text-accent" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-lg">Anfrage gesendet!</h3>
                    <p className="text-sm text-muted-foreground mt-2">
                      Vielen Dank, {leadData.name}! Wir melden uns schnellstmöglich bei Ihnen.
                    </p>
                  </div>
                  
                  <div className="bg-muted/50 rounded-lg p-4 text-left">
                    <p className="text-sm font-medium">Geschätzte Kosten:</p>
                    <p className="text-xl font-bold text-primary">{leadData.estimatedPrice}</p>
                    <p className="text-xs text-muted-foreground mt-1">
                      inkl. Anfahrt im Stadtgebiet München
                    </p>
                  </div>
                  
                  {(leadData.isEmergency === "akut" || leadData.urgency === "sofort") && (
                    <div className="bg-destructive/10 border border-destructive/20 rounded-lg p-3">
                      <p className="text-sm text-destructive font-medium">
                        Notfall? Rufen Sie uns direkt an:
                      </p>
                      <Button className="mt-2 w-full" asChild>
                        <a href="tel:+4915212274043">
                          <Phone className="w-4 h-4 mr-2" />
                          0152 12274043
                        </a>
                      </Button>
                    </div>
                  )}
                </div>
              )}
            </CardContent>
          </Card>
        </div>
      )}
      
      {isOpen ? (
        <Button
          onClick={toggleChat}
          className="fixed bottom-4 right-4 z-50 w-14 h-14 rounded-full shadow-xl bg-muted text-muted-foreground"
          size="icon"
          data-testid="button-toggle-chat"
        >
          <X className="w-6 h-6" />
        </Button>
      ) : (
        <button
          onClick={toggleChat}
          className={`fixed right-0 top-1/2 -translate-y-1/2 z-50 flex flex-col items-center gap-2 ${serviceCategoryColors.bg} ${serviceCategoryColors.text} px-3 py-4 rounded-l-lg shadow-2xl hover:px-4 transition-all duration-300 group`}
          data-testid="button-toggle-chat"
        >
          {showPulse && (
            <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full animate-ping" />
          )}
          <span className="absolute -left-1 top-1/2 -translate-y-1/2 w-3 h-3 bg-accent rounded-full" />
          <MessageCircle className="w-6 h-6" />
          <span className="writing-mode-vertical text-sm font-bold tracking-wide whitespace-nowrap" style={{ writingMode: 'vertical-rl', textOrientation: 'mixed' }}>
            Online Buchung
          </span>
          <span className="w-2 h-2 rounded-full bg-accent animate-pulse" />
        </button>
      )}
    </>
  );
}
