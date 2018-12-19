import React, { Component } from 'react';

import Header from './header';
import Footer from './footer';
import Category from '../../scenes/category';

class Frame extends Component {
  render () {
    return (
      <React.Fragment>
        <div className="frame">
          <Header/>
          <Category/>
          <Footer/>
        </div>
      </React.Fragment>
    )
  }
}
export default Frame
