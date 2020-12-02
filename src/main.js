import Vue from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import router from './router/index';

Vue.config.productionTip = false;

new Vue({
  router,
  el: '#app',
  render: h => h(App)
})
