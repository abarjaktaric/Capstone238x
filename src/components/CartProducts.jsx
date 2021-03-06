import React, { Component } from 'react';
import { connect } from 'react-redux';

import { changeQuantity } from '../actions/changeQuantity';
import { removeItem } from '../actions/removeItem';

class CartProducts extends Component {
    
    constructor(props) {
        super(props)

        this.handleQuantity = this.handleQuantity.bind(this);
    }

    handleQuantity = (item, Index, event) => {

        var newQuantity = parseInt(event.target.value);
        this.props.changeQuantity(Index, newQuantity);
        //* rubric55 -  update cost  with new value of quantity *//
    }

    handleRemoveItem = (item, Index) => {
       
        if (this.props.cart.length === 0 || typeof this.props.cart === 'undefined') {
            /*Your cart is empty"!*/
        } else {
            //* rubric54 - remove item *//
            this.props.removeItem(item, Index);
        }
    }

    render() {
        const cartProducts = this.props.cart.map((item, Index) => {
            var qty = item[1].quantity;
            return (
                //* rubric47 - Table row for displaying product image, name, unit price etc in cart *//
                <tr key={Index}>
                    <td className="product-tumb"><img src={item[0].item.imagelink} alt={item[0].item.name} /></td>
                    <td>{item[0].item.name}</td>
                    <td className="product-price">{item[0].item.price}</td>
                    <td>
                        {/* rubric55 - on change quantity update cost */}
                        <input
                            type="number"
                            value={qty}
                            min="1"
                            max={item[0].item.stock}
                            onChange={this.handleQuantity.bind(this, item, Index)} />
                    </td>
                    <td>{item[0].item.price}</td>
                    {/* rubric54 - on click remove item from cart */}
                    <td><button onClick={this.handleRemoveItem.bind(this, item, Index)}><i className="fas fa-trash-alt"></i></button></td>
                </tr>
            );
        })

        return (
            <>
                {cartProducts}
            </>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => {
    return {
        changeQuantity: (Index, newQuantity) => { dispatch(changeQuantity(Index, newQuantity)) },
        removeItem: (item, Index) => { dispatch(removeItem(item, Index)) }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CartProducts)