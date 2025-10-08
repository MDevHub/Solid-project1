import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { Menu, Search, Sun, Moon, X } from "lucide-solid";
import { darkMode, toggleTheme } from "../layout/ThemeStore";
import logo from "../assets/logo.png";

const MobileNav: Component = () => {
  const [open, setOpen] = createSignal(false);

  const handleScroll = (id: string) => {
  const el = document.getElementById(id);
  if (el) {
    const offset = 80; // adjust this if your navbar height differs
    const topPos = el.getBoundingClientRect().top + window.scrollY - offset;
    window.scrollTo({ top: topPos, behavior: "smooth" });
  }
  setOpen(false); // close mobile nav after scrolling
};


  return (
    <nav
      class={`flex items-center justify-between px-4 py-4 fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        darkMode() ? "bg-[#0d1117] text-[#757693]" : "bg-white text-[#757693]"
      }`}
    >
      {/* Logo */}
      <div class="flex items-center">
        <img src={logo} alt="Logo" class="w-[140px] h-auto" />
      </div>

      {/* Right Icons */}
      <div class="flex items-center gap-4">
        <button aria-label="Search" class="hover:text-blue-600 cursor-pointer transition">
          <Search size={22} />
        </button>
        <button aria-label="Toggle theme" onClick={toggleTheme} class="hover:text-blue-600 cursor-pointer transition">
          {darkMode() ? <Sun size={22} /> : <Moon size={22} />}
        </button>
        <button
          aria-label="Menu"
          onClick={() => setOpen(true)}
          class="hover:text-blue-600 cursor-pointer transition"
        >
          <Menu size={24} />
        </button>
      </div>

      {/* Sliding Menu */}
      <div
        class={`fixed top-0 right-0 h-screen w-3/4 sm:w-1/2 max-w-sm transition-transform duration-300 ease-in-out z-40 ${
          darkMode() ? "bg-[#0d1117] text-[#ccc]" : "bg-white text-[#333]"
        } ${open() ? "translate-x-0" : "translate-x-full"} shadow-lg`}
      >
        {/* Close Icon */}
        <button
          aria-label="Close menu"
          onClick={() => setOpen(false)}
          class="absolute top-5 right-5 hover:text-blue-600 cursor-pointer transition"
        >
          <X size={26} />
        </button>

        <ul class="flex flex-col gap-6 p-8 mt-16 text-lg text-center font-semibold">
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("home")}>Home</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("features")}>Features</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("integration")}>Integration</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("testimonial")}>Testimonial</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("blog")}>Blog</li>
        </ul>
      </div>
    </nav>
  );
};

export default MobileNav;
