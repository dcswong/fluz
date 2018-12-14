import React, {Component} from 'react';
import {DropdownButton, MenuItem, InputGroup, FormControl, Button} from 'react-bootstrap';

import GenericItemGridView from '../../../components/GenericItemGridView';
import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';
import lodash from 'lodash';


class ShippingInformationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            selectedShippmentMethod: null
        }
        
        this.renderTitleView = this.renderTitleView.bind(this);
        this.renderInformationView = this.renderInformationView.bind(this);
        this.renderShipmentMethod = this.renderShipmentMethod.bind(this);
        this.onCustomerInformationUpdate = this.onCustomerInformationUpdate.bind(this);
        this.onShippmentMethodClick = this.onShippmentMethodClick.bind(this)
    }

    onCustomerInformationUpdate(field, value) {
        this.props.onCustomerInformationUpdate && 
            this.props.onCustomerInformationUpdate(field, value);
    }

    onShippmentMethodClick(shipmentMethod) {
        let {selectedShippmentMethod} = this.state;
        console.log('onShippmentMethodClick')
        if(selectedShippmentMethod === shipmentMethod) {
            return;    
        }

        this.setState({selectedShippmentMethod: shipmentMethod})
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
        let {title, description, customerInformation, shipmentMethods} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column', paddingTop: 20}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('Address', 'email', customerInformation.email, this.onCustomerInformationUpdate, true, {paddingRight: 10})}
                    {UIHelper.renderLabelTextInput('Apt, Suite, Room Number, etc', 'lastName', customerInformation.lastName, this.onCustomerInformationUpdate, true, {paddingLeft: 10})}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('City', 'firstName', customerInformation.email, this.onCustomerInformationUpdate, true, {paddingRight: 10})}
                    {UIHelper.renderLabelNumberInput('Country', 'phoneNumber', customerInformation.phoneNumber, this.onCustomerInformationUpdate, true, {paddingLeft: 10})}
                </div>
                <div style={{paddingTop: 20}}>
                    {UIHelper.renderLabelCheckbox('Use same address as billing address', 'sameAddress', true, this.onCustomerInformationUpdate, false)}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px', width: '100%'}}>
                    <GenericItemGridView
                        containerStyles={{paddingTop: 30, width: '100%'}}
                        titleStyles={{...TextStyles.headingThreeHalf, color: ColorConst.textBlue}}
                        title={'Choose a shipment method'}
                        noOfRow={1}
                        noOfColumn={2}
                        data={shipmentMethods}
                        renderItem={this.renderShipmentMethod}
                    />
                </div>
            </div>
        )
    }

    renderShipmentMethod(item, index, flexStyle) {
        let {selectedShippmentMethod} = this.state;
        
        let isSelected = selectedShippmentMethod && (item.name === selectedShippmentMethod.name);
        let marginStyle = (flexStyle === 'flex-start') ? {marginRight: 10} : {marginLeft: 10};
        let price = (item.price === 0) ? `FREE` : `${item.price}${item.currency}`;

        // isSelected = false

        return (
            <div key={index}
                onClick={() => this.onShippmentMethodClick(item)}
                style={{
                    flex: 1,
                    ...marginStyle,
                    justifyContent: flexStyle
                }}>
                <div style={{
                    display: 'flex', 
                    flexDirection: 'column',
                    border: `solid 1px ${ColorConst.gray}`, 
                    borderRadius: 5, 
                    padding: '20px 10px',
                    width: '100%',
                    borderColor: isSelected ? ColorConst.lightBlue : ColorConst.gray}}>
                    <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', paddingBottom: 20}}>
                        <div style={{display: 'flex', alignItems: 'center', marginRight: 5}}>
                            <div style={{width: 14, height: 14, borderRadius: 7, padding: 1, display: 'flex', alignItems: 'center', justifyContent: 'space-between', border: 'solid 1px', borderColor: isSelected ? ColorConst.lightBlue : ColorConst.gray}}>
                                <div style={{minWidth: 10, minHeight: 10, borderRadius: 5, backgroundColor: isSelected ? ColorConst.lightBlue : ColorConst.white}}></div>
                            </div>
                        </div>
                        <span style={{flex: 9, ...TextStyles.headingFour, color: ColorConst.textBlue}}>{item.name}</span>
                        <span style={{flex: 3, display: 'flex', justifyContent: 'flex-end', ...TextStyles.headingFour, color: ColorConst.lightBlue}}>{price}</span>
                    </div>
                    <div style={{...TextStyles.bodyText, color: ColorConst.gray}}>{item.description}</div>
                </div>
            </div>
        )
    }
}

ShippingInformationView.defaultProps = {
    shipmentMethods: [
        {
            name: 'Standary Delivery',
            price: 0,
            currency: 'HKD',
            description: 'Estimates 12-15 days of shipping time (Duties and taxes maybe due upon the delivery of the product).'
        },
        {
            name: 'Fast Delivery',
            price: 98,
            currency: 'HKD',
            description: 'Estimates 2-5 days of shipping time (Duties and taxes maybe due upon the delivery of the product).'
        },
    ]
}

export default ShippingInformationView;