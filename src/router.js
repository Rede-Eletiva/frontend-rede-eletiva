import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "./views/MainScreen";
import LoginPage from "./views/LoginPage";
import Guard from "../src/services/middleware.js";
import ScreenTwo from "./views/ScreenTwo";

const routes = [
  { path: "/", component: MainScreen, beforeEnter: Guard.auth },
  { path: "/entrar", component: LoginPage },
  { path: "/two", component: ScreenTwo}
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
