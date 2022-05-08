import { createRouter, createWebHistory } from 'vue-router';
import Home from '../views/Home/Index.vue';
import AuthRedirect from '../views/AuthRedirect.vue';

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/auth-redirect',
    name: 'AuthRedirect',
    component: AuthRedirect,
  },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
