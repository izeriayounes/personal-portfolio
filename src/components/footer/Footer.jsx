import React from 'react'
import './footer.css'
const Footer = () => {
  return (
    <footer className="footer">
        <div className="footer__container container">
            <h1 className="footer__title">Younes IZERIA</h1>
            <ul className="footer__list">
                <li>
                    <a href="#about" className="footer__link">About</a>
                </li>
                <li>
                    <a href="#skills" className="footer__link">Skills</a>
                </li>
                <li>
                    <a href="#services" className="footer__link">Services</a>
                </li>
            </ul>

            <div className="footer__social">
                <a href="https://github.com/izeriayounes" className="footer__social-link" target="_blank">
                    <i class="uil uil-github"></i>
                </a>
                <a href="https://www.linkedin.com/in/younes-izeria-102654151/" className="footer__social-link" target="_blank">
                    <i class="uil uil-linkedin"></i>
                </a>
            </div>
            <span className="footer__copy">&#169; 2023 - 2024</span>
        </div>
    </footer>
  )
}

export default Footer