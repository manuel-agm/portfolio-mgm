import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-scroll';


const ButtonList = () => {
    return (
        <div className='buttonList'>
            <Link offset={-70} to="about" smooth={true} duration={500} className='link'>About</Link>
            <Link offset={-70} to="work" smooth={true} duration={500} className='link'>Work</Link>
            <Link to="about" smooth={true} duration={500} className='link'>Experience</Link>
            <button className='button'>Contact</button>
            
        </div>
    )
}

const NavBar = () => {
  return (
    <div className='navbar'>
        <a href="/" className='logo' >M</a>
        <ButtonList/>
    </div>
  )
}

export default NavBar