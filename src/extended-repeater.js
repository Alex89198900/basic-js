const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater( str, options ) {
  let res=[]
  
let re=options.repeatTimes
let sep=options.separator
let add=options.addition
let addtime=options.additionRepeatTimes
let addsep=options.additionSeparator



if(typeof str!=='string'||str===null){
  str=String(str)
}
if(add||add===false||add===null){

  add=String(add)

}



if(!sep){
  sep='+'
}
if(!add){
  add=''
}
if(!addsep){
  addsep='|'
}
let res2=[]
if(addtime){
  res2.push(add)
  
  for(let i=0; i<addtime-1;i++){
    if(addsep){
      res2.push(`${addsep}${add}`)
  }
  
}
add=res2.join('')
}
if(re){
for(let i=0; i<re;i++){
  
    res.push(`${str}${add}${sep}`)
  
}
}else{
  res.push(`${str}${add}${sep}`)
  
}
res= res.join('')
res = res.substring(0, res.length - sep.length);
return res
}


module.exports = {
  repeater
};
