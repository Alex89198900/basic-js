const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */
 class DepthCalculator {
  constructor() {
      this.deep = 1;
      this.currentDeep = 1;
  }
  calculateDepth(arr) {
    this.deep = 0;
    arr.forEach((el) => {
      if (Array.isArray(el)) {
        this.deep= Math.max(this.deep, this.calculateDepth(el));
       
      }
    })
    return 1+ this.deep;
  }
};
module.exports = {
  DepthCalculator
};
