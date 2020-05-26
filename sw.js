// advanced config for injectManifest approach
importScripts('https://storage.googleapis.com/workbox-cdn/releases/5.0.0/workbox-sw.js');

workbox.setConfig({
  debug: false
});

// enable workbox GA
workbox.googleAnalytics.initialize();

workbox.precaching.precacheAndRoute([{"revision":"f902d715faa9a497b0babf8ac8c37221","url":"114X114-icon.9779a4fb.png"},{"revision":"51f9624739569b0e47d484e793e2d2ef","url":"144X144-icon.35f48887.png"},{"revision":"d3478fa77df06dbdd7d44e472e95f8cd","url":"404.html"},{"revision":"cfed735b581f09f437db2b05a9fb637f","url":"512X512-icon.4672daac.png"},{"revision":"d89a4e1a8200aa8506caffd810dfb328","url":"57X57-icon.8838d0f2.png"},{"revision":"3f0083b32c218bd34db4c003574e4df9","url":"72X72-icon.6ecebbf7.png"},{"revision":"0b102a3cd0e547edd1b598b10680af30","url":"favicon.b410bd2b.ico"},{"revision":"de2a882f928ce7c71796685f17aa434c","url":"favicon.cf4fa0c7.png"},{"revision":"8ec7700ba48b7fbd5161f4a4f9cd0fc1","url":"index.html"},{"revision":"53b6a7beab311d98e86467eda2a516e2","url":"main.50c2f037.js"},{"revision":"0040c4b9c05b5dd44b0fac6e1c65b714","url":"main.c5d7b5d8.css"}]);

workbox.routing.registerRoute(
  new RegExp('https://api.github.com/users/edm00se'),
  new workbox.strategies.CacheFirst({
    cacheName: "github-user-api"
  })
);

workbox.routing.registerRoute(
  new RegExp('https://avatars3.githubusercontent.com/u/622118?v=4'),
  new workbox.strategies.CacheFirst({
    cacheName: "github-user-profile-image"
  })
);
