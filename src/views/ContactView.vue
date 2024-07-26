<template>
    <div>
    <Navbar />

    <button @click="goBack" class="flex items-center justify-start gap-3 max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] mx-auto font-semibold w-full md:text-base text-sm mt-4 md:hidden">
      <svg class="size-5" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M15 19l-7-7 7-7" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
      </svg>
      <span>Go Back</span>
    </button>
    <section class="max-w-[95vw] sm:max-w-[754px] xl:max-w-[1240px] w-full mx-auto mb-10">
        
        <div id="project" class="flex flex-col justify-center items-center">
            <h1 class="lg:text-7xl text-4xl font-black text-center my-12 text-[#555]">
       
       Get in Touch
    </h1>
    <p class="text-sm md:text-base text-gray-500 mt-4">Have some big idea or brand to develop and need help?</p>
  </div>
    <div class="max-w-5xl max-lg:max-w-3xl mx-auto bg-white my-6 font-[sans-serif]">
    

        <div class="grid lg:grid-cols-3 items-start gap-4 border p-2  shadow-md border-[#333] rounded-lg mt-12">

            <div class="lg:block hidden bg-[#333] text-white rounded-lg p-6 h-full max-lg:order-1">
                <h2 class="text-xl font-semibold ">Contact Information</h2>
                <p class="text-sm md:text-base mt-4">Have some big idea or brand to develop and need help?</p>

                <ul class="mt-16 space-y-8">
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff'
                            viewBox="0 0 479.058 479.058">
                            <path
                                d="M434.146 59.882H44.912C20.146 59.882 0 80.028 0 104.794v269.47c0 24.766 20.146 44.912 44.912 44.912h389.234c24.766 0 44.912-20.146 44.912-44.912v-269.47c0-24.766-20.146-44.912-44.912-44.912zm0 29.941c2.034 0 3.969.422 5.738 1.159L239.529 264.631 39.173 90.982a14.902 14.902 0 0 1 5.738-1.159zm0 299.411H44.912c-8.26 0-14.971-6.71-14.971-14.971V122.615l199.778 173.141c2.822 2.441 6.316 3.655 9.81 3.655s6.988-1.213 9.81-3.655l199.778-173.141v251.649c-.001 8.26-6.711 14.97-14.971 14.97z"
                                data-original="#000000" />
                        </svg>
                        <a href="mailto:leonardaromeh@gmail.com" class=" text-sm  ml-4">
                            leonardaromeh@gmail.com
                        </a>
                    </li>
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 482.6 482.6">
                            <path d="M98.339 320.8c47.6 56.9 104.9 101.7 170.3 133.4 24.9 11.8 58.2 25.8 95.3 28.2 2.3.1 4.5.2 6.8.2 24.9 0 44.9-8.6 61.2-26.3.1-.1.3-.3.4-.5 5.8-7 12.4-13.3 19.3-20 4.7-4.5 9.5-9.2 14.1-14 21.3-22.2 21.3-50.4-.2-71.9l-60.1-60.1c-10.2-10.6-22.4-16.2-35.2-16.2-12.8 0-25.1 5.6-35.6 16.1l-35.8 35.8c-3.3-1.9-6.7-3.6-9.9-5.2-4-2-7.7-3.9-11-6-32.6-20.7-62.2-47.7-90.5-82.4-14.3-18.1-23.9-33.3-30.6-48.8 9.4-8.5 18.2-17.4 26.7-26.1 3-3.1 6.1-6.2 9.2-9.3 10.8-10.8 16.6-23.3 16.6-36s-5.7-25.2-16.6-36l-29.8-29.8c-3.5-3.5-6.8-6.9-10.2-10.4-6.6-6.8-13.5-13.8-20.3-20.1-10.3-10.1-22.4-15.4-35.2-15.4-12.7 0-24.9 5.3-35.6 15.5l-37.4 37.4c-13.6 13.6-21.3 30.1-22.9 49.2-1.9 23.9 2.5 49.3 13.9 80 17.5 47.5 43.9 91.6 83.1 138.7zm-72.6-216.6c1.2-13.3 6.3-24.4 15.9-34l37.2-37.2c5.8-5.6 12.2-8.5 18.4-8.5 6.1 0 12.3 2.9 18 8.7 6.7 6.2 13 12.7 19.8 19.6 3.4 3.5 6.9 7 10.4 10.6l29.8 29.8c6.2 6.2 9.4 12.5 9.4 18.7s-3.2 12.5-9.4 18.7c-3.1 3.1-6.2 6.3-9.3 9.4-9.3 9.4-18 18.3-27.6 26.8l-.5.5c-8.3 8.3-7 16.2-5 22.2.1.3.2.5.3.8 7.7 18.5 18.4 36.1 35.1 57.1 30 37 61.6 65.7 96.4 87.8 4.3 2.8 8.9 5 13.2 7.2 4 2 7.7 3.9 11 6 .4.2.7.4 1.1.6 3.3 1.7 6.5 2.5 9.7 2.5 8 0 13.2-5.1 14.9-6.8l37.4-37.4c5.8-5.8 12.1-8.9 18.3-8.9 7.6 0 13.8 4.7 17.7 8.9l60.3 60.2c12 12 11.9 25-.3 37.7-4.2 4.5-8.6 8.8-13.3 13.3-7 6.8-14.3 13.8-20.9 21.7-11.5 12.4-25.2 18.2-42.9 18.2-1.7 0-3.5-.1-5.2-.2-32.8-2.1-63.3-14.9-86.2-25.8-62.2-30.1-116.8-72.8-162.1-127-37.3-44.9-62.4-86.7-79-131.5-10.3-27.5-14.2-49.6-12.6-69.7z" data-original="#000000"></path>
                        </svg>
                        <a href="javascript:void(0)" class=" text-sm  ml-4">
                            +234 90 3678 7860
                        </a>
                    </li>
                    <li class="flex items-center">
                        <svg xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#fff' viewBox="0 0 368.16 368.16">
                            <path d="M184.08 0c-74.992 0-136 61.008-136 136 0 24.688 11.072 51.24 11.536 52.36 3.576 8.488 10.632 21.672 15.72 29.4l93.248 141.288c3.816 5.792 9.464 9.112 15.496 9.112s11.68-3.32 15.496-9.104l93.256-141.296c5.096-7.728 12.144-20.912 15.72-29.4.464-1.112 11.528-27.664 11.528-52.36 0-74.992-61.008-136-136-136zM293.8 182.152c-3.192 7.608-9.76 19.872-14.328 26.8l-93.256 141.296c-1.84 2.792-2.424 2.792-4.264 0L88.696 208.952c-4.568-6.928-11.136-19.2-14.328-26.808-.136-.328-10.288-24.768-10.288-46.144 0-66.168 53.832-120 120-120s120 53.832 120 120c0 21.408-10.176 45.912-10.28 46.152z" data-original="#000000"></path>
                            <path d="M184.08 64.008c-39.704 0-72 32.304-72 72s32.296 72 72 72 72-32.304 72-72-32.296-72-72-72zm0 128c-30.872 0-56-25.12-56-56s25.128-56 56-56 56 25.12 56 56-25.128 56-56 56z" data-original="#000000"></path>
                        </svg>
                        <a href="javascript:void(0)" class=" text-sm  ml-4">
                            FCT Abuja, Nigeria.
                        </a>
                    </li>
                </ul>

                
            </div>

            <div class="p-4 lg:col-span-2">
                <Form v-slot="{ values, errors }"
                :validation-schema="schema" @submit="submitForm">
                    <div class="grid sm:grid-cols-2 gap-8">

                        <div class="relative flex flex-col items-start w-full ">
                            <div class="relative flex items-center w-full">

                            <Field type="text" placeholder="Name" name="name" id="name"
                                class="px-2 pr-7 py-3 bg-white w-full text-sm text-black border-b border-gray-300 focus:border-black outline-none" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                                viewBox="0 0 24 24">
                                <circle cx="10" cy="7" r="6" data-original="#000000"></circle>
                                <path
                                    d="M14 15H6a5 5 0 0 0-5 5 3 3 0 0 0 3 3h12a3 3 0 0 0 3-3 5 5 0 0 0-5-5zm8-4h-2.59l.3-.29a1 1 0 0 0-1.42-1.42l-2 2a1 1 0 0 0 0 1.42l2 2a1 1 0 0 0 1.42 0 1 1 0 0 0 0-1.42l-.3-.29H22a1 1 0 0 0 0-2z"
                                    data-original="#000000"></path>
                            </svg>
                            </div>
                            <ErrorMessage class="text-wrap text-red-500 text-sm" name="name" />
                        </div>
                        
      

                        <div class="relative flex flex-col items-start w-full">
                            <div class="relative flex items-center w-full">

                                <Field type="email" placeholder="Email" id="email" name="email"
                                class="px-2 pr-7 py-3  bg-white text-black w-full text-sm  border-b border-gray-300 focus:border-black outline-none" />
                                <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute right-2"
                                viewBox="0 0 682.667 682.667">
                                <defs>
                                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                    <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                        data-original="#000000"></path>
                                    </g>
                                </svg>
                            </div>
                            <ErrorMessage class="text-wrap text-red-500 text-sm" name="email" />
                        </div>


                        <div class="relative flex flex-col items-start sm:col-span-2">
                            <div class="relative flex items-center w-full">
                            <Field as="textarea" name="message" id="message" rows="5" placeholder="Write Message"
                                class="px-2 pr-7 lg:pr-5 pt-3 bg-white text-black w-full text-sm border-b border-gray-300 focus:border-black outline-none" />
                            <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" class="w-[18px] h-[18px] absolute bottom-2 right-2"
                                viewBox="0 0 682.667 682.667">
                                <defs>
                                    <clipPath id="a" clipPathUnits="userSpaceOnUse">
                                        <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                                    </clipPath>
                                </defs>
                                <g clip-path="url(#a)" transform="matrix(1.33 0 0 -1.33 0 682.667)">
                                    <path fill="none" stroke-miterlimit="10" stroke-width="40"
                                        d="M452 444H60c-22.091 0-40-17.909-40-40v-39.446l212.127-157.782c14.17-10.54 33.576-10.54 47.746 0L492 364.554V404c0 22.091-17.909 40-40 40Z"
                                        data-original="#000000"></path>
                                    <path
                                        d="M472 274.9V107.999c0-11.027-8.972-20-20-20H60c-11.028 0-20 8.973-20 20V274.9L0 304.652V107.999c0-33.084 26.916-60 60-60h392c33.084 0 60 26.916 60 60v196.653Z"
                                        data-original="#000000"></path>
                                </g>
                            </svg>
                            </div>
                            <ErrorMessage class="text-wrap text-red-500 text-sm" name="message" />
                        </div>
                    
                    
                        <div class="col-span-full">
                            <h6 class="text-sm text-black">Select Subject</h6>
                            <div class="flex flex-col gap-6 mt-4">
                              <div v-for="(subject, index) in subjects" :key="index" class="flex items-center">
                                <input
                                  type="radio"
                                  name="subject"
                                  :id="'radio' + (index + 1)"
                                  :value="subject.value"
                                  class="hidden peer"
                                  @change="handleSubjectSelection(subject.value)"
                                />
                                <label
                                :for="'radio' + (index + 1)"
                                  class="relative p-0.5 flex items-center justify-center shrink-0 peer-checked:before:hidden before:block before:absolute before:w-full before:h-full before:bg-white w-5 h-5 cursor-pointer border-2 border-[#011c2b] rounded-full overflow-hidden"
                                >
                                  <span class="border-[6px] border-[#011c2b] rounded-full w-full h-full"></span>
                                </label>
                                <p class="text-sm text-black ml-4">{{ subject.label }}</p>
                              </div>
                            </div>
                        </div>
                        <ErrorMessage class="text-wrap text-red-500 text-sm" name="subject" />
                    </div>

                    <button type="submit"
                        class="mt-12 flex items-center justify-center text-sm lg:ml-auto max-lg:w-full rounded-[30px] px-4 py-3 tracking-wide hover:scale-105 hover:shadow-md text-black font-bold bg-primary-gray hover:bg-primary-gray">
                        <svg v-if="!isLoading" xmlns="http://www.w3.org/2000/svg" width="16px" height="16px" fill='#333' class="mr-2" viewBox="0 0 548.244 548.244">
                            <path fill-rule="evenodd" d="M392.19 156.054 211.268 281.667 22.032 218.58C8.823 214.168-.076 201.775 0 187.852c.077-13.923 9.078-26.24 22.338-30.498L506.15 1.549c11.5-3.697 24.123-.663 32.666 7.88 8.542 8.543 11.577 21.165 7.879 32.666L390.89 525.906c-4.258 13.26-16.575 22.261-30.498 22.338-13.923.076-26.316-8.823-30.728-22.032l-63.393-190.153z" clip-rule="evenodd" data-original="#000000" />
                        </svg>
                        <div v-else class="loader mr-2"></div> 
                        {{isLoading? ' Sending... ':' Send Message'}}
                    </button>
                </Form>
            </div>
        </div>
    </div>
    </section>
    <Footer />
    </div>
</template>

<script setup lang="ts">
import Navbar from "@/components/Navbar.vue";
import Footer from "@/components/Footer.vue";
import { z } from 'zod';
import {  ref } from 'vue';
import * as yup from "yup";
import { Form, Field, ErrorMessage } from "vee-validate";
import emailjs from "emailjs-com";
import Swal from "sweetalert2";
import { useRouter } from 'vue-router'

const router = useRouter()

const goBack = () => {
  if (router.currentRoute.value.fullPath !== '/') {
    router.back()
  } else {
    router.push('/')
  }
}


const isLoading = ref(false)
const selectedSubject = ref('General Inquiry');

const schema = yup.object({
  name: yup.string().required("Name is required").min(3, "Name must be at least 3 characters"),
  message: yup.string().required("Message is required").min(8, "Message must be at least 8 characters"), 
  email: yup.string().email().required("Please Enter a valid email address"), 
});

const serviceID = "service_oecgc0m";
const templateID = "template_sv1spgt";
const submitForm = async (values: any, actions: any) => {
  const { resetForm }: { resetForm: any } = actions;
  const templateParams = {
    user_name: values.name,
    user_email: values.email,
      message: values.message,
      subject: selectedSubject.value,
     
    };
    try {
      isLoading.value=true
    // console.log(templateParams)

    emailjs
    .send(
        serviceID,
        templateID,
        templateParams,
        "tzNBPOYcCpnQxURaP"
      )
      .then(
          (response:any) => {
              
              resetForm();
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "success",
            title: "Message sent succesfully",
          });
          isLoading.value=false
        },
        (error:any) => {
            isLoading.value=true
          // console.error('FAILED...', error);
          const Toast = Swal.mixin({
            toast: true,
            position: "top-end",
            showConfirmButton: false,
            timer: 3000,
            timerProgressBar: true,
            didOpen: (toast) => {
              toast.onmouseenter = Swal.stopTimer;
              toast.onmouseleave = Swal.resumeTimer;
            },
          });
          Toast.fire({
            icon: "error",
            title: "Failed to send email. Please try again later. !",
          });
          isLoading.value=false
          // error.value = 'Failed to send the email. Please try again later.';
        }
      );
  
  } catch (error) {
   
    
  }
};

const error = ref<string | null >(null); 

const subjects = ref([
  { label: 'General Inquiry', value: 'General Inquiry' },
  { label: 'Technical Support', value: 'Technical Support' },
  { label: 'Website Feedback', value: 'Website Feedback' },
]);

const handleSubjectSelection=(text:string)=> {
        selectedSubject.value= text;
    }

</script>

<style scoped>

textarea {
    resize: none;
}


.loader {
    border: 2px solid #f3f3f3;
    border-top: 2px solid #333;
    border-radius: 50%;
    width: 18px;
    height: 18px;
    animation: spin 1s linear infinite;
  }
  
  @keyframes spin {
    0% {
      transform: rotate(0deg);
    }
    100% {
      transform: rotate(360deg);
    }
  }
</style>