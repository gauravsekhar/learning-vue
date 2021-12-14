import Vue from 'vue';
import VueRouter from 'vue-router';
import store from './store';

import App from './App';
import AuthHandler from './components/AuthHandler';

Vue.use(VueRouter); // initial handshake between Vue and VueRouter libraries

// Create the Vue Router instance with defined routes 
const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/oauth2/callback', component: AuthHandler },
  ],
});

new Vue({
  store,
  router,
  render: h => h(App),
}).$mount('#app');