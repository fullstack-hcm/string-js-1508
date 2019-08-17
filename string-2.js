/**
 * substring, slice, substr
 */
const strTemp = 'hello mernstack 1508';
console.log(strTemp.length);

const substringStr = strTemp.substring(6, -15);
// 6, -15 => 6, 0 => 0, 6
console.log(substringStr);

const sliceTemp    = strTemp.slice(0, -15)
/**
 * stop = 20 - Math.abs(-15) = 5
 */
console.log(sliceTemp);
// -------

const substrTemp   = strTemp.substr(6, 9);
console.log(substrTemp);