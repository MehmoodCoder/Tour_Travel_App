import './App.css'
import { Routes, Route } from 'react-router-dom'
import Home from './Routes/Home.jsx'
import About from './Routes/About.jsx'
import Services from './Routes/Services.jsx'
import Contact from './Routes/Contact.jsx'

function App() {

  return (
    <div className="App">
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/about" element={<About />} />
      <Route path="/services" element={<Services />} />
      <Route path="/contact" element={<Contact />} />
    </Routes>
    </div>
  )
}

export default App
