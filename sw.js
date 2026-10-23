const CACHE='voidfall-three-shell-v1';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./game.js','./manifest.webmanifest']))));
self.addEventListener('activate',event=>event.waitUntil(self.clients.claim()));
self.addEventListener('fetch',event=>{const u=new URL(event.request.url);if(u.origin===location.origin)event.respondWith(caches.match(event.request).then(c=>c||fetch(event.request)));});
