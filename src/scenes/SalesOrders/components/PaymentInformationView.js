import React, {Component} from 'react';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';
import lodash from 'lodash';


class PaymentInformationView extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isShowOtherCard: false,
            otherCard: {
                cardNumber: '',
                name: '',
                expirery: '',
                ccv: '',
                isKeep: false
            }
        }

        this.renderTitleView = this.renderTitleView.bind(this);
        this.renderPaymentMethodListView = this.renderPaymentMethodListView.bind(this);
        this.renderPaymentMethodView = this.renderPaymentMethodView.bind(this);
        this.renderOtherCardView = this.renderOtherCardView.bind(this);

        this.onDeletePaymentClick = this.onDeletePaymentClick.bind(this);
        this.onUserOtherPaymentClick = this.onUserOtherPaymentClick.bind(this);
        this.onPaymenClick = this.onPaymenClick.bind(this);
    }

    onUserOtherPaymentClick() {
        let {isShowOtherCard} = this.state;

        this.setState(prevState => ({
            isShowOtherCard: !prevState.isShowOtherCard
        }))
    }

    onDeletePaymentClick(paymentMethod) {
        console.log(paymentMethod)
    }

    onPaymenClick(paymentMethod) {
        console.log(paymentMethod)
    }

    render() {
        let {title, description, customerInformation} = this.props;
        let {isShowOtherCard} = this.state;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {this.renderTitleView()}
                {this.renderPaymentMethodListView()}
                {this.renderCollapseOtherCard()}
                {isShowOtherCard && this.renderOtherCardView()}
            </div>
        )
    }
    
    renderTitleView() {
        let {title, description, customerInformation} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{...TextStyles.headingThreeHalf, color: ColorConst.textBlue, paddingBottom: 5}}>{title}</span>
            </div>
        )
    }

    renderPaymentMethodListView() {
        let {paymentMethods} = this.props;

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <span style={{...TextStyles.bodyText, color: ColorConst.textBlue, padding: '15px 0px 5px 0px'}}>{'Choose one payment method:'}</span>
                {lodash.map(paymentMethods, (paymentMethod) => {
                    return this.renderPaymentMethodView(paymentMethod)
                })}
            </div>
        )
    }

    renderPaymentMethodView(paymentMethod) {
        let {cardNumber, name, type, id} = paymentMethod;

        cardNumber = cardNumber.substr(12);
        return (
            <div key={id}
                style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '7px 15px', marginBottom: 10, backgroundColor: ColorConst.lightGray, borderRadius: 5}}
                onClick={() => {this.onPaymenClick(paymentMethod)}}>
                <div style={{flex: 1, display: 'flex', alignItems: 'center'}}>
                    {UIHelper.renderSVG(type)}
                </div>
                <div style={{flex: 8, display: 'flex', flexDirection: 'column'}}>
                    <div style={{verticalAlign: 'middle'}}>
                        <span style={{...TextStyles.bodyText}}>{"**** "}</span>
                        <span style={{...TextStyles.bodyText}}>{"**** "}</span>
                        <span style={{...TextStyles.bodyText}}>{"**** "}</span>
                        <span style={{...TextStyles.bodyText}}>{cardNumber}</span>
                    </div>
                    <span style={{...TextStyles.bodyText, color: ColorConst.gray}}>{name}</span>
                </div>
                <div style={{flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'flex-end'}}
                    onClick={() => {this.onDeletePaymentClick(paymentMethod)}}>
                    {UIHelper.renderSVG('circle-remove')}
                </div>
            </div>
        )
    }

    renderCollapseOtherCard() {
        let {isShowOtherCard} = this.state;

        let retateStyle = isShowOtherCard ? {transform: 'rotate(180deg)'} : {};

        return (
            <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center',
                backgroundColor: ColorConst.pinkBlue, borderRadius: 10, minWidth: 130, maxWidth: 130,
                margin: '10px 0px 15px 0px'}} onClick={() => this.onUserOtherPaymentClick()}>
                <span style={{...TextStyles.bodyText, fontWeight: '300', color: ColorConst.lightBlue, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>
                    {`Use another card`}
                </span>
                {UIHelper.renderSVG('small-down', {padding: "0px 5px", fill: ColorConst.lightBlue, ...retateStyle})}
            </div>
        )
    }

    renderOtherCardView() {
        let {otherCard} = this.state;

        return (
            <div style={{backgroundColor: ColorConst.pinkBlue, padding: '20px 100px', marginBottom: 30}}>
                <div style={{padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('Credit Card Number', 'cardNumber', otherCard.cardNumber, 
                        this.onOtherCardUpdate, true, {}, '0000 - 0000 - 0000 - 0000')}
                </div>
                <div style={{padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('Name on Card', 'name', otherCard.name, 
                        this.onOtherCardUpdate, true, {}, 'Type here...')}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 0px'}}>
                    {UIHelper.renderLabelTextInput('Expirery', 'expirery', otherCard.expirery, 
                        this.onOtherCardUpdate, true, {paddingRight: 10}, 'mm / yy')}
                    {UIHelper.renderLabelTextInput('CCV Code', 'ccv', otherCard.ccv, 
                        this.onOtherCardUpdate, true, {paddingLeft: 10}, 'Type here')}
                </div>
                <div style={{padding: '10px 0px'}}>
                    {UIHelper.renderLabelCheckbox(`Don't save this card`, 'isKeep', otherCard.isKeep, this.onOtherCardUpdate, false)}
                </div>
            </div>
        )
    }
}

PaymentInformationView.defaultProps = {
    paymentMethods: [
        {   
            id: 'uiergjsdsjhsjdfgsdk',
            type: 'mastercard',
            name: 'Master Card',
            cardNumber: '1234567812341902',
        },
        {
            id: 'jdfghjksdhgdkjghlsdfkjhgsdlfk',
            type: 'visa',
            name: 'VISA',
            cardNumber: '1234567812344822',
        }
    ]
}

export default PaymentInformationView;