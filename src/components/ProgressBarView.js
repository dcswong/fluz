import React, {Component} from 'react';

import UIHelper from '../helpers/UIHelper';
import TextStyles from '../styles/TextStyles';
import ColorConst from '../styles/ColorConst';
import './styles.css';
import lodash from 'lodash';


class ProgressBarView extends Component {
    constructor(props) {
        super(props);
        this.state = {
        }
    }

    render() {
        let {totalPart, currentPartIndex} = this.props;

        let noOfParts = totalPart.length;
        let currentPart = totalPart[currentPartIndex];
        
        return(
            <div style={{display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: "0px 60px", width: '100%'}}>
                <span style={{...TextStyles.headingOne}}>
                    {'Check Out'}
                </span>
                <div style={{display: 'flex', flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center', margin: "20px 0px 10px 0px", width: '100%', border: `solid 1px ${ColorConst.gray}`}}>
                    {lodash.map(totalPart, (part, index) => {
                        return <div key={`${index}`} style={{flex: 1, height: 2.5, margin: 2, backgroundColor: (currentPartIndex >= index) ? ColorConst.lightBlue : ColorConst.gray}}></div>
                    })}
                </div>
                <span style={{...TextStyles.headingThreeHalf, ...TextStyles.italicText, color: ColorConst.textBlue}}>
                    {`${currentPartIndex + 1} out of ${noOfParts} - ${currentPart.name}`}
                </span>
            </div>
        )
    }
}

export default ProgressBarView;