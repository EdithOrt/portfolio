import React from 'react';
import './contact.css'

function Contact ({setContact, setComeBack}){
    return(
        <div className="container-principal-contact">
            <div className="container-contact-left">
                <button onClick={() => {
                    setComeBack(true)
                    setContact(false)
                }}> Regresar </button>
            </div>
                <div className="container-inputs-form">
                    <h2>¿LISTO(A) PARA TRABAJAR JUTOS(AS)?</h2>
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
                        <div className="col">
                            <input type="submit" value="Enviar"></input>
                        </div>
                    </div>
                </div>
            </div>
    )
}

export default Contact;