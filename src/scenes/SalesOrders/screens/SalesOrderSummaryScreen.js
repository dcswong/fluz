import React, {Component} from 'react';
import lodash from 'lodash';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import {DropdownButton, MenuItem, InputGroup, FormControl, Button} from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import CustomerInformationView from '../components/CustomerInformationView';
import ShippingInformationView from '../components/ShippingInformationView';
import PaymentInformationView from '../components/PaymentInformationView';
import OrderSummaryView from '../components/OrderSummaryView';
import CheckOutView from '../components/CheckOutView';
import TitleHeaderView from '../../../components/TitleHeaderView';
import ProgressBarView from '../../../components/ProgressBarView';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';
/**
 * This is a Sales Order summary Screen, when user click pre-check out.
 * In this Screen, will contain 
 *      <TitleHeaderView/>
 *      <GenericItemGridView/>
 *      <OrderSummaryView/>
 */


class SalesOrderSummaryScreen extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
            isShowCollapse: false,
            isShowOrderSummary: true,
            isShowCheckout: false,
            checkOutStep: -1,
            customerInformation: {
                email: 'justa_sample@email.com',
                lastName: 'Lambortini',
                firstName: 'Kimmy',
                phoneNumber: '83771922',
            }
        }

        this.renderCustomerInformationView = this.renderCustomerInformationView.bind(this);
        this.renderShippingInformationView = this.renderShippingInformationView.bind(this);
        this.renderPaymentInformationView = this.renderPaymentInformationView.bind(this);
        this.renderSummaryFooter = this.renderSummaryFooter.bind(this);
        this.renderCollapseSummaryView = this.renderCollapseSummaryView.bind(this);
        this.onPromoCodeCheck = this.onPromoCodeCheck.bind(this);
        this.onCheckOutClick = this.onCheckOutClick.bind(this);
        this.onCustomerInformationUpdate = this.onCustomerInformationUpdate.bind(this);

        this.CHECK_OUT_LIST_VIEW = [
            {
                name: 'Customer Information',
                description: 'This is just some ramdom text that im putting here to see how it looks like.',
                renderFunction: this.renderCustomerInformationView
            },
            {
                name: 'Shipping Information',
                description: 'This is just some ramdom text that im putting here to see how it looks like.',
                renderFunction: this.renderShippingInformationView
            },
            {
                name: 'Payment Information',
                description: 'This is just some ramdom text that im putting here to see how it looks like.',
                renderFunction: this.renderPaymentInformationView
            }
        ]

        this.DEVICE_WIDTH = window.innerWidth;
    }

    onCustomerInformationUpdate(fieldName, value) {
        this.setState({
            ['fieldName']: value
        })
    }

    getTotalAmount() {
        let {salesOrderItems, discountAndPromotion} = this.props;
        let totalAmount = 0;

        lodash.forEach(salesOrderItems, (salesOrderItem) => {
            let itemAmount = salesOrderItem.unitPrice * salesOrderItem.qty;
            totalAmount += itemAmount;
        })

        return totalAmount;
    }

    onCheckOutClick() {
        this.setState({
            isShowCollapse: true,
            isShowOrderSummary: false,
            isShowCheckout: true,
            checkOutStep: 0
        })
    }

    onCollapseSummaryClick() {
        this.setState((prevState) => ({
            isShowOrderSummary: !prevState.isShowOrderSummary
        }))
    }

    onPromoCodeCheck(promoCode) {
        console.log('SalesOrderSummaryScreen onPromoCodeCheck', promoCode);
    }

    onNextButtonClick() {
        let {checkOutStep} = this.state;
        let checkOutLength = this.CHECK_OUT_LIST_VIEW.length;

        console.log(checkOutStep)

        if(checkOutStep == -1) {//On SummaryScreen
            this.setState({
                isShowCollapse: true,
                isShowOrderSummary: false,
                isShowCheckout: true
            })
        } else if(checkOutStep == checkOutLength-1) {
            this.setState({
                isCheckOutFinish: true
            })
        } else {
            this.setState(prevState => ({
                checkOutStep: prevState.checkOutStep + 1
            }))
        }
    }

    onPrevButtonClick() {
        let {checkOutStep} = this.state;

        console.log(checkOutStep)
        
        if(checkOutStep == 0) {//On SummaryScreen
            this.setState({
                isShowCollapse: false,
                isShowOrderSummary: true,
                isShowCheckout: false,
                checkOutStep: -1 
            })
        } else {
            this.setState(prevState => ({
                checkOutStep: prevState.checkOutStep - 1 
            }))
        }
    }
    
    render() {
        let {title, discountAndPromotion, shippingAddress, salesOrderItems} = this.props;
        let {isShowCollapse, isShowOrderSummary, isCheckOutFinish, isShowCheckout, checkOutStep} = this.state;

        if(isCheckOutFinish) {
            return <Redirect push to={`/completeOrderScreen`}/>
        }

        return (
            <div id={`salesOrderSummaryScreen`}>
                <TitleHeaderView shopTitle={"SHOPTITLE"}/>
                {isShowCollapse ? 
                    this.renderCollapseSummaryView() :
                    UIHelper.renderLineSeparator()}
                {isShowOrderSummary && 
                    <OrderSummaryView
                        //props data
                        title={title}
                        discountAndPromotion={discountAndPromotion}
                        shippingAddress={shippingAddress}
                        salesOrderItems={salesOrderItems}

                        //callBack Functions
                        onPromoCodeCheck={this.onPromoCodeCheck}
                    />}
                {(isShowCheckout) && (checkOutStep > -1) &&
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{paddingTop: 50, width: '100%'}}>
                            <ProgressBarView
                                totalPart={this.CHECK_OUT_LIST_VIEW}
                                currentPartIndex={checkOutStep}
                            />
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', overflow: 'hidden'}}>
                            <CheckOutView
                                ref={ref => this.checkOutView = ref}
                                
                                totalViews={this.CHECK_OUT_LIST_VIEW}
                                currentPartIndex={checkOutStep}
                            />
                        </div>
                    </div>
                }
                {this.renderSummaryFooter()}
            </div>
        )
    }

    renderCustomerInformationView() {
        let {customerInformation} = this.state;
        return (
            <div key={'customerInformation'} 
                ref={ref => this.customerInformation = ref}
                style={{
                    minWidth: '100%',
                    padding: '20px 60px 0px 60px'}}>
                <CustomerInformationView
                    title={this.CHECK_OUT_LIST_VIEW[0].name}
                    description={this.CHECK_OUT_LIST_VIEW[0].description}
                    customerInformation={customerInformation}
                    onCustomerInformationUpdate={this.onCustomerInformationUpdate}
                />
            </div>
        )
    }
    
    renderShippingInformationView() {
        let {customerInformation} = this.state;
        return (
            <div 
                key={'shippingInformation'} 
                ref={ref => this.shippingInformation = ref}
                style={{
                    minWidth: '100%',
                    padding: '20px 60px 0px 60px'}}>
                <ShippingInformationView
                    title={this.CHECK_OUT_LIST_VIEW[1].name}
                    description={this.CHECK_OUT_LIST_VIEW[1].description}
                    customerInformation={customerInformation}
                    onCustomerInformationUpdate={this.onCustomerInformationUpdate}
                />
            </div>
        )

    }

    renderPaymentInformationView() {
        let {customerInformation} = this.state;
        return (
            <div key={'paymentInformation'} 
                ref={ref=> this.paymentInformation = ref}
                style={{
                    minWidth: '100%',
                    padding: '20px 60px 0px 60px'}}>
                <PaymentInformationView
                    title={this.CHECK_OUT_LIST_VIEW[2].name}
                    description={this.CHECK_OUT_LIST_VIEW[2].description}
                    customerInformation={customerInformation}
                    onCustomerInformationUpdate={this.onCustomerInformationUpdate}
                />
            </div>
        )

    }

    renderCollapseSummaryView() {
        let {isShowOrderSummary} = this.state;

        let retateStyle = isShowOrderSummary ? {transform: 'rotate(180deg)'} : {};

        let totalAmount = this.getTotalAmount();

        return (
            <div style={{
                maxHeight: 65,
                width: '100%',
                backgroundColor: ColorConst.lightGray,
                padding: '20px 15px',
                border: `solid 1px ${ColorConst.separatorGray}`,
                borderWidth: '1px 0px',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'space-between',
            }}>
                <div style={{display: 'flex', flexDirection: 'row'}} onClick={() => this.onCollapseSummaryClick()}>
                    <span style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.lightBlue, display: 'flex', flexDirection: 'row', alignItems: 'center'}}>{`View Order Summary`}</span>
                    {UIHelper.renderSVG('small-down', {padding: "0px 5px", fill: ColorConst.lightBlue, ...retateStyle})}
                </div>
                <div>
                    <span style={{...TextStyles.headingThree, fontWeight: '300'}}>{`HKD`}</span>
                    <span style={{...TextStyles.headingThree}}>{totalAmount}</span>
                </div>
            </div>
        )
    }
    
    renderSummaryFooter() {
        let {checkOutStep} = this.state;

        switch (checkOutStep) {
            case -1:
                return (
                    <div style={{margin: '0px 30px', width: 'auto'}}>
                        {UIHelper.renderLineSeparator({marginBottom: 30})}
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-end'}}>
                            <Button bsStyle="primary" 
                                style={{...TextStyles.bodyText, backgroundColor: ColorConst.lightBlue, padding: '15px 25px'}}
                                onClick={() => this.onCheckOutClick()}>
                                {`PROCEED TO CHECKOUT`}
                            </Button>
                        </div>
                    </div>
                )
            break;

            case 0:
                return (
                    <div style={{margin: '0px 60px', paddingBottom: 50, width: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div onClick={() => this.onPrevButtonClick()}
                            style={{display: 'flex', 
                                alignItems: 'center', 
                                ...TextStyles.headingThreeHalf, 
                                color: ColorConst.lightBlue, 
                                borderWidth: 0, 
                                height: 35}}>
                            <FontAwesomeIcon icon="arrow-left" style={{paddingRight: 5, fontSize: 20}}/>
                            {`Back to Shopping Cart`}
                        </div>
                        <Button bsStyle="primary" 
                            onClick={() => {
                                this.shippingInformation.scrollIntoView({block: 'end', behavior: 'smooth'});
                                this.onNextButtonClick();
                            }}
                            style={{display: 'flex', alignItems: 'center', ...TextStyles.headingFour, backgroundColor: ColorConst.lightBlue, padding: '10px 30px'}}>
                            {`PROCEED TO SHIPPING`}
                            <FontAwesomeIcon icon="arrow-right" style={{paddingLeft: 5, fontSize: 20}}/>
                        </Button>
                    </div>
                )

            case 1:
                return (
                    <div style={{margin: '0px 60px', paddingBottom: 50, width: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div onClick={() => {
                            this.customerInformation.scrollIntoView({block: 'end', behavior: 'smooth'});
                            this.onPrevButtonClick()
                        }}
                            style={{display: 'flex', 
                                alignItems: 'center', 
                                ...TextStyles.headingThreeHalf, 
                                color: ColorConst.lightBlue, 
                                borderWidth: 0, 
                                height: 35}}>
                            <FontAwesomeIcon icon="arrow-left" style={{paddingRight: 5, fontSize: 20}}/>
                            {`Back to Customer info`}
                        </div>
                        <Button bsStyle="primary" 
                            onClick={() => {
                                this.paymentInformation.scrollIntoView({block: 'end', behavior: 'smooth'});
                                this.onNextButtonClick()
                            }}
                            style={{display: 'flex', alignItems: 'center', ...TextStyles.headingFour, backgroundColor: ColorConst.lightBlue, padding: '10px 30px'}}>
                            {`PROCEED TO PAYMENT`}
                            <FontAwesomeIcon icon="arrow-right" style={{paddingLeft: 5, fontSize: 20}}/>
                        </Button>
                    </div>
                )
            
            break;

            case 2:
                return (
                    <div style={{margin: '0px 60px', paddingBottom: 50, width: 'auto', display: 'flex', justifyContent: 'space-between', alignItems: 'center'}}>
                        <div onClick={() => {
                            this.shippingInformation.scrollIntoView({block: 'end', behavior: 'smooth'});
                            this.onPrevButtonClick()
                        }}
                            style={{display: 'flex', 
                                alignItems: 'center', 
                                ...TextStyles.headingThreeHalf, 
                                color: ColorConst.lightBlue, 
                                borderWidth: 0, 
                                height: 35}}>
                            <FontAwesomeIcon icon="arrow-left" style={{paddingRight: 5, fontSize: 20}}/>
                            {`Back to Shipping info`}
                        </div>
                        <Button bsStyle="primary" 
                            onClick={() => this.onNextButtonClick()}
                            style={{display: 'flex', alignItems: 'center', ...TextStyles.headingFour, backgroundColor: ColorConst.lightBlue, padding: '10px 30px'}}>
                            {`COMPLETE ORDER`}
                            <FontAwesomeIcon icon="arrow-right" style={{paddingLeft: 5, fontSize: 20}}/>
                        </Button>
                    </div>
                )
            
            break;
        }
    }
}

SalesOrderSummaryScreen.defaultProps = {
    title: 'Shopping Cart',
    discountAndPromotion: 10,
    shippingAddress: 'dfklgyhfdhgkdfsgfhsdljghjgdflgjfl gjfdlkgjfdljgfld gdfjklgjfdlklsfk',
    salesOrderItems: [
        {
            Id: 1,
            name: 'Jaeger Backpack',
            categorys: [
                'Backpack',
                'Dirt Orange',
            ],
            unitPrice: 128,
            qty: 1,
            uom: 'pc',
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 1,
            name: 'King Flare Backpack',
            categorys: [
                'Backpack',
            ],
            unitPrice: 188,
            qty: 1,
            orginalPrice: 240,
            uom: 'pc',
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            Id: 1,
            name: 'Ergonmic Gun Black Backpack',
            categorys: [
                'Backpack',
            ],
            unitPrice: 119,
            qty: 1,
            uom: 'pc',
            currency: 'HKD',
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
    ],
}

export default SalesOrderSummaryScreen;