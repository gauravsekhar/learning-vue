import api from '../../api/imgur';
import qs from 'qs';

const state = {
  token: null,
};

const getters = {
  isLoggedIn: (state) => !!state.token
};

const actions = {
  logout: ({ commit }) => {
    commit('setToken', null);
  },
  login: () => {
    api.login();
  },
  finalizeLogin: ({ commit }, hash) => {
    const queryString = qs.parse(hash.replace('#', ''));
    commit('setToken', queryString.access_token);
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