import React, { Component } from 'react';
import styled from 'styled-components';


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

class RegisterModal extends Component{
  constructor (props) {
    super(props);
    this.state = {}
    
    this.swapModal = this.swapModal.bind(this);
  }

  swapModal() {
    $('#regModal').modal('hide');
    $('#loginModal').modal('show');
    $('#recoverModal').modal('hide');
  }

  onChangeRegisterInfo(value, field) {
    let user = this.state.user || {}
    user[field] = value
    this.setState({user});
  }

  onClickRegister() {
    const {user} = this.state;
    if(!user['first_name']) {
      return;
    }
    if(!user['last_name']) {
      return;
    }
    if(!user['email']) {
      return;
    }
    if(!user['passwd']) {
      return;
    }
    if(!user['confpasswd']) {
      return;
    }
    this.props.createUser(user)
  }

  render(){
    return(
      <div>
        <ModalDiv className="modal fade" id="regModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
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
                    <input type="email" className="text-field" placeholder="電郵地址/手機號碼" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'email')}></input>
                    <input type="text" className="text-field" placeholder="姓" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'last_name')}></input>
                    <input type="text" className="text-field" placeholder="名" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'first_name')}></input>
                    <input type="password" className="text-field" placeholder="請輸入密碼" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'passwd')}></input>
                    <input type="password" className="text-field" placeholder="請再次輸入密碼" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'confpasswd')}></input>
                  </LoginInfo>
                  <LoginSetting>
                  </LoginSetting>
                  <div>
                    <LoginBtn className="loginbtn-top">立即加入</LoginBtn>
                  </div>
                  <div>
                    <LoginBtn className="register-bottom" onClick={this.swapModal}>登入</LoginBtn>
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
export default RegisterModal;
