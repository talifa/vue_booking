import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import Axios from "axios";
import VueCarousel from "vue-carousel";
Vue.use(VueCarousel);
Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
