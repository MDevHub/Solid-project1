import Img from "../../assets/saas1.png"
import Img2 from "../../assets/saas1d.png"
import { darkMode } from "../../layout/ThemeStore"

const Sol1 = () => {
   return (
      <div class="lg:flex justify-between gap-10 md:gap-20">
         <div class="mb-10 md:mb-0"
            data-aos="fade-right"
            data-aos-offset="20"
            data-aos-delay="300"
         >
            <img
               src={darkMode() ? Img2 : Img}
               alt="A dashboard image"
               class="h-auto w-full md:mx-auto lg:mx-0 md:h-[350px] md:w-max lg:h-[500px] lg:w-auto transition-transform duration-300"
            />
         </div>
         
         <div class="w-full lg:max-w-[50%] space-y-6"
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-delay="300"
         >
            <div class="flex gap-2 sm:gap-5 items-center">
               <button class="bg-green-500 px-4 py-1 rounded-full">New</button>
               <p class="uppercase" >SaaS Boilerplate for Solidjs</p>
            </div>
            <h3 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">A Complete Solution for <br class="hidden lg:block"/> SaaS Startups</h3>
            <p class="">Build your next SaaS fast with the power of Solid.js lightweight, reactive, and blazing fast. This boilerplate includes all the essentials you need to launch confidently.</p>

            <div class="space-y-4">
               <div class="flex gap-3 md:gap-5 items-center">
                  <div 
                     class={`px-5 py-4 rounded-full border border-[#ffffff11] transition-colors duration-300 ${
                        darkMode() ? "bg-[#171d25bb]  text-[#F3F4F6]" : "bg-[#EDF5FF] shadow drop-shadow-sm"
                     }`}
                  >
                     <p class="text-lg font-semibold">01</p>
                  </div>
                  <div class="space-y-2">
                     <h4 class="font-semibold text-lg md:text-xl">Email & Notifications</h4>
                     <p>Pre-integrated setup for Mailchimp newsletters and SMTP transactional emails. Easily customize and automate your communication flow</p>
                  </div>
               </div>

                <div class="flex gap-3 md:gap-5 items-center">
                  <div 
                     class={`px-5 py-4 rounded-full border border-[#ffffff11] transition-colors duration-300 ${
                        darkMode() ? "bg-[#171d25bb]  text-[#F3F4F6]" : "bg-[#EDF5FF] shadow drop-shadow-sm"
                     }`}
                  >
                     <p class="text-lg font-semibold">02</p>
                  </div>
                  <div class="space-y-2">
                     <h4 class="font-semibold text-lg md:text-xl">Modern Stack</h4>
                     <p>Crafted with Solid.js, TypeScript, and modern UI patterns optimized for speed and scalability.</p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   )
}

export default Sol1