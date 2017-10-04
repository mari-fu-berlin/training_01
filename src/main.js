import Vue from 'vue'
import App from './App.vue'
// import axios from 'axios'
import VueRouter from 'vue-router'

export const bus = new Vue();

// Use packages
Vue.use(VueRouter)
// Vue.use(axios);

new Vue({
  el: '#app',
  render: h => h(App)
})
