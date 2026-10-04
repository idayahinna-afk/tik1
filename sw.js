/* Service worker opsional: membuat halaman ini terbuka penuh tanpa internet.
   Letakkan di folder yang sama dengan index.html. index.html tetap bekerja
   tanpa berkas ini. */
const C = 'petak-v1';
const ASSETS = ['./', './index.html', './manifest.webmanifest', './icon.svg'];
self.addEventListener('install', e => {
  e.waitUntil(caches.open(C).then(c => c.addAll(ASSETS)).then(() => self.skipWaiting()));
});
self.addEventListener('activate', e => {
  e.waitUntil(caches.keys().then(k => Promise.all(k.filter(x => x !== C).map(x => caches.delete(x)))).then(() => self.clients.claim()));
});
self.addEventListener('fetch', e => {
  const r = e.request;
  if (r.method !== 'GET') return;
  const url = new URL(r.url);
  if (url.origin !== location.origin) return;           // gambar Commons diurus IndexedDB
  e.respondWith(
    caches.match(r).then(hit => hit || fetch(r).then(res => {
      const copy = res.clone();
      caches.open(C).then(c => c.put(r, copy)).catch(() => {});
      return res;
    }).catch(() => caches.match('./index.html')))
  );
});
