import React from 'react';
import {Link} from 'react-router-dom';
import './Footer.scss';

const {siteOwner, siteUrl} = require('../../../Assets/_vars');
let year = new Date().getFullYear(); 
const rightsLink = siteUrl + "/rights";

const Footer = () => {
    return (
        <>
            <div className="footer">
                <small>
                    &copy; Copyright 2004 - { year } {siteOwner}. All rights reserved. &nbsp;
                    <Link to={rightsLink}>More info</Link>
                </small>
            </div>
        </>
    )
}

export default Footer