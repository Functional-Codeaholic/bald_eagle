import React from 'react';
import { tabletMin, standardMin, hd1080Min, hd4kMin } from '../../../Assets/_vars';
import './Header.scss';
import { Link } from 'react-router-dom';
import LogoXSmall from "../../../Assets/Images/logo/full-logo_0275.webp"
import LogoSmall from "../../../Assets/Images/logo/full-logo_0530.webp";
import LogoMed from "../../../Assets/Images/logo/full-logo_0700.webp";
import LogoLarge from "../../../Assets/Images/logo/full-logo_1033.webp";
import ChooseMenu from './Menu/ChooseMenu';

const Header = () => {
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
                </div>
            </section>
        </header>
    )
}

export default Header
