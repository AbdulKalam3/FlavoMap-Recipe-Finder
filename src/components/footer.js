import './css/Footer.css';
import { Helmet } from 'react-helmet';
import React from 'react';


function Footer(){
    return(
        <section>
            {/* Google AdSense Ad */}
            <div className="ads-container">
                <ins className="adsbygoogle"
                    style={{ display: 'block', textAlign: 'center' }}
                    data-ad-client="ca-pub-7360554667394701"
                    data-ad-slot="1234567890"
                    data-ad-format="auto">
                </ins>
            </div>
        <footer>
            <div className='footer1'>
                <Helmet>
                <p>
                    © 2025 Deliciously coded by Shaik Abdul Kalam – Bringing recipes to your fingertips!
                </p>
                <meta name="description" content="Find the best recipes based on ingredients with FlavoMap Recipe Finder." />
                </Helmet>
            </div>
        </footer>
        </section>
    );
}

export default Footer;
