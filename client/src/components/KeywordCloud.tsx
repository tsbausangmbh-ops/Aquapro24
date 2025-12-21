interface KeywordCloudProps {
  keywords: string[];
  className?: string;
  variant?: "hero" | "section";
}

export function KeywordCloud({ keywords, className = "", variant = "hero" }: KeywordCloudProps) {
  // Keywords sind für SEO im HTML vorhanden, aber visuell unsichtbar (sr-only)
  return (
    <div className="sr-only" aria-hidden="true" data-testid="keyword-cloud">
      {keywords.map((keyword, index) => (
        <span key={index} data-testid={`keyword-${index}`}>
          {keyword}
        </span>
      ))}
    </div>
  );
}
