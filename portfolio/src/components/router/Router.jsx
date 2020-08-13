import React, { useState } from 'react';
import Contact from '../contact/Contact';
import Index from '../index/Index';
import AboutMe from '../aboutMe/AboutMe';
import SocialRed from '../projects/SocialRed';
import BurgerQueen from '../projects/BurgerQueen';
import DataLovers from '../projects/DataLovers';
import Skills from '../skills/Skills';
import Navigation from '../navigation/Navigation';

function Router (){
    const [navigateState, setNavigate] = useState(true);
    const [indexState, setIndex] = useState(true);
    const [contact, setContact] = useState(false);
    const [aboutMe, setAboutMe] = useState(false);
    const [skillState, setSkills] = useState(false);
    const [comeBack, setComeBack] = useState(false);
    const [burgerQueen, setBurgerQueen] = useState(false);
    const [redSocial, setRedSocial] = useState(false);
    const [dataLovers, setDataLovers] = useState(false);

    return (
        <div>
            <div>
                {(navigateState && !contact && !aboutMe && !skillState && !burgerQueen)  && 
                    <Navigation
                        setContact = {setContact}
                    />
                }
                {contact && 
                <Contact
                        setComeBack = {setComeBack}
                        setContact = {setContact}
                    />
                }
            </div>
            <div>
                {(indexState && !aboutMe && !skillState && !burgerQueen) && 
                    <Index
                        setAboutMe = {setAboutMe}
                        setSkills = {setSkills}
                        setBurgerQueen = {setBurgerQueen}
                    />
                }
                {aboutMe && 
                <AboutMe
                    setComeBack = {setComeBack}
                    setAboutMe = {setAboutMe}
                />}
                {skillState &&
                <Skills
                    setComeBack = {setComeBack}
                    setSkills = {setSkills}
                />}
                {burgerQueen &&
                <BurgerQueen
                setComeBack = {setComeBack}
                setBurgerQueen = {setBurgerQueen}
                />}
            </div>
            <div>
            </div>
        </div>
    )
}

export default Router;