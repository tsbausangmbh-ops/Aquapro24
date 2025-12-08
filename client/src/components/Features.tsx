import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { 
  MessageSquare, 
  Globe2, 
  BarChart3, 
  Workflow,
  Languages,
  Plug,
  Clock,
  Target
} from "lucide-react";

const features = [
  {
    icon: MessageSquare,
    title: "Multi-Channel-Integration",
    description: "Verbinde deinen Chatbot mit Website, WhatsApp, Messenger und Instagram.",
    highlights: ["Website Widget", "WhatsApp Business", "Facebook Messenger", "Instagram DMs"],
  },
  {
    icon: Clock,
    title: "24/7 Verfügbarkeit",
    description: "Dein Chatbot arbeitet rund um die Uhr, auch an Wochenenden und Feiertagen.",
    highlights: ["Keine Wartezeiten", "Sofortige Antworten", "Globale Zeitzonen", "Skalierbar"],
  },
  {
    icon: Target,
    title: "Lead-Qualifizierung",
    description: "Automatisches Scoring und Qualifizierung von Leads für dein Vertriebsteam.",
    highlights: ["Lead Scoring", "Automatische Segmentierung", "CRM-Übergabe", "Follow-up Trigger"],
  },
  {
    icon: Plug,
    title: "CRM-Integration",
    description: "Nahtlose Verbindung mit Salesforce, HubSpot, Pipedrive und mehr.",
    highlights: ["Salesforce", "HubSpot", "Pipedrive", "Zapier/Make"],
  },
  {
    icon: Languages,
    title: "Mehrsprachig",
    description: "Automatische Spracherkennung und Antworten in über 50 Sprachen.",
    highlights: ["50+ Sprachen", "Auto-Erkennung", "Kulturelle Anpassung", "Lokalisierung"],
  },
  {
    icon: BarChart3,
    title: "Analytics Dashboard",
    description: "Echtzeit-Einblicke in Gespräche, Conversions und Nutzerverhalten.",
    highlights: ["Echtzeit-Metriken", "Conversion Tracking", "A/B-Testing", "Heatmaps"],
  },
];

const stats = [
  { value: "95%", label: "Kundenzufriedenheit" },
  { value: "70%", label: "Kostenreduktion" },
  { value: "<3s", label: "Antwortzeit" },
  { value: "24/7", label: "Verfügbarkeit" },
];

export default function Features() {
  return (
    <section id="features" className="py-16 lg:py-24">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl lg:text-5xl font-bold tracking-tight mb-4">
            Alles was du brauchst, in einer Plattform
          </h2>
          <p className="text-lg text-muted-foreground">
            Umfassende Features für erstklassigen Kundenservice und Lead-Generierung.
          </p>
        </div>
        
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {features.map((feature, index) => (
            <Card key={index} className="group hover-elevate">
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-secondary/10 flex items-center justify-center mb-4 group-hover:bg-secondary/20 transition-colors">
                  <feature.icon className="w-6 h-6 text-secondary" />
                </div>
                <CardTitle className="text-xl" data-testid={`text-feature-title-${index}`}>{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-4">{feature.description}</p>
                <div className="flex flex-wrap gap-2">
                  {feature.highlights.map((highlight, i) => (
                    <span 
                      key={i} 
                      className="text-xs px-2 py-1 bg-muted rounded-md text-muted-foreground"
                    >
                      {highlight}
                    </span>
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="text-center p-6 bg-card rounded-lg border border-card-border"
            >
              <p className="text-3xl lg:text-4xl font-bold text-secondary mb-1" data-testid={`text-stat-${index}`}>
                {stat.value}
              </p>
              <p className="text-sm text-muted-foreground">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
