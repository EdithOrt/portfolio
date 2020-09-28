import React from 'react'
import talentFest from '../../assets/talent-fest.png'
import './talent-fest.css'

function TalentFest ({setComeBack, setBurgerQueen, setRedSocial, setTalentFest}){
    return(
        <div className="container-bq">
            <div className="container-mockup">
                <div className="container-button-comeback">
                    <button className="comeBackButton" onClick={() => {
                        setComeBack(true)
                        setTalentFest(false)
                    }}></button>
                </div>
                <img className="img-app-talentfest" src={talentFest} alt="img"/>
            </div>
            <div className="container-right">
                    <div className="container-description">
                        <div className="content-title">
                            <h2 className="title1">DEMO</h2>
                            <h2 className="title2">TOROTO</h2>
                        </div>
                        <div className="paragraph-description">
                            <p>
                                Demo Toroto se realizó como reto en el evento Talent Fest Laboratoria
                                de la mano con la empresa <a className="link" href="https://www.toroto.mx/en" target="_blank"> Toroto</a>.
                                El objetivo de esta WebApp es integrar a los empleados de diferentes
                                empresas a neutralizar su huella de carbono y así mismo tener
                                conocimiento de la huella de carbono de la empresa y compañeros 
                                de su trabajo.
                            </p> 
                        </div>  
                    </div> 
                    <div className="button-showdemo">
                        <button className="contact-button">
                            <a className="demo-button" href="https://challenge-toroto.vercel.app" target="_blank">VER DEMO</a>
                        </button>
                    </div>        
                    <div className="container-button-bq">
                        <button className="previous-button" onClick={() => {
                            setTalentFest(false)
                            setBurgerQueen(true)
                        }}></button>
                        <button className="next-button" onClick={() => {
                            setTalentFest(false)
                            setRedSocial(true)
                        }}></button>
                </div> 
            </div>
        </div>
    )
}

export default TalentFest;