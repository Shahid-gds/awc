<template>
    <section class="overflow-hidden xl:py-[5rem] py-[3rem]">
        <div class="xl:flex flex-row-reverse justify-between items-start">
            <div class="w-full relative flex justify-end">
                <div class="xl:p-2 p-8">
                    <!--****** This is for large screen *****-->
                    <div class="xl:block hidden">
                        <h1
                            class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[35pt] uppercase animated-element-subHeadings">
                            Blogs
                        </h1>
                    </div>
                    <!--****** end *****-->
                    <!--****** This is for xl screen *****-->
                    <div class="xl:hidden text-center">
                        <h1
                            class="outline 2xl:text-[80pt] xl:text-[70pt] lg:text-[60pt] md:text-[55pt] sm:text-[50pt] text-[28pt] uppercase animated-element-subHeadings">
                            Blogs
                        </h1>
                    </div>
                    <!--****** end *****-->
                    <!--****** This is for large screen *****-->
                    <div
                        class="xl:block hidden md:-mt-[4rem] 2xl:ml-[4rem]  -mt-[2rem] 2xl:pb-8 xl:pb-6 md:pb-14 sm:pb-8 px-6">
                        <h2
                            class="others-text font-bold font-[outline] text-white md:text-[30px] text-[20px] uppercase animated-element-right-second">
                            Blogs Writing
                        </h2>
                    </div>
                    <!--****** end *****-->
                    <!--****** This is for xl screen *****-->
                    <div class="xl:hidden text-center md:-mt-[4rem] sm:-mt-[3rem] -mt-[2rem] sm:pb-8 pb-4 px-6">
                        <h2
                            class="others-text font-bold font-[outline] text-white md:text-[30px] sm:text-[25px] uppercase animated-element-right-second">
                            Blogs Writing
                        </h2>
                    </div>
                    <!--****** end *****-->
                    <!--==================================== Left Heading and Paragraph Start ========================== -->
                    <div class="md:px-6 2xl:ml-[4rem] 2xl:w-[60%]">
                        <h1 class="2xl:text-[28px] sm:text-[25px] text-[20px] sm:text-left text-center text-[#f5f5f5]">Blog
                            Writing - Writing Blogs For More Business!</h1>
                        <p class="text-[#cccccc] sm:text-[18px]">Boost website traffic, establish your brand as the industry
                            leader, and generate more leads with our blog writing service. Our writers delve into your
                            business, analyze competitors, and conduct keyword research to create SEO- friendly content.
                            Choosing American Web Craft ensures fresh, engaging posts that enhance your search engine
                            ranking, making the reading experience enjoyable for both your audience and search engines..</p>
                    </div>
                    <!--==================================== Left heading and paragraph End ================================ -->
                    <!-- =================================== Bullit Points Area Start ====================================== -->
                    <div class="2xl:ml-[7.5rem] xl:ml-[4rem] ml-[1.5rem] 2xl:py-4 py-2">
                        <ul
                            class="list-outside list-disc sm:text-[22px] text-[#f5f5f5] 2xl:leading-[3rem] leading-[2.5rem]">
                            <li class="text-[#bd0a11]">
                                <span class="text-[#f5f5f5] sm:text-[20px]">Keyword Research</span>
                            </li>
                            <li class="text-[#bd0a11]">
                                <span class="text-[#f5f5f5] sm:text-[20px]">Guaranteed Unique</span>
                            </li>
                            <li class="text-[#bd0a11]">
                                <span class="text-[#f5f5f5] sm:text-[20px]">Keywords Search</span>
                            </li>
                        </ul>
                    </div>
                    <!-- =================================== Bullit Points Area End ====================================== -->
                    <!-- =================================== Get Started Button Start ====================================== -->
                    <div @click="scrollToPackages"
                        class="hover-btn bg-gradient-to-r md:w-[25%] sm:w-[50%] md:ml-[4rem] from-[#9d0208] bg-[#601417] border-r-[#601417] p-2 sm:px-5 rounded-lg text-[white] font-bold cursor-pointer hover:bg-gradient-to-l hover:from-[#9d0208] hover:bg-[#601417] hover:border-r-[#601417] text-center">
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
                    class="left-column-bg absolute 2xl:top-20 left-0 2xl:w-[600px] xl:w-[400px] xl:h-[437px] w-[100%] md:h-[450px] h-[250px]">
                </div>
                <div class="relative 2xl:mt-[9%] mt-[5%] 2xl:ml-[30%] flex justify-center">
                    <div class="">
                        <div
                            class="bg-[#9d0208] 2xl:w-[600px] md:w-[500px] w-[280px] 2xl:h-[450px] md:h-[350px] h-[200px] section-img-bg">
                        </div>
                        <div class="absolute top-0 2xl:w-[600px] 2xl:h-[450px] md:w-[500px] w-[280px] section-img">
                            <img class="" src="@/assets/images/Services/ContentWriting/img2.svg" alt="">
                        </div>
                    </div>
                </div>
                <div class="flex justify-start 2xl:mt-[10%] mt-[18%]">
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
<style scoped>
.left-column-bg {
    background-color: rgba(191, 19, 19, 0.1);
}

.section-img {
    transform: rotate(390deg);
}

.section-img-bg {
    transform: rotate(380deg);
}</style>