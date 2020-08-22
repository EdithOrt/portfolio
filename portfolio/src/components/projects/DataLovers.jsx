import React from 'react'
import './datalovers.css'
import redsocialImg from '../../assets/redsocial-img.png'

function DataLovers ({setDataLovers, setRedSocial, setComeBack}){
    return(
        <div className="container-bq">
            <div className="container-mockup">
                <div className="container-button-comeback">
                    <button className="comeBackButton" onClick={() => {
                        setComeBack(true)
                        setDataLovers(false)
                    }}></button>
                </div>
                <img src={redsocialImg} alt="img"/>
            </div>
            <div className="container-right">
                <div className="container-right-second">
                    <div className="container-description">
                        <div className="content-title-datalovers">
                            <h2 className="title1-datalovers">YOU</h2>
                            <h2 className="title2-datalovers">DEX</h2>
                        </div>
                        <div className="paragraph-description">
                            <p>
                                YouDex es una página web drigida a personas de 
                                18 a 20 años que juegan Pokemon Go y que buscan 
                                tener información de inmediato y de forma visual 
                                más atractiva sobre los pokémon que existen dentro 
                                de la región Kanto.
                            </p> 
                        </div>  
                    </div> 
                    <div className="button-showdemo">
                        <button className="contact-button">VER DEMO</button>
                    </div>        
                    <div className="container-button-bq">
                        <button className="previous-button" onClick={() => {
                            setDataLovers(false)
                            setRedSocial(true)
                        }}></button>
                </div> 
                </div>   
            </div>
        </div>
    )
}

export default DataLovers;