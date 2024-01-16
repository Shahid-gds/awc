<template>
  <section class="bg">
    <!-- this is our get in touch Section -->
    <div class="">
     <div class="sm:flex">
       <div class="w-full">
         <div class="">
           <div class="text-center">
             <h1
               class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
               contact
             </h1>
           </div>
           <div class="text-center md:-mt-[5rem] -mt-[2rem]">
             <h2 class="others-text text-white md:text-[40px] text-[20px] uppercase animated-element-right-second">
              GET IN TOUCH
             </h2>
           </div>
         </div>
         <div class="flex justify-end">
           <div class=" bg-[#9d0208] w-[50%] h-1 animated-element-right-second sm:mt-3 mt-1.5"></div>
         </div>
       </div>
       
       </div>
       <div class="text-center flex justify-center w-full sm:text-[18px] text-white sm:py-4 py-2 pb-10">
         <div class="px-6 text-[#dcdcdc] sm:block hidden">
           <div class="sm:text-xl">Tried of seeing everyone <span class="text-white font-bold">forcefully</span> sell <span class="text-white font-bold">themselves to your?</span></div>
           <div class="sm:text-xl">Annoyed with spam calls and last min <span class="text-white font-bold">excuses from agencies?</span></div>
         </div>
         <div class="px-6 sm:hidden">
           <div class="sm:text-xl">Tried of seeing everyone forcefully sell themselves to your?
           Annoyed with spam calls and last min excuses from agencies?</div>
         </div>
       </div>
       <div class="sm:flex justify-center container mx-auto xl:px-[10rem] px-6">
         <form class="w-full" @submit.prevent="submitForm">
           <div class="lg:flex lg:space-x-6 pb-4 inputs">
             <div class="w-full pb-4">
               <input
                 class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 p-4 px-8  border-[#404141]"
                 type="text" placeholder="Enter Your Name" required v-model="formData.name">
             </div>
             <div class="w-full pb-4">
               <input
                 class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 p-4 px-8  border-[#404141]"
                 type="email" placeholder="Enter Your Email Address" required v-model="formData.email">
             </div>
             <div class="w-full">
               <input
                 class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 p-4 px-8  border-[#404141]"
                 type="text" placeholder="Enter Your Phone Number" required v-model="formData.phone">
             </div>
           </div>
           <div>
             <textarea
               class="w-full rounded-xl placeholder-[#5d5d5d] text-white border-2 p-4 px-8  border-[#404141]"
               name="" id="" cols="" rows="5" placeholder="Type Your Message Here..." v-model="formData.message"></textarea>
           </div>
         </form>
       </div>
     <div class="lg:block hidden">
       <div class="lg:flex py-10 space-x-4">
         <div class="w-[40%] h-1 mt-3 bg-[#9d0208] animated-element-left"></div>
         <div class="lg:flex lg:w-full space-x-20 px-6">
           <div class="w-full text-[#a9a9a9]">
             <span>Well worry not, fill out our form and</span> <span class="font-bold text-white">our digital expert will connect with you within 24 hours for your
               digital markiting emergency!</span> <span> Fill out our form and find out for yourself if</span> <span class="font-bold text-white">we’re truly the dream team that
                 you are looking for.</span>
           </div>
           <div class="lg:w-full">
             <button type="submit" :disabled="loading" @click="submitForm"
               class="hover-btn bg-gradient-to-r 2xl:w-[290px] xl:w-[240px] w-[260px] text-center from-[#9d0208] bg-[#601417] border-r-[#601417] p-4 rounded-lg text-[white] font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
               <div class="uppercase">
                {{ loading ? 'Sending...' : 'GET FREE CONSULTANCY' }}
               </div>
             </button>
           </div>
         </div>
       </div>
     </div>
     <div class="lg:hidden">
       <div class="lg:flex py-6">
         <div class="lg:w-full flex justify-center">
           <button type="submit" :disabled="loading" @click="submitForm"
             class="hover-btn bg-gradient-to-r w-[250px] text-center from-[#9d0208] bg-[#601417] border-r-[#601417] p-4 rounded-lg text-[white] sm:font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417]">
             <div class="uppercase">
              {{ loading ? 'Sending...' : 'GET FREE CONSULTANCY' }}
             </div>
           </button>
         </div>
         <div class="w-[40%] h-1 sm:mt-6 mt-4 bg-[#9d0208] animated-element-left"></div>
        <div class="lg:flex lg:w-full space-x-20 px-6 sm:py-4 py-2">
           <div class="w-full text-[#a9a9a9]">
             <span>Well worry not, fill out our form and</span> <span class="font-bold text-white">our digital expert will connect with you within 24 hours for your
               digital markiting emergency!</span> <span> Fill out our form and find out for yourself if</span> <span class="font-bold text-white">we’re truly the dream team that
                 you are looking for.</span>
           </div>
         
         </div>
       </div>
     </div>
     </div>
  </section>
</template>
<script setup>
import { ref } from 'vue';
import axios from 'axios';
const formData = ref({
  name: '',
  email: '',
  phone: '',
  message: ''
});
const loading = ref(false);
  // const baseUrl = 'http://localhost:3000'
  const baseUrl = 'https://fancy-newt-top-hat.cyclic.app'
const submitForm = async () => {
  try {
    loading.value = true;

    // Make a POST request to your backend API with the full URL
    const response = await axios.post(`${baseUrl}/get-in`, formData.value);

    console.log('Server Response:', response.data);

    // Reset the form and close the modal after successful submission
    formData.value = {
      name: '',
      email: '',
      phone: '',
      message: ''
    };

  } catch (error) {
    console.error('Error submitting form:', error.message); // Log the error message
    console.error('Error details:', error.response); // Log the detailed response (if available)
  } finally {
    loading.value = false;
  }
};
</script>
<style scoped>
textarea {
   resize: none;
 }
 input, textarea {
    background-color:  rgba(3, 0, 0, 0.5);
 }
</style>