import { createSignal, For } from "solid-js"
import { ArrowRight, Plus, Minus } from "lucide-solid"
import { darkMode } from "../../layout/ThemeStore"

interface FaqItem {
   question: string
   answer: string
}

const Faq = () => {
   const [activeIndex, setActiveIndex] = createSignal<number | null>(null)

   const faqs: FaqItem[] = [
      {
         question: "What makes SolidJS different from React?",
         answer:
            "SolidJS uses fine-grained reactivity instead of a virtual DOM. This means updates happen exactly where needed, making it faster and more efficient than virtual DOM-based frameworks.",
      },
      {
         question: "Is SolidJS production ready?",
         answer:
            "Yes, SolidJS is fully production ready and used by companies and developers worldwide for building performant web applications.",
      },
      {
         question: "Can I use my existing React knowledge in SolidJS?",
         answer:
            "Absolutely. SolidJS uses JSX and component-based architecture similar to React, so React developers will find it easy to adapt.",
      },
   ]

   const toggle = (index: number) => {
      setActiveIndex(activeIndex() === index ? null : index)
   }

   return (
      <div class="flex flex-col lg:flex-row justify-between gap-10 py-12">
         {/* Left Section */}
         <div data-aos="fade-right" data-aos-offset="20" data-aos-duration="700" class="lg:w-1/2">
            <p class="uppercase tracking-wide text-sm font-medium mb-2">
               OUR FAQS
            </p>
            <h1 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold leading-tight">
               Frequently Asked <br class="hidden md:block" /> Questions
            </h1>

            <a
               href="#"
               class="mt-6 inline-flex items-center gap-2 font-semibold group transition-all duration-300 ease-in-out hover:text-blue-500"
            >
               Know More
               <ArrowRight
                  class="transition-transform duration-300 ease-in-out group-hover:translate-x-2 group-hover:text-blue-500"
                  size={20}
               />
            </a>
         </div>

         {/* Right Section - Accordion */}
         <div
            data-aos="fade-left"
            data-aos-offset="20"
            data-aos-duration="700"
            class="lg:w-1/2 space-y-4 text-left"
         >
            <For each={faqs}>
               {(faq, index: () => number) => (
                  <div
                     class={`rounded-lg border ${
                        darkMode() ? "border-[#2a2f38]" : "border-[#dbe3f1]"
                     } overflow-hidden transition-all duration-300`}
                  >
                     <button
                        class="w-full flex justify-between items-center p-4 font-semibold text-left focus:outline-none"
                        onClick={() => toggle(index())}
                     >
                        <span>{faq.question}</span>
                        {activeIndex() === index() ? (
                           <Minus
                              size={20}
                              class="text-blue-500 transition-all cursor-pointer "
                           />
                        ) : (
                           <Plus
                              size={20}
                              class="text-blue-500 transition-all cursor-pointer"
                           />
                        )}
                     </button>

                     <div
                        class={`transition-all duration-500 ease-in-out overflow-hidden ${
                           activeIndex() === index()
                              ? "max-h-40 p-4 pt-0 opacity-100"
                              : "max-h-0 opacity-0"
                        }`}
                     >
                        <p class="text-sm leading-relaxed">{faq.answer}</p>
                     </div>
                  </div>
               )}
            </For>
         </div>
      </div>
   )
}

export default Faq
