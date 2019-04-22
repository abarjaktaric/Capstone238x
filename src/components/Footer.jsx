import React from 'react';
import { Link } from 'react-router-dom';
import '../css/Footer.css';

const Footer = () => {
    return (
        <footer>
            <div className="footer-wrapper">
                <div className="container">
                    <div className="row">
                        <div className="col-lg-6">
                            <div className="footer-info">
                                <img src="img/logo_dark.png" alt="Grocery Cloud" />
                                <a href="/"> - grocerycloud@email.com</a>
                            </div>
                        </div>
                        <div className="col-lg-6">
                            <nav className="footer-navigation">
                                {/* rubric73 - Link to Home Page */}
                                {/* rubric76 - on click take the user to Home page */}
                                <Link to="/">Home</Link>
                                {/* rubric74 - Link to About Page */}
                                {/* rubric77 - on click take the user to About page */}
                                <Link to="/about">About us</Link>
                                {/* rubric75 - Link to Contact Page */}
                                {/* rubric78 - on click take the user to Contact page */}
                                <Link to="/contact">Contact us</Link>
                            </nav>
                        </div>
                    </div>
                    <div className="row">
                        <div className="col">
                            <div className="footer-copyright"><span>2019 Grocery Cloud, All rights reserved</span></div>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;