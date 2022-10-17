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
 let one = s1.split('').sort();
 let two = s2.split('').sort();
 

  let i = one.length, j = two.length;
while (i > 0 && j > 0) {
    i--;
    j--;
    if (one[i] > two[j]) j++;
    else if (one[i] < two[j]) i++;
    else count ++;
}
  return count;
}

module.exports = {
  getCommonCharacterCount
};
