import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ComingSoon from"./components/ComingSoon"
import Marquee from "./components/Marquee"
import Shop from "./components/Shop"

function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={
        <>
        <Hero/>
        <Marquee/>
        </>}/>
      <Route path="/collection" element={<Shop/>}/>
      <Route path="/try-on" element={<ComingSoon/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App