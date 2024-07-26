<template>

    <Navbar class="relative" />

    <section class="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto  flex flex-col justify-center items-center">
      <div
        class="flex lg:flex-row flex-col lg:justify-center justify-center min-h-[90vh] items-center gap-8 md:space-x-8 md:mt-0 mt-12"
      >
        <div
          class="lg:w-1/2 w-full lg:text-left text-center flex flex-col lg:justify-start justify-center lg:items-start items-center"
        >
          <h2 class="sm:text-[48px] text-[28px] font-bold text-[#333]">
            Hello, I'm Leo ッ
          </h2>
          <h2 class="sm:text-[48px] text-[28px] font-bold text-[#333]">
            Frontend Developer
          </h2>
          <p class="text-lg mt-4 text-[#56555e]">
            I specialize in crafting immersive user experiences using the latest
            frontend technologies and frameworks to bring your vision to life.
          </p>

          <!-- <div
            class="bg-secondary-gray rounded-md py-3 px-6 mt-4 text-[#333] w-full"
          >
            <div class="">Currently open to work. ☁️</div>
          </div> -->
          <router-link to="/contact"
            class="bg-primary-gray cursor-pointer rounded-[30px] text-lg font-bold text-[#333] py-3 px-6 mt-4 w-fit hover:shadow-md hover:scale-105"
          >
            Get in Touch
          </router-link>
        </div>
        <div class="lg:w-1/2 w-full flex lg:justify-end justify-center items-center bounce">
          <img src="../../public/img/profile.svg" alt="png" class="max-w-[370px] max-h-[300px]"/>
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

      <TechStack />
      <ProjectComp />
      
    </section>

  <Footer />
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import TechStack from "@/components/TechStack.vue";
import ProjectComp from "@/components/ProjectComp.vue";
import { ref } from "vue";


</script>

<style scoped>

</style>
