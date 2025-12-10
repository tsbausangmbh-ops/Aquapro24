import type { Express } from "express";
import type { Server } from "http";
import { storage } from "./storage";

export async function registerRoutes(server: Server, app: Express): Promise<void> {
  app.post("/api/leads", async (req, res) => {
    try {
      const leadData = req.body;
      
      const lead = await storage.createLead({
        name: leadData.name,
        phone: leadData.phone,
        email: leadData.email,
        problem: leadData.problem,
        address: leadData.address,
        urgency: leadData.urgency,
        source: leadData.source || "website",
        pageUrl: leadData.page_url,
        createdAt: new Date(),
      });
      
      res.json({ success: true, id: lead.id });
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
