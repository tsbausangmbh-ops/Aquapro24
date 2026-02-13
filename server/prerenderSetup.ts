import https from 'https';
import zlib from 'zlib';
import { seoPages, stadtteileData, isBot } from './seoContent';
import type { Request, Response, NextFunction } from 'express';

const PRERENDER_TOKEN = process.env.PRERENDER_TOKEN || '';
const SITE_HOST = 'aquapro24.de';
const PRERENDER_SERVICE_URL = 'https://service.prerender.io/';

const BLACKLISTED_EXTENSIONS = [
  '.js', '.css', '.xml', '.png', '.jpg', '.jpeg', '.gif', '.ico', '.svg',
  '.webp', '.woff', '.woff2', '.ttf', '.eot', '.map', '.json', '.txt',
  '.pdf', '.zip', '.mp3', '.mp4', '.avi', '.mov', '.webmanifest'
];

function getAllSeoRoutes(): string[] {
  const routes = new Set<string>();
  for (const key of Object.keys(seoPages)) {
    routes.add(key);
  }
  for (const st of stadtteileData) {
    routes.add(`/${st.slug}`);
  }
  return Array.from(routes);
}

function shouldPrerender(req: Request): boolean {
  const userAgent = req.headers['user-agent'] || '';
  if (!userAgent) return false;
  if (req.method !== 'GET' && req.method !== 'HEAD') return false;
  if (req.headers['x-prerender']) return false;

  const path = req.path.toLowerCase();
  if (path.startsWith('/api/') || path.startsWith('/assets/')) return false;
  if (BLACKLISTED_EXTENSIONS.some(ext => path.endsWith(ext))) return false;

  return isBot(userAgent);
}

function fetchFromPrerender(targetUrl: string): Promise<{ statusCode: number; body: string; headers: Record<string, string> }> {
  return new Promise((resolve, reject) => {
    const apiUrl = `${PRERENDER_SERVICE_URL}${targetUrl}`;
    const parsedUrl = new URL(apiUrl);

    const options: https.RequestOptions = {
      hostname: parsedUrl.hostname,
      port: parsedUrl.port || 443,
      path: parsedUrl.pathname + parsedUrl.search,
      method: 'GET',
      headers: {
        'X-Prerender-Token': PRERENDER_TOKEN,
        'X-Prerender-Int-Type': 'Node-Custom',
        'Accept-Encoding': 'gzip',
        'User-Agent': 'prerender-node-custom/1.0',
      },
      timeout: 15000,
    };

    const req = https.get(parsedUrl, options, (response) => {
      const isGzipped = response.headers['content-encoding'] === 'gzip';
      let content = '';

      const stream = isGzipped ? response.pipe(zlib.createGunzip()) : response;

      stream.on('data', (chunk: Buffer | string) => {
        content += chunk.toString();
      });

      stream.on('end', () => {
        const headers: Record<string, string> = {};
        for (const [key, val] of Object.entries(response.headers)) {
          if (val && typeof val === 'string') {
            headers[key] = val;
          }
        }
        delete headers['content-encoding'];
        delete headers['content-length'];
        delete headers['transfer-encoding'];

        resolve({
          statusCode: response.statusCode || 200,
          body: content,
          headers,
        });
      });

      stream.on('error', (err: Error) => {
        reject(err);
      });
    });

    req.on('error', (err) => {
      reject(err);
    });

    req.on('timeout', () => {
      req.destroy();
      reject(new Error('Prerender.io Timeout nach 15s'));
    });
  });
}

function validatePrerenderResponse(body: string, statusCode: number): { valid: boolean; reason?: string } {
  if (statusCode >= 500) {
    return { valid: false, reason: `Server-Fehler ${statusCode}` };
  }
  if (!body || body.length < 500) {
    return { valid: false, reason: `Zu kurze Antwort (${body?.length || 0} Bytes)` };
  }

  const hasJsonLd = body.includes('application/ld+json');
  const hasMetaDescription = body.includes('meta name="description"');

  if (!hasJsonLd || !hasMetaDescription) {
    return { valid: false, reason: `Unvollständig (JSON-LD: ${hasJsonLd}, Meta: ${hasMetaDescription})` };
  }

  return { valid: true };
}

export function createPrerenderMiddleware() {
  return async function prerenderMiddleware(req: Request, res: Response, next: NextFunction) {
    if (!PRERENDER_TOKEN) {
      return next();
    }

    if (!shouldPrerender(req)) {
      return next();
    }

    const targetUrl = `https://${SITE_HOST}${req.originalUrl}`;
    const startTime = Date.now();

    console.log(`[Prerender] Bot erkannt: ${(req.headers['user-agent'] || '').substring(0, 80)} -> ${req.path}`);

    try {
      const prerenderResponse = await fetchFromPrerender(targetUrl);
      const duration = Date.now() - startTime;

      const validation = validatePrerenderResponse(prerenderResponse.body, prerenderResponse.statusCode);

      if (!validation.valid) {
        console.log(`[Prerender] FALLBACK (${duration}ms): ${validation.reason} -> eigene SSR für ${req.path}`);
        return next();
      }

      console.log(`[Prerender] OK (${duration}ms): ${Math.round(prerenderResponse.body.length / 1024)}KB für ${req.path}`);

      res.setHeader('Content-Type', 'text/html; charset=utf-8');
      res.setHeader('X-SEO-Rendered', 'true');
      res.setHeader('X-SSR-Source', 'prerender-io');
      res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
      res.setHeader('Content-Language', 'de-DE');
      res.setHeader('Vary', 'User-Agent, Accept-Encoding');
      res.setHeader('Cache-Control', 'private, no-store, must-revalidate');
      res.setHeader('Surrogate-Control', 'no-store');

      const canonicalUrl = `https://aquapro24.de${req.path === '/' ? '' : req.path}`;
      res.setHeader('Link', [
        `<${canonicalUrl}>; rel="canonical"`,
        '</assets/index.css>; rel="preload"; as="style"',
        '<https://fonts.googleapis.com>; rel="preconnect"'
      ].join(', '));

      for (const [key, val] of Object.entries(prerenderResponse.headers)) {
        if (key.startsWith('x-prerender')) {
          res.setHeader(key, val);
        }
      }

      return res.status(prerenderResponse.statusCode).send(prerenderResponse.body);

    } catch (err: any) {
      const duration = Date.now() - startTime;
      console.log(`[Prerender] FEHLER (${duration}ms): ${err.message} -> eigene SSR für ${req.path}`);
      return next();
    }
  };
}

export function recachePrerenderUrls(): void {
  if (!PRERENDER_TOKEN) {
    console.log('[Prerender-Cache] Kein PRERENDER_TOKEN gesetzt - Cache-Refresh übersprungen');
    return;
  }

  const allPaths = getAllSeoRoutes();
  const baseUrl = `https://${SITE_HOST}`;
  const apiUrl = 'https://api.prerender.io/recache';

  console.log(`[Prerender-Cache] Starte Hintergrund-Cache-Refresh für ${allPaths.length} Seiten...`);

  setTimeout(async () => {
    const batchSize = 5;
    let success = 0;
    let errors = 0;

    for (let i = 0; i < allPaths.length; i += batchSize) {
      const batch = allPaths.slice(i, i + batchSize);

      const promises = batch.map(async (urlPath) => {
        try {
          const fullUrl = `${baseUrl}${urlPath}`;
          const response = await fetch(apiUrl, {
            method: 'POST',
            headers: {
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              prerenderToken: PRERENDER_TOKEN,
              url: fullUrl,
            }),
          });

          if (response.ok) {
            success++;
          } else {
            const text = await response.text().catch(() => '');
            console.log(`[Prerender-Cache] Fehler ${response.status} für ${urlPath}: ${text.substring(0, 100)}`);
            errors++;
          }
        } catch (e: any) {
          console.log(`[Prerender-Cache] Netzwerk-Fehler für ${urlPath}: ${e.message}`);
          errors++;
        }
      });

      await Promise.all(promises);

      if (i + batchSize < allPaths.length) {
        await new Promise(r => setTimeout(r, 1000));
      }
    }

    console.log(`[Prerender-Cache] Fertig: ${success}/${allPaths.length} erfolgreich, ${errors} Fehler`);
  }, 10000);
}
