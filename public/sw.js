const CACHE_NAME = 'datsuichi-cache-v1';

// Install event: trigger caching and skip waiting to activate immediately
self.addEventListener('install', (event) => {
  self.skipWaiting();
});

// Activate event: take control and clean up old caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then(keys => Promise.all(
      keys.filter(key => key !== CACHE_NAME).map(key => caches.delete(key))
    )).then(() => self.clients.claim())
  );
});

// Fetch event: Apply stale-while-revalidate strategy for the best performance and offline support
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;
  const url = new URL(event.request.url);
  
  // Only cache HTTP and HTTPS requests
  if (!url.protocol.startsWith('http')) return;

  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request).then((networkResponse) => {
        // Cache valid responses (including opaque responses for cross-origin images)
        if (networkResponse && (networkResponse.status === 200 || networkResponse.type === 'opaque')) {
          const responseToCache = networkResponse.clone();
          caches.open(CACHE_NAME).then((cache) => {
            cache.put(event.request, responseToCache);
          });
        }
        return networkResponse;
      }).catch((error) => {
        console.warn('Network fetch failed, relying on cache:', error);
        return cachedResponse;
      });

      // Return cached response immediately if available (stale), while network fetches fresh (revalidate)
      // If not in cache, wait for fetchPromise
      return cachedResponse || fetchPromise;
    })
  );
});
