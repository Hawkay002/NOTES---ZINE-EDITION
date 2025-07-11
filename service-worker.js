self.addEventListener('install', event => {
  event.waitUntil(
    caches.open('funky-notes-cache').then(cache => {
      return cache.addAll([
        '/',
        '/index.html',
        '/icon-192.png',
        '/icon-512.png',
        // Add other assets here
      ]);
    })
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request).then(response => response || fetch(event.request))
  );
}); 
