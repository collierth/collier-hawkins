import React from 'react';
import "./header.css";

const Header = () => {
  return (
    <header className="header">
        <nav className="nav container">
            <a href="index.html" className="nav__logo">
                <img src="../chlogo.png"></img>
            </a>

            <div classNamer="nav__menu">
                <ul className="nav__list grid">

                    <li className="nav__item">
                        <a href="#home" className="nav__link">Home</a>
                    </li>

                    <li className="nav__item">
                        <a href="#about" className="nav__link">About</a>
                    </li>

                    <li className="nav__item">
                        <a href="#skills" className="nav__link">Skills</a>
                    </li>

                    <li className="nav__item">
                        <a href="#portfolio" className="nav__link">Portfolio</a>
                    </li>

                </ul>

                <i class="uil uil-times nav__close"></i>
            </div>

            <div className="nav__toggle">
                <i class="uil uil-bars"></i>
            </div>
        </nav>
    </header>
  )
}

export default Header