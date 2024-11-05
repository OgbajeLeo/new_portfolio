<template>
  <div class="min-h-screen">
    <div id="project" class="flex justify-center items-center">
      <h1
        class="lg:text-7xl text-4xl font-black text-center lg:mt-24 my-12 text-[#163537]"
      >
        Projects
      </h1>
    </div>

    <div class="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
      <div
        v-for="(card, index) in cards"
        :key="index"
        class="w-fit rounded-md overflow-hidden border shadow-lg"
      >
        <img
          :src="card.image"
          alt="Card Image"
          class="card-image w-full h-80 lg:object-cover object-fill border rounded-t-md hover:scale-105"
        />
        <div class="p-4 pt-6">
          <h2 class="sm:text-xl text-base font-bold mb-2 h-8">
            {{ card.title }}
          </h2>

          <p
            class="font-light text-[#163537] sm:text-base text-sm mb-4 pb-6 lg:h-32 md:h-48 h-36"
          >
            {{ card.description }}
          </p>

          <p class="mb-4">
            <span class="font-semibold">Stack: </span>
            <span>{{ card.stack }}</span>
          </p>

          <div
            class="flex justify-between border-b-2 pb-6 items-center text-[#ccc]"
          >
            <div
              v-if="card.github != '/'"
              class="flex justify-start gap-3 items-center border shadow-md shadow-[#333] hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm cursor-pointer"
            >
              <a :href="card.github" class="">Github</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                class="size-3"
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
              class="flex justify-start gap-3 items-center border hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm cursor-not-allowed"
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
              class="flex justify-start gap-3 items-center border shadow-[#333] shadow-md hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm cursor-pointer"
            >
              <a :href="card.live" class="">Live</a>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="gray"
                class="size-3"
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
      class="cursor-pointer font-bold my-6 block text-gray-400"
      >See More Projects ...</router-link
    >
  </div>
</template>

<script setup lang="ts">
interface Card {
  image: string;
  title: string;
  description: string;
  stack: string;
  button1: string;
  button2: string;
}

const cards = [
  {
    image:
      "https://res.cloudinary.com/duw4jtxls/image/upload/v1721401253/JCIASO_bqbvrk.png",
    title: "JCI ASO",
    description:
      " Collaborating with other developers to build the official website for JCI ASO is an exciting project aimed at creating a dynamic and engaging online presence for the organization. JCI, or Junior Chamber International",
    github: "/",
    stack: "ReactJs, TailwindCss , Material UI, Framer",
    live: "https://jciaso.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/duw4jtxls/image/upload/v1721401252/ImageCropper_ecgfiu.png",
    title: "Image Cropper ",
    description:
      "Image Cropper project empowers users to effortlessly upload, resize, crop, and download their images with precision and ease. Whether you're a photographer, designer, or simply someone looking to customize images for personal use, this tool offers intuitive features to enhance your editing experience.",
    github: "https://github.com/OgbajeLeo/ImageCropper",
    live: "https://croper-gamma.vercel.app/",
    stack: "HTML, TailwindCss , Vanilla Js, Cropper.js",
  },
  {
    image:
      "https://res.cloudinary.com/duw4jtxls/image/upload/v1721401975/TODOO_y0rovi.png",
    title: "Todoify ",
    description:
      "TODOIFY is a todo application that harnesses the power of LocalStorage to offer users seamless task management with all CRUD operations directly within their browser. Users can effortlessly create new tasks, Mark as done, and add task descriptions.",
    github: "https://github.com/OgbajeLeo/todoify-vue",
    live: "https://todoify-vue.vercel.app/",
    stack: "VueJs, TailwindCss ",
  },
  {
    image: "https://divineeffiong.vercel.app/asset/works.png/INSURE.png",
    title: "INsure ",
    description:
      "INsure is a comprehensive insurance sale management tool designed to empower insurance agents in efficiently managing and tracking leads throughout the sales process. Developed in collaboration with skilled developers,",
    github: "/",
    live: "https://insure-personal-git-alice-home-alice2212.vercel.app/",
    stack: "ReactJs, NodeJs, Redux,  TailwindCss , Material UI, AOS,",
  },
];
</script>

<style scoped>
#project:target {
  background-color: #f7f7f7;
  transition: background-color 0.5s ease-in-out;
  color: red;
}
</style>
