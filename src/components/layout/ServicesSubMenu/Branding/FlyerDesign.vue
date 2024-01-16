<template>
    <section class="overflow-hidden sm:py-[5rem]">
      <div class="xl:flex justify-between items-center">
        <!-- ===================================== Left Column Start ========================================== -->
        <div class="w-full relative">
          <div class="p-8 2xl:ml-[12rem] xl:ml-[4rem]">
              <!--****** This is for large screen *****-->
            <div class="xl:block hidden ml-[2.5rem]">
              <h1
              class="outline xl:text-[80pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[35pt] uppercase animated-element-subHeadings">
              Flyer
            </h1>
            </div>
               <!--****** This is for xl screen *****-->
               <div class="xl:hidden text-center">
                <h1
                class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                Flyer
            </h1>
               </div>
                <!--****** end *****-->
            <div class="xl:block hidden md:-mt-[5rem] ml-[4rem] -mt-[2rem] 2xl:pb-8 xl:pb-6 md:pb-14 pb-8">
              <h2
                class="others-text font-bold text-white font-[outline] md:text-[40px] text-[20px] uppercase animated-element-lefSubheading">
                Flyer Design
              </h2>
            </div>
               <!--****** This is for xl screen *****-->
               <div class="xl:hidden text-center md:-mt-[4rem] sm:-mt-[3rem] -mt-[2rem] sm:pb-8 pb-4 px-6">
                <h2
                    class="others-text font-bold text-white font-[outline] md:text-[30px] sm:text-[25px] uppercase animated-element-lefSubheading">
                    Flyer Design
                </h2>
            </div>
            <!--****** end *****-->
            <!--==================================== Left Heading and Paragraph Start ========================== -->
            <div class="md:px-6 2xl:ml-[2.5rem] md:ml-[2.2rem]">
              <h1 class="2xl:text-[28px] sm:text-[25px] text-[20px] text-[#f5f5f5] sm:text-left text-center">Putting your brand out there.</h1>
              <p class="text-[#cccccc] sm:text-[18px]">Are you in the hospitality industry or just a company printing our flyers for
                your consumers? It becomes difficult for companies to find a branding agency
                that does not only work with the flyer design but also keeps a close eye on
                quality, we offer custom flyer designs that can be utilized in your next
                marketing campaign - Making your branding game strong!</p>
            </div>
            <!--==================================== Left heading and paragraph End ================================ -->
            <!-- =================================== Bullit Points Area Start ====================================== -->
            <div class="md:ml-[6rem] ml-[1.5rem] 2xl:py-4 py-2">
              <ul class="list-outside list-disc sm:text-[22px] text-[#f5f5f5] 2xl:leading-[3rem] leading-[2.5rem]">
                <li class="text-[#bd0a11]">
                  <span class="text-[#f5f5f5] sm:text-[20px]">High Quality (HD) Designs</span>
                </li>
                <li class="text-[#bd0a11]">
                  <span class="text-[#f5f5f5] sm:text-[20px]">Branding from Scratch</span>
                </li>
                <li class="text-[#bd0a11]">
                  <span class="text-[#f5f5f5] sm:text-[20px]">24/7 Customer Support</span>
                </li>
              </ul>
            </div>
            <!-- =================================== Bullit Points Area End ====================================== -->
            <!-- =================================== Get Started Button Start ====================================== -->
            <div @click="scrollToPackages"
              class="hover-btn bg-gradient-to-r md:w-[30%] sm:w-[50%] md:ml-[4rem] from-[#9d0208] bg-[#601417] border-r-[#601417] p-2 sm:px-5 rounded-lg text-[white] font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417] text-center">
              <div class="uppercase">
                Get Started
              </div>
            </div>
            <!-- =================================== Get Started Button End ======================================== -->
  
          </div>
          <!--================================== Left red Line Start =============================== -->
          <div class="absolute 2xl:top-[11.8rem] xl:top-[10.4rem] lg:top-[9.5rem] sm:top-[9rem] top-[5.5rem] bg-[#9d0208] xl:w-full w-1/2 h-1 animated-element-leftline"></div>
          <!--================================== Left red Line End =============================== -->
  
        </div>
        <!-- ===================================== Left Column End ========================================== -->
        <!-- ***************************************************************************************************************** -->
        <!-- ===================================== Right Column Start ======================================= -->
        <div class="w-full relative">
          <div class="right-column-bg absolute xl:top-20 right-0 2xl:w-[550px] xl:w-[350px] xl:h-[350px] w-[100%] md:h-[300px] h-[180px]"></div>
          <div class="relative 2xl:mt-[5%] xl:mt-[15%]  xl:ml-[5%] flex justify-center">
           <div>
            <div class=" 2xl:w-[600px] md:w-[500px] w-[280px] 2xl:h-[450px] md:h-[350px] h-[200px]"></div>
            <div class="absolute top-0 2xl:w-[600px] 2xl:h-[450px] md:w-[500px] w-[280px]">
              <img class="2xl:-ml-[12rem] xl:-ml-[8rem] -mt-[2rem]" src="@/assets/images/Services/Branding/img3.svg" alt="">
            </div>
           </div>
          </div>
          <div class="flex justify-end 2xl:mt-[6%] sm:mt-[15%] mt-[18%]">
            <div class=" bg-[#9d0208] md:w-[50%] w-[40%] h-1 animated-element-right-second"></div>
          </div>
        </div>
      </div>
    </section>
  </template>
  <script setup>
  const scrollToPackages = () => {
    const packagesSection = document.getElementById('packages');
  
    if (packagesSection) {
      packagesSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start',
      });
    }
  };
  </script>
  
  <style scoped>
  .right-column-bg {
    background-color: rgba(191, 19, 19, 0.1);
  }

  </style>