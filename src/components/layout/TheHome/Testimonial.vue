<template>
    <section class="bg py-[5rem]">
        <!-- this is our Testimonails Section -->
        <div class="">
          <div class="sm:flex">
            <div class="w-full">
              <div class="">
                <div class="text-center">
                  <h1
                    class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                    Testimonials
                  </h1>
                </div>
                <div class="text-center md:-mt-[5rem] -mt-[2rem]">
                  <h2 class="others-text text-white md:text-[40px] text-[20px] uppercase animated-element-right-second">
                    What Our Clients Say?
                  </h2>
                </div>
              </div>
              <div class="flex justify-end">
                <div class=" bg-[#9d0208] w-[50%] h-1 sm:mt-3 mt-1.5 animated-element-right-second"></div>
              </div>
            </div>
            </div>
            <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-1.5 pb-6">
              <p class="md:w-[60%]">
                The reviews our clients give us mean the world to us and they power our team.
              </p>
            </div>
            <div>
              <carousel />
            </div>
            <div class="md:flex sm:space-x-4 justify-start sm:w-1/2 sm:-mt-10 mt-8">
              <div class="w-full h-1 mt-3 bg-[#9d0208] animated-element-left"></div>
              <div class="w-full text-[#a9a9a9] text-left px-6">
                <p>Website development to corporate branding. The digital agency that feels like an in-house partner.</p>
              </div>
            </div>
          </div>
    </section>
</template>

<script setup>
import carousel from '../UI/carousel.vue';
</script>

<style scoped>
</style>