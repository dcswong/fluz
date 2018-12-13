import React, {Component} from 'react';

import StarRatingComponent from 'react-star-rating-component';


class ProductView extends Component {
  constructor(props) {
    super(props);
    this.state = {
      rating: 1
    };
  }

  renderImage() {
    return(
      <div>
      <img src="https://cdn.shopify.com/s/files/1/0054/5239/8659/products/image2xxl_8_370x472.jpg?v=1538454982"/>
      </div>
    )
  }

  onStarClick(nextValue, prevValue, name) {
    this.setState({rating: nextValue});
  }

  render() {
    var products = this.props.products;
    console.log(products);
    return (
      <div className="product">
        {products.map((product, i) => {
          return (
            <div key={i} className="productGrid">
              <img src={product.image} key={i}/>
              <p className="text">{product.title}</p>
              <div className="context-wrap">
                <div className="left">
                  <p className="price">${product.price}</p>
                </div>
                <div className="right">
                  <StarRatingComponent name="rate" starCount={5} onStarClick={this.onStarClick.bind(this)}>
                  </StarRatingComponent>
                </div>
                <button className="addToCart">Add to Cart</button>
              </div>
            </div>
          )
        })}
      </div>
    )
  }
}
export default ProductView;
