import React, {Component} from 'react';
import { BrowserRouter as Router, Route, Switch, Link, NavLink, Redirect } from 'react-router-dom';
import {DropdownButton, MenuItem, InputGroup, FormControl, Button} from 'react-bootstrap';

import TitleHeaderView from '../../../components/TitleHeaderView';
import CompleteOrderHeaderView from '../components/CompleteOrderHeaderView';
import CompleteOrderDetailView from '../components/CompleteOrderDetailView';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';

/**
 * This is a Complete Order Screen, when user finish a order.
 * In this Screen, will contain 
 *      <TitleHeaderView/>
 *      <CompleteOrderHeaderView/>
 *      <CompleteOrderDetailView/>
 */
class CompleteOrderScreen extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
            isShowHomeScreen: false
        }

        this.onBackToHomeClick = this.onBackToHomeClick.bind(this);
    }

    onBackToHomeClick() {
        let {isShowHomeScreen} = this.state;

        if(isShowHomeScreen) {
            return;
        }

        this.setState(prevState => ({
            isShowHomeScreen: !prevState.isShowHomeScreen
        }))
    }

    render() {
        let {isShowHomeScreen} = this.state;

        if(isShowHomeScreen) {
            return <Redirect push to={`/`}/>
        }

        return (
            <div id={`completeOrderScreen`}>
                <TitleHeaderView shopTitle={"SHOPTITLE"}/>
                {UIHelper.renderLineSeparator()}
                <div style={{padding: '50px 0px 20px 0px'}}>
                    <CompleteOrderHeaderView/>
                </div>
                <div style={{padding: '0px 180px'}}>
                    <CompleteOrderDetailView/>
                </div>
                <div style={{display: 'flex', justifyContent: 'center', padding: '10px 0px 60px 0px'}}>
                    <Button bsStyle="primary" 
                        style={{...TextStyles.bodyText, backgroundColor: ColorConst.lightBlue, padding: '15px 25px'}}
                        onClick={() => this.onBackToHomeClick()}>
                        {`BACK TO HOMEPAGE`}
                    </Button>
                </div>
            </div>
        )
    }
}

export default CompleteOrderScreen;