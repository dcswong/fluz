import React from 'react';

import Checkbox from './checkbox';

/*
props:
    value
    defaultValue
    onChange: ({ target: {name, value}, originalTarget }) {}
    className: wrapper className
    id
    name
    withArrow
    small
    onSearch: (e) => {}

option props:
    value,
    children (string),
    data-keywords (optional)
*/

export default class SelectPicker extends React.Component {
    constructor (props) {
        super(props);

        this.state = {
            filter: '',
            value: this.getInitialValue( (this.props.value == undefined ? this.props.defaultValue : this.props.value), this.props )
        }
        this.setFilter = this.setFilter.bind(this);
    }

    // ---------------------- public methos ------------------------


    // ----------------------- event handler ------------------------

    //to update state (if use defaultValue), and trigger onChange
    clickedOption (e) {
        e.preventDefault();
        e.stopPropagation();
        var value = this.props.multiple ? this.toggleValue($(e.currentTarget).attr('data-value')) : $(e.currentTarget).attr('data-value');
      //  console.log('new Value:', value);
        if (this.props.value == undefined) {
            //use defaultValue
            this.setState({
                value
            }, () => {
                this.props.onChange && this.props.onChange({
                    target: {
                        name: $(this.refs.select)[0].name,
                        value: $(this.refs.select).val()
                    },
                    originalTarget: $(this.refs.select)[0]
                });
            });
        } else {
            //use value
            this.props.onChange && this.props.onChange({
                target: {
                    name: this.props.name || undefined,
                    value
                },
                originalTarget: $(this.refs.select)[0]
            });
        }



    }

    //to limit dropdown menu height to specified size
    afterDropdownShow (e) {
        if (this.props.size != undefined) {
            //limit dropdown menu size
            var size = parseInt(this.props.size || 0);
            var menu = $(this.refs.dropdown).children('.dropdown-menu');
            var options = $(menu).find('.mar-selectpicker-option')
            //if length exceed size
            if (options.length > size) {
                //get precise height of option
                var optionHeight = options[0].getBoundingClientRect().height;
                //calculate menu height
                var menuHeight = optionHeight * size + parseFloat(menu.css('padding-top'));
                // //check if include search box
                if (this.props.filter) {
                  //include height of search input
                  menuHeight += menu.children('.form-control').outerHeight(true);
                }
                //set menu height
                menu.css({ height: menuHeight + 'px' })
                if (this.state.value != null && (!Array.isArray(this.state.value) || this.state.value.length)) {
                    //scroll to selected value
                    var selected = menu.find(`[data-value="${Array.isArray(this.state.value) ? this.state.value[0] : this.state.value}"]`);
                    //if selected exists
                    if (menu && selected.length) {
                      var optionWrapper = this.props.filter ? menu.children('.search-results')[0] : menu[0]
                      optionWrapper.scrollTop = optionWrapper.scrollTop + selected.position().top - ( Math.floor(size/2) * optionHeight )
                    }
                }
            }
        }
    }

    //set filter
    setFilter (e) {
        this.setState({ filter: e.target.value });
    }


    // ------------------------ helper method -----------------------

    //return { labels, values, firstLabel, firstValue }
    //get array of options with properties { value, label }
    getOptions (props) {
        props = props || this.props;
        return React.Children.map(props.children, child => child && child.type == 'option' ? ({
            value: (child.props.value != undefined ? child.props.value : child.props.children).toString(),
            label: child.props.children
        }) : null).filter(opt => opt)
    }

    //get actual value according to options and value
    //multiple: null / array;
    //not multiple: selected value / first value / null
    getInitialValue (value, props) {
        props = props || this.props;
        var options = this.getOptions (props);
        if (!this.props.multiple) {
            //single value
            //selected value || first value || null
            // return (options.find(option => option.value == value) || options[0] || { value: null }).value
            var placeholder = this.props.placeholder || this.props.title;
            return (options.find(option => option.value == value) || (placeholder ? { value: '' } : options[0]) || { value: '' }).value
        } else {
            //array of value
            //filter out values not available
            value = (value||[]).map( v => (options.find(option => option.value == v) || { value: null }).value ).filter(v => v);
            //null if nothing available
            return value.length ? value : null;
        }
    }

    //map value to text shown on button
    mapValueToText (value) {
        var options = this.getOptions();
        if (value == null) {
            return ''
        } else if (Array.isArray(value)) {
            return value.map(v => (options.find(option => option.value == v.toString()) || {label: ''}).label).join(', ');
        } else {
            return (options.find(option => option.value == value.toString()) || {label: ''}).label;
        }
    }

    //toggle value if multiple select picker, and return new value of select picker
    toggleValue (value) {
        var original = (this.props.value == undefined ? this.state.value : this.props.value);
        var options = this.getOptions();
        var newValue = options.map(option => {
            //if that option orginally checked
            var checked = (original||[]).findIndex(v => v.toString() == option.value.toString()) > -1;
            //new checked
            checked = (option.value.toString() == value.toString()) ? !checked : checked;
            return checked ? option.value : null
        }).filter(v => v);
        return newValue.length ? newValue : null
    }




    // --------------------- react life cycle -----------------------
    componentDidMount () {
        $(this.refs.dropdown).on('shown.bs.dropdown', (e) => this.afterDropdownShow(e));

        var menu = $(this.refs.dropdown).children('.dropdown-menu');
        menu.on('scroll', (e)=>{
            if(menu.scrollTop() + menu.innerHeight() >= menu[0].scrollHeight) {
                // console.log('menu reach bottom');
                this.props.onReachBottom && this.props.onReachBottom(e);
            }
        })
    }
    //can be change value or options
    componentWillReceiveProps (nextProps) {
        this.setState({ value: this.getInitialValue( (this.props.value == undefined ? this.state.value : nextProps.value), nextProps ) });
    }
    render () {
        // console.log('this.props', this.props);

        //set <select> value and text shown on button
        var value = this.state.value;
        var button = this.mapValueToText(value);
        // console.log('button:',button);

        //set width
        var style = {
            width: this.props.width
        }

        //set className
        var className = "mar-selectpicker";
        className += (this.props.className ? ' '+this.props.className : '');
        className += (this.props.multiple ? ' multiple' : '');
        className += (this.props.small ? ' small' : '');

        //set button className
        var buttonClass = "mar-selectpicker-toggle dropdown-toggle form-control";
        buttonClass += (this.props.disabled ? ' disabled' : '');
        buttonClass += (!button ? ' placeholder' : '');
        buttonClass += (this.props.withArrow ? ' with-arrow' : '');

        var showFilter = this.props.filter;

        var MenuWrapper = this.props.multiple ? 'form' : (showFilter ? 'div' : React.Fragment);
        var menuProps = showFilter ? {className: 'search-results'} : undefined;


        return (
            <div className={className} style={style}>
                <select id={this.props.id} name={this.props.name} className="mar-selectpicker-select" ref="select" value={this.props.multiple && value == null ? [] : value} onChange={()=>{}} multiple={this.props.multiple}>
                    {this.props.children}
                </select>
                <div className="dropdown" ref="dropdown">
                    <button type="button" className={buttonClass} data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" ref="button" title={button}>
                        <span className="dropdown-toggle-text">{button || this.props.placeholder || this.props.title || '---'}</span>
                    </button>
                    <div className={"dropdown-menu" + (showFilter ? ' show-filter' : '')}>
                        {showFilter ? (
                            <input className="form-control" value={this.state.filter} onChange={this.setFilter}/>
                        ) : null}
                        <MenuWrapper {...menuProps}>
                            {React.Children.map(this.props.children, (option, i) => {
                                //return null if not <option/>
                                if (!option || option.type != 'option') return null;
                                //get option value
                                var optionValue = option.props.value != undefined ? option.props.value : option.props.children;
                                //if filter
                                if (showFilter && this.state.filter) {
                                    //return null if not contain keywords
                                    if (!new RegExp(this.state.filter, 'i').test([option.props.value, option.props.children, option.props['data-keywords']].filter(n => n).join('|-|'))) {
                                        return null
                                    }
                                }
                                return (
                                    <div className="mar-btn mar-selectpicker-option" data-value={optionValue} key={`option-${i}`} onClick={e => this.clickedOption(e)}>
                                        {!this.props.multiple ? (
                                            option.props.children
                                        ) : (
                                            <React.Fragment>
                                                <span>{option.props.children}</span>
                                                <Checkbox checked={(value||[]).findIndex(id => id.toString() == optionValue.toString()) > -1}/>
                                            </React.Fragment>
                                        )}
                                    </div>
                                )
                            }).filter(option => option)}
                        </MenuWrapper>
                    </div>
                </div>
            </div>
        )
    }
}
