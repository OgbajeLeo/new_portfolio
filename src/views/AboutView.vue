<template>
  <div>
    <Navbar />
    <section
      class="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto mb-10 min-h-screen"
    >
      <div id="about" class="flex justify-center items-center">
        <h1
          class="lg:text-7xl text-4xl font-black text-center mt-12 ojuju text-[#163537]"
        >
          About Leo
        </h1>
      </div>
      <h1 class="mt-6">About page 10% loading ...</h1>
    </section>
    <Footer />
  </div>
</template>
<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
</script>
