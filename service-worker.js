// CODELAB: Add list of files to cache here.
const FILES_TO_CACHE = [
    '/index.html',
    '/tr/index.html'
];

evt.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      console.log('[ServiceWorker] Pre-caching offline page');
      return cache.addAll(FILES_TO_CACHE);
    })
);