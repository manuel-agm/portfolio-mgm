import React from 'react'
import '../styles/navbar.css'


const ButtonList = () => {
    return (
        <div className='buttonList'>
            <a href="/" className='link'>About</a>
            <a href="/" className='link'>Work</a>
            <a href="/" className='link'>Experience</a>
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