import React, { Component } from 'react';
import { connect } from 'react-redux';

class CartPrice extends Component { 
    price(){
        
        let pricing = {subtotal: 0, shipping: 0, tax: 0, total: 0};

        if(this.props.cart.length === 0 || typeof this.props.cart === 'undefined'){
            return pricing;
        } else {
            for(let i = 0; i < this.props.cart.length; i++){
                pricing.subtotal += this.props.cart[i][0].item.price * this.props.cart[i][1].quantity;
                pricing.tax += this.props.cart[i][0].item.price * this.props.cart[i][1].quantity * 0.1;
            }
            pricing.shipping = 10;
            pricing.total = pricing.subtotal + pricing.shipping + pricing.tax;

            pricing.total = Number((pricing.total).toFixed(2));
            pricing.subtotal = Number((pricing.subtotal).toFixed(2));
            pricing.tax = Number((pricing.tax).toFixed(2));

            return pricing;
        }
    }

    render(){
        return(                   
            <div className="cart-price">
                <div className="subtotal"><span>Subtotal :</span><span>${this.price().subtotal}</span></div>
                <div className="shipping"><span>Shipping : </span><span>${this.price().shipping}</span></div>
                <div className="tax"><span>Tax : </span><span>${this.price().tax}</span></div>
                <div className="total"><span>Total : </span><span>${this.price().total}</span></div>  
            </div>             
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    cartitems: state.cart.items
});
  
export default connect(mapStateToProps)(CartPrice)