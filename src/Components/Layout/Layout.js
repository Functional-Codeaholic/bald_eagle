import React from 'react';
import './Layout.scss';
import { Outlet } from 'react-router-dom';
import Header from "./Header/Header";
import Footer from './Footer/Footer';

const Layout = () => {
    
    return (
        <div className='app'>
            <Header />
            
            <div className="allPages">
                <Outlet />
            </div>
            <Footer />
        </div>
    )
}

export default Layout