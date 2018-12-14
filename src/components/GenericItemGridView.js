import React, {Component} from 'react';

import UIHelper from '../helpers/UIHelper';
import TextStyles from '../styles/TextStyles';
import ColorConst from '../styles/ColorConst';
import './styles.css';
import lodash from 'lodash';

class GenericItemGridView extends Component {

    constructor(props) {
        super(props);

        this.state = {
            isRenderAll: false
        }
    }

    checkIsShowViewAll() {
        let {title, noOfRow, noOfColumn, data} = this.props;
        let itemsLength = data.length;
        let isShowViewAll = (itemsLength - (noOfColumn * noOfRow)) > 0;
        return isShowViewAll;
    }

    onViewAllClick() {
        this.setState(prevState => ({
            isRenderAll: !prevState.isRenderAll
        }))
    }

    componentDidMount() {
    }

    render() {
        let {title, noOfRow, noOfColumn, data, containerStyles, titleStyles, isLargePadding} = this.props;
        let isShowViewAll = this.checkIsShowViewAll();
        return (
            <div id={`genericItemGridView - ${title}`}
                style={containerStyles || {paddingLeft: 15, paddingRight: 15, paddingTop: 50}}>
                <div style={{
                        display: 'flex', 
                        flexDirection: 'row',
                        justifyContent: 'space-between',
                        alignContent: 'flex-end',
                        paddingBottom: isLargePadding ? 15 : 5}}>
                    <div style={titleStyles || {...TextStyles.headingFour}}>
                        {`${title}`}
                    </div>
                    <div style={{...TextStyles.headingFour, color: ColorConst.skyBlue}}
                        onClick={() => {
                            this.onViewAllClick()
                        }}>
                        {isShowViewAll && `View All`}
                    </div>
                </div>
                {this.renderItemGrid()}
            </div>
        )
    }

    renderItemGrid() {
        let {noOfRow, noOfColumn, data} = this.props;
        let {isRenderAll} = this.state;
        
        let itemsLength = data.length;
        let noOfTotalRows = 0;
        let limitRow = 0
        if(itemsLength) {
            noOfTotalRows = parseInt(itemsLength/4) + 1;
            limitRow = isRenderAll ? noOfTotalRows : noOfRow;
        }

        let itemGrid = [];
        for(let row = 0; row < limitRow; row++) {
            itemGrid.push(this.renderItemRow(row))
        }
        return (
            <div style={{display: 'flex', flexDirection: 'column'}}>
                {itemGrid}
            </div>
        );
    }

    renderItemRow(row) {
        let {noOfRow, noOfColumn, data, isLargePadding} = this.props;
        let {isRenderAll} = this.state;
        let offset = row * noOfColumn;
        let items = []
        for(let column = 0; column < noOfColumn; column++) {
            let flexStyle = 'center';
            if(column == 0) {
                flexStyle = 'flex-start';
            } else if(column + 1 == noOfColumn) {
                flexStyle = 'flex-end';
            }

            if(data[column + offset]) {
                items.push(this.props.renderItem(data[column + offset], column + offset, flexStyle))
            } else {
                items.push(this.props.renderItem(null, column + offset, flexStyle))
            }
        }
        return (
            <div key={`${row}`} 
                style={{
                    display: 'flex', 
                    flexDirection: 'row', 
                    justifyContent: 'space-between',
                    paddingBottom: isLargePadding ? 20 : 10
                }}>
                {items}
            </div>
        )
    }
}

GenericItemGridView.defaultProps = { 
    isLargePadding: true
}
export default GenericItemGridView;