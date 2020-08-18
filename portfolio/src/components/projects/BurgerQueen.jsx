import React from 'react'
import './burgerqueen.css'

function BurgerQueen ({setComeBack, setBurgerQueen, setRedSocial}){
    return(
        <div className="container-bq">
            <button onClick={() => {
                setComeBack(true)
                setBurgerQueen(false)
            }}> Regresar </button>
            <p>BurgerQueen</p>
            <button onClick={() => {
                setBurgerQueen(false)
                setRedSocial(true)
            }}>Siguente proyecto</button>
        </div>
    )
}

export default BurgerQueen;