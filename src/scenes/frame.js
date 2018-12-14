import React from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink } from 'react-router-dom';
import { translate } from "react-i18next";

//import Cart from './cart/cart';

module.exports = translate('frame')(class Frame extends React.Component {

    render() {
        return <div className="frame">
            <div className="header">
              <div className="menu col-sm-2">
                <img src="/assets/imgs/icons/icons8-menu-filled-50.png" height="20" width="20"/>
              </div>
              <div className="logo col-lg-8 col-md-6 offset-md-1">
                <img src="/assets/imgs/lazynoon.png" height="60" width="75"/>
              </div>
              <div className="cart col-sm-1">
                <img src="/assets/imgs/icons/icons8-shopping-basket-30.png" height="30" width="30"/>
              </div>
            </div>
            <div className="category-block">
              <div className="col-sm-2"></div>
              <div className="category col-lg-8 col-sm-5 offset-md-1">
                <center>
                  <h1 className="cat-style">Tops</h1>
                </center>
              </div>
            </div>
        </div>
    }
});
