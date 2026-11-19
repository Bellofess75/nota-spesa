/* Service worker: fa funzionare la app anche senza rete.
   Per pubblicare un aggiornamento cambia il numero di VERSIONE qui sotto. */
const VERSIONE = "nota-spese-v14-r4";
const GUSCIO = ["./", "index.html", "manifest.webmanifest",
  "icons/icon-192.png", "icons/icon-512.png", "icons/maskable-512.png", "icons/apple-touch-icon.png"];

self.addEventListener("install", e => {
  e.waitUntil((async () => {
    const c = await caches.open(VERSIONE);
    await c.addAll(GUSCIO);
    await self.skipWaiting();
  })());
});

self.addEventListener("activate", e => {
  e.waitUntil((async () => {
    for (const k of await caches.keys()) if (k !== VERSIONE) await caches.delete(k);
    await self.clients.claim();
  })());
});

self.addEventListener("fetch", e => {
  const r = e.request;
  if (r.method !== "GET") return;
  const u = new URL(r.url);
  if (u.origin !== location.origin) return;    // il resto passa dalla rete
  if (r.mode === "navigate") {                 // pagina: prima la rete, poi la copia salvata
    e.respondWith(fetch(r).then(x => { const cp = x.clone(); caches.open(VERSIONE).then(c => c.put("index.html", cp)); return x; })
      .catch(() => caches.match("index.html")));
    return;
  }
  e.respondWith(caches.match(r).then(m => m || fetch(r).then(x => { const cp = x.clone(); caches.open(VERSIONE).then(c => c.put(r, cp)); return x; })));
});
