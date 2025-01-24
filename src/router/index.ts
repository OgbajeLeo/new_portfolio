import { createRouter, createWebHistory, RouteRecordRaw } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "@/views/AboutView.vue";
import ProjectView from "@/views/ProjectView.vue";
import ResumeView from "@/views/ResumeView.vue";
import ContactView from "@/views/ContactView.vue";

const routes: Array<RouteRecordRaw> = [
  {
    path: "/",
    name: "home",
    component: HomeView,
    meta: { title: "OGBAJE LEO | Frontend Developer" },
  },
  {
    path: "/about",
    name: "about",
    component: AboutView,
    meta: { title: "OGBAJE LEO | About",
    description: "Welcome to my portfolio. Explore my work and experience.",
    image: "https://avatars.githubusercontent.com/u/47216075?v=4",
     },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
    meta: {
      title: "OGBAJE LEO | Projects",
      description: "Browse through a collection of projects showcasing my expertise and technical skills.",
      image: "https://avatars.githubusercontent.com/u/47216075?v=4",
    },
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
    meta: {
      title: "OGBAJE LEO | Resume",
      description: "View my professional resume, including my experience, education, and technical qualifications.",
      image: "https://avatars.githubusercontent.com/u/47216075?v=4",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: { title: "OGBAJE LEO | Contact",
    description: "Get in touch with me for collaborations, job opportunities, or inquiries.",
    image: "https://avatars.githubusercontent.com/u/47216075?v=4",
     },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: { title: "404 - Page Not Found",
    description: "The page you're looking for does not exist. Return to the home page to explore more.",
    image: "https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_1280.png",
     },
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
  scrollBehavior() {
    return { top: 0 };
  },
});

// Global Before Hook for Dynamic Metadata
router.beforeEach((to, from, next) => {
  const defaultTitle = "OGBAJE LEO | Frontend Developer";
  const defaultDescription = "Explore the portfolio of Ogbaje Leo Arome, a frontend developer with expertise in React, Next.js, Vue, and other JavaScript frameworks.";
  const defaultImage = "https://avatars.githubusercontent.com/u/47216075?v=4";

  // Update page title
  document.title = (to.meta.title as string) || defaultTitle;

  // Update meta description
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute("content", (to.meta.description as string) || defaultDescription);
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = (to.meta.description as string) || defaultDescription;
    document.head.appendChild(meta);
  }

  // Update meta image (Open Graph)
  const ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (ogImageMeta) {
    ogImageMeta.setAttribute("content", (to.meta.image as string) || defaultImage);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:image");
    meta.setAttribute("content", (to.meta.image as string) || defaultImage);
    document.head.appendChild(meta);
  }

  next();
});


export default router;
