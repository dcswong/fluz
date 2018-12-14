import React from 'react';
import { translate } from "react-i18next";
import { Base64 } from 'js-base64';
import Select from 'react-select';
import 'react-select/dist/react-select.css';


import EFLocker from './methods/eflocker';
import SFStation from './methods/sfstation';

module.exports = translate('checkout')(class Shipping extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            shippings   : [],
            lockers     : {},
            stations    : {},
            filter      : {}
        };
    }


    


    setFilter(name, option) {
        var filter = this.state.filter || {};
        filter[name] = (option || {}).value || '';
        this.setState({
            filter: filter
        });
    }


    
    


    
    



    componentDidMount() {
        var self = this;
        
    }
    render() {
        var self = this;
        var t = self.props.t;

        
        return (
            <div className="section">
                <h6>{t('shipping.label')}</h6>
                {self.props.methods.SFSTATION ? <SFStation shipping={self}/> : null}
                {self.props.methods.EFLOCKER ? <EFLocker shipping={self}/> : null}
            </div>
        );
    }
});
