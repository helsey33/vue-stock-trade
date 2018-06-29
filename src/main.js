import Vue from 'vue'
import App from './App.vue'
import VueRouter from 'vue-router'
import {routes} from './routes.js';
import store from './store/store';
import VueResource from 'vue-resource';
Vue.use(VueRouter);
Vue.use(VueResource);

Vue.http.options.root ='https://vue-stock-trade-f78ee.firebaseio.com/';

const router=new VueRouter({
  mode:'history',
  routes
});

Vue.filter('currency',(value)=>{
  return '$'+value.toLocaleString();
})

new Vue({
  el: '#app',
  router,
  store,
  render: h => h(App)
})
