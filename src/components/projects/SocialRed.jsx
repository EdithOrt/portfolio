import React from 'react'
import './socialred.css'
import secretlove from '../../assets/mockup-secret-love.png'

function SocialRed ({setRedSocial, setBurgerQueen, setComeBack}){
    return(
        <div className="container-bq">
            <div className="container-mockup">
                <div className="container-button-comeback">
                    <button className="comeBackButton" onClick={() => {
                        setComeBack(true)
                        setRedSocial(false)
                    }}></button>
                </div>
                <img className="secret-love-img" src={secretlove} alt="img"/>
            </div>
            <div className="container-right">
                <div className="container-right-second">
                    <div className="container-description">
                        <div className="content-title">
                            <h2 className="title1">LOVE</h2>
                            <h2 className="title2">SECRET</h2>
                        </div>
                        <div className="paragraph-description">
                            <p>
                            Es una WebApp gratuita adaptada para la festividad de San Valentín. 
                            Codifica mensajes para las personas que quieran puedan mantenerlo 
                            en secreto y así mismo compartirlo con alguien especial. secret
                            Love esta enfocada para adolescentes de 14 a 25 años.
                            </p> 
                        </div>  
                    </div> 
                    <div className="button-showdemo">
                        <button className="contact-button">
                            <a className="demo-button" href="https://secret-love-8qevk4r8u.vercel.app/" target="_blank">VER DEMO</a>
                        </button>
                    </div>        
                    <div className="container-button-bq">
                        <button className="previous-button" onClick={() => {
                            setRedSocial(false)
                            setBurgerQueen(true)
                        }}></button>
                        {/* <button className="next-button" onClick={() => {
                            setRedSocial(false)
                            setDataLovers(true)
                        }}></button> */}
                    </div> 
                </div>   
            </div>
        </div>
    )
}

export default SocialRed;