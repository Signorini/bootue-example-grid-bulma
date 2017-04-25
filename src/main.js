import Vue from 'vue'
import App from './App.vue'

import Bootue from './bootue';
Vue.use(Bootue);

new Vue({
  el: '#app',
  render: h => h(App)
})
