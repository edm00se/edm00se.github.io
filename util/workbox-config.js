// injectManifest
const { injectManifest } = require('workbox-build');

const dest = 'dist/sw.js';
const config = {
  swSrc: 'util/sw.js',
  swDest: dest,
  globDirectory: 'dist/',
  globPatterns: ['**/*.{png,ico,html,css,js}']
};
injectManifest(config)
  .then(({ count, size }) => {
    console.log(
      `Generated ${dest}, which will precache ${count} files, totaling ${size} bytes.`
    );
  })
  .catch((err) => console.error(err));

// generateSW
// const { generateSW } = require('workbox-build');

// const swDest = 'dist/sw.js';
// generateSW({
//   swDest,
//   globDirectory: 'dist',
//   globPatterns: ['**/*.{html,json,js,css}']
// })
//   .then(({ count, size }) => {
//     console.log(
//       `Generated ${swDest}, which will precache ${count} files, totaling ${size} bytes.`
//     );
//   })
//   .catch((err) => console.error(err));
