import React, { Component } from 'react';
import styled from 'styled-components';

const $ = window.$;

const ContainerDiv = styled.div`
  background-color: #000000;

`;
const ModalDiv = styled.div`
  text-align: center;
`;

const CenterText = styled.div`

`;

const BodyDiv = styled.div`
  padding: 0 10%;
  text-align: center;
`;

const LoginInfo = styled.div`
  margin-top: 50px;
`;

const LoginSetting = styled.div`
  font-size: 12px;
  margin: 3% 2%;
  display: flex;
  justify-content: space-between;
`;

const Logo = styled.h3`
  text-align: center;
  :after{

    content: ".";
    color: red;
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
  width: 400px;
  height: 40px;
  border: 1px solid #000000;
  margin-top: 5%;

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
  font-weight: lighter;
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
        <ModalDiv className="modal fade" id="loginModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
          <div className="modal-dialog" role="document">
            <div className="modal-content">
              <div className="modal-header">

                <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                  <CloseTag aria-hidden="true">&times;</CloseTag>
                </button>
              </div>
              <div className="modal-body">
                <BodyDiv>
                  <CenterText>
                    <Logo className="modal-title">FLUZ</Logo>
                  </CenterText>
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
                </BodyDiv>
                <div>
                  <LoginBtn className="loginbtn-top">登入</LoginBtn>
                </div>
                <div>
                  <LoginBtn className="loginbtn-bottom" onClick={this.swapToRegModal}>立即加入</LoginBtn>
                </div>
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
