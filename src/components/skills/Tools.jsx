import React from "react";
import Postman from "../../assets/logos/postman.svg";
import git from "../../assets/logos/git.svg";
import vscode from "../../assets/logos/vscode.svg";
import visualStudio from "../../assets/logos/visual-studio.svg";

const toolsData = [
  { logo: Postman, name: "Postman" },
  { logo: git, name: "Git" },
  { logo: vscode, name: "VSCode" },
  { logo: visualStudio, name: "Visual Studio" },
];

const Tools = () => {
  return (
    <div className="skills__content">
      <h3 className="skills__title">Tools</h3>
      <div className="skills__box">
        <div className="skills__group">
          {toolsData.map((tool, index) => (
            <div className="skills__dataa" key={index}>
              <i className="uil">
                <img src={tool.logo} alt={tool.name} />
              </i>
              <div>
                <h3 className="skills__name">{tool.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Tools;
