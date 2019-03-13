import React, { Component } from 'react';
import { slide as Menu } from 'react-burger-menu';
import styled from 'styled-components';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';


const CatName = styled.a`
  text-transform: capitalize;
`;

const Subtitle = styled.div`
  margin-top: 10px;
  margin-bottom: 10px;
`;

const SubCat = styled.a`
  cursor: pointer;
  display: inline-block;
  margin-left: 20px;
`;

class Sidebar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
  }

  handleStateChange (state) {
    this.setState({menuOpen: state.isOpen})
  }

  closeMenu () {
    this.setState({menuOpen: false})
  }

  render () {
    var categories = this.props.categories;
    console.log('categories: ', categories);

    return (
      <Menu isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        {categories.map((cat, index) => (
          <CatName onClick={() => this.closeMenu()} className="menu-item" href="/" key={index}>
            {cat}
          </CatName>
        ))}
        <Subtitle id="subtitle">
          Follow Us
        </Subtitle>
        <SubCat onClick={() => this.closeMenu()}>
          Facebook
        </SubCat>
        <SubCat onClick={() => this.closeMenu()}>
          Instagram
        </SubCat>
        <Subtitle id="subtitle">
          Members
        </Subtitle>
        <SubCat data-toggle="modal" data-target="#loginModal">
          Log In
        </SubCat>
        <SubCat data-toggle="modal" data-target="#regModal">
          Sign Up
        </SubCat>
        <LoginModal/>
        <RegisterModal/>
      </Menu>
    );
  }
}
export default Sidebar

/*            <FacebookLoginButton/>
            <GoogleLoginButton/>
*/
