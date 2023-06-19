import React from 'react';
import './resumebar.css';

const Resumebar = () => {
  return (
    <div className="r-wrapper">
        <div className="r-bar">
            <div className="r-left">
                <span>I'm a <b>results-driven</b> developer itching to contribute to the development of <b>cutting-edge</b> software products.</span>
            </div>
            <div className="r-right">
                <a href="assets/CollierHawkins.Resume.2023.v4.pdf" target="_blank"><button className="res-btn">View My Resume</button></a>
            </div>
        </div>
    </div>
  )
}

export default Resumebar;