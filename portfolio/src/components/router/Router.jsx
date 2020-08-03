import React from 'react';
import {BrowserRouter, Switch, Route} from 'react-router-dom'
import Contact from '../contact/Contact';
import Index from '../index/Index';
import AboutMe from '../aboutMe/AboutMe';
import Projects from '../projects/projects';
import Skills from '../skills/Skills';
import Navigation from '../navigation/Navigation';

function Router (){
    return (
        <BrowserRouter>
        <Navigation/>
        <Switch>
            <Route path="/Contact" component={Contact}/>
            <Route path="/" component={Index}/>
            <Route path="/SobreMi" component={AboutMe}/>
            <Route path="/Projects" component={Projects}/>
            <Route path="/Skills" component={Skills}/>
        </Switch>
        </BrowserRouter>
    )
}

export default Router;