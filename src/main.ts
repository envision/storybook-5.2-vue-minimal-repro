import Vue from 'vue';
import App from './App.vue';

// Import Vendor Plugins
import '../src/plugins';

// Import Sass Stylesheets
import './assets/styles/main.scss';

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
}).$mount('#app');
