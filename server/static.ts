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
    const requestPath = req.path;
    const userAgent = req.headers['user-agent'] || '';
    
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
        
        res.setHeader('Content-Type', 'text/html; charset=utf-8');
        res.setHeader('X-SEO-Rendered', 'true');
        return res.send(seoHtml);
      }
      
      // Bekannte Route für normale User -> 200 OK
      res.sendFile(path.resolve(distPath, "index.html"));
    } else {
      // Unbekannte Route -> 404 Status + SPA (zeigt 404-Seite)
      console.log(`[404] Seite nicht gefunden: ${requestPath}`);
      res.status(404).sendFile(path.resolve(distPath, "index.html"));
    }
  });
}
