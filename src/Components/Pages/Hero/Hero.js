import React from 'react';
import './Hero.scss';

const Hero = () => {

    return (
        <>
            <div className="bodySection" id='Home'>
                <div className="content hero">
                    <h1>
                        Get your job<br />
                        done right<br />
                        the first time
                    </h1>
                    <p className='copyHero'>
                        At Bald Eagle Construction, we can tackle <br />
                        any project, any time, for a fair price, <br /><br />
                        Done Right - guaranteed!
                    </p>
                    <p className="buttonCTA">
                        <a href="/#Contact" target="_self"><button type="button">Get a Free Quote</button></a>
                    </p>
                </div>
            </div>
        </>
    )
}

export default Hero