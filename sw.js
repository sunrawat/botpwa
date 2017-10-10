var cacheName = 'JiraBotv4';
var filesToCache = [
  '/',
  'index.html',
  'css/style.css',
  'js/jquery.min.js',
  'js/app.js',
  'sdk/aws-sdk-2.41.0.min.js',
  'chat-background.jpg',
  'DMI_Logo.svg.png',
];
this.addEventListener('install', function(e) {
  console.log('[ServiceWorker] Install');
  e.waitUntil(
    caches.open(cacheName).then(function(cache) {
      console.log('[ServiceWorker] Caching app shell');
      return cache.addAll(filesToCache);
    })
  );
});

this.addEventListener('fetch', function(e) {
  console.log('[ServiceWorker] Fetch', e.request.url);
  e.respondWith(
    caches.match(e.request).then(function(response) {
      return response || fetch(e.request);
    })
  );
});

this.addEventListener('activate', function(e) {
  console.log('[ServiceWorker] Activate');
  debugger;
  e.waitUntil(
    caches.keys().then(function(keyList) {
      return Promise.all(keyList.map(function(key) {
        if (key !== cacheName) {
          console.log('[ServiceWorker] Removing old cache', key);
          return caches.delete(key);
        }
      }));
    })
  );
  return self.clients.claim();
});