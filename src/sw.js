// stub for prod sw w/ parcel
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

console.log('this is my custom service worker');

workbox.precaching.precacheAndRoute([]);

workbox.routing.registerRoute(
  new RegExp('https://api.github.com/users/edm00se'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://avatars3.githubusercontent.com/u/622118?v=4'),
  workbox.strategies.cacheFirst()
);
