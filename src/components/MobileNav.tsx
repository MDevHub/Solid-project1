import type { Component } from "solid-js";
import { createSignal } from "solid-js";
import { Menu, Search, Sun, Moon, X } from "lucide-solid";
import { darkMode, toggleTheme } from "../layout/ThemeStore";
import logo from "../assets/logo.png";

const MobileNav: Component = () => {
  const [open, setOpen] = createSignal(false);

  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
    setOpen(false);
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
        <button aria-label="Menu" onClick={() => setOpen(!open())} class="hover:text-blue-600 cursor-pointer transition">
          {open() ? <Menu size={24} /> : <X size={24} /> }
        </button>
      </div>

      {/* Sliding Menu */}
      {/* <div
        class={`fixed m-4 left-0 top-[100%] w-full max-h-[calc(100vh-64px)] overflow-auto transition-transform duration-300 transform z-40 ${
          darkMode() ? "bg-[#171d25bb] text-[#757693]" : "bg-white text-[#757693]"
        } ${open() ? "translate-y-0" : "-translate-y-full"} shadow-md`}
      >
        <ul class="flex flex-col gap-6 p-6 text-lg font-semibold text-[#757693] dark:text-gray-200">
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("home")}>Home</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("features")}>Features</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("blog")}>Blog</li>
          <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("support")}>Support</li>
        </ul>
      </div> */}
    </nav>
  );
};

export default MobileNav;
