import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { store } from "./store";
import Axios from "axios";
import VueCarousel from "vue-carousel";
import Menu from "./components/Menu.vue";
import Header from "./components/Header.vue";
import Datepicker from "vuejs-datepicker";
import vSelect from "vue-select";
import { Carousel, Slide } from "vue-carousel";

Vue.use(VueCarousel);

Vue.component("Menu", Menu);
Vue.component("Header", Header);
Vue.component("v-select", vSelect);
Vue.component("datepicker", Datepicker);
Vue.component("Carousel", Carousel);
Vue.component("Slide", Slide);

Vue.config.productionTip = false;
Vue.prototype.$http = Axios;
const token = localStorage.getItem("token");
if (token) {
  Vue.prototype.$http.defaults.headers.common["Authorization"] = token;
  Vue.prototype.$http.defaults.headers.common = {};
  Vue.prototype.$http.defaults.headers.common["Accept"] = "application/json";
}
new Vue({
  router,
  store,
  render: h => h(App)
}).$mount("#app");
