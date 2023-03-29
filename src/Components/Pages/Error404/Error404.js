import React from 'react';
import './Error404.scss';
import { NavLink } from 'react-router-dom';

const Error404 = () => {
    return (
        <>
            <div className="pagebg error404PageBg">
                <main>
                    <div className="container notHomeContainer error404Container">
                        <h1>
                            <span className="shadow">
                                This Page is Still in Development
                            </span>
                        </h1>
                        <div className="nonGallery">
                            So sorry, but this page is not currently available. <br /><br />
                            Please return to my <NavLink to="/home" >Portfolio</NavLink><br />
                            Or, to contact me, fill out my <NavLink to='/contact'>Contact Form</NavLink>
                        </div>
                    </div>
                </main>
            </div>
        </>
    )
}

export default Error404