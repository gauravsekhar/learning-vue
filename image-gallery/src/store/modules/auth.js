import qs from 'qs';
import api from '../../api/imgur';
import { router } from '../../main';

const state = {
  token: window.localStorage.getItem('imgur_access_token'),
};

const getters = {
  isLoggedIn: (state) => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
    window.localStorage.removeItem('imgur_access_token');
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const queryString = qs.parse(hash.replace('#', ''));
    commit('setToken', queryString.access_token);
    window.localStorage.setItem('imgur_access_token', queryString.access_token);
    router.push('/'); // navigate to home
  },
};

const mutations = {
  setToken: (state, token) => {
    state.token = token;
  }
};

export default {
  state,
  getters,
  actions,
  mutations,
}