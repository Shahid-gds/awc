<template>
      <section class="bg sm:py-[5rem] py-[3rem]">
        <!-- This is for  Services Section -->
      <div class="w-full">
        <div class="sm:flex">
        <div class="w-full">
          <div class="">
            <div class="text-center">
              <h1
                class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                Digital
              </h1>
            </div>
            <div class="text-center xl:-mt-[5rem] md:-mt-[4rem] sm:-mt-[3rem] -mt-[2rem]">
              <h2 class="others-text text-white md:text-[40px] text-[20px] uppercase animated-element-lefSubheading">
                Services
              </h2>
            </div>
          </div>
          <div class=" bg-[#9d0208] w-[50%] h-1 sm:mt-3 mt-1 animated-element-leftline"></div>
        </div>
        </div>
          <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-1">
            <p class="2xl:w-1/2 md:w-[70%] w-[90%]">
              Our Digital Services are not limited to but expanded throughout the digital
              forms - from website development to corporate branding - we offer you a one window solution.
            </p>
          </div>
          <div>
            <ServicesCarousel />
          </div>
        </div>
      </section>
</template>
<script setup>
import ServicesCarousel from '../UI/ServicesCarousel.vue';
</script>

<style scoped>

</style>
