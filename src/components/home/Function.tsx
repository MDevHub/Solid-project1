import { createSignal } from "solid-js"
import { For } from "solid-js"
import { darkMode } from "../../layout/ThemeStore"
import Img1 from "../../assets/featuresd1.svg"
import Img2 from "../../assets/featuresl1.webp"

const featureContent = [
   {
      sub: "Clean User Interface",
      title: "Solid UI with Solid Features.",
      desc1:
         "SolidJS’s declarative syntax and reactivity make UI building effortless. Build fast, clean, and scalable interfaces with reusable components.",
      desc2:
         "Enjoy a seamless developer experience with minimal boilerplate and maximum control.",
   },
   {
      sub: "Essential Business Pages",
      title: "Pages and UI Components You Need for a SaaS.",
      desc1:
         "Everything your SaaS needs home, pricing, about, blog, and dashboard pages ready to use out of the box.",
      desc2:
         "Easily customize each section to match your product’s tone and identity.",
   },
   {
      sub: "Fully Functional Integrations",
      title: "Functional Blog, DB, Auth and Many More",
      desc1:
         "Integrated solutions for authentication, database, and Stripe perfectly wired to work in a SolidJS environment.",
      desc2:
         "Focus more on growth, less on setup. It’s all built to launch fast.",
   },
]

const Function = () => {
  const [active, setActive] = createSignal(0)

  return (
      <div>
         {/* Top feature navigation */}
         <div
         class={`lg:flex mx-auto items-center justify-between lg:px-4 py-2 rounded-xl border border-[#ffffff11] transition-colors duration-300 ${
            darkMode() ? "bg-[#171d25bb]" : "bg-[#EDF5FF]"
         }`}
         >
         <For each={featureContent}>
            {(item, index) => (
               <div
                  class={`px-4 lg:px-0 flex gap-5 items-center cursor-pointer border-b-3 transition-all duration-300 ${
                     active() === index()
                        ? "border-blue-600"
                        : "border-transparent hover:border-blue-400"
                  }`}
                  onClick={() => setActive(index())}
               >
                  <div
                     class={`mb-3 lg:mb-0 px-4 py-3 rounded-full border border-[#ffffff11] transition-colors duration-300 ${
                        darkMode()
                        ? "bg-[#171d25bb] text-[#F3F4F6]"
                        : "bg-[#EDF5FF] shadow drop-shadow-sm"
                     }`}
                  >
                     <p class="text-lg font-semibold">{`0${index() + 1}`}</p>
                  </div>
                  <span class="font-semibold text-[16px] sm:text-lg md:text-xl">{item.sub}</span>
               </div>
            )}
         </For>
         </div>

         {/* Content + Image */}
         <div class="flex flex-col lg:flex-row justify-center items-center gap-20 mt-12">
            <div class="w-full lg:max-w-[45%] space-y-6 order-2 lg:order-1">
               <h2 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
                  {featureContent[active()].title}
               </h2>
               <p>{featureContent[active()].desc1}</p>
               <p>{featureContent[active()].desc2}</p>
            </div>

            <div class="order-1 lg:order-2 hidden lg:block">
               <img
                  src={darkMode() ? Img1 : Img2}
                  alt="A SaaS startup illustration"
                  class="h-auto w-full md:mx-auto lg:mx-0 md:h-[350px] lg:h-[500px] object-contain transition-transform duration-300"
               />
            </div>
         </div>
      </div>
  )
}

export default Function
