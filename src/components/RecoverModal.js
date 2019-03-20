import React, { Component } from 'react';
import styled from 'styled-components';
import API from '../helpers/api';

const $ = window.$;

const ContainerDiv = styled.div`
  background-color: #000000;

`;
const ModalDiv = styled.div`
  text-align: center;
`;

const LogoDiv = styled.div`
    display: flex;
    flex-direction: column;
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

class RecoverModal extends Component{
    constructor (props) {
        super(props);
        this.state = {}

    }

    swapModal() {
        $('#regModal').modal('hide');
        $('#loginModal').modal('show');
        $('#recoverModal').modal('hide');
    }

    onChangeRegisterInfo(value, field) {
        let user = this.state.user || {};
        user[field] = value;
        this.setState({user});
    }

    getValidationCode() {
        let {counting} = this.state;
        counting = 60;
        let user = this.state.user || {};
        // not email entered
        if (!(user.email || '').length) {
            // notify.show('Email address required.', 'error');
        } else {
            API.create('/api/validations', user, res => {
                if((res || {}).result) {
                    // succeeded
                    this.interval = setInterval(() => {
                        if(counting > 0) {
                            counting -= 1
                            this.setState({counting: counting})
                        } else {
                            clearInterval(this.interval);
                        }
                    }, 1000);

                    this.setState({
                        codeSent: true
                    }, () => {
                        // notify.show('Please type in Validation Code.', 'success');
                    });
                }
            });
        }
    }

    verifyValidationCode() {
        let user = this.state.user || {};
        // login
        API.create('/api/sessions', user, res => {
            // succeeded
            if((res || {}).result) {
                this.setState({
                    counting: 0,
                    codeVerified: true
                }, () => {
                    // notify.show('Please Set you new Password', 'success');
                });
            }
        });
    }

    resetPassword() {
        let form = this.state.form || {};
        // login
        API.update('tokens/session', {
            passwd: form.newpasswd,
            confpasswd: form.confnewpasswd
        }, res => {
            // succeeded
            if ((res || {}).result) {
                this.swapModal()
            }
        });
    }

    render() {
        const {counting, codeVerified} = this.state;

        return(
            <div>
                <ModalDiv className="modal fade" id="recoverModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true" data-backdrop="false">
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
                                        <span style={{marginTop: 10, color: "#000", fontSize: 24, fontWeight: 500}}>
                                            重設密碼
                                        </span>
                                        <span style={{marginTop: 10, color: "#000", fontSize: 14, fontWeight: 500}}>
                                            請輸入你的註冊電郵以重設你的登入密碼。
                                        </span>
                                    </LogoDiv>
                                    
                                    <LoginInfo>
                                        {counting ? 
                                            <div style={{display: "flex", alignItems: 'center'}}>
                                                <input type="email" className="text-field" placeholder="驗證碼" onChange={(event) => this.onChangeRegisterInfo(event.target.value, 'passwd')}></input>
                                                <span style={{marginLeft: 10}}>
                                                    {counting}
                                                </span>
                                            </div> :
                                            <input type="email" className="text-field" placeholder="電郵地址/手機號碼" onChange={(event) => this.onChangeRegisterInfo(event.target.value, 'email')}></input>}
                                        {codeVerified && 
                                            <div>
                                                <input type="password" className="text-field" placeholder="New password" onChange={(event) => this.onChangeRegisterInfo(event.target.value, 'newpasswd')}></input>
                                                <input type="password" className="text-field" placeholder="Confirm new password" onChange={(event) => this.onChangeRegisterInfo(event.target.value, 'confnewpasswd')}></input>
                                            </div>
                                        }
                                    </LoginInfo>

                                    <div>
                                        {counting ? 
                                            <LoginBtn className="loginbtn-top" onClick={this.verifyValidationCode.bind(this)}>
                                                確認重設碼
                                            </LoginBtn> :
                                            <div>
                                                <LoginBtn className="loginbtn-top" onClick={this.getValidationCode.bind(this)}>
                                                    取得重設碼
                                                </LoginBtn>
                                                <LoginBtn className="register-bottom" onClick={this.swapModal.bind(this)}>登入</LoginBtn>
                                            </div>}
                                        {codeVerified && 
                                            <LoginBtn className="loginbtn-top" onClick={this.resetPassword.bind(this)}>
                                                確認重設密碼
                                            </LoginBtn>}
                                    </div>
                                </BodyDiv>
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
export default RecoverModal;
