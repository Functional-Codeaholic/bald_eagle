import React, { useState } from 'react';
import './Menu.scss';
import { GiHamburgerMenu } from 'react-icons/gi';
import { IoCloseSharp } from 'react-icons/io5';
import { NavHashLink } from 'react-router-hash-link';

const ChooseMenu = () => {
    const [open, setOpen] = useState(false);

    const hamburgerOpen = <GiHamburgerMenu className='hamburger closed' size="75px" color="#fc4f00" onClick={() => setOpen(!open)} />;
    const hamburgerClose = <IoCloseSharp className='hamburger open' size="75px" color="#fc4f00" onClick={() => setOpen(!open)} />

    return (
        <>
            <div className="navMenu">
                <nav>
            <ul>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" className="linkHome" to="#Home">
                        Home
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname='active' to="/#Portfolio">
                        Projects
                    </NavHashLink>
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
                </nav>
            </div>
            
            <div className="mobileNavMenu">
                <nav>
                    {open ? hamburgerClose : hamburgerOpen}
                    {open && (
                        <ul>
                            <li className="topLink" >
                                <NavHashLink
                                    exact="true"
                                    smooth
                                    activeclassname="active"
                                    className="linkHome"
                                    to="#Home"
                                    onClick={() => setOpen(!open)}
                                >
                                    Home
                                </NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                    exact="true"
                                    smooth
                                    activeclassname="active"
                                    to="#About"
                                    onClick={() => setOpen(!open)}
                                >
                                    About
                                </NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                    exact="true"
                                    smooth
                                    activeclassname="active"
                                    to="#Services"
                                    onClick={() => setOpen(!open)}
                                >
                                    Services
                                </NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                    exact="true"
                                    smooth
                                    activeclassname="active"
                                    to="#Contact"
                                    onClick={() => setOpen(!open)}
                                >
                                    Contact
                                </NavHashLink>
                            </li>
                        </ul>
                    )}
                </nav>
            </div>
        </>
    );
}
 
export default ChooseMenu;