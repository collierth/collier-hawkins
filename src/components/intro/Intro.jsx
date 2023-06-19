import React from 'react';
import './intro.css';

const Intro = () => {

  return (
    <div className="intro" id="intro">
        <div className="i-left">
            <div className="i-name">
                <span>Hey! I'm . . . </span>
                <span>Collier Hawkins</span>
                <span>Full-Stack Software Developer</span>
            </div>

            <div className="i-icons">
              <a href="https://www.linkedin.com/in/collier-hawkins/" target="_blank"><i class="uil uil-linkedin"></i></a>
              <a href="https://github.com/collierth" target="_blank" className="link"><i class="uil uil-github"></i></a>
            </div>
        </div>
        <div className="i-right">
              <div className="i-pic">
              </div>
              
        </div>
    </div>
  )
}

export default Intro;