import React from 'react';
import lodash from 'lodash';
import {isMobile} from 'react-device-detect';

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

function getYoutubeLinkAsFrame(link) {
    console.log('link', link);
    const links = link.match(/<\s*a[^>]*>(.*?)<\s*[/]\s*a>/ig);
    console.log('links: ', links);
    if (!links) {
      return {text: link}
    }
    for (var i in links) {
        var url = links[i];
        // check youtube
        var args = link.match(/https?\:\/\/www\.youtube\.com\/watch\?v=([a-z0-9_-]+)/i);
        // is youtube
        if(args) {
            if ((args || [])[1]) {
                const text = link.replace(/<\s*a[^>]*>(.*?)<\s*[/]\s*a>/ig, "")
                const height = isMobile ? 210 : 385;
                const youtube = `<iframe src="https://www.youtube.com/embed/${args[1]}" style="width: 100%; height: ${height}px;" frameBorder="0" allowFullScreen></iframe>`
                return {text, youtube}
            } else {
                return {text: link}
            }
        } else {
            return {text: link}
        }
    }
}

let ValidationHelper = {
    isNonZeroNumber,
    isNumber,
    isString,
    removeAllNonNumeric,
    getYoutubeLinkAsFrame
};

export default ValidationHelper;
