import React, {Component} from 'react';

class Header extends Component {

  render () {

    return (
      <div className="header">
        <div className="menu col-sm-2">
          <img src="/assets/imgs/icons/icons8-menu-filled-50.png" height="20" width="20"/>
        </div>
        <div className="logo col-lg-6 col-md-2 offset-md-1">
          <img src="/assets/imgs/lazynoon.png" height="65" width="80"/>
        </div>
        <div className="cart col-sm-2">
          <img className="cart-img" src="/assets/imgs/icons/icons8-shopping-basket-30.png" height="30" width="30"/>
        </div>
      </div>
    )
  }
}
export default Header
