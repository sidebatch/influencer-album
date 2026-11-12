const CACHE = 'influencer-album-v96';
const CORE = ['./', './index.html', './manifest.webmanifest', './icon-192.png', './icon-512.png',
  './img/face-anchor.webp',
  './img/studio-1.webp', './img/studio-2.webp', './img/studio-3.webp', './img/studio-4.webp',
  './img/zoom-1.webp', './img/zoom-2.webp', './img/zoom-3.webp', './img/zoom-4.webp',
  './img/front-1.webp', './img/front-2.webp', './img/front-3.webp', './img/front-4.webp',
  './img/life-1.webp', './img/life-2.webp', './img/life-3.webp', './img/life-4.webp',
  './img/life-5.webp', './img/life-6.webp', './img/life-7.webp', './img/life-8.webp',
  './img/life-9.webp', './img/life-10.webp', './img/life-11.webp', './img/life-12.webp', './img/life-13.webp', './img/life-14.webp', './img/life-15.webp', './img/life-16.webp',
  './img/var-1.webp', './img/var-2.webp', './img/var-4.webp',
  './img/var-5.webp', './img/var-6.webp', './img/var-7.webp', './img/var-8.webp',
  './img/var-9.webp', './img/var-11.webp', './img/var-12.webp',
  './img/self-1.webp', './img/self-2.webp',
  './img/out-1.webp', './img/out-3.webp',
  './img/lie-1.webp', './img/lie-2.webp', './img/lie-3.webp', './img/lie-4.webp',
  './img/bold-1.webp', './img/bold-2.webp', './img/bold-3.webp', './img/bold-4.webp',
  './img/bold-5.webp', './img/bold-6.webp', './img/bold-7.webp', './img/bold-8.webp',
  './img/bold-9.webp', './img/bold-10.webp', './img/bold-11.webp', './img/bold-12.webp',
  './img/bold-13.webp', './img/bold-14.webp', './img/bold-15.webp', './img/bold-16.webp',
  './img/bold-17.webp', './img/bold-18.webp', './img/bold-19.webp', './img/bold-20.webp',
  './img/bold-21.webp',
  './img/mini-1.webp', './img/mini-2.webp', './img/mini-3.webp', './img/mini-4.webp',
  './img/mini-5.webp', './img/mini-6.webp', './img/mini-7.webp', './img/mini-8.webp',
  './img/mini-9.webp', './img/mini-10.webp', './img/mini-11.webp', './img/mini-12.webp',
  './img/mini-13.webp', './img/mini-14.webp', './img/mini-15.webp', './img/mini-16.webp',
  './img/mini-17.webp', './img/mini-18.webp', './img/mini-19.webp', './img/mini-20.webp',
  './img/mini-21.webp', './img/mini-22.webp', './img/mini-23.webp', './img/mini-24.webp',
  './img/lck-1.webp', './img/lck-2.webp', './img/lck-3.webp', './img/lck-4.webp',
  './img/lck-5.webp', './img/lck-6.webp', './img/lck-7.webp', './img/lck-8.webp',
  './img/lck-9.webp', './img/lck-10.webp', './img/lck-11.webp', './img/yui-1.webp', './img/yui-2.webp', './img/yui-3.webp', './img/yui-4.webp', './img/yui-5.webp', './img/yui-6.webp', './img/yui-7.webp', './img/yui-8.webp', './img/std-1.webp', './img/std-2.webp', './img/std-3.webp', './img/std-4.webp', './img/std-5.webp', './img/std-6.webp', './img/std-7.webp', './img/std-8.webp', './img/std-9.webp', './img/std-10.webp', './img/std-11.webp', './img/std-12.webp', './img/std-13.webp', './img/std-14.webp', './img/std-15.webp', './img/std-16.webp', './img/std-17.webp', './img/std-18.webp', './img/std-19.webp', './img/std-20.webp', './img/std-21.webp', './img/std-22.webp', './img/std-23.webp', './img/std-24.webp', './img/std-25.webp', './img/std-26.webp', './img/std-27.webp', './img/std-28.webp', './img/std-29.webp', './img/std-30.webp', './img/std-31.webp', './img/std-32.webp', './img/std-33.webp', './img/std-34.webp', './img/std-35.webp', './img/std-36.webp', './img/std-37.webp', './img/std-38.webp', './img/std-39.webp', './img/std-40.webp', './img/std-41.webp', './img/std-42.webp', './img/std-43.webp', './img/pool-1.webp', './img/pool-2.webp', './img/pool-3.webp', './img/pool-4.webp', './img/pool-5.webp', './img/pool-6.webp', './img/pool-7.webp', './img/pool-8.webp', './img/pool-9.webp', './img/pool-10.webp', './img/pool-11.webp', './img/pool-12.webp', './img/swim-1.webp', './img/swim-2.webp', './img/swim-3.webp', './img/swim-4.webp', './img/swim-5.webp', './img/swim-6.webp', './img/swim-7.webp', './img/swim-8.webp', './img/hw-1.webp', './img/hw-2.webp', './img/hw-3.webp', './img/hw-4.webp',
  './img/ciel-anchor-main.webp', './img/ciel-w1.webp', './img/ciel-w2.webp', './img/ciel-w3.webp', './img/ciel-w4.webp',
  './img/sena-anchor-main.webp', './img/sena-w1.webp', './img/sena-w2.webp', './img/sena-w3.webp', './img/sena-w4.webp',
  './img/sena-zoom-w1.webp', './img/sena-zoom-w2.webp', './img/sena-zoom-w3.webp', './img/sena-zoom-w4.webp',
  './img/sena-front-w1.webp', './img/sena-front-w2.webp', './img/sena-front-w3.webp', './img/sena-front-w4.webp',
  './img/sena-life-1.webp', './img/sena-life-w2.webp', './img/sena-life-w3.webp', './img/sena-life-4.webp', './img/sena-life-w5.webp', './img/sena-life-w6.webp', './img/sena-life-w7.webp', './img/sena-life-w8.webp', './img/sena-studio2-w1.webp', './img/sena-studio2-w2.webp', './img/sena-studio2-w3.webp', './img/sena-studio2-w4.webp', './img/sena-studio2-w5.webp', './img/sena-studio2-w6.webp', './img/sena-studio2-w7.webp', './img/sena-studio2-w8.webp', './img/sena-studio2-w9.webp', './img/sena-studio2-w10.webp', './img/sena-studio2-w11.webp', './img/sena-studio2-w12.webp', './img/sena-pool-w1.webp', './img/sena-pool-w2.webp', './img/sena-pool-3.webp', './img/sena-pool-w4.webp', './img/sena-pool-5.webp', './img/sena-swim-w1.webp', './img/sena-swim-w2.webp', './img/sena-swim-w3.webp', './img/sena-swim-w4.webp', './img/sena-swim-w5.webp', './img/sena-swim-w6.webp', './img/sena-swim-w7.webp', './img/sena-swim-w8.webp', './img/sena-swim-w9.webp', './img/sena-swim-w10.webp', './img/sena-swim-w11.webp', './img/sena-swim-w12.webp', './img/sena-swim-w13.webp', './img/sua-anchor-main2.webp', './img/sua-w1.webp', './img/sua-w2.webp', './img/sua-w3.webp', './img/sua-w4.webp', './img/lena-face-anchor.webp'];
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
