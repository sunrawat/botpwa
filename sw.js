var cacheName = 'JiraBotv1';
var filesToCache = [];

this.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});
this.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
});

this.addEventListener('fetch', function(event) {
  // Do something interesting with the fetch here
});