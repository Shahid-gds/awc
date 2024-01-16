<template>
  <div class="flex flex-col w-full mt-10">
    <div class="flex sm:justify-end justify-center w-full">
      <Carousel class="2xl:w-[75%] w-[90%] bg-transparent" :autoplay="autoplayEnabled ? 2500 : 0" :wrap-around="true"
        :breakpoints="breakpoints" v-model="activeSlideIndex">
        <Slide class="relative w-full" v-for="slide in slides" :key="slide" @mouseenter="handleMouseEnter(slide)" @mouseleave="handleMouseLeave">
          <div class="carousel__item relative text-white">
            <img class="w-[100%]" :src="slide.image" :alt="slide.image" />
            <div class="title-hover absolute px-6 text-left bottom-8 z-20 uppercase 2xl:leading-8 font-bold md:leading-5 leading-8" :style="{ opacity: isHovered(slide) ? 0 : 1, height: isHovered(slide) ? '0' : 'auto' }">
              <div class="2xl:text-[28px] md:text-[20px] text-[36px]">{{ slide.title }}</div>
              <div class="2xl:text-[28px] md:text-[20px] text-[36px]">{{ slide.secondtitle }}</div>
            </div>
            <div class="active-slide-mask" :style="{ top: isHovered(slide) ? `${slide.activeMaskTop}%` : '100%' }">
              <div class="absolute px-6 text-left bottom-8 z-20">
                <div class="content-container">
                  <div class="uppercase 2xl:leading-8 font-bold md:leading-5 leading-8">
                    <div class="2xl:text-[28px] md:text-[20px] text-[36px]">{{ slide.title }}</div>
                    <div class="2xl:text-[28px] md:text-[20px] text-[36px]">{{ slide.secondtitle }}</div>
                  </div>
                  <div class="2xl:leading-6 md:leading-4 mt-2">
                    {{ slide.content }}
                  </div>
                  <div class="pt-6 flex items-center space-x-2">
                    <div class="z-10 w-[2rem] cursor-pointer">
                      <img :src="slide.icon" :alt="slide.icon">
                    </div>
                    <div class="leading-4 font-bold uppercase z-10 cursor-pointer" @click="redirectToDetailPage(slide)">
                      <div>
                        {{ slide.detailBtnContinue }}
                      </div>
                      <div>
                        {{ slide.detailBtnMore }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
         
          </div>
        </Slide>

        <template #addons>
          <div class="flex space-x-6 sm:mr-24 md:justify-start justify-center md:mt-10 mt-6">
            <div
              class="bg-[#343434] hover:bg-[#9d0208] rounded-full py-1 text-white w-8 h-8">
              <button @click="navigate('prev')" class="arrow-left">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
              </button>
            </div>
            <div class="">
              <button v-for="(slide, index) in slides" :key="slide.id" :aria-label="'Go to slide ' + (index + 1)"
                :class="{ active: activeSlideIndex === index }" @click="activeSlideIndex = index"
                class="pagination-button"></button>
            </div>
            <div
              class="bg-[#343434] hover:hover:bg-[#9d0208] rounded-full py-1 text-white w-8 h-8">
              <button @click="navigate('next')" class="arrow-right">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5"
                  stroke="currentColor" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
        </template>
      </Carousel>
    </div>
    <div class="md:flex justify-end w-full md:-mt-10 mt-10">
      <div class="2xl:w-full w-1/2"></div>
      <div class="md:flex 2xl:w-[60%] w-full items-center space-x-3">
        <div class="md:w-full px-6 text-[#a9a9a9] md:text-right text-center">
          <p>Website development to corporate branding
            we offer you a one window solution.</p>
        </div>
        <div class="md:w-full h-1 mt-3 bg-[#9d0208] animated-element-right-second"></div>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import 'vue3-carousel/dist/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'
import { useRouter } from 'vue-router';
const router = useRouter();
const hoverState = ref(null);


const autoplayEnabled = ref(true);

const handleMouseEnter = (slide) => {
  hoverState.value = slide;
  autoplayEnabled.value = false;
  slide.activeMaskTop = 0;
};

const handleMouseLeave = (slide) => {
    hoverState.value = null;
    autoplayEnabled.value = true;
    if (!isHovered(slide)) {
      slide.activeMaskTop = 100;
    }
  };

const isHovered = (slide) => {
  return hoverState.value === slide;
};
const activeSlideIndex = ref(0);
const isActive = (slide) => {
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
const redirectToDetailPage = (slide) => {
  switch (slide.id) {
    case '1':
      router.push('/logo-designs');
      break;
    case '2':
      router.push('/web-designs');
      break;
    case '3':
      router.push('/corporate-branding');
      break;
    case '4':
      router.push('/seo');
      break;
    case '5':
      router.push('/social-media-marketing');
      break;
    case '6':
      router.push('/corporate-branding');
      break;
    case '7':
      router.push('/content-writing');
      break;
    case '8':
      router.push('/app-development');
      break;
    default:
      break;
  }
};
const slides = ref([
  {
    id: '1',
    title: 'Logo',
    secondtitle: 'Designs',
    content: 'At American Web Craft, we have an experienced and highly dedicated network of website designers that generate user-friendly web designs tailored to customers requirements.',
    image: import('@/assets/images/Home/servicesImg/carouselimg/LogoDesign.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '2',
    title: 'Web',
    secondtitle: 'Designs',
    content: 'At American Web Craft, we have an experienced and highly dedicated network of website designers that generate user-friendly web designs tailored to customers requirements.',
    image: import('@/assets/images/Home/servicesImg/carouselimg/AppDevelopment.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '3',
    title: 'Corporate Branding',
    content: 'At American Web Craft, we design business cards, brand stationery, and branded paper cups to save you from the hassle of multiple vendors - saving time, money, and effort. Re-Brand with us!',
    image: import('@/assets/images/Home/servicesImg/carouselimg/CorporateBranding.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '4',
    title: 'SEO',
    content: 'We offer Search Engine Optimization for brands who want to make their brand visible on the first page of a search engine so that your brand can close more deals and get the customer that is really looking for your products or services. Our SEO services',
    image: import('@/assets/images/Home/servicesImg/carouselimg/LogoDesign.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '5',
    title: 'Social Media Marketing',
    content: 'Businesses of all sizes can use social media marketing to reach out to prospects and consumers.',
    image: import('@/assets/images/Home/servicesImg/carouselimg/AppDevelopment.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '6',
    title: 'Lead Generation',
    content: 'We are pioneers in multichannel lead generation campaigns to provide your business with potential leads - growing your business reach and overall market share.',
    image: import('@/assets/images/Home/servicesImg/carouselimg/LogoDesign.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '7',
    title: 'Content Writing',
    content: 'Feed your online presence with high-quality content. At American Web Craft, we provide 360 content writing solutions, our content writing services are open for marketers, brands, and digital marketing agencies.',
    image: import('@/assets/images/Home/servicesImg/carouselimg/CorporateBranding.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
  },
  {
    id: '8',
    title: 'App Development',
    content: 'We guarantee excellent service since we have the greatest mobile app development team in the industry. Thanks to our group of app development specialists.',
    image: import('@/assets/images/Home/servicesImg/carouselimg/AppDevelopment.svg').then((module) => module.default),
    detailBtnContinue: 'continue ...',
    detailBtnMore: 'more Details',
    icon: import('../../icons/plus.png').then((module) => module.default),
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
  1300: {
    itemsToShow: 5,
    snapAlign: 'center',
  },
  1600: {
    itemsToShow: 5,
    snapAlign: 'center',
  },
}

onMounted(async () => {
  slides.value = await Promise.all(slides.value.map(async (slide) => ({
    ...slide,
    image: await slide.image
  })));
  slides.value = await Promise.all(slides.value.map(async (slide) => ({
    ...slide,
    icon: await slide.icon
  })));
});

</script>
<style scoped>
.carousel__item {
  align-items: center;
}
.carousel__slide {
  margin: 0 !important;
  padding: 0 !important;
}


.active-slide-mask {
  content: '';
  position: absolute;
  top: 100%;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(255, 0, 0, 0.5);
  z-index: 1;
  transition: top 0.7s;
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
.custom-pagination {
  text-align: center;
  margin-right: 50%;
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
  background-color: #fff !important;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.5s;
}

.fade-enter,
.fade-leave-to {
  opacity: 0;
}
</style>