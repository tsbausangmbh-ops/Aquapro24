import { Link } from "wouter";
import { ArrowRight } from "lucide-react";

interface LinkItem {
  href: string;
  text: string;
  description?: string;
}

interface InternalLinksProps {
  title?: string;
  links: LinkItem[];
  variant?: "cards" | "inline" | "footer-cta";
}

export default function InternalLinks({ title, links, variant = "cards" }: InternalLinksProps) {
  if (variant === "inline") {
    return (
      <div className="py-6" data-testid="internal-links-inline">
        {title && <h3 className="text-lg font-semibold mb-3">{title}</h3>}
        <div className="flex flex-wrap gap-2">
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="inline-flex items-center gap-1 text-primary hover:underline font-medium"
              data-testid={`link-internal-${link.href.replace(/\//g, '')}`}
            >
              {link.text}
              <ArrowRight className="w-3 h-3" />
            </Link>
          ))}
        </div>
      </div>
    );
  }

  if (variant === "footer-cta") {
    return (
      <section className="py-10 bg-muted/30" data-testid="internal-links-cta">
        <div className="max-w-7xl mx-auto px-4">
          {title && <h2 className="text-2xl font-bold mb-6 text-center">{title}</h2>}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {links.map((link) => (
              <Link key={link.href} href={link.href}>
                <div className="p-4 rounded-md border bg-card hover-elevate cursor-pointer" data-testid={`link-cta-${link.href.replace(/\//g, '')}`}>
                  <span className="font-semibold text-foreground">{link.text}</span>
                  {link.description && (
                    <p className="text-sm text-muted-foreground mt-1">{link.description}</p>
                  )}
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-8" data-testid="internal-links-cards">
      <div className="max-w-7xl mx-auto px-4">
        {title && <h2 className="text-xl font-bold mb-4">{title}</h2>}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3">
          {links.map((link) => (
            <Link key={link.href} href={link.href}>
              <div className="flex items-center gap-2 p-3 rounded-md border bg-card hover-elevate cursor-pointer" data-testid={`link-card-${link.href.replace(/\//g, '')}`}>
                <ArrowRight className="w-4 h-4 text-primary shrink-0" />
                <div>
                  <span className="font-medium text-foreground">{link.text}</span>
                  {link.description && (
                    <p className="text-xs text-muted-foreground">{link.description}</p>
                  )}
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
