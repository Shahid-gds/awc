<template>
  <div class="w-full fixed z-50 top-0" :class="{ 'header-background': headerScrolled, 'w-full fixed z-50 top-0': true }">
    <!-- <div v-if="loading" class="loader"></div> -->
    <div class="p-8 2xl:px-24 flex justify-between items-center">
      <!-- Mobile logo (hidden by default) -->
      <div class="xl:hidden md:block hidden">
        <router-link :to="{name: 'Home'}">
          <img src="@/assets/images/headerLogo.png" alt="">
        </router-link>
      </div>
      <div class="md:hidden">
        <div>
          <div class="hover-btn bg-gradient-to-r from-[#9d0208] bg-[#601417] border-r-[#601417] p-2 sm:px-5 px-4 rounded-lg text-[white] font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417] transition-all duration-150 " @click="openModal">
            <div class="uppercase">
                Hire Us
            </div>
        </div>            
          <HireUsModal  :isVisible="isModalVisible" @close="closeModal" />
        </div>
      </div>
      <div class="md:hidden">
        <div class="text-white">
          <a href="#">+1 (540) 908-3500</a>
        </div>
      </div>

      <!-- Mobile menu (hidden by default) -->
      <div v-if="isMenuOpen" class="fixed inset-0  bg-black opacity-50 z-50 transition-opacity" @click="toggleMenu">
      </div>
      <transition name="mobile-nav">
        <div v-if="isMenuOpen" :class="{
          'hidden': !isMenuOpen,
          'transform translate-x-full': !isMenuOpen,
          'transform translate-x-0': isMenuOpen
        }"
          class="fixed top-0 left-0 w-[80%] h-screen bg-[#161617] text-white shadow-lg rounded-xl p-3 z-50 xl:w-auto xl:h-auto xl:static xl:bg-transparent transition-transform">
          <div class="flex flex-col justify-start h-full">
            <router-link :to="{name: 'Home'}"  @click="toggleMenu">
              <img src="@/assets/images/headerLogo.png" alt="">
            </router-link>
            <div class="flex flex-col space-y-4 p-3 mt-10 px-6">
              <div class="" @click="toggleServicesMenu">
                Services +
                <transition name="services-submenu">
                  <div v-if="isServicesMenuOpen" key="services-menu" class="space-y-4 bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] rounded-lg p-4">
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link :to="{name: 'Logo'}" @click="scrollToTop">Logo Designs</router-link>
                    </div>
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link :to="{name:'Web'}" @click="scrollToTop">Web Designs</router-link>
                    </div>
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link :to="{name: 'Branding'}" @click="scrollToTop">Corporate Branding</router-link>
                    </div>
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link :to="{name: 'SEO'}" @click="scrollToTop">SEO</router-link>
                    </div>
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link to="/social-media-marketing" @click="scrollToTop">Social Media Marketing</router-link>
                    </div>
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link :to="{name: 'Lead'}" @click="scrollToTop">Lead Generation</router-link>
                    </div>
                    <div class="text-[16px] w-full" @click="toggleMenu">
                      <router-link :to="{name: 'Content'}" @click="scrollToTop">Content Writing</router-link>
                    </div>
                    <div class="text-[16px]" @click="toggleMenu">
                      <router-link :to="{name: 'App'}" @click="scrollToTop">App Development</router-link>
                    </div>
                  </div>
                </transition>
              </div>
              <div class="" @click="toggleMenu">
                <router-link :to="{name: 'Portfolio'}" class="active-route-link" :active-class="'active-route text-white font-[600]'" @click="scrollToTop">Portfolio</router-link>
              </div>
              <div @click="toggleMenu">
                <router-link :to="{name: 'Packages'}" class="active-route-link" :active-class="'active-route text-white font-[600]'" @click="scrollToTop">Packages</router-link>
              </div>
              <div @click="toggleMenu">
                <router-link :to="{name: 'About'}"  class="active-route-link" :active-class="'active-route text-white font-[600]'" @click="scrollToTop">About Us</router-link>
              </div>
              <div @click="toggleMenu">
                <router-link :to="{name: 'Contact'}"  class="active-route-link" :active-class="'active-route text-white font-[600]'" @click="scrollToTop">Contact Us</router-link>
              </div>
              <div>
              
              </div>
            </div>
            <!-- Cancel Icon for closing the menu -->
            <button @click="toggleMenu" class="text-white absolute top-0 right-6 mt-5 font-bold">
              <svg class="w-6 h-6 font-bold" fill="white" stroke="white" viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
              </svg>
            </button>
          </div>
        </div>
      </transition>

      <div class="hidden xl:flex justify-between relative items-center 2xl:space-x-16 space-x-10 text-[#a5a5a5]">
        <!-- Desktop logo -->
        <div class="hidden xl:block">
          <router-link :to="{name: 'Home'}" @click="() => setActiveLink('home')">
            <img src="@/assets/images/headerLogo.png" alt="">
          </router-link>
        </div>
        <div class="hover:text-white active-link group py-2 cursor-pointer" @mouseenter="showSubMenu" @mouseleave="hideSubMenu">
          <div class="relative">
            <div class="py-2 uppercase">Services <span class="font-[graphik]">+</span></div>
          </div>

          <!-- Submenu Container -->
          <transition name="submenu bg-[]" @before-enter="beforeEnter" @enter="enter">
            <div v-if="isSubMenuVisible"
              class="submenu absolute top-[5rem] 2xl:left-[16rem] left-[15rem] z-20 w-[115%] bg-[#9b0208] p-6 rounded-xl transition-opacity 0.5 ease-in pointer-events-auto"
              @mouseenter="showSubMenu">
              <!-- Submenu Items -->
              <div class="flex space-x-3 pb-3">
                <div class="w-full">
                <router-link :to="{name: 'Logo'}" @click="scrollToTop">
                  <div
                  class="border-2 w-full text-center p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/logoDesigns.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px]">Logo Designs</div>
                </div>
              </router-link>
                </div>
              <div class="w-full">
                <router-link :to="{name: 'Web'}">
                <div
                class="border-2 w-full text-center p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                <div class="flex justify-center pb-3">
                  <img src="../icons/web-designing.png" alt="">
                </div>
                <div class="text-[#e5888c] text-[18px]">Web Designs</div>
              </div>
            </router-link>
              </div>
              <div class="w-full">
                <router-link :to="{name: 'Branding'}">
                  <div
                  class="border-2 text-center w-full p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/brand-identity.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px] w-full">Corporate Branding</div>
                </div>
            </router-link>
              </div>
              <div class="w-full">
                <router-link :to="{name: 'SEO'}">
                  <div
                  class="border-2 w-full text-center p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/seo.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px]">SEO</div>
                </div>
            </router-link>
              </div>
              
              </div>
              <div class="flex space-x-3">
                <router-link :to="{name: 'Media'}"
                  class="border-2 w-full text-center p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/social-media.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px]">Social Media Marketing</div>
                </router-link>
                <router-link :to="{name: 'Lead'}"
                  class="border-2 w-full text-center p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/lead-gen.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px]">Lead Generation</div>
                </router-link>
                <router-link :to="{name: 'Content'}"
                  class="border-2 text-center w-full p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/article.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px] w-full">Content Writing</div>
                </router-link>
                <router-link :to="{name: 'App'}"
                  class="border-2 w-full text-center p-6 border-[#8a0207] rounded-lg bg-gradient-to-b from-[#9d0208] bg-[#750206] border-b-[#750206] hover:bg-gradient-to-b hover:from-[#4b0104] hover:bg-[#6e0206] hover:border-b-[#6e0206]">
                  <div class="flex justify-center pb-3">
                    <img src="../icons/app-dev.png" alt="">
                  </div>
                  <div class="text-[#e5888c] text-[18px]">App Development</div>
                </router-link>
              </div>
            </div>
          </transition>
        </div>
        <div class="hover:text-white relative uppercase group py-2 cursor-pointer" @click="scrollToTop">
          <router-link :to="{name: 'Portfolio'}" class="active-link" :active-class="'active text-white font-[600]'">Portfolio</router-link>
        </div>
        <div class="hover:text-white uppercase relative group py-2 cursor-pointer" @click="scrollToTop">
          <router-link :to="{name: 'Packages'}" class="active-link" :active-class="'active text-white font-[600]'">Packages</router-link>
        </div>
        <div class="hover:text-white uppercase relative group py-2 cursor-pointer" @click="scrollToTop">
          <router-link :to="{name: 'About'}" class="active-link" :active-class="'active text-white font-[600]'">About Us</router-link>
        </div>
        <div class="hover:text-white uppercase relative group py-2 cursor-pointer" @click="scrollToTop">
          <router-link :to="{name: 'Contact'}" class="active-link" :active-class="'active text-white font-[600]'">Contact Us</router-link>
        </div>
      </div>

      <div class="flex space-x-4 items-center">
        
        <!-- This is for logged In -->
        <div class="sm:block hidden">
          <div class="flex 2xl:space-x-10 space-x-5 items-center">

            <div class="text-white">
              <a href="#">+1 (540) 908-3500</a>
            </div>
            <div class="flex space-x-5 items-center">
              <div class="facebook">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="9.641" height="18" viewBox="0 0 9.641 18">
                    <path id="Facebook"
                      d="M10.082,10.125l.5-3.258H7.456V4.753a1.629,1.629,0,0,1,1.837-1.76h1.421V.22A17.329,17.329,0,0,0,8.191,0C5.617,0,3.934,1.56,3.934,4.385V6.867H1.073v3.258H3.934V18H7.456V10.125Z"
                      transform="translate(-1.073)" fill="#656565" />
                  </svg>
                </a>
              </div>
              <div class="instagram">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="18.004" height="18" viewBox="0 0 18.004 18">
                    <path id="Instagram"
                      d="M9,5.877a4.615,4.615,0,1,0,4.615,4.615A4.608,4.608,0,0,0,9,5.877Zm0,7.615a3,3,0,1,1,3-3,3.006,3.006,0,0,1-3,3Zm5.88-7.8A1.076,1.076,0,1,1,13.8,4.612,1.074,1.074,0,0,1,14.881,5.688Zm3.057,1.092a5.327,5.327,0,0,0-1.454-3.771,5.362,5.362,0,0,0-3.771-1.454c-1.486-.084-5.94-.084-7.426,0a5.354,5.354,0,0,0-3.771,1.45A5.344,5.344,0,0,0,.06,6.776c-.084,1.486-.084,5.94,0,7.426a5.327,5.327,0,0,0,1.454,3.771,5.369,5.369,0,0,0,3.771,1.454c1.486.084,5.94.084,7.426,0a5.327,5.327,0,0,0,3.771-1.454A5.362,5.362,0,0,0,17.937,14.2c.084-1.486.084-5.936,0-7.422ZM16.017,15.8a3.038,3.038,0,0,1-1.711,1.711c-1.185.47-4,.361-5.306.361s-4.125.1-5.306-.361A3.038,3.038,0,0,1,1.984,15.8c-.47-1.185-.361-4-.361-5.306s-.1-4.125.361-5.306A3.038,3.038,0,0,1,3.695,3.475c1.185-.47,4-.361,5.306-.361s4.125-.1,5.306.361a3.038,3.038,0,0,1,1.711,1.711c.47,1.185.361,4,.361,5.306S16.487,14.617,16.017,15.8Z"
                      transform="translate(0.004 -1.492)" fill="#656565" />
                  </svg>
                </a>
              </div>
              <div class="linkedin">
                <a href="#">
                  <svg xmlns="http://www.w3.org/2000/svg" width="17.997" height="18" viewBox="0 0 17.997 18">
                    <path id="LinkedIn"
                      d="M4.028,18H.3V5.981H4.028ZM2.161,4.342A2.174,2.174,0,1,1,4.322,2.161,2.179,2.179,0,0,1,2.161,4.342ZM17.993,18H14.27V12.148c0-1.394-.028-3.182-1.94-3.182-1.94,0-2.237,1.514-2.237,3.081V18H6.366V5.981H9.944V7.62H10a3.921,3.921,0,0,1,3.53-1.94C17.3,5.68,18,8.166,18,11.4V18Z"
                      transform="translate(0 0.003)" fill="#656565" />
                  </svg>
                </a>
              </div>

            </div>
            <div>
              <div class="hover-btn bg-gradient-to-r from-[#9d0208] bg-[#601417] border-r-[#601417] p-2 sm:px-5 rounded-lg text-[white] font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417] transition-all duration-150 " @click="openModal">
                <div class="uppercase">
                    Hire Us
                </div>
            </div>            
              <HireUsModal  :isVisible="isModalVisible" @close="closeModal" />
            </div>
          </div>
        </div>

        <!-- Mobile toggle menu button -->
        <div class="xl:hidden animated-element-buttons">
          <button @click="toggleMenu" class="text-white">
            <svg v-if="!isMenuOpen" xmlns="http://www.w3.org/2000/svg" width="21.256" height="18.599"
              viewBox="0 0 21.256 18.599">
              <path id="Icon_awesome-bars" data-name="Icon awesome-bars"
                d="M.759,7.635H20.5a.759.759,0,0,0,.759-.759v-1.9a.759.759,0,0,0-.759-.759H.759A.759.759,0,0,0,0,4.978v1.9A.759.759,0,0,0,.759,7.635Zm0,7.592H20.5a.759.759,0,0,0,.759-.759v-1.9a.759.759,0,0,0-.759-.759H.759A.759.759,0,0,0,0,12.569v1.9A.759.759,0,0,0,.759,15.227Zm0,7.592H20.5a.759.759,0,0,0,.759-.759v-1.9A.759.759,0,0,0,20.5,19.4H.759A.759.759,0,0,0,0,20.161v1.9A.759.759,0,0,0,.759,22.818Z"
                transform="translate(0 -4.219)" fill="#fff" />
            </svg>
            <!-- <svg v-else class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                </svg> -->
          </button>
         
        </div>
      </div>
    </div>
  </div>
</template>
  
<script setup>
import { ref, onMounted, onUnmounted } from 'vue';
import HireUsModal from './UI/HireUsModal.vue';
const isModalVisible = ref(false);
const openModal = () => {
  isModalVisible.value = true;
};
const closeModal = () => {
  isModalVisible.value = false;
};



const isMenuOpen = ref(false);
const headerScrolled = ref(false);
const isServicesMenuOpen = ref(false);

const toggleServicesMenu = () => {
  isServicesMenuOpen.value = !isServicesMenuOpen.value;
};
const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value;
};
const isSubMenuVisible = ref(false);

const showSubMenu = () => {
  isSubMenuVisible.value = true;
};

const hideSubMenu = () => {
  isSubMenuVisible.value = false;
};

const beforeEnter = (el) => {
  el.style.opacity = 0;
};

const enter = (el, done) => {
  el.offsetHeight; // Trigger reflow
  el.style.opacity = 1;
  done();
};

const leave = (el, done) => {
  el.style.opacity = 0;
  done();
};
// Function to check if page has been scrolled and set headerScrolled accordingly
const handleScroll = () => {
  const scrollThreshold = 20; // Set the scroll threshold for changing the header background
  headerScrolled.value = window.scrollY > scrollThreshold;
};

onMounted(() => {
  window.addEventListener('scroll', handleScroll);
});

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll);
});
const scrollToTop = () => {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  });
};
</script>
  
  
<style scoped>
.header-background {
  background: #161617;
  z-index: 999;
}
.submenu-enter-active,
.submenu-leave-active {
  opacity: 1;
}

.submenu-enter-to,
.submenu-leave-to {
  opacity: 0;
}

.submenu::before {
  content: '';
  position: absolute;
  top: -12px;
  left: 35px;
  width: 25px;
  height: 25px;
  background: #9b0208;
  transform: rotate(45deg);
  z-index: -2;
}
.active-link::after{
  content: '';
  width: 0%;
  height: 3px;
  background: #9b0208;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.active-link:hover::after {
  width: 50%;
}
.active::after{
  content: '';
  width: 50%;
  height: 3px;
  background: #9b0208;
  display: block;
  margin: auto;
  transition: 0.5s;
}
.active-route::after{
  content: '';
  width: 25%;
  height: 3px;
  background: #9b0208;
  display: block;
  transition: 0.5s;
}
/*=================== Mobile Menu Transition ===============*/
.mobile-nav-enter-active,
.mobile-nav-leave-active {
  transition: 1s ease all;
}

.mobile-nav-enter-from,
.mobile-nav-leave-to {
  transform: translateX(-250px);
}

.mobile-nav-enter-to {
  transform: translateX(0);
}

@media (max-width: 767px) {
  .container {
    flex-wrap: wrap;
  }

  .hidden {
    display: none;
  }

  .lg:flex {
    display: block;
  }

  .lg:w-auto {
    width: auto;
  }

  .lg:h-auto {
    height: auto;
  }

  .lg:static {
    position: static;
  }

  .lg:bg-transparent {
    background-color: transparent;
  }

}

a svg path {
  transition: fill 0.3s ease;
}

a:hover svg path {
  fill: white;
}
</style>

  