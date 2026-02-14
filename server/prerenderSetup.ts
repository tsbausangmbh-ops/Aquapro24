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

const prerenderCache = new Map<string, { body: string; cachedAt: number }>();
const CACHE_TTL = 6 * 60 * 60 * 1000;

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

function shouldServePrerender(req: Request): boolean {
  if (req.method !== 'GET' && req.method !== 'HEAD') return false;
  if (req.headers['x-prerender']) return false;

  const path = req.path.toLowerCase();
  if (path.startsWith('/api/') || path.startsWith('/assets/')) return false;
  if (BLACKLISTED_EXTENSIONS.some(ext => path.endsWith(ext))) return false;

  const userAgent = req.headers['user-agent'] || '';
  if (!isBot(userAgent)) return false;

  return true;
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

function getCachedPrerender(path: string): string | null {
  const cached = prerenderCache.get(path);
  if (!cached) return null;
  if (Date.now() - cached.cachedAt > CACHE_TTL) {
    prerenderCache.delete(path);
    return null;
  }
  return cached.body;
}

function sendPrerenderResponse(res: Response, reqPath: string, body: string, source: string) {
  res.setHeader('Content-Type', 'text/html; charset=utf-8');
  res.setHeader('X-SEO-Rendered', 'true');
  res.setHeader('X-SSR-Source', source);
  res.setHeader('X-Robots-Tag', 'index, follow, max-image-preview:large, max-snippet:-1');
  res.setHeader('Content-Language', 'de-DE');
  res.setHeader('Vary', 'User-Agent, Accept-Encoding');
  res.setHeader('Cache-Control', 'public, max-age=300, s-maxage=60, stale-while-revalidate=600');
  res.setHeader('Surrogate-Control', 'max-age=60');

  const canonicalUrl = `https://aquapro24.de${reqPath === '/' ? '' : reqPath}`;
  res.setHeader('Link', [
    `<${canonicalUrl}>; rel="canonical"`,
    '</assets/index.css>; rel="preload"; as="style"',
    '<https://fonts.googleapis.com>; rel="preconnect"'
  ].join(', '));

  return res.status(200).send(body);
}

export function createPrerenderMiddleware() {
  return async function prerenderMiddleware(req: Request, res: Response, next: NextFunction) {
    if (!PRERENDER_TOKEN) {
      return next();
    }

    if (!shouldServePrerender(req)) {
      return next();
    }

    let reqPath = req.path;
    if (reqPath !== '/' && reqPath.endsWith('/')) {
      reqPath = reqPath.slice(0, -1);
    }

    const cachedBody = getCachedPrerender(reqPath);
    if (cachedBody) {
      console.log(`[Prerender] CACHE HIT: ${Math.round(cachedBody.length / 1024)}KB für ${reqPath}`);
      return sendPrerenderResponse(res, reqPath, cachedBody, 'prerender-cache');
    }

    const targetUrl = `https://${SITE_HOST}${req.originalUrl}`;
    const startTime = Date.now();
    const ua = (req.headers['user-agent'] || '').substring(0, 60);
    console.log(`[Prerender] LIVE fetch für ${reqPath} (${ua})`);

    try {
      const prerenderResponse = await fetchFromPrerender(targetUrl);
      const duration = Date.now() - startTime;

      const validation = validatePrerenderResponse(prerenderResponse.body, prerenderResponse.statusCode);

      if (!validation.valid) {
        console.log(`[Prerender] FALLBACK (${duration}ms): ${validation.reason} -> eigene SSR für ${reqPath}`);
        return next();
      }

      prerenderCache.set(reqPath, { body: prerenderResponse.body, cachedAt: Date.now() });
      console.log(`[Prerender] OK (${duration}ms): ${Math.round(prerenderResponse.body.length / 1024)}KB für ${reqPath} -> gecacht`);

      return sendPrerenderResponse(res, reqPath, prerenderResponse.body, 'prerender-io');

    } catch (err: any) {
      const duration = Date.now() - startTime;
      console.log(`[Prerender] FEHLER (${duration}ms): ${err.message} -> eigene SSR für ${reqPath}`);
      return next();
    }
  };
}

export async function warmPrerenderCache(): Promise<void> {
  if (!PRERENDER_TOKEN) {
    console.log('[Prerender-Warm] Kein PRERENDER_TOKEN - Warming übersprungen');
    return;
  }

  const allPaths = getAllSeoRoutes();
  console.log(`[Prerender-Warm] Starte Vorladung von ${allPaths.length} Seiten von Prerender.io...`);

  const batchSize = 3;
  let success = 0;
  let errors = 0;

  for (let i = 0; i < allPaths.length; i += batchSize) {
    const batch = allPaths.slice(i, i + batchSize);

    const promises = batch.map(async (urlPath) => {
      try {
        const targetUrl = `https://${SITE_HOST}${urlPath}`;
        const response = await fetchFromPrerender(targetUrl);
        const validation = validatePrerenderResponse(response.body, response.statusCode);

        if (validation.valid) {
          prerenderCache.set(urlPath, { body: response.body, cachedAt: Date.now() });
          success++;
        } else {
          console.log(`[Prerender-Warm] ${urlPath}: ${validation.reason}`);
          errors++;
        }
      } catch (e: any) {
        console.log(`[Prerender-Warm] ${urlPath}: ${e.message}`);
        errors++;
      }
    });

    await Promise.all(promises);

    if (i + batchSize < allPaths.length) {
      await new Promise(r => setTimeout(r, 500));
    }
  }

  const totalSize = Array.from(prerenderCache.values()).reduce((sum, v) => sum + v.body.length, 0);
  console.log(`[Prerender-Warm] Fertig: ${success}/${allPaths.length} geladen (${Math.round(totalSize / 1024 / 1024)}MB), ${errors} Fehler`);
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
