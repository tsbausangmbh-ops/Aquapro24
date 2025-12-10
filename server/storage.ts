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

export interface IStorage {
  createLead(lead: Omit<Lead, "id">): Promise<Lead>;
  getLeads(): Promise<Lead[]>;
  getLeadById(id: number): Promise<Lead | undefined>;
}

export class MemStorage implements IStorage {
  private leads: Map<number, Lead>;
  private currentId: number;

  constructor() {
    this.leads = new Map();
    this.currentId = 1;
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
}

export const storage = new MemStorage();
