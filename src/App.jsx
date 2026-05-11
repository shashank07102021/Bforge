import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ComingSoon from"./components/ComingSoon"
import Marquee from "./components/Marquee"
import Collection from './components/collection'
import Shop from "./components/Shop"
import Footer from './components/Footer'

function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={
        <>
        <Hero/>
        <Marquee/>
        <Collection/>
        <Footer/>
        </>}/>
      <Route path="/collection" element={<Shop/>}/>
      <Route path="/try-on" element={<ComingSoon/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App