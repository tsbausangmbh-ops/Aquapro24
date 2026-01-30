const CACHE_NAME = 'aquapro24-v2';
const STATIC_ASSETS = [
  '/',
  '/manifest.json',
  '/favicon.ico'
];

const CACHE_DURATION = {
  images: 30 * 24 * 60 * 60 * 1000,
  scripts: 7 * 24 * 60 * 60 * 1000,
  styles: 7 * 24 * 60 * 60 * 1000,
  fonts: 365 * 24 * 60 * 60 * 1000
};

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(STATIC_ASSETS);
    })
  );
  self.skipWaiting();
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((cacheNames) => {
      return Promise.all(
        cacheNames
          .filter((name) => name !== CACHE_NAME)
          .map((name) => caches.delete(name))
      );
    })
  );
  self.clients.claim();
});

self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  
  const url = new URL(event.request.url);
  
  if (url.pathname.startsWith('/api/')) {
    return;
  }
  
  const isImage = event.request.destination === 'image' || url.pathname.match(/\.(webp|jpg|jpeg|png|gif|svg|ico)$/i);
  const isFont = event.request.destination === 'font' || url.pathname.match(/\.(woff2?|ttf|eot)$/i);
  const isScript = event.request.destination === 'script' || url.pathname.match(/\.js$/i);
  const isStyle = event.request.destination === 'style' || url.pathname.match(/\.css$/i);
  
  if (isImage || isFont) {
    event.respondWith(
      caches.match(event.request).then((cached) => {
        if (cached) return cached;
        return fetch(event.request).then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        });
      })
    );
    return;
  }
  
  if (isScript || isStyle) {
    event.respondWith(
      fetch(event.request)
        .then((response) => {
          if (response.ok) {
            const clone = response.clone();
            caches.open(CACHE_NAME).then((cache) => {
              cache.put(event.request, clone);
            });
          }
          return response;
        })
        .catch(() => caches.match(event.request))
    );
    return;
  }
  
  event.respondWith(
    fetch(event.request)
      .then((response) => {
        if (response.ok && url.origin === location.origin) {
          const clone = response.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, clone);
          });
        }
        return response;
      })
      .catch(() => caches.match(event.request))
  );
});
