import React from 'react';
import './aboutme.css';

const AboutMe = () => {
  return (
    <div className="a-wrapper" id="aboutme">
        <div className="a-header">
            <h1>About Me</h1>
        </div>
        <div className="a-container">
            <div className="a-left">
                <div className="a-pic">
                <img src="assets/pin.png" className="pin"></img>
                </div>
            </div>
            <div className="a-right">
                <h1>A <b>dedicated</b> Full-Stack developer based in <b>Atlanta, Georgia</b></h1>
                <span>Graduated from Georgia State University in December 2022</span>
                <span>B.S. in Computer Science.</span>
                <p>Skilled in creating innovative software solutions and collaborating effectively in cross-functional teams. Committed to delivering high-quality code and contributing to the development of cutting-edge software products.</p>
                <p>I play the piano and enjoy making music. I also enjoy working out, traveling, watching movies and writing my own screenplays.</p>
            </div>
        </div>
    </div>
  )
}

export default AboutMe;