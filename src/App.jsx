import Creations from "./components/Creations"
import Footer from "./components/Footer"
import Hero from "./components/Hero"
import Intro from "./components/Intro"
import Navigation from "./components/Navigation"
import { LoopProvider } from "./contexts/LoopProvider"

function App() {
  return (
    <div>
      <LoopProvider>
      <Navigation />
      <Hero />
      <Intro />
      <Creations />
      <Footer />
      </LoopProvider>
    </div>
  )
}

export default App
