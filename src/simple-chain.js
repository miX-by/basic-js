const CustomError = require("../extensions/custom-error");

const chainMaker = {
  arr: [],
  getLength() {
    return this.arr.length;
    this.arr = [];
  },
  addLink(value) {
    this.arr.push(String(value));
    return this;
  },
  removeLink(position) {
    if (
      typeof position === "string" ||
      position < 1 ||
      position > this.arr.length
    ) {
      this.arr = [];
      throw "Error";
    }
    this.arr.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.arr.reverse();
    return this;
  },
  finishChain() {
    let result = this.arr.join(" )~~( ");
    this.arr = [];
    return "( " + result + " )";
  },
};

module.exports = chainMaker;
