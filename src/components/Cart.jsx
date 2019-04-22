import React, { Component } from 'react';
import ShippingForm from './ShippingForm'
import CartPrice from './CartPrice';
import CartProducts from './CartProducts';

import { connect } from 'react-redux';

import '../css/Cart.css';
//* rubric79 - Used internal css *//

class Cart extends Component {

    render() {
        return (
            <main>
                <div className="page cart-page">
                    <div className="page-header">
                        <div className="container">
                            <h2>Cart</h2>
                        </div>
                    </div>
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-8">
                                <div className="cart-product">
                                    {/* rubric47 - Table for displaying product image, name, unit price etc in cart */}
                                    <table>
                                        <thead>
                                            <tr>
                                                <th>Tumb</th>
                                                <th>Name</th>
                                                <th>Unit Price</th>
                                                <th>Quantity</th>
                                                <th>Total cost</th>
                                                <th>Remove</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {this.props.cart.length === 0 ? <tr><td colSpan="7">Your cart is Empty!</td></tr> : <CartProducts />}
                                        </tbody>
                                    </table>
                                </div>
                                <CartPrice />
                            </div>
                            <div className="col-lg-4">
                                <ShippingForm />
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

export default connect(mapStateToProps)(Cart)