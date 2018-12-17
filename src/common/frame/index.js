import React from 'react';

import Header from './header';
import SubCategory from './subcat';
import Footer from './footer';

export default class Frame extends React.Component {
  render () {
    return (
      <React.Fragment>
        <div className="frame">
          <Header/>
          <SubCategory/>
          <Footer/>
        </div>
      </React.Fragment>
    )
  }
}
