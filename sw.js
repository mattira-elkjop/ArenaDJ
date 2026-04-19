// Arena DJ Service Worker — v4
// Strategy: network-first for the app shell, cache as fallback.
// This ensures updates are picked up immediately when online,
// without requiring the user to clear cookies or app data.

const CACHE = 'arena-dj-v4';

// Files to cache for offline fallback
const SHELL = [
  './',
  './index.html',
  './icon-192.png',
  './icon-512.png',
  './manifest.json',
];

// ── Install: cache the app shell ────────────────────────────────────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE)
      .then(c => c.addAll(SHELL).catch(() => {})) // silent fail — don't block install
      .then(() => self.skipWaiting())              // activate immediately, don't wait for old SW to die
  );
});

// ── Activate: delete old caches, claim all clients immediately ──────────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim()) // take control of all open tabs/windows immediately
  );
});

// ── Fetch: network-first, cache as fallback ─────────────────────────────────
self.addEventListener('fetch', e => {
  const url = new URL(e.request.url);

  // Never intercept cross-origin requests (YouTube, Google APIs, fonts)
  if (url.origin !== location.origin) return;

  // Only handle GET requests
  if (e.request.method !== 'GET') return;

  e.respondWith(
    fetch(e.request)
      .then(response => {
        // Got a fresh response — update the cache with it
        if (response.ok) {
          const clone = response.clone();
          caches.open(CACHE).then(c => c.put(e.request, clone));
        }
        return response;
      })
      .catch(() => {
        // Network failed — serve from cache (offline fallback)
        return caches.match(e.request)
          .then(cached => cached || new Response('Offline', { status: 503 }));
      })
  );
});
