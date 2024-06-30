import React from 'react'
import NavBar from './Components/NavBar'
import Header from './Components/Header'
import Features from './Components/Features'
import About from './Components/About'
import Contact from './Components/Contact'

const App = () => {
  return (
    <div>
      <NavBar />
      <Header />
      <Features/>
      <About/>
      <Contact/>
    </div>
  )
}

export default App