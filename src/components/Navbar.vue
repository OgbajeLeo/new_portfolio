<template>
<div class="sticky top-0 bg-opacity-50 backdrop-blur-md lg:mb-4 mb-0 z-50">
<nav class=" h-[60px] lg:h-[90px] max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex justify-between items-center">
  <div>
      <router-link to="/">
      <h1 class="text-3xl font-bold text-[#333]">< /></h1>
    </router-link>
</div>
<div class="flex items-center gap-2">
    <div
            class="bg-green-400 rounded-full size-2 animate-ping"
          >
        </div>
            <div class=" z-50 md:text-sm text-xs font-semibold">Currently open to work.</div>
</div>

<div id="nav" class="hidden lg:flex justify-between items-center xl:space-x-[40px] text-[#757474] space-x-8  text-base font-[400] cursor-pointer">
    <router-link to="/" class="nav-link" :class="currentRoutePath=='/'? 'font-bold text-black':''">Home</router-link>
    <!-- <router-link to="/about" class="nav-link" :class="currentRoutePath=='/about'? 'font-bold text-black':''">About</router-link> -->
    <router-link to="/projects" class="nav-link" :class="currentRoutePath=='/projects'? 'font-bold text-black':''">Projects</router-link>
    <router-link to="/resume" class="nav-link" :class="currentRoutePath=='/resume'? 'font-bold text-black':''">Resume</router-link>
    <router-link to="/contact" class="nav-link" :class="currentRoutePath=='/contact'? 'font-bold text-black':''">Contact</router-link>

  </div>
  
  
  <div class="lg:hidden">
    <button @click="toggleMenu" class="focus:outline-none">
      <i class="fas fa-bars text-2xl"></i>
    </button>
  </div>


<div v-if="isMenuOpen" class="fixed inset-0 bg-white min-h-screen flex flex-col items-center text-center justify-center overflow-y-hidden z-50">
  <button @click="closeMenu" class="absolute top-4 right-10 text-4xl">
    &times;
  </button>
  <div class="flex flex-col justify-start gap-4 text-base font-[500px] ">
    <router-link @click="closeMenu" to="/" class="">Home</router-link>
    <!-- <router-link @click="closeMenu" to="/about" class="">About</router-link> -->
    <router-link @click="closeMenu" to="/projects" class="">Projects</router-link>
    <router-link @click="closeMenu" to="/resume" class="">Resume</router-link>
    <a @click="closeMenu" href="/contact">Contact</a>

    <div class="flex justify-center pt-6 lg:hidden animate__backInUp animate__animated animate__bounce"
    >
        <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 mr-4 size-8 bg-white rounded-full flex justify-center items-center"><a class="" href="https://www.linkedin.com/in/ogbajeleo"><i class="fa-brands fa-linkedin-in fa-lg" style="color: #3e3e3e;"></i></a></div>
        <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 sm:mt-[-8px] mr-4 size-8 bg-white rounded-full flex justify-center items-center"><a class="p-3" href="https://github.com/ogbajeleo"><i class="fa-brands fa-github fa-lg" style="color: #3e3e3e;"></i></a></div>
        <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 sm:mt-[-16px] mr-4 size-8 bg-white rounded-full flex justify-center items-center"><a class="p-3" href="https://twitter.com/omaebije"><i class="fa-brands fa-x-twitter fa-lg" style="color: #3e3e3e;"></i></a></div>
        <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 sm:mt-[-8px] mr-4 size-8 bg-white rounded-full flex justify-center items-center"><a class="p-3" href="https://wa.me/+2349036787860"><i class="fa-brands fa-whatsapp fa-lg" style="color: #3e3e3e;"></i></a></div>
        <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 size-8 bg-white rounded-full flex justify-center items-center"><a class="p-5" href="mailto:leonardaromeh@gmail.com"><i class="fa-regular fa-envelope fa-lg" style="color: #3e3e3e;"></i></a></div>
    </div>
</div>
</div>
</nav>
</div>
<Contact v-if="showModal"  />
</template>

<script setup lang="ts">
// import Contact from '@/components/ModalComp/Contact.vue';
import {ref, watch} from 'vue'
import { useRoute } from 'vue-router';

const route = useRoute();
    const currentRoutePath = ref<string>(route.path);

    // Watch for route changes
    watch(route, (to, from) => {
      currentRoutePath.value = to.path;
    });

const showModal = ref(false);
const isMenuOpen = ref(false);

const toggleMenu = () => {
isMenuOpen.value = !isMenuOpen.value;
};

const closeMenu = () => {
isMenuOpen.value = false;
};

</script>

<style scoped>
.nav-link{
position: relative;
}

.nav-link::after {
content: '';
position: absolute;
left: 0;
bottom: -2px; 
width: 0;
height: 2px; 
background-color: #CED6CE;
transition: width 0.3s ease-in-out; 
}

.nav-link:hover::after {
    width: 100%;
}
.nav-link:hover{
}
</style>