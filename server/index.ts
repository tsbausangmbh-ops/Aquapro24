import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// SSR wird durch eigene Lösung gehandhabt (server/ssrCache.ts)
const isProduction = process.env.NODE_ENV === 'production';
console.log(`[SSR] Eigene SSR-Lösung aktiv (${isProduction ? 'Production' : 'Entwicklung'})`);

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

// ============================================
// CRAWLER-OPTIMIERUNG: Headers für SEO
// ============================================
app.use((req, res, next) => {
  // X-Robots-Tag: Erlaubt Indexierung für alle Crawler
  res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
  
  // Cache-Control für statische Ressourcen
  const path = req.path;
  if (path.match(/\.(js|css|png|jpg|jpeg|gif|ico|svg|woff|woff2|ttf|eot)$/)) {
    res.setHeader('Cache-Control', 'public, max-age=31536000, immutable');
  } else if (path === '/sitemap.xml' || path === '/robots.txt') {
    res.setHeader('Cache-Control', 'public, max-age=86400'); // 1 Tag
  } else if (path.startsWith('/api')) {
    res.setHeader('Cache-Control', 'no-store');
  } else {
    // HTML-Seiten: kurzes Caching für schnelle Updates
    res.setHeader('Cache-Control', 'public, max-age=3600, stale-while-revalidate=86400');
  }
  
  // Vary Header für korrektes Caching basierend auf User-Agent
  res.setHeader('Vary', 'User-Agent, Accept-Encoding');
  
  next();
});

// 301 Redirects für SEO-Optimierung
app.use((req, res, next) => {
  const path = req.path;
  const query = req.originalUrl.includes('?') ? req.originalUrl.slice(req.originalUrl.indexOf('?')) : '';
  
  // Skip für API-Routen, statische Dateien und Assets
  if (path.startsWith('/api') || 
      path.startsWith('/assets') || 
      path.includes('.') ||
      path === '/') {
    return next();
  }
  
  // 1. Trailing Slash entfernen (außer Root)
  if (path.length > 1 && path.endsWith('/')) {
    const newPath = path.slice(0, -1);
    console.log(`[301] Trailing slash: ${path} -> ${newPath}`);
    return res.redirect(301, newPath + query);
  }
  
  // 2. Uppercase zu Lowercase
  const lowerPath = path.toLowerCase();
  if (path !== lowerPath) {
    console.log(`[301] Lowercase: ${path} -> ${lowerPath}`);
    return res.redirect(301, lowerPath + query);
  }
  
  // 3. Legacy-URL-Redirects (alte Bookmarks) - ALLE Weiterleitungen zentral hier
  const legacyRedirects: Record<string, string> = {
    // Alte Service-URLs mit /leistungen/ Prefix
    '/leistungen': '/',
    '/leistungen/sanitaer': '/sanitaer',
    '/leistungen/heizung': '/heizung',
    '/leistungen/bad': '/bad',
    '/leistungen/badsanierung': '/badsanierung',
    '/leistungen/waermepumpe': '/waermepumpe',
    '/leistungen/haustechnik': '/haustechnik',
    '/leistungen/rohrreinigung': '/rohrreinigung',
    '/leistungen/armaturen': '/armaturen',
    '/leistungen/warmwasser': '/warmwasser',
    '/services': '/',
    '/service': '/',
    '/services/sanitaer': '/sanitaer',
    '/services/heizung': '/heizung',
    '/services/plumbing': '/sanitaer',
    '/services/heating': '/heizung',
    
    // Alte Notdienst-URLs -> korrektes Ziel /notdienst-muenchen
    '/notfall': '/notdienst-muenchen',
    '/notdienst': '/notdienst-muenchen',
    '/emergency': '/notdienst-muenchen',
    '/24h': '/notdienst-muenchen',
    '/24-stunden': '/notdienst-muenchen',
    '/soforthilfe': '/notdienst-muenchen',
    '/sanitaer-notfall': '/sanitaer-notdienst-24',
    '/heizung-notfall': '/heizung-notdienst-24',
    '/klempner-notdienst': '/sanitaer-notdienst-24',
    '/rohrbruch': '/sanitaer-notdienst-24',
    '/wasserschaden': '/sanitaer-notdienst-24',
    '/heizungsausfall': '/heizung-notdienst-24',
    
    // Alte Kontakt-URLs
    '/kontaktformular': '/kontakt',
    '/contact': '/kontakt',
    '/anfrage': '/kontakt',
    
    // Alte Info-URLs
    '/about': '/ueber-uns',
    '/about-us': '/ueber-uns',
    '/team': '/ueber-uns',
    '/unternehmen': '/ueber-uns',
    
    // Alte Termin-URLs
    '/termin-buchen': '/termin',
    '/terminbuchung': '/termin',
    '/terminvereinbarung': '/termin',
    '/appointment': '/termin',
    '/booking': '/termin',
    '/buchung': '/termin',
    '/online-termin': '/termin',
    
    // Alte FAQ/Ratgeber URLs
    '/hilfe': '/faq',
    '/help': '/faq',
    '/fragen': '/faq',
    '/questions': '/faq',
    '/haeufige-fragen': '/faq',
    '/tipps': '/ratgeber',
    '/blog': '/ratgeber',
    '/news': '/ratgeber',
    '/artikel': '/ratgeber',
    '/magazin': '/ratgeber',
    
    // Alte Förderungs-URLs
    '/foerderung-heizung': '/foerderung',
    '/foerderung-waermepumpe': '/foerderung',
    '/bafa': '/foerderung',
    '/bafa-foerderung': '/foerderung',
    '/kfw': '/foerderung',
    '/kfw-foerderung': '/foerderung',
    '/zuschuss': '/foerderung',
    '/foerdermittel': '/foerderung',
    '/foerderungen': '/foerderung',
    '/staatliche-foerderung': '/foerderung',
    '/foerderrechner-heizung': '/foerderrechner',
    '/foerderantrag-waermepumpe': '/foerderantrag-heizung',
    
    // Alte Landing-Page URLs
    '/klempner': '/sanitaer',
    '/klempner-muenchen': '/sanitaer-muenchen',
    '/installateur': '/sanitaer',
    '/installateur-muenchen': '/sanitaer-muenchen',
    '/sanitaerinstallateur': '/sanitaer',
    '/heizungsbauer': '/heizung',
    '/heizungsbauer-muenchen': '/heizung-muenchen',
    '/heizungsinstallateur': '/heizung',
    '/rohrreinigung-muenchen': '/rohrreinigung',
    '/abfluss-verstopft': '/rohrreinigung',
    '/abfluss': '/rohrreinigung',
    '/kanalreinigung': '/rohrreinigung',
    '/bad-renovieren': '/badsanierung',
    '/bad-sanieren': '/badsanierung',
    '/badumbau': '/badsanierung',
    '/badsanierung-muenchen': '/badsanierung',
    '/waermepumpen': '/waermepumpe',
    '/waermepumpen-muenchen': '/waermepumpe-muenchen',
    '/fussbodenheizung': '/fussbodenheizung-muenchen',
    
    // Rechtliche Seiten
    '/privacy': '/datenschutz',
    '/datenschutzerklaerung': '/datenschutz',
    '/imprint': '/impressum',
    '/legal': '/impressum',
    '/terms': '/agb',
    '/nutzungsbedingungen': '/agb',
    '/cookies': '/cookie-richtlinie',
    '/accessibility': '/barrierefreiheit',
    
    // Alte Stadtteil-URLs MIT /stadtteil/ Prefix -> ohne Prefix (korrekt)
    '/stadtteil/schwabing': '/schwabing',
    '/stadtteil/bogenhausen': '/bogenhausen',
    '/stadtteil/sendling': '/sendling',
    '/stadtteil/pasing': '/pasing',
    '/stadtteil/maxvorstadt': '/maxvorstadt',
    '/stadtteil/haidhausen': '/haidhausen',
    '/stadtteil/neuhausen': '/neuhausen',
    '/stadtteil/laim': '/laim',
    '/stadtteil/giesing': '/giesing',
    '/stadtteil/trudering': '/trudering',
    '/stadtteil/milbertshofen': '/milbertshofen',
    '/stadtteil/moosach': '/moosach',
    '/stadtteil/nymphenburg': '/nymphenburg',
    '/stadtteil/perlach': '/perlach',
    '/stadtteil/solln': '/solln',
    '/stadtteil/hadern': '/hadern',
    '/stadtteil/allach': '/allach',
    '/stadtteil/aubing': '/aubing',
    '/stadtteil/feldmoching': '/feldmoching',
    '/stadtteil/thalkirchen': '/thalkirchen',
    '/stadtteil/ramersdorf': '/ramersdorf',
    '/stadtteil/berg-am-laim': '/berg-am-laim',
    '/stadtteil/schwanthalerhoehe': '/schwanthalerhoehe',
    '/stadtteil/au': '/au',
    '/stadtteil/freimann': '/freimann',
    '/stadtteil/lehel': '/lehel',
    '/stadtteil/nord': '/muenchen-nord',
    '/stadtteil/sued': '/muenchen-sued',
    '/stadtteil/west': '/muenchen-west',
    '/stadtteil/ost': '/muenchen-ost',
    
    // Nicht existierende Stadtteile -> passende Alternativen
    '/obergiesing': '/giesing',
    '/untergiesing': '/giesing',
    '/westend': '/schwanthalerhoehe',
    '/isarvorstadt': '/haidhausen',
    '/ludwigsvorstadt': '/maxvorstadt',
    '/altstadt': '/',
    '/altstadt-lehel': '/lehel',
  };
  
  const redirectTo = legacyRedirects[path] || legacyRedirects[lowerPath];
  if (redirectTo) {
    console.log(`[301] Legacy: ${path} -> ${redirectTo}`);
    return res.redirect(301, redirectTo + query);
  }
  
  next();
});

export function log(message: string, source = "express") {
  const formattedTime = new Date().toLocaleTimeString("en-US", {
    hour: "numeric",
    minute: "2-digit",
    second: "2-digit",
    hour12: true,
  });

  console.log(`${formattedTime} [${source}] ${message}`);
}

app.use((req, res, next) => {
  const start = Date.now();
  const path = req.path;
  let capturedJsonResponse: Record<string, any> | undefined = undefined;

  const originalResJson = res.json;
  res.json = function (bodyJson, ...args) {
    capturedJsonResponse = bodyJson;
    return originalResJson.apply(res, [bodyJson, ...args]);
  };

  res.on("finish", () => {
    const duration = Date.now() - start;
    if (path.startsWith("/api")) {
      let logLine = `${req.method} ${path} ${res.statusCode} in ${duration}ms`;
      if (capturedJsonResponse) {
        logLine += ` :: ${JSON.stringify(capturedJsonResponse)}`;
      }

      log(logLine);
    }
  });

  next();
});

(async () => {
  await registerRoutes(httpServer, app);

  // Health Check Endpoint für Monitoring
  app.get("/health", (_req, res) => {
    res.status(200).send("ok");
  });

  app.use((err: any, _req: Request, res: Response, _next: NextFunction) => {
    const status = err.status || err.statusCode || 500;
    const message = err.message || "Internal Server Error";

    res.status(status).json({ message });
    throw err;
  });

  // importantly only setup vite in development and after
  // setting up all the other routes so the catch-all route
  // doesn't interfere with the other routes
  if (process.env.NODE_ENV === "production") {
    await serveStatic(app);
  } else {
    // Bot-SSR-Middleware für Entwicklung (vor Vite) mit Caching
    const fs = await import("fs");
    const pathModule = await import("path");
    const { generateStaticHTML, isBot, seoPages, stadtteileData } = await import("./seoContent");
    const { findBestRedirect } = await import("./static");
    const { ssrCache, warmSSRCache } = await import("./ssrCache");
    
    // Gültige Routen für SSR (aus seoPages + Stadtteile)
    const validRoutes = new Set(Object.keys(seoPages));
    stadtteileData.forEach(st => validRoutes.add(`/${st.slug}`));
    
    // Pre-warm SSR cache für Entwicklung
    const clientTemplate = pathModule.resolve(
      process.cwd(),
      "client",
      "index.html"
    );
    const template = fs.readFileSync(clientTemplate, 'utf-8');
    
    const allRoutes = Array.from(validRoutes);
    await warmSSRCache(allRoutes, (routePath: string) => {
      return generateStaticHTML(routePath, template);
    });
    
    app.use((req, res, next) => {
      // Nur GET-Anfragen für HTML-Seiten
      if (req.method !== 'GET') return next();
      
      let reqPath = req.path;
      
      // Normalize: remove trailing slash (except for root)
      if (reqPath !== '/' && reqPath.endsWith('/')) {
        reqPath = reqPath.slice(0, -1);
      }
      
      // Skip API, Assets und statische Dateien
      if (reqPath.startsWith('/api') || 
          reqPath.startsWith('/assets') || 
          reqPath.startsWith('/src') ||
          reqPath.startsWith('/@') ||
          reqPath.includes('.')) {
        return next();
      }
      
      const userAgent = req.headers['user-agent'] || '';
      
      // Bot-Erkennung: SSR nur für gültige Routen
      if (isBot(userAgent)) {
        // Prüfe ob Route gültig ist (mit normalisiertem Pfad)
        if (!validRoutes.has(reqPath)) {
          // Prüfe auf intelligente Weiterleitung
          const redirectTarget = findBestRedirect(reqPath);
          if (redirectTarget) {
            console.log(`[SSR-DEV] 301: ${reqPath} → ${redirectTarget}`);
            return res.redirect(301, redirectTarget);
          }
          console.log(`[SSR-DEV] 404: ${reqPath}`);
          return next(); // Vite zeigt 404-Seite
        }
        
        // Try cached response first (fast path)
        const cached = ssrCache.get(reqPath);
        if (cached) {
          // ETag-based caching
          const clientEtag = req.headers['if-none-match'];
          if (clientEtag === cached.etag) {
            return res.status(304).end();
          }
          
          console.log(`[SSR-DEV] Cache HIT: ${reqPath}`);
          
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-SEO-Rendered', 'true');
          res.setHeader('X-SSR-Cache', 'HIT');
          res.setHeader('ETag', cached.etag);
          res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
          res.setHeader('Vary', 'User-Agent, Accept-Encoding');
          
          const canonicalUrl = `https://aquapro24.de${reqPath === '/' ? '' : reqPath}`;
          res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
          
          // Brotli > Gzip > Minified
          const acceptEncoding = (req.headers['accept-encoding'] || '').toString();
          if (acceptEncoding.includes('br')) {
            res.setHeader('Content-Encoding', 'br');
            return res.send(cached.brotli);
          } else if (acceptEncoding.includes('gzip')) {
            res.setHeader('Content-Encoding', 'gzip');
            return res.send(cached.gzipped);
          }
          return res.send(cached.minified);
        }
        
        // Cache miss - generate fresh
        console.log(`[SSR-DEV] Cache MISS: ${reqPath}`);
        
        try {
          const seoHtml = generateStaticHTML(reqPath, template);
          
          // Cache for future (async)
          ssrCache.set(reqPath, seoHtml).catch(console.error);
          
          res.setHeader('Content-Type', 'text/html; charset=utf-8');
          res.setHeader('X-SEO-Rendered', 'true');
          res.setHeader('X-SSR-Cache', 'MISS');
          res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
          res.setHeader('Vary', 'User-Agent');
          
          const canonicalUrl = `https://aquapro24.de${reqPath === '/' ? '' : reqPath}`;
          res.setHeader('Link', `<${canonicalUrl}>; rel="canonical"`);
          
          return res.status(200).send(seoHtml);
        } catch (e) {
          console.error('[SSR-DEV] Fehler:', e);
          return next();
        }
      }
      
      next();
    });
    
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // Server muss auf Port 5000 laufen - Replit erfordert diesen Port
  const port = 5000;
  httpServer.listen(
    {
      port,
      host: "0.0.0.0",
      reusePort: true,
    },
    () => {
      log(`serving on port ${port}`);
    },
  );

  // Server Timeout-Konfiguration für stabile Verbindungen
  httpServer.keepAliveTimeout = 120000;
  httpServer.headersTimeout = 120000;
})();
