import Router from "vue-router";
import home from "@/views/home/index";
import about from "@/views/about/About";

export default new Router({
  routes: [
    {
      path: "/",
      name: "home",
      component: home
    },
    {
      path: "/about",
      name: "About",
      component: about
    }
  ]
});
