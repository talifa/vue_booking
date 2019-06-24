// import axios from "axios";

const state = {
  flight: {}
};

const getters = {
  flightData: state => state.flight
};

const mutations = {};

const actions = {
  search({ commit }, data) {
    state.flight = data;
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
