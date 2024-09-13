<template>
    <div>
    <Navbar />

    <button @click="goBack" class="flex items-center justify-start gap-3 max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] mx-auto font-semibold w-full md:text-base text-sm mt-4 md:hidden">
      <svg class="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Go Back</span>
    </button>
  
    <ContactForm />
    <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import ContactForm from "@/components/ContactForm.vue";
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (router.currentRoute.value.fullPath !== '/') {
    router.back()
  } else {
    // Optional: handle the case where there's no history, e.g., redirect to a default route
    router.push('/')
  }
}


</script>

<style scoped>

</style>