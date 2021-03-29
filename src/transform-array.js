const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  if (!Array.isArray(arr)) throw "Error";
  let result = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "--discard-next") {
      if (i + 1 >= arr.length) break;
      i++;
      continue;
    }
    if (arr[i] === "--discard-prev") {
      if (i - 1 < 0 || arr[i - 2] === "--discard-next") continue;
      result.pop();
      continue;
    }
    if (arr[i] === "--double-next") {
      if (i + 1 >= arr.length) break;
      result.push(arr[i + 1]);
      continue;
    }
    if (arr[i] === "--double-prev") {
      if (i - 1 < 0 || arr[i - 2] === "--discard-next") continue;
      result.push(arr[i - 1]);
      continue;
    }
    result.push(arr[i]);
  }
  return result;
};
