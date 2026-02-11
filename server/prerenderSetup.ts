import prerender from 'prerender-node';
import { seoPages, stadtteileData } from './seoContent';

const PRERENDER_TOKEN = process.env.PRERENDER_TOKEN || '';
const SITE_HOST = 'aquapro24.de';

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

export function createPrerenderMiddleware() {
  const middleware = prerender
    .set('prerenderToken', PRERENDER_TOKEN)
    .set('protocol', 'https')
    .set('host', SITE_HOST)
    .set('forwardHeaders', true)
    .set('afterRender', (err: any, _req: any, prerenderRes: any) => {
      if (err) {
        console.log(`[Prerender] Fehler - Fallback auf eigene SSR: ${err.message || err}`);
        return { cancelRender: true };
      }

      const body = prerenderRes?.body || '';
      const statusCode = prerenderRes?.statusCode || 0;

      if (statusCode >= 500) {
        console.log(`[Prerender] Server-Fehler ${statusCode} - Fallback auf eigene SSR`);
        return { cancelRender: true };
      }

      if (!body || body.length < 500) {
        console.log(`[Prerender] Leere/kurze Antwort (${body.length} Bytes) - Fallback auf eigene SSR`);
        return { cancelRender: true };
      }

      const hasJsonLd = body.includes('application/ld+json');
      const hasMetaDescription = body.includes('meta name="description"');
      const hasH1 = body.includes('<h1') || body.includes('<H1');

      if (!hasJsonLd || !hasMetaDescription) {
        console.log(`[Prerender] Unvollständig (JSON-LD: ${hasJsonLd}, Meta: ${hasMetaDescription}) - Fallback auf eigene SSR`);
        return { cancelRender: true };
      }

      console.log(`[Prerender] OK - Vollständiges HTML geliefert (${body.length} Bytes, H1: ${hasH1})`);
    });

  middleware.set('blacklisted', [
    '^/api/',
    '^/assets/',
    '\\.js$',
    '\\.css$',
    '\\.png$',
    '\\.jpg$',
    '\\.jpeg$',
    '\\.gif$',
    '\\.ico$',
    '\\.svg$',
    '\\.webp$',
    '\\.woff$',
    '\\.woff2$',
    '\\.ttf$',
    '\\.eot$',
    '\\.map$',
  ]);

  return middleware;
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
