import HeroImg from "../../assets/heroImg.svg"
import HeroImg2 from "../../assets/heroImg2.svg"
import Stat1 from "../../assets/shape1.svg"
import Star2 from "../../assets/shape2.svg"
import { darkMode } from "../../layout/ThemeStore";
const Hero = () => {
  return (
      <div 
         id="home"
         class="block md:flex items-center justify-between gap-20"
      >
         <div class="space-y-3 md:space-y-6 md:max-w-[50%]">
            <h5 
               class={`text-lg md:text-xl font-semibold ${
                  darkMode() ? "text-[#F3F4F6]" : "text-[#1F2937]"
               }`}
            > 
              🔥 Solid – A Complete SaaS Starter Template for SolidJS
            </h5>
            <h1
               class={`text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight ${
                  darkMode() ? "text-[#F3F4F6]" : "text-[#1F2937]"
               }`}
            >
               Robust SaaS Boilerplate <br class="hidden md:block"/>and Starter for <span>SolidJS</span>.
            </h1>
            <p>Packed with all the essential integrations you need for a fast SaaS launch, including authentication, database, blog, UI components, business pages, and more. Built with SolidJS and TypeScript.</p>
            <button
               class={`text-[14px] md:text-lg font-smeibold px-6 py-2 cursor-pointer rounded-full ${
                  darkMode() ? "bg-[#171d25bb] text-[#F3F4F6]" : "bg-[#0d1117] text-[#F3F4F6]"
               }`}
            >Get Started</button>
         </div>

         <div class="mt-10 md:mt-0 relative"> 
            {/* Hero Image */}
            <img
               src={darkMode() ? HeroImg : HeroImg2}
               alt="A dashboard image"
               class="relative z-10 transition-all duration-300"
            />

            {/* Star shapes */}
            <img src={Star2} alt="Star 2" class="absolute bottom-10 right-0  w-5 h-5 md:w-8 md:h-8 z-20" />
            <img src={Stat1} alt="Star 1" class="absolute bottom-0 right-4 w-8 h-8 md:w-10 md:h-10 z-20" />
         </div>
      </div>
   )
}

export default Hero