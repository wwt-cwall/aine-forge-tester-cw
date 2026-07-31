// Main App component
// This is the second comment
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import AineForge from './pages/AineForge'
import ForgeGuide from './pages/ForgeGuide'
import HealthCheck from './pages/HealthCheck'
import TicTacToe from './pages/TicTacToe'
import War1812 from './pages/War1812'
import './App.css'

function App() {
  return (
    <Router basename="/aine-forge-tester/">
      <div className="app">
        <Navbar />
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/getting-started" element={<GettingStarted />} />
          <Route path="/aine-forge" element={<AineForge />} />
          <Route path="/forge-guide" element={<ForgeGuide />} />
          <Route path="/health" element={<HealthCheck />} />
          <Route path="/tic-tac-toe" element={<TicTacToe />} />
          <Route path="/war-1812" element={<War1812 />} />
        </Routes>

        <footer className="footer">
          <p>Built for testing agentic coding tools 🛠️</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
