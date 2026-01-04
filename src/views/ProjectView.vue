<template>
  <div>
    <AppNavbar />
    <button
      @click="goBack"
      class="flex items-center justify-start gap-3 max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] mx-auto font-semibold w-full md:text-base text-sm mt-4 md:hidden"
    >
      <svg
        class="size-5"
        viewBox="0 0 24 24"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path
          d="M15 19l-7-7 7-7"
          stroke="currentColor"
          stroke-width="2"
          stroke-linecap="round"
          stroke-linejoin="round"
        />
      </svg>
      <span>Go Back</span>
    </button>
    <section
      class="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto mb-10"
    >
      <div id="project" class="flex justify-center items-center">
        <h1
          class="lg:text-7xl text-4xl font-black text-center my-12 text-[#163537]"
        >
          All Projects
        </h1>
      </div>

      <div class="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
        <div
          v-for="(card, index) in cards"
          :key="index"
          class="w-fit rounded-md overflow-hidden border shadow-lg"
        >
          <img
            :src="card.image"
            alt="Card Image"
            loading="lazy"
            class="card-image w-full h-80 object-contain lg:object-cover border rounded-t-md hover:scale-105"
          />
          <div class="p-4 pt-6">
            <h2 class="sm:text-xl text-base font-bold mb-2 h-8">
              {{ card.title }}
            </h2>

            <div class="mb-4 pb-6">
              <p class="font-light text-[#163537] sm:text-base text-sm">
                {{
                  expandedCards[index]
                    ? card.description
                    : card.description.length > 350
                    ? card.description.substring(0, 350) + "..."
                    : card.description
                }}
              </p>
              <button
                v-if="card.description.length > 350"
                @click="toggleExpand(index)"
                class="text-[#163537] font-semibold text-sm mt-2 hover:underline"
              >
                {{ expandedCards[index] ? "See less" : "See more" }}
              </button>
            </div>

            <p class="mb-4">
              <span class="font-semibold">Stack: </span>
              <span>{{ card.stack }}</span>
            </p>

            <div
              class="flex justify-between border-b-2 pb-6 items-center text-[#ccc]"
            >
              <div
                v-if="card.github != '/'"
                class="flex justify-start gap-3 items-center border shadow-sm shadow-[#333] hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm cursor-pointer"
              >
                <a :href="card.github" class="">Github</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="gray"
                  class="size-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
              <div
                v-else
                class="flex justify-start gap-3 items-center border hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm cursor-not-allowed"
              >
                <div class="">Github</div>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="currentColor"
                  class="size-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="M16.5 10.5V6.75a4.5 4.5 0 1 0-9 0v3.75m-.75 11.25h10.5a2.25 2.25 0 0 0 2.25-2.25v-6.75a2.25 2.25 0 0 0-2.25-2.25H6.75a2.25 2.25 0 0 0-2.25 2.25v6.75a2.25 2.25 0 0 0 2.25 2.25Z"
                  />
                </svg>
              </div>
              <div
                class="flex justify-start gap-3 items-center border shadow-[#333] shadow-sm hover:shadow-none bg-transparent font-light py-2 px-6 rounded-[30px] text-black text-sm cursor-pointer"
              >
                <a :href="card.live" class="" target="_blank">Live</a>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke-width="1.5"
                  stroke="gray"
                  class="size-3"
                >
                  <path
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25"
                  />
                </svg>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    <AppFooter />
  </div>
</template>

<script setup lang="ts">
import AppNavbar from "@/components/AppNavbar.vue";
import AppFooter from "@/components/AppFooter.vue";
import { useRouter } from "vue-router";
import { ref } from "vue";
import eso from "../assets/eso.png";
import attica from "../assets/attica.png";
import fun from "../assets/fun.png";
import gen6ixx from "../assets/gen6ixx.png";
import alt from "../assets/alt-Createe.png";
import lurah from "../assets/mylurah.png";
import safi from "../assets/safibest.png";

const router = useRouter();
const expandedCards = ref<{ [key: number]: boolean }>({});

const toggleExpand = (index: number) => {
  expandedCards.value[index] = !expandedCards.value[index];
};

const goBack = () => {
  if (router.currentRoute.value.fullPath !== "/") {
    router.back();
  } else {
    router.push("/");
  }
};

const cards = [
  {
    image: eso,
    title: "ESO Security Training Platform",
    description:
      "A comprehensive security training platform with Admin CMS.This platform provides robust security training solutions/certification with a full-featured content management system for administrators.",
    github: "/",
    live: "https://esotrainingnw.co.uk/",
    stack: "ReactJs,Framer, NodeJs, TailwindCss, CMS Integration",
  },
  {
    image: attica,
    title: "AtticaHQ Real Estate Platform",
    description:
      "A sophisticated real estate platform with Admin CMS for product listings, featuring AI-powered capabilities. AtticaHQ offers advanced property management tools and intelligent features to enhance the real estate experience.",
    github: "/",
    live: "https://atticahq.com/",
    stack: "ReactJs, NodeJs, TailwindCss, AI Integration, CMS",
  },
  {
    image: fun,
    title: "FunNTail Official Website",
    description:
      "The official website for FunNTail. A modern, responsive web presence showcasing the company's services and portfolio with an engaging user experience.",
    github: "/",
    live: "https://funntail.co.uk",
    stack: "ReactJs,NodeJs,Framer, TailwindCss, Modern UI/UX",
  },
  {
    image: gen6ixx,
    title: "Gen6ixx Official Website",
    description:
      "The official website for Gen6ixx, developed to showcase the company's innovative solutions and expertise. Built with modern web technologies to deliver a professional and engaging digital experience.",
    github: "/",
    live: "https://gen6ixx.com/",
    stack: "ReactJs,NodeJs,Framer,, TailwindCss, Modern UI/UX",
  },
  {
    image: alt,
    title: "Alt-Create Creative Product Studio",
    description:
      "A creative product studio offering comprehensive digital solutions including web applications, mobile apps, designs, motion graphics, and more. Built to deliver innovative and high-quality digital experiences across multiple platforms and media.",
    github: "/",
    live: "https://alt-create.vercel.app/",
    stack:
      "ReactJs, NodeJs, TailwindCss, Motion Graphics, UI/UX Design, Mobile Development",
  },
  {
    image: safi,
    title: "Safibest Fashion Website",
    description:
      "A comprehensive fashion website for Safibest Fashion showcasing her brand identity, portfolio of works, training programs, and consultation services. The platform provides an elegant and professional online presence for the fashion brand.",
    github: "/",
    live: "https://safibest.vercel.app/",
    stack: "ReactJs, TailwindCss, Modern UI/UX, Framer",
  },
  {
    image: lurah,
    title: "Mylurah",
    description:
      "A culturally rooted digital wellbeing platform by the MomandMe Foundation (MMF), created to transform reproductive, menstrual, and maternal health for Black and African women. Centred on real stories and lived experiences, it provides tools and education to guide women through every stage, from their first period to pregnancy, postpartum, and beyond with voice-led learning, multilingual content, and accessible cycle tracking.",
    github: "/",
    live: "https://mylurah.com",
    stack:
      "ReactJs, NodeJs, TailwindCss, Voice Technology, Multilingual Support, Health Tracking",
  },
  {
    image:
      "https://res.cloudinary.com/duw4jtxls/image/upload/v1721401253/JCIASO_bqbvrk.png",
    title: "JCI ASO",
    description:
      " Collaborating with other developers to build the official website for JCI ASO is an exciting project aimed at creating a dynamic and engaging online presence for the organization. JCI, or Junior Chamber International",
    github: "/",
    stack: "ReactJs, TailwindCss , Material UI, Framer",
    live: "https://jciaso.vercel.app/",
  },
  {
    image:
      "https://res.cloudinary.com/duw4jtxls/image/upload/v1721401252/ImageCropper_ecgfiu.png",
    title: "Image Cropper ",
    description:
      "Image Cropper project empowers users to effortlessly upload, resize, crop, and download their images with precision and ease. Whether you're a photographer, designer, or simply someone looking to customize images for personal use, this tool offers intuitive features to enhance your editing experience.",
    github: "https://github.com/OgbajeLeo/ImageCropper",
    live: "https://croper-gamma.vercel.app/",
    stack: "HTML, TailwindCss , Vanilla Js, Cropper.js",
  },
  {
    image:
      "https://res.cloudinary.com/duw4jtxls/image/upload/v1721401975/TODOO_y0rovi.png",
    title: "Todoify ",
    description:
      "TODOIFY is a todo application that harnesses the power of LocalStorage to offer users seamless task management with all CRUD operations directly within their browser. Users can effortlessly create new tasks, Mark as done, and add task descriptions.",
    github: "https://github.com/OgbajeLeo/todoify-vue",
    live: "https://todoify-vue.vercel.app/",
    stack: "VueJs, TailwindCss ",
  },
  {
    image: "https://divineeffiong.vercel.app/asset/works.png/INSURE.png",
    title: "INsure ",
    description:
      "INsure is a comprehensive insurance sale management tool designed to empower insurance agents in efficiently managing and tracking leads throughout the sales process. Developed in collaboration with skilled developers,",
    github: "/",
    live: "https://insure-personal-git-alice-home-alice2212.vercel.app/",
    stack: "ReactJs, NodeJs, Redux,  TailwindCss , Material UI, AOS,",
  },
  {
    image: "/img/dashboard2.png",
    title: "TBs Dashboard",
    description:
      "Designed and developed a desktop-only dashboard and voucher page within 48 hours for a time-bound assessment. Built with Next.js and TailwindCSS, the project focuses on a user-friendly interface for desktop users but is not mobile-responsive.",

    github: "/",
    live: "https://dashboard-task-taupe.vercel.app/",
    stack: "NextJs, TailwindCss ,ChartsJs",
  },
  {
    image:
      "https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/644196fed9615418abe95e1f_home-depot-internship-thumbnail-p-1080.jpg",
    title: "The Orangeworks",
    description:
      "Develop and implement engaging lesson plans in accordance with the school's curriculum guidelines and educational standards.",
    github: "/",
    live: "Button 2",
    stack: "ReactJs, NodeJs, Redux,  TailwindCss , Material UI, AOS,",
  },
];
</script>
