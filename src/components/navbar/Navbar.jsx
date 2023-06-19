import React, { useState, useRef } from 'react';
import {Link} from 'react-scroll';
import "./navbar.css";
import Headroom from 'react-headroom';

const Navbar = () => {

  const [border, setBorder] = useState(false)
  const changeBorder = () => {
    if (window.scrollY > 90) {
      setBorder(true)
    } else {
      setBorder(false)
    }
  }

  window.addEventListener('scroll', changeBorder); 

  const navRef = useRef();

  const showNavbar = () => {
    navRef.current.classList.toggle("responsive_nav");
  }

  return (
    <div ref={navRef} className={border ? 'n-wrapper n-wrapper-border' : 'n-wrapper'}>
        <div className="n-left">
                <Link to="intro" spy={true} offset={-100} duration={500}><img src="assets/chlogo-black.png" alt="" className="chlogo"/></Link>
        </div>
        <div className="n-right">
          <div className="list">
            <ul style={{listStyleType: 'none'}}>
                <li><Link to="intro" spy={true} offset={-100} duration={500} className="n-link">Home</Link></li>
                <li><Link to="projects" spy={true} offset={-100} duration={500} className="n-link">Projects</Link></li>
                <li><Link to="skills" spy={true} offset={-100} duration={500} className="n-link">Skills</Link></li>
                <li><Link to="aboutme" spy={true} offset={-100} duration={500} className="n-link">About Me</Link></li>
            </ul>
          </div>
          <Link to="contact" spy={true} offset={10} duration={500}><button className="nav-btn">Contact Me!</button></Link>
          <button className="menu-btn menu-close-btn" onClick={showNavbar}><i class="uil uil-times"></i></button>
        </div>
        <button className="menu-btn" onClick={showNavbar}><i class="uil uil-bars"></i></button>
    </div>
  )
}

export default Navbar;