// Google Calendar Integration for Replit
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
  preferredTime?: string;
  estimatedPrice?: string;
}

export async function createCalendarEvent(data: CalendarEventData): Promise<string | null> {
  try {
    const calendar = await getUncachableGoogleCalendarClient();
    
    const serviceLabel = data.serviceTypes.join(', ') || 'Sanitär-Anfrage';
    const urgencyLabel = getUrgencyLabel(data.urgency, data.isEmergency);
    
    const startTime = getEventStartTime(data.preferredTime, data.urgency, data.isEmergency);
    const endTime = new Date(startTime.getTime() + 60 * 60 * 1000);
    
    const eventDescription = `
KUNDENANFRAGE - ${urgencyLabel}

Kunde: ${data.name}
Telefon: ${data.phone}
${data.email ? `E-Mail: ${data.email}` : ''}
Adresse: ${data.address}

Leistungen: ${serviceLabel}
Geschätzte Kosten: ${data.estimatedPrice || 'Vor Ort ermitteln'}

${data.description ? `Beschreibung:\n${data.description}` : ''}

Terminwunsch: ${data.preferredTime || 'Nicht angegeben'}
    `.trim();

    const event = await calendar.events.insert({
      calendarId: 'primary',
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
    default: return 'Geplant';
  }
}

function getEventStartTime(preferredTime: string | undefined, urgency: string, isEmergency: string): Date {
  const now = new Date();
  
  if (isEmergency === 'akut' || urgency === 'sofort') {
    now.setMinutes(now.getMinutes() + 30);
    return now;
  }
  
  if (urgency === 'heute') {
    now.setHours(now.getHours() + 2);
    return now;
  }
  
  const tomorrow = new Date();
  tomorrow.setDate(tomorrow.getDate() + 1);
  tomorrow.setHours(9, 0, 0, 0);
  return tomorrow;
}
