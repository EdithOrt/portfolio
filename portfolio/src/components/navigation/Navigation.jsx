import React from 'react';
import './navigation.css'
import Github from '../../assets/GIT1.png'
import Linkedin from '../../assets/linkedin1.png'


function Navigation ({setContact}){
    return (
        <div className="contentNav">
            <button><img src={Github}/></button>
            <button><img src={Linkedin}/></button>
            <button onClick={() => setContact(true)}>
                Contáctame
            </button>
        </div>
    )
}

export default Navigation;