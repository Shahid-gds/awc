<template>
  <section class="">
      <!-- this is who we are section -->
      <div class="">
        <div class="sm:flex">
          <div class="w-full">
            <div class="">
              <div class="text-center">
                <h1
                  class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                  American
                </h1>
              </div>
              <div class="text-center md:-mt-[5rem] -mt-[2rem]">
                <h2 class="others-text text-white md:text-[40px] text-[20px] uppercase animated-element-lefSubheading">
                  Who we are ?
                </h2>
              </div>
            </div>
            <div class=" bg-[#9d0208] w-[50%] h-1 animated-element-leftline sm:mt-3 mt-1.5"></div>
          </div>
          </div>
            <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-1.5">
              <p class="2xl:w-1/2 md:w-[70%] w-[90%]">
                Choosing American Web Craft means more than hiring a digital marketing service. Your company is gaining a dedicated partner committed to your business growth and success.
              </p>
            </div>
            <div class="text-center flex justify-center w-full sm:text-[18px] text-white py-3">
              <p class="2xl:w-1/2 md:w-[70%] w-[90%]">
                American Web Craft has been working at the forefront of the digital landscape since 2019. We take pride in assisting numerous companies across diverse sectors in achieving their objectives. Our goal is to be a one-stop agency for all the digital needs of our clients, eliminating the need to hire multiple agencies or employees. Our 360-degree digital marketing solutions provide tailored options that are practical, flexible, and effective, capturing the essence of Digital Key.
              </p>
            </div>
            <div class="flex items-center py-10 justify-center md:space-x-5 space-x-3 animated-element-buttons w-full">
              <router-link :to="{name: 'About'}">
                <div
                  class="hover-btn bg-gradient-to-r lg:text-lg text-[14px] from-[#9d0208] bg-[#601417]  rounded-lg p-3 uppercase cursor-pointer text-white md:px-10 sm:font-bold hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417]">
                  About Us
                </div>
              </router-link>
              <div>
                <div
                  class="get-btn border-2 lg:text-lg text-[14px] border-white rounded-lg p-2 uppercase cursor-pointer text-white md:px-10 sm:font-bold hover:border-[#9d0208]" @click="openModal">
                  Get Started
                </div>
                <GetStartedModal  :isVisible="isModalVisible" @close="closeModal" />
              </div>
            </div>
         <div class="sm:block hidden">
          <div class="flex items-center mt-16 relative">
            <div class="w-1/2 h-1 mt-3 bg-[#9d0208] animated-element-leftline"></div>
            <div class="w-full">
              <img src="@/assets/images/Home/whoWeAreimg/mainImg.svg" alt="">
            </div>
            <div class="w-1/2 h-1 mt-3 bg-[#9d0208] animated-element-second-right"></div>
            <div class="xl:block hidden absolute 2xl:right-[15rem] right-[5rem] 2xl:bottom-[14rem] bottom-[9rem]">
              <img src="@/assets/images/Home/whoWeAreimg/Logovictor.svg" alt="">
            </div>
            <div class="xl:hidden w-[10rem] absolute lg:right-[10rem] md:right-[8rem] right-[2rem] 2xl:bottom-[14rem] md:bottom-[9rem] top-6">
              <img src="@/assets/images/Home/whoWeAreimg/Logovictor.svg" alt="">
            </div>
          </div>
         </div>
         <div class="sm:hidden">
          <div class="relative">
            <div class="w-1/2 h-1 mt-3 bg-[#9d0208] animated-element-leftline"></div>
            <div class="px-6">
              <img src="@/assets/images/Home/whoWeAreimg/mainImg.svg" alt="">
            </div>
            <div class="flex justify-end pb-10">
              <div class=" bg-[#9d0208] 2xl:w-[65%] sm:w-[80%] w-[50%] h-1 animated-element-right-second"></div>
            </div>
            <div class="xl:block hidden absolute 2xl:right-[15rem] right-[5rem] 2xl:bottom-[14rem] bottom-[9rem]">
              <img src="@/assets/images/Home/whoWeAreimg/Logovictor.svg" alt="">
            </div>
          </div>
         </div>
        </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import GetStartedModal from '../UI/GetStartedModal.vue'
const isModalVisible = ref(false);
const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};
</script>
<style scoped>

</style>