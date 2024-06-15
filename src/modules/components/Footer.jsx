import React from 'react'
import '../styles/footer.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'
import copyright from '../../assets/copyright.png'

const Logo = () => {
  return (
    <span >
      <img alt="copyright" className='copyrightLogo' src={copyright} ></img>
    </span>
  )
}

const Footer = () => {
  return (
    <div className='footer'>
      <div className='copyright'>Copyright  <Logo/>  2024. All rights are reserved.</div>
      <div className='linkIcons'>
            <a href="https://www.linkedin.com/in/manuel-antonio-g%C3%B3mez-merino-028753208/" target="_blank" rel="noopener noreferrer" className="infoTextLinksAnchor">
                <img src={linkedin} className="linkIconFooter" alt="LinkedIn"></img>
            </a>                       
            <a href="https://github.com/manuel-agm" target='_blank' rel="noopener noreferrer" className="infoTextLinksAnchor">
                <img src={github} className="linkIconFooter" alt="GitHub"></img>
            </a>  
        </div>
    </div>
  )
}

export default Footer