import React from 'react';

export default class RatioWrapper extends React.Component {
    render () {
        var {ratio, maxHeight, minHeight, wrapperClassName, ...props} = this.props;
        var style = {
            maxHeight,
            minHeight
        }
        var paddingStyle = {
            paddingTop: ratio || '40%'
        }
        props.className = (props.className || '') + ' ratio-wrapper-body'

        return (
            <div className={"ratio-wrapper" + (wrapperClassName ? ' '+wrapperClassName : '')} style={style}>
                <div className="ratio-wrapper-padding" style={paddingStyle}/>
                <div {...props}/>
            </div>
        )
    }
}
