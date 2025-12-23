import { Link } from "wouter";

interface KeywordLink {
  keyword: string;
  href: string;
}

interface KeywordLinksProps {
  currentPage: string;
}

const keywordMappings: Record<string, KeywordLink[]> = {
  sanitaer: [
    { keyword: "Rohrreinigung", href: "/rohrreinigung" },
    { keyword: "Armaturen", href: "/armaturen" },
    { keyword: "Badsanierung", href: "/bad" },
    { keyword: "24h Notdienst", href: "/notdienst-muenchen" },
    { keyword: "Warmwasser", href: "/warmwasser" },
    { keyword: "Heizung", href: "/heizung" },
    { keyword: "Termin buchen", href: "/termin" },
  ],
  heizung: [
    { keyword: "Wärmepumpe", href: "/waermepumpe" },
    { keyword: "Fußbodenheizung", href: "/fussbodenheizung-muenchen" },
    { keyword: "BAFA Förderung", href: "/foerderung" },
    { keyword: "24h Notdienst", href: "/heizung-notdienst-24" },
    { keyword: "Haustechnik", href: "/haustechnik" },
    { keyword: "Sanitär", href: "/sanitaer" },
    { keyword: "Förderantrag", href: "/foerderantrag-heizung" },
  ],
  bad: [
    { keyword: "Sanitär Installation", href: "/sanitaer" },
    { keyword: "Armaturen Montage", href: "/armaturen" },
    { keyword: "KfW Förderung", href: "/foerderung" },
    { keyword: "Warmwasser", href: "/warmwasser" },
    { keyword: "Fußbodenheizung", href: "/fussbodenheizung-muenchen" },
    { keyword: "Termin vereinbaren", href: "/termin" },
    { keyword: "Förderrechner", href: "/foerderrechner" },
  ],
  waermepumpe: [
    { keyword: "BAFA bis 70%", href: "/foerderung" },
    { keyword: "Förderantrag", href: "/foerderantrag-heizung" },
    { keyword: "Fußbodenheizung", href: "/fussbodenheizung-muenchen" },
    { keyword: "Heizung tauschen", href: "/heizung" },
    { keyword: "Förderrechner", href: "/foerderrechner" },
    { keyword: "Haustechnik", href: "/haustechnik" },
  ],
  rohrreinigung: [
    { keyword: "Sanitär Notdienst", href: "/sanitaer-notdienst-24" },
    { keyword: "Klempner München", href: "/sanitaer" },
    { keyword: "Armaturen", href: "/armaturen" },
    { keyword: "Notdienst 24h", href: "/notdienst-muenchen" },
  ],
  armaturen: [
    { keyword: "Sanitär Installation", href: "/sanitaer" },
    { keyword: "Badsanierung", href: "/bad" },
    { keyword: "Warmwasser Systeme", href: "/warmwasser" },
    { keyword: "Termin online", href: "/termin" },
  ],
  warmwasser: [
    { keyword: "Heizung", href: "/heizung" },
    { keyword: "Sanitär", href: "/sanitaer" },
    { keyword: "Wärmepumpe", href: "/waermepumpe" },
    { keyword: "Haustechnik", href: "/haustechnik" },
    { keyword: "Notdienst", href: "/notdienst-muenchen" },
  ],
  haustechnik: [
    { keyword: "Heizungssysteme", href: "/heizung" },
    { keyword: "Sanitär", href: "/sanitaer" },
    { keyword: "Wärmepumpe", href: "/waermepumpe" },
    { keyword: "Fußbodenheizung", href: "/fussbodenheizung-muenchen" },
    { keyword: "Förderung", href: "/foerderung" },
  ],
  foerderung: [
    { keyword: "Wärmepumpe Installation", href: "/waermepumpe" },
    { keyword: "Heizungstausch", href: "/heizung" },
    { keyword: "Förderantrag stellen", href: "/foerderantrag-heizung" },
    { keyword: "Förderrechner", href: "/foerderrechner" },
    { keyword: "Badsanierung", href: "/bad" },
    { keyword: "Fußbodenheizung", href: "/fussbodenheizung-muenchen" },
  ],
  notdienst: [
    { keyword: "Sanitär Notdienst", href: "/sanitaer-notdienst-24" },
    { keyword: "Heizung Notdienst", href: "/heizung-notdienst-24" },
    { keyword: "Rohrreinigung", href: "/rohrreinigung" },
    { keyword: "Klempner", href: "/sanitaer" },
    { keyword: "Heizungsreparatur", href: "/heizung" },
  ],
};

export default function KeywordLinks({ currentPage }: KeywordLinksProps) {
  const links = keywordMappings[currentPage] || [];
  
  if (links.length === 0) return null;

  return (
    <section className="py-6 bg-muted/20 border-t border-b border-border">
      <div className="max-w-7xl mx-auto px-4 lg:px-8">
        <p className="text-sm text-muted-foreground mb-3">
          <span className="font-medium">Weitere Themen:</span>
        </p>
        <div className="flex flex-wrap gap-2">
          {links.map((link, index) => (
            <Link
              key={index}
              href={link.href}
              className="inline-flex items-center px-3 py-1.5 rounded-full text-sm bg-background border border-border hover:border-primary hover:text-primary transition-colors"
              data-testid={`keyword-link-${link.keyword.toLowerCase().replace(/\s+/g, '-')}`}
            >
              {link.keyword}
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
