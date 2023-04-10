import React from 'react';
import  './About.scss';

const About = () => {

    return ( 
        <>
            <div className="bodySection" id='About'>
                <div class="content about">
                    <h1>
                        About Bald Eagle
                    </h1>
                    <p className='copyAbout'>
                        <ul>
                            <h4>We simply love to create and build</h4>
                            <li>Pressure (and cost) FREE Estimates</li>
                            <li>More than 40 years of experience</li>
                            <li>Giving you the best value for your investment</li>
                            <li>Over 2,000 completed projects</li>
                            <li>Your guide to getting YOUR project done on time, and under budget</li>
                            <li>$10 Million plus trusted to our expertise</li>
                        </ul>
                    </p>
                    <p className="buttonCTA">
                        <a href="/#Contact" target="_self"><button type="button">Get a Free Quote</button></a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default About