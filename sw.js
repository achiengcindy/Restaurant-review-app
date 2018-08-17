const staticCacheName = 'restaurant-review-v8'; //name of our cache

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

/* Deleting old cache */
self.addEventListener('activate', event => {
	event.waitUntil(
		caches.keys().then(cacheNames => {
				return Promise.all(
						cacheNames.filter(cacheName => {
								return (cacheName !== staticCacheName);
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


  
  