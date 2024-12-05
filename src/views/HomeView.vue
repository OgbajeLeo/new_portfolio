<template>

    <Navbar class="relative" />

    <section class="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto  flex flex-col justify-center items-center">
      <div
        class="flex lg:flex-row flex-col lg:justify-center justify-center min-h-[90vh] items-center gap-8 space-y-8 md:space-x-8 md:mt-0 mt-12"
      >
        <div
          class="lg:w-1/2 w-full lg:text-left text-center flex flex-col lg:justify-start justify-center lg:items-start items-center"
        >
          <h2 class="sm:text-[38px] text-[28px] font-bold text-[#163537]">
            Hello, I'm Leo ッ
          </h2>
          <h2 class="sm:text-[54px] text-[28px] font-bold text-[#163537]">
            Frontend Developer
          </h2>
          <p class="text-lg mt-4 text-[#56555e]">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
          </p>

          <!-- <div
            class="bg-secondary-gray rounded-md py-3 px-6 mt-4 text-[#163537] w-full"
          >
            <div class="">Currently open to work. ☁️</div>
          </div> -->
          <router-link to="/contact"
            class="bg-primary-gray cursor-pointer rounded-[30px] text-base md:text-lg font-bold text-[#163537] py-2.5 px-10 mt-4 w-fit hover:shadow-md hover:scale-105"
          >
            Get in Touch
          </router-link>
        </div>
        <div class="lg:w-1/2 w-full flex lg:justify-end justify-center items-center bounce">
          <img src="../../public/img/profile.svg" alt="png" class="max-w-[370px] max-h-[300px] w-[370px] md:w-[500px]"/>
        </div>

        
      </div>
     


      <a href="#project" class="sm:flex hidden border-2 rounded-full z-[1] h-14 w-14 -mt-10 justify-center items-center bounce cursor-pointer">
        <img
          src="https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/6140a7f1ccfe242db78e97b5_Vector.svg"
          loading="lazy"
          width="21"
          alt=""
        />
    </a>

      <div class="border w-full my-4"></div>      


      <div data-aos="fade-up" data-aos-duration="2000" data-aos-delay="300" class="relative flex min-h-screen flex-col justify-center overflow-hidden bg-gray-50 py-6 sm:py-12">
        <h1 class="bg-image bg-cover bg-center lg:text-7xl text-4xl font-black text-center lg:mt-4 mb-12  text-[#163537]">
           
          What I do?
      </h1>
        <h1 id="title" class="leo">
           
         
      </h1>
        <div class="flex flex-col gap-6 lg:flex-row sm:gap-6 sm:justify-center px-4">

          <div
            v-for="service in services"
            :key="service.id"
            class="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-[#163537] transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:max-w-sm sm:rounded-lg sm:px-10"
          >
            <span
              class="absolute top-10 z-0 h-20 w-20 rounded-full bg-[#163537] transition-all duration-300 group-hover:scale-[10]"
            ></span>
            <div class="relative z-10 mx-auto max-w-md">
              <span
            class="grid h-20 w-20 place-items-center rounded-full bg-[#163537] transition-all duration-300 group-hover:border-[#ffeeff] group-hover:border"
          >

            <component :is="service.iconComponent" class="h-10 w-10 text-white transition-all"/>
          </span>
          <div class="pt-5 text-xl font-semibold leading-7">
            <p class="group-hover:text-white/90">
              
              {{ service.title }}
             
            </p>
          </div>
              <div
                class="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90"
              >
                <p>{{ service.description }}</p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <TechStack />
      <ProjectComp />
      <ContactForm />
      
    </section>

  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
import TechStack from "@/components/TechStack.vue";
import ProjectComp from "@/components/ProjectComp.vue";
import { onMounted, ref } from "vue";
import CodeIcon from "@/components/IconComp/CodeIcon.vue"
import ItIcon from "@/components/IconComp/ItIcon.vue"
import DesignIcon from "@/components/IconComp/DesignIcon.vue"
import AOS from 'aos';
import 'aos/dist/aos.css';
onMounted(() => {
  AOS.init();
});


const services = ref([
  {
    id: 1,
    description: 'I create web applications or websites that are functional, responsive, and user-friendly. Understanding client requirements, developing the necessary features and functionality, and ensuring the site is optimized for performance.',
    title: 'Web Design & Development',
    iconComponent: CodeIcon,
  },
  {
    id: 2,
    description: 'Websites require regular updates and maintenance to stay current and secure. I offer ongoing support to keep your site in top shape, address any issues that arise, and make necessary updates to ensure it continues to meet your evolving needs.',
    title: 'Maintenance and Support',
    iconComponent: ItIcon,
  },
  {
    id: 3,
    description: 'I create visually appealing and intuitive user interfaces. Designing wireframes, prototypes, and mockups, selecting appropriate color schemes and typography, and ensuring consistency and usability across different devices.',
    title: 'UI / UX Design',
    iconComponent: DesignIcon,
  }
]);
</script>

<style scoped>

</style>
