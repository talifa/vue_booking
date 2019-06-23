import axios from "axios";

const state = {
  status: "",
  token: localStorage.getItem("token") || "",
  name: ""
};

const getters = {
  isLoggedIn: state => !!state.token,
  authStatus: state => state.status,
  userName: state => state.name
};

const mutations = {
  auth_request(state) {
    state.status = "loading";
    console.log(state);
  },
  auth_success(state, data) {
    state.status = "success";
    state.token = data.token;
    state.name = data.name;
    console.log(state);
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
        data: user,
        method: "GET"
      });
      const authData = resp.data.find(item => {
        return item.email === user.email && item.password === user.password;
      });
      if (authData) {
        // const token = authData.token;
        // const name = authData.name;
        localStorage.setItem("token", authData.token);
        localStorage.setItem("name", authData.name);
        axios.defaults.headers.common["Authorization"] = authData.token;
        // console.log("hi ", name);
        commit("auth_success", authData);
      }
      if (!authData) {
        commit("auth_error");
        localStorage.removeItem("token");
        localStorage.removeItem("name");
      }
    } catch (err) {
      commit("auth_error");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
      // console.log(err);
    }
  },
  logout({ commit }) {
    return new Promise((resolve, reject) => {
      commit("logout");
      localStorage.removeItem("token");
      localStorage.removeItem("name");
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
