import { Award, Clock, Shield, Star, MapPin, Users } from "lucide-react";

const trustItems = [
  {
    icon: Award,
    title: "Meisterbetrieb",
    subtitle: "Seit 2005",
  },
  {
    icon: Clock,
    title: "In 30 Min. da",
    subtitle: "Wenn Sie uns rufen",
  },
  {
    icon: Shield,
    title: "Festpreis",
    subtitle: "Keine Überraschungen",
  },
  {
    icon: Star,
    title: "4.9 Sterne",
    subtitle: "Google Bewertung",
  },
  {
    icon: MapPin,
    title: "Lokal",
    subtitle: "Echte Münchner",
  },
  {
    icon: Users,
    title: "SHK-Innung",
    subtitle: "Zertifiziert",
  },
];

export default function TrustBar() {
  return (
    <section className="py-4 bg-primary text-primary-foreground">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {trustItems.map((item, index) => (
            <div 
              key={index} 
              className="flex items-center gap-3 justify-center md:justify-start"
            >
              <div className="w-10 h-10 rounded-lg bg-primary-foreground/20 flex items-center justify-center flex-shrink-0">
                <item.icon className="w-5 h-5 text-primary-foreground" />
              </div>
              <div>
                <p className="font-semibold text-sm" data-testid={`text-trust-${index}`}>{item.title}</p>
                <p className="text-xs text-primary-foreground/70">{item.subtitle}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
