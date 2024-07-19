import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeView from "../views/HomeView.vue";
import AboutView from '@/views/AboutView.vue';
import ProjectView from '@/views/ProjectView.vue';
import ResumeView from '@/views/ResumeView.vue';
import ContactView from '@/views/ContactView.vue';

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});


export default router;
