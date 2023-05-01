import React from 'react'
import html from '../../assets/logos/html.svg'
import css from '../../assets/logos/css.svg'
import javascript from '../../assets/logos/javascript.svg'
import python from '../../assets/logos/python.svg'
import java from '../../assets/logos/java.svg'


const Proskills = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Languages</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__dataa">
                <i class="uil"><img src={html} alt="html" /></i>
                <div>
                    <h3 className="skills__name">HTML</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={css} alt="css" /></i>
                <div>
                    <h3 className="skills__name">CSS</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={javascript} alt="javascript" /></i>
                <div>
                    <h3 className="skills__name">JavaScript</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={python} alt="python" /></i>
                <div>
                    <h3 className="skills__name">Python</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={java} alt="java" /></i>
                <div>
                    <h3 className="skills__name">Java</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Proskills