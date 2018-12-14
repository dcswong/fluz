import React from 'react';
import { translate } from "react-i18next";
import qs from 'qs';
import { Base64 } from 'js-base64';
import Modal from 'react-responsive-modal';
import Spinner from 'react-spinkit';


import Frame from '../frame';


import Shipping from './shipping/shipping';
import Payment from './payment';

module.exports = translate('checkout')(class Checkout extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }


    // --- custom handler --- //
    changeValue(e) {
        // save form data
        this.setState(this.getFormData());
        console.log('HI there')
    }



    checkout(e) {
        var self = this;
        // get shop id
        var shopId = self.props.feed.props.match.params.shopId;
        // get button
        var btn = $(e.target);
        // lock
        btn.attr('disabled', true);
        // show loading dialog
        self.onOpenModal();
        // get user data
        var user = self.props.user;
        // make sure that user is connected
        if (user) {
            // get compaign id
            var feedId = self.props.feed.props.match.params.feedId;
            // make payment
            fetch(AEP + "/shops/" + shopId + "/payments?campaign=" + feedId, {
                method  : 'POST',
                headers : {
                    "Content-Type"  : "application/json",
                    "Authorization" : 'Basic ' + Base64.encode(user.id + ':' + user.token)
                },
                body    : JSON.stringify(self.getFormData())
            }).then(function(response) {
                return response.json();
            }).then(function(result) {
                // unlock
                btn.removeAttr('disabled');
                // show loading dialog
                self.onCloseModal();
                // failed
                if (!result || !result.result) {
                    alert(((result||{}).messages || []).join("\n"));
                } else {
                    self.onModalClosed = () => {
                        // go to succeeded page
                        self.props.feed.props.history.push('/completed', {
                            order   : ((result.data || {}).orders || [])[0] || {},
                            refer   : self.props.feed.props.location.pathname
                        });
                    };
                }
            }).catch(function(error) {
                alert((error || {}).message);
            });
        }
    }
    getFormData() {
        var self = this;
        // get form data
        var formData = qs.parse($(self.refs.form).find(':input').serialize());
        // save locker value
        formData.shipping.eflocker = (self.state.shipping || {}).eflocker || "";
        // return data
        return formData;
    }






    onOpenModal() {
        this.setState({ open: true });
    }
    onCloseModal() {
        this.setState({ open: false });
    }
    modalClosed() {
        var handler = this.onModalClosed;
        if (handler) {
            this.onModalClosed = null;
            handler();
        }
    }

    // --- /custom handler --- //
    









    
    






    render() {
        var self = this;
        var t = self.props.t;
        var user = self.props.user;
        var shippingCharge = self.props.shippingMethods[Object.keys(self.props.shippingMethods).shift()] || 0;
        return (
            <div id="checkout" ref="form">



                <div className="section" style={{
                    padding: '15px 25px'
                }}>
                    <h6 style={{
                        color: '#1c2d5b',
                        fontWeight: 600,
                        marginBottom: 15
                    }}>{t('contact.label')}</h6>
                    <div className="field">
                        <label>{t('contact.fields.email')}</label>
                        <br/>
                        <input name="contact[email]" type="text" style={{
                            borderRadius: 5,
                            border: '1px solid #d3d3d3',
                            width: '100%',
                            padding: '5px 10px'
                        }} defaultValue={(user.contact || {}).email || ""} onChange={self.changeValue.bind(self)}/>
                    </div>
                    <br/>
                    <div className="field">
                        <label>{t('contact.fields.firstName')}</label>
                        <br/>
                        <input name="contact[first]" type="text" style={{
                            borderRadius: 5,
                            border: '1px solid #d3d3d3',
                            width: '100%',
                            padding: '5px 10px'
                        }} defaultValue={(user.name || {}).first || ""} placeholder="eg. Tai Man" onChange={self.changeValue.bind(self)}/>
                    </div>
                    <br/>
                    <div className="field">
                        <label>{t('contact.fields.lastName')}</label>
                        <br/>
                        <input name="contact[last]" type="text" style={{
                            borderRadius: 5,
                            border: '1px solid #d3d3d3',
                            width: '100%',
                            padding: '5px 10px'
                        }} defaultValue={(user.name || {}).last || ""} placeholder="eg. Chan" onChange={self.changeValue.bind(self)}/>
                    </div>
                    <br/>
                    <div className="field">
                        <label>{t('contact.fields.tel')}</label>
                        <br/>
                        <input name="contact[phone]" type="text" style={{
                            borderRadius: 5,
                            border: '1px solid #d3d3d3',
                            width: '100%',
                            padding: '5px 10px'
                        }} defaultValue={(user.contact || {}).phone || ""} placeholder="eg. +85298765432" onChange={self.changeValue.bind(self)}/>
                    </div>
                </div>




                



                <Shipping checkout={self} methods={self.props.shippingMethods}/>
                <Payment checkout={self}/>











                <div className="section" style={{
                    padding: 25
                }}>
                    <button type="button" style={{
                        border: '1px solid #e8e8e8',
                        backgroundColor: '#3966e6',
                        borderRadius: 5,
                        padding: '10px 0',
                        color: '#fff',
                        width: '100%'
                    }} onClick={self.checkout.bind(self)}>
                        {t('orderNow')}
                        &nbsp;
                        (HK$<b ref="amount">{self.props.feed.state.amount}</b>
                        {shippingCharge > 0 ? <span>
                            &nbsp;+&nbsp;
                            <b>${shippingCharge}</b> {t('shipping.charge')}
                        </span> : null})
                    </button>
                </div>
                <Modal open={self.state.open||false} onClose={self.onCloseModal.bind(self)} showCloseIcon={false} onExited={self.modalClosed.bind(self)} closeOnOverlayClick={false} classNames={{
                    modal: 'react-modal'
                }} center>
                    <div style={{
                        padding: 20
                    }}>
                        <Spinner name="ball-scale-multiple" color="white"/>
                    </div>
                </Modal>
            </div>
        )
    }
});
