import React, { Component } from 'react';

import Header from './header';
import Category from '../../scenes/category';

import Landing from '../../scenes/landing';
import Articles from '../../scenes/Articles';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';

import Fluzfooter from '../../scenes/Fluzfooter';

class Frame extends Component {

  render () {

    return (
      <React.Fragment>
        <div className="frame">
          <Header/>
          <LoginModal/>
          <RegisterModal/>
            {React.Children.map(this.props.children, (child) => React.cloneElement(child))}
          <Fluzfooter/>
        </div>
      </React.Fragment>
    )
  }
}
export default Frame
