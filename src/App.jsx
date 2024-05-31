import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Header from './components/Header'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Footer from './components/Footer'
import Licenses from './components/Licenses'
//import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header></Header>
      <About></About>
      <Skills></Skills>
      <Licenses></Licenses>
      <Projects></Projects>
      <Footer></Footer>
    </>
  )
}

export default App
