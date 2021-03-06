import React from 'react';
import Edith from '../../assets/edith.png';
import frontend from '../../assets/frontend.png';
import developer from '../../assets/developer.png';
import EdithOrtizCV from '../../assets/CV-Edith-Ortiz.pdf'
import './aboutme.css'

function AboutMe ({setComeBack, setAboutMe}) {
    return (
        <div  className="aboutMeContent">
            <div className="textContent">
                <div className="container-button-comeback">
                    <button className="comeBackButton" onClick={()=> {
                        setComeBack(true)
                        setAboutMe(false)
                    }}></button>
                </div>
                <div className="textPresentation">
                    <div className="name">EDITH</div>
                    <div className="lastName">ORTIZ</div>
                    <img src={frontend} className="frontend"/>
                    <img src={developer} className="developer"/>
                    <p className="description">Interesada en el sector Tech y 
                    los retos que conlleva ser una 
                    desarrolladora front end. 
                    Buscando siempre la mejora personal 
                    y el autoaprendizaje constante.
                    </p>
                    <div className="container-form">
                        <form method="get" action={EdithOrtizCV}>
                        <button
                        type="submit"
                        className="buttonCV" 
                        >
                        DESCARGA MI CV
                        </button>
                        </form>
                    </div>
                </div>
            </div>
            <div className="photographyContent">
                <img src={Edith}/>
            </div>
        </div>
    )
}

export default AboutMe;