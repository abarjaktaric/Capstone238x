import React, { Component } from 'react';
import { connect } from 'react-redux';

import { fetchItems } from '../actions/postActions';
import { addItem } from '../actions/addItem';
import '../css/Shopping.css';
//* rubric79 - Used internal css *//

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
      //* rubric29 - Display only product that are in stock *//
      return this.sort(items.filter(item => item.stock !== "0"));
    } else {
      return this.sort(items);
    }
  }

  sort(items) {
    //* rubric33 - sort function depend of selected *//
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
    //* rubric30 - add 1 unit of product in cart if product isnt in cart *//
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
    //* rubric26 - Fetch items from subcategory *//
    this.props.fetchItems(subcategory);
  }

  handleCategoryMenu = (category) => {
    //* rubric25 - connectin dropdown with button, on click toggle class .show = display:block *//
    let categoryName = category.category;
    let categoryDropdown = document.getElementById(categoryName);
    categoryDropdown.classList.toggle("show");
  }

  render() {
    //* rubric19 - Listing categories and subcategories from data *//
    const categoryMenu = this.props.data.map((category, cIndex) => {
      return (
        <div key={cIndex} className="category-menu">
          {/* rubric25 - Category name as button on click calling handlingCategoryMenu function */}
          <button onClick={this.handleCategoryMenu.bind(this, category)}>{category.category}</button>
          <ul id={category.category} className="dropdown-content">
            {
              category.subcategories.map((subcategory, sIndex) => {
                return (
                  //* rubric26 - On click subcategory call loger *//
                  <li key={sIndex} onClick={this.logger.bind(this, subcategory)}>{subcategory.name}</li>
                )
              })
            }
          </ul>
        </div>
      );
    });
    //* rubric20 - List all selected items in grid cell *//
    const listProducts = this.items().map((item, iIndex) => {
      var styleItem = {
        backgroundImage: 'url(' + item.imagelink + ')'
      }
      return (
        <div key={item.name} className="col-md-4">
          <div className="item">
            {/* rubric21 - Name of product in grid cell as link */}
            {/* rubric31 - on image click go to page Product details */}
            {/* rubric46 - on image click direct to link : #product¨name=productname */}
            <a href={'#/product?name=' + item.name} className="item-image" style={styleItem}> </a>
            <div className="item-details">
              {/* rubric23- Image of product in grid cell as link*/}
              {/* rubric32 - on title click direct to link : #product¨name=productname */}
              <a href={'#/product?name=' + item.name}>
                <span className="item-name">{item.name}</span>
              </a>
              {/* rubric22 - Pricee of product in grid cell */}
              <span className="item-price">$ {item.price}</span>
            </div>
            {/* rubric24 - Button labeled Add*/}
            {/* rubric30 - on click call function handleAddItem */}
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
                {/* rubric14 - Controls bar div */}
                <div className="controls-bar">
                  {/* rubric15 - Displayed selected category name in heading */}
                  {/* rubric15 - Displayed selected subcategory name in heading */}
                  <h3>{this.props.activeItems.name}</h3>
                  {/* rubric16 - Displayed number of shown items (via length) of total items in array */}
                  {/* rubric28 - Displayed number are changing acording if In Stock Only is toggled */}
                  <span>{this.items().length} / {this.props.activeItems.items.length}</span>
                  <div className="products-filter">
                    <div className="products-instock">
                      {/* rubric17 - In stock only  checkbox with label*/}
                      <label>In Stock Only
                        <input type="checkbox" checked={this.state.checked} onChange={this.inStock} />
                      </label>
                    </div>
                    <div className="products-sort">
                      {/* rubric18 - Dropdown with options with label sort by  */}
                      <label>Sort by </label>
                      {/* rubric33 - on select change call function handleSort */}
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
                  {/* rubric19 - Display Category Menu */}
                  {categoryMenu}
                </aside>
              </div>
              <div className="col-md-8">
                <div className="row">
                  {/* rubric20 - Displaying items */}
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