<template>
   <section>
    <div>
      <div v-if="isLoading" class="absolute inset-0 flex items-center justify-center bg-[#2d2e30] opacity-80 z-50">
        <div class="animate-spin rounded-full h-16 w-16 border-t-2 border-b-2 border-blue-500"></div>
    </div>
      <section class="bg bg-gradient-to-r from-[#232424] bg-[#2d2e30]">
        <div v-for="section in sections" :key="section.name" :class="section.class">
          <div class="section">
            <component :is="section.component" />
          </div>
        </div>
      </section>
     </div>
   </section>
   </template>
   
   <script setup>
   import { ref, defineAsyncComponent } from 'vue';
   const isLoading = ref(true);
   
   const sections = [
     { name: 'Hero', class: 'Hero', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/WebDesign/Hero.vue')) },
     { name: 'Personal', class: 'Personal', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/WebDesign/PersonalWebsite.vue')) },
     { name: 'Portfolio', class: 'Portfolio', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/WebDesign/PortfolioWebsite.vue')) },
     { name: 'Ecommerce', class: 'Ecommerce', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/WebDesign/EcommerceWebsite.vue')) },
     { name: 'Blog', class: 'Blog', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/WebDesign/BlogWebsite.vue')) },
     { name: 'Carousel', class: 'Carousel', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/carousel.vue')) },
     { name: 'Process', class: 'Process', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/Process.vue')) },
     { name: 'Packages', class: 'Packages', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/WebDesign/PackagesCard.vue')) },
     { name: 'Testimonial', class: 'Testimonial', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Testimonial.vue')) },
     { name: 'Contact', class: 'Contact', component: defineAsyncComponent(() => import('@/components/layout/TheHome/ContactUs.vue')) },
   ];
   setTimeout(() => {
     isLoading.value = false;
   }, 500);
   </script>
   
   
   <style scoped>
   .Hero{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/1stBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Personal{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/2ndBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Portfolio{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/3rdBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Ecommerce{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/4thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Blog{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/5thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Carousel{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/6thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Process{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/7thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Packages{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/8thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Testimonial{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/9thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Contact{
     background-image: url('../../assets/images/Services/WebDesigns/bgs/10thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   @media(max-width:768px){
    .Hero{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/1stBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Personal{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/2ndBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Portfolio{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/3rdBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Ecommerce{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/4thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Blog{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/5thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Carousel{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/6thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Process{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/7thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Packages{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/8thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Testimonial{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/9thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Contact{
      background-image: url('../../assets/images/Services/WebDesigns/bgs/10thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
   }
     .bg{
         overflow-x: hidden;
     }
   </style>
   