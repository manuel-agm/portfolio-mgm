import React from 'react'
import '../styles/description.css'
import linkedin from '../../assets/linkedin.svg'
import github from '../../assets/github.svg'

const LinkIcons = () => {
    return (
        <div className='linkIcons'>
            <a href="https://www.linkedin.com/in/manuel-antonio-g%C3%B3mez-merino-028753208/" target="_blank" rel="noopener noreferrer" className="infoTextLinksAnchor">
                <img src={linkedin} className="linkIcon" alt="LinkedIn"></img>
            </a>                       
            <a href="https://github.com/manuel-agm" target='_blank' rel="noopener noreferrer" className="infoTextLinksAnchor">
                <img src={github} className="linkIcon" alt="GitHub"></img>
            </a>  
        </div>
    )
}

const Anchor = (props) => {
    return (
        <a href="https://www.dedalus.com/global/en/" className='anchor' target='_blank'>{props.text}</a>
    )
}



const Description = () => {
  return (
    <div className='description'>
        <div className='paragraph'>Graduate software engineer with over three years of experience. Based in Málaga (Spain), currently working at <Anchor text="Dedalus" /></div>
        <div className='paragraph'>My focus is on delivering robust full-stack solutions for both desktop and mobile platforms, as well as designing and developing end-to-end data processes.</div>
        <LinkIcons />
    </div>
  )
}

export default Description