import React, {Component} from 'react';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';

class CompleteOrderDetailView extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {
        let {order} = this.props;

        return (
            <div style={{border: `solid 1px ${ColorConst.gray}`, borderRadius: 5, backgroundColor: ColorConst.lightGray}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 20px'}}>
                    <span style={{...TextStyles.bodyText, color: ColorConst.separatorGray, display: 'flex', alignItems: 'center'}}>
                        {'Order Number'}
                    </span>
                    <span style={{...TextStyles.bodyText, display: 'flex', alignItems: 'center'}}>
                        {order.number}
                    </span>
                </div>
                {UIHelper.renderLineSeparator()}
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', padding: '10px 20px'}}>
                    <span style={{...TextStyles.bodyText, color: ColorConst.separatorGray, display: 'flex', alignItems: 'center'}}>
                        {'Order Status'}
                    </span>
                    <span style={{...TextStyles.bodyText, display: 'flex', alignItems: 'center'}}>
                        {order.orderStatus}
                    </span>
                </div>
                {UIHelper.renderLineSeparator()}
                <div style={{display: 'flex', flexDirection: 'column', padding: '10px 20px'}}>
                    <span style={{...TextStyles.bodyText, color: ColorConst.separatorGray, display: 'flex', alignItems: 'center'}}>
                        {'Delivery Address'}
                    </span>
                    <span style={{...TextStyles.bodyText, display: 'flex', alignItems: 'center', marginTop: 10}}>
                        {order.address}
                    </span>
                </div>
                {UIHelper.renderLineSeparator()}
                <div style={{display: 'flex', flexDirection: 'column', padding: '10px 20px'}}>
                    <span style={{...TextStyles.bodyText, color: ColorConst.separatorGray, display: 'flex', alignItems: 'center'}}>
                        {'Delivery Status'}
                    </span>
                    <a><u>{order.deliveryLink}</u></a>
                </div>
            </div>
        )
    }
}

CompleteOrderDetailView.defaultProps = {
    order: {
        number: '10938819A',
        orderStatus: 'Processing',
        address: '3920 Scarlet St. Moonville, Ecolomo Subd, Manila, Philippines 3920 Scarlet St. Moonville, Ecolomo Subd, Manila, Philippines 3920 Scarlet St. Moonville, Ecolomo Subd, Manila, Philippines 3920 Scarlet St. Moonville, Ecolomo Subd, Manila, Philippines',
        deliveryLink: 'http://checkyourdelivery.com'
    }
}

export default CompleteOrderDetailView;