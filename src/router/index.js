import { createRouter, createWebHistory } from "vue-router";
import Home from "../views/Home.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: Home,
  },
  {
    path: "/article",
    name: "article",

    component: () =>
      import("../views/Article/Index.vue"),
  },
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/Login')
  },
  {
    path: '/classify',
    name: 'classify',
    component: () => import('@/views/Classify/Index')
  },
  {
    path: '/menu',
    name: 'menu',
    component: () => import('@/views/Menu/Index')
  },
  {
    path: '/admin',
    name: 'admin',
    component: () => import('@/views/Admin/Index.vue')
  },
  {
    path: '/group',
    name: 'group',
    component: () => import('@/views/Group/Index.vue')
  }
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
