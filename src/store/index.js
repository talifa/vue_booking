import Vue from "vue";
import Vuex from "vuex";
import auth from "../modules/auth";
import search from "../modules/search";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    search
  }
});
