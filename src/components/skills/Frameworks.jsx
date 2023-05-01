import React from 'react'
import reactjs from '../../assets/logos/reactjs.svg'
import bootstrap from '../../assets/logos/bootstrap.svg'
import node from '../../assets/logos/node.svg'

const Frameworks = () => {
  return (
    <div className="skills__content">
        <h3 className="skills__title">Frameworks</h3>
        <div className="skills__box">
            <div className="skills__group">
                <div className="skills__dataa">
                <i class="uil"><img src={reactjs} alt="react" /></i>
                <div>
                    <h3 className="skills__name">React js</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={bootstrap} alt="bootstrap" /></i>
                <div>
                    <h3 className="skills__name">BootStrap</h3>
                </div>
                </div>
                <div className="skills__dataa">
                <i class="uil"><img src={node} alt="node" /></i>
                <div>
                    <h3 className="skills__name">Node js</h3>
                </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Frameworks