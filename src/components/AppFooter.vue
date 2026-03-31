<template>
  <!--Footer container-->
  <footer
    class="flex flex-col items-center bg-zinc-50 dark:bg-gray-900 text-center text-surface dark:text-gray-300"
  >
    <div class="container pt-3 border-t-2 dark:border-gray-700 mt-4">
      <!-- Social media icons container -->
      <div class="flex justify-center pt-6 gap-8 pb-10">
        <div
          class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
        >
          <a class="" href="https://www.linkedin.com/in/ogbajeleo"
            ><i
              class="fa-brands fa-linkedin-in fa-lg text-gray-700 dark:text-gray-300"
            ></i
          ></a>
        </div>
        <div
          class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
        >
          <a class="p-3" href="https://github.com/ogbajeleo"
            ><i class="fa-brands fa-github fa-lg text-gray-700 dark:text-gray-300"></i
          ></a>
        </div>
        <div
          class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
        >
          <a class="p-3" href="https://twitter.com/omaebije"
            ><i class="fa-brands fa-x-twitter fa-lg text-gray-700 dark:text-gray-300"></i
          ></a>
        </div>
        <div
          class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
        >
          <a class="p-3" href="https://wa.me/+2349036787860"
            ><i class="fa-brands fa-whatsapp fa-lg text-gray-700 dark:text-gray-300"></i
          ></a>
        </div>
        <div
          class="hover:ring-2 hover:ring-slate-400 dark:hover:ring-slate-600 hover:bg-slate-100 dark:hover:bg-slate-800 hover:scale-125 size-8 bg-white dark:bg-gray-800 rounded-full flex justify-center items-center"
        >
          <a class="p-5" href="mailto:leonardaromeh@gmail.com"
            ><i class="fa-regular fa-envelope fa-lg text-gray-700 dark:text-gray-300"></i
          ></a>
        </div>
      </div>
    </div>

    <!--Copyright section-->
    <div class="w-full bg-black/5 dark:bg-gray-800/50 p-4 text-center">
       © <a href="https:linkedin.com/in/ogbajeleo" class="hover:underline italic">Ogbaje Leo Arome</a>  {{ year }} All rights Reserved
      
    </div>
  </footer>
</template>

<script setup lang="ts">
const year = new Date().getFullYear();
</script>
