// import Axios from "axios";
/* eslint-disable */
import ls from "../api/localStorageService";
import idbs from "../api/idbs";

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
    if (state.flightsList === 'undefined') {
      state.flightsList = []
      state.flightsList.push(newFlight);

    }
    else {
      state.flightsList.push(newFlight);
    }
  }
};

const actions = {
  addFlights: ({ commit, dispatch }, newFlight) => {
    commit("addFlights", newFlight);
    dispatch("saveFlights", newFlight);
  },
  checkFlights: async ({ commit }) => {
    try {
      let data = await idbs.getAllFlights();
      if (data) {

        commit("setState", data)
      }

      // IndexedDB did not find the data, try localStorage
      if (data === undefined) {
        data = ls.checkStorage('flightsList')
        commit("setState", data)
      }

      // LocalStorage did not find the data, reset it
      if (data === null) commit("setState", [])


    } catch (err) {
      commit("setState", []);
      console.log(err)
    }
  },
  saveFlights: async ({ state }, newFlight) => {
    try {
      await idbs.saveFlightToStore(newFlight);


    } catch (e) {
      ls.saveToStorage('flightsList', state.flightsList);
      console.log(e)

    }
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
