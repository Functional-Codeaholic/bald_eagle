import React from 'react';
import './Layout.scss';
import Header from "./Header/Header";
import Footer from './Footer/Footer';
import Hero from '../Pages/Hero/Hero';
import About from '../Pages/About/About';
import Contact from '../Pages/Contact/Contact';
import Services from '../Pages/Services/Services';

const Layout = () => {
    
    return (
        <>
            <Header />
            <Hero />
            <section className="parallax p1" />
            <About />
            <section className="parallax p2" />
            <Services />
            <section className="parallax p3" />
            <Contact />
            <section className="parallax p4">
                <form>
                    <label htmlFor="user_name">Name: </label>
                    <input type="text" name="user_name" placeholder="Name" required="" /> 
                    <label htmlFor="user_email">Email: </label>
                    <input type="email" name="user_email" placeholder="Email@Address.com" required="" /> 
                    <label htmlFor="message">Message: </label>
                    <textarea name="message" placeholder="Message" required=""></textarea> 
                    <button type="submit">Submit</button>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Layout