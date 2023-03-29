import React from 'react';
import  './About.scss';
import bgImages from '../../../Assets/images/pages/mobile/images-home.webp';

const About = () => {

    return ( 
        <>
            <div className="aboutContainer">
                <div className="aboutImages">
                    <img src={ bgImages } alt="" className="aboutBG" />
                </div>
                <div className="aboutStencil">
                    <div className="aboutContent">
                        <h1>
                            Get your job<br />
                            done right<br />
                            the first time
                        </h1>
                        <p>
                            At Bald Eagle Construction, we can tackle <br />
                            any project, any time, for a fair price, <br />
                            Done Right - guaranteed!
                        </p>
                    </div>
                </div>
            </div>
        </>
    );
}

export default About