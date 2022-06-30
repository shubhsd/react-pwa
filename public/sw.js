let cachedData = "appV1";
// cached data would be the variable that would point to our cached data - check applications->cache->cache storage

// Caching files
this.addEventListener("install", (event) => {
    event.waitUntil(
        caches.open(cachedData).then((cache) => {
            cache.addAll([
                '/static/js/main.chunk.js',
                '/static/js/0.chunk.js',
                '/static/js/bundle.js',
                '/static/css/main.chunk.css',
                '/index.html',
                '/',
                "/users"
            ])
        })
    )
});

// Fetching cached data
this.addEventListener("fetch", (event) => {
    // Fetch data from cache if not online
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                }
                let requestUrl = event.request.clone();
                return fetch(requestUrl);
            })
        )
    }
})