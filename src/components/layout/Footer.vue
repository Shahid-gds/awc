<template>
  <div class="bg-[url('@/assets/images/Footer/footerBg.png')] bg-cover">
    <div class="lg:block hidden container mx-auto 2xl:px-[10rem] py-[5rem]">
      <div class="w-full lg:flex lg:space-x-10">
        <div class="w-full">
          <div class="pb-10 w-full">
            <img class="w-[55%]" src="@/assets/images/Footer/footerLogo.svg" alt="">
          </div>
          <div class="text-[#979797] leading-7">
            <p>
              Our mission is to help businesses like yours build strong, data-driven relationships with their customers. How do we achieve this? By starting with a deep understanding of your target audience and creating a custom strategy to reach them through the power of digital media.Our vision is dedicated to facilitating personalized and tailored data-driven business-to-consumer relationships.
            </p>
          </div>
          <div class="flex items-center space-x-3 lg:mt-16 mt-8 pb-16">
            <div class="text-xl font-bold text-[white]">
              <span class="">Follow</span> <span>Us On:</span>
              <div class="border-t-4 border-[#9d0208] w-10"></div>
            </div>
            <div class="flex space-x-4 items-center mt-2">
              <div class="facebook">
                <a href="https://www.facebook.com/americanwebcrafts" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.641" height="18" viewBox="0 0 9.641 18">
                    <path id="Facebook"
                      d="M10.082,10.125l.5-3.258H7.456V4.753a1.629,1.629,0,0,1,1.837-1.76h1.421V.22A17.329,17.329,0,0,0,8.191,0C5.617,0,3.934,1.56,3.934,4.385V6.867H1.073v3.258H3.934V18H7.456V10.125Z"
                      transform="translate(-1.073)" fill="#656565" />
                  </svg>
                </a>
              </div>
              <div class="instagram">
                <a href="https://www.instagram.com/americanwebcrafts" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18.004" height="18" viewBox="0 0 18.004 18">
                    <path id="Instagram"
                      d="M9,5.877a4.615,4.615,0,1,0,4.615,4.615A4.608,4.608,0,0,0,9,5.877Zm0,7.615a3,3,0,1,1,3-3,3.006,3.006,0,0,1-3,3Zm5.88-7.8A1.076,1.076,0,1,1,13.8,4.612,1.074,1.074,0,0,1,14.881,5.688Zm3.057,1.092a5.327,5.327,0,0,0-1.454-3.771,5.362,5.362,0,0,0-3.771-1.454c-1.486-.084-5.94-.084-7.426,0a5.354,5.354,0,0,0-3.771,1.45A5.344,5.344,0,0,0,.06,6.776c-.084,1.486-.084,5.94,0,7.426a5.327,5.327,0,0,0,1.454,3.771,5.369,5.369,0,0,0,3.771,1.454c1.486.084,5.94.084,7.426,0a5.327,5.327,0,0,0,3.771-1.454A5.362,5.362,0,0,0,17.937,14.2c.084-1.486.084-5.936,0-7.422ZM16.017,15.8a3.038,3.038,0,0,1-1.711,1.711c-1.185.47-4,.361-5.306.361s-4.125.1-5.306-.361A3.038,3.038,0,0,1,1.984,15.8c-.47-1.185-.361-4-.361-5.306s-.1-4.125.361-5.306A3.038,3.038,0,0,1,3.695,3.475c1.185-.47,4-.361,5.306-.361s4.125-.1,5.306.361a3.038,3.038,0,0,1,1.711,1.711c.47,1.185.361,4,.361,5.306S16.487,14.617,16.017,15.8Z"
                      transform="translate(0.004 -1.492)" fill="#656565" />
                  </svg>
                </a>
              </div>
              <div class="linkedin">
                <a href="https://www.linkedin.com/company/american-web-craft" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
                    <path id="LinkedIn"
                      d="M4.028,18H.3V5.981H4.028ZM2.161,4.342A2.174,2.174,0,1,1,4.322,2.161,2.179,2.179,0,0,1,2.161,4.342ZM17.993,18H14.27V12.148c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.237,1.514-2.237,3.081V18H6.366V5.981H9.944V7.62H10a3.921,3.921,0,0,1,3.53-1.94C17.3,5.68,18,8.166,18,11.4V18Z"
                      transform="translate(0 0.003)" fill="#656565" />
                  </svg>
                </a>
              </div>
              
            </div>
          </div>
        </div>
        <div class="w-[30%]">
          <div class="">
            <h1 class="text-xl text-white font-bold">Quick Links</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-9 py-6">
              <ul class="">
                <li><router-link :to="{name: 'Home'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Home</router-link></li>
                <!-- <li><a class=" hover:text-white" href="">Services</a></li> -->
                <li><router-link :to="{name: 'Portfolio'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Portfolio</router-link></li>
                <li><router-link :to="{name: 'Packages'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Package</router-link></li>
                <li><router-link :to="{name: 'About'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">About Us</router-link></li>
                <li><router-link :to="{name: 'Contact'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Contant Us</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[40%]">
          <div class="">
            <h1 class="text-xl text-white font-bold">Our Services</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-9 py-6">
              <ul class="">
                <li><router-link :to="{name: 'Logo'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Logo Designs</router-link></li>
                <li><router-link :to="{name: 'Web'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Web Designs</router-link></li>
                <li><router-link :to="{name: 'Branding'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Corporate Branding</router-link></li>
                <li><router-link :to="{name: 'SEO'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">SEO</router-link></li>
                <li><router-link :to="{name: 'Media'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Social Media Marketing</router-link></li>
                <li><router-link :to="{name: 'Lead'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Lead Generation</router-link></li>
                <li><router-link :to="{name: 'Content'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Content Writing</router-link></li>
                <li><router-link :to="{name: 'App'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">App Development</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="w-[60%]">
          <div class="">
            <h1 class="text-xl text-white font-bold">Contact Us</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-6 py-6">
              <div class="flex items-center space-x-3">
                <div>
                  <a href=""><img src="../icons/telephone.png" alt=""></a>
                </div>
                <div>
                  <a href="">+1 (540) 908-3500</a>
                </div>
              </div>
              <div class="flex items-center space-x-3 mt-4">
                <div class="w-6">
                  <img class="" src="../icons/email.png" alt="">
                </div>
                <div>
                  info@americanwebcraft.com
                </div>
              </div>
              <div class="flex items-start space-x-3 mt-4">
                <div class="w-6 mt-1">
                  <img class="" src="../icons/maps-and-flags.png" alt="">
                </div>
                <div class="w-full">
                  1109 East Main St, Ste 906 
                  #2131,Richmond, VA, United 
                  States, Virginia.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="mt-[5rem]">
        <div class="border-b-2 w-full border-[#2c2c2c]"></div>
        <div class="flex justify-center mt-[4rem]">
          <div class="space-y-2">
            <div class="flex justify-center">
              <img src="@/assets/images/Footer/Cards.svg" alt="">
            </div>
            <div class="text-[#5e5e5e] mt-[2rem]">
              <span>Copyrights © 2023 - <span class="font-bold text-white">American Web Craft </span>, All Rights Reserved. </span>
            </div>
            <div class="text-[#5e5e5e] text-center">
              <router-link :to="{name: 'privacy-policy'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Privacy Policy </router-link>  -   <router-link :to="{name: 'terms'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Terms of Service </router-link>  -   <router-link :to="{name: 'refund'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Refund Policy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="lg:hidden sm:block hidden container mx-auto 2xl:px-[10rem] py-[10rem] px-6">
      <div class="w-full lg:flex lg:space-x-10">
        <div class="w-full">
          <div class="pb-10 w-full">
            <img class="w-[35%]" src="@/assets/images/Footer/footerLogo.svg" alt="">
          </div>
          <div class="text-[#979797] leading-7">
            <p>
              Our mission is to help businesses like yours build strong, data-driven relationships with their customers. How do we achieve this? By starting with a deep understanding of your target audience and creating a custom strategy to reach them through the power of digital media.Our vision is dedicated to facilitating personalized and tailored data-driven business-to-consumer relationships.
            </p>
          </div>
          <div class="flex items-center space-x-3 lg:mt-16 mt-8 pb-16">
            <div class="text-xl font-bold text-[white]">
              <div class="border-t-4 border-[#9d0208] w-10"></div>
              <span class="">Follow</span> <span>Us On:</span>
            </div>
            <div class="flex space-x-4 items-center mt-2">
              <div class="facebook">
                <a href="https://www.facebook.com/americanwebcrafts" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.641" height="18" viewBox="0 0 9.641 18">
                    <path id="Facebook"
                      d="M10.082,10.125l.5-3.258H7.456V4.753a1.629,1.629,0,0,1,1.837-1.76h1.421V.22A17.329,17.329,0,0,0,8.191,0C5.617,0,3.934,1.56,3.934,4.385V6.867H1.073v3.258H3.934V18H7.456V10.125Z"
                      transform="translate(-1.073)" fill="#656565" />
                  </svg>
                </a>
              </div>
              <div class="instagram">
                <a href="https://www.instagram.com/americanwebcrafts" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18.004" height="18" viewBox="0 0 18.004 18">
                    <path id="Instagram"
                      d="M9,5.877a4.615,4.615,0,1,0,4.615,4.615A4.608,4.608,0,0,0,9,5.877Zm0,7.615a3,3,0,1,1,3-3,3.006,3.006,0,0,1-3,3Zm5.88-7.8A1.076,1.076,0,1,1,13.8,4.612,1.074,1.074,0,0,1,14.881,5.688Zm3.057,1.092a5.327,5.327,0,0,0-1.454-3.771,5.362,5.362,0,0,0-3.771-1.454c-1.486-.084-5.94-.084-7.426,0a5.354,5.354,0,0,0-3.771,1.45A5.344,5.344,0,0,0,.06,6.776c-.084,1.486-.084,5.94,0,7.426a5.327,5.327,0,0,0,1.454,3.771,5.369,5.369,0,0,0,3.771,1.454c1.486.084,5.94.084,7.426,0a5.327,5.327,0,0,0,3.771-1.454A5.362,5.362,0,0,0,17.937,14.2c.084-1.486.084-5.936,0-7.422ZM16.017,15.8a3.038,3.038,0,0,1-1.711,1.711c-1.185.47-4,.361-5.306.361s-4.125.1-5.306-.361A3.038,3.038,0,0,1,1.984,15.8c-.47-1.185-.361-4-.361-5.306s-.1-4.125.361-5.306A3.038,3.038,0,0,1,3.695,3.475c1.185-.47,4-.361,5.306-.361s4.125-.1,5.306.361a3.038,3.038,0,0,1,1.711,1.711c.47,1.185.361,4,.361,5.306S16.487,14.617,16.017,15.8Z"
                      transform="translate(0.004 -1.492)" fill="#656565" />
                  </svg>
                </a>
              </div>
              <div class="linkedin">
                <a href="https://www.linkedin.com/company/american-web-craft" target="_blank">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
                    <path id="LinkedIn"
                      d="M4.028,18H.3V5.981H4.028ZM2.161,4.342A2.174,2.174,0,1,1,4.322,2.161,2.179,2.179,0,0,1,2.161,4.342ZM17.993,18H14.27V12.148c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.237,1.514-2.237,3.081V18H6.366V5.981H9.944V7.62H10a3.921,3.921,0,0,1,3.53-1.94C17.3,5.68,18,8.166,18,11.4V18Z"
                      transform="translate(0 0.003)" fill="#656565" />
                  </svg>
                </a>
              </div>
              
            </div>
          </div>
        </div>
       <div class="flex">
        <div class="md:w-full w-[60%]">
          <div class="">
            <h1 class="text-xl text-white font-bold">Quick Links</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-9 py-6">
              <ul class="">
                <li><router-link :to="{name: 'Home'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Home</router-link></li>
                <!-- <li><a class=" hover:text-white" href="">Services</a></li> -->
                <li><router-link :to="{name: 'Portfolio'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Portfolio</router-link></li>
                <li><router-link :to="{name: 'Packages'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Package</router-link></li>
                <li><router-link :to="{name: 'About'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">About Us</router-link></li>
                <li><router-link :to="{name: 'Contact'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Contant Us</router-link></li>
              </ul>
            </div>
          </div>
        </div>
        <div class="md:w-full w-[70%]">
          <div class="">
            <h1 class="text-xl text-white font-bold">Our Services</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-9 py-6">
              <ul class="">
                <li><router-link :to="{name: 'Logo'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Logo Designs</router-link></li>
                <li><router-link :to="{name: 'Web'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Web Designs</router-link></li>
                <li><router-link :to="{name: 'Branding'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Corporate Branding</router-link></li>
                <li><router-link :to="{name: 'SEO'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">SEO</router-link></li>
                <li><router-link :to="{name: 'Media'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Social Media Marketing</router-link></li>
                <li><router-link :to="{name: 'Lead'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Lead Generation</router-link></li>
                <li><router-link :to="{name: 'Content'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Content Writing</router-link></li>
                <li><router-link :to="{name: 'App'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">App Development</router-link></li>
              </ul>
            </div>
          </div>
        </div>
         <div class="w-full">
          <div class="">
            <h1 class="text-xl text-white font-bold">Contact Us</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-6 py-6">
              <div class="flex items-center space-x-3">
                <div>
                  <a href=""><img src="../icons/telephone.png" alt=""></a>
                </div>
                <div>
                  <a href="">+1 (540) 908-3500</a>
                </div>
              </div>
              <div class="flex items-center space-x-3 mt-4">
                <div class="w-6">
                  <img class="" src="../icons/email.png" alt="">
                </div>
                <div>
                  info@americanwebcraft.com
                </div>
              </div>
              <div class="flex items-start space-x-3 mt-4">
                <div class="w-6 mt-1">
                  <img class="" src="../icons/maps-and-flags.png" alt="">
                </div>
                <div class="w-full">
                  1109 East Main St, Ste 906 
                  #2131,Richmond, VA, United 
                  States, Virginia.
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       
      </div>
      <div class="mt-[5rem]">
        <div class="border-b-2 w-full border-[#2c2c2c]"></div>
        <div class="flex justify-center mt-[4rem]">
          <div class="space-y-2">
            <div class="flex justify-center">
              <img src="@/assets/images/Footer/Cards.svg" alt="">
            </div>
            <div class="text-[#5e5e5e] mt-[2rem]">
              <span>Copyrights © 2023 - <span class="font-bold text-white">American Web Craft </span>, All Rights Reserved. </span>
            </div>
            <div class="text-[#5e5e5e] text-center">
              <router-link :to="{name: 'privacy-policy'}" class="hover:text-white transition-all ease-in duration-300" :active-class="'active text-white font-[600]'" @click="scrollToTop">Privacy Policy </router-link>  -   <router-link :to="{name: 'terms'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Terms of Service </router-link>  -   <router-link :to="{name: 'refund'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Refund Policy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- this is for mobile view  -->
    <div class="sm:hidden container mx-auto 2xl:px-[10rem] sm:py-[10rem] py-[5rem] px-6">
      <div class="w-full lg:flex lg:space-x-10">
        <div class="w-full">
          <div class="pb-10 w-full">
            <img class="w-[50%]" src="@/assets/images/Footer/footerLogo.svg" alt="">
          </div>
          <div class="text-[#979797] leading-7 pb-6">
            <p>
              Our mission is to help businesses like yours build strong, data-driven relationships with their customers. How do we achieve this? By starting with a deep understanding of your target audience and creating a custom strategy to reach them through the power of digital media.Our vision is dedicated to facilitating personalized and tailored data-driven business-to-consumer relationships.
            </p>
          </div>
        </div>
       <div class="sm:flex">
          <div class="flex">
            <div class="w-full">
              <div class="">
                <h1 class="text-xl text-white font-bold">Quick Links</h1>
                <div class="border-t-4 border-[#9d0208] w-10"></div>
                <div class="text-[#979797] leading-9 py-6">
                  <ul class="">
                    <li><router-link :to="{name: 'Home'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Home</router-link></li>
                    <!-- <li><a class=" hover:text-white" href="">Services</a></li> -->
                    <li><router-link :to="{name: 'Portfolio'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Portfolio</router-link></li>
                    <li><router-link :to="{name: 'Packages'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Package</router-link></li>
                    <li><router-link :to="{name: 'About'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">About Us</router-link></li>
                    <li><router-link :to="{name: 'Contact'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Contant Us</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
            <div class="w-full">
              <div class="">
                <h1 class="text-xl text-white font-bold">Our Services</h1>
                <div class="border-t-4 border-[#9d0208] w-10"></div>
                <div class="text-[#979797] leading-9 py-6">
                  <ul class="">
                    <li><router-link :to="{name: 'Logo'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Logo Designs</router-link></li>
                    <li><router-link :to="{name: 'Web'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Web Designs</router-link></li>
                    <li><router-link :to="{name: 'Branding'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Corporate Branding</router-link></li>
                    <li><router-link :to="{name: 'SEO'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">SEO</router-link></li>
                    <li><router-link :to="{name: 'Media'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Social Media Marketing</router-link></li>
                    <li><router-link :to="{name: 'Lead'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Lead Generation</router-link></li>
                    <li><router-link :to="{name: 'Content'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">Content Writing</router-link></li>
                    <li><router-link :to="{name: 'App'}" class=" hover:text-white transition-all ease-in duration-300 hover:ml-1.5 hover:font-bold" :active-class="'active text-white font-[600]'" @click="scrollToTop">App Development</router-link></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
         <div class="w-full">
          <div class="">
            <h1 class="text-xl text-white font-bold">Contact Us</h1>
            <div class="border-t-4 border-[#9d0208] w-10"></div>
            <div class="text-[#979797] leading-6 py-6">
              <div class="flex items-center space-x-3">
                <div>
                  <a href=""><img src="../icons/telephone.png" alt=""></a>
                </div>
                <div>
                  <a href="">+1 (540) 908-3500</a>
                </div>
              </div>
              <div class="flex items-center space-x-3 mt-4">
                <div class="w-6">
                  <img class="" src="../icons/email.png" alt="">
                </div>
                <div>
                  info@americanwebcraft.com
                </div>
              </div>
              <div class="flex items-start space-x-3 mt-4">
                <div class="w-6 mt-1">
                  <img class="" src="../icons/maps-and-flags.png" alt="">
                </div>
                <div class="w-full">
                  1109 East Main St, Ste 906 
                  #2131,Richmond, VA, United 
                  States, Virginia.
                </div>
              </div>
            </div>
          </div>
        </div>
       </div>
       <div class="flex items-center space-x-3 lg:mt-16 mt-8 pb-16">
        <div class="text-xl font-bold text-[white]">
          <div class="border-t-4 border-[#9d0208] w-10"></div>
          <span class="">Follow</span> <span>Us On:</span>
        </div>
        <div class="flex space-x-4 items-center mt-2">
          <div class="facebook">
            <a href="https://www.facebook.com/americanwebcrafts" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="9.641" height="18" viewBox="0 0 9.641 18">
                <path id="Facebook"
                  d="M10.082,10.125l.5-3.258H7.456V4.753a1.629,1.629,0,0,1,1.837-1.76h1.421V.22A17.329,17.329,0,0,0,8.191,0C5.617,0,3.934,1.56,3.934,4.385V6.867H1.073v3.258H3.934V18H7.456V10.125Z"
                  transform="translate(-1.073)" fill="#656565" />
              </svg>
            </a>
          </div>
          <div class="instagram">
            <a href="https://www.instagram.com/americanwebcrafts" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="18.004" height="18" viewBox="0 0 18.004 18">
                <path id="Instagram"
                  d="M9,5.877a4.615,4.615,0,1,0,4.615,4.615A4.608,4.608,0,0,0,9,5.877Zm0,7.615a3,3,0,1,1,3-3,3.006,3.006,0,0,1-3,3Zm5.88-7.8A1.076,1.076,0,1,1,13.8,4.612,1.074,1.074,0,0,1,14.881,5.688Zm3.057,1.092a5.327,5.327,0,0,0-1.454-3.771,5.362,5.362,0,0,0-3.771-1.454c-1.486-.084-5.94-.084-7.426,0a5.354,5.354,0,0,0-3.771,1.45A5.344,5.344,0,0,0,.06,6.776c-.084,1.486-.084,5.94,0,7.426a5.327,5.327,0,0,0,1.454,3.771,5.369,5.369,0,0,0,3.771,1.454c1.486.084,5.94.084,7.426,0a5.327,5.327,0,0,0,3.771-1.454A5.362,5.362,0,0,0,17.937,14.2c.084-1.486.084-5.936,0-7.422ZM16.017,15.8a3.038,3.038,0,0,1-1.711,1.711c-1.185.47-4,.361-5.306.361s-4.125.1-5.306-.361A3.038,3.038,0,0,1,1.984,15.8c-.47-1.185-.361-4-.361-5.306s-.1-4.125.361-5.306A3.038,3.038,0,0,1,3.695,3.475c1.185-.47,4-.361,5.306-.361s4.125-.1,5.306.361a3.038,3.038,0,0,1,1.711,1.711c.47,1.185.361,4,.361,5.306S16.487,14.617,16.017,15.8Z"
                  transform="translate(0.004 -1.492)" fill="#656565" />
              </svg>
            </a>
          </div>
          <div class="linkedin">
            <a href="https://www.linkedin.com/company/american-web-craft" target="_blank">
              <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
                <path id="LinkedIn"
                  d="M4.028,18H.3V5.981H4.028ZM2.161,4.342A2.174,2.174,0,1,1,4.322,2.161,2.179,2.179,0,0,1,2.161,4.342ZM17.993,18H14.27V12.148c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.237,1.514-2.237,3.081V18H6.366V5.981H9.944V7.62H10a3.921,3.921,0,0,1,3.53-1.94C17.3,5.68,18,8.166,18,11.4V18Z"
                  transform="translate(0 0.003)" fill="#656565" />
              </svg>
            </a>
          </div>
          
        </div>
      </div>
      </div>
      <div class="sm:mt-[5rem]">
        <div class="border-b-2 w-full border-[#2c2c2c]"></div>
        <div class="flex justify-center mt-[4rem]">
          <div class="space-y-2">
            <div class="flex justify-center">
              <img src="@/assets/images/Footer/Cards.svg" alt="">
            </div>
            <div class="text-[#5e5e5e] mt-[2rem] text-center">
              <span>Copyrights © 2023 - <span class="font-bold text-white">American Web Craft </span>, <br> All Rights Reserved. </span>
            </div>
            <div class="text-[#5e5e5e] text-center">
              <router-link :to="{name: 'privacy-policy'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Privacy Policy </router-link>  -   <router-link :to="{name: 'terms'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Terms of Service </router-link>  -   <router-link :to="{name: 'refund'}" class=" hover:text-white" :active-class="'active text-white font-[600]'" @click="scrollToTop">Refund Policy</router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
<script setup>
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
<style scoped>
a svg path {
  transition: fill 0.3s ease;
}

a:hover svg path {
  fill: white;
}

</style>