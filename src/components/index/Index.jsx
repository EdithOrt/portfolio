import React from 'react';
import logoEoc from '../../assets/logoEoc.png'
import './index.css'

function Index ({setAboutMe, setSkills, setBurgerQueen}) {
    return (
        <div className="indexContent">
            <div className="logo">
                <img alt="logo" src={logoEoc}/>
            </div>
            <div className="container-buttons">
                <button  className="skills-button" onClick={() => setSkills(true)}>
                    SKILLS
                </button>
                <button className="aboutme-button" onClick={() => setAboutMe(true)}>
                    ACERCA DE MÍ
                </button>
                <button className="projects-button"  onClick={() => setBurgerQueen(true)}>
                    TRABAJOS
                </button>
            </div>
        </div>
    )
}

export default Index;