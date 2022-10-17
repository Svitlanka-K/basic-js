const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
function deleteDigit(n) {
  
  let arr = String(n).split('');

  let sortArr = arr.sort(function (a, b) { return a-b; });
  
  return sortArr[0];
}

module.exports = {
  deleteDigit
};
