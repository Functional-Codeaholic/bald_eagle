import React, { useState } from 'react';
import './Menu.scss';
import { CgMenuRound } from 'react-icons/cg';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { NavHashLink } from 'react-router-hash-link';

function AddBraces(text) {
    const newText = "{" + text + "}";
    return newText;
}

const ChooseMenu = () => {
    const [open, setOpen] = useState(false);

    const hamburgerOpen = <CgMenuRound className='hamburger' size="75px" color="#14A76C" onClick={() => setOpen(!open)} />;
    const hamburgerClose = <IoIosCloseCircleOutline className='hamburger' size="75px" color="#ff652f" onClick={() => setOpen(!open)} />

    return (
        <>
            <div className="navMenu">
                <nav>
            <ul>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" className="linkHome" to="#Home">
                        {AddBraces('Home')}
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname='active' to="/#Portfolio">
                        {AddBraces('Projects')}</NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" to="#Skills">
                        {AddBraces('Skills')}
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" to="#About">
                        {AddBraces('About')}
                    </NavHashLink>
                </li>
                <li>
                    <NavHashLink exact="true" smooth activeclassname="active" to="#Contact">
                        {AddBraces('Contact')}
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
                            <li>
                                <NavHashLink
                                    exact="true"
                                    smooth
                                    activeclassname="active"
                                    className="linkHome"
                                    to="#Home"
                                    onClick={() => setOpen(!open)}
                                >
                                    {AddBraces('Home')}
                                </NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                exact="true"
                                smooth
                                activeclassname='active'
                                to="/#Portfolio"
                                onClick={() => setOpen(!open)}
                            >
                                    {AddBraces('Projects')}</NavHashLink>
                            </li>
                            <li>
                                <NavHashLink
                                    exact="true"
                                    smooth
                                    activeclassname="active"
                                    to="#Skills"
                                    onClick={() => setOpen(!open)}
                                >
                                    {AddBraces('Skills')}
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
                                    {AddBraces('About')}
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
                                    {AddBraces('Contact')}
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