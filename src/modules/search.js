// import axios from "axios";

const state = {
  flight: {
    // departing: "10/01",
    // returning: "10/02",
    // passengers: "1",
    // from_country: "City",
    // to_country: "City"
  }
};

const getters = {
  flightData: state => state.flight
};

const mutations = {};

const actions = {
  search({ commit }, data) {
    // state.flight = {};

    state.flight = data;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
