import React, { Component } from 'react';
import styled from 'styled-components';
import GoogleLoginButton from './GoogleLoginButton';
import FacebookLoginButton from './FacebookLoginButton';

const $ = window.$;

const ContainerDiv = styled.div`
  background-color: #000000;

`;
const ModalDiv = styled.div`
  text-align: center;
`;

const LogoDiv = styled.div`
  width: 100%;
  text-align: center;
`;

const BodyDiv = styled.div`
 @media (min-width: 768px) {
   padding: 0 10%;
 }
 @media (max-width: 767px) {
   padding: 0 5%;
 }
  text-align: center;
`;

const LoginInfo = styled.div`
  margin-top: 7%;
`;

const LoginSetting = styled.div`
  font-size: 12px;
  margin: 3% 2%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.img`
  display: inline-block;
  margin: 0 auto;
  width: 80px;
  height: 20px;
  @media (max-width: 767px) {
  }
`;

const Remember = styled.input`
  [type="checkbox"]
  &:checked ~ label{
    background-color: #ffffff;
    color: #000000;
  }

`;

const LoginBtn = styled.button`
@media (min-width: 768px) {
  width: 400px;
  height: 40px;
}
@media (max-width: 767px) {
  width: 280px;
  height: 30px;
  font-size: 12px;
}
  border: 1px solid #000000;
  margin-top: 5%;
  border-radius: 2px;

  &.loginbtn-top{
    color: #ffffff;
    background-color: #000000;
  }
`;

const Terms = styled.div`
  padding: 5% 10%;
  font-size: 12px;
`;

const CloseTag = styled.span`
  font-size: 30px;
`;

class LoginModal extends Component{
  constructor (props) {
    super(props);
    this.swapToRegModal = this.swapToRegModal.bind(this);
  }

  swapToRegModal() {
    $('#loginModal').modal('hide');
    $('#regModal').modal('show');
  }

  render(){
    return(
      <div>
        <ModalDiv className="modal" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <CloseTag aria-hidden="true">&times;</CloseTag>
                </button>
              </div>
              <div className="modal-body">
                <BodyDiv>
                  <LogoDiv>
                    <Logo src="../assets/imgs/F-logo.png"/>
                  </LogoDiv>
                  <LoginInfo>
                    <input type="email" className="text-field" placeholder="電郵地址/手機號碼"></input>
                    <input type="email" className="text-field" placeholder="請輸入密碼"></input>
                  </LoginInfo>
                  <LoginSetting>
                    <div>
                      <Remember type="checkbox"/>記住用戶名
                    </div>
                    <a href="">忘記密碼</a>
                  </LoginSetting>
                  <div>
                    <LoginBtn className="loginbtn-top">登入</LoginBtn>
                  </div>
                  <div>
                    <FacebookLoginButton className="fb-login-button"/>
                    <GoogleLoginButton/>
                  </div>
                  <div>
                    <LoginBtn className="loginbtn-bottom" onClick={this.swapToRegModal}>立即加入</LoginBtn>
                  </div>
                </BodyDiv>
                <Terms>
                  如你提交個人資料，將被視為你已閱讀、理解、同意並承諾遵守
                <a href="" className="no-deco-link">通用條款和條件</a>，<a href="" className="no-deco-link">使用條款</a> 及<a href="" className="no-deco-link">FLUZ.網路私隱政策</a> 。
                </Terms>
              </div>
              <div className="modal-footer">
              </div>
          </div>
        </div>
        </ModalDiv>
      </div>
    )
  }

}
export default LoginModal;
