<template>
  <section class="bg sm:py-[5rem] pb-[5rem]">
    <div class="flex justify-center">
      <div class="container mx-auto">
        <div class="sm:flex justify-center flex-wrap px-8 text-center">
          <div class="sm:flex sm:space-x-4">
            <div class="pb-2">
              <div @click="setActiveCategory('Logo Design')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Logo Design' }"
                class="w-full hover-btn hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                Logo Design
              </div>
            </div>
            <div class="pb-2">
              <div @click="setActiveCategory('Branding')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Branding' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                Corporate Branding
              </div>
            </div>
            <div class="pb-2">
              <div @click="setActiveCategory('Web Design')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Web Design' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                Web Design
              </div>
            </div>
            <div class="pb-2">
              <div @click="setActiveCategory('Marketing')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Marketing' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                Social Media Marketing
              </div>
            </div>
          </div>
          <div class="sm:flex sm:space-x-4">
            <div class="pb-2">
              <div @click="setActiveCategory('App Development')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'App Development' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                App Development
              </div>
            </div>
            <div class="pb-2">
              <div @click="setActiveCategory('Content Writing')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Content Writing' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                Content Writing
              </div>
            </div>
            <div class="pb-2">
              <div @click="setActiveCategory('Lead')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'Lead' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                Lead Generation
              </div>
            </div>
            <div class="">
              <div @click="setActiveCategory('seo')"
                :class="{ 'active bg-gradient-to-r from-[#9d0208] bg-[#601417] text-white font-[graphik-semibold]': activeCategory === 'seo' }"
                class="w-full hover-btn button hover:bg-gradient-to-r hover:from-[#9d0208] hover:bg-[#601417] hover:text-white hover:font-[graphik-semibold] border-2 border-[#5f5050] p-3 rounded-lg uppercase font-[graphik-semibold] text-[#9c9c9c] px-10 cursor-pointer">
                SEO
              </div>
            </div>
          </div>

        </div>
        <!--======================================= Start Packages Cards =================================-->
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center mt-[3rem]">
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
            <div class="mt-[2rem] text-[#9c9293] text-[17px]"
              v-if="activeCategory === 'Logo Design' || activeCategory === 'Branding' || activeCategory === 'Web Design' || activeCategory === 'Marketing' || activeCategory === 'Content Writing' || activeCategory === 'Lead' || activeCategory === 'seo'">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="mt-[6.5rem] text-[#9c9293] text-[35px]" v-if="activeCategory === 'App Development'">
              <ul class="font-bold">
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
            <div class="mt-[2rem] text-[#9c9293] text-[17px]"
              v-if="activeCategory === 'Logo Design' || activeCategory === 'Branding' || activeCategory === 'Web Design' || activeCategory === 'Marketing' || activeCategory === 'Content Writing' || activeCategory === 'Lead' || activeCategory === 'seo'">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="mt-[6.5rem] text-[#9c9293] text-[35px]" v-if="activeCategory === 'App Development'">
              <ul class="font-bold">
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
            <div class="mt-[2rem] text-[#9c9293] text-[17px]"
              v-if="activeCategory === 'Logo Design' || activeCategory === 'Branding' || activeCategory === 'Web Design' || activeCategory === 'Marketing' || activeCategory === 'Content Writing' || activeCategory === 'Lead' || activeCategory === 'seo'">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="mt-[6.5rem] text-[#9c9293] text-[35px]" v-if="activeCategory === 'App Development'">
              <ul class="font-bold">
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
        <transition-group name="nested" tag="div" class="container mx-auto flex flex-wrap justify-center lg:mt-[3rem]"
          v-if="activeCategory === 'Web Design' || activeCategory === 'App Development'">
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
              <div class="font-[outline] uppercase" v-if="activeCategory === 'App Development'">
                <div class="">
                  {{ card.heading3 }}
                </div>
                <div class="">
                  {{ card.heading4 }}
                </div>
              </div>
              <div class="flex justify-center mt-[2rem] font-bold">
                <div class="text-[25px]">{{ card.dollar }}</div>
                <div class="text-[35px]">{{ card.price2 }}</div>
              </div>
            </div>
            <div class="mt-[2rem] text-[#9c9293] text-[17px]"
              v-if="activeCategory === 'Logo Design' || activeCategory === 'Branding' || activeCategory === 'Web Design' || activeCategory === 'Marketing'">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="mt-[6.5rem] text-[#9c9293] text-[35px]" v-if="activeCategory === 'App Development'">
              <ul class="font-bold">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="flex justify-center">
              <div @click="openModal(card.woo || card.heading3, card.commerce || card.heading4, card.category)"
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
            <div class="mt-[2rem] text-[#9c9293] text-[17px]"
              v-if="activeCategory === 'Logo Design' || activeCategory === 'Branding' || activeCategory === 'Web Design' || activeCategory === 'Marketing'">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="mt-[6.5rem] text-[#9c9293] text-[35px]" v-if="activeCategory === 'App Development'">
              <ul class="font-bold">
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
              </div>
              <div class="font-[outline] uppercase" v-if="activeCategory === 'App Development'">
                <div class="">
                  {{ card.heading3 }}
                </div>
                <div class="">
                  {{ card.heading4 }}
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
            <div class="mt-[2rem] text-[#9c9293] text-[17px]"
              v-if="activeCategory === 'Logo Design' || activeCategory === 'Branding' || activeCategory === 'Web Design' || activeCategory === 'Marketing'">
              <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="mt-[6.5rem] text-[#9c9293] text-[35px]" v-if="activeCategory === 'App Development'">
              <ul class="font-bold">
                <li v-for="(item, itemIndex) in card.items" :key="itemIndex">{{ item }}</li>
              </ul>
            </div>
            <div class="flex justify-center">
              <div @click="openModal(card.custom || card.heading3, card.php || card.heading4, card.category)"
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
import PackageModal from '../UI/PackagesModal.vue';
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
    category: 'Logo Design',
    heading: 'Basic',
    heading2: 'Logo',
    dollar: '$',
    price: '70',
    items: [
      '2 Custom Logo Concepts',
      '4 Revisions',
      '100% Ownership Rights',
      '1 Designer',
      'File Formats: JPEG, PNG & PDF',
      '48 - 72 Hours Turn Around Time',
    ],
  },
  {
    category: 'Branding',
    heading: 'SILVER',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '60',
    items: [
      'Business Card',
      'Letterhead',
      'Envelope',
      '1 Designer',
      'All With Print Ready Files',
    ],
  },
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
  {
    category: 'Marketing',
    heading: 'SILVER',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '150',
    items: [
      'Page Management (2 Platforms)',
      'Cover & Page UI',
      'Caption and Content Writing',
      '6 Social Media Posts',
      'Audience Engagement',
      'Monthly Reporting',
    ],
  },
  {
    category: 'App Development',
    heading: 'BASIC ANDROID',
    heading2: 'APPLICATION',
    heading3: 'ECOMMERCE',
    heading4: 'ANDROID APP',
    items: [
      '($30-$35/hour)'
    ],
    items2: [
      '($40-$45/hour)'
    ],
  },
  {
    category: 'Content Writing',
    heading: 'WEBSITE',
    heading2: 'CONTENT',
    dollar: '$',
    price: '30',
    items: [
      'SEO Optimized Content',
      'Relevant to your Industry',
      'Plagiarism Free Content',
      'Unlimited Revisions',
      '24-48 Hours of TAT',
      'Proofing and Editing'
    ],
  },
  {
    category: 'Lead',
    heading: 'SILVER',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '450',
    items: [
      'SEO Optimized Content',
      'Relevant to your Industry',
      'Plagiarism Free Content',
      'Unlimited Revisions',
      '24-48 Hours of TAT',
      'Proofing and Editing'
    ],
  },
  {
    category: 'seo',
    heading: 'SILVER',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '299/Month',
    items: [
      'Website Audit',
      '15-20 Keywords Research',
      'Web Content Optimization (05 Pages)',
      'Title Tag (10 Titles)',
      'Meta Tags Creation',
      'Google Analytics Installation',
      'Site Speed Optimization',
      'Image Optimization',
      'XML Sitemap Optimization',
      'Dedicated Project Manager',
      'Monthly Progress Report'
    ],
  },
]);
const middlecards = ref([
  {
    category: 'Logo Design',
    heading: 'Premium',
    heading2: 'Logo',
    dollar: '$',
    price: '100',
    items: [
      '4 Custom Logo Concepts',
      '8 Revisions',
      '100% Ownership Rights',
      '2 Designer',
      'File Formats: JPEG, PNG & PDF, EPS, AI',
      '24-48 Hours Turn Around Time'
    ],
  },
  {
    category: 'Branding',
    heading: 'GOLD',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '120',
    items: [
      'Flyer Design',
      'Stamp Design',
      'Email Signature',
      'Operational Support',
      'Business Card',
      'Letterhead',
      'Envelope',
      'All With Print Ready Files'
    ],
  },
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
  {
    category: 'Marketing',
    heading: 'GOLD',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '300',
    items: [
      'Page Management (3 Platforms)',
      'Cover & Page UI',
      'Caption and Content Writing',
      '12 Social Media Posts',
      '1 Animation',
      'Ad Boosting (1-Time)',
      'Audience Engagement',
      'Monthly Reporting',
    ],
  },
  {
    category: 'App Development',
    heading: 'BASIC IOS',
    heading2: 'APPLICATION',
    shopify: 'ECOMMERCE IOS',
    website: 'APPLICATION',
    items: [
      '($30-$35/hour)'
    ],
    items2: [
      '($40-$45/hour)'
    ],
  },
  {
    category: 'Content Writing',
    heading: 'BLOG',
    heading2: 'WRITING',
    dollar: '$',
    price: '20',
    items: [
      'SEO Optimized Content',
      'Relevant to your Topic and Niche',
      'Plagiarism Free Content',
      'Unlimited Revisions',
      '24-48 Hours of TAT',
      'Proofing and Editing'
    ],
  },
  {
    category: 'Lead',
    heading: 'GOLD',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '1500',
    items: [
      'SEO Optimized Content',
      'Relevant to your Industry',
      'Plagiarism Free Content',
      'Unlimited Revisions',
      '24-48 Hours of TAT',
      'Proofing and Editing'
    ],
  },
  {
    category: 'seo',
    heading: 'GOLD',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '499/Month',
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
    category: 'Logo Design',
    heading: 'Mascot',
    heading2: 'Logo',
    dollar: '$',
    price: '1199',
    items: [
      '1 Mascot Logo Concept',
      '8 Revisions',
      'Hand Drawn Sketch',
      'Presentation on Mockup',
      '1 Designer',
      '48 - 72 Hours Turn Around Time',
      'File Formats: JPEG, PNG & PDF, EPS, AI'
    ],
  },
  {
    category: 'Branding',
    heading: 'PLATINUM',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '150',
    items: [
      'Web Banner',
      'Social Covers',
      'Invoice Design',
      'Flyer Design',
      'Stamp Design',
      'Email Signature',
      'Business Card',
      'Letterhead',
      'Envelope',
      'All With Print Ready Files'
    ],
  },
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
  {
    category: 'Marketing',
    heading: 'PLATINUM',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '500',
    items: [
      'Page Management (3 Platforms)',
      'Cover & Page UI',
      '12 Social Media Posts',
      '1 Animation',
      'Ad Boosting (2-Time)',
      'Audience Engagement',
      'Community Management',
      'Reputation Management',
      'Targeted Page Likes',
      'Monthly Reporting',
    ],
  },
  {
    category: 'App Development',
    heading: 'BASIC HYBRID APP',
    heading2: '(IOS/android)',
    heading3: 'ECOMMERCE HYBRID',
    heading4: '(IOS/android) App',
    items: [
      '($30-$35/hour)'
    ],
    items2: [
      ''
    ],
  },
  {
    category: 'Content Writing',
    heading: 'ARTICLE',
    heading2: 'WRITING',
    dollar: '$',
    price: '20',
    items: [
      'SEO Optimized Content',
      'Relevant to your Topic',
      'Plagiarism Free Content',
      'Unlimited Revisions',
      '24-48 Hours of TAT',
      'Proofing and Editing'
    ],
  },
  {
    category: 'Lead',
    heading: 'PLATINUM',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '3000',
    items: [
      'SEO Optimized Content',
      'Relevant to your Industry',
      'Plagiarism Free Content',
      'Unlimited Revisions',
      '24-48 Hours of TAT',
      'Proofing and Editing'
    ],
  },
  {
    category: 'seo',
    heading: 'PLATINUM',
    heading2: 'PACKAGE',
    dollar: '$',
    price: '799/Month',
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

const activeCategory = ref('Logo Design');

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

.card[data-category="Logo Design"],
.card[data-category="Branding"],
.card[data-category="Web Design"],
.card[data-category="Marketing"],
.card[data-category="Content Writing"],
.card[data-category="Lead"],
.card[data-category="seo"] {
  background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/first-card.svg');
}

.middle-card[data-category="Logo Design"],
.middle-card[data-category="Branding"],
.middle-card[data-category="Web Design"],
.middle-card[data-category="Marketing"],
.middle-card[data-category="Content Writing"],
.middle-card[data-category="Lead"],
.middle-card[data-category="seo"] {
  background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/middle-card.svg');
}

.card[data-category="App Development"] {
  background-image: url('@/assets/images/Packages/appCard.png');
}

.middle-card[data-category="App Development"] {
  background-image: url('@/assets/images/Packages/appMiddleCard.png');
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
