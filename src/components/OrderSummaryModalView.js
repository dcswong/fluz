import React, {Component} from 'react';
import { BrowserRouter as Redirect } from 'react-router-dom';
import {Grid, Row, Col, Clearfix, Badge, Modal, Button} from 'react-bootstrap';
import lodash from 'lodash';

import UIHelper from '../helpers/UIHelper';
import TextStyles from '../styles/TextStyles';
import ColorConst from '../styles/ColorConst';
import './styles.css';
/**
 * A pop up modal to display summary of sales order including sales order items and total amount of sales order
 * 
 */
class OrderSummaryModalView extends Component {

    constructor(props) {
        super(props);
        this.state = {
        }
        
        this.renderSummaryFooter = this.renderSummaryFooter.bind(this);
    }

    onCheckOutClick() {
        this.props.onCheckOutClick && this.props.onCheckOutClick()
    }

    render() {
        let {salesOrderItems} = this.props;

        return (
            <div 
                style={{
                    position: 'absolute',
                    top: 50,
                    left: -330,
                    borderRadius: 5,
                    borderWidth: 1,
                    borderStyle: 'solid',
                    borderColor: ColorConst.lightGray,
                    // boxShadow: `-2px 2px 5px ${ColorConst.lightGray}`,
                    width: 380,
                    backgroundColor: ColorConst.white,
                    padding: `30px 20px`,
                    zIndex: 2
                }}
            >
                <div style={{...TextStyles.headingFour, fontWeight: '600',color: ColorConst.textBlue, paddingBottom: 15}}>
                    Your shopping cart
                </div>
                {UIHelper.renderLineSeparator({marginTop: 20})}
                <div>
                    {salesOrderItems.map((salesOrderItem) => {
                        return this.renderSalesOrderItem(salesOrderItem)
                    })}
                </div>
                {this.renderSummaryFooter()}
            </div>
        )
    }
    
    renderSalesOrderItem(salesOrderItem) {
        let amount = salesOrderItem.qty * salesOrderItem.unitPrice;
        return (
            <div key={`${salesOrderItem.name}${salesOrderItem.id}`}>
                <div style={{width: '100%', margin: 0, paddingBottom: 20, paddingTop: 20, display: 'flex', flexDirection: 'row'}}>
                    <div style={{padding: 0, flex: 2}}>
                        <img src={`${salesOrderItem.imgSrc}`} style={{width: 35, height: 35, borderRadius: 5, padding: 0}}/>
                    </div>
                    <div style={{paddingLeft: 0, paddingRight: 10, flex: 9}}>
                        <div style={{
                            ...TextStyles.bodyText, 
                            color: ColorConst.textBlue, 
                            overflow: "hidden",
                            display: 'flex', 
                            alignItems: 'flex-start', 
                            alignContent: 'center'}}>
                            {`${salesOrderItem.name}`}
                            <div style={{
                                ...TextStyles.bodyText, 
                                color: ColorConst.darkGray, 
                                paddingLeft: 5, 
                                flex: 1, 
                                display: 'flex', 
                                justifyContent: 'flex-end'}}>
                                {`x${salesOrderItem.qty}`}
                            </div>
                        </div>
                        <div style={{...TextStyles.bodyText, color: ColorConst.lightBlue, width: '100%', overflow: "hidden"}}>
                            {`${amount}HKD`}
                        </div>
                    </div>
                    <div style={{padding: 0, flex: 1}}>
                        <div style={{paddingBottom: 10, paddingTop: 10}}
                            onClick={() => console.log('circle remove')}>
                            {UIHelper.renderSVG('circle-remove', {height: 15, width: 15})}
                        </div>
                    </div>
                </div>
                {UIHelper.renderLineSeparator()}
            </div>
        )
    }

    renderSummaryFooter() {
        let {salesOrderItems, onCheckOutClick} = this.props;
        let totalAmount = 0;
        lodash.forEach(salesOrderItems, (salesOrderItem) => {
            totalAmount += salesOrderItem.unitPrice
        })
        return (
            <div style={{marginTop: 20}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'flex-end', verticalAlign: 'middle'}}>
                    <div style={{height: '100%', lineHeight: '100%'}}>
                        <span style={{...TextStyles.bodyText, fontWeight: '300', color: ColorConst.darkBlue}}>{`Total`}</span>
                    </div>
                    <div style={{height: '100%', lineHeight: '100%'}}>
                        <span style={{...TextStyles.bodyText, fontWeight: '300', color: ColorConst.lightBlue, paddingRight: 3}}>{`HKD`}</span>
                        <span style={{...TextStyles.headingOne, color: ColorConst.lightBlue}}>{`${totalAmount}`}</span>
                    </div>
                </div>
                {onCheckOutClick && 
                    <Button bsStyle="primary" 
                        style={{...TextStyles.bodyText, backgroundColor: ColorConst.lightBlue, width: '100%', paddingTop: 10, paddingBottom: 10, marginTop: 15}}
                        onClick={() => this.onCheckOutClick()}>
                        {`PROCEED TO CHECKOUT`}
                    </Button>}
            </div>
        )
    }
}

OrderSummaryModalView.defaultProps = {
    salesOrderItems: [
        {   
            id: '1',
            name: "Jaeger Backpack",
            qty: 1,
            unitPrice: 128,
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            id: '2',
            name: "King Flare Backpack",
            qty: 1,
            unitPrice: 188,
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
        {
            id: '3',
            name: "Ergonomic Gun Black Backpack",
            qty: 1,
            unitPrice: 119,
            imgSrc: "https://vignette.wikia.nocookie.net/leagueoflegends/images/c/c5/Aatrox_Poro.jpg/revision/latest?cb=20160203232747"
        },
    ]
};


export default OrderSummaryModalView;
