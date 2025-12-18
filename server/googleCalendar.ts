// Google Calendar Integration for Replit
// Single calendar approach: All events in primary calendar, filtered by service type (Gewerk)
import { google } from 'googleapis';

let connectionSettings: any;

async function getAccessToken() {
  if (connectionSettings && connectionSettings.settings.expires_at && new Date(connectionSettings.settings.expires_at).getTime() > Date.now()) {
    return connectionSettings.settings.access_token;
  }
  
  const hostname = process.env.REPLIT_CONNECTORS_HOSTNAME;
  const xReplitToken = process.env.REPL_IDENTITY 
    ? 'repl ' + process.env.REPL_IDENTITY 
    : process.env.WEB_REPL_RENEWAL 
    ? 'depl ' + process.env.WEB_REPL_RENEWAL 
    : null;

  if (!xReplitToken) {
    throw new Error('X_REPLIT_TOKEN not found for repl/depl');
  }

  connectionSettings = await fetch(
    'https://' + hostname + '/api/v2/connection?include_secrets=true&connector_names=google-calendar',
    {
      headers: {
        'Accept': 'application/json',
        'X_REPLIT_TOKEN': xReplitToken
      }
    }
  ).then(res => res.json()).then(data => data.items?.[0]);

  const accessToken = connectionSettings?.settings?.access_token || connectionSettings.settings?.oauth?.credentials?.access_token;

  if (!connectionSettings || !accessToken) {
    throw new Error('Google Calendar not connected');
  }
  return accessToken;
}

export async function getUncachableGoogleCalendarClient() {
  const accessToken = await getAccessToken();

  const oauth2Client = new google.auth.OAuth2();
  oauth2Client.setCredentials({
    access_token: accessToken
  });

  return google.calendar({ version: 'v3', auth: oauth2Client });
}

export interface CalendarEventData {
  name: string;
  phone: string;
  email?: string;
  address: string;
  serviceTypes: string[];
  urgency: string;
  isEmergency: string;
  description?: string;
  preferredDate?: string;
  preferredTime?: string;
  estimatedPrice?: string;
  ownershipType?: string;
  accessInfo?: string;
  budget?: string;
}

export async function createCalendarEvent(data: CalendarEventData): Promise<string | null> {
  try {
    const calendar = await getUncachableGoogleCalendarClient();
    
    const serviceLabel = data.serviceTypes.join(', ') || 'Sanitär-Anfrage';
    const urgencyLabel = getUrgencyLabel(data.urgency, data.isEmergency);
    
    // Always use primary calendar - service type is included in the event title for filtering
    const calendarId = 'primary';
    console.log(`Creating event in primary calendar for services: ${serviceLabel}`);
    
    const startTime = getEventStartTime(data.preferredDate, data.preferredTime, data.urgency, data.isEmergency);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
    
    const appointmentInfo = data.preferredDate && data.preferredTime 
      ? `${data.preferredDate} um ${data.preferredTime} Uhr`
      : data.preferredDate || data.preferredTime || 'Nicht angegeben';
    
    const ownershipLabel = data.ownershipType ? getOwnershipLabel(data.ownershipType) : '';
    const budgetLabel = data.budget ? getBudgetLabel(data.budget) : '';
    
    const eventDescription = `
KUNDENANFRAGE - ${urgencyLabel}

Kunde: ${data.name}
Telefon: ${data.phone}
${data.email ? `E-Mail: ${data.email}` : ''}
Adresse: ${data.address}
${ownershipLabel ? `Status: ${ownershipLabel}` : ''}
${data.accessInfo ? `Zugang: ${data.accessInfo}` : ''}

Leistungen: ${serviceLabel}
${budgetLabel ? `Budget: ${budgetLabel}` : ''}
Geschätzte Kosten: ${data.estimatedPrice || 'Vor Ort ermitteln'}

${data.description ? `Beschreibung:\n${data.description}` : ''}

Terminwunsch: ${appointmentInfo}
    `.trim();

    const event = await calendar.events.insert({
      calendarId: calendarId,
      requestBody: {
        summary: `🔧 ${data.name} - ${serviceLabel}`,
        description: eventDescription,
        location: data.address,
        start: {
          dateTime: startTime.toISOString(),
          timeZone: 'Europe/Berlin',
        },
        end: {
          dateTime: endTime.toISOString(),
          timeZone: 'Europe/Berlin',
        },
        colorId: data.isEmergency === 'akut' || data.urgency === 'sofort' ? '11' : '9',
        reminders: {
          useDefault: false,
          overrides: [
            { method: 'popup', minutes: 30 },
            { method: 'popup', minutes: 10 },
          ],
        },
      },
    });

    console.log('Calendar event created:', event.data.id);
    return event.data.id || null;
  } catch (error) {
    console.error('Failed to create calendar event:', error);
    return null;
  }
}

function getUrgencyLabel(urgency: string, isEmergency: string): string {
  if (isEmergency === 'akut') return 'NOTFALL - SOFORT';
  if (isEmergency === 'kein_wasser') return 'DRINGEND - Kein Wasser';
  
  switch (urgency) {
    case 'sofort': return 'SOFORT';
    case 'heute': return 'HEUTE';
    case 'woche': return 'Diese Woche';
    case 'dringend': return 'Dringend';
    case 'bald': return 'Bald';
    case 'flexibel': return 'Flexibel';
    default: return 'Geplant';
  }
}

function getOwnershipLabel(ownership: string): string {
  switch (ownership) {
    case 'eigentuemer': return 'Eigentümer';
    case 'mieter': return 'Mieter';
    case 'verwalter': return 'Hausverwaltung';
    case 'sonstige': return 'Sonstige';
    default: return ownership;
  }
}

function getBudgetLabel(budget: string): string {
  switch (budget) {
    case 'unter-500': return 'Unter 500 Euro';
    case '500-1500': return '500 - 1.500 Euro';
    case '1500-5000': return '1.500 - 5.000 Euro';
    case '5000-15000': return '5.000 - 15.000 Euro';
    case 'ueber-15000': return 'Über 15.000 Euro';
    case 'beratung': return 'Erstmal beraten';
    default: return budget;
  }
}

// Map service type codes to German labels for filtering calendar events by Gewerk
function getServiceLabel(serviceType: string): string {
  switch (serviceType.toLowerCase()) {
    case 'sanitaer':
    case 'sanitär':
      return 'Sanitär';
    case 'heizung':
      return 'Heizung';
    case 'bad':
      return 'Bad';
    case 'waermepumpe':
    case 'wärmepumpe':
      return 'Wärmepumpe';
    case 'haustechnik':
      return 'Haustechnik';
    default:
      return serviceType;
  }
}

// Get available time slots for a given date
export interface TimeSlot {
  time: string;
  available: boolean;
  label: string;
}

// Buffer time in minutes before and after each appointment
const BUFFER_MINUTES = 90;

// Generate a deterministic "busy" pattern based on date and week number
// 60% of slots show as busy, rotating weekly
function getSimulatedBusySlots(date: string, totalSlots: number): Set<number> {
  const dateObj = new Date(date);
  const weekNumber = Math.floor(dateObj.getTime() / (7 * 24 * 60 * 60 * 1000));
  const dayOfYear = Math.floor((dateObj.getTime() - new Date(dateObj.getFullYear(), 0, 0).getTime()) / (24 * 60 * 60 * 1000));
  
  // Use week number and day to create a rotating pattern
  const seed = (weekNumber * 7 + dateObj.getDay() + dayOfYear) % 100;
  
  const busyCount = Math.floor(totalSlots * 0.6); // 60% busy
  const busySlots = new Set<number>();
  
  // Deterministic selection of which slots are "busy" based on the seed
  for (let i = 0; i < busyCount; i++) {
    // Use a simple hash-like approach to pick slots deterministically
    const slotIndex = (seed + i * 3 + Math.floor(seed / (i + 1))) % totalSlots;
    busySlots.add(slotIndex);
  }
  
  // If we haven't reached 60%, fill in more slots
  let extraIndex = 0;
  while (busySlots.size < busyCount && extraIndex < totalSlots) {
    const nextSlot = (seed + extraIndex * 7) % totalSlots;
    busySlots.add(nextSlot);
    extraIndex++;
  }
  
  return busySlots;
}

export async function getAvailableTimeSlots(date: string, serviceType?: string): Promise<TimeSlot[]> {
  const dateObj = new Date(date);
  const dayOfWeek = dateObj.getDay();
  
  // Sunday (0) - no appointments
  if (dayOfWeek === 0) {
    return [];
  }
  
  let timeSlots: TimeSlot[];
  
  // Saturday (6): 10:00 - 15:00 (last appointment at 14:00)
  if (dayOfWeek === 6) {
    timeSlots = [
      { time: "10:00", available: true, label: "10:00 - 11:00 Uhr" },
      { time: "11:00", available: true, label: "11:00 - 12:00 Uhr" },
      { time: "12:00", available: true, label: "12:00 - 13:00 Uhr" },
      { time: "13:00", available: true, label: "13:00 - 14:00 Uhr" },
      { time: "14:00", available: true, label: "14:00 - 15:00 Uhr" },
    ];
  } else {
    // Monday-Friday: 08:00 - 17:00 (last appointment at 16:00)
    timeSlots = [
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
  
  // Apply simulated 60% busy pattern (rotating weekly)
  const busySlots = getSimulatedBusySlots(date, timeSlots.length);
  for (let i = 0; i < timeSlots.length; i++) {
    if (busySlots.has(i)) {
      timeSlots[i].available = false;
    }
  }

  // Single calendar for all services - if a slot is taken, it's blocked for all Gewerke
  const calendarId = 'primary';

  try {
    const calendar = await getUncachableGoogleCalendarClient();
    
    // Parse the date and set time boundaries for the day (including buffer from previous/next day)
    const startOfDay = new Date(date);
    startOfDay.setHours(0, 0, 0, 0);
    const endOfDay = new Date(date);
    endOfDay.setHours(23, 59, 59, 999);

    // Fetch all events for the given date from the primary calendar
    const response = await calendar.events.list({
      calendarId: calendarId,
      timeMin: startOfDay.toISOString(),
      timeMax: endOfDay.toISOString(),
      singleEvents: true,
      orderBy: 'startTime',
      timeZone: 'Europe/Berlin',
    });

    const events = response.data.items || [];
    
    // All events block all time slots regardless of service type (Gewerk)
    // One calendar for all - if a slot is taken, it's taken for everyone
    console.log(`Found ${events.length} events for date ${date}`);
    
    // Mark time slots as unavailable if they overlap with existing events
    // Including 90 minute buffer before and after each event
    for (const event of events) {
      if (event.start?.dateTime && event.end?.dateTime) {
        const eventStart = new Date(event.start.dateTime);
        const eventEnd = new Date(event.end.dateTime);
        
        // Add 90 minute buffer before and after the event
        const bufferStart = new Date(eventStart.getTime() - BUFFER_MINUTES * 60 * 1000);
        const bufferEnd = new Date(eventEnd.getTime() + BUFFER_MINUTES * 60 * 1000);
        
        for (const slot of timeSlots) {
          const [slotHour] = slot.time.split(':').map(Number);
          const slotStart = new Date(date);
          slotStart.setHours(slotHour, 0, 0, 0);
          const slotEnd = new Date(date);
          slotEnd.setHours(slotHour + 1, 0, 0, 0);
          
          // Check if slot overlaps with event + buffer zone (90 min before and after)
          if (slotStart < bufferEnd && slotEnd > bufferStart) {
            slot.available = false;
          }
        }
      }
    }
    
    // Also mark past time slots as unavailable for today
    const now = new Date();
    const today = new Date().toISOString().split('T')[0];
    if (date === today) {
      for (const slot of timeSlots) {
        const [slotHour] = slot.time.split(':').map(Number);
        if (slotHour <= now.getHours()) {
          slot.available = false;
        }
      }
    }

    return timeSlots;
  } catch (error) {
    console.error('Failed to fetch calendar events:', error);
    // Return all slots as available if calendar query fails
    return timeSlots;
  }
}

function getEventStartTime(preferredDate: string | undefined, preferredTime: string | undefined, urgency: string, isEmergency: string): Date {
  const now = new Date();
  
  if (isEmergency === 'akut' || urgency === 'sofort') {
    now.setMinutes(now.getMinutes() + 30);
    return now;
  }
  
  if (urgency === 'heute') {
    now.setHours(now.getHours() + 2);
    return now;
  }
  
  if (preferredDate && preferredTime) {
    try {
      const [hours, minutes] = preferredTime.split(':').map(Number);
      const eventDate = new Date(preferredDate);
      eventDate.setHours(hours || 9, minutes || 0, 0, 0);
      if (eventDate > now) {
        return eventDate;
      }
    } catch (e) {
      console.error('Failed to parse preferred date/time:', e);
    }
  }
  
  if (preferredDate) {
    try {
      const eventDate = new Date(preferredDate);
      eventDate.setHours(9, 0, 0, 0);
      if (eventDate > now) {
        return eventDate;
      }
    } catch (e) {
      console.error('Failed to parse preferred date:', e);
    }
  }
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0);
  return tomorrow;
}
