import React from 'react'
import mail from '../../assets/mail.png'
import '../styles/contact.css'


const Mail = () => {
    return (
        <div className='contactInfo'>
            <img className='contactIcon' alt="Contact" src={mail}></img>
            <div className='contactInfoText'>
                <span className='mail'>Mail Address</span>
                <span className='mailAddress'>manuel.leala@gmail.com</span>
            </div>
        </div>
    )
}

const Contact = () => {
  return (
    <div className='contact' id="contact">
        <div className='contactBoxRow'>
            <div className='header'>
                <span className='headerTitle'>Contact</span>
            </div>
            <div className='contactBox'>
                <div className='contactTitle'>Let's get in touch!</div>
                <Mail />
                <button className='contactButton'>Send mail
                </button>
            </div>
      </div>
    </div>
  )
}

export default Contact