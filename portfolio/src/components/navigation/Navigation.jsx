import React from 'react';
import {withRouter, Link} from 'react-router-dom'
import './navigation.css'

function Navigation (){
    return (
        <div className="contentNav">
            <button>Linkedin</button>
            <button>Github</button>
            <Link to="/Contact">
                Contáctame
            </Link>
        </div>
    )
}

export default withRouter(Navigation);