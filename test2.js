let strTemp2 = `hello mernstack, hello everybody`;
/**
 * VIẾT FUNC replaceAll
 * hello => hi
 * output: 'hi mernstack, hi everybody'
 */
const replaceAll = function (content, keyOld, keyNew) {
    var newContent = content;
    while(newContent.includes(keyOld)){
        newContent = newContent.replace(keyOld, keyNew);
    }
    return newContent;
}
let newContent = replaceAll(strTemp2, 'hello', 'hi');

console.log(newContent);