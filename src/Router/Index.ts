import { createWebHistory, createRouter } from "vue-router";

const Home = () => import("../Pages/HomeView.vue");
const Publication = () => import("../Pages/Publication.vue");
const Opensource = () => import("../Pages/OpenSource.vue");
const Exhibition = () => import("../Pages/ExhibitionPage.vue");
const Market = () => import("../Pages/PopupMarket.vue");
const Download = () => import("../Pages/DownloadPage.vue");

const routes = [
  { path: "/", component: Home },
  { path: "/publication", component: Publication },
  { path: "/opensource", component: Opensource },
  { path: "/exhibition", component: Exhibition },
  { path: "/pop-up-market", component: Market },
  { path: "/free-zine", component: Download },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
