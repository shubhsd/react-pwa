const CACHE_NAME = "version-1";
const urlsToCache = [
    'index.html',
    'offline.html',
    '/static/js/main.chunk.js',
    '/static/js/0.chunk.js',
    '/static/js/bundle.js',
    '/static/css/main.chunk.css',
    '/',
    "/users",
];

const self = this;

// Install SW
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open(CACHE_NAME)
            .then((cache) => {
                console.log('Opened cache');
                return cache.addAll(urlsToCache);
            })
            
    )
});

// Listen for requests
// self.addEventListener('fetch', (event) => {
//     event.respondWith(
//         caches.match(event.request)
//             .then(() => {
//                 return fetch(event.request)
//                     .catch(() => caches.match('offline.html'))
//             })
//     )
// });

// Fetching cached data
this.addEventListener("fetch", (event) => {
    // Fetch data from cache if not online
    if (!navigator.onLine) {
        event.respondWith(
            caches.match(event.request).then((result) => {
                if (result) {
                    return result;
                } else {
                    return fetch(event.request)
                }
                // let requestUrl = event.request.clone();
                // console.log(requestUrl, '-----');
                // return fetch(requestUrl);
            })
        )
    }
})

// Activate the SW
self.addEventListener('activate', (event) => {
    const cacheWhitelist = [];
    cacheWhitelist.push(CACHE_NAME);

    event.waitUntil(
        caches.keys().then((cacheNames) => Promise.all(
            cacheNames.map((cacheName) => {
                if (!cacheWhitelist.includes(cacheName)) {
                    return caches.delete(cacheName);
                }
            })
        ))

    )
});