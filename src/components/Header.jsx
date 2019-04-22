import React, { Component } from 'react';
import { NavLink, Link } from 'react-router-dom';
import '../css/Header.css';

class Header extends Component {
    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <div className="container">
                        <nav className="header-navigation">
                            <Link to="/">
                                <img src="img/logo.png" alt="Grocery Cloud" className="nav-brand" />
                            </Link>
                            <ul className="nav-list">
                                {/* rubric65 - Link to Home Page */}
                                {/* rubric69 - on click take the user to Home page */}
                                <li><NavLink exact strict to="/">Home</NavLink></li>
                                {/* rubric66 - Link to Shopping Page */}
                                {/* rubric70 - on click take the user to Shopping page */}
                                <li><NavLink to="/shopping">Shopping</NavLink></li>
                                <li><NavLink to="/about">About us</NavLink></li>
                                {/* rubric67 - Link to Cart Page */}
                                {/* rubric71 - on click take the user to Cart page */}
                                <li><NavLink to="/cart"><i className="fas fa-shopping-cart"></i> Cart</NavLink></li>
                            </ul>
                        </nav>
                    </div>
                </div>
            </header>
        );
    }
}

export default Header;