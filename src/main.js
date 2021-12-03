import Vue from 'vue';
import App from './App';

new Vue({
  render: h => h(App),
}).$mount('#app');

/* The above Vue instance is the same as the one below:
new Vue({
  el: '#app',
  render: function(h) {
    return h(App);
  },
});
*/

