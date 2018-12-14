import React from 'react';
import { translate } from "react-i18next";
import { Base64 } from 'js-base64';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


module.exports = translate('checkout')(class Payment extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shippings   : [],
            filter      : {},
            lockers     : {
                locations   : {},
                options     : {}
            }
        };
    }



    getShippings() {
        var self = this;
        // get user data
        var user = self.props.shipping.props.checkout.props.user;
        // get ef lockers
        fetch(AEP + "/shippings", {
            method  : 'GET',
            headers : {
                "Content-Type"  : "application/json",
                "Authorization" : 'Basic ' + Base64.encode(user.id + ':' + user.token)
            }
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            // get methods
            var shippings = (result.data || {}).shippings || [];
            // get order info
            self.setState({
                shippings: shippings
            }, () => $(':input[name="shipping[method]"]:first').parent().trigger('click'));
        }).catch(function(error) {
            alert((error || {}).message);
        });
    }
    getLockers() {
        var self = this;
        var locale = {
            zh_HK: 'zh-hant',
            en_US: 'en'
        }[self.props.shipping.props.checkout.props.user.locale || 'en_US'];
        // get ef lockers
        fetch("/assets/integration/eflockers.json", {
            method  : 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            // get areas
            var lockers = {}, locations = {};
            (result || []).forEach((row) => {
                var address = row['name_translations']['en'].split(',');
                var district = row['district_translations'][locale];
                var area = ((address[address.length - 1].match(/^ *(Hong Kong|HK|KLN|Kowloon|NT|New Territories) */i) || []).pop() || '').trim();
                area = {
                    'Hong Kong'         : 'HK',
                    'New Territories'   : 'NT',
                    'Kowloon'           : 'KLN'
                }[area] || area;
                lockers[area] = lockers[area] || {};
                lockers[area][district] = lockers[area][district] || [];
                lockers[area][district].push({
                    label: row['name_translations'][locale],
                    value: row.code
                });
                locations[row.code] = row['name_translations'][locale];
            });
            // get order info
            self.setState({
                lockers: {
                    locations   : locations,
                    options     : lockers
                }
            });
        }).catch(function(error) {
            alert((error || {}).message);
        });
    }
    showNewShippingForm(e) {
        $(this.refs.form).show();
    }
    hideNewShippingForm(e) {
        $(this.refs.form).hide();
    }
    


    setFilter(name, option) {
        var filter = this.state.filter || {};
        filter[name] = (option || {}).value || '';
        this.setState({
            filter: filter
        });
    }
    changeLocker(e) {
        // get shipping info
        var shipping = this.props.shipping.props.checkout.state.shipping || {};
        // save locker
        shipping.eflocker = (e || {}).value || "";
        // save form data
        this.props.shipping.props.checkout.setState({
            shipping: shipping
        });
    }



    componentDidMount() {
        var self = this;
        self.getLockers();
        self.getShippings();
    }
    render() {
        var self        = this;
        var t           = self.props.t;
        var lockers     = self.state.lockers;
        var shippings   = self.state.shippings || [];
        var area        = (self.state.filter || {}).area || "";
        var district    = (self.state.filter || {}).district || "";
        var locker      = (self.props.shipping.props.checkout.state.shipping || {}).eflocker || "";


        return (
            <div className="lockers">
                <ul>
                    {shippings.filter(s => /^EFLOCKER$/i.test(s.type) && s.address).map((shipping, i) => {
                        return <li key={i}>
                            <div>
                                <label onClick={self.hideNewShippingForm.bind(self)}>
                                    <input name="shipping[method]" type="radio" value={shipping.id}/>
                                    &nbsp;<b>{(lockers.locations || {})[shipping.address]}</b>
                                </label>
                            </div>
                        </li>;
                    })}
                    <li>
                        <div>
                            <label onClick={self.showNewShippingForm.bind(self)}>
                                <input name="shipping[method]" type="radio" value="0"/>
                                &nbsp;{t('shipping.methods.eflocker.label')}
                            </label>
                        </div>
                        <div ref="form" className="form">
                            <input name="shipping[type]" type="hidden" value="eflocker"/>
                            <div className="filter field-group">
                                <div className="field">
                                    <label>{t('shipping.filter.area')}</label>
                                    <br/>
                                    <Select {...{
                                        name        : 'area',
                                        value       : area,
                                        options     : Object.keys(lockers.options).map((code) => ({
                                            label       : t('shipping.areas.' + code),
                                            value       : code
                                        })),
                                        onChange    : (v) => self.setFilter('area', v),
                                        searchable  : false,
                                        clearable   : false
                                    }}/>
                                </div>
                                <div className="field">
                                    <label>{t('shipping.filter.district')}</label>
                                    <br/>
                                    <Select {...{
                                        name        : 'district',
                                        value       : district,
                                        options     : Object.keys(lockers.options[area] || {}).map((code) => ({
                                            label       : code,
                                            value       : code
                                        })),
                                        onChange    : (v) => self.setFilter('district', v),
                                        searchable  : false,
                                        clearable   : false
                                    }}/>
                                </div>
                            </div>
                            <br/>
                            <div className="field">
                                <label>{t('shipping.methods.eflocker.filter')}</label>
                                <br/>
                                <Select {...{
                                    name        : "shipping[eflocker]",
                                    value       : locker,
                                    options     : (lockers.options[area] || {})[district] || [],
                                    onChange    : self.changeLocker.bind(self),
                                    searchable  : false,
                                    clearable   : false
                                }}/>
                            </div>
                        </div>
                    </li>
                </ul>
                
                
                <br/>
                <div className="instruction">
                    <p>{t('shipping.methods.eflocker.guide.label')}:</p>
                    <ol style={{
                        padding: '0 20px'
                    }}>
                        <li>{t('shipping.methods.eflocker.guide.steps.0')}</li>
                        <li>{t('shipping.methods.eflocker.guide.steps.1')}</li>
                        <li>{t('shipping.methods.eflocker.guide.steps.2')}</li>
                        <li>{t('shipping.methods.eflocker.guide.steps.3')}</li>
                        <li>{t('shipping.methods.eflocker.guide.steps.4')}</li>
                        <li>{t('shipping.methods.eflocker.guide.steps.5')}</li>
                        <li>{t('shipping.methods.eflocker.guide.steps.6')}</li>
                    </ol>
                    <p>*{t('shipping.methods.eflocker.guide.notice')}</p>
                </div>
            </div>
        );
    }
});
