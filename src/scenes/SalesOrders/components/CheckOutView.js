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


class CheckOutView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let {totalViews} = this.props;
        
        return (
            <div id={`summaryContainer`}
                scroll="no"
                style={{
                    display: 'flex',
                    overflow: 'hidden',
                }}>
                
                {lodash.map(totalViews, (view) => {
                    return view.renderFunction()
                })}
            </div>
        )
    }
}

export default CheckOutView;