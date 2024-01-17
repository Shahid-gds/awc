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
  { name: 'HeroBg', class: 'HeroBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Hero.vue').then(m => m.default), { lazy: true }) },
  { name: 'ServicesBg', class: 'ServicesBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Services.vue').then(m => m.default), { lazy: true }) },
  { name: 'OurWorkBg', class: 'OurWorkBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/OurWork.vue').then(m => m.default), { lazy: true }) },
  { name: 'ProcessBg', class: 'ProcessBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Process.vue').then(m => m.default), { lazy: true }) },
  { name: 'TestimonialBg', class: 'TestimonialBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/Testimonial.vue').then(m => m.default), { lazy: true }) },
  { name: 'WhoWeAreBg', class: 'WhoWeAreBg', component: defineAsyncComponent(() => import('@/components/layout/TheHome/WhoWeAre.vue').then(m => m.default), { lazy: true }) },
  { name: 'Contact', class: 'Contact', component: defineAsyncComponent(() => import('@/components/layout/TheHome/ContactUs.vue').then(m => m.default), { lazy: true }) },
];
setTimeout(() => {
  isLoading.value = false;
}, 500);
</script>


<style scoped>
.HeroBg{
  background-image: url('@/assets/images/Home/bgs/1stBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.ServicesBg{
  background-image: url('@/assets/images/Home/bgs/2ndBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.OurWorkBg{
  background-image: url('@/assets/images/Home/bgs/3rdBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.ProcessBg{
  background-image: url('@/assets/images/Home/bgs/4thBg.png');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.TestimonialBg{
    background-image: url('@/assets/images/Home/bgs/5thBg.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  .WhoWeAreBg{
    background-image: url('@/assets/images/Home/bgs/6thBg.png');
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
      background-image: url('@/assets/images/Home/bgs/1stBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Services{
      background-image: url('@/assets/images/Home/bgs/2ndBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .OurWork{
      background-image: url('@/assets/images/Home/bgs/3rdBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Process{
      background-image: url('@/assets/images/Home/bgs/4thBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
    }
    .Testimonial{
      background-image: url('@/assets/images/Home/bgs/5thBg.png');
        background-size: cover;
        background-position: center;
        background-repeat: no-repeat;
      }
      .WhoWeAre{
        background-image: url('@/assets/images/Home/bgs/6thBg.png');
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
