// update this release when updating workbox-build
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
);

workbox.setConfig({
  debug: false
});

// workbox.googleAnalytics.initialize();

workbox.precaching.precacheAndRoute([{"revision":"41d6952060d18d28ca0c16a07433b43a","url":"404.html"},{"revision":"0b3bb9afda6ee9a7dcb9445ee63d945a","url":"assets/index.7c6d32fa.js"},{"revision":"2d23de4c421cd6addf423f96b2295fb9","url":"assets/index.9db0d3fc.css"},{"revision":"e3ea026beffcfd66a526e1c01985ee2c","url":"assets/vendor.23ee96ca.js"},{"revision":"f902d715faa9a497b0babf8ac8c37221","url":"icons/114X114-icon.png"},{"revision":"51f9624739569b0e47d484e793e2d2ef","url":"icons/144X144-icon.png"},{"revision":"cfed735b581f09f437db2b05a9fb637f","url":"icons/512X512-icon.png"},{"revision":"d89a4e1a8200aa8506caffd810dfb328","url":"icons/57X57-icon.png"},{"revision":"3f0083b32c218bd34db4c003574e4df9","url":"icons/72X72-icon.png"},{"revision":"0b102a3cd0e547edd1b598b10680af30","url":"icons/favicon.ico"},{"revision":"de2a882f928ce7c71796685f17aa434c","url":"icons/favicon.png"},{"revision":"25b8fc2ffe480dd96443ca53f180f69d","url":"index.html"}]);

workbox.routing.registerRoute(
  ({ url }) => url.pathname.startsWith('/'),
  new workbox.strategies.NetworkFirst()
);

workbox.routing.registerRoute(
  new RegExp('https://api.github.com/users/edm00se'),
  new workbox.strategies.CacheFirst({
    cacheName: 'github-user-api'
  })
);

workbox.routing.registerRoute(
  new RegExp('https://avatars3.githubusercontent.com/u/622118?v=4'),
  new workbox.strategies.CacheFirst({
    cacheName: 'github-user-profile-image'
  })
);
