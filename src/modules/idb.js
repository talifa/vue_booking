// import Axios from "axios";
import ls from "../api/localStorageService";
import idbs from "../api/indexedDBService";

const state = {
  flightsList: []
};

const getters = {
  getflightsList: state => {
    return state.flightsList;
  }
};

const mutations = {
  setState(state, data) {
    state.flightsList = data;
  },
  addFlights(state, newFlight) {
    state.flightsList.push(newFlight);
  }
};

const actions = {
  addFlights: ({ commit, dispatch }, newFlight) => {
    commit("addFlights", newFlight);
    dispatch("saveFlights");
  },
  checkStorage: async ({ commit }) => {
    try {
      let data = await idbs.checkStorage("flightsList");

      // IndexedDB did not find the data, try localStorage
      if (data === undefined) data = ls.checkStorage("flightsList");

      // LocalStorage did not find the data, reset it
      if (data === null) data = [];

      commit("setState", data);
    } catch (err) {
      commit("setState", { data: [] });
    }
  },
  saveFlights: async ({ state }) => {
    try {
      await Promise.all(idbs.saveToStorage("flightsList", state.flightsList));
    } catch (e) {
      ls.saveToStorage("flightsList", state.flightsList);
    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
