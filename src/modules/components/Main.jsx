import React from 'react'
import ReactDOM from 'react-dom/client'
import NavBar from './NavBar'
import Hero from './Hero'
import About from './About'
import Description from './Description'
import Work from './Work'
import Experience from './Experience'
import Contact from './Contact'
import Footer from './Footer'
import '../styles/main.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <NavBar />
     <Hero />
    <Description />
    {/*<About />
    <Work />
    <Experience />
    <Contact />
    <Footer /> */}
  </React.StrictMode>,
)
