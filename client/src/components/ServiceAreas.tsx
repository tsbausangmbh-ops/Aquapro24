import { MapPin, Clock, Phone, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Link } from "wouter";

interface ServiceAreasProps {
  serviceName: string;
  highlightAreas?: string[];
}

const MUNICH_AREAS = [
  { name: "Schwabing", time: "15 Min", slug: "schwabing" },
  { name: "Bogenhausen", time: "20 Min", slug: "bogenhausen" },
  { name: "Sendling", time: "18 Min", slug: "sendling" },
  { name: "Pasing", time: "25 Min", slug: "pasing" },
  { name: "Maxvorstadt", time: "12 Min", slug: "maxvorstadt" },
  { name: "Haidhausen", time: "15 Min", slug: "haidhausen" },
  { name: "Neuhausen", time: "20 Min", slug: "neuhausen" },
  { name: "Laim", time: "22 Min", slug: "laim" },
  { name: "Giesing", time: "18 Min", slug: "giesing" },
  { name: "Trudering", time: "25 Min", slug: "trudering" },
  { name: "Milbertshofen", time: "20 Min", slug: "milbertshofen" },
  { name: "Moosach", time: "22 Min", slug: "moosach" },
  { name: "Nymphenburg", time: "18 Min", slug: "nymphenburg" },
  { name: "Perlach", time: "22 Min", slug: "perlach" },
  { name: "Solln", time: "20 Min", slug: "solln" },
  { name: "Hadern", time: "20 Min", slug: "hadern" },
  { name: "Allach", time: "25 Min", slug: "allach" },
  { name: "Aubing", time: "28 Min", slug: "aubing" },
  { name: "Feldmoching", time: "25 Min", slug: "feldmoching" },
  { name: "Thalkirchen", time: "18 Min", slug: "thalkirchen" },
  { name: "Ramersdorf", time: "20 Min", slug: "ramersdorf" },
  { name: "Berg am Laim", time: "18 Min", slug: "berg-am-laim" },
  { name: "Schwanthalerhöhe", time: "12 Min", slug: "schwanthalerhoehe" },
  { name: "Au", time: "15 Min", slug: "au" },
  { name: "Lehel", time: "12 Min", slug: "lehel" },
  { name: "Freimann", time: "22 Min", slug: "freimann" },
];

const MUNICH_REGIONS = [
  { name: "München Nord", slug: "muenchen-nord" },
  { name: "München Süd", slug: "muenchen-sued" },
  { name: "München West", slug: "muenchen-west" },
  { name: "München Ost", slug: "muenchen-ost" },
];

export default function ServiceAreas({ serviceName, highlightAreas = [] }: ServiceAreasProps) {
  return (
    <section className="py-6 bg-secondary/5" data-testid="section-service-areas">
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
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 mb-4">
              {MUNICH_REGIONS.map((region) => (
                <Link 
                  key={region.name}
                  href={`/${region.slug}`}
                  className="p-2 rounded-lg border bg-primary/10 border-primary/30 hover-elevate cursor-pointer block text-center"
                  data-testid={`region-${region.slug}`}
                >
                  <span className="font-medium text-sm">{region.name}</span>
                </Link>
              ))}
            </div>
            <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
              {MUNICH_AREAS.map((area) => (
                <Link 
                  key={area.name}
                  href={`/${area.slug}`}
                  className={`p-2 rounded-lg border hover-elevate cursor-pointer block ${
                    highlightAreas.includes(area.name) 
                      ? "bg-primary/10 border-primary/30" 
                      : "bg-background"
                  }`}
                  data-testid={`area-${area.name.toLowerCase().replace(/\s+/g, '-')}`}
                >
                  <div className="flex items-center justify-between gap-1">
                    <span className="font-medium text-xs">{area.name}</span>
                    <ArrowRight className="w-3 h-3 text-muted-foreground shrink-0" />
                  </div>
                  <div className="flex items-center gap-1 text-xs text-muted-foreground mt-1">
                    <Clock className="w-3 h-3 shrink-0" />
                    <span>{area.time}</span>
                  </div>
                </Link>
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
                <span><strong>Lokale Fachbetriebe</strong> - Wir kennen München und seine Gebäudestrukturen</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="w-6 h-6 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 flex items-center justify-center text-xs font-bold shrink-0">2</span>
                <span><strong>Schnelle Anfahrt ab 60 Minuten</strong> im Stadtgebiet München</span>
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
              <a href="tel:+4915212274043">
                <Button variant="secondary" className="w-full" data-testid="button-call-service-area">
                  <Phone className="w-4 h-4 mr-2" />
                  Jetzt anrufen: 0152 12274043
                </Button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
