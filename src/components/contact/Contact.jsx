import React from 'react';
import './contact.css'
import Github from '../../assets/GIT1.png'
import Linkedin from '../../assets/linkedin1.png'
import { useState } from 'react';
import {db} from '../../firebase-config'

function Contact ({setContact, setComeBack}){

    let [data, setData] = useState({
        name:'',
        email:'',
        telephone:'',
        message:''
    })

    function handleInputChange(e){
        setData({
            ...data,
            [e.target.name]: e.target.value
        })
    }

    function resetContact(){
        setData({
            name:'',
            email:'',
            telephone:'',
            message:''
        })
    }

    async function handleSendToFirebase(e){
        e.preventDefault()
        if(data.name !== "" || data.telephone !== "" || data.email !== "" || data.message !== ""){
            await db.collection('messages').doc().set(data);
            resetContact()
        } else {
            console.log('falta llenar un campo')
        }
    }

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
            <div>
                
            </div>
            <form onSubmit={handleSendToFirebase}>
                <div className="container-inputs-form">
                        <div className="row100">
                            <div className="col">
                                <div className="input-box">
                                    <input type="text" name="name" required="required" value={data.name} onChange={handleInputChange}></input>
                                    <span className="text">Nombre completo</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-box">
                                    <input type="text" name="email" required="required" value={data.email} onChange={handleInputChange}>
                                    </input>
                                    <span className="text">Correo electrónico</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-box">
                                    <input type="tel" name="telephone" required="required" value={data.telephone} onChange={handleInputChange}>
                                    </input>
                                    <span className="text">Teléfono</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                            <div className="col">
                                <div className="input-box textarea">
                                    <textarea required="required" name="message" value={data.message} onChange={handleInputChange}></textarea>
                                    <span className="text">Ingresa tu mensaje aquí</span>
                                    <span className="line"></span>
                                </div>
                            </div>
                        </div>
                        <div className="row100">
                            <div className="submit-container">
                                <div className="container-buttons-red">
                                    <a className="linkedin-button" href="https://www.linkedin.com/in/edith-ortiz-cort%C3%A9s-3ba2471ab/" target="_blank"><img src={Linkedin}/></a>
                                    <a className="github-button" href="https://github.com/EdithOrt" target="_blank"><img src={Github}/></a>
                                </div>
                                <input type="submit" value="Enviar"></input>
                            </div>
                        </div>
                    </div>                               
                </form>
            </div>
    )
}

export default Contact;