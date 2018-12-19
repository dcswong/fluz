import React, { Component } from 'react';

import RatioWrapper from '../../common/ratiowrapper';

class ProductGrid extends Component {
  constructor(props) {
    super(props);
    this.state = {
    }
  }

  render() {
    var products = this.props.products;

    return (
      <div className="image-wrapper">
      {products.map((product, i) => (
        <div className="col-md-4" key={i}>
          <RatioWrapper ratio="100%">
            {/*Imageframe*/}
            <img className="image" src={product.image}/>
          </RatioWrapper>
        </div>
      ))}
      </div>
    )
  }
}
export default ProductGrid
