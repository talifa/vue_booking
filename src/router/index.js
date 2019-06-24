import Vue from "vue";
import Router from "vue-router";
import { store } from "../store";
import LoginPage from "../views/LoginPage";
// import HomePage from "../views/HomePage";
import Search from "../components/Menu/Search";
import Manage from "../components/Menu/Manage";
import Status from "../components/Menu/Status";
import History from "../components/Menu/History";
import NotFoundComponent from "../components/NotFoundComponent";
import Outbound from "../components/Menu/Result/Outbound";
import Inbound from "../components/Menu/Result/Inbound";

Vue.use(Router);

let router = new Router({
  mode: "history",
  fallback: true,
  routes: [
    {
      path: "/login",
      name: "login",
      component: LoginPage,
      meta: {
        requiresAuth: false
      }
    },
    {
      path: "/search",
      name: "search",
      component: Search,
      alias: ["/home"],
      meta: {
        requiresAuth: true
      },
      children: []
    },
    {
      path: "/outbound",
      name: "outbound",
      component: Outbound
    },
    {
      path: "/inbound",
      name: "inbound",
      component: Inbound
    },
    {
      path: "/manage",
      name: "manage",
      component: Manage,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/status",
      name: "status",
      component: Status,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/history",
      name: "history",
      component: History,
      meta: {
        requiresAuth: true
      }
    },
    {
      path: "/",
      redirect: {
        name: "search"
      }
    },

    {
      path: "*",
      name: "404",
      component: NotFoundComponent
    }
  ]
});

router.beforeEach((to, from, next) => {
  if (to.matched.some(record => record.meta.requiresAuth)) {
    if (store.getters.isLoggedIn) {
      next();
      return;
    }
    next("/login");
  } else {
    next();
  }
});

export default router;
