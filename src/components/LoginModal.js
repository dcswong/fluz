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

const FbBtn = styled.button`
  width: 400px;
  height: 40px;
  border: 1px solid #4267b2;
  margin-top: 5%;
  color: white;
  text-align: center;
  background: url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHg9IjBweCIgeT0iMHB4Igp3aWR0aD0iMjQiIGhlaWdodD0iMjQiCnZpZXdCb3g9IjAgMCAyMjQgMjI0IgpzdHlsZT0iIGZpbGw6IzAwMDAwMDsiPjxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0ibm9uemVybyIgc3Ryb2tlPSJub25lIiBzdHJva2Utd2lkdGg9IjEiIHN0cm9rZS1saW5lY2FwPSJidXR0IiBzdHJva2UtbGluZWpvaW49Im1pdGVyIiBzdHJva2UtbWl0ZXJsaW1pdD0iMTAiIHN0cm9rZS1kYXNoYXJyYXk9IiIgc3Ryb2tlLWRhc2hvZmZzZXQ9IjAiIGZvbnQtZmFtaWx5PSJub25lIiBmb250LXdlaWdodD0ibm9uZSIgZm9udC1zaXplPSJub25lIiB0ZXh0LWFuY2hvcj0ibm9uZSIgc3R5bGU9Im1peC1ibGVuZC1tb2RlOiBub3JtYWwiPjxwYXRoIGQ9Ik0wLDIyNHYtMjI0aDIyNHYyMjR6IiBmaWxsPSJub25lIj48L3BhdGg+PGcgZmlsbD0iI2ZmZmZmZiI+PHBhdGggZD0iTTE3Ny4zMzMzMywyOGgtMTMwLjY2NjY3Yy0xMC4zMTMzMywwIC0xOC42NjY2Nyw4LjM1MzMzIC0xOC42NjY2NywxOC42NjY2N3YxMzAuNjY2NjdjMCwxMC4zMTMzMyA4LjM1MzMzLDE4LjY2NjY3IDE4LjY2NjY3LDE4LjY2NjY3aDcxLjEyOTMzdi02NC45NjkzM2gtMjEuODY4di0yNS40MzMzM2gyMS44Njh2LTE4LjcxMzMzYzAsLTIxLjY5MDY3IDEzLjI2MjY3LC0zMy41MTYgMzIuNjIsLTMzLjUxNmM2LjUyNCwtMC4wMTg2NyAxMy4wMzg2NywwLjMxNzMzIDE5LjUyNTMzLDAuOTh2MjIuNjhoLTEzLjMyOGMtMTAuNTQ2NjcsMCAtMTIuNiw0Ljk4NCAtMTIuNiwxMi4zMzg2N3YxNi4xOTMzM2gyNS4ybC0zLjI3NiwyNS40MzMzM2gtMjIuMDczMzN2NjUuMDA2NjdoMzMuNDY5MzNjMTAuMzEzMzMsMCAxOC42NjY2NywtOC4zNTMzMyAxOC42NjY2NywtMTguNjY2Njd2LTEzMC42NjY2N2MwLC0xMC4zMTMzMyAtOC4zNTMzMywtMTguNjY2NjcgLTE4LjY2NjY3LC0xOC42NjY2N3oiPjwvcGF0aD48L2c+PC9nPjwvc3ZnPg==') no-repeat #4267b2;
  background-size: contain;
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
    this.state = {}

    this.swapToRegModal = this.swapToRegModal.bind(this);
  }

  swapToRegModal() {   
    $('#loginModal').modal('hide');
    $('#regModal').modal('show');
    $('#recoverModal').modal('hide');
  }

  swapToRecoverModal() {   
    $('#loginModal').modal('hide');
    $('#regModal').modal('hide');
    $('#recoverModal').modal('show');
  }

  responseSocialMedia(user) {
    this.props.createUser(user)
  }

  onChangeLoginInfo(value, field) {
    let user = this.state.user || {}
    user[field] = value
    this.setState({user});
  }

  onClickLogin() {
    const {user} = this.state;
    if(!user['email']) {
      return;
    }
    if(!user['passwd']) {
      return;
    }
    this.props.loginUser(user)
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
                    <input type="email" className="text-field" placeholder="電郵地址/手機號碼" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'email')}></input>
                    <input type="password" className="text-field" placeholder="請輸入密碼" onChange={(event) => this.onChangeLoginInfo(event.target.value, 'passwd')}></input>
                  </LoginInfo>
                  <LoginSetting>
                    <div>
                      <Remember type="checkbox"/>記住用戶名
                    </div>
                    <a onClick={this.swapToRecoverModal.bind(this)}>忘記密碼</a>
                  </LoginSetting>
                  <div>
                    <LoginBtn className="loginbtn-top" onClick={this.onClickLogin.bind(this)}>登入</LoginBtn>
                  </div>
                  <div>
                    <FacebookLoginButton 
                      className="fb-login-button"
                      responseFacebook={(response) => this.responseSocialMedia(response)}
                    />
                    <GoogleLoginButton
                      responseGoogle={(response) => this.responseSocialMedia(response)}
                    />
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
