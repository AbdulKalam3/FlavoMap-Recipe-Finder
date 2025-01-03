import React, { useEffect } from 'react';
import './css/Header.css';
import logo from './images/logo.png';

function Header() {
    useEffect(() => {
        // Initialize Google Ads after the component mounts
        if (window.adsbygoogle) {
            (window.adsbygoogle = window.adsbygoogle || []).push({});
        }
    }, []);  // This ensures ads are initialized only once

    return (
        <header className="header">
            <div className="container">
                <div className="row title">
                    <div className="col logo">
                        <img src={logo} alt="Logo" />
                    </div>
                    <div className="col titlename">
                        <h1>FlavoMap</h1>
                        <p className="tagline">Recipe Finder</p>
                    </div>
                </div>

                {/* Google AdSense Ad */}
                <div className="ads-container">
                    <ins className="adsbygoogle"
                        style={{ display: 'block', textAlign: 'center' }}
                        data-ad-client="ca-pub-7360554667394701"
                        data-ad-slot="1234567890"
                        data-ad-format="auto">
                    </ins>
                </div>
            </div>
        </header>
    );
}

export default Header;
