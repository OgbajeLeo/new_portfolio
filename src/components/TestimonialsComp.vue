<template>
  <div class="py-12 lg:py-24">
    <div id="testimonials" class="flex justify-center items-center">
      <h1
        class="lg:text-7xl text-4xl font-black text-center lg:mt-24 my-12 text-[#163537]"
      >
        Testimonials
      </h1>
    </div>

    <div class="relative max-w-7xl mx-auto px-2 sm:px-4 mt-8">
      <!-- Carousel Container -->
      <div class="overflow-hidden grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        <div
          class="flex transition-transform duration-500 ease-in-out"
          :style="{ transform: `translateX(-${currentIndex * 100}%)` }"
        >
          <div
            v-for="(testimonial, index) in testimonials"
            :key="index"
            class="min-w-full  px-0 sm:px-2"
          >
            <div
              :class="[
                'w-full rounded-md overflow-hidden border shadow-md hover:shadow-lg transition-shadow',
                index % 2 !== 0 ? 'bg-primary-gray/50' : ''
              ]"
            >
              <div class="p-4 pt-6">
                <div class="mb-4 flex items-center gap-2">
                  <div
                    v-for="star in 5"
                    :key="star"
                    class="text-yellow-400 text-xl"
                  >
                    ★
                  </div>
                </div>
                <p
                  class="font-light text-[#163537] sm:text-base text-sm mb-4 pb-6 leading-relaxed break-words"
                >
                  "{{ testimonial.quote }}"
                </p>

                <div class="flex items-center gap-3 border-t-2 pt-4">
                  <div
                    class="size-12 rounded-full bg-[#163537]/70 border-4 flex items-center justify-center text-white font-bold text-lg"
                  >
                    {{ testimonial.initials }}
                  </div>
                  <div>
                    <h3 class="font-bold text-[#163537] sm:text-base text-sm">
                      {{ testimonial.name }}
                    </h3>
                    <p class="font-light text-[#56555e] sm:text-sm text-xs">
                      {{ testimonial.role }} • {{ testimonial.company }}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Navigation Buttons -->
      <button
        @click="previousSlide"
        class="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 lg:-translate-x-12 bg-[#163537] text-white rounded-full p-3 hover:bg-[#1a4043] transition-colors shadow-lg z-10"
        aria-label="Previous testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M15 19l-7-7 7-7"
          />
        </svg>
      </button>
      <button
        @click="nextSlide"
        class="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 lg:translate-x-12 bg-[#163537] text-white rounded-full p-3 hover:bg-[#1a4043] transition-colors shadow-lg z-10"
        aria-label="Next testimonial"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          class="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="2"
            d="M9 5l7 7-7 7"
          />
        </svg>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted, onUnmounted } from 'vue';

const testimonials = [
  {
    quote:
      "Leo is an exceptional frontend developer who consistently delivers high-quality work. His attention to detail and ability to transform designs into beautiful, functional interfaces is impressive. Working with him has been a great experience.",
    name: "Stephen Udeh",
    role: "Senior Software Developer",
    company: "PathTech ",
    initials: "SU",
  },
  {
    quote:
      "Leo brought our vision to life with his technical expertise and creative problem-solving skills. He's responsive, professional, and always goes above and beyond to ensure the final product exceeds expectations. Highly recommended!",
    name: "Henry Valentine",
    role: "Mobile/Web Developer",
    company: "Crovr",
    initials: "HV",
  },
  {
    quote:
      "Working with Leo was a pleasure. His deep understanding of modern frontend technologies and best practices resulted in a fast, responsive, and user-friendly application. He's a reliable team player who consistently meets deadlines.",
    name: "Michael Chen",
    role: "CTO",
    company: "Startup Inc",
    initials: "MC",
  },
  {
    quote:
      "Leo's technical skills are top-notch, and his communication throughout the project was excellent. He transformed our complex requirements into an intuitive user interface that our users love. I would definitely work with him again.",
    name: "Safiyat Hamzat",
    role: "Founder",
    company: "SafiBest Fashion",
    initials: "SH",
  },
];

const currentIndex = ref(0);
let autoPlayInterval: ReturnType<typeof setInterval> | null = null;

// Calculate the maximum index based on screen size
const getMaxIndex = (): number => {
  if (typeof window === 'undefined') return testimonials.length - 1;
  
  const width = window.innerWidth;
  if (width >= 1024) {
    // lg screens: 3 cards per view
    return Math.max(0, testimonials.length - 3);
  } else if (width >= 640) {
    // sm screens: 2 cards per view
    return Math.max(0, testimonials.length - 2);
  } else {
    // mobile: 1 card per view
    return testimonials.length - 1;
  }
};

const nextSlide = () => {
  const maxIdx = getMaxIndex();
  if (currentIndex.value >= maxIdx) {
    currentIndex.value = 0;
  } else {
    currentIndex.value++;
  }
  resetAutoPlay();
};

const previousSlide = () => {
  const maxIdx = getMaxIndex();
  if (currentIndex.value <= 0) {
    currentIndex.value = maxIdx;
  } else {
    currentIndex.value--;
  }
  resetAutoPlay();
};

const resetAutoPlay = () => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
  startAutoPlay();
};

const startAutoPlay = () => {
  autoPlayInterval = setInterval(() => {
    nextSlide();
  }, 5000); // Change slide every 5 seconds
};

let resizeHandler: (() => void) | null = null;

onMounted(() => {
  startAutoPlay();
  
  // Update index on window resize
  resizeHandler = () => {
    const maxIdx = getMaxIndex();
    if (currentIndex.value > maxIdx) {
      currentIndex.value = maxIdx;
    }
  };
  
  window.addEventListener('resize', resizeHandler);
});

onUnmounted(() => {
  if (autoPlayInterval) {
    clearInterval(autoPlayInterval);
  }
  if (resizeHandler) {
    window.removeEventListener('resize', resizeHandler);
  }
});
</script>

<style scoped>
#testimonials:target {
  background-color: #f7f7f7;
  transition: background-color 0.5s ease-in-out;
}

/* Hide navigation buttons on very small screens */
@media (max-width: 640px) {
  button[aria-label="Previous testimonial"],
  button[aria-label="Next testimonial"] {
    padding: 0.5rem;
  }
  
  button[aria-label="Previous testimonial"] {
    transform: translate(-0.5rem, -50%);
  }
  
  button[aria-label="Next testimonial"] {
    transform: translate(0.5rem, -50%);
  }
}
</style>
