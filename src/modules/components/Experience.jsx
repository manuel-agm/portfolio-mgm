import React from 'react'
import dedalus from '../../assets/dedalus.png'
import dxc from '../../assets/dxc.png'
import uma from '../../assets/uma.png'
import cambridge from '../../assets/cambridge.png'
import freelance from '../../assets/freelance.png'
import '../styles/experience.css'

const ExperienceItem = (props) => {
    return (
        <div className='experienceItem'>
            <img className='experienceIcon' src={props.image} alt="Icon" ></img>
            <div className='experienceText'>
                <div className='experienceTitle'>{props.title}</div>
                <div className='experienceSubtitle'>{props.subtitle}</div>
                <div className='experienceYears'>{props.years}</div>
            </div>
        </div>
    )
}

const Experience = () => {
  return (
    <div className='about' id="experience">
       <div className='experienceBox'>
        <div className='header'>
            <span className='headerTitle'>Experience</span>
        </div>
        <div className='experienceContent'>
            <ExperienceItem image={dedalus} title="Dedalus" subtitle="Professional Application Delivery" years="July 2022 to Date" />
            <ExperienceItem image={dxc} title="DXC" subtitle="Data Analytics Internship" years="February 2022 to June 2022" />
            <ExperienceItem image={freelance} title="Freelance" subtitle="Full-Stack Developer" years="2020 to 2022" />
            <ExperienceItem image={uma} title="University of Málaga" subtitle="Software Engineering Degree" years="2024" />
            <ExperienceItem image={cambridge} title="University of Cambridge" subtitle="B2 English Language Certificate" years="2021" />

        </div>
      </div> 
    </div>
  )
}

export default Experience