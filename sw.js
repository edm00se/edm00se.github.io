// update this release when updating workbox-build
importScripts(
  'https://storage.googleapis.com/workbox-cdn/releases/6.1.1/workbox-sw.js'
);

workbox.setConfig({
  debug: false
});

// workbox.googleAnalytics.initialize();

workbox.precaching.precacheAndRoute([{"revision":"41d6952060d18d28ca0c16a07433b43a","url":"404.html"},{"revision":"966fab5bf37ae092cd03146886d9a611","url":"assets/index.5f665ede.js"},{"revision":"c85401cb4447b682201f3f86e95a99fd","url":"assets/index.8e62e7a1.css"},{"revision":"a1e261befc55f10eb839378a5da5cf01","url":"assets/vendor.4c12fd9c.js"},{"revision":"f902d715faa9a497b0babf8ac8c37221","url":"icons/114X114-icon.png"},{"revision":"51f9624739569b0e47d484e793e2d2ef","url":"icons/144X144-icon.png"},{"revision":"cfed735b581f09f437db2b05a9fb637f","url":"icons/512X512-icon.png"},{"revision":"d89a4e1a8200aa8506caffd810dfb328","url":"icons/57X57-icon.png"},{"revision":"3f0083b32c218bd34db4c003574e4df9","url":"icons/72X72-icon.png"},{"revision":"0b102a3cd0e547edd1b598b10680af30","url":"icons/favicon.ico"},{"revision":"de2a882f928ce7c71796685f17aa434c","url":"icons/favicon.png"},{"revision":"c4ce6fa0ced488f02bf9efbf746dc537","url":"index.html"}]);

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
