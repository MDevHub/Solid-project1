import { For } from "solid-js"
import { darkMode } from "../../layout/ThemeStore"
import brand1 from "../../assets/brandI.svg"
import brand2 from "../../assets/brandII.svg"
import brand3 from "../../assets/brandIII.svg"
import brand4 from "../../assets/brandIIII.svg"
import brand5 from "../../assets/brandIIIII.svg"
import brand6 from "../../assets/brandIIIIII.svg"

const brands = [brand1, brand2, brand3, brand4, brand5, brand6]

const Integration = () => {
   return (
      <div id="integration" class="relative overflow-hidden">
         {/* Background blobs */}
         <div class="absolute -bottom-20 right-10 w-50 h-50 bg-cyan-500/25 blur-[110px] rounded-full"></div>

         {/* Section Header */}
         <button
            class={`flex uppercase mx-auto font-[500] items-center justify-center px-4 py-2 rounded-full border border-[#ffffff11] transition-colors duration-300 ${
               darkMode() ? "bg-[#171d25bb] text-[#F3F4F6]" : "bg-[#EDF5FF]"
            }`}
         >
            Integrations
         </button>

         <h2 class="mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
            Packed with all the key <br class="hidden sm:block" /> integrations you need
         </h2>

         <p class="mt-5 text-center text-lg md:text-xl">
            SolidJS’s identity revolves around reactivity and fine-grained signals, <br class="hidden sm:block" />
            data flowing between connected nodes.
         </p>

         {/* Logos Section */}
         <div class="relative z-10 mt-16 flex flex-wrap justify-center gap-8 md:gap-14 lg:gap-20 px-4">
            <For each={brands}>
               {(brand, i) => (
                  <div
                     class={`p-5 rounded-xl flex items-center justify-center transition-all duration-300 ${
                        darkMode()
                           ? "bg-[#171d25bb]"
                           : "bg-[#EDF5FF] shadow-md shadow-[#00000011]"
                     }`}
                     style={{
                        transform: `rotate(${i() % 2 === 0 ? 2 : -2}deg) translateY(${i() % 3 === 0 ? "-10px" : "10px"})`,
                     }}
                  >
                     <img
                        src={brand}
                        alt={`Integration ${i() + 1}`}
                        class="w-15 sm:w-20 md:w-25 lg:w-28 h-auto object-contain"
                     />
                  </div>
               )}
            </For>
         </div>
      </div>
   )
}

export default Integration
