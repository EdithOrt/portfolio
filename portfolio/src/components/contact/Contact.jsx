import React from 'react';
import './contact.css'

function Contact ({setContact, setComeBack}){
    return(
        <div className="container-contact">
            <button onClick={() => {
                setComeBack(true)
                setContact(false)
            }}> Regresar </button>
            <p>contacto</p>
        </div>
    )
}

export default Contact;