module.exports = {
  "globDirectory": "dist/",
  "globPatterns": [
    "**/*.{png,ico,html,css,js}"
  ],
  "swDest": "dist/sw.js",
  "swSrc": "src/sw.js"
};

// TODO: write cache and/or fallback option for https://api.github.com/users/${userName}
