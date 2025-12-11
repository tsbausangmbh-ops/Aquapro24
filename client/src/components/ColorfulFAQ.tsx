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
  LucideIcon
} from "lucide-react";

interface FAQItem {
  question: string;
  answer: string;
  icon?: LucideIcon;
  color?: string;
  lightBg?: string;
  borderColor?: string;
}

const colorPalette = [
  { color: "bg-blue-500", lightBg: "bg-blue-50 dark:bg-blue-950/30", borderColor: "border-blue-200 dark:border-blue-800" },
  { color: "bg-emerald-500", lightBg: "bg-emerald-50 dark:bg-emerald-950/30", borderColor: "border-emerald-200 dark:border-emerald-800" },
  { color: "bg-cyan-500", lightBg: "bg-cyan-50 dark:bg-cyan-950/30", borderColor: "border-cyan-200 dark:border-cyan-800" },
  { color: "bg-violet-500", lightBg: "bg-violet-50 dark:bg-violet-950/30", borderColor: "border-violet-200 dark:border-violet-800" },
  { color: "bg-orange-500", lightBg: "bg-orange-50 dark:bg-orange-950/30", borderColor: "border-orange-200 dark:border-orange-800" },
  { color: "bg-teal-500", lightBg: "bg-teal-50 dark:bg-teal-950/30", borderColor: "border-teal-200 dark:border-teal-800" },
  { color: "bg-rose-500", lightBg: "bg-rose-50 dark:bg-rose-950/30", borderColor: "border-rose-200 dark:border-rose-800" },
  { color: "bg-amber-500", lightBg: "bg-amber-50 dark:bg-amber-950/30", borderColor: "border-amber-200 dark:border-amber-800" },
  { color: "bg-indigo-500", lightBg: "bg-indigo-50 dark:bg-indigo-950/30", borderColor: "border-indigo-200 dark:border-indigo-800" },
  { color: "bg-lime-500", lightBg: "bg-lime-50 dark:bg-lime-950/30", borderColor: "border-lime-200 dark:border-lime-800" },
];

const defaultIcons = [HelpCircle, Wrench, Shield, Clock, CheckCircle2, Droplets, ThermometerSun, Flame, Leaf, ShowerHead];

interface ColorfulFAQProps {
  items: FAQItem[];
  title?: string;
  columns?: 2 | 3 | 4;
}

export default function ColorfulFAQ({ items, title = "Häufige Fragen", columns = 2 }: ColorfulFAQProps) {
  const getColumnClass = () => {
    switch (columns) {
      case 2: return "md:grid-cols-2";
      case 3: return "md:grid-cols-2 lg:grid-cols-3";
      case 4: return "md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4";
      default: return "md:grid-cols-2";
    }
  };

  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        {title && (
          <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">{title}</h2>
        )}
        <div className={`grid ${getColumnClass()} gap-5`}>
          {items.map((faq, index) => {
            const palette = colorPalette[index % colorPalette.length];
            const Icon = faq.icon || defaultIcons[index % defaultIcons.length];
            const color = faq.color || palette.color;
            const lightBg = faq.lightBg || palette.lightBg;
            const borderColor = faq.borderColor || palette.borderColor;
            
            return (
              <div 
                key={index} 
                className={`${lightBg} ${borderColor} border rounded-lg p-5 transition-all duration-200`}
                data-testid={`faq-card-${index}`}
              >
                <div className="flex items-start gap-3 mb-3">
                  <div className={`${color} w-9 h-9 rounded-lg flex items-center justify-center flex-shrink-0`}>
                    <Icon className="w-4 h-4 text-white" />
                  </div>
                  <h3 className="font-semibold text-base leading-tight">{faq.question}</h3>
                </div>
                <p className="text-sm text-muted-foreground leading-relaxed">{faq.answer}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
