const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(arr) {
  let count=0
let arr2=arr.flat()

for(let i=0; i<arr2.length;i++){
  if(arr2[i]==='^^'){
    count++
  }
}
return count
}

module.exports = {
  countCats
};
