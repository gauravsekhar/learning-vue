import Vue from 'vue';
import Vuex from 'vuex';
import auth from './modules/auth';
import images from './modules/images';

Vue.use(Vuex);  // initial handshake between Vue and Vuex libraries

export default new Vuex.Store({
  modules: {
    auth,
    images,
  }
});