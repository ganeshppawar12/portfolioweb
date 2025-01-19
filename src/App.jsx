import { useState } from 'react'
import { BrowserRouter as Router, Route, Routes, NavLink } from 'react-router-dom';
import './App.css'
import About from './components/About';
import Projects from './components/Project'
import Header from './components/Header'
import Contact from './components/Contact'
import HeroSection from './components/HeroSection';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
  <Router>
    <div className="font-sans">
      <Header />
      <HeroSection/>
      <Routes>
        <Route path="/" element={<About />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </div>
  </Router>
    </>
  )
}

export default App
