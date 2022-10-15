const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
 function encodeLine( str ) {
  let arr=str.split('')
let res=[]
let res2=[]
let count=1
for (var i = 0; i < arr.length; ++i){
   if(arr[i]===arr[i+1]){
    count++
  }else{res.push(count, arr[i])
  count=1}
}
for (var i = 0; i < res.length; ++i){
  if(res[i]!==1){
    res2.push(res[i])
}

}
return res2.join('')
}



module.exports = {
  encodeLine
};
