const CACHE = 'influencer-album-v22';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './img/face-anchor.webp',
  './img/studio-1.webp', './img/studio-2.webp', './img/studio-3.webp', './img/studio-4.webp',
  './img/zoom-1.webp', './img/zoom-2.webp', './img/zoom-3.webp', './img/zoom-4.webp',
  './img/front-1.webp', './img/front-2.webp', './img/front-3.webp', './img/front-4.webp',
  './img/life-1.webp', './img/life-2.webp', './img/life-3.webp', './img/life-4.webp',
  './img/var-1.webp', './img/var-2.webp', './img/var-4.webp',
  './img/var-5.webp', './img/var-6.webp', './img/var-7.webp', './img/var-8.webp',
  './img/self-1.webp', './img/self-2.webp',
  './img/out-1.webp', './img/out-3.webp',
  './img/lie-1.webp', './img/lie-2.webp', './img/lie-3.webp', './img/lie-4.webp',
  './img/bold-1.webp', './img/bold-2.webp', './img/bold-3.webp', './img/bold-4.webp',
  './img/bold-5.webp', './img/bold-6.webp', './img/bold-7.webp', './img/bold-8.webp',
  './img/mini-1.webp', './img/mini-2.webp', './img/mini-3.webp', './img/mini-4.webp',
  './img/mini-5.webp', './img/mini-6.webp', './img/mini-7.webp', './img/mini-8.webp',
  './img/mini-9.webp', './img/mini-10.webp', './img/mini-11.webp', './img/mini-12.webp',
  './img/mini-13.webp', './img/mini-14.webp', './img/mini-15.webp', './img/mini-16.webp',
  './img/mini-17.webp', './img/mini-18.webp', './img/mini-19.webp', './img/mini-20.webp',
  './img/mini-21.webp', './img/mini-22.webp', './img/mini-23.webp', './img/mini-24.webp'];
self.addEventListener('install', (e) => {
  e.waitUntil(caches.open(CACHE).then((c) => c.addAll(CORE)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', (e) => {
  e.waitUntil(
    caches.keys().then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim())
  );
});
self.addEventListener('fetch', (e) => {
  if (e.request.method !== 'GET') return;
  e.respondWith(
    fetch(e.request).then((res) => {
      const copy = res.clone();
      caches.open(CACHE).then((c) => c.put(e.request, copy));
      return res;
    }).catch(() => caches.match(e.request, { ignoreSearch: true }))
  );
});
