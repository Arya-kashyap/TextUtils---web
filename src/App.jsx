import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Home from './components/Home'

function App() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleBtn = () => {
    setDarkMode(!darkMode);
  }

  return (
    <div className={`w-full h-screen ${darkMode ? "bg-white" : "bg-neutral-900"}`}>
      <Navbar mode={darkMode} toggleBtn={toggleBtn} />
      <Home mode={darkMode} />
    </div>
  )
}

export default App
