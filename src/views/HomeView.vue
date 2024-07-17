<template>
  <div class="">
    <Navbar />


    <section class=" max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto min-h-screen flex flex-col justify-center items-center">
      <div class="flex md:flex-row flex-col md:justify-between justify-center items-center gap-8 md:mt-4 mt-8">
        <div class="md:w-1/2 w-full md:text-left text-center flex flex-col md:justify-start justify-center md:items-start items-center">

          <h2 class="sm:text-[48px] text-[28px] font-bold text-[#333]">Hello, I'm Leo ッ</h2>
          <h2 class="sm:text-[48px] text-[28px] font-bold text-[#333]">Frontend Developer</h2>
          <p class="text-lg mt-4 text-[#56555e]">I specialize in crafting immersive user experiences using the latest  frontend technologies and frameworks to bring your vision to life.</p>


          <div class="bg-secondary-gray rounded-md py-3 px-6 mt-4 text-[#333] w-full"><div class="text-block-12">Currently open to work. ☁️ </div></div>
          <div class="bg-primary-gray cursor-pointer rounded-md text-lg font-bold text-[#333] py-3 px-6 mt-4 w-fit hover:shadow-md hover:scale-105">Get in Touch</div>

        </div>
        <div class="md:w-1/2 w-full">
            <img src="../../public/img/profile.svg"
            alt="png" />
        </div>

      </div>

      <div class="sm:flex hidden border-2 rounded-full -z-10 h-14 w-14  justify-center items-center animate-bounce"><img src="https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/6140a7f1ccfe242db78e97b5_Vector.svg" loading="lazy" width="21" alt=""></div>



        <div class="card-grid grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
          <div v-for="(card, index) in cards" :key="index" class="w-fit rounded-lg overflow-hidden">
            <img :src="card.image" alt="Card Image" class="card-image w-full h-64 object-cover border rounded-md" />
            <div class="p-4 mt-6">
              <h2 class="card-title text-xl font-bold mb-2">{{ card.title }}</h2>
              <p class="font-light text-[#555] mb-4 border-b-2 pb-6 min-h-[120px]">{{ card.description }}</p>
              <div class="flex justify-between items-center text-[#ccc] ">
                <button class="border bg-transparent hover:bg-gray-600 font-bold py-2 px-4 rounded-[30px]">{{ card.button1 }}</button>
                <button class="border bg-transparent hover:bg-gray-600  font-bold py-2 px-4 rounded-[30px]">{{ card.button2 }}</button>
              </div>
            </div>
          </div>
        </div>
    </section>
    </div>
  
</template>

<script setup lang="ts">
import Navbar from '@/components/Navbar.vue'

interface Card {
  image: string;
  title: string;
  description: string;
  button1: string;
  button2: string;
}

const cards= [
        {
          image: 'https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/644196fed9615418abe95e1f_home-depot-internship-thumbnail-p-1080.jpg',
          title: 'The Home Depot Internship- Orangeworks',
          description: "Develop and implement engaging lesson plans in accordance with the school's curriculum guidelines and educational standards.Foster a positive and inclusive classroom environment that promotes learning and respect among students.Utilize various instructional strategies.",
          button1: 'Button 1',
          button2: 'Button 2',
        },
        {
          image: 'https://assets-global.website-files.com/60f5a97b9e66c2b92c76a14e/644196fed9615418abe95e1f_home-depot-internship-thumbnail-p-1080.jpg',
          title: 'Card 2',
          description: "Develop and implement engaging lesson plans in accordance with the school's curriculum guidelines and educationstandards.Foster a positive and inclusive classroom environment that",
          button1: 'Button 1',
          button2: 'Button 2',
        },
      
      ]

</script>