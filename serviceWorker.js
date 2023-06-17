const staticWeatherApp = "weather-app-v1"
const assets = [
    "/",
    "index.html",
    "assets/css/main.css",
    "assets/js/app.js",
    "assets/video/thunder.mp4",
]

self.addEventListener("install", installEvent => {
    installEvent.waitUntil(
        caches.open(staticWeatherApp).then(cache => {
            cache.addAll(assets)
        })
    )
})

self.addEventListener("fetch", fetchEvent => {
    fetchEvent.respondWith(
        caches.match(fetchEvent.request).then(res => {
            return res || fetch(fetchEvent.request)
        })
    )
})
