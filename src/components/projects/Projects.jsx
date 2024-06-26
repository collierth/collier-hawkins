import React from 'react';
import './projects.css';

const Projects = () => {
  return (
    <div className="p-wrapper" id="projects">
        <div className="p-header">
            <h1>Projects</h1>
        </div>
        <div className="p-inner">
            <div className="container">
                <a href="https://www.figma.com/proto/y9lTYATbe8dl3SDIcak8ba/Luxuriant?type=design&node-id=3-22&t=qXDlSZaLhHzax65P-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=2%3A2&show-proto-sidebar=1&mode=design" target="_blank" className="content">
                    <img src="assets/plants4.png" alt=''></img>
                    <div className="info">
                        <h1>Luxuriant & Water Me!</h1>
                        <p>A mobile application that reminds you to water your plants.</p>
                        <span>Figma&nbsp;&nbsp;Flutter&nbsp;&nbsp;Agile Methodology&nbsp;&nbsp;sqflite</span>
                    </div>
                </a>
                <a href="http://3.22.117.94/wp-content/wp-fp/home.php" target="_blank" className="content">
                <img src="assets/moodup.png" alt=''></img>
                    <div className="info">
                        <h1>Mood Up</h1>
                        <p>Read and share words of encouragment.</p>
                        <span>HTML&nbsp;&nbsp;CSS&nbsp;&nbsp;JavaScript&nbsp;&nbsp;PHP&nbsp;&nbsp;jQuery&nbsp;&nbsp;WordPress</span>
                    </div>
                </a>
                <a href="https://tntpc.csb.app/" target="_blank" className="content alien">
                <img src="assets/alien.png" alt=''></img>
                    <div className="info">
                        <h1>The Way Home</h1>
                        <p>A web-based 2D Side-scrolling game.</p>
                        <span>JavaScript</span>
                    </div>
                </a>
            </div>
        </div>
    </div>
    
  )
}

export default Projects;