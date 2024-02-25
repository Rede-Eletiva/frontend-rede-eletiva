import { createRouter, createWebHistory } from 'vue-router';
import MainScreen from './views/MainScreen'
import LoginPage from './views/LoginPage'


const routes = [
    { path: '/principal', component: MainScreen },
    { path: '/entrar', component: LoginPage }
];

const router = createRouter({
    history: createWebHistory(),
    routes
});

export default router;