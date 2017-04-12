/**
 * Trim the string by the given length on both sides
 *
 * @param {string} value
 * @param {number} length
 * @return {string}
 */
module.exports = function(value, length) {
    return value.substr(length, value.length - (length + length));
};
