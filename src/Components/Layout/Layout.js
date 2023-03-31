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
                    <label for="user_name">Name: </label>
                    <br /><input type="text" name="user_name" placeholder="Name" required="" /> 
                    <br /><label for="user_email">Email: </label>
                    <br /><input type="email" name="user_email" placeholder="Email@Address.com" required="" /> 
                    <br /><label for="message">Message: </label>
                    <br /><textarea name="message" placeholder="Message" required=""></textarea> 
                    <br /><button type="submit">Submit</button>
                </form>
            </section>
            <Footer />
        </>
    )
}

export default Layout