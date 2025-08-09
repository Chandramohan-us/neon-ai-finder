import { Link } from 'react-router-dom'
import { FiMoon, FiSun } from 'react-icons/fi'

const Navbar = ({ darkMode, setDarkMode }) => {
  return (
    <header className="sticky top-0 z-50 bg-black/80 backdrop-blur-md border-b border-neon-purple/20">
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        <Link to="/" className="flex items-center gap-2">
          <span className="text-2xl font-bold neon-text-blue font-orbitron">
            NEON AI
          </span>
        </Link>
        
        <nav className="hidden md:flex items-center gap-8">
          <Link 
            to="/" 
            className="text-lg hover:text-neon-blue transition-colors duration-300 neon-text"
          >
            Home
          </Link>
          <Link 
            to="/tools" 
            className="text-lg hover:text-neon-pink transition-colors duration-300 neon-text"
          >
            Tools
          </Link>
          <Link 
            to="/about" 
            className="text-lg hover:text-neon-green transition-colors duration-300 neon-text"
          >
            About
          </Link>
          
          <button
            onClick={() => setDarkMode(!darkMode)}
            className="ml-4 p-2 rounded-full bg-gray-800 hover:bg-gray-700 transition-colors duration-300 neon-border"
            aria-label="Toggle dark mode"
          >
            {darkMode ? (
              <FiSun className="text-yellow-400 text-xl" />
            ) : (
              <FiMoon className="text-purple-400 text-xl" />
            )}
          </button>
        </nav>
      </div>
    </header>
  )
}

export default Navbar
