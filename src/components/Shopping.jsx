import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../actions/postActions';
import { addItem } from '../actions/addItem';
import '../css/Shopping.css';

class Shopping extends Component {
  constructor(props) {
    super(props)
    this.state = {
      checked: false,
      sort: ""
    };

    this.handleSort = this.handleSort.bind(this);
    this.inStock = this.inStock.bind(this);
    this.items = this.items.bind(this);
    this.handleCategoryMenu = this.handleCategoryMenu.bind(this);
  }

  handleSort(event) {
    this.setState({ sort: event.target.value }, () => {
    })
  }

  inStock(event) {  
    this.setState({ checked: event.target.checked }, () => {
    })
  }

  items() {
    let items = JSON.parse(JSON.stringify(this.props.activeItems.items));

    if (this.state.checked) {
      return this.sort(items.filter(item => item.stock !== "0"));
    } else {
      return this.sort(items);
    }
  }

  sort(items) {
    if (this.state.sort === "none") {
      return items;
    } else if (this.state.sort === "price") {
      return items.sort(function (a, b) { return a.price - b.price });
    } else if (this.state.sort === "alphabetical") {
      return items.sort(function (a, b) {
        return a.name < b.name ? -1 : 1;
      });
    } else if (this.state.sort === "rating") {
      return items.sort(function (a, b) { return a.rating - b.rating });
    } else {
      return items;
    }
  }

  handleAddItem = (item) => {
    let quantity = 1;
    let addedItem = item.name;
    let existingItem = this.props.cart.find(item => item[0].item.name === addedItem);

    if (typeof existingItem == 'undefined') {
      this.props.addItem(item, quantity);
    } else if (existingItem[0].item.name !== addedItem) {
      this.props.addItem(item, quantity);
    } else {
      /*Item is already in cart!*/
    }
  }

  logger = (subcategory) => {
    this.props.fetchItems(subcategory);
  }

  handleCategoryMenu = (category) => {
    let categoryName = category.category;
    let categoryDropdown = document.getElementById(categoryName);
    categoryDropdown.classList.toggle("show");
  }

  render() {
    
    const categoryMenu = this.props.data.map((category, cIndex) => {
      return (
        <div key={cIndex} className="category-menu">
          <button onClick={this.handleCategoryMenu.bind(this, category)}>{category.category}</button>
          <ul id={category.category} className="dropdown-content">
            {
              category.subcategories.map((subcategory, sIndex) => {
                return (
                  <li key={sIndex} onClick={this.logger.bind(this, subcategory)}>{subcategory.name}</li>
                )
              })
            }
          </ul>
        </div>
      );
    });

    const listProducts = this.items().map((item, iIndex) => {
      var styleItem = {
        backgroundImage: 'url(' + item.imagelink + ')'
      }
      return (
        <div key={item.name} className="col-md-4">
          <div className="item">
            <a href={'#/product?name=' + item.name} className="item-image" style={styleItem}> </a>
            <div className="item-details">
              <a href={'#/product?name=' + item.name}>
                <span className="item-name">{item.name}</span>
              </a>
              <span className="item-price">$ {item.price}</span>
            </div>
            <button className="btn btn-primary" onClick={this.handleAddItem.bind(this, item)}>Add</button>
          </div>
        </div>
      );
    });

    return (
      <main>
        <div className="page shopping-page">
          <div className="container">
            <div className="row">
              <div className="col">
                <div className="controls-bar">
                  <h3>{this.props.activeItems.name}</h3>
                  <span>{this.items().length} / {this.props.activeItems.items.length}</span>
                  <div className="products-filter">
                    <div className="products-instock">
                      <label>In Stock Only
                        <input type="checkbox" checked={this.state.checked} onChange={this.inStock} />
                      </label>
                    </div>
                    <div className="products-sort">
                      <label>Sort by </label>
                      <select value={this.state.sort} placeholder="None" onChange={this.handleSort}>
                        <option value="none">None</option>
                        <option value="price">Price</option>
                        <option value="alphabetical">Alphabetical</option>
                        <option value="rating">Rating</option>
                      </select>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-md-4">
                <aside className="categories-menu">
                  {categoryMenu}
                </aside>
              </div>
              <div className="col-md-8">
                <div className="row">
                  {listProducts}
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
    fetchItems: (subcategory) => { dispatch(fetchItems(subcategory)) }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shopping)