import React from 'react'
import './socialred.css'
import redsocialImg from '../../assets/redsocial-img.png'

function SocialRed ({setRedSocial, setDataLovers, setBurgerQueen, setComeBack}){
    return(
        <div className="container-bq">
            <div className="container-mockup">
                <div className="container-button-comeback">
                    <button className="comeBackButton" onClick={() => {
                        setComeBack(true)
                        setRedSocial(false)
                    }}></button>
                </div>
                <img src={redsocialImg} alt="img"/>
            </div>
            <div className="container-right">
                <div className="container-right-second">
                    <div className="container-description">
                        <div className="content-title">
                            <h2 className="title1">LIFE</h2>
                            <h2 className="title2">STYLE</h2>
                        </div>
                        <div className="paragraph-description">
                            <p>
                                Lifestyle es una red social dirigida a personas de 25-35 años 
                                principalmente que tienen una vida sana, activa y/o desean tenerla. 
                                Su propósito es que las personas ya sean expertas o principiantes 
                                puedan compartir contenido  sobre temas saludables sin costo alguno.
                            </p> 
                        </div>  
                    </div> 
                    <div className="button-showdemo">
                        <button className="contact-button">VER DEMO</button>
                    </div>        
                    <div className="container-button-bq">
                        <button className="previous-button" onClick={() => {
                            setRedSocial(false)
                            setBurgerQueen(true)
                        }}></button>
                        <button className="next-button" onClick={() => {
                            setRedSocial(false)
                            setDataLovers(true)
                        }}></button>
                    </div> 
                </div>   
            </div>
        </div>
    )
}

export default SocialRed;