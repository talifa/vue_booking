// import Axios from "axios";
/* eslint-disable */
import ls from "../api/localStorageService";
import idbs from "../api/indexedDBService";

const state = {
  flightsList: []
};

const getters = {
  getFlightsList: state => {
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
  checkFlights: async ({ commit }) => {
    try {
      let data = await idbs.checkStorage('flightsList');
      if (data) {
        console.log('setState idbs')

        commit("setState", data)
      }

      // IndexedDB did not find the data, try localStorage
      if (data === undefined) {
        data = ls.checkStorage('flightsList')
        console.log('setState ls')
        commit("setState", data)
      }

      // LocalStorage did not find the data, reset it
      if (data === null) commit("setState", [])


    } catch (err) {
      commit("setState", []);
    }
  },
  saveFlights: async ({ state }) => {
    try {
      await Promise.all(idbs.saveToStorage('flightsList', state.flightsList));
      console.log('save idbs')


    } catch (e) {
      ls.saveToStorage('flightsList', state.flightsList);
      console.log('save ls')

    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
