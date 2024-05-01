import React from 'react';
import './contact.css';

const Contact = () => {
  return (
    <div className="c-wrapper" id="contact">
        <div className="c-mid">
            <div className="c-header">
                <h1>Contact</h1>
            </div>
            <div className="c-container">
                <div className="c-name">
                    <span>Don't be shy. Hit me up!</span>
                </div>
                <div className="c-options">
                    
                        <div className="in">
                        <a href="https://www.linkedin.com/in/collier-hawkins/" target="_blank">
                            <div className="c-icon2">
                                <i class="uil uil-linkedin"></i>
                            </div>
                        </a>
                        </div>
                    
                    <a href="mailto:collier_hawkins@bellsouth.net" target="_blank">
                        <div className="c-option">
                            <div className="c-icon">
                                <i class="uil uil-envelope"></i>
                            </div>
                            <div className="c-info">
                                <h1>Mail</h1>
                                <h3>collier_hawkins@bellsouth.net</h3>
                            </div>
                        </div>
                    </a>
                </div>
                
        
            </div>
        </div>
        
    </div>
  )
}

export default Contact;