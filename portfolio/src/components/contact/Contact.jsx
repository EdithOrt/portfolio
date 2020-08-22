import React from 'react';
import './contact.css'
import Github from '../../assets/GIT1.png'
import Linkedin from '../../assets/linkedin1.png'

function Contact ({setContact, setComeBack}){
    return(
        <div className="container-principal-contact">
            <div className="container-contact-left">
                <div className="container-button-comeback">
                    <button className="comeback-button" onClick={() => {
                        setComeBack(true)
                        setContact(false)
                    }}></button>
                </div>
                <div className="title-contact">
                    <h2>¿LISTO(A) PARA TRABAJAR JUTOS(AS)?</h2>
                </div>
            </div>
                <div className="container-inputs-form">
                    <div className="row100">
                        <div className="col">
                            <div className="input-box">
                                <input type="text" name="" required="required"></input>
                                <span className="text">Nombre completo</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-box">
                                <input type="text" name="" required="required">
                                </input>
                                <span className="text">Correo electrónico</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-box">
                                <input type="tel" name="" required="required">
                                </input>
                                <span className="text">Teléfono</span>
                                <span className="line"></span>
                            </div>
                        </div>
                        <div className="col">
                            <div className="input-box textarea">
                                <textarea required="required"></textarea>
                                <span className="text">Ingresa tu mensaje aquí</span>
                                <span className="line"></span>
                            </div>
                        </div>
                    </div>
                    <div className="row100">
                        <div className="submit-container">
                            <div className="container-buttons-red">
                                <button className="linkedin-button"><img src={Linkedin}/></button>
                                <button className="github-button"><img src={Github}/></button>
                            </div>
                            <input type="submit" value="Enviar"></input>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact;