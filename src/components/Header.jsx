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
                                <li><NavLink exact strict to="/">Home</NavLink></li>
                                <li><NavLink to="/shopping">Shopping</NavLink></li>
                                <li><NavLink to="/about">About us</NavLink></li>
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