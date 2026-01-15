const CACHE_NAME = 'hockey-board-v1';
const urlsToCache = [
  './',
  './index.html',
  './konva.min.js'
];

// インストール時にキャッシュする
self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        return cache.addAll(urlsToCache);
      })
  );
});

// オフライン時にキャッシュからデータを返す
self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        if (response) {
          return response;
        }
        return fetch(event.request);
      })
  );
});
