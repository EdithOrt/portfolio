import React from 'react';
import './navigation.css'
import Github from '../../assets/GIT1.png'
import Linkedin from '../../assets/linkedin1.png'


function Navigation ({setContact}){
    return (
        <div className="content-nav">
            <button className="github-button"><img src={Github}/></button>
            <button className="linkedin-button"><img src={Linkedin}/></button>
            <button className="contact-button" onClick={() => setContact(true)}>
                CONTÁCTAME
            </button>
        </div>
    )
}

export default Navigation;