import React from 'react'
import '../styles/about.css'
import profile from '../../assets/profile.png'

const BoldText = (props) => {
  return (
      <span className='boldText'>{props.text}</span>
  )
}

const About = () => {
  return (
    <div className='about' id="about">
      <div className='aboutBox'>
        <div className='header'>
            <span className='headerTitle'>About</span>
            <img className='profilePicture' alt="Profile" src={profile}></img>
        </div>
        <div className='content'>
            <span className='contentText'>My journey in the tech world began as a freelance developer, assisting small businesses in establishing their online presence by creating web platforms using technologies such as <BoldText text="React"/>, <BoldText text="Express"/>, or <BoldText text="Django"/>, as well as developing mobile apps using <BoldText text="Android Studio"/></span>
            <span className='contentText'>To further deepen my knowledge, I pursued a degree in Software Engineering, graduating in 2024. During my studies, I completed an internship at DXC, where I gained valuable experience in data analytics technologies, including <BoldText text="Python"/>, <BoldText text="PowerBI"/>, and deployment tools like <BoldText text="Docker"/> and <BoldText text="Kubernetes"/></span>
            <span className='contentText'>Following my internship, I joined Dedalus, where I have been involved in developing healthcare solutions. My role encompasses both front-end development and end-to-end data orchestration, utilizing tools such as <BoldText text="Apache Airflow"/>, <BoldText text="JavaScript"/>, and both <BoldText text="SQL"/> and <BoldText text="NoSQL"/> databases</span>
        </div>
      </div>
    </div>
  )
}

export default About