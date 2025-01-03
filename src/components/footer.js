import './css/Footer.css';

function Footer(){
    return(
        <footer>{/* Google AdSense Ad */}
        <div className="ads-container">
          <ins className="adsbygoogle"
            style={{ display: 'block', textAlign: 'center' }}
            data-ad-client="ca-pub-7360554667394701"
            data-ad-slot="1234567890"
            data-ad-format="auto">
          </ins>
        </div>
            <div className='footer'>
                <p>
                © 2025 Deliciously coded by Shaik Abdul Kalam – Bringing recipes to your fingertips!
                </p>
            </div>
        </footer>
    );
}

export default Footer;
