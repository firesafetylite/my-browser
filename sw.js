// sw.js — Ultraviolet Service Worker entry point
// This file must be at the root of your site (same scope as index.html)

importScripts('/uv.bundle.js');
importScripts('/uv.config.js');
importScripts('/uv.sw.js');

const sw = new UVServiceWorker();

self.addEventListener('fetch', event => {
  event.respondWith(
    (async () => {
      if (sw.route(event)) {
        return await sw.fetch(event);
      }
      return await fetch(event.request);
    })()
  );
});
