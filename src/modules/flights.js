import Axios from "axios";

const state = {
  flights: null
};

const getters = {
  getFlights: state => {
    return state.flights;
  }
};

const mutations = {
  setFlights(state, payload) {
    state.flights = payload;
  },
  SetShowVar(state, payload) {
    state.flights[payload].isShow = !state.flights[payload].isShow;
  }
};

const actions = {
  fetchFlights: async ({ commit }, data) => {
    Axios({
      url: "https://5d25e031d924540014931b09.mockapi.io/flights",
      method: "GET",
      data: {}
    }).then(result => {
      commit("setFlights", result.data);
    });
  },

  SetShowVar: async (context, idx) => {
    context.commit("SetShowVar", idx);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
