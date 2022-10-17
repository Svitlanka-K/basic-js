const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
function getCommonCharacterCount(s1, s2) {
 let count = 0;
 let arr1 = s1.split('').sort();
 let arr2 = s2.split('').sort();
 let arrayLen;

  console.log(arr1);
  console.log(arr2);
  
  arr1.length >= arr2.length ? arrayLen = arr1.length : arrayLen = arr2.length;
  
  for (let i = 0; i < arrayLen; i++) {
    if (arr1[i] === arr2[i]) {
      count++
    } else {count}
  }  
  return count;
}

module.exports = {
  getCommonCharacterCount
};
