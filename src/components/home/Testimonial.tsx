import createEmblaCarousel from "embla-carousel-solid"
import { For } from "solid-js"
import { darkMode } from "../../layout/ThemeStore"
import user1 from "../../assets/user1.jpg"
import user2 from "../../assets/user2.jpg"
import user3 from "../../assets/user3.jpg"

const testimonials = [
  { name: "Amina Yusuf", email: "amina.dev@example.com", image: user1, text: "SolidJS completely changed my workflow..." },
  { name: "James Walker", email: "james@startup.io", image: user2, text: "Migrating to Solid was the best decision..." },
  { name: "Chen Wei", email: "chen.wei@productlabs.com", image: user3, text: "I love how Solid makes everything feel close..." },
]

const Testimonial = () => {
  const [emblaRef, embla] = createEmblaCarousel(() => ({ loop: true, align: "start" }))

	return (
		<div id="testimonial" class="">
			<button
			class={`flex uppercase mx-auto font-[500] items-center justify-center px-4 py-2 rounded-full border border-[#ffffff11] transition-colors duration-300 ${
				darkMode() ? "bg-[#171d25bb] text-[#F3F4F6]" : "bg-[#EDF5FF]"
			}`}
			>
			Testimonials
			</button>

			<h2 class="mt-5 text-2xl sm:text-3xl lg:text-4xl xl:text-5xl text-center font-bold">
			Client's Testimonials
			</h2>

			<p class="mt-5 text-center text-lg md:text-xl">
			SolidJS’s identity revolves around reactivity and fine-grained signals, <br class="hidden sm:block" />
			data flowing between connected nodes.
			</p>

			<div class="overflow-hidden mt-10" ref={emblaRef}>
			<div class="flex">
				<For each={testimonials}>
					{(item) => (
					<div class="flex-[0_0_100%] md:flex-[0_0_50%] p-4">
						<div
							class={`h-full flex flex-col justify-betwee rounded-xl p-6 md:p-8 transition-all duration-300 border ${
							darkMode()
								? "bg-[#171d25bb] border-transparent hover:bg-[#1d2633]"
								: "bg-white border border-[#f3f3f3] drop-shadow-sm hover:drop-shadow-lg"
							}`}
						>
							<div class="flex justify-between items-center mb-4">
							<div>
								<h3 class="font-semibold text-lg">{item.name}</h3>
								<p class="text-sm opacity-70">{item.email}</p>
							</div>
							<img
								src={item.image}
								alt={item.name}
								class="w-12 h-12 rounded-full object-cover"
							/>
							</div>
							<p class="text-[15px] leading-relaxed opacity-80">{item.text}</p>
						</div>
					</div>
					)}
				</For>
			</div>
			</div>
		</div>
	)
}

export default Testimonial
