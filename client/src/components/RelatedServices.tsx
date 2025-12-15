import { Link } from "wouter";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { ArrowRight, Droplets, Bath, Flame, Thermometer, Home } from "lucide-react";

interface Service {
  slug: string;
  title: string;
  shortDescription: string;
  icon: typeof Droplets;
  color: string;
}

const allServices: Service[] = [
  {
    slug: "sanitaer",
    title: "Sanitär & Installation",
    shortDescription: "Wasserinstallation, Rohrbruch, Armaturen",
    icon: Droplets,
    color: "bg-secondary"
  },
  {
    slug: "bad",
    title: "Badsanierung",
    shortDescription: "Komplettsanierung, barrierefreies Bad",
    icon: Bath,
    color: "bg-cyan-600"
  },
  {
    slug: "heizung",
    title: "Heizung & Wartung",
    shortDescription: "Heizungsinstallation, Reparatur, Wartung",
    icon: Flame,
    color: "bg-destructive"
  },
  {
    slug: "waermepumpe",
    title: "Wärmepumpe",
    shortDescription: "Installation, Förderung, Beratung",
    icon: Thermometer,
    color: "bg-orange-500"
  },
  {
    slug: "haustechnik",
    title: "Haustechnik",
    shortDescription: "Elektrik, Klimaanlage, Smart Home",
    icon: Home,
    color: "bg-emerald-600"
  }
];

interface RelatedServicesProps {
  currentService: "sanitaer" | "bad" | "heizung" | "waermepumpe" | "haustechnik";
}

export default function RelatedServices({ currentService }: RelatedServicesProps) {
  const relatedServices = allServices.filter(s => s.slug !== currentService);
  
  return (
    <section className="py-8 bg-muted/30">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-6">
          <h2 className="text-2xl font-bold mb-2">Weitere Leistungen</h2>
          <p className="text-muted-foreground">
            Entdecken Sie unser komplettes Angebot für Ihr Zuhause
          </p>
        </div>
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {relatedServices.map((service) => (
            <Link key={service.slug} href={`/${service.slug}`}>
              <Card className="h-full hover-elevate cursor-pointer group">
                <CardContent className="p-4">
                  <div className="flex items-start gap-3">
                    <div className={`w-10 h-10 rounded-lg ${service.color} flex items-center justify-center flex-shrink-0`}>
                      <service.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1 min-w-0">
                      <h3 className="font-semibold text-sm mb-1 group-hover:text-primary transition-colors">
                        {service.title}
                      </h3>
                      <p className="text-xs text-muted-foreground line-clamp-2">
                        {service.shortDescription}
                      </p>
                    </div>
                    <ArrowRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors flex-shrink-0 mt-1" />
                  </div>
                </CardContent>
              </Card>
            </Link>
          ))}
        </div>
        <div className="text-center mt-6">
          <Badge variant="outline" className="text-xs">
            Alle Leistungen auch als Kombi-Angebot verfügbar
          </Badge>
        </div>
      </div>
    </section>
  );
}
