import React from "react";

const HeaderSocial = () => {
  return (
    <div className="home__socails flex">
      <a
        href="https://github.com/izeriayounes"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-github"></i>
      </a>
      <a
        href="https://www.linkedin.com/in/youniz"
        className="home__social-link"
        target="_blank"
        rel="noreferrer"
      >
        <i class="uil uil-linkedin"></i>
      </a>
    </div>
  );
};

export default HeaderSocial;
