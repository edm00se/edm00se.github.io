// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import titleMixin from './mixins/title';
import App from './App';
import NotFound from './components/404';

const routes = {
  '/': App,
  '/404': NotFound
};

Vue.config.productionTip = false;
Vue.mixin(titleMixin);

new Vue({
  el: '#app',
  data: {
    currentRoute: window.location.pathname
  },
  computed: {
    ViewComponent() {
      return routes[this.currentRoute] || NotFound
    }
  },
  render: function(h) {
    return h(this.ViewComponent);
  }
});

if ('serviceWorker' in navigator && process.env.NODE_ENV === 'production') {
  window.addEventListener('load', () => {
    navigator.serviceWorker
      .register('sw.js')
      .then(r => {
        // console.log(r);
      })
      .catch(e => console.log('SW error: ', e));
  });
};
