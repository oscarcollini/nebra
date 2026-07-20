const CACHE_NAME = 'nebra-offline-v0-9-91';
const SCOPE = self.registration.scope;
const INDEX_URL = new URL('index.html', SCOPE).href;
const CORE_URLS = [
  '',
  'index.html',
  'manifest.webmanifest',
  'icon-192.png',
  'icon-512.png',
  'apple-touch-icon.png',
  'profilo-di-prova.txt'
].map(path => new URL(path, SCOPE).href);

self.addEventListener('install', event => {
  event.waitUntil(caches.open(CACHE_NAME).then(cache => cache.addAll(CORE_URLS)));
  self.skipWaiting();
});

self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    ))
  );
  self.clients.claim();
});

self.addEventListener('fetch', event => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  if (url.origin !== self.location.origin || !url.href.startsWith(SCOPE)) return;

  event.respondWith(
    fetch(event.request).then(response => {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(cache => cache.put(event.request, copy));
      }
      return response;
    }).catch(async () => {
      const cached = await caches.match(event.request, {ignoreSearch:true});
      if (cached) return cached;
      if (event.request.mode === 'navigate') return caches.match(INDEX_URL);
      return Response.error();
    })
  );
});
