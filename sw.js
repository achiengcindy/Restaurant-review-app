const staticCacheName = 'restaurant-review-v10'; //name of our cache

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(staticCacheName).then(cache => {
      return cache.addAll([
        "/",
        "js/dbhelper.js",
        "js/main.js",
        "js/restaurant_info.js",
        "css/custom.css",
        "css/styles.css",
        "data/restaurants-modified.json",
         "index.html",
        // "restaurant.html",
        "restaurant.html?id=1",
        "restaurant.html?id=2",
        "restaurant.html?id=3",
        "restaurant.html?id=4",
        "restaurant.html?id=5",
        "restaurant.html?id=6",
        "restaurant.html?id=7",
        "restaurant.html?id=8",
        "restaurant.html?id=9",
        "restaurant.html?id=10",
        "https://unpkg.com/leaflet@1.3.1/dist/leaflet.js",
        "https://unpkg.com/leaflet@1.3.1/dist/leaflet.css"
      ]);
    })
  );
});

/* Deleting old cache */
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
				return Promise.all(
						cacheNames.filter(cacheName => {
              return cacheName.startsWith('restaurant-review-') && cacheName !== staticCacheName;
								// return (cacheName !== staticCacheName);
						}).map(cacheName => caches.delete(cacheName))
				)
		}).catch(err => console.log(err.stack()))
	)
});

self.addEventListener('fetch', event => {
    event.respondWith(
      caches.match(event.request).then((response) => {
        if(response){
          return response;
        }
        return fetch(event.request);
      })
    );
  });


  
  