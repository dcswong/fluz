import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SearchBar from '../../scenes/widgets/searchBar';
import styled from 'styled-components';

const MenuBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 17%;
`;

const Logo = styled.img`
  height: 100px;
  width: 80px;
`;

class Header extends Component {

  render () {

    return (
      <nav id="navbar" className="navbar navbar-default navbar-expand-md">
        <div className="container-fluid mar-container">
          <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbar-content" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA0SURBVEiJY2AYBcMeMMIYTk5O/6lp8L59+xgZGBgYmKhp6CgYnGA0FY0CysFoKhoFQwAAAL0fDAptPLs1AAAAAElFTkSuQmCC"/>
          </button>

          <div className="collapse navbar-collapse justify-content-md-between" id="navbar-content">
            <MenuBtn>
              <img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAABfAAAAXwBsrqMZwAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAAA0SURBVEiJY2AYBcMeMMIYTk5O/6lp8L59+xgZGBgYmKhp6CgYnGA0FY0CysFoKhoFQwAAAL0fDAptPLs1AAAAAElFTkSuQmCC"/>
            </MenuBtn>
          </div>
          <div className="logo">
            <center>
              <a href="/">
                <Logo src="../assets/imgs/FLUZ.svg"/>
              </a>
            </center>
          </div>
        </div>
      </nav>
    )
  }
}
export default Header



/*
<a href=""  data-toggle="modal" data-target="#loginModal" className="loginIconFrame">
  <img className="iconPic" src="https://img.icons8.com/material/24/000000/user-male-circle.png"/>
</a>

<div className="menu col-sm-2">
  <img src="/assets/imgs/icons/icons8-menu-filled-50.png" height="20" width="20"/>
</div>
<div className="cart col-sm-2">
  <img className="cart-img" src="/assets/imgs/icons/icons8-shopping-basket-30.png" height="30" width="30"/>
</div>
</div>
<img src="/assets/imgs/lazynoon.png" height="65" width="80"/>

  */
