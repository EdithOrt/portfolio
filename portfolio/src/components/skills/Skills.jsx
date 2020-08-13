import React from 'react';
import './skills.css'
import tools from '../../assets/tools.png'

function Skills ({setSkills, setComeBack}){
    return(
        <div className="skillsContainer">
            <button className="comeBackButton" onClick= {() => {
                setComeBack(true)
                setSkills(false)
            }}></button>
            <div className="textContainer">
                <p className="skills">SKILLS</p>
                <p className="softSkills">SOFTSKILLS</p>
            </div>
            <div className="buttonsContainer">
            <img className="toolsImage" src={tools}/>
                <div className="buttonsSoftSkills">
                <button>Trabajo remoto</button>
                <button>Creatividad</button>
                <button>Perseverancia</button>
                <button>Metodologías ágiles</button>
                <button>Autoaprendizaje</button>
                <button>Autonomía</button>
                <button>Metódica</button>
                </div>

            </div>
        </div>
    )
}

export default Skills;