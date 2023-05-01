import React from 'react';
import './home.css';
import HeaderSocial from './HeaderSocial';
import ScrollDown from './ScrollDown';

const Home = () => {
  return (
    <section className="home container" id="home">
        <div className="intro">
            <div className="home__img"></div>
            <h1 className="home__name">Younes IZERIA</h1>
            <span className="home__education">I'm a Software Engineering Student</span>
            <HeaderSocial/>
            <a href="#contact" className="btn">Contact Me</a>
            <ScrollDown className='sc' />

        </div>
    </section>
  )
}

export default Home