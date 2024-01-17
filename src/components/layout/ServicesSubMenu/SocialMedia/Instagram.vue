<template>
    <section class="overflow-hidden">
        <div class="xl:flex flex-row-reverse justify-between items-start">
            <div class="w-full relative flex justify-end">
                <div class="xl:p-2 p-8">
                    <!--****** This is for large screen *****-->
                    <div class="xl:block hidden">
                        <h1
                            class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[35pt] uppercase animated-element-subHeadings">
                            Instagram
                        </h1>
                    </div>
                    <!--****** end *****-->
                    <!--****** This is for xl screen *****-->
                    <div class="xl:hidden text-center">
                        <h1
                            class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                            Instagram
                        </h1>
                    </div>
                    <!--****** end *****-->
                    <!--****** This is for large screen *****-->
                    <div
                        class="xl:block hidden md:-mt-[5rem] 2xl:ml-[4rem]  -mt-[2rem] 2xl:pb-8 xl:pb-6 md:pb-14 sm:pb-8 px-6">
                        <h2
                            class="others-text font-bold font-[outline] text-white md:text-[40px] text-[20px] uppercase animated-element-right-second">
                            Instagram Marketing
                        </h2>
                    </div>
                    <!--****** end *****-->
                    <!--****** This is for xl screen *****-->
                    <div class="xl:hidden text-center md:-mt-[4rem] sm:-mt-[3rem] -mt-[2rem] sm:pb-8 pb-4 px-6">
                        <h2
                            class="others-text font-bold font-[outline] text-white md:text-[30px] sm:text-[25px] uppercase animated-element-right-second">
                            Instagram Marketing
                        </h2>
                    </div>
                    <!--****** end *****-->
                    <!--==================================== Left Heading and Paragraph Start ========================== -->
                    <div class="md:px-6 2xl:ml-[4rem] 2xl:w-[60%]">
                        <h1 class="2xl:text-[28px] sm:text-[25px] text-[20px] sm:text-left text-center text-[#f5f5f5]">More
                            Audience Engagement, Tell Your Brand Story Engaging Captions!</h1>
                        <p class="text-[#cccccc] sm:text-[18px]">Instagram is the most popular social media network today.
                            It is a particular hit with Gen Z and millennial so if they're in your target demographic, this
                            platform is ideal for you. American Web Craft experts can craft a fine- tuned campaign that
                            appeals to the Instagram audience and helps you become prominent on this platform.</p>
                    </div>
                    <!--==================================== Left heading and paragraph End ================================ -->
                    <!-- =================================== Bullit Points Area Start ====================================== -->
                    <div class="2xl:ml-[7rem] ml-[3rem] 2xl:py-4 py-2">
                        <ul
                            class="list-outside list-disc sm:text-[22px] text-[#f5f5f5] 2xl:leading-[3rem] leading-[2.5rem]">
                            <li class="text-[#bd0a11]">
                                <span class="text-[#f5f5f5] sm:text-[20px]">Best Hashtags For Right Audience</span>
                            </li>
                            <li class="text-[#bd0a11]">
                                <span class="text-[#f5f5f5] sm:text-[20px]">Advance Content Strategy</span>
                            </li>
                            <li class="text-[#bd0a11]">
                                <span class="text-[#f5f5f5] sm:text-[20px]">Boost Brand Awareness</span>
                            </li>
                        </ul>
                    </div>
                    <!-- =================================== Bullit Points Area End ====================================== -->
                    <!-- =================================== Get Started Button Start ====================================== -->
                    <div @click="scrollToPackages"
                        class="hover-btn bg-gradient-to-r md:w-[25%] sm:w-[50%] 2xl:ml-[5rem] ml-[1.5rem] from-[#9d0208] bg-[#601417] border-r-[#601417] p-2 sm:px-5 rounded-lg text-[white] font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417] text-center">
                        <div class="uppercase">
                            Get Started
                        </div>
                    </div>
                    <!-- =================================== Get Started Button End ======================================== -->

                </div>
                <!--================================== Left red Line Start =============================== -->
                <div
                    class="absolute 2xl:top-[10.2rem] xl:top-[8.8rem] lg:top-[9.5rem] sm:top-[9rem] top-[5.5rem] bg-[#9d0208] xl:w-full w-1/2 h-1 animated-element-right-second">
                </div>
                <!--================================== Left red Line End =============================== -->
            </div>
            <!-- ===================================== Right Column Start ======================================= -->
            <div class="w-full relative">
                <div
                    class="left-column-bg absolute 2xl:top-28 xl:top-[5rem] left-0 2xl:w-[800px] xl:w-[400px] 2xl:h-[400px] w-[100%] xl:h-[350px] md:h-[400px] h-[200px]">
                </div>
                <div class="relative 2xl:mt-[9%] xl:mt-[2%] 2xl:ml-[30%] flex justify-center">
                    <div class="">
                        <div class="2xl:w-[600px] md:w-[500px] w-[280px] 2xl:h-[450px] md:h-[350px] h-[200px]">
                        </div>
                        <div class="absolute top-0 2xl:w-[600px] 2xl:h-[450px] md:w-[600px] w-[280px]">
                            <img class="" src="@/assets/images/Services/SocialMedia/img2.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="flex justify-start 2xl:mt-[15%] mt-[25%]">
                    <div class=" bg-[#9d0208] md:w-[60%] w-[40%] h-1 animated-element-left"></div>
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
<style scoped>.left-column-bg {
    background-color: rgba(191, 19, 19, 0.1);
}</style>