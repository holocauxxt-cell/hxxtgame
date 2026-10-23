const CACHE='voidfall-three-shell-v4';
self.addEventListener('install',event=>event.waitUntil(caches.open(CACHE).then(c=>c.addAll(['./','./index.html','./game.js','./manifest.webmanifest'])).then(()=>self.skipWaiting())));
self.addEventListener('activate',event=>event.waitUntil((async()=>{const keys=await caches.keys();await Promise.all(keys.filter(k=>k.startsWith('voidfall-three-shell-')&&k!==CACHE).map(k=>caches.delete(k)));await self.clients.claim()})()));
self.addEventListener('fetch',event=>{const u=new URL(event.request.url);if(u.origin===location.origin&&event.request.method==='GET')event.respondWith(caches.match(event.request).then(c=>c||fetch(event.request)));});
