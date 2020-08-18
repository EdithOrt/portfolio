import React from 'react'
import './datalovers.css'

function DataLovers ({setDataLovers, setRedSocial, setComeBack}){
    return(
        <div className="container-datalovers">
            <button onClick={() => {
                setComeBack(true) 
                setDataLovers(false)           
            }}>regresar</button>
            <p>Datalovers</p>
            <button onClick={() => {
                setDataLovers(false)
                setRedSocial(true)
            }}>anterior</button>
        </div>
    )
}

export default DataLovers;