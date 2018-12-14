import React, {Component} from 'react';
import {DropdownButton, MenuItem, InputGroup, FormControl, Button} from 'react-bootstrap';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import 'react-telephone-input/lib/withStyles';
import './styles.css';
import lodash from 'lodash';


class CustomerInformationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }

        this.renderTitleView = this.renderTitleView.bind(this);
        this.renderInformationView = this.renderInformationView.bind(this);
        this.onCustomerInformationUpdate = this.onCustomerInformationUpdate.bind(this);
    }

    onCustomerInformationUpdate(field, value) {
        this.props.onCustomerInformationUpdate && 
            this.props.onCustomerInformationUpdate(field, value);
    }

    render() {
        let {title, description, customerInformation} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {this.renderTitleView()}
                {this.renderInformationView()}
            </div>
        )
    }

    renderTitleView() {
        let {title, description, customerInformation} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{...TextStyles.headingThreeHalf, color: ColorConst.textBlue, paddingBottom: 5}}>{title}</span>
                <span style={{...TextStyles.headingFour, color: ColorConst.textBlue}}>{description}</span>
            </div>
        )
    }

    renderInformationView() {
        let {title, description, customerInformation} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: 20}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('Email', 'email', customerInformation.email, this.onCustomerInformationUpdate, true, {paddingRight: 10})}
                    {UIHelper.renderLabelTextInput('Last Name', 'lastName', customerInformation.lastName, this.onCustomerInformationUpdate, true, {paddingLeft: 10})}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('First Name', 'firstName', customerInformation.email, this.onCustomerInformationUpdate, true, {paddingRight: 10})}
                    {UIHelper.renderLabelNumberInput('Phone Number', 'phoneNumber', customerInformation.phoneNumber, this.onCustomerInformationUpdate, true, {paddingLeft: 10})}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px'}}>
                {UIHelper.renderLabelPhoneInput('Phone Number', 'phoneNumber', customerInformation.phoneNumber, this.onCustomerInformationUpdate, true, {height: 44})}
                </div>
            </div>
        )
    }
}

export default CustomerInformationView;