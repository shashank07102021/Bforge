import {BrowserRouter,Routes,Route} from 'react-router-dom'
import Navbar from "./components/Navbar"
import Hero from "./components/Hero"
import ComingSoon from"./components/ComingSoon"

function App(){
  return(
    <BrowserRouter>
      <Navbar />
      <Routes>
      <Route path="/" element={<Hero/>}/>
      <Route path="/try-on" element={<ComingSoon/>}/>
      </Routes>
    </BrowserRouter>
  )
}

export default App