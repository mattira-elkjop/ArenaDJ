// Arena DJ — Service Worker
// Enables "Add to Home Screen" install prompt and standalone fullscreen launch.
// Cache strategy: cache-first for the app shell, network-first for YouTube API calls.

const CACHE = 'arena-dj-v1';
const SHELL = ['./index.html', './manifest.json', './icon-192.png', './icon-512.png'];

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(c => c.addAll(SHELL)).then(() => self.skipWaiting())
  );
});

self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
    ).then(() => self.clients.claim())
  );
});

self.addEventListener('fetch', e => {
  const url = e.request.url;
  // Pass YouTube and Google API requests straight through — never cache them
  if (url.includes('youtube.com') || url.includes('ytimg.com') || url.includes('googleapis.com') || url.includes('google.com') || url.includes('fonts.g')) {
    return;
  }
  e.respondWith(
    caches.match(e.request).then(cached => cached || fetch(e.request))
  );
});
