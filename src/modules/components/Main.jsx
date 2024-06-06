import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Description from './Description'
import '../styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
    <Hero />
    <Description />
    <About />
  </React.StrictMode>,
)
