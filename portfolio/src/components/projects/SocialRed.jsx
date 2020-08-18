import React from 'react'
import './socialred.css'

function SocialRed ({setRedSocial, setDataLovers, setBurgerQueen, setComeBack}){
    return(
        <div className="container-socialred">
            <button onClick={() => {
                setComeBack(true)
                setRedSocial(false)
            }}>Regresar</button>
            <p>SocialRed</p>
            <button onClick={() =>{
                setRedSocial(false)
                setBurgerQueen(true)
            }}>Atrás</button>
            <button onClick={() =>{
                setRedSocial(false)
                setDataLovers(true)
            }}>Siguiente</button>
        </div>
    )
}

export default SocialRed;