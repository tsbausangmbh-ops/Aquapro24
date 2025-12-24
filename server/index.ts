import express, { type Request, Response, NextFunction } from "express";
import { registerRoutes } from "./routes";
import { serveStatic } from "./static";
import { createServer } from "http";
import prerender from "prerender-node";

const app = express();
const httpServer = createServer(app);

declare module "http" {
  interface IncomingMessage {
    rawBody: unknown;
  }
}

// Prerender.io Middleware für SEO-Optimierung
// Dient vorgerenderte HTML-Seiten an Suchmaschinen-Crawler und AI-Bots
if (process.env.PRERENDER_TOKEN) {
  app.use(
    prerender
      .set('prerenderToken', process.env.PRERENDER_TOKEN)
      .set('protocol', 'https')
      .set('forwardHeaders', true)
      // Zusätzliche Crawler-Agents für AI-Bots und Sprachassistenten
      .set('crawlerUserAgents', [
        'googlebot',
        'bingbot',
        'yandex',
        'baiduspider',
        'facebookexternalhit',
        'twitterbot',
        'rogerbot',
        'linkedinbot',
        'embedly',
        'quora link preview',
        'showyoubot',
        'outbrain',
        'pinterest/0.',
        'developers.google.com/+/web/snippet',
        'slackbot',
        'vkShare',
        'W3C_Validator',
        'redditbot',
        'Applebot',
        'WhatsApp',
        'flipboard',
        'tumblr',
        'bitlybot',
        'SkypeUriPreview',
        'nuzzel',
        'Discordbot',
        'Google Page Speed',
        'Qwantify',
        'pinterestbot',
        'Bitrix link preview',
        'XING-contenttabreceiver',
        'Chrome-Lighthouse',
        'TelegramBot',
        // AI Crawler und LLM Bots
        'GPTBot',
        'ChatGPT-User',
        'ClaudeBot',
        'Claude-Web',
        'Anthropic-AI',
        'PerplexityBot',
        'Perplexity-User',
        'Google-Extended',
        'Gemini',
        'Bard',
        'cohere-ai',
        'YouBot',
        'CCBot',
        'meta-externalagent',
        'AI2Bot',
        'Applebot-Extended',
        'Bytespider',
        // Voice Assistants
        'Alexa Crawler',
        'SiriBot'
      ])
  );
  console.log('[prerender] Prerender.io middleware aktiviert für SEO & AI-Crawler');
} else {
  console.log('[prerender] PRERENDER_TOKEN nicht gesetzt - Prerender.io deaktiviert');
}

app.use(
  express.json({
    verify: (req, _res, buf) => {
      req.rawBody = buf;
    },
  }),
);

app.use(express.urlencoded({ extended: false }));

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
  
  // 3. Legacy-URL-Redirects (alte Bookmarks)
  const legacyRedirects: Record<string, string> = {
    // Alte Service-URLs
    '/leistungen/sanitaer': '/sanitaer',
    '/leistungen/heizung': '/heizung',
    '/leistungen/bad': '/bad',
    '/leistungen/waermepumpe': '/waermepumpe',
    '/leistungen/haustechnik': '/haustechnik',
    '/services/sanitaer': '/sanitaer',
    '/services/heizung': '/heizung',
    '/services/plumbing': '/sanitaer',
    '/services/heating': '/heizung',
    // Alte Landing Pages
    '/notfall': '/notdienst',
    '/emergency': '/notdienst',
    '/24h': '/notdienst',
    '/24-stunden': '/notdienst',
    '/soforthilfe': '/notdienst',
    // Alte Kontakt-URLs
    '/kontaktformular': '/kontakt',
    '/contact': '/kontakt',
    '/anfrage': '/kontakt',
    // Alte Info-URLs
    '/ueber-uns': '/ueber-uns',
    '/about': '/ueber-uns',
    '/about-us': '/ueber-uns',
    '/team': '/ueber-uns',
    '/unternehmen': '/ueber-uns',
    // Alte Termin-URLs
    '/termin-buchen': '/termin',
    '/terminbuchung': '/termin',
    '/appointment': '/termin',
    '/booking': '/termin',
    '/buchung': '/termin',
    // Alte FAQ/Ratgeber URLs
    '/hilfe': '/faq',
    '/help': '/faq',
    '/fragen': '/faq',
    '/tipps': '/ratgeber',
    '/blog': '/ratgeber',
    '/news': '/ratgeber',
    '/artikel': '/ratgeber',
    // Alte Förderungs-URLs
    '/foerderung-heizung': '/foerderung',
    '/bafa': '/foerderung',
    '/kfw': '/foerderung',
    '/zuschuss': '/foerderung',
    '/foerdermittel': '/foerderung',
    // Service-spezifische Redirects
    '/rohrreinigung-muenchen': '/rohrreinigung',
    '/klempner-muenchen': '/sanitaer',
    '/installateur-muenchen': '/sanitaer',
    '/heizungsbauer-muenchen': '/heizung',
    '/badsanierung-muenchen': '/badsanierung',
    // Stadtteil ohne "muenchen" Suffix
    '/schwabing': '/stadtteil/schwabing',
    '/bogenhausen': '/stadtteil/bogenhausen',
    '/sendling': '/stadtteil/sendling',
    '/pasing': '/stadtteil/pasing',
    '/maxvorstadt': '/stadtteil/maxvorstadt',
    '/haidhausen': '/stadtteil/haidhausen',
    '/neuhausen': '/stadtteil/neuhausen',
    '/trudering': '/stadtteil/trudering',
    '/laim': '/stadtteil/laim',
    '/giesing': '/stadtteil/giesing',
    '/moosach': '/stadtteil/moosach',
    '/milbertshofen': '/stadtteil/milbertshofen',
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
    serveStatic(app);
  } else {
    const { setupVite } = await import("./vite");
    await setupVite(httpServer, app);
  }

  // ALWAYS serve the app on the port specified in the environment variable PORT
  // Other ports are firewalled. Default to 5000 if not specified.
  // this serves both the API and the client.
  // It is the only port that is not firewalled.
  const port = parseInt(process.env.PORT || "5000", 10);
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
})();
