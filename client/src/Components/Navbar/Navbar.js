import React from 'react';
import './Navbar.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'

import Dropdown from 'react-dropdown';
import { faFacebook, faInstagram, faTwitterSquare } from '@fortawesome/free-brands-svg-icons';

function Navbar(){
    const dropdown = [
        {
            name: 'Framework',
            options: ['KSA Planning Levels', 'KSA Vision 2030', 'N.S.S 2030', 'SGDs']
        },
        {
            name: 'About',
            options: ['Goals & Objectives', 'Interested Area', 'Main Tasks', 'Schedule']
        },
        {
            name: 'Stakeholders',
            options: ['Authority', 'The Executing Agency', 'Development Partners', 'Civil Society']
        },
        {
            name: 'Why Jazan',
            options: ['Unique Characteristics', 'Singularity', 'Potentials', 'Challenges']
        },
        {
            name: 'JSP Forum',
            options: ['Get Invovled', 'Proposals', 'Opinions']
        },
        {
            name: 'Sign In',
            options: ['As an Authority Member', 'As a Stakeholder', 'As a Team Member', 'Individuals']
        }];

    return(
        <div className="navbar-container">
            <div className="navbar-logo-container">
                <img className="navbar-logo" src="https://res.cloudinary.com/duiexwi8t/image/upload/v1601365483/Jazan/Logo/new2_logo_white_hfud4x.png" />
            </div>
            <div className="navbar-filler">
            </div>
            <div className="navbar-items">
                {dropdown.map(item => {
                    return(
                        // <Dropdown options={item.options} value={item.options[0]} placeholder={item.name} />
                        <div className="navbar-single-item">{item.name}</div>
                    )
                })}
                <div className="navbar-icon"><FontAwesomeIcon icon={faFacebook} /></div>
                <div className="navbar-icon"><FontAwesomeIcon icon={faTwitterSquare} /></div>
                <div className="navbar-icon"><FontAwesomeIcon icon={faInstagram} /></div>
            </div>
        </div>
    )
};

export default Navbar;