import React from 'react';
import './navigation.css'
import Github from '../../assets/GIT1.png'
import Linkedin from '../../assets/linkedin1.png'


function Navigation ({setContact}){
    return (
        <div className="content-nav">
            <a className="github-button" href="https://github.com/EdithOrt" target="_blank"><img src={Github}/></a>
            <a className="linkedin-button" href="https://www.linkedin.com/in/edith-ortiz-cort%C3%A9s-3ba2471ab/" target="_blank"><img src={Linkedin}/></a>
            <button className="contact-button" onClick={() => setContact(true)}>
                CONTÁCTAME
            </button>
        </div>
    )
}

export default Navigation;