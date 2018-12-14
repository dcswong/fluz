import React from 'react';
import {DropdownButton, MenuItem, InputGroup, FormControl, Button} from 'react-bootstrap';
import ReactTelInput from 'react-telephone-input'
import ColorConst from '../styles/ColorConst';
import TextStyles from '../styles/TextStyles';
/**
 * function to render a line for separate components
 * @param {object} extraStyles
 */
function renderLineSeparator(extraStyles = {}) {
    return (
        <div style={{width: '100%', height: 1, backgroundColor: ColorConst.gray, ...extraStyles}}/>
    )
}
/**
 * function to render svg icon
 * @param {string} name name of the .svg
 * @param {object} extraStyles custome style
 */
function renderSVG(name, extraStyles={}) {
    const iconPath = '/assets/imgs/icons/';
    if(!name) {
        return;
    }

    return (
        <img src={`${iconPath}${name}.svg`}
            style={extraStyles} />
    )
}

/**
 * function to render input box with label type text
 * @param {string} label the display label of the question
 * @param {string} field name of which field to update
 * @param {string} value default value of the input
 * @param {bool} isShowColumn control the flexDirection
 * @param {func} callback (@param field, @param value) callback function when update the value
 * @param {obj} extraStyles extra style of the container
 */
function renderLabelTextInput(label, field, value = '', callback = console.log('renderLabelTextInput'), isShowColumn = true, extraStyles, placeHolder) {
    if(isShowColumn) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', flex: 1, ...extraStyles}}>
                <span style={{...TextStyles.headingFour, color: ColorConst.darkGray, paddingBottom: 3}}>{label}</span>
                <input
                    type="text"
                    style={{border: `solid 1px ${ColorConst.gray}`,
                        borderRadius: 5,
                        padding: 10,
                        ...TextStyles.headingThreeHalf,
                        color: ColorConst.textBlue
                    }}
                    placeholder={placeHolder}
                    defaultValue={value}
                    onChange={(event) => {
                        let inputValue = event.target.value;
                        callback(field, inputValue)
                    }}
                />
            </div>
        )
    } else {
        return (
            <div>
                <span>{label}</span>
            </div>

        )
    }
}

/**
 * function to render input box with label type number
 * @param {string} label the display label of the question
 * @param {string} field name of which field to update
 * @param {string} value default value of the input
 * @param {func} callback (@param field, @param value) callback function when update the value
 * @param {bool} isShowColumn control the flexDirection
 * @param {obj} extraStyles extra style of the container
 */
function renderLabelNumberInput(label, field, value = '', callback = console.log('renderLabelTextInput'), isShowColumn = true, extraStyles = {}) {
    if(isShowColumn) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', flex: 1, ...extraStyles}}>
                <span style={{...TextStyles.headingFour, color: ColorConst.darkGray, paddingBottom: 3}}>{label}</span>
                <input
                    type="number" 
                    style={{border: `solid 1px ${ColorConst.gray}`,
                        borderRadius: 5,
                        padding: 10,
                        ...TextStyles.headingThreeHalf,
                        color: ColorConst.textBlue
                    }}
                    defaultValue={value}
                    onChange={(event) => {
                        let inputValue = event.target.value;
                        callback(field, inputValue)
                    }}
                />
            </div>
        )
    } else {
        return (
            <div>
                <span>{label}</span>
            </div>

        )
    }
}

/**
 * function to render input box with label type number
 * @param {string} label the display label of the question
 * @param {string} field name of which field to update
 * @param {string} value default value of the input
 * @param {func} callback (@param field, @param value) callback function when update the value
 * @param {bool} isShowColumn control the flexDirection
 * @param {obj} extraStyles extra style of the container
 */
function renderLabelPhoneInput(label, field, value = '', callback = console.log('renderLabelTextInput'), isShowColumn = true, extraStyles = {}) {
    if(isShowColumn) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
                <span style={{...TextStyles.headingFour, color: ColorConst.darkGray, paddingBottom: 3}}>{label}</span>
                <div>
                    <ReactTelInput
                        defaultCountry="in"
                        flagsImagePath='/assets/imgs/flags.png'
                        autoFormat={true}
                    />
                </div>
            </div>
        )
    } else {
        return (
            <div>
                <span>{label}</span>
            </div>

        )
    }
}

/**
 * function to render checkbox with label type bool
 * @param {string} label the display label of the question
 * @param {string} field name of which field to update
 * @param {bool} value default value of the input
 * @param {bool} isShowColumn control the flexDirection
 * @param {func} callback (@param field, @param value) callback function when update the value
 * @param {obj} extraStyles extra style of the container
 */
function renderLabelCheckbox(label, field, value = false, callback = console.log('renderLabelCheckbox'), isShowColumn = true, extraStyles = {}) {
    if(isShowColumn) {
        return (
            <div style={{display: 'flex', flexDirection: 'column', flex: 1}}>
            </div>
        )
    } else {
        return (
            <div style={{display: 'flex', flexDirection: 'row', flex: 1, alignItems: 'center'}}>
                <div style={{border: `solid 1px ${ColorConst.gray}`, borderRadius: 4, height: 16, width: 16}}>
                    <input
                        type="checkbox"
                        defaultChecked={value}
                        onChange={(event) => {
                            let inputValue = event.target.value;
                            callback(field, inputValue)
                        }}
                        style={{position: 'relative', top: -3, left: 1}}
                    />
                </div>
                <span style={{...TextStyles.headingFour, color: ColorConst.darkGray, paddingLeft: 5}}>{label}</span>
            </div>

        )
    }

}
const UIHelper = {
    renderSVG,
    renderLineSeparator,
    renderLabelTextInput,
    renderLabelNumberInput,
    renderLabelPhoneInput,
    renderLabelCheckbox
}

export default UIHelper;