import React from 'react'
import './burgerqueen.css'
import burgerqueen from '../../assets/mockup-burgerqueen.png'

function BurgerQueen ({setComeBack, setBurgerQueen, setRedSocial}){
    return(
        <div className="container-bq">
            <div className="container-mockup">
                <div className="container-button-comeback">
                    <button className="comeBackButton" onClick={() => {
                        setComeBack(true)
                        setBurgerQueen(false)
                    }}></button>
                </div>
                <img className="img-app" src={burgerqueen} alt="img"/>
            </div>
            <div className="container-right">
                    <div className="container-description">
                        <div className="content-title">
                            <h2 className="title1">ROCKY</h2>
                            <h2 className="title2">BURGER</h2>
                        </div>
                        <div className="paragraph-description">
                            <p>
                                RockyBurger es una interfaz diseñada para la interacción mesero/cocinero 
                                para agilizar la entrega de órdenes en una cadena de comida rápida. 
                                Esta diseñada para ser fácil, intuitiva y rápida de usar.
                            </p> 
                        </div>  
                    </div> 
                    <div className="button-showdemo">
                        <button className="contact-button">
                            <a className="demo-button" href="https://EdithOrt.github.io/CDMX009-BurgerQueen" target="_blank">VER DEMO</a>
                        </button>
                    </div>        
                    <div className="container-button-bq">
                    <button className="next-button" onClick={() => {
                        setBurgerQueen(false)
                        setRedSocial(true)
                    }}></button>
                </div> 
            </div>
        </div>
    )
}

export default BurgerQueen;