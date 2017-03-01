/**
 * Trim the string by the given length on both sides
 *
 * @param {String} value
 * @param {Number} length
 * @return {String}
 */
module.exports = function(value, length) {
    return value.substr(length, value.length - (length + length));
};
