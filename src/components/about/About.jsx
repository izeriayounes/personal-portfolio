import React from 'react'
import './about.css'
import Me from '../../assets/Me.jpg'
import CV from '../../assets/CV.pdf'

const About = () => {
  return (
    <section className="about container section" id="about">
        <h2 className="section__title">About Me</h2>
        <div className="about__container grid">
            <img src={Me} alt="" className="about__img" />
            <div className="about__data grid">
                <div className="about__info">
                    <p className="about__description">I'm Younes IZERIA, Software engineering student at INPT (National Institute of Posts and Telecommunications). I have an enormous passion for computer programming and information technology. Looking for an opportunity to work in a challenging position to apply my skills. </p>
                    <a download='CV.pdf' href={CV} className="btn">Download CV <i class="uil uil-file-download-alt"></i></a>
                </div>                
            </div>
        </div>
    </section>
  )
}

export default About