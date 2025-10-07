import { Component, JSX } from "solid-js";
import Navbar from "../components/NavBar";
import MobileNav from "../components/MobileNav";
import Footer from "../components/Footer";
import { darkMode } from "./ThemeStore";

interface RootLayoutProps {
  children: JSX.Element;
}

const RootLayout: Component<RootLayoutProps> = (props) => {
  return (
    <div
      class={`flex flex-col min-h-screen transition-colors duration-300 ${
        darkMode() ? "bg-[#0d1117] text-gray-200" : "bg-white text-gray-800"
      }`}
    >
      <div class="hidden md:block"><Navbar /></div>
      <div class="md:hidden"><MobileNav /></div>

      {/* Content grows to fill space */}
      <main class="flex-1">{props.children}</main>

      {/* Footer stays at the bottom */}
      <Footer />
    </div>
  );
};

export default RootLayout;
