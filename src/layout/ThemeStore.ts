import { createSignal } from "solid-js";

const saved = localStorage.getItem("theme");
const initial = saved === "dark";

export const [darkMode, setDarkMode] = createSignal(initial);

export const toggleTheme = () => {
   const newMode = !darkMode();
   setDarkMode(newMode);
   if (newMode) {
      document.body.classList.add("dark-theme");
      localStorage.setItem("theme", "dark");
   } else {
      document.body.classList.remove("dark-theme");
      localStorage.setItem("theme", "light");
   }
};

// ensure the theme is applied on page load
if (initial) document.body.classList.add("dark-theme");
