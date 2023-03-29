import React, { Component, useState, useEffect } from 'react';
import axios from 'axios';
import MenuItems from './MenuItems';
import './Menu.scss';
import { NavLink } from 'react-router-dom';

const {MenuUrl} = require('../../../../assets/_vars');
const settings = MenuUrl + '?order=asc&offset=1&per_page=5';

export const Menu = () => {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        axios.get(settings)
        .then(response => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    
    }, []);
    
    return (
        <>
            <ul>
                <li>
                    <NavLink exact="true" activeclassname="active" className="linkHome" to="/">
                        Home
                    </NavLink>
                </li>
                {menu.map(menu => <MenuItems key={menu.id} menu={menu}/> )}
            </ul>
        </>
    );
}

export const MobileMenu = () => {
    const [menu, setMenu] = useState([]);
    
    useEffect(() => {
        axios.get(settings)
        .then(response => {
            setMenu(response.data);
        })
        .catch((error) => {
            console.log(error);
        })
    
    }, []);
    return (
        <>
            <ul>
                <li>
                    <NavLink exact="true" activeclassname="active" to="/">
                        Home
                    </NavLink>
                </li>
                {menu.map(menu => <MenuItems key={menu.id} menu={menu}/> )}
            </ul>
        </>
    );
}