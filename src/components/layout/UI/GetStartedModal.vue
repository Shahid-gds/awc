<template>
    <transition name="slide-fade">
      <div v-if="isVisible" class="modal-container" @click="closeModalOnOverlayClick">
        <div class="modal-content 2xl:w-1/2 md:w-[65%] w-[90%] sm:p-8 p-4 mt-[4.5rem] relative 2xl:py-10">
          <div @click="closeModal"
            class="sm:w-[45px] sm:h-[45px] w-[40px] h-[40px] text-center sm:py-1 py-1 text-[22px] font-bold text-white bg-gradient-to-r from-[#9d0208] bg-[#601417] rounded-full absolute -top-3 -right-3 cursor-pointer">
            &#x2715</div>
          <div class="flex justify-center p-2">
            <img class="w-[200px]" src="@/assets/images/headerLogo.png" alt="">
          </div>
          <div class="text-center">
            <h1 class="outline 2xl:text-[40pt] lg:text-[35pt] text-[28pt] uppercase">
              American
            </h1>
          </div>
          <div class="text-center 2xl:-mt-[3rem] -mt-[2rem]">
            <h2 class="others-text text-white 2xl:text-[25px] text-[20px] font-bold uppercase">
              How we work
            </h2>
          </div>
          <div class="flex justify-center pb-3">
            <div class="h-1.5 w-[20%] bg-[#9d0208]"></div>
          </div>
          <div class=" sm:p-2 text-center xl:px-12 text-[#626262] 2xl:pb-8 pb-3 font-[graphik-regular]">
            <p>Fill out the form below for a fruitful collaboration, and to accomplish your dreams
              and goals. One of our experts will get in touch with you soon.</p>
          </div>
          <div>
            <form @submit.prevent="submitForm">
              <div class="w-full">
                <div class="lg:flex lg:space-x-6 2xl:pb-3 inputs">
                  <div class="w-full pb-4">
                    <input
                      class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 2xl:p-4 p-2.5 px-8  border-[#404141]"
                      type="text" placeholder="Enter Your Name" v-model="formData.name" required>
                  </div>
                  <div class="w-full pb-4">
                    <input
                      class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 2xl:p-4 p-2.5 px-8  border-[#404141]"
                      type="email" placeholder="Enter Your Email Address" v-model="formData.email" required>
                  </div>
                </div>
                <div class="lg:flex lg:space-x-6 2xl:pb-3 inputs">
                  <div class="w-full pb-4">
                    <input
                      class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 2xl:p-4 p-2.5 px-8  border-[#404141]"
                      type="text" placeholder="Enter Your Phone Number" v-model="formData.phone" required>
                  </div>
                  <div class="w-full pb-4">
                    <input
                      class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 2xl:p-4 p-2.5 px-8  border-[#404141]"
                      type="text" placeholder="Enter Your Company Name" v-model="formData.company" required>
                  </div>
                </div>
                <div class="sm:pb-4 pb-2">
                  <textarea
                    class="w-full 2xl:h-36 h-28 rounded-xl placeholder-[#5d5d5d] text-white border-2 lg:p-4 p-2.5 px-8  border-[#404141]"
                    name="" id="" cols="" rows="5" placeholder="Type Your Message Here..."
                    v-model="formData.message"></textarea>
                </div>
                <div class="flex justify-center 2xl:pb-3">
                  <button type="submit" :disabled="loading"
                    class="hover-btn sm:w-[30%] bg-gradient-to-r from-[#9d0208] bg-[#601417] p-3 uppercase font-bold rounded-lg text-white hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417]">
                    {{ loading ? 'Sending...' : 'Sign-Up' }}
                  </button>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    </transition>
  </template>
    
  <script setup>
  import { ref, defineProps, defineEmits, onMounted, onUnmounted } from 'vue';
  import axios from 'axios';
  
  
  const props = defineProps(['isVisible']);
  
  const emit = defineEmits();
  
  const closeModal = () => {
    emit('close');
  };
  
  const closeModalOnOverlayClick = (event) => {
    if (event.target.classList.contains('modal-container')) {
      closeModal();
    }
  };
  // const baseUrl = 'http://localhost:3000'
  const baseUrl = 'https://fancy-newt-top-hat.cyclic.app'
  const formData = ref({
    name: '',
    email: '',
    phone: '',
    company: '',
    message: ''
  });
  const loading = ref(false);
  
  const submitForm = async () => {
    try {
      loading.value = true;
  
      // Make a POST request to your backend API with the full URL
      const response = await axios.post(`${baseUrl}/get-started`, formData.value);
  
      console.log('Server Response:', response.data);
  
      // Reset the form and close the modal after successful submission
      formData.value = {
        name: '',
        email: '',
        phone: '',
        company: '',
        message: ''
      };
  
      closeModal();
    } catch (error) {
      console.error('Error submitting form:', error.message); // Log the error message
      console.error('Error details:', error.response); // Log the detailed response (if available)
    } finally {
      loading.value = false;
    }
  };
  
  </script>
    
  <style scoped>
  .modal-content {
    background-image: url('../../../assets/images/ContactUs/bgs/modalBg.png');
    background-size: 100% 100%;
    background-position: center;
    background-repeat: no-repeat;
  }
  
  .modal-container {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    align-items: center;
    justify-content: center;
    z-index: 999;
  }
  
  .slide-fade-enter-active {
    transition: all 0.3s ease-out;
  }
  
  .slide-fade-leave-active {
    transition: all 0.8s cubic-bezier(1, 0.5, 0.8, 1);
  }
  
  .slide-fade-enter-from,
  .slide-fade-leave-to {
    transform: translateY(20px);
    opacity: 0;
  }
  
  textarea {
    resize: none;
  }
  
  input,
  textarea {
    background-color: rgba(15, 14, 14, 0.5);
  }
  
  @media (max-width:768px) {
    .modal-content {
      background-image: url('../../../assets/images/ContactUs/bgs/modalBg.png');
      background-size: cover;
      background-position: center;
      background-repeat: no-repeat;
      border-radius: 20px;
    }
  }</style>
    