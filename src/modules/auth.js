import Axios from "axios";
import data from "../data/users.json";
const state = {
  todos: null
};

const getters = {
  TODOS: state => {
    return state.todos;
  }
};

const mutations = {
  SET_TODO: (state, payload) => {
    state.todos = payload;
  },

  ADD_TODO: (state, payload) => {
    state.todos.push(payload);
  }
};

const actions = {
  GET_TODO: async (context, payload) => {
    // let { data } = users;
    context.commit("SET_TODO", data);
  },

  SAVE_TODO: async (context, payload) => {
    // let { data } = users;
    context.commit("ADD_TODO", payload);
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
