import { MapPin, Clock, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";

interface ServiceAreasProps {
  serviceName: string;
  highlightAreas?: string[];
}

const MUNICH_AREAS = [
  { name: "Schwabing", time: "15 Min" },
  { name: "Bogenhausen", time: "20 Min" },
  { name: "Sendling", time: "18 Min" },
  { name: "Pasing", time: "25 Min" },
  { name: "Maxvorstadt", time: "12 Min" },
  { name: "Haidhausen", time: "15 Min" },
  { name: "Neuhausen", time: "20 Min" },
  { name: "Laim", time: "22 Min" },
  { name: "Giesing", time: "18 Min" },
  { name: "Trudering", time: "25 Min" },
  { name: "Milbertshofen", time: "20 Min" },
  { name: "Moosach", time: "22 Min" },
];

export default function ServiceAreas({ serviceName, highlightAreas = [] }: ServiceAreasProps) {
  return (
    <section className="py-10 bg-secondary/5" data-testid="section-service-areas">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-5">
          <h2 className="text-2xl md:text-3xl font-bold mb-3">
            {serviceName} in München & Umgebung
          </h2>
          <p className="text-muted-foreground max-w-2xl mx-auto">
            Schnelle Anfahrt in alle Münchner Stadtteile. Unser Notdienst ist rund um die Uhr für Sie da - 
            auch an Wochenenden und Feiertagen.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6 items-start">
          <div>
            <h3 className="font-semibold text-lg mb-4 flex items-center gap-2">
              <MapPin className="w-5 h-5 text-primary" />
              Unsere Einsatzgebiete
            </h3>
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
              {MUNICH_AREAS.map((area) => (
                <div 
                  key={area.name}
                  className={`p-3 rounded-lg border ${
                    highlightAreas.includes(area.name) 
                      ? "bg-primary/10 border-primary/30" 
                      : "bg-background"
                  }`}
                  data-testid={`area-${area.name.toLowerCase()}`}
                >
                  <span className="font-medium text-sm">{area.name}</span>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3" />
                    <span>ca. {area.time}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-background rounded-lg border p-6">
            <h3 className="font-semibold text-lg mb-4">
              Warum Kunden in München uns vertrauen
            </h3>
            <ul className="space-y-3 text-sm">
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">1</span>
                <span><strong>Lokales Partnernetzwerk seit 2005</strong> - Wir kennen München und seine Gebäudestrukturen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span><strong>Garantierte Anfahrt unter 45 Minuten</strong> im Stadtgebiet München</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">3</span>
                <span><strong>Transparente Festpreise</strong> - Keine versteckten Kosten, faire Abrechnung</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">4</span>
                <span><strong>847+ zufriedene Münchner Kunden</strong> mit durchschnittlich 4.9 Sternen</span>
              </li>
            </ul>
            
            <div className="mt-6 pt-4 border-t">
              <a href="tel:+4989123456789">
                <Button variant="secondary" className="w-full" data-testid="button-call-service-area">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen: 089 123 456 789
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
