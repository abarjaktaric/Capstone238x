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
        <>  {/* rubric68 - Header is always on top of components */}
            <Header />
            <Switch>
                {/* rubric13 - Component Home for Home page with route /#  using HashRoute */}
                <Route exact strict path="/" component={Home} />
                {/* rubric13 - Component Shopping for Shopping page with route /#/shopping  using HashRoute */}
                <Route path="/shopping" component={Shopping} />
                {/* rubric56 - Component Cart for Cart page with route /#/cart using HashRoute */}
                <Route path="/cart" component={Cart} />
                {/* rubric62 - Component Contact for Contact page with route /#/contact using HashRoute */}
                <Route path="/contact" component={Contact} />
                {/* rubric62 - Component About for About page with route /#/about using HashRoute */}
                <Route path="/about" component={About} />
                <Route path="/product" component={ProductDetail} />
            </Switch>
            {/* rubric72 - Footer is always after components on bottom */}
            <Footer />
        </>
    );
}

export default MainLayout;