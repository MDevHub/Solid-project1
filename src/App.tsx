import { onMount, type Component } from "solid-js"
import RootLayout from "./layout/RootLayout"
import Home from "./pages/Home"
import AOS from "aos"
import "aos/dist/aos.css"

const App: Component = () => {
  onMount(() => {
    AOS.init({
      duration: 800,
      offset: 100,
      once: true,
    })
  })

  return (
    <RootLayout>
      <Home />
    </RootLayout>
  )
}

export default App
