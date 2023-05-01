import React from 'react'
import figma from '../../assets/logos/figma.svg'
import Postman from '../../assets/logos/postman.svg'
import git from '../../assets/logos/git.svg'

const Tools = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Tools</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__dataa">
                <i class="uil"><img src={figma} alt="figma" /></i>
                <div>
                    <h3 className="skills__name">Figma</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={Postman} alt="postman" /></i>
                <div>
                    <h3 className="skills__name">Postman</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={git} alt="git" /></i>
                <div>
                    <h3 className="skills__name">Git</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Tools