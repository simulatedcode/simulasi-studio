import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import LoadingPage from '../components/Loading.vue';
import HomeView from '../views/HomeView.vue';
import About from '../views/AboutUs.vue';


const routes: Array<RouteRecordRaw> = [
  {
    path: '/loading',
    name: 'Loading',
    component: LoadingPage,
  },
  {
    path: '/',
    name: 'Home',
    component: HomeView,
  },
  {
    path: '/about',
    name: 'About',
    component: About
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
