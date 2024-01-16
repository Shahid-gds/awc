<template> 
    <section class="bg">
      <!-- this is our Impressive Work Section -->
    <div class="">
      <div class="sm:flex">
        <div class="w-full">
          <div class="">
            <div class="text-center">
              <h1
                class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                SHOWCASE
              </h1>
            </div>
            <div class="text-center xl:-mt-[5rem] md:-mt-[4rem] sm:-mt-[3rem] -mt-[2rem]">
              <h2 class="others-text text-white md:text-[40px] text-[20px] uppercase animated-element-right-second">
                OUR IMPRESSIVE WORK
              </h2>
            </div>
          </div>
          <div class="flex justify-end">
            <div class=" bg-[#9d0208] w-[50%] h-1 sm:mt-3 mt-1.5 animated-element-right-second"></div>
          </div>
        </div>
        </div>
        <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-1.5">
          <p class="2xl:w-[60%] sm:w-[80%] px-6">
            Here’s a collection of some of the brilliant work that we have done over the years. Everything is unique, and
            tailor-made according to the client’s needs and wants. So trust in us to give you what you want.
          </p>
        </div>
        <div class="mt-6">
          <div>
            <OurWorkCarousel />
          </div>
          <div class="md:flex sm:py-10 py-6 sm:pb-4 pb-16 items-center md:space-x-4">
            <div class="sm:w-[50%] h-1 mt-3 bg-[#9d0208] animated-element-left"></div>
            <div class="sm:flex sm:w-full items-center sm:space-x-3">
              <div class="sm:w-full px-6 text-[#a9a9a9] sm:text-left text-center pt-3">
                <p>Everything is unique, and tailor-made according to the client’s needs and wants.
                  So trust in us to give you what you want.</p>
              </div>
              <div class="sm:w-full flex justify-center pt-4">
                <div
                  class="hover-btn bg-gradient-to-r px-10 text-center from-[#9d0208] bg-[#601417] border-r-[#601417] p-2 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                  <div class="uppercase">
                    Show All Works
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
import OurWorkCarousel from '../UI/OurWorkCarousel.vue';
</script>
<style scoped>

</style>


