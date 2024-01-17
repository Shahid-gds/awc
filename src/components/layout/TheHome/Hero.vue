<template>
  <section class="bg">
    <div class="w-full">
      <div class="flex w-full ">
        <div class="animated-element-left">
          <img class="absolute md:-left-24 -left-[30px] lg:top-[15%] top-[15%] w-[70%]" src="@/assets/images/manAmination.svg" alt="">
        </div>
      <div class="w-full md:mt-[28%] sm:mt-[30%] mt-[70%] sm:ml-[10%] ml-[5%] z-20 sm:flex justify-end">
      <div class="">
        <div class="2xl:-ml-[40%] sm:-ml-[20%] ml-[5%] sm:mt-12">
          <h1
            class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
            American
          </h1>
        </div>
        <div class="flex items-center space-x-1 sm:-mt-[7%] -mt-[5%] others-text">
          <div
            class=" text-white w-full uppercase 2xl:text-[30px] xl:text-[25px] lg:text-[23px] md:text-[21px] text-[14px] animated-element-right-first">
            <h1>D e v e l o p e r &</h1>
          </div>
          <div class="sm:w-full w-[90%] h-1 mt-3 bg-[#9d0208] animated-element-right-second"></div>
        </div>
        <div
          class="sm:block hidden -mt-[1%]  uppercase third-text animated-element-right-second">
          <span class="text-[#9d0208] 2xl:text-[40px] font-bold xl:text-[30px] sm:text-[25px] animated-element-growth">Growth </span>
          <span class="text-white 2xl:text-[40px] xl:text-[30px] font-bold sm:text-[25px] animated-element-partner">Partners</span>
          <p class="text-white sm:text-[14px] text-[10px] pb-4">BET ON OUR RELIABILITY AND FUTURE-PROOF SCALABILITY.</p>
        </div>
        <div
          class="sm:hidden -mt-[1%]  uppercase third-text animated-element-right-second leading-6 pt-1">
          <span class="text-[#9d0208] 2xl:text-[40px] font-bold xl:text-[30px] sm:text-[25px] animated-element-growth">Growth </span>
          <span class="text-white 2xl:text-[40px] xl:text-[30px] font-bold sm:text-[25px] animated-element-partner">Partners</span>
          <p class="text-white sm:text-[14px] text-[10px] pb-4">BET ON OUR RELIABILITY AND FUTURE-PROOF SCALABILITY.</p>
        </div>
        <div class="flex items-center md:space-x-5 space-x-3 animated-element-buttons">
          <router-link :to="{name: 'Portfolio'}">
            <div
              class="hover-btn bg-gradient-to-r lg:text-lg text-[14px] from-[#9d0208] bg-[#601417]  rounded-lg p-3 uppercase cursor-pointer text-white md:px-10 sm:font-bold hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417]">
              Our Portfolio
            </div>
          </router-link>
          <div>
           <div>
            <div
            class="get-btn border-2 lg:text-lg text-[14px] border-white rounded-lg p-2 uppercase cursor-pointer text-white md:px-10 sm:font-bold hover:border-[#9d0208]" @click="openModal">
            Get Started
          </div>
          <GetStartedModal  :isVisible="isModalVisible" @close="closeModal" />
           </div>
          </div>
        </div>
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