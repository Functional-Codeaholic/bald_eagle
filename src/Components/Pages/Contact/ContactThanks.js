import React from "react";
import {NavLink} from "react-router-dom";
import './Contact.scss';

const ContactThanks = () => {
    setTimeout(function() {
        window.location.replace('/');
      }, 5000);
    return (
        <>
            <div className="thanks">Thank You. Someone will be in touch soon.</div>
            <div className="redirect">
                This page should automatically redirect you to the 
                <NavLink to="/">Beached Mermaid Photgraphy Home Page</NavLink> after 5 seconds.
            </div>
        </>
    )
}

export default ContactThanks