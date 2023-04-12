import React, {useState} from 'react';
import { tabletMin, standardMin, hd1080Min, hd4kMin } from '../../../Assets/_vars';
import './Header.scss';
import { Link } from 'react-router-dom';
import LogoXSmall from "../../../Assets/Images/logo/full-logo_0275.webp"
import LogoSmall from "../../../Assets/Images/logo/full-logo_0530.webp";
import LogoMed from "../../../Assets/Images/logo/full-logo_0700.webp";
import LogoLarge from "../../../Assets/Images/logo/full-logo_1033.webp";
import ChooseMenu from './Menu/ChooseMenu';

const Header = () => {
    const [isLight, setIsLight] = useState(true);
    const handleChange = () => {
        const Home = document.getElementById("Home");
        const About = document.getElementById("About");
        const Services = document.getElementById("Services");
        const Contact = document.getElementById("Contact");

        setIsLight(!isLight);

        if (isLight) {
            Home.classList.add("bodySectionDk");
            About.classList.add("bodySectionDk");
            Services.classList.add("bodySectionDk");
            Contact.classList.add("bodySectionDk");
            
            Home.classList.remove("bodySection");
            About.classList.remove("bodySection");
            Services.classList.remove("bodySection");
            Contact.classList.remove("bodySection");
        }

        if (!isLight) {
            Home.classList.add("bodySection");
            About.classList.add("bodySection");
            Services.classList.add("bodySection");
            Contact.classList.add("bodySection");
            
            Home.classList.remove("bodySectionDk");
            About.classList.remove("bodySectionDk");
            Services.classList.remove("bodySectionDk");
            Contact.classList.remove("bodySectionDk");
        }
    }
    return (
        <header>
            <section className="topBox">
                <div className="cta">
                    GET A FREE QUOTE TODAY
                </div>
                <div className="header">
                    <div className="logoBox">
                        <Link to="/">
                            <picture>
                                <source
                                    srcSet={LogoLarge}
                                    media={"(min-width: " + hd4kMin + "px)"}
                                />
                                <source
                                    srcSet={LogoMed}
                                    media={"(min-width: " + hd1080Min + "px)"}
                                />
                                <source
                                    srcSet={LogoSmall}
                                    media={"(min-width: " + standardMin + "px)"}
                                />
                                <source
                                    srcSet={LogoSmall}
                                    media={"(min-width: " + tabletMin + "px)"}
                                />
                                <img
                                    src={LogoXSmall}
                                    alt="Logo for Functional Codeaholic - Web Development by Brian Quinney"
                                    id="logo" 
                                    className="logo"
                                />
                            </picture>
                        </Link>
                    </div>
                    <ChooseMenu />
                    <div className="phone">
                        <a href="tel:8015555555">801-555-5555</a>
                    </div>
                    <div className="dkModeToggle">
                        <span className="lightMode">Light Mode</span>
                        <input type="checkbox" id="dark-mode-toggle" onChange={ handleChange } />
                        <label htmlFor="dark-mode-toggle"></label>
                        <span className="darkMode">Dark Mode</span>
                    </div>
                </div>
            </section>
        </header>
    )
}

export default Header
