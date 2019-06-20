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
  },
  login({ commit }, user) {
    return new Promise((resolve, reject) => {
      commit("auth_request");
      this.$http({
        url: "http://localhost:3000/login",
        data: user,
        method: "POST"
      })
        .then(resp => {
          const token = resp.data.token;
          const user = resp.data.user;
          localStorage.setItem("token", token);
          this.$http.defaults.headers.common["Authorization"] = token;
          commit("auth_success", token, user);
          resolve(resp);
        })
        .catch(err => {
          commit("auth_error");
          localStorage.removeItem("token");
          reject(err);
        });
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
