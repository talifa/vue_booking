import Vue from "vue";
import Vuex from "vuex";
import Axios from "axios";
import auth from "../modules/auth";
import search from "../modules/search";
import flights from "../modules/flights";
import idb from "../modules/idb";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {},
  getters: {},
  mutations: {},
  actions: {},
  modules: {
    auth,
    search,
    flights,
    idb
  }
});
