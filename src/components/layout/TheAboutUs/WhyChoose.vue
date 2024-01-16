<template>
    <section class="bg py-[5rem]">
        <div class="">
            <div class="sm:flex">
                <div class="w-full">
                    <div class="">
                        <div class="text-center">
                            <h1
                                class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                                american
                            </h1>
                        </div>
                        <div class="text-center md:-mt-[5rem] -mt-[2rem]">
                            <h2
                                class="others-text text-white md:text-[40px] text-[20px] uppercase animated-element-right-second">
                                Why Choose Us?
                            </h2>
                        </div>
                    </div>
                    <div class="flex justify-end">
                        <div class=" bg-[#9d0208] w-[50%] h-1 sm:mt-3 mt-1.5 animated-element-right-second"></div>
                    </div>
                </div>
            </div>
            <div class="container mx-auto text-center text-[18px] text-white px-6">
                <div class="xl:px-[23rem] sm:p-3 p-1">
                    <p>
                        We’re a digital growth agency whose job is to give our clients the ultimate satisfaction for all
                        their
                        needs and to help them grow and reach new heights.
                    </p>
                </div>
                <div class="xl:px-[10rem]">
                    <p>
                        American Web Craft has been working and dominating the digital industry for 5 years and has a
                        brilliant track record to show for it. The company aims to provide a single one-window solution to
                        all its customers so that they don’t have to hire multiple agencies or employees when all of their
                        work can be done from one place. Providing solutions that are practical, feasible and effective, is
                        the motto of Digital Key.
                    </p>
                </div>
                <div class="text-center flex justify-center w-full sm:text-[16px] text-[#f0f0f0] py-3 mt-10">
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
                    <div class="md:flex items-center mt-16">
                        <div class="2xl:w-1/2"></div>
                      <div class="w-full relative">
                     <div class="flex justify-center px-6">
                        <div class="2xl:w-[700px] xl:w-[600px] w-[500px]">
                            <img class="" src="../../../assets/images/AboutUs/mainImg.png" alt="">
                        </div>
                            <div class="absolute 2xl:top-[10rem] xl:top-[7rem] top-[6rem] lg:-right-[10rem] md:-right-[6rem] right-[4rem]">
                                <img class="2xl:w-[18rem] lg:w-[14rem] md:w-[10rem] w-[5rem]" src="@/assets/images/Home/whoWeAreimg/Logovictor.svg" alt="">
                            </div>
                     </div>
                      </div>
                      <div class="w-1/2 h-1 mt-3 bg-[#9d0208] animated-element-second-right"></div>
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

<style scoped></style>