import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  user: ""
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  userName: state => state.user
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
    console.log(state);
  },
  auth_success(state, token, user) {
    state.status = "success";
    state.token = token;
    state.user = user;
    console.log("auth_success", user);
  },
  auth_error(state) {
    state.status = "error";
    console.log(state);
  },
  logout(state) {
    state.status = "";
    state.token = "";
  }
};

const actions = {
  login: async ({ commit }, user) => {
    try {
      commit("auth_request");
      const resp = await axios({
        url: "/users.json",
        method: "GET"
      });
      const authData = resp.data.find(item => {
        return item.email === user.email && item.password === user.password;
      });
      if (authData) {
        const token = authData.token;
        const name = authData.name;
        localStorage.setItem("token", token);
        axios.defaults.headers.common["Authorization"] = token;
        console.log("hi ", name);
        commit("auth_success", token, name);
      }
    } catch (err) {
      commit("auth_error");
      localStorage.removeItem("token");
      console.log(err);
    }
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("logout");
      localStorage.removeItem("token");
      delete axios.defaults.headers.common["Authorization"];
      resolve();
    });
  }
};

export default {
  state,
  getters,
  mutations,
  actions
};
