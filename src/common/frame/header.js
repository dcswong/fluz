import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SearchBar from '../../scenes/widgets/searchBar';

class Header extends Component {

  render () {

    return (
      <nav id="navbar" className="navbar navbar-default navbar-expand-md">
        <div className="container-fluid mar-container">
          <div className="collapse navbar-collapse justify-content-md-between" id="navbar-content">
            <ul className="nav navbar-nav flex-row">
              <li className="nav-item">
                <Link to="/articlesH">首頁</Link>
              </li>
              <li className="nav-item">
                <Link to="/articles">類別</Link>
              </li>
              

            </ul>
            <div className="logo col-sm-2 col-sm-3 offset-sm-4">
              <a href="/">
                <h3 className="logoName">FLUZ</h3>
              </a>
            </div>
          </div>
          <SearchBar/>
          <a href=""  data-toggle="modal" data-target="#loginModal" className="loginIcon">
            <img src="https://img.icons8.com/material/24/000000/user-male-circle.png"/>
          </a>
        </div>
      </nav>
    )
  }
}
export default Header

/*<div className="menu col-sm-2">
  <img src="/assets/imgs/icons/icons8-menu-filled-50.png" height="20" width="20"/>
</div>
<div className="cart col-sm-2">
  <img className="cart-img" src="/assets/imgs/icons/icons8-shopping-basket-30.png" height="30" width="30"/>
</div>
</div>
<img src="/assets/imgs/lazynoon.png" height="65" width="80"/>

  */
