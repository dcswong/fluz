import React from 'react';

export default class extends React.Component {
    constructor (props) {
        super(props);
        if (process.env.NODE_ENV == 'local') {
            if (this.props.checked != undefined && this.props.defaultChecked != undefined) {
                console.warn('Checkbox props has "checked" and "defaultChecked" at the same time');
            }
        }
        this.state = {
            checked: this.props.checked || this.props.defaultChecked || false
        }
    }

    // ---------------------- public methos ------------------------
    toggleCheckbox (e) {
        if (this.props.checked == undefined) {
            //use defauleChecked
            this.setState({
                checked: !this.state.checked
            }, ()=>{
                $(this.refs.checkbox).prop('checked', this.state.checked);
                this.props.onChange && this.props.onChange({ target: $(this.refs.checkbox)[0] })
            })
        } else {
            //use checked
            $(this.refs.checkbox).prop('checked', !this.props.checked);
            this.props.onChange && this.props.onChange({ target: $(this.refs.checkbox)[0] })
        }
    }

    // ----------------------- event handler ------------------------



    // --------------------- react life cycle -----------------------
    render () {
        var checked = this.props.checked == undefined ? this.state.checked : this.props.checked;
        return (
            <div className={"mar-checkbox" + (checked ? ' checked' : '') + (this.props.className ? ' '+this.props.className : '')} onClick={e => this.toggleCheckbox(e)}>
                <input type="checkbox" name={this.props.name || undefined} ref="checkbox" value={this.props.value} checked={checked} onChange={()=>{}}/>
                <img src="/assets/imgs/icons/tick_white.svg" className="checkbox-tick"/>
            </div>
        )
    }
}
