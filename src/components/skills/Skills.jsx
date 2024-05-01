import React from 'react';
import './skills.css';

const Skills = () => {
  return (
    <div className="s-wrapper" id="skills">
        <div className="s-header">
            <h1>Skills</h1>
        </div>
        <div className="s-inner">
            <div className="s-container">
                <div className="skillbox">
                    <h1>Programming Languages</h1>
                    <ul>
                        <li>Java</li>
                        <li>Python</li>
                        <li>JavaScript</li>
                        <li>HTML</li>
                        <li>CSS</li>
                        <li>SQL</li>
                    </ul>
                </div>
                <div className="skillbox">
                    <h1>Frameworks <em>&</em> Libraries</h1>
                    <ul>
                        <li>React</li>
                        <li>Bootstrap</li>
                        <li>PHP</li>
                        <li>jQuery</li>
                        <li>Ajax</li>
                        <li>WordPress</li>
                        <li>Flutter/Dart</li>
                    </ul>
                </div>
                <div className="skillbox">
                    <h1>Tools <em>&</em> Platforms</h1>
                    <ul>
                        <li>Git</li>
                        <li>Jira</li>
                        <li>AWS</li>
                        <li>UNIX</li>
                        <li>Figma</li>
                        <li>Adobe Creative Suite</li>
                    </ul>
                </div>
            </div>
        </div>  
    </div>
  )
}

export default Skills;