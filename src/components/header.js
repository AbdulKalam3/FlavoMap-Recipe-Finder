import React, { useEffect } from 'react';
import './css/Header.css';
import logo from './images/logo.png';
import { Helmet } from 'react-helmet';

function Header() {
    useEffect(() => {
        // Initialize Google Ads after the component mounts
        if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, []);  // Empty array means this runs only once after the component is mounted

    return (
        <header className="header">
            <div className="container">
                <div className="row title">
                    <div className="col logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="col titlename">
                        <helmet>
                        <h1>FlavoMap</h1>
                        <meta name="description" content="Find the best recipes based on ingredients with FlavoMap Recipe Finder." />
                        </helmet>
                        <p className="tagline">Recipe Finder</p>
                    </div>
                </div>
            </div>
        </header>
    );
}

export default Header;
