import Img from "../../assets/saas2.svg"
import Img2 from "../../assets/saas2d.svg"
import { darkMode } from "../../layout/ThemeStore"
import { ArrowRight } from "lucide-solid"

const Sol2 = () => {
  return (
    <div class="flex flex-col-reverse lg:flex-row items-center justify-between gap-10 md:gap-20 overflow-hidden">
      {/* Left text section */}
      <div
        class="w-full lg:max-w-[50%] space-y-6 order-2 lg:order-1"
        data-aos="fade-right"
        data-aos-delay="300"
      >
        <p class="uppercase tracking-wide text-sm font-medium ">
          Launch your SaaS fast
        </p>

        <h3 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
          Packed with All <br class="hidden lg:block" /> Essential Integrations
        </h3>

        <p class="">
          Build your next SaaS fast with the power of Solid.js lightweight,
          reactive, and blazing fast. This boilerplate includes all the essentials
          you need to launch confidently.
        </p>

         <a
            href="#"
            class="inline-flex items-center gap-2  dark:hover:text-blue-500 hover:text-blue-500 font-semibold group transition-all duration-300 ease-in-out"
         >
          Know More
          <ArrowRight
            class="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-blue-500"
            size={20}
          />
        </a>
      </div>

      {/* Right image section */}
      <div
        class="mb-5 md:mb-0 order-1 lg:order-2"
        data-aos="fade-left"
        data-aos-delay="300"
      >
         <img
            src={darkMode() ? Img2 : Img}
            alt="A SaaS startup illustration"
            class="h-auto w-full md:mx-auto lg:mx-0 md:h-[350px] lg:h-[500px] object-contain transition-transform duration-300"
         />
      </div>
    </div>
  )
}

export default Sol2
