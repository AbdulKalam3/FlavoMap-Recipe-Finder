import './css/Header.css';
import logo from './images/logo.png';

function Header() {
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
            </div>
        </header>
    );
}

export default Header;