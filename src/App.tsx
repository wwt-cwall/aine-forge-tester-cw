// Main App component
// This is the second comment
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import GettingStarted from './pages/GettingStarted'
import AineForge from './pages/AineForge'
import ForgeGuide from './pages/ForgeGuide'
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
        </Routes>

        <footer className="footer">
          <p>Built for testing agentic coding tools 🛠️</p>
        </footer>
      </div>
    </Router>
  )
}

export default App
