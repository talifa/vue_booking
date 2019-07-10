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
    console.log(payload);
  },
  SetShowVar(state, payload) {
    state.flights[payload].isShow = !state.flights[payload].isShow;
  }
};

const actions = {
  fetchFlights: async ({ commit }, data) => {
    try {
      const resp = await Axios({
        url: "http://5d25e031d924540014931b09.mockapi.io/flights",
        method: "GET"
      });

      commit("setFlights", resp);
    } catch (err) {
      console.log(err);
    }
  },
  SetShowVar: async (context, idx) => {
    console.log(idx);
    context.commit("SetShowVar", idx);
  }
  // fetchFlights: async (context, payload) => {
  //   console.log("err");

  //   let { data } = await Axios.get(
  //     "http://5d25e031d924540014931b09.mockapi.io/flights"
  //   );
  //   context.commit("setFlights", data);
  // }
};

export default {
  state,
  getters,
  mutations,
  actions
};
