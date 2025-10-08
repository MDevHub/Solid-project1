import { darkMode } from "../../layout/ThemeStore"
import Img1 from "../../assets/join.webp"
import { ArrowRight } from "lucide-solid"


const Join = () => {
  return (
    <div
      class={`md:flex items-center justify-between gap-10 px-4 py-12 rounded-xl transition-colors duration-300 ${
        darkMode() ? "bg-[#171d25bb]" : "bg-[#EDF5FF]"
      }`}
    >
      {/* Left - Text */}
      <div class="space-y-4">
         <h2 class="text-xl sm:text-2xl lg:text-3xl xl:text-4xl font-bold leading-tight">
            Try Solid JS Today and <br class="hidden md:block" />
            Increase your productivity <br class="hidden md:block" />
            with Fine Grained Reactivity
         </h2>
        <p class="text-base md:text-lg text-gray-600 dark:text-gray-300">
          Experience lightning-fast rendering and true  <br />reactivity built for modern web apps.
        </p>
      </div>

      {/* Middle - Image (hidden on md and below) */}
      <div class="hidden lg:flex justify-center h-max">
        <img
          src={Img1}
          alt="Productivity Illustration"
          class="w-full max-w-[320px] h-auto object-contain"
        />
      </div>

      {/* Right - Button */}
      <div class="flex justify-baseline mt-3 md:mt-0 lg:justify-end">
            <a
               href="#"
               class={`inline-flex px-4 py-2 rounded-full items-center gap-2  dark:hover:text-gray-500 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out ${
               darkMode()
               ? "bg-[#2563EB] text-white"
               : "bg-[#0d1117] text-white "
            }`}   
         >
         Try It Now
            <ArrowRight
            class="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-blue-500"
            size={20}
            />
         </a>     
      </div>
    </div>
  )
}

export default Join
