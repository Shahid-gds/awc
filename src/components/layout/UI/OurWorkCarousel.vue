<template>
  <Carousel class="" :wrap-around="true" :autoplay="5000" :breakpoints="breakpointsSecondCarousel"
    v-model="activeSlideIndexSecond">
    <Slide class="md:px-1 px-6" v-for="slide in slidesSecondCarousel" :key="slide.id" @mouseenter="handleMouseEnter(slide)"
      @mouseleave="handleMouseLeave">
      <div class="carousel__item cursor-pointer relative text-white w-[98%]">
        <img class="w-full rounded-xl" :src="slide.image" :alt="slide.title" />
        <div class="title-hover absolute z-20 px-6 text-left bottom-10" v-if="isHovered(slide)">
          <h3 class="text-[28px] font-bold">{{ slide.title }}</h3>
          <p class="text-[16px] w-[21rem]">{{ slide.content }}</p>
        </div>
         <div class="active-mask cursor-pointer" v-if="isActiveSecond(slide)">
          <div class="absolute z-20 px-6 text-left bottom-10">
            <h3 class="text-[28px] font-bold">{{ slide.title }}</h3>
            <p class="text-[16px] w-[21rem]">{{ slide.content }}</p>
          </div>
         </div>
      </div>
    </Slide>
  </Carousel>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
const activeSlideIndexSecond = ref(1);
const isActiveSecond = (slide) => {
  return slidesSecondCarousel.value.indexOf(slide) === activeSlideIndexSecond.value;
};
const hoverState = ref(null);
const autoplayEnabled = ref(true);
const handleMouseEnter = (slide) => {
  hoverState.value = slide;
  autoplayEnabled.value = false;
  slide.activeMaskTop = 0;
};

const handleMouseLeave = (slide) => {
  hoverState.value = null; // Reset to null when leaving
  autoplayEnabled.value = true;
  if (!isHovered(slide)) {
    slide.activeMaskTop = 100;
  }
};

const isHovered = (slide) => {
  return hoverState.value === slide;
};



const slidesSecondCarousel = ref([
  {
    id: '1',
    title: 'Corporate Branding',
    content: 'Here’s a collection of some of the brilliant work that we have done over the years.',
    image: import('@/assets/images/Home/ourWorkimg/CorporateBranding.svg').then((module) => module.default),
  },
  {
    id: '2',
    title: 'Logo Design',
    content: 'Here’s a collection of some of the brilliant work that we have done over the years.',
    image: import('@/assets/images/Home/ourWorkimg/LogoDesign.svg').then((module) => module.default),
  },
  {
    id: '3',
    title: 'Web Design',
    content: 'Here’s a collection of some of the brilliant work that we have done over the years. ',
    image: import('@/assets/images/Home/ourWorkimg/WebDesign.svg').then((module) => module.default),
  },
]);
const breakpointsSecondCarousel = {
  700: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
};
onMounted(async () => {
  slidesSecondCarousel.value = await Promise.all(slidesSecondCarousel.value.map(async (slide) => ({
    ...slide,
    image: await slide.image
  })));

});
</script>
<style scoped>

.active-mask::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(360deg, rgba(255, 0, 0, 0.5) 0%, rgba(0, 0, 255, 0.1) 100%);
  z-index: 2;
  border-radius: 0.75rem;
  transition: all 1s ease;
}
.carousel__item {
  transition: all 0.2s ease-out;
  -webkit-transition: all 0.2s ease-out;
  -moz-transition: all 0.2s ease-out;
  -o-transition: all 0.2s ease-out;
  -ms-transition: all 0.2s ease-out;
  display: inline-block;
  outline: 0;
  position: relative;
  overflow: hidden;
}
.carousel__item::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  -webkit-transition: all 0.8s;
  -moz-transition: all 0.8s;
  -o-transition: all 0.8s;
  transition: all 0.8s;
  opacity: 1;
  -webkit-transform: translate(100%);
  transform: translateY(100%);
  background-color: rgba(9, 9, 9, 0.859);
  border-radius: 0.75rem;
  z-index: 2;
}
.carousel__item:hover:before {
  opacity: 0;
  -webkit-transform: translateY(0);
  transform: translateY(0);
  border-radius: 0.75rem;
}
.title-hover {
  transition: opacity 0.7s, height 0.7s;
  transition: all 0.7s ease;
  overflow: hidden;
}

.title-hover.hidden {
  opacity: 0;
  height: 0;
}
</style>