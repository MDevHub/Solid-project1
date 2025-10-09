import Blog from "../components/home/Blog"
import Clients from "../components/home/Clients"
import Collab from "../components/home/Collab"
import Faq from "../components/home/Faq"
import Features from "../components/home/Features"
import Function from "../components/home/Function"
import Hero from "../components/home/Hero"
import Integration from "../components/home/Integration"
import Join from "../components/home/Join"
import Sol1 from "../components/home/Sol1"
import Sol2 from "../components/home/Sol2"
import Testimonial from "../components/home/Testimonial"

const Home = () => {
  return (
    <div class="pt-30 md:pt-45">
      <div class="mx-auto max-w-[1400px] px-4 md:px-6">
        <Hero />
      </div>
      <div class="pt-15 md:pt-25">
        <Collab/>
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Features />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Sol1 />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Sol2 />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Function />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Clients />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Integration />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Join />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Faq />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Testimonial />
      </div>
      <div class="mx-auto max-w-[1400px] px-4 md:px-6 pt-18 md:pt-28 ">
        <Blog />
      </div>
    </div>
  )
}

export default Home