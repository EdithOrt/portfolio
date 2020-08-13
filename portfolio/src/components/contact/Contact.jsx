import React from 'react';
import './contact.css'

function Contact ({setContact, setComeBack}){
    return(
        <div className="containerContact">
            <button onClick={() => {
                setComeBack(true)
                setContact(false)
            }}> Regresar </button>
            <p>contacto</p>
        </div>
    )
}

export default Contact;