import React, { Component } from 'react';
import lodash from 'lodash';
import { slide as Menu } from 'react-burger-menu';
import styled, {createGlobalStyle} from 'styled-components';
import LoginModal from '../../components/LoginModal';
import RegisterModal from '../../components/RegisterModal';
import RecoverModal from '../../components/RecoverModal';
import API from '../../helpers/api';


const GlobalStyle = createGlobalStyle`
  .bm-menu {
    width: 100%;
    background-color: black;
  }
  .bm-cross-button {
    left: 30px
  }
`

const CatName = styled.a`
  width: fit-content;
  text-transform: capitalize;
  color: #fff;
  font-size: 30px;
  font-weight: 300;
  :focus {
    outline: none;
  }
`;

const Subtitle = styled.div`
  width: fit-content;
  margin-top: 10px;
  margin-bottom: 10px;
  color: #727272;
`;

const SubCat = styled.div`
  width: fit-content;
  cursor: pointer;
  display: inline-block;
  margin-right: 20px;
  color: #fff;
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

  openMenu () {
    this.setState({menuOpen: true})
  }

  createUser(user) {
    let canLogin = false;
    API.create('/api/consumers', user, (result) => {
        // signup.account.exists
        //success create, => do login
        if(result.result) {
          canLogin = true;
        } else {
          if (((result || {}).messages || []).length) {
            lodash.forEach(result.messages, (message, index) => {
                //already have account, => do login
                if(/signup.account.exists/g.test(message)) {
                  canLogin = true;
                }
            })
          }
        }
        canLogin && this.loginUser(user)
    })
  }

  loginUser(user) {
    const loginUser = {
      email: user.email,
      passwd: user.passwd
    }
    API.create('/api/sessions', loginUser, (result) => {
      if(result.result) {
        window.location.reload();
      } else {
        $('#loginModal').modal('hide');
      }
    })
  }

  onClickLogout() {
    API.delete('/api/consumers/session', res => {
        if ((res || {}).result) {
          window.location.reload();
        }
    });
  }

  render () {
    const {user, categories} = this.props;
    return (
      <Menu width={'100%'} isOpen={this.state.menuOpen} onStateChange={(state) => this.handleStateChange(state)}>
        <GlobalStyle/>
        {categories.map((cat, index) => (
          <CatName onClick={() => this.closeMenu()} className="menu-item" href={`/${cat}`} key={index}>
            {cat}
          </CatName>
        ))}

        <div style={{marginTop: 100, width: 'fit-content'}}>
          <Subtitle>
            Members
          </Subtitle>
          {user ?
              <div style={{display: 'flex'}}>
                <SubCat style={{fontStyle: 'italic'}}>
                  {user.email}
                </SubCat>
                <SubCat onClick={() => {this.onClickLogout()}}>
                  Logout 
                </SubCat> 
              </div> :
              <div style={{display: 'flex'}}>
                <SubCat data-toggle="modal" data-target="#loginModal">
                  Log In
                </SubCat>
                <SubCat data-toggle="modal" data-target="#regModal">
                  Sign Up
                </SubCat>
              </div>
          }
        </div>

        <div style={{marginTop: 50, width: 'fit-content'}}>
          <Subtitle>
            Follow Us
          </Subtitle>

          <div style={{display: 'flex'}}>
            <SubCat onClick={() => this.closeMenu()}>
              Facebook
            </SubCat>
            <SubCat onClick={() => this.closeMenu()}>
              Instagram
            </SubCat>
          </div>
        </div>
        <LoginModal
          createUser={(user) => this.createUser(user)}
          loginUser={(user) => this.loginUser(user)}
        />
        <RegisterModal
          createUser={(user) => this.createUser(user)}
        />
        <RecoverModal
        />
      </Menu>
    );
  }
}
export default Sidebar