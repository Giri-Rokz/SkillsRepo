import Vue from 'vue'
import App from './App.vue'
import axios from 'axios';
import vuetify from './plugins/vuetify';
import router from './router';
import store from './store';


Vue.config.productionTip = false;
axios.defaults.baseURL = 'http://localhost:5000';

new Vue({
  router,
  store,
  vuetify,
  render: h => h(App)
}).$mount('#app')
