import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <div className="f-wrapper">
        <div className="f-bar">
            <div className="f-left">
                <span>Copyright © 2023. All rights reserved</span>
            </div>
            <div className="f-right">
                <div className="f-icon">
                    <a href="https://www.linkedin.com/in/collier-hawkins/" target="_blank"><i class="uil uil-linkedin"></i></a>
                </div>
                <div className="f-icon">
                <a href="https://github.com/collierth" target="_blank"><i class="uil uil-github"></i></a>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer;