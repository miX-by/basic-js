const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(reverse = true) {
    this.reverse = reverse;
    this.en = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
    this.square = [];
    this.genSqViz();
  }

  genSqViz() {
    for (var i = 0; i < this.en.length; i++) {
      this.square[i] = this.en.slice(i).concat(this.en.slice(0, i));
    }
  }

  addKeyword(keyword, str) {
    keyword = keyword.split("");
    breakPoint: for (let j = 0; j < keyword.length; j++) {
      for (let i = keyword.length; i < str.length; i++) {
        keyword.push(keyword[j]);
        continue breakPoint;
      }
    }
    keyword = keyword.join("");
    return keyword;
  }

  encrypt(str, keyword) {
    if (!str || !keyword) throw "Error";
    let result = "";
    if (str.length > keyword.length) {
      keyword = this.addKeyword(keyword, str);
    }
    for (let j = 0; j < keyword.length; j++) {
      for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[0-9 !,\.:\)\^@#\$\(\/|\*\-&%]/)) {
          result += str[i];
        } else {
          result += this.square[this.en.indexOf(str[i].toUpperCase())][
            this.en.indexOf(keyword[j].toUpperCase())
          ];
          j++;
        }
      }
      break;
    }
    if (!this.reverse) return result.split("").reverse().join("");
    return result;
  }

  decrypt(str, keyword) {
    if (!str || !keyword) throw "Error";
    let result = "";
    if (str.length > keyword.length) {
      keyword = this.addKeyword(keyword, str);
    }
    for (let j = 0; j < keyword.length; j++) {
      for (let i = 0; i < str.length; i++) {
        if (str[i].match(/[0-9 !,\.:\)\^@#\$\(\/|\*\-&%]/)) {
          result += str[i];
        } else {
          let row = this.en.indexOf(keyword[j].toUpperCase());
          let coll = this.square[row].indexOf(str[i]);
          result += this.en[coll];
          j++;
        }
      }
      break;
    }
    if (!this.reverse) return result.split("").reverse().join("");
    return result;
  }
}

module.exports = VigenereCipheringMachine;

module.exports = VigenereCipheringMachine;
