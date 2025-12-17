export interface Lead {
  id: number;
  name: string;
  phone: string;
  email: string;
  problem: string;
  address: string;
  urgency: string;
  source: string;
  pageUrl?: string;
  createdAt: Date;
}

export interface ContactMessage {
  id: number;
  name: string;
  email: string;
  phone?: string;
  subject: string;
  message: string;
  createdAt: Date;
}

export interface IStorage {
  createLead(lead: Omit<Lead, "id">): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: number): Promise<Lead | undefined>;
  createContactMessage(message: Omit<ContactMessage, "id" | "createdAt">): Promise<ContactMessage>;
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private contactMessages: Map<number, ContactMessage>;
  private currentId: number;
  private contactMessageId: number;

  constructor() {
    this.leads = new Map();
    this.contactMessages = new Map();
    this.currentId = 1;
    this.contactMessageId = 1;
  }

  async createLead(leadData: Omit<Lead, "id">): Promise<Lead> {
    const id = this.currentId++;
    const lead: Lead = { id, ...leadData };
    this.leads.set(id, lead);
    return lead;
  }

  async getLeads(): Promise<Lead[]> {
    return Array.from(this.leads.values()).sort(
      (a, b) => b.createdAt.getTime() - a.createdAt.getTime()
    );
  }

  async getLeadById(id: number): Promise<Lead | undefined> {
    return this.leads.get(id);
  }

  async createContactMessage(messageData: Omit<ContactMessage, "id" | "createdAt">): Promise<ContactMessage> {
    const id = this.contactMessageId++;
    const message: ContactMessage = { 
      id, 
      ...messageData, 
      createdAt: new Date() 
    };
    this.contactMessages.set(id, message);
    return message;
  }
}

export const storage = new MemStorage();
