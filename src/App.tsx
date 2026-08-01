// Main App component
// This is the second comment
import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import AineForge from './pages/AineForge'
import ForgeGuide from './pages/ForgeGuide'
import HealthCheck from './pages/HealthCheck'
import TicTacToe from './pages/TicTacToe'
import War1812 from './pages/War1812'
import SnakesUSA from './pages/SnakesUSA'
import ForgeHelp from './pages/ForgeHelp'
import './App.css'

function App() {
  // Initialize theme from localStorage or default to 'dark'
  const [theme, setTheme] = useState<'light' | 'dark'>(() => {
    const savedTheme = localStorage.getItem('theme')
    return (savedTheme === 'light' || savedTheme === 'dark') ? savedTheme : 'dark'
  })

  // Apply theme to document and save to localStorage
  useEffect(() => {
    if (theme === 'light') {
      document.documentElement.setAttribute('data-theme', 'light')
    } else {
      document.documentElement.removeAttribute('data-theme')
    }
    localStorage.setItem('theme', theme)
  }, [theme])

  const toggleTheme = () => {
    setTheme(prevTheme => prevTheme === 'light' ? 'dark' : 'light')
  }

  return (
    <Router basename="/aine-forge-tester/">
      <div className="app">
        <Navbar theme={theme} onToggleTheme={toggleTheme} />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/aine-forge" element={<AineForge />} />
          <Route path="/forge-guide" element={<ForgeGuide />} />
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/war-1812" element={<War1812 />} />
          <Route path="/snakes-usa" element={<SnakesUSA />} />
          <Route path="/forge-help" element={<ForgeHelp />} />
        </Routes>

        <footer className="footer">
          <p>Built for testing agentic coding tools 🛠️</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
