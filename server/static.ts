import express, { type Express, type Request } from "express";
import fs from "fs";
import path from "path";

// Bekannte Routen der SPA (aus sitemap.xml)
const KNOWN_ROUTES = new Set([
  '/',
  '/sanitaer',
  '/armaturen',
  '/rohrreinigung',
  '/warmwasser',
  '/bad',
  '/heizung',
  '/waermepumpe',
  '/haustechnik',
  '/notdienst',
  '/sanitaer-muenchen',
  '/heizung-muenchen',
  '/fussbodenheizung',
  '/waermepumpe-muenchen',
  '/badsanierung',
  '/foerderung',
  '/sanitaer-notdienst-24h',
  '/heizung-notdienst-24h',
  '/ueber-uns',
  '/termin',
  '/ratgeber',
  '/kontakt',
  '/faq',
  '/impressum',
  '/agb',
  '/datenschutz',
  '/cookie-richtlinie',
  '/barrierefreiheit',
  '/foerderantrag-heizung',
]);

// Stadtteil-Prefix für dynamische Routen
const STADTTEIL_PREFIX = '/stadtteil/';
const VALID_STADTTEILE = [
  'schwabing', 'bogenhausen', 'sendling', 'pasing', 'maxvorstadt',
  'haidhausen', 'neuhausen', 'trudering', 'laim', 'giesing',
  'moosach', 'milbertshofen', 'nymphenburg', 'au', 'untergiesing',
  'thalkirchen', 'berg-am-laim', 'ramersdorf'
];

function isValidRoute(path: string): boolean {
  // Exakte Match
  if (KNOWN_ROUTES.has(path)) return true;
  
  // Stadtteil-Routen
  if (path.startsWith(STADTTEIL_PREFIX)) {
    const stadtteil = path.slice(STADTTEIL_PREFIX.length);
    return VALID_STADTTEILE.includes(stadtteil);
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
      // Bekannte Route -> 200 OK
      res.sendFile(path.resolve(distPath, "index.html"));
    } else {
      // Unbekannte Route -> 404 Status + SPA (zeigt 404-Seite)
      console.log(`[404] Seite nicht gefunden: ${requestPath}`);
      res.status(404).sendFile(path.resolve(distPath, "index.html"));
    }
  });
}
