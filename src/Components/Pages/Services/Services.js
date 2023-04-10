import React from 'react';
import './Services.scss';


const Services = () => {
    return (
        <>
            <div className="bodySection" id='Services'>
                <div class="content services">
                    <h1>
                        Bald Eagle Services
                    </h1>
                    <p className='copyServices'>
                        <ul>
                            <h3>Residential</h3>
                            <li>Remodel</li>
                            <li>New Construction</li>
                            <li>Basement Finish</li>
                            <li>Bathroom Remodel</li>
                            <li>Kitchen Renovation</li>
                        </ul>
                        <ul>
                            <h3>Commercial</h3>
                            <li>Tenant Improvement</li>
                            <li>New Construction</li>
                            <li>Renovation/Fit-out</li>
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

export default Services