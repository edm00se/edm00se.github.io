// advanced config for injectManifest approach
importScripts('https://storage.googleapis.com/workbox-cdn/releases/3.6.3/workbox-sw.js');

workbox.precaching.precacheAndRoute([
  {
    "url": "114X114-icon.9779a4fb.png",
    "revision": "f902d715faa9a497b0babf8ac8c37221"
  },
  {
    "url": "144X144-icon.35f48887.png",
    "revision": "51f9624739569b0e47d484e793e2d2ef"
  },
  {
    "url": "404.html",
    "revision": "d3478fa77df06dbdd7d44e472e95f8cd"
  },
  {
    "url": "512X512-icon.4672daac.png",
    "revision": "cfed735b581f09f437db2b05a9fb637f"
  },
  {
    "url": "57X57-icon.8838d0f2.png",
    "revision": "d89a4e1a8200aa8506caffd810dfb328"
  },
  {
    "url": "72X72-icon.6ecebbf7.png",
    "revision": "3f0083b32c218bd34db4c003574e4df9"
  },
  {
    "url": "favicon.b410bd2b.ico",
    "revision": "0b102a3cd0e547edd1b598b10680af30"
  },
  {
    "url": "favicon.cf4fa0c7.png",
    "revision": "de2a882f928ce7c71796685f17aa434c"
  },
  {
    "url": "index.html",
    "revision": "7f5bf731f3bf40dcb0c72788c085717d"
  },
  {
    "url": "main.27f401d4.css",
    "revision": "0040c4b9c05b5dd44b0fac6e1c65b714"
  },
  {
    "url": "main.e52008f1.js",
    "revision": "206aa36dec7878f36faf1a47c848e260"
  }
]);

workbox.routing.registerRoute(
  new RegExp('https://api.github.com/users/edm00se'),
  workbox.strategies.cacheFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://avatars3.githubusercontent.com/u/622118?v=4'),
  workbox.strategies.cacheFirst()
);
