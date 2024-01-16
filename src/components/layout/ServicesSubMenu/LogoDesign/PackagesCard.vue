<template>
    <section id="packages" class="bg py-[5rem]">
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
                    Serving Businesses                  
                </h2>
                <p class="md:text-[28px] text-[16px] font-bold uppercase text-white animated-element-right-second">of All Sizes Our services are available for all.</p>
                </div>
              </div>
              <div class="flex justify-end">
                <div class=" bg-[#9d0208] w-[50%] sm:mt-4 mt-2 h-1 animated-element-right-second"></div>
              </div>
            </div>
            </div>
            <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-1.5 pb-6">
              <p class="2xl:w-[45%] lg:w-[50%] md:w-[60%] px-6">
                We deal with large companies effectively and provide equal attention to small and medium-sized businesses and also to start-up businesses.
              </p>
            </div>
         <div class="flex justify-center">
            <div class="w-full md:flex justify-center md:space-x-4">
               <div class="xl:flex xl:space-x-4 justify-center">
               <div class="pb-16 flex justify-center">
                <div class="p-6 sm:w-[370px] sm:h-[563px] w-[320px] h-[500px] py-[2.5rem] relative card text-center">
                  <h1 class="text-white text-[21px] font-[outline] uppercase">Basic <br> Logo</h1>
                  <div class="text-white font-bold sm:mt-[2.6rem] mt-[1.5rem] flex justify-center">
                      <div class="text-[25px]">$</div>
                      <div class="text-[35px]">70</div>
                  </div>
                  <div class="mt-[2rem] text-[#9c9293] text-[17px] ">
                      <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                          <li>2 Custom Logo Concepts</li>
                          <li> 4 Revisions</li>
                          <li> 100% Ownership Rights</li>
                          <li> 1 Designer</li>
                          <li> File Formats: JPEG, PNG & PDF</li>
                          <li>2 Custom Logo Concepts</li>
                          <li> 4 Revisions</li>
                          <li> 100% Ownership Rights</li>
                          <li> 1 Designer</li>
                          <li> File Formats: JPEG, PNG & PDF</li>
                      </ul>
                  </div>
                <div class="flex justify-center">
                  <div @click="openModal('Basic')"
                  class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                    order now
                </div>
                </div>
              </div>
               </div>
           <div class="flex justify-center pb-16 xl:translate-x-0 md:translate-x-[50%]">
            <div class="p-6 sm:w-[370px] sm:h-[563px] w-[320px] h-[500px] py-[2.5rem] relative middle-card text-center">
              <h1 class="text-white text-[21px] font-[outline] uppercase">Premium <br> Logo</h1>
              <div class="text-white font-bold sm:mt-[2.6rem] mt-[1.5rem] flex justify-center">
                  <div class="text-[25px]">$</div>
                  <div class="text-[35px]">100</div>
              </div>
              <div class="mt-[2rem] text-[#9c9293] text-[17px] ">
                <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                    <li>2 Custom Logo Concepts</li>
                    <li> 4 Revisions</li>
                    <li> 100% Ownership Rights</li>
                    <li> 1 Designer</li>
                    <li> File Formats: JPEG, PNG & PDF</li>
                    <li>2 Custom Logo Concepts</li>
                    <li> 4 Revisions</li>
                    <li> 100% Ownership Rights</li>
                    <li> 1 Designer</li>
                    <li> File Formats: JPEG, PNG & PDF</li>
                </ul>
            </div>
            <div class="flex justify-center">
              <div @click="openModal('Premium')"
              class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                order now
            </div>
            </div>
          </div>
           </div>
               </div>
             <div class="flex justify-center">
              <div class="p-6 sm:w-[370px] sm:h-[563px] w-[320px] h-[500px] py-[2.5rem] relative card text-center">
                <h1 class="text-white text-[21px] font-[outline] uppercase">Mascot <br> Logo</h1>
                <div class="text-white font-bold sm:mt-[2.6rem] mt-[1.5rem] flex justify-center">
                    <div class="text-[25px]">$</div>
                    <div class="text-[35px]">170</div>
                </div>
                <div class="mt-[2rem] text-[#9c9293] text-[17px] ">
                  <ul class="sm:leading-[3rem] leading-[2rem] sm:h-[15rem] h-[12rem] overflow-y-scroll">
                      <li>2 Custom Logo Concepts</li>
                      <li> 4 Revisions</li>
                      <li> 100% Ownership Rights</li>
                      <li> 1 Designer</li>
                      <li> File Formats: JPEG, PNG & PDF</li>
                      <li>2 Custom Logo Concepts</li>
                      <li> 4 Revisions</li>
                      <li> 100% Ownership Rights</li>
                      <li> 1 Designer</li>
                      <li> File Formats: JPEG, PNG & PDF</li>
                  </ul>
              </div>
              <div class="flex justify-center">
                <div @click="openModal('Mascot')"
                class="hover-btn uppercase absolute -bottom-5 w-[50%] bg-gradient-to-r  from-[#9d0208] bg-[#601417] border-r-[#601417] p-3 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
                  order now
              </div>
             
              </div>
            </div>
             </div>
            </div>
         </div>
         <OrderNowModal :isVisible="isModalVisible" :logoType="modalLogoType" @close="closeModal" />
    </section>
</template>
<script setup>
import { ref, defineEmits } from 'vue';
import OrderNowModal from '../../UI/OrderNowModal.vue';

const isModalVisible = ref(false);
const modalLogoType = ref('');
const emit = defineEmits();

const openModal = (logoType) => {
  modalLogoType.value = logoType;
  isModalVisible.value = true;
  emit('openModal', logoType);
};

const closeModal = () => {
  isModalVisible.value = false;
};
</script>

<style scoped>
.card{
    background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/first-card.svg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
.middle-card{
    background-image: url('@/assets/images/Services/LogoDesigns/packagesImg/middle-card.svg');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
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
