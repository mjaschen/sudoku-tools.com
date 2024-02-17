const cacheName = "cache-vCACHE_BUSTER";
const precacheResources = [
    "/",
    "/index.html",
    "/alpine.js",
    "/main.js",
    "/style.css",
    "/manifest.json",
    "/favicon.ico",
    "/android-icon-144x144.png",
    "/android-icon-192x192.png",
    "/android-icon-36x36.png",
    "/android-icon-48x48.png",
    "/android-icon-72x72.png",
    "/android-icon-96x96.png",
    "/apple-icon-114x114.png",
    "/apple-icon-120x120.png",
    "/apple-icon-144x144.png",
    "/apple-icon-152x152.png",
    "/apple-icon-180x180.png",
    "/apple-icon-57x57.png",
    "/apple-icon-60x60.png",
    "/apple-icon-72x72.png",
    "/apple-icon-76x76.png",
    "/apple-icon-precomposed.png",
    "/apple-icon.png",
    "/browserconfig.xml",
    "/favicon-16x16.png",
    "/favicon-32x32.png",
    "/favicon-96x96.png",
    "/ms-icon-144x144.png",
    "/ms-icon-150x150.png",
    "/ms-icon-310x310.png",
    "/ms-icon-70x70.png",
];

self.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cacheName).then((cache) => cache.addAll(precacheResources))
    );
});

self.addEventListener("activate", (event) => {
});

self.addEventListener("fetch", (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            if (cachedResponse) {
                return cachedResponse;
            }
            return fetch(event.request);
        })
    );
});
