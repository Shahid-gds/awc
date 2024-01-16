<template>
  <section class="sm:py-[5rem] py-[4rem]">
    <div class="sm:flex justify-center sm:space-x-8 px-8 text-center">
     <div class="pb-2">
      <div
      @click="setActiveCategory('Logo Design')"
      :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Logo Design' }"
      class="w-full hover-btn hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer"
    >
      Logo Design
    </div>
     </div>
    <div class="pb-2">
      <div
      @click="setActiveCategory('Web Design')"
      :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Web Design' }"
      class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer"
    >
      Web Design
    </div>
    </div>
    <div class="pb-2">
      <div
      @click="setActiveCategory('App Design')"
      :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'App Design' }"
      class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer"
    >
      App Design
    </div>
    </div>
    <div>
      <div
      @click="setActiveCategory('Branding')"
      :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Branding' }"
      class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer"
    >
    Corporate Branding
    </div>
    </div>
  
    </div>
      <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center sm:mt-[3rem] mt-[1.5rem]">
        <div
        v-for="card in filteredCards"
        :key="card.image"
        class="card xl:w-[365px] xl:h-[365px] w-[325px] h-[325px] p-2 m-2">
        <img class="xl:w-[365px] xl:h-[350px] w-[325px] h-[310px]" :src="card.image" :alt="card.image">
      </div>
      <div
        v-for="card in filteredwebCards"
        :key="card.image"
        class="web-card xl:w-[365px] xl:h-[365px] w-[325px] h-[325px] p-2 m-2">
        <div class="card-inner xl:w-[350px] xl:h-[350px] w-[325] h-[310px]">
          <img class="xl:w-[350px] xl:h-[350px] w-[325px] h-[310px]" :src="card.image" :alt="card.image">
        </div>
      </div>
      </transition-group>
  </section>
</template>

<script setup>
import { ref, onMounted, computed } from 'vue';

const cards = ref([
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo1.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo2.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo3.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo4.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo5.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo6.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo7.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo8.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo9.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo10.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo11.svg').then((module) => module.default) },
  { category: 'Logo Design', image: import('../../../assets/images/Portfolio/LogoDesign/logo12.svg').then((module) => module.default) },
 
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app1.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app2.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app3.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app4.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app5.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app6.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app7.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app8.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app9.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app10.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app11.png').then((module) => module.default) },
  { category: 'App Design', image: import('../../../assets/images/Portfolio/AppDesign/app12.png').then((module) => module.default) },


  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor1.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor2.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor3.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor4.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor5.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor6.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor7.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor8.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor9.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor10.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor11.png').then((module) => module.default) },
  { category: 'Branding', image: import('../../../assets/images/Portfolio/Branding/cor12.png').then((module) => module.default) },
]);
const webcards = ref([
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll1.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll2.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll3.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll4.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll5.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll6.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll7.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll8.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll9.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll10.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll11.svg').then((module) => module.default) },
  { category: 'Web Design', image: import('../../../assets/images/Portfolio/WebDesign/scroll12.svg').then((module) => module.default) },
]);

const activeCategory = ref('Logo Design');

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const filteredCards = computed(() => cards.value.filter((card) => card.category === activeCategory.value));
const filteredwebCards = computed(() => webcards.value.filter((card) => card.category === activeCategory.value));

onMounted(async () => {
  cards.value = await Promise.all(
    cards.value.map(async (card) => ({
      ...card,
      image: await card.image,
    }))
  );
  webcards.value = await Promise.all(
    webcards.value.map(async (card) => ({
      ...card,
      image: await card.image,
    }))
  );
});
</script>

<style scoped>
.card {
  background-image: url('@/assets/images/Portfolio/cardImg.svg');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.web-card {
  background-image: url('@/assets/images/Portfolio/cardImg.svg');
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}
.card-inner {
  display: block;
  overflow: hidden;
  position: relative;
  border-radius: 10px;
  margin: 0 auto;
  z-index: 1;
}

.nested-enter-active, .nested-leave-active {
	transition: all 0.3s ease-in-out;
}

.nested-leave-active {
  transition-delay: 0.25s;
}

.nested-enter-from,
.nested-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
.web-card img{
  bottom: -401%;
  border-radius: 15px;
  height: auto;
  position: absolute;
  margin: 0;
  padding: 0;
  -webkit-transition: top 4s;
  -moz-transition: top 4s;
  -ms-transition: top 4s;
  -o-transition: top 4s;
  transition: bottom 4s;
}

.web-card:hover img {
  bottom: 0;
  -webkit-transition: all 4s;
  -moz-transition: all 4s;
  -ms-transition: all 4s;
  -o-transition: all 4s;
  transition: all 4s;
}
.web-card:nth-child(2) img {
  bottom: -203%;
}

.web-card:nth-child(2):hover img {
  bottom: 0;
}
.web-card:nth-child(3) img {
  bottom: -165%;
}

.web-card:nth-child(3):hover img {
  bottom: 0;
}
.web-card:nth-child(4) img {
  bottom: -279%;
}

.web-card:nth-child(4):hover img {
  bottom: 0;
}
.web-card:nth-child(5) img {
  bottom: -224%;
}

.web-card:nth-child(5):hover img {
  bottom: 0;
}
.web-card:nth-child(6) img {
  bottom: -234%;
}

.web-card:nth-child(6):hover img {
  bottom: 0;
}
.web-card:nth-child(7) img {
  bottom: -302%;
}
.web-card:nth-child(7):hover img {
  bottom: 0;
}
.web-card:nth-child(8) img {
  bottom: -153%;
}
.web-card:nth-child(8):hover img {
  bottom: 0;
}
.web-card:nth-child(9) img {
  bottom: -295%;
}
.web-card:nth-child(9):hover img {
  bottom: 0;
}
.web-card:nth-child(10) img {
  bottom: -276%;
}
.web-card:nth-child(10):hover img {
  bottom: 0;
}
.web-card:nth-child(11) img {
  bottom: -304%;
}
.web-card:nth-child(11):hover img {
  bottom: 0;
}
.web-card:nth-child(12) img {
  bottom: -241%;
}
.web-card:nth-child(12):hover img {
  bottom: 0;
}
</style>
