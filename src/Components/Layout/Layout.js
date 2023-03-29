import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Hero from '../Pages/Hero/Hero';

const Layout = () => {
    
    return (
        <>
            <header>
                <Header />
            </header>

            <section className="bodySection">
                <Hero />
            </section>
            <section className="parallax p1" />
            <section className="bodySection">
                <div className="content about">
                    <h2>About Us</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                </div>
            </section>
        
            <section className="parallax p2" />
        
            <section className="bodySection">
                <div className="content">
                    <h2>Our Services</h2>
                    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non risus. Suspendisse lectus tortor, dignissim sit amet, adipiscing nec, ultricies sed, dolor.</p>
                </div>
            </section>
        
            <section className="parallax p3" />
        
            <footer>
                <div className="footer">
                    <p>Copyright © 2023. All rights reserved.</p>
                </div>
            </footer>
        </>
    )
}

export default Layout