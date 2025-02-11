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
    meta: {
      title: "OGBAJE LEO | About",
      description: "Welcome to my portfolio. Explore my work and experience.",
      image: "https://avatars.githubusercontent.com/u/47216075?v=4",
      url: "https://ogbaje1.vercel.app/about",
    },
  },
  {
    path: "/projects",
    name: "projects",
    component: ProjectView,
    meta: {
      title: "OGBAJE LEO | Projects",
      description:
        "Browse through a collection of projects showcasing my expertise and technical skills.",
      image: "https://avatars.githubusercontent.com/u/47216075?v=4",
      url: "https://ogbaje1.vercel.app/projects",
    },
  },
  {
    path: "/resume",
    name: "resume",
    component: ResumeView,
    meta: {
      title: "OGBAJE LEO | Resume",
      description:
        "View my professional resume, including my experience, education, and technical qualifications.",
      image: "https://avatars.githubusercontent.com/u/47216075?v=4",
      url: "https://ogbaje1.vercel.app/resume",
    },
  },
  {
    path: "/contact",
    name: "contact",
    component: ContactView,
    meta: {
      title: "OGBAJE LEO | Contact",
      description:
        "Get in touch with me for collaborations, job opportunities, or inquiries.",
      image: "https://avatars.githubusercontent.com/u/47216075?v=4",
      url: "https://ogbaje1.vercel.app/contact",
    },
  },
  {
    path: "/:catchAll(.*)",
    name: "NotFound",
    component: () => import("@/views/NotFound.vue"),
    meta: {
      title: "404 - Page Not Found",
      description:
        "The page you're looking for does not exist. Return to the home page to explore more.",
      image:
        "https://cdn.pixabay.com/photo/2024/07/20/17/12/warning-8908707_1280.png",
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
  const defaultDescription =
    "Explore the portfolio of Ogbaje Leo Arome, a frontend developer with expertise in React, Next.js, Vue, and other JavaScript frameworks.";
  const defaultImage = "https://avatars.githubusercontent.com/u/47216075?v=4";
  const defaultUrl = "https://ogbaje1.vercel.app"; // Make sure to set your site URL here

  // Set page title
  document.title = (to.meta.title as string) || defaultTitle;

  // Update description meta
  const descriptionMeta = document.querySelector('meta[name="description"]');
  if (descriptionMeta) {
    descriptionMeta.setAttribute(
      "content",
      (to.meta.description as string) || defaultDescription
    );
  } else {
    const meta = document.createElement("meta");
    meta.name = "description";
    meta.content = (to.meta.description as string) || defaultDescription;
    document.head.appendChild(meta);
  }

  // Update Open Graph meta tags
  const ogTitleMeta = document.querySelector('meta[property="og:title"]');
  if (ogTitleMeta) {
    ogTitleMeta.setAttribute(
      "content",
      (to.meta.title as string) || defaultTitle
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:title");
    meta.setAttribute("content", (to.meta.title as string) || defaultTitle);
    document.head.appendChild(meta);
  }

  const ogDescriptionMeta = document.querySelector(
    'meta[property="og:description"]'
  );
  if (ogDescriptionMeta) {
    ogDescriptionMeta.setAttribute(
      "content",
      (to.meta.description as string) || defaultDescription
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:description");
    meta.setAttribute(
      "content",
      (to.meta.description as string) || defaultDescription
    );
    document.head.appendChild(meta);
  }

  const ogImageMeta = document.querySelector('meta[property="og:image"]');
  if (ogImageMeta) {
    ogImageMeta.setAttribute(
      "content",
      (to.meta.image as string) || defaultImage
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:image");
    meta.setAttribute("content", (to.meta.image as string) || defaultImage);
    document.head.appendChild(meta);
  }

  const ogUrlMeta = document.querySelector('meta[property="og:url"]');
  if (ogUrlMeta) {
    ogUrlMeta.setAttribute("content", (to.meta.url as string) || defaultUrl);
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:url");
    meta.setAttribute("content", (to.meta.url as string) || defaultUrl);
    document.head.appendChild(meta);
  }

  const ogTypeMeta = document.querySelector('meta[property="og:type"]');
  if (ogTypeMeta) {
    ogTypeMeta.setAttribute("content", "website"); // Default type is website, but you can customize
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:type");
    meta.setAttribute("content", "website");
    document.head.appendChild(meta);
  }

  const ogLocaleMeta = document.querySelector('meta[property="og:locale"]');
  if (ogLocaleMeta) {
    ogLocaleMeta.setAttribute("content", "en_US"); // Default locale, change it if needed
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("property", "og:locale");
    meta.setAttribute("content", "en_US");
    document.head.appendChild(meta);
  }

  // Update Twitter meta tags (similar to OG)
  const twitterTitleMeta = document.querySelector('meta[name="twitter:title"]');
  if (twitterTitleMeta) {
    twitterTitleMeta.setAttribute(
      "content",
      (to.meta.title as string) || defaultTitle
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "twitter:title");
    meta.setAttribute("content", (to.meta.title as string) || defaultTitle);
    document.head.appendChild(meta);
  }

  const twitterDescriptionMeta = document.querySelector(
    'meta[name="twitter:description"]'
  );
  if (twitterDescriptionMeta) {
    twitterDescriptionMeta.setAttribute(
      "content",
      (to.meta.description as string) || defaultDescription
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "twitter:description");
    meta.setAttribute(
      "content",
      (to.meta.description as string) || defaultDescription
    );
    document.head.appendChild(meta);
  }

  const twitterImageMeta = document.querySelector('meta[name="twitter:image"]');
  if (twitterImageMeta) {
    twitterImageMeta.setAttribute(
      "content",
      (to.meta.image as string) || defaultImage
    );
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "twitter:image");
    meta.setAttribute("content", (to.meta.image as string) || defaultImage);
    document.head.appendChild(meta);
  }

  const twitterCardMeta = document.querySelector('meta[name="twitter:card"]');
  if (twitterCardMeta) {
    twitterCardMeta.setAttribute("content", "summary_large_image");
  } else {
    const meta = document.createElement("meta");
    meta.setAttribute("name", "twitter:card");
    meta.setAttribute("content", "summary_large_image");
    document.head.appendChild(meta);
  }

  next();
});

export default router;
