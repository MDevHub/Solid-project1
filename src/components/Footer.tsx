import type { Component } from "solid-js"
import { Facebook, Twitter, Linkedin } from "lucide-solid"

const Footer: Component = () => {
  return (
    <footer class="mt-10 md:mt-20 py-8 px-6 border-t border-[#ffffff11] flex flex-col lg:flex-row items-center justify-between gap-5 text-sm text-center lg:text-left">
      {/* Left Section */}
      <div class="flex flex-row items-center gap-3 sm:gap-6">
        <a href="#" class="hover:underline">English</a>
        <a href="#" class="hover:underline">Privacy Policy</a>
        <a href="#" class="hover:underline">Support</a>
      </div>

      {/* Middle Section */}
      <p class="text-center lg:text-center opacity-80">
        © {new Date().getFullYear()} Solid SaaS. All rights reserved.
      </p>

      {/* Right Section */}
      <div class="flex items-center justify-center gap-5">
        <a href="#" aria-label="Facebook" class="hover:text-blue-500 transition-colors duration-300">
          <Facebook size={18} />
        </a>
        <a href="#" aria-label="Twitter" class="hover:text-sky-400 transition-colors duration-300">
          <Twitter size={18} />
        </a>
        <a href="#" aria-label="LinkedIn" class="hover:text-blue-600 transition-colors duration-300">
          <Linkedin size={18} />
        </a>
      </div>
    </footer>
  )
}

export default Footer
