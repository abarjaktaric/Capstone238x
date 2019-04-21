import React, { Component } from 'react';
import { connect } from 'react-redux';
import queryString from 'query-string'
import { addItem } from '../actions/addItem';
import '../css/Product.css';

class ProductDetail extends Component {
    constructor(props) {
        super(props)
        this.state = { quantity: 1 }

        this.handleQuantity = this.handleQuantity.bind(this);
        this.handleAddItem = this.handleAddItem.bind(this);
    }

    productName() {

        let values = queryString.parse(this.props.location.search);

        if (typeof values.name !== 'undefined' && values.name !== '') {
            return values.name;
        } else {
            return '';
        }
    }

    item() {

        let name = this.productName();

        var result = {};

        this.props.data.forEach(d => {
            d.subcategories.forEach(s => {
                s.items.forEach(it => {
                    if (it.name === name) {
                        result = it;
                    }
                })
            })
        });

        return result;
    }

    handleQuantity = (event) => {
        this.setState({ quantity: event.target.value })
    }

    handleAddItem = (item, qty) => {

        let quantity = parseInt(qty);
        let addedItem = item.name;
        let existingItem = this.props.cart.find(item => item[0].item.name === addedItem);

        if (typeof existingItem == 'undefined') {
            this.props.addItem(item, quantity);
        } else if (existingItem[0].item.name !== addedItem) {
            this.props.addItem(item, quantity);
        } else {
            //Item is already in cart!
        }
    }

    render() {
        var qty = this.state.quantity

        return (
            <main>
                <div className="page product-page">
                    <div className="page-header">
                        <div className="container">
                            <button className="btn-back" onClick={this.props.history.goBack}>Back</button>
                        </div>
                    </div>
                    <div className="product">
                        <div className="container">
                            <div className="row">
                                <div className="col-lg-6">
                                    <div className="product-img">
                                        <h2>{this.item().name}</h2>
                                        <img src={this.item().imagelink} alt={this.item().name} />
                                    </div>
                                </div>
                                <div className="col-lg-6">
                                    <div className="product-details">
                                        <h2>{this.item().name}</h2>
                                        <div className="product-raiting">Rating: <span>{this.item().rating}/5</span></div>
                                        <div className="product-price">$ {this.item().price}</div>
                                        <div className="product-stock"> number of items in stock: {this.item().stock}</div>
                                        <div className="product-description">{this.item().description}</div>
                                        <div className="product-quantity">
                                            <label>Qty:&nbsp;
                                                <input
                                                    type="number"
                                                    value={qty}
                                                    min="1"
                                                    max={this.item().stock}
                                                    onChange={this.handleQuantity.bind(this)} />
                                            </label>
                                        </div>
                                        <button className="btn btn-primary" onClick={this.handleAddItem.bind(this, this.item(), qty)}>Add</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </main>
        );
    }
}

const mapStateToProps = state => ({
    data: state.data.items,
    activeItems: state.data.activeItems,
    cart: state.cart
});

const mapDispatchToProps = (dispatch) => {
    return {
        addItem: (item, quantity) => { dispatch(addItem(item, quantity)) },
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(ProductDetail)