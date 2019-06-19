import Vue from "vue";
import Router from "vue-router";
import LoginPage from "../components/LoginPage";
import HomePage from "../components/HomePage";
import Search from "../components/Menu/Search";
import Manage from "../components/Menu/Manage";
import Status from "../components/Menu/Status";
import History from "../components/Menu/History";
import NotFoundComponent from "../components/NotFoundComponent";

Vue.use(Router);

export default new Router({
  mode: "history",
  fallback: true,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      alias: ["/home"]
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage
    },
    {
      path: "/status",
      name: "status",
      component: Status
    },
    {
      path: "/history",
      name: "history",
      component: History
    },
    {
      path: "/",
      redirect: {
        name: "login"
      }
    },

    {
      path: "/secure",
      name: "secure",
      component: Search
    },

    {
      path: "*",
      name: "404",
      component: NotFoundComponent
    }
  ]
});
