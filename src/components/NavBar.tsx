import type { Component } from "solid-js";
import { Search, Sun, Moon } from "lucide-solid";
import logo from "../assets/logo.png";
import { darkMode, toggleTheme } from "../layout/ThemeStore";

const NavBar: Component = () => {
  const handleScroll = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <nav
      class={`flex items-center justify-between px-6 py-4  fixed top-0 left-0 w-full z-50 transition-colors duration-300 ${
        darkMode() ? "bg-[#0d1117] text-[#757693]" : "bg-white text-[#757693]"
      }`}
    >
      {/* Logo */}
      <div class="flex items-center">
        <img src={logo} alt="Logo" class="w-[160px] h-auto" />
      </div>

      {/* Links */}
      <ul class="flex gap-16 font-semibold text-lg">
        <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("home")}>Home</li>
        <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("features")}>Features</li>
        <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("blog")}>Blog</li>
        <li class="cursor-pointer hover:text-blue-600 transition" onClick={() => handleScroll("support")}>Support</li>
      </ul>

      {/* Icons */}
      <div class="flex items-center gap-5">
         <button aria-label="Search" class="hover:text-blue-600 cursor-pointer transition">
            <Search size={22} />
         </button>
         <button aria-label="Toggle theme" onClick={toggleTheme} class="hover:text-blue-600 transition cursor-pointer ">
            {darkMode() ? <Sun size={22} /> : <Moon size={22} />}
         </button>
      </div>
    </nav>
  );
};

export default NavBar;
