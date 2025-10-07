import Clients from "../components/home/Clients"
import Collab from "../components/home/Collab"
import Features from "../components/home/Features"
import Function from "../components/home/Function"
import Hero from "../components/home/Hero"
import Sol1 from "../components/home/Sol1"
import Sol2 from "../components/home/Sol2"

const Home = () => {
  return (
    <div class="pt-30 md:pt-45">
      <div class="px-4 md:px-6">
        <Hero />
      </div>
      <div class="pt-15 md:pt-25">
        <Collab/>
      </div>
      <div class="px-4 md:px-6 pt-18 md:pt-28 ">
        <Features />
      </div>
      <div class="px-4 md:px-6 pt-18 md:pt-28 ">
        <Sol1 />
      </div>
      <div class="px-4 md:px-6 pt-18 md:pt-28 ">
        <Sol2 />
      </div>
      <div class="px-4 md:px-6 pt-18 md:pt-28 ">
        <Function />
      </div>
      <div class="px-4 md:px-6 pt-18 md:pt-28 ">
        <Clients />
      </div>
    </div>
  )
}

export default Home