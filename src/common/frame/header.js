import React, { Component } from 'react';
import { Link, NavLink, withRouter } from 'react-router-dom';
import SearchBar from '../../scenes/widgets/searchBar';
import styled from 'styled-components';
import Sidebar from './sidebar';
import SearchSidebar from './SearchSidebar';
import UIHelper from '../../helpers/UIHelper';

/*const MenuBtn = styled.button`
  background: none;
  border: none;
  padding: 0;
  cursor: pointer;
  align-items: center;
  justify-content: center;
  margin-top: 30%;
`;*/

const LogoDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const Logo = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 80px;
  height: 20px;
  @media (min-width: 768px) {
    margin-left: 2%;
  }
  @media (max-width: 767px) {
    margin-left: 3%;
  }
`;

class Header extends Component {
  constructor(props) {
    super(props)
    this.state = {
      categories: []
    };
  }

  onClickSearch() {
    this.SearchSidebar.openMenu()
  }
  
  onClickMenu() {
    this.Sidebar.openMenu()
  }

  componentDidMount() {
    fetch(`/api/shops/session`, {
			method: 'GET'
		})
		.then(response => response.json())
		.then(result => {
			if(result.result) {
				this.setState({
					categories: (result.data.shops[0].tags).split(',')
				})
			}
		});
  }

  render () {
    const categories = this.state.categories || [];
    const {user} = this.props;
    
    return (
      <nav id="navbar" className="navbar navbar-default navbar-expand-md">
          {/*<div className="collapse navbar-collapse justify-content-md-between" id="navbar-content">
            <MenuBtn>
              <img height="25px" width="25px" src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADIAAAAyCAYAAAAeP4ixAAAABHNCSVQICAgIfAhkiAAAAAlwSFlzAAADmwAAA5sBPN8HMQAAABl0RVh0U29mdHdhcmUAd3d3Lmlua3NjYXBlLm9yZ5vuPBoAAABYSURBVGiB7dbBDYAwDATBGKWk9AdUHorAkq1opoK7344BQIFYaz3VIzLMvfddPSLDVT0giyPdzIh4q0cAAElkfDfHRKMj3ch4ADiJjO/mmGh0pBsZD8AfH0ASD4ILc/QhAAAAAElFTkSuQmCC"/>
            </MenuBtn>
          </div>*/}
          <div onClick={this.onClickMenu.bind(this)}>
            {UIHelper.renderSVG('menu', {height: 23, cursor: 'pointer'})}
          </div>
          
          <LogoDiv>
            <a href="/">
              <Logo src="../assets/imgs/F-logo.png"/>
            </a>
          </LogoDiv>
          <div onClick={this.onClickSearch.bind(this)}>
            {UIHelper.renderSVG('search-black', {height: 23, cursor: 'pointer'})}
          </div>
          <Sidebar ref={refs => this.Sidebar = refs} categories={categories} user={user}/>
          <SearchSidebar ref={refs => this.SearchSidebar = refs}/>
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
