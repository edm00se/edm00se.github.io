import { createApp } from 'vue';
import App from './App.vue';

createApp(App).mount('#app');

if (import.meta.env.PROD && 'serviceWorker' in window.navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('/sw.js')
      .then((reg) => console.log('service worker registerd successfully'))
      .catch((err) => console.error(err));
  });
}
