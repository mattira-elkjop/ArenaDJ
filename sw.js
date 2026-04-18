// Arena DJ — Service Worker
// Enables standalone fullscreen launch when installed to home screen.
// Uses relative URLs so this works at any subdirectory path.

const CACHE = 'arena-dj-v2';

// Cache the app shell on install
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      // Cache relative to the SW scope (works at any subdirectory)
      return cache.addAll([
        './',
        './index.html',
        './icon-192.png',
        './icon-512.png'
      ]).catch(() => {
        // Partial failure is ok — SW still activates
      });
    }).then(() => self.skipWaiting())
  );
});

// Clean up old caches on activate
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

// Fetch: serve app shell from cache; let YouTube/Google pass through untouched
self.addEventListener('fetch', e => {
  const url = e.request.url;

  // Never intercept YouTube, Google APIs, or font requests
  if (
    url.includes('youtube.com') ||
    url.includes('ytimg.com') ||
    url.includes('googleapis.com') ||
    url.includes('google.com') ||
    url.includes('fonts.g') ||
    url.includes('gstatic.com')
  ) {
    return; // let browser handle it normally
  }

  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
