import React from 'react';
import lodash from 'lodash';

/**
 * ValidationHelper is a helper class that contains methods to verify if input values
 * (input type or contents) are correct.
 */

/**
 * Check if number (or number string) is a valid non-zero number.
 * @param {number} number 
 * @return {boolean} return false if conditions are not met for non-zero number
 */
function isNonZeroNumber(number) {
    return (number !== null && !isNaN(Number(number)) && Number(number) !== 0);
}

/**
 * Check if number (or number string) is a valid number.
 * @param {number} number 
 * @return {boolean} return false if conditions are not met for non-zero number
 */
function isNumber(number) {
    return (number !== null && !isNaN(Number(number)));
}

/**
 * Check if input string value is a string type.
 * @param {String} string 
 * @return {boolean} return false if value is not a string.
 */
function isString(string) {
    return (typeof string === 'string');
}

/**
 * @private
 * Remove all non-numeric non-decimal place characters from input string value and
 * remove/keep the first dash/negative sign (-) depending on keepNegativeSign value.
 * @param {string} value string value to remove all non-numeric/-decimal characters from
 * @param {Boolean} keepNegativeSign indicator to keep first character if it is dash (-) if true
 * @return {value} return value with non-numeric non decimal characters removed
 */
function _removeNonNumber(value, keepNegativeSign = false) {
    if(!isString(value)) {
        console.warn('attempting to use non-number filter on a non-string, this cannot be done using _removeNonNumber');
        return value; //do not attempt to invoke .replace/.startsWith on a non-string value
    }
    if(keepNegativeSign) {
        value = (value.startsWith('-')) ? `-${value.replace(/[^\d.]/g,'')}` : value.replace(/[^\d.]/g,''); //remove non-numeric/non-period
    } else {
        value = value.replace(/[^\d.]/g,''); //remove non-numeric/non-period
    }
    //remove all periods except first (decimal place);
    value = value.replace(/^(\d+\.)([\d.]*)$/, function(fullStr,lhsStr,rhsStr) {
        return lhsStr+rhsStr.replace(/\./g,'');
    });
    return value;
}

/**
 * Remove all non-numeric non-decimal place characters from input string value.
 * @param {string} value 
 * @return {value} return value with non-numeric non decimal characters removed
 */
function removeAllNonNumeric(value) {
    return _removeNonNumber(value);
}

let ValidationHelper = {
    isNonZeroNumber,
    isNumber,
    isString,
    removeAllNonNumeric,
};

export default ValidationHelper;