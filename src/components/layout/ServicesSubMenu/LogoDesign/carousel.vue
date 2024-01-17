<template>
  <section class="py-[2rem]">
        <Carousel class="w-full bg-transparent" :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints"
          v-model="activeSlideIndex">
          <Slide class="w-1/2" v-for="slide in slides" :key="slide">
            <div class="carousel__item">
              <div class="flex justify-center items-center">
                <div
                  class="md:w-full w-[50%] md:text-[60px] text-[45px] text-white flex justify-center"
                  :class="{
                    'text-outline': slide.heading === 'design' || slide.heading === 'marketing',
                    'text-branding': slide.heading === 'branding',
                    'text-development': slide.heading === 'development'
                  }">
                  {{ slide.heading }}
                </div>
              </div>
            </div>
          </Slide>
        </Carousel>
  </section>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide } from 'vue3-carousel'

const activeSlideIndex = ref(0);

const slides = ref([
  {
    id: '1',
    heading: 'design'
  },
  {
    id: '2',
    heading: 'development'
  },
  {
    id: '3',
    heading: 'marketing'
  },
  {
    id: '4',
    heading: 'branding',
  }, 
 
])
const breakpoints = {
  700: {
    itemsToShow: 1,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  1600: {
    itemsToShow: 4,
    snapAlign: 'center',
  },
}

</script>

<style scoped>
.text-outline{
  color: white;
  font-family: 'graphik';
  text-shadow:
    -1px -1px 0 #000,
    1px -1px 0 #000,
    -1px 1px 0 #000,
    1px 1px 0 #000,
}

/* Real outline for modern browsers */
@supports((text-stroke: 1px black) or (-webkit-text-stroke: 1px black)) {
  .text-outline {
    color: transparent;
    -webkit-text-stroke: 0.5px #ffffff;
    --text-stroke: px #ffffff;
    text-shadow: none;
  }
}
.text-branding, .text-development{
  font-family: 'graphik';
}
</style>