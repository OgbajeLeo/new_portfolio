<template>
  <div class="sticky top-0 bg-white/50 dark:bg-gray-900/50 backdrop-blur-md lg:mb-4 mb-0 z-50">
    <nav
      class="h-[60px] lg:h-[90px] max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex justify-between items-center shadow-sm dark:shadow-gray-800"
    >
      <div class="text-[#163537] dark:text-gray-200">
        <router-link to="/">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="size-8"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m6.75 7.5 3 2.25-3 2.25m4.5 0h3m-9 8.25h13.5A2.25 2.25 0 0 0 21 18V6a2.25 2.25 0 0 0-2.25-2.25H5.25A2.25 2.25 0 0 0 3 6v12a2.25 2.25 0 0 0 2.25 2.25Z"
            />
          </svg>
        </router-link>
      </div>
      <div class="flex items-center gap-2">
        <div class="bg-green-400 rounded-full size-2 animate-ping"></div>
        <div class="z-50 md:text-sm text-xs font-semibold dark:text-gray-300 italic">
          Currently open to work.
        </div>
      </div>

      <div
        id="nav"
        class="hidden lg:flex justify-between items-center xl:space-x-[40px] text-[#757474] dark:text-gray-400 space-x-8 text-base font-[400] cursor-pointer"
      >
        <router-link
          to="/"
          class="nav-link"
          :class="currentRoutePath == '/' ? 'font-bold text-black dark:text-white' : ''"
          >Home</router-link
        >
        <!-- <router-link to="/about" class="nav-link" :class="currentRoutePath=='/about'? 'font-bold text-black dark:text-white':''">About</router-link> -->
        <!-- checks -->
        <router-link
          to="/projects"
          class="nav-link"
          :class="currentRoutePath == '/projects' ? 'font-bold text-black dark:text-white' : ''"
          >Projects</router-link
        >
        <router-link
          to="/resume"
          class="nav-link"
          :class="currentRoutePath == '/resume' ? 'font-bold text-black dark:text-white' : ''"
          >Resume</router-link
        >
        <router-link
          to="/contact"
          class="nav-link"
          :class="currentRoutePath == '/contact' ? 'font-bold text-black dark:text-white' : ''"
          >Contact</router-link
        >
        <DarkModeToggle />
      </div>

      <div class="lg:hidden flex items-center gap-2">
        <DarkModeToggle />
        <button @click="toggleMenu" class="focus:outline-none text-gray-700 dark:text-gray-300">
          <i class="fas fa-bars text-2xl"></i>
        </button>
      </div>

      <div
        v-if="isMenuOpen"
        class="fixed inset-0 bg-white dark:bg-gray-900 min-h-screen flex flex-col items-center text-center justify-center overflow-y-hidden z-50"
      >
        <button @click="closeMenu" class="absolute top-4 right-10 text-4xl text-gray-700 dark:text-gray-300">
          &times;
        </button>
        <div class="flex flex-col justify-start gap-4 text-base font-[500px] text-gray-700 dark:text-gray-300">
          <router-link @click="closeMenu" to="/" class="">Home</router-link>
          <!-- <router-link @click="closeMenu" to="/about" class="">About</router-link> -->
          <router-link @click="closeMenu" to="/projects" class=""
            >Projects</router-link
          >
          <router-link @click="closeMenu" to="/resume" class=""
            >Resume</router-link
          >
          <a @click="closeMenu" href="/contact">Contact</a>

          <div
            class="flex justify-center pt-6 lg:hidden animate__backInUp animate__animated animate__bounce"
          >
            <div
              class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 mr-4 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
            >
              <a class="" href="https://www.linkedin.com/in/ogbajeleo"
                ><i
                  class="fa-brands fa-linkedin-in fa-lg text-gray-700 dark:text-gray-300"
                ></i
              ></a>
            </div>
            <div
              class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 sm:mt-[-8px] mr-4 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
            >
              <a class="p-3" href="https://github.com/ogbajeleo"
                ><i class="fa-brands fa-github fa-lg text-gray-700 dark:text-gray-300"></i
              ></a>
            </div>
            <div
              class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 sm:mt-[-16px] mr-4 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
            >
              <a class="p-3" href="https://twitter.com/omaebije"
                ><i
                  class="fa-brands fa-x-twitter fa-lg text-gray-700 dark:text-gray-300"
                ></i
              ></a>
            </div>
            <div
              class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 sm:mt-[-8px] mr-4 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
            >
              <a class="p-3" href="https://wa.me/+2349036787860"
                ><i
                  class="fa-brands fa-whatsapp fa-lg text-gray-700 dark:text-gray-300"
                ></i
              ></a>
            </div>
            <div
              class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
            >
              <a class="p-5" href="mailto:leonardaromeh@gmail.com"
                ><i
                  class="fa-regular fa-envelope fa-lg text-gray-700 dark:text-gray-300"
                ></i
              ></a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<script setup lang="ts">
import { ref, watch } from "vue";
import { useRoute } from "vue-router";
import DarkModeToggle from "./DarkModeToggle.vue";

const route = useRoute();
const currentRoutePath = ref<string>(route.path);

// Watch for route changes
watch(route, (to, from) => {
  currentRoutePath.value = to.path;
});

const isMenuOpen = ref(false);

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
  isMenuOpen.value = false;
};
</script>

<style scoped>
.nav-link {
  position: relative;
}

.nav-link::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -2px;
  width: 0;
  height: 2px;
  background-color: #ced6ce;
  transition: width 0.3s ease-in-out;
}

.dark .nav-link::after {
  background-color: #9ca3af;
}

.nav-link:hover::after {
  width: 100%;
}
.nav-link:hover {
}
</style>
