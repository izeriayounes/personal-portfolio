import React from 'react'
import './services.css'
import logo1 from '../../assets/logo1.svg'
import logo2 from '../../assets/logo2.svg'
import logo3 from '../../assets/logo3.svg'
const data = [
  {
    id: 1,
    logo:logo1,
    title: "Web Development",
    description:"create, build, and maintain websites. web design, web publishing, web programming, and database management.",
  },
  {
    id: 2,
    logo:logo2,
    title: "Data science",
    description:"I have the basic skills in data cleaning, visualization and training models."
  },
  {
    id: 3,
    logo:logo3,
    title: "JAVA Development",
    description:"object-oriented programming, data structures, algorithms, desktop applications.",
  },
];
const Services = () => {
  return (
    <section className="services container section" id="services">
        <h2 className="section__title">Services</h2>
        <div className="services__container grid">
            {data.map(({id,logo,title,description})=>{
                return(
                    <div className="services__card" key={id}>
                        <img src={logo} alt="" className="services__img" />
                        <h3 className="services__title">{title}</h3>
                        <p className="services__description">{description}</p>
                    </div>
                )
            })}
        </div>
    </section>
  )
}

export default Services