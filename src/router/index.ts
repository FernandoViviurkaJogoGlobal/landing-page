// router.ts

import Vue from "vue";
import VueRouter from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import LoginView from "../views/LoginView.vue";
import { getCurrentUser } from "../auth";

Vue.use(VueRouter);

const routes = [
  {
    path: "/",
    name: "LoginView",
    component: LoginView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { requiresAuth: true },
  },
  {
    path: "/login",
    name: "login",
    component: LoginView,
  },
  {
    path: "/dashboard",
    name: "dashboard",
    component: HomeView,
    meta: { requiresAuth: true },
  },
  {
    path: "*",
    redirect: "/dashboard",
  },
];

const router = new VueRouter({
  mode: "history",
  base: process.env.BASE_URL,
  routes,
});

router.beforeEach((to, from, next) => {
  if (to.matched.some((route) => route.meta.requiresAuth)) {
    const isAuthenticated = !!getCurrentUser();

    if (isAuthenticated) {
      next();
    } else {
      next("/login");
    }
  } else {
    next();
  }
});

export default router;
