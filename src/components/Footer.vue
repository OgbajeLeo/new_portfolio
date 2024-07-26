<template>
    <!--Footer container-->
<footer class="flex flex-col items-center bg-zinc-50 text-center text-surface">
<div class="container pt-3 border-t-2 mt-4">
  <!-- Social media icons container -->
  <div class="flex justify-center pt-6  gap-8 pb-10"
  >
      <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 size-8 bg-white rounded-full flex justify-center items-center"><a class="" href="https://www.linkedin.com/in/ogbajeleo"><i class="fa-brands fa-linkedin-in fa-lg" style="color: #3e3e3e;"></i></a></div>
      <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125  size-8 bg-white rounded-full flex justify-center items-center"><a class="p-3" href="https://github.com/ogbajeleo"><i class="fa-brands fa-github fa-lg" style="color: #3e3e3e;"></i></a></div>
      <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 size-8 bg-white rounded-full flex justify-center items-center"><a class="p-3" href="https://twitter.com/omaebije"><i class="fa-brands fa-x-twitter fa-lg" style="color: #3e3e3e;"></i></a></div>
      <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125  size-8 bg-white rounded-full flex justify-center items-center"><a class="p-3" href="https://wa.me/+2349036787860"><i class="fa-brands fa-whatsapp fa-lg" style="color: #3e3e3e;"></i></a></div>
      <div class="hover:ring-2 hover:ring-slate-400 hover:bg-slate-100 hover:scale-125 size-8 bg-white rounded-full flex justify-center items-center"><a class="p-5" href="mailto:leonardaromeh@gmail.com"><i class="fa-regular fa-envelope fa-lg" style="color: #3e3e3e;"></i></a></div>
  </div>
</div>

<!--Copyright section-->
<div class="w-full bg-black/5 p-4 text-center">
  © {{ year }} 
  <a href="https:linkedin.com/in/ogbajeleo">Ogbaje Leo Arome</a>
</div>
</footer>
</template>

<script setup lang="ts">

// get current year
const year = new Date().getFullYear();

</script>