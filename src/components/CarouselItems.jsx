import React, { Component } from 'react';
import { connect } from 'react-redux';

class CarouselItems extends Component {

  render() {
    const carouselItemsList = [
      'Baguette',
      'Popcorn',
      'Chocolate Cookies',
      'Banana-Orange Juice',
      'Organic Whole Milk'
    ];

    var carouselItems = carouselItemsList.map((item, index) => {
      this.props.data.forEach(d => {
        d.subcategories.forEach(s => {
          s.items.forEach(it => {
            if (it.name === item) {
              item = it;
            }
          })
        })
      });

      var styleItems = {
        backgroundImage: 'url('+item.imagelink+')'
      }
      //* rubric01 - Displaying Slides from carouselItemsList array *//
      return (
        <div key={item.name} className="carousel-slide">
          {/* rubric09 - Background product image as link background - on click display productDetail component */}
          <a href={'#/product?name=' + item.name} style={styleItems}> </a>
        </div>
      );
    })

    return (
      <>
        {carouselItems}
      </>
    );
  }
}

const mapStateToProps = state => ({
  data: state.data.items
});

export default connect(mapStateToProps)(CarouselItems);