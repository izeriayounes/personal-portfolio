import React from 'react'
import './resume.css'
import Data from './Data'
import Card from './Card'

const Resume = () => {
  return (
    <section className="resume container section" id="experience">
        <h2 className="section__title">Education</h2>
            <div className="timeline grid">
                {Data.map((val, id)=>{
                    if(val.category==="education"){
                        return(
                            <Card key={id} logo={val.logo} title={val.title} year={val.year} desc={val.desc} />
                        )
                    }
                })}
            </div>
    </section>
  )
}

export default Resume