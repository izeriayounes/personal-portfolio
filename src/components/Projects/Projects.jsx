import React from "react";
import "./projects.css";
import Menu from "./Menu";

const Projects = () => (
  <section className="work container section" id="projects">
    <h2 className="section__title">Projects</h2>
    <div className="work__container grid">
      {Menu.map((ele) => {
        const { id, image, title, category, url } = ele;
        return (
          <div className="work__card" key={id}>
            <div className="work__thumbnail">
              <img src={image} alt="" className="work__img" />
              <div className="work__mask"></div>
            </div>
            <span className="work__category">{category}</span>
            <h3 className="work__title">{title}</h3>
            <a
              href={url}
              target="_blank"
              className="work__button"
              rel="noreferrer"
            >
              <i class="bx bx-link-external"></i>
            </a>
          </div>
        );
      })}
    </div>
  </section>
);

export default Projects;
