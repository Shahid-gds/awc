<template>
  <section class="bg py-[5rem]" id="packages">
    <div class="sm:flex">
      <div class="w-full">
        <div class="">
          <div class="text-center">
            <h1
              class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
              Packages
            </h1>
          </div>
          <div class="text-center md:-mt-[5rem] -mt-[2rem] md:leading-10 px-6">
            <h2
              class="others-text text-white md:text-[40px] text-[20px] font-[outline] uppercase animated-element-right-second">
              EXPLORE OUR PACKAGES
            </h2>
            <p class="md:text-[28px] text-[16px] font-bold uppercase text-white animated-element-right-second">Get Your Project Started Today.</p>
          </div>
        </div>
        <div class="flex justify-end">
          <div class=" bg-[#9d0208] w-[50%] sm:mt-4 mt-2 h-1 animated-element-right-second"></div>
        </div>
      </div>
    </div>
    <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-1.5 pb-6">
      <p class="2xl:w-[45%] lg:w-[50%] md:w-[60%] px-6">
        Not everyone has the same needs, so we created flexible features for every budget. American Web Craft delivers great results and unmatched value.
      </p>
    </div>
    <div class="flex justify-center">
      <div class="container mx-auto">
        <!--======================================= Start Packages Cards =================================-->
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
          <div v-for="card in filteredfirtcards" :key="index"
            class="card relative w-[370px] h-[560px] p-3 m-6 text-center" :data-category="card.category">
            <div class="text-white text-[22px] text-center mt-[2rem]">
              <div class="font-[outline] uppercase">
                <div class="">
                  {{ card.heading }}
                </div>
                <div class="">
                  {{ card.heading2 }}
                </div>
                <div class="hidden">
                  {{ card.category }}
                </div>
              </div>
              <div class="flex justify-center mt-[2rem] font-bold">
                <div class="text-[25px]">{{ card.dollar }}</div>
                <div class="text-[35px]">{{ card.price }}</div>
              </div>
            </div>
            <div class="mt-[2rem] text-[#9c9293] text-[17px]">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="flex justify-center">
              <div @click="openModal(card.heading, card.heading2, card.category)"
                class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                order now
              </div>
            </div>
          </div>
          <div v-for="card in filteredmiddlecards" :key="index"
            class="middle-card relative w-[370px] h-[560px] p-3  m-6 text-center" :data-category="card.category">
            <div class="text-white text-[22px] text-center mt-[2rem]">
              <div class="font-[outline] uppercase">
                <div class="">
                  {{ card.heading }}
                </div>
                <div class="">
                  {{ card.heading2 }}
                </div>
                <div class="hidden">
                  {{ card.category }}
                </div>
              </div>
              <div class="flex justify-center mt-[2rem] font-bold">
                <div class="text-[25px]">{{ card.dollar }}</div>
                <div class="text-[35px]">{{ card.price }}</div>
              </div>
            </div>
            <div class="mt-[2rem] text-[#9c9293] text-[17px]">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="flex justify-center">
              <div @click="openModal(card.heading, card.heading2, card.category)"
                class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                order now
              </div>
            </div>
          </div>
          <div v-for="card in filteredlastcards" :key="index"
            class="card relative w-[370px] h-[560px] p-3 m-6 text-center" :data-category="card.category">
            <div class="text-white text-[22px] text-center mt-[2rem]">
              <div class="font-[outline] uppercase">
                <div class="">
                  {{ card.heading }}
                </div>
                <div class="">
                  {{ card.heading2 }}
                </div>
                <div class="hidden">
                  {{ card.category }}
                </div>
              </div>
              <div class="flex justify-center mt-[2rem] font-bold">
                <div class="text-[25px]">{{ card.dollar }}</div>
                <div class="text-[35px]">{{ card.price }}</div>
              </div>
            </div>
            <div class="mt-[2rem] text-[#9c9293] text-[17px]">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="flex justify-center">
              <div @click="openModal(card.heading, card.heading2, card.category)"
                class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                order now
              </div>
            </div>
          </div>
        </transition-group>

        <!--*************************************** end ******************************************-->
      </div>
    </div>
    <PackageModal :isVisible="isModalVisible" :logoType="modalLogoType" :logoHeading="modalLogoHeading" :logoCategory="modalCategory"
      @close="closeModal" />
  </section>
</template>
<script setup>
import { ref, onMounted, computed } from 'vue';
import PackageModal from '../../UI/PackagesModal.vue';
const isModalVisible = ref(false);
const modalLogoType = ref('');
const modalLogoHeading = ref('');
const modalCategory = ref('');
const emit = defineEmits();

const openModal = (logoType, logoHeading, logoCategory) => {
  modalLogoType.value = logoType;
  modalLogoHeading.value = logoHeading;
  modalCategory.value = logoCategory;
  isModalVisible.value = true;
  emit('openModal', logoType, logoHeading, logoCategory);
};
const closeModal = () => {
  isModalVisible.value = false;
};

const firtcards = ref([
  {
    category: 'SEO',
    heading: 'SILVER',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '299',
    items: [
      'Website Audit',
      '15-20 Keywords Research',
      'Web Content Optimization (05 Pages)',
      'Title Tag (10 Titles)',
      'Meta Tags Creation',
      'Google Analytics Installation',
      'Site Speed Optimization',
      'XML Sitemap Optimizationn',
      'Envelope',
      'Dedicated Project Manager',
      'Monthly Progress Report'
    ],
  },
]);
const middlecards = ref([
  {
    category: 'SEO',
    heading: 'GOLD',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '499',
    items: [
      'Website Audit',
      '25-30 Keywords Research',
      'Web Content Optimization (10 Pages)',
      'Title Tag (10 Titles)',
      'Meta Tags Creation',
      'Google Analytics Installation',
      'Site Speed Optimization',
      'Image Optimization',
      'Directory Submission',
      'XML Sitemap Optimization',
      'Dedicated Project Manager',
      'Monthly Progress Report'
    ],
  },
]);
const lastcards = ref([
  {
    category: 'SEO',
    heading: 'PLATINUM',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '799',
    items: [
      'Website Audit',
      '40-45 Keywords Research',
      'Web Content Optimization (15 Pages)',
      'Title Tag (15 Titles)',
      'Meta Tags Creation',
      'Google Analytics Installation',
      'Site Speed Optimization',
      'Image Optimization',
      'XML Sitemap Optimization',
      'Dedicated Project Manager',
      'Directory Submission',
      'Local Business Listings',
      'Link Building',
      'Monthly Progress Report'
    ],
  },
]);

const activeCategory = ref('SEO');

const setActiveCategory = (category) => {
  activeCategory.value = category;
};

const filteredfirtcards = computed(() => firtcards.value.filter((card) => card.category === activeCategory.value));
const filteredmiddlecards = computed(() => middlecards.value.filter((card) => card.category === activeCategory.value));
const filteredlastcards = computed(() => lastcards.value.filter((card) => card.category === activeCategory.value));

</script>
  
<style scoped>
.card,
.middle-card {
  background-size: 100% 100%;
  background-position: center;
  background-repeat: no-repeat;
}



.card[data-category="SEO"] {
  background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/first-card.svg');
}


.middle-card[data-category="SEO"] {
  background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/middle-card.svg');
}

::-webkit-scrollbar {
  width: 8px;
  background-color: #322424;
  border-radius: 10px;
}


::-webkit-scrollbar-thumb {
  background-color: #601417;
  border-radius: 5px;
}
</style>
  