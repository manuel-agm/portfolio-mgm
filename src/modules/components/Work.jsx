import React from 'react'
import '../styles/work.css'
import menpas from '../../assets/menpas.png'
import arrow from '../../assets/arrowRight.svg'
import cc from '../../assets/commandCenter.jpg'

const Project = (props) => {
    return (
        <a className='project' href={props.href} target="_blank">
            <img className='projectImage' src={props.image} alt="Project"></img>
            <div className='projectTitle'>{props.title}
                <img className='arrow' src={arrow} alt="Arrow" ></img>
            </div>
            <div className='projectDescription'>{props.description}</div>
            
        </a>
    )
}

const Work = () => {
  return (
    <div className='work' id="work">
      <div className='workBox'>
        <div className='headerWork'>
            <span className='headerWorkTitle'>Work</span>
        </div>
        <div className='projects'>
            <Project image={cc} title="Command Center" description="Real-time data orchestration for efficient, personalized patient care management" href="https://www.dedalus.com/global/en/our-offer/products/dedalus-command-center/" />
            <Project image={menpas} title="MenPas" description="Android app for physical and psychological self-assessment" href="https://github.com/TFG-MenPas/MenPas" />
        </div>
      </div>
    </div>
  )
}

export default Work