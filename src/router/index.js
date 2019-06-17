import Vue from "vue";
import Router from "vue-router";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import Search from "../components/Menu/Search";
import Manage from "../components/Menu/Manage";
import Status from "../components/Menu/Status";
import History from "../components/Menu/History";

Vue.use(Router);

export default new Router({
  mode: "history",

  routes: [
    {
      path: "/home",
      component: HomePage
    },
    {
      path: "/login",
      component: LoginPage
    },
    {
      path: "/search",
      component: Search
    },
    {
      path: "/manage",
      component: Manage
    },
    {
      path: "/status",
      component: Status
    },
    {
      path: "/history",
      component: History
    }
  ]
});
