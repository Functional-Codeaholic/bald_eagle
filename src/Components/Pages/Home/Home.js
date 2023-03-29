import React from 'react';
import './Home.scss';
import Portfolio from '../Portfolio/Portfolio';
import Skills from '../Skills/Skills';
import About from '../About/About';
import Contact from '../Contact/Contact';
import bgImages from '../../../Assets/images/pages/mobile/images-home.webp';

const Home = () => {

    return (
        <>
            <div className="homeContainer">
                <div className="homeImages">
                    <img src={ bgImages } alt="" className="homeBG" />
                </div>
                <div className="homeStencil">
                    <div className="homeContent">
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
            <About />
            <Portfolio />
            <Skills />
            <Contact />
        </>
    )
}

export default Home