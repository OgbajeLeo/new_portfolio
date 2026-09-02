<template>
  <div class="min-h-screen">
    <div id="project" class="flex justify-center items-center">
      <h1
        class="lg:text-7xl text-4xl font-black text-center lg:mt-24 my-12 text-[#163537] dark:text-gray-200"
      >
        Projects
      </h1>
    </div>

    <div class="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="w-fit rounded-md overflow-hidden border shadow-md bg-white dark:bg-gray-800 dark:border-gray-700"
      >
        <div class="p-4 py-2">
          <div v-if="imageLoading[index]" class="w-full h-80">
            <SkeletonLoader type="image" image-class="w-full h-80 rounded-t-md" />
          </div>
          <img
            v-else
            :src="card.image"
            alt="Card Image"
            @load="imageLoading[index] = false"
            @error="imageLoading[index] = false"
            class="card-image w-full h-80 object-contain lg:object-cover border dark:border-gray-700 rounded-t-md hover:scale-105"
          />
        </div>
        <div class="p-4 pt-6">
          <h2 class="sm:text-xl text-base font-bold mb-2 h-8">
            {{ card.title }}
          </h2>

          <p
            class="font-light text-[#163537] dark:text-gray-300 sm:text-base text-sm mb-4 pb-6 lg:h-32 md:h-48 h-36"
          >
            {{ card.description }}
          </p>

          <p class="mb-4 text-gray-700 dark:text-gray-300">
            <span class="font-semibold">Stack: </span>
            <span>{{ card.stack }}</span>
          </p>

          <div
            class="flex justify-between border-b-2 dark:border-gray-700 pb-6 items-center text-[#ccc] dark:text-gray-500"
          >
            <div
              v-if="card.github != '/'"
              class="flex justify-start gap-3 items-center border-2 border-r-4 border-b-4 border-[#163537] dark:border-gray-500 shadow-md shadow-[#333] dark:shadow-gray-900 hover:shadow-none bg-transparent dark:bg-transparent font-light py-2 px-6 rounded-md text-black dark:text-gray-300 text-sm cursor-pointer"
            >
              <a :href="card.github" class="">Github</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3 text-gray-600 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
            <div
              v-else
              class="flex justify-start gap-3 items-center border dark:border-gray-600 hover:shadow-none bg-transparent font-light py-2 px-6 rounded-md text-black dark:text-gray-400 text-sm cursor-not-allowed"
            >
              <div class="">Github</div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                />
              </svg>
            </div>
            <div
              class="flex justify-start gap-3 items-center border-2 border-r-4 border-b-4 border-[#163537] dark:border-gray-500 shadow-[#333] dark:shadow-gray-900 shadow-md hover:shadow-none bg-transparent font-light py-2 px-6 rounded-md text-black dark:text-gray-300 text-sm cursor-pointer"
            >
              <a :href="card.live" class="" target="_blank">Live</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                class="size-3 text-gray-600 dark:text-gray-400"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </div>
    <router-link
      to="/projects"
      class="cursor-pointer font-bold my-6 block text-gray-400 dark:text-gray-500 hover:text-gray-600 dark:hover:text-gray-400"
      >See More Projects ...</router-link
    >
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from "vue";
import SkeletonLoader from "./SkeletonLoader.vue";
import eso from "../assets/eso.png";
import attica from "../assets/attica.png";
import fun from "../assets/fun.png";
import gen6ixx from "../assets/gen6ixx.png";

const imageLoading = ref<Record<number, boolean>>({
  0: true,
  1: true,
  2: true,
  3: true,
});

// Preload images
onMounted(() => {
  const images = [eso, attica, fun, gen6ixx];
  images.forEach((img, index) => {
    const image = new Image();
    image.src = img;
    image.onload = () => {
      imageLoading.value[index] = false;
    };
    image.onerror = () => {
      imageLoading.value[index] = false;
    };
  });
});

const cards = [
  {
    image: eso,
    title: "ESO Security Training Platform",
    description:
      "A comprehensive security training platform with Admin CMS.This platform provides robust security training solutions/certification with a full-featured content management system for administrators.",
    github: "/",
    live: "https://esotrainingnw.co.uk/",
    stack: "ReactJs,Framer, NodeJs, TailwindCss, CMS Integration",
  },
  {
    image: attica,
    title: "AtticaHQ Real Estate Platform",
    description:
      "A sophisticated real estate platform with Admin CMS for product listings, featuring AI-powered capabilities. AtticaHQ offers advanced property management tools and intelligent features to enhance the real estate experience.",
    github: "/",
    live: "https://atticahq.com/",
    stack: "ReactJs, NodeJs, TailwindCss, AI Integration, CMS",
  },
  {
    image: fun,
    title: "FunNTail Official Website",
    description:
      "The official website for FunNTail. A modern, responsive web presence showcasing the company's services and portfolio with an engaging user experience.",
    github: "/",
    live: "https://funntail.co.uk",
    stack: "ReactJs,NodeJs,Framer, TailwindCss, Modern UI/UX",
  },
  {
    image: gen6ixx,
    title: "Gen6ixx Official Website",
    description:
      "The official website for Gen6ixx, developed to showcase the company's innovative solutions and expertise. Built with modern web technologies to deliver a professional and engaging digital experience.",
    github: "/",
    live: "https://gen6ixx.com/",
    stack: "ReactJs,NodeJs,Framer,, TailwindCss, Modern UI/UX",
  },
];
</script>

<style scoped>
#project:target {
  background-color: #f7f7f7;
  transition: background-color 0.5s ease-in-out;
}

.dark #project:target {
  background-color: #1f2937;
}
</style>
