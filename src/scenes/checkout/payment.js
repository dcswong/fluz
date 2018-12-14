import React from 'react';
import { translate } from "react-i18next";
import { Base64 } from 'js-base64';
import NumberFormat from 'react-number-format';


module.exports = translate('checkout')(class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            methods: []
        };
    }
    
    
    getPaymentMethods() {
        var self = this;
        // get user data
        var user = self.props.checkout.props.user;
        // get ef lockers
        fetch(AEP + "/methods", {
            method  : 'GET',
            headers : {
                "Content-Type"  : "application/json",
                "Authorization" : 'Basic ' + Base64.encode(user.id + ':' + user.token)
            }
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            // get methods
            var methods = (result.data || {}).methods || [];
            // get order info
            self.setState({
                methods: methods
            }, () => $(':input[name="payment[method]"]:first').parent().trigger('click'));
        }).catch(function(error) {
            alert((error || {}).message);
        });
    }
    showNewMethodForm(e) {
        $('#payment-form').show();
    }
    hideNewMethodForm(e) {
        $('#payment-form').hide();
    }


    componentDidMount() {
        this.getPaymentMethods();
    }
    render() {
        var self = this;
        var t = self.props.t;
        var methods = self.state.methods || [];


        return (
            <div className="section">
                <h6>
                    {t('payment.label')}
                    &nbsp;<i className="fa fa-cc-amex" aria-hidden="true"></i>
                    &nbsp;<i className="fa fa-cc-mastercard" aria-hidden="true"></i>
                    &nbsp;<i className="fa fa-cc-visa" aria-hidden="true"></i>
                </h6>
                <ul style={{
                    padding: '0 5px',
                    listStyle: 'none'
                }}>
                    {methods.map((method, i) => {
                        return <li key={i}>
                            <div>
                                <label onClick={self.hideNewMethodForm.bind(self)}>
                                    <input name="payment[method]" type="radio" value={method.id}/>
                                    &nbsp;<i className={"fa fa-cc-" + method.issuer}></i>
                                    &nbsp;Ending in <b>{method.number}</b>
                                </label>
                            </div>
                        </li>;
                    })}
                    <li>
                        <div>
                            <label onClick={self.showNewMethodForm.bind(self)}>
                                <input name="payment[method]" type="radio" value="0"/>
                                &nbsp;{t('payment.methods.addNew')}
                            </label>
                        </div>
                        <div id="payment-form" className="form" style={{
                            display: 'none',
                            backgroundColor: 'rgb(249, 249, 249)',
                            padding: '10px 15px',
                            borderRadius: '3px',
                            border: '1px solid rgb(231, 231, 231)',
                            marginTop: 5
                        }}>
                            <div className="field">
                                <label>{t('payment.methods.card.no')}</label>
                                <br/>
                                <NumberFormat id="payment[number]" name="payment[number]" style={{
                                    borderRadius: 5,
                                    border: '1px solid #d3d3d3',
                                    width: '100%',
                                    padding: '5px 10px'
                                }} format="#### #### #### ####" placeholder="0000 0000 0000 0000" onChange={self.props.checkout.changeValue.bind(self.props.checkout)}/>
                            </div>
                            <br/>
                            <div>
                                <div className="field" style={{
                                    display: 'inline-block',
                                    width: '49%'
                                }}>
                                    <label>{t('payment.methods.card.expDate')}</label>
                                    <br/>
                                    <NumberFormat id="payment[date]" name="payment[date]" format="##/##" style={{
                                        borderRadius: 5,
                                        border: '1px solid #d3d3d3',
                                        width: '100%',
                                        padding: '5px 10px'
                                    }} placeholder="MM/YY" mask={['M', 'M', 'Y', 'Y']} onChange={self.props.checkout.changeValue.bind(self.props.checkout)}/>
                                </div>
                                <div className="field" style={{
                                    display: 'inline-block',
                                    width: '49%',
                                    marginLeft: '2%'
                                }}>
                                    <label>{t('payment.methods.card.cvc')}</label>
                                    <br/>
                                    <NumberFormat id="payment[cvc]" name="payment[cvc]" format="###" style={{
                                        borderRadius: 5,
                                        border: '1px solid #d3d3d3',
                                        width: '100%',
                                        padding: '5px 10px'
                                    }} placeholder="000" onChange={self.props.checkout.changeValue.bind(self.props.checkout)}/>
                                </div>
                            </div>
                        </div>
                    </li>
                </ul>
                <div className="instruction">
                    <p>*{t('payment.methods.guide')}</p>
                </div>
            </div>
        );
    }
});
