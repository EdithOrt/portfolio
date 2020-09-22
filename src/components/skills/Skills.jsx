import React from 'react';
import './skills.css'
import skill from '../../assets/skill.png'
import skill1 from '../../assets/skill1.png'
import skill2 from '../../assets/skill2.png'
import skill3 from '../../assets/skill3.png'
import skill4 from '../../assets/skill4.png'
import skill5 from '../../assets/skill5.png'
import skill6 from '../../assets/skill6.png'
import skill7 from '../../assets/skill7.png'
import skill8 from '../../assets/skill8.png'
import skill9 from '../../assets/skill9.png'
import skill10 from '../../assets/skill10.png'
import skill11 from '../../assets/skill11.png'
import skill12 from '../../assets/skill12.png'
import skill13 from '../../assets/skill13.png'
import skill14 from '../../assets/skill14.png'
import skill15 from '../../assets/skill15.png'
import skill16 from '../../assets/skill16.png'
import skill17 from '../../assets/skill17.png'

function Skills ({setSkills, setComeBack}){
    return(
        <div className="skillsContainer">
            <div className="container-button-comeback">
                <button className="comeBackButton" onClick= {() => {
                    setComeBack(true)
                    setSkills(false)
                }}></button>
            </div>
            <div className="container-body">
                <div className="principal-container-skills">
                    <div className="textContainer">
                        <p className="skills">SKILLS</p>
                    </div>
                    <div className="container-logos">
                        <img src={skill}/>
                        <img src={skill1}/>
                        <img src={skill2}/>
                        <img src={skill3}/>
                        <img src={skill4}/>
                        <img src={skill5}/>
                        <img src={skill6}/>
                        <img src={skill7}/>
                        <img src={skill8}/>
                        <img src={skill9}/>
                        <img src={skill10}/>
                        <img src={skill11}/>
                        <img src={skill12}/>
                        <img src={skill13}/>
                        <img src={skill14}/>
                        <img src={skill15}/>
                        <img src={skill16}/>
                        <img src={skill17}/>
                    </div>
                </div>
                <div className="principal-container-softskills">
                    <div className="textContainer">
                        <p className="softSkills">SOFTSKILLS</p>
                    </div>
                    <div className="container-buttons-softs">
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
            </div>
        </div>
    )
}

export default Skills;