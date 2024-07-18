<template>
    <div class="min-h-screen">
    <div id="project" class="flex justify-center items-center">
    <h1 class="lg:text-7xl text-4xl font-black text-center lg:mt-24 mt-12 ojuju text-[#555]">
       
        Projects
    </h1>
  </div>

    <div class="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="w-fit rounded-md overflow-hidden border"
        >
          <img
            :src="card.image"
            alt="Card Image"
            class="card-image w-full h-80 object-cover border rounded-t-md hover:bg-opacity-50 hover:backdrop-blur-md transition-all duration-300 ease-in-out transform hover:scale-105 hover:filter hover:blur-lg"
          />
          <div class="p-4 mt-6">
            <h2 class="sm:text-xl text-base font-bold mb-2 h-8">{{ card.title }}</h2>
            
            
            <p class="font-light text-[#555] sm:text-base text-sm mb-4 pb-6 h-32">
              {{ card.description }}
             
            </p>


            <div class="flex justify-between border-b-2 pb-6 items-center text-[#ccc]">
              <div
                class="flex justify-start gap-3 items-center border shadow-md hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm"
              >
                <a :href="card.github" class="">Github</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                
              </div>
              <div
                class="flex justify-start gap-3 items-center border shadow-md hover:shadow-none  bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm"
              >
                <a :href="card.live" class="">Live</a>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="gray" class="size-3">
                  <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                </svg>
                
              </div>
            </div>
          </div>
        </div>
      </div>
      <router-link to="/projects" class="cursor-pointer font-bold my-6 block text-gray-400 ">See More Projects ...</router-link >
    </div>
</template>

<script setup lang="ts">


interface Card {
  image: string;
  title: string;
  description: string;
  button1: string;
  button2: string;
}

const cards = [
  {
    image:
      "https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/644196fed9615418abe95e1f_home-depot-internship-thumbnail-p-1080.jpg",
    title: "The Orangeworks",
    description:
      "Develop and implement engaging lesson plans in accordance with the school's curriculum guidelines and educational standards.",
    github: "",
    live: "Button 2",
  },
  {
    image:
      "https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/644196fed9615418abe95e1f_home-depot-internship-thumbnail-p-1080.jpg",
    title: "Image Cropper ",
    description:
      "Develop and curriculum guidelines and educationstandards.Foster a positive and inclusive classroom environment that Develop and implement engaging lesson plans in accordance with the school's",
    github: "Button 1",
    live: "Button 2",
  },
  {
    image:
      "https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/644196fed9615418abe95e1f_home-depot-internship-thumbnail-p-1080.jpg",
    title: "Image Cropper ",
    description:
      "Develop and curriculum guidelines and educationstandards.Foster a positive and inclusive classroom environment that Develop and implement engaging lesson plans in accordance with the school's",
    github: "Button 1",
    live: "Button 2",
  },
];
</script>