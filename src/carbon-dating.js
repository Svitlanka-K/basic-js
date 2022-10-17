const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {
if (typeof(sampleActivity) !== 'string') {return false}
  if (sampleActivity == 'undefined') {return false}
 else if (isNaN(Number(sampleActivity))) {return false} 
 else if (Number(sampleActivity) >= 9000) {return false}
 else if (Number(sampleActivity) <= 0) {return false}
  else {
   let k = 0.693 / HALF_LIFE_PERIOD;
     T = Math.log(MODERN_ACTIVITY / +sampleActivity) / k;
   return Math.round(T) > 0 ? Math.round(T) : false;
 } 
}

module.exports = {
  dateSample
};
