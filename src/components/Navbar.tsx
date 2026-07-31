import { NavLink } from 'react-router-dom'
import ThemeToggle from './ThemeToggle'
import './Navbar.css'

interface NavbarProps {
  theme: 'light' | 'dark'
  onToggleTheme: () => void
}

function Navbar({ theme, onToggleTheme }: NavbarProps) {
  return (
    <nav className="navbar">
      <div className="navbar-content">
        <div className="navbar-brand">
          <span className="navbar-logo">🚀</span>
          <span className="navbar-title">Aine Forge Tester</span>
        </div>
        <div className="navbar-links">
          <NavLink 
            to="/" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🏠 Home
          </NavLink>
          <NavLink 
            to="/getting-started" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            📚 Getting Started
          </NavLink>
          <NavLink 
            to="/aine-forge" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🤖 AINE Forge
          </NavLink>
          <NavLink 
            to="/forge-guide" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🚀 Forge Guide
          </NavLink>
          <NavLink 
            to="/tic-tac-toe" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🎮 Tic Tac Toe
          </NavLink>
          <NavLink 
            to="/war-1812" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            ⚔️ War of 1812
          </NavLink>
          <NavLink 
            to="/snakes-usa" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🐍 US Snakes
          </NavLink>
          <NavLink 
            to="/health" 
            className={({ isActive }) => isActive ? 'nav-link active' : 'nav-link'}
          >
            🩺 Health
          </NavLink>
          <ThemeToggle theme={theme} onToggle={onToggleTheme} />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
