import Axios from "axios";

const state = {
  flight: [],
  from: [],
  to: []
};

const getters = {
  flightData: state => state.flight,

  getCityListFrom: state => {
    return state.from;
  },
  getCityListTo: state => {
    return state.from;
  }
};

const mutations = {
  setCityListFrom(state, payload) {
    state.from = payload;
  },
  setCityListTo(state, payload) {
    state.to = payload;
  },
  setFlightData(state, payload) {
    state.flight.unshift(payload);
  }
};

const actions = {
  search({ commit }, data) {
    if (data) {
      commit("setFlightData", data);
    }
  },
  fetchCityList: async ({ commit }) => {
    Axios({
      url: "https://5d25e031d924540014931b09.mockapi.io/from",
      method: "GET",
      data: {}
    }).then(result => {
      commit("setCityListFrom", result.data);
    });
    Axios({
      url: "https://5d25e031d924540014931b09.mockapi.io/to",
      method: "GET",
      data: {}
    }).then(result => {
      commit("setCityListTo", result.data);
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
