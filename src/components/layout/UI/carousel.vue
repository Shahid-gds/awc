<template>
  <div class="flex 2xl:justify-end justify-center w-full px-6">
    <Carousel class="2xl:w-[90%] w-full bg-transparent" :autoplay="2000" :wrap-around="true" :breakpoints="breakpoints"
      v-model="activeSlideIndex">
      <Slide class="" v-for="slide in slides" :key="slide">
        <div class="carousel__item text-white m-2 py-16">
           <div class="cursor-pointer text-left relative top-5 bg-gradient-to-b sm:px-10 px-6 from-[#361416] rounded-xl border-b-[#361416]">
          <div class="">
            <div class="w-full flex justify-center img-index">
              <img class="z-10" :src="slide.image" :alt="slide.image">
            </div>
            <div class="-mt-[4rem]">
              <h3 class="text-[28px] text-center">{{ slide.title }}</h3>
            </div>
            <div>
              <p class="text-[16px] text-center text-[#bba3a4] leading-7">{{ slide.content }}</p>
            </div>
              <div class="flex justify-end mt-6">
              <svg xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink" width="50" height="50" viewBox="0 0 61 66">
                <image id="left-quote" width="61" height="66" xlink:href="data:image/png;base64,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"/>
              </svg> 
           </div> 
          </div>
            <div class="active-mask py-1 sm:px-10 px-6" v-if="isActiveSecond(slide)"></div>         
           </div>
        </div>
      </Slide>
      <template #addons>
      <div class="sm:block hidden">
        <div class="flex space-x-6 justify-end md:mr-24">
          <div class="bg-[#343434] hover:bg-[#9d0208] rounded-full py-1 text-white w-8 h-8">
            <button @click="navigate('prev')" class="arrow-left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
            </svg>
              
            </button>
          </div>
          <div class="">
            <button v-for="(slide, index) in slides" :key="slide.id" :aria-label="'Go to slide ' + (index + 1)"
              :class="{ active: activeSlideIndex === index }" @click="activeSlideIndex = index"
              class="pagination-button"></button>
          </div>
          <div class="bg-[#343434] hover:bg-[#9d0208] rounded-full py-1 text-white w-8 h-8">
            <button @click="navigate('next')" class="arrow-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </button>
          </div>
        </div>
      </div>
      <div class="sm:hidden">
        <div class="flex space-x-6 sm:justify-end justify-center md:mr-24">
          <div class="bg-[#343434] hover:bg-[#9d0208]  rounded-full py-1 text-white w-8 h-8">
            <button @click="navigate('prev')" class="arrow-left">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
              </svg>
              
            </button>
          </div>
          <div class="">
            <button v-for="(slide, index) in slides" :key="slide.id" :aria-label="'Go to slide ' + (index + 1)"
              :class="{ active: activeSlideIndex === index }" @click="activeSlideIndex = index"
              class="pagination-button"></button>
          </div>
          <div class="bg-[#343434] hover:bg-[#9d0208] rounded-full py-1 text-white w-8 h-8">
            <button @click="navigate('next')" class="arrow-right">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
              <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
            </button>
          </div>
        </div>
      </div>
      </template>
    </Carousel>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const activeSlideIndex = ref(0);

const isActiveSecond = (slide) => {
  return slides.value.indexOf(slide) === activeSlideIndex.value;
};
const navigate = (direction) => {
  if (direction === 'prev') {
    activeSlideIndex.value =
      (activeSlideIndex.value - 1 + slides.value.length) % slides.value.length;
  } else {
    activeSlideIndex.value = (activeSlideIndex.value + 1) % slides.value.length;
  }
};

const slides = ref([
  {
    id: '1',
    title: 'Jane Dean',
    content: 'At American Web Craft, we have an experienced and highly dedicated network of website designers that generate user-friendly web designs tailored to customers requirements. Through responsive web designs, we help businesses...experience a bug-free website to ensure a maximum conversion rate throughout.',
    image: import('@/assets/images/Home/testimonial/LogoOne.svg').then((module) => module.default),
  },
  {
    id: '2',
    title: 'Logan Sparks',
    content: 'At American Web Craft, we have an experienced and highly dedicated network of website designers that generate user-friendly web designs tailored to customers requirements. Through responsive web designs, we help businesses...experience a bug-free website to ensure a maximum conversion rate throughout.',
    image: import('@/assets/images/Home/testimonial/LogoTwo.svg').then((module) => module.default),
  },
  {
    id: '3',
    title: 'Julia Roberts',
    content: 'At American Web Craft, we have an experienced and highly dedicated network of website designers that generate user-friendly web designs tailored to customers requirements. Through responsive web designs, we help businesses...experience a bug-free website to ensure a maximum conversion rate throughout.',
    image: import('@/assets/images/Home/testimonial/LogoThree.svg').then((module) => module.default),
  },


])

const breakpoints = {
  700: {
    itemsToShow: 2,
    snapAlign: 'center',
  },
  1024: {
    itemsToShow: 3,
    snapAlign: 'center',
  },
}

onMounted(async () => {
  slides.value = await Promise.all(slides.value.map(async (slide) => ({
    ...slide,
    image: await slide.image
  })));
});

</script>
  
<style scoped>
.custom-pagination {
  text-align: center;
  margin-right: 50%;
  margin-top: 2rem;
}

.pagination-button {
  display: inline-block;
  margin: 0 5px;
  width: 10px;
  height: 10px;
  background-color: #aaa !important;
  border-radius: 50%;
  transition: background-color 0.3s;
}
.pagination-button.active {
  background-color: white !important;
}
.active-mask::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, rgba(72, 6, 6, 0.5) 0%, rgba(72, 6, 6, 0.5) 100%);
  border-radius: 0.75rem;
  transition: all 1s ease;
  z-index: -1;
}
.img-index{
  transform: translateY(-50%);
}
</style>