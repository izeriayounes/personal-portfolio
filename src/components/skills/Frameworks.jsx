import React from "react";
import reactjs from "../../assets/logos/reactjs.svg";
import dotnet from "../../assets/logos/dotnet.png";
import node from "../../assets/logos/node.svg";
import django from "../../assets/logos/django.svg";

const frameworksData = [
  { logo: reactjs, name: "ReactJS" },
  { logo: node, name: "NodeJS" },
  { logo: dotnet, name: "ASP.NET" },
  { logo: django, name: "Django" },
];

const Frameworks = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Frameworks</h3>
      <div className="skills__box">
        <div className="skills__group">
          {frameworksData.map(({ logo, name }, index) => (
            <div className="skills__dataa" key={index}>
              <i className="uil">
                <img src={logo} alt={name} />
              </i>
              <div>
                <h3 className="skills__name">{name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Frameworks;
