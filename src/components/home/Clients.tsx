import { darkMode } from "../../layout/ThemeStore"
import img1 from "../../assets/shaped.svg"
import img2 from "../../assets/shaped2.svg"

const Clients = () => {
   return (
      <div
         class={`mx-auto space-y-6 items-center text-center px-2 md:px-4 py-15 rounded-xl transition-colors duration-300 ${
            darkMode() ? "bg-[#171d25bb]" : "bg-[#EDF5FF]"
         }`}
      >
         <h3 class="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold">Trusted by Developers and <br class="hidden md:block"/> Teams Worldwide.</h3>
         <p class="text-lg md:text-xl">SolidJS powers modern web experiences with incredible speed and reactivity. <br class="hidden md:block"/> From startups to global teams, developers rely on Solid’s fine-grained performance to build reliable, <br class="hidden md:block"/> scalable, and lightning-fast applications.</p>
         <div class="flex flex-wrap items-center justify-center gap-10 md:gap-20 lg:gap-35 mt-8 md:mt-15">
            <div class="space-y-2">
               <h4 class="text-2xl md:text-5xl font-bold">500k</h4>
               <p class="text-lg md:text-xl">Active Developers</p>
            </div>
            <div class="space-y-2">
               <h4 class="text-2xl md:text-5xl font-bold">1M+</h4>
               <p>Project Downloads</p>
            </div>
            <div class="space-y-2">
               <h4 class="text-2xl md:text-5xl font-bold">865</h4>
               <p class="text-lg md:text-xl">Contributions</p>
            </div>
         </div>
      </div>
   )
}

export default Clients