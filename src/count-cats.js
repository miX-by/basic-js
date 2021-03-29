const CustomError = require("../extensions/custom-error");

// module.exports = function countCats(matrix) {
//   let newArray = matrix.flat();
//   console.log(newArray);
// };

module.exports = function countCats(matrix) {
  let newArray = matrix.flat();
  let counter = 0;

  for (let elem of newArray) {
    if (elem == "^^") {
      counter++;
    }
  }
  return counter;
};
