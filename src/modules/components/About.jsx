import React from 'react'
import '../styles/about.css'
import profile from '../../assets/profile.png'

const About = () => {
  return (
    <div className='about'>
      <div className='aboutBox'>
        <div className='header'>
            <span className='headerTitle'>About</span>
            <img className='profilePicture' alt="Profile" src={profile}></img>
        </div>
        <div className='content'>
            <span className='contentText'>My journey in the tech world began as a freelance developer, assisting small businesses in establishing their online presence by creating web platforms with technologies such as React, Express, and Django, as well as developing mobile apps using Android Studio</span>
            <span className='contentText'>To further deepen my knowledge, I pursued a degree in Software Engineering, graduating in 2024. During my studies, I completed an internship at DXC, where I gained valuable experience in data analytics technologies, including Python, PowerBI, and deployment tools like Docker and Kubernetes</span>
            <span className='contentText'>Following my internship, I joined Dedalus, where I have been involved in developing healthcare solutions. My role encompasses both front-end development and end-to-end data orchestration, utilizing tools such as Apache Airflow, SQL and NoSQL databases.</span>
        </div>
      </div>
    </div>
  )
}

export default About