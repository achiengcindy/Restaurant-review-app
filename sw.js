const cacheName = 'restaurant-review-v6'; //name of our cache

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(cacheName).then(cache => {
      return cache.addAll([
        "/",
        "js/dbhelper.js",
        "js/main.js",
        "js/restaurant_info.js",
        "css/custom.css",
        "css/styles.css",
        "data/restaurants.json",
        "index.html",
        "restaurant.html",
        "img/1.jpg",
        "img/2.jpg",
        "img/3.jpg",
        "img/4.jpg",
        "img/5.jpg",
        "img/6.jpg",
        "img/7.jpg",
        "img/8.jpg",
        "img/9.jpg",
        "img/10.jpg",
        "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
        "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
      ]);
    })
  );
});
/* offline first
fetch from cache then fallback to network */
self.addEventListener('fetch', event => {
    event.respondWith(
      // Fetch data from cache
      caches.match(event.request).then((response) => {
        // Check cache but fall back to network
        return response || fetch(event.request);
      })
    );
  });



  
  