import React, { Component } from 'react';
import './App.css';

import ProductView from './components/ProductView';

class App extends Component {
  render() {
    return (
      <div className="App">
        <div className="productGrid">
        hello
          <ProductView products={this.props.products}/>
        </div>
      </div>
    );
  }
}

export default App;

App.defaultProps = {
  products: [
    {
      image: 'https://cdn.shopify.com/s/files/1/0054/5239/8659/products/image2xxl_8_370x472.jpg?v=1538454982',
      title: 'Product1',
      price: 200
    },
    {
      image: 'https://cdn.shopify.com/s/files/1/0054/5239/8659/products/image2xxl_8_370x472.jpg?v=1538454982',
      title: 'Product2',
      price: 100
    }
  ]
}
