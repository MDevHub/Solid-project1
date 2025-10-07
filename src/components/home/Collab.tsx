import { createSignal, For } from "solid-js";
import { darkMode } from "../../layout/ThemeStore";

import brand1 from "../../assets/brand1.svg";
import brand2 from "../../assets/brand2.svg";
import brand3 from "../../assets/brand3.svg";
import brand4 from "../../assets/brand4.svg";
import brand5 from "../../assets/brand5.svg";
import brand6 from "../../assets/brand6.svg";

import brand1d from "../../assets/brand1d.svg";
import brand2d from "../../assets/brand2d.svg";
import brand3d from "../../assets/brand3d.svg";
import brand4d from "../../assets/brand4d.svg";
import brand5d from "../../assets/brand5d.svg";
import brand6d from "../../assets/brand6d.svg";

const brands = [
  { light: brand1, dark: brand1d },
  { light: brand2, dark: brand2d },
  { light: brand3, dark: brand3d },
  { light: brand4, dark: brand4d },
  { light: brand5, dark: brand5d },
  { light: brand6, dark: brand6d },
];

const Collab = () => {
  const [hovered, setHovered] = createSignal<number | null>(null);

  return (
    <div>
      {/* Top margin line */}
      <div
        class={`h-[1px] w-full ${
          darkMode() ? "bg-[#ffffff11]" : "bg-[#ffffff11]"
        }`}
      ></div>

      {/* Brand grid */}
      <div
        class={`transition-colors duration-300 py-10 ${
          darkMode() ? "" : "bg-[#f3f4f6]"
        }`}
      >
        <div class="px-4 grid grid-cols-3 md:grid-cols-6 gap-10 items-center justify-center">
          <For each={brands}>
            {(logo, i) => (
              <img
                src={
                  darkMode()
                    ? hovered() === i()
                      ? logo.dark
                      : logo.light
                    : logo.light
                }
                alt="Brand logo"
                class="cursor-pointer mx-auto transition duration-300 ease-in-out"
                onMouseEnter={() => setHovered(i())}
                onMouseLeave={() => setHovered(null)}
              />
            )}
          </For>
        </div>
      </div>

      {/* Bottom margin line */}
      <div
        class={`h-[0.5px] w-full ${
          darkMode() ? "bg-[#ffffff11]" : "bg-[#ffffff11]"
        }`}
      ></div>
    </div>
  );
};

export default Collab;
