import React from 'react'

function BurgerQueen ({setComeBack, setBurgerQueen}){
    return(
        <div>
            <button onClick={() => {
                setComeBack(true)
                setBurgerQueen(false)
            }}> Regresar </button>
            <p>BurgerQueen</p>
        </div>
    )
}

export default BurgerQueen;