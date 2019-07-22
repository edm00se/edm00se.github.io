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
    "revision": "23a2348869ead347fb6e45b7b529251f"
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
    "revision": "e413d1cb62e74abeeeda1c3b826fc5fa"
  },
  {
    "url": "main.1bcedc80.js",
    "revision": "685cb2dedbe83fff849d3b1bda42954d"
  },
  {
    "url": "main.93a5e812.css",
    "revision": "79f299ec318dfc4f11d032e244c927e7"
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
