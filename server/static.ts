import express, { type Express, type Request } from "express";
import fs from "fs";
import path from "path";
import { generateStaticHTML, isBot, seoPages } from "./seoContent";

// Bekannte Routen der SPA (aus sitemap.xml - alle Seiten synchronisiert)
const KNOWN_ROUTES = new Set([
  // Homepage
  '/',
  // Service-Seiten
  '/sanitaer',
  '/armaturen',
  '/rohrreinigung',
  '/warmwasser',
  '/bad',
  '/badsanierung',
  '/heizung',
  '/waermepumpe',
  '/haustechnik',
  // Landing Pages
  '/notdienst-muenchen',
  '/sanitaer-muenchen',
  '/heizung-muenchen',
  '/fussbodenheizung',
  '/fussbodenheizung-muenchen',
  '/waermepumpe-muenchen',
  '/sanitaer-notdienst-24',
  '/heizung-notdienst-24',
  // Förderung
  '/foerderung',
  '/foerderantrag',
  '/foerderantrag-heizung',
  '/foerderrechner',
  // Utility-Seiten
  '/ueber-uns',
  '/termin',
  '/ratgeber',
  '/kontakt',
  '/faq',
  // Legal
  '/impressum',
  '/agb',
  '/datenschutz',
  '/cookie-richtlinie',
  '/barrierefreiheit',
]);

// Alle gültigen Stadtteile (synchronisiert mit sitemap.xml)
const VALID_STADTTEILE = [
  // Premium Stadtteile
  'schwabing', 'bogenhausen', 'maxvorstadt', 'haidhausen', 'nymphenburg', 'lehel', 'solln',
  // Standard Stadtteile
  'sendling', 'pasing', 'neuhausen', 'trudering', 'laim', 'giesing', 'moosach', 'milbertshofen',
  'perlach', 'hadern', 'allach', 'aubing', 'feldmoching', 'thalkirchen', 'ramersdorf',
  'berg-am-laim', 'schwanthalerhoehe', 'au', 'freimann',
  // Regionen
  'muenchen-nord', 'muenchen-ost', 'muenchen-sued', 'muenchen-west'
];

// Prefix für Stadtteil-Routen
const STADTTEIL_PREFIX = '/stadtteil/';

// 301 Redirect-Map: Alte/falsche URLs → korrekte Ziel-URLs
const REDIRECT_MAP: Record<string, string> = {
  // Sanitär-Synonyme
  '/klempner': '/sanitaer',
  '/installateur': '/sanitaer',
  '/sanitaerinstallateur': '/sanitaer',
  '/sanitaer-installateur': '/sanitaer',
  '/sanitaerdienst': '/sanitaer',
  '/sanitaer-dienst': '/sanitaer',
  '/sanitaerservice': '/sanitaer',
  '/sanitaer-service': '/sanitaer',
  '/wasserschaden': '/sanitaer',
  '/rohrbruch': '/sanitaer',
  '/leckortung': '/sanitaer',
  
  // Heizungs-Synonyme
  '/heizungsreparatur': '/heizung',
  '/heizungswartung': '/heizung',
  '/heizungsservice': '/heizung',
  '/heizung-reparatur': '/heizung',
  '/heizung-wartung': '/heizung',
  '/heizung-service': '/heizung',
  '/heizungstausch': '/heizung',
  '/heizungsmodernisierung': '/heizung',
  '/gasheizung': '/heizung',
  '/oelheizung': '/heizung',
  '/heizkoerper': '/heizung',
  
  // Bad-Synonyme
  '/badumbau': '/bad',
  '/bad-umbau': '/bad',
  '/badezimmer': '/bad',
  '/badezimmersanierung': '/bad',
  '/badezimmer-sanierung': '/bad',
  '/badrenovierung': '/bad',
  '/bad-renovierung': '/bad',
  '/dusche': '/bad',
  '/badewanne': '/bad',
  '/wc': '/bad',
  '/toilette': '/bad',
  
  // Notdienst-Synonyme
  '/notdienst': '/notdienst-muenchen',
  '/24h-notdienst': '/notdienst-muenchen',
  '/24h': '/notdienst-muenchen',
  '/soforthilfe': '/notdienst-muenchen',
  '/notfall': '/notdienst-muenchen',
  '/stoerungsdienst': '/notdienst-muenchen',
  '/bereitschaftsdienst': '/notdienst-muenchen',
  '/sanitaer-notdienst': '/sanitaer-notdienst-24',
  '/heizung-notdienst': '/heizung-notdienst-24',
  '/heizungsnotdienst': '/heizung-notdienst-24',
  '/sanitaernotdienst': '/sanitaer-notdienst-24',
  
  // Wärmepumpe-Synonyme
  '/waermepumpen': '/waermepumpe',
  '/luft-waermepumpe': '/waermepumpe',
  '/luftwaermepumpe': '/waermepumpe',
  '/erdwaermepumpe': '/waermepumpe',
  '/waermepumpe-foerderung': '/waermepumpe',
  
  // Förderung-Synonyme
  '/foerderung-heizung': '/foerderung',
  '/bafa': '/foerderung',
  '/bafa-foerderung': '/foerderung',
  '/kfw': '/foerderung',
  '/kfw-foerderung': '/foerderung',
  '/heizungsfoerderung': '/foerderung',
  '/zuschuss': '/foerderung',
  
  // Alte URL-Strukturen
  '/leistungen': '/sanitaer',
  '/leistungen/sanitaer': '/sanitaer',
  '/leistungen/heizung': '/heizung',
  '/leistungen/bad': '/bad',
  '/services': '/sanitaer',
  '/services/plumbing': '/sanitaer',
  '/services/heating': '/heizung',
  
  // Kontakt/Info-Synonyme
  '/about': '/ueber-uns',
  '/ueber': '/ueber-uns',
  '/team': '/ueber-uns',
  '/contact': '/kontakt',
  '/anfahrt': '/kontakt',
  '/standort': '/kontakt',
  '/appointment': '/termin',
  '/buchen': '/termin',
  '/buchung': '/termin',
  '/terminbuchung': '/termin',
  '/online-termin': '/termin',
  
  // Legal-Synonyme
  '/privacy': '/datenschutz',
  '/imprint': '/impressum',
  '/terms': '/agb',
  '/cookies': '/cookie-richtlinie',
  
  // Sonstige
  '/preise': '/faq',
  '/kosten': '/faq',
  '/fragen': '/faq',
  '/hilfe': '/faq',
  '/ratgeber-sanitaer': '/ratgeber',
  '/ratgeber-heizung': '/ratgeber',
  '/tipps': '/ratgeber',
  '/blog': '/ratgeber',
  '/news': '/ratgeber',
  '/aktuelles': '/ratgeber',
  
  // Häufige Tippfehler
  '/sanitar': '/sanitaer',
  '/sanitär': '/sanitaer',
  '/heizug': '/heizung',
  '/heiung': '/heizung',
  '/warmepumpe': '/waermepumpe',
  '/wärmepumpe': '/waermepumpe',
  '/forderung': '/foerderung',
  '/förderung': '/foerderung',
  '/uber-uns': '/ueber-uns',
  '/über-uns': '/ueber-uns',
};

// Keyword-basierte Fallback-Redirects (wenn keine exakte Übereinstimmung)
export function findBestRedirect(path: string): string | null {
  const lowerPath = path.toLowerCase();
  
  // Exakte Match in Redirect-Map
  if (REDIRECT_MAP[lowerPath]) {
    return REDIRECT_MAP[lowerPath];
  }
  
  // Keyword-basierte Suche
  if (lowerPath.includes('sanitaer') || lowerPath.includes('sanitar') || lowerPath.includes('klempner') || lowerPath.includes('installateur') || lowerPath.includes('rohr') || lowerPath.includes('abfluss')) {
    if (lowerPath.includes('notdienst') || lowerPath.includes('24')) return '/sanitaer-notdienst-24';
    return '/sanitaer';
  }
  
  if (lowerPath.includes('heizung') || lowerPath.includes('heiz') || lowerPath.includes('waerme') || lowerPath.includes('warm')) {
    if (lowerPath.includes('pumpe')) return '/waermepumpe';
    if (lowerPath.includes('notdienst') || lowerPath.includes('24')) return '/heizung-notdienst-24';
    if (lowerPath.includes('boden') || lowerPath.includes('fuss')) return '/fussbodenheizung';
    return '/heizung';
  }
  
  if (lowerPath.includes('bad') || lowerPath.includes('dusch') || lowerPath.includes('wc') || lowerPath.includes('toilette') || lowerPath.includes('wanne')) {
    return '/bad';
  }
  
  if (lowerPath.includes('notdienst') || lowerPath.includes('notfall') || lowerPath.includes('24h') || lowerPath.includes('sofort')) {
    return '/notdienst-muenchen';
  }
  
  if (lowerPath.includes('foerder') || lowerPath.includes('bafa') || lowerPath.includes('kfw') || lowerPath.includes('zuschuss')) {
    return '/foerderung';
  }
  
  if (lowerPath.includes('termin') || lowerPath.includes('buch')) {
    return '/termin';
  }
  
  if (lowerPath.includes('kontakt') || lowerPath.includes('anfrage') || lowerPath.includes('anfahrt')) {
    return '/kontakt';
  }
  
  // Stadtteil-Erkennung
  for (const stadtteil of VALID_STADTTEILE) {
    if (lowerPath.includes(stadtteil)) {
      return `/${stadtteil}`;
    }
  }
  
  return null;
}

function isValidRoute(routePath: string): boolean {
  // Exakte Match in bekannten Routen
  if (KNOWN_ROUTES.has(routePath)) return true;
  
  // Stadtteil-Routen mit /stadtteil/ prefix
  if (routePath.startsWith(STADTTEIL_PREFIX)) {
    const stadtteil = routePath.slice(STADTTEIL_PREFIX.length);
    return VALID_STADTTEILE.includes(stadtteil);
  }
  
  // Direkte Stadtteil-Routen (z.B. /schwabing)
  const directPath = routePath.slice(1); // entferne führenden /
  if (VALID_STADTTEILE.includes(directPath)) {
    return true;
  }
  
  return false;
}

export function serveStatic(app: Express) {
  const distPath = path.resolve(__dirname, "public");
  if (!fs.existsSync(distPath)) {
    throw new Error(
      `Could not find the build directory: ${distPath}, make sure to build the client first`,
    );
  }

  app.use(express.static(distPath));

  // SPA Fallback mit 404-Status für unbekannte Routen
  app.use("*", (req: Request, res) => {
    let requestPath = req.path;
    const userAgent = req.headers['user-agent'] || '';
    
    // Normalize: remove trailing slash (except for root)
    if (requestPath !== '/' && requestPath.endsWith('/')) {
      requestPath = requestPath.slice(0, -1);
    }
    
    // API-Routen, die nicht gefunden wurden -> 404 JSON
    if (requestPath.startsWith('/api')) {
      console.log(`[404] API nicht gefunden: ${requestPath}`);
      return res.status(404).json({ 
        error: 'Not Found',
        message: 'Die angeforderte API-Route existiert nicht.',
        path: requestPath 
      });
    }
    
    // Prüfe ob die Route bekannt ist
    if (isValidRoute(requestPath)) {
      // Check if request is from a search engine bot
      if (isBot(userAgent)) {
        console.log(`[SEO] Bot erkannt: ${userAgent.substring(0, 50)}... für ${requestPath}`);
        
        // Read index.html and inject SEO content
        const indexPath = path.resolve(distPath, "index.html");
        const indexHtml = fs.readFileSync(indexPath, 'utf-8');
        const seoHtml = generateStaticHTML(requestPath, indexHtml);
        
        // Optimale Header für Crawler
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('X-SEO-Rendered', 'true');
        res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
        res.setHeader('Vary', 'User-Agent');
        
        // Canonical Link Header
        const canonicalUrl = `https://aquapro24.de${requestPath === '/' ? '' : requestPath}`;
        res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
        
        return res.send(seoHtml);
      }
      
      // Bekannte Route für normale User -> 200 OK
      res.sendFile(path.resolve(distPath, "index.html"));
    } else {
      // Unbekannte Route -> prüfe auf intelligente Weiterleitung
      const redirectTarget = findBestRedirect(requestPath);
      
      if (redirectTarget) {
        // 301 Permanent Redirect zu passender Seite
        console.log(`[301] Redirect: ${requestPath} → ${redirectTarget}`);
        return res.redirect(301, redirectTarget);
      }
      
      // Keine passende Seite gefunden -> 404 Status + SPA (zeigt 404-Seite)
      console.log(`[404] Seite nicht gefunden: ${requestPath}`);
      res.status(404).sendFile(path.resolve(distPath, "index.html"));
    }
  });
}
