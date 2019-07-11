import Axios from "axios";

const state = {
  flight: {},
  from: null,
  to: null
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
    state.flight = payload;
  }
};

const actions = {
  search({ commit }, data) {
    commit("setFlightData", data);
  },
  fetchCityList: async ({ commit }, data) => {
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
