import { useState } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Footer from './components/Footer'
import Home from './pages/Home'
import Tools from './pages/Tools'
import About from './pages/About'
import './App.css'

function App() {
  const [darkMode, setDarkMode] = useState(true)

  return (
    <BrowserRouter>
      <div className={`min-h-screen flex flex-col ${darkMode ? 'dark' : ''}`}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/tools" element={<Tools />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </main>
        
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
