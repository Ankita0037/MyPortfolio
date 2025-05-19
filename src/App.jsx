import { useState } from 'react'

import './App.css'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Skills from './components/Skills'
import Project from './components/Project'

function App() {
  const [count, setCount] = useState(0)

  return (

    <>
       <Navbar/>
       <Hero/>
       <Skills/>
       <Project/>
    </>
  )
}

export default App
