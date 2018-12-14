import React, {Component} from 'react';
import {Grid, Row, Col, Clearfix, Badge, Modal} from 'react-bootstrap';
import OrderSummaryModalView from './OrderSummaryModalView';

import UIHelper from '../helpers/UIHelper';
import TextStyles from '../styles/TextStyles';
import ColorConst from '../styles/ColorConst';
import './styles.css';
/**
 * In this View, it's display shop title and contain two button (Search and open summary modal)
 * 
 */
class TitleHeaderView extends Component {

    constructor(props) {
        super(props);
        this.state = {
            numberOfItems: 3,
            isShowCartSummary: false
        }
        this.handleOutsideClick = this.handleOutsideClick.bind(this)
    }

    onClickCartSummary(isButtonClick = false) {
        let {isShowCartSummary} = this.state;

        //if component is unmounted return function
        if(!(this.titleHeaderView)) {
            return
        }

        // attach/remove event handler
        if (!isShowCartSummary) {
            document.addEventListener('click', this.handleOutsideClick, false);
        } else {
            document.removeEventListener('click', this.handleOutsideClick, false);
        }
        
        if(isButtonClick) {
            this.setState(prevState => ({
                isShowCartSummary: !prevState.isShowCartSummary,
            }));
        } else {
            this.setState(prevState => ({
                isShowCartSummary: false,
            }));
        }
    }
    
    handleOutsideClick(event) {
        let {isShowCartSummary} = this.state;
        // ignore clicks on the component itself
        if (!isShowCartSummary) {
            return;
        }
        
        this.onClickCartSummary(false);
    }

    render() {
        let {shopTitle} = this.props;
        let {numberOfItems, isShowCartSummary} = this.state
        return (
            <div ref={ref => this.titleHeaderView = ref} 
                id={`titleHeaderView${shopTitle}`}
                className="headerContainer">
                <Row className="show-grid" style={{width: '100%', margin: 0}}>
                    <Col xs={10}>
                        <div style={{
                            ...TextStyles.headingThree,
                            color: ColorConst.darkBlue,
                            paddingTop: 5,
                            paddingBottom: 5}}>
                            {shopTitle}
                        </div>
                    </Col>
                    <Col xs={1} style={{padding:0}}>
                        <div onClick={() => console.log('onClickZoom')}>
                            {UIHelper.renderSVG('zoom', {height: 30, width: 30})}
                        </div>
                    </Col>
                    <Col xs={1} style={{padding:0}}>
                        <div className="popover-container" ref={ref => this.cartSummaryContainer = ref }>
                            <div id="cartSummaryButton" onClick={() => this.onClickCartSummary(true)} 
                                style={{display: 'flex', flexDirection: "row", alignItems : "center"}}>
                                {UIHelper.renderSVG('bag', {height: 30, width: 30})}
                                <Badge
                                    style={{
                                        ...TextStyles.headingThree,
                                        fontWeight: '300',
                                        color: ColorConst.white,
                                        backgroundColor: ColorConst.lightBlue, 
                                        marginTop: -25,
                                        marginLeft: -13,
                                        width: 25,
                                        height: 25,
                                        borderRadius: 20,
                                        display: 'flex',
                                        alignItems: 'center',
                                        justifyContent: 'center',
                                    }}>
                                    {numberOfItems}
                                </Badge>
                            </div>
                            {isShowCartSummary && (
                                <OrderSummaryModalView 
                                    ref={ref => this.orderSummaryModalView = ref}
                                    {...this.props}/>
                            )}
                        </div>
                    </Col>
                </Row>
            </div>
        )
    }
}

TitleHeaderView.defaultProps = {
    shopTitle: 'Nike',
};

export default TitleHeaderView;