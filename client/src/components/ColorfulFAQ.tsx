import { 
  Clock, 
  Wrench, 
  Shield, 
  CreditCard, 
  MapPin, 
  CheckCircle2,
  Droplets,
  ThermometerSun,
  Flame,
  Leaf,
  ShowerHead,
  Sparkles,
  FileText,
  HelpCircle,
  BadgeEuro,
  Phone,
  LucideIcon
} from "lucide-react";
import { Badge } from "@/components/ui/badge";

interface FAQItem {
  question: string;
  answer: string;
  icon?: LucideIcon;
  color?: string;
  lightBg?: string;
  borderColor?: string;
}

const colorPalette = [
  { color: "bg-blue-600", lightBg: "bg-blue-50 dark:bg-blue-950/40", borderColor: "border-blue-200 dark:border-blue-800/50", iconBg: "bg-blue-100 dark:bg-blue-900/50" },
  { color: "bg-emerald-600", lightBg: "bg-emerald-50 dark:bg-emerald-950/40", borderColor: "border-emerald-200 dark:border-emerald-800/50", iconBg: "bg-emerald-100 dark:bg-emerald-900/50" },
  { color: "bg-orange-500", lightBg: "bg-orange-50 dark:bg-orange-950/40", borderColor: "border-orange-200 dark:border-orange-800/50", iconBg: "bg-orange-100 dark:bg-orange-900/50" },
  { color: "bg-violet-600", lightBg: "bg-violet-50 dark:bg-violet-950/40", borderColor: "border-violet-200 dark:border-violet-800/50", iconBg: "bg-violet-100 dark:bg-violet-900/50" },
  { color: "bg-cyan-600", lightBg: "bg-cyan-50 dark:bg-cyan-950/40", borderColor: "border-cyan-200 dark:border-cyan-800/50", iconBg: "bg-cyan-100 dark:bg-cyan-900/50" },
  { color: "bg-rose-500", lightBg: "bg-rose-50 dark:bg-rose-950/40", borderColor: "border-rose-200 dark:border-rose-800/50", iconBg: "bg-rose-100 dark:bg-rose-900/50" },
  { color: "bg-teal-600", lightBg: "bg-teal-50 dark:bg-teal-950/40", borderColor: "border-teal-200 dark:border-teal-800/50", iconBg: "bg-teal-100 dark:bg-teal-900/50" },
  { color: "bg-amber-500", lightBg: "bg-amber-50 dark:bg-amber-950/40", borderColor: "border-amber-200 dark:border-amber-800/50", iconBg: "bg-amber-100 dark:bg-amber-900/50" },
];

const defaultIcons = [BadgeEuro, Clock, Wrench, Shield, MapPin, Phone, CheckCircle2, HelpCircle];

interface ColorfulFAQProps {
  items: FAQItem[];
  title?: string;
  subtitle?: string;
  columns?: 2 | 3 | 4;
}

export default function ColorfulFAQ({ items, title = "Häufige Fragen", subtitle, columns = 2 }: ColorfulFAQProps) {
  const getColumnClass = () => {
    switch (columns) {
      case 2: return "md:grid-cols-2";
      case 3: return "md:grid-cols-2 lg:grid-cols-3";
      case 4: return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default: return "md:grid-cols-2";
    }
  };

  return (
    <section className="py-8 lg:py-12" data-testid="section-colorful-faq">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <div className="text-center mb-10">
          <Badge variant="outline" className="mb-4 gap-1">
            <HelpCircle className="w-3 h-3" />
            Häufige Fragen
          </Badge>
          {title && (
            <h2 className="text-2xl md:text-xl sm:text-2xl lg:text-4xl font-bold mb-3">{title}</h2>
          )}
          {subtitle && (
            <p className="text-muted-foreground text-lg max-w-2xl mx-auto">{subtitle}</p>
          )}
        </div>
        
        <div className={`grid ${getColumnClass()} gap-4 lg:gap-6`}>
          {items.map((faq, index) => {
            const palette = colorPalette[index % colorPalette.length];
            const Icon = faq.icon || defaultIcons[index % defaultIcons.length];
            const color = faq.color || palette.color;
            const lightBg = faq.lightBg || palette.lightBg;
            const borderColor = faq.borderColor || palette.borderColor;
            
            return (
              <div 
                key={index} 
                className={`${lightBg} ${borderColor} border rounded-xl p-5 lg:p-6 transition-all duration-200 hover:shadow-md group`}
                data-testid={`faq-card-${index}`}
              >
                <div className="flex items-start gap-4 mb-3">
                  <div className={`${color} w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 shadow-sm group-hover:scale-105 transition-transform`}>
                    <Icon className="w-5 h-5 text-white" />
                  </div>
                  <h3 className="font-bold text-base lg:text-lg leading-snug pt-1">{faq.question}</h3>
                </div>
                <p className="text-sm lg:text-base text-muted-foreground leading-relaxed pl-14">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
