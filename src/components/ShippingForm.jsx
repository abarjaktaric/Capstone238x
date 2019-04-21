import React, { Component } from 'react';
import { connect } from 'react-redux';

class ShippingForm extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            address: "",
            city: "",
            phone: ""
        };

        this.handleChange = this.handleChange.bind(this);
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    total(){
        
        let pricing = {subtotal: 0, shipping: 0, tax: 0, total:0};

        if(this.props.cart.length === 0 || typeof this.props.cart === 'undefined'){
            return pricing.subtotal + pricing.shipping + pricing.tax;
        } else {
            for(let i = 0; i < this.props.cart.length; i++){
                pricing.subtotal += this.props.cart[i][0].item.price * this.props.cart[i][1].quantity;
                pricing.tax += this.props.cart[i][0].item.price * this.props.cart[i][1].quantity * 0.1;
            }
            pricing.shipping = 10;
            pricing.total = pricing.subtotal + pricing.shipping + pricing.tax;
            
            return Number((pricing.total).toFixed(2));
        }
    }

    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    }

    handleSubmit(event) {
        event.preventDefault();

        var username = this.state.username;
        var address = this.state.address;
        var city = this.state.city;
        var phone = this.state.phone;
        var numbers = /^[0-9]+$/;
        var total = this.total();
        const alertMessage = 'Your Shipping Details:\n\nUsername - ' + username + '\nAddress - ' + address + '\nCity - ' + city + '\nPhone - ' + phone + '\nTotal - $' + total;

        var errors = [];
        var showErrors = document.getElementById("shipping-errors");

        if (username === "" || username.length < 3) {
            errors.push("Please provide your username");
        } else if (address === "") {
            errors.push("Please provide your address");
        }else if (city === "" || city.length < 2) {
            errors.push("City is required");
        } else if (phone === "" || !phone.match(numbers)) {
            errors.push("Please provide correct phone number");
        }
        
        if (errors.length > 0) {
            showErrors.innerHTML = errors;
        } else {
            alert(alertMessage);
        }
    }

    render() {
        return (
            <section>
                <form className="form-shipping" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <h3>Enter Shipping Details</h3>
                    </div>
                    <div className="form-content">
                        <input
                            type="input"
                            name="username"
                            placeholder="Username"
                            value={this.state.username}
                            onChange={this.handleChange} />
                        <input
                            type="input"
                            name="address"
                            placeholder="Address"
                            value={this.state.address}
                            onChange={this.handleChange} />
                        <input
                            type="input"
                            name="city"
                            placeholder="City"
                            value={this.state.city}
                            onChange={this.handleChange} />
                        <input
                            type="input"
                            name="phone"
                            placeholder="Phone"
                            value={this.state.phone}
                            onChange={this.handleChange} />
                    </div>
                    <div className="form-footer">
                        <div className="form-errors" id="shipping-errors"></div>
                        <button className="btn btn-primary right" type="submit">Checkout</button>
                    </div>
                </form>
            </section>
        );
    }
}

const mapStateToProps = state => ({
    cart: state.cart,
    cartitems: state.cart.items
});
  
export default connect(mapStateToProps)(ShippingForm)