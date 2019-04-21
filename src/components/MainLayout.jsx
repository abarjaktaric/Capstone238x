import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Shopping from './Shopping';
import Cart from './Cart';
import Contact from './Contact';
import About from './About';
import ProductDetail from './ProductDetail';


const MainLayout = () => {
    return (
        <>
            <Header />
            <Switch>
                <Route exact strict path="/" component={Home} />
                <Route path="/shopping" component={Shopping} />
                <Route path="/cart" component={Cart} />
                <Route path="/contact" component={Contact} />
                <Route path="/about" component={About} />
                <Route path="/product" component={ProductDetail} />
            </Switch>
            <Footer />
        </>
    );
}

export default MainLayout;