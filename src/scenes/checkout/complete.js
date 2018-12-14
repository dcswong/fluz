import React from 'react';
import { translate } from "react-i18next";

import Frame from '../frame';


module.exports = translate('complete')(class Complete extends React.Component {
    constructor(props) {
        super(props);
        this.state = {};
    }
    getStations() {
        var self = this;
        // get sf stations
        fetch("/assets/integration/sfstations.json", {
            method  : 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            var stations = {};
            (result || []).forEach((row) => {
                stations[row.code] = row['name_translations'][{
                    zh_HK: 'zh-hant',
                    en_US: 'en'
                }[self.props.user.locale || 'en_US']];
            })
            // get order info
            self.setState({
                stations: stations
            });
        }).catch(function(error) {
            alert((error || {}).message);
        });
    }
    getLockers() {
        var self = this;
        // get ef lockers
        fetch("/assets/integration/eflockers.json", {
            method  : 'GET'
        }).then(function(response) {
            return response.json();
        }).then(function(result) {
            var lockers = {};
            (result || []).forEach((row) => {
                lockers[row.code] = row['name_translations'][{
                    zh_HK: 'zh-hant',
                    en_US: 'en'
                }[self.props.user.locale || 'en_US']];
            })
            // get order info
            self.setState({
                lockers: lockers
            });
        }).catch(function(error) {
            alert((error || {}).message);
        });
    }
    componentDidMount() {
        this.getLockers();
        this.getStations();
    }
    render() {
        var self = this;
        var t = self.props.t;
        var order = (self.props.location.state || {}).order || {};
        var lockers = self.state.lockers || {};
        var stations = self.state.stations || {};
        var address = (order.shipping||{}).address;
        return <section className="complete" style={{
            padding: '35px 20px'
        }}>
            <div style={{
                textAlign: 'center'
            }}>
                <img width="70" src="/assets/imgs/check-circle.svg"/>
            </div>
            <br/>
            <h3 style={{
                color: '#1c2d5b',
                fontWeight: 600,
                textAlign: 'center'
            }}>{t('message')}</h3>
            <p style={{
                color: '#1c2d5b',
                textAlign: 'center'
            }}>{t('notice')}</p>
            <br/>
            <br/>
            <div className="content">
                <div className="form" style={{
                    border: '1px solid #d8d8d8',
                    borderRadius: 5
                }}>
                    <div className="field" style={{
                        borderBottom: '1px solid #d8d8d8',
                        padding: '10px 20px'
                    }}>
                        <label style={{
                            color: '#99a1b5',
                            display: 'inline-block',
                            width: '50%'
                        }}>{t('order.number')}</label>
                        <p style={{
                            color: '#1c2d5b',
                            textAlign: 'right',
                            display: 'inline-block',
                            width: '50%'
                        }}>{order.id}</p>
                    </div>
                    <div className="field" style={{
                        borderBottom: '1px solid #d8d8d8',
                        padding: '10px 20px'
                    }}>
                        <label style={{
                            color: '#99a1b5',
                            display: 'inline-block',
                            width: '50%'
                        }}>{t('order.amount')}</label>
                        <p style={{
                            color: '#1c2d5b',
                            textAlign: 'right',
                            display: 'inline-block',
                            width: '50%'
                        }}>HK${order.amount}</p>
                    </div>
                    <div className="field" style={{
                        borderBottom: '1px solid #d8d8d8',
                        padding: '10px 20px'
                    }}>
                        <label style={{
                            color: '#99a1b5',
                            display: 'inline-block',
                            width: '50%'
                        }}>{t('order.status')}</label>
                        <p style={{
                            color: '#1c2d5b',
                            textAlign: 'right',
                            display: 'inline-block',
                            width: '50%'
                        }}>{order.status}</p>
                    </div>
                    <div className="field" style={{
                        borderBottom: '1px solid #d8d8d8',
                        padding: '10px 20px'
                    }}>
                        <label style={{
                            color: '#99a1b5',
                            marginBottom: 12
                        }}>{t('shipping.address')}</label>
                        <br/>
                        <p style={{
                            color: '#1c2d5b'
                        }}>{lockers[address] || stations[address] || address}</p>
                    </div>
                    <div className="field" style={{
                        padding: '10px 20px'
                    }}>
                        <label style={{
                            color: '#99a1b5',
                            display: 'inline-block',
                            width: '50%'
                        }}>{t('shipping.tracking')}</label>
                        <p style={{
                            color: '#1c2d5b',
                            textAlign: 'right',
                            display: 'inline-block',
                            width: '50%'
                        }}>{((order.shipping||{}).tracking||{}).id}</p>
                    </div>
                </div>
                <br/>
                <button type="button" style={{
                    border: '1px solid #e8e8e8',
                    backgroundColor: '#3966e6',
                    borderRadius: 5,
                    padding: '10px 0',
                    color: '#fff',
                    width: '100%',
                    display: 'block',
                    textAlign: 'center',
                    textDecoration: 'none'
                }} onClick={() => self.props.history.goBack()}>{t('homePage')}</button>
            </div>
        </section>;
    }
});
