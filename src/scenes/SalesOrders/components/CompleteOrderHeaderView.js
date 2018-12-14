import React, {Component} from 'react';

import UIHelper from '../../../helpers/UIHelper';
import TextStyles from '../../../styles/TextStyles';
import ColorConst from '../../../styles/ColorConst';
import './styles.css';

class CompleteOrderHeaderView extends Component {
    
    constructor(props) {
        super(props);

        this.state = {
        }

    }

    render() {

        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    {UIHelper.renderSVG('check-circle', {height: 40})}
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <span style={{...TextStyles.headingThree, color: ColorConst.textBlue}}>
                        {"Order is complete!"}
                    </span>
                </div>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'center'}}>
                    <span style={{...TextStyles.bodyText, color: ColorConst.textBlue, width: "30%", textAlign: 'center'}}>
                        {"Please wait for a couple of days for the item to be delivered."}
                    </span>
                </div>
            </div>
        )
    }
}

export default CompleteOrderHeaderView;