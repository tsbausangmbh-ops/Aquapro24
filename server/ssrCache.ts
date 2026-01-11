// SSR Cache für optimale Performance
// Pre-generates und cached alle SSR-Seiten beim Serverstart

import crypto from 'crypto';
import zlib from 'zlib';
import { promisify } from 'util';

const gzipAsync = promisify(zlib.gzip);
const brotliAsync = promisify(zlib.brotliCompress);

interface CacheEntry {
  html: string;
  minified: string;
  gzipped: Buffer;
  brotli: Buffer;
  etag: string;
  generatedAt: number;
}

// HTML Minification - entfernt unnötige Whitespaces
function minifyHTML(html: string): string {
  return html
    // Entferne HTML-Kommentare (außer IE conditionals und Schema)
    .replace(/<!--(?!\[if|\s*@)[\s\S]*?-->/g, '')
    // Reduziere mehrfache Whitespaces zu einem
    .replace(/\s{2,}/g, ' ')
    // Entferne Whitespace zwischen Tags
    .replace(/>\s+</g, '><')
    // Entferne Whitespace am Anfang/Ende von Tags
    .replace(/\s+>/g, '>')
    .replace(/<\s+/g, '<')
    // Entferne Leerzeilen
    .replace(/^\s*[\r\n]/gm, '')
    .trim();
}

class SSRCache {
  private cache: Map<string, CacheEntry> = new Map();
  private isWarmed = false;
  
  async set(path: string, html: string): Promise<CacheEntry> {
    // Minify HTML first
    const minified = minifyHTML(html);
    const etag = this.generateETag(minified);
    
    // Komprimiere parallel für bessere Performance
    const [gzipped, brotli] = await Promise.all([
      gzipAsync(minified),
      brotliAsync(minified, {
        params: {
          [zlib.constants.BROTLI_PARAM_QUALITY]: 6, // Balanced quality/speed
          [zlib.constants.BROTLI_PARAM_MODE]: zlib.constants.BROTLI_MODE_TEXT
        }
      })
    ]);
    
    const entry: CacheEntry = {
      html,
      minified,
      gzipped,
      brotli,
      etag,
      generatedAt: Date.now()
    };
    
    this.cache.set(path, entry);
    return entry;
  }
  
  get(path: string): CacheEntry | undefined {
    return this.cache.get(path);
  }
  
  has(path: string): boolean {
    return this.cache.has(path);
  }
  
  private generateETag(content: string): string {
    const hash = crypto.createHash('md5').update(content).digest('hex');
    return `"${hash.substring(0, 16)}"`;
  }
  
  getSize(): number {
    return this.cache.size;
  }
  
  setWarmed(value: boolean): void {
    this.isWarmed = value;
  }
  
  isReady(): boolean {
    return this.isWarmed;
  }
  
  clear(): void {
    this.cache.clear();
    this.isWarmed = false;
  }
  
  getStats(): { pages: number; totalSize: number; avgSize: number } {
    let totalSize = 0;
    this.cache.forEach(entry => {
      totalSize += entry.html.length + entry.gzipped.length;
    });
    
    return {
      pages: this.cache.size,
      totalSize,
      avgSize: this.cache.size > 0 ? Math.round(totalSize / this.cache.size) : 0
    };
  }
}

export const ssrCache = new SSRCache();

// Cache-Warming Funktion
export async function warmSSRCache(
  routes: string[],
  generateFn: (path: string) => string
): Promise<void> {
  console.log(`[SSR-Cache] Warming ${routes.length} pages...`);
  const startTime = Date.now();
  
  let cached = 0;
  let errors = 0;
  
  for (const route of routes) {
    try {
      const html = generateFn(route);
      await ssrCache.set(route, html);
      cached++;
    } catch (e) {
      console.error(`[SSR-Cache] Error caching ${route}:`, e);
      errors++;
    }
  }
  
  ssrCache.setWarmed(true);
  const duration = Date.now() - startTime;
  const stats = ssrCache.getStats();
  
  console.log(`[SSR-Cache] Warmed ${cached} pages in ${duration}ms`);
  console.log(`[SSR-Cache] Total size: ${Math.round(stats.totalSize / 1024)}KB, Avg: ${Math.round(stats.avgSize / 1024)}KB/page`);
  
  if (errors > 0) {
    console.warn(`[SSR-Cache] ${errors} pages failed to cache`);
  }
}
