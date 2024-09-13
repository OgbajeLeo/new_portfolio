<template>
    <div id="project" class="flex justify-center items-center">
        <h1 class="lg:text-7xl text-4xl font-black text-center lg:mt-24 my-12  text-[#555]">
           
            Tech Stack / Skills
        </h1>
      </div>
    <section class="py-8 px-2 max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto ">
      <div  class="grid grid-cols-3 sm:grid-cols-5 md:grid-cols-4 lg:grid-cols-6 md:gap-12 gap-6">
        <div v-for="tech in techStack" :key="tech.name" id="stack" class="flex flex-col items-center gap-3 bg-white p-4 rounded-lg shadow-slate-300 shadow-lg">
          <img :src="tech.logo" :alt="tech.name" class="size-12"/>
          <h3 class="md:text-lg text-sm font-semibold">{{ tech.name }}</h3>
        </div>
      </div>
    </section>
  </template>
  
  <script setup lang="ts">
  const techStack = [
    { name: 'Vue.js', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-vue-282497.png' },
    { name: 'ReactJs', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-react-3-1175109.png' },
    { name: 'NextJs', logo: 'https://www.svgrepo.com/show/354113/nextjs-icon.svg' },
    { name: 'JavaScript', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-javascript-1-225993.png' },
    { name: 'TypeScript', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-typescript-3521774-2945272.png' },
    { name: 'Node.js', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-nodejs-2-226035.png' },
    { name: 'Git', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-git-17-1175218.png' },
    { name: 'GitHub', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-github-163-761603.png' },
    { name: 'Redux', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-redux-3772327-3151453.png' },
    { name: 'Postman', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-postman-3521648-2945092.png' },
    { name: 'Figma', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-figma-3521426-2944870.png' },
    { name: 'Notion', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-notion-10516019-8630396.png' },
    { name: 'Trello', logo: 'https://cdn.iconscout.com/icon/free/png-512/free-trello-226534.png' },
    
  ]
  </script>
  
  <style scoped>
  
  #stack {
    transition: transform 0.3s ease, background-color 0.3s ease;
  }
  
  #stack:hover {
    background-color: #f9fafb; /* Light gray background on hover */
    transform: scale(1.05); /* Slightly scale up */
  }
  </style>
  