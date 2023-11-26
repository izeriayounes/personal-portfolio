import React from "react";
import javascript from "../../assets/logos/javascript.svg";
import python from "../../assets/logos/python.svg";
import java from "../../assets/logos/java.svg";
import csharp from "../../assets/logos/csharp.svg";

const languagesData = [
  { logo: csharp, name: "C#" },
  { logo: javascript, name: "JavaScript" },
  { logo: python, name: "Python" },
  { logo: java, name: "Java" },
];

const Proskills = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Languages</h3>
      <div className="skills__box">
        <div className="skills__group">
          {languagesData.map((language, index) => (
            <div className="skills__dataa" key={index}>
              <i className="uil">
                <img src={language.logo} alt={language.name} />
              </i>
              <div>
                <h3 className="skills__name">{language.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Proskills;
