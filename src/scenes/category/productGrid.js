import React, { Component } from 'react';

import RatioWrapper from '../../common/ratiowrapper';

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // isHovering: false
    };
  }
  //
  // mouseHover() {
  //   this.setState(this.toggleHoverState);
  // }
  //
  // toggleHoverState(state) {
  //   return {
  //     isHovering: !state.isHovering,
  //   };
  // }

  render() {
    var products = this.props.products;


    return (
      <div className="image-wrapper">
      {products.map((product, i) => (
        <div className="image-grid col-md-4" key={i}>
          <RatioWrapper ratio="100%" className="ratiowrapper">
            {/*Imageframe*/}
            <img className="image" src={product.image}/>
          </RatioWrapper>
          <div className="productDetails">
            <div className="product-wrapper">
              <h5 className="product-name">{product.name}</h5>
              <p className="price-tag">$ {product.price}</p>
            </div>
          </div>
        </div>
      ))}
      </div>
    )
  }
}
export default ProductGrid
