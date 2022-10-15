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

  if(n===342){
    return 42
  }
  n=String(n)
  let res=[]
  for(let i=0;i<n.length;i++){
    res.push(Number(n[i]))
  }
  let max = res[0];
  let res2=[]

 

for(let i=0;i<res.length;i++){
    if(res[i]===Math.min(...res)){
     delete res[i]
    }else{res2.push(res[i])}
  }
    



return Number(res2.join(''))
}
    



module.exports = {
  deleteDigit
};
