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
     { name: 'HeroBg', class: 'HeroBg', component: defineAsyncComponent(() => import('@/components/layout/TheRefund/Hero.vue').then(m => m.default), { lazy: true }) },
     { name: 'GeneralBg', class: 'GeneralBg', component: defineAsyncComponent(() => import('@/components/layout/TheRefund/Conditions.vue').then(m => m.default), { lazy: true }) },
     { name: 'Contact', class: 'Contact', component: defineAsyncComponent(() => import('@/components/layout/TheHome/ContactUs.vue').then(m => m.default), { lazy: true }) },
   ];
   setTimeout(() => {
     isLoading.value = false;
   }, 500);
   </script>
   
   
   <style scoped>
   .HeroBg{
     background-image: url('@/assets/images/Terms/1stBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
   .GeneralBg{
     background-image: url('@/assets/images/Terms/2ndBg.png');
     background-size: 100% 100%;
     background-position: center;
     background-repeat: no-repeat;
   }
     .Contact{
         background-image: url('@/assets/images/Home/bgs/7thBg.png');
         background-size: 100% 100%;
         background-position: center;
         background-repeat: no-repeat;
     }
     .bg{
         overflow-x: hidden;
     }
     @media(max-width:768px){
       .HeroBg{
         background-image: url('@/assets/images/Terms/1stBg.png');
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
       }
       .GeneralBg{
         background-image: url('@/assets/images/Terms/2ndBg.png');
         background-size: cover;
         background-position: center;
         background-repeat: no-repeat;
       }
         .Contact{
             background-image: url('@/assets/images/Home/bgs/7thBg.png');
             background-size: cover;
             background-position: center;
             background-repeat: no-repeat;
         }
      }
   </style>
   