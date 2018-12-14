import React, {Component} from 'react';
import lodash from 'lodash';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import {DropdownButton, MenuItem, InputGroup, FormControl, Button} from 'react-bootstrap';

import TitleHeaderView from '../../../components/TitleHeaderView';
import ImageGalleryView from '../../../components/ImageGalleryView';
import GenericItemGridView from '../../../components/GenericItemGridView';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';


class OrderSummaryView extends Component {
    
    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.renderSalesOrderItemList = this.renderSalesOrderItemList.bind(this);
        this.renderSalesOrderHeader = this.renderSalesOrderHeader.bind(this);
        this.renderSalesOrderItem = this.renderSalesOrderItem.bind(this);
    }

    render() {
        let {title} = this.props;
        return (
            <div id={`summaryContainer`}
                style={{
                    padding: '50px 30px 30px 30px',
                    display: 'flex',
                    flexDirection: 'column',
                }}>
                <div style={{...TextStyles.headingOne, fontWeight: '300', color: ColorConst.darkBlue, paddingBottom: 20}}>
                    {`${title}`}
                </div>
                <div style={{display: 'flex', flexDirection: 'row'}}>
                    {this.renderSalesOrderItemList()}
                    {this.renderSalesOrderHeader()}
                </div>
            </div>
        )
    }

    renderSalesOrderItemList() {
        let {salesOrderItems} = this.props;
        let listLength = salesOrderItems.length;
        return (
            <div style={{flex: 1}}>
                {listLength ? 
                    lodash.map(salesOrderItems, (salesOrderItem, index) => {
                    
                        return this.renderSalesOrderItem(salesOrderItem, index, listLength - 1);
                    }) : 
                    `No Items`
                }
            </div>
        )
    }

    renderSalesOrderHeader() {
        let {salesOrderItems, discountAndPromotion, shippingAddress} = this.props;
        let {promoCode} = this.state;
        let listLength = salesOrderItems.length;
        let totalAmount = 0;
        lodash.forEach(salesOrderItems, (salesOrderItem) => {
            let itemAmount = salesOrderItem.unitPrice * salesOrderItem.qty;
            totalAmount += itemAmount;
        })
        return (
            <div style={{flex: 1, paddingLeft: 40, display: 'flex', flexDirection: 'column', justifyContent: 'flex-start', position: "relative", top: -20}}>
                <div style={{textAlign: "center", height: 50}}>
                    <hr style={{width: '100%', borderColor: ColorConst.gray}}/>
                    <span style={{
                        display: 'inline-block',
                        position: "relative",
                        top: -32,
                        backgroundColor: ColorConst.white,
                        padding: "2px 12px",
                        border: `1px solid ${ColorConst.gray}`,
                        textAlign: 'center',
                        borderRadius: 4,
                        ...TextStyles.bodyText,
                        color: ColorConst.darkBlue}}>
                        {`${listLength} Items`}
                    </span>
                </div>
                <div id={`detail`} style={{}}>
                    <div style={{...TextStyles.headingFour, color: ColorConst.darkGray, paddingBottom: 5}}>{`Promo Code`}</div>
                    <div style={{marginBottom: 25, display: 'flex', flexDirection: 'row', border: `1px solid ${ColorConst.gray}`, borderRadius: 4, padding: 4, justifyContent: "space-between"}}>
                        <input
                            placeholder={'Type code here...'}
                            style={{borderWidth: 0, flex: 4, ...TextStyles.bodyText, color: ColorConst.darkGray, padding: "5px 5px"}}/>
                        <Button bsStyle="primary"
                            style={{flex: 1, ...TextStyles.bodyText, backgroundColor: ColorConst.lightBlue, maxWidth: 70, padding: "4px 0px", }}
                            onClick={() => console.log(check)}>
                            {"Check"}
                        </Button>
                    </div>
                    <div style={{display: 'flex', flexDirection: 'column'}}>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.darkBlue}}>{`Purchased items total:`}</div>
                            <div style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.darkBlue}}>{`${totalAmount}HKD`}</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'column', padding: "20px 0px"}}>
                            <div style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.darkBlue}}>{`Shipping:`}</div>
                            <div style={{...TextStyles.bodyText, fontWeight: '300', color: ColorConst.darkBlue, width: '55%'}}>{`${shippingAddress}`}</div>
                        </div>
                        <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between'}}>
                            <div style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.darkBlue}}>{`Discount and Promos:`}</div>
                            <div style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.darkBlue}}>{`-${discountAndPromotion}HKD`}</div>
                        </div>
                    </div>
                </div>
                <hr style={{width: '100%', margin: '20px 0px', borderStyle: 'dashed', borderColor: ColorConst.gray}}/>

                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', verticalAlign: 'middle'}}>
                    <div style={{height: '100%', lineHeight: '100%'}}>
                        <span style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.darkBlue}}>{`Estimated Total:`}</span>
                    </div>
                    <div style={{height: '100%', lineHeight: '100%'}}>
                        <span style={{...TextStyles.headingFour, fontWeight: '300', color: ColorConst.lightBlue, paddingRight: 3}}>{`HKD`}</span>
                        <span style={{...TextStyles.headingOne, fontSize: 30, color: ColorConst.lightBlue}}>{`${totalAmount - discountAndPromotion}`}</span>
                    </div>
                </div>
            </div>
        )
    }

    renderSalesOrderItem(salesOrderItem, index, lastIndex) {
        let positionStyle = {margin: "10px 0px"};
        if(index == 0) {
            positionStyle = {
                borderRadius: "4px 4px 0px 0px",
                marginBottom: 10
            };
        } else if(index == lastIndex) {
            positionStyle = {
                borderRadius: "0px 0px 4px 4px",
                marginTop: 10
            };
        }
        let {name, categorys, qty, unitPrice, uom, currency, imgSrc, orginalPrice} = salesOrderItem;
        let amount = unitPrice * qty;

        return (
            <div key={`salesOrderItem - ${index}`}
                style={{
                    ...positionStyle,
                    borderStyle: 'solid',
                    borderWidth: 1,
                    borderColor: ColorConst.gray,
                    boxShadow: `-10px 10px 30px ${ColorConst.lightGray}`,
                    padding: 10
                }}>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    paddingBottom: 10}}>
                    <img src={`${imgSrc}`} style={{width: 60, height: 60, borderRadius: 5, padding: 0}}/>
                    <div style={{
                        display: 'flex',
                        flexDirection: 'column',
                        paddingLeft: 10
                    }}>
                        <div style={{...TextStyles.bodyText, color: ColorConst.darkBlue}}>
                            {name}
                        </div>
                        {lodash.map(categorys, (category, index) => {
                            return (
                                <div key={`category - ${index}`}
                                    style={{...TextStyles.bodyText, fontSize: 11, color: ColorConst.darkGray}}>
                                    {category}
                                </div>
                            )
                        })}
                    </div>
                </div>
                <div style={{
                    display: 'flex',
                    flexDirection: 'row',
                    justifyContent: 'space-between'
                }}>
                    <div style={{flex: 1}}>
                        <InputGroup style={{display: 'flex', flexDirection: 'row'}}>
                            <FormControl 
                                type="text" 
                                style={{width: 50}}
                                value={qty}
                                onChange={(event) => {
                                    console.log(event)
                                }}
                            />
                            <DropdownButton
                                componentClass={InputGroup.Button}
                                id="input-dropdown-addon"
                                noCaret={true}
                                title={UIHelper.renderSVG('small-down', {padding: 0})}
                            >
                                <MenuItem
                                    key="1"
                                    onClick={() => {console.log('MenuItem')}}>1</MenuItem>
                                <MenuItem key="2">2</MenuItem>
                                <MenuItem key="3">3</MenuItem>
                                <MenuItem key="4">4</MenuItem>
                                <MenuItem key="5">5</MenuItem>
                            </DropdownButton>
                        </InputGroup>
                    </div>
                    <div style={{flex: 2, display: 'flex', alignItems: 'center', paddingLeft: 10}}>
                        <div style={{...TextStyles.bodyText, color: ColorConst.red}}
                            onClick={() => console.log('Remove')}>
                            Remove
                        </div>
                    </div>
                    <div style={{flex: 1, display: 'flex', flexDirection: 'column'}}>
                        {orginalPrice && 
                            <strike style={{...TextStyles.bodyText, flex: 1, display: 'flex', flexDirection: 'row'}}>
                                {`${orginalPrice}${currency}`}
                            </strike>}
                        <div style={{flex: 1, display: 'flex', flexDirection: 'row'}}>
                            <div style={{...TextStyles.bodyText, display: 'flex', alignItems: 'center', color: ColorConst.lightBlue}}>
                                {`${amount}${currency}`}
                            </div>
                            {UIHelper.renderSVG('tag-cut', {padding: '5px 0px 0px 2px'})}
                        </div>
                    </div>
                </div>
            </div>
        )
    }
} 

export default OrderSummaryView;