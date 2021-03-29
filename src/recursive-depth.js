const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  constructor() {
    this.depth = 1;
    this.maxDepth = 1;
  }
  calculateDepth(arr) {
    if (!arguments[1]) {
      this.depth = 1;
      this.maxDepth = 1;
    }
    arr.forEach((element) => {
      if (Array.isArray(element)) {
        this.depth++;
        this.calculateDepth(element, true);
      }
    });
    this.maxDepth = this.depth > this.maxDepth ? this.depth : this.maxDepth;
    this.depth--;
    return this.maxDepth;
  }
};
