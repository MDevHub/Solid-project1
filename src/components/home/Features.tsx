import { For } from "solid-js"
import { darkMode } from "../../layout/ThemeStore"

import Icon1 from "../../assets/icon1.svg"
import Icon2 from "../../assets/icon2.svg"
import Icon3 from "../../assets/icon3.svg"
import Icon4 from "../../assets/icon4.svg"
import Icon5 from "../../assets/icon5.svg"
import Icon6 from "../../assets/icon6.svg"

const featuresData = [
  {
    icon: Icon1,
    title: "Crafted for SaaS",
    desc: "Built with SolidJS for blazing fast performance and reactivity. Everything you need to launch your SaaS faster and smoother.",
  },
  {
    icon: Icon2,
    title: "High-quality Design",
    desc: "Modern, accessible, and lightweight UI components that perfectly match Solid’s simplicity and speed.",
  },
  {
    icon: Icon3,
    title: "SolidJS + TypeScript",
    desc: "Develop confidently with SolidJS and TypeScript the ultimate combo for type-safe, reactive, and maintainable apps.",
  },
  {
    icon: Icon4,
    title: "Sanity Blog and Docs",
    desc: "Manage your content easily with Sanity. Power your Solid app with dynamic blogs, docs, and marketing pages in minutes.",
  },
  {
    icon: Icon5,
    title: "DB, Auth and Stripe",
    desc: "Complete setup with authentication, database integration, and Stripe all wired for Solid’s reactive ecosystem.",
  },
  {
    icon: Icon6,
    title: "Regular Free Updates",
    desc: "Actively maintained and improved to stay aligned with the latest SolidJS features and best practices.",
  },
]

const Features = () => {
  return (
      <div
         id="features"
         data-aos="fade-up"
         data-aos-offset="20"
         data-aos-delay="500"
      >
         <button 
            class={`flex mx-auto font-[500] items-center justify-center px-4 py-2 rounded-full border border-[#ffffff11] ${
               darkMode() ? "bg-[#171d25bb] text-[#F3F4F6]" : "bg-[#EDF5FF]"
            }`}
         >
            SOLID FEATURES
         </button>

         <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold text-center mt-3">
         Core Features of Solid
         </h1>

         <p class="mx-auto text-center md:max-w-[60%] mt-3">
         SolidJS brings unmatched speed and simplicity to your workflow. <br />
         Its fine-grained reactivity lets you build modern, dynamic interfaces with minimal overhead giving you the performance of vanilla JavaScript and the productivity of a modern framework.
         </p>

         <div class="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10">
         <For each={featuresData}>
            {(item) => (
               <div
              class={`rounded-xl border transition-all duration-300 p-6 ${
               darkMode()
                  ? "bg-[#171d25bb] hover:bg-[#1d2633] border-transparent"
                  : "bg-[#fff] border border-[#fff] drop-shadow-sm hover:drop-shadow-lg"
               }`}

               >
               <div class="bg-blue-600 p-4 rounded-xl flex items-center justify-center w-fit mb-6">
                  <img src={item.icon} alt={item.title} class="w-10 h-10" />
               </div>

               <h2 class="text-lg md:text-xl lg:text-2xl font-semibold mb-4">{item.title}</h2>
               <p class="text-sm md:text-base opacity-80 leading-relaxed">{item.desc}</p>
               </div>
            )}
         </For>
         </div>
      </div>
  )
}

export default Features
