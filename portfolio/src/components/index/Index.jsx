import React from 'react';
import { Link, withRouter } from 'react-router-dom'
import logoEoc from '../../assets/logoEoc.png'
import izq1 from '../../assets/izq1.png'
import izq2 from '../../assets/izq2.png'
import izq3 from '../../assets/izq3.png'
import izqAbajo from '../../assets/izqAbajo.png'
import dchaAbajo from '../../assets/dchaAbajo.png'
import dcha2 from '../../assets/dcha2.png'
import dcha1 from '../../assets/dcha1.png'
import './index.css'

function Index () {
    return (
        <div className="indexContent">
            <img className="logo" alt="logo" src={logoEoc}/>
            <div className="flowersContent">
                <img className="izq1" alt="cempasuchil1" src={izq1}/>
                <img className="izq2" alt="cempasuchil2" src={izq2}/>
                <img className="izq3" alt="cempasuchil3" src={izq3}/>
                <img className="izqAbajo" alt="cempasuchil4" src={izqAbajo}/>
                <img className="dchaAbajo" alt="cempasuchil5" src={dchaAbajo}/>
                <img className="dcha2" alt="cempasuchil6" src={dcha2}/>
                <img className="dcha1" alt="cempasuchil7" src={dcha1}/>
            </div>
            <Link to="/SobreMi">Sobre mí</Link>
            <Link to="/Skills">Skills</Link>
            <Link to="/Projects">Proyectos</Link>
        </div>
    )
}

export default withRouter(Index);