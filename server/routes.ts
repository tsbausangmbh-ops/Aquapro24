import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";
import { createCalendarEvent } from "./googleCalendar";

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
}
