import React from 'react'
import './skills.css'
import Tools from './Tools'
import Languages from './Languages'
import Frameworks from './Frameworks'
import Databases from './Databases'

const Skills = () => {
  return (
    <section className="skills section container" id="skills">
        <h2 className="section__title">Professional Skillset</h2>
        <div className="skills__container container grid">
            <Languages />
            <Frameworks />
            <Databases />
            <Tools />
        </div>

    </section>
  )
}

export default Skills