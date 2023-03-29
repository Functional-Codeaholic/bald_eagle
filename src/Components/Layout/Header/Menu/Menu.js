import React from 'react';
import './Menu.scss';
import { NavHashLink } from 'react-router-hash-link';

export const Menu = () => {
        
    return (
        <>
            <ul>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" className="linkHome" to="#Home">
                        Home
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeClassName='active' to="/#Portfolio">
                        Projects</NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" to="#Skills">
                        Skills
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" to="#About">
                        About
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" to="#Contact">
                        Contact
                    </NavHashLink>
                </li>
            </ul>
        </>
    );
}