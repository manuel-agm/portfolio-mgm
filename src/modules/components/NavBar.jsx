import React from 'react'
import '../styles/navbar.css'
import { Link } from 'react-scroll';
import useWindowSize from '../hooks/useWindowSize'
import menu from '../../assets/menu.png'

const Dropdown = () => {
  return (
      <button className='button'>
        <img className='menuIcon' src={menu} alt="Menu"></img>
      </button>
  )
}

const ButtonList = () => {
    return (
        <div className='buttonList'>
            <Link offset={-50} to="about" smooth={true} duration={500} className='link'>About</Link>
            <Link offset={-50} to="work" smooth={true} duration={500} className='link'>Work</Link>
            <Link offset={-50} to="experience" smooth={true} duration={500} className='link'>Experience</Link>
            <Link offset={-50} to="contact" smooth={true} duration={500} className='button'>Contact</Link>
            
        </div>
    )
}

const NavBar = () => {
  const size = useWindowSize();
  return (
    <div className='navbar'>
        <Link to="hero" smooth={true} duration={500} className='logo' >M</Link>
        {size.width >= 768 && <ButtonList/>}
        {size.width < 768 && <Dropdown/>}
    </div>
  )
}

export default NavBar