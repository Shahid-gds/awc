<template>
    <section class="bg py-[5rem]">
        <div class="lg:mt-[8%] md:mt-[15%] mt-[30%]">
            <div class="sm:flex">
                <div class="w-full">
                    <div class="">
                        <div class="text-center">
                            <h1
                                class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[35pt] uppercase animated-element-subHeadings">
                                American
                            </h1>
                        </div>
                        <div class="text-center md:leading-9 leading-tight md:-mt-[5rem] -mt-[2rem]">
                            <h2
                                class="others-text text-white 2xl:text-[40px] md:text-[35px] font-bold text-[20px] uppercase animated-element-right-second">
                                Get in touch!
                            </h2>
                            <h2
                                class="others-text text-white 2xl:text-[25px] md:text-[22px] font-bold text-[15px] px-6 uppercase animated-element-right-second">
                                <span>BESPOKE DIGITAL </span> <span class="text-[#9d0208] font-bold">MARKETING SOLUTIONS</span>
                            </h2>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div class=" bg-[#9d0208] w-[50%] h-1 animated-element-right-second sm:mt-3 mt-1.5"></div>
                    </div>
                </div>
            </div>
            <div class="text-center flex justify-center w-full sm:text-[16px] text-[#f0f0f0] sm:py-3.5 py-2">
                <div class="flex items-center justify-center md:space-x-5 space-x-3 animated-element-buttons w-full">
              <div>
                <div
                  class="hover-btn bg-gradient-to-r lg:text-lg text-[14px] from-[#9d0208] bg-[#601417]  rounded-lg p-3 uppercase cursor-pointer text-white md:px-10 sm:font-bold hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417]">
                  Our Services
                </div>
              </div>
              <div>
                <div @click="openModal"
                  class="get-btn border-2 lg:text-lg text-[14px] border-white rounded-lg p-2 uppercase cursor-pointer text-white md:px-10 sm:font-bold hover:border-[#9d0208]">
                  Get Started
                </div>
                <GetStartedModal  :isVisible="isModalVisible" @close="closeModal" />
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