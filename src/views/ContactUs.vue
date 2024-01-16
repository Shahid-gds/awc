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
     { name: 'HeroBg', class: 'HeroBg', component: defineAsyncComponent(() => import('@/components/layout/TheContactUs/Hero.vue')) },
     { name: 'Card', class: 'Card', component: defineAsyncComponent(() => import('@/components/layout/TheContactUs/Info.vue')) },
     { name: 'ContactBg', class: 'ContactBg', component: defineAsyncComponent(() => import('@/components/layout/TheContactUs/ContactForm.vue')) },
     { name: 'Process', class: 'Process', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Process.vue')) },
     { name: 'TestimonialBg', class: 'TestimonialBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Testimonial.vue')) },
   ];
   setTimeout(() => {
     isLoading.value = false;
   }, 500);
   </script>
   
   
   <style scoped>

   .HeroBg{
     background-image: url('../assets/images/ContactUs/bgs/1stBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Card{
     background-image: url('../assets/images/ContactUs/bgs/2ndBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .ContactBg{
     background-image: url('../assets/images/ContactUs/bgs/3rdBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .Process{
     background-image: url('../assets/images/ContactUs/bgs/4thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .TestimonialBg{
     background-image: url('../assets/images/ContactUs/bgs/5thBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   @media(max-width:768px){
   
    .HeroBg{
        background-image: url('../assets/images/ContactUs/bgs/1stBg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .Card{
        background-image: url('../assets/images/ContactUs/bgs/2ndBg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .ContactBg{
        background-image: url('../assets/images/ContactUs/bgs/3rdBg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .Process{
        background-image: url('../assets/images/ContactUs/bgs/4thBg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .TestimonialBg{
        background-image: url('../assets/images/ContactUs/bgs/5thBg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
    }
 .bg{
         overflow-x: hidden;
     }
   </style>
   