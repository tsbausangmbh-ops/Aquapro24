import { Badge } from "@/components/ui/badge";

interface KeywordCloudProps {
  keywords: string[];
  className?: string;
  variant?: "hero" | "section";
}

export function KeywordCloud({ keywords, className = "", variant = "hero" }: KeywordCloudProps) {
  if (variant === "hero") {
    return (
      <div className={`flex flex-wrap gap-1.5 mt-4 ${className}`} data-testid="keyword-cloud">
        {keywords.map((keyword, index) => (
          <span
            key={index}
            className="inline-flex items-center px-2 py-0.5 text-xs font-medium rounded-md bg-white/10 text-white/80 border border-white/20"
            data-testid={`keyword-${index}`}
          >
            {keyword}
          </span>
        ))}
      </div>
    );
  }

  return (
    <div className={`flex flex-wrap gap-1.5 ${className}`} data-testid="keyword-cloud">
      {keywords.map((keyword, index) => (
        <Badge
          key={index}
          variant="secondary"
          className="text-xs font-normal"
          data-testid={`keyword-${index}`}
        >
          {keyword}
        </Badge>
      ))}
    </div>
  );
}
