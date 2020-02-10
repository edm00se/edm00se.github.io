const { injectManifest } = require('workbox-build');

let config = {
  globDirectory: 'dist/',
  globPatterns: ['**/*.{png,ico,html,css,js}'],
  swDest: 'dist/sw.js',
  swSrc: 'config/sw.js'
};

injectManifest(config).then(({ count, size }) => {
  console.log(
    `Generated ${config.swDest}, which will precache ${count} files, totaling ${size} bytes.`
  );
});
