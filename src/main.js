import Vue from "vue";
import App from "./App.vue";
import Router from "./Router";

import VueRouter from "vue-router";
Vue.use(VueRouter);

Vue.config.productionTip = false;

new Vue({
  render: h => h(App),
  router: Router
}).$mount("#app");
