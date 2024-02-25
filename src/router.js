import { createRouter, createWebHistory } from "vue-router";
import MainScreen from "./views/MainScreen";
import LoginPage from "./views/LoginPage";
import Guard from "../src/services/middleware.js";

const routes = [
  { path: "/", component: MainScreen, beforeEnter: Guard.auth },
  { path: "/entrar", component: LoginPage },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
