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
                                <Link to="/">Home</Link>
                                <Link to="/about">About us</Link>
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