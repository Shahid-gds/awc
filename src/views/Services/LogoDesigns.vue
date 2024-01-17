<template>
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
   </template>
   
   <script setup>
   import { ref, defineAsyncComponent } from 'vue';
   const isLoading = ref(true);
   
   const sections = [
     { name: 'Hero', class: 'Hero', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/Hero.vue').then(m => m.default), { lazy: true }) },
     { name: 'Basic', class: 'Basic', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/BasicLogo.vue').then(m => m.default), { lazy: true }) },
     { name: 'Minimal', class: 'Minimal', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/MinimalLogo.vue').then(m => m.default), { lazy: true }) },
     { name: 'Mascot', class: 'Mascot', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/MascotLogo.vue').then(m => m.default), { lazy: true }) },
     { name: 'Carousel', class: 'Carousel', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/carousel.vue').then(m => m.default), { lazy: true }) },
     { name: 'Process', class: 'Process', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/Process.vue').then(m => m.default), { lazy: true }) },
     { name: 'Packages', class: 'Packages', component: defineAsyncComponent(() => import('@/components/layout/ServicesSubMenu/LogoDesign/PackagesCard.vue').then(m => m.default), { lazy: true }) },
     { name: 'Testimonial', class: 'Testimonial', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Testimonial.vue').then(m => m.default), { lazy: true }) },
     { name: 'Contact', class: 'Contact', component: defineAsyncComponent(() => import('@/components/layout/TheHome/ContactUs.vue').then(m => m.default), { lazy: true }) },
   ];
   setTimeout(() => {
     isLoading.value = false;
   }, 500);
   </script>
   
   
   <style scoped>
   .Hero{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/1stBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Basic{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/2ndBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Minimal{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/3rdBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Mascot{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/4thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Carousel{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/5thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Process{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/6thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Packages{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/7thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Testimonial{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/8thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Contact{
     background-image: url('@/assets/images/Services/LogoDesigns/bgs/9thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   @media(max-width:768px){
    .Hero{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/1stBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Basic{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/2ndBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Minimal{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/3rdBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Mascot{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/4thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Carousel{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/5thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Process{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/6thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Packages{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/7thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Testimonial{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/8thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Contact{
      background-image: url('@/assets/images/Services/LogoDesigns/bgs/9thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
   }
    
     .bg{
         overflow-x: hidden;
     }
   </style>
   