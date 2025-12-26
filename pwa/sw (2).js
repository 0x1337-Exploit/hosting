self.addEventListener('install', (event) => {
  console.log('Service Worker installed');
});

self.addEventListener('activate', (event) => {
  console.log('Service Worker activated');
});

self.addEventListener('fetch', (event) => {
  // Minimal fetch handler; no caching implemented for this test.
  event.respondWith(fetch(event.request));
});
