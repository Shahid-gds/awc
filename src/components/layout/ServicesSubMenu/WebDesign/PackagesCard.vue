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
                  <h2 class="others-text text-white md:text-[40px] text-[20px] font-[outline] uppercase animated-element-right-second">
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
          <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center">
            <div v-for="card in filteredfirtcards" :key="index"
              class="card relative w-[370px] h-[560px] p-3 m-6 text-center" :data-category="card.category">
              <div class="text-white text-[22px] text-center mt-[2rem]">
                <div class="font-[outline] uppercase">
                  <div class="">
                    {{ card.woo }}
                  </div>
                  <div class="">
                    {{ card.commerce }}
                  </div>
                  <div class="hidden">
                    {{ card.category }}
                  </div>
                </div>
                <div class="flex justify-center mt-[2rem] font-bold">
                  <div class="text-[25px]">{{ card.dollar }}</div>
                  <div class="text-[35px]">{{ card.price2 }}</div>
                </div>
              </div>
              <div class="mt-[2rem] text-[#9c9293] text-[17px]">
                <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                  <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
              <div class="flex justify-center">
                <div @click="openModal(card.woo, card.commerce, card.category)"
                  class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                  order now
                </div>
              </div>
            </div>
            <div v-for="card in filteredmiddlecards" :key="index"
              class="middle-card relative w-[370px] h-[560px] p-3 m-6 text-center" :data-category="card.category">
              <div class="text-white text-[22px] text-center mt-[2rem]">
                <div class="font-[outline] uppercase">
                  <div class="">
                    {{ card.shopify }}
                  </div>
                  <div class="">
                    {{ card.website }}
                  </div>
                  <div class="hidden">
                    {{ card.category }}
                  </div>
                </div>
                <div class="flex justify-center mt-[2rem] font-bold">
                  <div class="text-[25px]">{{ card.dollar }}</div>
                  <div class="text-[35px]">{{ card.price2 }}</div>
                </div>
              </div>
              <div class="mt-[2rem] text-[#9c9293] text-[17px]">
                <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                  <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
              <div class="flex justify-center">
                <div @click="openModal(card.shopify, card.website, card.category)"
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
                    {{ card.custom }}
                  </div>
                  <div class="">
                    {{ card.php }}
                  </div>
                  <div class="hidden">
                    {{ card.category }}
                  </div>
                </div>
                <div class="flex justify-center mt-[2rem] font-bold">
                  <div class="text-[25px]">{{ card.dollar }}</div>
                  <div class="text-[35px]">{{ card.price2 }}</div>
                </div>
              </div>
              <div class="mt-[2rem] text-[#9c9293] text-[17px]">
                <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                  <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
                </ul>
              </div>
              <div class="flex justify-center">
                <div @click="openModal(card.custom, card.php, card.category)"
                  class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                  order now
                </div>
              </div>
            </div>
          </transition-group>
          <!--*************************************** end ******************************************-->
        </div>
      </div>
      <PackageModal :isVisible="isModalVisible" :logoType="modalLogoType" :logoHeading="modalLogoHeading" :logoCategory="modalCategory" @close="closeModal" />
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
      category: 'Web Design',
      heading: 'landing',
      heading2: 'page',
      dollar: '$',
      price: '149',
      price2: '699',
      woo: 'woo',
      commerce: 'commerce',
      items: [
        '1 Pager Dynamic Website',
        'Custom Design',
        'WP CMS Integration',
        'Mobile Responsive',
        'UI/UX Design',
        'Advance UI Effects',
        '4 Stock Images',
        '2 Banner Designs',
        'SEO Friendly'
      ],
      items2: [
        'Up to 20 Pages Website',
        'WP E-Commerce Portal',
        'Mobile Responsive',
        'UI/UX Design',
        'Up to 50 Products.',
        'User-Friendly Admin-Panel',
        'Customer Login Area',
        'Testimonials Integration',
        'Online Payment Integration',
        'Shopping Cart Integration',
        '20 Stock Images',
        '20 Web Banner Designs',
        'UI/UX Design',
        'Advance UI Effects',
      ],
    },
  ]);
  const middlecards = ref([
    {
      category: 'Web Design',
      heading: 'wordpress',
      heading2: 'full website',
      dollar: '$',
      price: '399',
      price2: '599',
      shopify: 'shopify',
      website: 'full website',
      items: [
        '10 Pages Dynamic Website',
        'Custom Design',
        'WP CMS Integration',
        'UI/UX Design',
        'Advance UI Effects',
        'Core Web Development',
        '10 Stock Images',
        '5 Banner Designs',
        'SEO Friendly'
      ],
      items2: [
        'Up to 20 Pages Website.',
        'Theme Customization',
        'Mobile Responsive',
        'Up to 50 Products.',
        'Online Payment Integration',
        'Shop Cart Setting',
        'Core Web Development',
        '10 Banner Designs',
        '20 Stock Imagess',
        'Unlimited Revisions',
      ],
    },
  ]);
  const lastcards = ref([
 
   
    {
      category: 'Web Design',
      heading: 'custom php',
      heading2: 'full website',
      dollar: '$',
      price: '1199',
      price2: '2199',
      custom: 'custom',
      php: 'ecommerce',
      items: [
        '10 Pages Website',
        'Custom Design',
        'Front-End Based on HTML, CSS & Bootstrap',
        'Back-End Based on PHP',
        'Mobile Responsive',
        'UI/UX Design',
        'Advance UI Effects',
        'SEO Friendly',
        '10 Stock Images',
        '5 Banner Designs',
      ],
      items2: [
        'Up to 15 Pages Website',
        'User Friendly Admin-Panel',
        'Mobile Responsive',
        'Up to 75 Products.',
        'User-Friendly Admin-Panel',
        'Customer Login Area',
        'Testimonials Integration',
        'Testimonials Integration',
        'Online Payment Integration',
        'Shopping Cart Integration',
        '20 Stock Images',
        '20 Web Banner Designs',
        'UI/UX Design',
        'Advance UI Effects',
        'Core Web Development',
      ],
    },
  ]);
  
  const activeCategory = ref('Web Design');
  
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
  
 
  
  .card[data-category="Web Design"]
  {
    background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/first-card.svg');
  }
  
 
  .middle-card[data-category="Web Design"]{
    background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/middle-card.svg');
  }
  
  .card[data-category="App Development"] {
    background-image: url('@/assets/images/Packages/appCard.png');
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
  