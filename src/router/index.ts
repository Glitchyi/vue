import { createRouter, createWebHistory, createMemoryHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutVue from "@/views/About.vue";
const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutVue,
  },
  {
    path: "/:param(.*)*",
    name: "NotFound",
    component: HomeView,
  },
];

const router = createRouter({
  history: createMemoryHistory(),
  routes,
});

export default router;
