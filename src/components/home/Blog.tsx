import { For } from "solid-js"
import { darkMode } from "../../layout/ThemeStore"
import Img1 from "../../assets/blog1.webp"
import Img2 from "../../assets/blog2.webp"
import Img3 from "../../assets/blog3.webp"

const blogs = [
   {
      image: Img1,
      title: "The Future of Reactive UI",
      desc: "SolidJS brings fine-grained reactivity that eliminates virtual DOM overhead, making your apps lightning fast and predictable.",
   },
   {
      image: Img2,
      title: "Why Developers Love SolidJS",
      desc: "Developers are switching to SolidJS for its simplicity, direct reactivity, and unmatched performance across large-scale apps.",
   },
   {
      image: Img3,
      title: "Optimizing Performance with Signals",
      desc: "Learn how SolidJS signals update your UI instantly without re-rendering entire components, resulting in smoother user experiences.",
   },
]

const Blog = () => {
  return (
      <div id="blog" data-aos="fade-up" data-aos-offset="20" data-aos-duration="900" class="py-10">
         <button
         class={`flex uppercase mx-auto font-[500] items-center justify-center px-4 py-2 rounded-full border border-[#ffffff11] transition-colors duration-300 ${
            darkMode() ? "bg-[#171d25bb] text-[#F3F4F6]" : "bg-[#EDF5FF]"
         }`}
         >
         News and blogs
         </button>

         <h2 class="mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
         Latest News & Blogs
         </h2>

         <p class="mt-5 text-center text-lg md:text-xl">
         SolidJS continues to redefine frontend development with its fine-grained reactivity,
         delivering <br class="hidden lg:block" /> seamless performance and developer experience.
         </p>

         {/* Blog cards grid */}
         <div class="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            <For each={blogs}>
               {(blog) => (
                  <div
                  class={`rounded-xl overflow-hidden border transition-all duration-300 ${
                     darkMode()
                        ? "bg-[#171d25bb] border-transparent hover:bg-[#1d2633]"
                        : "bg-white border border-[#f3f3f3] hover:drop-shadow-lg"
                  }`}
                  >
                  <div class="overflow-hidden">
                     <img
                        src={blog.image}
                        alt={blog.title}
                        class="w-full cursor-pointer h-56 object-cover transition-transform duration-500 ease-in-out hover:scale-110"
                     />
                  </div>
                  <div class="p-6">
                     <h3 class="text-xl font-semibold mb-3">{blog.title}</h3>
                     <p class="text-[15px] opacity-80 leading-relaxed">{blog.desc}</p>
                  </div>
                  </div>
               )}
            </For>
         </div>
      </div>
  )
}

export default Blog
