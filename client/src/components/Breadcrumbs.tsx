import { Link } from "wouter";
import { ChevronRight, Home } from "lucide-react";

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
}

export default function Breadcrumbs({ items }: BreadcrumbsProps) {
  return (
    <nav 
      aria-label="Breadcrumb" 
      className="bg-muted/50 border-b border-border"
    >
      <div className="max-w-7xl mx-auto px-4 lg:px-8 py-3">
        <ol 
          className="flex flex-wrap items-center gap-1 text-sm"
          itemScope 
          itemType="https://schema.org/BreadcrumbList"
        >
          <li 
            className="flex items-center"
            itemProp="itemListElement" 
            itemScope 
            itemType="https://schema.org/ListItem"
          >
            <Link 
              href="/" 
              className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
              itemProp="item"
            >
              <Home className="w-4 h-4" aria-hidden="true" />
              <span itemProp="name">Start</span>
            </Link>
            <meta itemProp="position" content="1" />
          </li>
          
          {items.map((item, index) => (
            <li 
              key={index}
              className="flex items-center"
              itemProp="itemListElement" 
              itemScope 
              itemType="https://schema.org/ListItem"
            >
              <ChevronRight className="w-4 h-4 text-muted-foreground mx-1" aria-hidden="true" />
              {item.href ? (
                <Link 
                  href={item.href}
                  className="text-muted-foreground hover:text-foreground transition-colors"
                  itemProp="item"
                >
                  <span itemProp="name">{item.label}</span>
                </Link>
              ) : (
                <span 
                  className="text-foreground font-medium"
                  itemProp="name"
                  aria-current="page"
                >
                  {item.label}
                </span>
              )}
              <meta itemProp="position" content={String(index + 2)} />
            </li>
          ))}
        </ol>
      </div>
    </nav>
  );
}
