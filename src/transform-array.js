const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  
  if (arr instanceof Array ){ 
  let res=[...arr]
  if (res.length === 0) return res;
  let resultresay = [];
  let isDiscardNext;

  for (let i = 0; i < res.length; i++) {   

    if (res[i] === "--discard-next") {   
      isDiscardNext = true; 					

    } else if (res[i] === "--discard-prev") {   
      if (res[i - 2] && res[i - 2] === "--discard-next") {        
        continue;  
      } else if (res[i - 1]) {  
        resultresay.pop(); 	
      }

    } else if (res[i] === "--double-next") {      
      if (res[i + 1]) {		
        resultresay.push(res[i + 1]); 
      }

    } else if (res[i] === "--double-prev") {      
		if (res[i - 2] && res[i - 2] === "--discard-next") {      
			continue;  
    } else if (res[i - 1]) {        
        resultresay.push(res[i - 1]); 
      }

    } else {      
      if (isDiscardNext === true) {        
        isDiscardNext = false; 
      } else {        
        resultresay.push(res[i]);
      }
    }
  }
  return resultresay;
}else{
  throw new Error("'arr' parameter must be an instance of the Array!");
}
}


module.exports = {
  transform
};
