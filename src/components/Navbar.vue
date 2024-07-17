<template>
<div class="sticky top-0 bg-opacity-50 backdrop-blur-md lg:mb-4 mb-0">
<nav class=" z-50 h-[60px] lg:h-[90px] max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto flex justify-between items-center">
  <div>
      <router-link to="/">
      <h1 class="text-3xl font-bold text-[#333]">< /></h1>
    </router-link>
</div>

<div id="nav" class="hidden lg:flex justify-between items-center xl:space-x-[40px] text-[#757474] space-x-8  text-base font-[400] cursor-pointer">
    <router-link to="/about" class="nav-link">About</router-link>
    <router-link to="/course" class="nav-link">Courses</router-link>
    <a href="/about" class="nav-link">Project</a>
    <a  @click="showModal = !showModal" class="nav-link">Contact</a>
  </div>
  
  
  <div class="lg:hidden">
    <button @click="toggleMenu" class="focus:outline-none">
      <i class="fas fa-bars text-2xl"></i>
    </button>
  </div>


<div v-if="isMenuOpen" class="fixed inset-0 bg-white min-h-screen flex flex-col items-center text-center justify-center overflow-y-hidden z-50">
  <button @click="closeMenu" class="absolute top-4 right-4 text-3xl">
    &times;
  </button>
  <div class="flex flex-col gap-4 text-base font-[500px] ">
    <a @click="closeMenu" href="#about">About</a>
    <router-link to="/course" class="">Courses</router-link>
    <a  @click="(()=>{closeMenu();showModal = !showModal; })" class="">Contact</a>
    <a @click="closeMenu" href="#projects">Project</a>
    <router-link to="/enroll"  @click="closeMenu" class=" border border-primary-border rounded-[50px] py-2 px-6 text-primary-border hover:bg-primary-pink cursor-pointer">
      Enroll Now
    </router-link>
</div>
</div>
</nav>
</div>
<Contact v-if="showModal"  />
</template>

<script setup lang="ts">
// import Contact from '@/components/ModalComp/Contact.vue';
import {ref} from 'vue'

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
    color:black;}
</style>